/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-image-export-optimizer"],
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 1800 * 1000,
  },
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "/:path*",
      },
      {
        source: "/other/:path*",
        destination: "/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
