import { useEffect, useState } from "react";
import {Link, Outlet, useParams, useNavigate, useLocation} from "react-router-dom";
import { ref, get, set } from "firebase/database";
import { db } from "../../firebase";
import type { BusinessMeta } from "../../models/Meta";
import LanguageSwitcher from "../../components/Layout/LanguageSwitcher.tsx";
import { BusinessContext } from "../../context/BusinessContext.tsx";

const translations = {
    uk: {
        title: "Адмін Панель",
        home: "Головна",
        selectBusiness: "Оберіть бізнес:",
        createBusiness: "➕ Створити новий бізнес",
        newBusinessPrompt: "Введіть slug нового бізнесу (латиницею, без пробілів):",
        businessCreated: "Бізнес створено!",
        meta: "💼 Meta",
        generalinfo: "🏢 General Info",
        blogs: "📝 Блоги",
        employees: "👨‍⚕️ Співробітники",
        faq: "❓ FAQ",
        prices: "💲 Ціни",
        services: "⚙️ Сервіси",
        specials: "🈹 Акції",
        photos: "📸 Фото"
    },
    ru: {
        title: "Админ Панель",
        home: "Главная",
        selectBusiness: "Выберите бизнес:",
        createBusiness: "➕ Создать новый бизнес",
        newBusinessPrompt: "Введите slug нового бизнеса (латиницей, без пробелов):",
        businessCreated: "Бизнес создан!",
        meta: "💼 Meta",
        generalinfo: "🏢 General Info",
        blogs: "📝 Блоги",
        employees: "👨‍⚕️ Сотрудники",
        faq: "❓ FAQ",
        prices: "💲 Цены",
        services: "⚙️ Услуги",
        specials: "🈹 Акции",
        photos: "📸 Фото"
    },
    en: {
        title: "Admin Panel",
        home: "Home",
        selectBusiness: "Select business:",
        createBusiness: "➕ Create New Business",
        newBusinessPrompt: "Enter new business slug (latin, no spaces):",
        businessCreated: "Business created!",
        meta: "💼 Meta",
        generalinfo: "🏢 General Info",
        blogs: "📝 Blogs",
        employees: "👨‍⚕️ Employees",
        faq: "❓ FAQ",
        prices: "💲 Prices",
        services: "⚙️ Services",
        specials: "🈹 Specials",
        photos: "📸 Photos"
    },
    de: {
        title: "Admin-Bereich",
        home: "Startseite",
        selectBusiness: "Geschäft wählen:",
        createBusiness: "➕ Neues Geschäft erstellen",
        newBusinessPrompt: "Geben Sie slug des neuen Geschäfts ein (lateinisch, keine Leerzeichen):",
        businessCreated: "Geschäft erstellt!",
        meta: "💼 Meta",
        generalinfo: "🏢 General Info",
        blogs: "📝 Blogs",
        employees: "👨‍⚕️ Mitarbeiter",
        faq: "❓ FAQ",
        prices: "💲 Preise",
        services: "⚙️ Dienstleistungen",
        specials: "🈹 Angebote",
        photos: "📸 Fotos"
    },
};


