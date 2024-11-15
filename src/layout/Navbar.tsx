import LanguageIcon from '@/icons/LanguageIcon';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const { i18n } = useTranslation();
  const actualLng = i18n.language;
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
  };

  const LANGUAGES = [
    {
      code: 'ES',
      label: 'Español',
    },
    {
      code: 'EN',
      label: 'English',
    },
  ];

  return (
    <nav className='no-print'>
      <div id='nav-container'>
        {/* <a href='#' className='resume-video' target='_blank' rel='noopener noreferrer'>
          Video Resumen
        </a> */}
        {LANGUAGES.map(({ code, label }) => {
          if (code !== actualLng) {
            return (
              <button key={code} onClick={() => changeLanguage(code)}>
                <LanguageIcon />
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

// function LanguageSwitcher() {
//   const { i18n } = useTranslation()

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng)
//   }

//   return (
//     <div>
//       <button onClick={() => changeLanguage('es')}>Español</button>
//       <button onClick={() => changeLanguage('en')}>English</button>
//     </div>
//   )
// }
