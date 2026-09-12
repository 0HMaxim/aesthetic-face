import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight, Clock, Home, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getServiceBySlug, services } from '../data/services';
import { getPriceModelForService } from '../data/prices';
import { getLocalizedText } from '../utils/localization';
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import { Phone } from 'lucide-react';
import { meta } from '../data/meta';
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
          className="min-h-screen bg-page-accent"
      >
        {/* Hero */}
        {/* Hero */}
        <section className="relative overflow-hidden text-white">
          <img
              src={service.image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />
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
              <Link to="/services" className="hover:text-white transition-colors duration-300">
                {t('servicesPage.title')}
              </Link>
              <ChevronRight className="w-4 h-4 opacity-60" />
              <span className="text-white font-medium">{title}</span>
            </motion.nav>

            <motion.div
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                }}
                className="flex items-center space-x-4"
            >
              <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
              <h1 className="page-title text-white">{title}</h1>
            </motion.div>
          </motion.div>
        </section>

        {/* Content */}
        <section className="max-w-[98rem] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="md:col-span-2"
            >
              {service.content?.length ? (
                  <ContentBlockRenderer blocks={service.content} lang={lang} />
              ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary mb-4">{t('serviceDetails.aboutTitle')}</h2>
                    <p className="text-lg text-secondary leading-relaxed">{description}</p>
                  </>
              )}
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-surface rounded-2xl shadow-lg p-8 h-fit space-y-6 sticky top-24 self-start"
            >
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                <p className="text-sm text-secondary leading-relaxed">{description}</p>
              </div>

              <div className="flex items-center justify-between pb-6 border-b border-default pt-2">
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
          {/* Full price list, when this service has a detailed PriceModel */}
          {priceModel && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="mt-16 bg-surface rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                    {getLocalizedText(priceModel.category, lang)}
                  </h2>
                  {priceModel.specials && (
                      <p className="text-secondary text-sm sm:text-base">
                        {getLocalizedText(priceModel.specials, lang)}
                      </p>
                  )}
                </div>

                <div className="px-3 sm:px-5 pb-6">
                  {priceModel.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className={sectionIndex > 0 ? 'mt-6' : ''}>
                        {section.subtitle && (
                            <div className="flex items-center gap-3 px-3 sm:px-4 py-2 mb-1">
                            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
                                {getLocalizedText(section.subtitle, lang)}
                            </span>
                              <span className="h-px flex-1 bg-default/60" />
                            </div>
                        )}

                        <ul className="price-row-list">
                          {section.items.map((item, itemIndex) => (
                              <li
                                  key={itemIndex}
                                  className="flex items-center justify-between gap-6 px-3 sm:px-4 py-4 sm:py-4.5 transition-colors duration-150 hover:bg-[var(--color-row-hover)]"
                              >
                                <span className="text-secondary text-[15px] sm:text-base leading-snug">
                                    {getLocalizedText(item.procedure, lang)}
                                </span>
                                <span className="shrink-0 font-serif font-semibold text-primary text-base sm:text-lg">
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
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-6"
                >
                  {otherServices.map((other) => {
                    const OtherIcon = other.icon;
                    const otherTitle = getLocalizedText(other.title, lang);

                    return (
                        <motion.div
                            key={other.id}
                            variants={{
                              hidden: { opacity: 0, y: 20 },
                              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            }}
                            whileHover={{ y: -6 }}
                        >
                          <Link
                              to={`/services/${other.slug}`}
                              className="group block bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
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
                        </motion.div>
                    );
                  })}
                </motion.div>
              </div>
          )}
        </section>



        <motion.section
            className="relative py-20 text-white overflow-hidden"
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

          <motion.div
              className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
              variants={{
                rest: { scale: 1, opacity: 0.5 },
                hover: { scale: 1.25, opacity: 0.9 },
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
              <h2 className="section-title !text-white mb-6">
                {t('serviceDetails.cta.title', { service: title })}
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                {t('serviceDetails.cta.subtitle', { price: service.price })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                    href={`tel:${meta.phone}`}
                    whileHover={{
                      scale: 1.06,
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.35)',
                      transition: { duration: 0.35, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.96, transition: { duration: 0.15 } }}
                    className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-full font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  {t('serviceDetails.cta.call')}
                </motion.a>

                <motion.div
                    whileHover={{
                      scale: 1.06,
                      boxShadow: '0 20px 40px -10px rgba(0,0,0,0.35)',
                      transition: { duration: 0.35, ease: 'easeOut' },
                    }}
                    whileTap={{ scale: 0.96, transition: { duration: 0.15 } }}
                    className="relative z-10 rounded-full"
                >
                  <Link
                      to="/services"
                      className="block px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-brand transition-colors duration-300 font-semibold"
                  >
                    {t('serviceDetails.cta.otherServices')}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>

      </motion.div>
  );
};

export default ServiceDetails;