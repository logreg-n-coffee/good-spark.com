import rawMessages from "./home-messages.json";
import rawTonePacks from "./tone-packs.json";

export const DEFAULT_APP_NAME = "Good Spark";

export const LOCALES = [
  { code: "en", name: "English", direction: "ltr", appName: "Good Spark", openGraphLocale: "en_US" },
  { code: "ja", name: "日本語", direction: "ltr", appName: "こころの灯り", openGraphLocale: "ja_JP" },
  { code: "es", name: "Español", direction: "ltr", appName: "Buena Chispa", openGraphLocale: "es_ES" },
  { code: "zh-Hans", name: "简体中文", direction: "ltr", appName: "点点微光", openGraphLocale: "zh_CN" },
  { code: "ko", name: "한국어", direction: "ltr", appName: "작은 빛", openGraphLocale: "ko_KR" },
  { code: "de", name: "Deutsch", direction: "ltr", appName: "Zuversicht", openGraphLocale: "de_DE" },
  { code: "fr", name: "Français", direction: "ltr", appName: "Petite Étincelle", openGraphLocale: "fr_FR" },
  { code: "pt-BR", name: "Português (Brasil)", direction: "ltr", appName: "Pequena Faísca", openGraphLocale: "pt_BR" },
  { code: "zh-Hant", name: "繁體中文", direction: "ltr", appName: "點點微光", openGraphLocale: "zh_TW" },
  { code: "it", name: "Italiano", direction: "ltr", appName: "Piccola Scintilla", openGraphLocale: "it_IT" },
  { code: "ru", name: "Русский", direction: "ltr", appName: "Твоя искра", openGraphLocale: "ru_RU" },
  { code: "ar", name: "العربية", direction: "rtl", appName: "شرارة أمل", openGraphLocale: "ar_SA" },
  { code: "hi", name: "हिन्दी", direction: "ltr", appName: "नई किरण", openGraphLocale: "hi_IN" },
  { code: "tr", name: "Türkçe", direction: "ltr", appName: "Umut Işığı", openGraphLocale: "tr_TR" },
  { code: "id", name: "Bahasa Indonesia", direction: "ltr", appName: "Cahaya Hati", openGraphLocale: "id_ID" },
  { code: "th", name: "ไทย", direction: "ltr", appName: "ประกายใจ", openGraphLocale: "th_TH" },
  { code: "vi", name: "Tiếng Việt", direction: "ltr", appName: "Chút Nắng", openGraphLocale: "vi_VN" },
  { code: "ms", name: "Bahasa Melayu", direction: "ltr", appName: "Sinar Harapan", openGraphLocale: "ms_MY" },
  { code: "nl", name: "Nederlands", direction: "ltr", appName: "Lichtpuntje", openGraphLocale: "nl_NL" },
  { code: "pl", name: "Polski", direction: "ltr", appName: "Ciepła Myśl", openGraphLocale: "pl_PL" },
  { code: "uk", name: "Українська", direction: "ltr", appName: "Тепла думка", openGraphLocale: "uk_UA" },
  { code: "sv", name: "Svenska", direction: "ltr", appName: "Ljusglimt", openGraphLocale: "sv_SE" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export type LocaleDirection = (typeof LOCALES)[number]["direction"];
type RawMessages = typeof rawMessages.en;
export type Messages = RawMessages & { "app.name": string };
export type MessageKey = keyof Messages;

const rawMessagesByLocale: Record<Locale, RawMessages> = rawMessages;
const tonePacks: Record<Locale, string[]> = rawTonePacks;
const localeByCode = new Map(LOCALES.map((locale) => [locale.code.toLowerCase(), locale]));

const brandMessageOverrides: Partial<Record<Locale, Partial<RawMessages>>> = {
  ja: {
    "aria.home": "こころの灯りのホーム",
  },
  es: {
    "why.body": "Buena Chispa está cerca sin exigir tu atención. Abre la app para hacer una pausa, mira el widget o mantén un mensaje amable visible con Live Spark.",
  },
  "zh-Hans": {
    "aria.home": "点点微光首页",
    "aria.preview": "iPhone 和 Mac 上的点点微光",
    "hero.download": "获取点点微光",
    "why.eyebrow": "01 · 为何选择点点微光",
    "why.body": "点点微光安静陪伴，不争夺你的注意力。需要重启心情时打开它，看看小组件，或用 Live Spark 让一句话持续可见。",
    "gallery.title": "认识点点微光。",
    "scene.welcome.title": "欢迎使用点点微光",
    "scene.settings.title": "点点微光设置",
  },
  ko: {
    "nav.why": "작은 빛을 쓰는 이유",
    "why.eyebrow": "01 · 작은 빛을 쓰는 이유",
    "why.body": "작은 빛은 주의를 빼앗지 않고 곁에 머뭅니다. 잠시 재정비하고 싶을 때 열거나, 위젯을 보거나, Live Spark로 한 문장을 계속 띄워 두세요.",
    "gallery.title": "작은 빛을 만나 보세요.",
  },
  de: {
    "aria.home": "Startseite der App „Zuversicht“",
    "aria.preview": "„Zuversicht“ auf iPhone und Mac",
    "nav.why": "Warum „Zuversicht“",
    "hero.download": "App „Zuversicht“ laden",
    "why.eyebrow": "01 · Warum „Zuversicht“",
    "why.body": "Die App „Zuversicht“ bleibt in der Nähe, ohne Aufmerksamkeit zu fordern. Öffne sie für einen Neustart, wirf einen Blick aufs Widget oder halte mit Live Spark einen Gedanken sichtbar.",
    "gallery.title": "Lerne „Zuversicht“ kennen.",
    "scene.welcome.title": "Willkommen bei „Zuversicht“",
    "scene.settings.title": "Einstellungen für „Zuversicht“",
  },
  "pt-BR": {
    "aria.home": "Início da Pequena Faísca",
    "gallery.title": "Conheça a Pequena Faísca.",
    "scene.welcome.title": "Boas-vindas à Pequena Faísca",
    "scene.settings.title": "Ajustes da Pequena Faísca",
  },
  "zh-Hant": {
    "aria.home": "點點微光首頁",
    "aria.preview": "iPhone 與 Mac 上的點點微光",
    "hero.download": "取得點點微光",
    "why.eyebrow": "01 · 為何選擇點點微光",
    "why.body": "點點微光安靜陪伴，不搶走你的注意力。需要轉換心情時打開它、看看小工具，或用 Live Spark 讓一句話持續可見。",
    "gallery.title": "認識點點微光。",
    "scene.welcome.title": "歡迎使用點點微光",
    "scene.settings.title": "點點微光設定",
  },
  it: {
    "why.body": "Piccola Scintilla resta vicino senza chiedere attenzione. Apri l’app per ripartire, guarda il widget o tieni un messaggio visibile con Live Spark.",
  },
  ru: {
    "aria.home": "Главная приложения «Твоя искра»",
    "aria.preview": "«Твоя искра» на iPhone и Mac",
    "nav.why": "Почему «Твоя искра»",
    "hero.download": "Загрузить приложение «Твоя искра»",
    "why.eyebrow": "01 · Почему «Твоя искра»",
    "why.body": "«Твоя искра» остаётся рядом, не требуя внимания. Откройте приложение, чтобы перевести дух, взгляните на виджет или оставьте одну мысль на виду с Live Spark.",
    "gallery.title": "Познакомьтесь с приложением «Твоя искра».",
    "scene.welcome.title": "Добро пожаловать в приложение «Твоя искра»",
    "scene.settings.title": "Настройки приложения «Твоя искра»",
  },
  ar: {
    "why.body": "تبقى شرارة أمل قريبة دون أن تطالب باهتمامك. افتح التطبيق لاستعادة هدوئك، أو ألقِ نظرة على الأداة، أو أبقِ رسالة لطيفة ظاهرة مع Live Spark.",
  },
  hi: {
    "why.body": "नई किरण आपका ध्यान माँगे बिना पास रहती है। रीसेट के लिए ऐप खोलें, विजेट पर नज़र डालें या Live Spark से एक प्यारा संदेश सामने रखें।",
  },
  th: {
    "aria.home": "หน้าแรกของประกายใจ",
    "aria.preview": "ประกายใจบน iPhone และ Mac",
    "nav.why": "ทำไมต้องประกายใจ",
    "hero.download": "รับประกายใจ",
    "why.eyebrow": "01 · ทำไมต้องประกายใจ",
    "why.body": "ประกายใจอยู่ใกล้โดยไม่เรียกร้องความสนใจ เปิดเมื่ออยากตั้งหลัก มองวิดเจ็ต หรือให้ข้อความดี ๆ แสดงอยู่ด้วย Live Spark",
    "gallery.title": "รู้จักประกายใจ",
    "scene.welcome.title": "ยินดีต้อนรับสู่ประกายใจ",
    "scene.settings.title": "การตั้งค่าประกายใจ",
  },
  tr: {
    "hero.download": "Umut Işığı’nı edin",
    "scene.welcome.title": "Umut Işığı’na Hoş Geldin",
  },
  pl: {
    "aria.home": "Strona główna aplikacji „Ciepła Myśl”",
    "aria.preview": "Aplikacja „Ciepła Myśl” na iPhonie i Macu",
    "nav.why": "Dlaczego „Ciepła Myśl”",
    "hero.download": "Pobierz aplikację „Ciepła Myśl”",
    "why.eyebrow": "01 · Dlaczego „Ciepła Myśl”",
    "why.body": "Aplikacja „Ciepła Myśl” pozostaje blisko, nie domagając się uwagi. Otwórz ją, spójrz na widżet lub zostaw jedną myśl na widoku dzięki Live Spark.",
    "gallery.title": "Poznaj aplikację „Ciepła Myśl”.",
    "scene.welcome.title": "Witaj w aplikacji „Ciepła Myśl”",
    "scene.settings.title": "Ustawienia aplikacji „Ciepła Myśl”",
  },
  uk: {
    "aria.home": "Головна застосунку «Тепла думка»",
    "aria.preview": "«Тепла думка» на iPhone і Mac",
    "nav.why": "Чому «Тепла думка»",
    "hero.download": "Завантажити застосунок «Тепла думка»",
    "why.eyebrow": "01 · Чому «Тепла думка»",
    "why.body": "Застосунок «Тепла думка» залишається поруч, не вимагаючи уваги. Відкрийте його, щоб перевести подих, погляньте на віджет або залиште одну думку видимою з Live Spark.",
    "gallery.title": "Познайомтеся із застосунком «Тепла думка».",
    "scene.welcome.title": "Ласкаво просимо до застосунку «Тепла думка»",
    "scene.settings.title": "Параметри застосунку «Тепла думка»",
  },
};

// Most translations treat the product name as an indeclinable proper noun.
// The targeted overrides above preserve particles, cases, articles, and
// gender where substituting a local-language name changes the sentence.
const messages = Object.fromEntries(LOCALES.map((locale) => {
  const localizedEntries = Object.entries(rawMessagesByLocale[locale.code]).map(([key, value]) => [
    key,
    value.replaceAll(DEFAULT_APP_NAME, locale.appName),
  ]);

  return [locale.code, {
    ...Object.fromEntries(localizedEntries),
    ...brandMessageOverrides[locale.code],
    "app.name": locale.appName,
  }];
})) as Record<Locale, Messages>;

export const DEFAULT_LOCALE: Locale = "en";
export const LANGUAGE_STORAGE_KEY = "good-spark-language";

export function isLocale(value: string): value is Locale {
  return LOCALES.some((locale) => locale.code === value);
}

function matchLocale(value: string | null | undefined): Locale | undefined {
  if (!value) return undefined;

  const normalized = value.trim().replaceAll("_", "-").toLowerCase();
  const exact = localeByCode.get(normalized);
  if (exact) return exact.code;

  if (normalized === "zh" || normalized.startsWith("zh-cn") || normalized.startsWith("zh-sg")) {
    return "zh-Hans";
  }

  if (normalized.startsWith("zh-tw") || normalized.startsWith("zh-hk") || normalized.startsWith("zh-mo")) {
    return "zh-Hant";
  }

  if (normalized === "pt" || normalized.startsWith("pt-")) return "pt-BR";

  const baseLanguage = normalized.split("-")[0];
  return localeByCode.get(baseLanguage)?.code;
}

export function resolveLocale(value: string | null | undefined): Locale {
  return matchLocale(value) ?? DEFAULT_LOCALE;
}

export function resolvePreferredLocale(values: readonly string[]): Locale {
  for (const value of values) {
    const locale = matchLocale(value);
    if (locale) return locale;
  }

  return DEFAULT_LOCALE;
}

export function getMessages(locale: Locale): Messages {
  return messages[locale] ?? messages[DEFAULT_LOCALE];
}

export function getAppName(locale: Locale): string {
  return getLocaleMeta(locale).appName;
}

export function getLocalePath(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? "/" : `/${locale}`;
}

export function getTonePacks(locale: Locale): readonly string[] {
  return tonePacks[locale] ?? tonePacks[DEFAULT_LOCALE];
}

export function getLocaleMeta(locale: Locale) {
  return localeByCode.get(locale.toLowerCase()) ?? LOCALES[0];
}
