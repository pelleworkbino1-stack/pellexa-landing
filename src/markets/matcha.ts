import type { MarketConfig } from './types'

/**
 * Pellexa Matcha Sourcing — Global Supply Chain Agency product line within the
 * Agri-Food vertical (`/food/matcha`).
 *
 * Pellexa operates as a zero-inventory, asset-light global supply chain agency.
 * We do not maintain spot stock. Every engagement is a custom procurement pipeline
 * matched to the client's technical parameters, certification scope, and volume profile.
 *
 * Implements the full `MarketConfig` shape so the existing content-driven
 * section components (`Hero`, `WhyPellexa`, `Advantage`, `Solutions`, `Process`,
 * `FAQ`) can render against it without modification. The `contact` block is a
 * structural stub — `MatchaPage` renders the dedicated `FoodContact` component
 * instead of the LED `Contact` component, so most form fields are never
 * consumed at runtime.
 *
 * Brand identity for the matcha product line is now resolved by the route-based
 * ThemeProvider, which emits `.theme-agri` on `<html>` for any `/food/*` path.
 * That scope rebinds the Tier 3 `--brand-*` token group to Deep Matcha
 * (#0F5257) and activates `--brand-secondary-*` for the Cocoa Brown runway
 * (#8B5A2B). The legacy `.theme-matcha` CSS scope was retired in Phase 3
 * Target 3 — all per-component matcha rendering now flows through the
 * standard brand tokens with `market.id === 'matcha'` conditional branches
 * applying the 80/20 matcha/cocoa hierarchy.
 */
