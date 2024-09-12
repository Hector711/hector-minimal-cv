import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import supabase from '@/api/supabase.js';

export default i18n.use(initReactI18next).init({
  resources: {},
  lng: 'ES',
  fallbackLng: 'ES',
  ns: ['basics', 'education', 'languages', 'profiles', 'projects', 'work'],
  interpolation: {
    escapeValue: false,
  },
});

export async function loadTranslations() {
  const { data: dataSupabase, error } = await supabase.rpc('get_all_data');

  if (error) {
    console.error('Error al ejecutar la función:', error);
    return;
  }

  const i18nResources = {
    EN: {
      translations: {
        reservar_llamada: 'Book a call',
        about_me: 'About me',
        projects: 'Projects',
        education: 'Education',
        languages: 'Languages',
        work: 'Work Experience',
        web_page: 'Visit website',
        at: 'at',
      },
      basics: (({ id, lng, ...rest }) => rest)(dataSupabase.basics.find(item => item.lng === 'EN')),
      education: dataSupabase.education.filter(item => item.lng === 'EN').map(({ id, lng, ...rest }) => rest),
      languages: dataSupabase.languages.filter(item => item.lng === 'EN').map(({ id, lng, ...rest }) => rest),
      profiles: dataSupabase.profiles.filter(item => item.lng === 'EN').map(({ id, lng, ...rest }) => rest),
      projects: dataSupabase.projects.filter(item => item.lng === 'EN').map(({ id, lng, ...rest }) => rest),
      work: dataSupabase.work.filter(item => item.lng === 'EN').map(({ id, lng, ...rest }) => rest),
    },
    ES: {
      translations: {
        reservar_llamada: 'Reservar Llamada',
        about_me: 'Sobre mí',
        projects: 'Proyectos',
        education: 'Formación',
        languages: 'Idiomas',
        work: 'Experiencia Laboral',
        web_page: 'Página web',
        at: 'en',
      },
      basics: (({ id, lng, ...rest }) => rest)(dataSupabase.basics.find(item => item.lng === 'ES')),
      education: dataSupabase.education.filter(item => item.lng === 'ES').map(({ id, lng, ...rest }) => rest),
      languages: dataSupabase.languages.filter(item => item.lng === 'ES').map(({ id, lng, ...rest }) => rest),
      profiles: dataSupabase.profiles.filter(item => item.lng === 'ES').map(({ id, lng, ...rest }) => rest),
      projects: dataSupabase.projects.filter(item => item.lng === 'ES').map(({ id, lng, ...rest }) => rest),
      work: dataSupabase.work.filter(item => item.lng === 'ES').map(({ id, lng, ...rest }) => rest),
    }
  };

  Object.keys(i18nResources).forEach(lang => {
    Object.keys(i18nResources[lang]).forEach(ns => {
      i18n.addResourceBundle(lang, ns, i18nResources[lang][ns], true, true);
    });
  });

}
