/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
          port: '',
          pathname: '/**', // Allows all Unsplash image paths
        },
        {
          protocol: 'https',
          hostname: 'nodejs.org',
          port: '',
          pathname: '/**', // Allows all paths under nodejs.org
        },
        {
            protocol: 'https',
            hostname: 'images.pexels.com',
            port: '',
            pathname: '/**', // Allows all Pexels image paths
          },
      ],
    },
  };
  
  export default nextConfig;
  