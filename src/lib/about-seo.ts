/**
 * `/about` — content and structured data for the About page.
 *
 * Why this file exists
 * --------------------
 * Same contract as `seo.ts` and `services-seo.ts`: every array here is
 * consumed by BOTH a rendered component and a JSON-LD node. Structured data
 * is only valid when it describes what a visitor can actually see, so each
 * list has exactly one definition. Never hand-write a second copy inside a
 * `<script type="application/ld+json">`.
 *
 * What this page is for
 * ---------------------
 * The primary keyword is **AI Development Company**, but this page is
 * deliberately built to *support* the homepage rather than compete with it.
 * The homepage answers "what does an AI development company do and can they
 * build my thing"; `/services` answers "what exactly can I buy"; this page
 * answers "who are these people and why should I believe them". That is
 * about-intent, and it is the E-E-A-T page of the site: experience, working
 * practice, transparency, and the things we will say no to.
 *
 * Practical consequence: the keyword appears where it is load-bearing — the
 * title, the H1, the opening paragraph, one H2 — and nowhere else for its own
 * sake. A page that repeats "AI development company" in every heading reads
 * as a landing page, which is the exact signal that would make it compete
 * with the homepage instead of reinforcing it.
 *
 * Honest-claims policy
 * --------------------
 * Nothing here asserts a number we cannot substantiate — no client counts, no
 * project totals, no satisfaction percentages, no unearned logos. The About
 * page is where a serious buyer checks those first, and an invented figure
 * costs more trust than it buys. The absence is made explicit on the page
 * itself (see `honestLimits`), which turns a gap into a signal.
 */

import { ORG_ID, type Faq } from './seo';

/* ────────────────────────────────────────────────────────────────────────
   Page metadata
   ──────────────────────────────────────────────────────────────────────── */

export const ABOUT_SEO = {
  /**
   * 58 characters. "About Us" leads because the dominant query for this URL
   * is about-intent, not commercial; the primary keyword sits in the middle
   * where it still carries weight; the brand closes so BaseLayout's "append
   * brand unless already present" rule leaves the title alone.
   */
  title: 'About Us | AI Development Company & Engineers | Auravon AI',
  /**
   * 146 characters — inside Google's ~155 truncation point, so the last
   * clause survives into the snippet instead of trailing past it. Written for
   * someone deciding whether to trust us, not someone shopping for a service.
   */
  description:
    'Auravon AI is an AI development company run by engineers, not account managers. How we scope, build, evaluate, and maintain production AI systems.',
  canonical: '/about',

  /** Social copy is deliberately not a duplicate of the meta description. */
  ogTitle: 'About Auravon AI — The Engineering Team Behind the Build',
  /** Kept under ~200 characters so LinkedIn and X do not clip the last clause. */
  ogDescription:
    'A small, senior team building production AI systems and the software around them. How we work, what we own, and what we will talk you out of before you spend a budget.',
  twitterTitle: 'About Auravon AI — AI Development Company',
  twitterDescription:
    'Who we are, how we work, and what we say no to. The engineering team behind Auravon AI.',
} as const;

/**
 * The hero's opening paragraph, and the `description` on the AboutPage node.
 *
 * These are the same string on purpose — a schema description that appears
 * nowhere on the page is exactly the drift this file exists to prevent.
 * Rendered by AboutHero.astro.
 */
export const ABOUT_INTRO =
  'Auravon AI is an AI development company. We are a small, senior engineering team that designs, builds, evaluates, and maintains production AI systems — AI agents, generative AI applications, and the custom software they live inside — for startups and established businesses worldwide.';

/**
 * Second hero paragraph. Establishes the differentiator that the rest of the
 * page substantiates, and states the company's own scope honestly: small,
 * few projects at a time.
 */
export const ABOUT_LEDE =
  'We take on a small number of projects at a time, which means the people scoping your system are the people writing it. There is no account layer between you and the engineering, no requirements relay, and no hand-off to a team you have not met.';

/* ────────────────────────────────────────────────────────────────────────
   What we do — the internal-linking hub
   ────────────────────────────────────────────────────────────────────────

   An About page that describes the company but never routes anywhere is a
   dead end for both readers and crawlers. This block is the page's main
   internal-link surface: every commercial page and both proof surfaces
   (delivered work, published writing) are one click away, with descriptive
   anchor text rather than "learn more".

   Every href here resolves to a page that exists today. */

