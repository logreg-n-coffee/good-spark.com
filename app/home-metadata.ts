import type { Metadata } from "next";
import {
  DEFAULT_LOCALE,
  getLocaleMeta,
  getLocalePath,
  getMessages,
  LOCALES,
  type Locale,
} from "./home-i18n";

export const SITE_URL = "https://good-spark.com";

export const languageAlternates = Object.fromEntries([
  ...LOCALES.map((locale) => [locale.code, getLocalePath(locale.code)]),
  ["x-default", getLocalePath(DEFAULT_LOCALE)],
]);

export function getHomeMetadata(locale: Locale): Metadata {
  const messages = getMessages(locale);
  const localeMeta = getLocaleMeta(locale);
  const path = getLocalePath(locale);
  const title = `${messages["app.name"]} — ${messages["hero.title"]}`;
  const description = `${messages["footer.tagline"]} ${messages["gallery.body"]}`;

  return {
    applicationName: messages["app.name"],
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      locale: localeMeta.openGraphLocale,
      alternateLocale: LOCALES
        .filter((candidate) => candidate.code !== locale)
        .map((candidate) => candidate.openGraphLocale),
      url: path,
      siteName: messages["app.name"],
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    appleWebApp: {
      capable: true,
      title: messages["app.name"],
    },
  };
}
