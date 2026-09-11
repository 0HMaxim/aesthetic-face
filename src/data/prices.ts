import type { PriceModel } from '../types/Price';

export const priceModels: PriceModel[] = [
    {
        id: 'laser-hair-removal',
        serviceIds: ['laser-hair-removal'],
        category: { uk: 'Лазерна епіляція — Александритовий лазер Deka Motus Pro' },
        columns: {
            procedure: { uk: 'Зона' },
            price: { uk: 'Ціна' },
        },
        sections: [
            {
                subtitle: { uk: 'Окремі зони' },
                items: [
                    { procedure: { uk: 'Брови (між бровами)' }, price: { uk: '20 €' } },
                    { procedure: { uk: 'Вуха' }, price: { uk: '30 €' } },
                    { procedure: { uk: 'Верхня губа' }, price: { uk: '40 €' } },
                    { procedure: { uk: 'Щоки / Вилиці / Лінія бороди' }, price: { uk: '50 €' } },
                    { procedure: { uk: 'Підборіддя' }, price: { uk: '50 €' } },
                    { procedure: { uk: 'Шия' }, price: { uk: '80 €' } },
                    { procedure: { uk: 'Обличчя (повністю)' }, price: { uk: '120 €' } },
                    { procedure: { uk: 'Пахви' }, price: { uk: '70 €' } },
                    { procedure: { uk: 'Лінія живота' }, price: { uk: '45 €' } },
                    { procedure: { uk: 'Живіт' }, price: { uk: '80 €' } },
                    { procedure: { uk: 'Груди' }, price: { uk: '80 €' } },
                    { procedure: { uk: 'Спина' }, price: { uk: '150 €' } },
                    { procedure: { uk: 'Руки' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Ноги (до колін)' }, price: { uk: '75 €' } },
                    { procedure: { uk: 'Ноги (від колін)' }, price: { uk: '75 €' } },
                    { procedure: { uk: 'Ноги (повністю)' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Сідниці' }, price: { uk: '80 €' } },
                    { procedure: { uk: 'Зона бікіні (класична)' }, price: { uk: '80 €' } },
                    { procedure: { uk: 'Зона бікіні (інтим)' }, price: { uk: '110 €' } },
                ],
            },
            {
                subtitle: { uk: 'Пакетні пропозиції (одна процедура)' },
                items: [
                    { procedure: { uk: 'Бікіні (повністю) + Пахви' }, price: { uk: '180 €' } },
                    { procedure: { uk: 'Ноги (повністю) + Руки' }, price: { uk: '250 €' } },
                    { procedure: { uk: 'Бікіні (повністю) + Ноги (повністю)' }, price: { uk: '210 €' } },
                    { procedure: { uk: 'Бікіні (повністю) + Пахви + Ноги (повністю)' }, price: { uk: '280 €' } },
                    { procedure: { uk: 'Все тіло' }, price: { uk: '600 €' } },
                ],
            },
            {
                subtitle: { uk: 'Пакетні пропозиції (5 процедур)' },
                items: [
                    { procedure: { uk: 'Бікіні (повністю) + Пахви' }, price: { uk: '810 €' } },
                    { procedure: { uk: 'Ноги (повністю) + Руки' }, price: { uk: '1125 €' } },
                    { procedure: { uk: 'Бікіні (повністю) + Ноги (повністю)' }, price: { uk: '945 €' } },
                    { procedure: { uk: 'Бікіні (повністю) + Пахви + Ноги (повністю)' }, price: { uk: '1260 €' } },
                    { procedure: { uk: 'Все тіло' }, price: { uk: '2700 €' } },
                ],
            },
        ],
    },

    {
        id: 'regenerative-therapy',
        serviceIds: ['regenerative-therapy'], // TODO: проверь реальный slug услуги
        category: { uk: 'Регенеративна терапія' },
        columns: {
            procedure: { uk: 'Процедура' },
            price: { uk: 'Ціна' },
        },
        sections: [
            {
                subtitle: { uk: 'Нідосоми' },
                items: [
                    {
                        procedure: { uk: 'Celltermi Revive Nidosome — Інтенсивна регенерація шкіри' },
                        price: { uk: '230 €' },
                    },
                    {
                        procedure: { uk: 'Celltermi Revive HS — Проти випадіння волосся та стимуляція росту волосся' },
                        price: { uk: '300 €' },
                    },
                ],
            },
            {
                subtitle: { uk: 'Ін’єкційні процедури та коктейлі' },
                items: [
                    { procedure: { uk: 'Колаген' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'PDRN' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Ліфтинг' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Терапія для освітлення шкіри' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Терапія для заповнення шкіри' }, price: { uk: '140 €' } },
                    { procedure: { uk: 'Анти-віковий коктейль' }, price: { uk: '85 €' } },
                    { procedure: { uk: 'Вітамінний коктейль Plus' }, price: { uk: '85 €' } },
                    { procedure: { uk: 'Коктейль для волосся Plus' }, price: { uk: '85 €' } },
                    { procedure: { uk: 'Анти-акне' }, price: { uk: '70 €' } },
                ],
            },
        ],
    },
    {
        id: 'refit-lifting',
        serviceIds: ['refit-lifting'], // TODO: проверь реальний slug услуги
        category: { uk: 'REFIT — Нехірургічний ліфтинг для обличчя і тіла' },
        columns: {
            procedure: { uk: 'Зона' },
            price: { uk: 'Ціна' },
            duration: { uk: 'Тривалість' },
        },
        sections: [
            {
                subtitle: { uk: 'Одна процедура' },
                items: [
                    { procedure: { uk: 'Обличчя' }, duration: { uk: '15 хв' }, price: { uk: '60 €' } },
                    { procedure: { uk: 'Декольте + шия' }, duration: { uk: '15 хв' }, price: { uk: '60 €' } },
                    { procedure: { uk: 'Руки' }, duration: { uk: '20 хв' }, price: { uk: '70 €' } },
                    { procedure: { uk: 'Живіт' }, duration: { uk: '20 хв' }, price: { uk: '70 €' } },
                    { procedure: { uk: 'Спина' }, duration: { uk: '20 хв' }, price: { uk: '70 €' } },
                    { procedure: { uk: 'Сідниці' }, duration: { uk: '20 хв' }, price: { uk: '70 €' } },
                    { procedure: { uk: 'Ноги' }, duration: { uk: '20 хв' }, price: { uk: '70 €' } },
                ],
            },
            {
                subtitle: { uk: 'Пакетні пропозиції (1 процедура)' },
                items: [
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина + Живіт' },
                        duration: { uk: '60 хв' },
                        price: { uk: '120 €' },
                    },
                    { procedure: { uk: 'Ноги + Сідниці + Спина' }, duration: { uk: '50 хв' }, price: { uk: '100 €' } },
                    { procedure: { uk: 'Ноги + Сідниці' }, duration: { uk: '40 хв' }, price: { uk: '90 €' } },
                ],
            },
            {
                subtitle: { uk: 'Пакетні пропозиції (5 процедур)' },
                items: [
                    {
                        procedure: { uk: 'Ноги + Сідниці + Спина + Живіт' },
                        duration: { uk: '60 хв' },
                        price: { uk: '540 €' },
                    },
                    { procedure: { uk: 'Ноги + Сідниці + Спина' }, duration: { uk: '50 хв' }, price: { uk: '450 €' } },
                    { procedure: { uk: 'Ноги + Сідниці' }, duration: { uk: '40 хв' }, price: { uk: '400 €' } },
                ],
            },
        ],
    },
    {
        id: 'ipl-therapy',
        serviceIds: ['ipl-therapy'], // TODO: проверь реальний slug услуги
        category: { uk: 'IPL терапія — Фотоомолодження шкіри' },
        columns: {
            procedure: { uk: 'Зона' },
            price: { uk: 'Ціна' },
        },
        sections: [
            {
                subtitle: { uk: 'Фотоомолодження шкіри' },
                items: [
                    { procedure: { uk: 'Руки' }, price: { uk: '40 €' } },
                    { procedure: { uk: 'Шия' }, price: { uk: '50 €' } },
                    { procedure: { uk: 'Декольте' }, price: { uk: '60 €' } },
                    { procedure: { uk: 'Обличчя' }, price: { uk: '80 €' } },
                ],
            },
            {
                subtitle: { uk: 'Видалення пігменту' },
                items: [
                    { procedure: { uk: 'Одна зона (лоб • щоки • ніс • підборіддя)' }, price: { uk: '25 €' } },
                    { procedure: { uk: 'Руки' }, price: { uk: '30 €' } },
                    { procedure: { uk: 'Обличчя' }, price: { uk: '50 €' } },
                ],
            },
            {
                subtitle: { uk: 'Фотоомолодження та видалення пігменту' },
                items: [{ procedure: { uk: 'Обличчя' }, price: { uk: '100 €' } }],
            },
            {
                subtitle: { uk: 'Акне та пост-акне' },
                items: [
                    { procedure: { uk: 'Одна зона (лоб • щоки • ніс • підборіддя)' }, price: { uk: '20 €' } },
                    { procedure: { uk: 'Обличчя' }, price: { uk: '50 €' } },
                    { procedure: { uk: 'Спина' }, price: { uk: '75 €' } },
                ],
            },
            {
                subtitle: { uk: 'Розацеа та купероз' },
                items: [
                    { procedure: { uk: 'Одна зона (лоб • щоки • ніс • підборіддя)' }, price: { uk: '20 €' } },
                    { procedure: { uk: 'Обличчя' }, price: { uk: '50 €' } },
                ],
            },
        ],
    },

];

export const getPriceModelForService = (slug: string): PriceModel | undefined =>
    priceModels.find((model) => model.serviceIds.includes(slug));