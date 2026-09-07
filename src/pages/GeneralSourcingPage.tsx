import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe2,
  Info,
  Wrench,
  HardHat,
  Package,
  Gem,
  ArrowRight,
  Mail,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import SourcingProcess from '../components/parent/SourcingProcess'
import ScopeDisclaimer from '../components/parent/ScopeDisclaimer'
import MailtoFallback from '../components/parent/MailtoFallback'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa General Sourcing — dedicated vertical page (`/sourcing`).
 *
 * B2B sourcing from audited Asia manufacturing partners. Pellexa structures,
 * verifies, and coordinates — it does not manufacture in-house.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero: origin eyebrow, dual-MOQ badge, four operating-model categories
 *   3. Featured acrylic card (Link → /acrylic)
 *   4. Five-stage partner production pipeline
 *   5. Operational-scope disclaimer
 *   6. Inline #contact mailto + copy fallback
 *   7. ParentFooter
 */

const PAGE_TITLE = 'Pellexa General Sourcing — Asia Manufacturing Partners'
const PAGE_DESCRIPTION =
  'Industrial and consumer sourcing from audited Asia manufacturing partners — heavy equipment and machinery, building and construction materials, custom acrylic and TCG enclosures, and luxury brand packaging. FCL-scale minimums for standard industrial lines; project-based dynamic MOQ for specialized/custom fabrication lines. Enterprise and luxury accounts.'
const EMAIL = 'pelle@pellexa.com'
const MOQ_BADGE = 'FCL Minimums — Dynamic MOQ for Specialized Lines'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const categories = [
  { icon: Wrench, label: 'Heavy Equipment & Machinery', tag: 'Industrial / FCL-scale' },
  { icon: HardHat, label: 'Building & Construction Materials', tag: 'Industrial / FCL-scale' },
  { icon: Package, label: 'Custom Acrylic & TCG Enclosures', tag: 'Specialized / dynamic MOQ' },
  { icon: Gem, label: 'Luxury Brand Packaging', tag: 'Specialized / dynamic MOQ' },
] as const

function Hero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
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
            Audited Asia Manufacturing Partners
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          General{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Sourcing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-10"
        >
          B2B sourcing from audited Tier-1 and specialized partner facilities
          across key Asia production hubs. We structure, verify, and coordinate
          — we do not manufacture in-house.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary-500/10 border-2 border-brand-secondary-400/40 px-4 py-2 mb-12 shadow-[0_0_30px_rgba(var(--brand-secondary-glow),0.18)]"
        >
          <Info size={14} className="text-brand-secondary-300 shrink-0" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary-300">
            {MOQ_BADGE}
          </span>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {categories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.55 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="rounded-2xl border border-silver-anchor/8 bg-canvas-overlay/40 backdrop-blur-sm p-5 text-left hover:border-brand-500/20 transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center mb-3">
                  <Icon size={20} className="text-brand-400" />
                </div>
                <p className="text-sm font-semibold text-white mb-1">{cat.label}</p>
                <p className="text-[11px] tracking-wider uppercase text-brand-secondary-400">
                  {cat.tag}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function AcrylicFeature() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <Link
            to="/acrylic"
            className="group block relative rounded-2xl border border-silver-anchor/10 bg-canvas-elevated/60 backdrop-blur-md p-8 sm:p-10 hover:border-brand-500/30 transition-all duration-500"
          >
            <div className="grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
              <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-silver-anchor/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Package size={28} className="text-brand-400" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-2">
                  Active Sub-Vertical
                </span>
                <h3 className="font-display font-semibold text-2xl text-white mb-2 group-hover:text-brand-400 transition-colors">
                  Premium Acrylic Sourcing
                </h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  Custom acrylic and TCG enclosures sourced from specialized
                  fabrication partners — display cases, collector protection,
                  and luxury retail boxes — scoped under project-based dynamic
                  MOQ, with staged sampling and third-party QC.
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm font-semibold text-brand-400 group-hover:gap-3 transition-all duration-300 shrink-0">
                Enter Portfolio
                <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ContactPanel() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('Pellexa General Sourcing — Procurement Inquiry')}`

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
            Enterprise Procurement Inquiry
          </h2>
          <p className="text-ink-dim text-base leading-relaxed mb-7 max-w-xl mx-auto">
            Submit volume profile, target market, and category preference.
            Standard industrial lines run at FCL-scale minimums; specialized
            fabrication is scoped at a project-based dynamic MOQ. Qualified
            accounts receive a tier-aligned commercial brief within 2 business
            days.
          </p>

          <MailtoFallback
            email={EMAIL}
            mailtoHref={mailtoHref}
            ctaLabel="Request Sourcing Brief"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default function GeneralSourcingPage() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE)
    setMeta('og:description', PAGE_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/sourcing`)
    setMeta('twitter:title', PAGE_TITLE)
    setMeta('twitter:description', PAGE_DESCRIPTION)
    window.scrollTo(0, 0)
  }, [])

  return (
    <LangProvider>
      <div className="min-h-screen bg-canvas-base text-white antialiased">
        <ParentNavbar />
        <main dir="ltr" lang="en">
          <Hero />
          <AcrylicFeature />
          <SourcingProcess />
          <ScopeDisclaimer />
          <ContactPanel />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
