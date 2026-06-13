/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Add real image hosts here once Zabir's photography is hosted
      // { protocol: "https", hostname: "images.example.com" },
    ],
  },
};

module.exports = nextConfig;
