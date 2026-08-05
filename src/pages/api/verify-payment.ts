import type { APIRoute } from 'astro';
import crypto from 'node:crypto';

/**
 * Verifies a Razorpay payment signature. Ported from the reference's
 * Next.js route handler at src/app/api/verify-payment/route.ts.
 */
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const keySecret = import.meta.env.RAZORPAY_KEY_SECRET;

  if (!keySecret) {
    return Response.json(
      { success: false, error: 'Payment gateway is not configured' },
      { status: 500 },
    );
  }

  let payload: {
    razorpay_payment_id?: string;
    razorpay_order_id?: string;
    razorpay_signature?: string;
  };

  try {
    payload = await request.json();
  } catch {
    return Response.json({ success: false }, { status: 400 });
  }

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = payload;

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
    return Response.json({ success: false }, { status: 400 });
  }

  const digest = crypto
    .createHmac('sha256', keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  // Constant-time compare so the endpoint can't be used as a signature oracle.
  const expected = Buffer.from(digest, 'utf8');
  const received = Buffer.from(razorpay_signature, 'utf8');
  const valid =
    expected.length === received.length &&
    crypto.timingSafeEqual(expected, received);

  return Response.json({ success: valid }, { status: valid ? 200 : 400 });
};
