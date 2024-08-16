import React from 'react';
import { getLangFromUrl } from '@/i18n/i18n';
import Language from '@/assets/icons/Language'


export default function Navbar() {
  const actualLng = getLangFromUrl();

  const LANGUAGES = [
    {
      code: 'es',
      label: 'Español',
      icon: ''
    },
    {
      code: 'en',
      label: 'English',
      icon: ''
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
              <a key={i} href={`/${language.code}`} className='hoverr'>
                <Language />
                {language.label}
              </a>
            );
          } else {
            return "";
          }
        })}
      </div>
    </nav>
  );
}
