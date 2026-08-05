import type { APIRoute } from 'astro';

/**
 * Ported from the reference's src/app/robots.ts. The `/_next/` disallow is
 * dropped because that path no longer exists; Astro's build output lives
 * under `/_astro/`, which is fine to crawl.
 *
 * The `Host:` directive was removed. It was never part of the robots.txt
 * standard — it is a Yandex extension, Yandex itself deprecated it in favour
 * of 301 redirects, and Google has never read it. It was doing nothing for
 * the US/UK/AU markets this site is aimed at. Canonical host is settled by
 * `rel=canonical` and redirects, which is where it belongs.
 *
 * Not added, deliberately: rules for GPTBot, CCBot, ClaudeBot, and similar.
 * Whether to allow AI crawlers is a business decision about training data and
 * about visibility in assistant answers — the two pull in opposite directions
 * — and it is not one to make silently in a config file.
 */
export const GET: APIRoute = () =>
  new Response(
    `# https://auravonai.com/robots.txt

User-agent: *
Allow: /

# The two Razorpay endpoints. POST-only, return JSON, nothing to index.
Disallow: /api/

Sitemap: https://auravonai.com/sitemap.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
