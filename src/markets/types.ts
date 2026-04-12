export type MarketId = 'il' | 'ph' | 'global'

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
  contact: { title: string; subtitle: string; cta1: string; cta2: string }
  footer: { tagline: string; copyright: string; privacy: string; terms: string }
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
