import 'server-only';
import { i18n } from './i18n';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then(module => module.default),
  ua: () => import('./dictionaries/ua.json').then(module => module.default),
};

// export const getDictionary = async locale => dictionaries[locale]();
export const getDictionary = async locale =>
  dictionaries[i18n.locales.includes(locale) ? locale : i18n.defaultLocale]();
