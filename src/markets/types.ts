export type MarketId = 'il' | 'ph' | 'global' | 'matcha'

export interface SelectOption {
  value: string
  label: string
}

export interface MarketMeta {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  twitterTitle: string
  twitterDescription: string
}

export interface NavContent {
  links: { label: string; href: string }[]
  cta: string
  backTitle: string
}

export interface HeroContent {
  badge: string
  headlineTop: string
  headlineHighlight: string
  headlineBottom: string
  sub: string
  cta1: string
  cta2: string
  stats: { value: string; label: string }[]
}

export interface WhyPellexaContent {
  sectionLabel: string
  titleMain: string
  titleFaded: string
  subtitle: string
  stats: {
    value: string
    label: string
    description: string
    /** Optional content-driven icon name. Falls back to the position-based set when omitted. */
    icon?: string
  }[]
}

export interface AdvantageContent {
  sectionLabel: string
  titleMain: string
  titleFaded: string
  subtitle: string
  features: { title: string; description: string }[]
}

export interface SolutionsContent {
  sectionLabel: string
  title: string
  subtitle: string
  items: {
    tag: string
    title: string
    description: string
    highlights: string[]
    requestQuote: string
    /** Optional content-driven icon name. Falls back to the position-based LED icon set when omitted. */
    icon?: string
    /** Optional content-driven image path. When omitted, an abstract icon-only banner is rendered. */
    image?: string
    /**
     * Optional internal route target for the CTA. When present, the
     * "Request Quote" link renders as a React Router <Link> pointing to
     * this path (e.g. '/acrylic'). When omitted, the CTA falls back to the
     * page-local '#contact' anchor — preserving the legacy behavior for
     * every standard LED solution card.
     */
    link?: string
  }[]
}

export interface ShowcaseContent {
  visible: boolean
  sectionLabel: string
  title: string
  subtitle: string
  projects: {
    imageKey: string
    category: string
    title: string
    location: string
    specs: string
    span: string
    featured: boolean
    badge: string
    caption: string
  }[]
}

export interface ProcessContent {
  sectionLabel: string
  title: string
  subtitle: string
  steps: { number: string; title: string; description: string }[]
}

export interface FAQContent {
  sectionLabel: string
  title: string
  subtitle: string
  items: { question: string; answer: string }[]
}

export interface ContactContent {
  sectionLabel: string
  title: string
  titleHighlight: string
  subtitle: string
  benefits: string[]
  emailCardLabel: string
  copy: string
  copied: string
  whatsapp?: {
    label: string
    number: string
    displayNumber: string
    chatText: string
  }

  /**
   * Hardened sourcing-scope disclaimer. Pellexa is a sourcing agency, not an
   * installation contractor — this text is the single source of truth for that
   * boundary and is reproduced verbatim from `parent-en.ts` / `parent-he.ts`.
   */
  disclaimer: {
    title: string
    body: string
  }

  form: {
    title: string
    subtitle: string
    requiredNote: string

    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    companyLabel: string
    companyPlaceholder: string
    countryLabel: string
    countryHint: string
    countryPlaceholder: string

    projectTypeLabel: string
    projectTypeHint: string
    projectTypeOptions: SelectOption[]

    screenSizeLabel: string
    screenSizeHint: string
    screenSizePlaceholder: string

    specsLabel: string
    specsHint: string
    specsPlaceholder: string

    submitBtn: string
    submittingBtn: string
    successTitle: string
    successBody: string
    sendAnother: string
    errorGeneric: string
    errorCopy: string
    errorMailto: string
  }
}

export interface FooterContent {
  tagline: string
  copyright: string
  privacy: string
  terms: string
}

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — content registry types (Phase 1 data plumbing)
//
// Source of truth: docs/cocoa_knowlage.md
//   - Section 1 → discrete grade catalog (`CocoaDerivativeGrade[]`)
//   - Section 2 → per-family overview blocks (`CocoaFamilyOverview[]`)
//   - Section 3 → applications matrix (`CocoaApplicationsMatrix`)
//   - Section 5 → logistics statement (`CocoaLogisticsContent`) and the master
//                 conversion CTA (`CocoaMasterCTAContent`).
//
// Framing is white-label — these types intentionally carry no supplier brand,
// processing-facility name, or proprietary identifier. Every record is a pure
// technical asset class registered against a premium global enterprise network.
// ─────────────────────────────────────────────────────────────────────────────

