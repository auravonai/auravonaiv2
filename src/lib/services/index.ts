/**
 * Service registry — the single source of truth for the hub-and-spoke
 * services architecture.
 *
 * `/services` (hub)          reads `serviceCategoryOrder` + `servicesByCategory`
 * `/services/<slug>` (spoke) reads `getServicePage(slug)`
 *
 * Both read the same 15 records, so a service's name, description, and badges
 * cannot differ between the card and the page it links to. Adding a service
 * is one entry in one of the four content modules and nothing else — the hub
 * card, the route, the sitemap entry, and the structured data all follow
 * automatically. That is the "scalable" half of the redesign.
 */

import { aiServices } from './ai';
import { engineeringServices } from './engineering';
import { platformServices } from './platform';
import { productServices } from './product';
import type { Category, CategoryId, ServicePage } from './types';

export type {
  Block,
  Category,
  CategoryId,
  ProcessStep,
  RelatedLink,
  ServicePage,
  TechGroup,
} from './types';

/**
 * Category order is the render order on the hub, and it is deliberate: AI
 * first because it is what the company is positioned on, then the software
 * that AI lives inside, then the layers that keep it alive, then the work
 * that happens before a line is written.
 */
export const serviceCategories: Category[] = [
  {
    id: 'ai',
    label: 'AI Services',
    blurb:
      'From deciding what is worth building through to operating it once real users depend on it.',
  },
  {
    id: 'engineering',
    label: 'Software Engineering',
    blurb:
      'The products AI lives inside — and the systems we build when a model is not part of the answer.',
  },
  {
    id: 'platform',
    label: 'Platform & Infrastructure',
    blurb:
      'The layers that decide whether a system is still healthy a year after launch.',
  },
  {
    id: 'product',
    label: 'Product & Strategy',
    blurb: 'The work that happens before anyone writes a line of code.',
  },
];

export const servicePages: readonly ServicePage[] = [
  ...aiServices,
  ...engineeringServices,
  ...platformServices,
  ...productServices,
];

/** Slug → page. Built once; the route and the hub both use it. */
const bySlug = new Map(servicePages.map((page) => [page.slug, page]));

export function getServicePage(slug: string): ServicePage | undefined {
  return bySlug.get(slug);
}

export function getServicePages(slugs: string[]): ServicePage[] {
  return slugs
    .map((slug) => bySlug.get(slug))
    .filter((page): page is ServicePage => page !== undefined);
}

export function getAllServicePageSlugs(): string[] {
  return servicePages.map((page) => page.slug);
}

export function servicesByCategory(category: CategoryId): ServicePage[] {
  return servicePages.filter((page) => page.category === category);
}

export const serviceCategoryOrder: CategoryId[] = serviceCategories.map(
  (category) => category.id,
);

/**
 * Guards against the two mistakes this structure makes easy: a duplicate slug
 * (which would silently shadow a route) and a `relatedServices` entry pointing
 * at a slug that does not exist (which would render a card linking to a 404).
 * Runs at build time — `astro build` fails rather than shipping either.
 */
const seen = new Set<string>();
for (const page of servicePages) {
  if (seen.has(page.slug)) {
    throw new Error(`[services] duplicate slug: "${page.slug}"`);
  }
  seen.add(page.slug);
}
for (const page of servicePages) {
  for (const related of page.relatedServices) {
    if (!seen.has(related)) {
      throw new Error(
        `[services] "${page.slug}" lists relatedServices "${related}", which is not a service page`,
      );
    }
  }
  if (page.relatedServices.includes(page.slug)) {
    throw new Error(`[services] "${page.slug}" lists itself in relatedServices`);
  }
}
