# Good Spark Website (good-spark.com)

Official website for **Good Spark** — daily affirmations for iPhone, iPad, the Lock Screen, Dynamic Island, widgets, and the Mac menu bar.

## Overview

This is the static marketing and support website for Good Spark. The homepage and its six product scenes are localized in the same 22 languages as the app, including right-to-left layout for Arabic.

## Features

- **Localized homepage**: 22-language picker with automatic browser-language selection
- **Localized product scenes**: Mac popover, welcome, settings, history, Lock Screen, and Dynamic Island
- **Live Spark**: Current Lock Screen Live Activity and Dynamic Island support on iPhone
- **Tone packs**: All 12 packs, localized in every supported language
- **Support pages**: Privacy policy, terms, and contact
- **Static export**: Responsive output deployed through GitHub Pages

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
good-spark.com/
├── app/
│   ├── components/         # Homepage and localized product scenes
│   ├── home-i18n.ts        # Locale resolution and message types
│   ├── home-messages.json  # Homepage copy in 22 languages
│   ├── tone-packs.json     # Localized tone-pack names
│   ├── layout.tsx          # Metadata and structured data
│   └── globals.css         # Responsive and RTL-aware styles
├── scripts/                # Localization contract validation
├── public/                 # Static assets, robots.txt, and sitemap.xml
└── next.config.ts          # Static-export configuration
```

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, build the static `out/` directory with Node.js 20, and deploy it to GitHub Pages. `public/CNAME` maps the Pages deployment to `good-spark.com`.

### Environment Variables

No environment variables are required for this static website.

## SEO Configuration

- **Meta Tags**: Configured in `app/layout.tsx`
- **OpenGraph**: Social media preview images
- **Structured Data**: JSON-LD schema for SoftwareApplication
- **Robots.txt**: Static at `/robots.txt`
- **Sitemap**: Static at `/sitemap.xml`

## Performance

- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: AVIF and WebP formats with responsive sizes
- **Caching**: Static assets cached with immutable headers
- **Runtime**: Fully static pages with no analytics or tracking scripts

## Security

- HTTPS enforced by GitHub Pages
- No tracking scripts (privacy-first)
- GDPR/CCPA compliant

## Development

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting

### Building

```bash
# Development build
npm run dev

# Production build
npm run build

# Localization contract, type checking, and linting
npm test
npm run typecheck
npm run lint

# Linting
npm run lint
```

## Content Updates

### Updating the Landing Page

Edit `app/components/HomePage.tsx` for structure, `app/home-messages.json` for localized copy, and `app/tone-packs.json` for localized pack names. Run `npm test` after changing messages; every locale must expose the same keys and all six scenes.

### Updating Privacy Policy

Edit `app/privacy/page.tsx` to update the privacy policy content.

### Updating SEO Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- OpenGraph tags
- Structured data

## Related Repositories

- **Good Spark app support**: [Contact page](https://good-spark.com/contact)
- **Backend API**: Separate Vercel service consumed by the native clients

## Support

- **Support**: [Contact page](https://good-spark.com/contact)
- **Issues**: [Contact page](https://good-spark.com/contact)
- **Website**: [good-spark.com](https://good-spark.com)

## License

MIT License - See LICENSE file for details.

## Credits

Built with love by the Good Spark Team

---

**Version**: 1.0.0
**Last Updated**: August 2026
