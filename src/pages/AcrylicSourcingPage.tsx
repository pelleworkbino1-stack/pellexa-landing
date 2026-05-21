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
 * Pellexa Global Acrylic Supply Infrastructure — dedicated page (/acrylic).
 *
 * Cascades from the parent core theme profile (.theme-parent → Sky Blue +
 * Bronze runway). The page leans heavily on the silver-anchor industrial
 * chrome to project end-to-end macro-supplier authority:
 *   - Silver-anchor hairline borders on every product card
 *   - Bronze structural eyebrows + spec labels
 *   - Sky Blue reserved for primary action surfaces (CTA, focus, hover)
 *
 * Positioning contract: Pellexa is framed as a comprehensive macro-supplier
 * with zero artificial ceilings. Every technical spec is rendered as an
 * open baseline that drives the visitor into a consultation rather than a
 * catalog click. Layout / motion / token system are unchanged — only the
 * data-text strings on this page were rewritten for the macro-supplier pivot.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero (macro-supplier identity + verbatim scope statement)
 *   3. Product grid: 4 capability surfaces — bespoke fabrications, never a catalog
 *   4. Capability spec table — every parameter rendered as an open baseline
 *   5. Consultation intake panel (id="contact", mailto handoff)
 *   6. ParentFooter
 */

const PAGE_TITLE =
  'Pellexa Global Acrylic Supply Infrastructure — Custom Manufacturing'
const PAGE_DESCRIPTION =
  'Pellexa supplies all things acrylic across the board — custom retail boxes, TCG collectible armor, large-format architectural fixtures, and industrial components. Any layout, any form factor, manufactured directly to order.'
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
    tag: 'Custom Retail & TCG',
    title: 'Custom Acrylic Boxes',
    description:
      'Bespoke acrylic enclosures fabricated to any client dimension or aesthetic brief — premium retail packaging, branded gift architecture, and a deep specialization in TCG & Pokémon ETB cases, booster box protectors, graded card displays, and luxury collector formats. Zero catalog constraints.',
    highlights: ['Any Form Factor', 'TCG / ETB Engineered', 'Graded Slab Ready'],
  },
  {
    icon: ShieldCheck,
    tag: 'Display & Gallery',
    title: 'Protective Display Architecture',
    description:
      'High-clarity protective frameworks engineered for museums, private galleries, collector networks, brand showrooms, and any premium display footprint requiring tamper resistance, optical fidelity, and bespoke geometry. Built to the asset, not to a stock SKU.',
    highlights: ['UV-Filtered', 'Anti-Static', 'Tamper-Resistant'],
  },
  {
    icon: Gem,
    tag: 'Luxury Retail & Brand',
    title: 'Luxury Retail Enclosures',
    description:
      'Premium retail display fixtures engineered around the merchandise — jewelry, watches, fragrance, hospitality fixtures, flagship store moments, and any high-margin brand environment that demands a fully tailored fabrication rather than an off-the-shelf cabinet.',
    highlights: ['Mirror-Polish', 'LED-Integrated', 'Modular at Any Scale'],
  },
  {
    icon: Container,
    tag: 'Architectural & Industrial',
    title: 'Architectural & Industrial Components',
    description:
      'Large-format architectural fixtures, custom partitioning, signage substrates, lab and warehouse infrastructure, and comprehensive industrial acrylic components engineered to your load dynamics, regulatory environment, and operational cycle. Any form, any scale, any sector.',
    highlights: ['Large-Format', 'Load-Engineered', 'Sector-Agnostic'],
  },
] as const

const techSpecs = [
  {
    label: 'Material Thickness',
    value:
      'Fully Variable | Engineered to Load Dynamics (Up to 30mm+ and multi-layer)',
  },
  {
    label: 'Sheet Format',
    value: 'Completely Unrestrictive | CNC / Laser Cut to Custom Dimensions',
  },
  {
    label: 'Optical Clarity',
    value: '92% Light Transmission (Premium-Grade Virgin PMMA)',
  },
  { label: 'Tolerance', value: 'Up to ±0.1mm Micro-Precision Engineering' },
  {
    label: 'Finishes',
    value:
      'Full Spectrum (Diamond-Polish, Matte-Frosted, Custom Tinted, Mirror-Backing)',
  },
  {
    label: 'Lead Time',
    value: 'Mapped to Project Brief — Rush Tracks Available on Consultation',
  },
  { label: 'MOQ Tiers', value: 'Adaptive Runs — Formulated Around Project Footprint' },
  {
    label: 'Compliance',
    value: 'REACH / RoHS / FDA + Sector-Specific Regulatory Tracks (on consultation)',
  },
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
            Pellexa Macro Acrylic Supplier
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          Global Acrylic Supply{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Infrastructure
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          We specialize in all things acrylic across the board—from custom
          retail boxes and TCG collectible armor to large-format architectural
          fixtures and comprehensive industrial components. Any layout, any
          form factor, manufactured directly to order.
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
            Capabilities Spectrum
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            All-Domain Acrylic Fabrication
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
            Engineering Capability Baselines
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight">
            Open Parameters — Not a Catalog
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
            Every parameter above is an open baseline, not a ceiling. Material
            grade, thickness, finish, dimensional envelope, run volume, and
            lead time are formulated around your project's load dynamics,
            regulatory environment, and brand brief during a direct
            consultation with our acrylic engineering desk.
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
    'Pellexa Acrylic — Project Consultation Brief',
  )
  const body = encodeURIComponent(
    [
      'PELLEXA ACRYLIC — PROJECT CONSULTATION BRIEF',
      '='.repeat(48),
      '',
      '1. ORGANIZATION',
      '   Company:           ',
      '   Industry / Sector: ',
      '   Target Market:     ',
      '',
      '2. CAPABILITY SURFACE (select any that fit)',
      '   [ ] Custom Retail / TCG / Collectibles',
      '   [ ] Display & Gallery Architecture',
      '   [ ] Luxury Retail & Brand Fixtures',
      '   [ ] Architectural & Industrial Components',
      '   [ ] Other (describe below)',
      '',
      '3. PROJECT PROFILE',
      '   Dimensions / Envelope (W × H × D):',
      '   Material Thickness / Load Dynamics:',
      '   Finish & Aesthetic Goals:           ',
      '   Projected Run Footprint:            ',
      '   Target Lead Time:                   ',
      '   Regulatory / Sector Constraints:    ',
      '',
      '4. CONTACT',
      '   Name:   ',
      '   Email:  ',
      '   Phone:  ',
      '',
      '—'.repeat(48),
      'Submitted via Pellexa Acrylic project consultation intake.',
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
                Acrylic Project Consultation
              </h3>
              <p className="text-sm text-ink-dim">
                Open the consultation brief in your email client — our
                engineering desk maps your physical, dimensional, and aesthetic
                goals to a custom production track.
              </p>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-ink-muted">
            {[
              'Pre-filled consultation brief covering organization, capability surface, and project profile',
              'Engineering desk response within 3 business days',
              'Custom production track formulated to your project footprint — no catalog ceilings',
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
              Open Consultation Brief
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
              Consultation Channel
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
