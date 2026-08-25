import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const messages = JSON.parse(readFileSync(join(root, "app/home-messages.json"), "utf8"));
const tonePacks = JSON.parse(readFileSync(join(root, "app/tone-packs.json"), "utf8"));
const sceneSource = readFileSync(join(root, "app/components/ProductScenes.tsx"), "utf8");
const homeSource = readFileSync(join(root, "app/components/HomePage.tsx"), "utf8");
const defaultLayoutSource = readFileSync(join(root, "app/(default)/layout.tsx"), "utf8");
const localeLayoutSource = readFileSync(join(root, "app/[locale]/layout.tsx"), "utf8");
const siteShellSource = readFileSync(join(root, "app/site-shell.ts"), "utf8");
const localizedHomeSource = readFileSync(join(root, "app/components/LocalizedHome.tsx"), "utf8");
const i18nSource = readFileSync(join(root, "app/home-i18n.ts"), "utf8");
const localeRouteSource = readFileSync(join(root, "app/[locale]/page.tsx"), "utf8");
const metadataSource = readFileSync(join(root, "app/home-metadata.ts"), "utf8");
const sitemapSource = readFileSync(join(root, "app/sitemap.ts"), "utf8");

const canonicalLocales = [
  "en", "ja", "es", "zh-Hans", "ko", "de", "fr", "pt-BR", "zh-Hant", "it", "ru",
  "ar", "hi", "tr", "id", "th", "vi", "ms", "nl", "pl", "uk", "sv",
];

const sceneMessageKeys = [
  "gallery.popover", "gallery.welcome", "gallery.settings", "gallery.history",
  "live.available", "live.lock.title", "live.lock.body", "live.island.title", "live.island.body",
  "scene.greeting", "scene.affirmation.one", "scene.affirmation.two", "scene.affirmation.three",
  "scene.welcome.title", "scene.welcome.body", "scene.settings.title", "scene.yourPacks",
  "scene.morePacks", "scene.probability", "scene.notifications", "scene.launch",
  "scene.history.title", "scene.all", "scene.favorites", "scene.clear", "scene.next",
  "scene.live.active", "scene.live.end",
];

