import { useTranslation } from 'react-i18next';
import { Link, useParams } from "react-router-dom";
import { services } from "../data/services";

export default function Services() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();

  return (
      <div className="container mx-auto py-8">


        <div className="py-8">
          <h2 className="text-3xl lg:text-5xl font-[800] mb-4">
            {t("services.title")}
          </h2>


          <p className="text-base lg:text-2xl font-normal text-foreground">
            {t("services.description")}
          </p>
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