export interface AboutLink {
  /** Key into the icon map in AboutWhatWeDo.astro. */
  icon: string;
  title: string;
  description: string;
  href: string;
  /** Anchor text. Descriptive, never "read more". */
  linkLabel: string;
}

export const whatWeDo: readonly AboutLink[] = [
  {
    icon: 'Brain',
    title: 'AI development',
    description:
      'AI agents, generative AI systems, retrieval-augmented assistants, and the evaluation work that decides whether any of it survives contact with real users.',
    href: '/services',
    linkLabel: 'AI development services',
  },
  {
    icon: 'Code2',
    title: 'Custom software development',
    description:
      'The applications, dashboards, APIs, and SaaS platforms an AI feature has to live inside before a team can actually depend on it.',
    href: '/services#custom-software-development',
    linkLabel: 'Custom software development',
  },
  {
    icon: 'Layers',
    title: 'Delivered systems',
    description:
      'Work we have shipped, with the architecture decisions and the trade-offs behind each one rather than a wall of logos.',
    href: '/projects',
    linkLabel: 'See our work',
  },
  {
    icon: 'BookOpen',
    title: 'Written practice',
    description:
      'What we have learned running AI in production, published in full — including cost, failure modes, and the approaches that did not work.',
    href: '/blog',
    linkLabel: 'Read the engineering blog',
  },
];

/* ────────────────────────────────────────────────────────────────────────
   How we work with you
   ────────────────────────────────────────────────────────────────────────

   Deliberately NOT a second copy of `deliveryProcess` in services-seo.ts.
   That list describes the phases of an engagement — a commercial answer to
   "what do I get". This one describes the working relationship: who you talk
   to, how decisions are made, what happens when we are wrong. Same company,
   different question, no duplicated content between the two pages. */

export const workingPractice = [
  {
    title: 'You talk to the engineers',
    description:
      'The person who scopes your project is the person who writes the code and the person who answers when something breaks at 11pm. Requirements lose detail every time they are relayed, so we removed the relay.',
  },
  {
    title: 'Scope is written before it is priced',
    description:
      'Fixed quotes issued before anyone has seen your data model are guesses that get revised upward. We run a paid discovery first, then price against a written scope — including an explicit list of what is out of it.',
  },
  {
    title: 'Progress is something you can open',
    description:
      'Working software on a real environment every one to two weeks, not a status percentage in a spreadsheet. Direction gets corrected in week three, while correcting it is still cheap.',
  },
  {
    title: 'Accuracy is measured, not asserted',
    description:
      'Every AI engagement defines an evaluation set and a pass threshold before the build starts. "It seems to work well" is not an acceptance criterion, and a demo is not evidence.',
  },
  {
    title: 'We flag problems while they are still small',
    description:
      'When an approach is not working, you hear it that week — not in a status report a month later. Early bad news is the cheapest thing we can give you.',
  },
  {
    title: 'Handover is part of delivery',
    description:
      'Architecture notes, runbooks, and a codebase another engineering team could take over. Included in the engagement, never quoted afterwards as a separate phase.',
  },
] as const;

/* ────────────────────────────────────────────────────────────────────────
   The engineering team — the Expertise half of E-E-A-T
   ────────────────────────────────────────────────────────────────────────

   Stated as disciplines actually practised in delivered work, with the real
   stack attached. Vague capability claims ("world-class AI experts") are
   unfalsifiable and read as filler; a named discipline with named tools is
   checkable in a technical call, which is the point. */

export interface Discipline {
  /** Key into the icon map in AboutTeam.astro. */
  icon: string;
  title: string;
  description: string;
  stack: string[];
}

export const disciplines: readonly Discipline[] = [
  {
    icon: 'Brain',
    title: 'Applied AI engineering',
    description:
      'Model and architecture selection on accuracy, latency, and cost per request; retrieval design; prompt architecture under version control; evaluation sets with agreed thresholds; agent tool boundaries and approval gates.',
    stack: ['Claude', 'GPT', 'Llama', 'LangGraph', 'pgvector', 'MCP'],
  },
  {
    icon: 'Blocks',
    title: 'Product and platform engineering',
    description:
      'The application layer around a model and the products where no model is involved at all: multi-tenant SaaS, internal tools, APIs, integrations, and the data model underneath them.',
    stack: ['TypeScript', 'Next.js', 'Python', 'FastAPI', 'PostgreSQL', 'Redis'],
  },
  {
    icon: 'Cloud',
    title: 'Infrastructure and operations',
    description:
      'CI/CD, infrastructure as code, staging environments, monitoring and alerting, tested restore procedures, and per-model spend caps so an AI workload cannot quietly run away with a budget.',
    stack: ['AWS', 'Vercel', 'Docker', 'Terraform', 'GitHub Actions', 'Sentry'],
  },
  {
    icon: 'Palette',
    title: 'Interface and interaction design',
    description:
      'Product design rather than decoration — and for AI products, the specifically hard parts: showing uncertainty, citing sources, and giving a user a way to correct a wrong answer without leaving the workflow.',
    stack: ['Figma', 'Design tokens', 'WCAG 2.2 AA'],
  },
];

