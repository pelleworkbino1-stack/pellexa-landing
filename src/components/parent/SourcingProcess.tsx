import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLang } from '../../context/LangContext'

/**
 * Five-stage partner-production pipeline for `/sourcing` and `/acrylic`.
 *
 * Reads `content.sourcingProcess`, so the section carries its own directional
 * island and renders correctly whichever direction the host page is in.
 *
 * Stage 05 is a first-class shipping card (CIF-baseline FCL to destination
 * container terminals). Pellexa coordinates; it is not the freight forwarder,
 * customs broker, or importer of record. That sentence is compliance-bearing
 * in every locale.
 */
export default function SourcingProcess() {
  const { lang, content } = useLang()
  const p = content.sourcingProcess
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-16 sm:py-20"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 sm:mb-12"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-3 block">
            {p.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
            {p.title}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {p.stages.map((stage, i) => (
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
