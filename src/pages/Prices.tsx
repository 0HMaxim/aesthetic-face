import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Tag } from 'lucide-react';
import { priceModels } from '../data/prices';
import { getLocalizedText } from '../utils/localization';

const Prices = () => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen pt-20 bg-page-accent"
        >
            {/* Hero */}
            <section className="relative overflow-hidden bg-gradient-brand">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <Link
                        to="/"
                        className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-6 w-fit transition-colors duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>{t('prices.backToHome')}</span>
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                            {t('prices.title')}
                        </h1>
                        <p className="text-lg text-white/85 max-w-2xl">{t('prices.subtitle')}</p>
                    </motion.div>
                </div>
            </section>

            {/* Price lists */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {priceModels.length === 0 ? (
                    <p className="text-center text-secondary text-lg">{t('prices.noData')}</p>
                ) : (
                    <div className="space-y-12">
                        {priceModels.map((model, modelIndex) => (
                            <motion.div
                                key={model.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.6, delay: Math.min(modelIndex * 0.05, 0.3) }}
                                className="bg-surface rounded-2xl shadow-lg p-8"
                            >
                                <h2 className="text-2xl font-bold text-primary mb-2">
                                    {getLocalizedText(model.category)}
                                </h2>
                                {model.specials && (
                                    <p className="text-secondary mb-8">{getLocalizedText(model.specials)}</p>
                                )}

                                <div className="space-y-10">
                                    {model.sections.map((section, sectionIndex) => (
                                        <div key={sectionIndex}>
                                            {section.subtitle && (
                                                <h3 className="text-lg font-semibold text-accent mb-4">
                                                    {getLocalizedText(section.subtitle)}
                                                </h3>
                                            )}
                                            <ul className="divide-y divide-default">
                                                {section.items.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="flex items-baseline justify-between gap-4 py-3"
                                                    >
                                    <span className="text-secondary">
                                      {getLocalizedText(item.procedure)}
                                    </span>
                                                        <span className="flex-1 border-b border-dotted border-default mx-2 translate-y-[-4px]" />
                                                        <span className="font-semibold text-primary whitespace-nowrap">
                                      {getLocalizedText(item.price)}
                                    </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-8 pt-6 border-t border-default flex items-center justify-between flex-wrap gap-4">
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
        </motion.div>
    );
};

export default Prices;