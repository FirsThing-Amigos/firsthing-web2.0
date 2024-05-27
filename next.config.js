/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
        pathname: "/**", // This line ensures all paths from cdn.sanity.io are allowed
      },
    ],
  },
};

module.exports = nextConfig;
