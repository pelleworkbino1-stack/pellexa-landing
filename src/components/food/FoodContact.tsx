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
  Leaf,
} from 'lucide-react'
import { useMarket } from '../../hooks/useMarket'

const EMAIL = 'matcha.sales@pellexa.com'

interface FoodInquiry {
  // Section 1 — Organization Profile & Operational Role
  organizationName: string
  operationalRole: string
  operationalRoleCustom: string
  targetMarket: string

  // Section 2 — Tier Selection
  tier01: boolean
  tier02: boolean
  tier03: boolean
  tierNote: string

  // Section 3 — Estimated Monthly Volume
  monthlyVolume: string

  // Section 4 — Documentation Checklist
  docStandardCOA: boolean
  docHeavyMetals: boolean
  docPesticide: boolean
  docOrganicCerts: boolean
  docMicrobial: boolean
  docFDAPriorNotice: boolean
  docNote: string

  // Section 5 — Technical Evaluation Sample Program
  requestSamples: boolean
  sampleUseCase: string

  // Section 6 — Contact Info
  contactName: string
  contactEmail: string
  contactPhone: string
  notes: string
}

const initial: FoodInquiry = {
  organizationName: '',
  operationalRole: '',
  operationalRoleCustom: '',
  targetMarket: '',
  tier01: false,
  tier02: false,
  tier03: false,
  tierNote: '',
  monthlyVolume: '',
  docStandardCOA: false,
  docHeavyMetals: false,
  docPesticide: false,
  docOrganicCerts: false,
  docMicrobial: false,
  docFDAPriorNotice: false,
  docNote: '',
  requestSamples: false,
  sampleUseCase: '',
  contactName: '',
  contactEmail: '',
  contactPhone: '',
  notes: '',
}

const operationalRoles = [
  'Industrial Food Manufacturer',
  'Retail / CPG Brand',
  'Specialty Beverage Operator',
  'Importer / Distributor',
  'Private-Label Operator',
  'Foodservice / HoReCa Chain',
  'Other',
]

const monthlyVolumeTiers = [
  { value: '<100kg', label: 'Under 100 kg / month', desc: 'Specialty beverage, ceremonial, premium retail' },
  { value: '100-500kg', label: '100–500 kg / month', desc: 'Mid-volume retail and specialty manufacturing' },
  { value: '500-2000kg', label: '500–2,000 kg / month', desc: 'Industrial manufacturing and chain retail' },
  { value: '2000kg+', label: '2,000 kg+ / month', desc: 'Enterprise industrial supply' },
  { value: 'TBD', label: 'Volume profile TBD', desc: 'Pending internal forecasting' },
]

function val(selected: string, custom: string): string {
  if (selected === 'Other' && custom) return custom
  return selected || '—'
}

