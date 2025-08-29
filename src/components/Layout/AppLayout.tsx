// AppLayout.tsx
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

export default function AppLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);


    return (
        <div className="grid min-h-screen w-full grid-rows-[auto_1fr_auto] text-foreground  duration-500 relative
        ">
          <Header />
          <main className="w-full bg-background">

            <AnimatePresence mode="wait">
              <motion.div
                  key={location.pathname} // ключ заставляет React "перезапустить" анимацию при смене пути
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>


          </main>
          <Footer />
        </div>
    );
  }