/*
 * REMOVED: `companyFacts`, a hero definition list reading "Building software
 * since 2019 / Registered in Vadodara, Gujarat, India / Clients: Remote,
 * worldwide / Team shape: Small and senior".
 *
 * Those values were inferred — the year from the old page's timeline, the
 * location from `organizationSchema` — and presented as verified facts. They
 * were not verified, and at least one was wrong.
 *
 * Do not add a facts strip back without confirming every value with the
 * business first. This is the page where a buyer checks claims; a wrong one
 * costs more here than anywhere else on the site.
 */

/* ────────────────────────────────────────────────────────────────────────
   Engineering principles
   ──────────────────────────────────────────────────────────────────────── */

export interface Principle {
  /** Key into the icon map in AboutPrinciples.astro. */
  icon: string;
  title: string;
  description: string;
}

export const principles: readonly Principle[] = [
  {
    icon: 'Code2',
    title: 'Maintainability first',
    description:
      'Fast delivery is worth nothing if the codebase is unmanageable in three months. We write systems that future engineers — including yours — can read, extend, and debug without an introduction.',
  },
  {
    icon: 'Layers',
    title: 'Architecture before components',
    description:
      'Data model, system boundaries, and integration points are settled before implementation starts. Structural decisions are the expensive ones to reverse halfway through a build.',
  },
  {
    icon: 'Gauge',
    title: 'Build for the failure path',
    description:
      'Most AI projects die between a convincing demo and a Monday morning. Retrieval quality, edge cases, retries, rate limits, and what happens when a provider errors at 2am get designed first.',
  },
  {
    icon: 'Globe',
    title: 'Design for growth, not for applause',
    description:
      'Systems are built to scale where scale is plausible, and kept simple everywhere else. Premature abstraction is technical debt that arrives dressed as good engineering.',
  },
  {
    icon: 'MessageSquare',
    title: 'Direct, unfiltered communication',
    description:
      'Honest progress updates, early flags, and plain language about risk. No status theatre and no requirements translated through a layer of account management.',
  },
  {
    icon: 'Scale',
    title: 'Trade-offs stated out loud',
    description:
      'Every technical choice costs something. We name what it costs — including the times the simpler, cheaper, less impressive option is the correct one.',
  },
];

/* ────────────────────────────────────────────────────────────────────────
   Transparency — the trust half of the page
   ────────────────────────────────────────────────────────────────────────

   The commitments a buyer can hold us to, and the things we will actively
   tell you not to do. The last item explains the deliberate absence of the
   metrics every competitor's About page carries, which is a stronger signal
   than the metrics would have been. */

export const commitments = [
  {
    title: 'You own everything, by contract',
    description:
      'Code, prompts, evaluation sets, infrastructure definitions, and documentation are yours. No hosting lock-in, no licence on your own system, no leverage held back for renewal season.',
  },
  {
    title: 'Your data stays where you decide',
    description:
      'Frontier APIs, open-weight models in your own cloud, or on-premise — chosen against your data-residency and compliance constraints, and written down before the build rather than after an audit.',
  },
  {
    title: 'Pricing follows a written scope',
    description:
      'Costs are tied to milestones agreed after discovery, not to a headline number produced before anyone understood your exceptions.',
  },
  {
    title: 'The discovery is yours either way',
    description:
      'Discovery is priced as its own engagement and the output belongs to you — including the option of taking it to a different firm. That is what keeps the recommendation honest.',
  },
] as const;

export const honestLimits = [
  'We will tell you when a rule, a query, or a redesigned form beats a model — and lose the line item.',
  'We will tell you when a subscription product will beat a custom build on cost and time.',
  'We will tell you when a project is larger than a team our size should take on.',
  'We do not publish client counts, star ratings, or logos we cannot substantiate on request.',
] as const;

