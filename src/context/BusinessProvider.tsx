// Разделяем импорт значений (React, hooks) и типов (ReactNode)
import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react"; // Исправление ошибки TS1484

import { ref, get } from "firebase/database";
import { db } from "../firebase";
import type { GeneralInfo } from "../models/GeneralInfo";
import type { BusinessMeta } from "../models/Meta";

// Описываем, что будет лежать в контексте
interface BusinessContextType {
    slug: string;
    generalInfo: GeneralInfo | null;
    meta: BusinessMeta | null;
    loading: boolean;
}

// Создаем контекст
export const BusinessContext = createContext<BusinessContextType | null>(null);

// Пропсы для Провайдера
interface BusinessProviderProps {
    slug: string;
    children: ReactNode;
}

export const BusinessProvider: React.FC<BusinessProviderProps> = ({ slug, children }) => {
    const [generalInfo, setGeneralInfo] = useState<GeneralInfo | null>(null);
    const [meta, setMeta] = useState<BusinessMeta | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!slug) return;

        const fetchData = async () => {
            setLoading(true);
            try {
                // Загружаем данные параллельно
                const [infoSnap, metaSnap] = await Promise.all([
                    get(ref(db, `businesses/${slug}/generalInfo`)),
                    get(ref(db, `businesses/${slug}/meta`))
                ]);

                if (infoSnap.exists()) setGeneralInfo(infoSnap.val());
                if (metaSnap.exists()) setMeta(metaSnap.val());

            } catch (err) {
                console.error("Error fetching Business Data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [slug]);

    return (
        <BusinessContext.Provider value={{ slug, generalInfo, meta, loading }}>
            {children}
        </BusinessContext.Provider>
    );
};

// Хук для использования в компонентах
export const useBusiness = () => {
    const ctx = useContext(BusinessContext);
    if (!ctx) {
        throw new Error("useBusiness must be used within BusinessProvider");
    }
    return ctx;
};