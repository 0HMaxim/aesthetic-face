// src/components/NavInfoBar.tsx
import { Icon } from '@iconify/react';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getLocalizedText, summarizeWorkingHours } from '../utils/localization';
import { meta } from '../data/meta';
import {NAVINFOBAR_CONTAINER_CLASS} from './PageContainer';

interface NavInfoBarProps {
    scrolled?: boolean;
}

const NavInfoBar = ({ scrolled = false }: NavInfoBarProps) => {
    const { i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    const address = getLocalizedText(meta.address, lang);
    const mapsHref = `https://maps.google.com/?q=${encodeURIComponent(address)}`;

    return (
        <div className="border-b border-default bg-surface-alt ">
            <div
                className={`${NAVINFOBAR_CONTAINER_CLASS} flex items-center justify-center gap-6 text-sm transition-all duration-300 ${
                    scrolled ? 'py-1.5' : 'py-2.5 lg:py-3'
                }`}
            >
                {/* Address & hours — основная информация, слева для лучшей читаемости */}
                <div
                    className={`flex min-w-0  items-center gap-3 transition-all duration-300 ${
                        scrolled ? 'lg:gap-5' : 'lg:gap-6'
                    }`}
                >
                    <a
                        href={mapsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex min-w-0 items-center gap-2 text-primary transition-colors duration-300 hover:text-brand"
                    >
                        <span
                            className={`flex shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand transition-all duration-300 group-hover:scale-105 ${
                                scrolled ? 'h-7 w-7' : 'h-7 w-7 lg:h-8 lg:w-8'
                            }`}
                        >
                            <MapPin size={14} strokeWidth={2.25} />
                        </span>
                        <span
                            className={`truncate font-medium transition-all duration-300 ${
                                scrolled ? '' : 'lg:text-base'
                            }`}
                        >
                            {address}
                        </span>
                    </a>

                    <span className="hidden h-5 w-px shrink-0 bg-default lg:block" />

                    <span className="hidden shrink-0 items-center gap-2 whitespace-nowrap text-primary lg:flex">
                        <span
                            className={`flex shrink-0 items-center justify-center rounded-full bg-brand-subtle text-brand transition-all duration-300 ${
                                scrolled ? 'h-7 w-7' : 'h-7 w-7 lg:h-8 lg:w-8'
                            }`}
                        >
                            <Clock size={14} strokeWidth={2.25} />
                        </span>
                        <span
                            className={`font-medium transition-all duration-300 ${
                                scrolled ? '' : 'lg:text-base'
                            }`}
                        >
                            {summarizeWorkingHours(meta.workingHours, lang)}
                        </span>
                    </span>
                </div>

                {/* Socials — второстепенный блок действий, справа */}
                {meta.socialLinks.length > 0 && (
                    <div
                        className={`flex shrink-0 items-center gap-2.5 transition-all duration-300 ${
                            scrolled ? '' : 'lg:gap-3'
                        }`}
                    >
                        {meta.socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className={`flex items-center justify-center rounded-full border border-brand text-brand transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-white hover:shadow-md ${
                                    scrolled ? 'h-8 w-8' : 'h-8 w-8 lg:h-9 lg:w-9'
                                }`}
                            >
                                <Icon icon={social.icon} width={15} height={15} />
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavInfoBar;