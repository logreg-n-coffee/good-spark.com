# Privacy Policy for Spark

**Last Updated: January 15, 2026**

## Overview

Spark is committed to protecting your privacy. This privacy policy explains how we handle data in our macOS menu bar application.

> **Our Privacy Promise**
>
> Spark does **NOT** collect, store, or transmit any personal data.
>
> We believe your affirmations and usage patterns are private. We have built Spark with privacy as a core principle.

---

## What We Don't Collect

- No user accounts or registration
- No analytics or tracking
- No user identification
- No location data
- No device information
- No usage statistics
- No email addresses
- No names or contact information
- No IP addresses
- No crash reports (unless you explicitly send them)

---

## Data Storage

### Local Storage Only

All data is stored locally on your Mac using standard macOS APIs:

| Data Type | Storage Location |
|-----------|-----------------|
| User Preferences | macOS UserDefaults |
| Affirmation History | Local device storage |
| Favorite Affirmations | Local device storage |
| Premium Content Cache | Local device storage |
| Purchase Status | Apple's StoreKit |

**We have zero access to any of this data.**

### No Cloud Sync

Spark does not sync your data to any cloud service. Your history, favorites, and preferences exist only on your Mac.

---

## In-App Purchases

Spark offers a premium unlock for additional tone packs.

### What Apple Handles

- Payment processing
- Purchase receipt validation
- Transaction history
- Restore purchases functionality

### What We Know

We only know that a purchase was made (via Apple's StoreKit API). We do **NOT** receive:

- Your name
- Your email address
- Your payment information
- Any personally identifiable information

All purchase data is handled exclusively by Apple according to their [Apple Privacy Policy](https://www.apple.com/legal/privacy/).

---

## Content Updates

Spark fetches premium content updates from our servers when you have purchased the premium unlock.

### Content Delivery

- Premium affirmations are served via GitHub CDN
- No user identification is sent with requests
- No authentication tokens are required
- No cookies are used
- No tracking parameters are included

### What Our Servers See

When fetching premium content, standard HTTP requests are made to:

```
https://raw.githubusercontent.com/logreg-n-coffee/spark/
```

These requests may contain:
- HTTP headers (standard browser information)
- ETag for caching optimization

These requests do **NOT** contain:
- Any personal information
- Any device identifiers
- Any user identifiers
- Any usage data

GitHub's CDN may log standard HTTP access logs according to their [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement).

---

## Third-Party Services

Spark uses the following third-party services:

### 1. Apple StoreKit

- **Purpose:** In-app purchase management
- **Data Processed:** Purchase transactions (handled by Apple)
- **Privacy Policy:** [Apple Privacy Policy](https://www.apple.com/legal/privacy/)

### 2. GitHub CDN

- **Purpose:** Premium content delivery
- **Data Processed:** Standard HTTP requests for content files
- **Privacy Policy:** [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement)

### 3. Vercel Edge Functions (Optional)

- **Purpose:** Dynamic content catalog (future feature)
- **Data Processed:** API requests for content metadata
- **Privacy Policy:** [Vercel Privacy Policy](https://vercel.com/legal/privacy-policy)

**None of these services receive personal user data from Spark.**

---

## Permissions

Spark requires the following macOS permissions:

### Network Access

- **Purpose:** Download premium content updates
- **Frequency:** Once every 24 hours (if premium purchased)
- **Can be blocked:** Yes, app works offline with cached content

### Notifications (Optional)

- **Purpose:** Daily affirmation reminders (if enabled by user)
- **Controlled by:** macOS System Preferences → Notifications
- **Data sent:** None (local notifications only)

### Accessibility (Not Required)

- Spark does NOT require accessibility permissions
- Global hotkey uses standard macOS keyboard events

---

## Data Retention

Since we don't collect any data, we don't retain any data.

### Your Local Data

You control all data stored on your device:

- **Clear History:** Delete from History view
- **Remove Favorites:** Unfavorite any affirmation
- **Reset Settings:** Change in Settings panel
- **Complete Removal:** Uninstall the app

Uninstalling Spark removes all local data from your Mac.

---

## Children's Privacy

Spark is rated 4+ and is safe for all ages. We do not knowingly collect data from children or adults. We don't collect data from anyone.

---

## International Users

Spark is available worldwide. Since we don't collect any personal data, there are no international data transfer concerns.

---

## Your Rights

Under GDPR, CCPA, and other privacy regulations, you have certain rights regarding your data.

Since we don't collect any personal data, these concerns don't apply:

- **Right to access:** There is no data to access
- **Right to deletion:** There is no data to delete
- **Right to portability:** There is no data to export
- **Right to correct:** There is no data to correct
- **Right to opt-out:** There is nothing to opt out of

Your local data (history, favorites, preferences) is already under your complete control.

---

## Security

While we don't collect data, we still take security seriously:

- **App Sandbox:** Spark runs in Apple's App Sandbox
- **Code Signing:** Verified with Apple Developer certificate
- **Minimal Permissions:** Only requests necessary permissions
- **HTTPS Only:** All network requests use encrypted connections
- **No Third-Party SDKs:** No analytics or tracking frameworks

---

## Changes to This Policy

We will update this privacy policy if our data practices change. We will never start collecting personal data without:

1. Updating this privacy policy
2. Releasing a new version of the app
3. Clearly communicating changes to users

You can always find the latest version at:

- In-app: Settings → Privacy Policy
- Online: [GitHub Repository](https://github.com/logreg-n-coffee/spark/blob/main/docs/PRIVACY_POLICY.md)

---

## Contact Us

If you have questions about this privacy policy or Spark's data practices:

- **Email:** [support@good-spark.com](mailto:support@good-spark.com)
- **GitHub Issues:** [https://github.com/logreg-n-coffee/spark/issues](https://github.com/logreg-n-coffee/spark/issues)
- **Website:** [https://good-spark.com](https://good-spark.com)

We typically respond within 24-48 hours.

---

## Legal Compliance

This privacy policy complies with:

- Apple App Store Review Guidelines
- General Data Protection Regulation (GDPR)
- California Consumer Privacy Act (CCPA)
- Children's Online Privacy Protection Act (COPPA)

---

## Summary

**TL;DR:**

- We don't collect any data
- Everything is stored locally on your Mac
- We can't see your history, favorites, or usage
- Purchases are handled by Apple
- Premium content is delivered via CDN

**Questions?** Contact us anytime.

---

*Privacy Policy Version: 1.0*
*Effective Date: January 15, 2026*
*Last Reviewed: January 15, 2026*
