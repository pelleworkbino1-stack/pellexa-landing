import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

function FAQItem({ faq, isOpen, onToggle, isMatcha }: {
  faq: { question: string; answer: string }
  isOpen: boolean
  onToggle: () => void
  isMatcha?: boolean
}) {
  return (
    <div
      className={`border-b last:border-b-0 ${
        isMatcha ? 'border-brand-secondary-400/15' : 'border-silver-anchor/5'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left rtl:text-right group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-base text-white transition-colors group-hover:text-brand-400">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-ink-dim transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-400' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-ink-dim leading-relaxed pe-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const { market } = useMarket()
  const c = market.faq
  const isMatcha = market.id === 'matcha'
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3 block">
            {c.sectionLabel}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed">
            {c.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={
            isMatcha
              ? 'rounded-2xl border border-brand-secondary-500/15 bg-canvas-elevated/90 backdrop-blur-md shadow-2xl px-6 sm:px-8'
              : 'rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 px-6 sm:px-8'
          }
        >
          {c.items.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              isMatcha={isMatcha}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
