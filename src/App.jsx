import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Business from './pages/Business';
import Contact from './pages/Contact';
import Career from './pages/Career';
import NotFound from './pages/NotFound';

import Product1 from './pages/Product1';
import Product2 from './pages/Product2';
import Product3 from './pages/Product3';
import Product4 from './pages/Product4';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/product1" element={<Product1 />} />
        <Route path="products/product2" element={<Product2 />} />
        <Route path="products/product3" element={<Product3 />} />
        <Route path="products/product4" element={<Product4 />} />
        <Route path="business" element={<Business />} />
        <Route path="contact" element={<Contact />} />
        <Route path="career" element={<Career />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
