import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import process from "node:process";

const locales = [
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
];

const variants = ["overview", "live"];
const appNames = {
  en: "Good Spark",
  ja: "こころの灯り",
  es: "Buena Chispa",
  "pt-BR": "Pequena Faísca",
  fr: "Petite Étincelle",
  de: "Zuversicht",
  ko: "작은 빛",
  "zh-Hant": "點點微光",
  ar: "شرارة أمل",
  hi: "नई किरण",
  id: "Cahaya Hati",
  tr: "Umut Işığı",
};
const baseUrl = (process.env.PROMO_BASE_URL ?? "http://127.0.0.1:3000").replace(/\/$/, "");
const outputRoot = path.resolve(process.env.PROMO_OUTPUT_DIR ?? "public/promo/x");
const session = `good-spark-promo-${process.pid}`;
const agentBrowser = ["--yes", "agent-browser@0.35.0", "--session", session];
const selectedLocales = process.env.PROMO_LOCALES
  ? process.env.PROMO_LOCALES.split(",").filter((locale) => locales.includes(locale))
  : locales;
const selectedVariants = process.env.PROMO_VARIANTS
  ? process.env.PROMO_VARIANTS.split(",").filter((variant) => variants.includes(variant))
  : variants;

function runBrowser(args, { quiet = false } = {}) {
  const result = spawnSync("npx", [...agentBrowser, ...args], {
    cwd: process.cwd(),
    encoding: "utf8",
    stdio: quiet ? "pipe" : "inherit",
  });

  if (result.status !== 0) {
    if (quiet) {
      process.stderr.write(result.stdout ?? "");
      process.stderr.write(result.stderr ?? "");
    }
    throw new Error(`agent-browser failed: ${args.join(" ")}`);
  }

  return result.stdout?.trim();
}

async function assertServer() {
  const response = await fetch(`${baseUrl}/en/promo/overview`);
  if (!response.ok) {
    throw new Error(`Promo route returned ${response.status}: ${baseUrl}/en/promo/overview`);
  }
}

async function writeManifest() {
  const rawMessages = JSON.parse(await readFile(path.resolve("app/home-messages.json"), "utf8"));
  const assets = locales.map((locale) => {
    const messages = rawMessages[locale];
    const appName = appNames[locale];
    const affirmationMetric = locale === "ko" ? "개의 확언" : messages["metric.affirmations"];

    return {
      locale,
      appName,
      overview: {
        path: `/promo/x/${locale}/overview.png`,
        alt: `${appName}. ${messages["hero.title"]} ${messages["hero.available"]}. 460 ${affirmationMetric}; 22 ${messages["metric.languages"]}.`,
      },
      live: {
        path: `/promo/x/${locale}/live.png`,
        alt: `${appName}. ${messages["live.title"]} ${messages["live.lock.title"]}. ${messages["live.island.title"]}.`,
      },
    };
  });

  await writeFile(
    path.join(outputRoot, "manifest.json"),
    `${JSON.stringify({ width: 1600, height: 900, assets }, null, 2)}\n`,
  );
}

async function generateContactSheets() {
  const magickCheck = spawnSync("magick", ["-version"], { stdio: "ignore" });
  if (magickCheck.status !== 0) {
    process.stdout.write("ImageMagick is unavailable; skipped contact sheets.\n");
    return;
  }

  const font = [
    "/System/Library/Fonts/SFNS.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
  ].find(existsSync);
  const contactSheetDir = path.join(outputRoot, "contact-sheets");
  await mkdir(contactSheetDir, { recursive: true });

  for (const variant of variants) {
    const inputs = locales.map((locale) => path.join(outputRoot, locale, `${variant}.png`));
    if (inputs.some((input) => !existsSync(input))) {
      process.stdout.write(`Skipped ${variant} contact sheet until all locale assets exist.\n`);
      continue;
    }

    const args = ["montage", "-background", "#21142d", "-fill", "#ffffff", "-pointsize", "22"];
    if (font) args.push("-font", font);

    for (let index = 0; index < inputs.length; index += 1) {
      if (font) args.push("-label", locales[index]);
      args.push(inputs[index]);
    }

    args.push(
      "-thumbnail",
      "360x203",
      "-tile",
      "4x3",
      "-geometry",
      font ? "+18+34" : "+18+18",
      path.join(contactSheetDir, `${variant}.png`),
    );

    const result = spawnSync("magick", args, { encoding: "utf8" });
    if (result.status !== 0) {
      process.stderr.write(result.stderr ?? "");
      throw new Error(`ImageMagick failed while creating ${variant} contact sheet`);
    }
  }
}

async function generate() {
  await mkdir(outputRoot, { recursive: true });
  await writeManifest();

  if (process.env.PROMO_SKIP_CAPTURE === "1") {
    process.stdout.write(`Wrote ${path.relative(process.cwd(), path.join(outputRoot, "manifest.json"))}\n`);
    return;
  }

  await assertServer();

  runBrowser(["open", `${baseUrl}/en/promo/overview`], { quiet: true });
  runBrowser(["set", "viewport", "1600", "900", "1"], { quiet: true });
  runBrowser(["set", "media", "light", "reduced-motion"], { quiet: true });

  try {
    for (const locale of selectedLocales) {
      const localeDir = path.join(outputRoot, locale);
      await mkdir(localeDir, { recursive: true });

      for (const variant of selectedVariants) {
        const url = `${baseUrl}/${locale}/promo/${variant}`;
        const output = path.join(localeDir, `${variant}.png`);

        process.stdout.write(`Rendering ${locale}/${variant}... `);
        runBrowser(["open", url], { quiet: true });
        runBrowser(["wait", "--load", "networkidle"], { quiet: true });
        runBrowser(["wait", "--fn", "document.fonts.status === 'loaded'"], { quiet: true });
        runBrowser(["wait", "--fn", `document.querySelector('[data-promo-canvas]')?.lang === '${locale}'`], { quiet: true });
        runBrowser(["eval", "window.scrollTo(0, 0)"], { quiet: true });
        runBrowser(["eval", "document.querySelectorAll('nextjs-portal').forEach((element) => element.remove())"], { quiet: true });
        runBrowser(["screenshot", "--screenshot-format", "png", output], { quiet: true });
        process.stdout.write(`${path.relative(process.cwd(), output)}\n`);
      }
    }
  } finally {
    runBrowser(["close"], { quiet: true });
  }

  await generateContactSheets();
}

generate().catch((error) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exitCode = 1;
});
