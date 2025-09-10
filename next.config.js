/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Needed for static export with Netlify
  },
  output: "export", // Ensures `next export` works properly
};

module.exports = nextConfig;
