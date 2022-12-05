/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {loader:"akamai",
        path:" ",
  },
  basePath: "/DDWeb",
  assetPrefix: "/DDWeb"
};

module.exports = nextConfig
