import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Mail,
  CheckCircle,
  Copy,
  Check,
  ExternalLink,
  ChevronDown,
  ArrowLeft,
  Camera,
  MessageCircle,
} from 'lucide-react'
import { useMarket } from '../hooks/useMarket'

const EMAIL = 'led.sales@pellexa.com'

interface D {
  environment: string
  environmentCustom: string
  primaryUse: string
  primaryUseCustom: string
  viewingDistance: string
  width: string
  height: string
  measurementType: string
  shape: string
  shapeCustom: string
  mounting: string
  mountingCustom: string
  maintenanceAccess: string
  reinforced: string
  transparent: boolean
  flexible: boolean
  ultraBright: boolean
  featureNote: string
  contentLive: boolean
  contentStatic: boolean
  content4k: boolean
  contentNote: string
  deliveryLocation: string
  targetDate: string
  contactName: string
  contactEmail: string
  contactPhone: string
  notes: string
}

const init: D = {
  environment: '',
  environmentCustom: '',
  primaryUse: '',
  primaryUseCustom: '',
  viewingDistance: '',
  width: '',
  height: '',
  measurementType: '',
  shape: '',
  shapeCustom: '',
  mounting: '',
  mountingCustom: '',
  maintenanceAccess: '',
  reinforced: '',
  transparent: false,
  flexible: false,
  ultraBright: false,
  featureNote: '',
  contentLive: false,
  contentStatic: false,
  content4k: false,
  contentNote: '',
  deliveryLocation: '',
  targetDate: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  notes: '',
}

function val(selected: string, custom: string) {
  if (selected === 'Other' && custom) return custom
  return selected || '—'
}

function buildEmail(d: D): string {
  const l: string[] = []
  l.push('LED DISPLAY INQUIRY')
  l.push('='.repeat(40))
  l.push('')

  if (d.contactName || d.contactEmail || d.contactPhone) {
    l.push('CONTACT INFORMATION')
    if (d.contactName) l.push(`  Name:  ${d.contactName}`)
    if (d.contactEmail) l.push(`  Email: ${d.contactEmail}`)
    if (d.contactPhone) l.push(`  Phone: ${d.contactPhone}`)
    l.push('')
  }

  l.push('1. PROJECT ENVIRONMENT & PURPOSE')
  l.push(`   Installation:     ${val(d.environment, d.environmentCustom)}`)
  l.push(`   Primary Use:      ${val(d.primaryUse, d.primaryUseCustom)}`)
  l.push(`   Viewing Distance: ${d.viewingDistance ? `${d.viewingDistance} meters` : '—'}`)
  l.push('')

  l.push('2. DIMENSIONS & SHAPE')
  const size =
    d.width && d.height
      ? `${d.width}m (W) × ${d.height}m (H)`
      : d.width || d.height
        ? `${d.width || '?'}m × ${d.height || '?'}m`
        : '—'
  l.push(`   Desired Size:     ${size}`)
  l.push(`   Measurement:      ${d.measurementType || '—'}`)
  l.push(`   Shape:            ${val(d.shape, d.shapeCustom)}`)
  l.push('')

  l.push('3. INSTALLATION & MAINTENANCE')
  l.push(`   Mounting:            ${val(d.mounting, d.mountingCustom)}`)
  l.push(`   Maintenance Access:  ${d.maintenanceAccess || '—'}`)
  l.push(`   Structure Reinforced: ${d.reinforced || '—'}`)
  l.push('')

  const features = [
    d.transparent && 'Transparent screen',
    d.flexible && 'Flexible LED',
    d.ultraBright && 'Ultra-high brightness',
    d.featureNote && d.featureNote,
  ].filter(Boolean)
  const content = [
    d.contentLive && 'Live video / camera feeds',
    d.contentStatic && 'Static images / slideshows',
    d.content4k && '4K / high-resolution content',
    d.contentNote && d.contentNote,
  ].filter(Boolean)

  l.push('4. SPECIAL REQUIREMENTS')
  l.push(`   Custom Features: ${features.length ? features.join(', ') : 'None specified'}`)
  l.push(`   Content Type:    ${content.length ? content.join(', ') : 'Not specified yet'}`)
  l.push('')

  l.push('5. LOGISTICS')
  l.push(`   Delivery Location: ${d.deliveryLocation || '—'}`)
  l.push(`   Target Date:       ${d.targetDate || '—'}`)

  if (d.notes) {
    l.push('')
    l.push('ADDITIONAL NOTES')
    l.push(`   ${d.notes}`)
  }

  l.push('')
  l.push('—'.repeat(40))
  l.push('Attached: site photos and/or architectural drawings (if available).')

  return l.join('\n')
}

