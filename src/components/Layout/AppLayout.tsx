// AppLayout.tsx
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useParams, useLocation } from 'react-router-dom';

export default function AppLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const location = useLocation(); // ← вот это

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


    return (
        <div className="grid min-h-screen w-full grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr_auto] text-foreground duration-500 relative overflow-x-hidden">
            <Header />
            <main className="w-full flex flex-col items-center"> {/* Центрируем содержимое */}
                <AnimatePresence mode="wait">
                    <motion.div
                        className="w-full flex flex-col items-center" // Чтобы Outlet не «разваливался»
                        key={location.pathname}
                        initial={{ opacity: 0, x: -10 }} // Заменил y на x, это безопаснее для высоты
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    );
  }
