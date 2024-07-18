import React from 'react';
import Section from '@/sections/components/Section';
import cv from '@/../cv-es.json';

const { languages } = cv;
export default function Languages() {
  return <Section sectionTitle='Languages' id='languages'>
    <ul>
    {
      languages.map(({ language, fluency }, i) => {
        return (
          <li key={i}>
            <header>
              <h3>{language}</h3>
              <p>{fluency}</p>
            </header>
          </li>
        );
      })
    }
  </ul>
  </Section>;
}
