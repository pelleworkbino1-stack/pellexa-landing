import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * Five-stage partner-production pipeline for `/sourcing` and `/acrylic`.
 * English-only; must live inside `<main dir="ltr" lang="en">`.
 *
 * Stage 05 is a first-class shipping card (CIF-baseline FCL to destination
 * container terminals). Pellexa coordinates; it is not the freight forwarder,
 * customs broker, or importer of record.
 */
const STAGES = [
  {
    label: '01',
    title: 'Technical drawings and specs',
    body: 'Partner-facility drawings, material specs, and certificates submitted for client sign-off before any tool-up.',
  },
  {
    label: '02',
    title: 'Prototype samples',
    body: 'Physical samples produced at the partner facility and shipped for evaluation.',
  },
  {
    label: '03',
    title: 'Pilot batch',
    body: 'When the brief requires it, a limited trial run before mass production is released.',
  },
  {
    label: '04',
    title: 'Mass production, QC and insurance',
    body: 'Full run only after sign-off, under back-to-back contracts (typically 70/30, or 100% advance where the facility requires it). Dual third-party on-site QC (pre-production and packing/pre-shipment). Cargo covered by ALL RISK insurance via a third-party insurer.',
  },
  {
    label: '05',
    title: 'Managed freight — CIF baseline',
    body: 'Full Container Load (FCL) maritime freight coordinated to destination container terminals — including US, European, and Israeli commercial ports (CIF baseline) — with clearance documentation aligned alongside licensed local brokers. Pellexa coordinates this chain; we are not the freight forwarder, customs broker, or importer of record.',
  },
] as const

export default function SourcingProcess() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-3 block">
            Operating Model
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            How Pellexa Executes Partner Production
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {STAGES.map((stage, i) => (
            <motion.div
              key={stage.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.12 + i * 0.08,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-6 h-full"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-secondary-500/15 text-sm font-bold text-brand-secondary-400 mb-4">
                {stage.label}
              </span>
              <h3 className="font-display font-semibold text-lg text-white mb-2.5">
                {stage.title}
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed">{stage.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
