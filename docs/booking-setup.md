# Booking, pricing & portfolio — setup

What was added, and the three things only the site owner can do to switch
online booking on.

## What's live after deploy

| Path | What it is |
|---|---|
| `/work` | Portfolio hub — 8 live builds, autoplaying silent walkthroughs |
| `/work/<slug>` | Case study per build: video, features, admin features, screenshots, price |
| `/pricing` | Every starting price, currency switcher, booking/refund FAQ |
| `/start` | Book a meeting: details → ₹1,000 via Razorpay → Calendly slot |
| `/api/booking/*` | Worker that creates and verifies Razorpay payments |

Prices live in **one file**: `src/lib/pricing.ts`. Change a number there and
it updates the service pages, `/services` cards, `/pricing`, the booking form
and the `Offer` schema together.

Portfolio content lives in `src/lib/work.ts`; media in
`public/media/work/<slug>/` (walkthrough.webm + .mp4, poster, shot-N).

## 1. Razorpay

1. Razorpay Dashboard → **Account & Settings → API Keys** → generate keys.
   Use **Test mode** keys first.
2. **Settings → Payment capture**: automatic capture is recommended. (The
   Worker also captures an authorised payment itself, so either works.)
3. Set the secrets on the Worker (never put them in the repo):

   ```bash
   npx wrangler secret put RAZORPAY_KEY_ID       # rzp_test_… then rzp_live_…
   npx wrangler secret put RAZORPAY_KEY_SECRET
   ```

## 2. Calendly

1. Create an event type, e.g. **Project scoping call — 60 min**.
2. **Location** → add both **Google Meet** and **Microsoft Teams** and tick
   "Invitee can choose". (Connect Google / Microsoft in Calendly →
   Integrations first.)
3. **Invitee questions** — add these, in this order, so the Worker can
   prefill them:
   1. `Payment reference` (one line, required)
   2. `Meeting platform` (one line)
   3. `Project details` (multi-line)
4. Keep the event **secret** (Event → More options → "Make secret"). The link
   is only revealed by the Worker after a verified payment.
5. Set it on the Worker:

   ```bash
   npx wrangler secret put CALENDLY_URL   # https://calendly.com/<you>/<event>
   ```

Until all three secrets are set, `/start` shows "Online booking is being set
up — message us on WhatsApp" instead of failing.

## 3. Deploy

```bash
npm run deploy
```

`wrangler.jsonc` now has `"main": "./worker/index.ts"` with
`run_worker_first: ["/api/*"]`: the Worker runs for the booking API only.
Every page and media file is still served directly from static assets.

## Test before going live

With **test** keys set, open `/start`, pay with Razorpay's test card
`4111 1111 1111 1111` (any future expiry, any CVV) or test UPI `success@razorpay`,
and confirm the Calendly scheduler appears prefilled with your name, email
and the `pay_…` reference. Then swap in live keys.

## Refunds

Terms are in the refund policy (`/refund#booking-fee`). Refund from Razorpay
Dashboard → Transactions → the payment → **Refund** (full amount).
