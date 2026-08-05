/**
 * Theme switching.
 *
 * The theme is *applied* by a tiny inline script in BaseLayout's <head> so it
 * lands before first paint. This module only wires up the controls, keeps
 * them in sync, and persists the choice.
 */

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'auravon-theme';

/** Background colour reported to the browser chrome per theme. */
const THEME_COLOR: Record<Theme, string> = {
  light: '#ffffff',
  dark: '#0a0a0a',
};

function current(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

function stored(): Theme | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    // Private mode / storage disabled — fall back to the system preference.
    return null;
  }
}

/** Reflects the active theme into every toggle button on the page. */
function syncControls(theme: Theme) {
  const next = theme === 'dark' ? 'light' : 'dark';

  for (const button of document.querySelectorAll<HTMLElement>('[data-theme-toggle]')) {
    button.setAttribute('aria-label', `Switch to ${next} theme`);
    button.setAttribute('title', `Switch to ${next} theme`);

    // Show the glyph for the theme you'd switch *to*.
    for (const icon of button.querySelectorAll<HTMLElement>('[data-theme-icon]')) {
      icon.classList.toggle('hidden', icon.dataset.themeIcon !== next);
    }

    const label = button.querySelector<HTMLElement>('[data-theme-label]');
    if (label) label.textContent = next === 'dark' ? 'Dark theme' : 'Light theme';
  }

  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme]);
}

/**
 * Applies a theme instantly.
 *
 * Components declare their own hover transitions on colour and box-shadow, so
 * flipping the attribute alone would still animate the swap — slowly, and
 * through some very muddy intermediate shadow states. Transitions are clamped
 * off for a single frame while the attribute changes. See global.css.
 */
function apply(theme: Theme) {
  const root = document.documentElement;

  root.classList.add('theme-instant');
  root.dataset.theme = theme;

  // Force a synchronous style flush so the clamp is guaranteed to apply to
  // this change before it is lifted again.
  void root.offsetHeight;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => root.classList.remove('theme-instant'));
  });

  syncControls(theme);
}

export function initTheme() {
  syncControls(current());

  for (const button of document.querySelectorAll<HTMLElement>('[data-theme-toggle]')) {
    button.addEventListener('click', () => {
      const next: Theme = current() === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Not persisting is survivable; the theme still applies for this page.
      }
    });
  }

  // Follow the OS only while the visitor hasn't made an explicit choice.
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (stored()) return;
    apply(event.matches ? 'dark' : 'light');
  });
}
