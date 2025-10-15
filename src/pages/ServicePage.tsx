import {Link, useParams} from "react-router-dom";
import {photos, services, subservices} from "../data/services";
import { doctors } from "../data/services";
import { faqs } from "../data/services";
import FAQList from "../components/FAQList";
import { useTranslation } from "react-i18next";
import PhotoList from "../components/PhotoList.tsx";
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import PriceTable from "../components/PriceTable.tsx";
import {Breadcrumbs} from "../components/Breadcrumbs.tsx";
import {TopImage} from "../components/TopImage.tsx";
import {Button} from "@heroui/react";

import { useState } from "react";

// внутри компонента ServicePage


export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  const [faqPage, setFaqPage] = useState(0);
  const [photoPage, setPhotoPage] = useState(0);
  const pageSize = 10; // если хочешь задавать отдельно



  // Ищем сначала услугу, потом подуслугу
  const service = services.find(s => s.slug === slug);
  const subservice = subservices.find(ss => ss.slug === slug);
  const currentItem = service || subservice;

  if (!currentItem) {
    return <div className="container mx-auto py-8">Service not found</div>;
  }

  const imagee = currentItem.mainImage;

  // Определяем родительскую услугу
  const parentService = service || services.find(s => s.id === subservice?.serviceId);

  // Получаем список подуслуг для родительской услуги, если она найдена
  const relatedSubservices = parentService?.subservices?.map(subId => subservices.find(ss => ss.id === subId))
  .filter((sub): sub is typeof subservices[0] => !!sub) || [];


  // Фото для текущей сущности
  const currentPhotos = photos
  .filter(p => p.serviceId === currentItem.id || p.subserviceId === currentItem.id)
  .map(photo => ({
    ...photo,
    service: photo.serviceId ? services.find(s => s.id === photo.serviceId) : undefined,
    subservice: photo.subserviceId ? subservices.find(ss => ss.id === photo.subserviceId) : undefined,
    doctor: photo.doctorId ? doctors.find(d => d.id === photo.doctorId) : undefined,
  }));


  const relatedFaqs = faqs.filter(faq => {
    if (subservice) {
      // Если у FAQ есть serviceId и subserviceId — показываем
      if (faq.subserviceId === subservice.id && faq.serviceId === subservice.serviceId) {
        return true;
      }
      // Если только subserviceId — показываем только на подуслуге
      if (faq.subserviceId === subservice.id && !faq.serviceId) {
        return true;
      }
      return false;
    }

    if (service) {
      // Если у FAQ есть serviceId и subserviceId — показываем
      if (faq.serviceId === service.id && faq.subserviceId && service.subservices?.includes(faq.subserviceId)) {
        return true;
      }
      // Если только serviceId — показываем только на услуге
      if (faq.serviceId === service.id && !faq.subserviceId) {
        return true;
      }
      return false;
    }

    return false;
  });


  const logServicesAndSubservices = () => {
    console.log("Категории:");
    services.forEach(service => {
      // Выводим основную услугу (категорию)
      console.log(`- ${service.title[lang]} (ID: ${service.id})`);

      // Находим все подуслуги, которые относятся к этой категории
      const relatedSubservices = subservices.filter(sub => sub.serviceId === service.id);

      // Если у категории есть подуслуги, выводим их
      if (relatedSubservices.length > 0) {
        console.log("  Подкатегории:");
        relatedSubservices.forEach(sub => {
          console.log(`    - ${sub.title[lang]} (ID: ${sub.id})`);
        });
      }
    });
  };

  // Вызовите эту функцию в начале вашего компонента
  logServicesAndSubservices();

  return (
      <div className="w-full items-center justify-center  ">

        {imagee && (
            <TopImage source={imagee}/>
        )}

        <div className="w-full px-4 md:px-[5rem]">

          <Breadcrumbs
              serviceId={parentService?.id}
              subserviceId={subservice?.id}
          />

          <div className="py-8">
            <h2 className="text-3xl lg:text-5xl font-[800] mb-[1.5rem]">
              {currentItem.title[lang]}
            </h2>

            <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
            </span>

            <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
            </p>
          </div>

          <div className=" flex-wrap">

            <div className="">
              <ContentBlockRenderer content={currentItem.content} />
            </div>

            <div className="">
              {relatedSubservices.length > 0 && (
                  <>
                    <div className="py-8">
                      <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">
                        {t("servicePage.otherServices")}
                      </h2>
                      <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]"></span>
                      <p className="text-base lg:text-2xl font-normal text-foreground duration-500"></p>
                    </div>

                    <div
                        className="flex flex-wrap justify-center gap-x-[1rem] gap-y-[1rem] md:gap-x-[2rem] md:gap-y-[2rem] my-10"
                    >
                      {relatedSubservices.map((sub) => (
                          <Link
                              key={sub.id}
                              to={`/${lang}/services/${sub.slug}`}
                              className="
                                group relative overflow-hidden
                                max-w-[47%]
                                w-1/2 sm:w-1/2 md:w-[15rem] lg:w-[18rem]
                                h-[9rem] md:h-[12rem]
                                rounded-[10rem] shadow-md
                                hover:bg-[var(--primary)] hover:shadow-xl
                                transition duration-500
                                flex-shrink-0
                              "
                          >
                            {sub.mainImage && (
                                <img
                                    src={sub.mainImage}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            )}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                              <p className="text-[0.9rem] md:text-[1rem] font-normal">
                                {sub.title[lang]}
                              </p>
                            </div>
                          </Link>
                      ))}
                    </div>
                  </>
              )}

              {/* PriceTable для услуги или подуслуги */}
              {currentItem && (
                  <div className="mb-[2rem] duration-500">
                    <PriceTable
                        serviceId={parentService?.id}
                    />
                  </div>
              )}


              {/* Врачи */}
              {currentItem.doctors && currentItem.doctors.length > 0 && (
                  <>
                    <div className="py-8">
                      <h2 className="text-3xl lg:text-5xl font-[800] mt-[2rem]">
                        {t("servicePage.doctors")}
                      </h2>
                      <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]"></span>
                      <p className="text-base lg:text-2xl font-normal text-foreground duration-500"></p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-[1.5rem] mt-10">
                      {doctors
                      .filter(d => currentItem.doctors?.includes(d.id))
                      .map(doc => (
                          <Link
                              key={doc.id}
                              to={`/${lang}/doctors/${doc.slug}`}
                              className={`
                                  group flex flex-col
                                  w-full sm:w-[25rem] md:w-[22rem] lg:w-[25rem] 
                                  rounded-[7rem]
                                  shadow-md overflow-hidden mb-[1.5rem]
                                  hover:shadow-xl hover:bg-[var(--primary)]
                                  transition duration-500
                                `}
                          >
                            {/* Фото */}
                            {doc.photo && (
                                <div className="w-full h-[26rem] sm:h-[28rem] md:h-[30rem] lg:h-[32rem] overflow-hidden">
                                  <img
                                      src={doc.photo}
                                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                            )}

                            {/* Информация */}
                            <div className="p-4 md:p-6 flex flex-col items-center text-center bg-primary">
                              <h2 className="text-[1rem] sm:text-[1.25rem] md:text-[1.1rem] font-extrabold mb-1 md:mb-2">
                                {doc.fullName[lang]}
                              </h2>
                              <p className="text-[0.9rem] sm:text-[1rem] md:text-[0.95rem] font-light mb-2 md:mb-4">
                                {doc.position[lang]}
                              </p>

                              <Button
                                  as={Link}
                                  to={`/${lang}/doctors/${doc.slug}`}
                                  className="px-4 py-2 md:px-6 md:py-3 rounded-full bg-black text-white text-[0.85rem] sm:text-[1rem] font-semibold hover:bg-[var(--primary)]"
                              >
                                {t("doctors.bookAppointment", { name: doc.shortName[lang] })}
                              </Button>
                            </div>
                          </Link>
                      ))}
                    </div>
                  </>
              )}


              {currentPhotos.length > 0 && (
                  <>
                    <div className="pt-8 mt-[3rem]">
                      <h2 className="text-3xl lg:text-5xl font-[800] mb-[2rem]">
                        {t("servicePage.gallery")}
                      </h2>
                    </div>
                    <PhotoList
                        photos={currentPhotos}
                        currentPage={photoPage}
                        setCurrentPage={setPhotoPage}
                        itemsPerPage={pageSize}
                    />
                  </>
              )}


              {/* FAQ */}
              {relatedFaqs.length > 0 && (
                  <>
                    <div className="pt-8 mt-[2.5rem]">
                      <h2 className="text-3xl lg:text-5xl font-[800] mb-[2.5rem]">
                        {t("FAQ.title")}
                      </h2>
                      <p className="text-[2rem] font-normal text-foreground duration-500">
                        {t("servicePage.about")} <span className="font-[600] text-[2rem] pl-2">{currentItem.title[lang]}</span>
                      </p>
                    </div>
                    <FAQList
                        faqs={relatedFaqs}
                        currentPage={faqPage}
                        setCurrentPage={setFaqPage}
                        itemsPerPage={pageSize}
                    />
                  </>
              )}

            </div>




          </div>
        </div>
      </div>
  );
}