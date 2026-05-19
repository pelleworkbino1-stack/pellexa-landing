import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Leaf } from 'lucide-react'
import heroBg from '../assets/images/hero-bg.png'
import matchaHeroBg from '../assets/images/matcha-hero-bg.png'
import { useMarket } from '../hooks/useMarket'

function GlowOrbs({ variant = 'led' }: { variant?: 'led' | 'matcha' }) {
  if (variant === 'matcha') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-accent-500/10 blur-[130px] mix-blend-screen"
          style={{ animation: 'matcha-breathe 10s ease-in-out infinite' }}
        />
        <div
          className="absolute -bottom-56 -left-40 w-[620px] h-[620px] rounded-full bg-accent-400/10 blur-[130px] mix-blend-screen"
          style={{ animation: 'matcha-breathe 14s ease-in-out 3s infinite' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-300/5 blur-[100px] mix-blend-screen" />
      </div>
    )
  }
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
  const { market } = useMarket()
  const c = market.hero
  const isMatcha = market.id === 'matcha'

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
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        isMatcha ? 'bg-dark-950' : ''
      }`}
    >
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0"
      >
        {isMatcha ? (
          <>
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={matchaHeroBg}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-90"
                style={{
                  animation: 'ken-burns 28s ease-in-out infinite alternate',
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-dark-950/75 via-dark-950/45 to-dark-950" />
            <div className="absolute inset-0 bg-gradient-to-tr from-dark-950/80 via-transparent to-dark-950/30" />
          </>
        ) : (
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
        )}

        {!isMatcha && <div className="absolute inset-0 bg-dark-950/70" />}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950/60 via-transparent to-dark-950" />

        <GlowOrbs variant={isMatcha ? 'matcha' : 'led'} />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isMatcha
              ? `linear-gradient(rgba(212,160,107,0.05) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(212,160,107,0.05) 1px, transparent 1px)`
              : `linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </motion.div>

      <div
        className="absolute inset-0"
        style={{
          background: isMatcha
            ? 'radial-gradient(ellipse at center, transparent 18%, rgba(5,14,10,0.88) 100%)'
            : 'radial-gradient(ellipse at center, transparent 20%, rgba(3,3,5,0.85) 100%)',
        }}
      />

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center"
      >
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm ${
            isMatcha
              ? 'bg-dark-900/60 border border-gold-500/20'
              : 'bg-gold-500/8 border border-gold-500/15'
          }`}
        >
          {isMatcha ? (
            <Leaf size={14} className="text-accent-400" />
          ) : (
            <Sparkles size={14} className="text-gold-400" />
          )}
          <span className="text-xs font-medium tracking-wide uppercase text-gold-400">
            {c.badge}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6 drop-shadow-lg"
        >
          {c.headlineTop}{' '}
          <span className="relative inline-block">
            <span
              className={`relative z-10 bg-clip-text text-transparent ${
                isMatcha
                  ? 'bg-gradient-to-r from-white via-accent-300 to-accent-400'
                  : 'bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500'
              }`}
              style={
                isMatcha
                  ? {
                      textShadow:
                        '0 0 40px rgba(74,222,128,0.35), 0 2px 24px rgba(0,0,0,0.6)',
                    }
                  : undefined
              }
            >
              {c.headlineHighlight}
            </span>
            <span
              className={`absolute -inset-x-2 -inset-y-1 rounded-lg -skew-y-1 ${
                isMatcha ? 'bg-accent-500/10' : 'bg-gold-500/5'
              }`}
            />
          </span>
          <br />
          <span className={isMatcha ? 'text-dark-200' : 'text-dark-300'}>
            {c.headlineBottom}
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className={`mx-auto max-w-2xl text-base sm:text-lg leading-relaxed mb-10 drop-shadow-md ${
            isMatcha ? 'text-dark-200' : 'text-white/60'
          }`}
        >
          {c.sub}
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className={`group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-dark-950 shadow-lg transition-all duration-300 hover:scale-[1.03] ${
              isMatcha
                ? 'bg-gradient-to-r from-accent-400 to-accent-500 shadow-accent-500/25 hover:shadow-accent-500/45'
                : 'bg-gradient-to-r from-gold-500 to-gold-400 shadow-gold-500/20 hover:shadow-gold-500/40'
            }`}
          >
            {c.cta1}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
            />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
          >
            {c.cta2}
          </a>
        </motion.div>

        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-6 sm:gap-12 max-w-xl mx-auto"
        >
          {c.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-xl sm:text-2xl text-white drop-shadow-sm">
                {stat.value}
              </div>
              <div
                className={`mt-1 text-xs ${isMatcha ? 'text-dark-300' : 'text-white/40'}`}
              >
                {stat.label}
              </div>
              </div>
            ))}
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-950 to-transparent" />
    </section>
  )
}
