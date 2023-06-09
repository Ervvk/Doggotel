/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/sass/index.scss";`,
  },
  env: {
    MAPS: process.env.MAPBOX_TOKEN,
  },
};

module.exports = nextConfig;
