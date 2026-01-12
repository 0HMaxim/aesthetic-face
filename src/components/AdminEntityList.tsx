import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ref, onValue, set, ref as dbRef } from "firebase/database"; // Объединил импорты
import SolarPowerBold from "~icons/solar/power-bold";
import { db } from "../firebase.ts";
import { useBusiness } from "../context/BusinessContext.tsx";
import ImageInputBlock from "./ImageInputBlock.tsx";
import type {BusinessMeta} from "../models/Meta.ts"; // Импорт тут

type AdminEntityListProps<T> = {
    entityName: string;
    firebasePath: string;
    getLabel: (item: T) => string;
    getSlug?: (item: T) => string;
    newRoute: string;
    editRoute: (id: string) => string;
    businessSlug?: string;
    headerImageField?: keyof BusinessMeta;
};

export function AdminEntityList<T>({
                                       entityName,
                                       firebasePath,
                                       getLabel,
                                       getSlug,
                                       newRoute,
                                       editRoute,
                                       businessSlug,
                                       headerImageField // Деструктурируем новый пропс
                                   }: AdminEntityListProps<T>) {
    const navigate = useNavigate();
    const { lang = "en" } = useParams<{ lang?: string }>();
    const [items, setItems] = useState<Record<string, T>>({});

    const { slug, meta } = useBusiness();
    const displayName = meta?.name?.en || meta?.shortName?.en || slug;

    // Логика сохранения картинки
    const handleHeaderImageChange = async (url: string) => {
        if (!businessSlug || !headerImageField) return;
        await set(dbRef(db, `businesses/${businessSlug}/meta/${headerImageField}`), url);
    };

    const currentHeaderImage = headerImageField ? (meta as any)?.[headerImageField] : "";

    useEffect(() => {
        if (!firebasePath) return;

        const path = businessSlug ? `businesses/${businessSlug}/${firebasePath}` : firebasePath;
        const refDb = ref(db, path);

        const unsubscribe = onValue(refDb, snapshot => {
            setItems(snapshot.val() || {});
        });

        return () => unsubscribe();
    }, [firebasePath, businessSlug]);

    return (
        <div className="p-6 max-w-5xl mx-auto">
            {/* HEADER */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-black uppercase tracking-tight">
                    {displayName} - {entityName}
                </h1>
                <button
                    onClick={() => navigate(newRoute)}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 transition font-bold"
                >
                    <SolarPowerBold className="size-5" />
                    New {entityName.slice(0, -1)}
                </button>
            </div>


            {headerImageField && (
                <div className="mb-10 p-6 bg-gray-50 rounded-[32px] border border-gray-100 flex flex-col items-center">
                    <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest">
                        Header Image for {entityName}
                    </label>
                    <div className="w-full max-w-md">
                        <ImageInputBlock
                            image={currentHeaderImage || ""}
                            onChange={handleHeaderImageChange}
                        />
                    </div>
                </div>
            )}


            {/* LIST */}
            <div className="space-y-3">
                {Object.entries(items).length === 0 && (
                    <div className="p-10 text-center border-2 border-dashed rounded-2xl text-gray-400 font-bold uppercase text-sm">
                        No {entityName.toLowerCase()} yet
                    </div>
                )}

                {Object.entries(items).map(([id, item]) => (
                    <div
                        key={id}
                        onClick={() => navigate(editRoute(id))}
                        className="p-5 border rounded-2xl hover:bg-gray-50 cursor-pointer transition flex justify-between items-center"
                    >
                        <div>
                            {getSlug && (
                                <p className="text-xs text-gray-400 font-mono">{getSlug(item)}</p>
                            )}
                            <h2 className="font-bold text-lg">{getLabel(item)}</h2>
                        </div>
                        <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">
                            Edit →
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}