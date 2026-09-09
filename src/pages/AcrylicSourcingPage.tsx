import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Archive,
  ShieldCheck,
  Gem,
  Container,
  Mail,
  Check,
  Info,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import SourcingProcess from '../components/parent/SourcingProcess'
import ScopeDisclaimer from '../components/parent/ScopeDisclaimer'
import MailtoFallback, {
  buildGuardedMailto,
} from '../components/parent/MailtoFallback'
import { LangProvider, useLang } from '../context/LangContext'
import type {
  AcrylicBriefContent,
  AcrylicSpecId,
  AcrylicSurfaceId,
} from '../markets/types'

/**
 * Pellexa Acrylic Sourcing — dedicated page (`/acrylic`).
 *
 * Cascades from the parent core theme profile (.theme-parent → Sky Blue +
 * Bronze runway). Positioning: precision-engineered PMMA for archival
 * preservation, museum and gallery protection, luxury retail, and high-value
 * collector preservation. Produced at audited specialized fabrication
 * partners, then verified through staged sampling and dual third-party QC.
 * Pellexa does not own fabrication plants and is not the freight forwarder,
 * customs broker, or importer of record.
 *
 * All copy is sourced from `content.acrylic` so EN and HE stay at
 * compile-enforced parity.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero (partner-sourced identity + dual-MOQ badge)
 *   3. Surface grid: 4 capability surfaces quoted against partner capability
 *   4. Capability spec table — partner baselines, confirmed at consultation
 *   5. Five-stage partner production pipeline
 *   6. Operational-scope disclaimer
 *   7. Consultation intake panel (id="contact", mailto + copy fallback)
 *   8. ParentFooter
 */

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

/** Display order — the registry is a keyed Record and carries no ordering. */
const SURFACE_ORDER = [
  'archival-preservation',
  'museum-gallery',
  'luxury-retail',
  'engineered-pmma',
] as const satisfies readonly AcrylicSurfaceId[]

const SPEC_ORDER = [
  'thickness',
  'format',
  'clarity',
  'tolerance',
  'finishes',
  'leadTime',
  'moq',
  'compliance',
] as const satisfies readonly AcrylicSpecId[]

/** Tuple wrappers keep these conditionals non-distributive over `never`. */
type MissingSurface = Exclude<AcrylicSurfaceId, (typeof SURFACE_ORDER)[number]>
type MissingSpec = Exclude<AcrylicSpecId, (typeof SPEC_ORDER)[number]>
const _assertEverySurfaceIsOrdered: [MissingSurface] extends [never] ? true : false = true
const _assertEverySpecIsOrdered: [MissingSpec] extends [never] ? true : false = true
void _assertEverySurfaceIsOrdered
void _assertEverySpecIsOrdered

/** Registries are pure `.ts` data modules, so icons are bound here. */
const SURFACE_ICON: Record<AcrylicSurfaceId, typeof Archive> = {
  'archival-preservation': Archive,
  'museum-gallery': ShieldCheck,
  'luxury-retail': Gem,
  'engineered-pmma': Container,
}

