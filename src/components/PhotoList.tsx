import { useState, useMemo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import type { ImageItem } from "../models/Photo";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { Link } from "react-router-dom";

type PhotoListProps = {
  photos: any[];
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage?: number;
};

export default function PhotoList({ photos, currentPage, setCurrentPage, itemsPerPage = 9 }: PhotoListProps) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [activeIndex, setActiveIndex] = useState(-1);

  // скролл вверх при смене страницы
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  // сброс lightbox при изменении фильтра
  useEffect(() => setActiveIndex(-1), [photos]);

  // ✅ сброс страницы при изменении фильтра
  useEffect(() => {
    setCurrentPage(0);
  }, [photos, setCurrentPage]);

  const paginatedPhotos = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return photos.slice(start, start + itemsPerPage);
  }, [photos, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const activePhoto = useMemo(() => {
    if (activeIndex === -1) return null;
    return paginatedPhotos[activeIndex] || photos[activeIndex];
  }, [activeIndex, paginatedPhotos, photos]);

  const slides = useMemo(() => {
    if (!activePhoto) return [];
    const mainImageSlide: ImageItem = {
      src: activePhoto.mainImage,
      title: activePhoto.title,
      description: activePhoto.description,
    };
    const allImages = [mainImageSlide, ...(activePhoto.imgArr || [])];
    return allImages.map((img) => ({
      src: img.src,
      title: img.title?.[lang],
      description: img.description?.[lang],
    }));
  }, [activePhoto, lang]);

  return (
      <>
      <div className="flex flex-wrap justify-center gap-4">
        {paginatedPhotos.map((photo, photoIndex) => (
            <div
                key={photo.id}
                className="relative w-full sm:w-[26rem] md:w-[24rem] lg:w-[26rem]

                 shadow-md overflow-hidden rounded-[5rem] border-2 border-muted group pb-4"
            >
              <img
                  src={photo.mainImage}
                  alt={photo.title?.[lang] || "photo"}
                  className="w-full h-[24rem] md:h-[26rem] object-cover cursor-pointer group-hover:scale-105 transition"
                  onClick={() => setActiveIndex(photoIndex)}
              />

              <p
                  className="absolute top-5 right-7 bg-black text-white p-3 md:text-[1.2rem] text-[1rem] rounded-[5rem] opacity-80 hover:scale-110 duration-500"
                  onClick={() => setActiveIndex(photoIndex)}
              >
                <b>{(photo.imgArr?.length ?? 0) + 1}</b> {t("gallery.photos")}
              </p>

              <div className="p-2 sm:p-4">
                {photo.title && (
                    <h2 className="text-[1.2rem] md:text-[1.25rem] font-extrabold mb-2">
                      {photo.title[lang]}
                    </h2>
                )}
                {photo.description && (
                    <p className="pl-4 pt-2 text-[0.8rem] sm:text-[1rem] font-light mb-2">
                      {photo.description[lang]}
                    </p>
                )}

                <div className="pl-4 text-xs sm:text-sm text-foreground space-y-1">
                  {photo.service && (
                      <p className="font-semibold">
                        {t("gallery.category")}:{" "}
                        <Link
                            to={`../services/${photo.service.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                          <span className="md:text-[1.2rem] text-[1rem]">{photo.service.title[lang]}</span>

                        </Link>
                      </p>
                  )}

                  {photo.subservice && (
                      <p>
                        {t("gallery.procedure")}:{" "}
                        <Link
                            to={`../services/${photo.subservice.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                          <span className="md:text-[1.2rem] text-[1rem]">{photo.subservice.title[lang]}</span>
                        </Link>
                      </p>
                  )}

                  {photo.employee && (
                      <p>
                        {t("gallery.employee") || "Працівник"}:{" "}
                        <Link
                            to={`../employees/${photo.employee.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                        <span className="md:text-[1.2rem] text-[1rem]"> {photo.employee.fullName[lang] }</span>
                        </Link>
                      </p>
                  )}
                </div>
              </div>
            </div>
        ))}


      <Lightbox
              open={activeIndex > -1}
              close={() => setActiveIndex(-1)}
              slides={slides}
              plugins={[Thumbnails, Captions]}
              styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.2)" } }}
              captions={{ showToggle: true, descriptionTextAlign: "center" }}
          />
        </div>

        {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalPages }, (_, i) => (
                  <button
                      key={i}
                      className={`px-4 py-2 rounded-lg ${
                          currentPage === i ? "bg-primary text-white" : "bg-muted text-foreground"
                      }`}
                      onClick={() => setCurrentPage(i)}
                  >
                    {i + 1}
                  </button>
              ))}
            </div>
        )}
      </>
  );
}
