import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { useFetchData } from "../hooks/useFetchData.ts"; // Твой хук
import type { Employee } from "../models/Employee.ts";

export default function Employees() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const { data: relatedData, loading } = useFetchData(["employees"]);

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  const minExperience = 7;

  const employees = (relatedData.employees || []) as Employee[];

  if (loading) return (
      <div className="p-20 text-center animate-pulse font-black text-gray-300 tracking-widest uppercase">
        {t("loading") || "Loading Specialists..."}
      </div>
  );

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {t("employees.title")}
            </h2>
            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              {t("employees.subtitle", { years: minExperience })}
            </span>
            <p className="text-base lg:text-2xl font-normal text-foreground">
              {t("employees.experience")}
            </p>
          </div>

          {/* Контейнер с карточками */}
          <div className="flex flex-wrap gap-10 justify-center w-full mb-20">
            {employees.map((item, index) => (
                <Link
                    key={item.id || index}
                    to={`/${lang}/employees/${item.slug || ""}`}
                    className="group flex flex-col md:flex-row bg-primary rounded-[4rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden w-full max-w-[45rem] min-h-[25rem]"
                >
                  {/* Левая часть: Текст и Кнопка */}
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
                        as={Link}
                        to={`/${lang}/employees/${item.slug || ""}`}
                        className="w-full md:w-fit px-8 py-6 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm uppercase tracking-widest transition-all active:scale-95"
                    >
                      {t("employees.bookAppointment", {
                        name: item?.shortName?.[lang] || "",
                      })}
                    </Button>
                  </div>

                  {/* Правая часть: Фото */}
                  <div className="md:w-1/2 h-[25rem] md:h-auto overflow-hidden">
                    {item.photo ? (
                        <img
                            src={item.photo}
                            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest">
                          No photo
                        </div>
                    )}
                  </div>
                </Link>
            ))}
          </div>
        </div>
      </div>
  );
}