function buildEmail(d: FoodInquiry): string {
  const l: string[] = []
  l.push('PELLEXA AGRI-FOOD — PROCUREMENT INQUIRY')
  l.push('='.repeat(48))
  l.push('')

  if (d.contactName || d.contactEmail || d.contactPhone) {
    l.push('CONTACT')
    if (d.contactName) l.push(`  Name:  ${d.contactName}`)
    if (d.contactEmail) l.push(`  Email: ${d.contactEmail}`)
    if (d.contactPhone) l.push(`  Phone: ${d.contactPhone}`)
    l.push('')
  }

  l.push('1. ORGANIZATION PROFILE')
  l.push(`   Organization:      ${d.organizationName || '—'}`)
  l.push(`   Operational Role:  ${val(d.operationalRole, d.operationalRoleCustom)}`)
  l.push(`   Target Market:     ${d.targetMarket || '—'}`)
  l.push('')

  const tiers = [
    d.tier01 && 'Tier 01 — Japan Premium Certified Organic',
    d.tier02 && 'Tier 02 — Global Commercial Certified Organic',
    d.tier03 && 'Tier 03 — High-Consistency Non-Organic Commercial',
  ].filter(Boolean) as string[]

  l.push('2. TIER SELECTION')
  if (tiers.length === 0) {
    l.push('   No tier selected — awaiting Pellexa recommendation')
  } else {
    tiers.forEach((t) => l.push(`   - ${t}`))
  }
  if (d.tierNote) l.push(`   Note: ${d.tierNote}`)
  l.push('')

  l.push('3. ESTIMATED MONTHLY VOLUME')
  l.push(`   Volume Tier: ${d.monthlyVolume || '—'}`)
  l.push('')

  const docs = [
    d.docStandardCOA && 'Standard COA (per batch)',
    d.docHeavyMetals && 'Heavy Metals Panel',
    d.docPesticide && 'Pesticide Residue Panel',
    d.docMicrobial && 'Microbial Counts',
    d.docOrganicCerts && 'Organic Certifications (JAS / USDA NOP / EU Organic)',
    d.docFDAPriorNotice && 'FDA Prior-Notice Support',
  ].filter(Boolean) as string[]

  l.push('4. DOCUMENTATION REQUIREMENTS')
  if (docs.length === 0) {
    l.push('   No specific documentation flagged')
  } else {
    docs.forEach((doc) => l.push(`   - ${doc}`))
  }
  if (d.docNote) l.push(`   Note: ${d.docNote}`)
  l.push('')

  l.push('5. TECHNICAL EVALUATION SAMPLE PROGRAM')
  l.push(`   Sample Request:    ${d.requestSamples ? 'YES — Unbranded Validation Program requested' : 'No'}`)
  if (d.sampleUseCase) l.push(`   Validation Use-Case: ${d.sampleUseCase}`)
  l.push('')

  if (d.notes) {
    l.push('ADDITIONAL NOTES')
    l.push(`   ${d.notes}`)
    l.push('')
  }

  l.push('—'.repeat(48))
  l.push('Submitted via Pellexa Agri-Food procurement intake.')

  return l.join('\n')
}

// --- Primitives (mirror Contact.tsx structure; agri tokenization) ---

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
      className={`flex-1 min-w-[180px] text-left rtl:text-right px-5 py-4.5 rounded-xl border-2 transition-all ${
        selected
          ? 'bg-brand-500/10 border-brand-500/40 shadow-lg shadow-brand-500/5'
          : 'bg-canvas-elevated/50 border-silver-anchor/8 hover:border-silver-anchor/20'
      }`}
    >
      <span
        className={`block text-base font-semibold ${
          selected ? 'text-brand-400' : 'text-ink-primary'
        }`}
      >
        {label}
      </span>
      <span className="block text-sm text-ink-dim mt-1 leading-snug">{desc}</span>
    </button>
  )
}

