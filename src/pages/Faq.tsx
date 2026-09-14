// src/pages/Faq.tsx
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import {  Calendar } from 'lucide-react';
import { getFaqFilterOptions, getGeneralFaqs, getFaqsByService, getAllFaqs } from '../data/faqs';
import { FaqList } from '../components/FaqList.tsx';
import { ServiceFilter } from '../components/ServiceFilter.tsx';
import { useMemo, useState } from 'react';
import type { ServiceFilterOption } from '../utils/serviceFilter.ts';
import PageContainer, {CONTAINER_CLASS} from "../components/PageContainer.tsx";
import CtaSection from "../components/CtaSection.tsx";
import PageHero from "../components/PageHero.tsx";

const Faq = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];
    const title = t('faq.title');

    const filterOptions = useMemo(() => getFaqFilterOptions(), []);
    const [activeFilter, setActiveFilter] = useState<ServiceFilterOption['value']>('all');

    const faqs = useMemo(() => {
        if (activeFilter === 'all') return getAllFaqs();
        if (activeFilter === 'general') return getGeneralFaqs();
        return getFaqsByService(activeFilter);
    }, [activeFilter]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen bg-page-accent"
        >
            {/* Hero — без изменений */}
            <PageHero
                containerClassName={CONTAINER_CLASS}
                title={title}
                subtitle={t('faq.subtitle')}
                breadcrumbs={[{ label: title }]}
            />

            <PageContainer className="py-16">
                <ServiceFilter options={filterOptions} active={activeFilter} onChange={setActiveFilter} lang={lang} />
                <FaqList
                    key={String(activeFilter)}
                    faqs={faqs}
                    lang={lang}
                    pageSize={11}
                    showServiceBadge={activeFilter === 'all'}
                />
            </PageContainer>

            {/* CTA — без изменений */}
            <CtaSection
                title={t('faq.cta.title')}
                subtitle={t('faq.cta.subtitle')}
                buttons={[
                    { type: 'link', to: '/booking', label: t('faq.cta.book'), icon: <Calendar className="w-5 h-5" /> },
                ]}
            />
        </motion.div>
    );
};

export default Faq;