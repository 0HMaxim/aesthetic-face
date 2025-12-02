// App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AppLayout from './components/Layout/AppLayout';
import Specials from './pages/Specials';
import Services from './pages/Services';
import Price from './pages/Price';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs.tsx';
import Gallery from './pages/Gallery';
import ServicePage from './pages/ServicePage';
import SpecialPage from "./pages/SpecialPage.tsx";
import BlogPage from "./pages/BlogPage.tsx";
import AdminPage from "./pages/admin/AdminPage.tsx";
import BlogEditor from "./pages/admin/BlogEditor.tsx";
import FAQEditor from "./pages/admin/FAQEditor.tsx";
import BlogList from "./pages/admin/BlogList.tsx";
import PriceList from "./pages/admin/PriceList.tsx";
import FAQListA from "./pages/admin/FAQListA.tsx";
import PriceEditor from "./pages/admin/PriceEditor.tsx";
import ServiceList from './pages/admin/ServiceList.tsx';
import ServiceEditor from "./pages/admin/ServiceEditor.tsx";
import EmployeeEditor from "./pages/admin/EmployeeEditor.tsx";
import EmployeeList from "./pages/admin/EmployeeList.tsx";
import Employees from "./pages/Employees.tsx";
import EmployeePage from "./pages/EmployeePage.tsx";
import PhotoEditor from "./pages/admin/PhotoEditor.tsx";
import PhotoList from "./pages/admin/PhotoList.tsx";
import SpecialList from "./pages/admin/SpecialList.tsx";
import SpecialEditor from "./pages/admin/SpecialEditor.tsx";


const App: React.FC = () => {
  return (
      <Routes>
        {/* Редирект с корня */}
        <Route
            path="/"
            element={<Navigate to={`/${import.meta.env.VITE_APP_LOCALE || 'en'}`} replace />}
        />

        {/* --- Админка без языка --- */}
        <Route path="admin/*" element={<AdminPage />}>

          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/new" element={<BlogEditor />} />
          <Route path="blogs/:id" element={<BlogEditor />} />

          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/new" element={<EmployeeEditor />} />
          <Route path="employees/:id" element={<EmployeeEditor />} />

          <Route path="faq" element={<FAQListA />} />
          <Route path="faq/new" element={<FAQEditor />} />
          <Route path="faq/:id" element={<FAQEditor />} />

          <Route path="prices" element={<PriceList />} />
          <Route path="prices/new" element={<PriceEditor />} />
          <Route path="prices/:id" element={<PriceEditor />} />

          <Route path="services" element={<ServiceList />} />
          <Route path="services/new" element={<ServiceEditor />} />
          <Route path="services/:id" element={<ServiceEditor />} />

          <Route path="specials" element={<SpecialList />} />
          <Route path="specials/new" element={<SpecialEditor />} />
          <Route path="specials/:id" element={<SpecialEditor />} />


          <Route path="photos" element={<PhotoList />} />
          <Route path="photos/new" element={<PhotoEditor />} />
          <Route path="photos/:id" element={<PhotoEditor />} />
        </Route>

        {/* --- Админка с языком --- */}
        <Route path=":lang/admin/*" element={<AdminPage />}>
          <Route path="blogs" element={<BlogList />} />
          <Route path="blogs/new" element={<BlogEditor />} />
          <Route path="blogs/:id" element={<BlogEditor />} />

          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/new" element={<EmployeeEditor />} />
          <Route path="employees/:id" element={<EmployeeEditor />} />

          <Route path="faq" element={<FAQListA />} />
          <Route path="faq/new" element={<FAQEditor />} />
          <Route path="faq/:id" element={<FAQEditor />} />

          <Route path="prices" element={<PriceList />} />
          <Route path="prices/new" element={<PriceEditor />} />
          <Route path="prices/:id" element={<PriceEditor />} />

          <Route path="services" element={<ServiceList />} />
          <Route path="services/new" element={<ServiceEditor />} />
          <Route path="services/:id" element={<ServiceEditor />} />


          <Route path="specials" element={<SpecialList />} />
          <Route path="specials/new" element={<SpecialEditor />} />
          <Route path="specials/:id" element={<SpecialEditor />} />


          <Route path="photos" element={<Gallery />} />
          <Route path="photos/new" element={<PhotoEditor />} />
          <Route path="photos/:id" element={<PhotoEditor />} />
        </Route>

        {/* --- Обычные страницы с языком --- */}
        <Route path=":lang/*" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="specials" element={<Specials />} />
          <Route path="specials/:slug" element={<SpecialPage />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="employees" element={<Employees />} />
          <Route path="employees/:slug" element={<EmployeePage />} />
          <Route path="price" element={<Price />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:slug" element={<BlogPage />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  );
};

export default App;