export default function AdminPage() {
    const { lang = "en", businessSlug } = useParams<{ lang?: string; businessSlug?: string }>();
    const t = translations[lang as keyof typeof translations] || translations.en;
    const location = useLocation();
    const [businesses, setBusinesses] = useState<{ slug: string; meta: BusinessMeta }[]>([]);
    const [selectedBusiness, setSelectedBusiness] = useState<string>(businessSlug || "");

    const navigate = useNavigate();

    // Загружаем список бизнесов
    useEffect(() => {
        const fetchBusinesses = async () => {
            const snapshot = await get(ref(db, "businesses"));
            if (snapshot.exists()) {
                const data = snapshot.val();
                const list = Object.keys(data).map(slug => ({ slug, meta: data[slug].meta }));
                setBusinesses(list);
            }
        };
        fetchBusinesses();
    }, []);

    useEffect(() => {
        if (businessSlug) {
            setSelectedBusiness(businessSlug);
        }
    }, [businessSlug]);

    // Создание нового бизнеса
    const handleCreateBusiness = async () => {
        const slug = prompt(t.newBusinessPrompt);
        if (!slug) return;

        const newRef = ref(db, `businesses/${slug}`);

        // Создаем абсолютно пустую структуру мета-данных
        const emptyMeta : BusinessMeta = {
            name: { uk: "", ru: "", en: "", de: "" },
            type: "other",
        };

        await set(newRef, {
            slug: slug, // сохраняем введенный слаг
            meta: emptyMeta,
            generalInfo: {
                address: { uk: "", ru: "", en: "", de: "" },
                phone: { uk: "", ru: "", en: "", de: "" },
                email: "",
                working_hours: [],
                messengers: { telegram: "", viber: "", whatsapp: "" },
                socials: { instagram: "", facebook: "" },
                map: "",
            },
        });

        alert(t.businessCreated);

        // Добавляем в локальный стейт, чтобы в списке сразу появился слаг
        setBusinesses(prev => [...prev, { slug, meta: emptyMeta }]);
        setSelectedBusiness(slug);
        navigate(`/${lang}/admin/${slug}/meta`);
    };

    return (
        <div className="min-h-screen bg-gray-50 text-foreground p-8">
            <div className="flex">
                {businessSlug && (
                    <Link
                        to={`/${lang}/${businessSlug}/`}
                        className="hidden sm:flex items-center gap-2 bg-black/5 hover:bg-black text-black hover:text-white px-5 py-3 rounded-2xl transition-all duration-300 font-black text-[10px] uppercase tracking-widest border border-black/5 shadow-sm"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                        Home
                    </Link>
                )}

                <div className="bg-blue-500 rounded-3xl ml-4 h-10">
                    <LanguageSwitcher />
                </div>

            </div>


            <h1 className="text-3xl font-bold mb-6">{t.title}</h1>

            {/* Dropdown для выбора бизнеса + кнопка создать */}
            <div className="mb-6 flex items-center gap-4">
                <label className="font-semibold">{t.selectBusiness}</label>
                <select
                    value={selectedBusiness}
                    onChange={e => {
                        const slug = e.target.value;
                        setSelectedBusiness(slug);
                        if (slug) navigate(`/${lang}/admin/${slug}/meta`);
                    }}
                    className="p-2 border rounded"
                >
                    <option value="">-- --</option>
                    {businesses.map(b => {
                        const slug = b.slug;

                        return (
                            <option key={slug} value={slug}>
                                {slug}
                            </option>
                        );
                    })}
                </select>


                <button
                    onClick={handleCreateBusiness}
                    className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    {t.createBusiness}
                </button>
            </div>

            {/* Меню админки только если выбран бизнес */}
            {selectedBusiness && (
                <BusinessContext.Provider
                    value={{
                        slug: selectedBusiness,
                        meta: businesses.find(b => b.slug === selectedBusiness)?.meta || { name: {}, type: "other" }
                    }}
                >
                    {/* Меню вкладок */}
                    <div className="flex gap-4 mb-8">
                        {["meta","generalinfo","blogs","employees","faq","prices","services","specials","photos"].map(path => {
                            const isActive = location.pathname.includes(`/${path}`);
                            return (
                                <Link
                                    key={path}
                                    to={`/${lang}/admin/${selectedBusiness}/${path}`}
                                    className={`p-4 rounded-lg shadow hover:shadow-lg transition ${isActive ? "bg-blue-600 text-white" : "bg-white"}`}
                                >
                                    {t[path as keyof typeof t]}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Тут будут рендериться страницы: MetaEditor, GeneralInfoEditor, BlogsEditor и т.д. */}
                    <Outlet />
                </BusinessContext.Provider>
            )}



        </div>
    );
}
