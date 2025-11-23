import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import PhotoList from "../components/PhotoList.tsx";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { db } from "../firebase.ts";
import { ref, get } from "firebase/database";
import type { LocalizedText } from "../models/LocalizedText.ts";
import type { Photo } from "../models/Photo";
import type { Employee } from "../models/Employee.ts";

interface Service {
  id: string;
  title: LocalizedText;
}

interface Subservice {
  id: string;
  serviceId: string;
  title: LocalizedText;
}

// ⭐️ Новий інтерфейс для опцій працівників (щоб використовувати fullName)
interface EmployeeOption {
  id: string;
  title: string;
}

export default function Gallery() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as keyof LocalizedText;

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  const [services, setServices] = useState<Service[]>([]);
  const [subservices, setSubservices] = useState<Subservice[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);

  const [selectedService, setSelectedService] = useState("all");
  const [selectedSubservice, setSelectedSubservice] = useState("all");
  // ⭐️ ЗМІНА: Додано стейт для обраного працівника
  const [selectedEmployee, setSelectedEmployee] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);

  // ---------- Завантаження даних ----------
  useEffect(() => {
    async function fetchData() {
      try {
        const [servicesSnap, subservicesSnap, photosSnap, employeesSnap] = await Promise.all([
          get(ref(db, "services")),
          get(ref(db, "subservices")),
          get(ref(db, "photos")),
          get(ref(db, "employees")),
        ]);

        if (servicesSnap.exists()) setServices(Object.values(servicesSnap.val()) as Service[]);
        if (subservicesSnap.exists()) setSubservices(Object.values(subservicesSnap.val()) as Subservice[]);
        if (photosSnap.exists()) setPhotos(Object.values(photosSnap.val()) as Photo[]);
        if (employeesSnap.exists()) setEmployees(Object.values(employeesSnap.val()) as Employee[]);
      } catch (err) {
        console.error("Error loading gallery data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  // ⭐️ ЗМІНА: Опції для Сервісів (без змін)
  const serviceOptions = useMemo(
      () => [
        { id: "all", title: t("FAQ.allServices") },
        ...services.map((s) => ({ id: s.id, title: s.title[lang] })),
      ],
      [services, lang, t]
  );

  // ⭐️ ЗМІНА: Опції для Подуслуг (без змін)
  const subserviceOptions = useMemo(() => {
    if (selectedService === "all") return [{ id: "all", title: t("FAQ.allServices") }];
    const filtered = subservices.filter((ss) => ss.serviceId === selectedService);
    return [
      { id: "all", title: t("FAQ.allServices") },
      ...filtered.map((ss) => ({ id: ss.id, title: ss.title[lang] })),
    ];
  }, [subservices, selectedService, lang, t]);

  // ⭐️ ЗМІНА: Опції для Працівників
  const employeeOptions: EmployeeOption[] = useMemo(
      () => [
        { id: "all", title: t("gallery.allEmployees") || "Усі працівники" },
        // Припускаємо, що fullName - це LocalizedText, а ми беремо поточну мову
        ...employees.map((e) => ({ id: e.id, title: (e.fullName as LocalizedText)?.[lang] || e.fullName?.uk || "Unnamed Employee" })),
      ],
      [employees, lang, t]
  );

  // ⭐️ ЗМІНА: ОНОВЛЕНА ЛОГІКА ФІЛЬТРАЦІЇ
  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      let matchesService = true;
      let matchesSubservice = true;
      let matchesEmployee = true; // ⭐️ Новий критерій

      // Фільтрація за Працівником
      if (selectedEmployee !== "all") {
        matchesEmployee = photo.employeeId === selectedEmployee;
      }

      // Фільтрація за Подуслугою
      if (selectedSubservice !== "all") {
        matchesSubservice = photo.subserviceId === selectedSubservice;
      }

      // Фільтрація за Основною Послугою
      if (selectedService !== "all") {
        // Якщо фото прямо пов'язане з послугою
        if (photo.serviceId === selectedService) {
          matchesService = true;
        }
        // АБО, якщо фото пов'язане через подуслугу, яка належить до цієї послуги
        else if (photo.subserviceId) {
          const sub = subservices.find((s) => s.id === photo.subserviceId);
          matchesService = sub?.serviceId === selectedService;
        }
        // Інакше, якщо обрано послугу, але фото не має до неї відношення
        else {
          matchesService = false;
        }
      }

      // Фото повинно відповідати ВСІМ активним фільтрам
      return matchesEmployee && matchesSubservice && matchesService;
    });
  }, [photos, selectedService, selectedSubservice, selectedEmployee, subservices]);

  // ⭐️ ЗМІНА: Enriched Photos (без змін, просто повний код)
  const enrichedPhotos = useMemo(
      () =>
          filteredPhotos.map((photo) => ({
            ...photo,
            service: photo.serviceId ? services.find((s) => s.id === photo.serviceId) : undefined,
            subservice: photo.subserviceId ? subservices.find((ss) => ss.id === photo.subserviceId) : undefined,
            employee: photo.employeeId ? employees.find((d) => d.id === photo.employeeId) : undefined,
          })),
      [filteredPhotos, services, subservices, employees]
  );

  if (loading) return <p className="p-6 text-center">{t("loading")}</p>;

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("gallery.title")}</h2>

            <div className="md:flex justify-between block">
              <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">{t("gallery.subtitle")}</p>

              <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
                <span className="text-foreground text-[1.5rem] font-[600]">{t("FAQ.direction")}</span>

                {/* Селект для Послуг (без змін) */}
                <select
                    className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                    value={selectedService}
                    onChange={(e) => {
                      setSelectedService(e.target.value);
                      setSelectedSubservice("all");
                      setSelectedEmployee("all"); // ⭐️ Скидаємо працівника при зміні послуги
                      setCurrentPage(1);
                    }}
                >
                  {serviceOptions.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title}
                      </option>
                  ))}
                </select>

                  {/* Селект для Подуслуг (без змін) */}
                  <select
                      className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                      value={selectedSubservice}
                      onChange={(e) => {
                        setSelectedSubservice(e.target.value);
                        setSelectedEmployee("all"); // ⭐️ Скидаємо працівника при зміні подуслуги
                        setCurrentPage(1);
                      }}
                      disabled={selectedService === "all"}
                  >
                  {subserviceOptions.map((ss) => (
                      <option key={ss.id} value={ss.id}>
                        {ss.title}
                      </option>
                  ))}
                </select>

                {/* ⭐️ ЗМІНА: Селект для Працівників */}
                <select
                    className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                    value={selectedEmployee}
                    onChange={(e) => {
                      setSelectedEmployee(e.target.value);
                      setCurrentPage(1);
                    }}
                >
                  {employeeOptions.map((e) => (
                      <option key={e.id} value={e.id}>
                        {e.title}
                      </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <PhotoList photos={enrichedPhotos} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
  );
}