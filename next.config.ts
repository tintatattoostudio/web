import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // TODO: Replace with actual API domain for production
      },
    ],
  },
};

export default nextConfig;
