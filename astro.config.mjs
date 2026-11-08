// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User site: https://gadivalr.github.io (repo gadivalr.github.io)
  // If you switch to a project site, change `site` and set `base: '/<repo>'`.
  site: 'https://gadivalr.github.io',

  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // '/' → Español (default), '/en/' → English
      prefixDefaultLocale: false,
    },
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es',
          en: 'en',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    server: {
      // Permite probar en dev a través de túneles (localtunnel, etc.).
      // No afecta al build de producción ni a GitHub Pages.
      allowedHosts: ['.loca.lt', '.trycloudflare.com'],
    },
  },
});
