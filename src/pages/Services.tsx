import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { TopImage } from "../components/TopImage.tsx";
import {useFetchData} from "../hooks/useFetchData.ts";

export default function Services() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const { data: relatedData, loading } = useFetchData([
    "services",
    "prices",
    "blogs",
    "employees",
    "specials",
  ]);

  const mainServices = relatedData.services

  const imagee = "https://nextmedasia.com/wp-content/uploads/2022/11/lede.jpg";

  if (loading) return <p className="text-center py-10">Loading . . .</p>;

  return (
      <div className="w-full items-center justify-center ">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("services.title")}
            </h2>

            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]"></span>

            <p className="md:text-2xl text-[1.25rem] font-normal text-foreground duration-500">
              {t("services.description")}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {Object.values(mainServices).map((service) => (
                <Link
                    key={service.id}
                    to={`/${lang}/services/${service.slug}`}
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
                          alt={service.id}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                  )}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                    <p className="text-[1.5rem] font-normal p-[1.5rem]">
                      {service.title?.[lang] || "No title"}
                    </p>
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
}
