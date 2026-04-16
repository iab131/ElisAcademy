import type { NextConfig } from "next";

const originalEmitWarning = process.emitWarning;
process.emitWarning = function(warning: any, ...args: any[]) {
  if (warning && warning.name === 'DeprecationWarning' && warning.message && warning.message.includes('url.parse')) {
    return;
  }
  return originalEmitWarning.call(process, warning, ...args);
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
