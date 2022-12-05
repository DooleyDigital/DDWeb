/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {loader:"akamai",
        path:"/",
  },
  basePath: "/nextjs-page",
  assetPrefix: "/nextjs-page"
};

module.exports = nextConfig
