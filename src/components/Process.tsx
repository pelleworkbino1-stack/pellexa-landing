import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Cpu, Truck, Wrench } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

const stepIcons = [MessageSquare, Cpu, Truck, Wrench]

export default function Process() {
  const { market } = useMarket()
  const c = market.process
  const isMatcha = market.id === 'matcha'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {isMatcha && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `linear-gradient(rgba(var(--brand-secondary-glow), 0.08) 1px, transparent 1px),
                linear-gradient(90deg, rgba(var(--brand-secondary-glow), 0.08) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 left-1/4 h-[550px] w-[550px] rounded-full bg-brand-400/10 blur-[130px] mix-blend-screen"
            style={{ animation: 'matcha-breathe 11s ease-in-out 2s infinite' }}
          />
        </>
      )}
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
            {c.title}
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            className={`hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent to-transparent ${
              isMatcha ? 'via-brand-secondary-400/40' : 'via-silver-trace'
            }`}
          />

          {c.steps.map((step, i) => {
            const Icon = stepIcons[i] ?? MessageSquare
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="relative text-center group"
              >
                <div
                  className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-colors duration-500 ${
                    isMatcha
                      ? 'bg-canvas-base/40 border border-brand-secondary-500/15 backdrop-blur-lg shadow-2xl group-hover:border-brand-500/20'
                      : 'bg-canvas-overlay border border-silver-anchor/5 group-hover:border-brand-500/20'
                  }`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-brand-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon size={24} className="relative z-10 text-brand-400" />
                </div>

                <div className="text-xs font-mono text-brand-500/50 mb-2">
                  {step.number}
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-dim leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
