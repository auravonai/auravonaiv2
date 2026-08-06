/**
 * Industry pages — the commercial cross-section of the services catalog.
 *
 * What these are for
 * ------------------
 * A service page answers "what do you build". An industry page answers "have
 * you built it for someone like me", which is the question that actually
 * decides an enquiry. They target a different query shape too: not
 * "AI agent development" but "AI for logistics" — lower volume, far higher
 * intent, and almost never contested by the generic agency pages.
 *
 * They also make the services catalog multiply rather than repeat. Fifteen
 * services and six industries is ninety honest intersections without ninety
 * pages, because each industry page links the four or five services that
 * genuinely apply and ignores the rest.
 *
 * What they must not become
 * -------------------------
 * Doorway pages. The failure mode is one template with the industry name
 * swapped in — Google names that pattern explicitly and it earns a manual
 * action. Every field below is written per industry: the constraints are real
 * constraints of that sector, and if a section had nothing specific to say it
 * was left out rather than padded.
 *
 * **No client names, project counts, or delivery claims appear here.** These
 * pages describe capability and approach, both of which are checkable against
 * behaviour. Anything factual about who we have worked for needs the user's
 * confirmation first and belongs on a case study, not a landing page.
 *
 * Scaling
 * -------
 * Add an entry, get a page, a hub card, a sitemap row, and four JSON-LD nodes.
 * Slugs and `relatedServices` are validated at build time.
 */

import type { Faq } from './seo';
import { getAllServicePageSlugs } from './services';

export interface Industry {
  /** URL segment. `/industries/<slug>`. */
  slug: string;
  /** Card title and H1 subject. */
  name: string;
  /** One line on the hub card. */
  cardDescription: string;
  /**
   * The term this page is built to win. ESTIMATED — the Ahrefs plan on this
   * account returns no volume or difficulty data. See
   * `docs/keyword-strategy.md` before building more content against it.
   */
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /**
   * Opening paragraph AND the `Service` node's description. Self-contained,
   * 45–60 words — the unit an AI Overview lifts for "AI for <industry>".
   */
  summary: string;
  /** Two paragraphs of real orientation. */
  intro: string[];
  /** The constraints that make this sector different to build for. */
  constraints: { title: string; description: string }[];
  /** What we typically build here. Concrete systems, not adjectives. */
  applications: { title: string; description: string }[];
  /** Service spokes that genuinely apply. Validated against the registry. */
  relatedServices: string[];
  faqs: readonly Faq[];
}

