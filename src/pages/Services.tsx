import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home } from 'lucide-react';
import { services } from '../data/services';
import { getLocalizedText } from "../utils/localization.ts";

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
        <motion.section
            className="relative overflow-hidden text-white"
            style={{ backgroundImage: 'var(--gradient-brand)' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
          <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'var(--gradient-brand-hover)' }}
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
          />
          <div className="absolute inset-0 bg-black/20" />

          <motion.div
              className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
              }}
          >
            <motion.nav
                aria-label="Breadcrumb"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                className="flex items-center space-x-2 text-white/80 text-sm mb-6"
            >
              <Link to="/" className="inline-flex items-center hover:text-white transition-colors duration-300">
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">{t('servicesPage.title')}</span>
            </motion.nav>

            <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
            >
              <h1 className="page-title text-white mb-3">
                {t('servicesPage.title')}
              </h1>
              <p className="page-subtitle text-white/85 max-w-2xl">
                {t('servicesPage.subtitle')}
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto py-16">
            {/* Services Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
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

            {/* CTA Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-20 text-center bg-gradient-accent rounded-3xl p-12 shadow-2xl"
            >
              <h2 className="section-title !text-white mb-4">
                {t('servicesPage.ctaTitle')}
              </h2>
              <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto">
                {t('servicesPage.ctaSubtitle')}
              </p>
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-accent px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('servicesPage.ctaButton')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>
  );
};

export default Services;