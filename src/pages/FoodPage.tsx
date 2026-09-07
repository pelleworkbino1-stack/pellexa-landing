import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Leaf,
  ArrowRight,
  Bean,
  TreePalm,
  CupSoda,
  Droplets,
  Wheat,
  Utensils,
  Container,
  Boxes,
  Info,
} from 'lucide-react'
import ParentNavbar from '../components/parent/ParentNavbar'
import ParentFooter from '../components/parent/ParentFooter'
import FoodContact from '../components/food/FoodContact'
import OperationalDisclaimer from '../components/food/OperationalDisclaimer'
import { LangProvider, useLang } from '../context/LangContext'
import type { FoodCategory, FoodCategoryId } from '../markets/types'

/**
 * Icon assignment per portfolio category. Lives here rather than in the
 * registry because `parent-en.ts` / `parent-he.ts` are pure `.ts` data modules
 * and must not import React components. Keyed by the `FoodCategoryId` union so
 * adding a category to the registry is a compile error until an icon is chosen.
 */
const CATEGORY_ICON: Record<FoodCategoryId, typeof Leaf> = {
  matcha: Leaf,
  tea: CupSoda,
  cacao: Bean,
  coconut: TreePalm,
  'seed-oils': Droplets,
  rice: Wheat,
  pasta: Utensils,
  canned: Container,
  'dry-goods': Boxes,
}

/**
 * Flagship lines that keep the cocoa-toned card treatment. Purely a visual
 * hierarchy now — every card resolves to the same '#contact' anchor since the
 * dedicated product-line routes were consolidated into this hub.
 */
const FEATURED: ReadonlySet<FoodCategoryId> = new Set<FoodCategoryId>([
  'matcha',
  'cacao',
])

function setMeta(property: string, content: string) {
  const el =
    document.querySelector(`meta[property="${property}"]`) ||
    document.querySelector(`meta[name="${property}"]`)
  if (el) el.setAttribute('content', content)
}

const HUB_TITLE = 'Pellexa Agri-Food — Bulk B2B Food Sourcing Portfolio'
const HUB_DESCRIPTION =
  'Bulk B2B sourcing across matcha, industrial tea, cacao derivatives, coconut, seed oils, rice, pasta, canned goods, and general dry food. Direct from authorized facilities at Full Container Load volumes and above, with third-party QC and maritime shipping coordinated under CIF or DDP terms.'

function HubHero() {
  const { content } = useLang()
  const food = content.food

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
            {food.sectionLabel}
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
          {food.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto max-w-2xl text-base sm:text-lg text-ink-muted leading-relaxed mb-8"
        >
          {food.subtitle}
        </motion.p>

        {/* Structural volume gate for Agri-Food. FCL-only applies to this
            vertical; /sourcing uses a dual-MOQ badge (FCL for standard
            industrial lines, dynamic MOQ for specialized fabrication). */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="inline-flex items-center gap-2 rounded-md bg-brand-secondary-500/10 border-2 border-brand-secondary-400/40 px-4 py-2 shadow-[0_0_30px_rgba(var(--brand-secondary-glow),0.18)]"
        >
          <Info size={14} className="text-brand-secondary-300 shrink-0" />
          <span className="text-xs font-bold tracking-widest uppercase text-brand-secondary-300">
            {food.fclBadge}
          </span>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * One portfolio card. All nine resolve to the page-local '#contact' anchor
 * served by `FoodContact` below; the flagship lines differ only in chrome.
 */
function CategoryCard({
  category,
  delay,
  inView,
}: {
  category: FoodCategory
  delay: number
  inView: boolean
}) {
  const Icon = CATEGORY_ICON[category.id]
  const featured = FEATURED.has(category.id)

  const body = (
    <>
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${
          featured
            ? 'bg-brand-secondary-500/15 border border-brand-secondary-400/20'
            : 'bg-brand-500/10'
        }`}
      >
        <Icon
          size={24}
          className={featured ? 'text-brand-secondary-300' : 'text-brand-400'}
        />
      </div>

      <span
        className={`inline-block rounded-full bg-brand-secondary-500/10 border px-2.5 py-0.5 text-[10px] uppercase mb-3 ${
          featured
            ? 'border-brand-secondary-400/20 font-bold tracking-widest text-brand-secondary-300'
            : 'border-brand-secondary-400/15 font-semibold tracking-wider text-brand-secondary-400'
        }`}
      >
        {category.tag}
      </span>

      <h3
        className={`font-display font-semibold text-xl text-white mb-3 transition-colors ${
          featured
            ? 'group-hover:text-brand-secondary-300'
            : 'group-hover:text-brand-400'
        }`}
      >
        {category.title}
      </h3>

      <p className="text-sm text-ink-dim leading-relaxed mb-5">
        {category.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {category.chips.map((chip) => (
          <span
            key={chip}
            className={`inline-block rounded-full bg-silver-anchor/5 border px-2.5 py-0.5 text-[11px] text-ink-muted ${
              featured
                ? 'border-brand-secondary-400/15'
                : 'border-silver-anchor/10'
            }`}
          >
            {chip}
          </span>
        ))}
      </div>

      <div
        className={`flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300 ${
          featured ? 'text-brand-secondary-300' : 'text-brand-400'
        }`}
      >
        {category.cta}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </div>
    </>
  )

  const className = `group block relative rounded-2xl p-8 transition-all duration-500 h-full ${
    featured
      ? 'border border-brand-secondary-400/20 bg-brand-secondary-500/[0.04] hover:border-brand-secondary-400/40 hover:bg-brand-secondary-500/[0.08]'
      : 'border border-silver-anchor/5 bg-canvas-overlay/30 hover:border-brand-500/30'
  }`

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <a href={category.href} className={className}>
        {body}
      </a>
    </motion.div>
  )
}

function HubGrid() {
  const { content } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="solutions" className="relative py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.food.categories.map((category, i) => (
            <CategoryCard
              key={category.id}
              category={category}
              delay={0.12 + i * 0.06}
              inView={inView}
            />
          ))}
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
          <OperationalDisclaimer />
          <FoodContact />
        </main>
        <ParentFooter />
      </div>
    </LangProvider>
  )
}
