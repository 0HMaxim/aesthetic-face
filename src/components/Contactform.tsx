import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion, AnimatePresence, type Variants } from 'framer-motion';
import { Icon } from '@iconify/react';
import { useTranslation } from 'react-i18next';
import type { ContactFormData, ContactFormStatus } from '../types/Contact.ts';

const EMPTY_FORM: ContactFormData = { name: '', email: '', phone: '', message: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
    }),
};

export default function ContactForm() {
    const { t } = useTranslation();
    const shouldReduceMotion = useReducedMotion();

    const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [status, setStatus] = useState<ContactFormStatus>('idle');

    const validate = (): boolean => {
        const nextErrors: typeof errors = {};

        if (!formData.name.trim()) {
            nextErrors.name = t('contact.form.errors.name', 'Введите имя');
        }
        if (!EMAIL_REGEX.test(formData.email)) {
            nextErrors.email = t('contact.form.errors.email', 'Введите корректный email');
        }
        if (formData.message.trim().length < 10) {
            nextErrors.message = t('contact.form.errors.message', 'Сообщение слишком короткое');
        }

        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };

    const handleChange =
        (field: keyof ContactFormData) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setFormData((prev) => ({ ...prev, [field]: e.target.value }));
            };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('submitting');

        try {
            // TODO: заменить на реальную отправку, например Firestore:
            // await addDoc(collection(db, 'contactMessages'), { ...formData, createdAt: serverTimestamp() });
            await new Promise((resolve) => setTimeout(resolve, 900));

            setStatus('success');
            setFormData(EMPTY_FORM);
        } catch {
            setStatus('error');
        }
    };

    const fields: {
        name: keyof ContactFormData;
        type: string;
        label: string;
        as?: 'textarea';
    }[] = [
        { name: 'name', type: 'text', label: t('contact.form.name', 'Имя') },
        { name: 'email', type: 'email', label: t('contact.form.email', 'Email') },
        { name: 'phone', type: 'tel', label: t('contact.form.phone', 'Телефон (необязательно)') },
        { name: 'message', type: 'text', label: t('contact.form.message', 'Сообщение'), as: 'textarea' },
    ];

    return (
        <div className="rounded-3xl border border-brand/10 bg-surface p-8 shadow-lg sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                {t('contact.form.title', 'Напишите нам')}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-secondary">
                {t(
                    'contact.form.subtitle',
                    'Оставьте заявку, и мы свяжемся с вами в ближайшее время.'
                )}
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-5">
                {fields.map((field, i) => (
                    <motion.div
                        key={field.name}
                        custom={i}
                        initial={shouldReduceMotion ? undefined : 'hidden'}
                        whileInView={shouldReduceMotion ? undefined : 'visible'}
                        viewport={{ once: true, margin: '-40px' }}
                        variants={fieldVariants}
                    >
                        <label
                            htmlFor={field.name}
                            className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-secondary"
                        >
                            {field.label}
                        </label>
                        {field.as === 'textarea' ? (
                            <textarea
                                id={field.name}
                                rows={4}
                                value={formData[field.name]}
                                onChange={handleChange(field.name)}
                                className="w-full resize-none rounded-2xl border border-brand/15 bg-surface-alt px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-brand"
                            />
                        ) : (
                            <input
                                id={field.name}
                                type={field.type}
                                value={formData[field.name]}
                                onChange={handleChange(field.name)}
                                className="w-full rounded-2xl border border-brand/15 bg-surface-alt px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-brand"
                            />
                        )}
                        {errors[field.name] && (
                            <p className="mt-1.5 text-xs text-rose-500 dark:text-rose-400">{errors[field.name]}</p>
                        )}
                    </motion.div>
                ))}

                <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-6 py-3.5 text-sm font-medium text-white shadow-md transition-opacity disabled:opacity-60"
                >
                    {status === 'submitting' ? (
                        <Icon icon="svg-spinners:ring-resize" className="h-4 w-4" />
                    ) : (
                        <Icon icon="ph:paper-plane-tilt-bold" className="h-4 w-4" />
                    )}
                    {t('contact.form.submit', 'Отправить сообщение')}
                </motion.button>

                <AnimatePresence mode="wait">
                    {status === 'success' && (
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400"
                        >
                            {t('contact.form.success', 'Спасибо! Мы скоро с вами свяжемся.')}
                        </motion.p>
                    )}
                    {status === 'error' && (
                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            className="text-center text-sm font-medium text-rose-500 dark:text-rose-400"
                        >
                            {t('contact.form.error', 'Что-то пошло не так. Попробуйте ещё раз.')}
                        </motion.p>
                    )}
                </AnimatePresence>
            </form>
        </div>
    );
}