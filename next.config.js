/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'files.stripe.com',
      's3-alpha-sig.figma.com',
    ],
  },
}
module.exports = nextConfig