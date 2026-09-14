import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import {getLocalizedText} from "../utils/localization.ts";
import type {Faq} from "../types/Faq.ts";
import {services} from "../data/services.ts";

interface FaqItemProps {
    faq: Faq;
    lang: string;
    /** Показывать бейдж с названием услуги (полезно, когда FAQ разных процедур смешаны в одном списке) */
    showServiceBadge?: boolean;
}

export const FaqItem = ({ faq, lang, showServiceBadge = false }: FaqItemProps) => {
    const [isOpen, setIsOpen] = useState(true);
    const question = getLocalizedText(faq.question, lang);
    const answer = getLocalizedText(faq.answer, lang);

    const service = showServiceBadge && faq.serviceId
        ? services.find((s) => s.id === faq.serviceId)
        : undefined;

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
            }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="group h-fit rounded-2xl border border-default bg-surface shadow-sm hover:shadow-lg hover:border-brand transition-shadow duration-300"
        >
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-4 p-6 text-left"
            >
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-x-4 sm:gap-y-2 flex-1 min-w-0">
                <span className="font-medium text-primary leading-snug order-2 sm:order-1">
                    {question}
                </span>
                    {service && (
                        <span className="order-1 sm:order-2 w-fit shrink-0 text-xs font-semibold uppercase tracking-wider text-brand bg-brand-subtle rounded-full px-2.5 py-1">
                            {getLocalizedText(service.title, lang)}
                        </span>
                    )}
                </div>

                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-full bg-brand-subtle text-brand group-hover:text-brand-hover"
                >
                    <ChevronDown size={18} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="overflow-hidden"
                    >
                        <p className="px-6 pb-6 text-secondary leading-relaxed whitespace-pre-line">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};