/** Identifier slug for each derivative family pillar in the Cacao portfolio. */
export type CocoaFamilyId = 'powder' | 'butter' | 'liquor'

/** Identifier slug for each individual derivative grade SKU. */
export type CocoaGradeId =
  | 'powder-industrial-10-12'
  | 'powder-premium-22-24'
  | 'powder-ultra-30'
  | 'butter-prime-press-deodorized'
  | 'butter-prime-press-natural'
  | 'liquor-unsweetened-blocks'
  | 'liquor-unsweetened-coins'

/**
 * A single derivative grade row inside one of the three family pillars.
 * Encodes the Section 1 grade catalog without inventing any technical metric
 * beyond what `docs/cocoa_knowlage.md` declares verbatim.
 */
export interface CocoaDerivativeGrade {
  id: CocoaGradeId
  family: CocoaFamilyId
  /** Display label, e.g. "Standard Industrial Grade". */
  label: string
  /** Optional fat-content marker, e.g. "10%–12% Fat Content". */
  fatContent?: string
  /** Optional processing classification, e.g. "Alkalized (Dutched)". */
  processing?: string
  /** Optional commercial format marker, e.g. "High-Surface-Area Coin Format". */
  format?: string
}

/**
 * Section 2 — one verbatim portfolio overview block per derivative family.
 * `cta` is the bracketed CTA label that closes the block in the source file.
 */
export interface CocoaFamilyOverview {
  id: CocoaFamilyId
  title: string
  overview: string
  cta: string
}

/**
 * Section 3 — single row of the High-Value Industrial & Commercial Applications
 * Matrix. All three fields are ingested verbatim from `docs/cocoa_knowlage.md`.
 */
export interface CocoaApplicationRow {
  /** e.g. "Standard Industrial Powder (10%–12% Fat Natural / Alkalized)". */
  derivative: string
  /** Verbatim "High-Value Application Target" cell. */
  application: string
  /** Verbatim "Corporate Value Proposition" cell. */
  valueProposition: string
}

/** Section 3 matrix container — title, intro sentence, column labels, rows. */
export interface CocoaApplicationsMatrix {
  title: string
  intro: string
  columns: {
    derivative: string
    application: string
    valueProposition: string
  }
  rows: CocoaApplicationRow[]
}

/**
 * Section 5 — Supply Continuity & Global Maritime Logistics Statement.
 * `paragraphs` preserves the natural paragraph break from the source file.
 */
export interface CocoaLogisticsContent {
  title: string
  paragraphs: string[]
}

/** Section 5 — Conversion-Oriented Lead Generation (the master conversion CTA). */
export interface CocoaMasterCTAContent {
  sectionLabel: string
  headline: string
  paragraphs: string[]
  cta: string
}

/**
 * Section 4 — single analytical-parameter group inside the Quality-Control
 * Benchmarks block (Chemical & Physical / Heavy Metal & Chemical / Microbiological).
 * `metrics` is the verbatim list of bullet-form parameter strings as authored
 * in the source file; the component layer presents them as an interactive
 * checklist but does NOT alter, summarize, or invent any bound.
 */
export interface CocoaQualityControlGroup {
  /** e.g. "Chemical & Physical Testing". */
  title: string
  /** Lead-in sentence verbatim from the source. */
  summary: string
  /** Verbatim parameter strings (e.g. "Moisture tolerances (maximum 3.0% – 4.0%)"). */
  metrics: string[]
}

/**
 * Section 4 — single Institutional Trust & Global Market Badges entry
 * (HACCP / GMP, US-FDA & Local FDA, Halal + Non-GMO + Kosher pathway).
 */
export interface CocoaCertification {
  title: string
  description: string
}

