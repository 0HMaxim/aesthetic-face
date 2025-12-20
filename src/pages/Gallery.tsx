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

interface EmployeeOption {
    id: string;
    title: string;
}

export default function Gallery() {
    const { i18n, t } = useTranslation();
    const lang = i18n.language as keyof LocalizedText;

    const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

    const [services, setServices] = useState<Service[]>([]);
    const [photos, setPhotos] = useState<Photo[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);

    const [selectedService, setSelectedService] = useState("all");
    const [selectedEmployee, setSelectedEmployee] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    // ---------- Загрузка данных ----------
    useEffect(() => {
        async function fetchData() {
            try {
                const [servicesSnap, photosSnap, employeesSnap] = await Promise.all([
                    get(ref(db, "services")),
                    get(ref(db, "photos")),
                    get(ref(db, "employees")),
                ]);

                if (servicesSnap.exists()) {
                    const sData = servicesSnap.val();
                    setServices(Object.keys(sData).map(key => ({ id: key, ...sData[key] })));
                }
                if (photosSnap.exists()) {
                    const pData = photosSnap.val();
                    setPhotos(Object.keys(pData).map(key => ({ id: key, ...pData[key] })));
                }
                if (employeesSnap.exists()) {
                    const eData = employeesSnap.val();
                    setEmployees(Object.keys(eData).map(key => ({ id: key, ...eData[key] })));
                }
            } catch (err) {
                console.error("Error loading gallery data:", err);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    // Опции для Сервисов
    const serviceOptions = useMemo(
        () => [
            { id: "all", title: t("FAQ.allServices") || "All Services" },
            ...services.map((s) => ({
                id: s.id,
                title: s.title[lang] || "Untitled Service"
            })),
        ],
        [services, lang, t]
    );

    // Опции для Сотрудников (Исправленная ошибка TS2322)
    const employeeOptions: EmployeeOption[] = useMemo(
        () => [
            { id: "all", title: t("gallery.allEmployees") || "Усі працівники" },
            ...employees
                .filter((e) => e.id !== undefined) // Гарантируем наличие id
                .map((e) => ({
                    id: e.id as string,
                    title: String((e.fullName as LocalizedText)?.[lang] || e.fullName || "Unnamed Employee")
                })),
        ],
        [employees, lang, t]
    );

    // Фильтрация Фото (Без subservices)
    const filteredPhotos = useMemo(() => {
        return photos.filter((photo) => {
            const matchesService = selectedService === "all" || photo.serviceId === selectedService;
            const matchesEmployee = selectedEmployee === "all" || photo.employeeId === selectedEmployee;

            return matchesService && matchesEmployee;
        });
    }, [photos, selectedService, selectedEmployee]);

    // Обогащение данных для списка
    const enrichedPhotos = useMemo(
        () =>
            filteredPhotos.map((photo) => ({
                ...photo,
                service: services.find((s) => s.id === photo.serviceId),
                employee: employees.find((e) => e.id === photo.employeeId),
            })),
        [filteredPhotos, services, employees]
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
                        <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">
                            {t("gallery.subtitle")}
                        </p>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
                            <span className="text-foreground text-[1.5rem] font-[600]">{t("FAQ.direction")}</span>

                            {/* Селект для Послуг */}
                            <select
                                className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                                value={selectedService}
                                onChange={(e) => {
                                    setSelectedService(e.target.value);
                                    setSelectedEmployee("all");
                                    setCurrentPage(1);
                                }}
                            >
                                {serviceOptions.map((s) => (
                                    <option key={s.id} value={s.id}>
                                        {s.title}
                                    </option>
                                ))}
                            </select>

                            {/* Селект для Працівників */}
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