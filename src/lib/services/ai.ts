/**
 * AI service spokes (6).
 *
 * Keyword discipline: one page, one primary keyword, no two pages sharing.
 * The map for this group is
 *
 *   /services/ai-development          → AI development
 *   /services/ai-software-development → AI software development
 *   /services/ai-consulting           → AI consulting services
 *   /services/ai-agent-development    → AI agent development
 *   /services/generative-ai-development → generative AI development
 *   /services/custom-ai-development   → custom AI development
 *
 * The hub at `/services` keeps "AI development services" (catalog intent).
 * The residual overlap between that and `/services/ai-development` is real
 * and documented in `docs/services-architecture.md` — it is the one pair
 * worth watching in Search Console after launch.
 */

import type { ServicePage } from './types';

export const aiServices: ServicePage[] = [
  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'ai-development',
    category: 'ai',
    icon: 'Brain',
    cardTitle: 'AI Development',
    cardDescription:
      'End-to-end AI systems — from deciding what is worth building through to operating it once real users depend on it.',
    badges: ['Claude', 'GPT', 'Python'],

    primaryKeyword: 'AI development',
    metaTitle: 'AI Development Services — Build & Ship AI | Auravon AI',
    metaDescription:
      'AI development from feasibility to production: model selection, evaluation, deployment, and operation. Talk to the engineers who build it — free scoping call.',
    ogTitle: 'AI Development — Engineered for Production, Not Demos',
    ogDescription:
      'We build the half of an AI project that decides whether it survives: retrieval quality, edge cases, cost per request, and what happens when a provider errors at 2am.',

    h1: 'AI Development',
    h1Tail: 'Built to Survive Production',
    summary:
      'AI development covers the full lifecycle of an intelligent system: identifying where a model genuinely beats a rule, designing the data flow around it, building the application layer, evaluating accuracy before launch, and operating the result once real users depend on it every day.',
    assurances: [
      'Free 30-minute scoping call',
      'Costed scope before you commit',
      'You own the code and the IP',
    ],

    introHeading: 'Most AI projects die between the demo and the Monday morning',
    intro: [
      'The gap is rarely the model. It is retrieval quality, edge-case handling, cost per request, latency, and what happens when a provider returns an error at 2am. We build for that half of the problem first, because it is the half that decides whether a project survives its first quarter in production.',
      'That also means we start by ruling things out. Some problems are better solved with a database query, a validation rule, or a redesigned form — and we will say so before you spend a budget on a model.',
    ],

    problems: [
      {
        title: 'A prototype that nobody trusts',
        description:
          'It demos well and no one uses it, because there is no way to see why it answered what it did, no way to correct it, and no record of what it changed.',
      },
      {
        title: 'Accuracy nobody can quantify',
        description:
          '"It seems to work well" is the only measure available, so there is no way to tell whether last week\'s prompt change improved things or quietly broke twenty other cases.',
      },
      {
        title: 'Costs that arrive as a surprise',
        description:
          'Token spend scales with usage in ways a pilot never reveals. Without per-request measurement and spend caps, success is what breaks the budget.',
      },
      {
        title: 'A system that decays on its own',
        description:
          'Providers retire model versions on their own schedule. Output quality shifts without a line of your code changing, and nothing catches it until a customer does.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Feasibility and use-case selection',
        description:
          'We rank candidate problems by value and by how well a model actually fits them, and we name the ones that do not need AI at all.',
      },
      {
        step: '02',
        title: 'Architecture and model selection',
        description:
          'Frontier API, open-weight on your infrastructure, or hybrid — chosen on accuracy, latency, cost per request, and data residency rather than on what is fashionable.',
      },
      {
        step: '03',
        title: 'Evaluation set before build',
        description:
          'A written eval set with pass thresholds agreed before implementation starts, so "done" is a number you approved rather than an opinion.',
      },
      {
        step: '04',
        title: 'Build in reviewable increments',
        description:
          'Working software on a real environment every one to two weeks, so direction is corrected while correcting it is still cheap.',
      },
      {
        step: '05',
        title: 'Harden and launch',
        description:
          'Retries, cross-provider fallbacks, spend caps, structured logging on every model call, and alerting on quality drift — live before go-live.',
      },
      {
        step: '06',
        title: 'Operate and re-evaluate',
        description:
          'Your eval set is re-run against new model versions before migrating, so provider changes are caught by a test rather than by a customer.',
      },
    ],

    benefits: [
      {
        title: 'Accuracy is a number, not a claim',
        description:
          'Every engagement defines what "good enough to launch" means before the build, and measures against it after.',
      },
      {
        title: 'Cost per request is known',
        description:
          'Spend is instrumented from the first call and capped per model, so scale is a plan rather than an invoice shock.',
      },
      {
        title: 'Failures are traceable',
        description:
          'Structured logs on every generation — inputs, sources, cost, latency — so a regression is attributed to a change instead of debated.',
      },
      {
        title: 'You can hand it to another team',
        description:
          'Architecture notes, runbooks, and a readable codebase are part of delivery, not a later phase.',
      },
    ],

    technologies: [
      { label: 'Models', items: ['Claude', 'GPT', 'Llama', 'Mistral'] },
      { label: 'Engineering', items: ['Python', 'TypeScript', 'FastAPI', 'Next.js'] },
      { label: 'Data & retrieval', items: ['PostgreSQL', 'pgvector', 'Redis'] },
      { label: 'Operations', items: ['OpenTelemetry', 'Sentry', 'Docker'] },
    ],

    industriesLead:
      'AI development pays back fastest where document volume is high, decisions repeat, or customer contact is constant.',
    industries: [
      'Healthcare',
      'Financial services',
      'Insurance',
      'E-commerce & retail',
      'Logistics',
      'Legal & professional services',
      'Education',
      'Manufacturing',
    ],

    faqs: [
      {
        question: 'What does AI development actually involve?',
        answer:
          'AI development involves five distinct pieces of work: choosing which business problem a model genuinely improves, selecting and integrating that model, building the application and data layer around it, measuring accuracy against an agreed threshold before launch, and operating the system afterwards as models and costs change. The engineering effort is usually weighted toward the last three. Integrating a model is a small part of the work; making its output trustworthy, affordable, and correctable is most of it.',
      },
      {
        question: 'How long does an AI development project take?',
        answer:
          'A focused AI feature inside an existing product typically takes four to eight weeks; a new AI product with its own application layer usually takes three to six months. The variables that move the estimate most are data readiness, the number of systems the AI must integrate with, and the accuracy bar the use case demands. A two-to-three week paid discovery produces a costed plan before the larger commitment, which is the point at which a timeline becomes worth quoting.',
      },
      {
        question: 'Do you work with our existing engineering team?',
        answer:
          'Yes. Roughly half our AI work is done inside a client codebase alongside their own engineers, and the other half is delivered as a standalone system. When working with an in-house team we set up the evaluation harness, model layer, and observability so your engineers can extend it without us. Knowledge transfer is scheduled as part of the engagement rather than compressed into a handover meeting at the end.',
      },
      {
        question: 'What if AI turns out to be the wrong tool for our problem?',
        answer:
          'We tell you during scoping, before you commit a budget. A validation rule, a database query, or a redesigned form beats a model more often than the market admits, and those solutions are cheaper to run and easier to trust. Discovery is priced as its own engagement and the output is yours either way, so the recommendation costs us the build rather than costing you the budget.',
      },
    ],

    relatedArticles: [
      { label: 'What AI app development really costs', href: '/blog/ai-app-development-cost-guide' },
      { label: 'Where AI automation actually pays back', href: '/blog/ai-automations-roi-business-2026' },
      { label: 'Vibe coding and what it breaks', href: '/blog/vibe-coding-ai-development-2025' },
    ],
    relatedServices: ['ai-software-development', 'ai-consulting', 'custom-ai-development'],
    ctaHeading: 'Tell us what you are trying to automate',
    ctaBody:
      'A free 30-minute call with an engineer. We will tell you whether a model is the right tool, and roughly what it takes if it is.',
    ctaLabel: 'Scope Your AI Project',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'ai-software-development',
    category: 'ai',
    icon: 'Code2',
    cardTitle: 'AI Software Development',
    cardDescription:
      'Complete applications built around a model — interface, permissions, jobs, and audit trails, not a chat box bolted on.',
    badges: ['Next.js', 'FastAPI', 'LangGraph'],

    primaryKeyword: 'AI software development',
    metaTitle: 'AI Software Development Company | Auravon AI',
    metaDescription:
      'AI software development: the interface, data layer, permissions, and observability that let a whole team depend on an AI feature. Get a costed scope.',
    ogTitle: 'AI Software Development — An AI Feature Is Still Software',
    ogDescription:
      'Authentication, roles, error states, audit history, and a way for users to disagree with the output. The layer teams skip, and the reason their AI goes unused.',

    h1: 'AI Software Development',
    h1Tail: 'Whole Applications, Not Chat Boxes',
    summary:
      'AI software development is the discipline of building a complete application around a model, rather than bolting a chat box onto an existing screen. We build the interface, data layer, permissions, background jobs, and observability that let an entire team depend on an AI feature.',
    assurances: [
      'Production-grade from the first sprint',
      'Access control enforced at retrieval',
      'Full audit trail on every generation',
    ],

    introHeading: 'An AI feature is still software',
    intro: [
      'It needs authentication, roles, error states, audit history, and a way for a user to disagree with the output. Teams that skip that layer end up with something impressive in a sales meeting and unused by the operations staff it was built for — because there is no way to correct it, no record of what it did, and no one accountable when it is wrong.',
      'We build the application first and treat the model as one component inside it. That ordering is what makes the difference between a feature people rely on and a tab nobody opens twice.',
    ],

    problems: [
      {
        title: 'No way to correct a wrong answer',
        description:
          'Users hit one bad output, lose confidence, and route around the feature permanently. Without an override path there is no way back.',
      },
      {
        title: 'The model can see everything',
        description:
          'Retrieval that ignores permissions will happily quote a document the reader was never allowed to open. Access control belongs at retrieval time, not in the prompt.',
      },
      {
        title: 'No history of what it did',
        description:
          'When an output is questioned weeks later, there is no record of the inputs, the sources, or the model version that produced it.',
      },
      {
        title: 'Quality regressions nobody can locate',
        description:
          'Something got worse after a change and there is no trace linking the two, so the debate is about opinions rather than a diff.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Model the domain',
        description:
          'Users, permissions, and the records the AI will read and write — settled before any interface exists, because these are the expensive decisions to reverse.',
      },
      {
        step: '02',
        title: 'Design the AI interface',
        description:
          'How uncertainty is displayed, how sources are cited, how a user overrides a result without leaving their workflow.',
      },
      {
        step: '03',
        title: 'Build the retrieval layer',
        description:
          'Ingestion, chunking, embedding, and refresh strategy, with access control enforced at query time rather than after the fact.',
      },
      {
        step: '04',
        title: 'Wire in observability',
        description:
          'Every generation logged with inputs, sources, cost, latency, and model version, so any output can be reconstructed later.',
      },
      {
        step: '05',
        title: 'Evaluate and ship',
        description:
          'Accuracy measured against the agreed set, load and failure paths tested, then deployed with monitoring already running.',
      },
    ],

    benefits: [
      {
        title: 'Adoption, not novelty',
        description:
          'Built for the operations staff who use it daily rather than the meeting where it is demonstrated once.',
      },
      {
        title: 'Permissions that hold',
        description:
          'Retrieval respects the same access rules as the rest of your application, enforced in the query rather than requested in the prompt.',
      },
      {
        title: 'Answers you can audit',
        description:
          'Every generation is reconstructible — inputs, sources, cost, and model version — which is what makes AI usable in a regulated process.',
      },
      {
        title: 'One team, one codebase',
        description:
          'The application and the model layer are built together, so there is no seam where two vendors each believe the gap belongs to the other.',
      },
    ],

    technologies: [
      { label: 'Application', items: ['Next.js', 'React', 'TypeScript', 'Astro'] },
      { label: 'Backend', items: ['FastAPI', 'Python', 'Node.js', 'BullMQ'] },
      { label: 'AI layer', items: ['LangGraph', 'Claude', 'GPT', 'pgvector'] },
      { label: 'Data', items: ['PostgreSQL', 'Redis', 'S3'] },
    ],

    industriesLead:
      'Wherever an AI output has to be trusted by a team rather than admired by an audience.',
    industries: [
      'Healthcare',
      'Financial services',
      'Insurance',
      'Legal & professional services',
      'Logistics',
      'SaaS products',
      'Manufacturing',
      'Real estate',
    ],

    faqs: [
      {
        question: 'What is the difference between AI development and AI software development?',
        answer:
          'AI development describes the whole lifecycle of getting a model to solve a business problem, including feasibility, model selection, and evaluation. AI software development is specifically the engineering of the application around that model — screens, permissions, data pipelines, background jobs, and audit history. In practice they are two halves of one project, and the second is where most of the effort goes. A model integrated without an application layer is a prototype, not a product.',
      },
      {
        question: 'Can you add AI to our existing product?',
        answer:
          'Yes, and it is the more common request. We work inside your codebase, match your existing patterns, and add the model layer behind your current authentication and permission model rather than beside it. The main constraints are usually your data model and how cleanly the relevant records can be retrieved with access control applied. We assess both during scoping and will tell you if a preparatory refactor is the cheaper first step.',
      },
      {
        question: 'How do you stop the AI from showing users data they should not see?',
        answer:
          'Access control is enforced at retrieval time, in the query, before any content reaches the model. The retrieval layer filters candidate documents by the requesting user\'s permissions, so a document the user cannot open is never a candidate for the answer. Instructing a model not to reveal something is not a security control — it is a request, and it fails under adversarial phrasing. The same rule applies to tool access in agentic features.',
      },
      {
        question: 'What happens when the model provider changes or deprecates a version?',
        answer:
          'Your evaluation set is re-run against the new version before anything migrates, and the results are compared against the thresholds agreed at build time. If quality holds, we migrate; if it drops, we either adjust prompts and retrieval or stay on the current version until we can. Because prompts are versioned and every generation is logged with its model version, a regression after a migration is traceable to a specific change rather than a mystery.',
      },
    ],

    relatedArticles: [
      { label: 'How we built an AI-powered SaaS', href: '/blog/building-ai-powered-saas-2025' },
      { label: 'Building a RAG chatbot, step by step', href: '/blog/rag-chatbot-langchain-guide' },
      { label: 'What AI app development really costs', href: '/blog/ai-app-development-cost-guide' },
    ],
    relatedServices: ['ai-development', 'custom-software-development', 'generative-ai-development'],
    ctaHeading: 'Have a model that needs a product around it?',
    ctaBody:
      'Bring us the prototype, the codebase, or just the problem. We will scope the application layer that makes it usable.',
    ctaLabel: 'Discuss an AI Build',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'ai-consulting',
    category: 'ai',
    icon: 'Compass',
    cardTitle: 'AI Consulting',
    cardDescription:
      'Decide what to build before you commit an engineering budget. A ranked, costed roadmap you own outright.',
    badges: ['Data audit', 'ROI modelling', 'Governance'],

    primaryKeyword: 'AI consulting services',
    metaTitle: 'AI Consulting Services — Readiness & Roadmap | Auravon AI',
    metaDescription:
      'AI consulting services: workflow and data audit, ranked use cases with ROI, and a costed roadmap you own — whether or not we build it. Fixed fee, 2–4 weeks.',
    ogTitle: 'AI Consulting — Decide Before You Build',
    ogDescription:
      'A fixed-fee engagement that audits your workflows and data, ranks the highest-return opportunities, and hands over a roadmap you can take to any firm.',

    h1: 'AI Consulting Services',
    h1Tail: 'Decide Before You Build',
    summary:
      'Our AI consulting services help you decide what to build before you commit an engineering budget. Over two to four weeks we audit your workflows and data, rank the highest-return automation candidates, estimate cost and effort for each, and hand over a prioritised roadmap you own outright.',
    assurances: [
      'Fixed fee, named deliverables',
      'The roadmap is yours to keep',
      'Priced separately from any build',
    ],

    introHeading: 'The most expensive AI mistake is not a failed model',
    intro: [
      'It is six months spent building a system for a workflow that was not costing much in the first place. Consulting front-loads that judgement: which processes are genuinely expensive, which are automatable at acceptable accuracy, what your data actually supports today, and what compliance requires before anything ships.',
      'We will also state the obvious conflict of interest. A firm that both advises and builds has an incentive to recommend building. Ours is managed by pricing discovery as its own contract, and by writing down the option of doing nothing — with its cost — alongside every recommendation.',
    ],

    problems: [
      {
        title: 'Competing internal proposals, no way to rank them',
        description:
          'Three departments each have an AI idea and there is no shared basis for comparing them, so the loudest sponsor wins.',
      },
      {
        title: 'A pilot stalled and nobody diagnosed why',
        description:
          'Something was built, it did not stick, and the reason was never established — so the next attempt repeats it.',
      },
      {
        title: 'Data that will not support the ambition',
        description:
          'The use case assumes clean, accessible, permissioned data. Nobody has checked whether that data exists in that condition.',
      },
      {
        title: 'Governance discovered late',
        description:
          'Privacy, residency, and human-oversight questions surface during procurement instead of during design, and stall the launch.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Workflow and data audit',
        description:
          'What your data can actually support today — where it lives, how clean it is, who may see it, and what must change before a model can be trusted with it.',
      },
      {
        step: '02',
        title: 'Opportunity mapping',
        description:
          'Candidate use cases ranked by hours recovered, error rate reduced, or revenue influenced, each with an effort estimate and an honest confidence level.',
      },
      {
        step: '03',
        title: 'Build-vs-buy on each item',
        description:
          'Where a subscription product wins, we say so. Custom is recommended only where your process is genuinely the advantage.',
      },
      {
        step: '04',
        title: 'Governance decisions',
        description:
          'Privacy, model hosting, data residency, and human oversight written down before they become a compliance question.',
      },
      {
        step: '05',
        title: 'Costed roadmap handover',
        description:
          'A sequenced plan with milestones, effort, and risks named — delivered as a document you own and can execute with anyone.',
      },
    ],

    benefits: [
      {
        title: 'A plan that survives scrutiny',
        description:
          'Ranked, costed, and defensible to a board, with the assumptions behind each estimate written down rather than implied.',
      },
      {
        title: 'Fewer wasted quarters',
        description:
          'The cheapest place to change your mind is week two. Discovery makes that possible instead of discovering it in month five.',
      },
      {
        title: 'Internal literacy',
        description:
          'Your team leaves the engagement able to evaluate the next proposal without an outside opinion.',
      },
      {
        title: 'No lock-in',
        description:
          'The roadmap is yours, including the option to take it to a different firm. That is what keeps the recommendation honest.',
      },
    ],

    technologies: [
      { label: 'Assessment', items: ['Workflow audit', 'Data readiness review', 'Access mapping'] },
      { label: 'Analysis', items: ['ROI modelling', 'Effort estimation', 'Risk register'] },
      { label: 'Governance', items: ['Privacy review', 'Model hosting options', 'Human-oversight design'] },
    ],

    industriesLead:
      'Most valuable where manual workload is significant and in-house AI expertise is thin.',
    industries: [
      'Healthcare',
      'Financial services',
      'Insurance',
      'Manufacturing',
      'Logistics',
      'Legal & professional services',
      'Education',
      'Public sector suppliers',
    ],

    faqs: [
      {
        question: 'What do AI consulting services actually deliver?',
        answer:
          'AI consulting delivers a decision document, not code. A typical engagement produces four artifacts: an audit of current workflows and data readiness, a ranked list of candidate use cases with estimated effort and expected return, the governance decisions covering privacy and model hosting, and a sequenced roadmap with costs and risks attached. The test of a good engagement is whether you could execute the plan with any provider, including one that is not us.',
      },
      {
        question: 'Who should hire AI consulting, and who should skip it?',
        answer:
          'Hire consulting when the business case is unclear — competing internal proposals, a stalled pilot with no diagnosis, or a regulated deployment needing governance settled first. Skip it when you already know what to build and can state its success criteria; in that case you need engineering, and paying for a strategy phase delays the thing that matters. Startups building an AI product almost always fall into the second group and should go straight to discovery and build.',
      },
      {
        question: 'How long does an AI consulting engagement take?',
        answer:
          'Two to four weeks for most readiness-and-roadmap engagements, running as a fixed-fee project with named deliverables and a defined end date. Larger organisations with several business units or heavy compliance requirements can run to six weeks. We deliberately do not sell open-ended advisory retainers as a first engagement — scope on advisory work drifts easily, and a fixed end date is what forces the roadmap to be finished rather than extended.',
      },
      {
        question: 'Will you recommend building something regardless?',
        answer:
          'No, and the structure is what makes that credible rather than the promise. Discovery is priced as its own contract, so our fee does not depend on a build following it. Every recommendation is written alongside the option of doing nothing and its cost, and where an off-the-shelf product beats a custom build we name the product. We would rather lose the implementation than hand over a roadmap you regret executing.',
      },
      // The three below moved here from the /services hub FAQ during the
      // hub-and-spoke redesign. They are consulting-specific, so they belong
      // on the page that owns "AI consulting services" rather than competing
      // with it from the catalog page.
      {
        question: 'What are AI consulting services?',
        answer:
          'AI consulting services are advisory engagements that help a business decide where artificial intelligence will produce a measurable return before anything is built. A typical engagement audits current workflows and data readiness, identifies and ranks candidate use cases, estimates effort, cost, and expected benefit for each, resolves governance, privacy, and compliance questions, and delivers a prioritised roadmap. The deliverable is a decision document, not code. Consulting is most valuable when a company knows AI matters but holds competing internal opinions about where to start, or when a previous pilot stalled and nobody has diagnosed why. A good engagement ends with a plan the client can execute with any provider.',
      },
      {
        question: 'What services do AI consulting companies offer?',
        answer:
          'AI consulting companies typically offer seven services: AI readiness and data audits, use-case discovery and prioritisation, ROI and cost modelling, technology and vendor selection, proof-of-concept development, AI governance and compliance frameworks, and team training or change management. Some also provide fractional AI leadership for companies without an internal head of AI. Firms that both advise and build can carry a recommendation straight into implementation, which avoids the common failure where a strategy deck is delivered and nothing ships from it — but they also have an incentive to recommend building. Pure advisory firms offer more neutrality. Ask which model a firm follows and how it manages that conflict.',
      },
      {
        question: 'How much do AI consulting services cost?',
        answer:
          'AI consulting services typically cost $5,000–$25,000 for a two-to-six-week readiness audit and roadmap, with hourly advisory at roughly $150–$400 in North America and Western Europe and $50–$150 from specialist teams in India and Eastern Europe. Enterprise strategy engagements from large consultancies commonly start above $100,000. A proof of concept usually falls between $10,000 and $40,000 depending on data complexity. Many firms credit the discovery fee against a subsequent build, which is worth asking about explicitly. Treat any consulting proposal that cannot name its deliverables as documents — a readiness audit, a ranked use-case list, a costed roadmap — with caution, because scope on advisory work drifts easily.',
      },
    ],

    relatedArticles: [
      { label: 'Where AI automation actually pays back', href: '/blog/ai-automations-roi-business-2026' },
      { label: 'What an MVP should really cost', href: '/blog/mvp-cost-agency-overcharging-2026' },
      { label: 'n8n vs Zapier vs Make', href: '/blog/n8n-vs-zapier-make-automation-2026' },
    ],
    relatedServices: ['product-discovery', 'ai-development', 'custom-ai-development'],
    ctaHeading: 'Not sure which problem to start with?',
    ctaBody:
      'That is exactly what discovery is for. Two to four weeks, fixed fee, and the roadmap is yours whoever builds it.',
    ctaLabel: 'Book an AI Consultation',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'ai-agent-development',
    category: 'ai',
    icon: 'Bot',
    cardTitle: 'AI Agent Development',
    cardDescription:
      'Agents that plan, call tools, and act across your systems — with permission boundaries, approval gates, and full traces.',
    badges: ['LangGraph', 'MCP', 'Temporal'],

    primaryKeyword: 'AI agent development',
    metaTitle: 'AI Agent Development Company — Guardrails | Auravon AI',
    metaDescription:
      'AI agent development with least-privilege tool access, human approval before irreversible actions, and full traces. Built to be operated, not demonstrated.',
    ogTitle: 'AI Agent Development — Capability Granted Deliberately',
    ogDescription:
      'The interesting question is not which framework you use. It is what happens on step four of a seven-step task when an API returns something unexpected.',

    h1: 'AI Agent Development',
    h1Tail: 'Constrained, Auditable, Recoverable',
    summary:
      'AI agent development builds systems that plan a task, call tools, and act across your software rather than only answering questions. We design the tool boundary, approval gates, failure recovery, and audit log first, because an agent that can act is only ever as safe as the constraints around it.',
    assurances: [
      'Least-privilege tool access',
      'Human approval before irreversible steps',
      'Full trace on every action',
    ],

    introHeading: 'The framework is not the interesting question',
    intro: [
      'The interesting question in agentic AI is what happens on step four of a seven-step task when an API returns something unexpected. We define which tools an agent may call, what requires human approval, how a partially completed task is rolled back or resumed, and how every action is recorded for review.',
      'Frameworks change every few months. Those decisions do not, and they are what separates an agent you can operate from one you can only demonstrate.',
    ],

    problems: [
      {
        title: 'An agent with more access than it needs',
        description:
          'Capability inherited from a broad API key rather than granted deliberately, so the blast radius of a mistake is unknown.',
      },
      {
        title: 'Half-finished tasks',
        description:
          'The agent failed at step four and left the world in a state nobody designed — records created, emails sent, nothing reconciled.',
      },
      {
        title: 'Irreversible actions taken unattended',
        description:
          'Sending, paying, deleting, and publishing happen without a person seeing the reasoning first, and the first review is the incident review.',
      },
      {
        title: 'Success measured one response at a time',
        description:
          'Per-response scoring says nothing about whether a seven-step task completed correctly, which is the only thing that matters.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Map the task and its blast radius',
        description:
          'What the agent is for, what it may touch, and what the worst outcome is if a step goes wrong unattended.',
      },
      {
        step: '02',
        title: 'Design the tool boundary',
        description:
          'Each tool explicitly defined, scoped to least privilege, and validated on input and output — capability granted, never inherited.',
      },
      {
        step: '03',
        title: 'Place the approval gates',
        description:
          'Irreversible actions pause for a person by default, with the agent presenting its reasoning and its evidence for the decision.',
      },
      {
        step: '04',
        title: 'Build recovery paths',
        description:
          'Durable execution so a partially completed task can be resumed or rolled back rather than abandoned mid-flight.',
      },
      {
        step: '05',
        title: 'Trace and evaluate',
        description:
          'Full traces on every run and task-level success measurement across a fixed test set, so failures attribute to a step.',
      },
    ],

    benefits: [
      {
        title: 'A known blast radius',
        description:
          'You can state exactly what the agent is able to do without a human seeing it first — because it was designed that way.',
      },
      {
        title: 'Recoverable, not restartable',
        description:
          'Durable execution means a failed run resumes from the failed step instead of starting over or leaving partial work behind.',
      },
      {
        title: 'Attributable failures',
        description:
          'Traces link an outcome to a specific step and tool call, so debugging is engineering rather than speculation about the model.',
      },
      {
        title: 'Measured on tasks, not tokens',
        description:
          'Task-level completion across a fixed set is the metric, which is the one that predicts whether the agent is worth running.',
      },
    ],

    technologies: [
      { label: 'Orchestration', items: ['LangGraph', 'Temporal', 'MCP'] },
      { label: 'Models', items: ['Claude', 'GPT', 'Llama'] },
      { label: 'Observability', items: ['OpenTelemetry', 'Structured traces', 'Eval suites'] },
      { label: 'Integration', items: ['REST', 'Webhooks', 'PostgreSQL', 'Redis'] },
    ],

    industriesLead:
      'Agents earn their place where a task spans several systems and currently costs a person an hour of clicking.',
    industries: [
      'Financial services',
      'Insurance',
      'Logistics',
      'E-commerce & retail',
      'Legal & professional services',
      'Healthcare operations',
      'SaaS products',
      'Manufacturing',
    ],

    faqs: [
      {
        question: 'What is an AI agent, in practical terms?',
        answer:
          'An AI agent is a system that receives a goal, plans a sequence of steps toward it, calls tools to carry those steps out, and adapts when a step returns something unexpected. The distinction from a chatbot is action: a chatbot answers, an agent changes something in your systems. That distinction is also why the engineering is different — the interesting problems are permission scoping, failure recovery, and audit, none of which a question-answering system needs.',
      },
      {
        question: 'How do you stop an agent from doing something harmful?',
        answer:
          'Three mechanisms, applied together. Tools are scoped to least privilege so the agent can only reach what it explicitly needs. Irreversible actions — sending, paying, deleting, publishing — pause for human approval by default, with the reasoning and evidence presented. And every action is logged with its inputs and outputs, so anything unexpected is visible immediately rather than at quarter end. Prompt instructions are not a control; they are a request, and they fail under unusual input.',
      },
      {
        question: 'What happens when an agent fails midway through a task?',
        answer:
          'We build agents on durable execution, so a run that fails at step four resumes from step four rather than restarting or leaving partial work behind. Each step records what it changed, which makes a rollback possible where resuming is not appropriate. This is the part most agent demos skip entirely, and it is the difference between a system your operations team will run unattended and one that needs a person watching it.',
      },
      {
        question: 'How do you measure whether an agent is working?',
        answer:
          'Task-level completion across a fixed test set, not per-response scoring. We define a set of representative end-to-end tasks with known correct outcomes, run them on every meaningful change, and track the completion rate alongside cost and latency per task. Per-response quality can look excellent while multi-step completion is poor, which is exactly the failure mode that makes agents look impressive in a demo and unreliable in production.',
      },
    ],

    relatedArticles: [
      { label: 'AI agents for business, explained', href: '/blog/ai-agents-for-business-2026' },
      { label: 'Where AI automation actually pays back', href: '/blog/ai-automations-roi-business-2026' },
      { label: 'n8n vs Zapier vs Make', href: '/blog/n8n-vs-zapier-make-automation-2026' },
    ],
    relatedServices: ['generative-ai-development', 'ai-software-development', 'api-development'],
    ctaHeading: 'What is the worst thing your agent could do?',
    ctaBody:
      'That is the first question we will ask, and the answer shapes the whole design. Bring us the workflow you want automated.',
    ctaLabel: 'Design an AI Agent',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'generative-ai-development',
    category: 'ai',
    icon: 'Sparkles',
    cardTitle: 'Generative AI Development',
    cardDescription:
      'RAG assistants, structured extraction, and content workflows grounded in your own data — with citations, not guesses.',
    badges: ['RAG', 'pgvector', 'Pydantic'],

    primaryKeyword: 'generative AI development',
    metaTitle: 'Generative AI Development Company | Auravon AI',
    metaDescription:
      'Generative AI development: RAG assistants grounded in your documents, validated structured extraction, and content workflows with human review. Get a scope.',
    ogTitle: 'Generative AI Development — Grounded, Cited, Validated',
    ogDescription:
      'The most valuable generative AI in a business is rarely the most visible. A pipeline reading 400 invoices a week changes more than a chat interface does.',

    h1: 'Generative AI Development',
    h1Tail: 'Grounded in Your Own Data',
    summary:
      'Generative AI development covers the systems that draft, summarise, extract, classify, and translate inside products your team already uses. We build retrieval-augmented assistants grounded in your own documents, extraction pipelines that return validated structured data, and content workflows with a human review step.',
    assurances: [
      'Answers cite their source paragraph',
      'Uncertain extractions route to a human',
      'Prompts versioned against an eval set',
    ],

    introHeading: 'The most valuable generative AI is rarely the most visible',
    intro: [
      'A pipeline that reads 400 supplier invoices a week and returns validated JSON changes more than a chat interface does — it removes a task rather than adding a tool someone has to remember to open. We start by looking for those, because they are where the return is largest and the risk is smallest.',
      'Where a conversational surface genuinely is the right answer, we ground it in your own documentation, CRM, or product data, and cite back to the source paragraph so a reader can verify rather than trust.',
    ],

    problems: [
      {
        title: 'Confident answers with no source',
        description:
          'A fluent paragraph with nothing to check it against teaches users either to over-trust the system or to stop using it. Both kill adoption.',
      },
      {
        title: 'Extraction that guesses',
        description:
          'A pipeline that always returns a value, including when it should not, quietly corrupts downstream records with plausible-looking data.',
      },
      {
        title: 'Prompt changes that break silently',
        description:
          'A tweak that improves one case regresses twenty others, and nobody finds out until a user reports it weeks later.',
      },
      {
        title: 'Knowledge that goes stale',
        description:
          'The index was built once. The documents moved on, and the assistant is now confidently quoting last year\'s policy.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Find the removable task',
        description:
          'We look for the repetitive, high-volume work first — the pipeline that deletes an hour a day beats the chat window that adds a tab.',
      },
      {
        step: '02',
        title: 'Design retrieval',
        description:
          'Chunking, embedding, and refresh strategy for your real documents, with access control applied at query time.',
      },
      {
        step: '03',
        title: 'Build the eval set',
        description:
          'Real examples with known correct answers, agreed before implementation, so prompt changes are tested rather than argued about.',
      },
      {
        step: '04',
        title: 'Validate the output',
        description:
          'Schema-validated structured returns with confidence thresholds, routing anything uncertain to a human queue instead of guessing.',
      },
      {
        step: '05',
        title: 'Ship with citations',
        description:
          'Answers link back to the source paragraph, so verification is a click rather than an act of faith.',
      },
    ],

    benefits: [
      {
        title: 'Verifiable answers',
        description:
          'Citations to the source paragraph mean a reader can check the claim, which is what makes the system usable for consequential work.',
      },
      {
        title: 'Clean structured data',
        description:
          'Schema validation and confidence thresholds keep uncertain results out of your database and in a human queue.',
      },
      {
        title: 'Changes you can test',
        description:
          'Versioned prompts run against a fixed eval set, so an improvement in one case cannot silently regress twenty others.',
      },
      {
        title: 'Knowledge that stays current',
        description:
          'A defined refresh strategy rather than a one-off index, so the assistant is not quoting a superseded document.',
      },
    ],

    technologies: [
      { label: 'Models', items: ['Claude', 'GPT', 'Llama'] },
      { label: 'Retrieval', items: ['pgvector', 'PostgreSQL', 'Hybrid search'] },
      { label: 'Validation', items: ['Pydantic', 'Zod', 'JSON Schema'] },
      { label: 'Evaluation', items: ['Eval suites', 'Prompt versioning', 'Regression runs'] },
    ],

    industriesLead:
      'Strongest fit wherever unstructured text arrives in volume and someone currently reads all of it.',
    industries: [
      'Financial services',
      'Insurance',
      'Legal & professional services',
      'Healthcare',
      'Logistics',
      'E-commerce & retail',
      'Education',
      'Real estate',
    ],

    faqs: [
      {
        question: 'What is retrieval-augmented generation, and do we need it?',
        answer:
          'Retrieval-augmented generation grounds a model\'s answer in documents fetched from your own systems at query time, rather than relying on what the model absorbed during training. You need it whenever answers must reflect your current, private, or frequently changing information — policies, product data, contracts, support history. You do not need it for tasks that are purely generative, such as rewriting a paragraph or classifying sentiment, where there is no external fact to ground against.',
      },
      {
        question: 'How do you stop the model from making things up?',
        answer:
          'Three layers, because no single one is sufficient. Retrieval constrains the model to your actual documents rather than its training data. Citations to the source paragraph make an unsupported claim visible to the reader immediately. And structured outputs are schema-validated with confidence thresholds, so an uncertain extraction goes to a human queue instead of into your database. Hallucination is reduced by architecture and caught by validation — instructing the model not to invent things is the weakest of the three.',
      },
      {
        question: 'Can generative AI work with our private documents without exposing them?',
        answer:
          'Yes. Three deployment options cover almost every constraint: frontier APIs under a zero-retention agreement, open-weight models running inside your own cloud account, or fully on-premise deployment where data may not leave your infrastructure at all. The choice is made against your data-residency and contractual obligations during scoping, not assumed. Retrieval also applies your existing access rules at query time, so the model never sees a document the requesting user could not open.',
      },
      {
        question: 'How do you measure whether a generative AI system is accurate enough?',
        answer:
          'With an evaluation set built from your real examples and agreed before the build starts. Each example has a known correct answer, and a pass threshold is set against the accuracy the use case actually requires — extracting invoice totals demands a different bar from drafting a first-pass email. The set is re-run on every prompt, retrieval, or model change, which turns "did that make it better" from an opinion into a number.',
      },
    ],

    relatedArticles: [
      { label: 'Building a RAG chatbot, step by step', href: '/blog/rag-chatbot-langchain-guide' },
      { label: 'AI chatbots for business', href: '/blog/build-ai-chatbot-business-2026' },
      { label: 'WhatsApp automation for business', href: '/blog/whatsapp-automation-business' },
    ],
    relatedServices: ['ai-agent-development', 'custom-ai-development', 'ai-software-development'],
    ctaHeading: 'What does your team read every week?',
    ctaBody:
      'Invoices, tickets, contracts, applications — if people are reading them in volume, there is usually a pipeline worth building.',
    ctaLabel: 'Explore Generative AI',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'custom-ai-development',
    category: 'ai',
    icon: 'Puzzle',
    cardTitle: 'Custom AI Development',
    cardDescription:
      'AI shaped around your data, vocabulary, and process — including private and self-hosted deployment.',
    badges: ['Llama', 'vLLM', 'Private VPC'],

    primaryKeyword: 'custom AI development',
    metaTitle: 'Custom AI Development Services — Private AI | Auravon AI',
    metaDescription:
      'Custom AI development built around your data, vocabulary, and process — including open-weight models in your own cloud or on-premise. Free scoping call.',
    ogTitle: 'Custom AI Development — When Off-the-Shelf Cannot Encode Your Process',
    ogDescription:
      'Custom is not automatically right. We build it when your workflow is the advantage, your data cannot leave your infrastructure, or integration depth is the point.',

    h1: 'Custom AI Development',
    h1Tail: 'Shaped Around Your Process',
    summary:
      'Custom AI development produces a system shaped around your data, your vocabulary, and your process, instead of a generic product you configure around. That matters when the workflow is your competitive advantage — off-the-shelf tools cannot encode the exceptions your team knows by heart.',
    assurances: [
      'Private or on-premise deployment',
      'Tuned against your real documents',
      'Integrated where the work happens',
    ],

    introHeading: 'Custom is not automatically the right answer',
    intro: [
      'If the task is generic — transcription, note-taking, standard document search — a subscription product will beat a custom build on both cost and time, and we will tell you so. Custom earns its cost when your process is genuinely unusual, when your data cannot leave your infrastructure, or when integration depth is the whole point.',
      'When it is the right answer, the difference shows up in the details: prompts and eval sets written against your terminology, retrieval tuned on your real documents, and output landing inside the system your team already works in rather than in another tab.',
    ],

    problems: [
      {
        title: 'A vendor settings screen that cannot express your exceptions',
        description:
          'The case handled differently for one client, the approval that skips a step — the things your team knows by heart and no product has a field for.',
      },
      {
        title: 'Data that may not leave your infrastructure',
        description:
          'Contractual, regulatory, or residency constraints rule out a third-party API, and the off-the-shelf options all are one.',
      },
      {
        title: 'Generic accuracy benchmarks',
        description:
          'A vendor\'s published accuracy says nothing about your documents, your terminology, or your edge cases.',
      },
      {
        title: 'Output that lands in another tab',
        description:
          'A tool that does not write back into your CRM, ERP, or internal system adds a step instead of removing one.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Confirm custom is right',
        description:
          'We compare against the off-the-shelf options honestly, including total cost of ownership, and recommend the product where it wins.',
      },
      {
        step: '02',
        title: 'Learn your domain',
        description:
          'Your terminology, your exceptions, and your real documents — the material the prompts and eval sets will be written against.',
      },
      {
        step: '03',
        title: 'Choose the deployment model',
        description:
          'Frontier API, open-weight in your own VPC, or on-premise, decided against your residency and compliance constraints.',
      },
      {
        step: '04',
        title: 'Tune retrieval and prompts',
        description:
          'Measured on your documents rather than a public benchmark, because a generic score predicts nothing about your accuracy.',
      },
      {
        step: '05',
        title: 'Integrate deeply',
        description:
          'Connected to the CRM, ERP, support desk, or database your team already uses, so results land where the work happens.',
      },
    ],

    benefits: [
      {
        title: 'It encodes how you actually work',
        description:
          'Including the exceptions that live in your team\'s heads and cannot be expressed in a vendor\'s configuration screen.',
      },
      {
        title: 'Your data stays where you decide',
        description:
          'Open-weight models in your own cloud or on-premise where residency, contractual, or regulatory constraints require it.',
      },
      {
        title: 'Accuracy measured on your material',
        description:
          'Eval sets built from your documents and your vocabulary, so the number means something for your use case.',
      },
      {
        title: 'No per-seat ceiling',
        description:
          'Cost scales with usage and infrastructure rather than with headcount, which changes the economics at scale.',
      },
    ],

    technologies: [
      { label: 'Open-weight models', items: ['Llama', 'Mistral', 'Qwen'] },
      { label: 'Serving', items: ['vLLM', 'Ollama', 'Private VPC', 'On-premise'] },
      { label: 'Retrieval', items: ['pgvector', 'PostgreSQL', 'Hybrid search'] },
      { label: 'Integration', items: ['REST', 'Webhooks', 'CRM & ERP connectors'] },
    ],

    industriesLead:
      'Custom builds make sense where the process is the competitive advantage, or where the data cannot travel.',
    industries: [
      'Healthcare',
      'Financial services',
      'Insurance',
      'Legal & professional services',
      'Manufacturing',
      'Logistics',
      'Public sector suppliers',
      'Pharmaceuticals',
    ],

    faqs: [
      {
        question: 'When is custom AI development worth it over an off-the-shelf tool?',
        answer:
          'Custom is worth it in three situations: your process is a competitive advantage that a configurable product cannot encode, your data cannot leave your infrastructure for contractual or regulatory reasons, or you need integration depth no vendor will build for you. Outside those, a subscription product usually wins on both cost and time to value. Generic tasks — transcription, note-taking, standard document search — rarely justify a custom build, and we will say so during scoping.',
      },
      {
        question: 'Can you run AI models entirely inside our own infrastructure?',
        answer:
          'Yes. Open-weight models such as Llama, Mistral, and Qwen can run in your own cloud account via vLLM, or fully on-premise where nothing may leave your network. The trade-offs are real and we will state them: self-hosting adds infrastructure cost and operational responsibility, and open-weight models still trail frontier APIs on the hardest reasoning tasks. For extraction, classification, and grounded question answering — the bulk of business use cases — the gap is usually not the deciding factor.',
      },
      {
        question: 'Do we need to fine-tune a model?',
        answer:
          'Usually not, and it is worth resisting until the cheaper options are exhausted. Better retrieval, clearer prompt structure, and a well-built eval set solve most accuracy problems at a fraction of the cost and without the ongoing burden of retraining as your data changes. Fine-tuning earns its place for consistent output formatting, a genuinely specialised vocabulary, or latency and cost reduction at high volume — and we will tell you which of those applies before recommending it.',
      },
      {
        question: 'Who owns the custom AI system you build?',
        answer:
          'You do, completely and by contract: source code, prompts, evaluation sets, fine-tuned model artifacts, infrastructure definitions, and documentation. There is no hosting lock-in, no licence fee on your own system, and nothing structurally withheld to make leaving expensive. You can run it in your own cloud accounts from day one. We consider this non-negotiable rather than a concession — an engagement should continue because the work is good, not because the exit is costly.',
      },
      // Moved here from the /services hub FAQ during the hub-and-spoke
      // redesign — it is the definitional query for this page's keyword.
      {
        question: 'What are custom AI development services?',
        answer:
          'Custom AI development services build an AI system around one organisation\'s data, vocabulary, and process, instead of configuring a generic AI product. That includes retrieval grounded in your own documents, prompts and evaluation sets written against your domain, models selected or fine-tuned for your specific task, private or self-hosted deployment where data residency requires it, and integration into the systems your team already uses. Choose custom when your process is a competitive advantage, when your exceptions cannot be expressed in a vendor\'s settings, or when your data cannot leave your infrastructure. Choose an off-the-shelf AI tool when the task is generic — transcription, note-taking, and standard document search rarely justify a custom build.',
      },
    ],

    relatedArticles: [
      { label: 'What AI app development really costs', href: '/blog/ai-app-development-cost-guide' },
      { label: 'Building a RAG chatbot, step by step', href: '/blog/rag-chatbot-langchain-guide' },
      { label: 'AI agents for business, explained', href: '/blog/ai-agents-for-business-2026' },
    ],
    relatedServices: ['ai-development', 'generative-ai-development', 'ai-consulting'],
    ctaHeading: 'Is your process the thing off-the-shelf cannot handle?',
    ctaBody:
      'Describe the exceptions your team works around today. That conversation usually settles the build-versus-buy question in one call.',
    ctaLabel: 'Talk About a Custom AI Build',
  },
];
