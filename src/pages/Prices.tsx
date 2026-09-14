import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Tag} from 'lucide-react';
import { priceModels } from '../data/prices';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';
import PageContainer, {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import CtaSection from "../components/CtaSection.tsx";
import PageHero from "../components/PageHero.tsx";

const Prices = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

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
                title={t('prices.title')}
                subtitle={t('prices.subtitle')}
                breadcrumbs={[{ label: t('prices.title') }]}
            />

            {/* Price lists */}
            <PageContainer as="section" className="py-16">
                {priceModels.length === 0 ? (
                    <p className="text-center text-secondary text-lg">{t('prices.noData')}</p>
                ) : (
                    <div className="space-y-10 sm:space-y-12">
                        {priceModels.map((model, modelIndex) => (
                            <motion.div
                                key={model.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.6, delay: Math.min(modelIndex * 0.05, 0.3) }}
                                className="bg-surface rounded-2xl shadow-lg overflow-hidden"
                            >
                                <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4">
                                    <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">
                                        {getLocalizedText(model.category, lang)}
                                    </h2>
                                    {model.specials && (
                                        <p className="text-secondary text-sm sm:text-base">
                                            {getLocalizedText(model.specials, lang)}
                                        </p>
                                    )}
                                </div>

                                <div className="px-3 sm:px-5 pb-6">
                                    {model.sections.map((section, sectionIndex) => (
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

                                <div className="px-6 sm:px-8 py-5 sm:py-6 border-t border-default flex items-center justify-between flex-wrap gap-4 bg-page-accent/40">
                                    <div className="flex items-center space-x-2 text-secondary text-sm">
                                        <Tag className="w-4 h-4" />
                                        <span>{t('prices.perProcedure')}</span>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                                        <Link
                                            to="/contact"
                                            className="inline-block py-2.5 px-6 rounded-xl bg-gradient-brand text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300"
                                        >
                                            {t('prices.bookNow')}
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </PageContainer>

            {/* CTA Section */}
            <CtaSection
                glow="bottom-left"
                title={t('prices.cta.title')}
                subtitle={t('prices.cta.subtitle')}
                buttons={[
                    { type: 'tel', href: `tel:${meta.phone}`, label: t('prices.cta.call'), icon: <Phone className="w-5 h-5" /> },
                    { type: 'link', to: '/contact', label: t('prices.cta.contactUs') },
                ]}
            />
        </motion.div>
    );
};

export default Prices;