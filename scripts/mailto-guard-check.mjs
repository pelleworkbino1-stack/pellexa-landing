/**
 * Verifies the /acrylic mailto payload stays inside the mail-client limit in
 * both locales, and that `buildGuardedMailto` degrades correctly when it does
 * not.
 *
 * The shipped brief currently measures ~1,756 characters in Hebrew, so the
 * guard never trips in production. That is exactly why it needs a test: an
 * untriggered fallback is an untested one, and the next Hebrew copy edit is
 * what would trigger it.
 *
 * Run via `npm run check:mailto`.
 */
import { createServer } from 'vite'

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

const { buildGuardedMailto, MAILTO_SAFE_LIMIT } = await vite.ssrLoadModule(
  '/src/components/parent/MailtoFallback.tsx',
)
const { parentEn } = await vite.ssrLoadModule('/src/markets/parent-en.ts')
const { parentHe } = await vite.ssrLoadModule('/src/markets/parent-he.ts')

// Mirrors buildBriefBody in AcrylicSourcingPage.tsx.
function buildBriefBody(brief) {
  const field = (label) => `${label}: `
  const option = (label) => `- ${label}`
  return [
    brief.heading,
    '',
    brief.orgTitle,
    ...brief.orgFields.map(field),
    '',
    brief.surfaceTitle,
    ...brief.surfaceOptions.map(option),
    '',
    brief.profileTitle,
    ...brief.profileFields.map(field),
    '',
    brief.contactTitle,
    ...brief.contactFields.map(field),
    '',
    brief.signoff,
  ].join('\n')
}

const HARD_LIMIT = 2048
let failures = 0
const fail = (msg) => {
  failures++
  console.log(`  FAIL  ${msg}`)
}

console.log('mailto payload check')
console.log(`  guard threshold: ${MAILTO_SAFE_LIMIT}   hard limit: ${HARD_LIMIT}`)
console.log('')

for (const [locale, content] of [
  ['en', parentEn],
  ['he', parentHe],
]) {
  const a = content.acrylic
  const t = a.intake
  const body = buildBriefBody(t.brief)
  const r = buildGuardedMailto(a.email, t.mailtoSubject, body)

  const pct = ((r.length / HARD_LIMIT) * 100).toFixed(1)
  console.log(
    `  ${locale}  full=${String(r.length).padStart(5)}  ` +
      `(${pct}% of ${HARD_LIMIT})  headroom=${MAILTO_SAFE_LIMIT - r.length}  ` +
      `prefilled=${r.oversizeBrief ? 'no (guard tripped)' : 'yes'}`,
  )

  if (r.length > MAILTO_SAFE_LIMIT) {
    fail(
      `${locale} payload is ${r.length}, over the ${MAILTO_SAFE_LIMIT} target — ` +
        `trim the brief labels in parent-${locale}.ts`,
    )
  }
  // Under the threshold the body must actually be pre-filled.
  if (r.length <= MAILTO_SAFE_LIMIT) {
    if (r.oversizeBrief !== undefined)
      fail(`${locale} is within budget but the guard stripped the body`)
    if (!r.href.includes('body=')) fail(`${locale} href is missing the body parameter`)
    if (r.href.length !== r.length)
      fail(`${locale} reported length ${r.length} does not match href ${r.href.length}`)
  }
}

console.log('')
console.log('  guard behaviour on a deliberately oversized brief:')
const huge = 'א'.repeat(2000)
const g = buildGuardedMailto('x@example.com', 'נושא', huge)
if (g.oversizeBrief !== huge) fail('oversize guard did not return the full brief for clipboard')
if (g.href.includes('body=')) fail('oversize guard left a body on the href')
if (g.href.length > MAILTO_SAFE_LIMIT) fail('oversize fallback href is itself too long')
if (!g.href.includes('subject=')) fail('oversize fallback dropped the subject')
console.log(
  `    2000 Hebrew chars -> would be ${g.length}; fallback href is ` +
    `${g.href.length} chars, subject kept, brief routed to clipboard`,
)

await vite.close()
console.log('')
console.log(failures === 0 ? 'mailto check passed' : `mailto check FAILED (${failures})`)
process.exit(failures === 0 ? 0 : 1)
