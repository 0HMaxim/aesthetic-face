import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { ref, onValue, off } from "firebase/database"; // Добавили off
import { db } from "../../firebase";

import Header from "./Header";
import Footer from "./Footer";
import { BusinessContext } from "../../context/BusinessContext.tsx";
import type { BusinessMeta } from "../../models/Meta";

export default function AppLayout() {
    const { lang, businessSlug } = useParams<{ lang: string; businessSlug: string }>();
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const [currentMeta, setCurrentMeta] = useState<BusinessMeta | null>(null);
    const [allBusinesses, setAllBusinesses] = useState<{ slug: string; name: string }[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        if (lang && i18n.language !== lang) i18n.changeLanguage(lang);
    }, [lang, i18n]);

    // 1. load all businesses, (do 1 time at start project )
    useEffect(() => {
        const allRef = ref(db, "businesses");
        onValue(allRef, (snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val();
                const list = Object.keys(data).map(slug => ({
                    slug,
                    name: slug
                }));
                setAllBusinesses(list);
            }
        });
        return () => off(allRef);
    }, [lang]);

    // 2. subscribe to current businesses (reload if businessSlug change)
    useEffect(() => {
        if (!businessSlug) return;

        setLoading(true);
        const metaRef = ref(db, `businesses/${businessSlug}/meta`);

        onValue(metaRef, (snapshot) => {
            if (snapshot.exists()) {
                setCurrentMeta(snapshot.val());
            } else {
                setCurrentMeta(null);
            }
            setLoading(false);
        }, (error) => {
            console.error("Firebase meta error:", error);
            setLoading(false);
        });

        // Clear Function: Befor new slug,
        // Unsubscribe from old slug.
        return () => {
            off(metaRef);
        };
    }, [businessSlug]);

    // 3. Scroll to top
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    if (loading) return (
        <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-black font-black uppercase tracking-widest text-xs">
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full"
                />
                <span>Loading {businessSlug}...</span>
            </div>
        </div>
    );

    if (!currentMeta) return <div className="p-20 text-center font-bold">Business "{businessSlug}" not found.</div>;

    return (
        <BusinessContext.Provider value={{ slug: businessSlug!, meta: currentMeta }}>
            <div className="flex flex-col min-h-screen bg-background relative">
                <Header />

                {/* Business select */}
                <div className="fixed bottom-10 left-6 z-[60]">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="w-14 h-14 bg-gray-900 text-white rounded-2xl shadow-2xl flex items-center justify-center text-xl"
                    >
                        {menuOpen ? "✕" : "🏢"}
                    </motion.button>

                    <AnimatePresence>
                        {menuOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: -10, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute bottom-16 left-0 w-64 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-[24px] shadow-2xl p-2"
                            >
                                {allBusinesses.map(b => (
                                    <button
                                        key={b.slug}
                                        onClick={() => {
                                            navigate(`/${lang}/${b.slug}`);
                                            setMenuOpen(false);
                                        }}
                                        className={`w-full text-left p-3 rounded-xl transition-all font-bold text-sm ${
                                            businessSlug === b.slug
                                                ? "bg-blue-600 text-white"
                                                : "hover:bg-gray-100 dark:hover:bg-white/5"
                                        }`}
                                    >
                                        {b.name}
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <main className="flex-grow w-full">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <Outlet />
                        </motion.div>
                    </AnimatePresence>
                </main>

                <Footer />
            </div>
        </BusinessContext.Provider>
    );
}