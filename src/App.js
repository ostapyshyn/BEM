import { Routes, Route } from 'react-router-dom';
import { Home, Contact, References, Prices } from './pages';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/links' element={<References />} />
      <Route path='/prices' element={<Prices />} />
      <Route path='*' element={<div style={{ color: 'red' }}>Not found</div>} />
    </Routes>
  );
}

export default App;
