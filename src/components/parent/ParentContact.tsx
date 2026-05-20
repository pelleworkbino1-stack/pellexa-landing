import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useLang } from '../../context/LangContext'

export default function ParentContact() {
  const { content } = useLang()
  const c = content.contact
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-500/10 mb-6">
            <Mail size={28} className="text-brand-400" />
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-ink-dim text-base sm:text-lg leading-relaxed mb-6 max-w-xl mx-auto">
            {c.subtitle}
          </p>

          {/* Prominent email address display */}
          <a
            href={`mailto:${c.email}`}
            className="group inline-flex items-center gap-3 rounded-2xl border border-brand-500/25 bg-brand-500/5 px-6 py-4 mb-8 hover:border-brand-500/50 hover:bg-brand-500/10 transition-all duration-300"
          >
            <Mail size={18} className="text-brand-400 shrink-0" />
            <span className="font-mono text-base sm:text-lg font-medium text-brand-300 group-hover:text-brand-300 transition-colors">
              {c.email}
            </span>
          </a>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${c.email}`}
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
              href="/led#contact"
              className="inline-flex items-center gap-2 rounded-full border border-silver-anchor/15 bg-silver-anchor/5 backdrop-blur-sm px-7 py-3.5 text-sm font-medium text-white hover:bg-silver-anchor/10 hover:border-silver-anchor/25 transition-all duration-300"
            >
              {c.cta2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
