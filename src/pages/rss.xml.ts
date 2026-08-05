import type { APIRoute } from 'astro';

import { articles } from '@/lib/articles';
import { getCategoryForArticle } from '@/lib/blog';
import { SITE_NAME, SITE_URL } from '@/lib/site';

/**
 * RSS 2.0 feed for the blog.
 *
 * Worth having for two reasons that have nothing to do with feed readers:
 * aggregators and newsletter tools consume RSS to discover new posts, and a
 * feed is one of the cheaper ways for a domain with no authority to get its
 * content seen somewhere other than its own site.
 *
 * Written by hand rather than via @astrojs/rss — the dependency exists to
 * escape XML and sort items, both of which are a few lines here, and this
 * avoids adding a package for one route.
 *
 * `<description>` carries the excerpt, not the article body. A feed that
 * republishes the whole post gives a reader no reason to visit the page, and
 * duplicates the content at a second URL.
 */

/** XML has five predefined entities; everything else is legal text. */
function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export const GET: APIRoute = () => {
  const sorted = [...articles].sort(
    (a, b) => Date.parse(b.date) - Date.parse(a.date),
  );

  const items = sorted
    .map((article) => {
      const url = `${SITE_URL}/blog/${article.slug}`;
      const category = getCategoryForArticle(article);
      const published = Date.parse(article.date);

      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <author>${escapeXml(article.author)}</author>${
        category ? `\n      <category>${escapeXml(category.name)}</category>` : ''
      }${
        Number.isNaN(published)
          ? ''
          : `\n      <pubDate>${new Date(published).toUTCString()}</pubDate>`
      }
    </item>`;
    })
    .join('\n');

  const latest = sorted.length > 0 ? Date.parse(sorted[0]!.date) : NaN;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>Engineering and AI writing for founders and product teams, from the team that builds it.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />${
      Number.isNaN(latest)
        ? ''
        : `\n    <lastBuildDate>${new Date(latest).toUTCString()}</lastBuildDate>`
    }
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  });
};
