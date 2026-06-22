import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wordpress-1400653-5323841.cloudwaysapps.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
