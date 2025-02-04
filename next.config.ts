import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  trailingSlash: false,

  async redirects() {
    return [
      {
        source: "/",
        destination: "/landing-page", // default route
        permanent: false, // Use true for a 301 permanent redirect
      },
    ];
  },
};

export default nextConfig;
