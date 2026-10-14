/**
 * Booking API — the only server code on the site.
 *
 * Deployed as the Worker script in front of Cloudflare Static Assets, but it
 * runs ONLY for `/api/*` (`assets.run_worker_first` in wrangler.jsonc). Every
 * page, image and video is still served straight from the edge cache without
 * invoking this code, so page speed is unchanged.
 *
 * Routes
 *   POST /api/booking/order   validate details → create a ₹1,000 Razorpay order
 *   POST /api/booking/verify  check signature + payment with Razorpay →
 *                             capture if needed → return the Calendly link
 *
 * Secrets (set with `npx wrangler secret put <NAME>`; never commit them):
 *   RAZORPAY_KEY_ID       rzp_live_… (or rzp_test_… while testing)
 *   RAZORPAY_KEY_SECRET   the matching secret
 *   CALENDLY_URL          e.g. https://calendly.com/auravonai/project-call
 * Optional:
 *   ALLOWED_ORIGINS       comma-separated; defaults to the production origins
 */

interface Env {
  ASSETS: { fetch(request: Request): Promise<Response> };
  RAZORPAY_KEY_ID: string;
  RAZORPAY_KEY_SECRET: string;
  CALENDLY_URL: string;
  ALLOWED_ORIGINS?: string;
}

const AMOUNT_PAISE = 1000 * 100; // ₹1,000 — keep in sync with BOOKING_FEE_INR in src/lib/pricing.ts
const DEFAULT_ORIGINS = ['https://auravonai.com', 'https://www.auravonai.com'];
const RZP = 'https://api.razorpay.com/v1';

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const fail = (error: string, status = 400) => json({ error }, status);

function originAllowed(request: Request, env: Env): boolean {
  const origin = request.headers.get('Origin');
  if (!origin) return false;
  const allowed = env.ALLOWED_ORIGINS
    ? env.ALLOWED_ORIGINS.split(',').map((s) => s.trim())
    : DEFAULT_ORIGINS;
  return (
    allowed.includes(origin) ||
    origin.startsWith('http://localhost:') ||
    origin.startsWith('http://127.0.0.1:')
  );
}

function rzpAuth(env: Env) {
  return 'Basic ' + btoa(`${env.RAZORPAY_KEY_ID}:${env.RAZORPAY_KEY_SECRET}`);
}

async function rzp<T>(env: Env, path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${RZP}${path}`, {
    ...init,
    headers: {
      Authorization: rzpAuth(env),
      'Content-Type': 'application/json',
      ...(init.headers || {}),
    },
  });
  const data = (await res.json()) as T & { error?: { description?: string } };
  if (!res.ok) throw new Error(data.error?.description || `Razorpay ${res.status}`);
  return data;
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const sig = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(message));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

const clip = (v: unknown, n: number) => String(v ?? '').trim().slice(0, n);

async function createOrder(request: Request, env: Env) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return fail('Invalid request.');

  const name = clip(body.name, 80);
  const email = clip(body.email, 120);
  const phone = clip(body.phone, 20);
  const service = clip(body.service, 60);
  const budget = clip(body.budget, 40);
  const platform = body.platform === 'Microsoft Teams' ? 'Microsoft Teams' : 'Google Meet';

  if (name.length < 2) return fail('Please enter your name.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return fail('Please enter a valid email.');
  if (phone.replace(/\D/g, '').length < 8) return fail('Please enter a valid phone number.');
  if (!service) return fail('Please choose a service.');

  // Razorpay notes: max 15 keys, 256 chars each. These travel with the
  // payment, so the dashboard shows who booked and for what.
  const order = await rzp<{ id: string; amount: number; currency: string }>(env, '/orders', {
    method: 'POST',
    body: JSON.stringify({
      amount: AMOUNT_PAISE,
      currency: 'INR',
      receipt: `book_${Date.now()}`,
      notes: {
        purpose: 'Project booking (refundable)',
        name,
        email,
        phone,
        company: clip(body.company, 80),
        service: clip(body.serviceLabel, 120) || service,
        budget,
        platform,
        brief: clip(body.brief, 250),
        ref: clip(body.ref, 60),
      },
    }),
  });

  return json({
    orderId: order.id,
    amount: order.amount,
    currency: order.currency,
    keyId: env.RAZORPAY_KEY_ID,
  });
}

async function verifyPayment(request: Request, env: Env) {
  const body = (await request.json().catch(() => null)) as Record<string, string> | null;
  const orderId = clip(body?.orderId, 40);
  const paymentId = clip(body?.paymentId, 40);
  const signature = clip(body?.signature, 128);
  if (!orderId || !paymentId || !signature) return fail('Missing payment details.');

  // 1. The signature proves the response came from Razorpay for this order.
  const expected = await hmacHex(env.RAZORPAY_KEY_SECRET, `${orderId}|${paymentId}`);
  if (!safeEqual(expected, signature)) return fail('Payment could not be verified.', 401);

  // 2. Ask Razorpay directly that the money is really there.
  let payment = await rzp<{
    id: string;
    order_id: string;
    amount: number;
    currency: string;
    status: string;
  }>(env, `/payments/${paymentId}`);

  if (payment.order_id !== orderId || payment.amount !== AMOUNT_PAISE || payment.currency !== 'INR') {
    return fail('Payment details do not match this booking.', 409);
  }
  if (payment.status === 'authorized') {
    payment = await rzp(env, `/payments/${paymentId}/capture`, {
      method: 'POST',
      body: JSON.stringify({ amount: AMOUNT_PAISE, currency: 'INR' }),
    });
  }
  if (payment.status !== 'captured') return fail('Payment is not complete yet.', 402);

  // 3. Hand back the scheduler, prefilled from the order notes.
  const order = await rzp<{ notes?: Record<string, string> }>(env, `/orders/${orderId}`);
  const notes = order.notes || {};
  const url = new URL(env.CALENDLY_URL);
  if (notes.name) url.searchParams.set('name', notes.name);
  if (notes.email) url.searchParams.set('email', notes.email);
  // Calendly custom questions, in the order they are set up on the event:
  //   a1 = Payment reference, a2 = Meeting platform, a3 = Project details
  url.searchParams.set('a1', paymentId);
  if (notes.platform) url.searchParams.set('a2', notes.platform);
  url.searchParams.set('a3', [notes.service, notes.budget, notes.brief].filter(Boolean).join(' · '));
  url.searchParams.set('hide_gdpr_banner', '1');

  return json({ paymentId, schedulingUrl: url.toString() });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);

    if (pathname.startsWith('/api/booking/')) {
      if (request.method !== 'POST') return fail('Method not allowed.', 405);
      if (!originAllowed(request, env)) return fail('Forbidden.', 403);
      if (!env.RAZORPAY_KEY_ID || !env.RAZORPAY_KEY_SECRET || !env.CALENDLY_URL) {
        return fail('Online booking is being set up. Please message us on WhatsApp.', 503);
      }
      try {
        if (pathname === '/api/booking/order') return await createOrder(request, env);
        if (pathname === '/api/booking/verify') return await verifyPayment(request, env);
      } catch (err) {
        console.error(err);
        return fail('Payment service is unavailable. Please try again in a minute.', 502);
      }
    }

    // Anything else under /api/* falls through to static assets (→ 404 page).
    return env.ASSETS.fetch(request);
  },
};
