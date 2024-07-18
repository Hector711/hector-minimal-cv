import React from 'react';
import ModelSection from '@/sections/components/ModelSection';
import cv from '@/../cv-es.json';
const { projects } = cv;

export default function Projects() {
  return (
    <ModelSection sectionTitle='Projects' className='projects'>
      <ul>
        {projects.map(({ name, url, isActive, highlights, description }, i ) => {
          return (
            <li className='project-cards ' key={i}>
              <a href={url} target='_blank' className='hoverr' title={`Ver el proyecto ${name}`}>
                <header>
                  <h4>
                    {name}
                    {isActive && <span>&bull;</span>}
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
