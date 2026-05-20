import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Leaf, Clock, ArrowRight } from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import { LangProvider } from '../context/LangContext'

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const HUB_TITLE = 'Pellexa Agri-Food — Sourcing Portfolio'
const HUB_DESCRIPTION =
  'Tiered global procurement for matcha, specialty ingredients, and high-consistency agri-food raw materials. Direct from certified facilities to enterprise markets.'

function HubHero() {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(var(--brand-glow), 0.06) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/15 px-4 py-1.5 mb-8 backdrop-blur-sm"
        >
          <Leaf size={14} className="text-brand-400" />
          <span className="text-xs font-medium tracking-wide text-brand-secondary-400 uppercase">
            Pellexa Agri-Food
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight text-white mb-6"
        >
          Sourcing Portfolio{' '}
          <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
            Hub
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed"
        >
          Pellexa's Agri-Food division operates dedicated procurement product
          lines across matcha and specialty raw materials. Select a product line
          to review tier portfolios, certifications, and supply protocols.
        </motion.p>
      </div>
    </section>
  )
}

function HubGrid() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="solutions" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
          >
            <Link
              to="/food/matcha"
              className="group block relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-8 hover:border-brand-500/30 transition-all duration-500 h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Leaf size={24} className="text-brand-400" />
              </div>
              <span className="inline-block rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/15 px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase text-brand-secondary-400 mb-3">
                Active Product Line
              </span>
              <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-brand-400 transition-colors">
                Matcha Sourcing
              </h3>
              <p className="text-sm text-ink-dim leading-relaxed mb-6">
                Tiered procurement models for ceremonial, beverage, and
                industrial grades. Certified Organic & High-Consistency
                Non-Organic lines.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:gap-3 transition-all duration-300">
                Enter Matcha Portfolio
                <ArrowRight size={16} className="rtl:rotate-180" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.24,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative rounded-2xl border border-dashed border-silver-anchor/5 bg-canvas-overlay/10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-xl bg-silver-anchor/[0.03] flex items-center justify-center mb-4">
              <Clock size={20} className="text-silver-trace" />
            </div>
            <p className="text-sm text-silver-trace font-medium">
              Specialty Ingredients
            </p>
            <p className="text-xs text-silver-trace/70 mt-1">Coming Soon</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: 0.36,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative rounded-2xl border border-dashed border-silver-anchor/5 bg-canvas-overlay/10 p-8 flex flex-col items-center justify-center text-center min-h-[300px]"
          >
            <div className="w-12 h-12 rounded-xl bg-silver-anchor/[0.03] flex items-center justify-center mb-4">
              <Clock size={20} className="text-silver-trace" />
            </div>
            <p className="text-sm text-silver-trace font-medium">
              Specialty Ingredients
            </p>
            <p className="text-xs text-silver-trace/70 mt-1">Coming Soon</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function FoodPage() {
  useEffect(() => {
    document.title = HUB_TITLE
    setMeta('description', HUB_DESCRIPTION)
    setMeta('og:title', HUB_TITLE)
    setMeta('og:description', HUB_DESCRIPTION)
    setMeta('og:url', `${window.location.origin}/food`)
    setMeta('twitter:title', HUB_TITLE)
    setMeta('twitter:description', HUB_DESCRIPTION)
    window.scrollTo(0, 0)
  }, [])

  return (
    <LangProvider>
      <div className="min-h-screen bg-canvas-base text-white antialiased">
        <ParentNavbar />
        <main>
          <HubHero />
          <HubGrid />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
