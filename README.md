# Spark Website (good-spark.com)

Official website for **Spark** - Daily affirmations for your macOS menu bar.

## Overview

This is the production-ready marketing website for Spark, a privacy-first macOS menu bar app that delivers daily affirmations. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Landing Page**: Beautiful hero section showcasing Spark's features
- **Tone Packs Showcase**: Display all 12 tone packs (4 free + 8 premium)
- **Pricing Section**: Clear comparison between free and premium tiers
- **Privacy Policy**: Full GDPR/CCPA compliant privacy policy page
- **SEO Optimized**: Meta tags, OpenGraph, structured data (JSON-LD), robots.txt, sitemap
- **Performance**: Vercel Analytics and Speed Insights integration
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Production Ready**: Security headers, image optimization, compression

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics (privacy-friendly)
- **Performance Monitoring**: Vercel Speed Insights

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
│   ├── layout.tsx          # Root layout with metadata & analytics
│   ├── page.tsx            # Landing page
│   ├── privacy/
│   │   └── page.tsx        # Privacy policy page
│   ├── robots.ts           # Robots.txt configuration
│   ├── sitemap.ts          # Sitemap configuration
│   └── globals.css         # Global styles
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
├── vercel.json             # Vercel deployment config
├── tailwind.config.ts      # Tailwind CSS config
└── tsconfig.json           # TypeScript configuration
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure custom domain: `good-spark.com`
4. Deploy

```bash
# Or deploy via Vercel CLI
npm install -g vercel
vercel --prod
```

### Environment Variables

No environment variables are required for this static website.

## SEO Configuration

- **Meta Tags**: Configured in `app/layout.tsx`
- **OpenGraph**: Social media preview images
- **Structured Data**: JSON-LD schema for SoftwareApplication
- **Robots.txt**: Generated at `/robots.txt`
- **Sitemap**: Generated at `/sitemap.xml`

## Performance

- **Bundle Size**: Optimized with Next.js automatic code splitting
- **Image Optimization**: AVIF and WebP formats with responsive sizes
- **Caching**: Static assets cached with immutable headers
- **Analytics**: Privacy-friendly Vercel Analytics
- **Speed Insights**: Real User Monitoring (RUM)

## Security

- HTTPS enforced via Vercel
- Security headers configured (CSP, X-Frame-Options, etc.)
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

# Type checking
npx tsc --noEmit

# Linting
npm run lint
```

## Content Updates

### Updating the Landing Page

Edit `app/page.tsx` to modify:
- Hero section
- Features
- Tone packs
- Pricing
- Footer

### Updating Privacy Policy

Edit `app/privacy/page.tsx` to update the privacy policy content.

### Updating SEO Metadata

Edit `app/layout.tsx` to update:
- Page title
- Meta description
- OpenGraph tags
- Structured data

## Related Repositories

- **Spark macOS App**: [github.com/logreg-n-coffee/vibecheck](https://github.com/logreg-n-coffee/vibecheck)
- **Backend API**: Vercel Edge Functions in the main app repo

## Support

- **Email**: support@good-spark.com
- **Issues**: [GitHub Issues](https://github.com/logreg-n-coffee/vibecheck/issues)
- **Website**: [good-spark.com](https://good-spark.com)

## License

All rights reserved. This is proprietary software.

## Credits

Built with ❤️ by the Spark Team

---

**Version**: 1.0.0
**Last Updated**: January 2026
