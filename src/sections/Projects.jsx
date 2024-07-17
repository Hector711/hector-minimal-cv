import React from 'react';
import Section from '@/sections/components/Section';
import cv from '@/../cv-es.json';
const { projects } = cv;

export default function Projects() {
  return (
    <Section sectionTitle='Projects' id='projects'>
      <ul>
        {projects.map(({ name, url, isActive, highlights, description }, i ) => {
          return (
            <li className='project-cards' key={i}>
              <a href={url} target='_blank' title={`Ver el proyecto ${name}`}>
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
    </Section>
  );
}
