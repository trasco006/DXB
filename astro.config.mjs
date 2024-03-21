import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://igame.by',
  integrations: [sitemap(), tailwind()],
  compressHTML: true,
  i18n: {
    defaultLocale: "ru",
    locales: ["en", "ru"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});