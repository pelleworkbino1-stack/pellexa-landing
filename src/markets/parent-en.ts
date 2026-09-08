import type { ParentContent } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — content ingested verbatim from docs/cocoa_knowlage.md
// (Sections 1, 2, 3, 5). Framed white-label for a premium global enterprise
// network — no supplier brand, processing facility, or proprietary name is
// surfaced in the registry. Do not edit, summarize, or invent technical metrics
// in this block; the canonical source is `docs/cocoa_knowlage.md` at the repo root.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnCocoa: ParentContent['cocoa'] = {
  grades: [
    {
      id: 'powder-industrial-10-12',
      family: 'powder',
      label: 'Standard Industrial Grade',
      fatContent: '10%–12% Fat Content',
      processing: 'Alkalized (Dutched)',
    },
    {
      id: 'powder-premium-22-24',
      family: 'powder',
      label: 'Premium Grade',
      fatContent: '22%–24% Fat Content',
      processing: 'Non-Alkalized',
    },
    {
      id: 'powder-ultra-30',
      family: 'powder',
      label: 'Premium / Ultra-High Fat Grade',
      fatContent: '30% Fat Content',
      processing: 'Gourmet-Tier Profile',
    },
    {
      id: 'butter-prime-press-deodorized',
      family: 'butter',
      label: 'Prime Press Deodorized',
      processing: 'Prime Press — Pure Deodorized',
      format: 'Easy-Melt Industrial Coins',
    },
    {
      id: 'butter-prime-press-natural',
      family: 'butter',
      label: 'Prime Press Natural',
      processing: 'Prime Press — Natural Non-Deodorized',
      format: 'Easy-Melt Industrial Coins',
    },
    {
      id: 'liquor-unsweetened-blocks',
      family: 'liquor',
      label: '100% Cacao Liquor — Unsweetened Mass',
      processing: '100% Pure Ground Cocoa Bean Paste',
      format: 'Block Format',
    },
    {
      id: 'liquor-unsweetened-coins',
      family: 'liquor',
      label: '100% Cacao Liquor — Unsweetened Mass',
      processing: '100% Pure Ground Cocoa Bean Paste',
      format: 'High-Surface-Area Coin Format',
    },
  ],
  overviews: [
    {
      id: 'powder',
      title: 'Cocoa Powder Portfolio Overview',
      overview:
        'Pellexa’s cocoa powder portfolio represents the intersection of agricultural purity and modern industrial functionality. Sourced directly from premier growing regions and processing hubs in the Philippines, our powders are processed under rigid mechanical parameters to yield uniform particle sizes and impeccable color profiles. Available in both rich, unadulterated Natural structures and expertly balanced Alkalized variants, we supply fat content compositions ranging from high-efficiency industrial baselines (10/12%) through premium mid-ranges (22/24%) up to an elite 30% ultra-high fat culinary grade. Because subtle shifts in pH, granulometry, and oil retention dictate the success of your final product run, we customize exact batch chemistry and performance parameters during direct technical consultations.',
      cta: 'Request Technical Data Sheet & Book Formulation Review',
    },
    {
      id: 'butter',
      title: 'Cocoa Butter Portfolio Overview',
      overview:
        'Engineered for superior crystalline stability, Pellexa’s premium cocoa butter provides the exact polymorphic behaviors required by high-end confectionery and cosmetic manufacturing lines. Extracted cleanly through specialized physical expression, our deodorized and natural butter grades showcase immaculate moisture control and clean melting points. Formatted as efficient, easy-to-scale processing coins, this ingredient ensures reliable tempering properties, optimal snap, low free fatty acids, and uniform glossy finishes. Exact melting profiles, iodine values, and acid value thresholds are calibrated to match specific geographic shipping environments and factory processing conditions upon request.',
      cta: 'Inquire About Container Load Allocation',
    },
    {
      id: 'liquor',
      title: 'Cocoa Liquor & Mass Portfolio Overview',
      overview:
        "The pure essence of single-origin flavor, Pellexa's Cocoa Liquor (Mass) is composed entirely of finely milled, perfectly fermented cacao beans. Free from artificial emulsifiers, additives, binders, or flavor enhancers, this zero-sugar liquor naturally retains its full, decadent cocoa butter ratio. Available in versatile, high-surface-area coin shapes optimized for automated industrial melting, our liquor options preserve deep, authentic origin terroir. Detailed flavor wheel matrices, microbiological data sheets, particle size distributions (fineness), and custom grinding parameters are engineered exclusively through individual client formulation briefs.",
      cta: 'Schedule an Enterprise Sourcing Consultation',
    },
  ],
  applications: {
    title: 'High-Value Industrial & Commercial Applications Matrix',
    intro:
      "To attract corporate R&D, product development managers, and food-beverage innovation teams, this matrix maps Pellexa's supply capabilities directly to profitable industrial applications and specific value propositions:",
    columns: {
      derivative: 'Derivative Grade / Classification',
      application: 'High-Value Application Target',
      valueProposition: 'Corporate Value Proposition',
    },
    rows: [
      {
        derivative: 'Standard Industrial Powder (10%–12% Fat Natural / Alkalized)',
        application:
          'High-throughput dairy and plant-based milk lines, mass-market biscuits, powdered beverage formulations, dry baking mixes, extruded breakfast cereals, protein bar matrices, and industrial ice cream bases/coatings.',
        valueProposition:
          'Balanced pH, dark color consistency, excellent structural dispersion, and lower raw material input costs for highly competitive pricing.',
      },
      {
        derivative: 'Premium Natural Powder (22%–24% Fat Content)',
        application:
          'Artisanal bakeries, premium hot cocoa mixes, gourmet pastry runs, and keto/gourmet functional foods.',
        valueProposition:
          'Elevated mouthfeel, luxurious flavor retention, and clean-label "Natural" designation preserving native fruit-forward/floral complexities.',
      },
      {
        derivative: 'Ultra-High Fat Powder (Elite 30% Fat Content Grade)',
        application:
          'Artisan confectionery, ultra-premium bakery runs, gourmet frozen desserts, micro-batch specialty chocolate drinks, high-end pastry fillings, and culinary-grade restaurant supplying.',
        valueProposition:
          'Elite culinary grade offering unparalleled structural richness, deep sensory notes, and a world-class premium mouthfeel.',
      },
      {
        derivative: 'Pure Cocoa Butter Coins (Prime Press Deodorized/Natural)',
        application:
          'Fine chocolate enrobing, premium molding formulations, craft chocolate-making, solid cosmetic bar manufacturing, luxury skincare bases, and clean-label stable moisture retention fat matrices.',
        valueProposition:
          'Low free fatty acids (FFA max 1.75%) ensure reliable shelf stability, pristine snap, optimal temper crystallization, and no block-breaking labor costs.',
      },
      {
        derivative: '100% Cacao Liquor Coins (Unsweetened Mass / Tablea)',
        application:
          'Industrial chocolate manufacturing, high-end Bean-to-Bar chocolate production, premium baking chocolate blocks, commercial ganaches, functional superfood snacks, beverage syrup bases, and traditional premium hot chocolate bases.',
        valueProposition:
          'High natural cocoa butter content (minimum 48% up to 54%) eliminates the need for cheap emulsifiers, while the coin shape optimizes automated melting loops.',
      },
    ],
  },
  qualityControl: {
    title: 'Trust Infrastructure: Quality-Control & Corporate Certifications',
    intro:
      'Pellexa frameworks raw technical data sheet parameters into elite corporate compliance metrics that showcase documented regulatory readiness and institutional trust badges across our digital portfolio:',
    analyticalTitle: 'Quality-Control Benchmarks & Analytical Parameters',
    analyticalGroups: [
      {
        title: 'Chemical & Physical Testing',
        summary:
          'Every contracted lot is independently tested against laboratory and analytical criteria, so the documentation pack your customs broker and regulator receive is complete and defensible at the port of entry.',
        metrics: [
          'Precise monitoring of moisture tolerances (maximum 3.0% – 4.0%)',
          'FFA (Free Fatty Acid) baselines',
          'Accurate pH tracking',
          'Strict control over granulometry',
        ],
      },
      {
        title: 'Heavy Metal & Chemical Controls',
        summary:
          'Rigid monitoring of volcanic and geographic soil markers ensures all derivatives stay securely within strict international regulatory benchmarks for heavy metals.',
        metrics: [
          'Cadmium — Maximum 0.6 – 0.8 mg/kg',
          'Lead — Maximum 0.1 mg/kg',
        ],
      },
      {
        title: 'Microbiological Screening',
        summary:
          'Mandatory sterilization validation and independent laboratory screening across each contracted production run.',
        metrics: [
          'Salmonella — absolute negative markers (/25g)',
          'Strict upper limits on standard plate counts',
          'Strict upper limits on molds and yeast',
          'Strict upper limits on coliforms',
        ],
      },
    ],
    certificationsTitle: 'Institutional Trust & Global Market Badges',
    certifications: [
      {
        title: 'Global Food Safety Standards',
        description:
          'Our manufacturing partners operate under internationally certified food safety management systems, fully compliant with HACCP (Hazard Analysis Critical Control Point) and GMP (Good Manufacturing Practices) protocols.',
      },
      {
        title: 'Global Market Access',
        description:
          'Manufacturing partners hold US-FDA and local FDA registration, and per-shipment regulatory documentation is verified before departure. Customs clearance and import filing are executed by your customs broker under your import license, or by a local importer partner — Pellexa is not the importer of record.',
      },
      {
        title: 'Dietary, Cultural, and Ethical Inclusivity',
        description:
          'Verifiable Halal Certification and comprehensive Non-GMO validation confirming pure, clean-label manufacturing origins, with dedicated pathways available for onboarding market-specific Kosher certifications tailored to your region’s retail mandates.',
      },
    ],
    checklistLabel: 'Flag the parameters required for your procurement gate',
    checklistHelp:
      'Selections are routed to our specification desk together with your contact details so the issued technical pack matches your validation pipeline 1:1.',
  },
  logistics: {
    title: 'Supply Continuity & Logistics Coordination',
    paragraphs: [
      'Pellexa structures supply through a localized partner network to insulate your procurement from regional market volatility. Operations run strictly at Full Container Load volumes and above — 20ft and 40ft maritime models — routed to major marine hubs including Ashdod Port, Israel. We do not offer LCL, sub-container, or low-MOQ entries; container-scale volume is the entry threshold for every cacao line. Exact per-grade minimums, allocation splits, and forward-contract schedules are confirmed with our sourcing desk during commercial qualification.',
      "Maritime shipments are coordinated under CIF (Cost, Insurance, and Freight) or DDP (Delivered Duty Paid) terms, selected against your import-license setup and local importer partners, and executed by recognized freight forwarders together with the supplier's export desk. Pellexa coordinates and verifies that chain but is not a freight forwarder, customs broker, or importer of record; where DDP is used, the import is carried by a licensed local importer partner. Origin-side export declarations and pre-shipment phytosanitary inspections are performed by the exporting facility and its appointed forwarder; ALL RISK cargo insurance is placed through a third-party insurer. With a standard 24-month unopened shelf stability across our powder and liquor lines, we support your procurement division in structuring forward contracts that lock in volume against spot-price surges.",
    ],
  },
  masterCTA: {
    sectionLabel: 'Conversion-Oriented Lead Generation (The Master CTA)',
    headline: 'Architect Your Custom Factory Run: Optimize Your Supply Chain',
    paragraphs: [
      'In global ingredient sourcing, standard configurations rarely satisfy the strict requirements of a market-leading product line. At Pellexa, we do not place off-the-shelf commodity orders—we engineer dedicated, high-margin ingredient pipelines and align factory-level production metrics to your precise corporate formulation targets. Whether your brand requires unique specifications regarding fat melting curves, precise color intensities, specific fat-to-moisture ratios, particular alkalization depths, pH balancing, or localized forward-contract logistical scheduling, our team is equipped to tailor your run.',
      'Every engagement runs at Full Container Load volumes and above. That threshold is fixed, and it is precisely what makes factory-level pricing and dedicated production runs possible. Within it, grade allocation, staged delivery schedules, and multi-container forward contracts are structured around your production cadence. To scope your container plan, book an exploratory advisory call.',
      "Do not leave your product chemistry or supply continuity to chance. Contact Pellexa's sourcing division today to register your technical requirements, review comprehensive specification sheets, arrange local sample evaluations, and design a scalable container-load infrastructure engineered directly for your brand.",
    ],
    cta: 'Schedule a Corporate Sourcing Consultation',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Agri-Food Portfolio — public catalog for the /food hub.
//
// Mirrors the category list in `docs/Pellexa Profile&Operating Model.MD` §5.
// Every line operates strictly at Full Container Load volumes and above (§1);
// no card, chip, or CTA in this block may imply sub-FCL or low-MOQ entry.
// All nine categories resolve to the page-local '#contact' anchor — the matcha
// and cacao product-line routes were consolidated back into the hub.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnFood: ParentContent['food'] = {
  sectionLabel: 'Pellexa Agri-Food',
  title: 'Bulk B2B Food Sourcing Portfolio',
  subtitle:
    'Nine dry and bulk food categories sourced direct from authorized facilities. Every line operates at Full Container Load volumes and above, under third-party quality control and back-to-back contract frameworks.',
  fclBadge: 'FCL Minimums — 20ft / 40ft Maritime Only',
  email: 'agri-food.sales@pellexa.com',
  categories: [
    {
      id: 'matcha',
      title: 'Matcha',
      description:
        'Tiered procurement across ceremonial, beverage, and industrial grades from authorized milling partners. Certified organic and high-consistency non-organic lines, matched to your milling, cup profile, and thermal-stability requirements — contracted at Full Container Load volumes only.',
      chips: [
        'Ceremonial',
        'Beverage Grade',
        'Industrial',
        'JAS / NOP / EU Organic',
        'FCL Only',
      ],
      tag: 'Active Product Line',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'tea',
      title: 'Industrial Tea',
      description:
        'Bulk leaf and cut tea for blending houses, beverage manufacturers, and private-label packers. Origin, grade, and cut selected against your cup profile and extraction parameters, then locked under forward container contracts.',
      chips: ['Black', 'Green', 'Oolong', 'CTC / Orthodox', 'FCL Only'],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'cacao',
      title: 'Cacao Derivatives',
      description:
        'Single-origin Filipino cacao across three technical pillars — powder, butter, and liquor — with verified analytical parameters for industrial chocolate and specialty beverage lines. Specs, samples, and pilot runs precede mass production.',
      chips: [
        'Cocoa Powder',
        'Cocoa Butter',
        'Cocoa Liquor',
        'Third-Party QC',
        'FCL Only',
      ],
      tag: 'Cocoa Runway',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'coconut',
      title: 'Coconut',
      description:
        'Wholesale sourcing across the Filipino coconut belt — oil, dried, and concentrate formats contracted at industrial pricing tiers against your refining and formulation specs, at 20ft / 40ft container scale.',
      chips: [
        'Copra',
        'Virgin Coconut Oil',
        'Desiccated',
        'Water Concentrate',
        'FCL Only',
      ],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'seed-oils',
      title: 'Seed Oils',
      description:
        'Crude and refined edible oils in flexitank or drummed FCL format, specified against free fatty acid, peroxide value, and colour thresholds for industrial food processing.',
      chips: ['Sunflower', 'Soybean', 'Palm', 'Refined / Crude', 'FCL Only'],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'rice',
      title: 'Rice',
      description:
        'Milled rice contracted by grain length, broken percentage, and moisture tolerance — for repackers, foodservice distributors, and industrial processing lines, shipped as Full Container Loads only.',
      chips: ['Long Grain', 'Jasmine', 'Parboiled', 'Broken Grades', 'FCL Only'],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'pasta',
      title: 'Pasta',
      description:
        'Durum semolina pasta in bulk and retail-ready formats, including private-label production runs specified to your cut, packaging, and cooking-tolerance requirements under back-to-back factory contracts.',
      chips: [
        'Durum Semolina',
        'Short Cut',
        'Long Cut',
        'Private Label',
        'FCL Only',
      ],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'canned',
      title: 'Canned Goods',
      description:
        'Shelf-stable canned production from audited facilities — brine, oil, and sauce packs specified by can format, drained weight, and label programme, with dual third-party QC before shipment.',
      chips: ['Vegetables', 'Fruit', 'Fish', 'Legumes', 'FCL Only'],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
    {
      id: 'dry-goods',
      title: 'General Dry Food',
      description:
        'The broader dry-goods channel — staples and dry ingredients sourced through authorized suppliers only, contracted at container scale against your technical specification and documentation checklist.',
      chips: ['Pulses', 'Flours', 'Sugar', 'Dry Mixes', 'FCL Only'],
      tag: 'Bulk Wholesale',
      cta: 'Request FCL Quote',
      href: '#contact',
    },
  ],
  contact: {
    sectionLabel: 'Institutional Procurement Inquiry',
    title: 'Qualify Your',
    titleHighlight: 'Agri-Food Engagement',
    subtitle:
      'Route a commercial inquiry across our dry-food portfolio. Qualified accounts receive a container-aligned brief and access to the staged verification pipeline.',
    benefits: [
      'Nine dry and bulk categories under one FCL operating model',
      'Direct factory pricing — no inventory markup or holding costs',
      'Staged verification: specs & certs, samples, pilot batch, mass production',
      'Third-party QC and ALL RISK cargo insurance on every contracted shipment',
    ],
    emailCardLabel: 'Direct agri-food procurement contact',
    copy: 'Copy',
    copied: 'Copied',
    scopeTitle: 'Dry-food portfolio scope',
    scopePoints: [
      {
        title: 'FCL allocations',
        body: 'Every engagement runs at Full Container Load volumes and above — 20ft and 40ft maritime only. No LCL, sub-container, or low-MOQ entry.',
      },
      {
        title: 'Direct-from-origin milling and refining',
        body: 'Sourced from authorized origin facilities under back-to-back factory contracts. Direct factory pricing — no inventory markup or holding costs.',
      },
      {
        title: 'Lab documentation and COA',
        body: 'Batch-level certificates of analysis and supporting lab documentation are released upon commercial qualification.',
      },
    ],
    ctaLabel: 'Open procurement inquiry',
    mailtoSubject: 'Pellexa Agri-Food — Procurement Inquiry',
    fallbackNote:
      'If your mail client does not open, copy the address and send your brief directly.',
    qualificationNote:
      'Lab documentation and COA are issued after commercial qualification. Inquiries are routed to agri-food.sales@pellexa.com.',
  },
  operatingModel: {
    sectionLabel: 'Operating Model',
    title: 'How Pellexa Executes Agri-Food Supply',
    subtitle:
      'A fixed B2B process from first inquiry to contracted container loads — FCL-only, third-party verified, and commercially mirrored between client and factory.',
    stages: [
      {
        label: '01',
        title: 'FCL Volume Floor',
        body: 'Every engagement runs at Full Container Load volumes and above — 20ft and 40ft maritime containers. We do not offer LCL, sub-container, or low-MOQ entries.',
      },
      {
        label: '02',
        title: 'Staged Verification Pipeline',
        body: 'Technical specifications and certificates, then physical samples, then a pilot batch, then mass production. Each gate must clear before the next stage is released.',
      },
      {
        label: '03',
        title: 'Legal & Commercial Framework',
        body: 'NCNDA first, then back-to-back contracts with payment terms mirrored between client and factory — typically 70/30, or 100% advance where the facility requires it.',
      },
      {
        label: '04',
        title: 'Third-Party QC & Insurance',
        body: 'Two standard independent inspections: pre-production and pre-shipment at packing. Cargo is covered by ALL RISK insurance placed through a third-party insurer.',
      },
      {
        label: '05',
        title: 'Shipping Terms — CIF or DDP',
        body: 'Maritime shipments are coordinated under CIF or DDP terms depending on your import-license setup and local importer partners. Freight moves via recognized forwarders; Pellexa is not the freight forwarder, customs broker, or importer of record.',
      },
    ],
  },
  disclaimer: {
    title: 'Operational Scope',
    body: 'Pellexa is a sourcing, quality-control, and supply-chain management partner. We are not a freight forwarder, customs broker, or importer of record.',
    points: [
      'Import is executed under your import license, or through a local importer partner when you are not the importer of record.',
      "Maritime shipments are coordinated under CIF or DDP terms depending on import-license setup and local importer partners; freight moves via recognized forwarders or the supplier's forwarder.",
      'Customs clearance is handled by a licensed customs broker — never by Pellexa.',
      'Quality control is performed on-site by an independent third party — two standard inspections, at production start and at packing.',
      'Cargo is covered by ALL RISK insurance placed through a third-party insurer.',
      'All categories operate strictly at Full Container Load volumes and above — 20ft / 40ft maritime only.',
    ],
  },
}

export const parentEn: ParentContent = {
  meta: { title: 'Pellexa — Strategic B2B Sourcing, QC & Supply Chain Management' },
  nav: {
    links: [
      { label: 'Solutions', href: '#solutions' },
      { label: 'Agri-Food Sourcing', href: '/food' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: 'Get in Touch',
  },
  hero: {
    badge: 'Strategic B2B Sourcing & Supply Chain Partner',
    headlineTop: 'Your Bridge to',
    headlineHighlight: 'World-Class',
    headlineBottom: 'Sourcing & Supply Chains',
    subtitle:
      'Pellexa specializes in B2B sourcing, third-party quality control, and international supply chain management. We connect verified global manufacturers with your market and lower your procurement and import costs through a structured, calculated process.',
    cta1: 'Explore Our Solutions',
    cta2: 'Get in Touch',
  },
  solutions: {
    sectionLabel: 'Our Verticals',
    title: 'Solutions Portfolio',
    subtitle:
      'Each vertical is backed by dedicated Tier-1 manufacturing partners, a structured verification process, and third-party quality control.',
    ledTitle: 'Pellexa LED',
    ledDescription:
      'Custom LED display solutions — indoor, outdoor, rental, and events — precision-manufactured by our engineering partner, with dynamic project-based order minimums. Pellexa does not perform installations: on request we can refer vetted local installation contractors, and any installation is contracted, executed, and warranted directly between the client and that contractor.',
    foodTitle: 'Pellexa Agri-Food',
    foodDescription:
      'Bulk agri-food sourcing — matcha, industrial tea, cacao, coconut, seed oils, rice, pasta, canned and dry goods — direct from authorized facilities, at Full Container Load (FCL) volumes and above.',
    generalTitle: 'Pellexa General Sourcing',
    generalDescription:
      'Industrial and consumer sourcing from audited Asia manufacturing partners — heavy equipment and machinery, building and construction materials, custom acrylic and TCG enclosures, and luxury brand packaging. FCL-scale minimums for standard industrial lines; project-based dynamic MOQ for specialized/custom fabrication lines (such as custom acrylic enclosures and luxury brand packaging). Consult our sourcing team to scope your order.',
    generalCategories: [
      'Heavy Equipment & Machinery',
      'Building & Construction Materials',
      'Custom Acrylic & TCG Enclosures',
      'Luxury Brand Packaging',
    ],
    generalOriginLabel: 'Asia Manufacturing Hubs',
    generalMOQBadge: 'FCL Minimums — Dynamic MOQ for Specialized Lines',
    generalTargetLabel: 'Enterprise & Luxury Accounts',
    learnMore: 'Learn More',
    newVertical: 'New Vertical',
    comingSoon: 'Coming Soon',
  },
  about: {
    sectionLabel: 'The Pellexa Advantage',
    titleMain: 'The Strategic Bridge Between',
    titleFaded: 'Verified Global Factories & Your Market',
    subtitle:
      'Pellexa connects world-class manufacturing with your market through a structured, transparent process. We are not a freight forwarder, customs broker, or importer of record — we structure, verify, and coordinate every transaction under NCNDA and back-to-back contract frameworks.',
    pillars: [
      {
        title: 'Verified Suppliers & Contract Framework',
        description:
          'Authorized, certified factories with full supplier disclosure — secured by NCNDA, back-to-back contracts, and structured payment terms (70/30 or 100% advance).',
      },
      {
        title: 'Supply Chain & Logistics Coordination',
        description:
          'Logistics coordination executed under your import license or via local importer partners — with blind shipping available for enterprise buyers.',
      },
      {
        title: 'Third-Party QC & ALL RISK Insurance',
        description:
          'Independent on-ground QC (two standard inspections: pre-production and packing/pre-shipment) plus comprehensive ALL RISK cargo insurance via 3rd-party insurers.',
      },
      {
        title: 'Staged Verification Pipeline',
        description:
          'Technical specs and certificates approval, physical samples, pilot batch when needed — moving to mass production only after full sign-off.',
      },
    ],
  },
  contact: {
    title: 'Ready to Start a Project?',
    subtitle:
      'Whether you need LED displays, agri-food sourcing, or want to explore any of our upcoming verticals — reach out directly and we\'ll get back to you personally.',
    email: 'pelle@pellexa.com',
    cta1: 'Send Us an Email',
    cta2: 'LED Inquiry Form',
  },
  scopeDisclaimer: {
    title: 'Operational Scope',
    body: 'Pellexa is a sourcing, quality-control, and supply-chain management partner. We are not a freight forwarder, customs broker, or importer of record.',
    points: [
      'Import is executed under your import license, or through a local importer partner when you are not the importer of record.',
      "Maritime shipments are coordinated under CIF or DDP terms depending on import-license setup and local importer partners; freight moves via recognized forwarders or the supplier's forwarder.",
      'Customs clearance is handled by a licensed customs broker — never by Pellexa.',
      'Quality control is performed on-site by an independent third party — two standard inspections, at production start and at packing.',
      'Cargo is covered by ALL RISK insurance placed through a third-party insurer.',
      'FCL-scale minimums apply to standard industrial lines; specialized/custom fabrication lines (such as custom acrylic enclosures and luxury brand packaging) carry project-based dynamic MOQs confirmed at consultation.',
    ],
  },
  footer: {
    tagline:
      'The strategic nexus between world-class manufacturing and structured, verified B2B supply chains.',
    copyright: '© {year} Pellexa. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  cocoa: parentEnCocoa,
  food: parentEnFood,
}
