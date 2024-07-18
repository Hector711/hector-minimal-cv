import React from 'react';
import Section from '@/sections/components/Section';
import cv from '@/../cv-es.json';
import Dot from '@/assets/Dot';

const { work } = cv;

export default function Experience() {
  return (
    <Section sectionTitle='Experience' id='experience'>
      <ul>
        {work.map(({ company, startDate, endDate, position, url, summary }) => {
          const startYear = new Date(startDate).getFullYear();
          const endYear =
            endDate != null ? new Date(endDate).getFullYear() : 'Actual';
          const years = `${startYear} - ${endYear}`;

          return (
            <li>
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
    </Section>
  );
}
