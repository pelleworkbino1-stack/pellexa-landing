import { useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Bean,
  Beaker,
  Boxes,
  ShieldCheck,
  Check,
  Anchor,
  ArrowRight,
} from 'lucide-react'
import { useLang } from '../../context/LangContext'
import type { CocoaFamilyId } from '../../markets/types'

/**
 * Cacao Derivatives Portfolio — rendered surface for the Phase 2 Sections 2/3/4/5
 * of `docs/cocoa_knowlage.md`. Mounted under the `/food` route, inside the `.theme-agri`
 * Tier 3 token scope established by `ThemeProvider`.
 *
 * 80/20 architectural color contract honored here:
 *   - 80% PRIMARY (Matcha — `brand-*`):
 *       headline gradient, CTA gradient buttons, hover border tints, floating
 *       icon glyph fills, ambient depth-orb backgrounds. Matcha owns vertical
 *       luminance only.
 *   - 20% SECONDARY (Cocoa — `brand-secondary-*`):
 *       uppercase tracking-widest eyebrows, family pillar pill chips,
 *       application-row numbering, 1px solid row divider rules
 *       (`border-brand-secondary-400/15` per spec), background material grid
 *       lines. Cocoa owns horizontal grounding only — never gradient-mixed
 *       with matcha.
 *   - UNIVERSAL (Silver Anchor):
 *       table value typography, checkbox borders, outer section boundary
 *       hairlines. Never tinted, never swapped.
 *
 * Motion + blur primitives are reused 1:1 from the existing matcha vertical
 * (same `ease: [0.22, 1, 0.36, 1]` curve, same in-view margin `'-60px'`,
 * same `blur-[130px]` orb strength, same `grid-pulse` 8s interval).
 */

const FAMILY_PILL_LABEL: Record<CocoaFamilyId, string> = {
  powder: 'Cocoa Powder',
  butter: 'Cocoa Butter',
  liquor: 'Cocoa Liquor',
}

const FAMILY_ICON: Record<CocoaFamilyId, typeof Bean> = {
  powder: Boxes,
  butter: Beaker,
  liquor: Bean,
}

const FADE_EASE = [0.22, 1, 0.36, 1] as const

function OverviewCard({
  family,
  title,
  overview,
  cta,
  delay,
  inView,
  gradeCount,
}: {
  family: CocoaFamilyId
  title: string
  overview: string
  cta: string
  delay: number
  inView: boolean
  gradeCount: number
}) {
  const Icon = FAMILY_ICON[family]
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: FADE_EASE }}
      className="group relative rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 p-8 hover:border-brand-500/30 transition-all duration-500 h-full flex flex-col"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon size={24} className="text-brand-400" />
      </div>

      <span className="inline-flex self-start items-center gap-2 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/20 px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-3">
        <span className="inline-block w-1 h-1 rounded-full bg-brand-secondary-400/70" />
        {FAMILY_PILL_LABEL[family]}
        <span className="text-brand-secondary-300/60">· {gradeCount}</span>
      </span>

      <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-brand-400 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-ink-dim leading-relaxed mb-6 flex-1">
        {overview}
      </p>

      <a
        href="#cocoa-cta"
        className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:gap-3 transition-all duration-300"
      >
        {cta}
        <ArrowRight size={16} className="rtl:rotate-180" />
      </a>
    </motion.article>
  )
}

function CocoaCheckbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`w-full flex items-start gap-3 p-3 rounded-lg border-2 text-left rtl:text-right transition-all ${
        checked
          ? 'bg-brand-500/8 border-brand-500/30'
          : 'bg-canvas-elevated/40 border-silver-anchor/10 hover:border-silver-anchor/20'
      }`}
    >
      <span
        className={`mt-0.5 w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
          checked
            ? 'bg-brand-500/60 border-brand-400/70'
            : 'border-silver-anchor/30 bg-canvas-elevated/60'
        }`}
      >
        {checked && (
          <Check size={12} className="text-silver-anchor" strokeWidth={3} />
        )}
      </span>
      <span
        className={`text-sm leading-snug ${
          checked ? 'text-brand-300' : 'text-ink-body'
        }`}
      >
        {label}
      </span>
    </button>
  )
}

