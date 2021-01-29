import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enFile from '../../../../../config/locales/views.en.yml';
import zhFile from '../../../../../config/locales/views.zh-CN.yml';

const resources = {
  en: {
    translation: enFile.en.views,
  },
  'zh-CN': {
    translation: zhFile['zh-CN'].views,
  },
};

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,
    supportedLngs: ['en', 'zh-CN'],
    load: 'currentOnly',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
