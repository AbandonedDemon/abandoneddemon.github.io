import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://abandoneddemon.github.io',
  base: '/gfx-guides',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  build: {
    assets: 'assets',
  },
});
