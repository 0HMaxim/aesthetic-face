import type { PriceModel } from '../types/Price';

export const priceModels: PriceModel[] = [
    {
        id: 'laser-hair-removal',
        serviceIds: ['laser-hair-removal'],
        category: {
            uk: 'Лазерна епіляція - Александритовий лазер Deka Motus Pro',
            ru: 'Лазерная эпиляция - Александритовый лазер Deka Motus Pro',
            en: 'Laser Hair Removal - Deka Motus Pro Alexandrite Laser',
            de: 'Laser-Haarentfernung - Alexandrit-Laser Deka Motus Pro',
        },
        columns: {
            procedure: { uk: 'Зона', ru: 'Зона', en: 'Area', de: 'Bereich' },
            price: { uk: 'Ціна', ru: 'Цена', en: 'Price', de: 'Preis' },
        },
        sections: [
            {
                subtitle: {
                    uk: 'Окремі зони',
                    ru: 'Отдельные зоны',
                    en: 'Individual Areas',
                    de: 'Einzelne Bereiche',
                },
                items: [
                    {
                        procedure: { uk: 'Брови (між бровами)', ru: 'Брови (межбровье)', en: 'Eyebrows (between brows)', de: 'Augenbrauen (Zwischenbrauenbereich)' },
                        price: { uk: '20 €', ru: '20 €', en: '€20', de: '20 €' },
                    },
                    {
                        procedure: { uk: 'Вуха', ru: 'Уши', en: 'Ears', de: 'Ohren' },
                        price: { uk: '30 €', ru: '30 €', en: '€30', de: '30 €' },
                    },
                    {
                        procedure: { uk: 'Верхня губа', ru: 'Верхняя губа', en: 'Upper lip', de: 'Oberlippe' },
                        price: { uk: '40 €', ru: '40 €', en: '€40', de: '40 €' },
                    },
                    {
                        procedure: { uk: 'Щоки / Вилиці / Лінія бороди', ru: 'Щёки / Скулы / Линия бороды', en: 'Cheeks / Cheekbones / Beard line', de: 'Wangen / Wangenknochen / Bartlinie' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                    {
                        procedure: { uk: 'Підборіддя', ru: 'Подбородок', en: 'Chin', de: 'Kinn' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                    {
                        procedure: { uk: 'Шия', ru: 'Шея', en: 'Neck', de: 'Hals' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                    {
                        procedure: { uk: 'Обличчя (повністю)', ru: 'Лицо (полностью)', en: 'Face (full)', de: 'Gesicht (komplett)' },
                        price: { uk: '120 €', ru: '120 €', en: '€120', de: '120 €' },
                    },
                    {
                        procedure: { uk: 'Пахви', ru: 'Подмышки', en: 'Underarms', de: 'Achseln' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                    {
                        procedure: { uk: 'Лінія живота', ru: 'Линия живота', en: 'Abdomen line', de: 'Bauchlinie' },
                        price: { uk: '45 €', ru: '45 €', en: '€45', de: '45 €' },
                    },
                    {
                        procedure: { uk: 'Живіт', ru: 'Живот', en: 'Abdomen', de: 'Bauch' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                    {
                        procedure: { uk: 'Груди', ru: 'Грудь', en: 'Chest', de: 'Brust' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                    {
                        procedure: { uk: 'Спина', ru: 'Спина', en: 'Back', de: 'Rücken' },
                        price: { uk: '150 €', ru: '150 €', en: '€150', de: '150 €' },
                    },
                    {
                        procedure: { uk: 'Руки', ru: 'Руки', en: 'Arms', de: 'Arme' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Ноги (до колін)', ru: 'Ноги (до колен)', en: 'Legs (below knees)', de: 'Beine (bis Knie)' },
                        price: { uk: '75 €', ru: '75 €', en: '€75', de: '75 €' },
                    },
                    {
                        procedure: { uk: 'Ноги (від колін)', ru: 'Ноги (от колен)', en: 'Legs (above knees)', de: 'Beine (ab Knie)' },
                        price: { uk: '75 €', ru: '75 €', en: '€75', de: '75 €' },
                    },
                    {
                        procedure: { uk: 'Ноги (повністю)', ru: 'Ноги (полностью)', en: 'Legs (full)', de: 'Beine (komplett)' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Сідниці', ru: 'Ягодицы', en: 'Buttocks', de: 'Gesäß' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                    {
                        procedure: { uk: 'Зона бікіні (класична)', ru: 'Зона бикини (классическая)', en: 'Bikini area (classic)', de: 'Bikinizone (klassisch)' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                    {
                        procedure: { uk: 'Зона бікіні (інтим)', ru: 'Зона бикини (интимная)', en: 'Bikini area (intimate)', de: 'Bikinizone (intim)' },
                        price: { uk: '110 €', ru: '110 €', en: '€110', de: '110 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Пакетні пропозиції (одна процедура)',
                    ru: 'Пакетные предложения (одна процедура)',
                    en: 'Package deals (single session)',
                    de: 'Paketangebote (eine Sitzung)',
                },
                items: [
                    {
                        procedure: { uk: 'Бікіні (повністю) + Пахви', ru: 'Бикини (полностью) + Подмышки', en: 'Bikini (full) + Underarms', de: 'Bikini (komplett) + Achseln' },
                        price: { uk: '180 €', ru: '180 €', en: '€180', de: '180 €' },
                    },
                    {
                        procedure: { uk: 'Ноги (повністю) + Руки', ru: 'Ноги (полностью) + Руки', en: 'Legs (full) + Arms', de: 'Beine (komplett) + Arme' },
                        price: { uk: '250 €', ru: '250 €', en: '€250', de: '250 €' },
                    },
                    {
                        procedure: { uk: 'Бікіні (повністю) + Ноги (повністю)', ru: 'Бикини (полностью) + Ноги (полностью)', en: 'Bikini (full) + Legs (full)', de: 'Bikini (komplett) + Beine (komplett)' },
                        price: { uk: '210 €', ru: '210 €', en: '€210', de: '210 €' },
                    },
                    {
                        procedure: { uk: 'Бікіні (повністю) + Пахви + Ноги (повністю)', ru: 'Бикини (полностью) + Подмышки + Ноги (полностью)', en: 'Bikini (full) + Underarms + Legs (full)', de: 'Bikini (komplett) + Achseln + Beine (komplett)' },
                        price: { uk: '280 €', ru: '280 €', en: '€280', de: '280 €' },
                    },
                    {
                        procedure: { uk: 'Все тіло', ru: 'Всё тело', en: 'Full body', de: 'Ganzer Körper' },
                        price: { uk: '600 €', ru: '600 €', en: '€600', de: '600 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Пакетні пропозиції (5 процедур)',
                    ru: 'Пакетные предложения (5 процедур)',
                    en: 'Package deals (5 sessions)',
                    de: 'Paketangebote (5 Sitzungen)',
                },
                items: [
                    {
                        procedure: { uk: 'Бікіні (повністю) + Пахви', ru: 'Бикини (полностью) + Подмышки', en: 'Bikini (full) + Underarms', de: 'Bikini (komplett) + Achseln' },
                        price: { uk: '810 €', ru: '810 €', en: '€810', de: '810 €' },
                    },
                    {
                        procedure: { uk: 'Ноги (повністю) + Руки', ru: 'Ноги (полностью) + Руки', en: 'Legs (full) + Arms', de: 'Beine (komplett) + Arme' },
                        price: { uk: '1125 €', ru: '1125 €', en: '€1125', de: '1125 €' },
                    },
                    {
                        procedure: { uk: 'Бікіні (повністю) + Ноги (повністю)', ru: 'Бикини (полностью) + Ноги (полностью)', en: 'Bikini (full) + Legs (full)', de: 'Bikini (komplett) + Beine (komplett)' },
                        price: { uk: '945 €', ru: '945 €', en: '€945', de: '945 €' },
                    },
                    {
                        procedure: { uk: 'Бікіні (повністю) + Пахви + Ноги (повністю)', ru: 'Бикини (полностью) + Подмышки + Ноги (полностью)', en: 'Bikini (full) + Underarms + Legs (full)', de: 'Bikini (komplett) + Achseln + Beine (komplett)' },
                        price: { uk: '1260 €', ru: '1260 €', en: '€1260', de: '1260 €' },
                    },
                    {
                        procedure: { uk: 'Все тіло', ru: 'Всё тело', en: 'Full body', de: 'Ganzer Körper' },
                        price: { uk: '2700 €', ru: '2700 €', en: '€2700', de: '2700 €' },
                    },
                ],
            },
        ],
    },

    {
        id: 'regenerative-therapy',
        serviceIds: ['regenerative-therapy'],
        category: {
            uk: 'Регенеративна терапія',
            ru: 'Регенеративная терапия',
            en: 'Regenerative Therapy',
            de: 'Regenerative Therapie',
        },
        columns: {
            procedure: { uk: 'Процедура', ru: 'Процедура', en: 'Procedure', de: 'Behandlung' },
            price: { uk: 'Ціна', ru: 'Цена', en: 'Price', de: 'Preis' },
        },
        sections: [
            {
                subtitle: { uk: 'Нідосоми', ru: 'Нидосомы', en: 'Nidosomes', de: 'Nidosomen' },
                items: [
                    {
                        procedure: {
                            uk: 'Celltermi Revive Nidosome - Інтенсивна регенерація шкіри',
                            ru: 'Celltermi Revive Nidosome - Интенсивная регенерация кожи',
                            en: 'Celltermi Revive Nidosome - Intensive skin regeneration',
                            de: 'Celltermi Revive Nidosome - Intensive Hautregeneration',
                        },
                        price: { uk: '230 €', ru: '230 €', en: '€230', de: '230 €' },
                    },
                    {
                        procedure: {
                            uk: 'Celltermi Revive HS - Проти випадіння волосся та стимуляція росту волосся',
                            ru: 'Celltermi Revive HS - Против выпадения волос и стимуляция роста волос',
                            en: 'Celltermi Revive HS - Anti-hair loss and hair growth stimulation',
                            de: 'Celltermi Revive HS - Gegen Haarausfall und zur Stimulation des Haarwachstums',
                        },
                        price: { uk: '300 €', ru: '300 €', en: '€300', de: '300 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Ін’єкційні процедури та коктейлі',
                    ru: 'Инъекционные процедуры и коктейли',
                    en: 'Injection procedures and cocktails',
                    de: 'Injektionsbehandlungen und Cocktails',
                },
                items: [
                    {
                        procedure: { uk: 'Колаген', ru: 'Коллаген', en: 'Collagen', de: 'Kollagen' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'PDRN', ru: 'PDRN', en: 'PDRN', de: 'PDRN' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Ліфтинг', ru: 'Лифтинг', en: 'Lifting', de: 'Lifting' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Терапія для освітлення шкіри', ru: 'Терапия для осветления кожи', en: 'Skin brightening therapy', de: 'Hautaufhellungstherapie' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Терапія для заповнення шкіри', ru: 'Терапия для заполнения кожи', en: 'Skin filling therapy', de: 'Hautauffülltherapie' },
                        price: { uk: '140 €', ru: '140 €', en: '€140', de: '140 €' },
                    },
                    {
                        procedure: { uk: 'Анти-віковий коктейль', ru: 'Антивозрастной коктейль', en: 'Anti-aging cocktail', de: 'Anti-Aging-Cocktail' },
                        price: { uk: '85 €', ru: '85 €', en: '€85', de: '85 €' },
                    },
                    {
                        procedure: { uk: 'Вітамінний коктейль Plus', ru: 'Витаминный коктейль Plus', en: 'Vitamin cocktail Plus', de: 'Vitamin-Cocktail Plus' },
                        price: { uk: '85 €', ru: '85 €', en: '€85', de: '85 €' },
                    },
                    {
                        procedure: { uk: 'Коктейль для волосся Plus', ru: 'Коктейль для волос Plus', en: 'Hair cocktail Plus', de: 'Haar-Cocktail Plus' },
                        price: { uk: '85 €', ru: '85 €', en: '€85', de: '85 €' },
                    },
                    {
                        procedure: { uk: 'Анти-акне', ru: 'Анти-акне', en: 'Anti-acne', de: 'Anti-Akne' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                ],
            },
        ],
    },

    {
        id: 'refit-lifting',
        serviceIds: ['refit-lifting'],
        category: {
            uk: 'REFIT - Нехірургічний ліфтинг для обличчя і тіла',
            ru: 'REFIT - Нехирургический лифтинг для лица и тела',
            en: 'REFIT - Non-surgical face and body lifting',
            de: 'REFIT - Nichtchirurgisches Lifting für Gesicht und Körper',
        },
        columns: {
            procedure: { uk: 'Зона', ru: 'Зона', en: 'Area', de: 'Bereich' },
            price: { uk: 'Ціна', ru: 'Цена', en: 'Price', de: 'Preis' },
            duration: { uk: 'Тривалість', ru: 'Длительность', en: 'Duration', de: 'Dauer' },
        },
        sections: [
            {
                subtitle: { uk: 'Одна процедура', ru: 'Одна процедура', en: 'Single session', de: 'Eine Sitzung' },
                items: [
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        duration: { uk: '15 хв', ru: '15 мин', en: '15 min', de: '15 Min' },
                        price: { uk: '60 €', ru: '60 €', en: '€60', de: '60 €' },
                    },
                    {
                        procedure: { uk: 'Декольте + шия', ru: 'Декольте + шея', en: 'Décolletage + neck', de: 'Dekolleté + Hals' },
                        duration: { uk: '15 хв', ru: '15 мин', en: '15 min', de: '15 Min' },
                        price: { uk: '60 €', ru: '60 €', en: '€60', de: '60 €' },
                    },
                    {
                        procedure: { uk: 'Руки', ru: 'Руки', en: 'Arms', de: 'Arme' },
                        duration: { uk: '20 хв', ru: '20 мин', en: '20 min', de: '20 Min' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                    {
                        procedure: { uk: 'Живіт', ru: 'Живот', en: 'Abdomen', de: 'Bauch' },
                        duration: { uk: '20 хв', ru: '20 мин', en: '20 min', de: '20 Min' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                    {
                        procedure: { uk: 'Спина', ru: 'Спина', en: 'Back', de: 'Rücken' },
                        duration: { uk: '20 хв', ru: '20 мин', en: '20 min', de: '20 Min' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                    {
                        procedure: { uk: 'Сідниці', ru: 'Ягодицы', en: 'Buttocks', de: 'Gesäß' },
                        duration: { uk: '20 хв', ru: '20 мин', en: '20 min', de: '20 Min' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                    {
                        procedure: { uk: 'Ноги', ru: 'Ноги', en: 'Legs', de: 'Beine' },
                        duration: { uk: '20 хв', ru: '20 мин', en: '20 min', de: '20 Min' },
                        price: { uk: '70 €', ru: '70 €', en: '€70', de: '70 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Пакетні пропозиції (1 процедура)',
                    ru: 'Пакетные предложения (1 процедура)',
                    en: 'Package deals (1 session)',
                    de: 'Paketangebote (1 Sitzung)',
                },
                items: [
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина + Живіт', ru: 'Ноги + Ягодицы + Спина + Живот', en: 'Legs + Buttocks + Back + Abdomen', de: 'Beine + Gesäß + Rücken + Bauch' },
                        duration: { uk: '60 хв', ru: '60 мин', en: '60 min', de: '60 Min' },
                        price: { uk: '120 €', ru: '120 €', en: '€120', de: '120 €' },
                    },
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина', ru: 'Ноги + Ягодицы + Спина', en: 'Legs + Buttocks + Back', de: 'Beine + Gesäß + Rücken' },
                        duration: { uk: '50 хв', ru: '50 мин', en: '50 min', de: '50 Min' },
                        price: { uk: '100 €', ru: '100 €', en: '€100', de: '100 €' },
                    },
                    {
                        procedure: { uk: 'Ноги + Сідниці', ru: 'Ноги + Ягодицы', en: 'Legs + Buttocks', de: 'Beine + Gesäß' },
                        duration: { uk: '40 хв', ru: '40 мин', en: '40 min', de: '40 Min' },
                        price: { uk: '90 €', ru: '90 €', en: '€90', de: '90 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Пакетні пропозиції (5 процедур)',
                    ru: 'Пакетные предложения (5 процедур)',
                    en: 'Package deals (5 sessions)',
                    de: 'Paketangebote (5 Sitzungen)',
                },
                items: [
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина + Живіт', ru: 'Ноги + Ягодицы + Спина + Живот', en: 'Legs + Buttocks + Back + Abdomen', de: 'Beine + Gesäß + Rücken + Bauch' },
                        duration: { uk: '60 хв', ru: '60 мин', en: '60 min', de: '60 Min' },
                        price: { uk: '540 €', ru: '540 €', en: '€540', de: '540 €' },
                    },
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина', ru: 'Ноги + Ягодицы + Спина', en: 'Legs + Buttocks + Back', de: 'Beine + Gesäß + Rücken' },
                        duration: { uk: '50 хв', ru: '50 мин', en: '50 min', de: '50 Min' },
                        price: { uk: '450 €', ru: '450 €', en: '€450', de: '450 €' },
                    },
                    {
                        procedure: { uk: 'Ноги + Сідниці', ru: 'Ноги + Ягодицы', en: 'Legs + Buttocks', de: 'Beine + Gesäß' },
                        duration: { uk: '40 хв', ru: '40 мин', en: '40 min', de: '40 Min' },
                        price: { uk: '400 €', ru: '400 €', en: '€400', de: '400 €' },
                    },
                ],
            },
        ],
    },

    {
        id: 'ipl-therapy',
        serviceIds: ['ipl-therapy'],
        category: {
            uk: 'IPL терапія - Фотоомолодження шкіри',
            ru: 'IPL-терапия - Фотоомоложение кожи',
            en: 'IPL Therapy - Skin Photorejuvenation',
            de: 'IPL-Therapie - Foto-Hautverjüngung',
        },
        columns: {
            procedure: { uk: 'Зона', ru: 'Зона', en: 'Area', de: 'Bereich' },
            price: { uk: 'Ціна', ru: 'Цена', en: 'Price', de: 'Preis' },
        },
        sections: [
            {
                subtitle: {
                    uk: 'Фотоомолодження шкіри',
                    ru: 'Фотоомоложение кожи',
                    en: 'Skin photorejuvenation',
                    de: 'Foto-Hautverjüngung',
                },
                items: [
                    {
                        procedure: { uk: 'Руки', ru: 'Руки', en: 'Arms', de: 'Arme' },
                        price: { uk: '40 €', ru: '40 €', en: '€40', de: '40 €' },
                    },
                    {
                        procedure: { uk: 'Шия', ru: 'Шея', en: 'Neck', de: 'Hals' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                    {
                        procedure: { uk: 'Декольте', ru: 'Декольте', en: 'Décolletage', de: 'Dekolleté' },
                        price: { uk: '60 €', ru: '60 €', en: '€60', de: '60 €' },
                    },
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        price: { uk: '80 €', ru: '80 €', en: '€80', de: '80 €' },
                    },
                ],
            },
            {
                subtitle: { uk: 'Видалення пігменту', ru: 'Удаление пигмента', en: 'Pigment removal', de: 'Pigmententfernung' },
                items: [
                    {
                        procedure: {
                            uk: 'Одна зона (лоб • щоки • ніс • підборіддя)',
                            ru: 'Одна зона (лоб • щёки • нос • подбородок)',
                            en: 'One area (forehead • cheeks • nose • chin)',
                            de: 'Ein Bereich (Stirn • Wangen • Nase • Kinn)',
                        },
                        price: { uk: '25 €', ru: '25 €', en: '€25', de: '25 €' },
                    },
                    {
                        procedure: { uk: 'Руки', ru: 'Руки', en: 'Arms', de: 'Arme' },
                        price: { uk: '30 €', ru: '30 €', en: '€30', de: '30 €' },
                    },
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                ],
            },
            {
                subtitle: {
                    uk: 'Фотоомолодження та видалення пігменту',
                    ru: 'Фотоомоложение и удаление пигмента',
                    en: 'Photorejuvenation and pigment removal',
                    de: 'Foto-Hautverjüngung und Pigmententfernung',
                },
                items: [
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        price: { uk: '100 €', ru: '100 €', en: '€100', de: '100 €' },
                    },
                ],
            },
            {
                subtitle: { uk: 'Акне та пост-акне', ru: 'Акне и постакне', en: 'Acne and post-acne', de: 'Akne und Postakne' },
                items: [
                    {
                        procedure: {
                            uk: 'Одна зона (лоб • щоки • ніс • підборіддя)',
                            ru: 'Одна зона (лоб • щёки • нос • подбородок)',
                            en: 'One area (forehead • cheeks • nose • chin)',
                            de: 'Ein Bereich (Stirn • Wangen • Nase • Kinn)',
                        },
                        price: { uk: '20 €', ru: '20 €', en: '€20', de: '20 €' },
                    },
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                    {
                        procedure: { uk: 'Спина', ru: 'Спина', en: 'Back', de: 'Rücken' },
                        price: { uk: '75 €', ru: '75 €', en: '€75', de: '75 €' },
                    },
                ],
            },
            {
                subtitle: { uk: 'Розацеа та купероз', ru: 'Розацеа и купероз', en: 'Rosacea and couperose', de: 'Rosacea und Couperose' },
                items: [
                    {
                        procedure: {
                            uk: 'Одна зона (лоб • щоки • ніс • підборіддя)',
                            ru: 'Одна зона (лоб • щёки • нос • подбородок)',
                            en: 'One area (forehead • cheeks • nose • chin)',
                            de: 'Ein Bereich (Stirn • Wangen • Nase • Kinn)',
                        },
                        price: { uk: '20 €', ru: '20 €', en: '€20', de: '20 €' },
                    },
                    {
                        procedure: { uk: 'Обличчя', ru: 'Лицо', en: 'Face', de: 'Gesicht' },
                        price: { uk: '50 €', ru: '50 €', en: '€50', de: '50 €' },
                    },
                ],
            },
        ],
    },
];

export const getPriceModelForService = (slug: string): PriceModel | undefined =>
    priceModels.find((model) => model.serviceIds.includes(slug));