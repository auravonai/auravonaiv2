/**
 * `/services` — content and structured data for the AI Development Services
 * hub page.
 *
 * Why this file exists
 * --------------------
 * Same contract as `seo.ts`: every array here is consumed by BOTH a rendered
 * component and a JSON-LD node. Structured data is only valid when it
 * describes what a visitor can actually see, so the offering list and the FAQ
 * list must have exactly one definition. Never hand-write a second copy inside
 * a `<script type="application/ld+json">`.
 *
 * Positioning note
 * ----------------
 * This page previously titled itself "Digital Marketing & Web Services in
 * Vadodara, Gujarat" and listed the eight digital-agency categories from
 * `digital-agency-data.ts`. It now targets the commercial keyword
 * **AI Development Services**, matching the homepage's "AI Development
 * Company" positioning.
 *
 * The 34 marketing service pages under `/services/[slug]` still exist and are
 * still linked from the navbar mega menu, so they keep an internal crawl path.
 * They are no longer linked from this page — a hub that lists both AI
 * engineering and Meesho seller management dilutes the topical signal it is
 * built to send. See `docs/services-seo.md`.
 *
 * Hub-and-spoke
 * -------------
 * This file no longer holds the service content. It was previously the home
 * of `serviceOfferings` — fifteen long-form sections rendered into one
 * ~6,000-word page with `#anchor` navigation. Each of those services now owns
 * a page at `/services/<slug>`, and the content lives in `src/lib/services/`.
 *
 * What remains here is the hub's own material: its metadata, its intro, the
 * "why choose us" list, its FAQ, and the structured data that describes the
 * hub as a catalog pointing at the spokes.
 *
 * Internal-link policy
 * --------------------
 * Every `href` in this file resolves to a page that exists today.
 */

import { ORG_ID, type Faq } from './seo';
import { SITE_URL } from './site';
import { servicePages, type ServicePage } from './services';

/* ────────────────────────────────────────────────────────────────────────
   Page metadata
   ──────────────────────────────────────────────────────────────────────── */

export const SERVICES_SEO = {
  /**
   * 57 characters. Primary keyword leads, the commercial qualifier
   * ("Company") is folded into the brand tail so the title carries both
   * "AI development services" and "AI development services company" without
   * reading like a keyword list.
   */
  title: 'AI Development Services | Custom AI & Software | Auravon AI',
  /**
   * 154 characters — inside Google's ~155 truncation point, so the CTA
   * survives into the snippet instead of trailing past it.
   */
  description:
    'AI development services for startups and enterprises: AI agents, generative AI, custom software, SaaS, and cloud. Get a free scope and costed plan.',
  canonical: '/services',

  /** Social copy is deliberately not a duplicate of the meta description. */
  ogTitle: 'AI Development Services — Auravon AI',
  /** Kept under ~200 characters so LinkedIn and X do not clip the last clause. */
  ogDescription:
    'Fifteen service lines under one team: AI agents, generative AI, AI consulting, custom software, SaaS, web and mobile apps, cloud, and APIs. You talk to the engineers who build it.',
  twitterTitle: 'AI Development Services | Auravon AI',
  twitterDescription:
    'AI agents, generative AI, custom software, and SaaS — designed, built, evaluated, and maintained by the engineers you talk to.',
} as const;

/**
 * The hero's opening paragraph, and the description on the umbrella
 * `Service` node.
 *
 * These are the same string on purpose. A Service node whose description
 * appears nowhere on the page is exactly the drift this file exists to
 * prevent — so the schema quotes the page rather than paraphrasing it.
 * Rendered by ServicesHubHero.astro.
 */
export const SERVICES_INTRO =
  'Auravon AI is an AI development services company. We design, build, evaluate, and maintain AI agents, generative AI systems, custom software, and SaaS platforms for startups and enterprises — end to end, with the engineers who write the code on the call from day one.';

/* ────────────────────────────────────────────────────────────────────────
   Why choose Auravon AI
   ────────────────────────────────────────────────────────────────────────

   Every claim here is one we can substantiate on request.

   Deliberately absent: client counts, project totals, satisfaction
   percentages, and named logos. The reference site carried a "50+ projects"
   figure that nothing verified. Unverifiable numbers on a commercial page are
   an E-E-A-T liability, and they are the first thing a serious buyer checks. */

