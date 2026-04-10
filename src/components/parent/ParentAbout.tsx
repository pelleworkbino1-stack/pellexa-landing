import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Globe, Truck, ShieldCheck, Headphones } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Tier-1 Manufacturing Partners',
    description:
      'We source exclusively from ISO-certified, globally recognized factories with 28+ years of engineering heritage.',
  },
  {
    icon: Truck,
    title: 'End-to-End Logistics',
    description:
      'RORO, inter-island trucking, and ferry coordination across Luzon, Visayas, and Mindanao — with real-time tracking on every shipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description:
      'Full factory QC, pre-shipment inspection, and comprehensive warranties backed by local technician support in the Philippines.',
  },
  {
    icon: Headphones,
    title: 'Local Implementation',
    description:
      'On-ground teams for professional installation, calibration, training, and ongoing maintenance — nationwide.',
  },
]

export default function ParentAbout() {
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
            The Pellexa Advantage
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            The Strategic Bridge Between{' '}
            <span className="text-dark-400">Global Engineering & Local Execution</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            Pellexa is the nexus that connects world-class manufacturing
            capabilities with the unique requirements of the Philippine market.
            We don't just import products — we deliver complete, locally managed solutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => (
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
                <pillar.icon size={24} className="text-gold-400" />
              </div>
              <h3 className="font-display font-semibold text-base text-white mb-2">
                {pillar.title}
              </h3>
              <p className="text-sm text-dark-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
