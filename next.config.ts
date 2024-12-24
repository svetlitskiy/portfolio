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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true, // Позволяет передавать width и height как props
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
