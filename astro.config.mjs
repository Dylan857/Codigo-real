// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// /css, /html y /js solo redirigen a la primera lección (ver vercel.json),
// así que no deben aparecer en el sitemap.
const REDIRECT_ONLY = /^https:\/\/codigoreal\.lat\/(css|html|js)\/?$/;

// https://astro.build/config
export default defineConfig({
  site: 'https://codigoreal.lat',
  trailingSlash: 'never',
  integrations: [sitemap({ filter: (page) => !REDIRECT_ONLY.test(page) })],
  vite: {
    plugins: [tailwindcss()]
  }
});
