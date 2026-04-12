import type { MarketConfig } from './types'

export const globalMarket: MarketConfig = {
  id: 'global',
  lang: 'en',
  dir: 'ltr',
  name: 'Global',
  nameLocal: 'Global',
  timezone: 'UTC',
  locale: 'en',

  meta: {
    title: 'Pellexa LED — Custom LED Display Solutions',
    description:
      'Custom LED display solutions for any space — indoor, outdoor, corporate, retail, events, and more. Precision-manufactured, professionally installed.',
    ogTitle: 'Pellexa LED — Custom LED Display Solutions',
    ogDescription:
      'Next-generation LED displays, custom-engineered from our manufacturing facility. Indoor, outdoor, rental & event solutions delivered worldwide.',
    twitterTitle: 'Pellexa LED — Custom LED Display Solutions',
    twitterDescription:
      'Premium LED displays from our manufacturing facility. Custom sizes, pixel pitches, and mounting solutions — delivered globally.',
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
    badge: 'Custom-Engineered LED Solutions',
    headlineTop: 'Next-Generation',
    headlineHighlight: 'Visual Experiences',
    headlineBottom: 'Tailored for Your Vision',
    sub: 'Premium LED display solutions custom-engineered for any space — corporate, healthcare, outdoor, and events. Managed end-to-end: from vision and engineering to installation and support.',
    cta1: 'Request a Technical Consultation',
    cta2: 'Explore Solutions',
    stats: [
      { value: '100+', label: 'Premium Installations' },
      { value: 'P0.9–P10', label: 'Pixel Pitch Range' },
      { value: '24/7', label: 'Dedicated Support' },
    ],
  },

  whyPellexa: {
    sectionLabel: 'Why Pellexa',
    titleMain: 'Vision. Engineering.',
    titleFaded: 'Implementation.',
    subtitle:
      'Pellexa is your Strategic Partner for premium LED solutions — we lead every project from custom engineering through managed logistics to professional installation.',
    stats: [
      {
        value: '28+',
        label: 'Years of Manufacturing Excellence',
        description:
          'Our solutions are powered by Tier-1 engineering infrastructure with nearly three decades of heritage.',
      },
      {
        value: '150+',
        label: 'Globally Proven Technology',
        description:
          'Our core technology is battle-tested and trusted by organizations in over 150 countries worldwide.',
      },
      {
        value: '100+',
        label: 'Premium Installations',
        description: 'Delivering high-standard visual solutions tailored for your market.',
      },
      {
        value: 'ISO 9001',
        label: 'Certified Quality',
        description:
          'International standards integrated into every stage of our managed solutions pipeline.',
      },
      {
        value: 'End-to-End',
        label: 'Global Delivery',
        description:
          'We manage and oversee the entire logistics chain — international shipping, customs clearance, and last-mile delivery to your site.',
      },
      {
        value: '24/7',
        label: 'Dedicated Support',
        description:
          'Professional technical support for installation, calibration, and ongoing maintenance.',
      },
    ],
  },

  advantage: {
    sectionLabel: 'The Bespoke Advantage',
    titleMain: "We don't sell screens.",
    titleFaded: 'We design systems.',
    subtitle:
      'As your Strategic Partner, every Pellexa LED display is custom-engineered for your unique space, audience, and vision. No off-the-shelf compromises.',
    features: [
      {
        title: 'Custom Dimensions',
        description:
          'Any size, any shape. From compact indoor panels to massive outdoor facades — we engineer displays to fit your exact space.',
      },
      {
        title: 'Tailored Pixel Pitch',
        description:
          'From ultra-fine P1.2 for close-range clarity to robust P10 for long-distance impact. We match resolution to your viewing environment.',
      },
      {
        title: 'Flexible Mounting',
        description:
          'Wall-mounted, free-standing, hanging, or curved installations. Our engineering team designs the perfect mounting solution for any venue.',
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
    visible: true,
    sectionLabel: 'Technology & Capability Showcase',
    title: 'Projects That Speak',
    subtitle:
      'From intimate boardrooms to massive stadiums — explore LED installations we deliver worldwide.',
    projects: [
      {
        imageKey: 'indoor',
        category: 'Indoor',
        title: 'Corporate Boardroom Display',
        location: 'Corporate HQ',
        specs: '4.8m x 2.7m — P1.5',
        span: 'lg:col-span-2',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
      {
        imageKey: 'outdoor',
        category: 'Outdoor',
        title: 'Building Facade Billboard',
        location: 'Commercial District',
        specs: '12m x 8m — P6',
        span: '',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
      {
        imageKey: 'healthcare',
        category: 'Healthcare',
        title: 'Medical Center LED Display',
        location: 'Private Medical Center',
        specs: '5m x 3m — Optimized Pixel Pitch',
        span: 'lg:col-span-2',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
      {
        imageKey: 'retail',
        category: 'Indoor',
        title: 'Retail Digital Signage',
        location: 'Shopping Mall',
        specs: '3m x 1.2m — P2.5',
        span: '',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
      {
        imageKey: 'sports',
        category: 'Outdoor',
        title: 'Stadium LED Scoreboard',
        location: 'Sports Arena',
        specs: '20m x 6m — P8',
        span: 'lg:col-span-2',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
      {
        imageKey: 'conference',
        category: 'Events',
        title: 'Conference Stage Display',
        location: 'Convention Center',
        specs: '8m x 4m — P3.91',
        span: '',
        featured: false,
        badge: '',
        caption: 'Powered by our Tier-1 Manufacturing Infrastructure',
      },
    ],
  },

  process: {
    sectionLabel: 'The Pellexa Process',
    title: 'From Vision to Reality',
    subtitle:
      'As your Project Lead, we manage every phase — Vision, Engineering, and Implementation — turning your concept into a premium LED installation.',
    steps: [
      {
        number: '01',
        title: 'Strategic Consultation',
        description:
          'We begin by understanding your space, audience, and goals. Our team conducts a thorough site assessment — virtually or on-location — to define the optimal solution.',
      },
      {
        number: '02',
        title: 'Custom Engineering',
        description:
          'Precision specifications are drafted: optimal pixel pitch, cabinet dimensions, brightness, and mounting design — all custom-engineered for your project.',
      },
      {
        number: '03',
        title: 'Managed Logistics',
        description:
          'We manage the entire delivery chain — international shipping, customs clearance, and last-mile delivery to your site with real-time tracking.',
      },
      {
        number: '04',
        title: 'Professional Installation',
        description:
          'Professional installation by our qualified technicians. Ongoing maintenance, calibration, and priority 24/7 support keep your display performing flawlessly.',
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
          'A straightforward rule of thumb: the pixel pitch number represents the minimum comfortable viewing distance in meters. For example, a P3.91 display delivers a crisp image from approximately 4 meters and beyond. For executive boardrooms and control rooms, we recommend P1.2–P2.1. For conference halls, houses of worship, and medical facilities, P2.6–P3.91 provides an optimal balance of resolution and value. For outdoor installations and billboards, P4–P10 is ideal. We offer a full range from P0.9 to P10.',
      },
      {
        question: 'How long does a project take?',
        answer:
          'Timelines depend on your location and project scope. Typically 4 to 8 weeks from technical consultation to final installation, including precision manufacturing and international shipping. Contact us for an accurate timeline for your region.',
      },
      {
        question: 'Do you offer warranty?',
        answer:
          'Yes, we provide a 2-year comprehensive warranty on all LED systems, supported by our technical team.',
      },
      {
        question: "What's the lifespan?",
        answer:
          'Our premium LED systems are engineered for a lifespan of 100,000 hours (approx. 10 years of continuous use).',
      },
      {
        question: 'Do you deliver internationally?',
        answer:
          'Yes. We manage the entire logistics chain — from our manufacturing facility to your site, including international shipping, customs clearance, and last-mile delivery. Contact us with your location for a detailed logistics plan.',
      },
      {
        question: "What's the process for custom projects?",
        answer:
          "Every engagement with Pellexa is bespoke. As your Project Lead, we collaborate with your architects and engineers, provide structural drawings for mounting, and customize screen dimensions to fit your precise specifications. We handle the Vision, Engineering, and Implementation — delivering managed solutions, not off-the-shelf products.",
      },
    ],
  },

  contact: {
    sectionLabel: 'Start Your Project',
    title: "Let's Build Something",
    titleHighlight: 'Extraordinary',
    subtitle:
      "Use the guided form to tell us about your project. We'll create a ready-to-send email for you — just copy and send. You can also write directly to us.",
    benefits: [
      'Complimentary consultation and site assessment',
      'Custom engineering for your exact architectural requirements',
      'Direct pricing from our manufacturing facility',
      'Professional installation and delivery',
    ],
    emailCardLabel: 'Send directly to',
    copy: 'Copy',
    copied: 'Copied',

    preview: {
      ready: 'Your Email is Ready!',
      readySub: 'Copy the text below and paste it into your email.',
      sendTo: 'Send to:',
      copyText: 'Copy Email Text',
      copiedClipboard: 'Copied to Clipboard!',
      openEmail: 'Open Email App',
      goBack: 'Go back and edit answers',
      attachTitle: "Don't forget to attach:",
      attachPhotos: 'Photos of the installation location',
      attachDrawings: 'Architectural or structural drawings (if available)',
    },

    form: {
      title: 'Build Your Project Inquiry',
      subtitle:
        "Answer what you can — we'll create a professional email template you can copy and send. No account needed.",
      allOptional: 'All fields are optional. Fill in as much as you know.',
      generateBtn: 'Generate & Copy Email Template',

      importantAttach: 'Important — Please Attach:',
      sitePhotos: 'Site photos',
      sitePhotosDetail: 'a photo of the exact wall or space where the screen will go',
      archDrawings: 'Architectural drawings',
      archDrawingsDetail: 'structural or design plans of the space (if available)',

      sections: [
        { title: 'Environment & Purpose', desc: 'Where will the screen be used and what for?' },
        { title: 'Dimensions & Shape', desc: 'How big should the screen be and what shape?' },
        { title: 'Installation & Maintenance', desc: 'How will the screen be mounted and serviced?' },
        { title: 'Special Requirements', desc: 'Any special features needed? Check all that apply.' },
        { title: 'Logistics', desc: 'Where should we deliver and when do you need it?' },
        { title: 'Your Contact Info', desc: 'So we can get back to you with a proposal.' },
      ],

      installLabel: 'Where will the screen be installed?',
      installHint: 'This determines the pixel density and weatherproofing your screen needs.',
      indoorLabel: 'Indoor',
      indoorDesc: 'Malls, cinemas, lobbies, conference rooms',
      outdoorLabel: 'Outdoor',
      outdoorDesc: 'Billboards, building facades, stadiums',
      otherLabel: 'Other',
      otherDesc: 'Semi-outdoor, covered area, etc.',
      describePlaceholder: 'Describe the location...',

      primaryUseLabel: 'What is the primary use?',
      primaryUseHint: 'Examples: "Advertising in a shopping mall", "Cinema screen", "Church stage backdrop"',
      chooseOption: 'Choose an option...',
      primaryUseOptions: [
        { value: 'Advertising', label: 'Advertising / Digital signage' },
        { value: 'Cinema', label: 'Cinema / Theater screen' },
        { value: 'Event Hall', label: 'Event hall / Concert venue' },
        { value: 'Storefront', label: 'Storefront / Window display' },
        { value: 'Conference Room', label: 'Conference room / Boardroom' },
        { value: 'Control Room', label: 'Control room / Command center' },
        { value: 'Church / Worship', label: 'Church / Place of worship' },
        { value: 'Sports Venue', label: 'Sports venue / Scoreboard' },
        { value: 'Other', label: "Other — I'll describe below" },
      ],
      describeUse: 'Describe the intended use...',

      viewingLabel: 'Average viewing distance',
      viewingHint: 'How far will the audience typically be from the screen? This helps us choose the right pixel pitch.',
      viewingPlaceholder: 'e.g. "5" or "10-15" or "not sure"',
      meters: 'meters',

      sizeLabel: 'Desired screen size',
      sizeHint: 'Approximate is fine. You can also write "not sure yet".',
      widthLabel: 'Width',
      heightLabel: 'Height',
      sizePlaceholder: 'e.g. "5" or "not sure"',
      mUnit: 'm',

      measureLabel: 'What do the measurements refer to?',
      measureHint: 'Are the dimensions above for the screen itself, or for the total available wall/ceiling space?',
      displayArea: 'Display Area',
      displayAreaDesc: 'The screen itself should be this size',
      totalWall: 'Total Wall Space',
      totalWallDesc: 'This is how much space is available',
      notSureLabel: 'Not Sure',
      notSureDesc: "I'll need help figuring this out",

      shapeLabel: 'Screen shape',
      shapeHint: 'Most screens are flat. Curved or corner screens are possible but require custom engineering.',
      shapeOptions: [
        { value: 'Standard Flat', label: 'Standard flat screen' },
        { value: 'Curved (Concave)', label: 'Curved inward (Concave) — like a cinema' },
        { value: 'Curved (Convex)', label: 'Curved outward (Convex) — wrapping a pillar' },
        { value: 'Corner (90°)', label: 'Corner screen (90° angle)' },
        { value: 'Other', label: "Other — I'll describe below" },
      ],
      describeShape: 'Describe the shape you need...',

      mountLabel: 'How will the screen be mounted?',
      mountHint: 'This determines the mounting hardware and structural requirements.',
      mountOptions: [
        { value: 'Wall-mounted', label: 'Wall-mounted — attached flat to a wall' },
        { value: 'Ceiling-hung', label: 'Ceiling-hung — suspended from above' },
        { value: 'Floor-standing', label: 'Floor-standing — on a base or frame' },
        { value: 'Pole-mounted', label: 'Pole-mounted — on a pole or mast' },
        { value: 'Not Sure', label: 'Not sure yet — I need advice' },
        { value: 'Other', label: "Other — I'll describe below" },
      ],
      describeMount: 'Describe the mounting...',

      maintenanceLabel: 'How will the screen be maintained?',
      maintenanceHint: 'Front-access screens can sit flush against a wall. Rear-access screens need space behind for servicing.',
      frontAccess: 'Front Access',
      frontAccessDesc: 'Screen is against a wall — service from the front',
      rearAccess: 'Rear Access',
      rearAccessDesc: "There's space behind — service from the back",
      maintenanceNotSure: 'Not Sure',
      maintenanceNotSureDesc: "I'll need your recommendation",

      reinforcedLabel: 'Is the wall/ceiling reinforced to support the weight?',
      reinforcedHint: "LED screens are heavy. If you're not sure whether your wall or ceiling can support the weight, we can help assess.",
      yes: 'Yes',
      no: 'No',
      notSure: 'Not Sure',

      featuresLabel: 'Custom features',
      transparentLabel: 'Transparent Screen',
      transparentDesc: 'See-through display — great for storefronts and glass walls where you want to show content while still seeing through',
      flexibleLabel: 'Flexible / Bendable LED',
      flexibleDesc: 'Panels that can bend and wrap around curved surfaces, pillars, or unconventional shapes',
      ultraBrightLabel: 'Ultra-High Brightness',
      ultraBrightDesc: 'Extra-bright panels for areas with strong ambient light or direct sunlight (typically 5,000+ nits)',
      otherFeatures: 'Other features or notes...',

      contentTypeLabel: 'Content type',
      contentTypeHint: 'What kind of content will be displayed? This helps us recommend the right resolution.',
      liveVideoLabel: 'Live Video / Camera Feeds',
      liveVideoDesc: 'Real-time video from cameras, live broadcasts, or video conferencing',
      staticLabel: 'Static Images / Slideshows',
      staticDesc: 'Photos, graphics, menus, schedules, or rotating promotional images',
      highResLabel: '4K / High-Resolution Content',
      highResDesc: 'Ultra-sharp content that requires very fine pixel pitch (close viewing)',
      otherContent: 'Other content types or notes...',

      locationLabel: 'Delivery location',
      locationHint: 'The city and country where the screen will be shipped and installed.',
      locationPlaceholder: 'City, Country...',
      dateLabel: 'Target installation date',
      dateHint: 'When do you need the screen installed? Approximate is fine. Example: "August 2026" or "ASAP"',
      datePlaceholder: 'e.g. "August 2026" or "As soon as possible"',

      nameLabel: 'Your name',
      namePlaceholder: 'Full name',
      emailLabel: 'Email address',
      emailPlaceholder: 'you@company.com',
      phoneLabel: 'Phone number',
      phonePlaceholder: '+1 555 123 4567',
      notesLabel: 'Additional notes',
      notesHint: 'Anything else we should know? Special requests, budget range, questions...',
      notesPlaceholder: 'Write anything else here...',
    },
  },

  footer: {
    tagline: 'Strategic partner for high-profile visual installations worldwide.',
    copyright: '© {year} Pellexa LED Solutions. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
}
