import ModelSection from '@/components/ModelSection';
import DotIcon from '@/icons/DotIcon';
import { useTranslation } from 'react-i18next';
import { WorkTypes } from '@/types';

export default function Experience() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const workObject = i18n.getResourceBundle(language, 'work');
  const work = Object.values(workObject) as WorkTypes[];

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
                <DotIcon />
                <article className='experience-cards'>
                  <header>
                    <div className='title-card'>
                      <p className='position-text'>
                        <strong>{position}</strong>
                        <span className='at-text'>{t('translations:at')}</span>
                        <a href={url ?? '#'} target='_blank' className='company-link'>
                          {company}
                        </a>
                      </p>
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
