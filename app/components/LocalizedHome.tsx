import {
  DEFAULT_APP_NAME,
  DEFAULT_LOCALE,
  getLocalePath,
  getMessages,
  type Locale,
} from "../home-i18n";
import { SITE_URL } from "../home-metadata";
import { HomePage } from "./HomePage";

interface LocalizedHomeProps {
  locale: Locale;
  detectPreferredLocale?: boolean;
}

export function LocalizedHome({
  locale,
  detectPreferredLocale = false,
}: LocalizedHomeProps) {
  const messages = getMessages(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: messages["app.name"],
    ...(locale === DEFAULT_LOCALE ? {} : { alternateName: DEFAULT_APP_NAME }),
    url: new URL(getLocalePath(locale), SITE_URL).toString(),
    inLanguage: locale,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS 17.0 or later, macOS 13.0 or later",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "0",
      highPrice: "29.99",
      priceCurrency: "USD",
      offerCount: 3,
    },
    description: `${messages["footer.tagline"]} ${messages["why.body"]}`,
    featureList: [
      messages["feature.near.title"],
      messages["feature.personal.title"],
      messages["feature.keep.title"],
      messages["live.title"],
      messages["privacy.title"],
    ],
    softwareVersion: "1.26.0",
    author: {
      "@type": "Organization",
      name: "Good Spark Team",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      ratingCount: "1",
    },
  };
  const serializedJsonLd = JSON.stringify(jsonLd).replaceAll("<", "\\u003c");

  return <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializedJsonLd }}
    />
    <HomePage key={locale} initialLocale={locale} detectPreferredLocale={detectPreferredLocale} />
  </>;
}
