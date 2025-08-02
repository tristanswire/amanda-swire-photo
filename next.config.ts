import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // for static site export
  reactStrictMode: true,
  trailingSlash: true, // ensures trailing slash in URLs for Netlify compatibility
  images: {
    unoptimized: true, // disables Next.js image optimization (required for static export)
  },
};

export default nextConfig;
