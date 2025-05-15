/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sunrise.ch',
      },
    ],
    },
};

export default nextConfig;
