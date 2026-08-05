/**
 * Scroll-reveal driver.
 *
 * Replaces the per-component framer-motion `useInView` from the Next.js
 * reference with a single shared IntersectionObserver for the whole page.
 * Matches the reference's behaviour exactly: reveal once, -50px root margin.
 *
 * Progressive enhancement: the `js` class is what makes `[data-reveal]`
 * elements start hidden (see global.css). If this module never runs, every
 * element simply stays visible.
 */

const REVEAL_SELECTOR = '[data-reveal]';

function revealAll() {
  for (const el of document.querySelectorAll(REVEAL_SELECTOR)) {
    el.classList.add('is-revealed');
  }
}

export function initReveal() {
  // Users who asked for reduced motion get the end state immediately.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealAll();
    return;
  }

  if (!('IntersectionObserver' in window)) {
    revealAll();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        // `once: true` in the reference — stop watching after the first hit.
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '-50px' },
  );

  for (const el of document.querySelectorAll(REVEAL_SELECTOR)) {
    observer.observe(el);
  }
}
