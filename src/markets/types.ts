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
  stats: { value: string; label: string; description: string }[]
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

  preview: {
    ready: string
    readySub: string
    sendTo: string
    copyText: string
    copiedClipboard: string
    openEmail: string
    goBack: string
    attachTitle: string
    attachPhotos: string
    attachDrawings: string
  }

  form: {
    title: string
    subtitle: string
    allOptional: string
    generateBtn: string
    importantAttach: string
    sitePhotos: string
    sitePhotosDetail: string
    archDrawings: string
    archDrawingsDetail: string

    sections: { title: string; desc: string }[]

    installLabel: string
    installHint: string
    indoorLabel: string
    indoorDesc: string
    outdoorLabel: string
    outdoorDesc: string
    otherLabel: string
    otherDesc: string
    describePlaceholder: string

    primaryUseLabel: string
    primaryUseHint: string
    chooseOption: string
    primaryUseOptions: SelectOption[]
    describeUse: string

    viewingLabel: string
    viewingHint: string
    viewingPlaceholder: string
    meters: string

    sizeLabel: string
    sizeHint: string
    widthLabel: string
    heightLabel: string
    sizePlaceholder: string
    mUnit: string

    measureLabel: string
    measureHint: string
    displayArea: string
    displayAreaDesc: string
    totalWall: string
    totalWallDesc: string
    notSureLabel: string
    notSureDesc: string

    shapeLabel: string
    shapeHint: string
    shapeOptions: SelectOption[]
    describeShape: string

    mountLabel: string
    mountHint: string
    mountOptions: SelectOption[]
    describeMount: string

    maintenanceLabel: string
    maintenanceHint: string
    frontAccess: string
    frontAccessDesc: string
    rearAccess: string
    rearAccessDesc: string
    maintenanceNotSure: string
    maintenanceNotSureDesc: string

    reinforcedLabel: string
    reinforcedHint: string
    yes: string
    no: string
    notSure: string

    featuresLabel: string
    transparentLabel: string
    transparentDesc: string
    flexibleLabel: string
    flexibleDesc: string
    ultraBrightLabel: string
    ultraBrightDesc: string
    otherFeatures: string

    contentTypeLabel: string
    contentTypeHint: string
    liveVideoLabel: string
    liveVideoDesc: string
    staticLabel: string
    staticDesc: string
    highResLabel: string
    highResDesc: string
    otherContent: string

    locationLabel: string
    locationHint: string
    locationPlaceholder: string
    dateLabel: string
    dateHint: string
    datePlaceholder: string

    nameLabel: string
    namePlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    phoneLabel: string
    phonePlaceholder: string
    notesLabel: string
    notesHint: string
    notesPlaceholder: string
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

/** Top-level Cacao Derivatives Portfolio content registry mounted on `ParentContent.cocoa`. */
export interface CocoaPortfolioContent {
  grades: CocoaDerivativeGrade[]
  overviews: CocoaFamilyOverview[]
  applications: CocoaApplicationsMatrix
  qualityControl: CocoaQualityControlContent
  logistics: CocoaLogisticsContent
  masterCTA: CocoaMasterCTAContent
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
    /** General Sourcing macro-category — opportunistic global mass-manufacturing channel. */
    generalTitle: string
    generalDescription: string
    /** Comma-separated category labels rendered as silver-anchor pill chips. */
    generalCategories: string[]
    /** Origin footprint, e.g. "Asia Manufacturing Hubs". */
    generalOriginLabel: string
    /** Bold structural-gate badge ("High MOQ — Min. 1,000 Units"). */
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
    pillars: { title: string; description: string }[]
  }
  contact: { title: string; subtitle: string; email: string; cta1: string; cta2: string }
  footer: { tagline: string; copyright: string; privacy: string; terms: string }
  /**
   * Cacao Derivatives Portfolio registry — Phase 1+2 data plumbing.
   * Sourced verbatim from `docs/cocoa_knowlage.md` (Sections 1, 2, 3, 4, 5).
   * Phase 1 mounted §§1/2/3/5; Phase 2 extends with §4 (Trust Infrastructure)
   * and powers the rendered `CocoaPortfolio` component on /food.
   */
  cocoa: CocoaPortfolioContent
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
