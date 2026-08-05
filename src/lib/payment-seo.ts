/**
 * `/payment` — the FAQ shown on the proposal-request page.
 *
 * Why this array lives in `src/lib` and not in the component
 * ----------------------------------------------------------
 * It was previously declared inside `PaymentPageContent.astro`'s frontmatter,
 * which renders it but makes it unreachable from `payment.astro` — an Astro
 * component's frontmatter cannot be imported. The consequence was that
 * `/payment` was the only page on the site with visible FAQ accordions and no
 * `FAQPage` JSON-LD at all.
 *
 * Moving it here restores the site-wide contract: one definition, consumed by
 * both the rendered accordion and the structured data, so the two cannot
 * drift. Never hand-write a second copy inside a
 * `<script type="application/ld+json">`.
 *
 * Shape note: the original used `{ q, a }`. It is stated here in the shared
 * `Faq` shape (`question` / `answer`) so it can be passed straight to
 * `faqPageSchema()` like every other FAQ block on the site.
 */

import type { Faq } from './seo';

export const paymentFaqs: readonly Faq[] = [
  {
    question: 'How soon can you start?',
    answer:
      'For most projects, we can begin within 3–5 business days of receiving your brief and completing an initial discovery call. Urgent timelines can be accommodated — mention it in your brief.',
  },
  {
    question: 'Do you offer fixed-price projects?',
    answer:
      "Yes. After reviewing your brief, we send a fixed-scope proposal outlining exactly what's included, the timeline, and the total investment. No open-ended billing.",
  },
  {
    question: 'Are there any long-term contracts?',
    answer:
      "No. Monthly retainer services (like SEO or social media management) run month to month. We don't lock you into 6- or 12-month contracts.",
  },
  {
    question: 'What if I only need one service?',
    answer:
      "Absolutely fine. Many clients start with a single service — like SEO or website development — and add more as results come in. There's no minimum engagement.",
  },
  {
    question: 'How do I pay for approved work?',
    answer:
      'Once a proposal is accepted, we send an invoice you can pay online via UPI, card, net banking, or bank transfer. GST invoices available on request.',
  },
];
