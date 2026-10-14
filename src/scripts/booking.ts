/**
 * /start booking flow — client half. Server half: `worker/index.ts`.
 *
 *   submit form → POST /api/booking/order        (Worker creates a Razorpay order)
 *              → Razorpay Checkout (checkout.js loaded on demand)
 *              → POST /api/booking/verify       (Worker checks the signature with
 *                                                 the secret and confirms the
 *                                                 payment with Razorpay's API)
 *              → Calendly inline widget with the URL the Worker returned
 *
 * A verified booking is kept in sessionStorage so a reload on step 3 does not
 * strand someone who has paid but not yet picked a time.
 */

type Booking = { paymentId: string; schedulingUrl: string; platform: string };

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open(): void; on(e: string, cb: (r: any) => void): void };
    Calendly?: { initInlineWidget(opts: { url: string; parentElement: Element }): void };
  }
}

const SESSION_KEY = 'auravon-booking';

const $ = <T extends Element>(sel: string) => document.querySelector<T>(sel);

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) return resolve();
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error(`Could not load ${src}`));
    document.head.appendChild(s);
  });
}

function setStep(n: number) {
  document.querySelectorAll<HTMLElement>('[data-step-indicator]').forEach((el) => {
    const i = Number(el.dataset.stepIndicator);
    el.toggleAttribute('data-active', i === n);
    el.toggleAttribute('data-done', i < n);
  });
}

function showError(message: string) {
  const el = $<HTMLElement>('#booking-error');
  if (!el) return;
  el.textContent = message;
  el.classList.toggle('hidden', !message);
}

function setBusy(busy: boolean, text?: string) {
  const btn = $<HTMLButtonElement>('#booking-submit');
  const label = btn?.querySelector<HTMLElement>('[data-submit-label]');
  if (!btn || !label) return;
  btn.disabled = busy;
  label.dataset.idle ??= label.textContent ?? '';
  label.textContent = busy ? (text ?? 'Please wait…') : label.dataset.idle;
}

async function post<T>(url: string, body: unknown): Promise<T> {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Something went wrong. Please try again.');
  return data as T;
}

async function showScheduler(booking: Booking) {
  setStep(3);
  $<HTMLElement>('#booking-details')!.hidden = true;
  const panel = $<HTMLElement>('#booking-schedule')!;
  panel.hidden = false;
  panel.querySelector('[data-payment-id]')!.textContent = booking.paymentId;
  panel.querySelector('[data-platform]')!.textContent = booking.platform;
  panel.querySelector<HTMLAnchorElement>('[data-calendly-fallback]')!.href = booking.schedulingUrl;
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });

  try {
    await loadScript('https://assets.calendly.com/assets/external/widget.js');
    window.Calendly?.initInlineWidget({
      url: booking.schedulingUrl,
      parentElement: $('#calendly-embed')!,
    });
  } catch {
    /* fallback link above stays visible */
  }
}

export function initBooking() {
  const form = $<HTMLFormElement>('#booking-form');
  if (!form) return;

  // Pre-select the service from ?service= (set by service pages and case studies).
  const params = new URLSearchParams(location.search);
  const wanted = params.get('service');
  const select = form.querySelector<HTMLSelectElement>('select[name="service"]');
  if (wanted && select && [...select.options].some((o) => o.value === wanted)) select.value = wanted;

  // Resume a paid-but-unscheduled booking after a reload.
  try {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (saved) {
      void showScheduler(JSON.parse(saved));
      return;
    }
  } catch {
    /* ignore */
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    showError('');
    if (!form.reportValidity()) return;

    const fd = new FormData(form);
    const details = {
      name: String(fd.get('name') || '').trim(),
      email: String(fd.get('email') || '').trim(),
      phone: String(fd.get('phone') || '').trim(),
      company: String(fd.get('company') || '').trim(),
      service: String(fd.get('service') || ''),
      serviceLabel: select?.selectedOptions[0]?.text ?? '',
      budget: String(fd.get('budget') || ''),
      platform: String(fd.get('platform') || 'Google Meet'),
      brief: String(fd.get('brief') || '').trim(),
      ref: params.get('ref') || '',
    };

    setBusy(true, 'Opening secure payment…');
    try {
      const [order] = await Promise.all([
        post<{ orderId: string; amount: number; currency: string; keyId: string }>(
          '/api/booking/order',
          details,
        ),
        loadScript('https://checkout.razorpay.com/v1/checkout.js'),
      ]);
      if (!window.Razorpay) throw new Error('Payment window could not load. Check your connection and try again.');

      setStep(2);
      const rzp = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: 'Auravon AI',
        description: 'Project booking (refundable)',
        image: '/apple-touch-icon.png',
        prefill: { name: details.name, email: details.email, contact: details.phone },
        notes: { service: details.service },
        theme: { color: '#171717' },
        modal: {
          ondismiss: () => {
            setStep(1);
            setBusy(false);
          },
        },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          setBusy(true, 'Confirming payment…');
          try {
            const verified = await post<{ schedulingUrl: string; paymentId: string }>(
              '/api/booking/verify',
              {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              },
            );
            const booking: Booking = { ...verified, platform: details.platform };
            try {
              sessionStorage.setItem(SESSION_KEY, JSON.stringify(booking));
            } catch {
              /* ignore */
            }
            await showScheduler(booking);
          } catch (err) {
            setStep(1);
            setBusy(false);
            showError(
              `${(err as Error).message} Your payment reference is ${response.razorpay_payment_id} — send it to us on WhatsApp and we will book you in manually.`,
            );
          }
        },
      });
      rzp.on('payment.failed', (r: { error?: { description?: string } }) => {
        showError(r.error?.description || 'Payment failed. No money was taken — please try again.');
      });
      rzp.open();
    } catch (err) {
      setStep(1);
      setBusy(false);
      showError((err as Error).message);
    }
  });
}
