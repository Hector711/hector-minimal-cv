import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import supabase from '@/api/supabase.js';

export default i18n
  .use(initReactI18next)
  .init({
    resources: {},
    lng: 'ES',
    fallbackLng: 'ES',
    ns: ['basics', 'education', 'languages', 'profiles', 'projects', 'work'],
    interpolation: {
      escapeValue: false
    }
  });

export async function loadTranslations() {
  // BASICS
  const { data: basics, error: basicsError } = await supabase
    .from('Basics')
    .select('*');

  if (basicsError) {
    console.error('Error al cargar traducciones de Basics:', basicsError);
    return;
  }

  // EDUCATION
  const { data: education, error: educationError } = await supabase
    .from('Education')
    .select('*');

  if (educationError) {
    console.error('Error al cargar traducciones de Education:', educationError);
    return;
  }

  // LANGUAGES
  const { data: languages, error: languagesError } = await supabase
    .from('Languages')
    .select('*');

  if (languagesError) {
    console.error('Error al cargar traducciones de Languages:', languagesError);
    return;
  }

  const { data: profiles, error: profilesError } = await supabase
    .from('Profiles')
    .select('*');

  if (profilesError) {
    console.error('Error al cargar traducciones de Profiles:', profilesError);
    return;
  }

  const { data: projects, error: projectsError } = await supabase
    .from('Projects')
    .select('*');

  if (projectsError) {
    console.error('Error al cargar traducciones de Projects:', projectsError);
    return;
  }

  const { data: work, error: workError } = await supabase
    .from('Work')
    .select('*');

  if (workError) {
    console.error('Error al cargar traducciones de Work:', workError);
    return;
  }

  const resources = {};

  // Procesar datos de Basics
  basics.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir todas las propiedades del objeto a la traducción
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        resources[item.lng].basics[key] = item[key];
      }
    });
  });

  // Procesar datos de Education
  education.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir el objeto completo al array de education
    const educationItem = {};
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        educationItem[key] = item[key];
      }
    });
    resources[item.lng].education.push(educationItem);
  });

  // Procesar datos de Languages
  languages.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir el objeto completo al array de languages
    const languageItem = {};
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        languageItem[key] = item[key];
      }
    });
    resources[item.lng].languages.push(languageItem);
  });

  // Procesar datos de Profiles
  profiles.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir el objeto completo al array de profiles
    const profileItem = {};
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        profileItem[key] = item[key];
      }
    });
    resources[item.lng].profiles.push(profileItem);
  });

  // Procesar datos de Projects
  projects.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir el objeto completo al array de projects
    const projectItem = {};
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        projectItem[key] = item[key];
      }
    });
    resources[item.lng].projects.push(projectItem);
  });

  // Procesar datos de Work
  work.forEach(item => {
    if (!resources[item.lng]) {
      resources[item.lng] = { basics: {}, education: [], languages: [], profiles: [], projects: [], work: [] };
    }
    // Añadir el objeto completo al array de work
    const workItem = {};
    Object.keys(item).forEach(key => {
      if (key !== 'lng' && key !== 'id') { // Excluir 'lng' e 'id'
        workItem[key] = item[key];
      }
    });
    resources[item.lng].work.push(workItem);
  });

  Object.keys(resources).forEach(lang => {
    i18n.addResourceBundle(lang, 'basics', resources[lang].basics, true, true);
    i18n.addResourceBundle(lang, 'education', resources[lang].education, true, true);
    i18n.addResourceBundle(lang, 'languages', resources[lang].languages, true, true);
    i18n.addResourceBundle(lang, 'profiles', resources[lang].profiles, true, true);
    i18n.addResourceBundle(lang, 'projects', resources[lang].projects, true, true);
    i18n.addResourceBundle(lang, 'work', resources[lang].work, true, true);
  });
  console.log("resources:", resources);
}



