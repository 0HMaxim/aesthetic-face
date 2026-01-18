import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { TopImage } from "../components/TopImage.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";
import { useBusiness } from "../context/BusinessContext.tsx";
import type { Service } from "../models/Service.ts";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";

export default function Services() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { businessSlug } = useParams<{ businessSlug: string }>();

  const { data, loading } = useFetchData<{
    services: Service[];
  }>(["services"], businessSlug);

  const { meta } = useBusiness();

  const getTabLabel = (localizedValue: any) => {
    if (!localizedValue) return "";
    return localizedValue[lang] || localizedValue["en"] || "";
  };

  const services = data.services ?? [];

  const dynamicTab = meta?.tabs
      ? Object.values(meta.tabs).find(t => t.route === 'services' || t.route === '/services')
      : null;

  const headerImage = dynamicTab?.headerImage || "";

  if (loading) {
    return <p className="text-center py-10 font-black text-gray-300 animate-pulse uppercase">Loading...</p>;
  }

  return (
      <div className="w-full items-center justify-center">
        <TopImage source={headerImage} />

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {getTabLabel(dynamicTab?.title) || t("services.title")}
            </h2>
            <p className="md:text-2xl text-[1.25rem] font-normal text-foreground/80 duration-500 max-w-[60rem]">
              {getTabLabel(dynamicTab?.description)|| t("services.subtitle")}
            </p>
          </div>


          <div className="flex flex-wrap justify-center gap-8 mb-20">
            {services.map((service: Service) => (
                <Link
                    key={service.id}
                    to={`/${lang}/${businessSlug}/services/${service.slug}`}
                    className="group rounded-[10rem] shadow-md overflow-hidden
                      lg:max-w-[30rem]
                      md:max-h-[23rem]
                      md:max-w-[25rem]
                      max-[1024px]:min-w-[48%]
                      h-[20rem]
                      w-[24rem]
                      hover:bg-[var(--primary)] transition duration-500 hover:shadow-xl relative"
                >
                  {service.mainImage && (
                      <img
                          src={service.mainImage}
                          alt={getTabLabel(service.title)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full p-4 text-center">
                    <p className="text-[1.5rem] font-bold text-white drop-shadow-md">
                      {getTabLabel(service.title)}
                    </p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
}