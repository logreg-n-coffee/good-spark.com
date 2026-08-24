import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const messages = JSON.parse(readFileSync(join(root, "app/home-messages.json"), "utf8"));
const tonePacks = JSON.parse(readFileSync(join(root, "app/tone-packs.json"), "utf8"));
const sceneSource = readFileSync(join(root, "app/components/ProductScenes.tsx"), "utf8");

const canonicalLocales = [
  "en", "ja", "es", "zh-Hans", "ko", "de", "fr", "pt-BR", "zh-Hant", "it", "ru",
  "ar", "hi", "tr", "id", "th", "vi", "ms", "nl", "pl", "uk", "sv",
];

const sceneMessageKeys = [
  "gallery.popover", "gallery.welcome", "gallery.settings", "gallery.history",
  "live.upcoming", "live.lock.title", "live.lock.body", "live.island.title", "live.island.body",
  "scene.greeting", "scene.affirmation.one", "scene.affirmation.two", "scene.affirmation.three",
  "scene.welcome.title", "scene.welcome.body", "scene.settings.title", "scene.yourPacks",
  "scene.morePacks", "scene.probability", "scene.notifications", "scene.launch",
  "scene.history.title", "scene.all", "scene.favorites", "scene.clear", "scene.next",
  "scene.live.active", "scene.live.end",
];

const sceneKinds = ["popover", "welcome", "settings", "history", "lock-screen", "dynamic-island"];
const timerClaim = /00:28|30[ -]?(?:minute|minut|minutos|minuten|minutter|dakika|menit|phút)|30\s*(?:分|분|دقيقة|मिनट|นาที|хвилин)|time remaining/i;

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
    assert.notEqual(messages[locale]["live.upcoming"], messages.en["live.upcoming"], `${locale}.live.upcoming must be localized`);
  }

  assert.ok(!timerClaim.test(JSON.stringify(messages[locale])), `${locale} must not promise a Live Spark countdown`);
}

assert.match(messages.en["live.upcoming"], /next iPhone update/i, "the English Live Spark label must state that the feature is upcoming");

for (const kind of sceneKinds) {
  assert.ok(sceneSource.includes(`"${kind}"`), `ProductScenes must render the ${kind} scene`);
}

assert.ok(!sceneSource.includes("/screenshots/"), "localized product scenes must not use English-baked screenshots");
assert.ok(!timerClaim.test(sceneSource), "product scenes must not render a Live Spark countdown");

console.log(`Validated ${canonicalLocales.length} locales, ${englishKeys.length} messages each, and ${sceneKinds.length} localized product scenes.`);
