// AppLayout.tsx
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import { Outlet, useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AppLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
      <div className="grid min-h-dvh w-full grid-cols-1 grid-rows-[auto_1fr_auto] bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
  );
}
