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
