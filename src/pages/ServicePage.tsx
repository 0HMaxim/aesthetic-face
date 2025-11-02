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
import type {Subservice} from "../models/Subservice.ts";
import type {Service} from "../models/Service.ts";
import type {Blog} from "../models/Blog.ts";
import type {Special} from "../models/Special.ts";
import type {Employee} from "../models/Employee.ts";
import type {Photo} from "../models/Photo.ts";
import type {FAQ} from "../models/FAQ.ts";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

  const [dataLoaded, setDataLoaded] = useState(false);
  const [services, setServices] = useState<Service[]>([]);
  const [subservices, setSubservices] = useState<Subservice[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [specials, setSpecials] = useState<Special[]>([]);
  const [emloyees, setEmloyees] = useState<Employee[]>([]);
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const snapshotServices = await get(ref(db, "services"));
      const snapshotSubservices = await get(ref(db, "subservices"));
      const snapshotBlogs = await get(ref(db, "blogs"));
      const snapshotSpecials = await get(ref(db, "specials"));
      const snapshotEmloyees = await get(ref(db, "emloyees"));
      const snapshotFaqs = await get(ref(db, "faqs"));
      const snapshotPhotos = await get(ref(db, "photos"));

      setServices(Object.values(snapshotServices.val() || {}));
      setSubservices(Object.values(snapshotSubservices.val() || {}));
      setBlogs(Object.values(snapshotBlogs.val() || {}));
      setSpecials(Object.values(snapshotSpecials.val() || {}));
      setEmloyees(Object.values(snapshotEmloyees.val() || {}));
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

  const relatedSubservices = subservices.filter(
      (ss) => ss.serviceId === parentService?.id
  );

  const relatedBlogs = blogs.filter((blog) => {
    const currentId = currentItem.id;
    const parentId = parentService?.id;

    return (currentId && blog.serviceId?.includes(currentId)) ||
        (parentId && blog.serviceId?.includes(parentId));
  });

  const relatedSpecials = specials.filter((special) => {
    const currentId = currentItem.id;
    const parentId = parentService?.id;

    return (currentId && special.serviceId?.includes(currentId)) ||
        (parentId && special.serviceId?.includes(parentId));
  });


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
        ? emloyees.find((d) => d.id === photo.employeeId)
        : undefined,
  }));

  const relatedFaqs = faqs.filter((faq) => {
    if (subservice) {
      if (faq.subserviceId === subservice.id && faq.serviceId === subservice.serviceId) return true;
      if (faq.subserviceId === subservice.id && !faq.serviceId) return true;
      return false;
    }
    if (service) {
      if (faq.serviceId === service.id && faq.subserviceId && service.subservicesId?.includes(faq.subserviceId)) return true;
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
            </h2>
          </div>

          <div className="py-8 mb-[3.5rem]">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {currentItem.title[lang]}
            </h2>

            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
              </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">

            </p>
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
                    {relatedSubservices.map((sub: any) => (
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


            {/* Акции */}
            {relatedSpecials.length > 0 && (
                <div className="py-12">
                  <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
                    {t("servicePage.specialsTitle") || "Special Offers"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedSpecials.map((special) => {
                      // title как строка
                      const titleText = Array.isArray(special.title?.[lang])
                          ? special.title[lang][0]
                          : special.title?.[lang] || "No title";

                      // subtitle как строка, обрезаем до 120 символов
                      const subtitleText = Array.isArray(special.subtitle?.[lang])
                          ? special.subtitle[lang][0].slice(0, 120)
                          : special.subtitle?.[lang]?.slice(0, 120) || "No subtitle";

                      return (
                          <div
                              key={special.id}
                              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 bg-white"
                          >
                            {special.mainImage && (
                                <img
                                    src={special.mainImage}
                                    alt={titleText}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                            <div className="p-5">
                              <h3 className="text-xl font-semibold mb-2">{titleText}</h3>
                              <p className="text-gray-600 text-sm mb-3">{subtitleText}...</p>
                              {special.slug && (
                                  <Link
                                      to={`/${lang}/specials/${special.slug}`}
                                      className="text-[var(--primary)] hover:underline font-medium"
                                  >
                                    {t("servicePage.readMore") || "Read more"}
                                  </Link>
                              )}
                            </div>
                          </div>
                      );
                    })}
                  </div>
                </div>
            )}


            {/* Блоги */}
            {relatedBlogs.length > 0 && (
                <div className="py-12">
                  <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
                    {t("servicePage.relatedArticles") || "Related Articles"}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedBlogs.map((blog) => {
                      // Получаем title как строку
                      const titleText = Array.isArray(blog.title?.[lang])
                          ? blog.title[lang][0]
                          : blog.title?.[lang] || "No title";

                      // Получаем subtitle как строку и обрезаем до 120 символов
                      const subtitleText = Array.isArray(blog.subtitle?.[lang])
                          ? blog.subtitle[lang][0].slice(0, 120)
                          : blog.subtitle?.[lang]?.slice(0, 120) || "No subtitle";

                      return (
                          <div
                              key={blog.id}
                              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition duration-500 bg-white"
                          >
                            {blog.mainImage && (
                                <img
                                    src={blog.mainImage}
                                    alt={titleText}
                                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                            <div className="p-5">
                              <h3 className="text-xl font-semibold mb-2">{titleText}</h3>
                              <p className="text-gray-600 text-sm mb-3">{subtitleText}...</p>
                              {blog.slug && (
                                  <Link
                                      to={`/${lang}/blogs/${blog.slug}`}
                                      className="text-[var(--primary)] hover:underline font-medium"
                                  >
                                    {t("servicePage.readMore") || "Read more"}
                                  </Link>
                              )}
                            </div>
                          </div>
                      );
                    })}
                  </div>
                </div>
            )}


          </div>
        </div>
      </div>
  );
}
