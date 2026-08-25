import type { MetadataRoute } from "next";
import { getLocalePath, LOCALES } from "./home-i18n";
import { SITE_URL } from "./home-metadata";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedHomePages = LOCALES.map((locale) => ({
    url: new URL(getLocalePath(locale.code), SITE_URL).toString(),
    changeFrequency: "monthly" as const,
    priority: locale.code === "en" ? 1 : 0.9,
  }));

  const supportingPages = ["privacy", "terms", "contact"].map((path) => ({
    url: new URL(`/${path}`, SITE_URL).toString(),
    changeFrequency: "yearly" as const,
    priority: 0.4,
  }));

  return [...localizedHomePages, ...supportingPages];
}
