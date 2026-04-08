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
    question: 'How long does a project take from order to installation?',
    answer:
      'Total delivery and installation typically take 4 to 6 weeks. This includes precision manufacturing in our Tier-1 partner facilities, international freight, and secure inter-island logistics coordinated by our local team. The physical on-site installation itself is completed within 2–4 days.',
  },
  {
    question: 'Do you offer warranty and maintenance?',
    answer:
      'Yes. Pellexa provides a 2-year comprehensive warranty backed by local technician support. Our PH-based team handles calibration, troubleshooting, and on-site service — ensuring your display performs at peak quality long after installation.',
  },
  {
    question: "What's the lifespan of an LED display?",
    answer:
      'Our displays are engineered with premium-grade LED lamps (such as Kinglight or Nationstar) rated for 100,000+ hours of continuous operation. In practical terms, this translates to over 11 years of 24/7 use. In a typical commercial environment, these displays perform reliably for 15+ years.',
  },
  {
    question: 'Can you deliver to hard-to-reach locations?',
    answer:
      "This is one of our core specializations. We manage the entire RORO and inter-island ferry logistics chain across Luzon, Visayas, and Mindanao. Our recent deployment to a Private Medical Center in Eastern Samar is a testament to this capability — we coordinated trucking, ferry transfers, and final-mile delivery to ensure the installation was completed on schedule, regardless of location.",
  },
  {
    question: "What's the process for custom projects?",
    answer:
      "Every engagement with Pellexa is bespoke. We collaborate with your architects and engineers, provide structural drawings for mounting, and customize screen dimensions to fit your precise specifications. We are the strategic bridge between world-class engineering and local Philippine implementation — not a one-size-fits-all provider.",
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
