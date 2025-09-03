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

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";

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
  const relatedSubservices = parentService && parentService.subservices?.length
      ? parentService.subservices
      .map(subId => subservices.find(ss => ss.id === subId))
      .filter(Boolean)
      : [];

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
    if (subservice) return faq.subserviceId === subservice.id || faq.serviceId === subservice.serviceId;
    if (service) return faq.serviceId === service.id || (faq.subserviceId && service.subservices?.includes(faq.subserviceId));
    return false;
  });

  console.log("currentItem.doctors:", currentItem.doctors);
  console.log("Filtered doctors:", doctors.filter(d => currentItem.doctors?.includes(d.id)));

  return (
      <div className="w-full items-center justify-center ">

        {imagee && (
            <TopImage source={imagee}/>
        )}

        <div className="w-full px-4 md:px-[10rem]">

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
              {/* Подуслуги */}
              {relatedSubservices.length > 0 && (
                  <>
                  <div className="py-8">

                    <h2 className="text-3xl lg:text-5xl font-[800] my-[1.5rem]">
                      {t("servicePage.otherServices")}
                    </h2>
                    <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
                      </span>

                    <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                    </p>

                  </div>

                  <div className="flex flex-wrap my-10">
                    {relatedSubservices.map(sub => (

                        <Link
                            key={sub.id}
                            to={`/${lang}/services/${sub.slug}`}
                            className="group rounded-[10rem] shadow-md transition overflow-hidden h-[12rem] w-[15rem] mr-[2rem] mb-[4rem] hover:bg-[var(--primary)] duration-500 hover:shadow-xl relative"
                        >
                          {sub.mainImage && (
                              <img
                                  src={sub.mainImage}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                          )}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full bg-black/30 text-white p-4 text-center">
                            <p className="text-base md:text-[1rem] font-normal p-[1.5rem]">
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
                        serviceId={parentService?.id}  // родительская услуга
                        defaultOpen={true}
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
                    <span className="block text-lg lg:text-4xl font-semibold mb-[0.5rem]">
                      </span>

                    <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                    </p>

                  </div>

                  <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {doctors
                      .filter(d => currentItem.doctors?.includes(d.id))
                      .map(doc => (
                          <div key={doc.id} className="p-4 rounded-xl shadow flex gap-4 items-center">
                            <img
                                src={doc.photo}
                                className="w-24 h-24 object-cover rounded-full"
                            />
                            <div>
                              <h3 className="text-lg font-bold">
                                {doc.fullName[lang]}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {doc.position[lang]}
                              </p>
                            </div>
                          </div>
                      ))}
                    </div>
                  </div>
                  </>
              )}


              {currentPhotos.length > 0 && (
                  <>
                    <div className="py-8 mb-[2.5rem] mt-[3rem]">
                      <h2 className="text-3xl lg:text-5xl font-[800] mb-[2rem]">
                        {t("servicePage.gallery")}
                      </h2>

                      <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                      </p>
                    </div>
                    <PhotoList photos={currentPhotos} />
                  </>
              )}


              {/* FAQ */}
              {relatedFaqs.length > 0 && (
                  <>
                    <div className="py-8 mb-[2.5rem] mt-[2.5rem]">
                      <h2 className="text-3xl lg:text-5xl font-[800] mb-[2.5rem]">
                        {t("FAQList.title")}
                      </h2>

                      <p className="text-base lg:text-2xl font-normal text-foreground duration-500">
                        {t("servicePage.about")} <span className="font-[600] text-[2rem] pl-2">{currentItem.title[lang]}</span>
                      </p>
                    </div>
                    <FAQList faqs={relatedFaqs} serviceId={service?.id} subserviceId={subservice?.id} />
                  </>
              )}

            </div>




          </div>
        </div>
      </div>
  );
}