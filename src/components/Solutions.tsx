import { useRef, type ComponentType } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Building2,
  Sun,
  Music,
  ArrowRight,
  Leaf,
  Sprout,
  FlaskConical,
  Package,
  type LucideProps,
} from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

import indoorImg from '../assets/images/solution-indoor.png'
import outdoorImg from '../assets/images/solution-outdoor.png'
import rentalImg from '../assets/images/solution-rental.png'
import matchaSupplyMesh from '../assets/images/matcha-supply-mesh.png'

const ledImages = [indoorImg, outdoorImg, rentalImg]
const ledIcons = [Building2, Sun, Music]

const iconRegistry: Record<string, ComponentType<LucideProps>> = {
  building: Building2,
  sun: Sun,
  music: Music,
  leaf: Leaf,
  sprout: Sprout,
  flask: FlaskConical,
  package: Package,
}

/**
 * Card accent applied uniformly across every solution card.
 *
 * Phase 3 Target 2 collapsed the legacy three-color `accentRegistry`
 * (blue / gold / purple) into one cohesive brand token system. The card
 * resolves its branch identity dynamically through the `.theme-*` scope at
 * the document root — Electric Cyan on /led, Sky Blue on /, Matcha on /food.
 * Visual differentiation between sibling cards is now carried strictly by
 * the existing screen-installation imagery and Lucide structural icons.
 *
 * Phase 3 Target 3 introduced the `agriAccent` sibling to enforce the 80/20
 * matcha/cocoa hierarchy: tag pill (a category badge per the directive) goes
 * to cocoa, banner glow + hover border stay on matcha (action / luminous
 * depth). Banner backdrop never blends matcha and cocoa — separation kept.
 */
const ledAccent = {
  text: 'text-brand-400',
  bg: 'bg-brand-500/10',
  border: 'group-hover:border-brand-500/30',
  bannerFrom: 'from-brand-500/15',
  bannerVia: 'via-brand-500/5',
  bannerTo: 'to-transparent',
} as const

const agriAccent = {
  text: 'text-brand-secondary-400',
  bg: 'bg-brand-secondary-500/10',
  border: 'group-hover:border-brand-500/30',
  bannerFrom: 'from-brand-500/15',
  bannerVia: 'via-brand-500/5',
  bannerTo: 'to-transparent',
} as const

export default function Solutions() {
  const { market } = useMarket()
  const c = market.solutions
  const isMatcha = market.id === 'matcha'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="solutions"
      className={`relative py-24 sm:py-32 overflow-hidden ${
        isMatcha ? 'bg-canvas-elevated/30' : 'bg-canvas-elevated/50'
      }`}
    >
      {isMatcha && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.14] mix-blend-screen"
          style={{
            backgroundImage: `url(${matchaSupplyMesh})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      {isMatcha && (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand-500/10 blur-[130px] mix-blend-screen"
          style={{ animation: 'matcha-breathe 12s ease-in-out infinite' }}
        />
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span
            className={`text-xs font-semibold tracking-widest uppercase mb-3 block ${
              isMatcha ? 'text-brand-secondary-400' : 'text-brand-500'
            }`}
          >
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {c.items.map((sol, i) => {
            const Icon: ComponentType<LucideProps> = sol.icon
              ? (iconRegistry[sol.icon] ?? ledIcons[i] ?? Building2)
              : (ledIcons[i] ?? Building2)
            const accent = isMatcha ? agriAccent : ledAccent
            const image = sol.image ?? ledImages[i]
            const hasImage = Boolean(image) && !sol.icon

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
                className={`group relative overflow-hidden transition-all duration-500 ${accent.border} ${
                  isMatcha
                    ? 'rounded-2xl border border-brand-secondary-500/15 bg-canvas-elevated/90 backdrop-blur-md shadow-2xl'
                    : 'rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/40 backdrop-blur-sm'
                }`}
              >
                {hasImage ? (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={image}
                      alt={sol.tag}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas-overlay via-canvas-overlay/40 to-transparent" />
                    <div
                      className={`absolute top-4 left-4 rtl:left-auto rtl:right-4 inline-flex items-center gap-1.5 rounded-full ${accent.bg} backdrop-blur-sm px-3 py-1`}
                    >
                      <Icon size={14} className={accent.text} />
                      <span className={`text-xs font-semibold ${accent.text}`}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`relative h-52 overflow-hidden bg-gradient-to-br ${accent.bannerFrom} ${accent.bannerVia} ${accent.bannerTo} flex items-center justify-center`}
                  >
                    <div
                      className="absolute inset-0 opacity-40"
                      style={{
                        backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04) 0%, transparent 50%),
                                          radial-gradient(circle at 70% 70%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
                      }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                      }}
                    />
                    <div
                      className={`relative w-20 h-20 rounded-2xl ${accent.bg} flex items-center justify-center backdrop-blur-sm`}
                    >
                      <Icon size={36} className={accent.text} />
                    </div>
                    <div
                      className={`absolute top-4 left-4 rtl:left-auto rtl:right-4 inline-flex items-center gap-1.5 rounded-full ${accent.bg} backdrop-blur-sm px-3 py-1`}
                    >
                      <span className={`text-xs font-semibold ${accent.text}`}>
                        {sol.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-white mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-sm text-ink-dim leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {sol.highlights.map((h) => (
                      <span
                        key={h}
                        className="inline-block rounded-full bg-silver-anchor/5 border border-silver-anchor/5 px-3 py-1 text-xs text-ink-muted"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {sol.link ? (
                    <Link
                      to={sol.link}
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {sol.requestQuote}
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    </Link>
                  ) : (
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${accent.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    >
                      {sol.requestQuote}
                      <ArrowRight size={14} className="rtl:rotate-180" />
                    </a>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
