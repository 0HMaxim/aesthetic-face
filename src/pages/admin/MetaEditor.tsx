import { useParams, useNavigate } from "react-router-dom";
import { ref, get, set, update } from "firebase/database";
import { db } from "../../firebase";
import type { BusinessMeta } from "../../models/Meta";
import type { GeneralInfo } from "../../models/GeneralInfo";
import { useBusiness } from "../../context/BusinessContext.tsx";
import ImageInputBlock from "../../components/ImageInputBlock.tsx";
import { TopImage } from "../../components/TopImage.tsx";
import { useEffect, useState } from "react";

const LANGS = ["uk", "ru", "en", "de"] as const;

export default function MetaEditor() {
    const { businessSlug, lang = "en" } = useParams<{ businessSlug: string; lang?: string }>();
    const navigate = useNavigate();
    const { slug, meta: businessContextMeta } = useBusiness();

    const [meta, setMeta] = useState<BusinessMeta | null>(null);
    const [info, setInfo] = useState<GeneralInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const displayName = businessContextMeta?.name?.[lang as keyof typeof businessContextMeta.name] || slug;

    useEffect(() => {
        if (!businessSlug) return;
        const fetchData = async () => {
            setLoading(true);
            const [metaSnap, infoSnap] = await Promise.all([
                get(ref(db, `businesses/${businessSlug}/meta`)),
                get(ref(db, `businesses/${businessSlug}/generalInfo`))
            ]);

            if (metaSnap.exists()) {
                setMeta(metaSnap.val());
            } else {
                setMeta({
                    name: {}, shortName: {}, type: "other",
                    description: {}, slogan: {}, logo: "",
                } as BusinessMeta);
            }

            if (infoSnap.exists()) {
                setInfo(infoSnap.val());
            } else {
                setInfo({ map: "" } as GeneralInfo);
            }
            setLoading(false);
        };
        fetchData();
    }, [businessSlug]);

    const handleSave = async () => {
        if (!meta || !businessSlug) return;
        try {
            await Promise.all([
                set(ref(db, `businesses/${businessSlug}/meta`), {
                    ...meta,
                    updatedAt: Date.now()
                }),
                update(ref(db, `businesses/${businessSlug}/generalInfo`), {
                    map: info?.map || ""
                })
            ]);
            navigate(`/${lang}/admin/${businessSlug}`);
        } catch (e) {
            console.error("Save error:", e);
        }
    };

    // ФУНКЦИЯ ТЕПЕРЬ ВНУТРИ — она видит meta и setMeta
    const renderHeaderInput = (label: string, field: keyof BusinessMeta) => (
        <div className="bg-gray-50/30 p-6 rounded-[32px] border border-gray-100 space-y-4 shadow-sm">
            <label className="block font-black text-gray-400 uppercase text-[10px] tracking-widest ml-1">
                {label}
            </label>
            <div className="w-full h-32 rounded-2xl overflow-hidden border border-gray-200 shadow-inner bg-white">
                <TopImage source={meta?.[field] as string} />
            </div>
            <ImageInputBlock
                image={(meta?.[field] as string) || ""}
                onChange={(url) => setMeta(prev => prev ? { ...prev, [field]: url } : null)}
            />
        </div>
    );

    if (loading || !meta || !info) return (
        <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">
            Loading Data...
        </div>
    );

    return (
        <div className="p-6 max-w-6xl mx-auto bg-white shadow-2xl rounded-[40px] my-10 border border-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-12 border-b border-gray-50 pb-8">
                <div>
                    <h1 className="text-4xl font-black text-gray-800 tracking-tighter uppercase">{displayName} — Branding</h1>
                    <p className="text-gray-400 text-sm font-medium tracking-tight mt-1">Manage identity and headers</p>
                </div>
                <div className="flex gap-6">
                    <button onClick={() => navigate(-1)} className="text-gray-400 font-black text-xs uppercase tracking-widest hover:text-gray-600 transition">Discard</button>
                    <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-2xl transition-all font-bold shadow-lg shadow-blue-100 active:scale-95">Save All Changes</button>
                </div>
            </div>

            <div className="space-y-12">
                {/* 1. Лого и Главная */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-50/30 p-8 rounded-[32px] border border-gray-100 text-center flex flex-col justify-center">
                        <label className="block font-black text-gray-400 mb-4 uppercase text-[10px] tracking-widest">Business Logo</label>
                        <ImageInputBlock image={meta.logo || ""} onChange={(url) => setMeta({ ...meta, logo: url })} />
                    </div>
                    {renderHeaderInput("Home Page Header", "homeHeaderImage" as any)}
                </div>


                {/* 2. Шапки разделов */}
                <div className="p-8 border border-gray-100 rounded-[40px] bg-gray-50/10">
                    <h3 className="text-xs font-black uppercase text-gray-400 mb-8 tracking-[0.2em] ml-2">Section Headers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {renderHeaderInput("About Header", "aboutHeaderImage" as any)}
                        {renderHeaderInput("Services Header", "servicesHeaderImage" as any)}
                        {renderHeaderInput("Specials Header", "specialsHeaderImage" as any)}
                        {renderHeaderInput("Prices Header", "pricesHeaderImage" as any)}
                        {renderHeaderInput("FAQs Header", "faqsHeaderImage" as any)}
                        {renderHeaderInput("Gallery Header", "galleryHeaderImage" as any)}

                        {renderHeaderInput("Blog Header", "blogHeaderImage" as any)}
                        {renderHeaderInput("Contacts Header", "contactsHeaderImage" as any)}
                    </div>
                </div>

                {/* 3. Slogan */}
                <div className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm">
                    <label className="block font-black text-gray-400 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">Business Slogan</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {LANGS.map(l => (
                            <div key={l} className="space-y-1">
                                <div className="text-[9px] font-black text-gray-300 uppercase ml-2">{l}</div>
                                <input
                                    className="w-full border border-gray-50 rounded-2xl p-4 text-sm bg-gray-50/30 focus:ring-4 focus:ring-blue-50 outline-none transition-all"
                                    value={meta.slogan?.[l] || ""}
                                    onChange={(e) => setMeta({ ...meta, slogan: { ...meta.slogan, [l]: e.target.value } })}
                                    placeholder="Catchy phrase..."
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. Description */}
                <div className="p-8 border border-gray-100 rounded-[32px] bg-white shadow-sm">
                    <label className="block font-black text-gray-400 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">Business Description</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {LANGS.map(l => (
                            <div key={l}>
                                <div className="text-[9px] font-black text-gray-300 mb-1 ml-2 uppercase">{l}</div>
                                <textarea
                                    className="w-full border border-gray-50 rounded-2xl p-4 text-sm bg-gray-50/30 focus:ring-4 focus:ring-blue-50 outline-none transition-all h-32 resize-none shadow-inner"
                                    value={meta.description?.[l] || ""}
                                    onChange={(e) => setMeta({ ...meta, description: { ...meta.description, [l]: e.target.value } })}
                                    placeholder="Write a few words about your company..."
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* 5. Map Section */}
                <div className="p-8 border border-gray-100 rounded-[40px] bg-blue-50/30 shadow-sm">
                    <label className="block font-black text-blue-500 mb-5 uppercase text-[10px] tracking-[0.3em] ml-1">Google Map Iframe Code</label>
                    <textarea
                        className="w-full border border-blue-100 rounded-2xl p-4 font-mono text-xs bg-white focus:ring-4 focus:ring-blue-100 outline-none transition-all h-32 resize-none shadow-inner"
                        value={info.map || ""}
                        onChange={(e) => setInfo({ ...info, map: e.target.value })}
                        placeholder='Paste <iframe src="..." ...></iframe> here'
                    />
                    {info.map && (
                        <div className="mt-4 rounded-2xl overflow-hidden h-48 border border-gray-200">
                            <div className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full" dangerouslySetInnerHTML={{ __html: info.map }} />
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-50 flex justify-end">
                <button onClick={handleSave} className="bg-blue-600 hover:bg-blue-700 text-white px-20 py-6 rounded-[2.5rem] transition-all font-black shadow-2xl active:scale-95 uppercase tracking-[0.2em] text-sm">Update Branding</button>
            </div>
        </div>
    );
}