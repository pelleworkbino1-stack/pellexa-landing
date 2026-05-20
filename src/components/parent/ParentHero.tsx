import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LangContext'

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
  const { content } = useLang()
  const c = content.hero

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-canvas-base" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--brand-glow), 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--brand-glow), 0.03) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(3,3,5,0.9)_100%)]" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(var(--brand-glow), 0.08) 0%, transparent 70%)',
              animation: 'glow-drift 12s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(var(--brand-glow), 0.06) 0%, transparent 70%)',
              animation: 'glow-drift 15s ease-in-out 3s infinite',
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 pt-24 pb-16 text-center">
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 rounded-full bg-brand-500/8 border border-brand-500/15 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <span className="text-xs font-medium tracking-wide text-brand-400 uppercase">
            {c.badge}
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-white mb-6"
        >
          {c.headlineTop}{' '}
          <span className="bg-gradient-to-r from-brand-400 via-brand-300 to-brand-500 bg-clip-text text-transparent">
            {c.headlineHighlight}
          </span>
          <br />
          <span className="text-ink-muted">{c.headlineBottom}</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-10"
        >
          {c.subtitle}
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
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-3.5 text-sm font-semibold text-canvas-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-[1.03]"
          >
            {c.cta1}
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
            />
            <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-silver-anchor/15 bg-silver-anchor/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-silver-anchor/10 hover:border-silver-anchor/25 transition-all duration-300"
          >
            {c.cta2}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas-base to-transparent" />
    </section>
  )
}
