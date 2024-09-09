import React from 'react';
import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const projectsObject = i18n.getResourceBundle(language, 'projects');
  const projects = Object.values(projectsObject);


  return (
    <ModelSection sectionTitle={t('translations:projects')} className='projects'>
      <ul>
        {projects.map(({ name, url, active, highlights, description }, i ) => {
          return (
            <li className='project-cards ' key={i}>
              <a href={url} target='_blank' className='hoverr' title={`Ver el proyecto ${name}`}>
                <header>
                  <h4>
                    {name}
                    {active && <span>&bull;</span>}
                  </h4>
                  <p>{description}</p>
                </header>
                <footer>
                  {highlights.map((highlight, i) => {
                    return <span key={i}>{highlight}</span>;
                  })}
                </footer>
              </a>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
