import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from './components/ThemeProvider';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://good-spark.com"),
  title: "Good Spark — Daily affirmations for iPhone and Mac",
  description: "Personal affirmations on iPhone, iPad, widgets, the Lock Screen, Dynamic Island, and the Mac menu bar. Live Spark keeps one thoughtful message close. Private by design and available in 22 languages.",
  keywords: ["affirmations", "widgets", "menu bar", "motivation", "self-care", "iOS", "macOS", "wellness", "Live Spark", "Live Activities", "Dynamic Island", "Lock Screen"],
  authors: [{ name: "Good Spark Team" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/web/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/web/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://good-spark.com",
    siteName: "Good Spark",
    title: "Good Spark — A small spark, right when you need it",
    description: "Personal affirmations for iPhone, iPad, widgets, and Mac — with Live Spark on the Lock Screen and Dynamic Island.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Spark — A small spark, right when you need it",
    description: "Personal affirmations for iPhone, iPad, widgets, and Mac — with Live Spark on the Lock Screen and Dynamic Island.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (theme === 'system' || !theme) && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Good Spark",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS 17.0 or later, macOS 13.0 or later",
    "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "0",
    "highPrice": "29.99",
    "priceCurrency": "USD",
    "offerCount": 3,
    },
    "description": "Personal affirmations for iPhone, iPad, Home Screen and Lock Screen widgets, Live Spark on the Lock Screen and Dynamic Island, and your Mac menu bar. Private by design and available in 22 languages.",
    "featureList": [
      "Home Screen widgets",
      "Lock Screen widgets",
      "Live Spark Live Activities",
      "Lock Screen Live Activities",
      "Dynamic Island support",
      "Mac menu bar companion",
      "22 supported languages",
      "On-device history and favorites",
    ],
    "softwareVersion": "1.26.0",
    "author": {
      "@type": "Organization",
      "name": "Good Spark Team",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "ratingCount": "1",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
