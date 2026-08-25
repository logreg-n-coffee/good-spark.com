"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  DEFAULT_LOCALE,
  getLocaleMeta,
  getLocalePath,
  getMessages,
  getTonePacks,
  LANGUAGE_STORAGE_KEY,
  LOCALES,
  resolveLocale,
  resolvePreferredLocale,
  type Locale,
} from "../home-i18n";
import { HeroShowcase, ProductScene, type ProductSceneKind } from "./ProductScenes";

const APP_STORE_URL = "https://apps.apple.com/app/good-spark-affirmations/id6758261166";
const PACK_EMOJI = ["✨", "💅", "🧘", "🧑‍💻", "💪", "💖", "🎯", "🌿", "😂", "🌸", "🎨", "🌙"] as const;
const FEATURE_ICONS = ["⌁", "✦", "♡", "↗"] as const;

const GALLERY_SCENES: ReadonlyArray<{ kind: ProductSceneKind; caption: "gallery.popover" | "gallery.welcome" | "gallery.settings" | "gallery.history" }> = [
  { kind: "popover", caption: "gallery.popover" },
  { kind: "welcome", caption: "gallery.welcome" },
  { kind: "settings", caption: "gallery.settings" },
  { kind: "history", caption: "gallery.history" },
];

interface HomePageProps {
  initialLocale?: Locale;
  detectPreferredLocale?: boolean;
}

