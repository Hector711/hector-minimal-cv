import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from 'i18next-http-backend';

const locales = '../../public/locales' || import.meta.env.VITE_LOCALES

export const getLangFromUrl = () => {
  const url = window.location.pathname;
  const lang = url.split('/')[1];
  return lang === 'es' || lang === 'en' ? lang : 'en';
};
console.log(getLangFromUrl())

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng:  getLangFromUrl(),
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    ns:['translations', 'cv'],
    backend: {
      loadPath: `${locales}/{{lng}}/{{ns}}.json`,
    },
    debug: true,
  });
