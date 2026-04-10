import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Factory, ShieldCheck, Award, Headphones, Zap } from 'lucide-react'

const stats = [
  {
    icon: Factory,
    value: '28+',
    label: 'Years of Manufacturing Excellence',
    description: 'Our solutions are powered by Tier-1 engineering infrastructure with nearly three decades of heritage.',
  },
  {
    icon: Globe,
    value: '150+',
    label: 'Globally Proven Technology',
    description: 'Our display systems are trusted by organizations in over 150 countries.',
  },
  {
    icon: Zap,
    value: '100+',
    label: 'Premium Installations',
    description: 'Delivering high-standard visual solutions custom-engineered and tailored for the Philippine market.',
  },
  {
    icon: ShieldCheck,
    value: 'ISO 9001',
    label: 'Certified Quality',
    description: 'International standards integrated into every stage of our managed solutions pipeline.',
  },
  {
    icon: Award,
    value: 'Last-Mile',
    label: 'Nationwide PH Delivery',
    description: 'We own the entire logistics chain — RORO, inter-island trucking, and ferry coordination across Luzon, Visayas, and Mindanao.',
  },
  {
    icon: Headphones,
    value: '24/7',
    label: 'Local PH Support',
    description: 'Dedicated on-ground technicians across the Philippines for installation, calibration, and priority maintenance.',
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
            Vision. Engineering.{' '}
            <span className="text-dark-400">Implementation.</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            Pellexa is your Strategic Partner for premium LED solutions — we lead every project
            from custom engineering through managed logistics to professional local installation.
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
