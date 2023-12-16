import { defineConfig } from 'astro/config';
import {
  defaultLang,
  languages,
} from './src/i18n/utils';

export default defineConfig({
  i18n: {
    defaultLocale: defaultLang,
    locales: Object.keys(languages),
    routing: {
      prefixDefaultLocale: true,
    },
  },
  scopedStyleStrategy: 'class',
});
