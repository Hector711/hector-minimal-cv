import React from 'react';
import ModelSection from '@/components/ModelSection';
import Dot from '@/assets/icons/Dot';
import { useTranslation } from 'react-i18next';

export default function Education() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const educationObject = i18n.getResourceBundle(language, 'education');
  const education = Object.values(educationObject);

  return (
    <ModelSection title={t('translations:education')} id='education'>
      <ul id='education-container'>
        {education.map(({ name, institution, end_date, url }, i) => {
          return (
            <li key={i}>
              <Dot />
              <article className='education-cards'>
                <header>
                  <div className='title-card'>
                    <h3>{name}</h3>&nbsp;
                    <span>{t('translations:at')}</span>&nbsp;
                    <a
                      className='institutions'
                      href={url}
                      target='_blank'
                      title={`Pagina web de ${url}`}
                    >
                      <h3>{institution}</h3>
                    </a>
                  </div>
                  <time>
                    {new Date(end_date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </time>
                </header>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
