import type { ParentContent } from './types'

// ─────────────────────────────────────────────────────────────────────────────
// Cacao Derivatives Portfolio — Hebrew registry.
//
// Sourced from `docs/cocoa_knowlage.md` (Sections 1, 2, 3, 5). The registry
// shape is identical to `parent-en.ts`, so `tsc` enforces field-level parity.
//
// LOCALIZATION DEPTH — deliberate, not partial. Section chrome, headings, pill
// chips, column labels, CTAs, and every operational claim are Hebrew. Grade
// labels, batch-chemistry markers, analytical bounds, and the application
// matrix rows stay English: those are the recognized international trade and
// lab terminology a procurement desk cross-references against the supplier's
// own COA and technical data sheet, and translating them would break that
// lookup. The long-form `overviews[].overview` prose stays English for the
// same reason — it is dense process chemistry, not marketing copy.
//
// EXCEPTION — every operational claim IS translated and must stay that way:
// logistics, MOQ thresholds, certifications, and the customs/import boundary
// are compliance-bearing copy. They are written to match
// `docs/Pellexa Profile&Operating Model.MD` §§1/3: FCL-and-above only, and
// Pellexa is never the freight forwarder, customs broker, or importer of record.
// ─────────────────────────────────────────────────────────────────────────────

const parentHeCocoa: ParentContent['cocoa'] = {
  meta: {
    title: 'Pellexa נגזרות קקאו — רכש ממקור יחיד מהפיליפינים',
    description:
      'תיק נגזרות קקאו ממקור יחיד בפיליפינים — דרגות אבקה, חמאה וליקר עם פרמטרים אנליטיים מאומתים, תאימות HACCP, GMP ו-US-FDA, ולוגיסטיקה ימית בתנאי CIF בהיקפי מכולה מלאה בלבד.',
  },
  shell: {
    eyebrow: 'תיק נגזרות קקאו',
    headlineLead: 'סוגי נכסי',
    headlineHighlight: 'קקאו ממקור יחיד',
    headlineTail: 'לפורמולציה תעשייתית',
    subtitle:
      'שלושה עמודי תווך טכניים — אבקה, חמאה וליקר — רשומים כמקטים נפרדים לפי דרגה ומנותבים דרך שער תאימות ולוגיסטיקה מאוחד.',
    applicationsEyebrow: 'מקטע 03 · מטריצת יישומים',
    trustEyebrow: 'מקטע 04 · תשתית אמון',
    logisticsEyebrow: 'מקטע 05 · סמכות לוגיסטית',
    procurementGateLabel: 'שער רכש',
    specPackCta: 'הפקת חבילת מפרטים',
    familyLabels: {
      powder: 'אבקת קקאו',
      butter: 'חמאת קקאו',
      liquor: 'ליקר קקאו',
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
      title: 'סקירת תיק אבקת הקקאו',
      overview:
        'Pellexa’s cocoa powder portfolio represents the intersection of agricultural purity and modern industrial functionality. Sourced directly from premier growing regions and processing hubs in the Philippines, our powders are processed under rigid mechanical parameters to yield uniform particle sizes and impeccable color profiles. Available in both rich, unadulterated Natural structures and expertly balanced Alkalized variants, we supply fat content compositions ranging from high-efficiency industrial baselines (10/12%) through premium mid-ranges (22/24%) up to an elite 30% ultra-high fat culinary grade. Because subtle shifts in pH, granulometry, and oil retention dictate the success of your final product run, we customize exact batch chemistry and performance parameters during direct technical consultations.',
      cta: 'בקשת דף נתונים טכני וקביעת סקירת פורמולציה',
    },
    {
      id: 'butter',
      title: 'סקירת תיק חמאת הקקאו',
      overview:
        'Engineered for superior crystalline stability, Pellexa’s premium cocoa butter provides the exact polymorphic behaviors required by high-end confectionery and cosmetic manufacturing lines. Extracted cleanly through specialized physical expression, our deodorized and natural butter grades showcase immaculate moisture control and clean melting points. Formatted as efficient, easy-to-scale processing coins, this ingredient ensures reliable tempering properties, optimal snap, low free fatty acids, and uniform glossy finishes. Exact melting profiles, iodine values, and acid value thresholds are calibrated to match specific geographic shipping environments and factory processing conditions upon request.',
      cta: 'בירור על הקצאת מכולות',
    },
    {
      id: 'liquor',
      title: 'סקירת תיק ליקר ומסת הקקאו',
      overview:
        "The pure essence of single-origin flavor, Pellexa's Cocoa Liquor (Mass) is composed entirely of finely milled, perfectly fermented cacao beans. Free from artificial emulsifiers, additives, binders, or flavor enhancers, this zero-sugar liquor naturally retains its full, decadent cocoa butter ratio. Available in versatile, high-surface-area coin shapes optimized for automated industrial melting, our liquor options preserve deep, authentic origin terroir. Detailed flavor wheel matrices, microbiological data sheets, particle size distributions (fineness), and custom grinding parameters are engineered exclusively through individual client formulation briefs.",
      cta: 'קביעת ייעוץ רכש מוסדי',
    },
  ],
  applications: {
    title: 'מטריצת יישומים תעשייתיים ומסחריים בעלי ערך גבוה',
    intro:
      'המטריצה ממפה את יכולות האספקה של Pellexa אל יישומים תעשייתיים בהיקף מסחרי והצעות ערך מוגדרות, עבור מחלקות מחקר ופיתוח, מנהלי פיתוח מוצר וצוותי חדשנות בתעשיית המזון והמשקאות. שורות המטריצה נשמרות באנגלית כמונחי סחר בינלאומיים מוכרים:',
    columns: {
      derivative: 'דרגת נגזרת / סיווג',
      application: 'יעד יישום בעל ערך גבוה',
      valueProposition: 'הצעת הערך הארגונית',
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
    title: 'תשתית אמון: בקרת איכות והסמכות ארגוניות',
    intro:
      'Pellexa ממסגרת פרמטרים גולמיים מדפי הנתונים הטכניים למדדי תאימות ארגוניים, המציגים מוכנות רגולטורית מתועדת ותגי אמון מוסדיים לאורך כל תיק הפעילות. ערכי הבקרה עצמם נשמרים באנגלית כפי שהם מופיעים בתעודות המעבדה:',
    analyticalTitle: 'אמות מידה לבקרת איכות ופרמטרים אנליטיים',
    analyticalGroups: [
      {
        title: 'בדיקות כימיות ופיזיקליות',
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
        title: 'בקרת מתכות כבדות וכימיה',
        summary:
          'ניטור קפדני של סמני קרקע וולקניים וגיאוגרפיים מבטיח שכל הנגזרות נשארות בתוך אמות המידה הרגולטוריות הבינלאומיות המחמירות למתכות כבדות.',
        metrics: [
          'Cadmium — Maximum 0.6 – 0.8 mg/kg',
          'Lead — Maximum 0.1 mg/kg',
        ],
      },
      {
        title: 'סינון מיקרוביולוגי',
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
    certificationsTitle: 'אמון מוסדי ותגי גישה לשווקים גלובליים',
    certifications: [
      {
        title: 'תקני בטיחות מזון גלובליים',
        description:
          'שותפי הייצור שלנו פועלים תחת מערכות ניהול בטיחות מזון בהסמכה בינלאומית, בתאימות מלאה לפרוטוקולי \u2066HACCP\u00A0(Hazard\u00A0Analysis\u00A0Critical\u00A0Control\u00A0Point)\u2069 ו-\u2060\u2066GMP\u00A0(Good\u00A0Manufacturing\u00A0Practices)\u2069.',
      },
      {
        title: 'גישה לשווקים גלובליים',
        description:
          'שותפי הייצור רשומים ב-US-FDA וברשויות הבריאות המקומיות, ותיעוד רגולטורי לכל משלוח נבדק ומאומת לפני היציאה מהמפעל. שחרור מהמכס והגשת הצהרות הייבוא מבוצעים על ידי עמיל המכס שלכם תחת רישיון הייבוא שלכם, או דרך שותף ייבוא מקומי — Pellexa אינה היבואן הרשמי.',
      },
      {
        title: 'הכללה תזונתית, תרבותית ואתית',
        description:
          'הסמכת \u2066Halal\u2069 בת-אימות ואימות \u2066Non-GMO\u2069 מקיף, המאשרים מקורות ייצור נקיים בתווית שקופה, לצד מסלולים ייעודיים להוספת הסמכות כשרות ספציפיות לשוק בהתאם לדרישות הקמעונאות באזורכם.',
      },
    ],
    checklistLabel: 'סמנו את הפרמטרים הנדרשים לשער הרכש שלכם',
    checklistHelp:
      'הבחירות מנותבות לדסק המפרטים שלנו יחד עם פרטי הקשר שלכם, כך שחבילת המפרטים שתופק תתאים לצינור האימות שלכם אחד לאחד.',
  },
  logistics: {
    title: 'רציפות אספקה ותיאום לוגיסטי',
    paragraphs: [
      'Pellexa בונה את שרשרת האספקה דרך רשת שותפים מקומית כדי לבודד את הרכש שלכם מתנודתיות בשוק האזורי. הפעילות מתבצעת אך ורק בהיקפי מכולה מלאה (FCL) ומעלה — מודלים ימיים של 20 ו-40 רגל — בניתוב לנמלי ים מרכזיים ובכללם נמל אשדוד, ישראל. איננו מציעים משלוחי LCL, כמויות מתחת למכולה מלאה או מינימומים נמוכים; היקף מכולה מלאה הוא סף הכניסה לכל קו קקאו. מינימומים מדויקים לכל דרגה, חלוקת הקצאות ולוחות זמנים לחוזים עתידיים נסגרים מול דסק הרכש שלנו בשלב ההסמכה המסחרית.',
      'משלוחים ימיים מתואמים בתנאי CIF או DDP, בהתאם למבנה רישיון הייבוא שלכם ולשותפי הייבוא המקומיים, ומבוצעים על ידי משלחים בינלאומיים מוכרים יחד עם מחלקת הייצוא של הספק. Pellexa מתאמת ומאמתת את השרשרת הזו, אך אינה משלח בינלאומי, עמיל מכס או היבואן הרשמי; כאשר נעשה שימוש ב-DDP, הייבוא מבוצע על ידי שותף ייבוא מקומי מורשה. הצהרות הייצוא במקור והבדיקות הפיטוסניטריות טרם המשלוח מבוצעות על ידי מפעל הייצוא והמשלח מטעמו; ביטוח מטען ALL RISK נרכש דרך חברת ביטוח צד-שלישי. עם יציבות מדף סטנדרטית של 24 חודשים באריזה סגורה בקווי האבקה והליקר, אנו מסייעים למחלקת הרכש שלכם לבנות חוזים עתידיים שנועלים כמות מול זינוקי מחיר בשוק הספוט.',
    ],
  },
  masterCTA: {
    sectionLabel: 'פניית רכש מוסדית',
    headline: 'תכננו את סבב הייצור הייעודי שלכם ומטבו את שרשרת האספקה',
    paragraphs: [
      'ברכש רכיבים גלובלי, תצורות מדף כמעט אינן עונות על הדרישות המחמירות של קו מוצרים מוביל בשוק. ב-\u2060Pellexa איננו מבצעים הזמנות סחורה מקטלוג — אנו בונים צינורות אספקת חומרי גלם ייעודיים בדרגת מפרט מוסדי ומיישרים את מדדי הייצור ברמת המפעל אל יעדי הפורמולציה המדויקים שלכם. בין אם המותג שלכם נדרש למפרטים ייחודיים בעקומות המסת שומן, בעצמות צבע מדויקות, ביחסי שומן-לחות, בעומק אלקליזציה, באיזון \u2066pH\u2069 או בתכנון לוגיסטי של חוזים עתידיים מקומיים — הצוות שלנו מותאם להנדסת הסבב שלכם.',
      'כל התקשרות מתבצעת בהיקפי מכולה מלאה (FCL) ומעלה. סף זה קבוע, והוא בדיוק מה שמאפשר תמחור ברמת המפעל וסבבי ייצור ייעודיים. בתוך המסגרת הזו, חלוקת ההקצאה בין הדרגות, לוחות אספקה מדורגים וחוזים עתידיים מרובי-מכולות נבנים סביב קצב הייצור שלכם. לבניית תוכנית המכולות שלכם — קבעו שיחת ייעוץ ראשונית.',
      'אל תשאירו את כימיית המוצר או את רציפות האספקה שלכם ליד המקרה. פנו לחטיבת הרכש של Pellexa כדי לרשום את הדרישות הטכניות שלכם, לעבור על דפי מפרטים מלאים, לתאם הערכת דגימות מקומית ולתכנן תשתית מכולות ניתנת להרחבה, מהונדסת ישירות עבור המותג שלכם.',
    ],
    cta: 'קביעת ייעוץ רכש מוסדי',
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
  meta: {
    title: 'Pellexa מזון וחקלאות — תיק רכש מזון B2B בתפזורת',
    description:
      'רכש B2B בתפזורת במאצ׳ה, תה תעשייתי, נגזרות קקאו, קוקוס, שמני זרעים, אורז, פסטה, שימורים ומזון יבש כללי. ישירות ממפעלים מורשים בהיקפי מכולה מלאה (FCL) ומעלה, עם בקרת איכות צד-שלישי ושילוח ימי בתנאי CIF או DDP.',
  },
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

// ─────────────────────────────────────────────────────────────────────────────
// רכש כללי — `/sourcing`, ורכש אקריל — `/acrylic`. רישום עברי.
//
// BIDI PROTECTION — the \u escapes below are load-bearing. Do not "clean them
// up" into plain characters. Four rules are applied:
//
//   R1  \u00A0 (NBSP) binds multi-token Latin phrases and Latin parentheticals
//       so a line break cannot land inside one. Same failure mode already
//       documented on `about.leadership` further down this file: when a break
//       lands inside a Latin parenthetical, bidi mirroring inverts the brackets
//       and the line renders as "Managing)" / "(Member". Reproduced at
//       360-412px, the most common phone widths.
//
//   R2  \u2060 (WORD JOINER) follows the maqaf-style ASCII hyphen that joins a
//       Hebrew prefix to a Latin acronym ("ו-PMMA", "ב-FCL"). Without it the
//       acronym can start a new line detached from its connector, leaving an
//       orphaned hyphen at the end of the previous line. The ASCII hyphen is
//       kept rather than U+2011 to match the already-shipped "ב-DDP" /
//       "ל-MOQ" / "ב-US-FDA" strings in this file.
//
//   R3  \u2066 / \u2069 (LRI / PDI) isolate a Latin or numeric run that abuts
//       bidi-neutral punctuation which can mirror — parentheses, slash, ±, %,
//       ×. Without the isolate the neutral resolves against the paragraph
//       direction and lands on the wrong side of the run.
//
//   R5  `scripts/ssr-check.mjs` asserts these exact strings, so a stripped
//       escape fails the route sweep instead of shipping silently.
//
// Compliance-bearing copy (MOQ thresholds, CIF baseline, the customs/import
// boundary) is fully translated and must stay that way — it matches
// `docs/Pellexa Profile&Operating Model.MD` §§1/3: Pellexa is never the freight
// forwarder, customs broker, or importer of record.
// ─────────────────────────────────────────────────────────────────────────────

const parentHeSourcing: ParentContent['sourcing'] = {
  meta: {
    title: 'Pellexa General Sourcing — שותפי ייצור מבוקרים באסיה',
    description:
      'רכש תעשייתי ומוסדי משותפי ייצור מבוקרים באסיה — ציוד כבד ומכונות, חומרי בניין ובנייה, אקריל מדויק ו-\u2060PMMA מהונדס, ואריזות מותג יוקרה. מינימום בהיקף מכולה מלאה (\u2066FCL\u2069) לקווים תעשייתיים סטנדרטיים; \u2066MOQ\u2069 דינמי לפי פרויקט לקווי ייצור ייעודיים.',
  },
  email: 'tech.sales@pellexa.com',
  hero: {
    eyebrow: 'שותפי ייצור מבוקרים באסיה',
    headlineTop: 'רכש',
    headlineHighlight: 'כללי',
    sub: 'רכש \u2066B2B\u2069 משותפי ייצור מבוקרים בדרג ראשון וממפעלים ייעודיים במרכזי הייצור המרכזיים באסיה. אנחנו בונים, מאמתים ומתאמים — איננו מייצרים בעצמנו.',
    // Reproduced verbatim from `solutions.generalMOQBadge` so the homepage card
    // and the /sourcing hero badge cannot drift apart.
    moqBadge: 'מינימום FCL — MOQ דינמי לקווים ייעודיים',
  },
  pillars: {
    sectionLabel: 'ארבעת עמודי הרכש',
    title: 'ארבעה ורטיקלים מוסדיים, מודל תפעול אחד',
    subtitle:
      'כל עמוד תווך מגובה במפעלי שותפים מבוקרים, בצינור אימות מדורג ובבקרת איכות צד-שלישי. העמודים התעשייתיים פועלים בהיקפי מכולה מלאה; קווי הייצור הייעודיים פועלים ב-\u2060MOQ דינמי לפי פרויקט.',
    items: {
      'heavy-equipment': {
        title: 'ציוד כבד ומכונות',
        tag: 'תעשייתי / היקף \u2066FCL\u2069',
        description:
          'רכש ישיר מהמפעל של מכונות תעשייתיות, ציוד כבד וקווי ייצור — מול המפרט הטכני, הסביבה הרגולטורית ומחזור התפעול שלכם. מפרטים ותעודות נבדקים לפני כל התחייבות מסחרית.',
        chips: ['ישירות מהמפעל', 'מפרט טכני מאומת', 'חוזי גב-אל-גב'],
        cta: 'בקשת הצעת מחיר ישירה מהמפעל',
      },
      'construction-materials': {
        title: 'חומרי בניין ובנייה',
        tag: 'תעשייתי / היקף \u2066FCL\u2069',
        description:
          'חומרי בניין וחומרי גלם ממפעלים מורשים בהיקפי מכולה מלאה — מול תקני שוק היעד, אישורי החומר ולוחות הזמנים של הפרויקט שלכם. תעודות החומר מאומתות בחבילת התיעוד, ולא מונחות כמובן מאליו.',
        chips: ['היקף מכולה מלאה', 'תעודות חומר', 'בקרת איכות צד-שלישי'],
        cta: 'בקשת הצעת מחיר ישירה מהמפעל',
      },
      'precision-acrylic': {
        title: 'אקריל מדויק ו-\u2060PMMA מהונדס',
        tag: 'ייעודי / \u2066MOQ\u2069 דינמי',
        description:
          'מארזים והרכבות \u2066PMMA\u2069 מהונדסים לשימור ארכיוני, מסגרות הגנה למוזיאונים וגלריות, חלונות תצוגה למותגי יוקרה ומארזי אספנות מדויקים. מיוצרים במפעלי שותפים ייעודיים ומאומתים בדגימות מדורגות ובבקרת איכות כפולה של צד שלישי.',
        chips: [
          'שקיפות אופטית גבוהה',
          'חיתוך \u2066CNC\u2069 / לייזר',
          '\u2066MOQ\u2069 דינמי לפי פרויקט',
        ],
        cta: 'מפרטי ייצור טכניים',
        link: '/acrylic',
      },
      'luxury-packaging': {
        title: 'אריזות מותג יוקרה',
        tag: 'ייעודי / \u2066MOQ\u2069 דינמי',
        description:
          'אריזות מותג וארכיטקטורת מתנות ברמת יוקרה, במפרט שנבנה סביב המוצר עצמו — גימור, מבנה וחומרי גלם — בייצור אצל שותפים ייעודיים ולא כפריט מדף קטלוגי.',
        chips: ['מפרט לפי המותג', 'גימור פרימיום', 'דגימות מדורגות'],
        cta: 'בקשת הצעת מחיר ישירה מהמפעל',
      },
    },
  },
  contact: {
    title: 'פניית רכש מוסדית',
    body: 'שלחו פרופיל כמויות, שוק יעד והעדפת קטגוריה. קווים תעשייתיים סטנדרטיים פועלים במינימום בהיקף מכולה מלאה; ייצור ייעודי מוגדר ב-\u2060MOQ דינמי לפי פרויקט. חשבונות מאושרים מקבלים תיק מסחרי מותאם-דרג בתוך שני ימי עסקים.',
    ctaLabel: 'בקשת תיק רכש',
    // ASCII in every locale — matches `food.contact.mailtoSubject`. Hebrew in a
    // mailto subject depends on the client's RFC 2047 handling.
    mailtoSubject: 'Pellexa General Sourcing — Procurement Inquiry',
  },
}

const parentHeAcrylic: ParentContent['acrylic'] = {
  meta: {
    title: 'Pellexa Acrylic Sourcing — ייצור אצל שותפים ובקרת איכות',
    description:
      'אקריל מדויק ו-\u2060PMMA מהונדס משותפי ייצור מבוקרים — שימור ארכיוני בשקיפות גבוהה, מסגרות הגנה למוזיאונים וגלריות, חלונות תצוגה למותגי יוקרה ומארזי אספנות מדויקים. \u2066MOQ\u2069 דינמי לפי פרויקט כקו ייצור ייעודי; מינימום \u2066FCL\u2069 לקווים תעשייתיים סטנדרטיים. דגימות מדורגות, בקרת איכות כפולה של צד שלישי וחוזי גב-אל-גב.',
  },
  email: 'pelle@pellexa.com',
  hero: {
    eyebrow: 'רכש משותפי ייצור מבוקרים',
    headlineTop: 'אקריל מדויק',
    headlineHighlight: 'ו-\u2060PMMA מהונדס',
    sub: 'אנחנו מבצעים רכש של מארזי \u2066PMMA\u2069 מהונדסים לשימור ארכיוני, למוזיאונים וגלריות, למותגי יוקרה ולאספנות בעלת ערך גבוה — ממפעלי שותפים ייעודיים ומבוקרים. כל גיאומטריה וכל פורמט מתומחרים מול יכולת השותף. Pellexa בונה את המפרט, את צינור האימות ואת בקרת האיכות — איננו מחזיקים מפעלי ייצור בבעלותנו.',
    moqBadge: 'מינימום FCL — MOQ דינמי לקווים ייעודיים',
  },
  surfaces: {
    sectionLabel: 'מנעד היכולות',
    title: 'אקריל בייצור שותפים, מתומחר לפי מפרט',
    items: {
      'archival-preservation': {
        tag: 'שימור ארכיוני ואספנות',
        title: 'מארזים ארכיוניים בשקיפות גבוהה',
        description:
          'מארזים מהונדסים לשימור נכסים בעלי ערך גבוה — בתי הגנה ארכיוניים עם סינון \u2066UV\u2069, מארזים לפריטי אספנות מדורגים ולקלפי סחר (\u2066TCG\u2069), ושמירה על נאמנות אופטית לטווח ארוך. מיוצרים לפי שרטוטי הלקוח ומתומחרים מול יכולת השותף, ולא מול קטלוג קבוע.',
        highlights: ['סינון \u2066UV\u2069', 'דרגה ארכיונית', 'נאמנות אופטית'],
      },
      'museum-gallery': {
        tag: 'מוזיאונים וגלריות',
        title: 'מסגרות הגנה למוזיאונים וגלריות',
        description:
          'מסגרות הגנה בשקיפות גבוהה עבור מוזיאונים, גלריות פרטיות, רשתות אספנים ואולמות תצוגה של מותגים — הדורשים עמידות לפריצה, נאמנות אופטית וגיאומטריה בהתאמה אישית, לרבות ויטרינות, מארזי כן ובתי הגנה לפריטים. אפשרויות סינון \u2066UV\u2069, אנטי-סטטי ועמידות לפריצה בהתאם ליכולת השותף.',
        highlights: ['עמידות לפריצה', 'אנטי-סטטי', 'מפרט שימור'],
      },
      'luxury-retail': {
        tag: 'קמעונאות ומותגי יוקרה',
        title: 'חלונות תצוגה למותגי יוקרה',
        description:
          'מתקני תצוגה קמעונאיים ברמת פרימיום, במפרט שנבנה סביב הסחורה עצמה — תכשיטים, שעונים, בישום, מתקני אירוח ורגעי חנות דגל — בייצור אצל שותפים ולא כארון מדף.',
        highlights: ['ליטוש יהלום', 'שילוב תאורת \u2066LED\u2069', 'מודולרי'],
      },
      'engineered-pmma': {
        tag: 'ארכיטקטורה ותעשייה',
        title: 'רכיבי \u2066PMMA\u2069 מהונדסים במדויק',
        description:
          'מתקנים ארכיטקטוניים בפורמט גדול, חלוקת חללים בהתאמה אישית, מצעי שילוט, תשתיות מעבדה ומחסן ורכיבי אקריל תעשייתיים — מהונדסים במפעלי השותפים מול דינמיקת העומסים, הסביבה הרגולטורית ומחזור התפעול שלכם.',
        highlights: ['פורמט גדול', 'מהונדס לעומסים', 'חיתוך \u2066CNC\u2069 / לייזר'],
      },
    },
  },
  specs: {
    sectionLabel: 'בסיסי יכולת הנדסית',
    title: 'פרמטרי השותף — מאושרים בשלב הייעוץ',
    rows: {
      thickness: {
        label: 'עובי חומר',
        value:
          'משתנה — במפרט לפי דינמיקת העומסים (כולל \u206630\u2069 מ"מ ומעלה / רב-שכבתי, במפעלי שותפים שתומכים בכך)',
      },
      format: {
        label: 'פורמט לוח',
        value: 'חיתוך \u2066CNC\u2069 / לייזר למידות בהתאמה אישית במפעל השותף',
      },
      clarity: {
        label: 'שקיפות אופטית',
        value:
          'עד \u206692%\u2069 העברת אור (\u2066PMMA\u2069 בתולי בדרגת פרימיום; הדרגה מאומתת לכל אצווה)',
      },
      tolerance: {
        label: 'סבילות',
        value:
          'עד \u2066±0.1\u2069 מ"מ במקומות שבהם תהליך השותף מאפשר זאת — מאומת מול השרטוטים',
      },
      finishes: {
        label: 'גימורים',
        value:
          'ליטוש יהלום, מט-מוקצף, גוון בהתאמה אישית, גב מראה — בכפוף ליכולת השותף',
      },
      leadTime: {
        label: 'זמן אספקה',
        value:
          'נגזר מתיק הפרויקט ומעומס השותף — מסלולי דחיפות רק אם המפעל יכול להתחייב',
      },
      moq: {
        label: 'דרגות \u2066MOQ\u2069',
        value:
          '\u2066MOQ\u2069 דינמי לפי פרויקט (קו ייצור ייעודי/מותאם). קווים תעשייתיים סטנדרטיים נשארים בהיקף מכולה מלאה.',
      },
      compliance: {
        label: 'תאימות רגולטורית',
        value:
          '\u2066REACH\u00A0/\u00A0RoHS\u00A0/\u00A0FDA\u2069 ומסלולים ייעודיים לפי מגזר, במפעלי שותפים המחזיקים בהסמכה בתוקף — מאומת בחבילת התיעוד, ולא מונח כמובן מאליו',
      },
    },
    footnote:
      'כל פרמטר לעיל הוא בסיס יכולת של מפעל שותף, ולא מפרט של מפעל בבעלות Pellexa. החומר, העובי, הגימור, המעטפת, היקף הסבב וזמן האספקה מאושרים בשלב הייעוץ מול המפעל הנבחר, וננעלים באמצעות שרטוטים, דגימות ובקרת איכות כפולה של צד שלישי.',
  },
  intake: {
    title: 'ייעוץ לפרויקט אקריל',
    subtitle:
      'פתחו את תיק הייעוץ בתוכנת הדואר שלכם — אנחנו ממפים את היעדים הפיזיים, המידתיים והאסתטיים שלכם למסלול ייצור אצל שותף.',
    benefits: [
      'תיק ייעוץ ממולא מראש: ארגון, משטח יכולת ופרופיל הפרויקט',
      'מענה מדסק הרכש בתוך שלושה ימי עסקים',
      'מסלול ייצור אצל שותף בהיקף הפרויקט שלכם — ללא הנחת מק"ט קטלוגי',
    ],
    ctaLabel: 'פתיחת תיק הייעוץ',
    secondaryLabel: 'שליחת מייל ישירה',
    mailtoSubject: 'Pellexa Acrylic — Project Consultation Brief',
    brief: {
      heading: 'PELLEXA ACRYLIC — תיק ייעוץ לפרויקט',
      orgTitle: '1. ארגון',
      orgFields: ['חברה', 'תעשייה / מגזר', 'שוק יעד'],
      // Labels below are deliberately terse. Each Hebrew letter costs six
      // characters once percent-encoded, so this brief is what decides whether
      // the /acrylic mailto URL clears the mail-client limit. Measured total
      // after this trim: 1,794 characters. Lengthening a label here spends
      // roughly 6 characters per letter against ~250 of remaining headroom —
      // check with the mailto probe before expanding any of them.
      surfaceTitle: '2. משטח יכולת (סמנו)',
      surfaceOptions: [
        'שימור ארכיוני',
        'מוזיאונים וגלריות',
        'תצוגת יוקרה',
        'רכיבי \u2066PMMA\u2069',
        'אחר',
      ],
      profileTitle: '3. פרופיל הפרויקט',
      profileFields: [
        'מידות (רוחב × גובה × עומק)',
        'עובי חומר ועומסים',
        'גימור ואסתטיקה',
        'היקף סבב',
        'זמן אספקה',
        'אילוצים רגולטוריים',
      ],
      contactTitle: '4. יצירת קשר',
      contactFields: ['שם', 'דוא"ל', 'טלפון'],
      signoff: 'נשלח דרך Pellexa Acrylic.',
    },
  },
}

const parentHeSourcingProcess: ParentContent['sourcingProcess'] = {
  sectionLabel: 'מודל התפעול',
  title: 'כיצד Pellexa מבצעת ייצור אצל שותפים',
  stages: [
    {
      label: '01',
      title: 'שרטוטים ומפרטים טכניים',
      body: 'שרטוטי מפעל השותף, מפרטי חומר ותעודות מוגשים לאישור הלקוח לפני כל הקמת תבנית.',
    },
    {
      label: '02',
      title: 'דגימות אב-טיפוס',
      body: 'דגימות פיזיות מיוצרות במפעל השותף ונשלחות להערכה.',
    },
    {
      label: '03',
      title: 'אצווה ניסיונית',
      body: 'כאשר תיק הפרויקט מחייב זאת, סבב ניסיוני מוגבל לפני שחרור הייצור ההמוני.',
    },
    {
      label: '04',
      title: 'ייצור המוני, בקרת איכות וביטוח',
      body: 'סבב מלא רק לאחר אישור, תחת חוזי גב-אל-גב (בדרך כלל \u206670/30\u2069, או \u2066100%\u2069 מקדמה כאשר המפעל דורש זאת). בקרת איכות כפולה בשטח על ידי צד שלישי (לפני הייצור ובשלב האריזה/לפני המשלוח). המטען מבוטח בפוליסת ALL RISK דרך מבטח צד-שלישי.',
    },
    {
      // Reproduced from `food.operatingModel.stages[4].body` so the non-IOR
      // boundary reads identically on /food, /sourcing, and /acrylic. The only
      // change is "פלקסה" -> "Pellexa", matching every sibling string.
      label: '05',
      title: 'שילוח מנוהל — בסיס CIF',
      body: 'הובלה ימית במכולות מלאות (\u2066FCL\u2069) המנותבות לנמלי היעד — לרבות נמלי ארה"ב, אירופה וישראל (בסיס \u2066CIF\u2069) — לצד סנכרון תיק מסמכי היבוא מול עמילי מכס מקומיים מורשים. Pellexa מתאמת שרשרת זו; איננו חברת השילוח, עמיל המכס או היבואן הרשמי.',
    },
  ],
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
      'רכש תעשייתי ומוסדי ממפעלי שותפים מאומתים באסיה — ציוד כבד ומכונות, חומרי בניין ובנייה, אקריל מדויק ו-\u2060PMMA מהונדס, ואריזות מותג יוקרה. מינימום בהיקף מכולה מלאה (FCL) לקווים תעשייתיים סטנדרטיים; MOQ דינמי לפי פרויקט לקווי ייצור מותאם/ייעודי (כגון אקריל מדויק ו-\u2060PMMA מהונדס ואריזות מותג יוקרה). צרו קשר עם צוות הרכש להגדרת ההזמנה.',
    generalCategories: [
      'ציוד כבד ומכונות',
      'חומרי בניין ובנייה',
      'אקריל מדויק ו-\u2060PMMA מהונדס',
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
    leadership: 'הנהלה ראשית: פלא בינו — מייסד ומנהל כללי (Managing\u00A0Member)',
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
      'מינימום בהיקף מכולה מלאה (FCL) חל על קווים תעשייתיים סטנדרטיים; קווי ייצור מותאם/ייעודי (כגון אקריל מדויק ו-\u2060PMMA מהונדס ואריזות מותג יוקרה) פועלים ב-MOQ דינמי לפי פרויקט, המאושר בשלב הייעוץ.',
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
  sourcing: parentHeSourcing,
  acrylic: parentHeAcrylic,
  sourcingProcess: parentHeSourcingProcess,
  mailtoFallback: {
    copy: 'העתקת הכתובת',
    copied: 'הועתק',
    // Reproduced verbatim from `food.contact.fallbackNote`.
    fallbackNote: 'אם תוכנת הדואר לא נפתחת, העתיקו את הכתובת ושלחו את הפנייה ישירות.',
    copyBrief: 'העתקת התיק המלא',
    copiedBrief: 'התיק הועתק',
    oversizeNote:
      'התיק ארוך מדי למילוי אוטומטי אמין בכל תוכנות הדואר, ולכן הכפתור פותח הודעה ריקה עם שורת הנושא בלבד. השתמשו ב״העתקת התיק המלא״ והדביקו אותו בגוף ההודעה.',
  },
}
