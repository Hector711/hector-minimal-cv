import { BrowserRouter, Route, Routes } from 'react-router-dom';
// PAGES
import HomePage from '@/pages/HomePage';
import Layout from '@/layout/Layout';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
