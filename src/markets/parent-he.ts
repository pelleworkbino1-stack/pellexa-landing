import type { ParentContent } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — Phase 1 data plumbing.
//
// Sourced verbatim from `docs/cocoa_knowlage.md` (Sections 1, 2, 3, 5). Operational
// descriptions, batch chemistry markers, and CTAs are NOT translated in this
// phase — the Phase 1 contract forbids altering, expanding, summarizing, or
// inventing technical operational text. The Hebrew translation pass is
// deferred to a later phase; the registry shape stays identical so any future
// localization swap is a pure-content replacement with no type churn.
// ─────────────────────────────────────────────────────────────────────────────

const parentHeCocoa: ParentContent['cocoa'] = {
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
      'Pellexa frameworks raw technical data sheet parameters into elite corporate compliance metrics that showcase ironclad regulatory readiness and institutional trust badges across our digital portfolio:',
    analyticalTitle: 'Quality-Control Benchmarks & Analytical Parameters',
    analyticalGroups: [
      {
        title: 'Chemical & Physical Testing',
        summary:
          'Our entire supply chain is independently tested and verified against rigorous laboratory and analytical criteria to ensure frictionless entry into major international ports.',
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
          'Mandatory sterilization validation and independent laboratory screening across every single contract run.',
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
          'Full US-FDA and Local FDA Compliance ensures frictionless customs clearance and regulatory entry.',
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
    title: 'Supply Continuity & Global Maritime Logistics Statement',
    paragraphs: [
      'Pellexa operates with a highly strategic, localized network to insulate your corporate supply chain from regional market volatility. While our standard pipeline is structurally optimized around high-volume enterprise distribution and Full Container Load (FCL 20ft and 40ft maritime shipping models), routing directly to strategic major marine hubs including Ashdod Port, Israel, and beyond—we recognize that market-leading brands often scale over time. To insulate your brand from restrictive volume requirements, our logistical framework accommodates customized, low-MOQ options and flexible wholesale volume entries tailored to your specific supply phase. To review exact minimum order parameters, clients are required to schedule a technical consultation directly with our logistics team.',
      'Operating predominantly on professional CIF (Cost, Insurance, and Freight) incoterms to client ports of destination, our logistics framework takes full accountability for origin processing—from initial export declarations and strict pre-shipment phytosanitary inspections to marine cargo insurance and ocean transit routing. Featuring a standard 24-month unopened shelf stability across our powder and liquor lines, we assist your procurement division in structuring stable forward-contracts that lock in volume and insulate your corporate operations against spot-price surges. We ensure your raw materials arrive with their technical integrity entirely intact.',
    ],
  },
  masterCTA: {
    sectionLabel: 'Conversion-Oriented Lead Generation (The Master CTA)',
    headline: 'Architect Your Custom Factory Run: Optimize Your Supply Chain',
    paragraphs: [
      'In global ingredient sourcing, standard configurations rarely satisfy the strict requirements of a market-leading product line. At Pellexa, we do not simply sell off-the-shelf commodities—we engineer dedicated, high-margin ingredient pipelines and align factory-level production metrics to your precise corporate formulation targets. Whether your brand requires unique specifications regarding fat melting curves, precise color intensities, specific fat-to-moisture ratios, particular alkalization depths, pH balancing, or localized forward-contract logistical scheduling, our team is equipped to tailor your run.',
      'Our deployment models are engineered for absolute flexibility; we support high-volume container placements as well as customized, lower-volume runs through adaptive MOQ frameworks designed around your operating reality. To evaluate how we can map factory metrics to your production needs without restrictive volume ceilings, book an exploratory advisory call today.',
      "Do not leave your product chemistry or supply continuity to chance. Contact Pellexa's sourcing division today to register your technical requirements, review comprehensive specification sheets, arrange local sample evaluations, and design a scalable container-load infrastructure engineered directly for your brand.",
    ],
    cta: 'Schedule a Corporate Sourcing Consultation',
  },
}

export const parentHe: ParentContent = {
  meta: { title: 'Pellexa — פתרונות טכנולוגיים אסטרטגיים' },
  nav: {
    links: [
      { label: 'פתרונות', href: '#solutions' },
      { label: 'רכש מזון וחקלאות', href: '/food' },
      { label: 'אודות', href: '#about' },
      { label: 'צור קשר', href: '#contact' },
    ],
    cta: 'צור קשר',
  },
  hero: {
    badge: 'שותף טכנולוגי אסטרטגי',
    headlineTop: 'הגשר שלך אל',
    headlineHighlight: 'פתרונות טכנולוגיים',
    headlineBottom: 'ברמה עולמית',
    subtitle:
      'Pellexa מחברת יצרנים גלובליים מובילים עם השוק שלך. ממסכי LED מדויקים ועד ורטיקלים טכנולוגיים חדשים — אנחנו מטפלים ברכש, לוגיסטיקה ויישום מקומי.',
    cta1: 'הפתרונות שלנו',
    cta2: 'צור קשר',
  },
  solutions: {
    sectionLabel: 'הוורטיקלים שלנו',
    title: 'תיק פתרונות',
    subtitle:
      'כל ורטיקל מגובה בשותפי ייצור Tier-1 ייעודיים, שרשראות אספקה מותאמות ומומחיות מקומית.',
    ledTitle: 'Pellexa LED',
    ledDescription:
      'פתרונות תצוגת LED בהתאמה אישית — פנים, חוץ, השכרה והתקנות לאירועים. ייצור מדויק, משלוח והתקנה מקצועית.',
    foodTitle: 'Pellexa Agri-Food',
    foodDescription:
      'רכש וסורסינג מדויק למוצרי מזון גלובליים, חומרי גלם ושרשראות אספקה חקלאיות — ישירות ממפעלים מוסמכים לשווקים מוסדיים וארגוניים.',
    generalTitle: 'Pellexa General Sourcing',
    generalDescription:
      'ערוץ ייצור המוני אופורטוניסטי ישירות ממרכזי הייצור באסיה — קופסאות מותאמות, רהיטים, צעצועים ואקססוריז לייפסטייל. מותאם למותגים גלובליים, מלונות יוקרה וחשבונות ארגוניים גדולים. כמויות ההזמנה נקבעות לפי קטגוריה וסקטור — צרו קשר עם צוות הסורסינג להתאמת פרופיל ייצור ייעודי לפרויקט.',
    generalCategories: ['קופסאות מותאמות', 'רהיטים', 'צעצועים', 'לייפסטייל'],
    generalOriginLabel: 'מרכזי ייצור באסיה',
    generalMOQBadge: 'MOQ משתנה — בהתאם לדרישות הפרויקט',
    generalTargetLabel: 'חשבונות ארגוניים ויוקרתיים',
    learnMore: 'למידע נוסף',
    newVertical: 'ורטיקל חדש',
    comingSoon: 'בקרוב',
  },
  about: {
    sectionLabel: 'היתרון של Pellexa',
    titleMain: 'הגשר האסטרטגי בין',
    titleFaded: 'הנדסה גלובלית לביצוע מקומי',
    subtitle:
      'Pellexa הוא הצומת שמחבר יכולות ייצור ברמה עולמית עם הדרישות הייחודיות של השוק שלך. אנחנו לא רק מייבאים מוצרים — אנחנו מספקים פתרונות מנוהלים מקומית.',
    pillars: [
      {
        title: 'שותפי ייצור Tier-1',
        description:
          'אנחנו עובדים אך ורק עם מפעלים מוסמכי ISO, מוכרים גלובלית עם 28+ שנות מורשת הנדסית.',
      },
      {
        title: 'לוגיסטיקה מקצה לקצה',
        description:
          'שילוח בינלאומי, שחרור מכס ומשלוח עד הדלת — עם מעקב בזמן אמת על כל משלוח.',
      },
      {
        title: 'אבטחת איכות',
        description:
          'בקרת איכות מלאה במפעל, בדיקה לפני משלוח, ואחריות מקיפה עם תמיכה טכנית מקומית.',
      },
      {
        title: 'יישום מקומי',
        description:
          'צוותים מקומיים להתקנה מקצועית, כיול, הדרכה ותחזוקה שוטפת.',
      },
    ],
  },
  contact: {
    title: 'מוכנים להתחיל פרויקט?',
    subtitle:
      'בין אם מסכי LED, רכש מזון, או כל פנייה אחרת — שלחו מייל ישירות ונחזור אליכם באופן אישי.',
    email: 'pelle@pellexa.com',
    cta1: 'שלחו לנו מייל',
    cta2: 'טופס פנייה LED',
  },
  footer: {
    tagline: 'הצומת האסטרטגי בין הנדסה גלובלית ברמה עולמית לביצוע מקומי.',
    copyright: '© {year} Pellexa. כל הזכויות שמורות.',
    privacy: 'פרטיות',
    terms: 'תנאי שימוש',
  },
  cocoa: parentHeCocoa,
}
