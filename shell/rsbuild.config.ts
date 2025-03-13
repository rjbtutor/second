import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

const isDev = process.env.NODE_ENV === 'development';
const domain = process.env.PRODUCTION_DOMAIN;

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        gallery: isDev
          ? 'gallery@http://localhost:3000/mf-manifest.json'
          : `gallery@${domain}gallery/latest/mf-manifest.json`,
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  server: {
    port: 2000,
    base: isDev ? '/' : '/shell/latest/',
  },
});
