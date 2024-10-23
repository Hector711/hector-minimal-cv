import { ReactNode } from 'react';

export interface Basics {
  nickname: string;
  name: string | null;
  label: string | null;
  about: string;
  dni: string;
  birth_date: string;
  calendly_url: string;
  city: string;
  country: string;
  cv_url: string;
  email: string | null;
  image: string;
  postal_code: number;
  web_url: string;
  whatsapp_url: string | null;
}

export interface ModelSectionProps {
  children?: ReactNode;
  title?: string;
  id?: string;
}
export type SocialIconsType = {
  [key: string]: JSX.Element;
};

export type ProfileType = {
  network: string;
  url: string | null;
  username: string | null;
};

export interface ProjectsTypes {
  active: boolean;
  date: number;
  description: string;
  highlights: Array<string>;
  name: string;
  url: string;
}

export interface EducationTypes {
  end_date: string;
  institution: string;
  name: string;
  url: string;
}
export interface LanguagesTypes {
  language: string;
  fluency: string;
}

export interface WorkTypes {
  company: string;
  end_date: string;
  position: string;
  start_date: string;
  summary: string;
  url: string | null;
}

export type ResourceKeys = 'translations' | 'basics' | 'education' | 'languages' | 'profiles' | 'projects' | 'work';

export type LanguageKeys = 'EN' | 'ES';

interface IDLng {
  id: string;
  lng: LanguageKeys;
}

interface BasicsItem extends IDLng {
  about: string;
  birth_date: string;
  calendly_url: string;
  city: string;
  country: string;
  cv_url: string | null;
  dni: string;
  email: string | null;
  image: string | null;
  label: string | null;
  name: string;
  nickname: string | null;
  postal_code: number | null;
  web_url: string | null;
  whatsapp_url: string | null;
}

interface EducationItem extends IDLng {
  end_date: string;
  institution: string;
  name: string;
  url: string;
}

interface ProjectsItem extends IDLng {
  name: string;
  url: string;
  active: boolean;
  date: number;
  description: string;
  highlights: Array<string>;
}
interface WorkItem extends IDLng {
  company: string;
  end_date: string;
  position: string;
  start_date: string;
  summary: string;
  url: string;
}

interface LanguagesItem extends IDLng {
  name: string;
  fluency: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2' | 'Nativo';
}

interface ProfilesItem extends IDLng {
  network: string | null;
  url: string | null;
  username: string | null;
}


export interface SupabaseData {
  basics: BasicsItem[];
  education: EducationItem[];
  languages: LanguagesItem[];
  profiles: ProfilesItem[];
  projects: ProjectsItem[];
  work: WorkItem[];
}