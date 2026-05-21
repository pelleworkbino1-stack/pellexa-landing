import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Globe2,
  Info,
  Boxes,
  Sofa,
  ToyBrick,
  ShoppingBag,
  Package,
  ArrowRight,
  Mail,
  ExternalLink,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa General Sourcing — dedicated vertical page (/sourcing).
 *
 * Cascades from the parent core theme profile (.theme-parent → Sky Blue +
 * Bronze runway). All chrome resolves through the locked Tier 1–3 tokens;
 * no per-page theme scope.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero: Asia-hub eyebrow, headline, 4-cell category grid, MOQ badge
 *   3. Featured "Premium Acrylic Sourcing" card (Link → /acrylic)
 *   4. Inline #contact section (mailto handoff so ParentNavbar CTA scrolls)
 *   5. ParentFooter
 */

const PAGE_TITLE = 'Pellexa General Sourcing — Asia Manufacturing Hub'
const PAGE_DESCRIPTION =
  'Opportunistic mass-manufacturing channel direct from Asia production hubs. Custom boxes, furniture, toys, and lifestyle accessories. High MOQ — minimum 1,000 units. Enterprise & luxury accounts only.'
const EMAIL = 'sourcing@pellexa.com'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const categories = [
  { icon: Boxes, label: 'Custom Boxes', tag: 'Packaging' },
  { icon: Sofa, label: 'Furniture', tag: 'Hospitality / Retail' },
  { icon: ToyBrick, label: 'Toys', tag: 'Promotional / Licensed' },
  { icon: ShoppingBag, label: 'Lifestyle Accessories', tag: 'Branded / Premium' },
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
            Asia Manufacturing Hubs
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
          Opportunistic mass-manufacturing channel. Direct from key Asia
          production hubs to global brands, luxury hotels, and enterprise
          accounts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary-500/10 border-2 border-brand-secondary-400/40 px-4 py-2 mb-12 shadow-[0_0_30px_rgba(var(--brand-secondary-glow),0.18)]"
        >
          <Info size={14} className="text-brand-secondary-300 shrink-0" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary-300">
            Variable MOQ — Project Consultation Required
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
                  Factory-direct premium acrylic enclosures, display cases,
                  luxury retail boxes, and heavy-duty storage containers —
                  custom-engineered for high-margin verticals.
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
            Qualified accounts receive a tier-aligned commercial brief within
            2 business days.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`mailto:${EMAIL}?subject=${encodeURIComponent('Pellexa General Sourcing — Procurement Inquiry')}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-3.5 text-sm font-semibold text-canvas-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Request Sourcing Brief
              <ExternalLink size={14} />
            </a>
            <span className="text-xs text-silver-trace font-mono select-all">{EMAIL}</span>
          </div>
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
        <main>
          <Hero />
          <AcrylicFeature />
          <ContactPanel />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
