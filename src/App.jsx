import { Routes, Route } from 'react-router-dom';

import Layout from '@/layout/Layout';
import HomePage from '@/HomePage';
import '@/i18n/i18n';

async function cargarTraducciones(idioma) {
  const { data, error } = await supabase
    .from('traducciones')
    .select('clave, valor')
    .eq('idioma', idioma)

  if (error) {
    console.error('Error al cargar traducciones:', error)
    return {}
  }

  return data.reduce((acc, item) => {
    acc[item.clave] = item.valor
    return acc
  }, {})
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  );
}