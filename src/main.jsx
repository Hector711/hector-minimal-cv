import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// TYPOGRAPHY

// CSS
import '@/css/0/reset.css';
import '@/css/init.css';
import '@/css/styles.css';
import '@/css/comp-hero.css';
import '@/css/comp-navbar.css';
import '@/css/comp-footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
