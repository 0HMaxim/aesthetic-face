import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {ChevronRight, Home, Phone, Tag} from 'lucide-react';
import { priceModels } from '../data/prices';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';

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
                        <span className="text-white font-medium">{t('prices.title')}</span>
                    </motion.nav>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                        }}
                    >
                        <h1 className="page-title text-white mb-3">
                            {t('prices.title')}
                        </h1>
                        <p className="page-subtitle text-white/85 max-w-2xl">{t('prices.subtitle')}</p>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* Price lists */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            </section>

            {/* CTA Section */}
            <motion.section
                className="relative py-20 text-white overflow-hidden"
                style={{ backgroundImage: 'var(--gradient-brand)' }}
                initial="rest"
                whileHover="hover"
                animate="rest"
            >
                {/* Overlay с hover-градиентом — плавно через opacity, а не через смену background-image */}
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{ backgroundImage: 'var(--gradient-brand-hover)' }}
                    variants={{
                        rest: { opacity: 0 },
                        hover: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />

                {/* Декоративное свечение */}
                <motion.div
                    className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl"
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
                            {t('prices.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            {t('prices.cta.subtitle')}
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
                                {t('prices.cta.call')}
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
                                    to="/contact"
                                    className="block px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-brand transition-colors duration-300 font-semibold"
                                >
                                    {t('prices.cta.contactUs')}
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default Prices;