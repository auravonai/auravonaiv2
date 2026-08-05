/**
 * The shape of a service spoke page.
 *
 * Hub-and-spoke, in one sentence
 * ------------------------------
 * `/services` is a navigation hub that shows a card per service and nothing
 * else; each service owns a dedicated page at `/services/<slug>` carrying the
 * detail. One `ServicePage` record feeds BOTH — the hub card reads
 * `cardDescription` and `badges`, the spoke reads everything. There is no
 * second copy of a service's name or summary anywhere in the codebase, so the
 * two can never disagree.
 *
 * Why the record is this granular
 * -------------------------------
 * Every field maps to exactly one rendered block, and several are also
 * consumed by structured data (`summary` → `Service.description`, `faqs` →
 * `FAQPage`). Structured data is only valid when it describes what a visitor
 * can actually see, so schema always quotes a field that is rendered rather
 * than paraphrasing it. See `src/lib/seo.ts` for the same contract site-wide.
 *
 * Editing rules
 * -------------
 * - `cardDescription` is one or two lines. If it needs a third, the service
 *   is being explained on the hub, which is the thing this redesign removed.
 * - `summary` is the spoke's opening paragraph AND the Service node's
 *   description. Write it as a complete, self-contained 45–60 word statement
 *   of what the service is — that is the unit an AI Overview lifts for
 *   "what is <service>".
 * - `faqs` answers open with a complete 40–55 word answer, then detail.
 * - Every `href` must resolve. Links to pages that do not exist yet cost more
 *   than the anchor text is worth.
 */

import type { Faq } from '../seo';

export type CategoryId = 'ai' | 'engineering' | 'platform' | 'product';

export interface Category {
  id: CategoryId;
  /** Rendered as the group heading on the hub. */
  label: string;
  /** One line under the group heading. */
  blurb: string;
}

/** A titled block of prose. Used by several sections. */
export interface Block {
  title: string;
  description: string;
}

export interface ProcessStep extends Block {
  /** Two-digit ordinal rendered in the mono face. */
  step: string;
}

export interface TechGroup {
  label: string;
  items: string[];
}

export interface RelatedLink {
  label: string;
  href: string;
}

export interface ServicePage {
  /** URL segment. `/services/<slug>`. */
  slug: string;
  category: CategoryId;
  /** Key into the icon map in `src/lib/services/icons.ts`. */
  icon: string;

  /* ── Hub card ──────────────────────────────────────────────────────── */
  /** Card title. Usually shorter than the H1. */
  cardTitle: string;
  /** One to two lines. The whole point of the hub redesign. */
  cardDescription: string;
  /** Up to three technology chips. Optional by design — not every card needs them. */
  badges?: string[];

  /* ── SEO ───────────────────────────────────────────────────────────── */
  /** The one term this page is built to win. One page, one primary keyword. */
  primaryKeyword: string;
  /** Must end with "Auravon AI" — BaseLayout appends the brand otherwise. */
  metaTitle: string;
  /** Aim for 140–155 characters so the CTA survives SERP truncation. */
  metaDescription: string;
  /** Social copy, deliberately not a duplicate of the meta description. */
  ogTitle: string;
  ogDescription: string;

  /* ── Hero ──────────────────────────────────────────────────────────── */
  /** H1. Leads with the primary keyword. */
  h1: string;
  /** Muted second line of the H1. Kept short. */
  h1Tail: string;
  /**
   * Hero paragraph AND the `Service` node's description. Self-contained,
   * 45–60 words, opens with the service name in running prose.
   */
  summary: string;
  /** Three short assurances under the hero. */
  assurances: string[];

  /* ── Introduction ──────────────────────────────────────────────────── */
  introHeading: string;
  /** Two paragraphs. The honest detail that earns the rest of the page. */
  intro: string[];

  /* ── Body sections ─────────────────────────────────────────────────── */
  problems: Block[];
  process: ProcessStep[];
  benefits: Block[];
  technologies: TechGroup[];
  /** Industry names only. The section explains why these and not others. */
  industriesLead: string;
  industries: string[];

  /* ── Tail ──────────────────────────────────────────────────────────── */
  faqs: readonly Faq[];
  relatedArticles: RelatedLink[];
  /** Slugs of sibling spokes. Resolved to cards at render time. */
  relatedServices: string[];
  ctaHeading: string;
  ctaBody: string;
  ctaLabel: string;
}
