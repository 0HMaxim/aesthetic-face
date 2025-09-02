import {Link, useParams} from "react-router-dom";
import {photos, services, subservices} from "../data/services";
import { doctors } from "../data/services";
import { faqs } from "../data/services";
import FAQList from "../components/FAQList";
import { useTranslation } from "react-i18next";
import PhotoList from "../components/PhotoList.tsx";
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import PriceTable from "../components/PriceTable.tsx";

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

  // Фото для текущей сущности
  const currentPhotos = photos
  .filter(p => p.serviceId === currentItem.id || p.subserviceId === currentItem.id)
  .map(photo => ({
    ...photo,
    service: photo.serviceId ? services.find(s => s.id === photo.serviceId) : undefined,
    subservice: photo.subserviceId ? subservices.find(ss => ss.id === photo.subserviceId) : undefined,
    doctor: photo.doctorId ? doctors.find(d => d.id === photo.doctorId) : undefined,
  }));

  // Подуслуги — только если currentItem это Service
  const subservicesForService =
      service && service.subservices?.length
          ? service.subservices
          .map(subId => subservices.find(ss => ss.id === subId))
          .filter(Boolean)
          : [];

  return (
      <div className="w-full">
        {/* Hero Section */}
        {currentItem.mainImage && (
            <div
                className="relative w-full h-[15rem] flex items-center justify-center blur-[0.5rem]"
                style={{
                  backgroundImage: `url(${currentItem.mainImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
            />
        )}

        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-6">
            {currentItem.title[lang]}
          </h1>

          <div className="mb-[3.5rem]">
            <ContentBlockRenderer content={currentItem.content} />
          </div>


          {/* Подуслуги */}
          {subservicesForService.length > 0 && (
              <div className="flex flex-wrap mb-12">
                {subservicesForService.map(sub => (
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
          )}

          {/* Врачи */}
          {currentItem.doctors && currentItem.doctors.length > 0 && (
              <div className="mt-10">
                <h2 className="text-2xl font-semibold mb-4">{t("servicePage.doctors")}</h2>
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
          )}

          {/* FAQ */}
          {(() => {
            let relatedFaqs = [];

            if (service) {
              // Если это страница услуги
              relatedFaqs = faqs.filter(
                  (faq) =>
                      faq.serviceId === service.id ||
                      (faq.subserviceId && service.subservices?.includes(faq.subserviceId))
              );
            } else if (subservice) {
              // Если это страница подуслуги
              relatedFaqs = faqs.filter(
                  (faq) => faq.subserviceId === subservice.id || faq.serviceId === subservice.serviceId
              );
            }

            if (relatedFaqs.length === 0) return null;
            return <FAQList faqs={relatedFaqs} />;
          })()}


          <PhotoList photos={currentPhotos} />

          <PriceTable serviceId={currentItem.id} />
        </div>
      </div>
  );
}

