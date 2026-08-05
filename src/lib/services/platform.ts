/**
 * Platform & infrastructure spokes (2).
 *
 * Keyword map:
 *   /services/cloud-devops        → cloud and DevOps services
 *   /services/maintenance-support → software maintenance and support
 *
 * Cannibalisation note: `/services/devops-deployment` and
 * `/services/website-hosting` already exist as digital-marketing pages and
 * overlap `cloud-devops`. See `docs/services-architecture.md` §5.
 */

import type { ServicePage } from './types';

export const platformServices: ServicePage[] = [
  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'cloud-devops',
    category: 'platform',
    icon: 'Cloud',
    cardTitle: 'Cloud & DevOps',
    cardDescription:
      'CI/CD, infrastructure as code, monitoring, and cost controls — infrastructure you can deploy to on a Friday.',
    badges: ['AWS', 'Terraform', 'Docker'],

    primaryKeyword: 'cloud and DevOps services',
    metaTitle: 'Cloud & DevOps Services — CI/CD & IaC | Auravon AI',
    metaDescription:
      'Cloud and DevOps services: CI/CD pipelines, infrastructure as code, preview environments, tested backups, monitoring, and per-model AI spend caps.',
    ogTitle: 'Cloud & DevOps — Infrastructure You Can Deploy To on a Friday',
    ogDescription:
      'The measure of a deployment setup is how quickly you can ship a one-line fix and how confidently you can undo it. We aim for a revert that is routine.',

    h1: 'Cloud & DevOps Services',
    h1Tail: 'Deploy on a Friday',
    summary:
      'Our cloud and DevOps services give you infrastructure you can deploy to on a Friday. We set up CI/CD pipelines, infrastructure as code, staging environments, automated backups, monitoring, and alerting on AWS, Vercel, or your own servers — with cost controls that catch a runaway workload early.',
    assurances: [
      'Rollback is one command',
      'Restores are tested, not assumed',
      'Budget alerts, including AI spend',
    ],

    introHeading: 'The measure of a deployment setup is how confidently you can undo things',
    intro: [
      'We aim for a pipeline where a revert is a routine action rather than an incident, and where restoring from backup has actually been tested rather than assumed. Those two properties are what let a team ship on a Friday afternoon without a private sense of dread.',
      'For AI workloads there is a third: spend. Token costs scale with success in ways a pilot never reveals, so per-model budget caps and alerting are part of the infrastructure rather than an afterthought once the first large invoice arrives.',
    ],

    problems: [
      {
        title: 'Deploys that need a person and a runbook',
        description:
          'Shipping requires someone who knows the sequence, which means fixes wait for availability and nobody deploys before a weekend.',
      },
      {
        title: 'Infrastructure that exists only in a console',
        description:
          'Nobody can reproduce the environment, changes are unreviewable, and the configuration lives in one person\'s memory.',
      },
      {
        title: 'Backups nobody has restored',
        description:
          'The backup job reports success every night. Whether the data can actually be restored is an open question until the day it matters.',
      },
      {
        title: 'Cloud and AI bills that surprise',
        description:
          'Costs are discovered monthly in arrears, with no per-service attribution and no cap on a workload that has started looping.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Audit what exists',
        description:
          'Current environments, deployment path, data flows, and the single points of failure — written down and ranked by risk.',
      },
      {
        step: '02',
        title: 'Codify the infrastructure',
        description:
          'Terraform or Pulumi definitions under version control, so environments are reproducible and a production change is a reviewable diff.',
      },
      {
        step: '03',
        title: 'Automate the pipeline',
        description:
          'Test, build, and deploy on merge, with a preview environment per pull request and rollback as one command rather than a rebuild.',
      },
      {
        step: '04',
        title: 'Instrument and alert',
        description:
          'Uptime, error rate, latency, and log aggregation, with alerts routed to people rather than to a dashboard nobody opens.',
      },
      {
        step: '05',
        title: 'Test the restore',
        description:
          'Backups verified by actually restoring them into a scratch environment, and the procedure documented so anyone can run it.',
      },
    ],

    benefits: [
      {
        title: 'Shipping stops being an event',
        description:
          'Automated pipelines and one-command rollback turn a deploy into a routine action rather than a scheduled ceremony.',
      },
      {
        title: 'Environments you can reproduce',
        description:
          'Infrastructure as code means staging genuinely matches production, and a new environment is a command rather than a week.',
      },
      {
        title: 'Recovery you have rehearsed',
        description:
          'A restore that has been performed is a plan. A backup that has never been restored is a hope with a cron schedule.',
      },
      {
        title: 'Costs visible before the invoice',
        description:
          'Per-service attribution and budget alerts — including per-model caps for AI workloads — so overspend is caught in hours, not weeks.',
      },
    ],

    technologies: [
      { label: 'Cloud', items: ['AWS', 'Vercel', 'Cloudflare', 'Self-hosted'] },
      { label: 'Infrastructure', items: ['Terraform', 'Pulumi', 'Docker'] },
      { label: 'Pipelines', items: ['GitHub Actions', 'Preview environments'] },
      { label: 'Observability', items: ['Sentry', 'Uptime monitoring', 'Log aggregation'] },
    ],

    industriesLead:
      'Relevant to any team shipping software regularly — and urgent for any team that currently cannot.',
    industries: [
      'B2B software',
      'Fintech',
      'E-commerce & retail',
      'Healthcare',
      'Logistics',
      'Marketplaces',
      'Education',
      'Professional services',
    ],

    faqs: [
      {
        question: 'What do cloud and DevOps services actually include?',
        answer:
          'A typical engagement covers five things: automated CI/CD so tests, builds, and deploys run on merge; infrastructure as code so environments are reproducible and reviewable; monitoring and alerting for uptime, errors, and latency; backup and tested restore procedures; and cost visibility with budget alerts. For teams running AI workloads it also covers per-model spend caps and token-cost attribution, which conventional cloud monitoring does not surface.',
      },
      {
        question: 'Should we use AWS, Vercel, or our own servers?',
        answer:
          'Vercel suits front-end-heavy products where deployment simplicity and edge performance matter more than infrastructure control, and it is the fastest path for most Next.js and Astro applications. AWS suits systems with substantial backend, data, or compliance requirements, or where cost at scale justifies the operational overhead. Self-hosting makes sense under strict data-residency obligations or at a scale where managed pricing stops being competitive. Most products we build run a hybrid of the first two.',
      },
      {
        question: 'Can you help reduce our cloud costs?',
        answer:
          'Yes, and the first step is attribution rather than optimisation — most teams cannot say which service or feature drives their bill, which makes every cost decision guesswork. Once spend is attributed, the recurring wins are consistent: over-provisioned instances, storage nobody deleted, logs retained far longer than anyone needs, and staging environments running around the clock. For AI workloads, caching and model selection per task usually matter more than infrastructure tuning.',
      },
      {
        question: 'How do you handle deployments without downtime?',
        answer:
          'Rolling or blue-green deployment so a new version takes traffic only once it is healthy, with the previous version still running and ready to take it back. Database migrations are the harder half: they are written to be backwards-compatible so old and new code can run simultaneously during the transition, which is what makes an instant rollback possible. A rollback that requires a database restore is not a rollback — it is an incident.',
      },
    ],

    relatedArticles: [
      { label: 'Next.js performance optimization', href: '/blog/nextjs-performance-optimization' },
      { label: 'PostgreSQL performance tips', href: '/blog/postgresql-performance-tips' },
      { label: 'Choosing a startup tech stack', href: '/blog/startup-tech-stack-2025' },
    ],
    relatedServices: ['maintenance-support', 'api-development', 'web-application-development'],
    ctaHeading: 'Would you deploy on a Friday afternoon?',
    ctaBody:
      'If the honest answer is no, that is the problem worth fixing first. We will audit what you have and rank the risks.',
    ctaLabel: 'Review Your Infrastructure',
  },

  /* ─────────────────────────────────────────────────────────────────── */
  {
    slug: 'maintenance-support',
    category: 'platform',
    icon: 'LifeBuoy',
    cardTitle: 'Maintenance & Support',
    cardDescription:
      'Monitoring, security updates, incident response, and AI model migrations for systems already in production.',
    badges: ['Sentry', 'Dependabot', 'Eval suites'],

    primaryKeyword: 'software maintenance and support',
    metaTitle: 'Software Maintenance & Support Services | Auravon AI',
    metaDescription:
      'Software maintenance and support: monitoring, security patching, incident response with agreed windows, and continuous AI evaluation as models are deprecated.',
    ogTitle: 'Maintenance & Support — Including the AI-Specific Kind of Decay',
    ogDescription:
      'Providers retire model versions on their own schedule. A maintained AI system is re-evaluated on a schedule, so drift is caught by a test rather than a customer.',

    h1: 'Maintenance & Support',
    h1Tail: 'For Systems People Depend On',
    summary:
      'Maintenance and support keeps a shipped system healthy: dependency and security updates, uptime monitoring, incident response with agreed response times, small enhancements, and — for AI systems — continuous evaluation as models are deprecated and replaced by their providers.',
    assurances: [
      'A named engineer who knows the system',
      'Agreed response windows',
      'We support systems we did not build',
    ],

    introHeading: 'AI systems decay differently from ordinary software',
    intro: [
      'Providers retire model versions on their own schedule, pricing changes without notice, and a silent update can shift output quality without a line of your code changing. A maintained AI system is re-evaluated against its original eval set on a schedule, so drift is caught by a test rather than by a customer.',
      'Conventional maintenance still matters just as much: dependencies age into vulnerabilities, certificates expire, and the thing that takes a system down is usually mundane. We handle both, and we will take on systems we did not build.',
    ],

    problems: [
      {
        title: 'Nobody owns it any more',
        description:
          'The team that built it has moved on, and every change now starts with someone reverse-engineering the deployment.',
      },
      {
        title: 'Dependencies aging into vulnerabilities',
        description:
          'Updates are deferred because nothing is tested, until an advisory forces an emergency upgrade across several major versions at once.',
      },
      {
        title: 'Quality drift with no cause',
        description:
          'The AI feature is worse than it was and nothing in your code changed, because the provider updated the model underneath it.',
      },
      {
        title: 'Support that is a ticket queue',
        description:
          'Every incident starts by explaining the system to someone new, which is most of the time to resolution.',
      },
    ],

    process: [
      {
        step: '01',
        title: 'Take ownership properly',
        description:
          'We read the codebase, map the deployment and data flows, and write down what we found — including the risks you did not know about.',
      },
      {
        step: '02',
        title: 'Establish the baseline',
        description:
          'Monitoring, error tracking, and — for AI systems — an eval set capturing current quality, so future changes have something to compare against.',
      },
      {
        step: '03',
        title: 'Patch on a schedule',
        description:
          'Dependency audits, security updates, and secret rotation applied routinely rather than after an advisory forces it.',
      },
      {
        step: '04',
        title: 'Respond to incidents',
        description:
          'Agreed response windows and a named engineer who already knows the system, rather than a queue that starts with introductions.',
      },
      {
        step: '05',
        title: 'Manage the AI lifecycle',
        description:
          'Re-run the eval set against new model versions before migrating, track cost per request as pricing changes, retire prompts that no longer earn their place.',
      },
    ],

    benefits: [
      {
        title: 'Someone who already knows it',
        description:
          'Incidents start at diagnosis rather than at orientation, which is most of the difference in time to resolution.',
      },
      {
        title: 'Security as routine',
        description:
          'Scheduled patching and dependency audits mean upgrades are small and frequent instead of large and forced.',
      },
      {
        title: 'Model changes caught by a test',
        description:
          'Scheduled re-evaluation means provider drift shows up in a report rather than in a customer complaint.',
      },
      {
        title: 'Costs that stay predictable',
        description:
          'Cost per request tracked as provider pricing moves, so an AI feature does not quietly become the largest line in your infrastructure bill.',
      },
    ],

    technologies: [
      { label: 'Monitoring', items: ['Sentry', 'Uptime monitoring', 'Log aggregation'] },
      { label: 'Security', items: ['Dependabot', 'Dependency audits', 'Secret rotation'] },
      { label: 'AI lifecycle', items: ['Eval suites', 'Prompt versioning', 'Cost tracking'] },
      { label: 'Delivery', items: ['GitHub Actions', 'Docker', 'Terraform'] },
    ],

    industriesLead:
      'Anywhere a system has moved from a project into an operational dependency.',
    industries: [
      'B2B software',
      'Fintech',
      'Healthcare',
      'Insurance',
      'Logistics',
      'E-commerce & retail',
      'Education',
      'Manufacturing',
    ],

    faqs: [
      {
        question: 'Will you maintain software your team did not build?',
        answer:
          'Yes, and it is a substantial part of this work. We start with a paid assessment: reading the codebase, mapping the deployment and data model, and producing a written risk register ranked by cost and urgency. That document is yours regardless of whether we continue. Taking over an unfamiliar system without that step is how support engagements go wrong, so we do not skip it — including when the handover is urgent because the previous team has already left.',
      },
      {
        question: 'What response times do you offer?',
        answer:
          'Response windows are agreed per engagement and tied to severity rather than offered as a single number. A typical arrangement is one business hour for a production outage, same business day for a significant degradation, and next business day for everything else. What matters more than the number is who responds: an engineer who already knows your system, rather than a first-line queue that starts by asking you to explain the architecture.',
      },
      {
        question: 'How do you handle AI model deprecations?',
        answer:
          'Your evaluation set is re-run against the replacement model before anything migrates, and results are compared against the thresholds agreed when the system was built. If quality holds, we migrate on a planned date rather than on the provider\'s deadline. If it drops, we adjust prompts and retrieval, or stay on the current version while we do. This only works if an eval set exists — where one does not, building it is the first thing we do.',
      },
      {
        question: 'What does a maintenance agreement typically cost?',
        answer:
          'Ongoing maintenance generally runs $1,500–$12,000 per month depending on system size, uptime expectations, and whether AI evaluation is in scope. The variables are how much of the stack we monitor, the agreed response windows, and how much small-enhancement work is included alongside keeping things running. We price it after an assessment rather than from a description, because the gap between how a system is described and how it is built is usually the thing that determines the effort.',
      },
    ],

    relatedArticles: [
      { label: 'PostgreSQL performance tips', href: '/blog/postgresql-performance-tips' },
      { label: 'Next.js performance optimization', href: '/blog/nextjs-performance-optimization' },
      { label: 'Where AI automation actually pays back', href: '/blog/ai-automations-roi-business-2026' },
    ],
    relatedServices: ['cloud-devops', 'custom-software-development', 'ai-development'],
    ctaHeading: 'Inherited a system nobody wants to touch?',
    ctaBody:
      'We will read it, map it, and give you a ranked list of what actually needs attention. The assessment is yours either way.',
    ctaLabel: 'Ask About Support Plans',
  },
];
