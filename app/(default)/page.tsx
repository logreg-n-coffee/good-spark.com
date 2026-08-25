import { LocalizedHome } from "../components/LocalizedHome";
import { DEFAULT_LOCALE } from "../home-i18n";
import { getHomeMetadata } from "../home-metadata";

export const metadata = getHomeMetadata(DEFAULT_LOCALE);

export default function Home() {
  return <LocalizedHome locale={DEFAULT_LOCALE} detectPreferredLocale />;
}
