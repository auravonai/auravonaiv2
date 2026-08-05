/**
 * Site-wide SEO primitives: metadata defaults, structured-data nodes, and the
 * homepage content that has to appear in BOTH the rendered page and its
 * JSON-LD.
 *
 * Why this file exists
 * --------------------
 * Structured data is only valid when it describes what a visitor can actually
 * see. Keeping the FAQ list and the service list here — and importing them
 * into the components that render them — means the markup and the schema can
 * never drift apart. Never hand-write a second copy of these arrays inside a
 * `<script type="application/ld+json">`.
 *
 * Entity model
 * ------------
 * Every node is anchored with a stable `@id` so the graph links up instead of
 * describing three unrelated companies:
 *
 *   #organization  — Auravon AI itself (emitted site-wide by BaseLayout)
 *   #website       — the site (emitted site-wide, publisher → #organization)
 *   /#webpage      — the specific page (emitted per page)
 *   /#breadcrumb   — that page's trail
 *   /#faq          — that page's FAQ block
 *
 * The previous layout emitted an `Organization` and a `ProfessionalService`
 * as two unlinked top-level nodes, which reads to a parser as two separate
 * entities with the same name. They are merged into one multi-typed node.
 */

import { SITE_NAME, SITE_URL, WHATSAPP_DISPLAY } from './site';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const LOGO_URL = `${SITE_URL}/logo.png`;
const OG_IMAGE_URL = `${SITE_URL}/og-image.png`;

/**
 * Current dimensions of `public/og-image.png`. These are declared to the
 * crawler verbatim — do not "round" them to 1200×630 to look correct. The
 * asset genuinely is 940×788, which is close to square and will be cropped by
 * X/LinkedIn. Regenerating it at 1200×630 and updating these two numbers is a
 * real, outstanding improvement.
 */
export const OG_IMAGE = {
  url: OG_IMAGE_URL,
  width: 940,
  height: 788,
  alt: 'Auravon AI — AI development company building custom AI software, AI agents, and automation systems',
} as const;

/* ────────────────────────────────────────────────────────────────────────
   Homepage metadata
   ──────────────────────────────────────────────────────────────────────── */

export const HOME_SEO = {
  /**
   * 58 characters. Primary keyword leads; the brand closes so BaseLayout's
   * "append brand unless already present" rule leaves it alone.
   */
  title: 'AI Development Company | AI Software & Agents | Auravon AI',
  /**
   * 155 characters. Google truncates the SERP snippet around 155–160, so the
   * call to action has to survive inside that budget, not trail past it.
   */
  description:
    'AI development company building custom AI software, AI agents, LLM apps, and automation for startups and enterprises. Talk to an engineer, free.',
  canonical: '/',

  /** Social copy is deliberately not a duplicate of the meta description. */
  ogTitle: 'Auravon AI — AI Development Company for Custom AI Software',
  ogDescription:
    'We design, build, and ship production AI systems: AI agents, RAG assistants, LLM integrations, automation, and the custom software around them. Direct access to the engineers doing the work.',
  twitterTitle: 'Auravon AI — AI Development Company',
  twitterDescription:
    'Custom AI software, AI agents, LLM applications, and automation — engineered for production, not demos.',
} as const;

/* ────────────────────────────────────────────────────────────────────────
   Site-wide entity nodes
   ──────────────────────────────────────────────────────────────────────── */

