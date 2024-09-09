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
    <ModelSection sectionTitle={t('translations:work')} className='experience'>
      <ul>
        {work.map(
          ({ company, start_date, end_date, position, url, summary }, i) => {
            const startDate = new Date(start_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
            const endDate = end_date != null ? new Date(end_date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' }) : 'Actual';
            return (
              <li key={i} className='experience-cards'>
                <article>
                  <header>
                    <Dot />
                    <span>
                      <h3>{position}</h3>
                      <span id='lightWeight'>en</span>
                      <a href={url} target='_blank' className='companies'>
                        <h3>{company}</h3>
                      </a>
                    </span>
                    <time>{startDate} - {endDate}</time>
                  </header>
                  <section>
                    <p>{summary}</p>
                  </section>
                </article>
              </li>
            );
          },
        )}
      </ul>
    </ModelSection>
  );
}
