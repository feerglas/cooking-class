import { defineConfig } from 'astro/config';
import { languages } from './src/i18n/utils';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
    }
  },
});
