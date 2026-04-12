import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Building2, Sun, Music, ArrowRight } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

import indoorImg from '../assets/images/solution-indoor.png'
import outdoorImg from '../assets/images/solution-outdoor.png'
import rentalImg from '../assets/images/solution-rental.png'

const images = [indoorImg, outdoorImg, rentalImg]
const solutionIcons = [Building2, Sun, Music]
const accents = [
  { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'group-hover:border-blue-500/30' },
  { text: 'text-gold-400', bg: 'bg-gold-500/10', border: 'group-hover:border-gold-500/30' },
  { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'group-hover:border-purple-500/30' },
]

export default function Solutions() {
  const { market } = useMarket()
  const c = market.solutions
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
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {c.items.map((sol, i) => {
            const Icon = solutionIcons[i] ?? Building2
            const accent = accents[i] ?? accents[0]
            const image = images[i] ?? indoorImg
            return (
              <motion.div
                key={sol.tag}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className={`group relative rounded-2xl border border-white/5 bg-dark-800/40 backdrop-blur-sm overflow-hidden ${accent.border} transition-all duration-500`}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={image}
                    alt={sol.tag}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 via-dark-800/40 to-transparent" />
                  <div className={`absolute top-4 left-4 rtl:left-auto rtl:right-4 inline-flex items-center gap-1.5 rounded-full ${accent.bg} backdrop-blur-sm px-3 py-1`}>
                    <Icon size={14} className={accent.text} />
                    <span className={`text-xs font-semibold ${accent.text}`}>{sol.tag}</span>
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
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    {sol.requestQuote}
                    <ArrowRight size={14} className="rtl:rotate-180" />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
