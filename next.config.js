/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverComponentsExternalPackages: ["@prisma/client","bcryptjs"]
        
    },
    images:{
        domains:['lh3.googleusercontent.com','files.edgestore.dev']
    }
}

module.exports = nextConfig
