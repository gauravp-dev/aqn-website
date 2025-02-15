import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,
  output: "export",
  basePath: "/aqn-website",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing-page",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
