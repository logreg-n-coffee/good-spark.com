# Deployment Guide for good-spark.com

This guide covers deploying the Spark website to production.

## Prerequisites

- GitHub account
- Vercel account (free tier is sufficient)
- Domain `good-spark.com` (already owned)

## Quick Deploy to Vercel

### Method 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit - Production-ready Spark website"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository: `good-spark.com`
   - Click "Import"
   - Framework Preset: Next.js (auto-detected)
   - No environment variables needed
   - Click "Deploy"

3. **Configure Domain**
   - Go to Project Settings → Domains
   - Add custom domain: `good-spark.com`
   - Add `www.good-spark.com` (optional)
   - Vercel will provide DNS records
   - Update your domain DNS settings:
     - Add A record: `76.76.21.21`
     - Add CNAME for www: `cname.vercel-dns.com`
   - Wait for DNS propagation (5-30 minutes)

4. **Verify Deployment**
   - Visit `https://good-spark.com`
   - Check all pages load correctly
   - Verify SSL certificate is active
   - Test on mobile and desktop

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # First deployment
   vercel

   # Production deployment
   vercel --prod
   ```

4. **Configure domain via CLI**
   ```bash
   vercel domains add good-spark.com
   ```

## Post-Deployment Checklist

### Functionality
- [ ] Homepage loads correctly
- [ ] Privacy policy page accessible at `/privacy`
- [ ] All navigation links work
- [ ] Footer links are correct
- [ ] External links open in new tabs

### SEO
- [ ] Meta tags visible in page source
- [ ] OpenGraph tags present (test with [opengraph.xyz](https://www.opengraph.xyz/))
- [ ] Sitemap accessible at `/sitemap.xml`
- [ ] Robots.txt accessible at `/robots.txt`
- [ ] Structured data validates ([Google Rich Results Test](https://search.google.com/test/rich-results))

### Performance
- [ ] Lighthouse score > 90 (all metrics)
- [ ] Vercel Analytics enabled
- [ ] Speed Insights collecting data
- [ ] Images optimized and loading fast

### Security
- [ ] HTTPS enforced (redirects from HTTP)
- [ ] Security headers present (check with [securityheaders.com](https://securityheaders.com))
- [ ] No mixed content warnings
- [ ] SSL certificate valid

### Mobile
- [ ] Responsive design works on all screen sizes
- [ ] Navigation menu accessible on mobile
- [ ] Text is readable without zooming
- [ ] Touch targets are large enough

## Environment Configuration

### Production URLs
- **Website**: `https://good-spark.com`
- **Privacy Policy**: `https://good-spark.com/privacy`
- **Sitemap**: `https://good-spark.com/sitemap.xml`
- **Robots**: `https://good-spark.com/robots.txt`

### DNS Configuration

**A Records**
```
Host: @
Value: 76.76.21.21
TTL: 300
```

**CNAME Records** (optional www)
```
Host: www
Value: cname.vercel-dns.com
TTL: 300
```

## Continuous Deployment

Once connected to GitHub, Vercel automatically:
- Deploys on every push to `main` branch
- Creates preview deployments for pull requests
- Runs build checks before deployment
- Provides deployment URLs for testing

### Branch Strategy
- `main` → Production (good-spark.com)
- Feature branches → Preview deployments
- Pull requests → Preview deployments with unique URLs

## Monitoring

### Vercel Dashboard
- **Analytics**: View page views, unique visitors
- **Speed Insights**: Monitor Core Web Vitals
- **Deployments**: Track build history
- **Logs**: Debug issues in production

### Google Search Console (Recommended)
1. Verify ownership: `https://search.google.com/search-console`
2. Submit sitemap: `https://good-spark.com/sitemap.xml`
3. Monitor indexing status
4. Check for crawl errors

## Updating the Website

### Content Updates
1. Edit files locally
2. Test with `npm run dev`
3. Build locally with `npm run build`
4. Commit and push to GitHub
5. Vercel auto-deploys

### Emergency Rollback
If deployment breaks:
1. Go to Vercel Dashboard → Deployments
2. Find last working deployment
3. Click "⋮" menu → "Promote to Production"

## Performance Optimization

### Already Implemented
- ✅ Next.js automatic code splitting
- ✅ Image optimization (AVIF, WebP)
- ✅ Static site generation (SSG)
- ✅ Compression enabled
- ✅ Security headers configured
- ✅ Font optimization with next/font

### Optional Enhancements
- Add OG image generator for social previews
- Implement ISR (Incremental Static Regeneration) if needed
- Add service worker for offline support
- Enable Vercel Edge Network for global distribution

## Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# Check for TypeScript errors
npx tsc --noEmit

# Check for linting errors
npm run lint
```

### Domain Not Resolving
- Verify DNS records with `dig good-spark.com`
- Check Vercel domain configuration
- Wait for DNS propagation (up to 48 hours)
- Clear browser DNS cache

### Analytics Not Working
- Verify `@vercel/analytics` is installed
- Check browser console for errors
- Wait 24 hours for data to appear
- Ensure Analytics is enabled in Vercel dashboard

## Security

### HTTPS
- Automatically provisioned by Vercel
- Certificate auto-renews
- Force HTTPS redirect enabled

### Headers
Configured in `next.config.ts`:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Strict-Transport-Security: max-age=63072000

## Support

### Issues
- **Build errors**: Check Vercel deployment logs
- **DNS issues**: Contact domain registrar
- **Performance**: Check Vercel Speed Insights
- **Security**: Run security headers test

### Resources
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Spark GitHub Issues](https://github.com/logreg-n-coffee/vibecheck/issues)

## Cost

### Vercel Pricing
- **Hobby Plan**: FREE
  - 100 GB bandwidth/month
  - Unlimited deployments
  - Custom domains
  - SSL certificates
  - Perfect for this website

### Estimated Costs
- **Hosting**: $0/month (Vercel Hobby)
- **Domain**: ~$12/year (already owned)
- **Total**: ~$1/month

---

**Deployment Version**: 1.0.0
**Last Updated**: January 2026
**Next Review**: After App Store launch
