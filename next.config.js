/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  compiler: { styledComponents: true },
  reactStrictMode: false,
  images: {
    domains: ["image.tmdb.org"],
  },
};

module.exports = nextConfig;
