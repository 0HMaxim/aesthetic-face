import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref as dbRef, onValue, set } from "firebase/database";
import SolarPowerBold from "~icons/solar/power-bold";
import { db } from "../firebase.ts";
import { useBusiness } from "../context/BusinessContext.tsx";
import ImageInputBlock from "./ImageInputBlock.tsx";
import type { BusinessMeta } from "../models/Meta.ts";

type AdminEntityListProps<T> = {
    entityName: string;
    firebasePath: string;
    getLabel: (item: T) => string;
    getSlug?: (item: T) => string;
    newRoute: string;
    editRoute: (id: string) => string;
    businessSlug?: string;
    // Оставляем оба варианта для гибкости
    headerImageField?: keyof BusinessMeta;
    tabRoute?: string;
};

export function AdminEntityList<T>({
                                       entityName,
                                       firebasePath,
                                       getLabel,
                                       getSlug,
                                       newRoute,
                                       editRoute,
                                       businessSlug,
                                       headerImageField,
                                       tabRoute
                                   }: AdminEntityListProps<T>) {
    const navigate = useNavigate();
    const [items, setItems] = useState<Record<string, T>>({});
    const [localMeta, setLocalMeta] = useState<BusinessMeta | null>(null);
    const { slug } = useBusiness();

    // --- Логика определения данных из Firebase ---

    // Ищем таб по route, если он задан
    const tabEntry = tabRoute
        ? Object.entries(localMeta?.tabs || {}).find(([_, t]) => t.route === tabRoute || t.route === `/${tabRoute}`)
        : null;

    const foundTabKey = tabEntry?.[0]; // Ключ в Firebase (например, "tab_123")
    const foundTabValue = tabEntry?.[1];

    // Определяем путь для сохранения
    const firebaseSavePath = foundTabKey
        ? `businesses/${businessSlug}/meta/tabs/${foundTabKey}/headerImage`
        : headerImageField
            ? `businesses/${businessSlug}/meta/${headerImageField}`
            : null;

    // Определяем текущее значение картинки
    const currentHeaderImage = foundTabKey
        ? foundTabValue?.headerImage
        : headerImageField
            ? (localMeta as any)?.[headerImageField]
            : "";

    const displayName = localMeta?.name?.en || localMeta?.shortName?.en || slug;

    useEffect(() => {
        if (!businessSlug) return;

        // 1. Слушаем список сущностей (услуги, блоги и т.д.)
        const itemsPath = `businesses/${businessSlug}/${firebasePath}`;
        const unsubItems = onValue(dbRef(db, itemsPath), snapshot => {
            setItems(snapshot.val() || {});
        });

        // 2. Слушаем мета-данные бизнеса (табы и шапки) в реальном времени
        const metaPath = `businesses/${businessSlug}/meta`;
        const unsubMeta = onValue(dbRef(db, metaPath), snapshot => {
            if (snapshot.exists()) setLocalMeta(snapshot.val());
        });

        return () => {
            unsubItems();
            unsubMeta();
        };
    }, [firebasePath, businessSlug]);

    const handleHeaderImageChange = async (url: string) => {
        if (!businessSlug || !firebaseSavePath) return;
        await set(dbRef(db, firebaseSavePath), url);
    };

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* HEADER SECTION */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-[900] uppercase tracking-tighter text-gray-800">
                        {displayName}
                    </h1>
                    <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mt-1">
                        Manage {entityName}
                    </p>
                </div>
                <button
                    onClick={() => navigate(newRoute)}
                    className="flex items-center gap-2 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 transition-all font-bold shadow-lg shadow-blue-100 active:scale-95"
                >
                    <SolarPowerBold className="size-5" />
                    New {entityName.slice(0, -1)}
                </button>
            </div>

            {/* IMAGE CONFIGURATION BLOCK */}
            {(tabRoute || headerImageField) && (
                <div className="mb-10 p-8 bg-gray-50/50 rounded-[40px] border border-gray-100 flex flex-col items-center shadow-sm">
                    <div className="text-center mb-6">
                        <label className="block font-black text-gray-400 uppercase text-[10px] tracking-[0.2em]">
                            Header Background
                        </label>
                        <p className="text-[9px] text-gray-300 font-bold uppercase mt-1">
                            {tabRoute ? `Linked to route: /${tabRoute}` : `Field: ${String(headerImageField)}`}
                        </p>
                    </div>

                    <div className="w-full max-w-md">
                        <ImageInputBlock
                            image={currentHeaderImage || ""}
                            onChange={handleHeaderImageChange}
                        />
                        {tabRoute && !foundTabKey && (
                            <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-100 text-[10px] text-amber-600 font-bold uppercase text-center">
                                ⚠️ Tab with route "{tabRoute}" not found in Branding Meta (1st tab)
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* LIST SECTION */}
            <div className="space-y-4">
                {Object.entries(items).length === 0 ? (
                    <div className="p-20 text-center border-2 border-dashed border-gray-100 rounded-[40px] text-gray-300 font-black uppercase text-xs tracking-widest">
                        No {entityName.toLowerCase()} found
                    </div>
                ) : (
                    Object.entries(items).map(([id, item]) => (
                        <div
                            key={id}
                            onClick={() => navigate(editRoute(id))}
                            className="group p-6 bg-white border border-gray-100 rounded-[32px] hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50/50 cursor-pointer transition-all flex justify-between items-center"
                        >
                            <div className="flex flex-col gap-1">
                                {getSlug && (
                                    <span className="text-[10px] text-blue-400 font-black uppercase tracking-widest">
                                        {getSlug(item)}
                                    </span>
                                )}
                                <h2 className="font-black text-gray-700 text-xl tracking-tight group-hover:text-blue-600 transition-colors">
                                    {getLabel(item)}
                                </h2>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[10px] uppercase font-black tracking-[0.2em] text-gray-300 group-hover:text-blue-400 transition-colors">
                                    Edit Details
                                </span>
                                <div className="size-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                                    <span className="text-gray-400 group-hover:text-blue-500">→</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}