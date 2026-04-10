import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease },
  }),
}

export default function ParentHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dark-950" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,3,5,0.9)_100%)]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)',
              animation: 'glow-drift 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
              animation: 'glow-drift 15s ease-in-out 3s infinite',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500/8 border border-gold-500/15 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="text-xs font-medium tracking-wide text-gold-400 uppercase">
            Strategic Partner for the Philippines
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
        >
          Your Bridge to{' '}
          <span className="bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
            World-Class
          </span>
          <br />
          <span className="text-dark-300">Technology Solutions</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed mb-10"
        >
          Pellexa connects Tier-1 global manufacturers with the Philippine market.
          From precision LED displays to emerging technology verticals — we handle
          sourcing, logistics, and local implementation so you don't have to.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#solutions"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-dark-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Explore Our Solutions
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
