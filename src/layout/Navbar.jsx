import React from 'react';
import { getLangFromUrl } from '@/i18n/i18n';
import Language from '@/assets/icons/Language';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const actualLng = getLangFromUrl();

  const LANGUAGES = [
    {
      code: 'es',
      label: 'Español',
    },
    {
      code: 'en',
      label: 'English',
    },
  ];

  return (
    <nav>
      <div id='nav-container'>
        {/* <SpainFlag />
        <USFlag /> */}

        {LANGUAGES.map((language, i) => {
          if (language.code !== actualLng) {
            return (
              <a
                key={i}
                to={`/${language.code}`}
                className='hoverr'
              >
                <Language />
                {language.label}
              </a>
            );
          } else {
            return '';
          }
        })}
      </div>
    </nav>
  );
}
