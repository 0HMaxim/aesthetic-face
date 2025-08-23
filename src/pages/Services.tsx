import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
      <div className="container mx-auto py-8">

        <h1 className="text-3xl font-bold mb-6">
          {t('services.title')}
        </h1>

        <div className="text-1xl ">
          {t('services.description')}
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
              <Link
                  key={service.id}
                  to={`/${lang}/services/${service.slug}`}
                  className="group block p-4 rounded-2xl shadow hover:shadow-lg transition-all"
              >
                <img
                    src={service.mainImage}
                    alt={service.title[lang as keyof typeof service.title]} // локализация alt
                    className="w-full h-48 object-cover rounded-xl mb-4 group-hover:scale-105 transition-transform"
                />
                <h2 className="text-xl font-semibold mb-2">
                  {service.title[lang as keyof typeof service.title]}
                </h2>
              </Link>
          ))}
        </div>
      </div>
  );
}
