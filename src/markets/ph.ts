import type { MarketConfig } from './types'

export const ph: MarketConfig = {
  id: 'ph',
  lang: 'en',
  dir: 'ltr',
  name: 'Philippines',
  nameLocal: 'Philippines',
  timezone: 'Asia/Manila',
  locale: 'en-PH',

  meta: {
    title: 'Pellexa LED — B2B LED Display Sourcing | Philippines',
    description:
      'Custom LED display sourcing for enterprise buyers in the Philippines — indoor, outdoor, rental, and events. Manufactured by Tier-1 partners, verified by third-party QC, shipped under ALL RISK cargo insurance. Pellexa does not perform installations.',
    ogTitle: 'Pellexa LED — B2B LED Display Sourcing',
    ogDescription:
      'Specification-driven LED display procurement for the Philippines. Tier-1 manufacturing partners, two standard third-party inspections, and managed inter-island freight.',
    twitterTitle: 'Pellexa LED — B2B LED Display Sourcing',
    twitterDescription:
      'LED displays sourced direct from Tier-1 manufacturing partners, delivered across the Philippines. Custom sizes, pixel pitches, third-party QC.',
  },

  nav: {
    links: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Advantage', href: '#advantage' },
      { label: 'Process', href: '#process' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Get a Quote',
    backTitle: 'Back to Pellexa',
  },

  hero: {
    badge: 'B2B LED Display Sourcing',
    headlineTop: 'Custom LED Displays',
    headlineHighlight: 'Sourced Direct',
    headlineBottom: 'From Tier-1 Manufacturing Partners',
    sub: 'Specification-driven LED display systems for indoor, outdoor, rental, and event applications. We manage technical specification, factory sourcing, third-party quality control, and insured freight across the Philippines.',
    cta1: 'Request a Technical Consultation',
    cta2: 'Explore Solutions',
    stats: [
      { value: 'P0.9–P10', label: 'Pixel Pitch Range' },
      { value: '2', label: 'Third-Party QC Inspections' },
      { value: 'ALL RISK', label: 'Cargo Insurance' },
    ],
  },

  whyPellexa: {
    sectionLabel: 'Why Pellexa',
    titleMain: 'Specification. Sourcing.',
    titleFaded: 'Verification.',
    subtitle:
      'Pellexa is your sourcing partner for LED display systems — we lead every project from technical specification through Tier-1 factory production and independent quality control to insured delivery in the Philippines.',
    stats: [
      {
        value: '28+',
        label: 'Years of Partner Manufacturing',
        description:
          'Our manufacturing partner brings nearly three decades of Tier-1 LED engineering heritage.',
        icon: 'factory',
      },
      {
        value: '150+',
        label: 'Countries Served by the Technology',
        description:
          'The core technology we source is field-proven with organizations in over 150 countries worldwide.',
        icon: 'globe',
      },
      {
        value: 'Tier-1',
        label: 'Manufacturing Partner',
        description:
          'Production at an authorized Tier-1 facility, with full supplier disclosure and a structured contract framework.',
        icon: 'shield',
      },
      {
        value: 'ISO 9001',
        label: 'Certified Partner Facility',
        description:
          'International quality standards are certified at the production facility we source from.',
        icon: 'award',
      },
      {
        value: 'Last-Mile',
        label: 'Nationwide PH Freight',
        description:
          'We coordinate the freight chain — RORO, inter-island trucking, and ferry scheduling across Luzon, Visayas, and Mindanao.',
        icon: 'ship',
      },
      {
        value: '2 Inspections',
        label: 'Third-Party Quality Control',
        description:
          'Independent on-ground QC (two standard inspections: pre-production and packing/pre-shipment) plus comprehensive ALL RISK cargo insurance via 3rd-party insurers.',
        icon: 'search',
      },
    ],
  },

  advantage: {
    sectionLabel: 'The Sourcing Advantage',
    titleMain: "We don't hold inventory.",
    titleFaded: 'We source to specification.',
    subtitle:
      'Every Pellexa LED order is specified against your space, audience, and technical requirements, then produced to that specification. No off-the-shelf compromises.',
    features: [
      {
        title: 'Custom Dimensions',
        description:
          'Any size, any shape. From compact indoor panels to large outdoor facades — cabinet layouts are specified with the factory to fit your exact space.',
      },
      {
        title: 'Tailored Pixel Pitch',
        description:
          'From ultra-fine P1.2 for close-range clarity to robust P10 for long-distance impact. We match resolution to your viewing environment.',
      },
      {
        title: 'Mounting & Cabinet Options',
        description:
          'Wall-mount, free-standing, hanging, and curved cabinet configurations are specified with the factory. Structural design and on-site execution remain with your contractor.',
      },
    ],
  },

  solutions: {
    sectionLabel: 'Solution Categories',
    title: 'Built for Every Environment',
    subtitle:
      'From controlled indoor spaces to harsh outdoor conditions, our LED systems are purpose-built for performance.',
    items: [
      {
        tag: 'Indoor Excellence',
        title: 'Crystal-Clear Indoor Displays',
        description:
          'Ultra-fine pixel pitch screens for corporate boardrooms, churches, retail showrooms, private residences, and command centers.',
        highlights: ['Corporate', 'Churches', 'Retail', 'Homes'],
        requestQuote: 'Request Quote',
      },
      {
        tag: 'Outdoor Power',
        title: 'High-Brightness Outdoor Solutions',
        description:
          'Weather-resistant, high-nit LED displays engineered for direct sunlight visibility with IP65+ protection.',
        highlights: ['Billboards', 'Stadiums', 'Facades'],
        requestQuote: 'Request Quote',
      },
      {
        tag: 'Rental & Events',
        title: 'Stage-Ready Event Displays',
        description:
          'High-refresh-rate panels with tool-free assembly for concerts, conferences, and live events.',
        highlights: ['Concert Stages', 'Conferences', 'Live Shows'],
        requestQuote: 'Request Quote',
      },
    ],
  },

  showcase: {
    visible: false,
    sectionLabel: 'Technology & Capability Showcase',
    title: 'Projects That Speak',
    subtitle: '',
    projects: [],
  },

  process: {
    sectionLabel: 'The Pellexa Process',
    title: 'From Specification to Delivery',
    subtitle:
      'As your sourcing lead, we manage every phase — specification, production, and verification — turning your requirements into a delivered, inspected order.',
    steps: [
      {
        number: '01',
        title: 'Technical Consultation',
        description:
          'We begin by understanding your space, audience, and goals, then run a structured technical requirements review to define the optimal specification.',
      },
      {
        number: '02',
        title: 'Specification & Factory Quotation',
        description:
          'Precision specifications are drafted with our manufacturing partner: pixel pitch, cabinet dimensions, brightness, and mounting configuration — priced factory-direct.',
      },
      {
        number: '03',
        title: 'Managed Logistics',
        description:
          'We coordinate the delivery chain — RORO, inter-island trucking, and ferry scheduling across the Philippines, with tracking through to your delivery address.',
      },
      {
        number: '04',
        title: 'Third-Party QC & Handover',
        description:
          'Two independent inspections — pre-production and packing/pre-shipment — plus ALL RISK cargo insurance. Pellexa does not perform installations: on request we can refer vetted local installation contractors, and any installation is contracted, executed, and warranted directly between the client and that contractor.',
      },
    ],
  },

  faq: {
    sectionLabel: 'FAQ',
    title: 'Common Questions',
    subtitle: 'Everything you need to know about our LED display solutions.',
    items: [
      {
        question: 'What pixel pitch do I need?',
        answer:
          'A straightforward rule of thumb: the pixel pitch number represents the minimum comfortable viewing distance in meters. For example, a P3.91 display delivers a crisp image from approximately 4 meters and beyond. For executive boardrooms and control rooms, we recommend P1.2–P2.1. For conference halls, houses of worship, and medical facilities, P2.6–P3.91 provides an optimal balance of resolution and value. For outdoor installations and billboards, P4–P10 is ideal. While P3.91 is a popular versatile choice, we offer a full range from P0.9 to P10, selected based on your specific architectural requirements and technical specification.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'Typically 4 to 6 weeks from technical consultation to delivery, including production and inter-island logistics.',
      },
      {
        question: 'Do you handle installation?',
        answer:
          'Pellexa does not perform installations: on request we can refer vetted local installation contractors, and any installation is contracted, executed, and warranted directly between the client and that contractor. Our scope covers specification, factory sourcing, third-party quality control, and insured freight.',
      },
      {
        question: 'Do you offer warranty?',
        answer:
          'The LED systems we source carry a 2-year manufacturer warranty. Pellexa coordinates every warranty claim with the factory on your behalf. Workmanship on the physical installation is warranted separately by the contractor who performs it.',
      },
      {
        question: "What's the lifespan?",
        answer:
          'Our premium LED systems are engineered for a lifespan of 100,000 hours (approx. 10 years of continuous use).',
      },
      {
        question: 'Can you deliver to hard-to-reach locations?',
        answer:
          'Absolutely. We specialize in last-mile delivery across Luzon, Visayas, and Mindanao, managing all RORO and ferry coordination.',
      },
      {
        question: "What's the process for custom projects?",
        answer:
          'Every engagement with Pellexa is specification-led. We work from your architects\' and engineers\' requirements, supply factory structural and mounting drawings for your contractor, and customize screen dimensions to your precise specification. We handle specification, sourcing, and verification — not off-the-shelf products.',
      },
    ],
  },

  contact: {
    sectionLabel: 'Start Your Project',
    title: 'Submit Your',
    titleHighlight: 'Technical Requirements',
    subtitle:
      'Send us your project specification and we will return a factory-direct quotation. You can also write to us directly.',
    benefits: [
      'Technical specification review',
      'Direct pricing from our Tier-1 manufacturing partner',
      'Third-party QC: pre-production and pre-shipment inspections',
      'Comprehensive ALL RISK cargo insurance',
    ],
    emailCardLabel: 'Send directly to',
    copy: 'Copy',
    copied: 'Copied',

    disclaimer: {
      title: 'Scope of Engagement',
      body: 'Pellexa does not perform installations: on request we can refer vetted local installation contractors, and any installation is contracted, executed, and warranted directly between the client and that contractor.',
    },

    form: {
      title: 'B2B Inquiry',
      subtitle:
        'Send your requirements to our sourcing desk. We respond with a technical review and factory-direct quotation.',
      requiredNote: 'Fields marked with an asterisk are required.',

      nameLabel: 'Full name',
      namePlaceholder: 'Full name',
      emailLabel: 'Business email',
      emailPlaceholder: 'you@company.com',
      companyLabel: 'Company',
      companyPlaceholder: 'Registered company name',
      countryLabel: 'Country / Location',
      countryHint: 'Delivery destination. Determines freight routing and duties.',
      countryPlaceholder: 'e.g. Makati City, Metro Manila',

      projectTypeLabel: 'Project type',
      projectTypeHint: 'Select the application that best describes your requirement.',
      projectTypeOptions: [
        { value: 'Indoor', label: 'Indoor' },
        { value: 'Outdoor', label: 'Outdoor' },
        { value: 'Rental', label: 'Rental' },
        { value: 'Events', label: 'Events' },
      ],

      screenSizeLabel: 'Estimated screen size / dimensions',
      screenSizeHint: 'Approximate is fine. Total display area or available wall space both help.',
      screenSizePlaceholder: 'e.g. "12m x 8m", "approx 20 sqm", or "not sure yet"',

      specsLabel: 'Project specifications / technical requirements',
      specsHint:
        'Pixel pitch, brightness, viewing distance, cabinet or mounting configuration, IP rating, target timeline, order volume — whatever you have defined.',
      specsPlaceholder:
        'Describe your technical requirements, intended application, and target timeline...',

      submitBtn: 'Submit Inquiry',
      submittingBtn: 'Sending...',
      successTitle: 'Inquiry received',
      successBody:
        'Your requirements are with our sourcing desk. We will respond with a technical review and quotation.',
      sendAnother: 'Submit another inquiry',
      errorGeneric:
        'We could not submit your inquiry. Your details are preserved below — copy them or open them in your email app to send directly.',
      errorCopy: 'Copy inquiry',
      errorMailto: 'Open in email app',
    },
  },

  footer: {
    tagline:
      'B2B sourcing partner for LED display systems in the Philippines — Tier-1 manufacturing, third-party QC, insured freight.',
    copyright: '© {year} Pellexa International LLC. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
}
