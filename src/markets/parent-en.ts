import type { ParentContent } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — content ingested verbatim from docs/cocoa_knowlage.md
// (Sections 1, 2, 3, 5). Framed white-label for a premium global enterprise
// network — no supplier brand, processing facility, or proprietary name is
// surfaced in the registry. Do not edit, summarize, or invent technical metrics
// in this block; the canonical source is `docs/cocoa_knowlage.md` at the repo root.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnCocoa: ParentContent['cocoa'] = {
  meta: {
    title: 'Pellexa Cacao Derivatives — Single-Origin Filipino Sourcing',
    description:
      'Single-origin Filipino cacao derivatives portfolio — premium powder, butter, and liquor grades with verified analytical parameters, HACCP + GMP + FDA compliance, and CIF maritime logistics to global enterprise customers.',
  },
  shell: {
    eyebrow: 'Cacao Derivatives Portfolio',
    headlineLead: 'Single-origin',
    headlineHighlight: 'cacao asset classes',
    headlineTail: 'for enterprise formulation',
    subtitle:
      'Three technical pillars — powder, butter, and liquor — registered as discrete grade SKUs and routed through a unified compliance and logistics gate.',
    applicationsEyebrow: 'Section 03 · Applications Matrix',
    trustEyebrow: 'Section 04 · Trust Infrastructure',
    logisticsEyebrow: 'Section 05 · Logistical Authority',
    procurementGateLabel: 'Procurement Gate',
    specPackCta: 'Issue Specification Pack',
    familyLabels: {
      powder: 'Cocoa Powder',
      butter: 'Cocoa Butter',
      liquor: 'Cocoa Liquor',
    },
  },
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
  meta: {
    title: 'Pellexa Agri-Food — Bulk B2B Food Sourcing Portfolio',
    description:
      'Bulk B2B sourcing across matcha, industrial tea, cacao derivatives, coconut, seed oils, rice, pasta, canned goods, and general dry food. Direct from authorized facilities at Full Container Load volumes and above, with third-party QC and maritime shipping coordinated under CIF or DDP terms.',
  },
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
        title: 'Managed Freight — CIF baseline',
        body: 'Full Container Load (FCL) maritime freight coordinated to destination container terminals — including US, European, and Israeli commercial ports (CIF baseline) — with clearance documentation aligned alongside licensed local brokers. Pellexa coordinates this chain; we are not the freight forwarder, customs broker, or importer of record.',
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

