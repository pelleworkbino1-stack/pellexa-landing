import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Package,
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
import MailtoFallback from '../components/parent/MailtoFallback'
import { LangProvider } from '../context/LangContext'

/**
 * Pellexa Acrylic Sourcing — dedicated page (`/acrylic`).
 *
 * Cascades from the parent core theme profile (.theme-parent → Sky Blue +
 * Bronze runway). Positioning: Pellexa is a B2B sourcing partner. Acrylic is
 * produced at audited specialized fabrication partners, then verified through
 * staged sampling and dual third-party QC. Pellexa does not own fabrication
 * plants and is not the freight forwarder, customs broker, or importer of record.
 *
 * Structure:
 *   1. ParentNavbar
 *   2. Hero (partner-sourced identity + dual-MOQ badge)
 *   3. Product grid: 4 capability surfaces quoted against partner capability
 *   4. Capability spec table — partner baselines, confirmed at consultation
 *   5. Five-stage partner production pipeline
 *   6. Operational-scope disclaimer
 *   7. Consultation intake panel (id="contact", mailto + copy fallback)
 *   8. ParentFooter
 */

const PAGE_TITLE = 'Pellexa Acrylic Sourcing — Partner Fabrication & QC'
const PAGE_DESCRIPTION =
  'Custom acrylic sourced from audited specialized fabrication partners — retail boxes, TCG collectible protection, display architecture, and industrial components. Project-based dynamic MOQ as a specialized fabrication line; FCL-scale minimums for standard industrial lines. Staged sampling, dual third-party QC, back-to-back contracts.'
const EMAIL = 'pelle@pellexa.com'
const MOQ_BADGE = 'FCL Minimums — Dynamic MOQ for Specialized Lines'

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
      'Partner-fabricated enclosures to client drawings — premium retail packaging, branded gift architecture, and a deep specialization in TCG & Pokémon ETB cases, booster box protectors, graded card displays, and luxury collector formats. Quoted against partner capability, not a fixed catalog.',
    highlights: ['Any Form Factor', 'TCG / ETB', 'Partner-Fabricated'],
  },
  {
    icon: ShieldCheck,
    tag: 'Display & Gallery',
    title: 'Protective Display Architecture',
    description:
      'High-clarity protective frameworks sourced for museums, private galleries, collector networks, brand showrooms, and premium display footprints requiring tamper resistance, optical fidelity, and bespoke geometry. UV-filter, anti-static, and tamper-resistant options per partner capability.',
    highlights: ['UV-Filtered', 'Anti-Static', 'Tamper-Resistant'],
  },
  {
    icon: Gem,
    tag: 'Luxury Retail & Brand',
    title: 'Luxury Retail Enclosures',
    description:
      'Premium retail display fixtures specified around the merchandise — jewelry, watches, fragrance, hospitality fixtures, and flagship store moments — produced at partner facilities rather than as an off-the-shelf cabinet.',
    highlights: ['Mirror-Polish', 'LED-Integrated', 'Modular'],
  },
  {
    icon: Container,
    tag: 'Architectural & Industrial',
    title: 'Architectural & Industrial Components',
    description:
      'Large-format architectural fixtures, custom partitioning, signage substrates, lab and warehouse infrastructure, and industrial acrylic components engineered at partner facilities to your load dynamics, regulatory environment, and operational cycle.',
    highlights: ['Large-Format', 'Load-Engineered', 'Sector-Agnostic'],
  },
] as const

const techSpecs = [
  {
    label: 'Material Thickness',
    value:
      'Variable — specified to load dynamics (including 30mm+ / multi-layer where the partner facility supports it)',
  },
  {
    label: 'Sheet Format',
    value: 'CNC / laser cut to custom dimensions at the partner facility',
  },
  {
    label: 'Optical Clarity',
    value:
      'Up to 92% light transmission (premium-grade virgin PMMA, grade confirmed per lot)',
  },
  {
    label: 'Tolerance',
    value:
      'Down to ±0.1mm where the partner process allows — confirmed against drawings',
  },
  {
    label: 'Finishes',
    value:
      'Diamond-polish, matte-frosted, custom tint, mirror-backing — subject to partner capability',
  },
  {
    label: 'Lead Time',
    value:
      'Mapped to project brief and partner load — rush tracks only if the facility can commit',
  },
  {
    label: 'MOQ Tiers',
    value:
      'Project-based dynamic MOQ (specialized/custom fabrication line). Standard industrial lines remain FCL-scale.',
  },
  {
    label: 'Compliance',
    value:
      'REACH / RoHS / FDA and sector tracks where the partner holds valid certification — verified in the document pack, not assumed',
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
          <ShieldCheck size={14} className="text-brand-secondary-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            Sourced From Audited Fabrication Partners
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          Acrylic Sourcing{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Partner Fabrication
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-8"
        >
          We source custom acrylic across retail, TCG, display, architectural,
          and industrial briefs from audited specialized manufacturing partners.
          Any layout and form factor is quoted against partner capability —
          Pellexa structures the brief, verification pipeline, and QC. We do not
          own fabrication plants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary-500/10 border-2 border-brand-secondary-400/40 px-4 py-2 shadow-[0_0_30px_rgba(var(--brand-secondary-glow),0.18)]"
        >
          <Info size={14} className="text-brand-secondary-300 shrink-0" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary-300">
            {MOQ_BADGE}
          </span>
        </motion.div>
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
            Partner-Fabricated Acrylic, Quoted to Brief
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
            Partner Parameters — Confirmed at Consultation
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
            Every parameter above is a partner-capability baseline, not a
            Pellexa-owned plant spec. Material, thickness, finish, envelope, run
            volume, and lead time are confirmed during consultation against the
            selected facility, then locked through drawings, samples, and dual
            third-party QC.
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
      'Submitted via Pellexa Acrylic sourcing consultation.',
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
                Open the consultation brief in your email client — we map your
                physical, dimensional, and aesthetic goals onto a partner
                production track.
              </p>
            </div>
          </div>

          <ul className="space-y-2 mb-6 text-sm text-ink-muted">
            {[
              'Pre-filled consultation brief covering organization, capability surface, and project profile',
              'Sourcing desk response within 3 business days',
              'Partner production track scoped to your project footprint — no catalog SKU assumption',
            ].map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <Check size={16} className="text-brand-400 mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <MailtoFallback
            email={EMAIL}
            mailtoHref={`mailto:${EMAIL}?subject=${subject}&body=${body}`}
            ctaLabel="Open Consultation Brief"
            secondaryHref={`mailto:${EMAIL}`}
            secondaryLabel="Email Direct"
          />
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
        <main dir="ltr" lang="en">
          <Hero />
          <ProductGrid />
          <TechSpecs />
          <SourcingProcess />
          <ScopeDisclaimer />
          <QuoteIntake />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
