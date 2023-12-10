import { ui } from './ui';

export const languages = {
  de: 'Deutsch',
  en: 'English',
  fr: 'Français',
  it: 'Italiano',
};

export const defaultLang = 'en';

export const getLangFromUrl = (url) => {
  const [, lang] = url.pathname.split('/');

  if (lang in languages) {
    return lang;
  }

  return defaultLang;
};

export const useTranslations = (lang) => (key) => ui[lang][key] || ui[defaultLang][key];

export const getStaticPathsForPage = () => {
  const paths = [];

  Object.keys(languages)
    .forEach((language) => {
      paths.push({
        params: {
          locale: language,
        },
      });
    });

  return paths;
};
