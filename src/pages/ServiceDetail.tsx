import { motion } from 'motion/react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowRight, Clock,  Tag } from 'lucide-react';
import {Trans, useTranslation} from 'react-i18next';
import { getServiceBySlug, services } from '../data/services';
import { getPriceModelForService } from '../data/prices';
import { getLocalizedText } from '../utils/localization';
import {ContentBlockRenderer} from "../components/ContentBlockRenderer.tsx";
import { Phone } from 'lucide-react';
import { meta } from '../data/meta';
import PageContainer, {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import { getFaqsByService } from '../data/faqs';
import {FaqList} from "../components/FaqList.tsx";
import CtaSection from "../components/CtaSection.tsx";
import PageHero from "../components/PageHero.tsx";

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
  const serviceFaqs = getFaqsByService(service.id);
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
        <PageHero
            containerClassName={CONTAINER_CLASS}
            title={title}
            backgroundImage={service.image}
            imageOverlayClassName={`bg-gradient-to-br ${service.gradient} opacity-60`}
            iconGradientClassName={`bg-gradient-to-br ${service.gradient}`}
            icon={<Icon className="w-8 h-8" />}
            breadcrumbs={[
              { label: t('servicesPage.title'), to: '/services' },
              { label: title },
            ]}
        />

        {/* Content */}
        <PageContainer as="section" className="py-16">
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
                className="bg-surface rounded-2xl shadow-lg p-8 h-fit space-y-6 sticky top-40 self-start"
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

          {serviceFaqs.length > 0 && (
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6 }}
                  className="mt-16"
              >
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {t('serviceDetails.faqTitle')}
                </h2>
                <p className="text-xl font-semibold text-secondary mb-8">
                  <Trans
                      i18nKey="serviceDetails.faqSubtitle"
                      values={{ service: title }}
                      components={{ accent: <span className="text-3xl md:text-4xl font-bold text-gradient-brand" /> }}
                  />
                </p>
                <FaqList faqs={serviceFaqs} lang={lang} />
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
                    const otherDescription = getLocalizedText(other.description, lang);

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
                              className="group block bg-surface rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full"
                          >
                            {/* Увеличенное фото + иконка-бейдж поверх, как на Services.tsx */}
                            <div className="relative h-48 overflow-hidden">
                              <img
                                  src={other.image}
                                  alt={otherTitle}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                              <div
                                  className={`absolute bottom-3 left-4 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${other.gradient} text-white shadow-lg`}
                              >
                                <OtherIcon className="w-5 h-5" />
                              </div>
                            </div>

                            {/* Контент */}
                            <div className="p-5">
                              <h3 className="font-semibold text-lg text-primary group-hover:text-accent transition-colors duration-300 mb-2">
                                {otherTitle}
                              </h3>
                              <p className="text-sm text-secondary leading-relaxed mb-4 overflow-hidden"
                                 style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                                {otherDescription}
                              </p>
                              <div className="flex items-center justify-between pt-3 border-t border-default">
                      <span className="text-sm font-semibold text-gradient-accent">
                        {t('common.from')} {other.price} €
                      </span>
                                <ArrowRight className="w-4 h-4 text-secondary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-accent transition-all duration-300" />
                              </div>
                            </div>
                          </Link>
                        </motion.div>
                    );
                  })}
                </motion.div>
              </div>
          )}
        </PageContainer>



        <CtaSection
            title={t('serviceDetails.cta.title', { service: title })}
            subtitle={t('serviceDetails.cta.subtitle', { price: service.price })}
            buttons={[
              { type: 'tel', href: `tel:${meta.phone}`, label: t('serviceDetails.cta.call'), icon: <Phone className="w-5 h-5" /> },
              { type: 'link', to: '/services', label: t('serviceDetails.cta.otherServices') },
            ]}
        />

      </motion.div>
  );
};

export default ServiceDetails;