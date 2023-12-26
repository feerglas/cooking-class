import { defineConfig } from 'astro/config';
import {
  defaultLang,
  languages,
} from './src/i18n/utils';
import solidJs from '@astrojs/solid-js';

export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [solidJs()],
  scopedStyleStrategy: 'class',
});
