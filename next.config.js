/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: ".",
};

module.exports = {
  nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.intra.42.fr",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
