import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Breadcrumbs } from "../components/Breadcrumbs.tsx";
import { TopImage } from "../components/TopImage.tsx";
import PhotoList from "../components/PhotoList.tsx";
import { ContentBlockRenderer } from "../components/ContentBlockRenderer.tsx";
import PriceTable from "../components/PriceTable.tsx";

import { db } from "../firebase";
import { ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import FAQList from "../components/FAQList.tsx";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [dataLoaded, setDataLoaded] = useState(false);
  const [services, setServices] = useState<any[]>([]);
  const [subservices, setSubservices] = useState<any[]>([]);
  const [blogs, setBlogs] = useState<any[]>([]);
  const [specials, setSpecials] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);
  const [faqs, setFaqs] = useState<any[]>([]);
  const [photos, setPhotos] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const snapshotServices = await get(ref(db, "services"));
      const snapshotSubservices = await get(ref(db, "subservices"));
      const snapshotBlogs = await get(ref(db, "blogs"));
      const snapshotSpecials = await get(ref(db, "specials"));
      const snapshotDoctors = await get(ref(db, "doctors"));
      const snapshotFaqs = await get(ref(db, "faqs"));
      const snapshotPhotos = await get(ref(db, "photos"));

      setServices(Object.values(snapshotServices.val() || {}));
      setSubservices(Object.values(snapshotSubservices.val() || {}));
      setBlogs(Object.values(snapshotBlogs.val() || {}));
      setSpecials(Object.values(snapshotSpecials.val() || {}));
      setDoctors(Object.values(snapshotDoctors.val() || {}));
      setFaqs(Object.values(snapshotFaqs.val() || {}));
      setPhotos(Object.values(snapshotPhotos.val() || {}));

      setDataLoaded(true);
    };

    loadData();
  }, []);

  if (!dataLoaded) {
    return <div className="container mx-auto py-8">Loading...</div>;
  }

  // Ищем услугу или подуслугу по slug
  const service = services.find((s) => s.slug === slug);
  const subservice = subservices.find((ss) => ss.slug === slug);
  const currentItem = service || subservice;

  if (!currentItem) {
    return <div className="container mx-auto py-8">Service not found</div>;
  }

  const parentService =
      service || services.find((s) => s.id === subservice?.serviceId);

  const relatedSubservices =
      parentService?.subservices
      ?.map((subId: string) => subservices.find((ss) => ss.id === subId))
      .filter((sub: any) => !!sub) || [];

  const relatedBlogs = blogs.filter(
      (blog) =>
          blog.serviceId?.includes(currentItem.id) ||
          (parentService && blog.serviceId?.includes(parentService.id))
  );

  const relatedSpecials = specials.filter(
      (special) =>
          special.serviceId?.includes(currentItem.id) ||
          (parentService && special.serviceId?.includes(parentService.id))
  );

  const currentPhotos = photos
  .filter(
      (p) =>
          p.serviceId === currentItem.id || p.subserviceId === currentItem.id
  )
  .map((photo) => ({
    ...photo,
    service: photo.serviceId
        ? services.find((s) => s.id === photo.serviceId)
        : undefined,
    subservice: photo.subserviceId
        ? subservices.find((ss) => ss.id === photo.subserviceId)
        : undefined,
    employee: photo.employeeId
        ? doctors.find((d) => d.id === photo.employeeId)
        : undefined,
  }));

  const relatedFaqs = faqs.filter((faq) => {
    if (subservice) {
      if (faq.subserviceId === subservice.id && faq.serviceId === subservice.serviceId) return true;
      if (faq.subserviceId === subservice.id && !faq.serviceId) return true;
      return false;
    }
    if (service) {
      if (faq.serviceId === service.id && faq.subserviceId && service.subservices?.includes(faq.subserviceId)) return true;
      if (faq.serviceId === service.id && !faq.subserviceId) return true;
      return false;
    }
    return false;
  });

  const imagee = currentItem.mainImage;

  return (
      <div className="w-full items-center justify-center">
        {imagee && <TopImage source={imagee} />}

        <div className="w-full px-4 md:px-[5rem] ">
          <Breadcrumbs serviceId={parentService?.id} subserviceId={subservice?.id} />

          <div className="py-8">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {currentItem.title[lang]}
            </h2>
          </div>

          <div className="flex flex-col">

            <div className="flex flex-col wrap gap-8 w-full">
              <ContentBlockRenderer content={currentItem.content} />
            </div>

            {relatedSubservices.length > 0 && (
                <div className="py-8">
                  <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">
                    {t("servicePage.otherServices")}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {relatedSubservices.map((sub) => (
                        <Link
                            key={sub.id}
                            to={`/${lang}/services/${sub.slug}`}
                            className="group relative overflow-hidden w-[15rem] h-[12rem] rounded-[10rem] shadow-md hover:bg-[var(--primary)] hover:shadow-xl transition duration-500"
                        >
                          {sub.mainImage && (
                              <img
                                  src={sub.mainImage}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                            <p className="text-[1rem] font-normal">{sub.title[lang]}</p>
                          </div>
                        </Link>
                    ))}
                  </div>
                </div>
            )}

            <PriceTable serviceId={parentService?.id} />

            {/* Фото */}
            {currentPhotos.length > 0 && (
                <PhotoList
                    photos={currentPhotos}
                    currentPage={0}
                    setCurrentPage={() => {}}
                    itemsPerPage={10}
                />
            )}

            {/* FAQ */}
            {relatedFaqs.length > 0 && (
                <FAQList faqs={relatedFaqs} currentPage={0} setCurrentPage={() => {}} itemsPerPage={10} />
            )}
          </div>
        </div>
      </div>
  );
}
