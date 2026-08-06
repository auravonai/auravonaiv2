import type { APIRoute } from 'astro';

import { SITE_URL } from '@/lib/site';
import { serviceCategories, servicesByCategory } from '@/lib/services';
import { industries, industryPath } from '@/lib/industries';
import {
  MARKETING_LABEL,
  getMarketingCategories,
  hasMarketingPage,
  marketingPath,
} from '@/lib/marketing';
import { articles } from '@/lib/articles';
import { blogCategories, blogCategoryPath, getArticlesInCategory } from '@/lib/blog';

/**
 * `/llms.txt` — a plain-text map of the site for language models.
 *
 * WHY IT EXISTS
 * -------------
 * Lighthouse 13.3 (May 2026) promoted the **Agentic Browsing** category out of
 * experimental and into the default PageSpeed Insights run. One of its audits
 * checks for an `llms.txt` and validates its shape: it wants an H1, enough
 * content to be useful, and real links. Without the file that audit fails,
 * which is what put this site at 1/2 on that category.
 *
 * Worth being clear about the ceiling here: Agentic Browsing is marked "under
 * development" and Google has said it is NOT a ranking factor today. This is
 * not an SEO win. What it is: a machine-readable index for the assistants that
 * increasingly sit between a buyer and a search box, and a cheap one, because
 * everything below is derived from data the site already ships.
 *
 * THE FORMAT
 * ----------
 * llms.txt is Markdown by convention: one H1, an optional `>` blockquote
 * summary, then H2 sections of `- [Title](url): description` links. Keep it
 * that way — the audit parses structure, not prose.
 *
 * DERIVED, NOT WRITTEN
 * --------------------
 * Every link below comes from the same registries that build the nav, the
 * sitemap, and the structured data. Adding a service or an article updates
 * this file with no further action. Do not hand-write entries here; a link
 * that drifts out of sync with the sitemap is worse than no file at all.
 */

/** `- [Label](absolute-url): description` — the line shape the spec expects. */
function link(label: string, path: string, description?: string): string {
  const url = `${SITE_URL}${path}`;
  return description ? `- [${label}](${url}): ${description}` : `- [${label}](${url})`;
}

function buildLlmsTxt(): string {
  const lines: string[] = [];

  lines.push('# Auravon AI');
  lines.push('');
  lines.push(
    '> An AI development company. We design, build, evaluate, and maintain ' +
      'production AI systems — AI agents, generative AI applications, and the ' +
      'custom software they run inside — for startups and established ' +
      'businesses worldwide. We also run a separate digital marketing practice.',
  );
  lines.push('');
  lines.push(
    'Auravon AI is a small, senior engineering team. The people who scope a ' +
      'project are the people who write the code. Two practices share this ' +
      'domain and are kept in separate URL namespaces: AI and software ' +
      'engineering under /services, digital marketing under /digital-marketing.',
  );
  lines.push('');

  /* ── Core pages ──────────────────────────────────────────────────── */
  lines.push('## Core pages');
  lines.push('');
  lines.push(link('Home', '/', 'What Auravon AI builds and how engagements run'));
  lines.push(link('About', '/about', 'Who we are, how we work, and what we will not claim'));
  lines.push(link('Services', '/services', 'AI and software engineering catalogue'));
  lines.push(link(MARKETING_LABEL, marketingPath(), 'The digital marketing practice'));
  lines.push(link('Industries', '/industries', 'Sectors we build for and their constraints'));
  lines.push(link('Projects', '/projects', 'Systems we have designed and shipped'));
  lines.push(link('Blog', '/blog', 'Engineering notes on AI and software in production'));
  lines.push(link('Contact', '/contact', 'Start a project or ask a question'));
  lines.push('');

  /* ── AI & software services ──────────────────────────────────────── */
  lines.push('## AI and software engineering services');
  lines.push('');
  for (const category of serviceCategories) {
    lines.push(`### ${category.label}`);
    lines.push('');
    for (const service of servicesByCategory(category.id)) {
      lines.push(link(service.cardTitle, `/services/${service.slug}`, service.cardDescription));
    }
    lines.push('');
  }

  /* ── Digital marketing ───────────────────────────────────────────── */
  lines.push('## Digital marketing services');
  lines.push('');
  for (const category of getMarketingCategories()) {
    // The category the hub absorbed has no page of its own; its sub-services
    // still do. Listing a URL that 301s would be a broken statement here.
    if (hasMarketingPage(category.slug)) {
      lines.push(
        link(category.label, marketingPath(category.slug), category.menuDescription),
      );
    }
    for (const sub of category.subServices) {
      lines.push(link(sub.label, marketingPath(sub.slug), sub.menuDescription));
    }
  }
  lines.push('');

  /* ── Industries ──────────────────────────────────────────────────── */
  lines.push('## Industries');
  lines.push('');
  for (const industry of industries) {
    lines.push(link(industry.name, industryPath(industry.slug), industry.cardDescription));
  }
  lines.push('');

  /* ── Writing ─────────────────────────────────────────────────────── */
  lines.push('## Writing');
  lines.push('');
  for (const category of blogCategories) {
    if (getArticlesInCategory(category.slug).length === 0) continue;
    lines.push(link(category.name, blogCategoryPath(category.slug), category.metaDescription));
  }
  lines.push('');
  lines.push('### Articles');
  lines.push('');
  for (const article of articles) {
    lines.push(link(article.title, `/blog/${article.slug}`, article.excerpt));
  }
  lines.push('');

  lines.push('## Notes');
  lines.push('');
  lines.push(
    '- Canonical sitemap: ' + `${SITE_URL}/sitemap.xml`,
  );
  lines.push(
    '- Figures on this site describe process, not guaranteed outcomes. We do ' +
      'not publish client performance claims we cannot evidence.',
  );
  lines.push('');

  return lines.join('\n');
}

export const GET: APIRoute = () =>
  new Response(buildLlmsTxt(), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