/* ────────────────────────────────────────────────────────────────────────
   History — the Experience half of E-E-A-T
   ────────────────────────────────────────────────────────────────────────

   A timeline is the one place a small company can evidence experience
   without inventing metrics. Keep it factual and keep it current: a history
   that stops two years ago reads as an abandoned site. */

export const milestones = [
  {
    year: '2019',
    title: 'First delivered projects',
    description:
      'Small scope, real deadlines. Learning to estimate honestly, ship consistently, and say clearly when something would not be ready.',
  },
  {
    year: '2020',
    title: 'First SaaS build',
    description:
      'A complete multi-tenant product from schema to billing — built to replace a spreadsheet that had outgrown the founder maintaining it.',
  },
  {
    year: '2021',
    title: 'International engagements',
    description:
      'First clients outside India. Async-first working, written decisions over meetings, and delivery across time zones as the default rather than an accommodation.',
  },
  {
    year: '2022',
    title: 'Custom software and internal tools',
    description:
      'Dashboards, admin platforms, and operations systems. Longer engagements, deeper domain modelling, and the exceptions that never appear in a brief.',
  },
  {
    year: '2023',
    title: 'LLMs into production',
    description:
      'First language-model features in client products: document processing, internal search, support assistants. Learned quickly which claims about AI survive real usage.',
  },
  {
    year: '2024',
    title: 'A focused studio model',
    description:
      'Fewer, longer engagements, with most new work arriving by referral. Technical depth and reachability chosen over volume.',
  },
  // REMOVED: invented 2025 ("Retrieval and evaluation as practice") and 2026
  // ("Agentic systems in production") entries. Nobody confirmed either of
  // them — they were written to stop the timeline looking stale, which is not
  // a good enough reason to publish a claim about a real company's history.
  //
  // The six entries above came from the previous About page and were only
  // reworded here. They still need checking against what actually happened;
  // see docs/about-seo.md §7.
] as const;

/* ────────────────────────────────────────────────────────────────────────
   FAQ
   ────────────────────────────────────────────────────────────────────────

   Two groups, both about-intent:

   1. Vetting questions — how to choose and verify an AI development company.
      These belong on an About page specifically because the honest answer
      is a set of criteria a reader can apply to *us*, on the page where they
      are already deciding whether to trust us.
   2. Brand questions — who Auravon AI is, who you work with, what you own.

   OVERLAP WARNING (see docs/about-seo.md §7): five of these intents are also
   answered in `homeFaqs` in `seo.ts`. The answers here are written from a
   different angle and share no sentences with the homepage versions, but two
   FAQPage nodes on one site targeting the same query is still a split
   signal. The recommended resolution — prune the vetting questions from the
   homepage and let this page own them — is documented, not applied, because
   it changes a page outside this brief.

   Answer shape, as on the homepage and /services: the opening sentence is a
   complete, self-contained 40–55 word answer, because that is the unit a
   featured snippet or an AI Overview lifts. Supporting detail follows. Total
   80–150 words. An answer that opens with "It depends" or with brand copy
   cannot be extracted. */

