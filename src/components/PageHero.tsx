import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface BreadcrumbItem {
    label: string;
    to?: string; // если не задан — текущая (не кликабельная) страница
}

interface PageHeroProps {
    title: string;
    subtitle?: string;
    breadcrumbs: BreadcrumbItem[];
    /** Картинка-фон вместо градиента (например, фото услуги) */
    backgroundImage?: string;
    /** Доп. класс для оверлея поверх backgroundImage (напр. `bg-gradient-to-br ${service.gradient} opacity-60`) */
    imageOverlayClassName?: string;
    /** Иконка перед заголовком (как на ServiceDetails) */
    icon?: ReactNode;
    containerClassName: string; // ваш CONTAINER_CLASS
    iconGradientClassName?: string;
}

function PageHero({
                      title,
                      subtitle,
                      breadcrumbs,
                      backgroundImage,
                      imageOverlayClassName,
                      icon,
                      containerClassName,
                      iconGradientClassName,
                  }: PageHeroProps) {
    const isImageHero = Boolean(backgroundImage);

    return (
        <motion.section
            className="relative overflow-hidden text-white"
            style={isImageHero ? undefined : { backgroundImage: 'var(--gradient-brand)' }}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            {isImageHero ? (
                <>
                    <img
                        src={backgroundImage}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {imageOverlayClassName && (
                        <div className={`absolute inset-0 ${imageOverlayClassName}`} />
                    )}
                </>
            ) : (
                <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{ backgroundImage: 'var(--gradient-brand-hover)' }}
                    variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                />
            )}
            <div className="absolute inset-0 bg-black/20" />

            <motion.div
                className={`relative z-10 ${containerClassName} py-16`}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
                }}
            >
                <motion.nav
                    aria-label="Breadcrumb"
                    variants={{
                        hidden: { opacity: 0, y: -10 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                    }}
                    className="flex items-center space-x-2 text-white/80 text-sm mb-6"
                >
                    <Link to="/" className="inline-flex items-center hover:text-white transition-colors duration-300">
                        <Home className="w-4 h-4" />
                    </Link>
                    {breadcrumbs.map((crumb, index) => (
                        <span key={index} className="flex items-center space-x-2">
                            <ChevronRight className="w-4 h-4 opacity-60" />
                            {crumb.to ? (
                                <Link to={crumb.to} className="hover:text-white transition-colors duration-300">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-white font-medium">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </motion.nav>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 24 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
                    }}
                    className={icon ? 'flex items-center space-x-4' : undefined}
                >
                    {icon && (
                        <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`inline-flex items-center justify-center w-16 h-16 rounded-xl text-white shadow-lg ${iconGradientClassName ?? ''}`}
                        >
                            {icon}
                        </motion.div>
                    )}
                    <div>
                        <h1 className={`page-title text-white ${subtitle ? 'mb-3' : ''}`}>{title}</h1>
                        {subtitle && <p className="page-subtitle text-white/85 max-w-2xl">{subtitle}</p>}
                    </div>
                </motion.div>
            </motion.div>
        </motion.section>
    );
}

export default PageHero;