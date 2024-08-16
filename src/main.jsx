import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter

import App from './App.jsx';

// TYPOGRAPHY
// Supports weights 200-900
import '@fontsource-variable/nunito-sans';
// Supports weights 300-900
import '@fontsource-variable/figtree';

// SECTIONS
import '@/css/section-hero.css';
import '@/css/section-projects.css';
import '@/css/section-education.css';
import '@/css/section-languages.css';
import '@/css/section-experience.css';

// MODEL
import '@/css/model-section.css';

// CSS
import '@/css/0/reset.css';
import '@/css/elements.css';
import '@/css/init.css';
import '@/css/comp-navbar.css';
import '@/css/comp-footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
