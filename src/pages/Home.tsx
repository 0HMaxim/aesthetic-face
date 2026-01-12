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

  const { meta } = useBusiness();
  const { info, loading } = useGeneralInfo(businessSlug);

  const imageSrc = meta?.homeHeaderImage || meta?.logo || "https://nextmedasia.com/wp-content/uploads/2022/11/lede.jpg";

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
        <TopImage source={imageSrc} />

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] border-b border-gray-100">
          <span className="inline-block bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-4">
            {meta?.type || "Business"}
          </span>

            <h1 className="text-5xl lg:text-8xl font-black mb-6 tracking-tighter uppercase leading-none">
              {meta?.name?.[locale] ?? businessSlug}
            </h1>

            {meta?.slogan?.[locale] && (
                <p className="text-xl md:text-2xl font-medium text-blue-600/60 uppercase tracking-widest mb-10">
                  {meta.slogan[locale]}
                </p>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-10">
              <div className="lg:col-span-8">
                {meta?.description?.[locale] ? (
                    <div className="prose prose-xl max-w-none">
                      <p className="text-2xl leading-relaxed text-gray-600 font-light">{meta.description[locale]}</p>
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
              <h2 className="text-4xl font-black uppercase tracking-tighter">Current Specials</h2>
              <Link
                  to={`/${locale}/${businessSlug}/specials`}
                  className="text-xs font-black uppercase tracking-widest text-blue-600 hover:text-black transition-colors"
              >
                View All →
              </Link>
            </div>
            <SpecialsSlider />
          </div>
        </div>
      </div>
  );
}
