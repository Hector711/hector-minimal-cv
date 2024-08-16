import React from 'react';
import { getLangFromUrl } from '@/i18n/i18n';

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
        {LANGUAGES.map((language, i) => {
          if (language.code !== actualLng) {
            return (
              <a key={i} href={language.code}>
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
