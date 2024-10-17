import ModelSection from '@/components/ModelSection';
import { useTranslation } from 'react-i18next';
import { ProjectsTypes } from '@/types';

export default function Projects() {
  const { t, i18n } = useTranslation();

  const language = i18n.language;

  const projectsObject = i18n.getResourceBundle(language, 'projects');
  const projects = Object.values(projectsObject) as ProjectsTypes[];

  return (
    <ModelSection title={t('translations:projects')} id='projects'>
      <ul id='projects-container'>
        {projects.map(({ name, url, active, highlights, description }, i) => {
          return (
            <li className='project-cards ' key={i}>
              <a
                href={url}
                target='_blank'
                title={`Ver el proyecto ${name}`}
              >
                <header>
                  <h4>
                    {name}
                    {active && <span>&bull;</span>}
                  </h4>
                  <p>{description}</p>
                </header>
                <footer className='highlights-container'>
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
