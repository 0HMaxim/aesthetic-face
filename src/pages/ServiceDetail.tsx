import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getServiceBySlug, services } from '../data/services';
import { getPriceModelForService } from '../data/prices';
import { getLocalizedText } from '../utils/localization';

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = i18n.language.split('-')[0];

  const service = slug ? getServiceBySlug(slug) : undefined;

  // Unknown slug -> send the user back to the services list instead of a dead page
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const priceModel = getPriceModelForService(service.slug);
  const Icon = service.icon;

  const title = getLocalizedText(service.title, lang);
  const description = getLocalizedText(service.description, lang);

  return (
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen pt-20 bg-page-accent"
      >
        {/* Hero */}
        <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
          <img
              src={service.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12">
            <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6 w-fit transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t('serviceDetails.backToServices')}</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center space-x-4"
            >
              <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                <Icon className="w-8 h-8" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{title}</h1>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2"
            >
              <h2 className="text-2xl font-bold text-primary mb-4">{t('serviceDetails.aboutTitle')}</h2>
              <p className="text-lg text-secondary leading-relaxed">{description}</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-surface rounded-2xl shadow-lg p-8 h-fit space-y-6"
            >
              <div className="flex items-center justify-between pb-6 border-b border-default">
                <div className="flex items-center space-x-2 text-secondary">
                  <Tag className="w-4 h-4" />
                  <span className="text-sm">{t('serviceDetails.price')}</span>
                </div>
                <p
                    className={`text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                >
                  {t('common.from')} {service.price} €
                </p>
              </div>
              <div className="flex items-center justify-between pb-6 border-b border-default">
                <div className="flex items-center space-x-2 text-secondary">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{t('serviceDetails.duration')}</span>
                </div>
                <p className="text-xl font-semibold text-primary">{service.duration}</p>
              </div>
              <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300`}
              >
                {t('serviceDetails.bookNow')}
              </motion.button>
            </motion.div>
          </div>

          {/* Full price list, when this service has a detailed PriceModel */}
          {priceModel && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-16 bg-surface rounded-2xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-primary mb-2">
                  {getLocalizedText(priceModel.category, lang)}
                </h2>
                {priceModel.specials && (
                    <p className="text-secondary mb-8">{getLocalizedText(priceModel.specials, lang)}</p>
                )}

                <div className="space-y-10">
                  {priceModel.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        {section.subtitle && (
                            <h3 className="text-lg font-semibold text-accent mb-4">
                              {getLocalizedText(section.subtitle, lang)}
                            </h3>
                        )}
                        <ul className="divide-y divide-default">
                          {section.items.map((item, itemIndex) => (
                              <li
                                  key={itemIndex}
                                  className="flex items-baseline justify-between gap-4 py-3"
                              >
                                <span className="text-secondary">
                                  {getLocalizedText(item.procedure, lang)}
                                </span>
                                <span className="flex-1 border-b border-dotted border-default mx-2 translate-y-[-4px]" />
                                <span className="font-semibold text-primary whitespace-nowrap">
                                  {getLocalizedText(item.price, lang)}
                                </span>
                              </li>
                          ))}
                        </ul>
                      </div>
                  ))}
                </div>
              </motion.div>
          )}

          {/* Other services */}
          {otherServices.length > 0 && (
              <div className="mt-20">
                <h2 className="text-2xl font-bold text-primary mb-8">{t('serviceDetails.otherServices')}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {otherServices.map((other) => {
                    const OtherIcon = other.icon;
                    const otherTitle = getLocalizedText(other.title, lang);

                    return (
                        <Link
                            key={other.id}
                            to={`/services/${other.slug}`}
                            className="group bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                        >
                          <div className="relative h-32 overflow-hidden">
                            <img
                                src={other.image}
                                alt={otherTitle}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="p-5">
                            <div
                                className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${other.gradient} text-white mb-3`}
                            >
                              <OtherIcon className="w-5 h-5" />
                            </div>
                            <h3 className="font-semibold text-primary group-hover:text-accent transition-colors duration-300 flex items-center justify-between">
                              {otherTitle}
                              <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                            </h3>
                          </div>
                        </Link>
                    );
                  })}
                </div>
              </div>
          )}
        </section>
      </motion.div>
  );
};

export default ServiceDetails;