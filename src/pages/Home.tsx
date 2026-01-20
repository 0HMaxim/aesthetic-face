import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { TopImage } from "../components/TopImage";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { SpecialsSlider } from "../components/SpecialsSection";
import { useBusiness } from "../context/BusinessContext";
import { useGeneralInfo } from "../hooks/useGeneralInfo";

export default function Home() {
  const { i18n } = useTranslation();
  const { businessSlug, lang } = useParams<{ businessSlug?: string; lang?: string }>();
  const locale = lang || i18n.language;

  const { info, loading } = useGeneralInfo(businessSlug);

  const { meta } = useBusiness();

  const dynamicTab = meta?.tabs
      ? Object.values(meta.tabs).find(t => t.route === 'home' || t.route === '/home')
      : null;

  const headerImage =
      dynamicTab?.headerImage || "";



  if (loading) {
    return (
        <div className="p-20 text-center font-black text-gray-200 animate-pulse uppercase tracking-[0.3em]">
          Loading Business...
        </div>
    );
  }

  if (!meta) {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
          <h2 className="text-4xl font-black uppercase mb-4">Setup Required</h2>
          <p className="text-gray-500 mb-8">This business profile is not yet configured in the new database.</p>
          <Link
              to={`/${locale}/admin/${businessSlug}/meta`}
              className="bg-black text-white px-8 py-4 rounded-2xl font-bold uppercase text-sm tracking-widest hover:bg-blue-600 transition-colors"
          >
            Initialize Business Meta
          </Link>
        </div>
    );
  }

  return (
      <div className="w-full flex flex-col items-center justify-center">
        <TopImage source={headerImage} />

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] border-b border-gray-100 text-foreground duration-500 ">
          <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4 bg-primary">
            {meta?.type || "Business"}
          </span>

            <div className="py-8 mb-[3.5rem]">
              <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
                {meta?.name?.[locale] ?? businessSlug}
              </h2>


            {meta?.slogan?.[locale] && (
                <p className="text-xl md:text-2xl font-medium uppercase tracking-widest mb-10 duration-500">
                  {meta.slogan[locale]}
                </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10 ">
              <div className="lg:col-span-8 ">
                {meta?.description?.[locale] ? (
                    <div className="prose prose-xl max-w-none">
                      <p className="text-2xl leading-relaxed text-foreground font-light duration-500">{meta.description[locale]}</p>
                    </div>
                ) : (
                    <p className="text-gray-300 italic">No description provided yet.</p>
                )}
              </div>

              <div className="lg:col-span-4 bg-gray-50 p-8 rounded-[2rem] space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-gray-400">Quick Contacts</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">Address</p>
                    <p className="text-lg font-bold text-gray-800">{info?.address?.[locale] || "Address not set"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">Phone</p>
                    <p className="text-lg font-bold text-gray-800">{info?.phone?.[locale] || "No phone"}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-blue-500 tracking-widest mb-1">Email</p>
                    <p className="text-lg font-bold text-gray-800">{info?.email || "No email"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 pb-20">
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-4xl font-black text-foreground uppercase tracking-tighter duration-500">Current Specials</h2>
              <Link
                  to={`/${locale}/${businessSlug}/specials`}
                  className="text-xs font-black text-foreground uppercase tracking-widest text-blue-600 hover:text-black transition-colors duration-500"
              >
                View All →
              </Link>
            </div>
            <SpecialsSlider />
          </div>
          </div>
        </div>
      </div>
  );
}
