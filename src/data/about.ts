// src/data/about.ts
import type { PageContent } from '../types/PageContent';

/**
 * Временные тестовые данные для страницы About Us.
 * Когда подключим Firebase - этот файл заменится на хук useAboutContent(),
 * который вернёт данные того же типа PageContent.
 */
export const aboutContent: PageContent = {
    title: {
        uk: 'Про нас',
        ru: 'О нас',
        de: 'Über uns',
        en: 'About Us',
    },
    content: [
        {
            id: 'intro-heading',
            order: 0,
            type: 'heading',
            level: 2,
            text: {
                uk: 'Наша історія',
                ru: 'Наша история',
                de: 'Unsere Geschichte',
                en: 'Our Story',
            },
        },
        {
            id: 'intro-text',
            order: 1,
            type: 'paragraph',
            text: {
                uk: 'Aesthetic Face Beauty Salon - це затишний простір у Кілі, де догляд за обличчям і тілом стає справжнім ритуалом турботи про себе. Ми поєднуємо сучасне обладнання, перевірені методики та щиру увагу до кожного клієнта, щоб кожна процедура приносила не лише результат, а й задоволення від процесу.',
                ru: 'Aesthetic Face Beauty Salon - это уютное пространство в Киле, где уход за лицом и телом становится настоящим ритуалом заботы о себе. Мы сочетаем современное оборудование, проверенные методики и искреннее внимание к каждому клиенту, чтобы каждая процедура приносила не только результат, но и удовольствие от процесса.',
                de: 'Aesthetic Face Beauty Salon ist ein gemütlicher Ort in Kiel, an dem Gesichts- und Körperpflege zu einem echten Ritual der Selbstfürsorge wird. Wir verbinden moderne Geräte, bewährte Methoden und aufrichtige Aufmerksamkeit für jeden Kunden, damit jede Behandlung nicht nur Ergebnisse, sondern auch Freude bringt.',
                en: 'Aesthetic Face Beauty Salon is a cozy space in Kiel where facial and body care becomes a true self-care ritual. We combine modern equipment, proven methods, and genuine attention to every client, so each treatment delivers real results and a pleasant experience.',
            },
        },
        {
            id: 'trust-heading',
            order: 2,
            type: 'heading',
            level: 3,
            text: {
                uk: 'Нам довіряють',
                ru: 'Нам доверяют',
                de: 'Man vertraut uns',
                en: 'Trusted by Our Clients',
            },
        },
        {
            id: 'trust-text',
            order: 3,
            type: 'paragraph',
            text: {
                uk: 'Рейтинг 5,0 на основі понад 70 відгуків - це не просто цифра, а результат щоденної роботи нашої команди. Клієнти найчастіше відзначають комфортну атмосферу салону, детальну консультацію перед кожною процедурою та уважне ставлення до індивідуальних побажань - саме на цьому ми будуємо довіру, яка змушує повертатися знову.',
                ru: 'Рейтинг 5,0 на основе более 70 отзывов - это не просто цифра, а результат ежедневной работы нашей команды. Клиенты чаще всего отмечают комфортную атмосферу салона, подробную консультацию перед каждой процедурой и внимательное отношение к индивидуальным пожеланиям - именно на этом мы строим доверие, которое заставляет возвращаться снова.',
                de: 'Eine Bewertung von 5,0 aus über 70 Rezensionen ist nicht nur eine Zahl, sondern das Ergebnis der täglichen Arbeit unseres Teams. Kundinnen und Kunden loben besonders die angenehme Atmosphäre des Salons, die ausführliche Beratung vor jeder Behandlung und die aufmerksame Berücksichtigung individueller Wünsche - genau darauf bauen wir das Vertrauen auf, das unsere Gäste immer wieder zurückkehren lässt.',
                en: 'A 5.0 rating from over 70 reviews isn\'t just a number - it reflects our team\'s daily work. Clients most often mention the salon\'s comfortable atmosphere, the detailed consultation before every treatment, and the careful attention to individual wishes - this is the trust that keeps them coming back.',
            },
        },
        {
            id: 'salon-photo',
            order: 4,
            type: 'image',
            size: 'lg',
            image: {
                src: 'https://cdn.prod.website-files.com/6a37d7c76c8e3c1201f71adf/6a37f03cd6bbc9dcb0fc50f1_Hero%20Bild.webp',
                alt: {
                    uk: 'Інтер’єр салону краси Aesthetic Face',
                    ru: 'Интерьер салона красоты Aesthetic Face',
                    de: 'Innenraum des Aesthetic Face Salons',
                    en: 'Interior of Aesthetic Face salon',
                },
            },
            caption: {
                uk: 'Наш затишний простір у Кілі',
                ru: 'Наше уютное пространство в Киле',
                de: 'Unser gemütlicher Raum in Kiel',
                en: 'Our cozy space in Kiel',
            },
        },
        {
            id: 'mission-block',
            order: 5,
            type: 'imageText',
            imagePosition: 'left',
            split: 'half',
            image: {
                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAdTEkSK9qN9-mvS1M-8TyMNR90vi3AkYJQwsMWGcLiacs59PsfEMokcm&s=10',
                alt: {
                    uk: 'Косметолог під час процедури',
                    ru: 'Косметолог во время процедуры',
                    de: 'Kosmetikerin während der Behandlung',
                    en: 'Beautician performing a treatment',
                },
            },
            heading: {
                uk: 'Наша місія',
                ru: 'Наша миссия',
                de: 'Unsere Mission',
                en: 'Our Mission',
            },
            text: {
                uk: 'Ми віримо, що краса починається з якісного догляду. Кожна процедура в нашому салоні виконується сертифікованими фахівцями з використанням перевірених препаратів і сучасного обладнання - від лазерної епіляції до догляду за обличчям.',
                ru: 'Мы верим, что красота начинается с качественного ухода. Каждая процедура в нашем салоне выполняется сертифицированными специалистами с использованием проверенных препаратов и современного оборудования - от лазерной эпиляции до ухода за лицом.',
                de: 'Wir glauben, dass Schönheit mit hochwertiger Pflege beginnt. Jede Behandlung in unserem Salon wird von zertifizierten Fachkräften mit bewährten Produkten und moderner Technik durchgeführt - von der Laser-Haarentfernung bis zur Gesichtspflege.',
                en: 'We believe beauty starts with quality care. Every treatment in our salon is performed by certified specialists using trusted products and modern equipment - from laser hair removal to facial care.',
            },
        },
        {
            id: 'team-heading',
            order: 6,
            type: 'heading',
            level: 2,
            text: {
                uk: 'Наша команда',
                ru: 'Наша команда',
                de: 'Unser Team',
                en: 'Our Team',
            },
        },
        {
            id: 'team-spotlight',
            order: 7,
            type: 'imageText',
            imagePosition: 'right',
            split: 'half',
            image: {
                src: 'https://0hmaxim.github.io/aesthetlc.face/doctor.jpg',
                alt: {
                    uk: 'Косметолог салону Aesthetic Face за роботою',
                    ru: 'Косметолог салона Aesthetic Face за работой',
                    de: 'Kosmetikerin von Aesthetic Face bei der Arbeit',
                    en: 'Aesthetic Face specialist at work',
                },
            },
            heading: {
                uk: 'Досвідчені фахівці, яким довіряють',
                ru: 'Опытные специалисты, которым доверяют',
                de: 'Erfahrene Fachkräfte, denen man vertraut',
                en: 'Experienced Specialists Clients Trust',
            },
            text: {
                uk: 'Наші майстри - це не просто виконавці процедур, а фахівці, які уважно підбирають підхід під кожен тип шкіри та побажання клієнта. Багато гостей салону приходять до улюбленого майстра роками, а нові клієнти найчастіше приходять за рекомендацією.',
                ru: 'Наши мастера - это не просто исполнители процедур, а специалисты, которые внимательно подбирают подход под каждый тип кожи и пожелания клиента. Многие гости салона годами приходят к своему любимому мастеру, а новые клиенты чаще всего приходят по рекомендации.',
                de: 'Unsere Kosmetikerinnen führen nicht einfach Behandlungen durch - sie wählen den Ansatz sorgfältig passend zu jedem Hauttyp und den Wünschen der Kundinnen und Kunden. Viele Stammgäste kommen seit Jahren zu ihrer bevorzugten Fachkraft, und neue Kundinnen und Kunden finden uns meist über Empfehlungen.',
                en: 'Our specialists don\'t just perform treatments - they carefully tailor their approach to each skin type and client\'s wishes. Many regulars have been coming to their favorite specialist for years, and most new clients find us through recommendations.',
            },
        },
        {
            id: 'space-heading',
            order: 8,
            type: 'heading',
            level: 2,
            text: {
                uk: 'Наш простір',
                ru: 'Наше пространство',
                de: 'Unser Raum',
                en: 'Our Space',
            },
        },
        {
            id: 'team-grid',
            order: 9,
            type: 'imageGrid',
            columns: 3,
            images: [
                {
                    src: '',
                    alt: {
                        uk: 'Зона очікування',
                        ru: 'Зона ожидания',
                        de: 'Wartebereich',
                        en: 'Waiting area',
                    },
                },
                {
                    src: '',
                    alt: {
                        uk: 'Кабінет процедур',
                        ru: 'Процедурный кабинет',
                        de: 'Behandlungsraum',
                        en: 'Treatment room',
                    },
                },
                {
                    src: '',
                    alt: {
                        uk: 'Косметичні засоби',
                        ru: 'Косметические средства',
                        de: 'Kosmetikprodukte',
                        en: 'Cosmetic products',
                    },
                },
            ],
        },
        {
            id: 'closing-text',
            order: 10,
            type: 'paragraph',
            text: {
                uk: 'Завітайте до нас особисто - і переконайтеся, чому клієнти рекомендують Aesthetic Face Beauty Salon друзям та повертаються знову і знову.',
                ru: 'Приходите к нам лично - и убедитесь, почему клиенты рекомендуют Aesthetic Face Beauty Salon друзьям и возвращаются снова и снова.',
                de: 'Besuchen Sie uns persönlich - und überzeugen Sie sich selbst, warum unsere Kundinnen und Kunden Aesthetic Face Beauty Salon weiterempfehlen und immer wieder zurückkehren.',
                en: 'Come visit us in person - and see for yourself why clients recommend Aesthetic Face Beauty Salon to friends and keep coming back.',
            },
        },
    ],
};