import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What pixel pitch do I need?',
    answer:
      'A straightforward rule of thumb: the pixel pitch number represents the minimum comfortable viewing distance in meters. For example, a P3.91 display delivers a crisp image from approximately 4 meters and beyond. For executive boardrooms and control rooms, we recommend P1.2–P2.1. For conference halls, houses of worship, and medical facilities, P2.6–P3.91 provides an optimal balance of resolution and value. For outdoor installations and billboards, P4–P10 is ideal. While P3.91 is a popular versatile choice, we offer a full range from P0.9 to P10, selected based on your specific architectural requirements and site assessment.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Typically 4 to 6 weeks from technical consultation to final installation, including precision manufacturing and inter-island logistics.',
  },
  {
    question: 'Do you offer warranty?',
    answer:
      'Yes, we provide a 2-year comprehensive warranty on all LED systems, supported by our local PH technical team.',
  },
  {
    question: "What's the lifespan?",
    answer:
      'Our premium LED systems are engineered for a lifespan of 100,000 hours (approx. 10 years of continuous use).',
  },
  {
    question: 'Can you deliver to hard-to-reach locations?',
    answer:
      'Absolutely. We specialize in last-mile delivery across Luzon, Visayas, and Mindanao, managing all RORO and ferry coordination.',
  },
  {
    question: "What's the process for custom projects?",
    answer:
      "Every engagement with Pellexa is bespoke. As your Project Lead, we collaborate with your architects and engineers, provide structural drawings for mounting, and customize screen dimensions to fit your precise specifications. We handle the Vision, Engineering, and Implementation — delivering managed solutions, not off-the-shelf products.",
  },
]

function FAQItem({ faq, isOpen, onToggle }: {
  faq: typeof faqs[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-white/5 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-medium text-base text-white group-hover:text-gold-400 transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-dark-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-gold-400' : ''
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
            <p className="pb-5 text-sm text-dark-400 leading-relaxed pr-8">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
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
          <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Common Questions
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our LED display solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-white/5 bg-dark-800/30 px-6 sm:px-8"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