/**
 * Section 4 — Trust Infrastructure: Quality-Control & Corporate Certifications.
 * Two stacked subsections (analytical parameters + institutional badges) plus a
 * small checklist scaffold so the rendered component can act as an interactive
 * procurement-side specification gate.
 */
export interface CocoaQualityControlContent {
  /** Section 4 master title, verbatim. */
  title: string
  /** Section 4 lead-in paragraph, verbatim. */
  intro: string
  /** "Quality-Control Benchmarks & Analytical Parameters" subsection title. */
  analyticalTitle: string
  /** Verbatim parameter groups (chemical / heavy metals / microbiological). */
  analyticalGroups: CocoaQualityControlGroup[]
  /** "Institutional Trust & Global Market Badges" subsection title. */
  certificationsTitle: string
  /** Verbatim institutional badge entries. */
  certifications: CocoaCertification[]
  /** Helper label rendered above the interactive checklist column. */
  checklistLabel: string
  /** Helper subtext under the checklist label. */
  checklistHelp: string
}

/**
 * Section chrome for the Cacao Derivatives Portfolio — the eyebrows, headline
 * fragments, and standalone CTAs that were previously hardcoded English inside
 * `CocoaPortfolio.tsx`. Extracted so `/food/cacao` reaches EN/HE parity.
 *
 * The headline is stored as three fragments because the middle one carries the
 * `bg-clip-text` brand gradient; joining them into one string would flatten
 * that treatment.
 */
export interface CocoaShellContent {
  eyebrow: string
  headlineLead: string
  headlineHighlight: string
  headlineTail: string
  subtitle: string
  applicationsEyebrow: string
  trustEyebrow: string
  logisticsEyebrow: string
  procurementGateLabel: string
  specPackCta: string
  /** Pill chip above each overview card. Keyed so a family cannot be missed. */
  familyLabels: Record<CocoaFamilyId, string>
}

/** Top-level Cacao Derivatives Portfolio content registry mounted on `ParentContent.cocoa`. */
export interface CocoaPortfolioContent {
  /** Drives document.title + og/twitter tags on /food/cacao, per locale. */
  meta: VerticalMeta
  shell: CocoaShellContent
  grades: CocoaDerivativeGrade[]
  overviews: CocoaFamilyOverview[]
  applications: CocoaApplicationsMatrix
  qualityControl: CocoaQualityControlContent
  logistics: CocoaLogisticsContent
  masterCTA: CocoaMasterCTAContent
}

// ─────────────────────────────────────────────────────────────────────────────
// Agri-Food Portfolio — public catalog for the /food hub.
//
// Source of truth: `docs/Pellexa Profile&Operating Model.MD` §5 (product
// categories) and §1 (FCL-and-above entry threshold). Every category in this
// registry operates strictly at Full Container Load volumes and above — no
// sub-FCL, LCL, or low-MOQ entry exists in the model, and no copy mounted
// against these types may imply otherwise.
// ─────────────────────────────────────────────────────────────────────────────

/** Identifier slug for each public Agri-Food portfolio category. */
export type FoodCategoryId =
  | 'matcha'
  | 'tea'
  | 'cacao'
  | 'coconut'
  | 'seed-oils'
  | 'rice'
  | 'pasta'
  | 'canned'
  | 'dry-goods'

/**
 * One public portfolio card on the /food hub. Every card resolves to the
 * page-local '#contact' anchor — the dedicated product-line routes were
 * consolidated into the hub, so no card deep-links out of /food any more.
 * Icons are deliberately absent — the registry stays a pure `.ts` data module;
 * `FoodPage.tsx` owns the `Record<FoodCategoryId, LucideIcon>` map.
 */
export interface FoodCategory {
  id: FoodCategoryId
  title: string
  description: string
  /** Short form/grade chips, e.g. "Copra", "Virgin Oil". */
  chips: string[]
  /** Eyebrow label, e.g. "Active Product Line" / "Bulk Wholesale". */
  tag: string
  /** CTA label for the card footer. */
  cta: string
  /** Page-local anchor — '#contact' for all nine categories. */
  href: string
}

