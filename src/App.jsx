import { Routes, Route, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

import Layout from '@/layout/Layout';
import HomePage from '@/HomePage';
import '@/i18n/i18n';

export default function App() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (lang !== 'es' && lang !== 'en') {
      navigate('/es');
    }
  }, [navigate]);
  
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/:lang' element={<HomePage />} />
      </Route>
    </Routes>
  );
}