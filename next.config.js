/** @type {import('next').NextConfig} */
module.exports = {
  basePath: '/safe-csr',
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: [],
  },
  swcMinify: true,
}