/**
 * Parent-level operational-scope boundary (freight / customs / importer of
 * record). Canonical shape for `ParentContent.scopeDisclaimer`, mounted on
 * `/sourcing` and `/acrylic` by `ScopeDisclaimer`.
 */
export interface ScopeDisclaimerContent {
  title: string
  body: string
  points: string[]
}

/**
 * Agri-food disclaimer uses the same shape. Alias keeps `FoodPortfolioContent`
 * and `OperationalDisclaimer` decoupled from the parent field name.
 */
export type FoodDisclaimerContent = ScopeDisclaimerContent

/**
 * One stage of the published Agri-Food operating model. Rendered as a numbered
 * card by `OperationalDisclaimer` above the scope panel.
 */
export interface FoodOperatingStage {
  /** Ordinal badge, e.g. "01". */
  label: string
  title: string
  body: string
}

/**
 * The five-stage B2B execution model: FCL floor, staged verification pipeline,
 * legal/commercial framework, third-party QC and insurance, and CIF/DDP
 * shipping coordination. Every stage must stay inside the operational boundary
 * declared by `ScopeDisclaimerContent` — no stage may imply that Pellexa acts as
 * freight forwarder, customs broker, or importer of record.
 */
export interface FoodOperatingModelContent {
  sectionLabel: string
  title: string
  subtitle: string
  stages: FoodOperatingStage[]
}

/**
 * Copy for the Agri-Food enterprise procurement CTA on /food and /food/matcha.
 *
 * Sourced under `LangProvider` so English and Hebrew stay at compile-enforced
 * parity. The inbox lives on `FoodPortfolioContent.email`, not here.
 */
export interface FoodContactContent {
  sectionLabel: string
  title: string
  titleHighlight: string
  subtitle: string
  benefits: string[]
  emailCardLabel: string
  copy: string
  copied: string
  /** Heading above the portfolio-scope pillars in the CTA panel. */
  scopeTitle: string
  /** Portfolio scope pillars. Exactly three, matched 1:1 to icons in FoodContact. */
  scopePoints: { title: string; body: string }[]
  /** Primary mailto CTA label. */
  ctaLabel: string
  /** Subject line for the mailto: link. */
  mailtoSubject: string
  /** Shown under the CTA when no mail client opens. */
  fallbackNote: string
  /** States that lab documentation and COA are released on commercial qualification. */
  qualificationNote: string
}

/** Top-level Agri-Food portfolio registry mounted on `ParentContent.food`. */
export interface FoodPortfolioContent {
  /** Drives document.title + og/twitter tags on the /food hub, per locale. */
  meta: VerticalMeta
  sectionLabel: string
  title: string
  subtitle: string
  /** Hard structural gate rendered as a badge, e.g. "FCL Minimums — 20ft / 40ft". */
  fclBadge: string
  /**
   * Agri-Food vertical inbox. Deliberately separate from the general
   * `ParentContent.contact.email`, which still serves the homepage across LED,
   * General Sourcing, and Agri-Food enquiries.
   */
  email: string
  categories: FoodCategory[]
  contact: FoodContactContent
  operatingModel: FoodOperatingModelContent
  disclaimer: FoodDisclaimerContent
}

// ─────────────────────────────────────────────────────────────────────────────
// Industrial sourcing verticals — `/sourcing` and `/acrylic` content registries.
//
// Collections are keyed `Record`s rather than arrays: `Record<Id, T>` makes TS
// error on BOTH a missing and an extra key, so EN and HE cannot drift in
// cardinality. Fixed-length chip/highlight groups use tuples for the same
// reason — `string[]` would silently accept two chips in one locale and four in
// the other. Presentation order lives in the page components, not here, so the
// registries stay pure `.ts` data modules with no React import.
// ─────────────────────────────────────────────────────────────────────────────

/** Per-route SEO block. Drives `document.title` and the og/twitter meta pair. */
export interface VerticalMeta {
  title: string
  description: string
}

/** Exactly three capability chips per card, in every locale. */
export type ChipTriple = readonly [string, string, string]

