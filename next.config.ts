import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // Recommended for Netlify
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Enable experimental features if needed
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};

export default nextConfig;