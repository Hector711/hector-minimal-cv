import { Routes, Route } from 'react-router-dom';

import Layout from '@/layout/Layout';
import HomePage from '@/HomePage';
import '@/i18n/i18n';

export default function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
}