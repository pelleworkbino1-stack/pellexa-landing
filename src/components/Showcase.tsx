import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import retailImg from '../assets/images/showcase-retail.png'
import sportsImg from '../assets/images/showcase-sports.png'
import healthcareImg from '../assets/images/showcase-healthcare.png'
import conferenceImg from '../assets/images/showcase-conference.png'
import indoorImg from '../assets/images/solution-indoor.png'
import outdoorImg from '../assets/images/solution-outdoor.png'

const projects = [
  {
    image: indoorImg,
    category: 'Indoor',
    title: 'Corporate Boardroom Display',
    location: 'Makati City, Philippines',
    specs: '4.8m x 2.7m — P1.5',
    span: 'lg:col-span-2',
  },
  {
    image: outdoorImg,
    category: 'Outdoor',
    title: 'Building Facade Billboard',
    location: 'BGC, Taguig',
    specs: '12m x 8m — P6',
    span: '',
  },
  {
    image: retailImg,
    category: 'Indoor',
    title: 'Retail Digital Signage',
    location: 'SM Mall of Asia',
    specs: '3m x 1.2m — P2.5',
    span: '',
  },
  {
    image: sportsImg,
    category: 'Outdoor',
    title: 'Stadium LED Scoreboard',
    location: 'Philippine Arena, Bulacan',
    specs: '20m x 6m — P8',
    span: 'lg:col-span-2',
  },
  {
    image: healthcareImg,
    category: 'Indoor',
    title: 'Medical Center LED Display',
    location: 'Private Medical Center, Eastern Samar',
    specs: '5m x 3m — Optimized Pixel Pitch',
    span: '',
  },
  {
    image: conferenceImg,
    category: 'Events',
    title: 'Tech Conference Stage',
    location: 'SMX Convention Center, Pasay',
    specs: '8m x 4m — P3.91',
    span: 'lg:col-span-2',
  },
]

export default function Showcase() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

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
            Our Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            Projects That Speak
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            From intimate boardrooms to massive stadiums, explore LED installations
            we've delivered across the Philippines.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className={`group relative rounded-2xl overflow-hidden ${project.span} aspect-[16/10]`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Default overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-block rounded-full bg-gold-500/15 backdrop-blur-sm border border-gold-500/20 px-3 py-1 text-xs font-semibold text-gold-400">
                  {project.category}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display font-semibold text-lg text-white mb-1">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-white/50">
                  <span>{project.location}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{project.specs}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
