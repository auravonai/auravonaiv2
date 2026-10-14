import type { APIRoute } from 'astro';

import { getAllServicePageSlugs } from '@/lib/services';
import { getAllMarketingSlugs, marketingPath } from '@/lib/marketing';
import { articles } from '@/lib/articles';
import {
  blogCategoryPath,
  getAllBlogCategorySlugs,
  getArticlesInCategory,
} from '@/lib/blog';
import { getAllIndustrySlugs, industryPath } from '@/lib/industries';
import { workPath, workProjects } from '@/lib/work';

/**
 * Ported from the reference's src/app/sitemap.ts.
 *
 * One change of substance: the blog URLs are derived from `articles` rather
 * than a hand-maintained slug list. The reference kept a second copy that
 * had to be updated by hand whenever an article was added.
 */

const BASE_URL = 'https://auravonai.com';

type Entry = {
  path: string;
  priority: number;
  changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly';
  /**
   * W3C date (YYYY-MM-DD) of the last real content change, or omitted.
   *
   * Deliberately optional. This used to be `new Date().toISOString()` applied
   * to every URL, which meant all 89 entries claimed to have changed at the
   * moment of the last deploy — including legal pages untouched for months.
   * Google only honours `lastmod` where it is consistently truthful and
   * discounts the whole file when it is not, so a wrong value is worse than
   * no value. Only pages with a real, knowable date carry one now.
   */
  lastmod?: string;
};

/** `Date` → `YYYY-MM-DD`. Date-only is a valid W3C datetime for sitemaps. */
function isoDay(value: string | number | Date): string | undefined {
  const t = value instanceof Date ? value.getTime() : Date.parse(String(value));
  return Number.isNaN(t) ? undefined : new Date(t).toISOString().slice(0, 10);
}

const staticPages: Entry[] = [
  // Trailing slash on purpose: the homepage's rel=canonical resolves to
  // "https://auravonai.com/", and a sitemap that advertises the bare-domain
  // form is nominating a URL the page itself does not claim.
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/services', priority: 0.95, changefreq: 'monthly' },
  // The marketing hub sits below the services hub deliberately. Both are real
  // businesses, but the domain is positioned on engineering, and priority is
  // the one place in the sitemap where that ordering can be stated.
  { path: '/digital-marketing', priority: 0.8, changefreq: 'monthly' },
  { path: '/industries', priority: 0.85, changefreq: 'monthly' },
  { path: '/projects', priority: 0.9, changefreq: 'monthly' },
  // Live portfolio + the two conversion pages added with it.
  { path: '/work', priority: 0.9, changefreq: 'monthly', lastmod: '2026-10-14' },
  { path: '/pricing', priority: 0.9, changefreq: 'monthly', lastmod: '2026-10-14' },
  { path: '/start', priority: 0.7, changefreq: 'yearly', lastmod: '2026-10-14' },
  { path: '/about', priority: 0.8, changefreq: 'monthly' },
  { path: '/contact', priority: 0.85, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'daily' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
  { path: '/refund', priority: 0.3, changefreq: 'yearly', lastmod: '2026-10-14' },
];

export const GET: APIRoute = () => {
  const entries: Entry[] = [
    ...staticPages,
    // The 15 AI/software service spokes. Priority 0.9 — above the marketing
    // service pages, because these are the commercial pages the site is
    // actually positioned on and each owns a distinct primary keyword.
    ...getAllServicePageSlugs().map((slug) => ({
      path: `/services/${slug}`,
      priority: 0.9,
      changefreq: 'monthly' as const,
    })),
    // The 34 marketing pages, now under their own namespace. The old
    // /services/<slug> forms are 301s and are deliberately absent — a sitemap
    // listing a redirect asks Google to crawl a URL that only points elsewhere.
    ...getAllMarketingSlugs().map((slug) => ({
      path: marketingPath(slug),
      priority: 0.7,
      changefreq: 'monthly' as const,
    })),
    // Sector pages. Same priority as a service spoke — they are commercial
    // pages with their own primary keyword, not a secondary listing.
    ...getAllIndustrySlugs().map((slug) => ({
      path: industryPath(slug),
      priority: 0.85,
      changefreq: 'monthly' as const,
    })),
    // Blog category pages sit above individual posts: they are the cluster
    // hubs, they aggregate, and they are the pages that link out to services.
    // A category page changes when a post lands in it, so its lastmod is the
    // newest post it contains — the one date here that is genuinely knowable.
    ...getAllBlogCategorySlugs().map((slug) => {
      const newest = getArticlesInCategory(slug)
        .map((article) => Date.parse(article.date))
        .filter((t) => !Number.isNaN(t))
        .sort((a, b) => b - a)[0];
      return {
        path: blogCategoryPath(slug),
        priority: 0.7,
        changefreq: 'weekly' as const,
        lastmod: newest === undefined ? undefined : isoDay(new Date(newest)),
      };
    }),
    // One case study per live build. Commercial pages with their own keyword.
    ...workProjects.map((p) => ({
      path: workPath(p.slug),
      priority: 0.8,
      changefreq: 'monthly' as const,
      lastmod: '2026-10-14',
    })),
    ...articles.map((article) => ({
      path: `/blog/${article.slug}`,
      priority: 0.6,
      changefreq: 'monthly' as const,
      lastmod: isoDay(article.date),
    })),
  ];

  const urls = entries
    .map(
      ({ path, priority, changefreq, lastmod }) => `  <url>
    <loc>${BASE_URL}${path}</loc>${lastmod ? `
    <lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`,
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
