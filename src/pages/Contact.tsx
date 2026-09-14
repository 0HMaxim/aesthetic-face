import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization.ts';
import ContactInfoCard from '../components/Contactinfocard.tsx';
import ContactForm from '../components/Contactform.tsx';
import ContactMap from '../components/Contactmap.tsx';
import { Phone } from 'lucide-react';
import {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import PageHero from "../components/PageHero.tsx";
import CtaSection from "../components/CtaSection.tsx";

export default function Contact() {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-surface-alt"
        >
            {/* Hero */}
            <PageHero
                containerClassName={CONTAINER_CLASS}
                title={t('contact.hero.title', 'Свяжитесь с нами')}
                subtitle={getLocalizedText(meta.description, lang)}
                breadcrumbs={[{ label: t('contact.hero.title', 'Свяжитесь с нами') }]}
            />

            {/* Info + Form */}
            <section className="mx-auto grid max-w-5xl gap-6 px-6 py-14 sm:py-20 lg:grid-cols-2">
                <ContactInfoCard />
                <ContactForm />
            </section>

            {/* Map */}
            <section className="mx-auto max-w-5xl px-6 pb-20 sm:pb-28">
                <ContactMap address={getLocalizedText(meta.address, lang)} />
            </section>

            {/* CTA Section */}
            <CtaSection
                title={t('contact.cta.title')}
                subtitle={t('contact.cta.subtitle')}
                buttons={[
                    { type: 'tel', href: `tel:${meta.phone}`, label: t('contact.cta.call'), icon: <Phone className="w-5 h-5" /> },
                    { type: 'link', to: '/services', label: t('contact.cta.viewServices') },
                ]}
            />
        </motion.main>
    );
}