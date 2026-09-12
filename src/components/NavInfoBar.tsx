// src/components/NavInfoBar.tsx
import { Icon } from '@iconify/react';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getLocalizedText, summarizeWorkingHours } from '../utils/localization';
import { meta } from '../data/meta';

const NavInfoBar = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language.split('-')[0];

    return (
        <div className="border-b border-default bg-surface-alt px-4 py-2.5 text-sm text-secondary sm:px-6 lg:px-10">
            <div className="mx-auto flex w-full max-w-[90rem] items-center justify-end gap-5">
                {/* Address */}
                <span className="flex items-center gap-2 whitespace-nowrap">
                    <MapPin size={15} strokeWidth={2} className="shrink-0 text-brand" />
                    {getLocalizedText(meta.address, lang)}
                </span>

                <span className="hidden h-4 w-px shrink-0 bg-default lg:block" />

                {/* Hours */}
                <span className="hidden items-center gap-2 whitespace-nowrap lg:flex">
                    <Clock size={15} strokeWidth={2} className="shrink-0 text-brand" />
                    {summarizeWorkingHours(meta.workingHours, lang)}
                </span>

                {/* Socials */}
                {meta.socialLinks.length > 0 && (
                    <>
                        <span className="h-4 w-px shrink-0 bg-default" />
                        <div className="flex shrink-0 items-center gap-2">
                            {meta.socialLinks.map((social) => (
                                <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="border-brand flex h-8 w-8 items-center justify-center rounded-full border text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-brand hover:text-white hover:shadow-md"
                                >
                                <Icon icon={social.icon} width={16} height={16} />
                                </a>
                                ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default NavInfoBar;