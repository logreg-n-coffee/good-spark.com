import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalizedHome } from "../components/LocalizedHome";
import { DEFAULT_LOCALE, isLocale, LOCALES, type Locale } from "../home-i18n";
import { getHomeMetadata } from "../home-metadata";

interface LocalePageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES
    .filter((locale) => locale.code !== DEFAULT_LOCALE)
    .map((locale) => ({ locale: locale.code }));
}

function getRouteLocale(value: string): Locale | undefined {
  return isLocale(value) && value !== DEFAULT_LOCALE ? value : undefined;
}

export async function generateMetadata({ params }: LocalePageProps): Promise<Metadata> {
  const { locale: value } = await params;
  const locale = getRouteLocale(value);
  return locale ? getHomeMetadata(locale) : {};
}

export default async function LocaleHome({ params }: LocalePageProps) {
  const { locale: value } = await params;
  const locale = getRouteLocale(value);
  if (!locale) notFound();

  return <LocalizedHome locale={locale} />;
}
