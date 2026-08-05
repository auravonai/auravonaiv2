/**
 * Product & strategy spokes (2).
 *
 * Keyword map:
 *   /services/ui-ux-design      → UI/UX design services
 *   /services/product-discovery → product discovery
 *
 * Cannibalisation note: `/services/graphic-design`, `/services/logo-design`,
 * and `/services/brand-identity-design` already exist as digital-marketing
 * pages. They target visual identity rather than product design, so the
 * overlap with `ui-ux-design` is partial — but the navbar presents them
 * together, which is confusing for a visitor. See
 * `docs/services-architecture.md` §5.
 */

import type { ServicePage } from './types';

export const productServices: ServicePage[] = [
  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'ui-ux-design',
    category: 'product',
    icon: 'Palette',
    cardTitle: 'UI/UX Design',
    cardDescription:
      'Product design, not decoration — flows, states, and a component system engineers build from directly.',
    badges: ['Figma', 'Design tokens', 'WCAG 2.2'],

    primaryKeyword: 'UI/UX design services',
    metaTitle: 'UI/UX Design Services for Software Products | Auravon AI',
    metaDescription:
      'UI/UX design services covering user flows, information architecture, interaction states, and a coded component system — plus the AI interface patterns.',
    ogTitle: 'UI/UX Design — Including the States Designed Last and Hit First',
    ogDescription:
      'Error, empty, loading, and permission-denied states are where products actually feel broken. We design those alongside the happy path, not after it.',

    h1: 'UI/UX Design Services',
    h1Tail: 'Product Design, Not Decoration',
    summary:
      'UI/UX design here is product design rather than decoration: user flows, information architecture, interaction states, and a component system engineers build from directly. For AI products we design the harder parts specifically — how uncertainty is shown, how sources are cited, and how a user corrects a wrong answer.',
    assurances: [
      'Design tokens implemented in code',
      'Every state designed, not just the happy path',
      'WCAG 2.2 AA as the baseline',
    ],

    introHeading: 'AI interfaces fail in a distinctive way',
    intro: [
      'A confident sentence with no source, no confidence signal, and no correction path teaches users either to over-trust the system or to stop using it. Both outcomes kill adoption, and neither is a model problem — they are interface decisions made early and rarely revisited.',
      'The same principle applies to conventional software. The error, empty, loading, and permission-denied states get designed last and encountered first, which is why we treat them as part of the flow rather than as edge cases to specify later.',
    ],

    problems: [
      {
        title: 'Designs that cannot be built as drawn',
        description:
          'Handover becomes a negotiation, engineers improvise the gaps, and the shipped product quietly diverges from the file.',
      },
      {
        title: 'Only the happy path exists',
        description:
          'Empty, loading, error, and permission-denied states are missing from the design, so they get invented under deadline pressure.',
      },
      {
        title: 'Inconsistency that compounds',
        description:
          'Six variants of the same button because there is no component system, and every new screen adds another.',
      },
      {
        title: 'AI output with nothing to check',
        description:
          'No citation, no confidence signal, no correction path — so users either over-trust it or abandon it, and both look like a model problem.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Understand the jobs',
        description:
          'What each user is actually trying to finish, mapped end to end — including the tasks they currently do outside your product.',
      },
      {
        step: '02',
        title: 'Structure the information',
        description:
          'Navigation and hierarchy settled before visual design, because a beautiful screen in the wrong place is still the wrong place.',
      },
      {
        step: '03',
        title: 'Design every state',
        description:
          'Empty, loading, partial, error, and permission-denied designed alongside the happy path rather than specified afterwards.',
      },
      {
        step: '04',
        title: 'Build the system in code',
        description:
          'Tokens and components defined once and implemented directly, so the built product matches the design without a reconciliation phase.',
      },
      {
        step: '05',
        title: 'Design the AI surfaces',
        description:
          'Streaming and latency states, citation display, confidence signals, correction flows, and clear limits on what runs unattended.',
      },
    ],

    benefits: [
      {
        title: 'Handover without translation',
        description:
          'Tokens and components live in code, so what engineering ships is what design specified rather than an interpretation of it.',
      },
      {
        title: 'A product that holds up under stress',
        description:
          'The states users actually hit — empty, slow, failed, forbidden — are designed, so the product degrades gracefully instead of looking broken.',
      },
      {
        title: 'Consistency that scales',
        description:
          'A real component system means the tenth screen costs less than the third, and the interface does not fragment as the team grows.',
      },
      {
        title: 'AI users can calibrate',
        description:
          'Citations, confidence signals, and correction paths let people judge when to trust an output — which is what sustains adoption.',
      },
    ],

    technologies: [
      { label: 'Design', items: ['Figma', 'Prototyping', 'Design tokens'] },
      { label: 'Implementation', items: ['Tailwind', 'React', 'Astro', 'CSS'] },
      { label: 'Standards', items: ['WCAG 2.2 AA', 'Keyboard operability', 'Screen-reader testing'] },
      { label: 'AI patterns', items: ['Citation display', 'Confidence signals', 'Streaming states'] },
    ],

    industriesLead:
      'Highest impact where the interface carries operational weight rather than only brand impression.',
    industries: [
      'B2B software',
      'Fintech',
      'Healthcare',
      'Insurance',
      'Logistics',
      'Education',
      'Marketplaces',
      'Professional services',
    ],

    faqs: [
      {
        question: 'What is the difference between UI/UX design and graphic design?',
        answer:
          'UI/UX design shapes how a product works: user flows, information architecture, interaction states, and the component system engineers build from. Graphic design shapes how a brand looks: logos, visual identity, and marketing collateral. They overlap in craft but answer different questions — one is measured by whether people can finish a task, the other by whether an audience recognises and remembers you. Most software projects need both, usually from different specialists.',
      },
      {
        question: 'Do you design AI-specific interfaces?',
        answer:
          'Yes, and it is a distinct discipline rather than conventional design applied to a chat window. The patterns that matter are showing uncertainty honestly, citing sources so a claim is checkable, handling streaming and latency without the interface feeling broken, giving users a correction path when output is wrong, and drawing clear boundaries around what the system may do unattended. Getting these wrong produces either over-trust or abandonment, and both are usually blamed on the model.',
      },
      {
        question: 'Do you hand over Figma files or working code?',
        answer:
          'Both, and the code is the part that matters. Figma carries the exploration and the specification; the deliverable that prevents drift is a component system implemented in code with design tokens — colour, spacing, typography, and radii defined once and consumed by both. Where engineering rebuilds a design from a static file, the two diverge within a release or two. We would rather spend that effort on the implementation than on a reconciliation phase later.',
      },
      {
        question: 'Can you redesign an existing product without a full rebuild?',
        answer:
          'Usually yes, and incrementally is generally the better approach. We start by building the token and component layer alongside the existing interface, then migrate screens in priority order so value lands continuously rather than at the end of a long redesign. This also keeps the risk contained: each migrated screen is independently testable and reversible. A full simultaneous redesign only makes sense when the information architecture itself is the problem.',
      },
    ],

    relatedArticles: [
      { label: 'Next.js performance optimization', href: '/blog/nextjs-performance-optimization' },
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
    ],
    relatedServices: ['product-discovery', 'web-application-development', 'mobile-application-development'],
    ctaHeading: 'Where do people get stuck in your product?',
    ctaBody:
      'Usually there are two or three screens where support tickets cluster. Those are the cheapest places to start.',
    ctaLabel: 'Discuss Product Design',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'product-discovery',
    category: 'product',
    icon: 'Map',
    cardTitle: 'Product Discovery',
    cardDescription:
      'A short paid engagement that turns an idea into a scope, a prototype, and a costed plan you own.',
    badges: ['Workshops', 'Prototypes', 'Risk register'],

    primaryKeyword: 'product discovery',
    metaTitle: 'Product Discovery & AI Strategy Sprints | Auravon AI',
    metaDescription:
      'Product discovery in two to three weeks: defined users and flows, a defensible scope, clickable prototypes, and a costed plan with the risks named.',
    ogTitle: 'Product Discovery — The Cheapest Place to Change Your Mind',
    ogDescription:
      'Deciding in week two that a feature is not worth building costs a conversation. Deciding it in month five costs a sprint and everyone who built it.',

    h1: 'Product Discovery',
    h1Tail: 'Decide Cheaply, Build Once',
    summary:
      'Product discovery is a short, paid engagement that turns an idea into a plan you can act on. In two to three weeks we define the users and their jobs, map the core flows, agree a scope you can defend to a board, produce clickable prototypes, and deliver a costed plan with the risks named.',
    assurances: [
      'Two to three weeks, fixed fee',
      'The output is yours to keep',
      'Includes what is explicitly out of scope',
    ],

    introHeading: 'Discovery is the cheapest place to change your mind',
    intro: [
      'Deciding in week two that a feature is not worth building costs a conversation. Deciding it in month five costs a sprint and the goodwill of everyone who built it. Discovery front-loads those decisions while they are still cheap to make and cheap to reverse.',
      'Every discovery we run is priced separately from any build, and the output is yours — including the option of taking it to another firm. That is what makes the scope recommendation trustworthy rather than a sales document with a prototype attached.',
    ],

    problems: [
      {
        title: 'A scope nobody can defend',
        description:
          'The feature list came from stakeholder requests, and there is no shared basis for saying no to the next one.',
      },
      {
        title: 'Estimates built on assumptions',
        description:
          'A number was quoted before anyone examined the data model or the exceptions, so it will move — always upward.',
      },
      {
        title: 'Investor conversations without evidence',
        description:
          'The idea is explained verbally because there is nothing clickable, and every listener imagines a different product.',
      },
      {
        title: 'Risks discovered during the build',
        description:
          'The integration that will not work, the compliance requirement nobody raised — surfacing in month three instead of week two.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Define users and jobs',
        description:
          'Who this is for and what they are actually trying to finish, stated concretely enough to rule features in and out.',
      },
      {
        step: '02',
        title: 'Map the core flows',
        description:
          'The two or three paths that carry the product\'s value, end to end, including where they touch systems you already run.',
      },
      {
        step: '03',
        title: 'Agree the scope — and the anti-scope',
        description:
          'A written scope with an explicit list of what is out of it. The second list prevents more disputes than the first ever has.',
      },
      {
        step: '04',
        title: 'Build clickable prototypes',
        description:
          'Usable for internal alignment, user testing, or an investor conversation before any production code exists.',
      },
      {
        step: '05',
        title: 'Cost it and name the risks',
        description:
          'Milestones, effort estimates, the assumptions each depends on, and a risk register stated plainly rather than discovered later.',
      },
    ],

    benefits: [
      {
        title: 'An estimate that holds',
        description:
          'Costing follows an examined data model and a written scope, so the number is a plan rather than an opening position.',
      },
      {
        title: 'Something to show',
        description:
          'A clickable prototype aligns a board, a user test, and an investor on the same product instead of three imagined ones.',
      },
      {
        title: 'Risks on the table early',
        description:
          'The integration that will not work is cheaper to find in week two than in month three, and discovery is designed to find it.',
      },
      {
        title: 'Portable, not locked in',
        description:
          'The scope, prototype, and plan are yours — including the option to build them with someone else.',
      },
    ],

    technologies: [
      { label: 'Research', items: ['Stakeholder workshops', 'User interviews', 'Job mapping'] },
      { label: 'Prototyping', items: ['Figma prototypes', 'Clickable flows'] },
      { label: 'Planning', items: ['Estimation', 'Milestone planning', 'Risk register'] },
      { label: 'Technical', items: ['Architecture sketch', 'Integration audit', 'Data modelling'] },
    ],

    industriesLead:
      'Valuable wherever the cost of building the wrong thing is larger than the cost of two weeks spent deciding.',
    industries: [
      'B2B software',
      'Fintech',
      'Healthtech',
      'Logistics',
      'E-commerce & retail',
      'Education',
      'Manufacturing',
      'Professional services',
    ],

    faqs: [
      {
        question: 'What do we actually receive from a discovery sprint?',
        answer:
          'Four documents and one prototype: a written scope with an explicit out-of-scope list, mapped core user flows, a clickable prototype of the paths that matter most, and a costed plan with milestones, effort estimates, and a risk register. All of it is yours to keep and to act on with any provider. The test we hold ourselves to is whether a different engineering firm could execute the plan from the documents alone.',
      },
      {
        question: 'Why pay for discovery instead of getting a free quote?',
        answer:
          'A free quote is produced before anyone has examined your data model, your integrations, or your exceptions — which is why it moves, always upward. Paid discovery replaces that guess with an examined estimate, and the two-to-three week cost is small against a build that gets scoped wrong. It also tests the working relationship on something small. If discovery goes badly, you have lost weeks rather than a quarter.',
      },
      {
        question: 'Do we have to build with you afterwards?',
        answer:
          'No, and the engagement is deliberately structured so that choice stays open. Discovery is priced as its own contract, the deliverables are yours by default, and they are written so another firm can execute from them. Some clients take the plan to an internal team; some use it to run a competitive tender. We would rather produce an honest scope you take elsewhere than a persuasive one you regret.',
      },
      {
        question: 'How is this different from AI consulting?',
        answer:
          'Product discovery answers "how exactly do we build this thing we have decided on" — users, flows, scope, prototype, cost. AI consulting answers the earlier question: "which of our problems is worth solving with AI at all", auditing workflows and data readiness across a business and ranking opportunities. If you already know what you want to build, start with discovery. If you have several competing ideas and no way to rank them, start with consulting.',
      },
    ],

    relatedArticles: [
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
      { label: 'SaaS pricing strategy for startups', href: '/blog/saas-pricing-strategy-startups' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
    ],
    relatedServices: ['ai-consulting', 'ui-ux-design', 'saas-development'],
    ctaHeading: 'Have an idea and no costed plan?',
    ctaBody:
      'Two to three weeks turns it into a scope, a prototype, and a number — and you keep all three regardless of who builds it.',
    ctaLabel: 'Book a Discovery Sprint',
  },
];
