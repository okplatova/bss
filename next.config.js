/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 180 * 1000,
  },
};

module.exports = nextConfig;
