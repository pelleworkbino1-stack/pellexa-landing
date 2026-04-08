import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What pixel pitch do I need?',
    answer:
      'Pixel pitch depends on your viewing distance. For close-range indoor displays (boardrooms, retail), we recommend P1.2–P2.5. For medium-distance viewing (lobbies, events), P3–P4.8 works well. For outdoor billboards or stadium screens viewed from far away, P6–P10 is ideal. Our team will assess your space and recommend the perfect pitch.',
  },
  {
    question: 'How long does installation take?',
    answer:
      'Installation typically takes 1–3 days for standard indoor setups and 3–7 days for large outdoor installations. The full timeline from order to completion is usually 4–8 weeks, depending on the project scope, custom engineering requirements, and shipping logistics.',
  },
  {
    question: 'Do you offer warranty and maintenance?',
    answer:
      'Yes. All Pellexa LED displays come with a standard 2-year manufacturer warranty covering parts and labor. We also offer extended maintenance packages with 24/7 support, scheduled calibration visits, and priority part replacement — all serviced by our local Philippine team.',
  },
  {
    question: "What's the lifespan of an LED display?",
    answer:
      'Our LED displays are rated for 100,000+ hours of operation, which translates to over 11 years of continuous 24/7 use. With proper maintenance and calibration, many displays perform excellently well beyond this rating.',
  },
  {
    question: 'Can you handle projects outside Metro Manila?',
    answer:
      'Absolutely. We serve clients across the entire Philippines — from Luzon to Visayas and Mindanao. Our logistics team manages end-to-end shipping and our installation crews travel nationwide. We\'ve delivered projects in Samar, Cebu, Davao, and many more locations.',
  },
  {
    question: "What's the lead time from order to installation?",
    answer:
      'Standard lead time is 4–6 weeks for most configurations. Custom-engineered solutions (curved displays, unusual dimensions, special mounting) may take 6–8 weeks. Rental panels for events can often be arranged within 1–2 weeks depending on availability.',
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
