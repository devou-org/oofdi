/** @type {import('next').NextConfig} */
const nextConfig = {
   productionBrowserSourceMaps: true,
  images: {
    domains: ["lctxyrzuihzeq9gs.public.blob.vercel-storage.com"], // your blob domain
  },
};

export default nextConfig;
