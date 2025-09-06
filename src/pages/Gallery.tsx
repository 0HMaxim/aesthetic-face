import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { services, subservices, doctors, photos } from "../data/services";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import PhotoList from "../components/PhotoList.tsx";
import { TopImage } from "../components/TopImage.tsx";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";

export default function Gallery() {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const imagee =
      "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";

  const [selectedService, setSelectedService] = useState("all");
  const [selectedSubservice, setSelectedSubservice] = useState("all");
  const [currentPage, setCurrentPage] = useState(1); // текущая страница

  // список услуг с "Все услуги"
  const serviceOptions = useMemo(
      () => [
        { id: "all", title: t("FAQ.allServices") },
        ...services.map((s) => ({ id: s.id, title: s.title[lang] })),
      ],
      [lang, t]
  );

  const subserviceOptions = useMemo(() => {
    if (selectedService === "all")
      return [{ id: "all", title: t("FAQ.allServices") }];
    const filtered = subservices.filter((ss) => ss.serviceId === selectedService);
    return [
      { id: "all", title: t("FAQ.allServices") },
      ...filtered.map((ss) => ({ id: ss.id, title: ss.title[lang] })),
    ];
  }, [selectedService, lang, t]);

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) => {
      if (selectedSubservice !== "all") return photo.subserviceId === selectedSubservice;

      if (selectedService !== "all") {
        if (photo.serviceId === selectedService) return true;

        if (photo.subserviceId) {
          const sub = subservices.find((s) => s.id === photo.subserviceId);
          return sub?.serviceId === selectedService;
        }

        return false;
      }

      return true;
    });
  }, [selectedService, selectedSubservice]);

  const enrichedPhotos = useMemo(
      () =>
          filteredPhotos.map((photo) => ({
            ...photo,
            service: photo.serviceId ? services.find((s) => s.id === photo.serviceId) : undefined,
            subservice: photo.subserviceId ? subservices.find((ss) => ss.id === photo.subserviceId) : undefined,
            doctor: photo.doctorId ? doctors.find((d) => d.id === photo.doctorId) : undefined,
          })),
      [filteredPhotos]
  );

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[10rem]">
          <Breadcrumbs />

          <div className="py-8 mb-[3.5rem] w-full">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("gallery.title")}</h2>


            <div className="md:flex justify-between block">


            <p className="text-base lg:text-2xl font-normal text-foreground duration-500 mb-4">{t("gallery.subtitle")}</p>

              <div>



            {/* Фильтры */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-start md:items-center">
              <span className="text-foreground text-[1.5rem] font-[600]">{t("FAQ.direction")}</span>

              <select
                  className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                  value={selectedService}
                  onChange={(e) => {
                    setSelectedService(e.target.value);
                    setSelectedSubservice("all");
                    setCurrentPage(1); // сброс страницы
                  }}
              >
                {serviceOptions.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title}
                    </option>
                ))}
              </select>

              <select
                  className="border rounded-lg py-2 px-3 text-black w-full md:w-auto"
                  value={selectedSubservice}
                  onChange={(e) => {
                    setSelectedSubservice(e.target.value);
                    setCurrentPage(1); // сброс страницы
                  }}
                  disabled={selectedService === "all"}
              >
                {subserviceOptions.map((ss) => (
                    <option key={ss.id} value={ss.id}>
                      {ss.title}
                    </option>
                ))}
              </select>
            </div>
              </div>
            </div>
          </div>

          <PhotoList photos={enrichedPhotos}
                     currentPage={currentPage}
                     setCurrentPage={setCurrentPage} />
        </div>
      </div>
  );
}
