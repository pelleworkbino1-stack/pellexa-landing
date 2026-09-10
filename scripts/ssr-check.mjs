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

const [
  ParentPage,
  FoodPage,
  MatchaPage,
  CocoaPage,
  SourcingPage,
  AcrylicPage,
  LedPage,
  TermsPage,
  PrivacyPage,
] = await Promise.all([
  page('/src/pages/ParentPage.tsx'),
  page('/src/pages/FoodPage.tsx'),
  page('/src/pages/MatchaPage.tsx'),
  page('/src/pages/CocoaPage.tsx'),
  page('/src/pages/GeneralSourcingPage.tsx'),
  page('/src/pages/AcrylicSourcingPage.tsx'),
  page('/src/pages/LedPage.tsx'),
  page('/src/pages/TermsPage.tsx'),
  page('/src/pages/PrivacyPage.tsx'),
])

const { MarketProvider } = await vite.ssrLoadModule('/src/context/MarketContext.tsx')
const { ThemeProvider } = await vite.ssrLoadModule('/src/theme/ThemeProvider.tsx')

// The U+00A0 escapes must mirror the registries exactly -- they are load-bearing
// there (bidi bracket integrity in Hebrew, ampersand orphaning in English), so a
// plain space here would silently stop asserting the shipped strings.
const LEADERSHIP_EN = 'Executive Leadership: Pelle Bino — Founder\u00A0&\u00A0Managing Member'
const LEADERSHIP_HE = 'הנהלה ראשית: פלא בינו — מייסד ומנהל כללי (Managing\u00A0Member)'

// PrivacyPage carries the same standardized title, but as a markdown bullet
// whose "**Executive Leadership:**" label becomes its own <strong>. The label
// and value are therefore asserted separately rather than as one run.
const LEADERSHIP_PRIVACY_LABEL = '>Executive Leadership:</strong>'
const LEADERSHIP_PRIVACY_VALUE = 'Pelle Bino — Founder\u00A0&\u00A0Managing Member'

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

// Agri-Food localization. /food/matcha rendered 4.1% Hebrew and /food/cacao
// 18.7% before these routes were wired to localized content, so each Hebrew
// case asserts the translated copy AND forbids the English string it replaced.
// The `forbid` half is the part that actually catches a regression: a route
// falling back to the English config still renders fine and still contains
// Hebrew from the shared navbar and footer.
const FOOD_TITLE_HE = 'תיק רכש מזון B2B בתפזורת'
const MATCHA_BADGE_HE = 'סוכנות שרשרת אספקה גלובלית — מאצ׳ה'
const MATCHA_BADGE_EN = 'Global Supply Chain Agency — Matcha'
const MATCHA_TIER_HE = 'דרגה 01'
const CACAO_EYEBROW_HE = 'תיק נגזרות קקאו'
const CACAO_EYEBROW_EN = 'Cacao Derivatives Portfolio'
const CACAO_GATE_HE = 'שער רכש'

// Deliberately English inside the Hebrew cacao render, per the 4B localization
// boundary: the applications matrix and analytical bounds are the terminology a
// procurement desk matches against the supplier's COA, so an over-eager
// translation pass should fail this check. Both strings are chosen because they
// reach the DOM — `cocoa.grades[].label` does not, since the component only
// counts that array to render the per-family badge.
const CACAO_ROW_KEPT_EN =
  'Standard Industrial Powder (10%–12% Fat Natural / Alkalized)'
const CACAO_METRIC_KEPT_EN = 'Cadmium — Maximum 0.6 – 0.8 mg/kg'

// TermsPage and PrivacyPage both render `<main dir="ltr" lang="en">` so the
// legal text stays LTR even while LangProvider has flipped <html> to RTL.
const PINNED_LTR = '<main dir="ltr" lang="en">'

// Cross-vertical contamination guard. The LED markets carried an acrylic
// solution card that deep-linked to /acrylic and shipped a "High-Margin"
// highlight pill. Both the vertical bleed and the margin claim are now gone,
// so each LED route asserts its three core cards and forbids any acrylic or
// margin string returning through a registry edit.
const LED_ACRYLIC_FORBID = ['Acrylic', 'acrylic', 'High-Margin']
const LED_ACRYLIC_FORBID_HE = ['אקריל', 'מרווח גבוה']

