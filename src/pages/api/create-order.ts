import type { APIRoute } from 'astro';
import Razorpay from 'razorpay';

/**
 * Creates a Razorpay order. Ported from the reference's Next.js route
 * handler at src/app/api/create-order/route.ts.
 *
 * Requires RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in the environment, plus
 * PUBLIC_RAZORPAY_KEY_ID for the browser checkout. Runs on demand, so the
 * project needs an adapter (see astro.config.mjs).
 */
export const prerender = false;

const MINIMUM_AMOUNT = 1000;

export const POST: APIRoute = async ({ request }) => {
  const keyId = import.meta.env.RAZORPAY_KEY_ID;
  const keySecret = import.meta.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return Response.json(
      { error: 'Payment gateway is not configured' },
      { status: 500 },
    );
  }

  let payload: { amount?: unknown; planName?: unknown };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const amount = Number(payload.amount);
  if (!Number.isFinite(amount) || amount < MINIMUM_AMOUNT) {
    return Response.json({ error: 'Minimum amount is ₹1,000' }, { status: 400 });
  }

  try {
    const rzp = new Razorpay({ key_id: keyId, key_secret: keySecret });
    const order = await rzp.orders.create({
      amount: Math.round(amount) * 100,
      currency: 'INR',
      receipt: `rcpt_${Date.now()}`,
      notes: {
        planName:
          typeof payload.planName === 'string' ? payload.planName : 'Custom Payment',
      },
    });

    return Response.json({ orderId: order.id, amount: order.amount });
  } catch {
    return Response.json({ error: 'Could not create order' }, { status: 500 });
  }
};
