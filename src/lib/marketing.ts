/**
 * The digital-marketing namespace.
 *
 * Why this file exists
 * --------------------
 * Auravon AI sells two different things to two different buyers:
 *
 *   AI / software engineering  →  /services/*          (src/lib/services/)
 *   Digital marketing          →  /digital-marketing/* (digital-agency-data.ts)
 *
 * Both families used to live under `/services/*`. That is what made the site
 * read as two companies at one address: a crawler seeing
 * `/services/ai-agent-development` next to `/services/meesho-account-management`
 * has no way to tell which business the domain is about, and neither does a
 * visitor. Splitting the namespace lets each family accumulate its own topical
 * signal instead of averaging them.
 *
 * It also removes the whole class of near-duplicate pairs the old layout
 * created — `/services/website-development` competing with
 * `/services/web-application-development` for one query. They now sit in
 * different sections answering different intents, so neither has to win.
 *
 * The one rule
 * ------------
 * Never hard-code `/digital-marketing` in a component. Build paths with
 * `marketingPath()`. The previous layout hard-coded `/services/` in six places
 * across three components, which is precisely why moving it was a chore.
 */

import {
  getAllServiceSlugs,
  serviceCategories,
  type ServiceCategory,
} from './digital-agency-data';

/** URL segment owning the digital-marketing family. No trailing slash. */
export const MARKETING_BASE = '/digital-marketing';

/** Label used in breadcrumbs, nav, and the `BreadcrumbList` node. */
export const MARKETING_LABEL = 'Digital Marketing';

/** `marketingPath()` → "/digital-marketing", `marketingPath('seo')` → "/digital-marketing/seo". */
export function marketingPath(slug?: string): string {
  return slug ? `${MARKETING_BASE}/${slug}` : MARKETING_BASE;
}

/**
 * The one category that does not get its own page.
 *
 * `digital-agency-data` has a category literally slugged `digital-marketing`
 * ("Core Digital Marketing" — SEO, Google Ads, Meta Ads, GMB, Maps). Under
 * this namespace that page would live at `/digital-marketing/digital-marketing`,
 * which is both an ugly URL and a straight duplicate of the hub: a category
 * named "Digital Marketing" inside a section named "Digital Marketing" is the
 * same entity described twice, competing for the same query.
 *
 * So the hub *is* that category page. The slug is excluded from routing and
 * redirected to the hub, and its five sub-services keep their own pages with
 * the hub as their parent.
 */
export const HUB_ALIAS_SLUG = 'digital-marketing';

/**
 * Every slug that gets a page — the 7 remaining category pages and the 26
 * sub-service pages. `digital-agency-data` stores both in one flat list keyed
 * by `type`; this filters out the one that the hub absorbs.
 */
export function getAllMarketingSlugs(): string[] {
  return getAllServiceSlugs().filter((slug) => slug !== HUB_ALIAS_SLUG);
}

/** False for the category the hub absorbed, so callers do not link to a 404. */
export function hasMarketingPage(slug: string): boolean {
  return slug !== HUB_ALIAS_SLUG;
}

export function getMarketingCategories(): ServiceCategory[] {
  return serviceCategories;
}

/**
 * Old URL → new URL, for all 34 pages.
 *
 * Consumed twice on purpose:
 *   - `astro.config.mjs` feeds it to `redirects`, which emits a meta-refresh
 *     HTML file per URL in `output: 'static'`;
 *   - `scripts/generate-redirects.mjs` writes it to `public/_redirects` so the
 *     host issues a real **301** instead.
 *
 * Both exist because they fail differently. Config redirects work anywhere,
 * including `astro preview` and a plain file server, but a meta refresh is a
 * weaker signal than a 301 and passes equity less reliably. The host file
 * gives a true 301 but only on a host that reads it. Shipping both means the
 * redirect is never missing — at worst it is the weaker of the two.
 *
 * Delete an entry only once the old URL has no inbound links and no
 * impressions in Search Console. "It has been a while" is not that test.
 */
export function marketingRedirects(): Record<string, string> {
  return {
    ...Object.fromEntries(
      getAllMarketingSlugs().map((slug) => [
        `/services/${slug}`,
        marketingPath(slug),
      ]),
    ),
    // The absorbed category: its old URL points at the hub that replaced it,
    // not at a page that no longer exists.
    [`/services/${HUB_ALIAS_SLUG}`]: MARKETING_BASE,
  };
}

/**
 * Pages that were deleted outright, pointed at their nearest surviving intent.
 *
 * Distinct from `marketingRedirects()` above: those are a namespace *move*,
 * where old and new URL answer the same query. These are retirements, where
 * the destination is a judgement call about what the visitor wanted.
 *
 * `/payment` was a proposal-request form with a Razorpay "Pay an Invoice"
 * panel bolted on. The panel never worked in production — the endpoints
 * behind it read their secret from `import.meta.env`, which inlines at build
 * time, so they compiled down to a hardcoded "not configured" response — and
 * the whole page was removed rather than repaired. `/contact` is where the
 * form's traffic was going anyway; the page's own secondary CTA was "Use
 * Contact Form Instead".
 *
 * It was in the sitemap at priority 0.7, so assume it is indexed and keep
 * this entry until Search Console shows no impressions for it.
 */
export function retiredRedirects(): Record<string, string> {
  return {
    '/payment': '/contact',
  };
}

/** Every redirect the site emits, in both the config and `_redirects` forms. */
export function allRedirects(): Record<string, string> {
  return { ...marketingRedirects(), ...retiredRedirects() };
}
