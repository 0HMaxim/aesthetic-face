import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization.ts';
import ContactInfoCard from '../components/Contactinfocard.tsx';
import ContactForm from '../components/Contactform.tsx';
import ContactMap from '../components/Contactmap.tsx';

export default function Contact() {
    const { t, i18n } = useTranslation();
    const shouldReduceMotion = useReducedMotion();
    const lang = i18n.language;

    return (
        <main className="bg-surface-alt">
            {/* Hero */}
            <section className="mx-auto max-w-5xl px-6 pb-4 pt-28 text-center sm:pt-32 lg:pt-36">
                <motion.p
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-medium uppercase tracking-[0.2em] text-brand"
                >
                    Aesthetic Face Beauty Salon
                </motion.p>
                <motion.h1
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-3 text-4xl font-semibold tracking-tight text-primary sm:text-5xl"
                >
                    <span className="text-gradient-brand">
                        {t('contact.hero.title', 'Свяжитесь с нами')}
                    </span>
                </motion.h1>
                <motion.p
                    initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
                    animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-secondary"
                >
                    {getLocalizedText(meta.description, lang)}
                </motion.p>
            </section>

            {/* Info + Form */}
            <section className="mx-auto grid max-w-5xl gap-6 px-6 py-14 sm:py-20 lg:grid-cols-2">
                <ContactInfoCard />
                <ContactForm />
            </section>

            {/* Map */}
            <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-28">
                <ContactMap address={getLocalizedText(meta.address, lang)} />
            </section>
        </main>
    );
}