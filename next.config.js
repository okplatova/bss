/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
