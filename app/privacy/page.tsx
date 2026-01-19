import type { Metadata } from "next";
import { Navigation } from '../components/Navigation';
import { MarkdownContent } from '../components/MarkdownContent';
import fs from 'fs';
import path from 'path';

export const metadata: Metadata = {
  title: "Privacy Policy - Spark",
  description: "Spark's privacy policy - we collect zero data. No analytics, no tracking, no accounts.",
};

function getPrivacyContent() {
  const filePath = path.join(process.cwd(), 'content', 'privacy.md');
  return fs.readFileSync(filePath, 'utf8');
}

export default function PrivacyPolicy() {
  const content = getPrivacyContent();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation variant="simple" />

      {/* Content */}
      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 sm:p-12">
            <MarkdownContent content={content} />
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
            &copy; 2026 Spark. Built with love using SwiftUI. Open source under MIT License.
          </p>
        </div>
      </footer>
    </div>
  );
}
