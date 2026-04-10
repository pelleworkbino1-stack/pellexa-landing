import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'

export default function ParentContact() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gold-500/10 mb-6">
            <Mail size={28} className="text-gold-400" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Ready to Start a Project?
          </h2>
          <p className="text-dark-400 text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Whether you need LED displays, or want to explore our upcoming verticals —
            our team is ready to provide a tailored consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:info@pellexa.com"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 px-7 py-3.5 text-sm font-semibold text-dark-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all duration-300 hover:scale-[1.03]"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="/led#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 hover:border-white/25 transition-all duration-300"
            >
              LED Inquiry Form
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
