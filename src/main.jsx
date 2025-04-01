import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';

import App from './App.jsx';
import AboutSection from './components/AboutSection.jsx';
import Contact from './components/Contact.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <LanguageProvider> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
</React.StrictMode>,
);
