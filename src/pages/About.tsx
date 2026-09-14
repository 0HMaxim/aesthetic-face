import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { Phone } from 'lucide-react';
import { aboutContent } from '../data/about';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';
import { ContentBlockRenderer } from '../components/ContentBlockRenderer.tsx';
import PageContainer, {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import CtaSection from "../components/CtaSection.tsx";
import PageHero from "../components/PageHero.tsx";

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
            <PageHero
                containerClassName={CONTAINER_CLASS}
                title={title}
                breadcrumbs={[{ label: title }]}
            />

            <PageContainer className="py-16">
                <ContentBlockRenderer blocks={aboutContent.content} lang={lang} />
            </PageContainer>

            {/* CTA Section */}

            <CtaSection
                title={t('about.cta.title')}
                subtitle={t('about.cta.subtitle')}
                buttons={[
                    { type: 'tel', href: `tel:${meta.phone}`, label: t('about.cta.call'), icon: <Phone className="w-5 h-5" /> },
                    { type: 'link', to: '/services', label: t('about.cta.viewServices') },
                ]}
            />
        </motion.div>
    );
};

export default About;