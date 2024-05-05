import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  ns:['translations', 'cv'],
  resources:{
    en: {
        translation: {
            title: 'Multi-language app',
        }
    },
    es: {
        translation: {
            title: 'Aplicación en varios idiomas',
        }
    },
},
});