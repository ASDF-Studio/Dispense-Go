/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  staticPageGenerationTimeout: 1000,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.amazonaws.com",
        port: "",
        // pathname: "www-inside-design",
      },
      {
        protocol: "https",
        hostname: "retailminded.com",
        port: "",
        // pathname: "www-inside-design",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        // pathname: "www-inside-design",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        // pathname: "www-inside-design",
      },
      {
        protocol: "https",
        hostname: "shopcannabisnl.com",
        port: "",
        // pathname: "www-inside-design",
      },
      
    ],
  },
};

module.exports = nextConfig;
