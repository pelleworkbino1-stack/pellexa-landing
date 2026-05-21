import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Package,
  ShieldCheck,
  Gem,
  Container,
  Mail,
  ExternalLink,
  Check,
  Factory,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa Premium Acrylic Sourcing — dedicated factory-direct page (/acrylic).
 *
 * Cascades from the parent core theme profile (.theme-parent → Sky Blue +
 * Bronze runway). The page leans heavily on the silver-anchor industrial
 * chrome to project factory-direct technical accuracy:
 *   - Silver-anchor hairline borders on every product card
 *   - Bronze structural eyebrows + tech spec labels
 *   - Sky Blue reserved for primary action surfaces (CTA, focus, hover)
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero (factory-direct industrial intro)
 *   3. Product grid: 4 acrylic categories
 *   4. Technical specifications list frame
 *   5. Quote intake panel (id="contact", mailto handoff)
 *   6. ParentFooter
 */

const PAGE_TITLE = 'Pellexa Premium Acrylic — Factory-Direct Sourcing'
const PAGE_DESCRIPTION =
  'Custom-engineered factory-direct acrylic infrastructure across all domains, with premium specialization in custom display boxes, gallery cases, and high-precision protective enclosures tailored for TCG (Trading Card Games), elite collectibles, and luxury retail.'
const EMAIL = 'acrylic@pellexa.com'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const products = [
  {
    icon: Package,
    tag: 'TCG & Collectibles',
    title: 'Custom Acrylic Boxes',
    description:
      'Bespoke acrylic enclosures engineered to client dimensions, with deep specialization in TCG & Pokémon ETB Cases, Booster Box Protectors, Graded Card Displays, and Custom Luxury Gift Packaging.',
    highlights: ['TCG / ETB Fit', 'Graded Slab Ready', 'Luxury Gift Format'],
  },
  {
    icon: ShieldCheck,
    tag: 'Protection',
    title: 'Protective Display Cases',
    description:
      'High-clarity display protection engineered for museum, gallery, collector, and premium retail showroom installation.',
    highlights: ['UV Filter', 'Anti-Static', 'Tamper-Resistant'],
  },
  {
    icon: Gem,
    tag: 'Luxury Retail',
    title: 'Luxury Retail Enclosures',
    description:
      'Premium retail display fixtures engineered for jewelry, watches, perfume, and high-margin luxury merchandising.',
    highlights: ['Mirror-Polish', 'LED-Ready', 'Modular'],
  },
  {
    icon: Container,
    tag: 'Industrial',
    title: 'Heavy-Duty Bulk Storage',
    description:
      'Industrial-grade acrylic and PETG storage systems engineered for warehouse, lab, and high-cycle operational use.',
    highlights: ['Impact-Resistant', 'Stackable', 'Bulk Volume'],
  },
] as const

const techSpecs = [
  { label: 'Material Thickness', value: '3 mm – 25 mm' },
  { label: 'Sheet Format', value: 'Up to 2,050 × 3,050 mm' },
  { label: 'Optical Clarity', value: '92% Light Transmission' },
  { label: 'Tolerance', value: '±0.2 mm Precision-Cut' },
  { label: 'Finishes', value: 'Polished / Frosted / Tinted / Mirror' },
  { label: 'Lead Time', value: '4–6 Weeks (Standard Tier)' },
  { label: 'MOQ', value: 'Scalable Tiers — Project Consultation Required' },
  { label: 'Compliance', value: 'REACH / RoHS / FDA Food-Safe (on request)' },
] as const

function Hero() {
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
          <Factory size={14} className="text-brand-secondary-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            Factory-Direct Acrylic
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          Premium Acrylic{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Sourcing
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          Custom-engineered factory-direct acrylic infrastructure across all
          domains, with premium specialization in custom display boxes, gallery
          cases, and high-precision protective enclosures tailored for TCG
          (Trading Card Games), elite collectibles, and luxury retail.
        </motion.p>
      </div>
    </section>
  )
}

