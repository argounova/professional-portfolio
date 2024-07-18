/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cwp-professional-portfolio.s3.amazonaws.com'
      }
    ]
  }
}

module.exports = nextConfig