const cases = [
  { name: '/ (en)', path: '/', page: ParentPage, expect: [LEADERSHIP_EN] },
  {
    name: '/ (he)',
    path: '/',
    page: ParentPage,
    cookie: 'pellexa_lang=he',
    expect: [LEADERSHIP_HE],
  },
  { name: '/food (en)', path: '/food', page: FoodPage },
  {
    name: '/food (he)',
    path: '/food',
    page: FoodPage,
    cookie: 'pellexa_lang=he',
    expect: [FOOD_TITLE_HE],
  },
  {
    name: '/food/matcha (en)',
    path: '/food/matcha',
    page: MatchaPage,
    expect: [MATCHA_BADGE_EN],
    h1: 1,
  },
  {
    name: '/food/matcha (he)',
    path: '/food/matcha',
    page: MatchaPage,
    cookie: 'pellexa_lang=he',
    expect: [MATCHA_BADGE_HE, MATCHA_TIER_HE],
    forbid: [MATCHA_BADGE_EN],
    h1: 1,
  },
  {
    name: '/food/cacao (en)',
    path: '/food/cacao',
    page: CocoaPage,
    expect: [CACAO_EYEBROW_EN, CACAO_ROW_KEPT_EN],
    // The audit found this route had no h1 at all; the section heading is now
    // the h1, and CocoaPage is the only route mounting CocoaPortfolio.
    h1: 1,
  },
  {
    name: '/food/cacao (he)',
    path: '/food/cacao',
    page: CocoaPage,
    cookie: 'pellexa_lang=he',
    expect: [
      CACAO_EYEBROW_HE,
      CACAO_GATE_HE,
      CACAO_ROW_KEPT_EN,
      CACAO_METRIC_KEPT_EN,
    ],
    forbid: [CACAO_EYEBROW_EN],
    h1: 1,
  },
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
  {
    name: '/led (global)',
    path: '/led',
    page: LedPage,
    wrap: MarketProvider,
    expect: ['Crystal-Clear Indoor Displays', 'Stage-Ready Event Displays'],
    forbid: LED_ACRYLIC_FORBID,
  },
  {
    name: '/led/il (he)',
    path: '/led/il',
    page: LedPage,
    wrap: MarketProvider,
    cookie: 'pellexa_market=il',
    expect: ['תצוגות פנימיות חדות', 'תצוגות לבמה ואירועים'],
    forbid: LED_ACRYLIC_FORBID_HE,
  },

  // Legal routes are English-authoritative by design (answer 1B): the body is
  // pinned dir="ltr" lang="en" and the navbar toggle is suppressed, so the
  // Hebrew case asserts the copy does NOT switch. `/privacy` also pins the
  // unified founder title.
  { name: '/terms (en)', path: '/terms', page: TermsPage, expect: [PINNED_LTR], h1: 1 },
  {
    name: '/terms (he)',
    path: '/terms',
    page: TermsPage,
    cookie: 'pellexa_lang=he',
    expect: [PINNED_LTR, 'Terms and Conditions'],
    h1: 1,
  },
  {
    name: '/privacy (en)',
    path: '/privacy',
    page: PrivacyPage,
    expect: [PINNED_LTR, LEADERSHIP_PRIVACY_LABEL, LEADERSHIP_PRIVACY_VALUE],
    h1: 1,
  },
  {
    name: '/privacy (he)',
    path: '/privacy',
    page: PrivacyPage,
    cookie: 'pellexa_lang=he',
    expect: [PINNED_LTR, LEADERSHIP_PRIVACY_LABEL, LEADERSHIP_PRIVACY_VALUE],
    h1: 1,
  },
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
    let checks = 0

    for (const expected of c.expect ?? []) {
      if (!decoded.includes(expected)) {
        throw new Error(`rendered but missing expected string: ${expected}`)
      }
      checks += 1
    }

    // Catches a localized route silently falling back to its English source.
    for (const banned of c.forbid ?? []) {
      if (decoded.includes(banned)) {
        throw new Error(`rendered with a string that should be localized away: ${banned}`)
      }
      checks += 1
    }

    if (c.h1 !== undefined) {
      const found = (html.match(/<h1[\s>]/g) ?? []).length
      if (found !== c.h1) {
        throw new Error(`expected ${c.h1} <h1>, found ${found}`)
      }
      checks += 1
    }

    const note = checks ? `, ${checks} assertion(s) ok` : ''
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
