import React from 'react';
import ModelSection from '@/sections/components/ModelSection';
import cv from '@/../cv-es.json';
import Dot from '@/assets/Dot';
const { education } = cv;

export default function Education() {
  return (
    <ModelSection sectionTitle='Education' className='education'>
      <ul>
        {education.map(({ name, institution, endDate, url }, i) => {
          return (
            <li key={i}>
              <article className='job-cards'>
                <header>
                  <Dot />
                  <span>
                    <h4>{name}</h4>
                    <p id='lightWeight'>at</p>
                    <h4>
                      <a
                      
                        id='institution'
                        href={url}
                        target='_blank'
                        title={`Pagina web de ${url}`}
                      >
                        {institution}
                      </a>
                    </h4>
                  </span>
                </header>
                <p>{endDate}</p>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
