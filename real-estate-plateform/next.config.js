/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: ["@prisma/client","bcryptjs"]
        
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
            pathname: '**',
          },
          {
            protocol: "https",
            hostname: 'files.edgestore.dev',
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: 'https://swiperjs.com/demos/images/nature-1.jpg',
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: 'https://swiperjs.com/demos/images/nature-2.jpg',
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: 'https://swiperjs.com/demos/images/nature-3.jpg',
            pathname: "**"
          },
          {
            protocol: "https",
            hostname: 'https://swiperjs.com/demos/images/nature-4.jpg',
            pathname: "**"
          }
        ],
      },
}

module.exports = nextConfig
