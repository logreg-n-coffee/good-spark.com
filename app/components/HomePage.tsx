"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const APP_STORE_URL = "https://apps.apple.com/app/good-spark-affirmations/id6758261166";

const copy = {
  en: {
    name: "English", hero: "A small spark, right when you need it.",
    intro: "Personal affirmations that meet you in your menu bar, on your iPhone, and on your Home Screen — without accounts, ads, or noise.",
    download: "Get Good Spark", explore: "See how it works", available: "Made for Mac, iPhone & iPad",
    proof: ["12 tone packs", "200+ affirmations", "21 languages", "No account"],
    moments: "Positivity that fits into real life.", momentsBody: "Good Spark stays close without asking for your attention. Open it when you need a reset, let a widget catch your eye, or schedule one thoughtful reminder.",
    features: [["One click away", "A lightweight Mac menu bar companion that never gets in the way."], ["Made personal", "Choose your name, tone packs, timing, and the energy you want today."], ["Keep what lands", "Favorite, share, copy, and revisit the words that mattered."], ["A habit, gently", "Track daily moments and streaks without pressure or gamification overload."]],
    gallery: "Meet Good Spark.", galleryBody: "A calm, colorful home for encouragement — from a quick menu bar moment to your history and preferences.",
    shots: ["One click from your Mac menu bar", "A thoughtful welcome", "Make it work your way", "Remember what resonated"],
    packs: "There’s a tone for that.", packsBody: "Start with four free packs, then unlock eight more — from focused to funny, grounded to gloriously chaotic.",
    privacy: "Your inner life isn’t a data point.", privacyBody: "The app needs no account and collects no personal data. Your history, favorites, name, and preferences stay on your device.",
    privacyLink: "Read our privacy promise", cta: "Make room for one good thought.", ctaBody: "Free to begin. Premium unlocks the full library on iPhone and Mac.",
    footer: "Daily affirmations, always close and never intrusive.", nav: ["Why Good Spark", "Inside the app", "Tone packs", "Privacy"], language: "Language"
  },
  es: {
    name: "Español", hero: "Una pequeña chispa, justo cuando la necesitas.", intro: "Afirmaciones personales en la barra de menús, el iPhone y la pantalla de inicio, sin cuentas, anuncios ni ruido.", download: "Obtener Good Spark", explore: "Descubre cómo funciona", available: "Para Mac, iPhone y iPad", proof: ["12 estilos", "Más de 200 afirmaciones", "21 idiomas", "Sin cuenta"], moments: "Positividad para la vida real.", momentsBody: "Good Spark está cerca sin exigir tu atención. Ábrelo para hacer una pausa, mira el widget o programa un recordatorio amable.", features: [["A un clic", "Un compañero ligero en la barra de menús del Mac."], ["Hecho para ti", "Elige tu nombre, estilos, horario y energía."], ["Guarda lo que conecta", "Marca favoritos, comparte y vuelve a tus palabras."], ["Un hábito amable", "Sigue tus momentos diarios sin presión."]], gallery: "Conoce Good Spark.", galleryBody: "Un espacio tranquilo y colorido para el ánimo diario.", shots: ["A un clic en tu Mac", "Una bienvenida especial", "Configúralo a tu manera", "Recuerda lo que conectó"], packs: "Hay un tono para cada momento.", packsBody: "Empieza con cuatro estilos gratuitos y desbloquea ocho más.", privacy: "Tu vida interior no es un dato.", privacyBody: "La app no necesita cuenta ni recopila datos personales. Tu historial y preferencias permanecen en tu dispositivo.", privacyLink: "Lee nuestra promesa de privacidad", cta: "Haz espacio para un buen pensamiento.", ctaBody: "Empieza gratis. Premium desbloquea toda la biblioteca en iPhone y Mac.", footer: "Afirmaciones diarias, siempre cerca y nunca intrusivas.", nav: ["Por qué", "La app", "Estilos", "Privacidad"], language: "Idioma"
  },
  fr: {
    name: "Français", hero: "Une petite étincelle, au bon moment.", intro: "Des affirmations personnelles dans la barre des menus, sur iPhone et sur l’écran d’accueil — sans compte, publicité ni bruit.", download: "Obtenir Good Spark", explore: "Voir comment ça marche", available: "Pour Mac, iPhone et iPad", proof: ["12 tonalités", "Plus de 200 affirmations", "21 langues", "Sans compte"], moments: "La positivité, dans la vraie vie.", momentsBody: "Good Spark reste à portée de main sans réclamer votre attention. Ouvrez l’app pour souffler, consultez le widget ou programmez un rappel.", features: [["À un clic", "Un compagnon discret dans la barre des menus du Mac."], ["À votre image", "Choisissez votre nom, vos tonalités et votre rythme."], ["Gardez l’essentiel", "Ajoutez aux favoris, partagez et retrouvez les mots justes."], ["Une douce habitude", "Suivez vos moments quotidiens sans pression."]], gallery: "Découvrez Good Spark.", galleryBody: "Un espace calme et coloré pour vos encouragements.", shots: ["À un clic sur Mac", "Un accueil attentionné", "À votre façon", "Retrouvez ce qui vous a touché"], packs: "Une tonalité pour chaque moment.", packsBody: "Commencez avec quatre packs gratuits, puis débloquez-en huit autres.", privacy: "Votre vie intérieure n’est pas une donnée.", privacyBody: "Aucun compte, aucune collecte de données personnelles. Votre historique et vos préférences restent sur votre appareil.", privacyLink: "Lire notre engagement", cta: "Faites place à une belle pensée.", ctaBody: "Commencez gratuitement. Premium débloque toute la bibliothèque sur iPhone et Mac.", footer: "Des affirmations quotidiennes, toujours proches et jamais intrusives.", nav: ["Pourquoi", "Dans l’app", "Tonalités", "Vie privée"], language: "Langue"
  },
  de: {
    name: "Deutsch", hero: "Ein kleiner Funke, genau im richtigen Moment.", intro: "Persönliche Affirmationen in der Menüleiste, auf dem iPhone und Homescreen — ohne Konto, Werbung oder Ablenkung.", download: "Good Spark laden", explore: "So funktioniert es", available: "Für Mac, iPhone & iPad", proof: ["12 Tonwelten", "Über 200 Affirmationen", "21 Sprachen", "Kein Konto"], moments: "Positivität fürs echte Leben.", momentsBody: "Good Spark bleibt in der Nähe, ohne Aufmerksamkeit zu fordern. Öffne es für einen Neustart, nutze das Widget oder plane eine sanfte Erinnerung.", features: [["Ein Klick entfernt", "Ein leichter Begleiter in der Mac-Menüleiste."], ["Persönlich gemacht", "Wähle Namen, Tonwelten, Zeitpunkt und Energie."], ["Behalte, was wirkt", "Favorisieren, teilen und wichtige Worte wiederfinden."], ["Eine sanfte Gewohnheit", "Verfolge tägliche Momente ohne Druck."]], gallery: "Lerne Good Spark kennen.", galleryBody: "Ein ruhiger, farbenfroher Ort für Ermutigung.", shots: ["Ein Klick in der Menüleiste", "Ein herzlicher Start", "Ganz nach deinem Geschmack", "Was dich berührt hat"], packs: "Für jeden Moment der richtige Ton.", packsBody: "Starte mit vier kostenlosen Packs und schalte acht weitere frei.", privacy: "Dein Inneres ist kein Datenpunkt.", privacyBody: "Kein Konto und keine Erfassung persönlicher Daten. Verlauf und Einstellungen bleiben auf deinem Gerät.", privacyLink: "Unser Datenschutzversprechen", cta: "Mach Platz für einen guten Gedanken.", ctaBody: "Kostenlos starten. Premium öffnet die ganze Bibliothek auf iPhone und Mac.", footer: "Tägliche Affirmationen — immer nah, nie aufdringlich.", nav: ["Warum", "Die App", "Tonwelten", "Datenschutz"], language: "Sprache"
  },
  ja: {
    name: "日本語", hero: "必要なときに、小さなきっかけを。", intro: "メニューバー、iPhone、ホーム画面に届く、あなたのためのアファメーション。アカウントも広告も不要です。", download: "Good Sparkを入手", explore: "使い方を見る", available: "Mac・iPhone・iPad対応", proof: ["12のトーン", "200以上の言葉", "21言語", "アカウント不要"], moments: "毎日の暮らしに、自然な前向きさを。", momentsBody: "Good Sparkは注意を奪わず、そっとそばにいます。気分を切り替えたいとき、ウィジェットや通知から言葉を受け取れます。", features: [["ワンクリック", "Macのメニューバーからすぐに開けます。"], ["あなたらしく", "名前、トーン、タイミングを選べます。"], ["心に残った言葉を", "お気に入り、共有、履歴でいつでも振り返れます。"], ["無理のない習慣", "プレッシャーなく日々の記録を続けられます。"]], gallery: "Good Sparkをのぞいてみよう。", galleryBody: "励ましの言葉を届ける、穏やかでカラフルな場所。", shots: ["Macからワンクリック", "心のこもった案内", "自分好みに設定", "響いた言葉を振り返る"], packs: "今の気分に合うトーンを。", packsBody: "4つの無料パックから始め、さらに8つをアンロック。", privacy: "心の内は、データではありません。", privacyBody: "アカウントは不要で、個人データも収集しません。履歴や設定は端末内に保存されます。", privacyLink: "プライバシーについて", cta: "ひとつの良い言葉を、今日に。", ctaBody: "無料でスタート。PremiumでiPhoneとMacの全ライブラリを利用できます。", footer: "いつも近くに、邪魔をしない毎日のアファメーション。", nav: ["特徴", "アプリ", "トーン", "プライバシー"], language: "言語"
  },
  "zh-Hans": {
    name: "简体中文", hero: "在需要的时候，点亮一点微光。", intro: "个性化肯定语常驻菜单栏、iPhone 和主屏幕，无需账户，没有广告，也不打扰。", download: "获取 Good Spark", explore: "了解使用方式", available: "支持 Mac、iPhone 和 iPad", proof: ["12 种语气", "200+ 肯定语", "21 种语言", "无需账户"], moments: "融入真实生活的正能量。", momentsBody: "Good Spark 安静地陪伴，不争夺你的注意力。需要重启心情时打开它，看看小组件，或设定一条温柔提醒。", features: [["一触即达", "轻巧的 Mac 菜单栏伙伴。"], ["为你定制", "选择名字、语气、时间和今日能量。"], ["收藏触动", "收藏、分享并重温那些重要的话。"], ["温和养成", "轻松记录每日时刻，不制造压力。"]], gallery: "认识 Good Spark。", galleryBody: "一个安静而多彩的鼓励空间。", shots: ["Mac 菜单栏一触即达", "用心的初次体验", "按你的方式设置", "重温触动你的话"], packs: "每种心情，都有合适的语气。", packsBody: "从 4 个免费语气包开始，还可解锁另外 8 个。", privacy: "你的内心，不是数据点。", privacyBody: "无需账户，也不收集个人数据。历史、收藏和偏好只保存在你的设备上。", privacyLink: "阅读隐私承诺", cta: "为一个好念头留点空间。", ctaBody: "免费开始。Premium 可在 iPhone 和 Mac 上解锁完整内容库。", footer: "每日肯定语，常在身边，从不打扰。", nav: ["为何选择", "应用内", "语气包", "隐私"], language: "语言"
  }
} as const;

