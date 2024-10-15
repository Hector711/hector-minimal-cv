import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next';
import { Basics } from '@/types';

export default function About() {
  const { t, i18n } = useTranslation();

  const language = i18n.language;
  const basicsObject = i18n.getResourceBundle(language, 'basics');
  const basics = Object.values(basicsObject)[0] as Basics;

  return (
    <ModelSection title={t('translations:about_me')} id='about'>
      <p>{basics.about}</p>
    </ModelSection>
  );
}
