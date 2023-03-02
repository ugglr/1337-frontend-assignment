/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.1337co.de",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