function Hero() {
  const { content } = useLang()
  const h = content.acrylic.hero

  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--brand-glow), 0.05) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-secondary-500/8 border border-brand-secondary-400/20 px-4 py-1.5 mb-8 backdrop-blur-sm shadow-[0_0_40px_rgba(var(--brand-secondary-glow),0.15)]"
        >
          <ShieldCheck size={14} className="text-brand-secondary-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            {h.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          {h.headlineTop}{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            {h.headlineHighlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-8"
        >
          {h.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary-500/10 border-2 border-brand-secondary-400/40 px-4 py-2 shadow-[0_0_30px_rgba(var(--brand-secondary-glow),0.18)]"
        >
          <Info size={14} className="text-brand-secondary-300 shrink-0" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary-300">
            {h.moqBadge}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

function SurfaceGrid() {
  const { content } = useLang()
  const s = content.acrylic.surfaces
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-3 block">
            {s.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            {s.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {SURFACE_ORDER.map((id, i) => {
            const surface = s.items[id]
            const Icon = SURFACE_ICON[id]
            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group rounded-2xl border border-silver-anchor/10 bg-canvas-overlay/40 backdrop-blur-sm p-6 hover:border-brand-500/30 hover:bg-canvas-overlay/60 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-silver-anchor/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <Icon size={22} className="text-brand-400" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="inline-block rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-2">
                      {surface.tag}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {surface.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-ink-dim leading-relaxed mb-4">
                  {surface.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {surface.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-block rounded-full bg-silver-anchor/5 border border-silver-anchor/10 px-2.5 py-0.5 text-[11px] text-ink-muted"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function TechSpecs() {
  const { content } = useLang()
  const s = content.acrylic.specs
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-20 bg-canvas-elevated/40">
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-3 block">
            {s.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
            {s.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-silver-anchor/10 bg-canvas-overlay/40 backdrop-blur-sm overflow-hidden"
        >
          <dl className="divide-y divide-brand-secondary-400/15">
            {SPEC_ORDER.map((id) => {
              const spec = s.rows[id]
              return (
                <div
                  key={id}
                  className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-2 sm:gap-6 px-5 sm:px-7 py-4"
                >
                  <dt className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-brand-secondary-300">
                    {spec.label}
                  </dt>
                  <dd className="text-sm sm:text-base text-ink-primary font-medium">
                    {spec.value}
                  </dd>
                </div>
              )
            })}
          </dl>
          <p className="border-t border-brand-secondary-400/15 px-5 sm:px-7 py-4 text-xs sm:text-sm text-ink-dim italic leading-relaxed">
            {s.footnote}
          </p>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Assembles the pre-filled consultation email.
 *
 * Deliberately plain. Field labels are not space-padded to a fixed column:
 * that alignment only works in LTR monospace and mangles the brief under RTL.
 *
 * The two 48-character ASCII rule frames this used to draw were removed
 * because they were the single largest contributor to the Hebrew URL blowing
 * past the mail-client limit — `encodeURIComponent` expands each em-dash to
 * nine characters, so the `'—'.repeat(48)` line alone cost 432 of them, and
 * the pair cost 582. `'- '` bullets replace `'   [ ] '` for the same reason
 * (12 encoded characters per row down to 4), and the three-space indents are
 * gone at 9 characters each.
 */
function buildBriefBody(brief: AcrylicBriefContent) {
  const field = (label: string) => `${label}: `
  const option = (label: string) => `- ${label}`

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

function QuoteIntake() {
  const { content } = useLang()
  const a = content.acrylic
  const t = a.intake
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const mailto = buildGuardedMailto(
    a.email,
    t.mailtoSubject,
    buildBriefBody(t.brief),
  )

  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-silver-anchor/10 bg-canvas-elevated/60 backdrop-blur-md p-7 sm:p-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-silver-anchor/15 flex items-center justify-center shrink-0">
              <Mail size={22} className="text-brand-400" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-xl sm:text-2xl text-white">
                {t.title}
              </h3>
              <p className="text-sm text-ink-dim">{t.subtitle}</p>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-ink-muted">
            {t.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <Check size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <MailtoFallback
            email={a.email}
            mailtoHref={mailto.href}
            oversizeBrief={mailto.oversizeBrief}
            ctaLabel={t.ctaLabel}
            secondaryHref={`mailto:${a.email}`}
            secondaryLabel={t.secondaryLabel}
          />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Page body. Lives inside `LangProvider` so `dir`, `lang`, and the SEO meta
 * tags follow the EN/HE toggle.
 */
function AcrylicBody() {
  const { lang, content } = useLang()
  const meta = content.acrylic.meta

  useEffect(() => {
    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('og:title', meta.title)
    setMeta('og:description', meta.description)
    setMeta('og:url', `${window.location.origin}/acrylic`)
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
  }, [meta])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-canvas-base text-white antialiased">
      <ParentNavbar />
      <main dir={lang === 'he' ? 'rtl' : 'ltr'} lang={lang}>
        <Hero />
        <SurfaceGrid />
        <TechSpecs />
        <SourcingProcess />
        <ScopeDisclaimer />
        <QuoteIntake />
      </main>
      <ParentFooter />
    </div>
  )
}

export default function AcrylicSourcingPage() {
  return (
    <LangProvider>
      <AcrylicBody />
    </LangProvider>
  )
}
