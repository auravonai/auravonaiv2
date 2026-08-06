/**
 * Copy and metadata for the `/digital-marketing` hub.
 *
 * Mirrors `services-seo.ts`: the hub is a navigation page, not a content
 * page. Its job is to route a visitor to the one service they came for and
 * to tell a crawler that this section exists and what it covers. Detail lives
 * on the 34 pages under it — anything explained twice is a signal split.
 *
 * Primary keyword: **digital marketing services** (catalog intent).
 *
 * Chosen without volume data — the Ahrefs plan on this account cannot return
 * metrics (see `docs/keyword-strategy.md`). The reasoning stands on its own:
 * this is the head term the eight categories below all specialise, it is the
 * phrase a buyer types when they have not yet decided which channel they
 * need, and it is the only term on the site that every one of these 34 pages
 * supports rather than competes with. Re-validate the pick against real
 * volume and difficulty before writing anything else against it.
 *
 * The hub deliberately does NOT target "digital marketing agency". That is a
 * different intent (who to hire vs. what to buy) and it would collide with
 * the homepage, which sells the engineering business.
 */

import type { Faq } from './seo';

export const MARKETING_HUB_SEO = {
  primaryKeyword: 'digital marketing services',
  path: '/digital-marketing',
  metaTitle: 'Digital Marketing Services — SEO & Ads | Auravon AI',
  metaDescription:
    'SEO, Google and Meta Ads, ecommerce development, and marketplace account management. Talk to us about what your business actually needs.',
  ogTitle: 'Digital Marketing Services — Auravon AI',
  ogDescription:
    'Eight service families, from organic search through to Amazon and Flipkart account management. Pick the one you need.',
  h1: 'Digital marketing services',
  h1Tail: 'for businesses that need customers, not dashboards',
  /**
   * The hub's opening paragraph AND the umbrella `Service` node's
   * description. Self-contained and written to stand alone, because that is
   * the unit an AI Overview lifts when someone asks what digital marketing
   * services are.
   */
  summary:
    'Digital marketing services are the paid, organic, and platform work that puts a business in front of people already looking for it — search visibility, advertising, storefronts, and the marketplace listings that sell through them. Auravon AI runs these as a separate practice from its software engineering work, with the same people accountable for results either way.',
  intro: [
    'Most agencies sell you a channel before they know whether you need it. A business doing well on referrals and badly on Google has a search problem, not an advertising problem, and paying for ads first just makes the gap more expensive.',
    'So the categories below are listed as a menu rather than a funnel. If you already know what you want, go straight to it. If you do not, the honest answer usually takes one conversation and costs nothing.',
  ],
} as const;

/**
 * Catalog-level questions only.
 *
 * Anything answerable about one specific service belongs on that service's
 * page. Two `FAQPage` nodes answering the same query at two URLs is exactly
 * the split this architecture exists to remove — the same rule the
 * `/services` hub follows.
 */
export const marketingHubFaqs: readonly Faq[] = [
  {
    question: 'What digital marketing services does Auravon AI offer?',
    answer:
      'Eight families: search engine optimisation, Google Ads, Meta Ads, website development, ecommerce development, marketplace account management for Amazon, Flipkart and Meesho, social media management, and graphic design. Each has its own page with scope, process, and pricing questions answered in detail.',
  },
  {
    question: 'How do I choose which digital marketing service I need?',
    answer:
      'Start from where your customers already are. If they search for what you sell, organic search and Google Ads matter most. If they discover products by browsing, marketplaces and social matter more. If people find you but do not convert, the problem is usually the site rather than the traffic.',
  },
  {
    question: 'How much do digital marketing services cost?',
    answer:
      'It depends on scope and on whether ad spend is included, so a single number would be misleading. Each service page sets out what drives its cost. For a figure specific to your business, send us the details and we will quote against them rather than against a package.',
  },
  {
    question: 'Do you work with businesses outside India?',
    answer:
      'Yes. The marketing practice has a local focus in Gujarat where on-the-ground work like Google Business Profile management benefits from it, but SEO, paid advertising, and ecommerce work are run remotely for clients anywhere.',
  },
  {
    question: 'Is digital marketing separate from your AI and software work?',
    answer:
      'They are separate practices with separate teams and separate pages on this site. Some clients use both — a custom platform that also needs to rank — but neither is bundled into the other, and you are never sold engineering you do not need to buy marketing.',
  },
];
