import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  output: "export",
  basePath: "/aqn-website",
  assetPrefix: "/aqn-website/",
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
};

module.exports = nextConfig;
