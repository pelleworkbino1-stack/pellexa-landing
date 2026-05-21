import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, Leaf, ArrowRight, Clock } from 'lucide-react'
import { useLang } from '../../context/LangContext'

export default function SolutionsGrid() {
  const { content } = useLang()
  const c = content.solutions
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="solutions" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-3 block">
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link
              to="/led"
              className="group block relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-8 hover:border-brand-500/20 transition-all duration-500 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Monitor size={24} className="text-brand-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-brand-400 transition-colors">
                {c.ledTitle}
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-6">
                {c.ledDescription}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:gap-3 transition-all duration-300">
                {c.learnMore}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] as const }}
          >
            <Link
              to="/food"
              className="group block relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-8 hover:border-brand-500/20 transition-all duration-500 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Leaf size={24} className="text-brand-400" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-brand-400 transition-colors">
                {c.foodTitle}
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-6">
                {c.foodDescription}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:gap-3 transition-all duration-300">
                {c.learnMore}
                <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative rounded-2xl border border-dashed border-silver-anchor/5 bg-canvas-overlay/10 p-8 flex flex-col items-center justify-center min-h-[280px]"
          >
            <div className="w-12 h-12 rounded-xl bg-silver-anchor/[0.03] flex items-center justify-center mb-4">
              <Clock size={20} className="text-silver-trace" />
            </div>
            <p className="text-sm text-silver-trace font-medium">{c.newVertical}</p>
            <p className="text-xs text-silver-trace/70 mt-1">{c.comingSoon}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
