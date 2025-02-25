/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['us-west-2.graphassets.com', 'media.graphassets.com'],
    //domains: ['us-west-2.graphassets.com'],
    //domains: ['media.graphassets.com'],
  },
}

module.exports = nextConfig
