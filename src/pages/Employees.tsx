import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ref, get } from "firebase/database";
import { db } from "../firebase"; // путь к твоему firebase.ts
import { useTranslation } from "react-i18next";
import { Button } from "@heroui/react";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import type { Employee } from "../models/Employee.ts";

export default function Employees() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  const minExperience = 7; // динамически укажешь сам

  // ---------- Загрузка сотрудников ----------
  useEffect(() => {
    get(ref(db, "employees")).then((snapshot) => {
      if (snapshot.exists()) {
        const data = Object.values(snapshot.val()) as Employee[];
        setEmployees(data);
      }
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;

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
            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
              {t("employees.experience")}
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center w-full">
            {employees.map((item, index) => (
                <Link
                    key={item.id || index}
                    to={`/${lang}/employees/${item.slug || ""}`}
                    className="group rounded-[10rem] shadow-md transition overflow-hidden
                 flex relative
                 w-full
                 md:w-[48%]
                 xl:max-w-[48%]
                 min-[1440px]:max-w-[32%]
                 max-[1440px]:min-w-[48%]
                 max-h-[35rem]
                 max-[768px]:min-w-full
                 bg-primary duration-500
                 hover:shadow-xl"
                >
                  <div className="pl-[3.5rem] pt-[3.5rem] text-foreground duration-500 w-fit">
                    <h2 className="md:text-[1.6rem] text-[1.5rem] font-extrabold mb-[1rem]">
                      {item?.fullName?.[lang] || "Без имени"}
                    </h2>

                    <p className="md:text-[1.2rem] text-[1rem] font-light mb-[3.5rem] pb-[4.5rem] pl-[0.5rem] duration-500">
                      {item?.position?.[lang] || "Без должности"}
                    </p>

                    <Button
                        as={Link}
                        to={`/${lang}/employees/${item.slug || ""}`}
                        className="md:w-fit p-[1rem] rounded-[3.5rem]
            flex items-center justify-center
            text-white font-semibold text-[0.85rem]
            xl:text-[1.1rem]
            md:text-[0.9rem]
            bg-black hover:bg-[var(--primary)]
            duration-500 w-fit
            bottom-0 absolute mb-[3.5rem]"
                    >
                      {t("employees.bookAppointment", {
                        name: item?.shortName?.[lang] || "",
                      })}
                    </Button>
                  </div>

                  {item.photo ? (
                      <Button
                          as={Link}
                          to={`/${lang}/employees/${item.slug || ""}`}
                          className="overflow-hidden w-4/6 min-h-full block p-0"
                      >
                        <img
                            src={item.photo}
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                      </Button>
                  ) : (
                      <div className="w-4/6 bg-gray-300 flex items-center justify-center text-gray-600">
                        No photo
                      </div>
                  )}
                </Link>
            ))}
          </div>

        </div>
      </div>
  );
}
