import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  output: "export",
  basePath: "/aqn-website",
  assetPrefix: "/aqn-website/",
};

export default nextConfig;
