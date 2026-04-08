import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Maximize2, Grid3x3, MonitorSmartphone } from 'lucide-react'

const features = [
  {
    icon: Maximize2,
    title: 'Custom Dimensions',
    description:
      'Any size, any shape. From compact indoor panels to massive outdoor facades — we engineer displays to fit your exact space.',
  },
  {
    icon: Grid3x3,
    title: 'Tailored Pixel Pitch',
    description:
      'From ultra-fine P1.2 for close-range clarity to robust P10 for long-distance impact. We match resolution to your viewing environment.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Flexible Mounting',
    description:
      'Wall-mounted, free-standing, hanging, or curved installations. Our engineering team designs the perfect mounting solution for any venue.',
  },
]

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
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="advantage" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            The Bespoke Advantage
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            We don't sell screens.{' '}
            <span className="text-dark-400">We design systems.</span>
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            Every Pellexa LED display is custom-engineered for your unique space,
            audience, and vision. No off-the-shelf compromises.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              className="group relative rounded-2xl border border-white/5 bg-dark-800/50 backdrop-blur-sm p-8 hover:border-gold-500/20 hover:bg-dark-800/80 transition-all duration-500"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-gold-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/15 transition-colors">
                  <feature.icon size={22} className="text-gold-400" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