/**
 * `knowsAbout` is the cheapest topical-authority signal available: it states
 * the entity's subject area in machine-readable form. Keep it to things the
 * site genuinely covers in depth — padding it with unrelated terms is the
 * structured-data equivalent of keyword stuffing.
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: SITE_NAME,
  alternateName: 'Auravon',
  url: `${SITE_URL}/`,
  logo: {
    '@type': 'ImageObject',
    url: LOGO_URL,
    caption: `${SITE_NAME} logo`,
  },
  image: OG_IMAGE_URL,
  description:
    'Auravon AI is an AI development company building custom AI software, AI agents, LLM applications, SaaS platforms, and automation systems for startups and enterprises worldwide.',
  slogan: 'Production AI, engineered end to end.',
  // Nominates /about as the entity's own page. Without this, the About page
  // is just another document that mentions the company; with it, the page and
  // the entity are explicitly the same subject — which is what an About page
  // is for in an entity graph.
  mainEntityOfPage: { '@id': `${SITE_URL}/about#webpage` },
  // NOTE: no `foundingDate`. One was briefly added here as '2019', inferred
  // from the timeline on /about rather than confirmed with the business. A
  // founding date is a machine-readable public claim about a real company —
  // add it only once someone has confirmed the actual date.
  email: 'support@auravonai.com',
  telephone: WHATSAPP_DISPLAY,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vadodara',
    addressRegion: 'Gujarat',
    addressCountry: 'IN',
  },
  // Worldwide, not a country list. Auravon works remotely with clients
  // anywhere; enumerating seven countries implied a limit that does not
  // exist and quietly excluded every market outside the list. The
  // `address` above stays — a real registered location is a trust signal
  // and is what local/knowledge-panel surfaces read. Scope of service and
  // place of business are different claims.
  areaServed: 'Worldwide',
  knowsAbout: [
    'AI development',
    'Artificial intelligence software development',
    'AI agent development',
    'Generative AI development',
    'Large language model applications',
    'Retrieval-augmented generation',
    'AI integration',
    'Business process automation',
    'Custom software development',
    'SaaS product development',
    'Web application development',
    'Mobile app development',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'projects@auravonai.com',
      telephone: WHATSAPP_DISPLAY,
      availableLanguage: ['English', 'Hindi'],
      areaServed: 'Worldwide',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@auravonai.com',
      availableLanguage: ['English', 'Hindi'],
      areaServed: 'Worldwide',
    },
  ],
  sameAs: [
    'https://x.com/auravonai',
    'https://www.linkedin.com/company/auravon-ai-tech/',
    'https://github.com/auravonai',
  ],
  // NOTE: no `aggregateRating` and no `Review` nodes. There is no verifiable
  // review corpus behind this site yet, and inventing one is both a Google
  // structured-data violation and the fastest way to lose trust. Add these
  // only when real, attributable reviews exist on the page.
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  description:
    'AI development company building custom AI software, AI agents, automation systems, and the software products around them.',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

/* ────────────────────────────────────────────────────────────────────────
   Per-page node builders
   ──────────────────────────────────────────────────────────────────────── */

export interface Crumb {
  name: string;
  /** Path only, e.g. "/services". */
  path: string;
}

/**
 * A single-item breadcrumb (the homepage on its own) is noise, so callers
 * pass the full trail including "Home". Google requires the trail to match
 * the visible hierarchy, not the URL structure.
 */
export function breadcrumbSchema(crumbs: Crumb[], pagePath = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}${pagePath}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: `${SITE_URL}${crumb.path}`,
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
  hasBreadcrumb?: boolean;
  /**
   * A more specific WebPage subtype where one applies — `AboutPage` for
   * `/about`, `ContactPage` for `/contact`. Only use a subtype the page
   * genuinely is; a generic marketing page typed as `AboutPage` is a false
   * statement about the document, not a ranking trick.
   */
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
  /**
   * The entity this page is *primarily about*, by `@id`. Distinct from
   * `about`, which every page on the site carries: `mainEntity` says this
   * page is the subject's own page, and is what makes `/about` the canonical
   * description of the Organization rather than one more page mentioning it.
   */
  mainEntityId?: string;
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    '@context': 'https://schema.org',
    '@type': opts.type ?? 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    ...(opts.mainEntityId ? { mainEntity: { '@id': opts.mainEntityId } } : {}),
    primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE_URL },
    inLanguage: 'en',
    ...(opts.hasBreadcrumb
      ? { breadcrumb: { '@id': `${url}#breadcrumb` } }
      : {}),
  };
}

