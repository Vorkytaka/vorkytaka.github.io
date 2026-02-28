import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://vorky.io',
  redirects: {
    '/tg': 'https://t.me/vorkytaka',
    '/tg_p': 'https://t.me/vorky'
  },
  integrations: [
    sitemap()
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
