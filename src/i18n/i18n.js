import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const getLangFromUrl = () => {
    const url = window.location.pathname;
    const lang = url.split('/')[1]; // Asumiendo que el idioma está en la primera parte de la URL
    return lang === 'es' || lang === 'en' ? lang : 'en'; // Fallback a 'en'
  };
  

i18n.use(initReactI18next).init({
  lng:  getLangFromUrl(),
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