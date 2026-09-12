import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ChevronRight, Home, Phone } from 'lucide-react';
import { aboutContent } from '../data/about';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';
import { ContentBlockRenderer } from '../components/ContentBlockRenderer.tsx';

const About = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    const title = getLocalizedText(aboutContent.title, lang);

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
                        className="flex items-center  space-x-2 text-white/80 text-sm mb-6"
                    >
                        <Link to="/" className="inline-flex items-center hover:text-white transition-colors duration-300">
                            <Home className="w-4 h-4" />
                        </Link>
                        <ChevronRight className="w-4 h-4 opacity-60" />
                        <span className="text-white font-medium">{title}</span>
                    </motion.nav>

                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 24 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                        }}
                    >
                        <h1 className="page-title text-white">
                            {title}
                        </h1>
                    </motion.div>
                </motion.div>
            </motion.section>

            <div className="px-4 sm:px-6 lg:px-8">
                <div className="max-w-[90rem] mx-auto py-16">
                    <ContentBlockRenderer blocks={aboutContent.content} lang={lang} />
                </div>
            </div>

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
                            {t('about.cta.title')}
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            {t('about.cta.subtitle')}
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
                                {t('about.cta.call')}
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
                                    {t('about.cta.viewServices')}
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default About;