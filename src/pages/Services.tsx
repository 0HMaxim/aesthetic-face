import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { services } from '../data/services';
import { getLocalizedText } from "../utils/localization.ts";
import PageContainer, {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import CtaSection from "../components/CtaSection.tsx";
import PageHero from "../components/PageHero.tsx";

const Services = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen bg-page-accent"
      >
        {/* Hero */}
          <PageHero
              containerClassName={CONTAINER_CLASS}
              title={t('servicesPage.title')}
              subtitle={t('servicesPage.subtitle')}
              breadcrumbs={[{ label: t('servicesPage.title') }]}
          />

        <PageContainer className="py-16">
          <motion.div variants={containerVariants} initial="hidden" animate="visible"
                      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                const title = getLocalizedText(service.title, lang);
                const description = getLocalizedText(service.description, lang);

                return (
                    <motion.div
                        key={service.id}
                        variants={itemVariants}
                        whileHover={{
                          y: -10,
                          transition: { duration: 0.3 },
                        }}
                        className="group relative bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden">
                        <img
                            src={service.image}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                        {/* Icon Badge — per-service gradient, overlaid on image */}
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`absolute bottom-4 left-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                        >
                          <Icon className="w-7 h-7" />
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="relative p-8">
                        {/* Title */}
                        <Link to={`/services/${service.slug}`}>
                          <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                            {title}
                          </h3>
                        </Link>

                        {/* Description */}
                        <p className="text-secondary mb-6 leading-relaxed">{description}</p>

                        {/* Price and Duration */}
                        <div className="flex items-center justify-between pt-4 border-t border-default">
                          <div>
                            <p className="text-sm text-secondary">{t('serviceDetails.price')}</p>
                            <p className="text-lg font-semibold text-gradient-accent">
                              {t('common.from')} {service.price} €
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-secondary">{t('serviceDetails.duration')}</p>
                            <p className="text-lg font-semibold text-primary">{service.duration}</p>
                          </div>
                        </div>

                        {/* View Details Button — per-service gradient */}
                        <Link
                            to={`/services/${service.slug}`}
                            className={`mt-6 flex items-center justify-center w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
                        >
                          {t('servicesPage.viewDetails')}
                        </Link>
                      </div>
                    </motion.div>
                );
              })}
          </motion.div>
        </PageContainer>


            {/* CTA Section */}
          <CtaSection
              title={t('servicesPage.ctaTitle')}
              subtitle={t('servicesPage.ctaSubtitle')}
              buttons={[
                  { type: 'link', to: '/contact', label: t('servicesPage.ctaButton') },
              ]}
          />

      </motion.div>
  );
};

export default Services;