export function HomePage({
  initialLocale = DEFAULT_LOCALE,
  detectPreferredLocale = false,
}: HomePageProps) {
  const router = useRouter();
  const [language, setLanguage] = useState<Locale>(initialLocale);
  const messages = getMessages(language);
  const tonePacks = getTonePacks(language);
  const localeMeta = getLocaleMeta(language);

  useEffect(() => {
    if (!detectPreferredLocale) return;

    const storedLocale = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    const preferred = storedLocale
      ? resolveLocale(storedLocale)
      : resolvePreferredLocale(navigator.languages.length ? navigator.languages : [navigator.language]);

    // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the persisted/browser locale after hydration
    setLanguage(preferred);
    if (preferred !== initialLocale) {
      router.replace(getLocalePath(preferred), { scroll: false });
    }
  }, [detectPreferredLocale, initialLocale, router]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = localeMeta.direction;
  }, [language, localeMeta.direction]);

  const chooseLanguage = (value: string) => {
    const locale = resolveLocale(value);
    setLanguage(locale);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    router.push(getLocalePath(locale), { scroll: false });
  };

  const metrics = [
    ["12", messages["metric.tonePacks"]],
    ["460", messages["metric.affirmations"]],
    ["22", messages["metric.languages"]],
    [messages["metric.no"], messages["metric.noAccount"]],
  ];

  const features = [
    [messages["feature.near.title"], messages["feature.near.body"]],
    [messages["feature.personal.title"], messages["feature.personal.body"]],
    [messages["feature.keep.title"], messages["feature.keep.body"]],
    [messages["feature.habit.title"], messages["feature.habit.body"]],
  ];

  const privacyPoints = [
    messages["privacy.bullet.noData"],
    messages["privacy.bullet.noAccount"],
    messages["privacy.bullet.onDevice"],
    messages["privacy.bullet.offline"],
  ];

  return <main lang={language} dir={localeMeta.direction}>
    <p className="sr-only" role="status" aria-live="polite">{messages["aria.language"]}: {localeMeta.name}</p>

    <header className="site-header">
      <a className="brand" href="#top" aria-label={messages["aria.home"]}><Image src="/web/icon-32.png" alt="" width={34} height={34} /><span>{messages["app.name"]}</span></a>
      <nav aria-label={messages["aria.nav"]}>
        <a href="#why">{messages["nav.why"]}</a>
        <a href="#inside">{messages["nav.inside"]}</a>
        <a href="#packs">{messages["nav.packs"]}</a>
        <a href="#live">{messages["nav.live"]}</a>
        <a href="#privacy">{messages["nav.privacy"]}</a>
      </nav>
      <label className="language-wrap">
        <span aria-hidden="true">文</span>
        <span className="sr-only">{messages["aria.language"]}</span>
        <select value={language} onChange={(event) => chooseLanguage(event.target.value)} aria-label={messages["aria.language"]}>
          {LOCALES.map((locale) => <option key={locale.code} value={locale.code} dir={locale.direction}>{locale.name}</option>)}
        </select>
      </label>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span>✦</span> {messages["hero.available"]}</p>
        <p className="hero-product-name">{messages["app.name"]}</p>
        <h1>{messages["hero.title"]}</h1>
        <p className="lede">{messages["footer.tagline"]}</p>
        <div className="hero-actions">
          <a className="button primary" href={APP_STORE_URL}>{messages["hero.download"]} <span>↗</span></a>
          <a className="button quiet" href="#inside">{messages["hero.explore"]} <span>↓</span></a>
        </div>
      </div>
      <HeroShowcase messages={messages} tonePacks={tonePacks} />
      <div className="proof-row">{metrics.map(([value, label]) => <div key={label}><strong>{value}</strong><small>{label}</small></div>)}</div>
    </section>

    <section className="section moments" id="why">
      <div className="section-heading"><p className="eyebrow">{messages["why.eyebrow"]}</p><h2>{messages["why.title"]}</h2><p>{messages["why.body"]}</p></div>
      <div className="feature-grid">{features.map(([title, body], index) => <article key={title}><span className="feature-number">0{index + 1}</span><div className={`feature-icon icon-${index}`}>{FEATURE_ICONS[index]}</div><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="section gallery" id="inside">
      <div className="section-heading split"><div><p className="eyebrow">{messages["gallery.eyebrow"]}</p><h2>{messages["gallery.title"]}</h2></div><p>{messages["gallery.body"]}</p></div>
      <div className="shot-grid">{GALLERY_SCENES.map(({ kind, caption }, index) => <figure key={kind}>
        <ProductScene kind={kind} messages={messages} tonePacks={tonePacks} />
        <figcaption><span>0{index + 1}</span>{messages[caption]}</figcaption>
      </figure>)}</div>
    </section>

    <section className="section packs" id="packs">
      <div className="section-heading"><p className="eyebrow">{messages["packs.eyebrow"]}</p><h2>{messages["packs.title"]}</h2><p>{messages["packs.body"]}</p></div>
      <div className="pack-loop">{tonePacks.map((name, index) => <div className={index > 3 ? "premium-pack" : ""} key={name}><span>{PACK_EMOJI[index]}</span><b>{name}</b>{index > 3 ? <small>{messages["packs.plus"]}</small> : null}</div>)}</div>
    </section>

    <section className="section live-section" id="live">
      <div className="section-heading split"><div><p className="eyebrow">{messages["live.eyebrow"]}</p><p className="live-available"><span aria-hidden="true">✶</span>{messages["live.available"]}</p><h2>{messages["live.title"]}</h2></div><p>{messages["live.body"]}</p></div>
      <div className="live-grid">
        <figure><ProductScene kind="lock-screen" messages={messages} tonePacks={tonePacks} /><figcaption><span>◉</span><div><h3>{messages["live.lock.title"]}</h3><p>{messages["live.lock.body"]}</p></div></figcaption></figure>
        <figure><ProductScene kind="dynamic-island" messages={messages} tonePacks={tonePacks} /><figcaption><span>◐</span><div><h3>{messages["live.island.title"]}</h3><p>{messages["live.island.body"]}</p></div></figcaption></figure>
      </div>
      <p className="live-note"><span aria-hidden="true">ⓘ</span> {messages["live.note"]}</p>
    </section>

    <section className="section privacy" id="privacy">
      <div className="privacy-mark">◎<span>✓</span></div>
      <div><p className="eyebrow">{messages["privacy.eyebrow"]}</p><h2>{messages["privacy.title"]}</h2><p>{messages["privacy.body"]}</p><Link href="/privacy">{messages["privacy.link"]} <span>→</span></Link></div>
      <div className="privacy-list">{privacyPoints.map((point) => <p key={point}><span>✓</span> {point}</p>)}</div>
    </section>

    <section className="final-cta"><Image src="/web/icon-512.png" alt={messages["app.name"]} width={104} height={104} /><h2>{messages["cta.title"]}</h2><p>{messages["cta.body"]}</p><a className="button light" href={APP_STORE_URL}>{messages["hero.download"]} <span>↗</span></a><small>{messages["cta.requirements"]}</small></section>
    <footer><div className="brand"><Image src="/web/icon-32.png" alt="" width={30} height={30} /><span>{messages["app.name"]}</span></div><p>{messages["footer.tagline"]}</p><div><Link href="/privacy">{messages["footer.privacy"]}</Link><Link href="/terms">{messages["footer.terms"]}</Link><Link href="/contact">{messages["footer.support"]}</Link></div><small>{messages["footer.copyright"]}</small></footer>
  </main>;
}
