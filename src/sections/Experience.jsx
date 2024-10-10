import React from 'react';
import ModelSection from '@/components/ModelSection';
import Dot from '@/assets/icons/Dot';
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const workObject = i18n.getResourceBundle(language, 'work');
  const work = Object.values(workObject);

  return (
    <ModelSection title={t('translations:work')} id='experience'>
      <ul id='experience-container'>
        {work.map(
          ({ company, start_date, end_date, position, url, summary }, i) => {
            const startDate = new Date(start_date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
            });
            const endDate =
              end_date != null
                ? new Date(end_date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                  })
                : 'Actual';
            return (
              <li key={i} >
                <Dot />
                <article className='experience-cards'>
                  <header>
                    <div className='title-card'>
                      <h3>{position}</h3>&nbsp;
                      <span id='lightWeight'>{t('translations:at')}</span>&nbsp;
                      <a href={url} target='_blank' className='companies'>
                        <h3>{company}</h3>
                      </a>
                    </div>
                    <time>
                      {startDate} - {endDate}
                    </time>
                  </header>
                  <p>{summary}</p>
                </article>
              </li>
            );
          },
        )}
      </ul>
    </ModelSection>
  );
}
