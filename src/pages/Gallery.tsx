import { useMemo } from "react";
import { useTranslation } from "react-i18next";


import { services, subservices, doctors, photos } from "../data/services";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";
import PhotoList from "../components/PhotoList.tsx";
import {TopImage} from "../components/TopImage.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";

export default function Gallery() {
  const {  t } = useTranslation();




  const imagee = "https://www.aestheticclinicmalaysia.com/wp-content/uploads/2023/10/Aesthetic-Clinic-Malaysia.jpg";


  const enrichedPhotos = useMemo(() => {
    return photos.map(photo => ({
      ...photo,
      service: photo.serviceId ? services.find(s => s.id === photo.serviceId) : undefined,
      subservice: photo.subserviceId ? subservices.find(ss => ss.id === photo.subserviceId) : undefined,
      doctor: photo.doctorId ? doctors.find(d => d.id === photo.doctorId) : undefined,
    }));
  }, []);


  return (

      <div className="w-full items-center justify-center">

        {imagee && (
            <TopImage source={imagee}/>
        )}


        <div className="w-full px-4 md:px-[10rem]">

          <Breadcrumbs />


          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">{t("gallery.title")}</h2>
            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">{t("gallery.subtitle")}</p>
          </div>

          <PhotoList photos={enrichedPhotos} />

        </div>

      </div>
  );
}