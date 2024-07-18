import React from 'react';
import ModelSection from '@/sections/components/ModelSection';
import cv from '@/../cv-es.json';
import Dot from '@/assets/Dot';

const { work } = cv;

export default function Experience() {
  return (
    <ModelSection sectionTitle='Experience' className='experience'>
      <ul>
        {work.map(({ company, startDate, endDate, position, url, summary }, i) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : 'Actual';
          const years = `${startYear} - ${endYear}`;
          return (
            <li key={i}>
              <article>
                <div id='hero'>
                  <header>
                    <Dot />
                    <span>
                      <h3>{position}</h3>
                      <p id='lightWeight'>en</p>
                      <a href={url} target='_blank' id='company'>
                        {company}
                      </a>
                    </span>
                  </header>
                  <p>{summary}</p>
                </div>
                <time>{years}</time>
              </article>
            </li>
          );
        })}
      </ul>
    </ModelSection>
  );
}
