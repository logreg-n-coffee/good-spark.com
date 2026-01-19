'use client';

import ReactMarkdown from 'react-markdown';

interface MarkdownContentProps {
  content: string;
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <ReactMarkdown
      components={{
        h1: ({ children }) => (
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-3">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-gray-100">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 ml-4">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal list-inside space-y-2 mb-6 text-gray-700 dark:text-gray-300 ml-4">
            {children}
          </ol>
        ),
        li: ({ children }) => (
          <li className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {children}
          </li>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-purple-600 dark:text-purple-400 hover:underline font-medium"
          >
            {children}
          </a>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-gray-900 dark:text-white">
            {children}
          </strong>
        ),
        em: ({ children }) => (
          <em className="italic text-gray-700 dark:text-gray-300">
            {children}
          </em>
        ),
        blockquote: ({ children }) => (
          <blockquote className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-l-4 border-purple-500 p-6 rounded-r-xl my-8">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isBlock = className?.includes('language-');
          if (isBlock) {
            return (
              <code className="block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg text-sm font-mono text-gray-800 dark:text-gray-200 overflow-x-auto my-4">
                {children}
              </code>
            );
          }
          return (
            <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono text-gray-800 dark:text-gray-200">
              {children}
            </code>
          );
        },
        pre: ({ children }) => (
          <pre className="my-4">
            {children}
          </pre>
        ),
        hr: () => (
          <hr className="my-10 border-gray-200 dark:border-gray-700" />
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto my-6">
            <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-gray-50 dark:bg-gray-800">
            {children}
          </thead>
        ),
        tbody: ({ children }) => (
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {children}
          </tbody>
        ),
        tr: ({ children }) => (
          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            {children}
          </tr>
        ),
        th: ({ children }) => (
          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">
            {children}
          </th>
        ),
        td: ({ children }) => (
          <td className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
            {children}
          </td>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
