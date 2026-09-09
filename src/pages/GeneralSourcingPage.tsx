import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe2,
  Info,
  Wrench,
  HardHat,
  Layers,
  Gem,
  ArrowRight,
  Mail,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import SourcingProcess from '../components/parent/SourcingProcess'
import ScopeDisclaimer from '../components/parent/ScopeDisclaimer'
import MailtoFallback from '../components/parent/MailtoFallback'
import { LangProvider, useLang } from '../context/LangContext'
import type { SourcingPillar, SourcingPillarId } from '../markets/types'

/**
 * Pellexa General Sourcing — dedicated vertical page (`/sourcing`).
 *
 * B2B sourcing from audited Asia manufacturing partners. Pellexa structures,
 * verifies, and coordinates — it does not manufacture in-house.
 *
 * All copy is sourced from `content.sourcing` so EN and HE stay at
 * compile-enforced parity; nothing on this page is a hardcoded string.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero: origin eyebrow, dual-MOQ badge
 *   3. Four equal-weight sourcing pillars (the acrylic pillar links → /acrylic)
 *   4. Five-stage partner production pipeline
 *   5. Operational-scope disclaimer
 *   6. Inline #contact mailto + copy fallback
 *   7. ParentFooter
 */

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

/** Display order. The registry is a keyed Record, so it carries no ordering. */
const PILLAR_ORDER = [
  'heavy-equipment',
  'construction-materials',
  'precision-acrylic',
  'luxury-packaging',
] as const satisfies readonly SourcingPillarId[]

/**
 * Widening a pillar id without listing it above would silently drop the card
 * from the grid, which `tsc` cannot otherwise see. The tuple wrapper keeps the
 * conditional non-distributive so `never` resolves to `true` as intended.
 */
type MissingPillar = Exclude<SourcingPillarId, (typeof PILLAR_ORDER)[number]>
const _assertEveryPillarIsOrdered: [MissingPillar] extends [never] ? true : false = true
void _assertEveryPillarIsOrdered

/**
 * Icons live here rather than in the registry because `parent-en.ts` /
 * `parent-he.ts` are pure `.ts` data modules and must not import React
 * components. Same split as `CATEGORY_ICON` in `FoodPage.tsx`.
 */
const PILLAR_ICON: Record<SourcingPillarId, typeof Wrench> = {
  'heavy-equipment': Wrench,
  'construction-materials': HardHat,
  'precision-acrylic': Layers,
  'luxury-packaging': Gem,
}

function Hero() {
  const { content } = useLang()
  const h = content.sourcing.hero

  return (
    <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--brand-glow), 0.06) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-secondary-500/8 border border-brand-secondary-400/20 px-4 py-1.5 mb-8 backdrop-blur-sm shadow-[0_0_40px_rgba(var(--brand-secondary-glow),0.15)]"
        >
          <Globe2 size={14} className="text-brand-secondary-400" />
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
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-10"
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

/**
 * One of four equal-weight pillar cards. Chrome is deliberately identical
 * across all four — the only difference is the CTA target, so no vertical
 * reads as the site's "real" business and the rest as filler.
 */
const CARD_CLASS =
  'group block relative rounded-2xl border border-silver-anchor/8 bg-canvas-overlay/40 backdrop-blur-sm p-7 hover:border-brand-500/25 hover:bg-canvas-overlay/60 transition-all duration-500 h-full'

function PillarCard({
  id,
  pillar,
  delay,
  inView,
}: {
  id: SourcingPillarId
  pillar: SourcingPillar
  delay: number
  inView: boolean
}) {
  const Icon = PILLAR_ICON[id]

  const body = (
    <>
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-silver-anchor/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
          <Icon size={22} className="text-brand-400" />
        </div>
        <div className="min-w-0 flex-1">
          <span className="inline-block rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-2">
            {pillar.tag}
          </span>
          <h3 className="font-display font-semibold text-lg text-white group-hover:text-brand-400 transition-colors">
            {pillar.title}
          </h3>
        </div>
      </div>

      <p className="text-sm text-ink-dim leading-relaxed mb-4">
        {pillar.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {pillar.chips.map((chip) => (
          <span
            key={chip}
            className="inline-block rounded-full bg-silver-anchor/5 border border-silver-anchor/10 px-2.5 py-0.5 text-[11px] text-ink-muted"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:gap-3 transition-all duration-300">
        {pillar.cta}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      {pillar.link ? (
        <Link to={pillar.link} className={CARD_CLASS}>
          {body}
        </Link>
      ) : (
        <a href="#contact" className={CARD_CLASS}>
          {body}
        </a>
      )}
    </motion.div>
  )
}

function PillarGrid() {
  const { content } = useLang()
  const p = content.sourcing.pillars
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-3 block">
            {p.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
            {p.title}
          </h2>
          <p className="text-ink-dim text-base leading-relaxed">{p.subtitle}</p>
        </motion.div>

        {/* 2x2 rather than 4-across: four full-width columns force thin cards
            and re-create the cramped look this layout was meant to fix. */}
        <div className="grid md:grid-cols-2 gap-5">
          {PILLAR_ORDER.map((id, i) => (
            <PillarCard
              key={id}
              id={id}
              pillar={p.items[id]}
              delay={0.12 + i * 0.08}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPanel() {
  const { content } = useLang()
  const s = content.sourcing
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mailtoHref = `mailto:${s.email}?subject=${encodeURIComponent(
    s.contact.mailtoSubject,
  )}`

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-canvas-elevated/50">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-500/10 border border-silver-anchor/10 mb-5">
            <Mail size={24} className="text-brand-400" />
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
            {s.contact.title}
          </h2>
          <p className="text-ink-dim text-base leading-relaxed mb-7 max-w-xl mx-auto">
            {s.contact.body}
          </p>

          <MailtoFallback
            email={s.email}
            mailtoHref={mailtoHref}
            ctaLabel={s.contact.ctaLabel}
          />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * Page body. Lives inside `LangProvider` so `dir`, `lang`, and the SEO meta
 * tags can all follow the EN/HE toggle — the outer page component is the
 * provider's parent and cannot read the language.
 */
function SourcingBody() {
  const { lang, content } = useLang()
  const meta = content.sourcing.meta

  useEffect(() => {
    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('og:title', meta.title)
    setMeta('og:description', meta.description)
    setMeta('og:url', `${window.location.origin}/sourcing`)
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
        <PillarGrid />
        <SourcingProcess />
        <ScopeDisclaimer />
        <ContactPanel />
      </main>
      <ParentFooter />
    </div>
  )
}

export default function GeneralSourcingPage() {
  return (
    <LangProvider>
      <SourcingBody />
    </LangProvider>
  )
}
