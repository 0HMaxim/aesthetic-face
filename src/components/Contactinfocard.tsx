import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../utils/localization.ts';
import { meta } from '../data/meta.ts';

const infoItemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function ContactInfoCard() {
    const { t, i18n } = useTranslation();
    const shouldReduceMotion = useReducedMotion();
    const lang = i18n.language;

    const items = [
        {
            icon: 'ph:map-pin-bold',
            label: t('contact.info.address', 'Адрес'),
            value: getLocalizedText(meta.address, lang),
        },
        {
            icon: 'ph:phone-bold',
            label: t('contact.info.phone', 'Телефон'),
            value: meta.phone,
            href: `tel:${meta.phone}`,
        },
        {
            icon: 'ph:envelope-simple-bold',
            label: t('contact.info.email', 'Email'),
            value: meta.email,
            href: `mailto:${meta.email}`,
        },
        {
            icon: 'ph:clock-bold',
            label: t('contact.info.hours', 'Часы работы'),
            value: getLocalizedText(meta.workingHours, lang),
        },
    ];

    return (
        <div className="rounded-3xl border border-brand/10 bg-surface p-8 shadow-lg sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                {t('contact.info.title', 'Как с нами связаться')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
                {getLocalizedText(meta.description, lang)}
            </p>

            <ul className="mt-8 space-y-6">
                {items.map((item, i) => (
                    <motion.li
                        key={item.label}
                        custom={i}
                        initial={shouldReduceMotion ? undefined : 'hidden'}
                        whileInView={shouldReduceMotion ? undefined : 'visible'}
                        viewport={{ once: true, margin: '-40px' }}
                        variants={infoItemVariants}
                        className="flex items-start gap-4"
                    >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                            <Icon icon={item.icon} className="h-5 w-5" />
                        </span>
                        <div>
                            <p className="text-xs font-medium uppercase tracking-wide text-secondary">
                                {item.label}
                            </p>
                            {item.href ? (

                                <a
                                    href={item.href}
                                className="text-base font-medium text-primary transition-colors hover:text-brand"
                                    >
                                    {item.value}
                                </a>
                                ) : (
                                <p className="text-base font-medium text-primary">{item.value}</p>
                        )}
                    </div>
                    </motion.li>
                    ))}
            </ul>

            <div className="mt-8 flex gap-3 border-t border-default pt-6">
                {meta.socialLinks.map((social) => (
                    <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/20 text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-brand hover:text-white"
                    >
                    <Icon icon={social.icon} className="h-5 w-5" />
                    </a>
                    ))}
            </div>
        </div>
    );
}