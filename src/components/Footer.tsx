import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Icon } from '@iconify/react';
import { meta } from '../data/meta';
import { getLocalizedText } from '../utils/localization';
import type { FC } from 'react';
import logo from '../assets/logo.png';

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

const Footer: FC = () => {
    const { t, i18n } = useTranslation();
    const year = new Date().getFullYear();
    const lang = i18n.language;

    const quickLinks: FooterLink[] = [
        { label: t('footer.links.home'), to: '/' },
        { label: t('footer.links.services'), to: '/services' },
        { label: t('footer.links.about'), to: '/about' },
        { label: t('footer.links.contact'), to: '/contact' },
        { label: t('footer.links.prices'), to: '/prices' },
    ];

    return (
        <footer className="relative border-t border-default bg-surface-alt">
            <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-10">
                <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Brand */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={0}
                        className="sm:col-span-2 lg:col-span-1"
                    >

                        <Link to="/" className="flex items-center gap-3">
                            <img src={logo} alt="Aesthetic Face" className="h-12 w-auto" />
                            <span className="text-gradient-brand font-serif text-2xl font-semibold tracking-tight">
                                Aesthetic Face
                            </span>
                        </Link>

                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-secondary">
                            {getLocalizedText(meta.description, lang)}
                        </p>

                        {meta.socialLinks.length > 0 && (
                            <div className="mt-6 flex items-center gap-3">
                                {meta.socialLinks.map((social) => (
                                    <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="border-brand flex h-9 w-9 items-center justify-center rounded-full border text-neutral-500 transition-colors duration-300 hover:bg-gradient-brand hover:text-white"
                                    >
                                    <Icon icon={social.icon} width={18} height={18} />
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
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            {t('footer.links.title')}
                        </h3>
                        <ul className="mt-4 space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm text-secondary transition-colors duration-300 hover:text-gradient-brand"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* Contact — бизнес-контент из data/meta.ts */}
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        custom={2}
                    >
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                            {t('footer.contact.title')}
                        </h3>
                        <ul className="mt-4 space-y-3 text-sm text-secondary">
                            <li className="flex items-start gap-2">
                                <MapPin size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                                <span>{getLocalizedText(meta.address, lang)}</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={18} strokeWidth={1.75} className="shrink-0" />
                                <a href={`tel:${meta.phone}`} className="hover:text-gradient-brand">
                                    {meta.phone}
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={18} strokeWidth={1.75} className="shrink-0" />
                                <a href={`mailto:${meta.email}`} className="hover:text-gradient-brand">
                                    {meta.email}
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Clock size={18} strokeWidth={1.75} className="mt-0.5 shrink-0" />
                                <span>{getLocalizedText(meta.workingHours, lang)}</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom bar — чисто UI */}
                <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-default pt-6 sm:flex-row">
                    <p className="text-xs text-secondary">
                        © {year} Aesthetic Face. {t('footer.rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;