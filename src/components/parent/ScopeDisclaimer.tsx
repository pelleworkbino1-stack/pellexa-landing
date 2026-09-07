import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ShieldCheck, Check } from 'lucide-react'
import { useLang } from '../../context/LangContext'

/**
 * Operational-scope boundary for industrial sourcing verticals (`/sourcing`,
 * `/acrylic`). Reads `content.scopeDisclaimer` so Hebrew compliance copy can
 * sit in a directional island inside an English `dir="ltr"` page body.
 */
export default function ScopeDisclaimer() {
  const { lang, content } = useLang()
  const d = content.scopeDisclaimer
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="relative py-12 sm:py-16"
      dir={lang === 'he' ? 'rtl' : 'ltr'}
      lang={lang}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
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
