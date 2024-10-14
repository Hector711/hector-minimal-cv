import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App.tsx';

// TYPOGRAPHY
// Supports weights 200-900
import '@fontsource-variable/nunito-sans';
// Supports weights 300-900
import '@fontsource-variable/figtree';

// CSS
import '@/css/reset/reset.scss';
import '@/css/init.scss';

// MODEL
import '@/css/model-section.scss';

// SECTIONS
import '@/css/section-hero.scss';
import '@/css/section-projects.scss';
import '@/css/section-education.scss';
import '@/css/section-languages.scss';
import '@/css/section-experience.scss';

// COMPONENTS
import '@/css/comp-navbar.scss';
import '@/css/comp-footer.scss';

// PAGES
// import { loadTranslations } from '@/i18n/i18n';

// loadTranslations().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
// });
