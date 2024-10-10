import React from 'react';
import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next'; 

export default function About() {
  const { t } = useTranslation();

  return (
    <ModelSection title={t('translations:about_me')} id='about'>
      <p>{t('basics:about')}</p>
    </ModelSection>
  );
}
