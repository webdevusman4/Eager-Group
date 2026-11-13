/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  allowedDevOrigins: ['*.e2b.app', 'e2b.app'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // The /v3 preview became the main site at "/".
    return [{ source: '/v3/:path*', destination: '/', permanent: false }];
  },
};

export default nextConfig;
