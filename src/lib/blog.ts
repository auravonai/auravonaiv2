/**
 * Blog taxonomy — the middle tier of the topic clusters.
 *
 * The problem this solves
 * ----------------------
 * The blog was two levels deep: `/blog` listed sixteen posts, and each post
 * lived at `/blog/<slug>`. Nothing sat between them. That has three costs:
 *
 *   1. No page on the site is *about* a topic. A cluster needs a hub that
 *      collects everything on one subject; without it, sixteen posts are
 *      sixteen unrelated documents that happen to share a directory.
 *   2. `/blog` has to carry every topic at once, so it is about nothing in
 *      particular and ranks for nothing in particular.
 *   3. Nothing connects a post to the service it supports. An article on AI
 *      agents and the page selling AI agent development were strangers.
 *
 * Category pages fix all three: each is a real page about one topic, listing
 * the posts on it and linking the service spokes it supports. That is the
 * link that turns a blog post into commercial support rather than traffic
 * that bounces.
 *
 * Scaling
 * -------
 * Categories are derived from `articles`, not hand-listed, so adding a post
 * with a new `category` string creates its category page automatically once a
 * matching entry exists here. The registry below only supplies the things a
 * string cannot: URL slug, description, and which services the topic feeds.
 *
 * A post whose `category` has no entry here throws at build time rather than
 * shipping an orphan — see `assertCategoriesRegistered()`.
 */

import { articles, type Article } from './articles';
import { getAllServicePageSlugs } from './services';

export interface BlogCategory {
  /** URL segment. `/blog/category/<slug>`. */
  slug: string;
  /** Must match `Article.category` exactly. */
  name: string;
  /** H1 on the category page. Usually the plural, human form. */
  heading: string;
  /**
   * The one term this category page is built to win.
   *
   * Every value here is an ESTIMATE. The Ahrefs plan on this account cannot
   * return volume or difficulty (see `docs/keyword-strategy.md`), so these are
   * chosen from intent and from what the posts in the category actually
   * answer — not from measured demand. Re-validate before building more
   * content against any of them.
   */
  primaryKeyword: string;
  metaTitle: string;
  metaDescription: string;
  /** Two or three sentences. Real orientation, not a keyword restatement. */
  intro: string;
  /**
   * Service spokes this topic supports, by slug. Rendered as "related
   * services" and the reason the category page exists commercially.
   * Validated at build time against the service registry.
   */
  relatedServices: string[];
}

export const blogCategories: readonly BlogCategory[] = [
  {
    slug: 'ai-solutions',
    name: 'AI Solutions',
    heading: 'AI solutions',
    primaryKeyword: 'ai solutions for business',
    metaTitle: 'AI Solutions for Business — Guides & Case Notes | Auravon AI',
    metaDescription:
      'Practical writing on applying AI in a business: agents, chatbots, RAG, cost, and what actually survives contact with real users. Written by the engineers who build it.',
    intro:
      'Most writing about business AI is either a vendor pitch or a research summary. These are notes from building the things — what a project costs, where the interesting failures are, and which problems a model genuinely solves versus which ones it only appears to.',
    relatedServices: [
      'ai-development',
      'ai-agent-development',
      'generative-ai-development',
      'ai-consulting',
    ],
  },
  {
    slug: 'automation',
    name: 'Automation',
    heading: 'Business automation',
    primaryKeyword: 'business process automation',
    metaTitle: 'Business Automation Guides — Tools, ROI & Limits | Auravon AI',
    metaDescription:
      'How to automate business processes without buying software you do not need: tool comparisons, honest ROI maths, and the point where a no-code tool stops being enough.',
    intro:
      'Automation is easy to start and easy to over-buy. These pieces cover choosing between tools, working out whether the saving is real, and recognising the point where a workflow builder should be replaced by something written properly.',
    relatedServices: ['ai-development', 'api-development', 'custom-software-development'],
  },
  {
    slug: 'saas',
    name: 'SaaS',
    heading: 'SaaS products',
    primaryKeyword: 'saas product development',
    metaTitle: 'SaaS Product Development — Build, Price & Scale | Auravon AI',
    metaDescription:
      'Building and running a SaaS product: architecture that survives growth, pricing that does not cap you, and the decisions that are expensive to reverse later.',
    intro:
      'A SaaS product is a set of decisions that get harder to change over time — how tenants are separated, how billing works, what you promise on uptime. These are about making those decisions deliberately rather than inheriting them.',
    relatedServices: ['saas-development', 'web-application-development', 'cloud-devops'],
  },
  {
    slug: 'web-development',
    name: 'Web Development',
    heading: 'Web development',
    primaryKeyword: 'web application development',
    metaTitle: 'Web Development Guides — Performance & Architecture | Auravon AI',
    metaDescription:
      'Web application engineering in depth: framework performance, database tuning, and the architectural choices that decide whether a site is still fast in two years.',
    intro:
      'Web work is where most performance problems are made and where most of them can be fixed. These cover the specifics — rendering strategy, query patterns, and the measurements worth trusting.',
    relatedServices: ['web-application-development', 'api-development', 'cloud-devops'],
  },
  {
    slug: 'mobile-apps',
    name: 'Mobile Apps',
    heading: 'Mobile apps',
    primaryKeyword: 'mobile app development',
    metaTitle: 'Mobile App Development — Framework & Platform Guides | Auravon AI',
    metaDescription:
      'Choosing a mobile stack and living with it: cross-platform trade-offs, native escape hatches, and what each choice costs once the app is in the stores.',
    intro:
      'The framework question gets asked once and paid for continuously. These look at what each choice actually costs after launch, rather than at launch.',
    relatedServices: ['mobile-application-development', 'api-development', 'ui-ux-design'],
  },
  {
    slug: 'startup-tech',
    name: 'Startup Tech',
    heading: 'Startup engineering',
    primaryKeyword: 'startup tech stack',
    metaTitle: 'Startup Engineering — Stack, MVP Scope & Cost | Auravon AI',
    metaDescription:
      'Technical decisions for early-stage companies: choosing a stack you will not regret, scoping an MVP honestly, and knowing what a build should cost.',
    intro:
      'Early technical decisions are made with the least information and have the longest consequences. These are about making them cheaply reversible — and about what agencies charge when nobody is checking.',
    relatedServices: ['product-discovery', 'custom-software-development', 'saas-development'],
  },
  {
    slug: 'search-marketing',
    name: 'SEO & Digital Marketing',
    heading: 'Search & marketing',
    primaryKeyword: 'seo for ai search',
    metaTitle: 'SEO & Search Marketing — AI Overviews & Rankings | Auravon AI',
    metaDescription:
      'How search is changing and what still works: AI Overviews, recovering lost traffic, and the technical groundwork that survives every algorithm update.',
    intro:
      'Search stopped being ten blue links and has not settled into whatever comes next. These cover what changed, what it costs, and which fundamentals are worth keeping regardless.',
    relatedServices: [],
  },
];

