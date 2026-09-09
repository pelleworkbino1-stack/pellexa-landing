import type { ParentContent } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — Hebrew registry.
//
// Sourced from `docs/cocoa_knowlage.md` (Sections 1, 2, 3, 5). Technical
// descriptors (grade labels, batch chemistry markers, application rows) remain
// in English pending a full localization pass; the registry shape is identical
// to `parent-en.ts` so that swap stays pure-content with no type churn.
//
// EXCEPTION — every operational claim IS translated and must stay that way:
// logistics, MOQ thresholds, certifications, and the customs/import boundary
// are compliance-bearing copy. They are written to match
// `docs/Pellexa Profile&Operating Model.MD` §§1/3: FCL-and-above only, and
// Pellexa is never the freight forwarder, customs broker, or importer of record.
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
      'Pellexa frameworks raw technical data sheet parameters into elite corporate compliance metrics that showcase documented regulatory readiness and institutional trust badges across our digital portfolio:',
    analyticalTitle: 'Quality-Control Benchmarks & Analytical Parameters',
    analyticalGroups: [
      {
        title: 'Chemical & Physical Testing',
        summary:
          'כל אצווה חוזית נבדקת באופן עצמאי מול קריטריונים מעבדתיים ואנליטיים, כך שחבילת התיעוד שמגיעה לעמיל המכס ולרשות הרגולטורית שלכם תהיה מלאה ועמידה בנקודת הכניסה לנמל.',
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
          'אימות תהליכי חיטוי וסינון מעבדתי עצמאי בכל סבב ייצור חוזי.',
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
          'שותפי הייצור רשומים ב-US-FDA וברשויות הבריאות המקומיות, ותיעוד רגולטורי לכל משלוח נבדק ומאומת לפני היציאה מהמפעל. שחרור מהמכס והגשת הצהרות הייבוא מבוצעים על ידי עמיל המכס שלכם תחת רישיון הייבוא שלכם, או דרך שותף ייבוא מקומי — Pellexa אינה היבואן הרשמי.',
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
    title: 'רציפות אספקה ותיאום לוגיסטי',
    paragraphs: [
      'Pellexa בונה את שרשרת האספקה דרך רשת שותפים מקומית כדי לבודד את הרכש שלכם מתנודתיות בשוק האזורי. הפעילות מתבצעת אך ורק בהיקפי מכולה מלאה (FCL) ומעלה — מודלים ימיים של 20 ו-40 רגל — בניתוב לנמלי ים מרכזיים ובכללם נמל אשדוד, ישראל. איננו מציעים משלוחי LCL, כמויות מתחת למכולה מלאה או מינימומים נמוכים; היקף מכולה מלאה הוא סף הכניסה לכל קו קקאו. מינימומים מדויקים לכל דרגה, חלוקת הקצאות ולוחות זמנים לחוזים עתידיים נסגרים מול דסק הרכש שלנו בשלב ההסמכה המסחרית.',
      'משלוחים ימיים מתואמים בתנאי CIF או DDP, בהתאם למבנה רישיון הייבוא שלכם ולשותפי הייבוא המקומיים, ומבוצעים על ידי משלחים בינלאומיים מוכרים יחד עם מחלקת הייצוא של הספק. Pellexa מתאמת ומאמתת את השרשרת הזו, אך אינה משלח בינלאומי, עמיל מכס או היבואן הרשמי; כאשר נעשה שימוש ב-DDP, הייבוא מבוצע על ידי שותף ייבוא מקומי מורשה. הצהרות הייצוא במקור והבדיקות הפיטוסניטריות טרם המשלוח מבוצעות על ידי מפעל הייצוא והמשלח מטעמו; ביטוח מטען ALL RISK נרכש דרך חברת ביטוח צד-שלישי. עם יציבות מדף סטנדרטית של 24 חודשים באריזה סגורה בקווי האבקה והליקר, אנו מסייעים למחלקת הרכש שלכם לבנות חוזים עתידיים שנועלים כמות מול זינוקי מחיר בשוק הספוט.',
    ],
  },
  masterCTA: {
    sectionLabel: 'Conversion-Oriented Lead Generation (The Master CTA)',
    headline: 'Architect Your Custom Factory Run: Optimize Your Supply Chain',
    paragraphs: [
      'In global ingredient sourcing, standard configurations rarely satisfy the strict requirements of a market-leading product line. At Pellexa, we do not place off-the-shelf commodity orders—we engineer dedicated, high-margin ingredient pipelines and align factory-level production metrics to your precise corporate formulation targets. Whether your brand requires unique specifications regarding fat melting curves, precise color intensities, specific fat-to-moisture ratios, particular alkalization depths, pH balancing, or localized forward-contract logistical scheduling, our team is equipped to tailor your run.',
      'כל התקשרות מתבצעת בהיקפי מכולה מלאה (FCL) ומעלה. סף זה קבוע, והוא בדיוק מה שמאפשר תמחור ברמת המפעל וסבבי ייצור ייעודיים. בתוך המסגרת הזו, חלוקת ההקצאה בין הדרגות, לוחות אספקה מדורגים וחוזים עתידיים מרובי-מכולות נבנים סביב קצב הייצור שלכם. לבניית תוכנית המכולות שלכם — קבעו שיחת ייעוץ ראשונית.',
      "Do not leave your product chemistry or supply continuity to chance. Contact Pellexa's sourcing division today to register your technical requirements, review comprehensive specification sheets, arrange local sample evaluations, and design a scalable container-load infrastructure engineered directly for your brand.",
    ],
    cta: 'Schedule a Corporate Sourcing Consultation',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// תיק רכש מזון — קטלוג ציבורי לעמוד /food.
//
// תואם לרשימת הקטגוריות ב-`docs/Pellexa Profile&Operating Model.MD` §5.
// כל קו פועל אך ורק בהיקפי מכולה מלאה (FCL) ומעלה (§1); אין להציג בבלוק הזה
// כרטיס, תגית או קריאה לפעולה שמרמזים על כמויות מתחת למכולה מלאה.
// כל תשע הקטגוריות מפנות לעוגן המקומי '#contact' — עמודי המאצ׳ה והקקאו
// אוחדו בחזרה לתוך עמוד המרכז.
// ─────────────────────────────────────────────────────────────────────────────

const parentHeFood: ParentContent['food'] = {
  sectionLabel: 'Pellexa Agri-Food',
  title: 'תיק רכש מזון B2B בתפזורת',
  subtitle:
    'תשע קטגוריות מזון יבש ובתפזורת, ישירות ממפעלים מורשים. כל קו פועל בהיקפי מכולה מלאה (FCL) ומעלה, תחת בקרת איכות צד-שלישי ומסגרת חוזי גב-אל-גב.',
  fclBadge: 'מינימום FCL — מכולות 20 ו-40 רגל בלבד',
  email: 'agri-food.sales@pellexa.com',
  categories: [
    {
      id: 'matcha',
      title: 'מאצ׳ה',
      description:
        'רכש מדורג בדרגות טקסיות, משקה ותעשייה ממפעלי טחינה מורשים. קווים אורגניים מוסמכים וקווים לא-אורגניים בעקביות גבוהה, מותאמים לדרישות הטחינה, פרופיל הכוס והיציבות התרמית שלכם — בחוזה בהיקפי מכולה מלאה בלבד.',
      chips: [
        'דרגה טקסית',
        'דרגת משקה',
        'תעשייתי',
        'JAS / NOP / EU Organic',
        'FCL בלבד',
      ],
      tag: 'קו מוצר פעיל',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'tea',
      title: 'תה תעשייתי',
      description:
        'תה עלים וקצוץ בתפזורת לבתי מיזוג, יצרני משקאות ואורזים פרטיים. המקור, הדרגה והחיתוך נבחרים מול פרופיל הכוס ופרמטרי המיצוי שלכם, וננעלים בחוזי מכולה עתידיים.',
      chips: ['שחור', 'ירוק', 'אולונג', 'CTC / אורתודוקסי', 'FCL בלבד'],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'cacao',
      title: 'נגזרות קקאו',
      description:
        'קקאו פיליפיני ממקור יחיד בשלושה עמודי תווך טכניים — אבקה, חמאה וליקר — עם פרמטרים אנליטיים מאומתים לתעשיית השוקולד ולקווי משקאות ייעודיים. מפרטים, דגימות ואצווה ניסיונית קודמים לייצור ההמוני.',
      chips: [
        'אבקת קקאו',
        'חמאת קקאו',
        'ליקר קקאו',
        'בקרת איכות צד-שלישי',
        'FCL בלבד',
      ],
      tag: 'מסלול הקקאו',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'coconut',
      title: 'קוקוס',
      description:
        'רכש סיטונאי מחגורת הקוקוס הפיליפינית — פורמטים של שמן, מיובש ותרכיז, בחוזים בתמחור תעשייתי מול מפרטי הזיקוק והפורמולציה שלכם, בהיקף מכולות 20 / 40 רגל.',
      chips: [
        'קופרה',
        'שמן קוקוס כתית',
        'מיובש',
        'תרכיז מי קוקוס',
        'FCL בלבד',
      ],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'seed-oils',
      title: 'שמני זרעים',
      description:
        'שמני מאכל גולמיים ומזוקקים בפלקסיטנק או בחביות במכולה מלאה, במפרט מול ערכי חומצות שומן חופשיות, ערך פרוקסיד וסף צבע לתעשיית עיבוד המזון.',
      chips: ['חמניות', 'סויה', 'דקלים', 'מזוקק / גולמי', 'FCL בלבד'],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'rice',
      title: 'אורז',
      description:
        'אורז מולבן בחוזה לפי אורך גרגר, אחוז שברים וסף לחות — לאורזים מחדש, מפיצי מוסדי וקווי עיבוד תעשייתיים, במשלוח מכולה מלאה בלבד.',
      chips: ['גרגר ארוך', 'יסמין', 'מאודה', 'דרגות שברים', 'FCL בלבד'],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'pasta',
      title: 'פסטה',
      description:
        'פסטת סולת דורום בפורמטים של תפזורת ואריזה קמעונאית, כולל סבבי ייצור למותג פרטי במפרט החיתוך, האריזה וסבילות הבישול שלכם תחת חוזי גב-אל-גב עם המפעל.',
      chips: [
        'סולת דורום',
        'חיתוך קצר',
        'חיתוך ארוך',
        'מותג פרטי',
        'FCL בלבד',
      ],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'canned',
      title: 'שימורים',
      description:
        'ייצור שימורים יציבי מדף ממפעלים מבוקרים — אריזות במלח, בשמן וברוטב, במפרט לפי גודל פחית, משקל מסונן ותוכנית תווית, עם שתי בדיקות בקרת איכות צד-שלישי לפני המשלוח.',
      chips: ['ירקות', 'פירות', 'דגים', 'קטניות', 'FCL בלבד'],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
    {
      id: 'dry-goods',
      title: 'מזון יבש כללי',
      description:
        'ערוץ המזון היבש הרחב — מוצרי יסוד ורכיבים יבשים דרך ספקים מורשים בלבד, בחוזה בהיקף מכולה מול המפרט הטכני ורשימת התיעוד שלכם.',
      chips: ['קטניות', 'קמחים', 'סוכר', 'תערובות יבשות', 'FCL בלבד'],
      tag: 'סיטונאות בתפזורת',
      cta: 'בקשת הצעת מחיר FCL',
      href: '#contact',
    },
  ],
  contact: {
    sectionLabel: 'פניית רכש מוסדית',
    title: 'העריכו את',
    titleHighlight: 'מעורבות ה-Agri-Food שלכם',
    subtitle:
      'העבירו פניית רכש מסחרית על פני תיק המזון היבש. חשבונות מאושרים מקבלים תיק מיושר למכולה וגישה לצינור האימות המדורג.',
    benefits: [
      'תשע קטגוריות יבשות ובתפזורת תחת מודל FCL אחד',
      'תמחור ישיר מהמפעל — ללא מרווח מלאי או עלויות אחזקה',
      'אימות מדורג: מפרטים ותעודות, דגימות, אצווה ניסיונית וייצור המוני',
      'בקרת איכות צד-שלישי וביטוח מטען ALL RISK בכל משלוח בחוזה',
    ],
    emailCardLabel: 'יצירת קשר ישירה לרכש מזון וחקלאות',
    copy: 'העתק',
    copied: 'הועתק',
    scopeTitle: 'היקף תיק המזון היבש',
    scopePoints: [
      {
        title: 'הקצאות FCL',
        body: 'כל מעורבות פועלת בהיקפי מכולה מלאה ומעלה — מכולות 20 ו-40 רגל בלבד. אין כניסה ב-LCL, מתחת למכולה או ב-MOQ נמוך.',
      },
      {
        title: 'טחינה וזיקוק ישירות מהמקור',
        body: 'רכש ממפעלים מורשים במקור תחת חוזי גב-אל-גב עם המפעל. תמחור ישיר מהמפעל — ללא מרווח מלאי או עלויות אחזקה.',
      },
      {
        title: 'תיעוד מעבדה ו-COA',
        body: 'תעודות ניתוח ברמת אצווה ותיעוד מעבדה תומך משוחררים עם הסמכה מסחרית.',
      },
    ],
    ctaLabel: 'פתיחת פניית רכש',
    mailtoSubject: 'Pellexa Agri-Food — Procurement Inquiry',
    fallbackNote:
      'אם תוכנת הדואר לא נפתחת, העתיקו את הכתובת ושלחו את הפנייה ישירות.',
    qualificationNote:
      'תיעוד מעבדה ו-COA מונפקים לאחר הסמכה מסחרית. פניות מועברות אל agri-food.sales@pellexa.com.',
  },
  operatingModel: {
    sectionLabel: 'מודל התפעול',
    title: 'כיצד Pellexa מבצעת אספקת מזון וחקלאות',
    subtitle:
      'תהליך B2B קבוע מהפנייה הראשונה ועד מכולות בחוזה — FCL בלבד, מאומת על ידי צד שלישי, ומשוקף מסחרית בין הלקוח למפעל.',
    stages: [
      {
        label: '01',
        title: 'רצפת נפח FCL',
        body: 'כל התקשרות פועלת בהיקפי מכולה מלאה ומעלה — מכולות ימיות 20 ו-40 רגל. איננו מציעים LCL, כמויות מתחת למכולה או כניסה ב-MOQ נמוך.',
      },
      {
        label: '02',
        title: 'צינור אימות מדורג',
        body: 'מפרטים טכניים ותעודות, לאחר מכן דגימות פיזיות, לאחר מכן אצווה ניסיונית, ולבסוף ייצור המוני. כל שער חייב לעבור לפני שחרור השלב הבא.',
      },
      {
        label: '03',
        title: 'מסגרת משפטית ומסחרית',
        body: 'תחילה NCNDA, ולאחר מכן חוזי גב-אל-גב עם תנאי תשלום משוקפים בין הלקוח למפעל — בדרך כלל 70/30, או 100% מקדמה כאשר המפעל דורש זאת.',
      },
      {
        label: '04',
        title: 'בקרת איכות וביטוח צד-שלישי',
        body: 'שתי בדיקות עצמאיות סטנדרטיות: לפני הייצור ולפני המשלוח בשלב האריזה. המטען מבוטח בפוליסת ALL RISK דרך חברת ביטוח צד-שלישי.',
      },
      {
        label: '05',
        title: 'שילוח ימי מנוהל — בסיס CIF',
        body: 'הובלה ימית במכולות מלאות (FCL) המנותבות לנמלי היעד — לרבות נמלי ארה"ב, אירופה וישראל (בסיס CIF) — לצד סנכרון תיק מסמכי היבוא מול עמילי מכס מקומיים מורשים. פלקסה מתאמת שרשרת זו; איננו חברת השילוח, עמיל המכס או היבואן הרשמי.',
      },
    ],
  },
  disclaimer: {
    title: 'גבולות הפעילות',
    body: 'Pellexa היא שותפה לרכש, בקרת איכות וניהול שרשרת אספקה. איננו משלח בינלאומי, עמיל מכס או היבואן הרשמי.',
    points: [
      'הייבוא מתבצע תחת רישיון הייבוא שלכם, או דרך שותף ייבוא מקומי כאשר אינכם היבואן הרשמי.',
      'משלוחים ימיים מתואמים בתנאי CIF או DDP בהתאם למבנה רישיון הייבוא ולשותפי הייבוא המקומיים; השילוח מתבצע דרך משלחים בינלאומיים מוכרים או המשלח של הספק.',
      'שחרור מהמכס מבוצע על ידי עמיל מכס מורשה — לעולם לא על ידי Pellexa.',
      'בקרת האיכות מתבצעת בשטח על ידי צד שלישי עצמאי — שתי בדיקות סטנדרטיות, בתחילת הייצור ובשלב האריזה.',
      'המטען מבוטח בפוליסת ALL RISK דרך חברת ביטוח צד-שלישי.',
      'כל הקטגוריות פועלות אך ורק בהיקפי מכולה מלאה (FCL) ומעלה — מכולות 20 / 40 רגל בלבד.',
    ],
  },
}

export const parentHe: ParentContent = {
  meta: { title: 'Pellexa International LLC — רכש B2B גלובלי וניהול שרשרת אספקה' },
  nav: {
    links: [
      { label: 'פתרונות', href: '#solutions' },
      { label: 'אודות', href: '#about' },
      { label: 'צור קשר', href: '#contact' },
    ],
    cta: 'צור קשר',
  },
  hero: {
    badge: 'שותף אסטרטגי לרכש B2B ושרשרת אספקה',
    headlineTop: 'הגשר שלך אל',
    headlineHighlight: 'רכש ושרשראות אספקה',
    headlineBottom: 'ברמה עולמית',
    subtitle:
      'Pellexa מתמחה ברכש B2B, בקרת איכות צד-שלישי וניהול שרשראות אספקה בינלאומיות. אנחנו מחברים יצרנים גלובליים מאומתים עם השוק שלכם ומוזילים את עלויות הרכש והייבוא בתהליך מובנה ומחושב.',
    cta1: 'הפתרונות שלנו',
    cta2: 'צור קשר',
  },
  solutions: {
    sectionLabel: 'הוורטיקלים שלנו',
    title: 'תיק פתרונות',
    subtitle:
      'כל ורטיקל מגובה בשותפי ייצור Tier-1 ייעודיים, תהליך אימות מובנה ובקרת איכות צד-שלישי.',
    ledTitle: 'Pellexa LED',
    ledDescription:
      'פתרונות תצוגת LED בהתאמה אישית — פנים, חוץ, השכרה ואירועים — בייצור מדויק של שותף הנדסי, עם מינימום הזמנה דינמי לפי פרויקט. Pellexa אינה מבצעת התקנות: לפי בקשה נוכל להפנות לקבלני התקנה מקומיים מאומתים, וההתקשרות, הביצוע והאחריות להתקנה הם ישירות בין הלקוח לקבלן.',
    foodTitle: 'Pellexa Agri-Food',
    foodDescription:
      'רכש מזון וחקלאות בתפזורת — מאצ׳ה, תה תעשייתי, קקאו, קוקוס, שמני זרעים, אורז, פסטה, שימורים ומזון יבש — ישירות ממפעלים מורשים, בהיקפי מכולה מלאה (FCL) ומעלה.',
    generalTitle: 'Pellexa General Sourcing',
    generalDescription:
      'רכש תעשייתי וצרכני ממפעלי שותפים מאומתים באסיה — ציוד כבד ומכונות, חומרי בניין ובנייה, מארזי אקריל ו-TCG בהתאמה אישית, ואריזות מותג יוקרה. מינימום בהיקף מכולה מלאה (FCL) לקווים תעשייתיים סטנדרטיים; MOQ דינמי לפי פרויקט לקווי ייצור מותאם/ייעודי (כגון מארזי אקריל בהתאמה אישית ואריזות מותג יוקרה). צרו קשר עם צוות הרכש להגדרת ההזמנה.',
    generalCategories: [
      'ציוד כבד ומכונות',
      'חומרי בניין ובנייה',
      'מארזי אקריל ו-TCG בהתאמה אישית',
      'אריזות מותג יוקרה',
    ],
    generalOriginLabel: 'מרכזי ייצור באסיה',
    generalMOQBadge: 'מינימום FCL — MOQ דינמי לקווים ייעודיים',
    generalTargetLabel: 'חשבונות ארגוניים ויוקרתיים',
    learnMore: 'למידע נוסף',
    newVertical: 'ורטיקל חדש',
    comingSoon: 'בקרוב',
  },
  about: {
    sectionLabel: 'היתרון של Pellexa',
    titleMain: 'הגשר האסטרטגי בין',
    titleFaded: 'מפעלים גלובליים מאומתים לשוק שלך',
    subtitle:
      'חברת פלקסה אינטרנשיונל מתאמת תוכניות רכש מוסדיות (B2B), ומחברת שרשראות אספקה ישירות מרצפת הייצור אל נמלי יעד מרכזיים בצפון אמריקה, אירופה, ישראל ושווקים בינלאומיים. אנחנו לא משלח בינלאומי, עמיל מכס או היבואן הרשמי — אנחנו בונים, מאמתים ומתאמים כל עסקה במסגרת הסכמי NCNDA וחוזי גב-אל-גב.',
    // U+00A0 keeps the Latin parenthetical unbreakable. If a line break lands
    // inside it, bidi mirroring inverts the brackets and the line renders as
    // "Managing)" / "(Member" — reproduced at 360-412px, the most common
    // phone widths. Do not replace with a plain space.
    leadership: 'הנהלה ראשית: פלה בינו — מייסד ומנהל כללי (Managing\u00A0Member)',
    pillars: [
      {
        title: 'ספקים מאומתים ומסגרת חוזית',
        description:
          'מפעלים מורשים ומוסמכים עם חשיפת ספק מלאה — מוגנים בהסכמי NCNDA, חוזי גב-אל-גב ותנאי תשלום מובנים (70/30 או 100% מראש).',
      },
      {
        title: 'תיאום שרשרת אספקה ולוגיסטיקה',
        description:
          'תיאום לוגיסטי המבוצע תחת רישיון הייבוא שלכם או דרך שותפי ייבוא מקומיים — כולל אפשרות ל-Blind Shipping ללקוחות מוסדיים.',
      },
      {
        title: 'בקרת איכות צד-שלישי וביטוח ALL RISK',
        description:
          'בקרת איכות עצמאית בשטח (שתי בדיקות סטנדרטיות: בתחילת הייצור ובסיומו באריזה) לצד ביטוח מטען ALL RISK מקיף דרך מבטח צד-שלישי.',
      },
      {
        title: 'תהליך אימות מדורג',
        description:
          'אישור מפרטים טכניים ותעודות, דגימות פיזיות, אצוות פיילוט בעת הצורך — ומעבר לייצור המוני רק לאחר אישור מלא.',
      },
    ],
  },
  contact: {
    title: 'מוכנים להתחיל פרויקט?',
    subtitle:
      'בין אם מסכי LED, רכש מזון, או כל פנייה אחרת — שלחו מייל ישירות ונחזור אליכם באופן אישי.',
    email: 'pelle@pellexa.com',
    cta1: 'שלחו לנו מייל',
  },
  scopeDisclaimer: {
    title: 'גבולות הפעילות',
    body: 'Pellexa היא שותפה לרכש, בקרת איכות וניהול שרשרת אספקה. איננו משלח בינלאומי, עמיל מכס או היבואן הרשמי.',
    points: [
      'הייבוא מתבצע תחת רישיון הייבוא שלכם, או דרך שותף ייבוא מקומי כאשר אינכם היבואן הרשמי.',
      'משלוחים ימיים מתואמים בתנאי CIF או DDP בהתאם למבנה רישיון הייבוא ולשותפי הייבוא המקומיים; השילוח מתבצע דרך משלחים בינלאומיים מוכרים או המשלח של הספק.',
      'שחרור מהמכס מבוצע על ידי עמיל מכס מורשה — לעולם לא על ידי Pellexa.',
      'בקרת האיכות מתבצעת בשטח על ידי צד שלישי עצמאי — שתי בדיקות סטנדרטיות, בתחילת הייצור ובשלב האריזה.',
      'המטען מבוטח בפוליסת ALL RISK דרך חברת ביטוח צד-שלישי.',
      'מינימום בהיקף מכולה מלאה (FCL) חל על קווים תעשייתיים סטנדרטיים; קווי ייצור מותאם/ייעודי (כגון מארזי אקריל בהתאמה אישית ואריזות מותג יוקרה) פועלים ב-MOQ דינמי לפי פרויקט, המאושר בשלב הייעוץ.',
    ],
  },
  footer: {
    tagline: 'הצומת האסטרטגי בין ייצור ברמה עולמית לשרשראות אספקה B2B מובנות ומאומתות.',
    copyright: '© {year} Pellexa International LLC. כל הזכויות שמורות.',
    privacy: 'פרטיות',
    terms: 'תנאי שימוש',
  },
  cocoa: parentHeCocoa,
  food: parentHeFood,
}
