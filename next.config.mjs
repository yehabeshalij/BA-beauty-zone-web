/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["res.cloudinary.com", "lh3.googleusercontent.com", "127.0.0.1"],

    unoptimized: true,
  },
};

export default nextConfig;