type Language = keyof typeof copy;
const packs = [["✨", "Wholesome"], ["💅", "Gay Chaos"], ["🧘", "Calm AF"], ["🧑‍💻", "Tech Bro"], ["💪", "Motivational"], ["💖", "Self-Love"], ["🎯", "Productivity"], ["🌿", "Mindfulness"], ["😂", "Humor"], ["🌸", "Gratitude"], ["🎨", "Creative Flow"], ["🌙", "Evening Wind-Down"]];
const shotFiles = ["01_popover_desktop.webp", "02_welcome.webp", "03_settings.webp", "04_history.webp"];

export function HomePage() {
  const [language, setLanguage] = useState<Language>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = copy[language];

  useEffect(() => {
    const saved = localStorage.getItem("good-spark-language") as Language | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- restore the persisted client preference after hydration
    if (saved && saved in copy) setLanguage(saved);
    else {
      const browser = navigator.language;
      const match = (Object.keys(copy) as Language[]).find((key) => browser.toLowerCase().startsWith(key.toLowerCase().split("-")[0]));
      if (match) setLanguage(match);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const chooseLanguage = (value: Language) => {
    setLanguage(value); localStorage.setItem("good-spark-language", value); setMenuOpen(false);
  };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Good Spark home"><Image src="/web/icon-32.png" alt="" width={34} height={34}/><span>Good Spark</span></a>
      <nav aria-label="Main navigation">
        {t.nav.map((label, i) => <a key={label} href={["#why", "#inside", "#packs", "#privacy"][i]}>{label}</a>)}
      </nav>
      <div className="language-wrap">
        <button className="language-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-haspopup="listbox">文&nbsp; {t.name} <span>⌄</span></button>
        {menuOpen && <div className="language-menu" role="listbox" aria-label={t.language}>
          {(Object.keys(copy) as Language[]).map(key => <button key={key} role="option" aria-selected={language === key} onClick={() => chooseLanguage(key)}>{copy[key].name}<span>{language === key ? "✓" : ""}</span></button>)}
        </div>}
      </div>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow"><span>✦</span> {t.available}</p>
        <h1>{t.hero}</h1><p className="lede">{t.intro}</p>
        <div className="hero-actions"><a className="button primary" href={APP_STORE_URL}>{t.download} <span>↗</span></a><a className="button quiet" href="#inside">{t.explore} <span>↓</span></a></div>
      </div>
      <div className="hero-stage" aria-label="Good Spark on iPhone and Mac">
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="phone">
          <div className="phone-island"/><div className="phone-greeting">Good morning, you</div><blockquote>You don’t have to have it all figured out today.</blockquote>
          <div className="phone-actions"><b>⚄&nbsp; Next</b><i>⌄</i><i>♡</i><i>↗</i><i>▣</i></div><small>✨ Wholesome &nbsp; · &nbsp; 3 today &nbsp; · &nbsp; 🔥 7 days</small>
        </div>
        <div className="mac-card"><div className="mac-top"><span>✦</span><span>⌘</span></div><p>Take a breath. You are doing better than you think.</p><div><b>⚄ Next</b><span>⌄</span><span>♡</span><span>↗</span><span>▣</span></div><small>🧘 Calm AF &nbsp; · &nbsp; 4 today</small></div>
        <div className="widget"><span>GOOD SPARK</span><p>Your pace is still progress.</p><small>✨ Wholesome</small></div>
      </div>
      <div className="proof-row">{t.proof.map((item) => <div key={item}><strong>{item.split(" ")[0]}</strong><small>{item.substring(item.indexOf(" ") + 1)}</small></div>)}</div>
    </section>

    <section className="section moments" id="why"><div className="section-heading"><p className="eyebrow">01 · WHY GOOD SPARK</p><h2>{t.moments}</h2><p>{t.momentsBody}</p></div><div className="feature-grid">{t.features.map((feature, i) => <article key={feature[0]}><span className="feature-number">0{i + 1}</span><div className={`feature-icon icon-${i}`}>{["⌁", "✦", "♡", "↗"][i]}</div><h3>{feature[0]}</h3><p>{feature[1]}</p></article>)}</div></section>

    <section className="section gallery" id="inside"><div className="section-heading split"><div><p className="eyebrow">02 · INSIDE THE APP</p><h2>{t.gallery}</h2></div><p>{t.galleryBody}</p></div><div className="shot-grid">{shotFiles.map((file, i) => <figure key={file}><div className="shot-frame"><Image src={`/screenshots/${file}`} alt={t.shots[i]} fill sizes="(max-width: 800px) 100vw, 50vw"/></div><figcaption><span>0{i + 1}</span>{t.shots[i]}</figcaption></figure>)}</div></section>

    <section className="section packs" id="packs"><div className="section-heading"><p className="eyebrow">03 · TONE PACKS</p><h2>{t.packs}</h2><p>{t.packsBody}</p></div><div className="pack-loop">{packs.map(([emoji, name], i) => <div className={i > 3 ? "premium-pack" : ""} key={name}><span>{emoji}</span><b>{name}</b>{i > 3 && <small>PLUS</small>}</div>)}</div></section>

    <section className="section privacy" id="privacy"><div className="privacy-mark">◎<span>✓</span></div><div><p className="eyebrow">04 · PRIVACY, BY DEFAULT</p><h2>{t.privacy}</h2><p>{t.privacyBody}</p><a href="/privacy">{t.privacyLink} <span>→</span></a></div><div className="privacy-list"><p><span>✓</span> No personal data collection</p><p><span>✓</span> No account required</p><p><span>✓</span> Preferences stay on-device</p><p><span>✓</span> Core content works offline</p></div></section>

    <section className="final-cta"><Image src="/web/icon-512.png" alt="Good Spark app icon" width={104} height={104}/><h2>{t.cta}</h2><p>{t.ctaBody}</p><a className="button light" href={APP_STORE_URL}>{t.download} <span>↗</span></a><small>Requires iOS 17 or macOS 13 and later</small></section>
    <footer><div className="brand"><Image src="/web/icon-32.png" alt="" width={30} height={30}/><span>Good Spark</span></div><p>{t.footer}</p><div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Support</a></div><small>© 2026 Good Spark</small></footer>
  </main>;
}
