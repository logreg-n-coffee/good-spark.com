import type { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL("https://good-spark.com"),
  title: "Good Spark",
  description: "Personal affirmations on iPhone, iPad, widgets, the Lock Screen, Dynamic Island, and the Mac menu bar. Live Spark keeps one thoughtful message close. Private by design and available in 22 languages.",
  keywords: ["affirmations", "widgets", "menu bar", "motivation", "self-care", "iOS", "macOS", "wellness", "Live Spark", "Live Activities", "Dynamic Island", "Lock Screen"],
  authors: [{ name: "Good Spark Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32" },
      { url: "/web/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/web/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const themeBootstrapScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (theme === 'system' || !theme) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })();
`;
