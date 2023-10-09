/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
     domains: ["cdn.pixabay.com","images.pexels.com","png.pngtree.com", "www.laptoprepairworld.com","https://images.samsung.com","https://www.lg.com","www.google.com"],
     deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
 
}

module.exports = nextConfig
