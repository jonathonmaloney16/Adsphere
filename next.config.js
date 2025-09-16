/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["localhost", "yourdomain.com"], // add domains for hosted images
  },

  eslint: {
    ignoreDuringBuilds: true, // avoids Netlify deploy ESLint errors
  },

  experimental: {
    optimizeCss: true,
  },
};

module.exports = nextConfig;
