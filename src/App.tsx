import React, { useEffect, useState } from 'react';
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import {ref, get, set} from 'firebase/database';
import { db } from './firebase';

import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Specials from './pages/Specials';
import Services from './pages/Services';
import Price from './pages/Price';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Gallery from './pages/Gallery';
import ServicePage from './pages/ServicePage';
import SpecialPage from "./pages/SpecialPage";
import BlogPage from "./pages/BlogPage";

// Админка
import AdminPage from "./pages/admin/AdminPage";
import BlogEditor from "./pages/admin/BlogEditor";
import FAQEditor from "./pages/admin/FAQEditor";
import BlogList from "./pages/admin/BlogList";
import PriceList from "./pages/admin/PriceList";
import FAQListA from "./pages/admin/FAQListA";
import PriceEditor from "./pages/admin/PriceEditor";
import ServiceList from './pages/admin/ServiceList';
import ServiceEditor from "./pages/admin/ServiceEditor";
import EmployeeEditor from "./pages/admin/EmployeeEditor";
import EmployeeList from "./pages/admin/EmployeeList";
import PhotoEditor from "./pages/admin/PhotoEditor";
import PhotoList from "./pages/admin/PhotoList";
import SpecialList from "./pages/admin/SpecialList";
import SpecialEditor from "./pages/admin/SpecialEditor";
import GeneralInfoEditor from "./pages/admin/GeneralInfoEditor";
import Employees from "./pages/Employees";
import EmployeePage from "./pages/EmployeePage";
import MetaEditor from "./pages/admin/MetaEditor.tsx";

const App: React.FC = () => {
    const locale = import.meta.env.VITE_APP_LOCALE || 'en';
    const [firstBusiness, setFirstBusiness] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBusinesses = async () => {
            try {
                const snapshot = await get(ref(db, 'businesses'));
                if (snapshot.exists()) {
                    const keys = Object.keys(snapshot.val());
                    if (keys.length > 0) setFirstBusiness(keys[0]);
                }
            } catch (error) {
                // Если база пустая или доступ закрыт, мы просто выводим лог
                console.error("Firebase Auth/Permission Error:", error);
            } finally {
                // В любом случае (успех или ошибка) выключаем лоадер
                setLoading(false);
            }
        };
        fetchBusinesses();
    }, []);

    const handleInitialCreate = async () => {
        const defaultSlug = 'my-business'; // или любой другой слаг по умолчанию
        const newBusinessRef = ref(db, `businesses/${defaultSlug}`);

        try {
            // Создаем минимально необходимую структуру
            await set(newBusinessRef, {
                meta: {
                    name: { [locale]: "New Business" },
                    shortName: { [locale]: "NewBiz" },
                    type: "Medical"
                },
                generalInfo: {
                    email: "admin@example.com",
                    phone: { [locale]: "+000" },
                    address: { [locale]: "City, Street" }
                }
            });

            // После успешного создания переходим в админку
            window.location.hash = `/${locale}/admin/${defaultSlug}/meta`;
            // Перезагружаем страницу, чтобы стейт firstBusiness обновился
            window.location.reload();
        } catch (error) {
            console.error("Error creating initial business:", error);
            alert("Failed to create business. Check Firebase Rules!");
        }
    };

    if (loading) return <div className="p-8">Загрузка...</div>;

    return (
        <Routes>
            {/* --- Корень сайта --- */}
            <Route
                path="/"
                element={
                    firstBusiness ? (
                        <Navigate to={`/${locale}/${firstBusiness}`} replace />
                    ) : (
                        /* ВАЖНО: Убираем AppLayout отсюда, чтобы Header не пытался грузить undefined */
                        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black p-6 text-center">
                            <div className="text-8xl mb-8 animate-bounce">🏗️</div>
                            <h2 className="text-4xl font-black uppercase mb-4 tracking-tighter">
                                No Business Data
                            </h2>
                            <p className="text-gray-500 mb-10 max-w-md text-lg">
                                The database is empty. You need to create your first business profile to activate the site.
                            </p>
                            <button
                                onClick={handleInitialCreate}
                                className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-blue-700 transition"
                            >
                                + Create First Business
                            </button>
                        </div>
                    )
                }
            />



            {/* --- Админка: список всех бизнесов --- */}
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/:lang/admin" element={<AdminPage />} />
            <Route path="/:lang/admin/:businessSlug/*" element={<AdminPage />}>
                <Route path="meta" element={<MetaEditor />} />
                <Route path="generalinfo" element={<GeneralInfoEditor />} />
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

            {/* --- Публичная часть --- */}
            <Route
                path="/:lang/:businessSlug/*"
                element={
                    firstBusiness ? <AppLayout /> : <Navigate to="/" replace />
                }
            >
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
