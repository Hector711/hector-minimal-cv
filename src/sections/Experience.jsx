import React from 'react';
import ModelSection from '@/components/ModelSection';
import cv from '@/../cv-es.json';
import Dot from '@/assets/icons/Dot';

const { work } = cv;

export default function Experience() {
  return (
    <ModelSection sectionTitle='Experiencia' className='experience'>
      <ul>
        {work.map(
          ({ company, startDate, endDate, position, url, summary }, i) => {
            const startYear = new Date(startDate).getFullYear();
            const endYear =
              endDate != null ? new Date(endDate).getFullYear() : 'Actual';
            const years = `${startYear} - ${endYear}`;
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
                    <time>{years}</time>
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
