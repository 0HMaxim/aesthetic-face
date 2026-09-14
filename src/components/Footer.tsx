import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { meta } from '../data/meta';
import { services } from '../data/services';
import { getLocalizedText, summarizeWorkingHoursShort } from '../utils/localization';
import type { FC } from 'react';
import logo from '../assets/logo.png';
import { FOOTER_CONTAINER_CLASS } from './PageContainer';

interface FooterLink {
    label: string;
    to: string;
}

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
    }),
};

const MAX_FOOTER_SERVICES = 6;

const Footer: FC = () => {
    const { t, i18n } = useTranslation();
    const year = new Date().getFullYear();
    const lang = i18n.language.split('-')[0];

    const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(getLocalizedText(meta.address, lang))}`;

    const quickLinks: FooterLink[] = [
        { label: t('footer.links.home'), to: '/' },
        { label: t('footer.links.services'), to: '/services' },
        { label: t('footer.links.prices'), to: '/prices' },
        { label: t('footer.links.about'), to: '/about' },
        { label: t('nav.faq'), to: '/faq' },
        { label: t('footer.links.contact'), to: '/contact' },
    ];

    const footerServices = services.slice(0, MAX_FOOTER_SERVICES);
    const hasMoreServices = services.length > MAX_FOOTER_SERVICES;

    return (
        <footer className="relative border-t border-default bg-surface-alt">
            <div className={`${FOOTER_CONTAINER_CLASS} py-12 sm:py-14 lg:py-16`}>
                <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:gap-8 sm:text-left lg:grid-cols-4 lg:gap-8">
                    {/* Brand */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={0}
                        className="flex flex-col items-center sm:col-span-2 sm:items-start lg:col-span-1"
                    >
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt={meta.businessName}
                                className="h-16 w-16 aspect-square shrink-0 rounded-full object-cover sm:h-20 sm:w-20"
                            />
                            <span className="text-gradient-brand font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                                {meta.businessName}
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-base leading-relaxed text-secondary">
                            {getLocalizedText(meta.description, lang)}
                        </p>

                        {meta.socialLinks.length > 0 && (
                            <div className="mt-6 flex items-center justify-center gap-3 sm:justify-start">
                                {meta.socialLinks.map((social) => (
                                    <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="border-brand flex h-10 w-10 items-center justify-center rounded-full border text-neutral-500 transition-colors duration-300 hover:bg-gradient-brand hover:text-white"
                                    >
                                    <Icon icon={social.icon} width={20} height={20} />
                                    </a>
                                    ))}
                            </div>
                            )}
                    </motion.div>

                    {/* Quick links — чисто UI, из i18next */}
                    <motion.nav
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={1}
                        aria-label={t('footer.links.title')}
                    >
                        <h3 className="text-base font-semibold uppercase tracking-wider text-primary">
                            {t('footer.links.title')}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-base text-secondary transition-colors duration-300 hover:text-gradient-brand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* Services — динамический список из Firebase-driven данных */}
                    <motion.nav
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={2}
                        aria-label={t('footer.services.title', 'Послуги')}
                    >
                        <h3 className="text-base font-semibold uppercase tracking-wider text-primary">
                            {t('footer.services.title', 'Послуги')}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {footerServices.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        to={`/services/${service.slug}`}
                                        className="text-base text-secondary transition-colors duration-300 hover:text-gradient-brand"
                                    >
                                        {getLocalizedText(service.title, lang)}
                                    </Link>
                                </li>
                            ))}
                            {hasMoreServices && (
                                <li>
                                    <Link
                                        to="/services"
                                        className="text-base font-medium text-gradient-brand transition-opacity duration-300 hover:opacity-80"
                                    >
                                        {t('footer.services.viewAll', 'Всі послуги')} →
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </motion.nav>

                    {/* Contact — бизнес-контент из data/meta.ts */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={3}
                    >
                        <h3 className="text-base font-semibold uppercase tracking-wider text-primary">
                            {t('footer.contact.title')}
                        </h3>
                        <ul className="mt-4 space-y-3 text-base text-secondary">
                            <li className="flex items-start justify-center gap-2 sm:justify-start">
                                <MapPin size={20} strokeWidth={1.75} className="mt-0.5 shrink-0" />

                                <a
                                href={mapsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-gradient-brand"
                                >
                                {getLocalizedText(meta.address, lang)}
                            </a>
                        </li>
                        <li className="flex items-center justify-center gap-2 sm:justify-start">
                            <Phone size={20} strokeWidth={1.75} className="shrink-0" />
                            <a href={`tel:${meta.phone}`} className="hover:text-gradient-brand">
                                {meta.phone}
                            </a>
                        </li>
                        <li className="flex items-center justify-center gap-2 sm:justify-start">
                            <Mail size={20} strokeWidth={1.75} className="shrink-0" />
                            <a href={`mailto:${meta.email}`} className="hover:text-gradient-brand">
                                {meta.email}
                            </a>
                        </li>

                        {/* Часы работы: сжатая сводка на мобильных, детальный список от md */}
                        <li className="flex items-start justify-center gap-2 sm:justify-start">
                            <Clock size={20} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                            <div>
                                <p className="md:hidden">
                                    {summarizeWorkingHoursShort(meta.workingHours, lang)}
                                </p>

                                <ul className="hidden space-y-1 text-left md:block">
                                    {meta.workingHours.map((entry, index) => (
                                        <li key={index} className="flex justify-between gap-4">
                                                <span className="lg:hidden">
                                                    {getLocalizedText(entry.shortDay, lang)}
                                                </span>
                                            <span className="hidden lg:inline">
                                                    {getLocalizedText(entry.day, lang)}
                                                </span>
                                            <span>{getLocalizedText(entry.hours, lang)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Bottom bar — чисто UI */}
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-default pt-6 sm:flex-row">
                <p className="text-sm text-secondary">
                    © {year} {meta.businessName}. {t('footer.rights')}
                </p>
            </div>
        </div>
</footer>
);
};

export default Footer;