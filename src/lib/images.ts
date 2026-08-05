/**
 * Responsive variants for the remote Unsplash cover images.
 *
 * The problem
 * -----------
 * Every article cover was requested at a fixed `w=1200` and then painted into
 * a card roughly 400 CSS px wide. On a phone that is around nine times the
 * pixels actually needed, on the one page that shows 24 of them at once.
 * Lighthouse reports it as "Properly size images", and it is real bandwidth,
 * not a theoretical score.
 *
 * These images cannot go through `astro:assets` — they are remote, and
 * optimising them at build time would make every build depend on a network
 * round-trip to a third-party CDN (the reason the original decision was to
 * leave them as plain `<img>`). Unsplash does resize on demand from the `w`
 * query parameter, so the fix is to ask it for the right sizes and let the
 * browser choose.
 *
 * `sizes` has to describe the *rendered* width, not the intrinsic one, or the
 * browser falls back to assuming full viewport width and picks the largest
 * candidate — which is the bug this is meant to fix.
 */

/** Widths worth generating. Covers 1x and 2x for the card and hero slots. */
const WIDTHS = [400, 600, 800, 1200] as const;

/** True for URLs we can resize. Anything else is passed through untouched. */
function isResizable(url: string): boolean {
  return url.includes('images.unsplash.com');
}

/** Same URL at a given width, preserving the other Unsplash parameters. */
function atWidth(url: string, w: number): string {
  return url.replace(/([?&])w=\d+/, `$1w=${w}`);
}

/**
 * `srcset` for a remote cover image, or `undefined` when the URL is not one we
 * can resize — in which case the caller should omit the attribute rather than
 * emit an empty one.
 */
export function coverSrcset(url: string): string | undefined {
  if (!isResizable(url) || !/[?&]w=\d+/.test(url)) return undefined;
  return WIDTHS.map((w) => `${atWidth(url, w)} ${w}w`).join(', ');
}

/**
 * `sizes` for a card in the blog grid: full width on mobile, half at `md`,
 * a third at `lg`, capped by the container. Mirrors
 * `md:grid-cols-2 lg:grid-cols-3` — if that grid changes, change this too, or
 * the browser will be choosing against the wrong layout.
 */
export const CARD_SIZES =
  '(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 92vw';

/** The article hero runs to the prose measure rather than the full viewport. */
export const HERO_SIZES = '(min-width: 1024px) 56rem, 100vw';

/** Origins that need a connection opened early. Consumed by BaseLayout. */
export const REMOTE_IMAGE_ORIGIN = 'https://images.unsplash.com';
