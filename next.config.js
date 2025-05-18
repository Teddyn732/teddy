/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      "replicate.delivery", // For Stable Diffusion generated images
      "craftvillages.storage.googleapis.com", // For your own storage
      "res.cloudinary.com", // If using Cloudinary
    ],
    unoptimized: true,
  },
  experimental: {
    serverActions: true,
  },
  env: {
    NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
}

module.exports = nextConfig
