/** @type {import('next').NextConfig} */
const withYAML = require('next-yaml');

const nextConfig = {
  reactStrictMode: true,

  pwa: {
    dest: 'public',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = withYAML(nextConfig);
