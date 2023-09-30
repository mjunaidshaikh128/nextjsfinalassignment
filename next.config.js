/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        //   port: '',
        //   pathname: '/account123/**',
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        //   port: '',
        //   pathname: '/account123/**',
        },
      ],
    },
  }