function OptionCard({
  label,
  desc,
  selected,
  onClick,
}: {
  label: string
  desc: string
  selected: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 min-w-[140px] text-left rtl:text-right px-5 py-4.5 rounded-xl border-2 transition-all ${
        selected
          ? 'bg-gold-500/10 border-gold-500/40 shadow-lg shadow-gold-500/5'
          : 'bg-dark-900/50 border-white/8 hover:border-white/20'
      }`}
    >
      <span className={`block text-base font-semibold ${selected ? 'text-gold-400' : 'text-dark-100'}`}>
        {label}
      </span>
      <span className="block text-sm text-dark-400 mt-1 leading-snug">{desc}</span>
    </button>
  )
}

function BigCheckbox({
  checked,
  onChange,
  label,
  desc,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
  desc: string
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full flex items-start gap-4 p-4.5 rounded-xl border-2 text-left rtl:text-right transition-all ${
        checked
          ? 'bg-gold-500/8 border-gold-500/30'
          : 'bg-dark-900/40 border-white/8 hover:border-white/15'
      }`}
    >
      <div
        className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
          checked
            ? 'bg-gold-500/25 border-gold-500/60'
            : 'border-white/20 bg-dark-900/60'
        }`}
      >
        {checked && <Check size={14} className="text-gold-400" />}
      </div>
      <div className="min-w-0">
        <span className={`block text-base font-medium ${checked ? 'text-gold-300' : 'text-dark-100'}`}>
          {label}
        </span>
        <span className="block text-sm text-dark-400 mt-1 leading-snug">{desc}</span>
      </div>
    </button>
  )
}

function Section({
  num,
  title,
  desc,
  children,
}: {
  num: number
  title: string
  desc: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-10 first:mt-0">
      <div className="flex items-center gap-3.5 mb-2">
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gold-500/15 text-base font-bold text-gold-500 shrink-0">
          {num}
        </span>
        <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-dark-400 mb-5 ms-[3.15rem]">{desc}</p>
      <div className="space-y-5 ms-0 sm:ms-[3.15rem]">{children}</div>
    </div>
  )
}

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-2.5">
      <label className="block text-base font-medium text-dark-100">{children}</label>
      {hint && <p className="text-sm text-dark-500 mt-1 leading-snug">{hint}</p>}
    </div>
  )
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown
        size={18}
        className="absolute end-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none"
      />
    </div>
  )
}

const inputClass =
  'w-full rounded-xl border-2 border-white/10 bg-dark-900/60 px-5 py-4 text-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/20 transition-all'
const selectClass = `${inputClass} pe-11 appearance-none cursor-pointer`

export default function Contact() {
  const { market } = useMarket()
  const t = market.contact
  const f = t.form

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [d, setD] = useState<D>(init)
  const [preview, setPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const set = <K extends keyof D>(key: K, v: D[K]) =>
    setD((prev) => ({ ...prev, [key]: v }))

  const emailBody = buildEmail(d)
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent('LED Display Inquiry')}&body=${encodeURIComponent(emailBody)}`

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

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-14 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: market.dir === 'rtl' ? 30 : -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
              {t.sectionLabel}
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              {t.title}{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                {t.titleHighlight}
              </span>
            </h2>
            <p className="text-dark-400 text-base sm:text-lg leading-relaxed mb-8">
              {t.subtitle}
            </p>

            <div className="space-y-4 mb-8">
              {t.benefits.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-dark-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/5 bg-dark-800/40 p-5">
              <p className="text-xs text-dark-500 mb-2.5 font-medium uppercase tracking-wider">
                {t.emailCardLabel}
              </p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
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
                      : 'text-dark-400 hover:text-gold-400 hover:bg-white/5'
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
              <div className="rounded-xl border border-white/5 bg-dark-800/40 p-5 mt-4">
                <p className="text-xs text-dark-500 mb-2.5 font-medium uppercase tracking-wider">
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
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: market.dir === 'rtl' ? -30 : 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/5 bg-dark-800/40 backdrop-blur-sm p-6 sm:p-8">
              {preview ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Check size={22} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white">
                        {t.preview.ready}
                      </h3>
                      <p className="text-sm text-dark-400">
                        {t.preview.readySub}
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-dark-900/80 border border-white/5 p-5 max-h-96 overflow-y-auto mb-5" dir="ltr">
                    <pre className="text-sm text-dark-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {emailBody}
                    </pre>
                  </div>

                  <p className="text-sm text-dark-400 mb-5">
                    {t.preview.sendTo}{' '}
                    <span className="text-white font-semibold">{EMAIL}</span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-5">
                    <button
                      onClick={async () => {
                        await doCopy(emailBody)
                        setCopied(true)
                        setTimeout(() => setCopied(false), 2500)
                      }}
                      className={`flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl px-5 py-4 text-base font-semibold transition-all duration-300 ${
                        copied
                          ? 'bg-emerald-500/20 border-2 border-emerald-500/30 text-emerald-400'
                          : 'bg-gradient-to-r from-gold-500 to-gold-400 text-dark-950 hover:shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01]'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check size={18} /> {t.preview.copiedClipboard}
                        </>
                      ) : (
                        <>
                          <Copy size={18} /> {t.preview.copyText}
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-gold-500/30 bg-gold-500/5 px-5 py-4 text-base font-semibold text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:scale-[1.01]"
                    >
                      <ExternalLink size={18} /> {t.preview.openEmail}
                    </a>
                  </div>

                  <button
                    onClick={() => setPreview(false)}
                    className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    <ArrowLeft size={15} className="rtl:rotate-180" /> {t.preview.goBack}
                  </button>

                  <div className="mt-6 rounded-xl bg-gold-500/5 border-2 border-gold-500/15 px-5 py-4 flex items-start gap-3.5">
                    <Camera size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gold-400 mb-1">
                        {t.preview.attachTitle}
                      </p>
                      <ul className="text-sm text-dark-400 space-y-0.5 list-disc list-inside">
                        <li>{t.preview.attachPhotos}</li>
                        <li>{t.preview.attachDrawings}</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-1.5">
                    <Mail size={22} className="text-gold-400" />
                    <h3 className="font-display font-semibold text-xl text-white">
                      {f.title}
                    </h3>
                  </div>
                  <p className="text-base text-dark-400 mb-2">
                    {f.subtitle}
                  </p>
                  <p className="text-sm text-dark-500 mb-5 italic">
                    {f.allOptional}
                  </p>

                  {/* Section 1: Environment */}
                  <Section num={1} title={f.sections[0].title} desc={f.sections[0].desc}>
                    <div>
                      <Label hint={f.installHint}>{f.installLabel}</Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard
                          label={f.indoorLabel}
                          desc={f.indoorDesc}
                          selected={d.environment === 'Indoor'}
                          onClick={() => set('environment', 'Indoor')}
                        />
                        <OptionCard
                          label={f.outdoorLabel}
                          desc={f.outdoorDesc}
                          selected={d.environment === 'Outdoor'}
                          onClick={() => set('environment', 'Outdoor')}
                        />
                        <OptionCard
                          label={f.otherLabel}
                          desc={f.otherDesc}
                          selected={d.environment === 'Other'}
                          onClick={() => set('environment', 'Other')}
                        />
                      </div>
                      {d.environment === 'Other' && (
                        <input
                          type="text"
                          value={d.environmentCustom}
                          onChange={(e) => set('environmentCustom', e.target.value)}
                          placeholder={f.describePlaceholder}
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint={f.primaryUseHint}>{f.primaryUseLabel}</Label>
                      <SelectWrap>
                        <select
                          value={d.primaryUse}
                          onChange={(e) => set('primaryUse', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">{f.chooseOption}</option>
                          {f.primaryUseOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </SelectWrap>
                      {d.primaryUse === 'Other' && (
                        <input
                          type="text"
                          value={d.primaryUseCustom}
                          onChange={(e) => set('primaryUseCustom', e.target.value)}
                          placeholder={f.describeUse}
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint={f.viewingHint}>{f.viewingLabel}</Label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={d.viewingDistance}
                          onChange={(e) => set('viewingDistance', e.target.value)}
                          placeholder={f.viewingPlaceholder}
                          className={inputClass}
                        />
                        <span className="text-base text-dark-400 font-medium shrink-0">{f.meters}</span>
                      </div>
                    </div>
                  </Section>

                  {/* Section 2: Dimensions */}
                  <Section num={2} title={f.sections[1].title} desc={f.sections[1].desc}>
                    <div>
                      <Label hint={f.sizeHint}>{f.sizeLabel}</Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="block text-sm text-dark-400 font-medium mb-1.5">{f.widthLabel}</span>
                          <div className="flex items-center gap-2.5">
                            <input type="text" value={d.width} onChange={(e) => set('width', e.target.value)} placeholder={f.sizePlaceholder} className={inputClass} />
                            <span className="text-base text-dark-400 font-medium shrink-0">{f.mUnit}</span>
                          </div>
                        </div>
                        <div>
                          <span className="block text-sm text-dark-400 font-medium mb-1.5">{f.heightLabel}</span>
                          <div className="flex items-center gap-2.5">
                            <input type="text" value={d.height} onChange={(e) => set('height', e.target.value)} placeholder={f.sizePlaceholder} className={inputClass} />
                            <span className="text-base text-dark-400 font-medium shrink-0">{f.mUnit}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label hint={f.measureHint}>{f.measureLabel}</Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard label={f.displayArea} desc={f.displayAreaDesc} selected={d.measurementType === 'Display Area only'} onClick={() => set('measurementType', 'Display Area only')} />
                        <OptionCard label={f.totalWall} desc={f.totalWallDesc} selected={d.measurementType === 'Total Wall Space'} onClick={() => set('measurementType', 'Total Wall Space')} />
                        <OptionCard label={f.notSureLabel} desc={f.notSureDesc} selected={d.measurementType === 'Not Sure'} onClick={() => set('measurementType', 'Not Sure')} />
                      </div>
                    </div>

                    <div>
                      <Label hint={f.shapeHint}>{f.shapeLabel}</Label>
                      <SelectWrap>
                        <select value={d.shape} onChange={(e) => set('shape', e.target.value)} className={selectClass}>
                          <option value="">{f.chooseOption}</option>
                          {f.shapeOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </SelectWrap>
                      {d.shape === 'Other' && (
                        <input type="text" value={d.shapeCustom} onChange={(e) => set('shapeCustom', e.target.value)} placeholder={f.describeShape} className={`${inputClass} mt-3`} />
                      )}
                    </div>
                  </Section>

                  {/* Section 3: Installation */}
                  <Section num={3} title={f.sections[2].title} desc={f.sections[2].desc}>
                    <div>
                      <Label hint={f.mountHint}>{f.mountLabel}</Label>
                      <SelectWrap>
                        <select value={d.mounting} onChange={(e) => set('mounting', e.target.value)} className={selectClass}>
                          <option value="">{f.chooseOption}</option>
                          {f.mountOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                      </SelectWrap>
                      {d.mounting === 'Other' && (
                        <input type="text" value={d.mountingCustom} onChange={(e) => set('mountingCustom', e.target.value)} placeholder={f.describeMount} className={`${inputClass} mt-3`} />
                      )}
                    </div>

                    <div>
                      <Label hint={f.maintenanceHint}>{f.maintenanceLabel}</Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard label={f.frontAccess} desc={f.frontAccessDesc} selected={d.maintenanceAccess === 'Front access'} onClick={() => set('maintenanceAccess', 'Front access')} />
                        <OptionCard label={f.rearAccess} desc={f.rearAccessDesc} selected={d.maintenanceAccess === 'Rear access'} onClick={() => set('maintenanceAccess', 'Rear access')} />
                        <OptionCard label={f.maintenanceNotSure} desc={f.maintenanceNotSureDesc} selected={d.maintenanceAccess === 'Not sure'} onClick={() => set('maintenanceAccess', 'Not sure')} />
                      </div>
                    </div>

                    <div>
                      <Label hint={f.reinforcedHint}>{f.reinforcedLabel}</Label>
                      <div className="flex flex-wrap gap-3">
                        {([
                          [f.yes, 'Yes'],
                          [f.no, 'No'],
                          [f.notSure, 'Not Sure'],
                        ] as const).map(([label, value]) => (
                          <button
                            key={value}
                            type="button"
                            onClick={() => set('reinforced', value)}
                            className={`px-6 py-3.5 rounded-xl border-2 text-base font-semibold transition-all ${
                              d.reinforced === value
                                ? 'bg-gold-500/10 border-gold-500/40 text-gold-400'
                                : 'bg-dark-900/50 border-white/8 text-dark-300 hover:border-white/20'
                            }`}
                          >
                            {label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </Section>

                  {/* Section 4: Special Requirements */}
                  <Section num={4} title={f.sections[3].title} desc={f.sections[3].desc}>
                    <div>
                      <Label>{f.featuresLabel}</Label>
                      <div className="space-y-2.5">
                        <BigCheckbox checked={d.transparent} onChange={(v) => set('transparent', v)} label={f.transparentLabel} desc={f.transparentDesc} />
                        <BigCheckbox checked={d.flexible} onChange={(v) => set('flexible', v)} label={f.flexibleLabel} desc={f.flexibleDesc} />
                        <BigCheckbox checked={d.ultraBright} onChange={(v) => set('ultraBright', v)} label={f.ultraBrightLabel} desc={f.ultraBrightDesc} />
                      </div>
                      <input type="text" value={d.featureNote} onChange={(e) => set('featureNote', e.target.value)} placeholder={f.otherFeatures} className={`${inputClass} mt-3`} />
                    </div>

                    <div>
                      <Label hint={f.contentTypeHint}>{f.contentTypeLabel}</Label>
                      <div className="space-y-2.5">
                        <BigCheckbox checked={d.contentLive} onChange={(v) => set('contentLive', v)} label={f.liveVideoLabel} desc={f.liveVideoDesc} />
                        <BigCheckbox checked={d.contentStatic} onChange={(v) => set('contentStatic', v)} label={f.staticLabel} desc={f.staticDesc} />
                        <BigCheckbox checked={d.content4k} onChange={(v) => set('content4k', v)} label={f.highResLabel} desc={f.highResDesc} />
                      </div>
                      <input type="text" value={d.contentNote} onChange={(e) => set('contentNote', e.target.value)} placeholder={f.otherContent} className={`${inputClass} mt-3`} />
                    </div>
                  </Section>

                  {/* Section 5: Logistics */}
                  <Section num={5} title={f.sections[4].title} desc={f.sections[4].desc}>
                    <div>
                      <Label hint={f.locationHint}>{f.locationLabel}</Label>
                      <input type="text" value={d.deliveryLocation} onChange={(e) => set('deliveryLocation', e.target.value)} placeholder={f.locationPlaceholder} className={inputClass} />
                    </div>
                    <div>
                      <Label hint={f.dateHint}>{f.dateLabel}</Label>
                      <input type="text" value={d.targetDate} onChange={(e) => set('targetDate', e.target.value)} placeholder={f.datePlaceholder} className={inputClass} />
                    </div>
                  </Section>

                  {/* Section 6: Contact Info */}
                  <Section num={6} title={f.sections[5].title} desc={f.sections[5].desc}>
                    <div>
                      <Label>{f.nameLabel}</Label>
                      <input type="text" value={d.contactName} onChange={(e) => set('contactName', e.target.value)} placeholder={f.namePlaceholder} className={inputClass} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>{f.emailLabel}</Label>
                        <input type="email" value={d.contactEmail} onChange={(e) => set('contactEmail', e.target.value)} placeholder={f.emailPlaceholder} className={inputClass} />
                      </div>
                      <div>
                        <Label>{f.phoneLabel}</Label>
                        <input type="tel" value={d.contactPhone} onChange={(e) => set('contactPhone', e.target.value)} placeholder={f.phonePlaceholder} className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <Label hint={f.notesHint}>{f.notesLabel}</Label>
                      <textarea value={d.notes} onChange={(e) => set('notes', e.target.value)} rows={3} placeholder={f.notesPlaceholder} className={`${inputClass} resize-none`} />
                    </div>
                  </Section>

                  {/* Attachment reminder */}
                  <div className="mt-8 rounded-xl bg-gold-500/5 border-2 border-gold-500/15 px-5 py-4 flex items-start gap-3.5">
                    <Camera size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gold-400 mb-1">
                        {f.importantAttach}
                      </p>
                      <ul className="text-sm text-dark-400 space-y-1 list-disc list-inside">
                        <li>
                          <span className="font-medium text-dark-300">{f.sitePhotos}</span> — {f.sitePhotosDetail}
                        </li>
                        <li>
                          <span className="font-medium text-dark-300">{f.archDrawings}</span> — {f.archDrawingsDetail}
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Generate button */}
                  <button
                    type="button"
                    onClick={async () => {
                      setPreview(true)
                      await doCopy(emailBody)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2500)
                    }}
                    className="group mt-10 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 px-6 py-5 text-lg font-bold text-dark-950 hover:shadow-xl hover:shadow-gold-500/20 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <Copy size={20} />
                    {f.generateBtn}
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
