// App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './components/Layout/AppLayout';
import Specials from './pages/Specials';
import Doctors from './pages/Doctors';
import Services from './pages/Services';
import Price from './pages/Price';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import ServicePage from './pages/ServicePage';
import DoctorPage from "./pages/DoctorPage.tsx";


const App: React.FC = () => {
  return (
      <Routes>

        <Route
            path="/"
            element={<Navigate to={`/${import.meta.env.VITE_APP_LOCALE || 'en'}`} replace />}
        />


        <Route path=":lang/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="specials" element={<Specials />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="doctors/:slug" element={<DoctorPage />} />
          <Route path="price" element={<Price />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>

  );
};

export default App;