import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Maximize2, Grid3x3, MonitorSmartphone } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

const icons = [Maximize2, Grid3x3, MonitorSmartphone]

const ease = [0.22, 1, 0.36, 1] as const

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease,
    },
  }),
}

export default function Advantage() {
  const { market } = useMarket()
  const c = market.advantage
  const isMatcha = market.id === 'matcha'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="advantage" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
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

        <div className="grid md:grid-cols-3 gap-6">
          {c.features.map((feature, i) => {
            const Icon = icons[i] ?? Maximize2
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={
                  isMatcha
                    ? 'group relative rounded-2xl border border-brand-secondary-500/15 bg-canvas-elevated/90 backdrop-blur-md p-8 shadow-2xl hover:border-brand-500/20 transition-all duration-500'
                    : 'group relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/50 backdrop-blur-sm p-8 hover:border-brand-500/20 hover:bg-canvas-overlay/80 transition-all duration-500'
                }
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-brand-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-brand-500/10 group-hover:bg-brand-500/15 transition-colors">
                    <Icon size={22} className="text-brand-400" />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-ink-dim leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
