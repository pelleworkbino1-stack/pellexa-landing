import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Sun, Music, ArrowRight } from 'lucide-react'

import indoorImg from '../assets/images/solution-indoor.png'
import outdoorImg from '../assets/images/solution-outdoor.png'
import rentalImg from '../assets/images/solution-rental.png'

const solutions = [
  {
    icon: Building2,
    image: indoorImg,
    tag: 'Indoor Excellence',
    title: 'Crystal-Clear Indoor Displays',
    description:
      'Ultra-fine pixel pitch screens for corporate boardrooms, churches, retail showrooms, private residences, and command centers.',
    highlights: ['Corporate', 'Churches', 'Retail', 'Homes'],
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    borderHover: 'group-hover:border-blue-500/30',
  },
  {
    icon: Sun,
    image: outdoorImg,
    tag: 'Outdoor Power',
    title: 'High-Brightness Outdoor Solutions',
    description:
      'Weather-resistant, high-nit LED displays engineered for direct sunlight visibility with IP65+ protection.',
    highlights: ['Billboards', 'Stadiums', 'Facades'],
    accent: 'text-gold-400',
    accentBg: 'bg-gold-500/10',
    borderHover: 'group-hover:border-gold-500/30',
  },
  {
    icon: Music,
    image: rentalImg,
    tag: 'Rental & Events',
    title: 'Stage-Ready Event Displays',
    description:
      'High-refresh-rate panels with tool-free assembly for concerts, conferences, and live events.',
    highlights: ['Concert Stages', 'Conferences', 'Live Shows'],
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    borderHover: 'group-hover:border-purple-500/30',
  },
]

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-dark-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            Solution Categories
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Built for Every Environment
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            From controlled indoor spaces to harsh outdoor conditions, our LED systems
            are purpose-built for performance.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.tag}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className={`group relative rounded-2xl border border-white/5 bg-dark-800/40 backdrop-blur-sm overflow-hidden ${sol.borderHover} transition-all duration-500`}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={sol.image}
                  alt={sol.tag}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />
                <div className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full ${sol.accentBg} backdrop-blur-sm px-3 py-1`}>
                  <sol.icon size={14} className={sol.accent} />
                  <span className={`text-xs font-semibold ${sol.accent}`}>{sol.tag}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display font-semibold text-lg text-white mb-2">
                  {sol.title}
                </h3>
                <p className="text-sm text-dark-400 leading-relaxed mb-5">
                  {sol.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {sol.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-block rounded-full bg-white/5 border border-white/5 px-3 py-1 text-xs text-dark-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-sm font-medium ${sol.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                >
                  Request Quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