/**
 * Documentation checklist box — Phase 3 Target 3 spec:
 *   Unchecked  → Silver Anchor framework (corporate compliance border).
 *   Checked    → Matcha fill (#0F5257) with a clean Silver check icon.
 *
 * The silver check on matcha fill is the literal visual signature of the
 * three-layer system: Canvas (background), Silver Anchor (the check mark
 * itself), Brand (the matcha fill). Every checkbox in this form is a
 * one-cell demo of the architecture working as designed.
 */
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
          ? 'bg-brand-500/8 border-brand-500/30'
          : 'bg-canvas-elevated/40 border-silver-anchor/10 hover:border-silver-anchor/20'
      }`}
    >
      <div
        className={`mt-0.5 w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
          checked
            ? 'bg-brand-500/60 border-brand-400/70'
            : 'border-silver-anchor/30 bg-canvas-elevated/60'
        }`}
      >
        {checked && <Check size={14} className="text-silver-anchor" strokeWidth={3} />}
      </div>
      <div className="min-w-0">
        <span
          className={`block text-base font-medium ${
            checked ? 'text-brand-300' : 'text-ink-primary'
          }`}
        >
          {label}
        </span>
        <span className="block text-sm text-ink-dim mt-1 leading-snug">{desc}</span>
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
        <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-brand-secondary-500/15 text-base font-bold text-brand-secondary-400 shrink-0">
          {num}
        </span>
        <h4 className="text-lg sm:text-xl font-semibold text-white">{title}</h4>
      </div>
      <p className="text-sm sm:text-base text-ink-dim mb-5 ms-[3.15rem]">{desc}</p>
      <div className="space-y-5 ms-0 sm:ms-[3.15rem]">{children}</div>
    </div>
  )
}

function Label({ children, hint }: { children: React.ReactNode; hint?: string }) {
  return (
    <div className="mb-2.5">
      <label className="block text-base font-medium text-ink-primary">{children}</label>
      {hint && <p className="text-sm text-silver-trace mt-1 leading-snug">{hint}</p>}
    </div>
  )
}

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

const inputClass =
  'w-full rounded-xl border-2 border-silver-anchor/10 bg-canvas-elevated/60 px-5 py-4 text-lg text-white placeholder:text-silver-trace focus:outline-none focus:border-brand-500/40 focus:ring-2 focus:ring-brand-500/20 transition-all'
const selectClass = `${inputClass} pe-11 appearance-none cursor-pointer`

export default function FoodContact() {
  const { market } = useMarket()
  const t = market.contact

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [d, setD] = useState<FoodInquiry>(initial)
  const [preview, setPreview] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)

  const set = <K extends keyof FoodInquiry>(key: K, v: FoodInquiry[K]) =>
    setD((prev) => ({ ...prev, [key]: v }))

  const emailBody = buildEmail(d)
  const mailtoHref = `mailto:${EMAIL}?subject=${encodeURIComponent(
    'Pellexa Agri-Food — Procurement Inquiry',
  )}&body=${encodeURIComponent(emailBody)}`

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
    <section id="contact" className="relative py-24 sm:py-32 bg-canvas-elevated/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-14 items-start">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
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
              <p className="text-xs text-silver-trace mb-2.5 font-medium uppercase tracking-wider">
                {t.emailCardLabel}
              </p>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-brand-400 shrink-0" />
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
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/40 backdrop-blur-sm p-6 sm:p-8">
              {preview ? (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <Check size={22} className="text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white">
                        Your Procurement Brief is Ready
                      </h3>
                      <p className="text-sm text-ink-dim">
                        Copy the text below, or open it directly in your email client.
                      </p>
                    </div>
                  </div>

                  <div
                    className="rounded-xl bg-canvas-elevated/80 border border-silver-anchor/5 p-5 max-h-96 overflow-y-auto mb-5"
                    dir="ltr"
                  >
                    <pre className="text-sm text-ink-muted whitespace-pre-wrap font-mono leading-relaxed">
                      {emailBody}
                    </pre>
                  </div>

                  <p className="text-sm text-ink-dim mb-5">
                    Send to: <span className="text-white font-semibold">{EMAIL}</span>
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
                          : 'bg-gradient-to-r from-brand-400 to-brand-500 text-canvas-base hover:shadow-lg hover:shadow-brand-500/20 hover:scale-[1.01]'
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check size={18} /> Copied to clipboard
                        </>
                      ) : (
                        <>
                          <Copy size={18} /> Copy Procurement Brief
                        </>
                      )}
                    </button>

                    <a
                      href={mailtoHref}
                      className="flex-1 inline-flex items-center justify-center gap-2.5 rounded-xl border-2 border-brand-500/30 bg-brand-500/5 px-5 py-4 text-base font-semibold text-brand-400 hover:bg-brand-500/10 hover:border-brand-500/50 transition-all duration-300 hover:scale-[1.01]"
                    >
                      <ExternalLink size={18} /> Open Email Client
                    </a>
                  </div>

                  <button
                    onClick={() => setPreview(false)}
                    className="inline-flex items-center gap-2 text-sm text-ink-dim hover:text-ink-primary transition-colors"
                  >
                    <ArrowLeft size={15} /> Back to procurement form
                  </button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-1.5">
                    <Leaf size={22} className="text-brand-400" />
                    <h3 className="font-display font-semibold text-xl text-white">
                      B2B Procurement Intake
                    </h3>
                  </div>
                  <p className="text-base text-ink-dim mb-2">
                    Submit a structured profile so we can align you with the appropriate
                    tier, documentation pipeline, and pricing band.
                  </p>
                  <p className="text-sm text-silver-trace mb-5 italic">
                    All fields optional. Qualified accounts receive a tier-aligned commercial brief within 2 business days.
                  </p>

                  {/* Section 1: Organization Profile & Operational Role */}
                  <Section
                    num={1}
                    title="Organization Profile & Operational Role"
                    desc="Tell us who you are and what end-product profile we are supplying into."
                  >
                    <div>
                      <Label hint="Legal entity or trading name we will be contracting with.">
                        Organization name
                      </Label>
                      <input
                        type="text"
                        value={d.organizationName}
                        onChange={(e) => set('organizationName', e.target.value)}
                        placeholder="e.g. Acme Beverage Holdings Ltd."
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <Label hint="Defines tier alignment and documentation scope.">
                        Operational role
                      </Label>
                      <SelectWrap>
                        <select
                          value={d.operationalRole}
                          onChange={(e) => set('operationalRole', e.target.value)}
                          className={selectClass}
                        >
                          <option value="">Select your operational role…</option>
                          {operationalRoles.map((role) => (
                            <option key={role} value={role}>
                              {role}
                            </option>
                          ))}
                        </select>
                      </SelectWrap>
                      {d.operationalRole === 'Other' && (
                        <input
                          type="text"
                          value={d.operationalRoleCustom}
                          onChange={(e) => set('operationalRoleCustom', e.target.value)}
                          placeholder="Describe your operational profile…"
                          className={`${inputClass} mt-3`}
                        />
                      )}
                    </div>

                    <div>
                      <Label hint="Primary jurisdiction(s) for end-product distribution. Affects regulatory documentation scope.">
                        Target market(s)
                      </Label>
                      <input
                        type="text"
                        value={d.targetMarket}
                        onChange={(e) => set('targetMarket', e.target.value)}
                        placeholder="e.g. US, EU, GCC, APAC…"
                        className={inputClass}
                      />
                    </div>
                  </Section>

                  {/* Section 2: Tier Selection */}
                  <Section
                    num={2}
                    title="Tier Selection"
                    desc="Select the tier(s) you are evaluating. Leave blank if you would like a Pellexa recommendation."
                  >
                    <div className="space-y-2.5">
                      <BigCheckbox
                        checked={d.tier01}
                        onChange={(v) => set('tier01', v)}
                        label="Tier 01 — Japan Premium Certified Organic"
                        desc="JAS / USDA NOP / EU Organic. Stone-milled, first-flush. Ceremonial, specialty beverage, premium retail."
                      />
                      <BigCheckbox
                        checked={d.tier02}
                        onChange={(v) => set('tier02', v)}
                        label="Tier 02 — Global Commercial Certified Organic"
                        desc="USDA NOP / EU Organic. Industrial stone & roller milling. Organic-certified chains and packaged food manufacturers."
                      />
                      <BigCheckbox
                        checked={d.tier03}
                        onChange={(v) => set('tier03', v)}
                        label="Tier 03 — High-Consistency Non-Organic Commercial"
                        desc="Food-grade, HACCP-audited, FDA-ready. Baking, ice cream, premix manufacturing lines."
                      />
                    </div>
                    <input
                      type="text"
                      value={d.tierNote}
                      onChange={(e) => set('tierNote', e.target.value)}
                      placeholder="Notes on tier preference or open questions…"
                      className={`${inputClass} mt-3`}
                    />
                  </Section>

                  {/* Section 3: Estimated Monthly Volume */}
                  <Section
                    num={3}
                    title="Estimated Monthly Volume"
                    desc="Volume profile determines pricing tier eligibility and batch allocation."
                  >
                    <div>
                      <Label hint="Rough estimate is fine. Used for MOV and pricing-band alignment.">
                        Projected monthly off-take
                      </Label>
                      <div className="flex flex-wrap gap-3">
                        {monthlyVolumeTiers.map((tier) => (
                          <OptionCard
                            key={tier.value}
                            label={tier.label}
                            desc={tier.desc}
                            selected={d.monthlyVolume === tier.value}
                            onClick={() => set('monthlyVolume', tier.value)}
                          />
                        ))}
                      </div>
                    </div>
                  </Section>

                  {/* Section 4: Documentation Checklist */}
                  <Section
                    num={4}
                    title="Documentation Requirements"
                    desc="Per-batch regulatory documentation included with all recurring supply. Select what is mandatory for your validation pipeline."
                  >
                    <div className="space-y-2.5">
                      <BigCheckbox
                        checked={d.docStandardCOA}
                        onChange={(v) => set('docStandardCOA', v)}
                        label="Standard COA (per batch)"
                        desc="Baseline batch-spec Certificate of Analysis covering identity, particle size distribution, and standard chemistry."
                      />
                      <BigCheckbox
                        checked={d.docHeavyMetals}
                        onChange={(v) => set('docHeavyMetals', v)}
                        label="Heavy Metals Panel"
                        desc="Lead, cadmium, arsenic, mercury — batch-specific quantitative reporting."
                      />
                      <BigCheckbox
                        checked={d.docPesticide}
                        onChange={(v) => set('docPesticide', v)}
                        label="Pesticide Residue Panel"
                        desc="Multi-residue screening aligned to FDA, EU MRL, and JAS thresholds."
                      />
                      <BigCheckbox
                        checked={d.docMicrobial}
                        onChange={(v) => set('docMicrobial', v)}
                        label="Microbial Counts"
                        desc="Total plate count, yeast & mold, coliform, salmonella, E. coli."
                      />
                      <BigCheckbox
                        checked={d.docOrganicCerts}
                        onChange={(v) => set('docOrganicCerts', v)}
                        label="Organic Certifications"
                        desc="JAS, USDA NOP, EU Organic — facility certificates and lot traceability."
                      />
                      <BigCheckbox
                        checked={d.docFDAPriorNotice}
                        onChange={(v) => set('docFDAPriorNotice', v)}
                        label="FDA Prior-Notice Support"
                        desc="Documentation pack for US import prior-notice filing."
                      />
                    </div>
                    <input
                      type="text"
                      value={d.docNote}
                      onChange={(e) => set('docNote', e.target.value)}
                      placeholder="Additional regulatory or QA requirements…"
                      className={`${inputClass} mt-3`}
                    />
                  </Section>

                  {/* Section 5: Technical Evaluation Sample Program */}
                  <Section
                    num={5}
                    title="Technical Evaluation Sample Program"
                    desc="Unbranded Validation Program for qualified accounts — for internal R&D and regulatory validation only. Retail-sized samples are not distributed."
                  >
                    <BigCheckbox
                      checked={d.requestSamples}
                      onChange={(v) => set('requestSamples', v)}
                      label="Request Unbranded Validation Samples"
                      desc="Issue tier-aligned evaluation samples under our Technical Qualification Program."
                    />
                    {d.requestSamples && (
                      <div>
                        <Label hint="Briefly describe the internal validation use-case so we can align sample tier and packaging.">
                          Validation use-case
                        </Label>
                        <textarea
                          value={d.sampleUseCase}
                          onChange={(e) => set('sampleUseCase', e.target.value)}
                          rows={3}
                          placeholder="e.g. Formulation R&D for a ready-to-drink beverage line, thermal stability validation for baking applications…"
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                    )}
                  </Section>

                  {/* Section 6: Contact Info */}
                  <Section
                    num={6}
                    title="Procurement Contact"
                    desc="Decision-maker or sourcing lead we should route the commercial brief to."
                  >
                    <div>
                      <Label>Contact name</Label>
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
                        <Label>Business email</Label>
                        <input
                          type="email"
                          value={d.contactEmail}
                          onChange={(e) => set('contactEmail', e.target.value)}
                          placeholder="you@company.com"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <Label>Phone</Label>
                        <input
                          type="tel"
                          value={d.contactPhone}
                          onChange={(e) => set('contactPhone', e.target.value)}
                          placeholder="+1 555 123 4567"
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <Label hint="Anything else our procurement team should know — open questions, timing, special requirements.">
                        Additional notes
                      </Label>
                      <textarea
                        value={d.notes}
                        onChange={(e) => set('notes', e.target.value)}
                        rows={3}
                        placeholder="Optional context for the procurement team…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </Section>

                  {/* Generate button */}
                  <button
                    type="button"
                    onClick={async () => {
                      setPreview(true)
                      await doCopy(emailBody)
                      setCopied(true)
                      setTimeout(() => setCopied(false), 2500)
                    }}
                    className="group mt-10 w-full inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-500 px-6 py-5 text-lg font-bold text-canvas-base hover:shadow-xl hover:shadow-brand-500/20 transition-all duration-300 hover:scale-[1.01]"
                  >
                    <Copy size={20} />
                    Generate Procurement Brief
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