function ProductGrid() {
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
            Product Portfolio
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            Engineered Acrylic Categories
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={p.title}
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
                      {p.tag}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-white">
                      {p.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-ink-dim leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.highlights.map((h) => (
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
            Technical Specifications
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
            Engineering Profile
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-silver-anchor/10 bg-canvas-overlay/40 backdrop-blur-sm overflow-hidden"
        >
          <dl className="divide-y divide-brand-secondary-400/15">
            {techSpecs.map((spec) => (
              <div
                key={spec.label}
                className="grid grid-cols-1 sm:grid-cols-[1fr_1.5fr] gap-2 sm:gap-6 px-5 sm:px-7 py-4"
              >
                <dt className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-brand-secondary-300">
                  {spec.label}
                </dt>
                <dd className="text-sm sm:text-base text-ink-primary font-medium">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="border-t border-brand-secondary-400/15 px-5 sm:px-7 py-4 text-xs sm:text-sm text-ink-dim italic leading-relaxed">
            Material grades, custom thickness tolerances (up to 6mm+
            high-impact options), and minimum order configurations are fully
            variable and engineered based on individual client criteria during
            exploratory briefs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function QuoteIntake() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const subject = encodeURIComponent(
    'Pellexa Acrylic — Factory Quote Request',
  )
  const body = encodeURIComponent(
    [
      'PELLEXA ACRYLIC — FACTORY QUOTE INTAKE',
      '='.repeat(48),
      '',
      '1. ORGANIZATION',
      '   Company:           ',
      '   Industry:          ',
      '   Target Market:     ',
      '',
      '2. PRODUCT CATEGORY',
      '   [ ] Custom Acrylic Boxes',
      '   [ ] Protective Display Cases',
      '   [ ] Luxury Retail Enclosures',
      '   [ ] Heavy-Duty Bulk Storage',
      '',
      '3. SPEC PROFILE',
      '   Dimensions (W × H × D):',
      '   Material Thickness:    ',
      '   Finish:                ',
      '   Estimated Quantity:    ',
      '   Target Lead Time:      ',
      '',
      '4. CONTACT',
      '   Name:   ',
      '   Email:  ',
      '   Phone:  ',
      '',
      '—'.repeat(48),
      'Submitted via Pellexa Acrylic factory quote intake.',
    ].join('\n'),
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
                Factory Quote Intake
              </h3>
              <p className="text-sm text-ink-dim">
                Pre-filled procurement brief opens directly in your email client.
              </p>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-ink-muted">
            {[
              'Pre-filled six-section quote template',
              'Factory-direct response within 3 business days',
              'Tier-aligned commercial brief + sample availability',
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <Check size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 px-5 py-3.5 text-sm font-semibold text-canvas-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-[1.01]"
            >
              <ExternalLink size={16} />
              Open Factory Quote Brief
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-silver-anchor/15 bg-silver-anchor/5 backdrop-blur-sm px-5 py-3.5 text-sm font-medium text-white hover:bg-silver-anchor/10 hover:border-silver-anchor/25 transition-all duration-300"
            >
              <Mail size={16} />
              Email Direct
            </a>
          </div>

          <div className="rounded-lg border border-silver-anchor/10 bg-canvas-overlay/30 px-4 py-3">
            <p className="text-[11px] tracking-widest uppercase text-brand-secondary-400 font-semibold mb-1">
              Procurement Channel
            </p>
            <p className="text-sm font-mono text-white select-all break-all">
              {EMAIL}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function AcrylicSourcingPage() {
  useEffect(() => {
    document.title = PAGE_TITLE
    setMeta('description', PAGE_DESCRIPTION)
    setMeta('og:title', PAGE_TITLE)
    setMeta('og:description', PAGE_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/acrylic`)
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
          <ProductGrid />
          <TechSpecs />
          <QuoteIntake />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