export interface Faq {
  question: string;
  /** Plain text. Rendered as-is on the page and copied into the JSON-LD. */
  answer: string;
}

/**
 * Emits the exact shape Google documented for FAQPage: `@context`, `@type`,
 * and a `mainEntity` array of `Question` nodes, each with an `acceptedAnswer`
 * of type `Answer` carrying `text`. `@id` and `isPartOf` are additions — valid
 * schema.org that link this node into the site's entity graph; parsers ignore
 * properties they do not consume. Every FAQ block on the site goes through
 * this function or matches it exactly.
 *
 * `text` is plain text here rather than HTML-wrapped (`<p>…</p>`). Google's
 * examples showed both forms, a limited HTML subset was always permitted, and
 * neither was preferred — for single-paragraph answers the tags are bytes and
 * an extra escaping surface for no gain. If an answer ever needs a list or
 * multiple paragraphs, wrap it then, and make the rendered markup match.
 *
 * Reality check on what this buys, as of 2026: Google restricted FAQ *rich
 * results* to well-known authoritative government and health sites in 2023,
 * then deprecated the feature and removed its documentation. This markup will
 * not produce an expanded SERP listing for a commercial site — no format
 * change fixes that, because the feature is gone rather than the markup being
 * wrong. It is still worth emitting: it feeds question/answer extraction for
 * AI Overviews and assistant-style surfaces, and Bing still renders FAQ
 * results. Treat the visible, well-written answers as the thing that actually
 * earns featured snippets. The markup is a bonus, not the mechanism.
 *
 * The one hard rule Google still enforces: every marked-up question and
 * answer must be visible on the page. Passing the same array to the renderer
 * and to this function is what guarantees that.
 */
export function faqPageSchema(faqs: readonly Faq[], pagePath = '/') {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${pagePath}#faq`,
    isPartOf: { '@id': `${SITE_URL}${pagePath}#webpage` },
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

/* ────────────────────────────────────────────────────────────────────────
   Homepage services — rendered by ServicesSection.astro AND emitted as
   Service nodes. One array, two consumers, no drift.
   ──────────────────────────────────────────────────────────────────────── */

export interface HomeService {
  /** Key into the icon map in ServicesSection.astro. */
  icon: string;
  name: string;
  /** Card copy. Also the Service node's description. */
  description: string;
  tags: string[];
  /** Where the card links. Must resolve — see the internal-linking notes. */
  href: string;
  /** schema.org serviceType — the commercial term people actually search. */
  serviceType: string;
}

export const homeServices: readonly HomeService[] = [
  {
    icon: 'Bot',
    name: 'AI Agent Development',
    description:
      'Autonomous and human-in-the-loop agents that read your systems, decide, and act — with tool access, guardrails, and audit trails so you can see every decision they made.',
    tags: ['Tool calling', 'Multi-step workflows', 'Guardrails'],
    href: '/blog/ai-agents-for-business-2026',
    serviceType: 'AI Agent Development',
  },
  {
    icon: 'Sparkles',
    name: 'Generative AI Development',
    description:
      'Generative AI solutions built on GPT, Claude, and open-weight models — drafting, summarising, extracting, and classifying inside the products your team already uses.',
    tags: ['LLM apps', 'Prompt engineering', 'Evaluation'],
    href: '/blog/building-ai-powered-saas-2025',
    serviceType: 'Generative AI Development',
  },
  {
    icon: 'MessageSquare',
    name: 'AI Chatbots & RAG Assistants',
    description:
      'Retrieval-augmented assistants grounded in your own documentation, CRM, or product data — so answers cite real sources instead of inventing them.',
    tags: ['RAG', 'Vector search', 'WhatsApp & web'],
    href: '/blog/build-ai-chatbot-business-2026',
    serviceType: 'AI Chatbot Development',
  },
  {
    icon: 'Plug',
    name: 'AI Integration Services',
    description:
      'AI added to the software you already run. We wire models into your CRM, ERP, support desk, or internal tools with proper fallbacks, rate limits, and cost controls.',
    tags: ['APIs', 'Legacy systems', 'Cost controls'],
    href: '/contact',
    serviceType: 'AI Integration Services',
  },
  {
    icon: 'Workflow',
    name: 'AI Automation Services',
    description:
      'Automation for the repetitive work that quietly consumes your week — document processing, lead routing, reporting, and cross-system syncing, with alerts when a run fails.',
    tags: ['n8n', 'Document processing', 'Workflow design'],
    href: '/blog/ai-automations-roi-business-2026',
    serviceType: 'AI Automation Services',
  },
  {
    icon: 'Code2',
    name: 'Custom Software Development',
    description:
      'The software around the AI: internal tools, dashboards, admin panels, and management systems shaped to how your business actually operates.',
    tags: ['Internal tools', 'Dashboards', 'Integrations'],
    href: '/services',
    serviceType: 'Custom Software Development',
  },
  {
    icon: 'Layers',
    name: 'SaaS & Web App Development',
    description:
      'Multi-tenant SaaS platforms and web applications built on Next.js and TypeScript — billing, roles, and permissions handled properly from the first sprint.',
    tags: ['Next.js', 'Multi-tenant', 'Stripe & Razorpay'],
    href: '/blog/building-ai-powered-saas-2025',
    serviceType: 'SaaS Development',
  },
  {
    icon: 'Smartphone',
    name: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps in React Native and Flutter, including the AI features that make them worth opening twice.',
    tags: ['React Native', 'Flutter', 'Store submission'],
    href: '/blog/react-native-vs-flutter-2025',
    serviceType: 'Mobile App Development',
  },
];

export function homeServiceSchemas(services: readonly HomeService[] = homeServices) {
  return services.map((service) => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${service.serviceType.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    name: service.name,
    serviceType: service.serviceType,
    description: service.description,
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    url: `${SITE_URL}/`,
  }));
}

