import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Truck, ShieldCheck, Headphones } from 'lucide-react'
import { useLang } from '../../context/LangContext'

const icons = [Globe, Truck, ShieldCheck, Headphones]

export default function ParentAbout() {
  const { content } = useLang()
  const c = content.about
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-dark-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.titleMain}{' '}
            <span className="text-dark-400">{c.titleFaded}</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {c.pillars.map((pillar, i) => {
            const Icon = icons[i] ?? Globe
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group text-center rounded-2xl border border-white/5 bg-dark-800/30 p-6 hover:border-gold-500/15 transition-all duration-500"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gold-500/10 mb-5 group-hover:bg-gold-500/15 transition-colors">
                  <Icon size={24} className="text-gold-400" />
                </div>
                <h3 className="font-display font-semibold text-base text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
