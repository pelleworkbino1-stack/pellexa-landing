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
} from 'lucide-react'

const EMAIL = 'led.sales@pellexa.com'

/* ------------------------------------------------------------------ */
/*  Types & initial state                                              */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Build the email body                                               */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/*  Reusable sub-components                                            */
/* ------------------------------------------------------------------ */

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
      className={`flex-1 min-w-[140px] text-left px-5 py-4.5 rounded-xl border-2 transition-all ${
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
      className={`w-full flex items-start gap-4 p-4.5 rounded-xl border-2 text-left transition-all ${
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

/* ------------------------------------------------------------------ */
/*  Layout sub-components (defined outside to avoid remount on render)  */
/* ------------------------------------------------------------------ */

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
      <p className="text-sm sm:text-base text-dark-400 mb-5 ml-[3.15rem]">{desc}</p>
      <div className="space-y-5 ml-0 sm:ml-[3.15rem]">{children}</div>
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
        className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-400 pointer-events-none"
      />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

const inputClass =
  'w-full rounded-xl border-2 border-white/10 bg-dark-900/60 px-5 py-4 text-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-gold-500/40 focus:ring-2 focus:ring-gold-500/20 transition-all'
const selectClass = `${inputClass} pr-11 appearance-none cursor-pointer`

export default function Contact() {
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

  /* ---------- Render ---------- */

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-dark-900/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-14 items-start">
          {/* ============ LEFT COLUMN ============ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-3 block">
              Start Your Project
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-gold-400 to-gold-300 bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            <p className="text-dark-400 text-base sm:text-lg leading-relaxed mb-8">
              Use the guided form to tell us about your project. We'll create a
              ready-to-send email for you — just copy and send. You can also
              write directly to us.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Complimentary consultation and site assessment',
                'Custom engineering for your exact architectural requirements',
                'Direct pricing from our manufacturing facility',
                'Professional installation and delivery nationwide',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-gold-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-dark-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Quick email card */}
            <div className="rounded-xl border border-white/5 bg-dark-800/40 p-5">
              <p className="text-xs text-dark-500 mb-2.5 font-medium uppercase tracking-wider">
                Send directly to
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
                      <Check size={14} /> Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>

          {/* ============ RIGHT COLUMN ============ */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-white/5 bg-dark-800/40 backdrop-blur-sm p-6 sm:p-8">
              {preview ? (
                /* ======== PREVIEW MODE ======== */
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Check size={22} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white">
                        Your Email is Ready!
                      </h3>
                      <p className="text-sm text-dark-400">
                        Copy the text below and paste it into your email.
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl bg-dark-900/80 border border-white/5 p-5 max-h-96 overflow-y-auto mb-5">
                    <pre className="text-sm text-dark-300 whitespace-pre-wrap font-mono leading-relaxed">
                      {emailBody}
                    </pre>
                  </div>

                  <p className="text-sm text-dark-400 mb-5">
                    Send to:{' '}
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
                          <Check size={18} /> Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy size={18} /> Copy Email Text
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-gold-500/30 bg-gold-500/5 px-5 py-4 text-base font-semibold text-gold-400 hover:bg-gold-500/10 hover:border-gold-500/50 transition-all duration-300 hover:scale-[1.01]"
                    >
                      <ExternalLink size={18} /> Open Email App
                    </a>
                  </div>

                  <button
                    onClick={() => setPreview(false)}
                    className="inline-flex items-center gap-2 text-sm text-dark-400 hover:text-dark-200 transition-colors"
                  >
                    <ArrowLeft size={15} /> Go back and edit answers
                  </button>

                  <div className="mt-6 rounded-xl bg-gold-500/5 border-2 border-gold-500/15 px-5 py-4 flex items-start gap-3.5">
                    <Camera size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gold-400 mb-1">
                        Don't forget to attach:
                      </p>
                      <ul className="text-sm text-dark-400 space-y-0.5 list-disc list-inside">
                        <li>Photos of the installation location</li>
                        <li>Architectural or structural drawings (if available)</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                /* ======== FORM MODE ======== */
                <>
                  <div className="flex items-center gap-3 mb-1.5">
                    <Mail size={22} className="text-gold-400" />
                    <h3 className="font-display font-semibold text-xl text-white">
                      Build Your Project Inquiry
                    </h3>
                  </div>
                  <p className="text-base text-dark-400 mb-2">
                    Answer what you can — we'll create a professional email
                    template you can copy and send. No account needed.
                  </p>
                  <p className="text-sm text-dark-500 mb-5 italic">
                    All fields are optional. Fill in as much as you know.
                  </p>

                  {/* ---- Section 1: Environment ---- */}
                  <Section
                    num={1}
                    title="Environment & Purpose"
                    desc="Where will the screen be used and what for?"
                  >
                    <div>
                      <Label hint="This determines the pixel density and weatherproofing your screen needs.">
                        Where will the screen be installed?
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard
                          label="Indoor"
                          desc="Malls, cinemas, lobbies, conference rooms"
                          selected={d.environment === 'Indoor'}
                          onClick={() => set('environment', 'Indoor')}
                        />
                        <OptionCard
                          label="Outdoor"
                          desc="Billboards, building facades, stadiums"
                          selected={d.environment === 'Outdoor'}
                          onClick={() => set('environment', 'Outdoor')}
                        />
                        <OptionCard
                          label="Other"
                          desc="Semi-outdoor, covered area, etc."
                          selected={d.environment === 'Other'}
                          onClick={() => set('environment', 'Other')}
                        />
                      </div>
                      {d.environment === 'Other' && (
                        <input
                          type="text"
                          value={d.environmentCustom}
                          onChange={(e) => set('environmentCustom', e.target.value)}
                          placeholder="Describe the location..."
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint='Examples: "Advertising in a shopping mall", "Cinema screen", "Church stage backdrop"'>
                        What is the primary use?
                      </Label>
                      <SelectWrap>
                        <select
                          value={d.primaryUse}
                          onChange={(e) => set('primaryUse', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Choose an option...</option>
                          <option value="Advertising">Advertising / Digital signage</option>
                          <option value="Cinema">Cinema / Theater screen</option>
                          <option value="Event Hall">Event hall / Concert venue</option>
                          <option value="Storefront">Storefront / Window display</option>
                          <option value="Conference Room">Conference room / Boardroom</option>
                          <option value="Control Room">Control room / Command center</option>
                          <option value="Church / Worship">Church / Place of worship</option>
                          <option value="Sports Venue">Sports venue / Scoreboard</option>
                          <option value="Other">Other — I'll describe below</option>
                        </select>
                      </SelectWrap>
                      {d.primaryUse === 'Other' && (
                        <input
                          type="text"
                          value={d.primaryUseCustom}
                          onChange={(e) => set('primaryUseCustom', e.target.value)}
                          placeholder="Describe the intended use..."
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint="How far will the audience typically be from the screen? This helps us choose the right pixel pitch.">
                        Average viewing distance
                      </Label>
                      <div className="flex items-center gap-3">
                        <input
                          type="text"
                          value={d.viewingDistance}
                          onChange={(e) => set('viewingDistance', e.target.value)}
                          placeholder='e.g. "5" or "10-15" or "not sure"'
                          className={inputClass}
                        />
                        <span className="text-base text-dark-400 font-medium shrink-0">meters</span>
                      </div>
                    </div>
                  </Section>

                  {/* ---- Section 2: Dimensions ---- */}
                  <Section
                    num={2}
                    title="Dimensions & Shape"
                    desc="How big should the screen be and what shape?"
                  >
                    <div>
                      <Label hint='Approximate is fine. You can also write "not sure yet".'>
                        Desired screen size
                      </Label>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <span className="block text-sm text-dark-400 font-medium mb-1.5">Width</span>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="text"
                              value={d.width}
                              onChange={(e) => set('width', e.target.value)}
                              placeholder='e.g. "5" or "not sure"'
                              className={inputClass}
                            />
                            <span className="text-base text-dark-400 font-medium shrink-0">m</span>
                          </div>
                        </div>
                        <div>
                          <span className="block text-sm text-dark-400 font-medium mb-1.5">Height</span>
                          <div className="flex items-center gap-2.5">
                            <input
                              type="text"
                              value={d.height}
                              onChange={(e) => set('height', e.target.value)}
                              placeholder='e.g. "3" or "not sure"'
                              className={inputClass}
                            />
                            <span className="text-base text-dark-400 font-medium shrink-0">m</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label hint="Are the dimensions above for the screen itself, or for the total available wall/ceiling space?">
                        What do the measurements refer to?
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard
                          label="Display Area"
                          desc="The screen itself should be this size"
                          selected={d.measurementType === 'Display Area only'}
                          onClick={() => set('measurementType', 'Display Area only')}
                        />
                        <OptionCard
                          label="Total Wall Space"
                          desc="This is how much space is available"
                          selected={d.measurementType === 'Total Wall Space'}
                          onClick={() => set('measurementType', 'Total Wall Space')}
                        />
                        <OptionCard
                          label="Not Sure"
                          desc="I'll need help figuring this out"
                          selected={d.measurementType === 'Not Sure'}
                          onClick={() => set('measurementType', 'Not Sure')}
                        />
                      </div>
                    </div>

                    <div>
                      <Label hint="Most screens are flat. Curved or corner screens are possible but require custom engineering.">
                        Screen shape
                      </Label>
                      <SelectWrap>
                        <select
                          value={d.shape}
                          onChange={(e) => set('shape', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Choose an option...</option>
                          <option value="Standard Flat">Standard flat screen</option>
                          <option value="Curved (Concave)">Curved inward (Concave) — like a cinema</option>
                          <option value="Curved (Convex)">Curved outward (Convex) — wrapping a pillar</option>
                          <option value="Corner (90°)">Corner screen (90° angle)</option>
                          <option value="Other">Other — I'll describe below</option>
                        </select>
                      </SelectWrap>
                      {d.shape === 'Other' && (
                        <input
                          type="text"
                          value={d.shapeCustom}
                          onChange={(e) => set('shapeCustom', e.target.value)}
                          placeholder="Describe the shape you need..."
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>
                  </Section>

                  {/* ---- Section 3: Installation ---- */}
                  <Section
                    num={3}
                    title="Installation & Maintenance"
                    desc="How will the screen be mounted and serviced?"
                  >
                    <div>
                      <Label hint="This determines the mounting hardware and structural requirements.">
                        How will the screen be mounted?
                      </Label>
                      <SelectWrap>
                        <select
                          value={d.mounting}
                          onChange={(e) => set('mounting', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Choose an option...</option>
                          <option value="Wall-mounted">Wall-mounted — attached flat to a wall</option>
                          <option value="Ceiling-hung">Ceiling-hung — suspended from above</option>
                          <option value="Floor-standing">Floor-standing — on a base or frame</option>
                          <option value="Pole-mounted">Pole-mounted — on a pole or mast</option>
                          <option value="Not Sure">Not sure yet — I need advice</option>
                          <option value="Other">Other — I'll describe below</option>
                        </select>
                      </SelectWrap>
                      {d.mounting === 'Other' && (
                        <input
                          type="text"
                          value={d.mountingCustom}
                          onChange={(e) => set('mountingCustom', e.target.value)}
                          placeholder="Describe the mounting..."
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint="Front-access screens can sit flush against a wall. Rear-access screens need space behind for servicing.">
                        How will the screen be maintained?
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        <OptionCard
                          label="Front Access"
                          desc="Screen is against a wall — service from the front"
                          selected={d.maintenanceAccess === 'Front access'}
                          onClick={() => set('maintenanceAccess', 'Front access')}
                        />
                        <OptionCard
                          label="Rear Access"
                          desc="There's space behind — service from the back"
                          selected={d.maintenanceAccess === 'Rear access'}
                          onClick={() => set('maintenanceAccess', 'Rear access')}
                        />
                        <OptionCard
                          label="Not Sure"
                          desc="I'll need your recommendation"
                          selected={d.maintenanceAccess === 'Not sure'}
                          onClick={() => set('maintenanceAccess', 'Not sure')}
                        />
                      </div>
                    </div>

                    <div>
                      <Label hint="LED screens are heavy. If you're not sure whether your wall or ceiling can support the weight, we can help assess.">
                        Is the wall/ceiling reinforced to support the weight?
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        {(['Yes', 'No', 'Not Sure'] as const).map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => set('reinforced', opt)}
                            className={`px-6 py-3.5 rounded-xl border-2 text-base font-semibold transition-all ${
                              d.reinforced === opt
                                ? 'bg-gold-500/10 border-gold-500/40 text-gold-400'
                                : 'bg-dark-900/50 border-white/8 text-dark-300 hover:border-white/20'
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </Section>

                  {/* ---- Section 4: Special Requirements ---- */}
                  <Section
                    num={4}
                    title="Special Requirements"
                    desc="Any special features needed? Check all that apply."
                  >
                    <div>
                      <Label>Custom features</Label>
                      <div className="space-y-2.5">
                        <BigCheckbox
                          checked={d.transparent}
                          onChange={(v) => set('transparent', v)}
                          label="Transparent Screen"
                          desc="See-through display — great for storefronts and glass walls where you want to show content while still seeing through"
                        />
                        <BigCheckbox
                          checked={d.flexible}
                          onChange={(v) => set('flexible', v)}
                          label="Flexible / Bendable LED"
                          desc="Panels that can bend and wrap around curved surfaces, pillars, or unconventional shapes"
                        />
                        <BigCheckbox
                          checked={d.ultraBright}
                          onChange={(v) => set('ultraBright', v)}
                          label="Ultra-High Brightness"
                          desc="Extra-bright panels for areas with strong ambient light or direct sunlight (typically 5,000+ nits)"
                        />
                      </div>
                      <input
                        type="text"
                        value={d.featureNote}
                        onChange={(e) => set('featureNote', e.target.value)}
                        placeholder="Other features or notes..."
                        className={`${inputClass} mt-3`}
                      />
                    </div>

                    <div>
                      <Label hint="What kind of content will be displayed? This helps us recommend the right resolution.">
                        Content type
                      </Label>
                      <div className="space-y-2.5">
                        <BigCheckbox
                          checked={d.contentLive}
                          onChange={(v) => set('contentLive', v)}
                          label="Live Video / Camera Feeds"
                          desc="Real-time video from cameras, live broadcasts, or video conferencing"
                        />
                        <BigCheckbox
                          checked={d.contentStatic}
                          onChange={(v) => set('contentStatic', v)}
                          label="Static Images / Slideshows"
                          desc="Photos, graphics, menus, schedules, or rotating promotional images"
                        />
                        <BigCheckbox
                          checked={d.content4k}
                          onChange={(v) => set('content4k', v)}
                          label="4K / High-Resolution Content"
                          desc="Ultra-sharp content that requires very fine pixel pitch (close viewing)"
                        />
                      </div>
                      <input
                        type="text"
                        value={d.contentNote}
                        onChange={(e) => set('contentNote', e.target.value)}
                        placeholder="Other content types or notes..."
                        className={`${inputClass} mt-3`}
                      />
                    </div>
                  </Section>

                  {/* ---- Section 5: Logistics ---- */}
                  <Section
                    num={5}
                    title="Logistics"
                    desc="Where should we deliver and when do you need it?"
                  >
                    <div>
                      <Label hint='The city or full address where the screen will be shipped and installed. Example: "Makati City, Metro Manila"'>
                        Delivery location
                      </Label>
                      <input
                        type="text"
                        value={d.deliveryLocation}
                        onChange={(e) => set('deliveryLocation', e.target.value)}
                        placeholder="City or full address..."
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label hint='When do you need the screen installed? Approximate is fine. Example: "August 2026" or "ASAP"'>
                        Target installation date
                      </Label>
                      <input
                        type="text"
                        value={d.targetDate}
                        onChange={(e) => set('targetDate', e.target.value)}
                        placeholder='e.g. "August 2026" or "As soon as possible"'
                        className={inputClass}
                      />
                    </div>
                  </Section>

                  {/* ---- Section 6: Contact Info ---- */}
                  <Section
                    num={6}
                    title="Your Contact Info"
                    desc="So we can get back to you with a proposal."
                  >
                    <div>
                      <Label>Your name</Label>
                      <input
                        type="text"
                        value={d.contactName}
                        onChange={(e) => set('contactName', e.target.value)}
                        placeholder="Full name"
                        className={inputClass}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>Email address</Label>
                        <input
                          type="email"
                          value={d.contactEmail}
                          onChange={(e) => set('contactEmail', e.target.value)}
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label>Phone number</Label>
                        <input
                          type="tel"
                          value={d.contactPhone}
                          onChange={(e) => set('contactPhone', e.target.value)}
                          placeholder="+63 917 123 4567"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <Label hint="Anything else we should know? Special requests, budget range, questions...">
                        Additional notes
                      </Label>
                      <textarea
                        value={d.notes}
                        onChange={(e) => set('notes', e.target.value)}
                        rows={3}
                        placeholder="Write anything else here..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </Section>

                  {/* Attachment reminder */}
                  <div className="mt-8 rounded-xl bg-gold-500/5 border-2 border-gold-500/15 px-5 py-4 flex items-start gap-3.5">
                    <Camera size={20} className="text-gold-500 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-gold-400 mb-1">
                        Important — Please Attach:
                      </p>
                      <ul className="text-sm text-dark-400 space-y-1 list-disc list-inside">
                        <li>
                          <span className="font-medium text-dark-300">Site photos</span> — a
                          photo of the exact wall or space where the screen will go
                        </li>
                        <li>
                          <span className="font-medium text-dark-300">
                            Architectural drawings
                          </span>{' '}
                          — structural or design plans of the space (if available)
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
                    Generate & Copy Email Template
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
