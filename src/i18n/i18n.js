import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const locales = '/locales' || import.meta.env.VITE_LOCALES

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    lng:  'es',
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    ns:['translations', 'cv'],
    backend: {
      loadPath: `${locales}/{{lng}}/{{ns}}.json`,
    },
  });
