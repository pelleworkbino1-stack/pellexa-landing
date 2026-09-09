import type { MarketConfig } from './types'
import { matcha } from './matcha'

/**
 * Pellexa Matcha Sourcing — Hebrew locale (`/food/matcha` with the navbar
 * toggle set to עב).
 *
 * WHY THIS SPREADS `matcha` INSTEAD OF RESTATING IT
 * `/food/matcha` renders through `MarketProvider`, not through the
 * `parent-en` / `parent-he` pair that every other route uses, so there is no
 * `tsc`-enforced key-by-key parity check between two sibling literals here.
 * Spreading the English config and overriding named fields gets that safety a
 * different way: a field can never go missing, and any new field added to
 * `matcha.ts` shows up in Hebrew as English rather than as `undefined`.
 *
 * `id` stays `'matcha'`. Several components branch on `market.id === 'matcha'`
 * to apply the 80/20 matcha/cocoa color hierarchy; changing it would silently
 * drop the brand treatment.
 *
 * LOCALIZATION DEPTH — matches the cacao registry so the two food routes read
 * consistently. Hebrew: navigation, headings, chips, CTAs, buyer-facing FAQ,
 * and every operational or compliance claim. English, deliberately:
 * certification marks (JAS, USDA NOP, EU Organic, HACCP, FDA) and measured
 * quantities (mesh, micron, container terms), because a procurement desk
 * cross-references those verbatim against the supplier's COA and audit file.
 *
 * BIDI — same rules as `parent-he.ts`: \u00A0 (NBSP) binds multi-token Latin
 * phrases so a line break cannot split one and mirror its brackets, and
 * \u2060 (WORD JOINER) holds a Latin acronym onto the Hebrew prefix hyphen
 * that introduces it ("ב-CIF"). These escapes are load-bearing; do not
 * "clean up" into plain characters.
 */