const bySlug = new Map(blogCategories.map((category) => [category.slug, category]));
const byName = new Map(blogCategories.map((category) => [category.name, category]));

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return bySlug.get(slug);
}

export function getCategoryForArticle(article: Article): BlogCategory | undefined {
  return byName.get(article.category);
}

/** Posts in a category, newest first. */
export function getArticlesInCategory(slug: string): Article[] {
  const category = bySlug.get(slug);
  if (!category) return [];
  return articles
    .filter((article) => article.category === category.name)
    .sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function getAllBlogCategorySlugs(): string[] {
  return blogCategories.map((category) => category.slug);
}

/** `/blog/category/<slug>`. Never hard-code this shape in a component. */
export function blogCategoryPath(slug: string): string {
  return `/blog/category/${slug}`;
}

/* ────────────────────────────────────────────────────────────────────────
   Build-time guards. These throw rather than ship a broken cluster.
   ──────────────────────────────────────────────────────────────────────── */

const seenSlugs = new Set<string>();
for (const category of blogCategories) {
  if (seenSlugs.has(category.slug)) {
    throw new Error(`[blog] duplicate category slug: "${category.slug}"`);
  }
  seenSlugs.add(category.slug);
}

/**
 * Every `Article.category` must have a registry entry. Without this, adding a
 * post with a typo'd or new category silently produces a post reachable from
 * nowhere — the exact orphan this taxonomy exists to prevent.
 */
const unregistered = [
  ...new Set(
    articles
      .map((article) => article.category)
      .filter((name) => !byName.has(name)),
  ),
];
if (unregistered.length > 0) {
  throw new Error(
    `[blog] these article categories have no entry in blogCategories: ${unregistered
      .map((name) => `"${name}"`)
      .join(', ')}. Add one, or correct the article's category.`,
  );
}

/**
 * `relatedServices` must name real spokes. A category page linking a service
 * slug that does not exist ships a 404 into the one place the cluster is
 * supposed to connect content to commerce.
 */
const serviceSlugs = new Set(getAllServicePageSlugs());
for (const category of blogCategories) {
  for (const slug of category.relatedServices) {
    if (!serviceSlugs.has(slug)) {
      throw new Error(
        `[blog] category "${category.slug}" lists relatedServices "${slug}", which is not a service page`,
      );
    }
  }
}

/** A category with no posts renders an empty page. Catch it here instead. */
const empty = blogCategories.filter(
  (category) => !articles.some((article) => article.category === category.name),
);
if (empty.length > 0) {
  throw new Error(
    `[blog] these categories have no articles: ${empty
      .map((category) => `"${category.slug}"`)
      .join(', ')}. Remove the entry or publish a post in it.`,
  );
}
