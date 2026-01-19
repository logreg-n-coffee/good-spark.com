import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // Enable React strict mode for better development warnings
  reactStrictMode: true,

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
