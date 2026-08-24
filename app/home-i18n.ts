import rawMessages from "./home-messages.json";
import rawTonePacks from "./tone-packs.json";

export const LOCALES = [
  { code: "en", name: "English", direction: "ltr" },
  { code: "ja", name: "日本語", direction: "ltr" },
  { code: "es", name: "Español", direction: "ltr" },
  { code: "zh-Hans", name: "简体中文", direction: "ltr" },
  { code: "ko", name: "한국어", direction: "ltr" },
  { code: "de", name: "Deutsch", direction: "ltr" },
  { code: "fr", name: "Français", direction: "ltr" },
  { code: "pt-BR", name: "Português (Brasil)", direction: "ltr" },
  { code: "zh-Hant", name: "繁體中文", direction: "ltr" },
  { code: "it", name: "Italiano", direction: "ltr" },
  { code: "ru", name: "Русский", direction: "ltr" },
  { code: "ar", name: "العربية", direction: "rtl" },
  { code: "hi", name: "हिन्दी", direction: "ltr" },
  { code: "tr", name: "Türkçe", direction: "ltr" },
  { code: "id", name: "Bahasa Indonesia", direction: "ltr" },
  { code: "th", name: "ไทย", direction: "ltr" },
  { code: "vi", name: "Tiếng Việt", direction: "ltr" },
  { code: "ms", name: "Bahasa Melayu", direction: "ltr" },
  { code: "nl", name: "Nederlands", direction: "ltr" },
  { code: "pl", name: "Polski", direction: "ltr" },
  { code: "uk", name: "Українська", direction: "ltr" },
  { code: "sv", name: "Svenska", direction: "ltr" },
] as const;

export type Locale = (typeof LOCALES)[number]["code"];
export type LocaleDirection = (typeof LOCALES)[number]["direction"];
export type Messages = typeof rawMessages.en;
export type MessageKey = keyof Messages;

const messages: Record<Locale, Messages> = rawMessages;
const tonePacks: Record<Locale, string[]> = rawTonePacks;
const localeByCode = new Map(LOCALES.map((locale) => [locale.code.toLowerCase(), locale]));

export const DEFAULT_LOCALE: Locale = "en";
export const LANGUAGE_STORAGE_KEY = "good-spark-language";

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

export function getTonePacks(locale: Locale): readonly string[] {
  return tonePacks[locale] ?? tonePacks[DEFAULT_LOCALE];
}

export function getLocaleMeta(locale: Locale) {
  return localeByCode.get(locale.toLowerCase()) ?? LOCALES[0];
}