export const matchaHe: MarketConfig = {
  ...matcha,
  lang: 'he',
  dir: 'rtl',
  nameLocal: 'מאצ׳ה',
  locale: 'he-IL',

  meta: {
    title: 'Pellexa מאצ׳ה — סוכנות שרשרת אספקה גלובלית',
    description:
      'Pellexa היא סוכנות שרשרת אספקה גלובלית למאצ׳ה בדרגת פרימיום ובדרגה מסחרית. אנו מחברים רוכשים בהיקפים גדולים למפעלי ייצור מאומתים בעולם — אוכפים עמידה במפרט, משיגים תמחור ברמת המפעל ומנהלים את מלוא התיעוד הרגולטורי.',
    ogTitle: 'Pellexa מאצ׳ה — סוכנות שרשרת אספקה גלובלית',
    ogDescription:
      'רכש מאצ׳ה מבוסס מפרט עבור רשתות קפה, יצרני מזון ומותגים פרטיים. ריבוי מקורות, ללא מלאי ספוט, גישה ישירה למפעל.',
    twitterTitle: 'Pellexa מאצ׳ה — סוכנות שרשרת אספקה גלובלית',
    twitterDescription:
      'רכש מאצ׳ה אסטרטגי. מקורות מאומתים. אכיפת מפרט. יישור ישיר מול המפעל.',
  },

  nav: {
    links: [
      { label: 'דרגות', href: '#solutions' },
      { label: 'עמודי תווך', href: '#advantage' },
      { label: 'פרוטוקול', href: '#process' },
      { label: 'פנייה', href: '#contact' },
    ],
    cta: 'פניית רכש',
    backTitle: 'חזרה ל-\u2060Pellexa מזון וחקלאות',
  },

  hero: {
    ...matcha.hero,
    badge: 'סוכנות שרשרת אספקה גלובלית — מאצ׳ה',
    headlineTop: 'רכש מאצ׳ה',
    headlineHighlight: 'גלובלי',
    headlineBottom: 'רכש המונע ממפרט.',
    sub: 'Pellexa פועלת כשותפת הרכש האסטרטגית שלכם, ובונה צינורות אספקה מרובי-מקורות למאצ׳ה בדרגת פרימיום ובדרגה מסחרית. אנו מגשרים בין רוכשים אזוריים למפעלי ייצור מובילים בעולם — אוכפים מדדי איכות קפדניים, משיגים הנחות כמות מדורגות ברמת המפעל ומאמתים תיעוד תאימות המותאם לדרישות השוק שלכם.',
    cta1: 'בקשת ייעוץ רכש',
    cta2: 'סקירת דרגות האספקה',
    stats: [
      { value: 'סוכנות', label: 'יישור ישיר מול המפעל' },
      { value: 'מותאם', label: 'התאמת מפרט לכל לקוח' },
      { value: 'COA', label: 'תיעוד לכל אצווה' },
    ],
  },

  whyPellexa: {
    ...matcha.whyPellexa,
    sectionLabel: 'מסגרת רכש אסטרטגי',
    titleMain: 'אנחנו מחברים רוכשים למפעלים.',
    titleFaded: 'יישור ישיר מול המפעל.',
    subtitle:
      'Pellexa מסמיכה מפעלי ייצור גלובליים מול הפרמטרים הטכניים שלכם, ולאחר מכן בונה את מערכת האספקה — כך שאתם מקבלים תמחור ברמת המפעל, תאימות מאומתת ועקיבות אצווה, בלי להקים מערך רכש משלכם.',
    stats: [
      {
        value: 'JAS',
        label: 'התקן החקלאי היפני',
        description:
          'שותפי ייצור בדרגה \u2066Tier\u00A001\u2069 באזורי גידול המאצ׳ה המיועדים ביפן, מאומתים בהסמכת \u2066JAS\u2069 לפני תחילת ההתקשרות.',
      },
      {
        value: 'USDA NOP',
        label: 'תאימות אורגנית לארה״ב',
        description:
          'צינורות תיעוד הבנויים להפצה מול \u2066US-FDA\u2069 ולתאימות אורגנית בקמעונאות האמריקאית, מנוהלים כחלק מכל חוזה רכש.',
      },
      {
        value: 'EU Organic',
        label: 'יישור רגולטורי אירופי',
        description:
          'קבצי תאימות ברמת המפעל וברמת האצווה, מוכנים עבור רוכשים קמעונאיים ותעשייתיים הפועלים ברחבי האיחוד האירופי.',
      },
      {
        value: 'HACCP',
        label: 'מפעלי עיבוד בביקורת',
        description:
          'כל שותפי הייצור בדרגה המסחרית פועלים תחת פרוטוקולי \u2066HACCP\u2069 מבוקרים. הסמכת המפעל היא תנאי מחייב לפני הפעלת חוזה רכש.',
      },
      {
        value: 'Pre-Ship',
        label: 'דוחות ביקורת ספקים',
        description:
          'דוחות ביקורת טרם משלוח מאומתים מול קו הבסיס הטכני שאישרתם, לפני שהמוצר יוצא ממפעל המקור.',
      },
      {
        value: 'Multi-Origin',
        label: 'כיסוי אספקה עם יתירות',
        description:
          'מערכות ייצור פעילות ביפן ובמרכזי עיבוד חקלאי מובילים בעולם מספקות חוסן אספקה מול שיבוש במקור בודד.',
      },
    ],
  },

  advantage: {
    ...matcha.advantage,
    sectionLabel: 'עמודי התווך של הרכש האסטרטגי',
    titleMain: 'אנחנו לא מחזיקים מלאי.',
    titleFaded: 'אנחנו מהנדסים מערכות אספקה.',
    subtitle:
      'ארבעה עמודי תווך תפעוליים מגדירים כל התקשרות רכש מאצ׳ה של Pellexa.',
    features: [
      {
        title: 'הסמכת מפעלים ומתקני ייצור',
        description:
          'אנו מבקרים ומסמיכים שותפי ייצור מול הפרמטרים הטכניים המדויקים שלכם — עובי טחינה (mesh), דלתא צבע, יציבות תרמית והיקף ההסמכות — לפני שנחתם חוזה כלשהו.',
      },
      {
        title: 'צינור תיעוד תאימות',
        description:
          'אנו דורשים ומאמתים קבצי תאימות מלאים מהמפעל הנבחר: תעודות \u2066COA\u2069 הממפות גודל חלקיק, סינון מיקרוביאלי ולחות, בתוספת פאנלים ספציפיים לשוק — \u2066Heavy\u00A0Metals\u2069, \u2066Pesticide\u00A0Residues\u2069, \u2066JAS\u2069, \u2066USDA\u00A0NOP\u2069 ו-\u2060\u2066EU\u00A0Organic\u2069.',
      },
      {
        title: 'דגימות הערכה ללא מיתוג',
        description:
          'לקוחות מסחריים מוסמכים מקבלים דגימות הערכה ללא מיתוג לבקרת איכות פנימית, לטעימה עיוורת של השף הראשי ולאימות פורמולציה במחקר ופיתוח — לפני חתימת חוזים מסחריים.',
      },
      {
        title: 'ארכיטקטורת כמויות ותמחור מותאמת',
        description:
          'מכיוון שאנו מתקשרים ישירות עם מפעלי הייצור, מדרגות התמחור וספי הכמות נבנים בהתאמה לכל לקוח — מיושרים לקצב הייצור שלכם, להיקף ההסמכות ולשוק היעד.',
      },
    ],
  },

  solutions: {
    ...matcha.solutions,
    sectionLabel: 'דרגות אספקה',
    title: 'שלוש דרגות רכש. תקן אחד.',
    subtitle:
      'כל דרגה ממופה למקרה שימוש תעשייתי מובחן, להיקף הסמכות ולמפרט טחינה. Pellexa מיישרת את דרגת הייצור המתאימה להסמכת הלקוח ולדרישות הטכניות שלו.',
    items: [
      {
        ...matcha.solutions.items[0],
        tag: 'דרגה 01',
        title: 'פרימיום יפני אורגני מוסמך',
        description:
          'מיוצר באזורי גידול המאצ׳ה המיועדים ביפן. טחינת אבן מסורתית, אספקת קטיף ראשון בגודל חלקיק \u2066≤10–12\u00A0μm\u2069. מהונדס לשימוש טקסי, לפורמולציית משקאות ייחודיים ולקמעונאות מזון ומשקאות בדרגת פרימיום.',
        highlights: ['JAS', 'USDA NOP', 'EU Organic', 'טחינת אבן'],
        requestQuote: 'בקשת מסמך דרגה',
      },
      {
        ...matcha.solutions.items[1],
        tag: 'דרגה 02',
        title: 'מסחרי גלובלי אורגני מוסמך',
        description:
          'מיוצר במפעלי עיבוד חקלאי מובילים בעולם. טחינת אבן וגלילים תעשייתית עם פרופיל צבע יציב לפורמולציה. מתאים לרשתות קמעונאות בהסמכה אורגנית, ליצרני מזון ארוז ולתוכניות מותג פרטי.',
        highlights: ['USDA NOP', 'EU Organic', 'טחינת גלילים', 'צבע יציב'],
        requestQuote: 'בקשת מסמך דרגה',
      },
      {
        ...matcha.solutions.items[2],
        tag: 'דרגה 03',
        title: 'מסחרי לא-אורגני בעקביות גבוהה',
        description:
          'מיוצר במפעלי עיבוד תעשייתי מבוקרים מרובי-מקורות. טחינה מתוקננת ביציבות תרמית גבוהה — מהונדס לקווי אפייה בפורמט גדול, לגלידה ולייצור תערובות מוכנות.',
        highlights: ['Food-Grade', 'HACCP', 'FDA-Ready', 'יציבות תרמית'],
        requestQuote: 'בקשת מסמך דרגה',
      },
    ],
  },

  process: {
    ...matcha.process,
    sectionLabel: 'פרוטוקול הרכש',
    title: 'מפנייה ראשונית ועד אספקה בחוזה',
    subtitle:
      'פרוטוקול רכש בארבעה שלבים, ללא החזקת מלאי, המיועד לרוכשים עסקיים בהיקפים מסחריים.',
    steps: [
      {
        number: '01',
        title: 'הסמכת הלקוח ואפיון הדרישות',
        description:
          'פרופיל הכמויות, שוק היעד, היקף ההסמכות, הפרמטרים הטכניים (צבע, עובי טחינה, דרישות תרמיות) ומקרה השימוש במוצר הסופי נסקרים כדי לזהות את דרגת הייצור ואת המקור המתאימים.',
      },
      {
        number: '02',
        title: 'התאמת ספק ואימות דגימות',
        description:
          'אנו מתאימים את הדרישות שלכם לרשת הייצור המוסמכת שלנו. דגימות הערכה ללא מיתוג מונפקות ללקוחות מוסמכים לבקרת איכות פנימית, לטעימה עיוורת ולאימות פורמולציה במחקר ופיתוח.',
      },
      {
        number: '03',
        title: 'חתימת החוזה המסחרי',
        description:
          'תמחור מותאם, חלוקת אצוות, ניתוב לוגיסטי ודרישות תיעוד התאימות מקודדים להסכם אספקה חוזי עם מפעל הייצור הנבחר. אימות דגימות טכניות והערכות פיילוט נתמכים במשלוח אווירי מזורז, בעוד שהייצור המסחרי בחוזה מתרחב לניתוב מכולות ימי מתואם — הקצאות של 20 ו-40 רגל בתנאי \u2066CIF\u2069 או \u2066DDP\u2069.',
      },
      {
        number: '04',
        title: 'משלוח ואימות תאימות',
        description:
          'דוחות ביקורת טרם משלוח מאומתים מול קו הבסיס הטכני שאישרתם. תעודות \u2066COA\u2069 לכל אצווה ותיעוד תאימות מלא מאושרים לפני שהמוצר יוצא ממפעל המקור.',
      },
    ],
  },

  faq: {
    ...matcha.faq,
    sectionLabel: 'שאלות נפוצות',
    title: 'שאלות רכש',
    subtitle:
      'שאלות נפוצות ממנהלי רכש ומצוותי מוצר הבוחנים את Pellexa כשותפת הרכש האסטרטגית שלהם למאצ׳ה.',
    items: [
      {
        question: 'מהן כמויות ההזמנה המינימליות?',
        answer:
          'תוכניות רכש מאצ׳ה מסחריות נבנות סביב היקפי מכולה מלאה (\u2066FCL\u2069) בקנה מידה מוסדי, כדי להשיג תמחור ישיר מהמפעל. לוחות אצוות מותאמים והקצאות קטיף מכוילים לפורמולציות הספציפיות של הלקוח בשלב ההסמכה המסחרית.',
      },
      {
        question: 'האם אתם שולחים דגימות בגודל קמעונאי?',
        answer:
          'לא. כדי לשמור על שלמות שרשרת האספקה, אנו מפיצים דגימות הערכה ללא מיתוג בלבד, ורק ללקוחות מסחריים מוסמכים, לצורך בקרת איכות פנימית, טעימה עיוורת של השף הראשי ובדיקות פורמולציה במחקר ופיתוח. דגימות באריזה קמעונאית או צרכנית אינן זמינות.',
      },
      {
        question: 'איזה תיעוד מסופק עם חוזה האספקה?',
        answer:
          'כשותפת הרכש האסטרטגית שלכם, אנו דורשים ומאמתים קבצי תאימות מלאים ממפעל הייצור הנבחר לפני המשלוח. כל אצווה בחוזה קשורה לתעודת אנליזה (\u2066COA\u2069) הממפה גודל חלקיק, סינון מיקרוביאלי ולחות. פאנלים מיוחדים — \u2066Heavy\u00A0Metals\u2069, \u2066Pesticide\u00A0Residues\u2069 והסמכות אורגניות \u2066USDA\u2069 / \u2066JAS\u2069 — משולבים בצינור התיעוד בהתאם למסגרת הרגולטורית של שוק היעד שלכם.',
      },
      {
        question: 'האם אתם תומכים במותג פרטי או במיפוי מפרט מותאם?',
        answer:
          'כן. דרך רשת הייצור המאומתת שלנו, אנו מבצעים רכש ובנייה של פרמטרי פורמולציה מותאמים — כולל עובי טחינה ספציפי, מדדי יציבות תרמית ממוקדים לאפייה, ואריזה מסחרית בכמויות גדולות ללא מיתוג או במותג פרטי עבור רשתות מזון בפורמט גדול.',
      },
      {
        question: 'כיצד מנוטרת עקביות בין אצוות?',
        answer:
          'אנו אוכפים פרוטוקולי הסמכת ספקים קפדניים, ומתקשרים רק עם מפעלים המפעילים בקרות איכות מעבדתיות בקו הייצור. דוחות ביקורת טרם משלוח מאומתים מול קו הבסיס הטכני שאישרתם, כדי לאפס שונות בדלתא הצבע, בפרופיל הטעם ובמסיסות לפני שהמוצר יוצא מהמקור.',
      },
      {
        question: 'מהו לוח הזמנים האופייני מפנייה ועד הגעת המשלוח?',
        answer:
          'לוחות הזמנים נגזרים מהיקף ההקצאה ומהניתוב. הסמכה טכנית ואימות דגימות אורכים שבוע עד שבועיים, כאשר משלוח אווירי מזורז תומך באימות הדגימות ובהערכת הפיילוט בחלונות תנועה מקוצרים. לאחר מכן הייצור המסחרי בחוזה מתרחב לניתוב מכולות ימי מתואם — הקצאות של 20 ו-40 רגל בתנאי \u2066CIF\u2069 או \u2066DDP\u2069 — ופועל לפי מחזורי ייצור ותנועה סטנדרטיים הספציפיים למקור.',
      },
    ],
  },

  // Structural stub, same as the English config: MatchaPage renders
  // <FoodContact />, which reads its copy from `content.food` under
  // LangProvider. Only the populated fields are translated; the empty form
  // scaffold is inherited so the shape stays identical.
  contact: {
    ...matcha.contact,
    sectionLabel: 'פניית רכש מוסדית',
    title: 'הסמיכו את',
    titleHighlight: 'התקשרות הרכש שלכם',
    subtitle:
      'שלחו פרופיל רכש מסודר. לקוחות מוסמכים מיושרים לדרגת הייצור המתאימה ומקבלים מסמך מסחרי מותאם עם גישה לתוכנית הדגימות הטכניות.',
    benefits: [
      'צינורות אספקה מותאמים לפרמטרים הטכניים שלכם',
      'תמחור ישיר מהמפעל — בלי תוספת מלאי ובלי עלויות החזקה',
      'תיעוד תאימות מלא, מאומת לפני יציאת המשלוח',
      'דגימות הערכה ללא מיתוג ללקוחות מסחריים מוסמכים',
    ],
    emailCardLabel: 'קשר ישיר לדסק הרכש',
    copy: 'העתקה',
    copied: 'הועתק',
  },

  footer: {
    ...matcha.footer,
    tagline:
      'סוכנות שרשרת אספקה גלובלית לרכש מאצ׳ה — מונעת ממפרט, ללא מלאי ספוט, בגישה ישירה למפעל.',
    copyright: '© {year} Pellexa International LLC. כל הזכויות שמורות.',
    privacy: 'פרטיות',
    terms: 'תנאים',
  },
}
