import React from 'react';
import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next';

export default function Languages() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const languagesObject = i18n.getResourceBundle(language, 'languages');
  const languages = Object.values(languagesObject);

  return (
    <ModelSection sectionTitle={t('translations:languages')} className='languages'>
      <ul>
        {languages.map(({ language, fluency }, i) => {
          return (
            <li key={i} className='language-cards'>
              <header>
                <h3>{language}</h3>
                <span>&#8209;</span>
                <p> {fluency}</p>
              </header>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