/* ────────────────────────────────────────────────────────────────────────
   Homepage FAQ — rendered by FAQSection.astro AND emitted as FAQPage.
   ────────────────────────────────────────────────────────────────────────

   Answer shape is deliberate and worth preserving on edits: the first
   sentence is a complete, self-contained definition or direct answer of
   roughly 40–55 words, because that is the unit a featured snippet or an AI
   Overview lifts. Supporting detail follows. An answer that opens with
   "It depends" or with brand copy cannot be extracted. */

export const homeFaqs: readonly Faq[] = [
  {
    question: 'What is an AI development company?',
    answer:
      'An AI development company designs, builds, and deploys software powered by artificial intelligence — including AI agents, large language model applications, machine learning features, and automation systems. Unlike a research lab, it focuses on shipping production systems that integrate with a client\'s existing data, tools, and workflows, then maintaining them as models and requirements change.',
  },
  {
    question: 'What is the best AI software development company?',
    answer:
      'There is no single best AI software development company, because the right partner depends on your problem type, budget, and stage. The best fit for you is the firm that has shipped production systems similar to what you need, can explain its evaluation and failure-handling approach in concrete terms, gives you direct access to its engineers, and hands over code and infrastructure you own outright.',
  },
  {
    question: 'How to choose an AI development company?',
    answer:
      'Choose an AI development company by evaluating five things: shipped production AI work rather than demos, how they measure model accuracy and handle failure cases, who you actually talk to during the project, their data-privacy and model-hosting options, and whether you own the code and infrastructure afterwards. Ask for a paid discovery phase before committing to a full build.',
  },
  {
    question: 'How to choose the right AI development company for your project?',
    answer:
      'Match the company to the shape of your project. A single AI feature inside an existing product needs an integration-focused team; a new AI product needs a partner who can do product design, backend, and MLOps together; a regulated deployment needs demonstrated compliance experience. Shortlist three firms, give each the same one-page brief, and compare how differently they scope it.',
  },
  {
    question: 'How to choose an AI agent development company?',
    answer:
      'For AI agent development, judge a company on how it controls agent behaviour rather than on the frameworks it lists. Ask how the agent is constrained to approved tools, what happens when a step fails midway, how actions are logged for audit, how the team evaluates multi-step task success, and how human approval is inserted before anything irreversible happens.',
  },
  {
    question: 'What is an AI app development company?',
    answer:
      'An AI app development company builds mobile and web applications with artificial intelligence built into the product experience — such as conversational interfaces, personalised recommendations, image or document understanding, and predictive features. It combines conventional app engineering with model integration, prompt design, evaluation, and the cost and latency management that AI features require in production.',
  },
  {
    question: 'What company is leading AI development?',
    answer:
      'In foundation models, the leaders are Anthropic, OpenAI, and Google DeepMind, with Meta and Mistral leading open-weight releases. Those companies build the models; they do not build your product. Applied AI development companies like Auravon AI sit in the implementation layer, turning those models into working systems for a specific business — which is the layer most companies actually need to hire for.',
  },
  {
    question: 'How to find a trusted custom AI development company?',
    answer:
      'Find a trusted custom AI development company by verifying claims rather than reading a portfolio page. Request a reference call with a past client, ask to see a real repository or architecture diagram, confirm named engineers on your project, and check that the contract assigns you full IP ownership. Start with a small paid pilot before committing to a long engagement.',
  },
  {
    question: 'What is a software development company?',
    answer:
      'A software development company plans, builds, tests, deploys, and maintains custom software for other businesses — including web applications, mobile apps, internal tools, and SaaS platforms. It typically provides the full team a project needs: product strategy, UI/UX design, frontend and backend engineering, QA, DevOps, and post-launch support under one contract.',
  },
  {
    question: 'How to choose a software development company?',
    answer:
      'Choose a software development company by reviewing relevant delivered work, technical depth in your required stack, communication structure, and contract terms. Insist on a written scope with milestones, confirm who is actually assigned to your project, verify code and IP ownership, and check that testing, documentation, and handover are included rather than billed as extras later.',
  },
  {
    question: 'How to hire a software development company?',
    answer:
      'Hire a software development company in five steps: write a one-page brief covering the problem, users, must-have features, budget range, and deadline; shortlist three to five firms with relevant experience; compare proposals on scope and assumptions rather than headline price; run a short paid discovery to test how they work; then sign a contract specifying milestones, IP ownership, and support terms.',
  },
  {
    question: 'How to choose a custom software development company?',
    answer:
      'For custom software, prioritise a company that interrogates your business logic before quoting. Ask how they handle changing requirements mid-build, what happens to edge cases and exceptions in your process, how the system will be documented, and whether another engineering team could take it over later. Bespoke systems live for years — maintainability matters more than launch speed.',
  },
  {
    question: 'What should I look for before hiring an AI development company?',
    answer:
      'Before hiring an AI development company, confirm six things: production AI systems already live with real users, a written evaluation approach for accuracy and hallucinations, clear data handling and model-hosting choices, named engineers you can speak with directly, transparent pricing tied to milestones, and full ownership of code, prompts, and infrastructure when the engagement ends.',
  },
  {
    question: 'Why should businesses invest in AI development?',
    answer:
      'Businesses invest in AI development to remove repetitive manual work, respond to customers faster, and surface decisions from data that people cannot process at volume. The measurable returns usually come from narrow, high-frequency tasks — support triage, document processing, lead qualification, reporting — where a system running continuously replaces hours of routine work each week rather than doing something entirely new.',
  },
  {
    question: 'What industries benefit from AI development?',
    answer:
      'AI development delivers the clearest returns in industries with high document volume, repetitive decisions, or heavy customer contact: healthcare, financial services and insurance, e-commerce and retail, logistics, legal and professional services, education, real estate, and manufacturing. Any business handling large volumes of unstructured text, images, or support requests is a strong candidate.',
  },
];
