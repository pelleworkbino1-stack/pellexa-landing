import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import heroBg from '../assets/images/hero-bg.png'

function GlowOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%)',
          animation: 'glow-drift 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
          animation: 'glow-drift 15s ease-in-out 3s infinite',
        }}
      />
    </div>
  )
}

const ease = [0.22, 1, 0.36, 1] as const

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3 + i * 0.15,
      ease,
    },
  }),
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with Ken Burns + parallax */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={heroBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              animation: 'ken-burns 25s ease-in-out infinite alternate',
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-dark-950/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-transparent to-dark-950" />

        <GlowOrbs />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Gradient vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,3,5,0.85)_100%)]" />

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center"
      >
        {/* Badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full bg-gold-500/8 border border-gold-500/15 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <Sparkles size={14} className="text-gold-400" />
          <span className="text-xs font-medium tracking-wide text-gold-400 uppercase">
            Factory-Direct LED Solutions
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6 drop-shadow-lg"
        >
          Next-Generation{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 bg-clip-text text-transparent">
              Visual Experiences
            </span>
            <span className="absolute -inset-x-2 -inset-y-1 bg-gold-500/5 rounded-lg -skew-y-1" />
          </span>
          <br />
          <span className="text-dark-300">Tailored for Your Vision</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed mb-10 drop-shadow-md"
        >
          Custom LED display solutions for any space — corporate, retail, outdoor,
          residential, and beyond. Factory-direct, professionally installed, and locally managed in the Philippines.
        </motion.p>

        {/* CTA Group */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-dark-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 hover:scale-[1.03]"
          >
            Request a Technical Consultation
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            Explore Solutions
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-12 max-w-xl mx-auto"
        >
          {[
            { value: '100+', label: 'Projects Delivered' },
            { value: 'P0.9–P10', label: 'Pixel Pitch Range' },
            { value: '24/7', label: 'Local PH Support' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-xl sm:text-2xl text-white drop-shadow-sm">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-white/40">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
