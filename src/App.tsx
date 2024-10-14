import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CONTEXT
// PAGES
import HomePage from '@/pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