export const industries: readonly Industry[] = [
  {
    slug: 'fintech',
    name: 'Fintech & financial services',
    cardDescription:
      'Systems that move money, and the audit trails regulators expect to find behind them.',
    primaryKeyword: 'ai for fintech',
    metaTitle: 'AI & Software Development for Fintech | Auravon AI',
    metaDescription:
      'Custom software and AI for financial services: reconciliation, risk scoring, and document processing, built with the audit trails the sector needs.',
    h1: 'AI and software engineering for fintech',
    summary:
      'Fintech engineering is ordinary software with an unusual failure cost: a bug that would be a nuisance elsewhere is a reconciliation break, a regulatory report, or money in the wrong account. We build financial systems where correctness, traceability, and the ability to explain any number to an auditor are design inputs rather than later additions.',
    intro: [
      'The hard part of financial software is rarely the calculation. It is that every number has to be explainable months later, by someone who was not there, from records that cannot be quietly edited. That constraint shapes the schema, the deployment process, and how much of an AI model you can responsibly put in the path of a decision.',
      'Which is the honest limit worth stating early: a language model is excellent at reading documents and terrible at being the system of record. We use them where the output is checked — extraction, summarisation, triage — and keep deterministic code where the money moves.',
    ],
    constraints: [
      {
        title: 'Every figure needs a provenance trail',
        description:
          'Records are append-only and every derived number can be traced to its inputs. This is a schema decision made on day one; retrofitting it means rebuilding the data layer.',
      },
      {
        title: 'Models cannot be the system of record',
        description:
          'A model output is evidence, not truth. Anything affecting a balance runs through deterministic code with the model result stored alongside as an input a human can review.',
      },
      {
        title: 'Access is scoped and logged, not assumed',
        description:
          'Who read what, and when, is as much a requirement as who wrote what. Designed in from the start, because the alternative is an access log that cannot answer the question being asked.',
      },
    ],
    applications: [
      {
        title: 'Reconciliation and exception handling',
        description:
          'Matching engines that clear the routine volume automatically and surface the genuine breaks with enough context for a human to resolve them quickly.',
      },
      {
        title: 'Document extraction at volume',
        description:
          'Statements, invoices, and KYC documents parsed into structured data, with confidence scores and a review queue for anything the model is unsure about.',
      },
      {
        title: 'Risk and fraud signals',
        description:
          'Scoring pipelines that combine rules with learned signals and, critically, explain which factors drove a given score.',
      },
      {
        title: 'Internal operations tooling',
        description:
          'The dashboards and back-office tools that finance teams otherwise build in spreadsheets, rebuilt with permissions and an audit trail.',
      },
    ],
    relatedServices: [
      'custom-software-development',
      'ai-development',
      'api-development',
      'cloud-devops',
    ],
    faqs: [
      {
        question: 'Can you build financial software that meets audit requirements?',
        answer:
          'We build with audit in mind — append-only records, traceable derivations, and scoped access logging — which is what auditors examine. We are engineers rather than a compliance authority, so we work alongside your compliance advisors and build to the controls they specify rather than certifying the result ourselves.',
      },
      {
        question: 'Is it safe to use AI in a financial product?',
        answer:
          'It depends entirely on where you put it. Reading documents, triaging exceptions, and summarising cases are safe and genuinely useful. Deciding a balance, approving a payment, or being the sole basis for a customer-facing decision is not. We draw that line explicitly at design time.',
      },
      {
        question: 'How do you handle sensitive financial data during development?',
        answer:
          'Development and testing run against synthetic or anonymised data, with access to production data scoped to what a task needs and logged. Specific arrangements depend on your obligations, so we agree them before the first commit rather than after.',
      },
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare & life sciences',
    cardDescription:
      'Clinical and operational software where privacy is a design constraint, not a policy page.',
    primaryKeyword: 'ai for healthcare',
    metaTitle: 'AI & Software Development for Healthcare | Auravon AI',
    metaDescription:
      'Healthcare software and AI built around data minimisation, consent, and clinician workflow — from intake automation to operational tooling.',
    h1: 'AI and software engineering for healthcare',
    summary:
      'Healthcare software carries two constraints most sectors do not: the data is among the most sensitive a person has, and the people using the software are busy, interrupted, and cannot afford a confusing interface. We build clinical and operational systems that respect both, and we are explicit about where AI belongs and where it does not.',
    intro: [
      'The most common mistake in healthcare AI is building something that answers a clinical question. That is a regulated medical device in most jurisdictions, and it is a different undertaking to what most teams think they are commissioning. The far larger, far less risky opportunity is operational: the paperwork, scheduling, intake, and coding that consume clinician time without touching clinical judgement.',
      'So we bias toward the administrative layer, where the benefit is real and the failure mode is a corrected form rather than a harmed patient. Where a project genuinely does need clinical decision support, that changes the regulatory path and we say so before the estimate, not after.',
    ],
    constraints: [
      {
        title: 'Collect the minimum, keep it the shortest time',
        description:
          'Data minimisation is the cheapest privacy control available and the one most often skipped. Fields that are not needed are not collected; records that have served their purpose expire.',
      },
      {
        title: 'Consent has to be modelled, not implied',
        description:
          'Who agreed to what, when, and for which purpose is a first-class part of the schema. Bolting it on later means it cannot be answered retrospectively.',
      },
      {
        title: 'Clinical decision support is a regulated path',
        description:
          'Software that informs diagnosis or treatment is a medical device in most jurisdictions. We flag that boundary at scoping, because crossing it changes timeline, cost, and who has to approve the result.',
      },
    ],
    applications: [
      {
        title: 'Intake and documentation automation',
        description:
          'Forms, histories, and referral letters turned into structured records, reducing the transcription load that falls on clinical staff.',
      },
      {
        title: 'Scheduling and capacity tooling',
        description:
          'Systems that handle the real complexity — rooms, equipment, staff availability, cancellations — rather than a calendar with extra fields.',
      },
      {
        title: 'Operational dashboards',
        description:
          'Wait times, throughput, and backlog visible to the people who can act on them, built on data the organisation already holds.',
      },
      {
        title: 'Secure integration between systems',
        description:
          'Connecting practice-management, records, and billing systems that were never designed to talk to each other, without copying more data than the integration needs.',
      },
    ],
    relatedServices: [
      'custom-software-development',
      'ai-development',
      'web-application-development',
      'api-development',
    ],
    faqs: [
      {
        question: 'Can AI be used for diagnosis or treatment decisions?',
        answer:
          'Software that informs diagnosis or treatment is generally a regulated medical device, with the approval process that implies. Most healthcare AI value is administrative rather than clinical — intake, documentation, scheduling, coding — and that work carries none of the same regulatory burden. We are explicit about which side of that line a project sits on.',
      },
      {
        question: 'How is patient data protected in what you build?',
        answer:
          'Through design rather than policy: collect the minimum fields needed, scope and log access, encrypt in transit and at rest, and expire records that have served their purpose. Your specific regulatory obligations set the detail, and we build to them rather than to a generic checklist.',
      },
      {
        question: 'Do you work with existing hospital or practice systems?',
        answer:
          'Usually, yes — most healthcare projects are integration work rather than greenfield. The practical constraint is what the incumbent system exposes; some have modern APIs and some have a nightly file drop, and that difference materially changes the approach and the estimate.',
      },
    ],
  },
  {
    slug: 'logistics',
    name: 'Logistics & supply chain',
    cardDescription:
      'Planning, tracking, and exception handling for operations that run on thin margins.',
    primaryKeyword: 'ai for logistics',
    metaTitle: 'AI & Software Development for Logistics | Auravon AI',
    metaDescription:
      'Logistics software and AI: route and load planning, shipment visibility, document processing, and the exception handling a plan lives or dies by.',
    h1: 'AI and software engineering for logistics',
    summary:
      'Logistics software succeeds or fails on how it handles the day going wrong. Plans are easy; the value is in what happens when a vehicle breaks down, a dock is blocked, or a shipment is short. We build planning, visibility, and exception-handling systems designed around the disruption rather than the happy path.',
    intro: [
      'Margins in logistics are thin enough that small percentage improvements are worth real money, which makes it one of the few sectors where optimisation genuinely pays for itself. It is also a sector where the data is messier than anyone expects — scanned paperwork, inconsistent addresses, timestamps from systems that disagree.',
      'That messiness is where AI earns its place here. Not in replacing the planner, but in cleaning up the inputs the planner depends on and flagging the exceptions early enough to act on.',
    ],
    constraints: [
      {
        title: 'The plan is a starting position',
        description:
          'Systems that only model the intended sequence break on contact with a real operating day. Exceptions are the primary flow, not an error path bolted on at the end.',
      },
      {
        title: 'Inputs are dirtier than the spec admits',
        description:
          'Addresses are inconsistent, documents are scanned, and clocks disagree. Ingestion has to normalise and flag rather than assume, or the optimisation runs on numbers nobody trusts.',
      },
      {
        title: 'Offline is a normal state',
        description:
          'Drivers and warehouse staff lose signal routinely. Anything used in the field queues locally and reconciles later, or it will be abandoned within a week.',
      },
    ],
    applications: [
      {
        title: 'Route and load planning',
        description:
          'Optimisation against the constraints that actually bind — vehicle capacity, delivery windows, driver hours — with the ability to replan mid-day.',
      },
      {
        title: 'Shipment visibility',
        description:
          'One reliable view of where things are, assembled from carrier feeds, scans, and telematics that each tell a slightly different story.',
      },
      {
        title: 'Document and proof-of-delivery processing',
        description:
          'Bills of lading, customs paperwork, and signed dockets extracted into structured data instead of a folder of images nobody can query.',
      },
      {
        title: 'Exception detection',
        description:
          'Flagging the shipment that will miss its window while there is still time to do something, rather than reporting it afterwards.',
      },
    ],
    relatedServices: [
      'custom-software-development',
      'ai-development',
      'mobile-application-development',
      'api-development',
    ],
    faqs: [
      {
        question: 'Can AI reduce logistics costs?',
        answer:
          'Sometimes substantially, but rarely where people first look. The reliable gains come from cleaning up inputs and catching exceptions early rather than from a smarter routing algorithm — most operations lose more to bad data and late information than to suboptimal routes.',
      },
      {
        question: 'Do you integrate with existing TMS or WMS platforms?',
        answer:
          'Yes, and it is usually the bulk of the work. What matters is what the incumbent exposes: a documented API is straightforward, a nightly CSV export is workable, and a system with neither means the integration is the project rather than a step in it.',
      },
      {
        question: 'Will field staff actually use it?',
        answer:
          'Only if it works with poor signal, on the device they already carry, in fewer taps than what it replaces. Field tooling that ignores any of those three gets abandoned regardless of how good the back office thinks it is.',
      },
    ],
  },
  {
    slug: 'ecommerce',
    name: 'Ecommerce & retail',
    cardDescription:
      'Storefronts, catalogue operations, and the systems behind them at real volume.',
    primaryKeyword: 'ai for ecommerce',
    metaTitle: 'AI & Software Development for Ecommerce | Auravon AI',
    metaDescription:
      'Ecommerce engineering and AI: catalogue automation, search and recommendations, inventory sync, and custom platforms for those past the templates.',
    h1: 'AI and software engineering for ecommerce',
    summary:
      'Most ecommerce businesses do not need a new storefront; they need the systems behind it to stop losing them money. Catalogue data, inventory accuracy, search quality, and the integrations between channels are where revenue actually leaks. We build the layer underneath, and the storefront when the platform genuinely has become the constraint.',
    intro: [
      'There is a point where a hosted platform stops being leverage and starts being a ceiling — usually around catalogue complexity, bespoke pricing, or a channel the platform will not integrate with cleanly. Recognising that point matters, because migrating early is expensive and migrating late is worse.',
      'Before that point, the highest-return work is almost never the storefront. It is the catalogue enrichment, the inventory sync that stops overselling, and the search that lets people find what you actually stock.',
    ],
    constraints: [
      {
        title: 'Catalogue quality sets the ceiling',
        description:
          'Search, recommendations, and ad feeds all read the same product data. Bad attributes degrade every one of them at once, which is why enrichment usually outperforms a new front end.',
      },
      {
        title: 'Inventory truth is distributed',
        description:
          'Stock lives in a warehouse system, a marketplace, and a storefront that each believe something slightly different. Reconciling that is what stops overselling.',
      },
      {
        title: 'Traffic is spiky by design',
        description:
          'A campaign or a sale multiplies load in minutes. Capacity has to be provisioned for the spike, not the average, and tested before the campaign rather than during it.',
      },
    ],
    applications: [
      {
        title: 'Catalogue enrichment and automation',
        description:
          'Generating and normalising product attributes, descriptions, and categorisation across a catalogue too large to maintain by hand.',
      },
      {
        title: 'Search and recommendations',
        description:
          'Search that understands what a shopper meant and merchandising logic that reflects margin and stock, not just popularity.',
      },
      {
        title: 'Inventory and order sync',
        description:
          'One reconciled view of stock across storefront, marketplaces, and warehouse, with conflict handling that does not silently pick a winner.',
      },
      {
        title: 'Custom commerce platforms',
        description:
          'When bespoke pricing, complex bundles, or B2B ordering rules have outgrown what a hosted platform will do.',
      },
    ],
    relatedServices: [
      'web-application-development',
      'ai-development',
      'api-development',
      'cloud-devops',
    ],
    faqs: [
      {
        question: 'Should I move off Shopify or WooCommerce to a custom platform?',
        answer:
          'Usually not. Hosted platforms handle payments, security, and scaling well, and rebuilding that is expensive. The genuine reasons to move are bespoke pricing or bundling the platform cannot express, B2B ordering rules, or an integration it will not support — not dissatisfaction with the theme.',
      },
      {
        question: 'Where does AI actually help in ecommerce?',
        answer:
          'Catalogue work first: generating and normalising attributes and descriptions across thousands of products is genuinely tedious and genuinely automatable. Search relevance and support triage follow. Personalised recommendations help at volume but need real traffic before the results beat simple popularity ranking.',
      },
      {
        question: 'Can you work with our existing store rather than replacing it?',
        answer:
          'Yes, and that is the more common engagement. Most of the value sits in the systems around the storefront — catalogue, inventory, integrations — which can be improved without touching the platform your team already knows.',
      },
    ],
  },
  {
    slug: 'edtech',
    name: 'Education & EdTech',
    cardDescription:
      'Learning platforms, assessment tooling, and content systems that hold up under a term-time load.',
    primaryKeyword: 'ai for education',
    metaTitle: 'AI & Software Development for Education | Auravon AI',
    metaDescription:
      'EdTech engineering and AI: learning platforms, assessment and feedback tooling, content generation, and the safeguarding younger users require.',
    h1: 'AI and software engineering for education',
    summary:
      'Education software has a usage pattern almost nothing else shares: near-zero load for weeks, then every user arriving within the same hour on results day. It also frequently involves minors, which changes what you may collect and how content must be filtered. We build learning platforms and assessment tooling around both realities.',
    intro: [
      'The load pattern is the technical headline. An education platform can be comfortably idle for a month and then face its entire user base simultaneously, and systems sized for the average fall over exactly when they matter most.',
      'The other constraint is who the users are. Where a platform touches minors, data collection, content filtering, and moderation stop being product decisions and become obligations — and they are far cheaper to design in than to retrofit.',
    ],
    constraints: [
      {
        title: 'Load is seasonal and extremely peaky',
        description:
          'Enrolment, submission deadlines, and results days concentrate the entire user base into short windows. Capacity is planned for those hours, not for the monthly average.',
      },
      {
        title: 'Younger users change the rules',
        description:
          'Where minors are involved, data minimisation, content filtering, and moderation are requirements rather than features, and they shape the schema and the model choices.',
      },
      {
        title: 'AI feedback assists, it does not grade alone',
        description:
          'Model-generated feedback is useful and fast; unreviewed automated grading of consequential assessment is not defensible to a student who challenges it. A human stays in the loop where the result counts.',
      },
    ],
    applications: [
      {
        title: 'Learning platforms',
        description:
          'Course delivery, progress tracking, and cohort management built to hold up during the enrolment and deadline peaks.',
      },
      {
        title: 'Assessment and feedback tooling',
        description:
          'Draft feedback generated at speed and surfaced for an educator to review, edit, and approve — reducing marking time without removing judgement.',
      },
      {
        title: 'Content generation and adaptation',
        description:
          'Producing practice material and reformatting existing content for different levels, with subject-matter review before it reaches learners.',
      },
      {
        title: 'Institutional integration',
        description:
          'Connecting to student information systems and single sign-on so the platform fits the institution rather than duplicating its records.',
      },
    ],
    relatedServices: [
      'web-application-development',
      'saas-development',
      'ai-development',
      'cloud-devops',
    ],
    faqs: [
      {
        question: 'Can AI grade student work?',
        answer:
          'It can produce useful draft feedback quickly, and that saves genuine time. Grading consequential assessment without human review is a different matter — it is difficult to defend when a student challenges a mark, and the appeal is where the system gets tested. We build it as assistance with an educator approving the result.',
      },
      {
        question: 'How do you handle platforms used by children?',
        answer:
          'By collecting as little as the product genuinely needs, filtering generated content before it reaches a learner, and building moderation in from the start. The specific obligations vary by jurisdiction and age group, so those are settled at scoping rather than assumed.',
      },
      {
        question: 'Can the platform handle enrolment and results-day traffic?',
        answer:
          'That is the main thing worth engineering for in education. It means load testing against the peak rather than the average, and infrastructure that scales for a few hours without being paid for year-round.',
      },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real estate & property',
    cardDescription:
      'Listing platforms, document-heavy workflows, and portfolio tooling.',
    primaryKeyword: 'ai for real estate',
    metaTitle: 'AI & Software Development for Real Estate | Auravon AI',
    metaDescription:
      'Property software and AI: listing platforms, lease and contract extraction, portfolio dashboards, and the workflow tooling that replaces spreadsheets and email.',
    h1: 'AI and software engineering for real estate',
    summary:
      'Property is a document business wearing a transaction business as a coat. Leases, titles, surveys, and valuations carry the information that decisions depend on, and most of it sits in PDFs nobody can query. We build listing platforms, extraction pipelines, and portfolio tooling that turn those documents into something searchable.',
    intro: [
      'The recurring pattern in property work is a portfolio managed through spreadsheets and an inbox, where answering a straightforward question — which leases break next year, which properties are under-insured — means someone opening files one by one.',
      'That is a well-suited problem: the documents are semi-structured, the questions are repetitive, and extraction with a review step is far more reliable than extraction alone. The value is not a clever model, it is that a question which took a day now takes a query.',
    ],
    constraints: [
      {
        title: 'The source of truth is a PDF',
        description:
          'Leases and titles are the record, and they are unstructured. Extraction has to preserve a link back to the clause it came from, or nobody will trust the extracted figure.',
      },
      {
        title: 'Extraction needs a review step',
        description:
          'A misread break clause or rent review date is a commercially significant error. Confidence scores and a human check on low-confidence fields are part of the design, not an optional extra.',
      },
      {
        title: 'Listing data is time-sensitive and duplicated',
        description:
          'The same property appears across portals with different details and different staleness. Reconciliation and clear precedence rules matter more than the ingestion itself.',
      },
    ],
    applications: [
      {
        title: 'Lease and contract extraction',
        description:
          'Key dates, rents, break clauses, and obligations pulled into a queryable structure, each field linked back to the clause it came from.',
      },
      {
        title: 'Listing platforms and portals',
        description:
          'Search, media handling, and enquiry routing built for property-specific filtering rather than a generic catalogue.',
      },
      {
        title: 'Portfolio dashboards',
        description:
          'Rent roll, upcoming events, and exposure visible in one place instead of assembled by hand each quarter.',
      },
      {
        title: 'Transaction and workflow tooling',
        description:
          'Tracking a deal through its stages with the documents attached, replacing the email thread that currently holds the state.',
      },
    ],
    relatedServices: [
      'custom-software-development',
      'ai-development',
      'web-application-development',
      'ui-ux-design',
    ],
    faqs: [
      {
        question: 'Can AI read leases and contracts reliably?',
        answer:
          'It reads them well enough to be useful and not well enough to be trusted unchecked. The workable design extracts fields with confidence scores, links each back to its source clause, and routes anything uncertain to a human — which is still far faster than reading every document.',
      },
      {
        question: 'What is the highest-return property software project?',
        answer:
          'Usually making existing documents queryable. Most property businesses already hold the information they need and simply cannot ask questions of it, so extraction and a portfolio view tend to return more than a new customer-facing platform.',
      },
      {
        question: 'Do you build listing portals?',
        answer:
          'Yes. The parts worth engineering carefully are property-specific search and filtering, media handling at volume, and enquiry routing — a generic catalogue treated as a property portal is where these usually go wrong.',
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────────────
   Lookups
   ──────────────────────────────────────────────────────────────────────── */

const bySlug = new Map(industries.map((industry) => [industry.slug, industry]));

export function getIndustry(slug: string): Industry | undefined {
  return bySlug.get(slug);
}

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}

/** `/industries/<slug>`. Never hard-code this shape in a component. */
export function industryPath(slug?: string): string {
  return slug ? `/industries/${slug}` : '/industries';
}

/** Industries that name a given service. Powers the reverse link on spokes. */
export function getIndustriesForService(serviceSlug: string): Industry[] {
  return industries.filter((industry) =>
    industry.relatedServices.includes(serviceSlug),
  );
}

/* ────────────────────────────────────────────────────────────────────────
   Build-time guards
   ──────────────────────────────────────────────────────────────────────── */

const seen = new Set<string>();
for (const industry of industries) {
  if (seen.has(industry.slug)) {
    throw new Error(`[industries] duplicate slug: "${industry.slug}"`);
  }
  seen.add(industry.slug);
}

const serviceSlugs = new Set(getAllServicePageSlugs());
for (const industry of industries) {
  for (const slug of industry.relatedServices) {
    if (!serviceSlugs.has(slug)) {
      throw new Error(
        `[industries] "${industry.slug}" lists relatedServices "${slug}", which is not a service page`,
      );
    }
  }
}
