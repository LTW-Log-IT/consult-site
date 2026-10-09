// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages custom subdomain: https://consult.leadthewaylogistics.info
// `base` stays `/` so CSS and links resolve from the domain root.
export default defineConfig({
  site: 'https://consult.leadthewaylogistics.info',
  base: '/',
  output: 'static',
  outDir: 'dist',
  integrations: [sitemap({ filter: (page) => !page.includes('/internal/') })],
  redirects: { '/method': '/process', '/engagements': '/services', '/proof': '/about' },
  vite: {
    plugins: [tailwindcss()],
  },
});
