import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Factory, ShieldCheck, Award, Headphones, Zap } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    value: '28+',
    label: 'Years of LED Engineering',
    description: 'Decades of manufacturing expertise behind every display',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Countries Served',
    description: 'Trusted by businesses across the globe',
  },
  {
    icon: Zap,
    value: '5',
    label: 'Production Facilities',
    description: 'State-of-the-art factories ensuring quality at scale',
  },
  {
    icon: ShieldCheck,
    value: 'ISO 9001',
    label: 'Certified Quality',
    description: 'International standards in every step of production',
  },
  {
    icon: Award,
    value: '10,000+',
    label: 'Projects Completed',
    description: 'A proven track record of successful installations',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Local PH Support',
    description: 'On-ground technicians across the Philippines',
  },
]

export default function WhyPellexa() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)',
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
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            Why Pellexa
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Factory-Direct.{' '}
            <span className="text-dark-400">Zero Middlemen.</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            We own the supply chain from component sourcing to final installation,
            delivering premium LED solutions at competitive prices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="group relative rounded-2xl border border-white/5 bg-dark-800/30 p-6 hover:border-gold-500/15 transition-all duration-500"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-11 h-11 rounded-xl bg-gold-500/10 flex items-center justify-center group-hover:bg-gold-500/15 transition-colors">
                  <stat.icon size={20} className="text-gold-400" />
                </div>
                <div>
                  <div className="font-display font-bold text-2xl text-white mb-0.5">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-white/80 mb-1">
                    {stat.label}
                  </div>
                  <p className="text-xs text-dark-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
