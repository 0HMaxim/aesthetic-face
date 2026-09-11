import { Icon } from '@iconify/react';
import { MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getLocalizedText } from '../utils/localization';
import {meta} from "../data/meta.ts";

const NavInfoBar = () => {
    const { i18n } = useTranslation();
    const lang = i18n.language;

    return (
        <div className="border-b border-default bg-surface-alt px-4 py-2 text-xs text-secondary sm:px-6 lg:px-10">
            <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between">
                <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <MapPin size={13} className="shrink-0 text-brand" />
                        {getLocalizedText(meta.address, lang)}
                    </span>
                    <span className="hidden items-center gap-1.5 whitespace-nowrap lg:flex">
                        <Clock size={13} className="shrink-0 text-brand" />
                        {getLocalizedText(meta.workingHours, lang)}
                    </span>
                </div>

                <div className="flex items-center gap-1.5">
                    {meta.socialLinks.map((social) => (
                        <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-6 w-6 items-center justify-center rounded-full text-secondary transition-all duration-300 hover:-translate-y-0.5 hover:text-brand"
                        >
                        <Icon icon={social.icon} width={13} height={13} />
                        </a>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default NavInfoBar;