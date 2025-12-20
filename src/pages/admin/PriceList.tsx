import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase.ts";
import SolarAddSquareBold from "~icons/solar/add-square-bold";
import SolarHashtagBold from "~icons/solar/hashtag-bold";
import SolarSettingsBold from "~icons/solar/settings-bold";

// Models
import type { PriceModel } from "../../models/Price.ts";

export default function PriceList() {
    const [prices, setPrices] = useState<Record<string, PriceModel>>({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const priceRef = ref(db, "prices");
        const unsubscribe = onValue(priceRef, (snapshot) => {
            const data = snapshot.val();
            setPrices(data || {});
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // Вспомогательная функция для подсчета всех строк в таблице
    const getTotalItems = (price: PriceModel) => {
        return price.sections?.reduce((acc, section) => acc + (section.items?.length || 0), 0) || 0;
    };

    if (loading) return <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-[0.3em] uppercase">Loading Pricing...</div>;

    return (
        <div className="p-8 max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div>
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter uppercase">Pricing Tables</h1>
                    <p className="text-gray-400 text-sm font-medium mt-1">Manage service costs and price categories</p>
                </div>

                <button
                    onClick={() => navigate("/admin/prices/new")}
                    className="flex items-center justify-center gap-3 rounded-[2rem] bg-gray-900 hover:bg-black text-white px-8 py-4 transition-all shadow-xl shadow-gray-200 active:scale-95 text-xs font-black uppercase tracking-widest"
                >
                    <SolarAddSquareBold className="text-lg" />
                    <span>Create New Table</span>
                </button>
            </div>

            {/* Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(prices).map(([key, price]) => (
                    <div
                        key={key}
                        onClick={() => navigate(`/admin/prices/${key}`)}
                        className="group relative p-8 bg-white border border-gray-100 rounded-[40px] hover:shadow-2xl hover:shadow-gray-200/50 transition-all cursor-pointer overflow-hidden"
                    >
                        {/* Декоративный фон при ховере */}
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform">
                            <SolarSettingsBold className="text-8xl text-gray-900" />
                        </div>

                        <div className="relative z-10">
                            <div className="flex items-start justify-between mb-4">
                                <div className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">
                                    {price.serviceIds?.length || 0} Services Linked
                                </div>
                                <div className="flex items-center gap-1 text-gray-300">
                                    <SolarHashtagBold className="text-xs" />
                                    <span className="text-[10px] font-mono font-bold uppercase">{key.slice(-6)}</span>
                                </div>
                            </div>

                            <h2 className="text-2xl font-black text-gray-800 leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                                {price.category?.uk || price.category?.en || "Untitled Category"}
                            </h2>

                            <div className="flex items-center gap-6 mt-6">
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Rows</span>
                                    <span className="text-lg font-bold text-gray-700">{getTotalItems(price)}</span>
                                </div>
                                <div className="w-px h-8 bg-gray-100"></div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Sections</span>
                                    <span className="text-lg font-bold text-gray-700">{price.sections?.length || 0}</span>
                                </div>
                                <div className="w-px h-8 bg-gray-100"></div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest">Offers</span>
                                    <span className="text-lg font-bold text-gray-700">{price.specials ? "YES" : "NO"}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-gray-50 flex items-center justify-between">
               <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest group-hover:translate-x-1 transition-transform inline-block">
                 Edit Price Table →
               </span>
                        </div>
                    </div>
                ))}

                {Object.keys(prices).length === 0 && (
                    <div className="col-span-full py-32 text-center border-2 border-dashed border-gray-100 rounded-[40px]">
                        <p className="text-gray-300 font-black uppercase tracking-widest text-sm">No price lists found</p>
                    </div>
                )}
            </div>
        </div>
    );
}