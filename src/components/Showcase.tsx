import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useMarket } from '../hooks/useMarket'

import retailImg from '../assets/images/showcase-retail.png'
import sportsImg from '../assets/images/showcase-sports.png'
import healthcareImg from '../assets/images/showcase-healthcare.png'
import conferenceImg from '../assets/images/showcase-conference.png'
import indoorImg from '../assets/images/solution-indoor.png'
import outdoorImg from '../assets/images/solution-outdoor.png'

const imageMap: Record<string, string> = {
  indoor: indoorImg,
  outdoor: outdoorImg,
  healthcare: healthcareImg,
  retail: retailImg,
  sports: sportsImg,
  conference: conferenceImg,
}

export default function Showcase() {
  const { market } = useMarket()
  const c = market.showcase
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  if (!c.visible || c.projects.length === 0) return null

  return (
    <section className="relative py-24 sm:py-32 bg-dark-900/50">
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

        <div className="grid lg:grid-cols-3 gap-4">
          {c.projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className={`group relative rounded-2xl overflow-hidden ${project.span} aspect-[16/10] ${
                project.featured
                  ? 'ring-1 ring-gold-500/30 shadow-lg shadow-gold-500/10'
                  : ''
              }`}
            >
              <img
                src={imageMap[project.imageKey] ?? indoorImg}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />
              <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {project.featured && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-gold-500/10 via-transparent to-transparent pointer-events-none" />
              )}

              <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 flex items-center gap-2">
                <span className="inline-block rounded-full bg-gold-500/15 backdrop-blur-sm border border-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-400">
                  {project.category}
                </span>
                {project.featured && project.badge && (
                  <span className="inline-block rounded-full bg-gold-500/90 px-3 py-1 text-xs font-bold text-dark-950 shadow-md shadow-gold-500/30">
                    {project.badge}
                  </span>
                )}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{project.specs}</span>
                </div>
                {project.caption && (
                  <span className="inline-block mt-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1 text-[10px] font-medium tracking-wide uppercase text-white/60">
                    {project.caption}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
