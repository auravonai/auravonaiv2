/**
 * Portfolio entries for /projects.
 *
 * Lifted out of the page component (the reference kept it inline) so the
 * copy sits with the rest of the data layer and the component stays
 * presentational. The per-project accent colours from the reference are
 * gone — DESIGN.md's palette is ink + gray only.
 */

export type ProjectHighlight = { label: string; value: string };

export type Project = {
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  duration: string;
  teamSize: string;
  highlights: ProjectHighlight[];
  featured?: boolean;
};

export const projectCategories = [
  'All',
  'AI Solutions',
  'Web Development',
  'Mobile App',
  'SaaS Product',
  'Custom Software',
] as const;

export const projectIndustries = [
  'SaaS Products',
  'E-Commerce',
  'HR & Operations',
  'Food & Beverage',
  'Finance & Reporting',
  'Field Services',
  'EdTech',
  'B2B Tools',
];

export const projects: Project[] = [
  {
    title: 'AI CRM Dashboard',
    category: 'AI Solutions',
    description:
      'A B2B sales team was managing their entire pipeline through email threads and a shared spreadsheet. Every call had to be manually summarized, follow-ups were missed more often than not. We built them a focused CRM that connects to their calendar, auto-generates call notes with GPT-4, and keeps the deal board in one honest view.',
    problem:
      'Pipeline tracked in spreadsheets, no call summaries, deals slipping through the gaps.',
    solution:
      'CRM with AI call summaries, automatic follow-up scheduling, and a live deal board — built in 8 weeks.',
    technologies: ['Next.js', 'OpenAI', 'PostgreSQL', 'Prisma'],
    duration: '8 weeks',
    teamSize: '3 engineers',
    highlights: [
      { label: 'Time to ship', value: '8 weeks' },
      { label: 'Call logging', value: 'Automated' },
    ],
    featured: true,
  },
  {
    title: 'Business Analytics Dashboard',
    category: 'SaaS Product',
    description:
      'A founder was opening six different tabs every morning — Stripe for revenue, HubSpot for leads, Google Analytics for traffic — just to understand how the previous day went. We built a single dashboard that pulls it all together and emails a formatted summary at 8am.',
    problem:
      'Business metrics scattered across 5+ tools with no unified view or daily summary.',
    solution:
      'Unified analytics dashboard with live data integrations and automated daily email digest.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    duration: '10 weeks',
    teamSize: '3 engineers',
    highlights: [
      { label: 'Data integrations', value: '4 sources' },
      { label: 'Daily digest', value: 'Automated' },
    ],
  },
  {
    title: 'AI Support Assistant',
    category: 'AI Solutions',
    description:
      "A small SaaS team was answering the same product questions every day across web chat, WhatsApp, and email. Most answers already existed in their docs — users just couldn't find them. We built a chatbot trained on their knowledge base that handles routine queries and routes anything complex to a human.",
    problem:
      'Support team spending most of their day on questions already answered in the product docs.',
    solution:
      'RAG chatbot trained on product docs, deployed on web chat and WhatsApp Business.',
    technologies: ['LangChain', 'Pinecone', 'OpenAI', 'FastAPI'],
    duration: '6 weeks',
    teamSize: '2 engineers',
    highlights: [
      { label: 'Channels deployed', value: 'Web + WhatsApp' },
      { label: 'Docs indexed', value: '200+' },
    ],
  },
  {
    title: 'E-Commerce Rebuild',
    category: 'Web Development',
    description:
      'A growing online store had outgrown Shopify — checkout could not be customized, the site was slow, and every third-party app added more loading time. We rebuilt the storefront in Next.js with edge caching, a custom checkout flow, and a lightweight admin panel their team can actually use.',
    problem:
      'Shopify store averaging 4-second load times with no way to customize the checkout experience.',
    solution:
      'Custom Next.js storefront with edge caching, Stripe checkout, and a lean admin panel.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Cloudflare'],
    duration: '10 weeks',
    teamSize: '3 engineers',
    highlights: [
      { label: 'Load time', value: 'Under 1s' },
      { label: 'Fully custom', value: 'Checkout + admin' },
    ],
  },
  {
    title: 'HR Management System',
    category: 'Custom Software',
    description:
      'An 80-person services company was running payroll from a spreadsheet, tracking leave through email, and doing compliance reporting manually every quarter. We replaced five separate spreadsheets with one internal tool — onboarding, leave requests, payroll summaries, and automated monthly reports.',
    problem:
      'Payroll, leave, and compliance managed across 5 separate spreadsheets with no audit trail.',
    solution:
      'Internal HR tool replacing manual spreadsheets — onboarding, leave, payroll, and reporting.',
    technologies: ['Next.js', 'MongoDB', 'Node.js', 'SendGrid'],
    duration: '14 weeks',
    teamSize: '4 engineers',
    highlights: [
      { label: 'Spreadsheets replaced', value: '5' },
      { label: 'Monthly payroll', value: 'Automated' },
    ],
  },
  {
    title: 'Startup Landing Page',
    category: 'Web Development',
    description:
      'A B2B SaaS founder needed a strong first impression for investor conversations and a product launch — their existing site was a placeholder with stock photos. We designed and built a focused landing page in 5 days with clear messaging, smooth animations, and a Calendly integration for booking demos.',
    problem:
      'Founder had a placeholder site while preparing for investor meetings and an imminent product launch.',
    solution:
      'Clean, fast landing page designed and shipped in 5 days with demo booking integration.',
    technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    duration: '5 days',
    teamSize: '2 engineers',
    highlights: [
      { label: 'Time to launch', value: '5 days' },
      { label: 'Demo booking', value: 'Calendly integrated' },
    ],
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile App',
    description:
      'A restaurant group was paying 25–30% commission to delivery aggregators on every order. They wanted to own the customer relationship and keep more margin. We built three apps: one for customers to order, one for drivers to manage pickups, and a dashboard for restaurant staff to handle incoming orders in real time.',
    problem:
      'Restaurant paying 25%+ in aggregator commissions with no control over the ordering experience.',
    solution:
      'Three-app system — customer ordering, driver tracking, and restaurant dashboard with real-time GPS.',
    technologies: ['React Native', 'Socket.io', 'PostgreSQL', 'Google Maps API'],
    duration: '16 weeks',
    teamSize: '4 engineers',
    highlights: [
      { label: 'Apps in system', value: '3' },
      { label: 'Order tracking', value: 'Real-time GPS' },
    ],
  },
  {
    title: 'Finance Reporting Tool',
    category: 'Custom Software',
    description:
      'A finance team was manually copying numbers from their ERP and payment gateway into a spreadsheet every Friday afternoon to produce a weekly leadership report. We built a read-only dashboard that pulls from both systems automatically and delivers a formatted report every Friday morning.',
    problem:
      'Weekly financial reporting done manually — copy-pasting from 3 different systems into a spreadsheet.',
    solution:
      'Internal dashboard with live ERP and payment data, automated weekly report delivery.',
    technologies: ['Next.js', 'PostgreSQL', 'Python', 'AWS'],
    duration: '8 weeks',
    teamSize: '2 engineers',
    highlights: [
      { label: 'Systems integrated', value: '3' },
      { label: 'Weekly reports', value: 'Automated' },
    ],
  },
];
