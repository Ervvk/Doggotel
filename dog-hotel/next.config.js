/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@import "src/sass/index.scss";`,
  },
};

module.exports = nextConfig;
