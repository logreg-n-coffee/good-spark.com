import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { HeroShowcase, ProductScene } from "../../../components/ProductScenes";
import {
  getLocaleMeta,
  getMessages,
  getTonePacks,
  isLocale,
  type Locale,
} from "../../../home-i18n";
import styles from "./page.module.css";

const PROMO_LOCALES = [
  "en",
  "ja",
  "es",
  "pt-BR",
  "fr",
  "de",
  "ko",
  "zh-Hant",
  "ar",
  "hi",
  "id",
  "tr",
] as const satisfies readonly Locale[];

const PROMO_VARIANTS = ["overview", "live"] as const;

type PromoLocale = (typeof PROMO_LOCALES)[number];
type PromoVariant = (typeof PROMO_VARIANTS)[number];

interface PromoPageProps {
  params: Promise<{ locale: string; variant: string }>;
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Good Spark promo preview",
  robots: {
    index: false,
    follow: false,
  },
};

export function generateStaticParams() {
  return PROMO_LOCALES.flatMap((locale) =>
    PROMO_VARIANTS.map((variant) => ({ locale, variant })),
  );
}

function isPromoLocale(value: string): value is PromoLocale {
  return isLocale(value) && PROMO_LOCALES.includes(value as PromoLocale);
}

function isPromoVariant(value: string): value is PromoVariant {
  return PROMO_VARIANTS.includes(value as PromoVariant);
}

function getAffirmationMetric(locale: PromoLocale) {
  return locale === "ko" ? "개의 확언" : getMessages(locale)["metric.affirmations"];
}

function Brand({ locale }: { locale: PromoLocale }) {
  const messages = getMessages(locale);

  return (
    <div className={styles.brand}>
      <Image src="/web/icon-512.png" alt="" width={72} height={72} priority />
      <div>
        <strong>{messages["app.name"]}</strong>
        <span>good-spark.com</span>
      </div>
    </div>
  );
}

function OverviewCard({ locale }: { locale: PromoLocale }) {
  const messages = getMessages(locale);
  const tonePacks = getTonePacks(locale);
  const localeMeta = getLocaleMeta(locale);
  const affirmationMetric = getAffirmationMetric(locale);
  const ariaLabel = `${messages["app.name"]}. ${messages["hero.title"]} ${messages["hero.available"]}. 460 ${affirmationMetric}; 22 ${messages["metric.languages"]}.`;

  return (
    <main
      className={`${styles.canvas} ${styles.overview}`}
      data-promo-canvas
      data-locale={locale}
      lang={locale}
      dir={localeMeta.direction}
      aria-label={ariaLabel}
    >
      <div className={styles.overviewGlow} aria-hidden="true" />
      <div className={styles.overviewGrid}>
        <section className={styles.copy}>
          <Brand locale={locale} />
          <p className={styles.eyebrow}><span aria-hidden="true">✦</span>{messages["hero.available"]}</p>
          <h1 className={styles.headline}>{messages["hero.title"]}</h1>
          <p className={styles.tagline}>{messages["footer.tagline"]}</p>
          <div className={styles.proofRow}>
            <div><strong><bdi>460</bdi></strong><span>{affirmationMetric}</span></div>
            <div><strong><bdi>22</bdi></strong><span>{messages["metric.languages"]}</span></div>
            <div><strong>{messages["metric.no"]}</strong><span>{messages["metric.noAccount"]}</span></div>
          </div>
          <div className={styles.ctaRow}>
            <span className={styles.cta}>{messages["hero.download"]}<b aria-hidden="true">↗</b></span>
            <small>{messages["cta.requirements"]}</small>
          </div>
        </section>
        <section className={styles.overviewVisual} aria-label={messages["aria.preview"]}>
          <HeroShowcase messages={messages} tonePacks={tonePacks} />
        </section>
      </div>
    </main>
  );
}

function LiveCard({ locale }: { locale: PromoLocale }) {
  const messages = getMessages(locale);
  const tonePacks = getTonePacks(locale);
  const localeMeta = getLocaleMeta(locale);
  const ariaLabel = `${messages["app.name"]}. ${messages["live.title"]} ${messages["live.lock.title"]}. ${messages["live.island.title"]}.`;

  return (
    <main
      className={`${styles.canvas} ${styles.live}`}
      data-promo-canvas
      data-locale={locale}
      lang={locale}
      dir={localeMeta.direction}
      aria-label={ariaLabel}
    >
      <div className={styles.liveGlow} aria-hidden="true" />
      <div className={styles.sparkles} aria-hidden="true">✦ · ✧ · ✦ · ✧</div>
      <div className={styles.liveGrid}>
        <section className={styles.copy}>
          <Brand locale={locale} />
          <p className={styles.available}><span aria-hidden="true">✶</span>{messages["live.available"]}</p>
          <h1 className={styles.liveHeadline}>{messages["live.title"]}</h1>
          <p className={styles.liveBody}>{messages["live.body"]}</p>
          <div className={styles.privacyChips}>
            <span><b aria-hidden="true">✓</b>{messages["privacy.bullet.noAccount"]}</span>
            <span><b aria-hidden="true">✓</b>{messages["privacy.bullet.noData"]}</span>
          </div>
          <div className={styles.liveCta}>
            <span>{messages["hero.download"]}<b aria-hidden="true">↗</b></span>
            <small>good-spark.com</small>
          </div>
        </section>
        <section className={styles.liveVisual} aria-label={messages["aria.preview"]}>
          <div className={`${styles.liveScene} ${styles.lockScene}`}>
            <ProductScene kind="lock-screen" messages={messages} tonePacks={tonePacks} />
            <strong>{messages["live.lock.title"]}</strong>
          </div>
          <div className={`${styles.liveScene} ${styles.islandScene}`}>
            <ProductScene kind="dynamic-island" messages={messages} tonePacks={tonePacks} />
            <strong>{messages["live.island.title"]}</strong>
          </div>
        </section>
      </div>
    </main>
  );
}

export default async function PromoPage({ params }: PromoPageProps) {
  const { locale: localeValue, variant: variantValue } = await params;
  if (!isPromoLocale(localeValue) || !isPromoVariant(variantValue)) notFound();

  return variantValue === "overview"
    ? <OverviewCard locale={localeValue} />
    : <LiveCard locale={localeValue} />;
}
