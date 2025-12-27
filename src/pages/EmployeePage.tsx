import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { LocalizedText } from "../models/LocalizedText";
import { Button } from "@heroui/react";
import SolarUnreadOutline from "~icons/solar/unread-outline";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { ref, get } from "firebase/database";

export default function EmployeePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [employee, setEmployee] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const topImage =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const snapshot = await get(ref(db, "employees"));
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val());
          const found = data.find((emp: any) => emp.slug === slug);
          setEmployee(found || null);
        } else {
          setEmployee(null);
        }
      } catch (err) {
        console.error("Error fetching employee:", err);
        setEmployee(null);
      } finally {
        setLoading(false);
      }
    }

    fetchEmployee();
  }, [slug]);

  if (loading) {
    return <div className="p-8 text-center text-lg">Завантаження...</div>;
  }

  if (!employee) {
    return (
        <div className="p-8 text-center text-red-500 text-xl">
          Співробітника не знайдено
        </div>
    );
  }

  return (
      <div className="w-full items-center justify-center">
        {topImage && <TopImage source={topImage} />}

        <div className="w-full px-4 md:px-10 lg:px-20 max-w-[1440px]">
          <Breadcrumbs employeeSlug={employee.slug} />

          <h1 className="text-3xl md:text-5xl mb-[2.5rem] font-[700] md:text-center text-foreground">
            {employee.fullName?.[lang] || "Без імені"}
          </h1>

          <div
              className="mt-10 pb-20 flex flex-col md:flex-row gap-[5.5rem] rounded-[10rem]
          shadow-md transition overflow-hidden duration-500 p-[1.5rem] hover:shadow-xl"
          >
            {/* ЛЕВАЯ КОЛОНКА */}
            <div className="flex flex-col items-start md:w-[40rem] w-full ">
              {employee.photo && (
                  <img
                      src={employee.photo}
                      alt={employee.fullName?.[lang] || "Employee"}
                      className="w-full object-cover rounded-xl shadow-lg md:h-[43rem] mb-[1.5rem]"
                  />
              )}

              <div className="text-[1.75rem] font-[700] mb-[1.5rem]">
                {employee.fullName?.[lang] || "Без імені"}
              </div>

              <p className="text-xl md:text-[1.5rem] pl-[1.5rem] text-foreground pb-[3.5rem]">
                {employee.position?.[lang] || "Без посади"}
              </p>

              <Button
                  as={Link}
                  to={`/${lang}/employees/${employee.slug}`}
                  className="md:w-fit py-[1.25rem] px-[3.5rem] rounded-[2.5rem]
                flex items-center justify-center text-white text-[1.25rem]
                font-semibold bg-black object-cover hover:bg-[var(--primary)]
                duration-500 w-fit"
              >
                {t("employees.bookAppointment", {
                  name: employee.shortName?.[lang] || "",
                })}
              </Button>
            </div>

            {/* ПРАВАЯ КОЛОНКА */}
            <div className="w-full">
              <div className="space-y-10">
                {/* Специализации */}
                {employee.specializations && (
                    <div className="md:min-h-[30rem]">
                      <p className="text-xl font-bold text-foreground mb-[2.5rem]">
                        {t("employeePage.specializations")}:
                      </p>

                      <ul className="list-disc list-inside space-y-2 mb-10">
                        {employee.specializations.map(
                            (spec: LocalizedText, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-center text-foreground"
                                >
                                  <SolarUnreadOutline className="mr-3 md:size-[2rem] size-[1rem]" />
                                  <span className="text-xl">{spec[lang]}</span>
                                </li>
                            )
                        )}
                      </ul>
                    </div>
                )}

                {/* Образование */}
                {employee.education && (
                    <>
                      <p className="text-xl font-bold text-foreground mb-[2.5rem]">
                        {t("employeePage.education")}:
                      </p>
                      <ul className="list-disc list-inside mb-[2.5rem] text-foreground">
                        {employee.education.map(
                            (edu: LocalizedText, index: number) => (
                                <li
                                    key={index}
                                    className="flex items-center text-foreground"
                                >
                                  <SolarUnreadOutline className="mr-3 md:size-[2rem] size-[1rem]" />
                                  <span className="text-xl">{edu[lang]}</span>
                                </li>
                            )
                        )}
                      </ul>
                    </>
                )}
              </div>
            </div>
          </div>

          {/* СЕРТИФИКАТЫ */}
          {employee.certificates && employee.certificates.length > 0 && (
              <section className="mt-16">
                <h2 className="text-3xl font-bold text-foreground text-center mb-8">
                  {t("employeePage.certificates")}:
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {employee.certificates.map((cert: string, index: number) => (
                      <a
                          href={cert}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={index}
                          className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
                      >
                        <img
                            src={cert}
                            alt={`Certificate ${index + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </a>
                  ))}
                </div>
              </section>
          )}
        </div>
      </div>
  );
}
