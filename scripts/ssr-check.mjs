/**
 * Headless render check for the core routes.
 *
 * This codebase is a client-only Vite SPA (`src/main.tsx` calls `createRoot`),
 * so there is no SSR entry to exercise. This harness supplies the smallest
 * possible server environment and pushes every core route through
 * `renderToString`, which catches render-time crashes and missing registry
 * fields that `tsc` alone cannot see.
 *
 * Why each piece is needed:
 * - `document.cookie` stub: `LangProvider` reads it inside a `useState`
 *   initializer and `MarketProvider` inside a `useMemo`, both of which run
 *   during render rather than in an effect. Setting the cookie is also how this
 *   harness selects the Hebrew locale.
 * - `StaticRouter`: `BrowserRouter` needs `window.history`. `ThemeProvider` and
 *   the market/lang providers all call `useLocation`/`useParams`, so they must
 *   sit inside a router. React Router 7 exports it from the `react-router`
 *   root entry -- the v6 `react-router-dom/server` subpath no longer exists.
 * - Vite `ssrLoadModule`: compiles the `.tsx` sources on demand, so no jsdom,
 *   vitest, or browser driver is required.
 *
 * Effects never run under `renderToString`, so the `document.title` and
 * `setMeta` side effects in the page components are inert here. Likewise
 * framer-motion's `useInView` resolves false, meaning markup is emitted in its
 * pre-animation state -- assertions therefore check for text presence, not
 * visibility.
 *
 * Run: node scripts/ssr-check.mjs
 */
import { createElement as h } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { createServer } from 'vite'

function setCookie(value) {
  globalThis.document = { cookie: value }
}

/**
 * `renderToString` escapes text content, so "Founder & Managing Member" is
 * emitted as "Founder &amp; Managing Member". Decode before asserting so the
 * expected strings can be written exactly as they appear in the registries.
 */
function decodeEntities(html) {
  return html
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .replaceAll('&quot;', '"')
    .replaceAll('&#x27;', "'")
    .replaceAll('&#39;', "'")
    .replaceAll('&amp;', '&')
}

setCookie('')

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'warn',
})

const page = (p) => vite.ssrLoadModule(p).then((m) => m.default)

const [ParentPage, FoodPage, SourcingPage, AcrylicPage, LedPage] = await Promise.all([
  page('/src/pages/ParentPage.tsx'),
  page('/src/pages/FoodPage.tsx'),
  page('/src/pages/GeneralSourcingPage.tsx'),
  page('/src/pages/AcrylicSourcingPage.tsx'),
  page('/src/pages/LedPage.tsx'),
])

const { MarketProvider } = await vite.ssrLoadModule('/src/context/MarketContext.tsx')
const { ThemeProvider } = await vite.ssrLoadModule('/src/theme/ThemeProvider.tsx')

// The U+00A0 escapes must mirror the registries exactly -- they are load-bearing
// there (bidi bracket integrity in Hebrew, ampersand orphaning in English), so a
// plain space here would silently stop asserting the shipped strings.
const LEADERSHIP_EN = 'Executive Leadership: Pelle Bino — Founder\u00A0&\u00A0Managing Member'
const LEADERSHIP_HE = 'הנהלה ראשית: פלה בינו — מייסד ומנהל כללי (Managing\u00A0Member)'

// Bidi protections on the Hebrew sourcing/acrylic registries. Same reasoning as
// the leadership line: these escapes are the fix, not decoration, so assert the
// exact shipped bytes.
//   \u2060 WORD JOINER  -- keeps a Latin acronym attached to its Hebrew maqaf.
//   \u2066 / \u2069     -- LRI / PDI isolate around a run abutting a neutral.
//   \u00A0 NBSP         -- binds a multi-token Latin phrase.
const PMMA_WORD_JOINER_HE = 'אקריל מדויק ו-\u2060PMMA מהונדס'
const MOQ_ISOLATE_HE = 'ייעודי / \u2066MOQ\u2069 דינמי'
const PMMA_HEADLINE_HE = 'ו-\u2060PMMA מהונדס'
const COMPLIANCE_ISOLATE_HE = '\u2066REACH\u00A0/\u00A0RoHS\u00A0/\u00A0FDA\u2069'

// Non-importer-of-record boundary. Compliance-bearing in both locales, and now
// sourced from the registry rather than hardcoded in SourcingProcess.tsx --
// assert it so a bad translation edit cannot quietly drop it.
const NON_IOR_EN =
  'we are not the freight forwarder, customs broker, or importer of record'
const NON_IOR_HE = 'איננו חברת השילוח, עמיל המכס או היבואן הרשמי'

const cases = [
  { name: '/ (en)', path: '/', page: ParentPage, expect: [LEADERSHIP_EN] },
  {
    name: '/ (he)',
    path: '/',
    page: ParentPage,
    cookie: 'pellexa_lang=he',
    expect: [LEADERSHIP_HE],
  },
  { name: '/food', path: '/food', page: FoodPage },
  {
    name: '/sourcing (en)',
    path: '/sourcing',
    page: SourcingPage,
    expect: ['Precision Acrylic & Engineered PMMA', NON_IOR_EN],
  },
  {
    name: '/sourcing (he)',
    path: '/sourcing',
    page: SourcingPage,
    cookie: 'pellexa_lang=he',
    expect: [PMMA_WORD_JOINER_HE, MOQ_ISOLATE_HE, NON_IOR_HE],
  },
  {
    name: '/acrylic (en)',
    path: '/acrylic',
    page: AcrylicPage,
    expect: [
      'graded-collectible and trading-card (TCG) enclosures',
      'partner-capability baseline, not a Pellexa-owned plant spec',
      NON_IOR_EN,
    ],
  },
  {
    name: '/acrylic (he)',
    path: '/acrylic',
    page: AcrylicPage,
    cookie: 'pellexa_lang=he',
    expect: [PMMA_HEADLINE_HE, COMPLIANCE_ISOLATE_HE, NON_IOR_HE],
  },
  { name: '/led', path: '/led', page: LedPage, wrap: MarketProvider },
]

let failed = 0

console.log('renderToString check')

for (const c of cases) {
  setCookie(c.cookie ?? '')
  try {
    const inner = c.wrap ? h(c.wrap, null, h(c.page)) : h(c.page)
    const html = renderToString(
      h(StaticRouter, { location: c.path }, h(ThemeProvider, null, inner)),
    )
    const decoded = decodeEntities(html)
    for (const expected of c.expect ?? []) {
      if (!decoded.includes(expected)) {
        throw new Error(`rendered but missing expected string: ${expected}`)
      }
    }
    const note = c.expect ? `, ${c.expect.length} assertion(s) ok` : ''
    console.log(`  ok    ${c.name} (${html.length} bytes${note})`)
  } catch (err) {
    failed += 1
    console.error(`  FAIL  ${c.name}: ${err.message}`)
  }
}

await vite.close()

if (failed > 0) {
  console.error(`\n${failed} of ${cases.length} route checks failed`)
  process.exit(1)
}

console.log(`\nall ${cases.length} route checks passed`)
