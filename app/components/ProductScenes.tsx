import type { Messages } from "../home-i18n";
import type { ReactNode } from "react";

export const PRODUCT_SCENE_KINDS = [
  "popover",
  "welcome",
  "settings",
  "history",
  "lock-screen",
  "dynamic-island",
] as const;

export type ProductSceneKind = (typeof PRODUCT_SCENE_KINDS)[number];

interface SceneData {
  messages: Messages;
  tonePacks: readonly string[];
}

interface ProductSceneProps extends SceneData {
  kind: ProductSceneKind;
}

function SparkMark() {
  return <span className="scene-spark" aria-hidden="true">✦</span>;
}

function WindowDots() {
  return <span className="scene-window-dots" aria-hidden="true"><i /><i /><i /></span>;
}

function Toggle({ enabled = false }: { enabled?: boolean }) {
  return <span className={`scene-toggle${enabled ? " is-enabled" : ""}`} aria-hidden="true"><i /></span>;
}

function PopoverScene({ messages, tonePacks }: SceneData) {
  return <div className="scene-desktop scene-desktop-popover">
    <div className="scene-menubar"><strong><SparkMark /> Good Spark</strong><span>⌘ &nbsp; ✦ &nbsp; 10:30</span></div>
    <div className="scene-popover-card">
      <div className="scene-popover-top"><SparkMark /><span>⌘</span></div>
      <blockquote>{messages["scene.affirmation.one"]}</blockquote>
      <div className="scene-action-row"><b>⚄ {messages["scene.next"]}</b><span>⌄</span><span>♡</span><span>↗</span><span>▣</span></div>
      <small>✨ {tonePacks[0]} &nbsp;·&nbsp; 5 ✦ &nbsp;·&nbsp; 7 🔥</small>
    </div>
  </div>;
}

function WelcomeScene({ messages }: SceneData) {
  const highlights = [
    ["⌁", messages["feature.near.title"]],
    ["✦", messages["feature.personal.title"]],
    ["♡", messages["feature.keep.title"]],
  ];

  return <div className="scene-desktop scene-desktop-welcome">
    <div className="scene-menubar"><strong><SparkMark /> Good Spark</strong><span>10:30</span></div>
    <div className="scene-window scene-welcome-window">
      <WindowDots />
      <div className="scene-welcome-mark"><SparkMark /></div>
      <h3>{messages["scene.welcome.title"]}</h3>
      <p>{messages["scene.welcome.body"]}</p>
      <div className="scene-welcome-list">
        {highlights.map(([icon, label]) => <span key={label}><i aria-hidden="true">{icon}</i>{label}</span>)}
      </div>
      <button type="button" tabIndex={-1}>{messages["scene.next"]}</button>
    </div>
  </div>;
}

function SettingsScene({ messages, tonePacks }: SceneData) {
  return <div className="scene-desktop scene-desktop-settings">
    <div className="scene-menubar"><strong><SparkMark /> Good Spark</strong><span>10:30</span></div>
    <div className="scene-window scene-settings-window">
      <WindowDots />
      <h3>{messages["scene.settings.title"]}</h3>
      <div className="scene-settings-section">
        <b>{messages["scene.yourPacks"]}</b>
        {tonePacks.slice(0, 4).map((name, index) => <span className="scene-pack-row" key={name}><i aria-hidden="true">{["✨", "💅", "🧘", "🧑‍💻"][index]}</i>{name}<em>✓</em></span>)}
      </div>
      <div className="scene-settings-section scene-premium-list">
        <b>{messages["scene.morePacks"]}</b>
        {tonePacks.slice(4, 7).map((name, index) => <span className="scene-pack-row" key={name}><i aria-hidden="true">{["💪", "💖", "🎯"][index]}</i>{name}<small>{messages["packs.plus"]}</small></span>)}
      </div>
      <div className="scene-setting"><span>{messages["scene.probability"]}</span><Toggle /></div>
      <div className="scene-setting"><span>{messages["scene.notifications"]}</span><Toggle enabled /></div>
      <div className="scene-setting"><span>{messages["scene.launch"]}</span><Toggle /></div>
    </div>
  </div>;
}

