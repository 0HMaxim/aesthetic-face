import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import type { ImageItem } from "../models/Photo";

import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

type PhotoListProps = {
  photos: any[]; // список фото с service, subservice, doctor
};

export default function PhotoList({ photos }: PhotoListProps) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [activeIndex, setActiveIndex] = useState(-1);

  const activePhoto = useMemo(() => {
    if (activeIndex === -1) return null;
    const photoIdToFind = photos[activeIndex]?.id;
    return photos.find(p => p.id === photoIdToFind);
  }, [activeIndex, photos]);

  const slides = useMemo(() => {
    if (!activePhoto) return [];
    const mainImageSlide: ImageItem = {
      src: activePhoto.mainImage,
      title: activePhoto.title,
      description: activePhoto.description,
    };
    const allImages = [mainImageSlide, ...(activePhoto.imgArr || [])];
    return allImages.map(img => ({
      src: img.src,
      title: img.title?.[lang],
      description: img.description?.[lang],
    }));
  }, [activePhoto, lang]);

  return (
      <div className="flex flex-wrap gap-8 justify-center">
        {photos.map((photo, photoIndex) => (
            <div key={photo.id} className="relative w-[28rem] shadow-md overflow-hidden rounded-[4rem] border-2 border-muted group">
              <img
                  src={photo.mainImage}
                  alt={photo.title?.[lang] || "photo"}
                  className="w-full h-[28rem] object-cover cursor-pointer group-hover:scale-105 transition"
                  onClick={() => setActiveIndex(photoIndex)}
              />

              <p className="absolute top-[1vw] right-[1vw] bg-black text-white px-[1vw] py-[0.5vw] text-[1.25rem] rounded-[2rem] opacity-80 hover:scale-125 duration-500"
                 onClick={() => setActiveIndex(photoIndex)}
              >
                <b>{(photo.imgArr?.length ?? 0) + 1}</b> {t("gallery.photos")}
              </p>

              <div className="p-4">
                {photo.title && <h2 className="text-[1.25rem] px-[1rem] text-foreground font-extrabold mb-[1rem]">{photo.title[lang]}</h2>}
                {photo.description && <p className="text-[1rem] text-foreground font-light mb-[1rem] pl-[2rem]">{photo.description[lang]}</p>}

                {/* Категория, подуслуга, врач */}

                <div className="desc text-sm text-foreground space-y-[0.5rem] pb-[1rem] px-[1rem] ">
                  {photo.service && <p className="font-semibold text-[1rem]">{t("gallery.category")}: <a href={`../${lang}/services/${photo.service.slug}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-[1.25rem]">{photo.service.title[lang]}</a></p>}
                  {photo.subservice && <p className="text-[1rem]">{t("gallery.procedure")}: <a href={photo.subservice.slug} target="_blank" rel="noopener noreferrer" className="hover:underline text-[1.25rem]">{photo.subservice.title[lang]}</a></p>}
                  {photo.doctor && (
                      <div className="doctor flex items-center gap-3">
                        <p className="font-semibold text-[1rem]">{t("gallery.doctor")}: <a href={photo.doctor.slug} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline text-[1.25rem]">{photo.doctor.fullName[lang]}</a></p>
                        {photo.doctor.photo && <img src={photo.doctor.photo} alt={photo.doctor.fullName[lang]} className="w-12 h-12 rounded-full border" />}
                      </div>
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
  );
}
