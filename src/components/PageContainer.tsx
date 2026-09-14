import type { ElementType, ReactNode } from 'react';

export const CONTAINER_CLASS = 'max-w-[98rem] 2xl:max-w-[120rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16';

/**
 * Контейнер для navbar — немного шире основного контента страниц,
 * чтобы меню/лого/контакты не были такими стеснёнными, как текстовый контент.
 * Отступы (px) такие же, как у CONTAINER_CLASS, чтобы всё визуально совпадало по краям.
 */
export const NAVBAR_CONTAINER_CLASS = 'max-w-[110rem] 2xl:max-w-[136rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16';

export const NAVINFOBAR_CONTAINER_CLASS = 'max-w-[80rem] 2xl:max-w-[70rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16';

export const FOOTER_CONTAINER_CLASS = 'max-w-[110rem] 2xl:max-w-[125rem] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-16';


interface PageContainerProps {
    children: ReactNode;
    className?: string;
    as?: ElementType;
}

/**
 * Единый контейнер контента для всех страниц.
 * Гарантирует одинаковую max-width (98rem, 120rem на 2xl) и одинаковые отступы.
 * Для обычных <div>/<section> — оборачивай в <PageContainer>.
 * Для <motion.div>, где уже есть variants/stagger — просто подставь CONTAINER_CLASS в className.
 */
const PageContainer = ({ children, className = '', as: Component = 'div' }: PageContainerProps) => (
    <Component className={`${CONTAINER_CLASS} ${className}`.trim()}>
        {children}
    </Component>
);

export default PageContainer;