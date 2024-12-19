import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "as1.ftcdn.net",
        pathname: "/**", // Allows all paths under this hostname
      },
    ],
  },
};

export default nextConfig;
