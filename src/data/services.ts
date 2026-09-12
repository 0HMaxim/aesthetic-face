import { Feather, Syringe, Zap, Sun } from 'lucide-react';
import type { Service } from '../types/Service.ts';
import type {ContentBlock} from "../types/ContentBlock.ts";

// TODO: per AGENTS.md this list should eventually be loaded from Firebase
// (title/description per language, price/duration derived from priceModels there too).
export const services: Service[] = [
    {
        id: 1,
        slug: 'laser-hair-removal',
        title: {
            uk: 'Лазерна епіляція (Александритовий лазер)',
            en: 'Laser Hair Removal (Alexandrite Laser)',
            ru: 'Лазерная эпиляция (Александритовый лазер)',
            de: 'Laser-Haarentfernung (Alexandrit-Laser)',
        },
        description: {
            uk: 'Швидка, безболісна та безконтактна епіляція на александритовому лазері Deka Motus Pro - від брів до пакетів для всього тіла.',
            en: 'Fast, pain-free, contactless hair removal with the Deka Motus PRO alexandrite laser, covering all body zones from eyebrows to full-body packages.',
            ru: 'Быстрая, безболезненная и бесконтактная эпиляция на александритовом лазере Deka Motus Pro - от бровей до пакетов на всё тело.',
            de: 'Schnelle, schmerzfreie und kontaktlose Haarentfernung mit dem Alexandrit-Laser Deka Motus PRO - von den Augenbrauen bis zu Ganzkörper-Paketen.',
        },
        price: '20',
        duration: '10-60 min',
        icon: Feather,
        gradient: 'from-[#efdfc0] to-[#c8a165]',
        image: 'https://deka-beauty.de/wp-content/uploads/2024/12/deka_web2024_motuspro_geraet-gal.jpg',
        priceModelId: 'laser-hair-removal',
        content: [
            {
                id: 'motus-heading-1',
                order: 1,
                type: 'heading',
                level: 2,
                text: {
                    uk: 'Апарат Deka Motus PRO',
                    en: 'The Deka Motus PRO Device',
                    ru: 'Аппарат Deka Motus PRO',
                    de: 'Das Gerät Deka Motus PRO',
                },
            },
            {
                id: 'motus-paragraph-1',
                order: 2,
                type: 'paragraph',
                text: {
                    uk: 'Motus PRO - це сучасний лазерний апарат італійського виробника DEKA, створений спеціально для епіляції. Він поєднує дві довжини хвилі - александритову (755 нм) та Nd:YAG (1064 нм) - що дозволяє ефективно опрацьовувати як тонке й світле волосся, так і різні типи шкіри, зберігаючи максимальну безпеку процедури.',
                    en: 'Motus PRO is a modern laser system by the Italian manufacturer DEKA, built specifically for hair removal. It combines two wavelengths - alexandrite (755 nm) and Nd:YAG (1064 nm) - allowing effective treatment of fine, light hair as well as a wide range of skin types, while keeping the procedure safe and comfortable.',
                    ru: 'Motus PRO - это современный лазерный аппарат итальянского производителя DEKA, созданный специально для эпиляции. Он сочетает две длины волны - александритовую (755 нм) и Nd:YAG (1064 нм), что позволяет эффективно обрабатывать как тонкие и светлые волосы, так и разные типы кожи, сохраняя максимальную безопасность процедуры.',
                    de: 'Motus PRO ist ein modernes Lasersystem des italienischen Herstellers DEKA, das speziell für die Haarentfernung entwickelt wurde. Es kombiniert zwei Wellenlängen - Alexandrit (755 nm) und Nd:YAG (1064 nm) - und ermöglicht so eine wirksame Behandlung von feinem, hellem Haar sowie unterschiedlichsten Hauttypen bei maximaler Sicherheit.',
                },
            },
            {
                id: 'motus-imagetext-1',
                order: 3,
                type: 'imageText',
                split: 'half',
                imagePosition: 'right',
                image: {
                    src: 'https://deka-beauty.de/wp-content/uploads/2024/11/deka_web2024_motus-handstkV2.png',
                    alt: {
                        uk: 'Ручка Moveo апарата Motus PRO під час процедури епіляції',
                        en: 'Moveo handpiece of the Motus PRO during a hair removal treatment',
                        ru: 'Ручка Moveo аппарата Motus PRO во время процедуры эпиляции',
                        de: 'Moveo-Handstück des Motus PRO während einer Haarentfernungsbehandlung',
                    },
                },
                heading: {
                    uk: 'Технологія Moveo',
                    en: 'Moveo Technology',
                    ru: 'Технология Moveo',
                    de: 'Die Moveo-Technologie',
                },
                text: {
                    uk: 'Інноваційна ручка Moveo-HR з сапфіровим наконечником (діаметр плями 24 мм) мінімізує втрати енергії та точно передає її у шкіру - навіть при дуже світлих типах шкіри. Спеціальна методика руху ручкою робить процедуру швидшою, комфортнішою та практично безболісною. Ділянку 10×10 см можна опрацювати всього за 25 секунд.',
                    en: 'The innovative Moveo-HR handpiece with a sapphire tip (24 mm spot diameter) minimizes energy loss and delivers it precisely into the skin - even on very light skin tones. Its gliding motion technique makes the treatment faster, more comfortable and virtually pain-free. A 10×10 cm area can be treated in as little as 25 seconds.',
                    ru: 'Инновационная ручка Moveo-HR с сапфировым наконечником (диаметр пятна 24 мм) минимизирует потери энергии и точно передаёт её в кожу - даже при очень светлых типах кожи. Особая техника скольжения делает процедуру быстрее, комфортнее и практически безболезненной. Участок 10×10 см можно обработать всего за 25 секунд.',
                    de: 'Das innovative Moveo-HR-Handstück mit Saphirspitze (24 mm Spot-Durchmesser) minimiert Energieverluste und überträgt sie präzise auf die Haut - selbst bei sehr hellen Hauttypen. Die spezielle Gleittechnik macht die Behandlung schneller, angenehmer und nahezu schmerzfrei. Ein Bereich von 10×10 cm lässt sich in nur 25 Sekunden behandeln.',
                },
            },
            {
                id: 'motus-heading-2',
                order: 4,
                type: 'heading',
                level: 2,
                text: {
                    uk: 'Комфорт і безпека процедури',
                    en: 'Comfort and Safety',
                    ru: 'Комфорт и безопасность процедуры',
                    de: 'Komfort und Sicherheit',
                },
            },
            {
                id: 'motus-paragraph-2',
                order: 5,
                type: 'paragraph',
                text: {
                    uk: 'Вбудоване контактне охолодження шкіри забезпечує поступове нагрівання тканин, що робить процедуру м’якою та зводить до мінімуму побічні ефекти. Система автоматично розпізнає ручку і швидко підбирає параметри для будь-якого типу шкіри та волосся - з понад 200 вбудованими протоколами лікування.',
                    en: 'Built-in contact skin cooling ensures gradual tissue heating, making the treatment gentle and minimizing side effects. The system automatically recognizes the handpiece and quickly selects the right parameters for any skin and hair type, drawing on more than 200 built-in treatment protocols.',
                    ru: 'Встроенное контактное охлаждение кожи обеспечивает постепенный нагрев тканей, делая процедуру мягкой и сводя побочные эффекты к минимуму. Система автоматически распознаёт ручку и быстро подбирает параметры для любого типа кожи и волос - доступно более 200 встроенных протоколов лечения.',
                    de: 'Die integrierte Kontakthautkühlung sorgt für eine allmähliche Erwärmung des Gewebes, wodurch die Behandlung sanft verläuft und Nebenwirkungen minimiert werden. Das System erkennt das Handstück automatisch und wählt schnell die passenden Parameter für jeden Haut- und Haartyp - mit über 200 integrierten Behandlungsprotokollen.',
                },
            },
            {
                id: 'motus-image-1',
                order: 6,
                type: 'image',
                size: 'lg',
                image: {
                    src: 'https://dekalaser.ru/wp-content/uploads/2023/11/screenshot_5-1.jpg.webp',
                    alt: {
                        uk: 'Сучасний кабінет лазерної епіляції з апаратом Motus PRO',
                        en: 'Modern laser hair removal treatment room with the Motus PRO',
                        ru: 'Современный кабинет лазерной эпиляции с аппаратом Motus PRO',
                        de: 'Moderner Behandlungsraum für Laser-Haarentfernung mit dem Motus PRO',
                    },
                },
                caption: {
                    uk: 'Апарат оснащений поворотним 15,6″ сенсорним дисплеєм для зручного керування',
                    en: 'The device features a rotating 15.6″ touchscreen display for intuitive control',
                    ru: 'Аппарат оснащён поворотным 15,6″ сенсорным дисплеем для удобного управления',
                    de: 'Das Gerät verfügt über ein schwenkbares 15,6″ Touchscreen-Display für eine intuitive Bedienung',
                },
            },
            {
                id: 'motus-heading-3',
                order: 7,
                type: 'heading',
                level: 2,
                text: {
                    uk: 'Технічні переваги апарата',
                    en: 'Technical Advantages',
                    ru: 'Технические преимущества аппарата',
                    de: 'Technische Vorteile des Geräts',
                },
            },
            {
                id: 'motus-paragraph-3',
                order: 8,
                type: 'paragraph',
                text: {
                    uk: 'Александритова хвиля 755 нм найкраще підходить для тонкого і світлого волосся, а другий канал Nd:YAG 1064 нм безпечно працює навіть на смаглявій та засмаглій шкірі. Завдяки продуманій енергоефективній схемі живлення апарату достатньо звичайної розетки на 16А - окрема силова лінія не потрібна, що спрощує встановлення в кабінеті.',
                    en: 'The 755 nm alexandrite channel works best on fine, light hair, while the second Nd:YAG 1064 nm channel treats darker or tanned skin safely. Thanks to an efficient power design, the device only needs a standard 16A wall socket, so no dedicated power line is required for installation.',
                    ru: 'Александритовая волна 755 нм лучше всего подходит для тонких и светлых волос, а второй канал Nd:YAG 1064 нм безопасно работает даже на смуглой и загорелой коже. Благодаря продуманной энергоэффективной схеме питания аппарату достаточно обычной розетки на 16А - отдельная силовая линия не нужна, что упрощает установку в кабинете.',
                    de: 'Die Alexandrit-Wellenlänge (755 nm) eignet sich besonders für feines, helles Haar, während der zweite Nd:YAG-Kanal (1064 nm) auch dunklere oder gebräunte Haut sicher behandelt. Dank einer effizienten Stromversorgung genügt eine handelsübliche Schuko-Steckdose mit 16A - eine separate Starkstromleitung ist nicht nötig.',
                },
            },
            {
                id: 'motus-imagetext-2',
                order: 9,
                type: 'imageText',
                split: 'wide',
                imagePosition: 'left',
                image: {
                    src: 'https://deka-beauty.de/wp-content/uploads/2024/12/deka_web2024_motuspro_geraet-gal.jpg',
                    alt: {
                        uk: 'Компактний апарат Motus PRO в сучасному кабінеті косметології',
                        en: 'Compact Motus PRO device in a modern cosmetology treatment room',
                        ru: 'Компактный аппарат Motus PRO в современном косметологическом кабинете',
                        de: 'Kompaktes Motus PRO Gerät in einem modernen Behandlungsraum',
                    },
                },
                heading: {
                    uk: 'Компактність і зручність у роботі',
                    en: 'Compact and User-Friendly',
                    ru: 'Компактность и удобство в работе',
                    de: 'Kompakt und benutzerfreundlich',
                },
                text: {
                    uk: 'Невеликі габарити апарата дозволяють легко розмістити його в будь-якому кабінеті, а продумане, інтуїтивно зрозуміле програмне забезпечення скорочує час навчання персоналу. Легкі ергономічні ручки не втомлюють руку майстра навіть під час тривалих процедур на все тіло.',
                    en: 'The compact footprint fits easily into any treatment room, and the intuitive software shortens staff training time. Lightweight, ergonomic handpieces keep the specialist comfortable even during long, full-body sessions.',
                    ru: 'Небольшие габариты аппарата позволяют легко разместить его в любом кабинете, а продуманное интуитивное программное обеспечение сокращает время обучения персонала. Лёгкие эргономичные ручки не утомляют руку мастера даже во время длительных процедур на всё тело.',
                    de: 'Die kompakten Abmessungen lassen sich in jedem Behandlungsraum unterbringen, und die intuitive Software verkürzt die Einarbeitungszeit des Personals. Die leichten, ergonomischen Handstücke ermüden auch bei langen Ganzkörperbehandlungen nicht.',
                },
            },
            {
                id: 'motus-heading-4',
                order: 10,
                type: 'heading',
                level: 3,
                text: {
                    uk: 'Технологія Moveo в деталях',
                    en: 'Moveo Technology in Detail',
                    ru: 'Технология Moveo подробнее',
                    de: 'Die Moveo-Technologie im Detail',
                },
            },
            {
                id: 'motus-paragraph-4',
                order: 11,
                type: 'paragraph',
                text: {
                    uk: 'Софт апарата автоматично розпізнає під’єднану ручку і миттєво підбирає оптимальні параметри для конкретного типу шкіри й волосся. Вбудований лічильник відстежує кількість переданої енергії, а звуковий сигнал повідомляє майстру, коли ділянка повністю опрацьована - це виключає пропуски й повторні проходи. Після короткого інструктажу з апаратом може працювати будь-хто з команди.',
                    en: 'The built-in software automatically recognizes the connected handpiece and instantly selects the optimal parameters for a given skin and hair type. A built-in counter tracks the energy delivered, and an audible signal tells the specialist when an area has been fully covered, avoiding gaps or repeated passes. After a short briefing, any member of the team can operate the device confidently.',
                    ru: 'Программное обеспечение аппарата автоматически распознаёт подключённую ручку и мгновенно подбирает оптимальные параметры для конкретного типа кожи и волос. Встроенный счётчик отслеживает переданную энергию, а звуковой сигнал сообщает мастеру, когда участок полностью обработан - это исключает пропуски и повторные проходы. После короткого инструктажа с аппаратом может работать любой сотрудник.',
                    de: 'Die Software erkennt das angeschlossene Handstück automatisch und wählt sofort die passenden Parameter für den jeweiligen Haut- und Haartyp. Ein integrierter Zähler erfasst die abgegebene Energie, und ein akustisches Signal zeigt an, wenn ein Bereich vollständig behandelt wurde - so werden Lücken oder doppelte Durchgänge vermieden. Nach einer kurzen Einweisung kann jedes Teammitglied das Gerät sicher bedienen.',
                },
            },
            {
                id: 'motus-imagegrid-1',
                order: 12,
                type: 'imageGrid',
                columns: 3,
                images: [
                    {
                        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwV6UlJq1k44YWNlqzS_93sa13bTdlgxp_pDNADI9brg&s=10',
                        alt: {
                            uk: 'Сенсорний дисплей апарата Motus PRO',
                            en: 'Touchscreen display of the Motus PRO',
                            ru: 'Сенсорный дисплей аппарата Motus PRO',
                            de: 'Touchscreen-Display des Motus PRO',
                        },
                    },
                    {
                        src: 'https://real-clinic.com/upload/iblock/c76/upi5wmcp38uagh27e4boxvqu6kh05uxp.jpg',
                        alt: {
                            uk: 'Ручка Moveo-HR крупним планом',
                            en: 'Moveo-HR handpiece close-up',
                            ru: 'Ручка Moveo-HR крупным планом',
                            de: 'Moveo-HR-Handstück in Nahaufnahme',
                        },
                    },
                    {
                        src: 'https://litus.com.ua/wp-content/uploads/2019/06/motus-ax-moveo-clinic-litus.jpg',
                        alt: {
                            uk: 'Процедура лазерної епіляції в кабінеті',
                            en: 'Laser hair removal treatment in progress',
                            ru: 'Процедура лазерной эпиляции в кабинете',
                            de: 'Laser-Haarentfernung in der Anwendung',
                        },
                    },
                ],
            },
            {
                id: 'motus-heading-5',
                order: 13,
                type: 'heading',
                level: 3,
                text: {
                    uk: 'Поворотний дисплей і ергономіка',
                    en: 'Swivel Display and Ergonomics',
                    ru: 'Поворотный дисплей и эргономика',
                    de: 'Schwenkbares Display und Ergonomie',
                },
            },
            {
                id: 'motus-paragraph-5',
                order: 14,
                type: 'paragraph',
                text: {
                    uk: 'Апарат оснащений 15,6-дюймовим сенсорним екраном, який можна повертати на 180° та нахиляти під зручним кутом. Великі, зрозумілі піктограми і оновлений інтерфейс дозволяють майстру швидко орієнтуватись у налаштуваннях навіть під час активної роботи з клієнтом.',
                    en: 'The device features a 15.6-inch touchscreen that rotates 180° and tilts to a comfortable viewing angle. Large, clear icons and a refreshed interface let the specialist navigate settings quickly, even in the middle of a treatment.',
                    ru: 'Аппарат оснащён 15,6-дюймовым сенсорным экраном, который можно поворачивать на 180° и наклонять под удобным углом. Крупные, понятные значки и обновлённый интерфейс позволяют мастеру быстро ориентироваться в настройках даже во время активной работы с клиентом.',
                    de: 'Das Gerät verfügt über ein 15,6-Zoll-Touchscreen-Display, das sich um 180° drehen und in einen komfortablen Winkel neigen lässt. Große, klare Symbole und eine modernisierte Oberfläche ermöglichen eine schnelle Navigation, auch mitten in der Behandlung.',
                },
            },
            {
                id: 'motus-paragraph-6',
                order: 15,
                type: 'paragraph',
                text: {
                    uk: 'Завдяки спрощеній конструкції лазерного блоку апарат вимагає менше технічного обслуговування та має нижчі експлуатаційні витрати - це дозволяє студії тримати ціни на епіляцію доступними без втрати якості процедур.',
                    en: 'A simplified laser core design means less maintenance and lower running costs, which helps the studio keep hair-removal prices accessible without compromising on treatment quality.',
                    ru: 'Благодаря упрощённой конструкции лазерного блока аппарат требует меньше технического обслуживания и имеет более низкие эксплуатационные расходы - это позволяет студии удерживать доступные цены на эпиляцию без потери качества процедур.',
                    de: 'Ein vereinfachter Aufbau des Laserkerns bedeutet weniger Wartungsaufwand und geringere Betriebskosten - das hilft dem Studio, die Preise für die Haarentfernung attraktiv zu halten, ohne bei der Behandlungsqualität Abstriche zu machen.',
                },
            },
        ] satisfies ContentBlock[],
    },
    {
        id: 2,
        slug: 'regenerative-therapy',
        title: {
            uk: 'Регенеративна терапія та нідосоми',
            en: 'Regenerative Therapy & Nidosomes',
            ru: 'Регенеративная терапия и нидосомы',
            de: 'Regenerative Therapie & Nidosomen',
        },
        description: {
            uk: 'Ін’єкційні регенеративні процедури: колаген, PDRN, ліфтинг-коктейлі, анти-вікові та вітамінні коктейлі, а також терапія нідосомами Celltermi Revive для шкіри та волосся.',
            en: 'Injectable regenerative treatments including collagen, PDRN, lifting cocktails, anti-aging and vitamin boosters, plus Celltermi Revive nidosome therapy for skin and hair.',
            ru: 'Инъекционные регенеративные процедуры: коллаген, PDRN, лифтинг-коктейли, антивозрастные и витаминные коктейли, а также терапия нидосомами Celltermi Revive для кожи и волос.',
            de: 'Injizierbare regenerative Behandlungen wie Kollagen, PDRN, Lifting-Cocktails, Anti-Aging- und Vitamin-Booster sowie die Celltermi-Revive-Nidosomen-Therapie für Haut und Haare.',
        },
        price: '70',
        duration: '30-45 min',
        icon: Syringe,
        gradient: 'from-[#7a4b26] to-[#4a2c17]',
        image: 'https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=800&q=80',
        priceModelId: 'regenerative-therapy',
    },
    {
        id: 3,
        slug: 'refit-lifting',
        title: {
            uk: 'REFIT - Нехірургічний ліфтинг',
            en: 'REFIT - Non-Surgical Lifting',
            ru: 'REFIT - Нехирургический лифтинг',
            de: 'REFIT - Nicht-chirurgisches Lifting',
        },
        description: {
            uk: 'Нехірургічний ліфтинг для обличчя і тіла: зони обличчя, декольте, живота, спини, сідниць та ніг, з можливістю пакетних пропозицій.',
            en: 'Non-surgical lifting for face and body, covering face, décolletage, abdomen, back, buttocks and legs, available as single sessions or packages.',
            ru: 'Нехирургический лифтинг для лица и тела: зоны лица, декольте, живота, спины, ягодиц и ног, доступны пакетные предложения.',
            de: 'Nicht-chirurgisches Lifting für Gesicht und Körper - Gesicht, Dekolleté, Bauch, Rücken, Gesäß und Beine, als Einzelsitzung oder im Paket.',
        },
        price: '60',
        duration: '15-60 min',
        icon: Zap,
        gradient: 'from-[#9c6b3e] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&q=80',
        priceModelId: 'refit-lifting',
    },
    {
        id: 4,
        slug: 'ipl-therapy',
        title: {
            uk: 'IPL терапія',
            en: 'IPL Therapy',
            ru: 'IPL терапия',
            de: 'IPL-Therapie',
        },
        description: {
            uk: 'Терапія інтенсивним імпульсним світлом для фотоомолодження, видалення пігменту, акне та пост-акне, а також розацеа й куперозу.',
            en: 'Intense pulsed light treatments for photorejuvenation, pigment removal, acne and post-acne marks, and rosacea/couperose.',
            ru: 'Терапия интенсивным импульсным светом для фотоомоложения, удаления пигмента, акне и пост-акне, а также розацеа и купероза.',
            de: 'Intense-Pulsed-Light-Behandlungen zur Photoverjüngung, Pigmententfernung, gegen Akne und Aknenarben sowie Rosacea/Couperose.',
        },
        price: '20',
        duration: '20-40 min',
        icon: Sun,
        gradient: 'from-[#c8a165] to-[#7a4b26]',
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
        priceModelId: 'ipl-therapy',
    },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
    services.find((service) => service.slug === slug);