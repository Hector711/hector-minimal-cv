import React from 'react';
import Language from '@/assets/icons/Language';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { i18n } = useTranslation();
  const actualLng = i18n.language;
  const changeLanguage = code => {
    i18n.changeLanguage(code);
  };

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
        {LANGUAGES.map(({ code, label }) => {
          if (code !== actualLng) {
            return (
              <button
                key={code}
                className='hoverr'
                onClick={() => changeLanguage(code)}
              >
                <Language />
                {label}
              </button>
            );
          } else {
            return '';
          }
        })}
      </div>
    </nav>
  );
}