// ─────────────────────────────────────────────────────────────────────────────
// General Sourcing — `/sourcing`.
//
// Four equal-weight institutional verticals. Two run at FCL-scale minimums
// (heavy equipment, construction materials); two are specialized fabrication
// lines on a project-based dynamic MOQ (precision acrylic/PMMA, luxury brand
// packaging). Only the acrylic pillar deep-links out, to `/acrylic`.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnSourcing: ParentContent['sourcing'] = {
  meta: {
    title: 'Pellexa General Sourcing — Asia Manufacturing Partners',
    description:
      'Industrial and institutional sourcing from audited Asia manufacturing partners — heavy equipment and machinery, building and construction materials, precision acrylic and engineered PMMA, and luxury brand packaging. FCL-scale minimums for standard industrial lines; project-based dynamic MOQ for specialized fabrication lines.',
  },
  email: 'pelle@pellexa.com',
  hero: {
    eyebrow: 'Audited Asia Manufacturing Partners',
    headlineTop: 'General',
    headlineHighlight: 'Sourcing',
    sub: 'B2B sourcing from audited Tier-1 and specialized partner facilities across key Asia production hubs. We structure, verify, and coordinate — we do not manufacture in-house.',
    moqBadge: 'FCL Minimums — Dynamic MOQ for Specialized Lines',
  },
  pillars: {
    sectionLabel: 'Four Sourcing Pillars',
    title: 'Four Institutional Verticals, One Operating Model',
    subtitle:
      'Each pillar is backed by audited partner facilities, a staged verification pipeline, and third-party quality control. The industrial pillars run at Full Container Load volumes; the specialized fabrication lines run on a project-based dynamic MOQ.',
    items: {
      'heavy-equipment': {
        title: 'Heavy Equipment & Machinery',
        tag: 'Industrial / FCL-scale',
        description:
          'Direct-from-factory procurement of industrial machinery, heavy equipment, and production lines — specified against your technical requirements, regulatory environment, and operational cycle. Specifications and certificates are verified before any commercial commitment.',
        chips: ['Direct From Factory', 'Verified Technical Specs', 'Back-to-Back Contracts'],
        cta: 'Direct Factory RFQ',
      },
      'construction-materials': {
        title: 'Building & Construction Materials',
        tag: 'Industrial / FCL-scale',
        description:
          'Building materials and raw inputs from authorized facilities at Full Container Load volumes — matched to destination-market standards, material approvals, and your project schedule. Material certificates are verified in the document pack, not assumed.',
        chips: ['Full Container Load', 'Material Certificates', 'Third-Party QC'],
        cta: 'Direct Factory RFQ',
      },
      'precision-acrylic': {
        title: 'Precision Acrylic & Engineered PMMA',
        tag: 'Specialized / Dynamic MOQ',
        description:
          'Engineered PMMA enclosures and assemblies for archival preservation, museum and gallery protective frameworks, bespoke luxury brand showcases, and precision collector enclosures. Produced at specialized partner facilities and verified through staged sampling and dual third-party QC.',
        chips: ['High Optical Clarity', 'CNC / Laser Cut', 'Project-Based Dynamic MOQ'],
        cta: 'Technical Fabrication Specs',
        link: '/acrylic',
      },
      'luxury-packaging': {
        title: 'Luxury Brand Packaging',
        tag: 'Specialized / Dynamic MOQ',
        description:
          'Luxury-tier brand packaging and gift architecture specified around the product itself — finish, structure, and substrate — produced at specialized partner facilities rather than drawn from a catalog shelf.',
        chips: ['Specified to Brand', 'Premium Finishes', 'Staged Sampling'],
        cta: 'Direct Factory RFQ',
      },
    },
  },
  contact: {
    title: 'Enterprise Procurement Inquiry',
    body: 'Submit volume profile, target market, and category preference. Standard industrial lines run at FCL-scale minimums; specialized fabrication is scoped at a project-based dynamic MOQ. Qualified accounts receive a tier-aligned commercial brief within 2 business days.',
    ctaLabel: 'Request Sourcing Brief',
    mailtoSubject: 'Pellexa General Sourcing — Procurement Inquiry',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Acrylic Sourcing — `/acrylic`.
//
// Positioned as high-precision engineering PMMA: archival preservation,
// museum/gallery protection, luxury retail, and high-value collector
// preservation. Graded-collectible and trading-card (TCG) enclosures are named
// once, as a technical capability under the archival surface, per
// `docs/Pellexa Profile&Operating Model.MD` §5 — no consumer brand names.
//
// Every spec row is a partner-capability baseline. The hedges ("where the
// partner facility supports it", "confirmed per lot", "subject to partner
// capability", "verified in the document pack, not assumed") are load-bearing
// and must not be trimmed: Pellexa owns no fabrication plant and is not the
// freight forwarder, customs broker, or importer of record.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnAcrylic: ParentContent['acrylic'] = {
  meta: {
    title: 'Pellexa Acrylic Sourcing — Precision PMMA & Partner Fabrication',
    description:
      'Precision acrylic and engineered PMMA sourced from audited fabrication partners — high-clarity archival preservation, museum and gallery protective frameworks, bespoke luxury brand showcases, and precision-engineered collector enclosures. Project-based dynamic MOQ as a specialized fabrication line; FCL-scale minimums for standard industrial lines. Staged sampling, dual third-party QC, back-to-back contracts.',
  },
  email: 'pelle@pellexa.com',
  hero: {
    eyebrow: 'Sourced From Audited Fabrication Partners',
    headlineTop: 'Precision Acrylic &',
    headlineHighlight: 'Engineered PMMA',
    sub: 'We source engineered PMMA enclosures for archival preservation, museums and galleries, luxury brand environments, and high-value collector assets from audited specialized fabrication partners. Any geometry and form factor is quoted against partner capability — Pellexa structures the brief, verification pipeline, and QC. We do not own fabrication plants.',
    moqBadge: 'FCL Minimums — Dynamic MOQ for Specialized Lines',
  },
  surfaces: {
    sectionLabel: 'Capabilities Spectrum',
    title: 'Partner-Fabricated PMMA, Quoted to Brief',
    items: {
      'archival-preservation': {
        tag: 'Archival & Collector Preservation',
        title: 'High-Clarity Archival Enclosures',
        description:
          'Engineered enclosures for the preservation of high-value assets — UV-filtered archival housings, graded-collectible and trading-card (TCG) enclosures, and long-term optical-fidelity retention. Fabricated to client drawings and quoted against partner capability, not a fixed catalog.',
        highlights: ['UV-Filtered', 'Archival-Grade', 'Optical Fidelity'],
      },
      'museum-gallery': {
        tag: 'Museum & Gallery',
        title: 'Museum & Gallery Protective Frameworks',
        description:
          'High-clarity protective frameworks sourced for museums, private galleries, collector networks, and brand showrooms requiring tamper resistance, optical fidelity, and bespoke geometry — vitrines, plinth cases, and artifact housings. UV-filter, anti-static, and tamper-resistant options per partner capability.',
        highlights: ['Tamper-Resistant', 'Anti-Static', 'Conservation Spec'],
      },
      'luxury-retail': {
        tag: 'Luxury Retail & Brand',
        title: 'Bespoke Luxury Brand Showcases',
        description:
          'Premium retail display fixtures specified around the merchandise — jewelry, watches, fragrance, hospitality fixtures, and flagship store moments — produced at partner facilities rather than as an off-the-shelf cabinet.',
        highlights: ['Diamond-Polish', 'LED-Integrated', 'Modular'],
      },
      'engineered-pmma': {
        tag: 'Architectural & Industrial',
        title: 'Precision-Engineered PMMA Components',
        description:
          'Large-format architectural fixtures, custom partitioning, signage substrates, lab and warehouse infrastructure, and industrial PMMA components engineered at partner facilities to your load dynamics, regulatory environment, and operational cycle.',
        highlights: ['Large-Format', 'Load-Engineered', 'CNC / Laser Cut'],
      },
    },
  },
  specs: {
    sectionLabel: 'Engineering Capability Baselines',
    title: 'Partner Parameters — Confirmed at Consultation',
    rows: {
      thickness: {
        label: 'Material Thickness',
        value:
          'Variable — specified to load dynamics (including 30mm+ / multi-layer where the partner facility supports it)',
      },
      format: {
        label: 'Sheet Format',
        value: 'CNC / laser cut to custom dimensions at the partner facility',
      },
      clarity: {
        label: 'Optical Clarity',
        value:
          'Up to 92% light transmission (premium-grade virgin PMMA, grade confirmed per lot)',
      },
      tolerance: {
        label: 'Tolerance',
        value:
          'Down to ±0.1mm where the partner process allows — confirmed against drawings',
      },
      finishes: {
        label: 'Finishes',
        value:
          'Diamond-polish, matte-frosted, custom tint, mirror-backing — subject to partner capability',
      },
      leadTime: {
        label: 'Lead Time',
        value:
          'Mapped to project brief and partner load — rush tracks only if the facility can commit',
      },
      moq: {
        label: 'MOQ Tiers',
        value:
          'Project-based dynamic MOQ (specialized/custom fabrication line). Standard industrial lines remain FCL-scale.',
      },
      compliance: {
        label: 'Compliance',
        value:
          'REACH / RoHS / FDA and sector tracks where the partner holds valid certification — verified in the document pack, not assumed',
      },
    },
    footnote:
      'Every parameter above is a partner-capability baseline, not a Pellexa-owned plant spec. Material, thickness, finish, envelope, run volume, and lead time are confirmed during consultation against the selected facility, then locked through drawings, samples, and dual third-party QC.',
  },
  intake: {
    title: 'Acrylic Project Consultation',
    subtitle:
      'Open the consultation brief in your email client — we map your physical, dimensional, and aesthetic goals onto a partner production track.',
    benefits: [
      'Pre-filled consultation brief covering organization, capability surface, and project profile',
      'Sourcing desk response within 3 business days',
      'Partner production track scoped to your project footprint — no catalog SKU assumption',
    ],
    ctaLabel: 'Open Consultation Brief',
    secondaryLabel: 'Email Direct',
    mailtoSubject: 'Pellexa Acrylic — Project Consultation Brief',
    brief: {
      heading: 'PELLEXA ACRYLIC — PROJECT CONSULTATION BRIEF',
      orgTitle: '1. ORGANIZATION',
      orgFields: ['Company', 'Industry / Sector', 'Target Market'],
      surfaceTitle: '2. CAPABILITY SURFACE (select any that fit)',
      surfaceOptions: [
        'Archival & Collector Preservation',
        'Museum & Gallery Protective Frameworks',
        'Bespoke Luxury Brand Showcases',
        'Architectural & Industrial PMMA Components',
        'Other (describe below)',
      ],
      profileTitle: '3. PROJECT PROFILE',
      profileFields: [
        'Dimensions / Envelope (W × H × D)',
        'Material Thickness / Load Dynamics',
        'Finish & Aesthetic Goals',
        'Projected Run Footprint',
        'Target Lead Time',
        'Regulatory / Sector Constraints',
      ],
      contactTitle: '4. CONTACT',
      contactFields: ['Name', 'Email', 'Phone'],
      signoff: 'Submitted via Pellexa Acrylic sourcing consultation.',
    },
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Partner-production pipeline shared by `/sourcing` and `/acrylic`.
// Stage 05 states the CIF baseline and the non-importer-of-record boundary.
// ─────────────────────────────────────────────────────────────────────────────

const parentEnSourcingProcess: ParentContent['sourcingProcess'] = {
  sectionLabel: 'Operating Model',
  title: 'How Pellexa Executes Partner Production',
  stages: [
    {
      label: '01',
      title: 'Technical drawings and specs',
      body: 'Partner-facility drawings, material specs, and certificates submitted for client sign-off before any tool-up.',
    },
    {
      label: '02',
      title: 'Prototype samples',
      body: 'Physical samples produced at the partner facility and shipped for evaluation.',
    },
    {
      label: '03',
      title: 'Pilot batch',
      body: 'When the brief requires it, a limited trial run before mass production is released.',
    },
    {
      label: '04',
      title: 'Mass production, QC and insurance',
      body: 'Full run only after sign-off, under back-to-back contracts (typically 70/30, or 100% advance where the facility requires it). Dual third-party on-site QC (pre-production and packing/pre-shipment). Cargo covered by ALL RISK insurance via a third-party insurer.',
    },
    {
      label: '05',
      title: 'Managed freight — CIF baseline',
      body: 'Full Container Load (FCL) maritime freight coordinated to destination container terminals — including US, European, and Israeli commercial ports (CIF baseline) — with clearance documentation aligned alongside licensed local brokers. Pellexa coordinates this chain; we are not the freight forwarder, customs broker, or importer of record.',
    },
  ],
}

export const parentEn: ParentContent = {
  meta: { title: 'Pellexa International LLC — Global B2B Sourcing & Supply Chain' },
  nav: {
    links: [
      { label: 'Solutions', href: '#solutions' },
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
      'Industrial and institutional sourcing from audited Asia manufacturing partners — heavy equipment and machinery, building and construction materials, precision acrylic and engineered PMMA, and luxury brand packaging. FCL-scale minimums for standard industrial lines; project-based dynamic MOQ for specialized/custom fabrication lines (such as precision acrylic and engineered PMMA, and luxury brand packaging). Consult our sourcing team to scope your order.',
    generalCategories: [
      'Heavy Equipment & Machinery',
      'Building & Construction Materials',
      'Precision Acrylic & Engineered PMMA',
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
      'Pellexa International LLC coordinates institutional B2B procurement programs, structuring direct-from-mill supply chains to primary destination ports across North America, Europe, Israel, and global commercial hubs. We are not a freight forwarder, customs broker, or importer of record — we structure, verify, and coordinate every transaction under NCNDA and back-to-back contract frameworks.',
    // U+00A0 binds "Founder & Managing" into one unbreakable phrase so the
    // ampersand can neither orphan at the end of a line nor start one.
    leadership: 'Executive Leadership: Pelle Bino — Founder\u00A0&\u00A0Managing Member',
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
      'FCL-scale minimums apply to standard industrial lines; specialized/custom fabrication lines (such as precision acrylic and engineered PMMA, and luxury brand packaging) carry project-based dynamic MOQs confirmed at consultation.',
    ],
  },
  footer: {
    tagline:
      'The strategic nexus between world-class manufacturing and structured, verified B2B supply chains.',
    copyright: '© {year} Pellexa International LLC. All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
  cocoa: parentEnCocoa,
  food: parentEnFood,
  sourcing: parentEnSourcing,
  acrylic: parentEnAcrylic,
  sourcingProcess: parentEnSourcingProcess,
  mailtoFallback: {
    copy: 'Copy address',
    copied: 'Copied',
    fallbackNote:
      'If your mail client does not open, copy the address and send your brief directly.',
    copyBrief: 'Copy full brief',
    copiedBrief: 'Brief copied',
    oversizeNote:
      'This brief is too long to pre-fill reliably in every mail client, so the button opens a blank message with the subject line only. Use “Copy full brief” and paste it into the message body.',
  },
}
