import type { NextConfig } from 'next';

console.log('NEXT_PUBLIC_BASE_PATH:', process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  trailingSlash: true,
  distDir: 'dist',
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  publicRuntimeConfig: {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
