import { useParams } from "react-router-dom";
import { services } from "../data/services";
import { doctors } from "../data/services";
import { subservices } from "../data/services";
import { faqs } from "../data/services";
import FAQList from "../components/FAQList";
import { useTranslation } from "react-i18next";

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const { i18n, t } = useTranslation();
  const lang = i18n.language as "uk" | "ru" | "en" | "de";


  // Находим услугу по slug
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <div className="container mx-auto py-8">Service not found</div>;
  }

  return (


      <div className="w-full">
        {/* Hero Section */}
        <div
            className="relative w-full h-[30rem] md:h-[25rem] flex items-center justify-center blur-[0.5rem]"
            style={{
              backgroundImage: `url(${service.mainImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
        </div>

      <div className="container mx-auto py-8">





        {/* Заголовок */}
        <h1 className="text-3xl font-bold mb-6">
          {service.title[lang as keyof typeof service.title]}
        </h1>



        {/* Контент (тексты и картинки вперемешку) */}
        <div className="space-y-6">
          {service.content.map((block) => {
            if (block.type === "text" && block.content) {
              return (
                  <p key={block.id} className="text-lg">
                    {block.content[lang as keyof typeof block.content]}
                  </p>
              );
            }
            if (block.type === "image" && block.image) {
              return (
                  <img
                      key={block.id}
                      src={block.image}
                      alt=""
                      className="w-full rounded-xl"
                  />
              );
            }
            return null;
          })}
        </div>

        {/* Подуслуги */}
        {service.subservices && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">{t("services.subservices")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {subservices
                .filter((sub) => service.subservices?.includes(sub.id))
                .map((sub) => (
                    <div key={sub.id} className="p-4 border rounded-xl shadow">
                      <img
                          src={sub.mainImage}
                          alt={sub.title[lang as keyof typeof sub.title]}
                          className="w-full h-40 object-cover rounded-lg mb-2"
                      />
                      <h3 className="text-xl font-medium">
                        {sub.title[lang as keyof typeof sub.title]}
                      </h3>
                    </div>
                ))}
              </div>
            </div>
        )}

        {/* Врачи */}
        {service.doctors && (
            <div className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">{t("servicePage.doctors")}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {doctors
                .filter((doc) => service.doctors?.includes(doc.id))
                .map((doc) => (
                    <div key={doc.id} className="p-4 rounded-xl shadow flex gap-4 items-center">
                      <img
                          src={doc.photo}
                          alt={doc.fullName[lang as keyof typeof doc.fullName]}
                          className="w-24 h-24 object-cover rounded-full"
                      />
                      <div>
                        <h3 className="text-lg font-bold">
                          {doc.fullName[lang as keyof typeof doc.fullName]}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {doc.position[lang as keyof typeof doc.position]}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>
        )}


        {(() => {
          const relatedFaqs = faqs.filter(
              (faq) =>
                  faq.serviceId === service.id ||
                  (faq.subserviceId && service.subservices?.includes(faq.subserviceId))
          );

          if (relatedFaqs.length === 0) return null;

          return (
              <FAQList faqs={relatedFaqs} />
          );
        })()}



      </div>
      </div>

  );
}
