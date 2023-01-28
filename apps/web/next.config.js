/* eslint-disable @typescript-eslint/no-var-requires */

// https://github.com/vercel/next.js/issues/5602
const withTM = require('next-transpile-modules')([
  '@dotoriham/styled',
  '@dotoriham/ui',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,

  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