function HistoryScene({ messages, tonePacks }: SceneData) {
  const entries = [
    ["✨", messages["scene.affirmation.one"], tonePacks[0]],
    ["🧘", messages["scene.affirmation.two"], tonePacks[2]],
    ["🎯", messages["scene.affirmation.three"], tonePacks[6]],
  ];

  return <div className="scene-desktop scene-desktop-history">
    <div className="scene-menubar"><strong><SparkMark /> Good Spark</strong><span>10:30</span></div>
    <div className="scene-window scene-history-window">
      <WindowDots />
      <div className="scene-history-title"><h3>{messages["scene.history.title"]}</h3><span>{messages["scene.clear"]}</span></div>
      <div className="scene-tabs"><b>◷ {messages["scene.all"]}</b><span>♥ {messages["scene.favorites"]}</span></div>
      <div className="scene-history-list">
        {entries.map(([icon, affirmation, pack], index) => <article key={affirmation}>
          <i aria-hidden="true">{icon}</i><div><strong>{affirmation}</strong><small>{pack} · ◷ {index + 1}</small></div><span aria-hidden="true">{index === 1 ? "♡" : "♥"}</span>
        </article>)}
      </div>
    </div>
  </div>;
}

function LockScreenScene({ messages, tonePacks }: SceneData) {
  return <div className="scene-phone-shell scene-lock-phone">
    <div className="scene-phone-status"><span>9:41</span><span>▰ ᯤ</span></div>
    <div className="scene-lock-heading"><span aria-hidden="true">◉</span><strong>24 · 08</strong></div>
    <div className="scene-lock-activity">
      <div className="scene-live-heading"><SparkMark /><strong>Good Spark</strong><span>{messages["scene.live.active"]}</span></div>
      <blockquote>{messages["scene.affirmation.two"]}</blockquote>
      <small>🧘 {tonePacks[2]} <span className="scene-live-end">{messages["scene.live.end"]}</span></small>
    </div>
    <div className="scene-lock-actions" aria-hidden="true"><i>◉</i><i>⌁</i></div>
  </div>;
}

function DynamicIslandScene({ messages }: SceneData) {
  return <div className="scene-phone-shell scene-island-phone">
    <div className="scene-phone-status"><span>9:41</span><span>▰ ᯤ</span></div>
    <div className="scene-dynamic-island">
      <SparkMark />
      <div><strong>Good Spark</strong><span>{messages["scene.affirmation.three"]}</span></div>
      <small aria-hidden="true">✦</small>
    </div>
    <div className="scene-island-glow"><SparkMark /></div>
    <blockquote>{messages["scene.affirmation.one"]}</blockquote>
    <div className="scene-island-dock" aria-hidden="true"><i /><i /><i /><i /></div>
  </div>;
}

export function ProductScene({ kind, messages, tonePacks }: ProductSceneProps) {
  const data = { messages, tonePacks };
  let scene: ReactNode;

  switch (kind) {
    case "popover": scene = <PopoverScene {...data} />; break;
    case "welcome": scene = <WelcomeScene {...data} />; break;
    case "settings": scene = <SettingsScene {...data} />; break;
    case "history": scene = <HistoryScene {...data} />; break;
    case "lock-screen": scene = <LockScreenScene {...data} />; break;
    case "dynamic-island": scene = <DynamicIslandScene {...data} />; break;
  }

  return <div className={`product-scene product-scene-${kind}`} aria-hidden="true">{scene}</div>;
}

export function HeroShowcase({ messages, tonePacks }: SceneData) {
  return <div className="hero-stage" role="img" aria-label={messages["aria.preview"]}>
    <div className="orbit orbit-one" /><div className="orbit orbit-two" />
    <div className="phone">
      <div className="phone-island" /><div className="phone-greeting">{messages["scene.greeting"]}</div><blockquote>{messages["scene.affirmation.one"]}</blockquote>
      <div className="phone-actions"><b>⚄&nbsp; {messages["scene.next"]}</b><i>⌄</i><i>♡</i><i>↗</i><i>▣</i></div><small>✨ {tonePacks[0]} &nbsp;·&nbsp; 3 ✦ &nbsp;·&nbsp; 7 🔥</small>
    </div>
    <div className="mac-card"><div className="mac-top"><span>✦</span><span>⌘</span></div><p>{messages["scene.affirmation.two"]}</p><div><b>⚄ {messages["scene.next"]}</b><span>⌄</span><span>♡</span><span>↗</span><span>▣</span></div><small>🧘 {tonePacks[2]} &nbsp;·&nbsp; 4 ✦</small></div>
    <div className="widget"><span>GOOD SPARK</span><p>{messages["scene.affirmation.three"]}</p><small>✨ {tonePacks[0]}</small></div>
  </div>;
}
