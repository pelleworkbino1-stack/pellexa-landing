import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  Container,
  Factory,
  FileCheck,
} from 'lucide-react'
import { useLang } from '../../context/LangContext'

const SCOPE_ICONS = [Container, Factory, FileCheck] as const

export default function FoodContact() {
  const { content } = useLang()
  const t = content.food.contact
  const email = content.food.email

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [copiedEmail, setCopiedEmail] = useState(false)

  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(t.mailtoSubject)}`

  const doCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;opacity:0'
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
  }

  const copyAddress = async () => {
    await doCopy(email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2500)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-canvas-elevated/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-14 items-start">
          {/* x offset is 10, not 30: at <=412px a 30px slide-in pushed this
              card 10px past the viewport edge, which showed up as
              scrollWidth exceeding clientWidth until the animation settled.
              The container padding absorbs 10px, so the entrance still reads
              without producing that transient overflow. */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-secondary-400 mb-3 block">
              {t.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              {t.title}{' '}
              <span className="bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h2>
            <p className="text-ink-dim text-base sm:text-lg leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {t.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-400 mt-0.5 shrink-0" />
                  <span className="text-sm text-ink-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-silver-anchor/5 bg-canvas-overlay/40 p-5">
              <p className="text-xs text-ink-muted mb-2.5 font-medium uppercase tracking-wider">
                {t.emailCardLabel}
              </p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
                <span className="text-base text-white font-semibold select-all flex-1 break-all">
                  {email}
                </span>
                <button
                  type="button"
                  onClick={copyAddress}
                  className={`inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg transition-all ${
                    copiedEmail
                      ? 'bg-emerald-500/15 text-emerald-400'
                      : 'text-ink-dim hover:text-brand-400 hover:bg-silver-anchor/5'
                  }`}
                >
                  {copiedEmail ? (
                    <>
                      <Check size={14} /> {t.copied}
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> {t.copy}
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Clamped to 10 for the same reason as the sticky column above. */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/40 backdrop-blur-sm p-6 sm:p-8">
              <h3 className="font-display font-semibold text-xl text-white mb-6">
                {t.scopeTitle}
              </h3>

              <div className="space-y-4 mb-8">
                {t.scopePoints.map((point, i) => {
                  const Icon = SCOPE_ICONS[i % SCOPE_ICONS.length]
                  return (
                    <div
                      key={point.title}
                      className="flex items-start gap-4 rounded-xl border border-silver-anchor/8 bg-canvas-elevated/40 p-4.5"
                    >
                      <div className="mt-0.5 w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-brand-400" />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-base font-semibold text-white mb-1">
                          {point.title}
                        </h4>
                        <p className="text-sm text-ink-dim leading-relaxed">
                          {point.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <a
                href={mailtoHref}
                className="group w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-5 text-lg font-bold text-canvas-base hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-300 hover:scale-[1.01]"
              >
                <ExternalLink size={20} />
                {t.ctaLabel}
              </a>

              <button
                type="button"
                onClick={copyAddress}
                className={`mt-3 w-full inline-flex items-center justify-center gap-2.5 rounded-xl border-2 px-5 py-4 text-base font-semibold transition-all duration-300 ${
                  copiedEmail
                    ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400'
                    : 'border-brand-500/30 bg-brand-500/5 text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/50'
                }`}
              >
                {copiedEmail ? (
                  <>
                    <Check size={18} /> {t.copied}
                  </>
                ) : (
                  <>
                    <Copy size={18} /> {t.copy}
                  </>
                )}
              </button>

              <p className="text-sm text-ink-dim leading-relaxed mt-5">
                {t.fallbackNote}
              </p>
              <p className="text-sm font-mono text-white select-all break-all mt-2">
                {email}
              </p>
              <p className="text-sm text-ink-muted leading-relaxed mt-4">
                {t.qualificationNote}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
