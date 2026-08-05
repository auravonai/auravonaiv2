/**
 * Software engineering spokes (5).
 *
 * Keyword map:
 *   /services/custom-software-development     → custom software development
 *   /services/saas-development                → SaaS development
 *   /services/web-application-development     → web application development
 *   /services/mobile-application-development  → mobile app development
 *   /services/api-development                 → API development
 *
 * Cannibalisation note: `/services/website-development`, `/services/web-services`,
 * `/services/ecommerce-development` and `/services/custom-ecommerce-development`
 * already exist as digital-marketing pages from `digital-agency-data.ts` and
 * overlap the web-application spoke. That collision is real and is documented
 * in `docs/services-architecture.md` §5 — it needs a merge-or-redirect
 * decision, not another page.
 */

import type { ServicePage } from './types';

export const engineeringServices: ServicePage[] = [
  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'custom-software-development',
    category: 'engineering',
    icon: 'Blocks',
    cardTitle: 'Custom Software Development',
    cardDescription:
      'Internal tools, operations platforms, and management systems built for how your business actually runs.',
    badges: ['TypeScript', 'Python', 'PostgreSQL'],

    primaryKeyword: 'custom software development',
    metaTitle: 'Custom Software Development Services | Auravon AI',
    metaDescription:
      'Custom software development for internal tools, operations platforms, and dashboards — including the exceptions your team currently handles by hand.',
    ogTitle: 'Custom Software Development — Built Around Your Exceptions',
    ogDescription:
      'The requirement that breaks these projects is never in the brief. It is the case handled differently for one client, and the spreadsheet quietly reconciling two systems.',

    h1: 'Custom Software Development',
    h1Tail: 'Built Around How You Work',
    summary:
      'Custom software development delivers a system built for how your business actually runs, instead of forcing your process into an off-the-shelf product. We build internal tools, operations platforms, dashboards, portals, and management systems — including the exceptions your team currently handles by hand.',
    assurances: [
      'Discovery before a fixed price',
      'Documentation and handover included',
      'You own the code and the IP',
    ],

    introHeading: 'The requirement that breaks these projects is never in the brief',
    intro: [
      'It is the case handled differently for one client, the approval that skips a step when a manager is away, the spreadsheet that quietly reconciles two systems. We ask about those in discovery, because a custom system that cannot express them gets abandoned back to the spreadsheet within a year.',
      'Bespoke systems also live for a long time. That makes maintainability worth more than launch speed — the question we design against is whether another engineering team could take this over in three years without an introduction.',
    ],

    problems: [
      {
        title: 'A process no product has a field for',
        description:
          'Your workflow has exceptions that matter commercially, and every off-the-shelf option requires you to pretend they do not exist.',
      },
      {
        title: 'Spreadsheets holding the business together',
        description:
          'Critical reconciliation lives in a file on one person\'s machine, with no history, no validation, and no backup plan.',
      },
      {
        title: 'Per-seat licensing that scales badly',
        description:
          'Costs rise with headcount rather than with value, and the vendor\'s pricing changes are not yours to control.',
      },
      {
        title: 'Systems that cannot talk to each other',
        description:
          'Data is re-keyed between tools because no vendor will build the integration you need, and the errors compound quietly.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Map the real process',
        description:
          'Including the exceptions. We interview the people doing the work, not only the people specifying it, because those are different accounts.',
      },
      {
        step: '02',
        title: 'Model the domain',
        description:
          'Data modelled around how your business reasons about it rather than around a convenient table shape.',
      },
      {
        step: '03',
        title: 'Costed scope',
        description:
          'A written scope with an explicit list of what is out of it — the second list prevents more disputes than the first one ever has.',
      },
      {
        step: '04',
        title: 'Build in increments',
        description:
          'A working system connected to the tools already in use, reviewed every one to two weeks on a real environment.',
      },
      {
        step: '05',
        title: 'Document and hand over',
        description:
          'Architecture notes, runbooks, and a codebase another team could take over — part of the engagement, not a later quote.',
      },
    ],

    benefits: [
      {
        title: 'It fits the exceptions',
        description:
          'The cases your team works around today are designed in rather than designed out, which is why the system survives contact with reality.',
      },
      {
        title: 'Costs scale with usage, not headcount',
        description:
          'No per-seat ceiling, and no vendor repricing your operations because their roadmap changed.',
      },
      {
        title: 'Maintainable by someone else',
        description:
          'Readable code, documented decisions, and runbooks — because bespoke systems outlive the team that built them.',
      },
      {
        title: 'Integrated with what you run',
        description:
          'Connected to the CRM, ERP, and internal tools already in use, so it removes re-keying rather than adding another place to type.',
      },
    ],

    technologies: [
      { label: 'Application', items: ['TypeScript', 'Next.js', 'React', 'Astro'] },
      { label: 'Backend', items: ['Python', 'FastAPI', 'Node.js'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis', 'Prisma'] },
      { label: 'Delivery', items: ['Docker', 'GitHub Actions', 'Terraform'] },
    ],

    industriesLead:
      'Custom systems pay back where the process is the advantage and the exceptions are the point.',
    industries: [
      'Manufacturing',
      'Logistics',
      'Healthcare operations',
      'Financial services',
      'Insurance',
      'Legal & professional services',
      'Education',
      'Real estate',
    ],

    faqs: [
      {
        question: 'When does custom software beat an off-the-shelf product?',
        answer:
          'Custom wins when the process it encodes is central to how the business makes money, when per-seat licence costs scale badly against your headcount, when you need an integration no vendor will build, or when your exceptions cannot be expressed in someone else\'s settings screen. For standard, commoditised functions — payroll, email, accounting — a subscription product is almost always the better decision, and we will tell you that before quoting.',
      },
      {
        question: 'How do you handle requirements that change mid-build?',
        answer:
          'We expect them, and the delivery model is built for it: working software reviewed every one to two weeks on a real environment, so a change of direction is caught at week three rather than month four. Changes within the agreed scope are absorbed; changes that expand it are priced as a written variation before work starts, so the budget never moves without a decision. What we do not do is treat the original brief as fixed when reality disagrees with it.',
      },
      {
        question: 'What happens if we want to move to a different development team later?',
        answer:
          'You can, and the engagement is structured to make that cheap. You own the source code, infrastructure definitions, and documentation by contract. Handover materials — architecture notes, runbooks, and a readable codebase — are produced during delivery rather than assembled at the end. We treat "could another team take this over without us" as a design constraint, because a system that only its original authors can maintain is a liability regardless of how well it works today.',
      },
      {
        question: 'How much does custom software development cost?',
        answer:
          'A focused internal tool or MVP typically runs $8,000–$40,000; a full operations platform or complex business application runs $50,000–$200,000; ongoing maintenance is usually $1,500–$12,000 per month. Scope, integration count, compliance requirements, and design depth drive the figure far more than the technology chosen. Treat any quote produced before someone has understood your data model and exceptions as a placeholder — it will be revised upward.',
      },
      // Moved here from the /services hub FAQ during the hub-and-spoke
      // redesign — it is the definitional query for this page's keyword.
      {
        question: 'What are custom software development services?',
        answer:
          'Custom software development services build a system specifically for one organisation\'s processes, rather than configuring an off-the-shelf product to approximate them. They are the right choice when your workflow is a competitive advantage, when per-seat licence costs scale badly with headcount, when you need an integration a vendor will not build, or when your exceptions cannot be expressed in someone else\'s settings screen. The trade-off is genuine: custom software costs more upfront and you own its maintenance. It repays that when the process it encodes is central to how the business makes money. For a standard, commoditised function such as payroll or email, a subscription product is almost always the better decision.',
      },
    ],

    relatedArticles: [
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
      { label: 'PostgreSQL performance tips', href: '/blog/postgresql-performance-tips' },
    ],
    relatedServices: ['saas-development', 'web-application-development', 'api-development'],
    ctaHeading: 'What does your team work around every day?',
    ctaBody:
      'The spreadsheet, the double entry, the approval chased over WhatsApp. Those are usually where a custom system pays for itself first.',
    ctaLabel: 'Scope Custom Software',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'saas-development',
    category: 'engineering',
    icon: 'Layers',
    cardTitle: 'SaaS Development',
    cardDescription:
      'Multi-tenant platforms with tenancy, billing, roles, and admin tooling handled properly from the first sprint.',
    badges: ['Next.js', 'Stripe', 'PostgreSQL'],

    primaryKeyword: 'SaaS development',
    metaTitle: 'SaaS Development Company — Multi-Tenant | Auravon AI',
    metaDescription:
      'SaaS development covering multi-tenancy, subscription billing, roles, usage metering, onboarding, and admin tooling. Built to survive its own growth.',
    ogTitle: 'SaaS Development — Tenancy and Billing, Settled Early',
    ogDescription:
      'The two decisions that are expensive to revisit. Bolting metered usage onto flat-rate billing after launch means touching every query and every invoice.',

    h1: 'SaaS Development',
    h1Tail: 'Built to Survive Its Own Growth',
    summary:
      'SaaS development means building a multi-tenant product that can take payment, isolate customer data, and survive its own growth. We handle tenancy, roles and permissions, subscription billing, usage metering, onboarding, and the internal admin tooling your team needs on day one.',
    assurances: [
      'Tenancy isolated at the database layer',
      'Billing modelled on what you will sell',
      'Admin tooling from week one',
    ],

    introHeading: 'Tenancy and billing are the two decisions that are expensive to revisit',
    intro: [
      'Choosing row-level isolation over separate schemas, or bolting metered usage onto a flat-rate billing model after launch, means touching every query and every invoice. We settle both in the first sprint, against the pricing model you actually intend to sell rather than the one on the current landing page.',
      'The other thing founders always need and rarely budget for is internal tooling: impersonation, plan overrides, activation funnels, and churn signals. Without it, every support question becomes an engineering task.',
    ],

    problems: [
      {
        title: 'Tenant isolation enforced by a filter',
        description:
          'Data separation that depends on every query remembering a WHERE clause is one forgotten filter away from a breach notification.',
      },
      {
        title: 'A billing model that cannot express your pricing',
        description:
          'Trials, plan changes, proration, dunning, and usage metering are each a rewrite if the foundation assumed flat monthly fees.',
      },
      {
        title: 'No internal tooling',
        description:
          'Every plan override, refund, and support question routes to an engineer with database access, which does not scale past a handful of customers.',
      },
      {
        title: 'Growth that degrades the product',
        description:
          'Queries that were fine at fifty tenants are not fine at five hundred, and the fix touches everything at once.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Choose the tenancy model',
        description:
          'Row-level, schema-per-tenant, or database-per-tenant, decided against your expected customer size and compliance needs.',
      },
      {
        step: '02',
        title: 'Model billing against real pricing',
        description:
          'Plans, trials, proration, dunning, and metering designed around what you intend to sell, including the plan you have not launched yet.',
      },
      {
        step: '03',
        title: 'Build roles and permissions',
        description:
          'Organisation, team, and user-level access enforced at the data layer, with invitations and ownership transfer handled properly.',
      },
      {
        step: '04',
        title: 'Ship the admin console',
        description:
          'Impersonation, plan overrides, and usage inspection — so support does not require an engineer with production credentials.',
      },
      {
        step: '05',
        title: 'Instrument activation and churn',
        description:
          'Funnel and retention signals visible from week one, because the first release is when the data is most decision-shaping.',
      },
    ],

    benefits: [
      {
        title: 'Isolation you can defend',
        description:
          'Enforced at the database layer rather than by convention, which is the difference between a design and a hope.',
      },
      {
        title: 'Billing that can change',
        description:
          'New plans, usage-based tiers, and annual pricing become configuration rather than a migration across every invoice.',
      },
      {
        title: 'Support without engineers',
        description:
          'Admin tooling from day one means your team answers customer questions without opening a database console.',
      },
      {
        title: 'Evidence for the roadmap',
        description:
          'Activation and churn instrumentation from the first release, so product decisions rest on behaviour rather than anecdote.',
      },
    ],

    technologies: [
      { label: 'Application', items: ['Next.js', 'React', 'TypeScript'] },
      { label: 'Billing', items: ['Stripe', 'Razorpay', 'Webhooks'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis', 'Row-level security'] },
      { label: 'Platform', items: ['Vercel', 'AWS', 'Docker'] },
    ],

    industriesLead:
      'Whether the product serves one vertical or many, the tenancy and billing problems are the same shape.',
    industries: [
      'B2B software',
      'Fintech',
      'Healthtech',
      'Edtech',
      'Logistics platforms',
      'Marketplaces',
      'Professional services tools',
      'Marketing technology',
    ],

    faqs: [
      {
        question: 'Which multi-tenancy model should we use?',
        answer:
          'Row-level isolation with database-enforced policies suits most B2B SaaS: it is operationally simple, cheap to scale to thousands of tenants, and secure when the rules live in the database rather than in application code. Schema-per-tenant makes sense when customers need separate backup and restore or have contractual data-separation requirements. Database-per-tenant is for a small number of large enterprise customers with strict compliance obligations. The decision is driven by customer size and compliance, and it is expensive to change later.',
      },
      {
        question: 'How long does it take to build a SaaS MVP?',
        answer:
          'A focused SaaS MVP with authentication, multi-tenancy, one core workflow, and subscription billing typically takes ten to sixteen weeks. What moves that estimate most is the number of third-party integrations, whether the pricing model needs usage metering from launch, and how much admin tooling is required before your team can support real customers. We scope it in a two-to-three week paid discovery first, which produces a costed plan rather than an optimistic figure.',
      },
      {
        question: 'Can you add billing to an existing product?',
        answer:
          'Yes, and it is a common engagement. The work involves mapping your intended plans onto a billing provider, handling the webhook flows that keep entitlements correct when payments fail or plans change, and back-filling existing customers onto the new model without disrupting their access. The hard part is rarely the payment integration — it is entitlement logic, proration for mid-cycle changes, and dunning, which is where most home-grown billing quietly breaks.',
      },
      {
        question: 'Do you use Stripe or Razorpay?',
        answer:
          'Both, chosen by where your customers are. Stripe is the stronger choice for international and US-centric products, with better support for complex usage-based pricing. Razorpay is generally the better fit for India-first products, with UPI, domestic cards, and GST invoicing handled natively. Some products need both, routed by customer geography. We build the entitlement layer independently of the provider so switching later does not mean rewriting the product.',
      },
    ],

    relatedArticles: [
      { label: 'How we built an AI-powered SaaS', href: '/blog/building-ai-powered-saas-2025' },
      { label: 'SaaS pricing strategy for startups', href: '/blog/saas-pricing-strategy-startups' },
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
    ],
    relatedServices: ['web-application-development', 'custom-software-development', 'product-discovery'],
    ctaHeading: 'Know what you want to sell?',
    ctaBody:
      'Tell us the pricing model you intend to launch with — including the plan you have not built yet. It shapes the architecture more than any feature does.',
    ctaLabel: 'Plan Your SaaS Build',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'web-application-development',
    category: 'engineering',
    icon: 'Globe',
    cardTitle: 'Web Application Development',
    cardDescription:
      'Production React and Next.js applications with server-rendered performance, real auth, and accessibility built in.',
    badges: ['Next.js', 'React', 'Astro'],

    primaryKeyword: 'web application development',
    metaTitle: 'Web Application Development Services | Auravon AI',
    metaDescription:
      'Web application development in React, Next.js, and Astro — Core Web Vitals budgeted at design time, WCAG 2.2 AA as baseline, real auth and permissions.',
    ogTitle: 'Web Application Development — Fast by Architecture',
    ogDescription:
      'Performance is a conversion problem before it is an engineering one. Retrofitting a fast page onto a slow architecture costs more than building it right once.',

    h1: 'Web Application Development',
    h1Tail: 'Fast by Architecture',
    summary:
      'Web application development at Auravon means production React and Next.js applications with server-rendered performance, real authentication, and accessibility treated as a requirement rather than an audit finding. We build the customer-facing product and the internal tools on one stack, so one team maintains both.',
    assurances: [
      'Core Web Vitals budgeted at design time',
      'WCAG 2.2 AA as the working baseline',
      'One stack for product and internal tools',
    ],

    introHeading: 'Performance is a conversion problem before it is an engineering one',
    intro: [
      'We budget Core Web Vitals at design time — image strategy, font loading, and what genuinely needs to be interactive — because retrofitting a fast page onto a slow architecture costs more than building it correctly once. The decision about how much JavaScript ships is an architecture decision, and it is made early or not at all.',
      'Accessibility works the same way. Keyboard and screen-reader support designed in from the start is ordinary engineering; added after a complaint, it is a rebuild of every interactive component.',
    ],

    problems: [
      {
        title: 'A fast prototype that got slow',
        description:
          'Every feature added a dependency, the bundle grew quietly, and now the first load is measured in seconds on a real phone.',
      },
      {
        title: 'Accessibility discovered during procurement',
        description:
          'A customer\'s compliance questionnaire arrives and the answer requires rebuilding every interactive component.',
      },
      {
        title: 'Auth held together with patches',
        description:
          'Sessions, roles, and permission checks accreted feature by feature, and nobody can state confidently who can see what.',
      },
      {
        title: 'Two stacks, two teams',
        description:
          'The customer product and the internal admin tool were built separately, so every change costs twice and drifts apart.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Set the performance budget',
        description:
          'Target metrics agreed before design, on the devices and networks your users actually have rather than a developer laptop.',
      },
      {
        step: '02',
        title: 'Design the component system',
        description:
          'Tokens, components, and states defined once and implemented in code, so the built product matches the design without reconciliation.',
      },
      {
        step: '03',
        title: 'Build auth and permissions properly',
        description:
          'Sessions, roles, and access checks designed as one system rather than accumulated per feature.',
      },
      {
        step: '04',
        title: 'Model the data for real queries',
        description:
          'A schema designed for the queries you will actually run at volume, with migrations under version control.',
      },
      {
        step: '05',
        title: 'Measure on real devices',
        description:
          'Core Web Vitals verified on real hardware before launch, and monitored after, so regressions are caught by a build rather than a user.',
      },
    ],

    benefits: [
      {
        title: 'Speed that holds as you grow',
        description:
          'A performance budget set at design time keeps the third year as fast as the first, instead of degrading feature by feature.',
      },
      {
        title: 'Accessible without a remediation project',
        description:
          'WCAG 2.2 AA as the working baseline means a compliance questionnaire is a form to fill in, not a quarter of rework.',
      },
      {
        title: 'One stack, one team',
        description:
          'Customer product and internal tooling share a codebase and a component system, so changes land once.',
      },
      {
        title: 'Search-visible by construction',
        description:
          'Server rendering, clean markup, and real URLs — the technical SEO foundation, handled by the architecture rather than a plugin.',
      },
    ],

    technologies: [
      { label: 'Frontend', items: ['React', 'Next.js', 'Astro', 'TypeScript'] },
      { label: 'Styling', items: ['Tailwind', 'Design tokens', 'CSS'] },
      { label: 'Backend', items: ['Node.js', 'FastAPI', 'PostgreSQL'] },
      { label: 'Platform', items: ['Vercel', 'AWS', 'Docker'] },
    ],

    industriesLead:
      'Applicable anywhere the product is the website — and doubly so where the audience is on mid-range phones.',
    industries: [
      'B2B software',
      'Fintech',
      'E-commerce & retail',
      'Healthcare',
      'Education',
      'Logistics',
      'Marketplaces',
      'Professional services',
    ],

    faqs: [
      {
        question: 'Should we use Next.js or Astro?',
        answer:
          'Next.js when the product is an application — authenticated dashboards, complex interaction, real-time state. Astro when the product is primarily content that must load fast and rank, such as marketing sites, documentation, and blogs, where shipping almost no JavaScript is the advantage. Many companies need both, and they coexist cleanly. We make the call against what the pages actually do, not against which framework is currently fashionable.',
      },
      {
        question: 'How do you make sure the application stays fast?',
        answer:
          'A performance budget agreed before design, measured on real devices rather than a developer laptop, and enforced in the build so a regression fails the pipeline instead of reaching production. The architectural decisions matter most: how much runs on the server, which components genuinely need interactivity, how images and fonts load. Those are cheap at design time and expensive afterwards, which is why they are made first rather than optimised later.',
      },
      {
        question: 'Do you handle accessibility compliance?',
        answer:
          'We build to WCAG 2.2 AA as the working baseline — semantic markup, keyboard operability, visible focus, sufficient contrast, and screen-reader-tested interactive components. That covers the substance of most procurement questionnaires and accessibility statements. We do not issue formal certification or legal sign-off; where a client needs an independent audit for regulatory reasons, we build to the standard and support the auditor rather than marking our own work.',
      },
      {
        question: 'Can you take over an existing application?',
        answer:
          'Yes. We start with a short paid assessment: reading the codebase, mapping the deployment and data model, and producing a written list of the risks worth addressing first, ranked by cost and urgency. That document is yours regardless of whether we do the work. Taking over an unfamiliar system without that step is how estimates go wrong, so we do not skip it even when the request is urgent.',
      },
    ],

    relatedArticles: [
      { label: 'Next.js performance optimization', href: '/blog/nextjs-performance-optimization' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
      { label: 'PostgreSQL performance tips', href: '/blog/postgresql-performance-tips' },
    ],
    relatedServices: ['saas-development', 'ui-ux-design', 'api-development'],
    ctaHeading: 'Building something, or rescuing something?',
    ctaBody:
      'Both are normal. New builds start with a costed scope; existing applications start with a short paid assessment you keep either way.',
    ctaLabel: 'Start a Web App',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'mobile-application-development',
    category: 'engineering',
    icon: 'Smartphone',
    cardTitle: 'Mobile App Development',
    cardDescription:
      'Cross-platform iOS and Android apps in React Native and Flutter — including the store submission that derails launches.',
    badges: ['React Native', 'Flutter', 'Expo'],

    primaryKeyword: 'mobile app development',
    metaTitle: 'Mobile App Development Services — iOS & Android | Auravon AI',
    metaDescription:
      'Mobile app development in React Native and Flutter: offline behaviour, push notifications, in-app purchases, and store submission handled properly.',
    ogTitle: 'Mobile App Development — Including the Parts That Derail Launches',
    ogDescription:
      'Cross-platform is the right default for most business apps. We will also tell you when it is not, in discovery rather than in a change request.',

    h1: 'Mobile App Development',
    h1Tail: 'iOS and Android, One Codebase',
    summary:
      'Mobile app development covers cross-platform iOS and Android applications in React Native and Flutter, including the store submission process that quietly derails first launches. We build offline behaviour, push notifications, in-app purchases, and the AI features that make an app worth opening a second time.',
    assurances: [
      'One codebase, both platforms',
      'Store submission handled',
      'A release pipeline your team can run',
    ],

    introHeading: 'Cross-platform is the right default — and we will say when it is not',
    intro: [
      'One codebase for iOS and Android is the correct choice for most business applications, and we build platform-specific behaviour where users expect it rather than shipping an Android app wearing an iOS icon. Heavy real-time graphics, deep hardware access, or demanding background processing still justify native, and that decision belongs in discovery rather than in a change request three months in.',
      'The states that break mobile apps are the ones that only appear on a bad network: a half-completed sync, a queued purchase, a push notification arriving for a logged-out user. We design those before the happy path is finished.',
    ],

    problems: [
      {
        title: 'An app that assumes connectivity',
        description:
          'It works in the office and fails on a train. Offline behaviour designed after launch means rewriting the data layer.',
      },
      {
        title: 'Store rejection nobody planned for',
        description:
          'Privacy declarations, purchase rules, and review feedback arrive at the end of the project and add weeks nobody budgeted.',
      },
      {
        title: 'A release process only one person can run',
        description:
          'Certificates, provisioning, and store credentials live in one head, and shipping a fix depends on that person being available.',
      },
      {
        title: 'Installed once, never reopened',
        description:
          'Nothing in the app earns a second session, so acquisition spend buys downloads rather than users.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Decide cross-platform or native',
        description:
          'Against your actual requirements for graphics, hardware access, and background work — settled in discovery, not later.',
      },
      {
        step: '02',
        title: 'Design the offline story',
        description:
          'What is cached, what queues, what reconciles, and what the user sees while it happens — before the happy path is built.',
      },
      {
        step: '03',
        title: 'Build with platform behaviour',
        description:
          'One codebase, with navigation, gestures, and notifications behaving the way each platform\'s users expect.',
      },
      {
        step: '04',
        title: 'Prepare for the stores early',
        description:
          'Privacy declarations, purchase configuration, and review requirements handled during the build rather than after it.',
      },
      {
        step: '05',
        title: 'Hand over the pipeline',
        description:
          'Automated builds and a release process your team can run without us, including credential ownership.',
      },
    ],

    benefits: [
      {
        title: 'Two platforms, one team',
        description:
          'A single codebase means a feature ships to iOS and Android together rather than one lagging a release behind.',
      },
      {
        title: 'Works on a bad network',
        description:
          'Offline and sync behaviour designed up front, which is what separates an app people trust from one they abandon on a commute.',
      },
      {
        title: 'A launch that lands on schedule',
        description:
          'Store requirements handled during the build, so review is a step rather than an unplanned extra sprint.',
      },
      {
        title: 'Releases you control',
        description:
          'Your team owns the credentials and can ship a fix without waiting for us to be available.',
      },
    ],

    technologies: [
      { label: 'Cross-platform', items: ['React Native', 'Flutter', 'Expo'] },
      { label: 'Backend', items: ['Firebase', 'FastAPI', 'PostgreSQL'] },
      { label: 'Device', items: ['Push notifications', 'Offline sync', 'Biometrics', 'Camera'] },
      { label: 'Release', items: ['App Store Connect', 'Play Console', 'EAS'] },
    ],

    industriesLead:
      'Mobile earns its cost where usage is frequent, on the move, or tied to something physical.',
    industries: [
      'Logistics & field service',
      'Healthcare',
      'Fintech',
      'E-commerce & retail',
      'Education',
      'Real estate',
      'Hospitality',
      'Manufacturing',
    ],

    faqs: [
      {
        question: 'React Native or Flutter — which should we choose?',
        answer:
          'React Native fits teams that already write TypeScript and React, because the same engineers and much of the same tooling carry over, and the library ecosystem is broader. Flutter gives more consistent rendering across platforms and better performance for animation-heavy interfaces, at the cost of Dart being a separate skill to hire for. For most business applications either will work, and the deciding factor is usually your existing team rather than the framework.',
      },
      {
        question: 'When do we actually need a native app instead?',
        answer:
          'Three cases justify native: sustained high-performance graphics such as games or real-time video processing, deep or unusual hardware integration, and demanding background processing that platform frameworks constrain. Outside those, cross-platform delivers the same user experience for meaningfully less cost and one codebase to maintain. We make this call during discovery, because discovering it mid-build converts a feature request into a rewrite.',
      },
      {
        question: 'Do you handle App Store and Play Store submission?',
        answer:
          'Yes — account setup, privacy declarations, data-safety disclosures, in-app purchase configuration, screenshots and metadata, and handling review rejections when they come. Rejections are routine rather than exceptional, and knowing which ones are quick fixes versus genuine policy problems is most of the value. We also hand over the release pipeline and credentials so your team can ship updates without depending on us.',
      },
      {
        question: 'How long does a mobile app take to build?',
        answer:
          'A focused first release with authentication, one core workflow, and offline support typically takes twelve to twenty weeks including store submission. The variables that move it most are the number of backend integrations, whether payments are in-app or external, and how much of the design system already exists. Store review adds days rather than weeks once the submission requirements are handled during the build rather than after it.',
      },
    ],

    relatedArticles: [
      { label: 'React Native vs Flutter', href: '/blog/react-native-vs-flutter-2025' },
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
    ],
    relatedServices: ['web-application-development', 'api-development', 'ui-ux-design'],
    ctaHeading: 'What will people open it for on day thirty?',
    ctaBody:
      'That question shapes the build more than the feature list does. Tell us the answer and we will scope the release around it.',
    ctaLabel: 'Discuss a Mobile App',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'api-development',
    category: 'engineering',
    icon: 'Plug',
    cardTitle: 'API Development',
    cardDescription:
      'REST and GraphQL APIs with versioning, auth, and docs from the first endpoint — plus the integrations you depend on.',
    badges: ['REST', 'GraphQL', 'OpenAPI'],

    primaryKeyword: 'API development',
    metaTitle: 'API Development & Integration Services | Auravon AI',
    metaDescription:
      'API development and integration: versioned REST and GraphQL contracts, idempotent writes, dead-letter queues, and replay — so a failed sync is recoverable.',
    ogTitle: 'API Development — Built for the Day the Partner Changes a Field',
    ogDescription:
      'Integrations fail for unglamorous reasons: a duplicated webhook, a rate limit hit during a batch job. We build for those from the first endpoint.',

    h1: 'API Development & Integration',
    h1Tail: 'Reliable Where It Usually Breaks',
    summary:
      'API development covers both the interfaces your product exposes and the ones it depends on. We design REST and GraphQL APIs with versioning, authentication, rate limiting, and documentation from the first endpoint, and build the integration layer connecting you to payment, CRM, ERP, and AI providers.',
    assurances: [
      'Documentation generated from source',
      'Idempotent writes and replay',
      'Alerting on a stalled queue',
    ],

    introHeading: 'Integrations fail in production for unglamorous reasons',
    intro: [
      'A partner changes a field. A webhook is delivered twice. A rate limit is hit during a batch job at 3am. We build for those from the start with idempotency keys, dead-letter queues, and replay — so a failed sync is a recoverable event rather than a support ticket about missing data three weeks later.',
      'On the APIs you expose, the discipline is versioning and documentation from the first endpoint. A contract that changes without a version is a breaking change for someone, and documentation written by hand is documentation that is already wrong.',
    ],

    problems: [
      {
        title: 'Silent data loss',
        description:
          'A sync failed, nothing alerted, and the gap is discovered weeks later when the numbers do not reconcile.',
      },
      {
        title: 'Duplicate writes',
        description:
          'A webhook delivered twice created two orders, because nothing made the write idempotent.',
      },
      {
        title: 'Documentation that drifts',
        description:
          'Hand-written API docs describe last quarter\'s contract, so every integrator\'s first day is spent discovering the difference.',
      },
      {
        title: 'One noisy client degrading everyone',
        description:
          'No per-client rate limiting, so a single integrator\'s batch job becomes everybody\'s outage.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Design the contract first',
        description:
          'Resources, error semantics, and versioning agreed before implementation, because the contract is the expensive part to change.',
      },
      {
        step: '02',
        title: 'Generate the documentation',
        description:
          'OpenAPI or GraphQL schema generated from the source, so docs cannot drift from behaviour.',
      },
      {
        step: '03',
        title: 'Make writes idempotent',
        description:
          'Idempotency keys on every mutating endpoint, so a retried or duplicated request is safe by construction.',
      },
      {
        step: '04',
        title: 'Queue the slow work',
        description:
          'Background processing with retries, backoff, dead-letter queues, and replay for anything that touches a third party.',
      },
      {
        step: '05',
        title: 'Alert on the queue, not the customer',
        description:
          'Monitoring that fires on a stalled queue or rising error rate rather than on an email asking where the data went.',
      },
    ],

    benefits: [
      {
        title: 'Failures that recover themselves',
        description:
          'Retries, backoff, and replay mean a transient third-party outage resolves without anyone opening a ticket.',
      },
      {
        title: 'Safe to retry',
        description:
          'Idempotent writes make duplicate deliveries harmless, which removes an entire category of data-integrity bug.',
      },
      {
        title: 'Documentation that is always true',
        description:
          'Generated from the source contract, so an integrator\'s first day is spent integrating rather than reverse-engineering.',
      },
      {
        title: 'Fair capacity',
        description:
          'Per-client rate limits keep one integrator\'s batch job from becoming everyone else\'s incident.',
      },
    ],

    technologies: [
      { label: 'Contracts', items: ['REST', 'GraphQL', 'OpenAPI', 'JSON Schema'] },
      { label: 'Runtime', items: ['Node.js', 'FastAPI', 'TypeScript', 'Python'] },
      { label: 'Reliability', items: ['BullMQ', 'Redis', 'Dead-letter queues', 'Idempotency keys'] },
      { label: 'Integrations', items: ['Stripe', 'Razorpay', 'CRM & ERP', 'Webhooks'] },
    ],

    industriesLead:
      'Integration work concentrates wherever money, inventory, or customer records move between systems.',
    industries: [
      'Fintech',
      'E-commerce & retail',
      'Logistics',
      'Insurance',
      'Healthcare',
      'B2B software',
      'Marketplaces',
      'Manufacturing',
    ],

    faqs: [
      {
        question: 'REST or GraphQL for our API?',
        answer:
          'REST is the better default for public APIs and service-to-service communication: it is cacheable, universally understood, and simple to secure and rate-limit per endpoint. GraphQL earns its complexity when many different clients need different shapes of the same data, which is common for products with web, mobile, and partner surfaces over one domain model. The cost is real — query complexity limits, caching, and authorisation per field all need deliberate work.',
      },
      {
        question: 'How do you handle a third-party API that goes down?',
        answer:
          'Anything touching a third party runs as queued background work with retries and exponential backoff, so a transient outage resolves without human involvement. Requests that exhaust their retries land in a dead-letter queue that can be inspected and replayed once the provider recovers, rather than being silently dropped. Alerting fires on queue depth and error rate, which means you learn about a provider outage from a monitor rather than from a customer.',
      },
      {
        question: 'Can you integrate with our existing ERP or CRM?',
        answer:
          'Yes — CRMs, ERPs, payment gateways, logistics providers, and messaging platforms are routine work. Older enterprise systems often have awkward interfaces: batch files, SOAP, or a database view rather than a modern API. We build an anti-corruption layer between that system and yours so its constraints do not leak into your domain model, which keeps the integration replaceable if the underlying system is ever upgraded or swapped.',
      },
      {
        question: 'How do you version an API without breaking existing clients?',
        answer:
          'Additive changes — new optional fields and new endpoints — ship without a version bump, because they cannot break a well-behaved client. Anything that removes or changes the meaning of an existing field goes into a new version, with the previous version supported for an announced deprecation window. The important discipline is deciding this before the first external client integrates, since retrofitting versioning onto a live API is considerably harder than starting with it.',
      },
    ],

    relatedArticles: [
      { label: 'PostgreSQL performance tips', href: '/blog/postgresql-performance-tips' },
      { label: 'n8n vs Zapier vs Make', href: '/blog/n8n-vs-zapier-make-automation-2026' },
      { label: 'WhatsApp automation for business', href: '/blog/whatsapp-automation-business' },
    ],
    relatedServices: ['custom-software-development', 'cloud-devops', 'saas-development'],
    ctaHeading: 'Which integration keeps breaking?',
    ctaBody:
      'Most teams have one that needs manual reconciliation every month. That is usually the cheapest thing to fix first.',
    ctaLabel: 'Talk About an API Project',
  },
];
