// src/types/ContactFormData.ts
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';