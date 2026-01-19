import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Spark",
  description: "Spark's privacy policy - we collect zero data. No analytics, no tracking, no accounts.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Spark
              </span>
            </a>
            <a
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition"
            >
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-a:text-purple-600 dark:prose-a:text-purple-400 prose-strong:text-gray-900 dark:prose-strong:text-white prose-code:text-gray-800 dark:prose-code:text-gray-200">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Privacy Policy for Spark
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">Last Updated: January 15, 2026</p>

          <h2>Overview</h2>
          <p>
            Spark is committed to protecting your privacy. This privacy policy explains how we handle data in our macOS menu bar application.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 p-8 rounded-2xl my-8 not-prose">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Privacy Promise</h3>
            <p className="text-xl font-semibold text-purple-800 dark:text-purple-300">
              Spark does NOT collect, store, or transmit any personal data.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-4">
              We believe your affirmations and usage patterns are private. We have built Spark with privacy as a core principle.
            </p>
          </div>

          <h2>What We Don't Collect</h2>
          <ul className="space-y-2">
            <li>❌ No user accounts or registration</li>
            <li>❌ No analytics or tracking</li>
            <li>❌ No user identification</li>
            <li>❌ No location data</li>
            <li>❌ No device information</li>
            <li>❌ No usage statistics</li>
            <li>❌ No email addresses</li>
            <li>❌ No names or contact information</li>
            <li>❌ No IP addresses</li>
            <li>❌ No crash reports (unless you explicitly send them)</li>
          </ul>

          <h2>Data Storage</h2>

          <h3>Local Storage Only</h3>
          <p>All data is stored locally on your Mac using standard macOS APIs:</p>
          <ul>
            <li><strong>User Preferences:</strong> Stored in macOS UserDefaults</li>
            <li><strong>Affirmation History:</strong> Stored locally on your device</li>
            <li><strong>Favorite Affirmations:</strong> Stored locally on your device</li>
            <li><strong>Premium Content Cache:</strong> Stored locally on your device</li>
            <li><strong>Purchase Status:</strong> Managed by Apple's StoreKit</li>
          </ul>
          <p className="font-semibold">We have zero access to any of this data.</p>

          <h3>No Cloud Sync</h3>
          <p>
            Spark does not sync your data to any cloud service. Your history, favorites, and preferences exist only on your Mac.
          </p>

          <h2>In-App Purchases</h2>
          <p>Spark offers a premium unlock for additional tone packs.</p>

          <h3>What Apple Handles</h3>
          <ul>
            <li>Payment processing</li>
            <li>Purchase receipt validation</li>
            <li>Transaction history</li>
            <li>Restore purchases functionality</li>
          </ul>

          <h3>What We Know</h3>
          <p>
            We only know that a purchase was made (via Apple's StoreKit API). We do NOT receive:
          </p>
          <ul>
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your payment information</li>
            <li>Any personally identifiable information</li>
          </ul>
          <p>
            All purchase data is handled exclusively by Apple according to their{" "}
            <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
              Apple Privacy Policy
            </a>
            .
          </p>

          <h2>Content Updates</h2>
          <p>
            Spark fetches premium content updates from our servers when you have purchased the premium unlock.
          </p>

          <h3>Content Delivery</h3>
          <ul>
            <li>Premium affirmations are served via GitHub CDN</li>
            <li>No user identification is sent with requests</li>
            <li>No authentication tokens are required</li>
            <li>No cookies are used</li>
            <li>No tracking parameters are included</li>
          </ul>

          <h3>What Our Servers See</h3>
          <p>When fetching premium content, standard HTTP requests are made to:</p>
          <ul>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">https://raw.githubusercontent.com/logreg-n-coffee/spark/</code>
            </li>
          </ul>
          <p>These requests may contain:</p>
          <ul>
            <li>HTTP headers (standard browser information)</li>
            <li>ETag for caching optimization</li>
          </ul>
          <p>These requests do NOT contain:</p>
          <ul>
            <li>Any personal information</li>
            <li>Any device identifiers</li>
            <li>Any user identifiers</li>
            <li>Any usage data</li>
          </ul>
          <p>
            <strong>GitHub's CDN may log standard HTTP access logs according to their{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
              GitHub Privacy Statement
            </a>
            .</strong>
          </p>

          <h2>Third-Party Services</h2>
          <p>Spark uses the following third-party services:</p>

          <h3>1. Apple StoreKit</h3>
          <ul>
            <li><strong>Purpose:</strong> In-app purchase management</li>
            <li><strong>Data Processed:</strong> Purchase transactions (handled by Apple)</li>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">
                Apple Privacy Policy
              </a>
            </li>
          </ul>

          <h3>2. GitHub CDN</h3>
          <ul>
            <li><strong>Purpose:</strong> Premium content delivery</li>
            <li><strong>Data Processed:</strong> Standard HTTP requests for content files</li>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noopener noreferrer">
                GitHub Privacy Statement
              </a>
            </li>
          </ul>

          <h3>3. Vercel Edge Functions (Optional)</h3>
          <ul>
            <li><strong>Purpose:</strong> Dynamic content catalog (future feature)</li>
            <li><strong>Data Processed:</strong> API requests for content metadata</li>
            <li>
              <strong>Privacy Policy:</strong>{" "}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
                Vercel Privacy Policy
              </a>
            </li>
          </ul>
          <p className="font-semibold">None of these services receive personal user data from Spark.</p>

          <h2>Permissions</h2>
          <p>Spark requires the following macOS permissions:</p>

          <h3>Network Access</h3>
          <ul>
            <li><strong>Purpose:</strong> Download premium content updates</li>
            <li><strong>Frequency:</strong> Once every 24 hours (if premium purchased)</li>
            <li><strong>Can be blocked:</strong> Yes, app works offline with cached content</li>
          </ul>

          <h3>Notifications (Optional)</h3>
          <ul>
            <li><strong>Purpose:</strong> Daily affirmation reminders (if enabled by user)</li>
            <li><strong>Controlled by:</strong> macOS System Preferences → Notifications</li>
            <li><strong>Data sent:</strong> None (local notifications only)</li>
          </ul>

          <h3>Accessibility (Not Required)</h3>
          <ul>
            <li>Spark does NOT require accessibility permissions</li>
            <li>Global hotkey uses standard macOS keyboard events</li>
          </ul>

          <h2>Data Retention</h2>
          <p>Since we don't collect any data, we don't retain any data.</p>

          <h3>Your Local Data</h3>
          <p>You control all data stored on your device:</p>
          <ul>
            <li><strong>Clear History:</strong> Delete from History view</li>
            <li><strong>Remove Favorites:</strong> Unfavorite any affirmation</li>
            <li><strong>Reset Settings:</strong> Change in Settings panel</li>
            <li><strong>Complete Removal:</strong> Uninstall the app</li>
          </ul>
          <p>Uninstalling Spark removes all local data from your Mac.</p>

          <h2>Children's Privacy</h2>
          <p>
            Spark is rated 4+ and is safe for all ages. We do not knowingly collect data from children or adults. We don't collect data from anyone.
          </p>

          <h2>International Users</h2>
          <p>
            Spark is available worldwide. Since we don't collect any personal data, there are no international data transfer concerns.
          </p>

          <h2>Your Rights</h2>
          <p>
            Under GDPR, CCPA, and other privacy regulations, you have certain rights regarding your data.
          </p>
          <p className="font-semibold">Since we don't collect any personal data, these concerns don't apply:</p>
          <ul>
            <li>✅ Right to access: There is no data to access</li>
            <li>✅ Right to deletion: There is no data to delete</li>
            <li>✅ Right to portability: There is no data to export</li>
            <li>✅ Right to correct: There is no data to correct</li>
            <li>✅ Right to opt-out: There is nothing to opt out of</li>
          </ul>
          <p>Your local data (history, favorites, preferences) is already under your complete control.</p>

          <h2>Security</h2>
          <p>While we don't collect data, we still take security seriously:</p>
          <ul>
            <li>✅ App Sandbox: Spark runs in Apple's App Sandbox</li>
            <li>✅ Code Signing: Verified with Apple Developer certificate</li>
            <li>✅ Minimal Permissions: Only requests necessary permissions</li>
            <li>✅ HTTPS Only: All network requests use encrypted connections</li>
            <li>✅ No Third-Party SDKs: No analytics or tracking frameworks</li>
          </ul>

          <h2>Changes to This Policy</h2>
          <p>
            We will update this privacy policy if our data practices change. We will never start collecting personal data without:
          </p>
          <ol>
            <li>Updating this privacy policy</li>
            <li>Releasing a new version of the app</li>
            <li>Clearly communicating changes to users</li>
          </ol>
          <p>You can always find the latest version at:</p>
          <ul>
            <li>In-app: Settings → Privacy Policy</li>
            <li>
              Online:{" "}
              <a href="https://github.com/logreg-n-coffee/spark/blob/main/docs/PRIVACY_POLICY.md" target="_blank" rel="noopener noreferrer">
                GitHub Repository
              </a>
            </li>
          </ul>

          <h2>Open Source Transparency</h2>
          <p>Spark's source code is available on GitHub:</p>
          <ul>
            <li>
              Repository:{" "}
              <a href="https://github.com/logreg-n-coffee/spark" target="_blank" rel="noopener noreferrer">
                https://github.com/logreg-n-coffee/spark
              </a>
            </li>
            <li>License: MIT</li>
          </ul>
          <p>You can verify our privacy claims by reviewing the source code yourself.</p>

          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy or Spark's data practices:</p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@good-spark.com">support@good-spark.com</a>
            </li>
            <li>
              <strong>GitHub Issues:</strong>{" "}
              <a href="https://github.com/logreg-n-coffee/spark/issues" target="_blank" rel="noopener noreferrer">
                https://github.com/logreg-n-coffee/spark/issues
              </a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a href="https://good-spark.com">https://good-spark.com</a>
            </li>
          </ul>
          <p>We typically respond within 24-48 hours.</p>

          <h2>Legal Compliance</h2>
          <p>This privacy policy complies with:</p>
          <ul>
            <li>Apple App Store Review Guidelines</li>
            <li>General Data Protection Regulation (GDPR)</li>
            <li>California Consumer Privacy Act (CCPA)</li>
            <li>Children's Online Privacy Protection Act (COPPA)</li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/30 p-8 rounded-2xl my-8 not-prose">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Summary</h3>
            <p className="font-semibold mb-4 text-gray-900 dark:text-white">TL;DR:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>✅ We don't collect any data</li>
              <li>✅ Everything is stored locally on your Mac</li>
              <li>✅ We can't see your history, favorites, or usage</li>
              <li>✅ Purchases are handled by Apple</li>
              <li>✅ Premium content is delivered via CDN</li>
              <li>✅ You can verify this in our open-source code</li>
            </ul>
            <p className="mt-6 font-semibold text-gray-900 dark:text-white">
              <strong>Questions?</strong> Contact us anytime.
            </p>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12 text-sm text-gray-500 dark:text-gray-400">
            <p>Privacy Policy Version: 1.0</p>
            <p>Effective Date: January 15, 2026</p>
            <p>Last Reviewed: January 15, 2026</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-2xl">✨</span>
            <span className="text-xl font-bold">Spark</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">Daily affirmations, instant spark.</p>
          <p className="text-gray-500 text-sm">
            &copy; 2026 Spark. Built with ❤️ using SwiftUI. Open source under MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}
