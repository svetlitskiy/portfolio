import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  distDir: "dist",
  output: 'export',
  // i18n: {
  //   locales: ['en', 'pt', 'ru'],
  //   defaultLocale: 'en',
  //   localeDetection: false,
  // }
  /* config options here */
};

export default nextConfig;