export type SourcingPillarId =
  | 'heavy-equipment'
  | 'construction-materials'
  | 'precision-acrylic'
  | 'luxury-packaging'

/**
 * One of the four equal-weight verticals on `/sourcing`. There is deliberately
 * no "featured" flag: the pillars carry identical chrome and differ only in
 * `link`, which is what keeps the grid balanced.
 */
export interface SourcingPillar {
  title: string
  /** Volume-class eyebrow, e.g. "Industrial / FCL-scale". */
  tag: string
  description: string
  chips: ChipTriple
  cta: string
  /**
   * Internal route target. Present only on 'precision-acrylic' ('/acrylic').
   * When omitted the card resolves to the page-local '#contact' anchor.
   */
  link?: string
}

export interface GeneralSourcingContent {
  meta: VerticalMeta
  email: string
  hero: {
    eyebrow: string
    headlineTop: string
    headlineHighlight: string
    sub: string
    /** Dual-MOQ structural gate: FCL for industrial, dynamic for specialized. */
    moqBadge: string
  }
  pillars: {
    sectionLabel: string
    title: string
    subtitle: string
    items: Record<SourcingPillarId, SourcingPillar>
  }
  contact: {
    title: string
    body: string
    ctaLabel: string
    /** Kept ASCII in every locale — matches `food.contact.mailtoSubject`. */
    mailtoSubject: string
  }
}

export type AcrylicSurfaceId =
  | 'archival-preservation'
  | 'museum-gallery'
  | 'luxury-retail'
  | 'engineered-pmma'

export interface AcrylicSurface {
  tag: string
  title: string
  description: string
  highlights: ChipTriple
}

export type AcrylicSpecId =
  | 'thickness'
  | 'format'
  | 'clarity'
  | 'tolerance'
  | 'finishes'
  | 'leadTime'
  | 'moq'
  | 'compliance'

export interface AcrylicSpecRow {
  label: string
  value: string
}

/**
 * Pre-filled consultation email brief. The ASCII rule/box frame is assembled in
 * the page component and stays identical across locales; only these labels are
 * translated, so a Hebrew brief still renders predictably in an LTR mail client.
 */
export interface AcrylicBriefContent {
  heading: string
  orgTitle: string
  orgFields: readonly [string, string, string]
  surfaceTitle: string
  surfaceOptions: readonly [string, string, string, string, string]
  profileTitle: string
  profileFields: readonly [string, string, string, string, string, string]
  contactTitle: string
  contactFields: readonly [string, string, string]
  signoff: string
}

export interface AcrylicSourcingContent {
  meta: VerticalMeta
  email: string
  hero: {
    eyebrow: string
    headlineTop: string
    headlineHighlight: string
    sub: string
    moqBadge: string
  }
  surfaces: {
    sectionLabel: string
    title: string
    items: Record<AcrylicSurfaceId, AcrylicSurface>
  }
  specs: {
    sectionLabel: string
    title: string
    rows: Record<AcrylicSpecId, AcrylicSpecRow>
    /**
     * States that every row is a partner-capability baseline, not a
     * Pellexa-owned plant spec. Compliance-bearing — do not soften.
     */
    footnote: string
  }
  intake: {
    title: string
    subtitle: string
    benefits: readonly [string, string, string]
    ctaLabel: string
    secondaryLabel: string
    mailtoSubject: string
    brief: AcrylicBriefContent
  }
}

export interface SourcingProcessStage {
  label: string
  title: string
  body: string
}

/**
 * Five-stage partner-production pipeline shared by `/sourcing` and `/acrylic`.
 * Stage 05 carries the CIF-baseline and non-importer-of-record boundary; that
 * sentence is compliance-bearing and its meaning must survive every locale.
 */
export interface SourcingProcessContent {
  sectionLabel: string
  title: string
  stages: readonly [
    SourcingProcessStage,
    SourcingProcessStage,
    SourcingProcessStage,
    SourcingProcessStage,
    SourcingProcessStage,
  ]
}

