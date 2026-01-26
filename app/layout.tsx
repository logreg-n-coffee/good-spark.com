import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: "Good Spark - Daily Affirmations for macOS",
  description: "Beautiful affirmations delivered right to your menu bar. Privacy-first, offline-capable, and designed for daily inspiration. 40+ free affirmations across 4 tone packs.",
  keywords: ["affirmations", "motivation", "menu bar", "productivity", "mental health", "self-care", "positivity", "macOS", "wellness"],
  authors: [{ name: "Good Spark Team" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://good-spark.com",
    siteName: "Good Spark",
    title: "Good Spark - Daily Affirmations for macOS",
    description: "Beautiful affirmations delivered right to your menu bar. Privacy-first, offline-capable, and designed for daily inspiration.",
    images: [
      {
        url: "https://good-spark.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Good Spark - Daily Affirmations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Good Spark - Daily Affirmations for macOS",
    description: "Beautiful affirmations delivered right to your menu bar",
    images: ["https://good-spark.com/og-image.png"],
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
    "operatingSystem": "macOS 13.0 or later",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description": "Beautiful affirmations delivered right to your menu bar. Privacy-first, offline-capable, and designed for daily inspiration.",
    "softwareVersion": "1.7.0",
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
