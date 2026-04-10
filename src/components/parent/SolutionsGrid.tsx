import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, ArrowRight, Clock } from 'lucide-react'

interface Solution {
  icon: typeof Monitor
  title: string
  description: string
  href: string
  available: boolean
  accent: string
  accentBg: string
}

const solutions: Solution[] = [
  {
    icon: Monitor,
    title: 'Pellexa LED',
    description:
      'Custom LED display solutions — indoor, outdoor, rental, and event installations. Factory-direct from Tier-1 manufacturers, with last-mile delivery and professional installation across the Philippines.',
    href: '/led',
    available: true,
    accent: 'text-gold-400',
    accentBg: 'bg-gold-500/10',
  },
]

export default function SolutionsGrid() {
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
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            Our Verticals
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Solutions Portfolio
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            Each vertical is backed by dedicated Tier-1 manufacturing partners,
            optimized supply chains, and local Philippine expertise.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
            >
              {solution.available ? (
                <Link
                  to={solution.href}
                  className="group block relative rounded-2xl border border-white/5 bg-dark-800/30 p-8 hover:border-gold-500/20 transition-all duration-500 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${solution.accentBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <solution.icon size={24} className={solution.accent} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-gold-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-gold-400 group-hover:gap-3 transition-all duration-300">
                    Learn More
                    <ArrowRight size={16} />
                  </div>
                </Link>
              ) : (
                <div className="relative rounded-2xl border border-white/5 bg-dark-800/20 p-8 h-full opacity-60">
                  <div className={`w-12 h-12 rounded-xl ${solution.accentBg} flex items-center justify-center mb-6`}>
                    <solution.icon size={24} className={solution.accent} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-dark-400 leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-dark-500">
                    <Clock size={14} />
                    Coming Soon
                  </div>
                </div>
              )}
            </motion.div>
          ))}

          {/* Placeholder cards for future verticals */}
          {[1, 2].map((n) => (
            <motion.div
              key={`placeholder-${n}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: (solutions.length + n) * 0.12,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="relative rounded-2xl border border-dashed border-white/5 bg-dark-800/10 p-8 flex flex-col items-center justify-center min-h-[280px]"
            >
              <div className="w-12 h-12 rounded-xl bg-white/3 flex items-center justify-center mb-4">
                <div className="w-6 h-6 rounded-full border-2 border-dashed border-dark-500" />
              </div>
              <p className="text-sm text-dark-500 font-medium">New Vertical</p>
              <p className="text-xs text-dark-600 mt-1">Coming Soon</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
