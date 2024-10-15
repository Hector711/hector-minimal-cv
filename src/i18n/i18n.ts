import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import supabase from '@/api/supabase.ts';

interface DataItem {
  id: any;
  dni: string;
  lng: 'EN' | 'ES';
  city: string;
  name: string;
}

type ResourceKeys = 'translations' | 'basics' | 'education' | 'languages' | 'profiles' | 'projects' | 'work';

type LanguageKeys = 'EN' | 'ES';

interface SupabaseData {
  basics: DataItem[];
  education: DataItem[];
  languages: DataItem[];
  profiles: DataItem[];
  projects: DataItem[];
  work: DataItem[];
}

export default i18n.use(initReactI18next).init({
  resources: {},
  lng: 'ES',
  fallbackLng: 'ES',
  ns: ['basics', 'education', 'languages', 'profiles', 'projects', 'work'],
  interpolation: {
    escapeValue: false,
  },
});

export async function loadTranslations(): Promise<void> {
  const { data, error } = await supabase.rpc('get_all_data');

  if (error) {
    console.error('Error al ejecutar la función:', error);
    return;
  }

  const dataSupabase = data as SupabaseData;

  // if (dataSupabase) {
    console.log('ALL DATA--> ', dataSupabase);
  // }

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
      basics: dataSupabase.basics
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
      education: dataSupabase.education
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
      languages: dataSupabase.languages
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
      profiles: dataSupabase.profiles
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
      projects: dataSupabase.projects
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
      work: dataSupabase.work
        .filter(item => item.lng === 'EN')
        .map(({ id, lng, ...rest }) => rest),
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
      basics: dataSupabase.basics
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
      education: dataSupabase.education
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
      languages: dataSupabase.languages
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
      profiles: dataSupabase.profiles
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
      projects: dataSupabase.projects
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
      work: dataSupabase.work
        .filter(item => item.lng === 'ES')
        .map(({ id, lng, ...rest }) => rest),
    },
  };

  Object.keys(i18nResources).forEach(lang => {
    const langKey = lang as LanguageKeys;
    Object.keys(i18nResources[langKey]).forEach(ns => {
      const nsKey = ns as ResourceKeys;
      i18n.addResourceBundle(langKey, nsKey, i18nResources[langKey][nsKey], true, true);
    });
  });
}
