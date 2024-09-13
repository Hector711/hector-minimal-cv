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
    <ModelSection sectionTitle={t('translations:education')} className='education'>
      <ul>
        {education.map(({ name, institution, end_date, url }, i) => {
          return (
            <li key={i}>
              <article className='job-cards'>
                <header>
                  <Dot />
                  <span>
                    <h3>{name}</h3>
                    <span>{t('translations:at')}</span>
                    <a
                      className='institutions'
                      href={url}
                      target='_blank'
                      title={`Pagina web de ${url}`}
                    >
                      <h3>{institution}</h3>
                    </a>
                  </span>
                  <time>{ new Date(end_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) }</time>
                </header>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
