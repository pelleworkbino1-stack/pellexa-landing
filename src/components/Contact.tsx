import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  MessageCircle,
} from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

const EMAIL = 'led.sales@pellexa.com'

interface Inquiry {
  name: string
  email: string
  company: string
  country: string
  projectType: string
  screenSize: string
  specs: string
}

const init: Inquiry = {
  name: '',
  email: '',
  company: '',
  country: '',
  projectType: '',
  screenSize: '',
  specs: '',
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        size={18}
        className="absolute end-4 top-1/2 -translate-y-1/2 text-ink-dim pointer-events-none"
      />
    </div>
  )
}

function Label({
  children,
  hint,
  required,
}: {
  children: React.ReactNode
  hint?: string
  required?: boolean
}) {
  return (
    <div className="mb-2.5">
      <label className="block text-base font-medium text-ink-primary">
        {children}
        {required && <span className="text-brand-400 ms-1">*</span>}
      </label>
      {hint && <p className="text-sm text-silver-trace mt-1 leading-snug">{hint}</p>}
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border-2 border-silver-anchor/10 bg-canvas-elevated/60 px-5 py-4 text-lg text-white placeholder:text-silver-trace focus:outline-none focus:border-brand-500/40 focus:ring-2 focus:ring-brand-500/20 transition-all'
const selectClass = `${inputClass} pe-11 appearance-none cursor-pointer`

export default function Contact() {
  const { market } = useMarket()
  const t = market.contact
  const f = t.form

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [d, setD] = useState<Inquiry>(init)
  const [status, setStatus] = useState<Status>('idle')
  const [copied, setCopied] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const set = <K extends keyof Inquiry>(key: K, v: Inquiry[K]) =>
    setD((prev) => ({ ...prev, [key]: v }))

  /** Plain-text rendering of the inquiry, used by the mail-client fallback. */
  const inquiryText = [
    `${f.nameLabel}: ${d.name || '—'}`,
    `${f.emailLabel}: ${d.email || '—'}`,
    `${f.companyLabel}: ${d.company || '—'}`,
    `${f.countryLabel}: ${d.country || '—'}`,
    `${f.projectTypeLabel}: ${d.projectType || '—'}`,
    `${f.screenSizeLabel}: ${d.screenSize || '—'}`,
    '',
    `${f.specsLabel}:`,
    d.specs || '—',
  ].join('\n')

  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    f.title,
  )}&body=${encodeURIComponent(inquiryText)}`

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

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: d.name,
          email: d.email,
          company: d.company,
          location: d.country,
          projectType: d.projectType,
          screenSize: d.screenSize,
          details: d.specs,
          market: market.id,
          timezone: market.timezone,
          locale: market.locale,
        }),
      })
      const payload = (await res.json().catch(() => null)) as { success?: boolean } | null
      if (!res.ok || !payload?.success) throw new Error('submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-canvas-elevated/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-14 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: market.dir === 'rtl' ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-500 mb-3 block">
              {t.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              {t.title}{' '}
              <span className="bg-gradient-to-r from-brand-400 to-brand-300 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h2>
            <p className="text-ink-dim text-base sm:text-lg leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {t.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-ink-muted">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-silver-anchor/5 bg-canvas-overlay/40 p-5">
              <p className="text-xs text-silver-trace mb-2.5 font-medium uppercase tracking-wider">
                {t.emailCardLabel}
              </p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 shrink-0" />
                <span className="text-base text-white font-semibold select-all flex-1 break-all">
                  {EMAIL}
                </span>
                <button
                  onClick={async () => {
                    await doCopy(EMAIL)
                    setCopiedEmail(true)
                    setTimeout(() => setCopiedEmail(false), 2500)
                  }}
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

            {t.whatsapp && (
              <div className="rounded-xl border border-silver-anchor/5 bg-canvas-overlay/40 p-5 mt-4">
                <p className="text-xs text-silver-trace mb-2.5 font-medium uppercase tracking-wider">
                  {t.whatsapp.label}
                </p>
                <div className="flex items-center gap-3">
                  <MessageCircle size={18} className="text-emerald-500 shrink-0" />
                  <span className="text-base text-white font-semibold flex-1">
                    {t.whatsapp.displayNumber}
                  </span>
                  <a
                    href={`https://wa.me/${t.whatsapp.number}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg text-emerald-400 hover:bg-emerald-500/10 transition-all"
                  >
                    <ExternalLink size={14} /> {t.whatsapp.chatText}
                  </a>
                </div>
              </div>
            )}

            <div className="rounded-xl border border-silver-anchor/10 bg-canvas-overlay/30 p-5 mt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-silver-anchor mb-2">
                {t.disclaimer.title}
              </p>
              <p className="text-sm text-ink-dim leading-relaxed">{t.disclaimer.body}</p>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: market.dir === 'rtl' ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/40 backdrop-blur-sm p-6 sm:p-8">
              {status === 'success' ? (
                <div className="text-center py-6">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl text-white mb-3">
                    {f.successTitle}
                  </h3>
                  <p className="text-base text-ink-dim leading-relaxed mb-7 max-w-md mx-auto">
                    {f.successBody}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setD(init)
                      setStatus('idle')
                    }}
                    className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-500/30 bg-brand-500/5 px-6 py-3.5 text-base font-semibold text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/50 transition-all"
                  >
                    {f.sendAnother}
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} noValidate={false}>
                  <div className="flex items-center gap-3 mb-1.5">
                    <Mail size={22} className="text-brand-400" />
                    <h3 className="font-display font-semibold text-xl text-white">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-base text-ink-dim mb-2">{f.subtitle}</p>
                  <p className="text-sm text-silver-trace mb-7 italic">{f.requiredNote}</p>

                  <div className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label required>{f.nameLabel}</Label>
                        <input
                          type="text"
                          required
                          value={d.name}
                          onChange={(e) => set('name', e.target.value)}
                          placeholder={f.namePlaceholder}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label required>{f.emailLabel}</Label>
                        <input
                          type="email"
                          required
                          value={d.email}
                          onChange={(e) => set('email', e.target.value)}
                          placeholder={f.emailPlaceholder}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <Label>{f.companyLabel}</Label>
                      <input
                        type="text"
                        value={d.company}
                        onChange={(e) => set('company', e.target.value)}
                        placeholder={f.companyPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label hint={f.countryHint}>{f.countryLabel}</Label>
                      <input
                        type="text"
                        value={d.country}
                        onChange={(e) => set('country', e.target.value)}
                        placeholder={f.countryPlaceholder}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label hint={f.projectTypeHint}>{f.projectTypeLabel}</Label>
                      <SelectWrap>
                        <select
                          value={d.projectType}
                          onChange={(e) => set('projectType', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">—</option>
                          {f.projectTypeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>
                              {opt.label}
                            </option>
                          ))}
                        </select>
                      </SelectWrap>
                    </div>

                    <div>
                      <Label hint={f.screenSizeHint}>{f.screenSizeLabel}</Label>
                      <input
                        type="text"
                        value={d.screenSize}
                        onChange={(e) => set('screenSize', e.target.value)}
                        placeholder={f.screenSizePlaceholder}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label hint={f.specsHint}>{f.specsLabel}</Label>
                      <textarea
                        value={d.specs}
                        onChange={(e) => set('specs', e.target.value)}
                        rows={5}
                        placeholder={f.specsPlaceholder}
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  {status === 'error' && (
                    <div className="mt-7 rounded-xl border-2 border-amber-500/25 bg-amber-500/5 p-5">
                      <p className="text-sm text-ink-muted leading-relaxed mb-4">
                        {f.errorGeneric}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={async () => {
                            await doCopy(inquiryText)
                            setCopied(true)
                            setTimeout(() => setCopied(false), 2500)
                          }}
                          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-semibold transition-all ${
                            copied
                              ? 'bg-emerald-500/20 border-2 border-emerald-500/30 text-emerald-400'
                              : 'border-2 border-silver-anchor/15 bg-silver-anchor/5 text-white hover:bg-silver-anchor/10'
                          }`}
                        >
                          {copied ? (
                            <>
                              <Check size={17} /> {t.copied}
                            </>
                          ) : (
                            <>
                              <Copy size={17} /> {f.errorCopy}
                            </>
                          )}
                        </button>
                        <a
                          href={mailtoHref}
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border-2 border-brand-500/30 bg-brand-500/5 px-5 py-3.5 text-base font-semibold text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/50 transition-all"
                        >
                          <ExternalLink size={17} /> {f.errorMailto}
                        </a>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group mt-8 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 px-6 py-5 text-lg font-bold text-canvas-base hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-300 hover:scale-[1.01] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Mail size={20} />
                    {status === 'submitting' ? f.submittingBtn : f.submitBtn}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
