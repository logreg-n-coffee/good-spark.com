export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">✨</span>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Spark
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
              <a href="#tone-packs" className="text-gray-700 hover:text-purple-600 transition">Tone Packs</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
              <a href="/privacy" className="text-gray-700 hover:text-purple-600 transition">Privacy</a>
              <a
                href="#download"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <span className="text-8xl">✨</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Daily Affirmations in Your Menu Bar
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your daily dose of positivity, always visible, never intrusive. Privacy-first affirmations delivered right where you need them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#download"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition transform hover:scale-105"
            >
              Download for macOS
            </a>
            <a
              href="https://github.com/logreg-n-coffee/vibecheck"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition"
            >
              View on GitHub
            </a>
          </div>
          <p className="text-sm text-gray-500">
            Requires macOS 13.0 (Ventura) or later • 10 MB • Free with Premium Unlock
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Why You'll Love Spark</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Designed to be unobtrusive, beautiful, and privacy-first. Every feature serves your daily inspiration journey.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { emoji: "✨", title: "Always Accessible", desc: "Lives in your menu bar, one click away" },
              { emoji: "💜", title: "Beautiful UI", desc: "Gorgeous gradient popover design with smooth animations" },
              { emoji: "🎲", title: "200+ Affirmations", desc: "40 free + 160+ premium affirmations across 12 tone packs" },
              { emoji: "⌨️", title: "Global Hotkey", desc: "Quick access with ⌘⇧V to summon instant inspiration" },
              { emoji: "📊", title: "Track Progress", desc: "See your daily count and maintain your streak" },
              { emoji: "❤️", title: "Remember Favorites", desc: "Save affirmations that resonate with you" },
              { emoji: "📜", title: "View History", desc: "Review past 30 days of affirmations" },
              { emoji: "📤", title: "Easy Sharing", desc: "Share via Messages, Mail, Notes & more" },
              { emoji: "🔒", title: "Privacy First", desc: "Zero data collection, works 100% offline" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tone Packs Section */}
      <section id="tone-packs" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">12 Unique Tone Packs</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Choose affirmations that match your mood and moment. From wholesome to chaotic, zen to productive.
          </p>

          {/* Free Packs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mr-3">FREE</span>
              4 Tone Packs • 40 Affirmations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "✨", name: "Wholesome", desc: "Classic positive affirmations", sample: "You are worthy of love and belonging." },
                { emoji: "💅", name: "Gay Chaos", desc: "Chaotic positive energy", sample: "Bestie, you're absolutely THRIVING right now." },
                { emoji: "🧘", name: "Calm AF", desc: "Zen and peaceful vibes", sample: "You are exactly where you need to be." },
                { emoji: "🧑‍💻", name: "Tech Bro", desc: "Engineering motivation", sample: "Time to ship some legendary code." },
              ].map((pack, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border-2 border-purple-200 hover:shadow-xl transition">
                  <div className="text-4xl mb-3">{pack.emoji}</div>
                  <h4 className="text-xl font-bold mb-2">{pack.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{pack.desc}</p>
                  <p className="text-sm italic text-gray-500 border-l-4 border-purple-300 pl-3">"{pack.sample}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Packs */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center justify-center">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold mr-3">PREMIUM</span>
              8 Tone Packs • 160+ Affirmations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: "💪", name: "Motivational", desc: "Power through challenges" },
                { emoji: "💖", name: "Self-Love", desc: "Embrace your worth" },
                { emoji: "🎯", name: "Productivity", desc: "Get things done" },
                { emoji: "🌿", name: "Mindfulness", desc: "Present moment awareness" },
                { emoji: "😂", name: "Humor", desc: "Lighthearted positivity" },
                { emoji: "🌸", name: "Gratitude", desc: "Appreciate the moment" },
                { emoji: "🎨", name: "Creative Flow", desc: "Unlock your creativity" },
                { emoji: "🌙", name: "Evening Wind-Down", desc: "Peaceful evening vibes" },
              ].map((pack, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-purple-300 hover:shadow-xl transition">
                  <div className="text-4xl mb-3">{pack.emoji}</div>
                  <h4 className="text-xl font-bold mb-2">{pack.name}</h4>
                  <p className="text-gray-600 text-sm">{pack.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Simple, Fair Pricing</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Start free with 40 affirmations. Upgrade to premium for 5x more content at less than the cost of a coffee.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition">
              <h3 className="text-2xl font-bold mb-2">Free Forever</h3>
              <div className="text-5xl font-bold mb-6">$0</div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>40 unique affirmations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>4 tone packs (Wholesome, Gay Chaos, Calm AF, Tech Bro)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>All core features (hotkey, favorites, history, share)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Zero data collection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Works 100% offline</span>
                </li>
              </ul>
              <a
                href="#download"
                className="block text-center border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
              >
                Download Free
              </a>
            </div>

            {/* Premium Tier */}
            <div className="p-8 rounded-2xl border-2 border-purple-600 bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                BEST VALUE
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium Unlock</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold">$0.99</span>
                <span className="text-gray-600 ml-2">one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span className="font-semibold">Everything in Free, plus:</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>160+ premium affirmations (5x more content)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>8 additional tone packs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Automatic content updates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Lifetime access (no subscription)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">✓</span>
                  <span>Support indie development</span>
                </li>
              </ul>
              <a
                href="#download"
                className="block text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition"
              >
                Get Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">🔒</div>
          <h2 className="text-4xl font-bold mb-6">Your Privacy Matters</h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            Spark collects <span className="font-bold text-purple-600">ZERO</span> data. No analytics, no tracking, no accounts.
            Your affirmation history and favorites are stored locally on your device only.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-white rounded-xl">
              <div className="text-3xl mb-2">❌</div>
              <p className="font-semibold">No User Accounts</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="text-3xl mb-2">❌</div>
              <p className="font-semibold">No Analytics</p>
            </div>
            <div className="p-6 bg-white rounded-xl">
              <div className="text-3xl mb-2">❌</div>
              <p className="font-semibold">No Tracking</p>
            </div>
          </div>
          <a
            href="/privacy"
            className="inline-block border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition"
          >
            Read Full Privacy Policy
          </a>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Spark Your Day?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Download Spark for macOS and start your journey to daily inspiration.
          </p>
          <div className="mb-6">
            <a
              href="https://apps.apple.com/app/spark"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-full text-xl font-semibold hover:shadow-2xl transition transform hover:scale-105"
            >
              Download on the App Store
            </a>
          </div>
          <p className="text-sm text-gray-500 mb-8">
            macOS 13.0 (Ventura) or later • 10 MB • Free with Premium Unlock
          </p>
          <p className="text-sm text-gray-500">
            Not on the App Store yet? <a href="https://github.com/logreg-n-coffee/vibecheck" className="text-purple-600 hover:underline" target="_blank" rel="noopener noreferrer">View source code on GitHub</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">✨</span>
                <span className="text-xl font-bold">Spark</span>
              </div>
              <p className="text-gray-400 text-sm">
                Daily affirmations, instant spark.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#tone-packs" className="hover:text-white transition">Tone Packs</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#download" className="hover:text-white transition">Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="https://github.com/logreg-n-coffee/vibecheck" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="mailto:support@good-spark.com" className="hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://github.com/logreg-n-coffee/vibecheck/issues" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">Report Issues</a></li>
                <li><a href="mailto:support@good-spark.com" className="hover:text-white transition">Email Us</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 Spark. Built with ❤️ using SwiftUI. Open source under MIT License.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
