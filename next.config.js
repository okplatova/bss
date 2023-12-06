/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    largePageDataBytes: 180 * 1000,
  },
};

module.exports = nextConfig;
