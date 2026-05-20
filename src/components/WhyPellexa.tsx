import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Factory, ShieldCheck, Award, Headphones, Zap } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

const icons = [Factory, Globe, Zap, ShieldCheck, Award, Headphones]

export default function WhyPellexa() {
  const { market } = useMarket()
  const c = market.whyPellexa
  const isMatcha = market.id === 'matcha'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(var(--brand-glow), 0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3 block">
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.titleMain}{' '}
            <span className="text-ink-dim">{c.titleFaded}</span>
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.stats.map((stat, i) => {
            const Icon = icons[i] ?? Zap
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={
                  isMatcha
                    ? 'group relative rounded-2xl border border-brand-secondary-500/15 bg-canvas-elevated/90 backdrop-blur-md p-6 shadow-2xl hover:border-brand-500/20 transition-all duration-500'
                    : 'group relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-6 hover:border-brand-500/15 transition-all duration-500'
                }
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center bg-brand-500/10 group-hover:bg-brand-500/15 transition-colors"
                  >
                    <Icon size={20} className="text-brand-400" />
                  </motion.div>
                  <div>
                    <div className="font-display font-bold text-2xl text-white mb-0.5">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-white/80 mb-1">
                      {stat.label}
                    </div>
                    <p className="text-xs text-ink-dim leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
