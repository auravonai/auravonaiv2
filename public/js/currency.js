/**
 * Currency display for every `[data-inr]` price on the page.
 *
 * Loaded on demand ONLY — by the inline loader in
 * `src/components/pricing/CurrencyLoader.astro` — when a visitor picks a
 * currency, or has a saved non-INR choice. INR visitors never download it, so
 * pages with prices make no extra request on load (that request is what cost
 * Lighthouse FCP when this shipped as a module script).
 *
 * Prices are authored and rendered in INR. Converted figures carry "≈":
 * quotes and invoices are issued in INR or a fixed agreed amount, so a
 * converted price must never look exact.
 *
 * Rates: the table below is used immediately, then replaced by live rates
 * from open.er-api.com (free, keyless, CORS-enabled), cached for 12 hours.
 * Keep the currency codes in sync with CurrencySelect.astro.
 */

/** INR per one unit of the currency. Approximate fallback values. */
const FALLBACK = { INR: 1, USD: 88, EUR: 102, GBP: 117, AED: 24, SAR: 23.5, AUD: 58, CAD: 63, SGD: 68 };
const CODES = Object.keys(FALLBACK);
const STORE_KEY = 'auravon-currency';
const RATES_KEY = 'auravon-rates';
const TTL = 12 * 60 * 60 * 1000;

let rates = { ...FALLBACK };
let current = 'INR';
let fetching = null;

const read = (k) => { try { return localStorage.getItem(k); } catch { return null; } };
const write = (k, v) => { try { localStorage.setItem(k, v); } catch { /* private mode */ } };

function format(inr, code) {
  if (code === 'INR') return `₹${inr.toLocaleString('en-IN')}`;
  const value = inr / (rates[code] ?? FALLBACK[code]);
  const rounded = value >= 1000 ? Math.round(value / 10) * 10 : Math.round(value);
  return `≈ ${new Intl.NumberFormat('en', { style: 'currency', currency: code, maximumFractionDigits: 0 }).format(rounded)}`;
}

function render() {
  document.querySelectorAll('[data-inr]').forEach((el) => {
    el.textContent = format(Number(el.dataset.inr), current);
  });
  // GST applies to Indian invoices only.
  document.querySelectorAll('[data-gst]').forEach((el) => { el.hidden = current !== 'INR'; });
  document.querySelectorAll('[data-currency-select]').forEach((s) => { s.value = current; });
}

async function loadLiveRates() {
  const cached = read(RATES_KEY);
  if (cached) {
    try {
      const { at, data } = JSON.parse(cached);
      if (Date.now() - at < TTL) { rates = { ...FALLBACK, ...data }; return; }
    } catch { /* refetch */ }
  }
  try {
    const res = await fetch('https://open.er-api.com/v6/latest/INR');
    const json = await res.json();
    if (json?.result !== 'success') return;
    const data = {};
    for (const code of CODES) {
      const perInr = json.rates?.[code];
      if (perInr) data[code] = 1 / perInr;
    }
    rates = { ...FALLBACK, ...data };
    write(RATES_KEY, JSON.stringify({ at: Date.now(), data }));
  } catch { /* offline or blocked — fallback table stays */ }
}

export function setCurrency(code) {
  current = code in FALLBACK ? code : 'INR';
  write(STORE_KEY, current);
  render();
  if (current !== 'INR') {
    fetching ??= loadLiveRates();
    fetching.then(render);
  }
}