/** UI strings for the mailto CTA's copy-to-clipboard fallback. */
export interface MailtoFallbackContent {
  copy: string
  copied: string
  fallbackNote: string
  /** Copy button label when the oversize guard has stripped the brief body. */
  copyBrief: string
  /** Confirmation for `copyBrief`. */
  copiedBrief: string
  /**
   * Replaces `fallbackNote` when the guard trips, telling the buyer the mail
   * client opened with the subject only and the brief is on the clipboard.
   */
  oversizeNote: string
}

export interface ParentContent {
  meta: { title: string }
  nav: { links: { label: string; href: string }[]; cta: string }
  hero: {
    badge: string
    headlineTop: string
    headlineHighlight: string
    headlineBottom: string
    subtitle: string
    cta1: string
    cta2: string
  }
  solutions: {
    sectionLabel: string
    title: string
    subtitle: string
    ledTitle: string
    ledDescription: string
    foodTitle: string
    foodDescription: string
    /** General Sourcing vertical — industrial and specialized partner-sourced lines. */
    generalTitle: string
    generalDescription: string
    /** Category labels rendered as silver-anchor pill chips. */
    generalCategories: string[]
    /** Origin footprint, e.g. "Asia Manufacturing Hubs". */
    generalOriginLabel: string
    /** Structural-gate badge ("FCL Minimums — Dynamic MOQ for Specialized Lines"). */
    generalMOQBadge: string
    /** Target market label, e.g. "Enterprise & Luxury Accounts". */
    generalTargetLabel: string
    learnMore: string
    newVertical: string
    comingSoon: string
  }
  about: {
    sectionLabel: string
    titleMain: string
    titleFaded: string
    subtitle: string
    /**
     * Named executive-leadership attribution rendered under the About
     * subtitle. Required so both locale registries stay at compile-enforced
     * parity. Single pre-composed string (label + name + role) so each locale
     * owns its punctuation and bidi ordering.
     */
    leadership: string
    pillars: { title: string; description: string }[]
  }
  contact: { title: string; subtitle: string; email: string; cta1: string }
  footer: { tagline: string; copyright: string; privacy: string; terms: string }
  /**
   * Operational-scope disclaimer for industrial sourcing verticals (`/sourcing`,
   * `/acrylic`). Last bullet states the dual-MOQ policy — not agri-food FCL-only.
   */
  scopeDisclaimer: ScopeDisclaimerContent
  /**
   * Cacao Derivatives Portfolio registry — Phase 1+2 data plumbing.
   * Sourced verbatim from `docs/cocoa_knowlage.md` (Sections 1, 2, 3, 4, 5).
   * Phase 1 mounted §§1/2/3/5; Phase 2 extends with §4 (Trust Infrastructure)
   * and powers the rendered `CocoaPortfolio` component on /food.
   */
  cocoa: CocoaPortfolioContent
  /**
   * Public Agri-Food portfolio catalog — powers the nine-category grid on the
   * /food hub and the operational-scope disclaimer mounted across every
   * /food route.
   */
  food: FoodPortfolioContent
  /** `/sourcing` — four equal institutional verticals under one operating model. */
  sourcing: GeneralSourcingContent
  /** `/acrylic` — precision PMMA, archival, museum, luxury, collector surfaces. */
  acrylic: AcrylicSourcingContent
  /** Partner-production pipeline shared by `/sourcing` and `/acrylic`. */
  sourcingProcess: SourcingProcessContent
  /** Copy-to-clipboard fallback strings shared by both vertical CTAs. */
  mailtoFallback: MailtoFallbackContent
}

export interface MarketConfig {
  id: MarketId
  lang: 'he' | 'en'
  dir: 'rtl' | 'ltr'
  name: string
  nameLocal: string
  timezone: string
  locale: string
  meta: MarketMeta
  nav: NavContent
  hero: HeroContent
  whyPellexa: WhyPellexaContent
  advantage: AdvantageContent
  solutions: SolutionsContent
  showcase: ShowcaseContent
  process: ProcessContent
  faq: FAQContent
  contact: ContactContent
  footer: FooterContent
}
