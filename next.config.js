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
          }
        ],
      },
}

module.exports = nextConfig
