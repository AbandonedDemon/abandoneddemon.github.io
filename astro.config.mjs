import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://abandoneddemon.github.io',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  build: {
    assets: 'assets',
  },
});
