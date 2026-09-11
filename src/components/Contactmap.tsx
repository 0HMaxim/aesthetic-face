import { motion, useReducedMotion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface ContactMapProps {
    address: string;
}

export default function ContactMap({ address }: ContactMapProps) {
    const { t } = useTranslation();
    const shouldReduceMotion = useReducedMotion();

    // Embed без API-ключа, построенный из адреса.
    // Если нужна точная метка/вид — замените src на ссылку из
    // Google Maps → «Поделиться» → «Встроить карту» (iframe src).
    const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

    return (
        <motion.div
            initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="overflow-hidden rounded-3xl border border-brand/10 shadow-lg"
        >
            <iframe
                title={t('contact.map.title', 'Наш салон на карте')}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full sm:h-[420px]"
            />
        </motion.div>
    );
}