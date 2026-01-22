import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { useFetchData } from "../hooks/useFetchData.ts";
import { useBusiness } from "../context/BusinessContext.tsx";

//import { uploadBusiness } from "../upload.ts";

export default function Employees() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";
  const { businessSlug } = useParams<{ businessSlug: string }>();

  const { data, loading } = useFetchData(["employees"], businessSlug);
  const employees = data.employees ?? [];

  const { meta } = useBusiness();

  const dynamicTab = meta?.tabs
      ? Object.values(meta.tabs).find(t => t.route === 'employees' || t.route === '/employees')
      : null;

  const headerImage =
      dynamicTab?.headerImage || "";


  const getTabLabel = (localizedValue: any) => {
    if (!localizedValue) return "";
    return localizedValue[lang] || localizedValue["en"] || "";
  };


// В самом верху файла, вне компонента:
// uploadBusiness().then(() => console.log("Done!"));

  if (loading) return <p className="text-center py-10">{t("loading") || "Loading Specialists..."}</p>;


  return (
      <div className="w-full items-center justify-center">
        <TopImage source={headerImage} />

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full text-foreground duration-500">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {getTabLabel(dynamicTab?.title) || t("employees.title")}
            </h2>

            <div className="md:flex justify-between block">
              <p className="text-base lg:text-2xl font-normal mb-4">
                {getTabLabel(dynamicTab?.description) || t("employees.subtitle")}
              </p>
          </div>

          {/* Сетка карточек — ДИЗАЙН КАК БЫЛ (Цельная ссылка) */}
          <div className="flex flex-wrap gap-10 justify-center w-full mb-20">
            {employees.map((item, index) => {
              // Формируем правильный путь: /язык/бизнес/employees/врач
              const profileUrl = `/${lang}/${businessSlug}/employees/${item.slug || ""}`;

              return (
                  <Link
                      key={item.id || index}
                      to={profileUrl}
                      className="group flex flex-col md:flex-row bg-primary rounded-[4rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden w-full max-w-[45rem] min-h-[25rem] relative"
                  >
                    <div className="flex flex-col justify-between p-8 md:p-12 md:w-1/2">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black text-foreground mb-4 leading-tight group-hover:text-gray-500 transition-colors duration-300">
                          {item?.fullName?.[lang] || "No name"}
                        </h2>

                        <p className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-8">
                          {item?.position?.[lang] || "No position"}
                        </p>
                      </div>

                      <Button
                          as="div"
                          className="w-full md:w-fit px-8 py-6 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm uppercase tracking-widest transition-all active:scale-95"
                      >
                        {t("employees.bookAppointment", {
                          name: item?.shortName?.[lang] || "",
                        })}
                      </Button>
                    </div>


                    <div className="md:w-1/2 h-[25rem] md:h-auto overflow-hidden">
                      {item.photo ? (
                          <img
                              src={item.photo}
                              alt={item?.fullName?.[lang]}
                              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                          />
                      ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                            No photo
                          </div>
                      )}
                    </div>
                  </Link>
              );
            })}
          </div>
        </div>
        </div>
      </div>
  );
}