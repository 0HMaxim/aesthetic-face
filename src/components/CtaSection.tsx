import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface CtaButton {
    type: 'tel' | 'link' | 'button';
    href?: string;        // для type='tel', напр. `tel:${meta.phone}`
    to?: string;           // для type='link'
    onClick?: () => void;  // для type='button'
    label: string;
    icon?: ReactNode;
    variant?: 'solid' | 'outline'; // по умолчанию: первая кнопка solid, остальные outline
}

interface CtaSectionProps {
    title: string;
    subtitle: string;
    buttons: CtaButton[];
    glow?: 'top-right' | 'bottom-left'; // по умолчанию 'top-right'
}

const glowPositionClasses: Record<NonNullable<CtaSectionProps['glow']>, string> = {
    'top-right': '-top-24 -right-24',
    'bottom-left': '-bottom-24 -left-24',
};

const buttonHover = {
    scale: 1.06,
    boxShadow: '0 20px 40px -10px rgba(0,0,0,0.35)',
    transition: { duration: 0.35, ease: 'easeOut' as const },
};
const buttonTap = { scale: 0.96, transition: { duration: 0.15 } };

const solidClasses =
    'relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand rounded-full font-semibold';
const outlineClasses =
    'block px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-brand transition-colors duration-300 font-semibold';

function CtaSection({ title, subtitle, buttons, glow = 'top-right' }: CtaSectionProps) {
    return (
        <motion.section
            className="relative py-20 text-white overflow-hidden"
            style={{ backgroundImage: 'var(--gradient-brand)' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <motion.div
                className="pointer-events-none absolute inset-0"
                style={{ backgroundImage: 'var(--gradient-brand-hover)' }}
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
            />

            <motion.div
                className={`pointer-events-none absolute ${glowPositionClasses[glow]} w-96 h-96 rounded-full bg-white/10 blur-3xl`}
                variants={{ rest: { scale: 1, opacity: 0.5 }, hover: { scale: 1.25, opacity: 0.9 } }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            />

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title !text-white mb-6">{title}</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">{subtitle}</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        {buttons.map((btn, index) => {
                            const isSolid = (btn.variant ?? (index === 0 ? 'solid' : 'outline')) === 'solid';
                            const className = isSolid ? solidClasses : outlineClasses;
                            const content = (
                                <>
                                    {btn.icon}
                                    <span>{btn.label}</span>
                                </>
                            );

                            if (btn.type === 'tel') {
                                return (
                                    <motion.a
                                        key={index}
                                        href={btn.href}
                                        whileHover={buttonHover}
                                        whileTap={buttonTap}
                                        className={className}
                                    >
                                        {content}
                                    </motion.a>
                                );
                            }

                            if (btn.type === 'link') {
                                return (
                                    <motion.div
                                        key={index}
                                        whileHover={buttonHover}
                                        whileTap={buttonTap}
                                        className="relative z-10 rounded-full"
                                    >
                                        <Link to={btn.to!} className={className}>
                                            {content}
                                        </Link>
                                    </motion.div>
                                );
                            }

                            return (
                                <motion.button
                                    key={index}
                                    onClick={btn.onClick}
                                    whileHover={buttonHover}
                                    whileTap={buttonTap}
                                    className={className}
                                >
                                    {content}
                                </motion.button>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default CtaSection;