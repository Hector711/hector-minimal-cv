import React from 'react';
import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next'; 

export default function About() {
  const { t } = useTranslation();

  return (
    <ModelSection sectionTitle={t('translations:about_me')} className='about'>
      <p>{t('basics:about')}</p>
    </ModelSection>
  );
}
