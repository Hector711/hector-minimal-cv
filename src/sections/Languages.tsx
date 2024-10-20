import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next';
import ArrowRightIcon from '@/icons/ArrowRightIcon';
import { LanguagesTypes } from '@/types';

export default function Languages() {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const languagesObject = i18n.getResourceBundle(language, 'languages');
  const languages = Object.values(languagesObject) as LanguagesTypes[];

  return (
    <ModelSection title={t('translations:languages')} id='languages'>
      <ul id='languages-container'>
        {languages.map(({ language, fluency }, i) => {
          return (
            <li key={i} >
              <article className='language-cards'>
                <h3>{language}</h3>
                <ArrowRightIcon />
                <p> {fluency}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}