export const aboutFaqs: readonly Faq[] = [
  {
    question: 'How to choose an AI development company?',
    answer:
      'The fastest way to assess an AI development company is to ask four questions on the first call and listen for how specific the answers are: what would you refuse to build with AI, how will you measure whether this is accurate enough to launch, who specifically writes the code, and what happens to this system if we stop paying you. A firm with production experience answers all four immediately and in concrete terms. Hesitation on measurement and on ownership are the two reliable warning signs, because those are the areas where inexperience is hardest to disguise in conversation. Then buy a small piece before you buy a large one — a short paid discovery tells you more about how a team works than any portfolio page can.',
  },
  {
    question: 'How to choose the right AI development company?',
    answer:
      'Choosing the right AI development company is a question of fit rather than capability: match the firm\'s size to the weight of your project, its experience to your stage, and its communication rhythm to how closely you need to be involved. Most disappointing engagements involve a firm that was perfectly competent and simply wrong for the job. A two-person team cannot absorb a twelve-month enterprise rollout; a large consultancy will often staff a small project with its most junior people. The team that gets a first version in front of users is rarely the team that hardens a system for regulated scale. Ask each shortlisted firm which part of your requirement they consider riskiest — the one that names something you had not thought of is usually the right answer.',
  },
  {
    question: 'How to find a trusted custom AI development company?',
    answer:
      'Trust in a custom AI development company should come from evidence you gathered yourself: a reference call with a company that shipped something comparable, a walkthrough of a real repository or architecture diagram given by the engineer who wrote it, and a contract whose IP clause you have personally read. Directory rankings and award badges mostly reflect marketing spend rather than engineering quality. Then reduce the remaining risk structurally instead of by intuition — begin with a small paid pilot that has a defined deliverable and a real deadline. A firm confident in its own work is happy to be judged on a small engagement before a large one, and a firm that resists being tested that way has told you something useful.',
  },
  {
    question: 'What is an AI app development company?',
    answer:
      'An AI app development company is a software firm that builds complete applications — mobile, web, or both — in which artificial intelligence is part of the product rather than a feature attached to it afterwards. In practice that means one team handling both the ordinary app engineering (accounts, permissions, payments, offline behaviour, store release) and the model work (integration, prompt design, retrieval, evaluation, and cost and latency control). The distinction worth checking when hiring one is whether the firm can build the whole application or only the model layer. A team that can wire up a model but not the authentication, background jobs, and audit history around it leaves you assembling a product from two vendors, each believing the gap belongs to the other.',
  },
  {
    question: 'How to choose an AI agent development company?',
    answer:
      'Choose an AI agent development company on the strength of its answer to a single question: what is the worst thing your agent can do without a human seeing it first? A team that has operated agents in production answers immediately, in terms of scoped tool permissions and approval gates. A team that has only demonstrated them changes the subject to frameworks and model choice. Follow it with the operational questions — how a half-finished task is rolled back or resumed, how each action is recorded so a failure can be attributed to a specific step, and how success is measured. Task-level completion across a fixed test set, rather than per-response scoring, is the answer that indicates real operating experience.',
  },
  {
    question: 'Who is Auravon AI?',
    answer:
      'Auravon AI is an AI development company and custom software studio that builds production AI systems — AI agents, generative AI applications, retrieval-augmented assistants, and the software they run inside — for startups and established businesses. We are a small, senior engineering team working remotely with clients worldwide. We take a deliberately small number of projects at a time so that the engineers who scope a system are the ones who build and maintain it. Our work covers applied AI engineering, product and platform engineering, infrastructure, and interface design under a single team, rather than split across subcontractors.',
  },
  {
    question: 'Who will I actually work with on my project?',
    answer:
      'You work directly with the engineers building your system, from the first scoping call through to post-launch support: no account manager relaying requirements, no discovery team handing off to an unfamiliar delivery team, and no quiet substitution of junior staff once the contract is signed. This is a deliberate constraint on how many projects we take at once, and it is the main reason we will decline work that is larger than the team can staff properly. Before you commit to anything, you can ask which named people would be assigned and speak to them — a request every serious firm should be able to satisfy.',
  },
  {
    question: 'Do I own the code and the AI models you build for me?',
    answer:
      'Yes — code, prompts, evaluation sets, infrastructure definitions, fine-tuned model artifacts, and documentation are all assigned to you by contract, and handover is part of delivery rather than a phase quoted afterwards. There is no hosting lock-in, no licence fee on your own system, and nothing structurally withheld to make leaving difficult. You can host with your own cloud accounts from day one if you prefer. We consider this non-negotiable rather than a concession: an engagement should continue because the work is good, not because the exit is expensive.',
  },
  {
    question: 'Does Auravon AI work with startups as well as larger companies?',
    answer:
      'Yes — we work with early-stage startups, funded scale-ups, and established businesses, and the engagement shape changes rather than the engineering standard. Startups usually need a costed discovery and a tightly scoped first release that can reach real users quickly. Larger organisations usually need integration with existing systems, data-residency decisions made explicitly, and documentation another team can operate from. What does not change is who you talk to or what you own at the end. Where a project is genuinely too large for a team our size, we will say so during scoping instead of accepting it and staffing it thinly.',
  },
];

/* ────────────────────────────────────────────────────────────────────────
   Structured data
   ────────────────────────────────────────────────────────────────────────

   Organization and WebSite are emitted site-wide by BaseLayout and are NOT
   repeated here — a second Organization node on one page reads to a parser as
   a second company. The AboutPage node references the site-wide entity by
   @id, and `organizationSchema.mainEntityOfPage` in seo.ts points back at
   this page, which is what nominates /about as the canonical description of
   the entity. */

export const ABOUT_PATH = '/about';

/** Referenced from the AboutPage node's `mainEntity`. */
export const aboutMainEntity = { '@id': ORG_ID };
