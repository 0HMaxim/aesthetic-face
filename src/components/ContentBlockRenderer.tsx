// src/components/content/ContentBlockRenderer.tsx
import { motion } from 'motion/react';
import { getLocalizedText } from '../utils/localization.ts';
import type { ContentBlock } from '../types/ContentBlock.ts';

const imageSizeClass: Record<string, string> = {
    sm: 'max-w-sm mx-auto',
    md: 'max-w-2xl mx-auto',
    lg: 'max-w-4xl mx-auto',
    full: 'max-w-none',
};

const splitClass: Record<string, string> = {
    narrow: 'md:grid-cols-[2fr_3fr]',
    half: 'md:grid-cols-2',
    wide: 'md:grid-cols-[3fr_2fr]',
};

const gridColsClass: Record<number, string> = {
    2: 'grid-cols-2',
    3: 'grid-cols-2 sm:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-4',
};

// Текстовые блоки — держим в комфортной для чтения ширине,
// даже если родительский контейнер (страница) шире
const textConstraint = 'max-w-3xl mx-auto';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

interface Props {
    blocks: ContentBlock[];
    lang: string;
}

export const ContentBlockRenderer = ({ blocks, lang }: Props) => {
    const sorted = [...blocks].sort((a, b) => a.order - b.order);

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-12"
        >
            {sorted.map((block) => {
                switch (block.type) {
                    case 'heading': {
                        const Tag = block.level === 2 ? 'h2' : 'h3';
                        return (
                            <motion.div key={block.id} variants={itemVariants} className={textConstraint}>
                                <Tag
                                    className={
                                        block.level === 2
                                            ? 'text-2xl md:text-3xl font-bold text-gradient-accent'
                                            : 'text-xl md:text-2xl font-semibold text-primary'
                                    }
                                >
                                    {getLocalizedText(block.text, lang)}
                                </Tag>
                            </motion.div>
                        );
                    }

                    case 'paragraph':
                        return (
                            <motion.p
                                key={block.id}
                                variants={itemVariants}
                                className={`text-lg text-secondary leading-relaxed ${textConstraint}`}
                            >
                                {getLocalizedText(block.text, lang)}
                            </motion.p>
                        );

                    case 'image':
                        // У image-блока уже есть своя max-w из imageSizeClass — трогать не нужно,
                        // он сам центрируется независимо от ширины родителя
                        return (
                            <motion.figure
                                key={block.id}
                                variants={itemVariants}
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.3 }}
                                className={imageSizeClass[block.size]}
                            >
                                <div className="rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={block.image.src}
                                        alt={getLocalizedText(block.image.alt, lang)}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="mt-2 text-sm text-secondary text-center">
                                        {getLocalizedText(block.caption, lang)}
                                    </figcaption>
                                )}
                            </motion.figure>
                        );

                    case 'imageText':
                        // Не ограничиваем шириной — этот блок сам решает пропорции через split,
                        // и на широком контейнере смотрится лучше именно во всю ширину
                        return (
                            <motion.div
                                key={block.id}
                                variants={itemVariants}
                                className={`grid grid-cols-1 gap-8 items-center ${splitClass[block.split]}`}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                    className={`rounded-2xl overflow-hidden shadow-lg ${
                                        block.imagePosition === 'right' ? 'md:order-2' : ''
                                    }`}
                                >
                                    <img
                                        src={block.image.src}
                                        alt={getLocalizedText(block.image.alt, lang)}
                                        className="w-full h-auto object-cover aspect-[4/3]"
                                    />
                                </motion.div>
                                <div className={block.imagePosition === 'right' ? 'md:order-1' : ''}>
                                    {block.heading && (
                                        <h3 className="text-xl font-semibold text-primary mb-3">
                                            {getLocalizedText(block.heading, lang)}
                                        </h3>
                                    )}
                                    <p className="text-secondary leading-relaxed">
                                        {getLocalizedText(block.text, lang)}
                                    </p>
                                </div>
                            </motion.div>
                        );

                    case 'imageGrid':
                        // Тоже во всю ширину родителя — сетка фото выигрывает от простора
                        return (
                            <motion.div
                                key={block.id}
                                variants={itemVariants}
                                className={`grid gap-4 ${gridColsClass[block.columns]}`}
                            >
                                {block.images.map((img, i) => (
                                    <motion.img
                                        key={i}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                        src={img.src}
                                        alt={getLocalizedText(img.alt, lang)}
                                        className="w-full h-full aspect-square object-cover rounded-xl shadow-md"
                                    />
                                ))}
                            </motion.div>
                        );

                    default:
                        return null;
                }
            })}
        </motion.div>
    );
};