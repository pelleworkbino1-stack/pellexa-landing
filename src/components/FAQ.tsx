import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What pixel pitch do I need?',
    answer:
      'Pixel pitch depends on your viewing distance. A simple rule of thumb: the pixel pitch number (e.g., P3.91) represents the minimum viewing distance in meters for a clear image. For high-end corporate boardrooms, we recommend P1.2–P2.1. For general indoor halls, hospitals, and churches, P2.6–P3.91 offers the best balance of clarity and value. For outdoor billboards, P4–P10 is ideal. While P3.91 is a popular versatile choice, we provide a full range from P0.9 to P10 depending on your specific architectural requirements. Our team will calculate the optimal resolution based on your site assessment.',
  },
  {
    question: 'How long does the entire project take?',
    answer:
      'Custom manufacturing takes 10–15 days, followed by international shipping and local logistics. Typically, a project is completed within 4–6 weeks from order confirmation to final installation. The physical on-site installation itself usually takes 2–4 days.',
  },
  {
    question: 'Do you offer warranty and maintenance?',
    answer:
      "Yes. Pellexa provides a 3-year manufacturer warranty on parts. We don't just ship boxes; we provide local technical support. We can also provide on-site technicians for the initial setup to ensure everything is calibrated perfectly.",
  },
  {
    question: "What's the lifespan of an LED display?",
    answer:
      'Our displays are built with premium lamps (like Kinglight or Nationstar) rated for 100,000+ hours. This means if you run your screen 24/7, it will last over 11 years. In a typical business environment, these screens often perform beautifully for 15+ years.',
  },
  {
    question: 'Can you handle projects outside Metro Manila?',
    answer:
      "Yes, we specialize in nationwide delivery. From the busy streets of Cebu to the provinces of Samar and Mindanao, we handle the complex inter-island logistics (trucking and ferries) so you don't have to worry about the distance.",
  },
  {
    question: "What's the process for custom projects?",
    answer:
      "Every project at Pellexa is bespoke. We consult with your architects, provide structural drawings for mounting, and customize the screen dimensions to fit your exact wall space. We are not a 'one-size-fits-all' shop; we engineer the solution for you.",
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