export const trustSignals = [
  {
    title: 'You talk to the engineers',
    description:
      'No account manager relaying requirements. The people scoping your project are the people writing the code, and they stay on it after launch.',
  },
  {
    title: 'You own everything',
    description:
      'Code, prompts, eval sets, infrastructure definitions, and documentation are yours by contract. No hosting lock-in and no licence on your own system.',
  },
  {
    title: 'Accuracy is measured, not asserted',
    description:
      'Every AI engagement defines an evaluation set and a pass threshold before the build. "It seems to work well" is not an acceptance criterion.',
  },
  {
    title: 'Costed scope before commitment',
    description:
      'Pricing follows a paid discovery with a written scope, so the number is based on your data model and exceptions rather than on an optimistic guess.',
  },
  {
    title: 'We say when AI is the wrong tool',
    description:
      'A rule, a query, or a redesigned form beats a model more often than the market admits. We would rather lose the line item than ship something you regret.',
  },
  {
    title: 'Built to be handed over',
    description:
      'Architecture notes, runbooks, and a readable codebase are part of delivery — so another team could take the system over without us.',
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────
   FAQ
   ────────────────────────────────────────────────────────────────────────

   Sourced from real Ahrefs search intent for the AI development services
   cluster.

   Two near-duplicate pairs in the source list — "What are AI Development
   Services?" / "What is AI Development Services?" and the same pair for
   Software Development Services — are merged. They are the same query with a
   grammatical variant, Google resolves them to one intent, and shipping both
   as separate FAQPage entries reads as keyword padding to a quality rater.
   The alternate phrasing is covered inside the merged answer instead.

   Answer shape, as on the homepage: the opening sentence is a complete,
   self-contained 40–55 word answer, because that is the unit a featured
   snippet or AI Overview lifts. Supporting detail follows. Total 80–150
   words. An answer that opens with "It depends" or with brand copy cannot
   be extracted.

   Scope, after hub-and-spoke: these seven are CATALOG-level questions —
   what these services are, who provides them, how to choose and find a
   provider, and what they cost across the range. Service-specific questions
   moved to the spoke that owns the keyword:

     "What are custom software development services?" → /services/custom-software-development
     "What are AI consulting services?"               → /services/ai-consulting
     "What services do AI consulting companies offer?"→ /services/ai-consulting
     "How much do AI consulting services cost?"       → /services/ai-consulting
     "What are custom AI development services?"       → /services/custom-ai-development

   Two were dropped rather than moved, as near-duplicates of content the
   spoke already carries: "Who should hire AI consulting services?" (the
   spoke asks "Who should hire AI consulting, and who should skip it?") and
   "Why should businesses use AI consulting services?" (its answer is the
   spoke's introduction, near-verbatim).

   Do not add a service-specific question back here. Two FAQPage nodes
   answering the same query at two URLs is the split signal this redesign
   exists to remove. */

export const servicesFaqs: readonly Faq[] = [
  {
    question: 'What are AI development services?',
    answer:
      'AI development services are professional engagements that design, build, deploy, and maintain software powered by artificial intelligence — including AI agents, large language model applications, retrieval-augmented assistants, machine learning features, and automation systems. A full-service provider covers the whole lifecycle: identifying which business problems genuinely benefit from a model, selecting and integrating that model, building the application and data layer around it, evaluating accuracy before launch, and operating the system afterwards. The term is also written as "AI development service" or "AI software development services"; these describe the same engagement. What separates a real service from a proof of concept is production ownership — monitoring, cost control, fallback handling, and model migration after go-live.',
  },
  {
    question: 'Who offers AI development services?',
    answer:
      'AI development services are offered by four kinds of provider: specialist AI development companies, general software agencies with an AI practice, enterprise consulting firms, and independent freelancers or small teams. Specialist firms usually deliver applied projects fastest, because the same engineers handle model integration, application code, and deployment. Large consultancies suit multi-year transformation programmes with heavy compliance requirements. Freelancers can be cost-effective for one well-defined feature but rarely cover design, DevOps, and long-term support. Cloud vendors offer professional services too, though those engagements are typically tied to their own platform. Match the provider type to the size and expected lifespan of the system you need, not to the size of the firm.',
  },
  {
    question: 'How do I choose an AI development services provider?',
    answer:
      'Choose an AI development services provider by verifying five things: production AI systems already running with real users, a written approach to measuring accuracy and handling hallucinations, named engineers you will speak to directly, clear data-handling and model-hosting options, and a contract giving you full ownership of code, prompts, and infrastructure. Send every shortlisted firm the same one-page brief and compare how differently they scope it — the differences reveal more than the quotes do. Start with a small paid discovery or pilot rather than a fixed-price full build. A provider that pushes back on your assumptions during discovery is usually a better long-term partner than one that agrees with everything you say.',
  },
  {
    question: 'Where can I find AI development services?',
    answer:
      'You can find AI development services through four reliable channels: referrals from companies that have shipped a comparable system, vetted B2B directories such as Clutch and GoodFirms, LinkedIn searches filtered by relevant case studies, and the cloud vendors\' own partner listings. A search for "AI development services company" returns a broad list, but ranking position reflects marketing investment rather than engineering quality. Whichever source you use, verify independently: ask for a reference call with a past client, request an architecture diagram or repository walkthrough from real work, and confirm which named engineers would be assigned to your project. Auravon AI can be contacted directly for a free scoping call.',
  },
  {
    question: 'What are good AI development services?',
    answer:
      'Good AI development services are judged on what happens after launch, not on the demo. The markers are an evaluation set with pass thresholds agreed before the build, honest advice about which problems do not need AI at all, pricing tied to milestones, structured logging and cost monitoring on every model call, graceful fallbacks when a provider fails, and full handover of code, prompts, and infrastructure. Weaker providers show impressive prototypes and deflect questions about accuracy measurement, ongoing cost per request, or who maintains the system in twelve months. A strong provider will tell you when a rule, a query, or a redesigned form would beat a model — and lose that revenue.',
  },
  {
    question: 'What are software development services?',
    answer:
      'Software development services are engagements in which an external team plans, designs, builds, tests, deploys, and maintains software for another business. A full-service provider supplies everything a project needs under one contract: product discovery, UI/UX design, frontend and backend engineering, QA, DevOps, and post-launch support. Typical scope covers web applications, mobile apps, SaaS platforms, internal tools, APIs, and integrations, delivered as fixed-scope projects, dedicated teams, or ongoing retainers. The term is also written as "software development service"; both describe the same arrangement. The practical difference between providers is rarely the technology list — it is whether testing, documentation, and handover are included or billed later as extras.',
  },
  {
    question: 'How much do software development services cost?',
    answer:
      'Software development services typically cost $8,000–$40,000 for a focused MVP or internal tool, $50,000–$200,000 for a full SaaS platform or complex business application, and $1,500–$12,000 per month for ongoing maintenance. Hourly rates run roughly $25–$80 in India and Eastern Europe and $100–$250 in North America and Western Europe. Scope, integration count, compliance requirements, and design depth drive price far more than the technology chosen. Treat any quote that arrives without questions as a placeholder — a number produced before anyone has understood your data model and exceptions will be revised upward. Ask for a costed scope after a paid discovery rather than a headline figure over email.',
  },
];


/* ────────────────────────────────────────────────────────────────────────
   Structured data
   ────────────────────────────────────────────────────────────────────────

   Organization and WebSite are emitted site-wide by BaseLayout and are NOT
   repeated here — a second Organization node on one page reads to a parser as
   a second company. Everything below references the site-wide entity by @id.

   Hub-and-spoke changed the shape of this. Previously the hub emitted fifteen
   full `Service` nodes because it rendered fifteen full service sections.
   Each service now has its own page, so:

     - the SPOKE owns its `Service` node, at `<spoke-url>#service`
     - the HUB emits one umbrella `Service` whose `hasOfferCatalog` references
       those nodes by `@id`

   That is the correct modelling: one node per entity, defined on the page
   that describes it, referenced from the page that lists it. Restating all
   fifteen here would describe each service twice at two URLs — exactly the
   duplication the redesign removed from the visible page. */

const PAGE_URL = `${SITE_URL}/services`;

/** A spoke's `Service` node id. Lives on the spoke's own URL. */
export const serviceNodeId = (slug: string) =>
  `${SITE_URL}/services/${slug}#service`;

/**
 * The `Service` node for one spoke page. Emitted BY the spoke, not the hub.
 * `description` quotes the page's own hero paragraph, so the schema describes
 * something a visitor can actually read.
 */
export function spokeServiceSchema(page: ServicePage) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceNodeId(page.slug),
    name: page.cardTitle,
    serviceType: page.primaryKeyword,
    description: page.summary,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    url: `${SITE_URL}/services/${page.slug}`,
    isPartOf: { '@id': `${SITE_URL}/services/${page.slug}#webpage` },
    audience: {
      '@type': 'BusinessAudience',
      name: 'Startups, scale-ups, and enterprises',
    },
  };
}

/**
 * The hub's umbrella node for its primary keyword. `hasOfferCatalog`
 * references each spoke's `Service` by `@id` rather than restating it, which
 * is what keeps this one company described from several angles instead of
 * fifteen loosely related services.
 */
export function primaryServiceSchema(
  pages: readonly ServicePage[] = servicePages,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${PAGE_URL}#primary-service`,
    name: 'AI Development Services',
    serviceType: 'AI Development Services',
    // Quotes the hero paragraph verbatim — see SERVICES_INTRO.
    description: SERVICES_INTRO,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    url: PAGE_URL,
    audience: {
      '@type': 'BusinessAudience',
      name: 'Startups, scale-ups, and enterprises',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Auravon AI service catalog',
      itemListElement: pages.map((page, i) => ({
        '@type': 'Offer',
        position: i + 1,
        itemOffered: { '@id': serviceNodeId(page.slug) },
      })),
    },
  };
}

/**
 * An `ItemList` mirroring the visible card grid, in render order. This is the
 * node that actually communicates "this page is a hub" — it enumerates the
 * fifteen destinations as a list of URLs, which is what the page visibly is.
 */
export function servicesItemListSchema(
  pages: readonly ServicePage[] = servicePages,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${PAGE_URL}#service-list`,
    name: 'Auravon AI services',
    numberOfItems: pages.length,
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: pages.map((page, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: page.cardTitle,
      url: `${SITE_URL}/services/${page.slug}`,
    })),
  };
}
