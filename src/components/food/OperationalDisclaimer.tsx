import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Check } from 'lucide-react'
import { useLang } from '../../context/LangContext'

/**
 * Operating model and operational-scope boundary for the Agri-Food vertical.
 *
 * Two stacked blocks. The first publishes the five-stage B2B execution model —
 * FCL floor, staged verification pipeline, legal and commercial framework,
 * third-party QC and insurance, and CIF/DDP shipping coordination. The second
 * is the hardened scope disclaimer: Pellexa is a sourcing, QC, and supply-chain
 * management partner, never the freight forwarder, customs broker, or importer
 * of record. Stage 05 and the disclaimer deliberately restate that boundary
 * together, because CIF/DDP terms are the point at which a reader is most
 * likely to assume we carry the import.
 *
 * Content is read from `content.food.operatingModel` and
 * `content.food.disclaimer`, the single source of truth in `parent-en.ts` /
 * `parent-he.ts`. `/food` wraps its tree in `LangProvider`, so `useLang()`
 * resolves and the panel renders RTL correctly in Hebrew via the logical
 * `ms-*` / `text-*` utilities.
 */
export default function OperationalDisclaimer() {
  const { content } = useLang()
  const om = content.food.operatingModel
  const d = content.food.disclaimer
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-3 block">
            {om.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-4">
            {om.title}
          </h2>
          <p className="text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
            {om.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 sm:mb-12">
          {om.stages.map((stage, i) => (
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

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="rounded-2xl border border-brand-secondary-400/20 bg-canvas-elevated/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 shrink-0">
              <ShieldCheck size={20} className="text-brand-400" />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300">
              {d.title}
            </span>
          </div>

          <p className="text-sm sm:text-base text-ink-body leading-relaxed max-w-3xl mb-6">
            {d.body}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {d.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <Check
                  size={14}
                  strokeWidth={3}
                  className="mt-1 text-brand-secondary-400 shrink-0"
                />
                <span className="text-sm text-ink-dim leading-relaxed">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
