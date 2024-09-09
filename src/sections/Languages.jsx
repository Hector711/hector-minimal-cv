import React from 'react';
import ModelSection from '@/components/ModelSection';

export default function Languages() {
  return (
    <ModelSection sectionTitle='Idiomas' className='languages'>
      <ul>
        {/* {languages.map(({ language, fluency }, i) => {
          return (
            <li key={i} className='language-cards'>
              <header>
                <h3>{language}</h3>
                <span>&#8209;</span>
                <p> {fluency}</p>
              </header>
            </li>
          );
        })} */}
      </ul>
    </ModelSection>
  );
}
