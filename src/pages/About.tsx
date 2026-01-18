import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { TopImage } from "../components/TopImage";
import { SpecialsSlider } from "../components/SpecialsSection";
import { useParams } from "react-router-dom";
import { useBusiness } from "../context/BusinessContext";
import { useGeneralInfo } from "../hooks/useGeneralInfo";

export default function About() {
    const { t, i18n } = useTranslation();
    const { businessSlug, lang } = useParams<{ businessSlug?: string; lang?: string }>();
    const locale = lang || i18n.language;

    const { meta } = useBusiness();
    const { info, loading } = useGeneralInfo(businessSlug);

    const dynamicTab = meta?.tabs
        ? Object.values(meta.tabs).find(t => t.route === 'about' || t.route === '/about')
        : null;

    const headerImage =
        dynamicTab?.headerImage || "";

    if (loading) {
        return <p className="text-center py-10">{t("loading")}</p>;
    }

    return (
        <div className="w-full flex flex-col items-center justify-center">

            <TopImage source={headerImage} />

            <div className="w-full px-4 md:px-[5rem]">
                <Breadcrumbs />

                <div className="py-8 mb-[2.5rem]">
                    <h2 className="text-3xl lg:text-5xl font-extrabold mb-2">
                        {meta?.shortName?.[locale] ?? meta?.name?.[locale] ?? "Business Name"}
                    </h2>

                    {meta?.slogan?.[locale] && (
                        <p className="text-xl text-gray-600 mb-4">{meta.slogan[locale]}</p>
                    )}
                </div>

                {info && (
                    <div className="mb-8">
                        <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-2">
                            {t("contact.quick_info")}
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">
                                    Address
                                </p>
                                <p className="text-lg font-bold text-gray-800">
                                    {info.address?.[locale] || "Address not set"}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">
                                    Phone
                                </p>
                                <p className="text-lg font-bold text-gray-800">
                                    {info.phone?.[locale] || "No phone"}
                                </p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">
                                    Email
                                </p>
                                <p className="text-lg font-bold text-gray-800">{info.email || "No email"}</p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="flex flex-col lg:flex-row gap-8">
                    <SpecialsSlider />
                </div>
            </div>
        </div>
    );
}
