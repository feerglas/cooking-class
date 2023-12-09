import { ui } from './ui';

export const languages = {
  en: 'English',
  de: 'Deutsch',
};

export const defaultLang = 'en';

export function getLangFromUrl(url) {
  const [, lang] = url.pathname.split('/');

  if (lang in ui) {
    return lang
  }

  return defaultLang;
}

export function useTranslations(lang) {
  return function t(key) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getStaticPathsForPage() {
  const paths = [];

  Object.keys(languages).forEach((language) => {
    paths.push({
      params: {
        locale: language
      }
    });
  })

  return paths;
}