const sceneKinds = ["popover", "welcome", "settings", "history", "lock-screen", "dynamic-island"];
const releaseCopyKeys = ["live.available", "live.body", "live.lock.body", "live.island.body", "live.note"];
const availabilityMarkers = {
  en: /available/i,
  ja: /利用できます/,
  es: /disponible/i,
  "zh-Hans": /现已/,
  ko: /이용 가능/,
  de: /verfügbar/i,
  fr: /disponible/i,
  "pt-BR": /disponível/i,
  "zh-Hant": /現已/,
  it: /disponibile/i,
  ru: /доступ/i,
  ar: /متاح/,
  hi: /उपलब्ध/,
  tr: /kullanılabilir/i,
  id: /tersedia/i,
  th: /พร้อมใช้งาน/,
  vi: /hiện đã có/i,
  ms: /tersedia/i,
  nl: /beschikbaar/i,
  pl: /dostęp/i,
  uk: /доступ/i,
  sv: /tillgängligt/i,
};
const timerClaim = /00:28|30[ -]?(?:minute|minut|minutos|minuten|minutter|dakika|menit|phút)|30\s*(?:分|분|دقيقة|मिनट|นาที|хвилин)|time remaining/i;
const futureEnglishReleaseClaim = /\b(?:preview|upcoming|coming in|next iPhone update|once available|when available|will keep|will stay)\b|you[’']ll be able/i;

assert.deepEqual(Object.keys(messages), canonicalLocales, "message locales must match the canonical app/API order");
assert.deepEqual(Object.keys(tonePacks), canonicalLocales, "tone-pack locales must match the canonical app/API order");

const englishKeys = Object.keys(messages.en).sort();
for (const locale of canonicalLocales) {
  assert.deepEqual(Object.keys(messages[locale]).sort(), englishKeys, `${locale} must have complete message-key parity`);
  assert.equal(tonePacks[locale].length, 12, `${locale} must localize all 12 tone packs`);

  for (const [key, value] of Object.entries(messages[locale])) {
    assert.equal(typeof value, "string", `${locale}.${key} must be a string`);
    assert.ok(value.trim(), `${locale}.${key} must not be empty`);
  }

  let localizedSceneValues = 0;
  for (const key of sceneMessageKeys) {
    assert.ok(messages[locale][key]?.trim(), `${locale}.${key} is required by a product scene`);
    if (messages[locale][key] !== messages.en[key]) localizedSceneValues += 1;
  }

  if (locale !== "en") {
    assert.ok(localizedSceneValues >= 20, `${locale} must localize the product-scene copy rather than silently falling back to English`);
    assert.notEqual(messages[locale]["live.available"], messages.en["live.available"], `${locale}.live.available must be localized`);
  }

  assert.ok(!Object.hasOwn(messages[locale], "live.upcoming"), `${locale} must not retain the pre-release Live Spark key`);
  assert.match(messages[locale]["live.available"], availabilityMarkers[locale], `${locale}.live.available must state current availability`);
  assert.ok(!timerClaim.test(JSON.stringify(messages[locale])), `${locale} must not promise a Live Spark countdown`);
}

const englishReleaseCopy = releaseCopyKeys.map((key) => messages.en[key]).join(" ");
assert.match(messages.en["live.available"], /available now on iPhone/i, "the English Live Spark label must state current availability");
assert.ok(!futureEnglishReleaseClaim.test(englishReleaseCopy), "English Live Spark release copy must not retain preview or future-tense claims");
assert.ok(homeSource.includes('messages["live.available"]'), "HomePage must render the released Live Spark availability label");
assert.ok(!homeSource.includes('messages["live.upcoming"]'), "HomePage must not render the pre-release Live Spark label");
assert.match(localizedHomeSource, /softwareVersion: "1\.26\.0"/, "localized structured data must advertise the released app version");
assert.ok(!futureEnglishReleaseClaim.test(siteShellSource), "metadata must not retain preview or future-tense Live Spark claims");

const localizedAppNames = [...i18nSource.matchAll(/appName: "([^"]+)"/g)].map((match) => match[1]);
assert.equal(localizedAppNames.length, canonicalLocales.length, "every locale must define one app display name");
assert.equal(localizedAppNames[0], "Good Spark", "English must retain the canonical app name");
assert.ok(localizedAppNames.slice(1).every((name) => name !== "Good Spark"), "non-English locales must use localized display names");
assert.ok(localizedAppNames.every((name) => name.length <= 18), "display names must stay compact enough for product UI");
assert.ok(homeSource.includes('messages["app.name"]'), "homepage chrome must render the localized app name");
assert.ok(homeSource.includes('<p className="hero-product-name">{messages["app.name"]}</p>'), "homepage hero must visibly render the localized app name");
assert.ok(sceneSource.includes('messages["app.name"]'), "product scenes must render the localized app name");
assert.ok(!/>Good Spark</.test(homeSource), "homepage chrome must not hardcode the English display name");
assert.ok(!/>Good Spark</.test(sceneSource), "product scenes must not hardcode the English display name");

assert.ok(localeRouteSource.includes("generateStaticParams"), "localized homepage routes must be statically generated");
assert.ok(localeRouteSource.includes("generateMetadata"), "localized homepage routes must emit localized metadata");
assert.ok(defaultLayoutSource.includes('<html lang="en"'), "the canonical root layout must declare English in static HTML");
assert.ok(localeLayoutSource.includes('<html lang={locale} dir={localeMeta.direction}'), "localized root layouts must declare language and direction in static HTML");
assert.ok(metadataSource.includes("languageAlternates"), "localized metadata must publish language alternates");
assert.ok(metadataSource.includes("openGraphLocale"), "localized metadata must publish the matching Open Graph locale");
assert.ok(sitemapSource.includes("LOCALES.map"), "the sitemap must include every localized homepage");

for (const kind of sceneKinds) {
  assert.ok(sceneSource.includes(`"${kind}"`), `ProductScenes must render the ${kind} scene`);
}

assert.ok(!sceneSource.includes("/screenshots/"), "localized product scenes must not use English-baked screenshots");
assert.ok(!timerClaim.test(sceneSource), "product scenes must not render a Live Spark countdown");

console.log(`Validated ${canonicalLocales.length} locales, ${englishKeys.length} messages each, ${sceneKinds.length} localized product scenes, and release metadata for app 1.26.0.`);
