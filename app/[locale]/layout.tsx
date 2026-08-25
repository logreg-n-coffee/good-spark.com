import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import { DEFAULT_LOCALE, getLocaleMeta, isLocale, type Locale } from "../home-i18n";
import { baseMetadata, themeBootstrapScript } from "../site-shell";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = baseMetadata;

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: value } = await params;
  const locale: Locale = isLocale(value) ? value : DEFAULT_LOCALE;
  const localeMeta = getLocaleMeta(locale);

  return (
    <html lang={locale} dir={localeMeta.direction} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
