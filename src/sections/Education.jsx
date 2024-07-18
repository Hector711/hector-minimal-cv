import React from 'react';
import ModelSection from '@/sections/components/ModelSection';
import cv from '@/../cv-es.json';
import Dot from '@/assets/icons/Dot';
const { education } = cv;

export default function Education() {
  return (
    <ModelSection sectionTitle='Formación' className='education'>
      <ul>
        {education.map(({ name, institution, endDate, url }, i) => {
          return (
            <li key={i}>
              <article className='job-cards'>
                <header>
                  <Dot />
                  <span>
                    <h3>{name}</h3>
                    <span>en</span>

                    <a
                      className='institutions'
                      href={url}
                      target='_blank'
                      title={`Pagina web de ${url}`}
                    >
                      <h3>{institution}</h3>
                    </a>
                  </span>
                  <time>{endDate}</time>
                </header>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