export const matcha: MarketConfig = {
  id: 'matcha',
  lang: 'en',
  dir: 'ltr',
  name: 'Matcha Sourcing',
  nameLocal: 'Matcha',
  timezone: 'UTC',
  locale: 'en',

  meta: {
    title: 'Pellexa Matcha Sourcing — Global Supply Chain Agency',
    description:
      'Pellexa is a global supply chain agency for premium and commercial-grade matcha. We connect large-scale buyers with vetted international manufacturing facilities — enforcing specification compliance, securing factory volume pricing, and managing full regulatory documentation.',
    ogTitle: 'Pellexa Matcha Sourcing — Global Supply Chain Agency',
    ogDescription:
      'Specification-driven matcha procurement for cafe chains, food manufacturers, and private-label brands. Multi-origin, zero spot inventory, direct factory access.',
    twitterTitle: 'Pellexa Matcha Sourcing — Global Supply Chain Agency',
    twitterDescription:
      'Strategic matcha procurement. Vetted origins. Specification-enforced. Direct factory alignment.',
  },

  nav: {
    links: [
      { label: 'Tiers', href: '#solutions' },
      { label: 'Pillars', href: '#advantage' },
      { label: 'Protocol', href: '#process' },
      { label: 'Inquiry', href: '#contact' },
    ],
    cta: 'Procurement Inquiry',
    backTitle: 'Back to Pellexa Agri-Food',
  },

  hero: {
    badge: 'Global Supply Chain Agency — Matcha',
    headlineTop: 'Global Matcha',
    headlineHighlight: 'Procurement',
    headlineBottom: 'Specification-Driven Procurement.',
    sub: "Pellexa acts as your dedicated strategic procurement partner, engineering multi-origin supply pipelines for premium and commercial-grade matcha. We bridge the gap between regional buyers and elite global manufacturing facilities — enforcing rigid quality metrics, securing tiered factory volume discounts, and verifying compliance documentation tailored to your specific market requirements.",
    cta1: 'Request Procurement Consultation',
    cta2: 'Review Supply Tiers',
    stats: [
      { value: 'Agency', label: 'Direct Factory Alignment' },
      { value: 'Custom', label: 'Spec-Matched Per Account' },
      { value: 'COA', label: 'Per-Batch Documentation' },
    ],
  },

  whyPellexa: {
    sectionLabel: 'Strategic Sourcing Framework',
    titleMain: 'We match buyers to factories.',
    titleFaded: 'Direct Factory Alignment.',
    subtitle:
      'Pellexa qualifies global manufacturing facilities against your technical parameters, then structures the supply relationship — so you access factory pricing, verified compliance, and batch traceability without building a procurement operation.',
    stats: [
      {
        value: 'JAS',
        label: 'Japanese Agricultural Standard',
        description:
          'Tier 01 manufacturing partners in designated Japanese matcha-producing regions, verified under JAS certification before engagement.',
      },
      {
        value: 'USDA NOP',
        label: 'US Organic Compliance',
        description:
          'Documentation pipelines built for FDA-facing distribution and US-retail organic compliance, managed as part of every procurement contract.',
      },
      {
        value: 'EU Organic',
        label: 'European Regulatory Alignment',
        description:
          'Facility and batch-level compliance files prepared for retail and industrial buyers operating across the European Union.',
      },
      {
        value: 'HACCP',
        label: 'Audited Processing Facilities',
        description:
          'All commercial-tier manufacturing partners operate under audited HACCP protocols. Facility qualification is mandatory before procurement contracts are activated.',
      },
      {
        value: 'Pre-Ship',
        label: 'Supplier Audit Reports',
        description:
          'Pre-shipment audit reports verified against your approved technical baseline before product leaves the origin facility.',
      },
      {
        value: 'Multi-Origin',
        label: 'Redundant Supply Coverage',
        description:
          'Active manufacturing relationships across Japan and elite global agri-processing hubs provide supply resilience against single-origin disruption.',
      },
    ],
  },

  advantage: {
    sectionLabel: 'Strategic Sourcing Pillars',
    titleMain: 'We do not hold inventory.',
    titleFaded: 'We engineer supply relationships.',
    subtitle:
      'Four operational pillars define every Pellexa matcha procurement engagement.',
    features: [
      {
        title: 'Factory & Facility Qualification',
        description:
          'We audit and pre-qualify manufacturing partners against your exact technical parameters — grinding mesh, color delta, thermal stability, and certification scope — before a single contract is executed.',
      },
      {
        title: 'Compliance Documentation Pipeline',
        description:
          'We mandate and verify full compliance files from the chosen facility: COAs mapping particle size, microbial screening, and moisture, plus market-specific panels (Heavy Metals, Pesticide Residues, JAS, USDA NOP, EU Organic).',
      },
      {
        title: 'Unbranded Evaluation Samples',
        description:
          'Qualified commercial accounts receive unbranded evaluation samples for internal QA, executive chef blind-tasting, and R&D formulation validation — before commercial contracts are executed.',
      },
      {
        title: 'Custom Volume & Pricing Architecture',
        description:
          'Because we engage directly with manufacturing facilities, pricing tiers and volume thresholds are custom-structured per account — aligned to your production cadence, certification scope, and target market.',
      },
    ],
  },

  solutions: {
    sectionLabel: 'Supply Tiers',
    title: 'Three Sourced Tiers. One Standard.',
    subtitle:
      'Each tier maps to a distinct industrial use-case, certification scope, and milling specification. Pellexa aligns the appropriate manufacturing tier to your account qualification and technical requirements.',
    items: [
      {
        tag: 'Tier 01',
        title: 'Japan Premium Certified Organic',
        description:
          'Sourced from designated Japanese matcha-producing regions. Traditional stone-milled, first-flush supply with particle size ≤10–12 μm. Engineered for ceremonial use, specialty beverage formulation, and premium F&B retail.',
        highlights: ['JAS', 'USDA NOP', 'EU Organic', 'Stone-Milled'],
        requestQuote: 'Request Tier Brief',
        icon: 'leaf',
      },
      {
        tag: 'Tier 02',
        title: 'Global Commercial Certified Organic',
        description:
          'Sourced from elite global agri-processing facilities. Industrial stone & roller milling with formulation-stable color profile. Suited for organic-certified retail chains, packaged food manufacturers, and private-label programs.',
        highlights: ['USDA NOP', 'EU Organic', 'Roller-Milled', 'Color-Stable'],
        requestQuote: 'Request Tier Brief',
        icon: 'sprout',
      },
      {
        tag: 'Tier 03',
        title: 'High-Consistency Non-Organic Commercial',
        description:
          'Sourced from multi-origin controlled industrial processing facilities. Standardized milling with high thermal stability — engineered for large-format baking, ice cream, and premix manufacturing lines.',
        highlights: ['Food-Grade', 'HACCP', 'FDA-Ready', 'Thermal-Stable'],
        requestQuote: 'Request Tier Brief',
        icon: 'flask',
      },
    ],
  },

  showcase: {
    visible: false,
    sectionLabel: '',
    title: '',
    subtitle: '',
    projects: [],
  },

  process: {
    sectionLabel: 'Procurement Protocol',
    title: 'From Inquiry to Contracted Supply',
    subtitle:
      'A four-stage, asset-light procurement protocol designed for commercial-volume B2B buyers.',
    steps: [
      {
        number: '01',
        title: 'Account & Requirements Qualification',
        description:
          'Volume profile, target market, certification scope, technical parameters (color, mesh size, thermal requirements), and end-product use-case are reviewed to identify the appropriate manufacturing tier and origin.',
      },
      {
        number: '02',
        title: 'Supplier Matching & Sample Validation',
        description:
          'We match your requirements against our pre-qualified manufacturing network. Unbranded evaluation samples are issued to qualified accounts for internal QA, blind-tasting, and R&D formulation validation.',
      },
      {
        number: '03',
        title: 'Commercial Contract Execution',
        description:
          'Custom pricing, batch allocation, logistics mode (air freight or maritime LCL/FCL), and compliance documentation requirements are codified into a contracted supply agreement with the selected manufacturing facility.',
      },
      {
        number: '04',
        title: 'Shipment & Compliance Verification',
        description:
          'Pre-shipment audit reports are verified against your approved technical baseline. Per-batch COAs and full compliance documentation are confirmed before the product leaves the origin facility.',
      },
    ],
  },

  faq: {
    sectionLabel: 'FAQ',
    title: 'Procurement Questions',
    subtitle:
      'Common questions from procurement leads and product teams evaluating Pellexa as their strategic matcha procurement partner.',
    items: [
      {
        question: 'What are the minimum order volumes?',
        answer:
          'Minimum order volumes (MOVs) are variable and dependent entirely on your specific formulation requirements, certification scope, and selected production origin. Because we structure custom, asset-light procurement pipelines directly with international manufacturers, volume thresholds are reviewed and aligned on an individual account basis during our commercial qualification phase.',
      },
      {
        question: 'Do you ship retail-sized samples?',
        answer:
          'No. To maintain supply chain integrity, we only distribute unbranded evaluation samples to qualified commercial accounts for internal QA, executive chef blind-tasting, and R&D formulation tests. Retail or consumer packaging samples are not available.',
      },
      {
        question: 'What documentation is provided with the supply contract?',
        answer:
          'As your strategic procurement partner, we mandate and verify full compliance files from the chosen production facility before shipping. Every contracted batch is tied to a standard Certificate of Analysis (COA) mapping particle size, microbial screening, and moisture. Specialized panels (Heavy Metals, Pesticide Residues, USDA/JAS Organic certifications) are integrated into the documentation pipeline based on your target market\'s regulatory framework.',
      },
      {
        question: 'Can you support private-label or custom specification mapping?',
        answer:
          'Yes. Through our vetted manufacturing network, we source and structure custom formulation parameters — including specific grinding mesh sizes, targeted thermal stability indices for baking, and unbranded or private-label bulk commercial packaging for large-format food chains.',
      },
      {
        question: 'How is batch consistency monitored?',
        answer:
          'We enforce strict supplier qualification protocols. We only contract with facilities using in-line, laboratory-grade quality controls. Pre-shipment audit reports are verified against your approved technical baseline to eliminate variance in color delta, flavor profile, and solubility before the product leaves the origin.',
      },
      {
        question: 'What is the typical timeline from inquiry to shipment arrival?',
        answer:
          'Timelines are entirely dependent on volume and logistics mode. Technical qualification and sample validation take 1–2 weeks. Once a commercial contract is executed, air freight shipments for validation batches arrive within accelerated transit windows, while high-volume maritime shipments (LCL/FCL) operate on standard production and transit cycles specific to the origin.',
      },
    ],
  },

  // Structural stub: MatchaPage renders <FoodContact /> instead of the LED <Contact />.
  // Only the top-level header fields (sectionLabel, title, titleHighlight, subtitle,
  // benefits, emailCardLabel, copy, copied) are consumed by FoodContact at runtime.
  contact: {
    sectionLabel: 'Institutional Procurement Inquiry',
    title: 'Qualify Your',
    titleHighlight: 'Sourcing Engagement',
    subtitle:
      'Submit a structured procurement profile. Qualified accounts are aligned to the appropriate manufacturing tier and receive a custom commercial brief with access to the Technical Sample Program.',
    benefits: [
      'Custom supply pipelines matched to your technical parameters',
      'Direct factory pricing — no inventory markup or holding costs',
      'Full compliance documentation verified before shipment departure',
      'Unbranded evaluation samples for qualified commercial accounts',
    ],
    emailCardLabel: 'Direct procurement contact',
    copy: 'Copy',
    copied: 'Copied',

    preview: {
      ready: '',
      readySub: '',
      sendTo: '',
      copyText: '',
      copiedClipboard: '',
      openEmail: '',
      goBack: '',
      attachTitle: '',
      attachPhotos: '',
      attachDrawings: '',
    },

    form: {
      title: '',
      subtitle: '',
      allOptional: '',
      generateBtn: '',
      importantAttach: '',
      sitePhotos: '',
      sitePhotosDetail: '',
      archDrawings: '',
      archDrawingsDetail: '',
      sections: [],
      installLabel: '',
      installHint: '',
      indoorLabel: '',
      indoorDesc: '',
      outdoorLabel: '',
      outdoorDesc: '',
      otherLabel: '',
      otherDesc: '',
      describePlaceholder: '',
      primaryUseLabel: '',
      primaryUseHint: '',
      chooseOption: '',
      primaryUseOptions: [],
      describeUse: '',
      viewingLabel: '',
      viewingHint: '',
      viewingPlaceholder: '',
      meters: '',
      sizeLabel: '',
      sizeHint: '',
      widthLabel: '',
      heightLabel: '',
      sizePlaceholder: '',
      mUnit: '',
      measureLabel: '',
      measureHint: '',
      displayArea: '',
      displayAreaDesc: '',
      totalWall: '',
      totalWallDesc: '',
      notSureLabel: '',
      notSureDesc: '',
      shapeLabel: '',
      shapeHint: '',
      shapeOptions: [],
      describeShape: '',
      mountLabel: '',
      mountHint: '',
      mountOptions: [],
      describeMount: '',
      maintenanceLabel: '',
      maintenanceHint: '',
      frontAccess: '',
      frontAccessDesc: '',
      rearAccess: '',
      rearAccessDesc: '',
      maintenanceNotSure: '',
      maintenanceNotSureDesc: '',
      reinforcedLabel: '',
      reinforcedHint: '',
      yes: '',
      no: '',
      notSure: '',
      featuresLabel: '',
      transparentLabel: '',
      transparentDesc: '',
      flexibleLabel: '',
      flexibleDesc: '',
      ultraBrightLabel: '',
      ultraBrightDesc: '',
      otherFeatures: '',
      contentTypeLabel: '',
      contentTypeHint: '',
      liveVideoLabel: '',
      liveVideoDesc: '',
      staticLabel: '',
      staticDesc: '',
      highResLabel: '',
      highResDesc: '',
      otherContent: '',
      locationLabel: '',
      locationHint: '',
      locationPlaceholder: '',
      dateLabel: '',
      dateHint: '',
      datePlaceholder: '',
      nameLabel: '',
      namePlaceholder: '',
      emailLabel: '',
      emailPlaceholder: '',
      phoneLabel: '',
      phonePlaceholder: '',
      notesLabel: '',
      notesHint: '',
      notesPlaceholder: '',
    },
  },

  footer: {
    tagline:
      'Global supply chain agency for matcha procurement — specification-driven, zero spot inventory, direct factory access.',
    copyright: '© {year} Pellexa Matcha Sourcing. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
}