export default function CocoaPortfolio() {
  const { content } = useLang()
  const cocoa = content.cocoa

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const gradesByFamily = useMemo(() => {
    const map = new Map<CocoaFamilyId, number>()
    for (const g of cocoa.grades) {
      map.set(g.family, (map.get(g.family) ?? 0) + 1)
    }
    return map
  }, [cocoa.grades])

  const allChecklistItems = useMemo(() => {
    return cocoa.qualityControl.analyticalGroups.flatMap((g) =>
      g.metrics.map((m) => `${g.title} — ${m}`),
    )
  }, [cocoa.qualityControl.analyticalGroups])

  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (key: string, value: boolean) =>
    setChecked((prev) => ({ ...prev, [key]: value }))

  return (
    <section
      id="cocoa-portfolio"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute top-0 left-1/3 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[130px] mix-blend-screen"
          style={{ animation: 'matcha-breathe 9s ease-in-out infinite' }}
        />
        <div
          className="absolute bottom-0 right-1/4 h-[480px] w-[480px] rounded-full bg-brand-400/10 blur-[140px] mix-blend-screen"
          style={{ animation: 'matcha-breathe 11s ease-in-out 1.5s infinite' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(var(--brand-secondary-glow), 0.04) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
            animation: 'grid-pulse 8s ease-in-out infinite',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8" ref={ref}>
        {/* — Section header — */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: FADE_EASE }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-secondary-500/10 border border-brand-secondary-400/20 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-5">
            <span className="inline-block w-1 h-1 rounded-full bg-brand-secondary-400/80" />
            Cacao Derivatives Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight text-white mb-5">
            Single-origin{' '}
            <span className="bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 bg-clip-text text-transparent">
              cacao asset classes
            </span>{' '}
            for enterprise formulation
          </h2>
          <p className="text-base sm:text-lg text-ink-muted leading-relaxed">
            Three technical pillars — powder, butter, and liquor — registered as
            discrete grade SKUs and routed through a unified compliance and
            logistics gate.
          </p>
        </motion.div>

        {/* — Section 2: Family overview cards — */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cocoa.overviews.map((o, i) => (
            <OverviewCard
              key={o.id}
              family={o.id}
              title={o.title}
              overview={o.overview}
              cta={o.cta}
              gradeCount={gradesByFamily.get(o.id) ?? 0}
              delay={0.12 + i * 0.08}
              inView={inView}
            />
          ))}
        </div>

        {/* — Section 3: Industrial Applications Matrix — */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: FADE_EASE }}
          className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 backdrop-blur-sm p-6 sm:p-10 mb-20"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div className="max-w-2xl">
              <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-2">
                Section 03 · Applications Matrix
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
                {cocoa.applications.title}
              </h3>
              <p className="text-sm sm:text-base text-ink-dim leading-relaxed">
                {cocoa.applications.intro}
              </p>
            </div>
          </div>

          {/* Desktop / tablet table — cocoa hairline row dividers */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-brand-secondary-400/30">
                  <th className="w-[10%] pb-3 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300">
                    #
                  </th>
                  <th className="w-[26%] pb-3 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300">
                    {cocoa.applications.columns.derivative}
                  </th>
                  <th className="w-[38%] pb-3 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300">
                    {cocoa.applications.columns.application}
                  </th>
                  <th className="w-[26%] pb-3 text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300">
                    {cocoa.applications.columns.valueProposition}
                  </th>
                </tr>
              </thead>
              <tbody>
                {cocoa.applications.rows.map((row, i) => (
                  <tr
                    key={row.derivative}
                    className="border-b border-brand-secondary-400/15 last:border-b-0 align-top"
                  >
                    <td className="py-5 pe-4 font-mono text-xs text-brand-secondary-300/80">
                      {String(i + 1).padStart(2, '0')}
                    </td>
                    <td className="py-5 pe-4">
                      <span className="block text-sm font-semibold text-silver-anchor leading-snug">
                        {row.derivative}
                      </span>
                    </td>
                    <td className="py-5 pe-4">
                      <span className="block text-sm text-ink-body leading-relaxed">
                        {row.application}
                      </span>
                    </td>
                    <td className="py-5">
                      <span className="block text-sm text-ink-muted leading-relaxed">
                        {row.valueProposition}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards — same cocoa hairline rhythm */}
          <ul className="md:hidden space-y-0">
            {cocoa.applications.rows.map((row, i) => (
              <li
                key={row.derivative}
                className="border-t border-brand-secondary-400/15 first:border-t-0 py-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-[11px] text-brand-secondary-300/80">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300">
                    {cocoa.applications.columns.derivative}
                  </span>
                </div>
                <p className="text-sm font-semibold text-silver-anchor leading-snug mb-3">
                  {row.derivative}
                </p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-1.5">
                  {cocoa.applications.columns.application}
                </p>
                <p className="text-sm text-ink-body leading-relaxed mb-3">
                  {row.application}
                </p>
                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-1.5">
                  {cocoa.applications.columns.valueProposition}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {row.valueProposition}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* — Section 4: QC + Certifications + Interactive checklist — */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25, ease: FADE_EASE }}
          className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 backdrop-blur-sm p-6 sm:p-10 mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20">
              <ShieldCheck size={20} className="text-brand-400" />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300">
              Section 04 · Trust Infrastructure
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-3">
            {cocoa.qualityControl.title}
          </h3>
          <p className="text-sm sm:text-base text-ink-dim leading-relaxed max-w-3xl mb-10">
            {cocoa.qualityControl.intro}
          </p>

          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10">
            {/* Left: Analytical groups + Certifications */}
            <div>
              <h4 className="text-base font-semibold text-white mb-5 pb-3 border-b border-brand-secondary-400/15">
                {cocoa.qualityControl.analyticalTitle}
              </h4>
              <div className="space-y-7 mb-10">
                {cocoa.qualityControl.analyticalGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-sm font-semibold text-silver-anchor mb-1.5">
                      {group.title}
                    </p>
                    <p className="text-sm text-ink-dim leading-relaxed mb-3">
                      {group.summary}
                    </p>
                    <ul className="space-y-1.5">
                      {group.metrics.map((m) => (
                        <li
                          key={m}
                          className="flex items-start gap-2.5 text-sm text-ink-body"
                        >
                          <span className="mt-2 inline-block w-1 h-1 rounded-full bg-brand-secondary-400 shrink-0" />
                          <span className="leading-relaxed">{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h4 className="text-base font-semibold text-white mb-5 pb-3 border-b border-brand-secondary-400/15">
                {cocoa.qualityControl.certificationsTitle}
              </h4>
              <div className="space-y-4">
                {cocoa.qualityControl.certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="rounded-xl border border-silver-anchor/10 bg-canvas-elevated/40 p-4"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <ShieldCheck size={14} className="text-brand-400" />
                      <p className="text-sm font-semibold text-silver-anchor">
                        {cert.title}
                      </p>
                    </div>
                    <p className="text-sm text-ink-dim leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Interactive procurement checklist */}
            <div>
              <div className="sticky top-24 rounded-2xl border border-brand-secondary-400/20 bg-canvas-elevated/40 p-5 sm:p-6">
                <p className="text-[10px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-1.5">
                  Procurement Gate
                </p>
                <p className="text-base font-semibold text-white mb-2">
                  {cocoa.qualityControl.checklistLabel}
                </p>
                <p className="text-xs text-ink-dim leading-relaxed mb-5">
                  {cocoa.qualityControl.checklistHelp}
                </p>

                <div className="space-y-1.5">
                  {allChecklistItems.map((item) => (
                    <CocoaCheckbox
                      key={item}
                      checked={Boolean(checked[item])}
                      onChange={(v) => toggle(item, v)}
                      label={item}
                    />
                  ))}
                </div>

                <a
                  href="#cocoa-cta"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-400 px-5 py-3 text-sm font-semibold text-canvas-base hover:shadow-lg hover:shadow-brand-500/20 transition-all duration-300 hover:scale-[1.01]"
                >
                  Issue Specification Pack
                  <ArrowRight size={15} className="rtl:rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* — Section 5: Logistics Statement — */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: FADE_EASE }}
          className="rounded-2xl border border-silver-anchor/5 bg-canvas-overlay/30 backdrop-blur-sm p-6 sm:p-10 mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20">
              <Anchor size={20} className="text-brand-400" />
            </span>
            <span className="text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300">
              Section 05 · Logistical Authority
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-5">
            {cocoa.logistics.title}
          </h3>
          <div className="space-y-4">
            {cocoa.logistics.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-sm sm:text-base text-ink-body leading-relaxed max-w-4xl"
              >
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* — Section 5: Master Conversion CTA — */}
        <motion.div
          id="cocoa-cta"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: FADE_EASE }}
          className="relative rounded-2xl border border-brand-500/25 bg-gradient-to-br from-brand-500/[0.06] to-brand-400/[0.02] p-6 sm:p-10 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-brand-500/15 blur-[120px] mix-blend-screen"
          />
          <div className="relative">
            <span className="inline-block text-[11px] font-bold tracking-widest uppercase text-brand-secondary-300 mb-3">
              {cocoa.masterCTA.sectionLabel}
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight mb-6 max-w-3xl">
              {cocoa.masterCTA.headline}
            </h3>
            <div className="space-y-4 mb-8">
              {cocoa.masterCTA.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-ink-body leading-relaxed max-w-3xl"
                >
                  {p}
                </p>
              ))}
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-brand-400 px-7 py-3.5 text-sm sm:text-base font-semibold text-canvas-base shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-[1.03]"
            >
              {cocoa.masterCTA.cta}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
