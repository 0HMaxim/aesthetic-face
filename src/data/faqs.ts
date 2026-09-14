// src/data/faqs.ts
import type { Faq } from '../types/Faq.ts';
import { buildServiceFilterOptions } from "../utils/serviceFilter.ts";

export const faqs: Faq[] = [
    {
        id: '1',
        question: {
            uk: 'Скільки триває процедура?',
            ru: 'Сколько длится процедура?',
            de: 'Wie lange dauert die Behandlung?',
            en: 'How long does the treatment take?',
        },
        answer: {
            uk: 'В середньому 45–60 хвилин, залежно від зони.',
            ru: 'В среднем 45–60 минут, в зависимости от зоны.',
            de: 'Im Durchschnitt 45–60 Minuten, je nach Bereich.',
            en: 'On average 45–60 minutes, depending on the area.',
        },
        order: 1,
    },
    {
        id: '2',
        question: {
            uk: 'Чи є протипоказання?',
            ru: 'Есть ли противопоказания?',
            de: 'Gibt es Gegenanzeigen?',
            en: 'Are there any contraindications?',
        },
        answer: {
            uk: 'Так, вагітність, онкологічні захворювання та деякі шкірні стани. Повний список уточнюйте на консультації.',
            ru: 'Да, беременность, онкологические заболевания и некоторые кожные состояния. Полный список уточняйте на консультации.',
            de: 'Ja, Schwangerschaft, onkologische Erkrankungen und bestimmte Hautzustände. Details bei der Beratung.',
            en: 'Yes, pregnancy, oncological conditions and certain skin conditions. Ask for the full list during consultation.',
        },
        order: 2,
    },

    // --- laser-hair-removal (id: 1) ---
    {
        id: '3',
        question: {
            uk: 'Скільки процедур потрібно для результату?',
            ru: 'Сколько процедур нужно для результата?',
            de: 'Wie viele Sitzungen sind für ein Ergebnis nötig?',
            en: 'How many sessions are needed for results?',
        },
        answer: {
            uk: 'Залежить від процедури, зазвичай курс складається з 4–8 сеансів.',
            ru: 'Зависит от процедуры, обычно курс состоит из 4–8 сеансов.',
            de: 'Abhängig von der Behandlung, in der Regel 4–8 Sitzungen.',
            en: 'Depends on the treatment, usually a course of 4–8 sessions.',
        },
        serviceId: 1,
        order: 1,
    },
    {
        id: '4',
        question: {
            uk: 'Чи можна робити епіляцію влітку або після засмаги?',
            ru: 'Можно ли делать эпиляцию летом или после загара?',
            de: 'Kann man im Sommer oder nach dem Sonnenbaden eine Haarentfernung machen?',
            en: 'Can I get laser hair removal in summer or after tanning?',
        },
        answer: {
            uk: 'Так, апарат Motus PRO має канал Nd:YAG 1064 нм, який безпечно працює навіть на засмаглій шкірі. Втім, за 1–2 тижні до і після процедури рекомендуємо уникати прямого сонця та обов’язково використовувати SPF.',
            ru: 'Да, аппарат Motus PRO имеет канал Nd:YAG 1064 нм, который безопасно работает даже на загорелой коже. Тем не менее, за 1–2 недели до и после процедуры рекомендуем избегать прямого солнца и обязательно использовать SPF.',
            de: 'Ja, das Gerät Motus PRO verfügt über einen Nd:YAG-Kanal (1064 nm), der auch bei gebräunter Haut sicher funktioniert. Dennoch empfehlen wir, 1–2 Wochen vor und nach der Behandlung direkte Sonne zu meiden und unbedingt SPF zu verwenden.',
            en: 'Yes, the Motus PRO device has an Nd:YAG 1064 nm channel that works safely even on tanned skin. That said, we recommend avoiding direct sun exposure and using SPF for 1–2 weeks before and after the treatment.',
        },
        serviceId: 1,
        order: 2,
    },

    // --- regenerative-therapy (id: 2) ---
    {
        id: '5',
        question: {
            uk: 'Що таке нідосоми Celltermi Revive?',
            ru: 'Что такое нидосомы Celltermi Revive?',
            de: 'Was sind Celltermi-Revive-Nidosomen?',
            en: 'What are Celltermi Revive nidosomes?',
        },
        answer: {
            uk: 'Це технологія доставки активних речовин у шкіру за допомогою мікроскопічних капсул (нідосом), які стимулюють регенерацію клітин, покращують стан шкіри та волосся без хірургічного втручання.',
            ru: 'Это технология доставки активных веществ в кожу с помощью микроскопических капсул (нидосом), которые стимулируют регенерацию клеток, улучшают состояние кожи и волос без хирургического вмешательства.',
            de: 'Dies ist eine Technologie zur Wirkstoffzufuhr in die Haut mittels mikroskopisch kleiner Kapseln (Nidosomen), die die Zellregeneration anregen und Haut sowie Haare ohne chirurgischen Eingriff verbessern.',
            en: 'This is a delivery technology that introduces active ingredients into the skin using microscopic capsules (nidosomes), stimulating cell regeneration and improving skin and hair condition without surgery.',
        },
        serviceId: 2,
        order: 1,
    },
    {
        id: '6',
        question: {
            uk: 'Через скільки часу буде видно результат?',
            ru: 'Через сколько времени будет виден результат?',
            de: 'Wann ist ein Ergebnis sichtbar?',
            en: 'How soon will I see results?',
        },
        answer: {
            uk: 'Перші зміни (свіжість, зволоженість шкіри) помітні вже через кілька днів, а виражений ефект ліфтингу та регенерації розвивається протягом 2–4 тижнів після курсу процедур.',
            ru: 'Первые изменения (свежесть, увлажнённость кожи) заметны уже через несколько дней, а выраженный эффект лифтинга и регенерации развивается в течение 2–4 недель после курса процедур.',
            de: 'Erste Veränderungen (Frische, Hydratation der Haut) sind bereits nach einigen Tagen sichtbar, während der ausgeprägte Lifting- und Regenerationseffekt sich über 2–4 Wochen nach der Behandlungsserie entwickelt.',
            en: 'Initial changes (freshness, hydration) are visible within a few days, while the full lifting and regenerative effect develops over 2–4 weeks after the treatment course.',
        },
        serviceId: 2,
        order: 2,
    },

    // --- refit-lifting (id: 3) ---
    {
        id: '7',
        question: {
            uk: 'Наскільки хворобливий REFIT ліфтинг?',
            ru: 'Насколько болезненный REFIT лифтинг?',
            de: 'Wie schmerzhaft ist das REFIT-Lifting?',
            en: 'How painful is REFIT lifting?',
        },
        answer: {
            uk: 'Процедура нехірургічна і зазвичай супроводжується лише відчуттям тепла або легкого поколювання в зоні опрацювання, без болю та реабілітаційного періоду.',
            ru: 'Процедура нехирургическая и обычно сопровождается лишь ощущением тепла или лёгкого покалывания в зоне обработки, без боли и реабилитационного периода.',
            de: 'Die Behandlung ist nicht-chirurgisch und geht in der Regel nur mit einem Wärmegefühl oder leichtem Kribbeln im behandelten Bereich einher, ohne Schmerzen oder Ausfallzeit.',
            en: 'The procedure is non-surgical and typically involves only a warm or slightly tingling sensation in the treated area, with no pain and no downtime.',
        },
        serviceId: 3,
        order: 1,
    },
    {
        id: '8',
        question: {
            uk: 'На яких ділянках можна робити REFIT?',
            ru: 'На каких зонах можно делать REFIT?',
            de: 'An welchen Körperstellen kann REFIT angewendet werden?',
            en: 'Which body areas can REFIT be used on?',
        },
        answer: {
            uk: 'Процедуру можна проводити на обличчі, шиї та декольте, а також на тілі: животі, спині, сідницях та ногах, окремо або в межах пакетних пропозицій.',
            ru: 'Процедуру можно проводить на лице, шее и декольте, а также на теле: животе, спине, ягодицах и ногах, отдельно или в рамках пакетных предложений.',
            de: 'Die Behandlung kann im Gesicht, am Hals und Dekolleté sowie am Körper - Bauch, Rücken, Gesäß und Beine - einzeln oder im Rahmen von Paketangeboten durchgeführt werden.',
            en: 'The treatment can be applied to the face, neck and décolletage, as well as the body - abdomen, back, buttocks and legs - either individually or as part of package deals.',
        },
        serviceId: 3,
        order: 2,
    },

    // --- ipl-therapy (id: 4) ---
    {
        id: '9',
        question: {
            uk: 'Кому підходить IPL терапія?',
            ru: 'Кому подходит IPL терапия?',
            de: 'Für wen eignet sich die IPL-Therapie?',
            en: 'Who is IPL therapy suitable for?',
        },
        answer: {
            uk: 'IPL підходить тим, хто хоче зменшити пігментацію, прояви розацеа й куперозу, сліди від акне, а також відновити рівний тон і сяйво шкіри. Точну відповідність визначає косметолог на консультації, з урахуванням фототипу шкіри.',
            ru: 'IPL подходит тем, кто хочет уменьшить пигментацию, проявления розацеа и купероза, следы от акне, а также восстановить ровный тон и сияние кожи. Точное соответствие определяет косметолог на консультации, с учётом фототипа кожи.',
            de: 'IPL eignet sich für alle, die Pigmentflecken, Rosacea, Couperose oder Aknenarben reduzieren und einen ebenmäßigen, strahlenden Teint zurückgewinnen möchten. Die genaue Eignung wird bei der Beratung anhand des Hautphototyps ermittelt.',
            en: 'IPL is suitable for those who want to reduce pigmentation, signs of rosacea and couperose, acne marks, and restore an even, radiant skin tone. Exact suitability is determined during a consultation, based on skin phototype.',
        },
        serviceId: 4,
        order: 1,
    },
    {
        id: '10',
        question: {
            uk: 'Чи потрібна підготовка перед процедурою IPL?',
            ru: 'Нужна ли подготовка перед процедурой IPL?',
            de: 'Ist eine Vorbereitung vor der IPL-Behandlung nötig?',
            en: 'Is preparation needed before an IPL treatment?',
        },
        answer: {
            uk: 'За 2 тижні до процедури варто уникати засмаги та автозасмаги, а в день процедури - не наносити макіяж на ділянку опрацювання. Це забезпечує безпечний та ефективний результат.',
            ru: 'За 2 недели до процедуры стоит избегать загара и автозагара, а в день процедуры - не наносить макияж на обрабатываемую зону. Это обеспечивает безопасный и эффективный результат.',
            de: 'Zwei Wochen vor der Behandlung sollte auf Sonnenbaden und Selbstbräuner verzichtet werden, und am Behandlungstag sollte kein Make-up auf dem behandelten Bereich aufgetragen werden. So wird ein sicheres und wirksames Ergebnis gewährleistet.',
            en: 'For 2 weeks before the treatment, avoid tanning and self-tanners, and on the day of the treatment, do not apply makeup to the treated area. This ensures a safe and effective result.',
        },
        serviceId: 4,
        order: 2,
    },

    // --- laser-hair-removal (id: 1), продолжение ---
    {
        id: '11',
        question: {
            uk: 'Чи боляче робити лазерну епіляцію?',
            ru: 'Больно ли делать лазерную эпиляцию?',
            de: 'Ist die Laser-Haarentfernung schmerzhaft?',
            en: 'Is laser hair removal painful?',
        },
        answer: {
            uk: 'Завдяки системі охолодження Motus PRO процедура відчувається як легке тепло, без різкого болю. Чутливість може відрізнятися залежно від зони та індивідуального больового порогу.',
            ru: 'Благодаря системе охлаждения Motus PRO процедура ощущается как лёгкое тепло, без резкой боли. Чувствительность может отличаться в зависимости от зоны и индивидуального болевого порога.',
            de: 'Dank des Kühlsystems von Motus PRO fühlt sich die Behandlung wie eine leichte Wärme an, ohne stechenden Schmerz. Die Empfindlichkeit kann je nach Bereich und individueller Schmerzschwelle variieren.',
            en: 'Thanks to the Motus PRO cooling system, the treatment feels like gentle warmth rather than sharp pain. Sensitivity can vary depending on the area and individual pain threshold.',
        },
        serviceId: 1,
        order: 3,
    },
    {
        id: '12',
        question: {
            uk: 'Як часто можна проходити процедуру?',
            ru: 'Как часто можно проходить процедуру?',
            de: 'Wie oft kann die Behandlung durchgeführt werden?',
            en: 'How often can the treatment be repeated?',
        },
        answer: {
            uk: 'Оптимальний інтервал між сеансами - 4–6 тижнів, залежно від зони та фази росту волосся. Косметолог складає індивідуальний графік на консультації.',
            ru: 'Оптимальный интервал между сеансами - 4–6 недель, в зависимости от зоны и фазы роста волос. Косметолог составляет индивидуальный график на консультации.',
            de: 'Das optimale Intervall zwischen den Sitzungen beträgt 4–6 Wochen, abhängig vom Bereich und der Haarwachstumsphase. Der Kosmetiker erstellt bei der Beratung einen individuellen Zeitplan.',
            en: 'The optimal interval between sessions is 4–6 weeks, depending on the area and hair growth phase. The cosmetologist creates an individual schedule during consultation.',
        },
        serviceId: 1,
        order: 4,
    },
    {
        id: '13',
        question: {
            uk: 'Чи потрібен реабілітаційний період після процедури?',
            ru: 'Нужен ли реабилитационный период после процедуры?',
            de: 'Ist nach der Behandlung eine Erholungszeit nötig?',
            en: 'Is downtime needed after the treatment?',
        },
        answer: {
            uk: 'Ні, реабілітація не потрібна. Можливе легке почервоніння протягом кількох годин. У перші дні рекомендуємо уникати сауни, басейну та прямого сонця.',
            ru: 'Нет, реабилитация не нужна. Возможно лёгкое покраснение в течение нескольких часов. В первые дни рекомендуем избегать сауны, бассейна и прямого солнца.',
            de: 'Nein, eine Erholungszeit ist nicht nötig. Eine leichte Rötung kann für einige Stunden auftreten. In den ersten Tagen empfehlen wir, Sauna, Schwimmbad und direkte Sonne zu meiden.',
            en: 'No, no downtime is needed. Slight redness may occur for a few hours. In the first days, we recommend avoiding sauna, pool and direct sun exposure.',
        },
        serviceId: 1,
        order: 5,
    },

    // --- regenerative-therapy (id: 2), продолжение ---
    {
        id: '14',
        question: {
            uk: 'Скільки сеансів потрібно для видимого ефекту?',
            ru: 'Сколько сеансов нужно для видимого эффекта?',
            de: 'Wie viele Sitzungen sind für ein sichtbares Ergebnis nötig?',
            en: 'How many sessions are needed for a visible effect?',
        },
        answer: {
            uk: 'Зазвичай рекомендують курс з 3–4 процедур з інтервалом 2–3 тижні, залежно від обраного препарату та стану шкіри чи волосся.',
            ru: 'Обычно рекомендуют курс из 3–4 процедур с интервалом 2–3 недели, в зависимости от выбранного препарата и состояния кожи или волос.',
            de: 'In der Regel wird eine Serie von 3–4 Behandlungen im Abstand von 2–3 Wochen empfohlen, abhängig vom gewählten Präparat und dem Zustand von Haut oder Haar.',
            en: 'A course of 3–4 sessions with a 2–3 week interval is usually recommended, depending on the chosen product and the condition of skin or hair.',
        },
        serviceId: 2,
        order: 3,
    },
    {
        id: '15',
        question: {
            uk: 'Чи є протипоказання до ін’єкційних процедур?',
            ru: 'Есть ли противопоказания к инъекционным процедурам?',
            de: 'Gibt es Gegenanzeigen für Injektionsbehandlungen?',
            en: 'Are there contraindications for injection procedures?',
        },
        answer: {
            uk: 'Так - вагітність і лактація, запальні процеси на шкірі, аутоімунні захворювання та алергія на компоненти препарату. Повний перелік уточнюється на консультації.',
            ru: 'Да - беременность и лактация, воспалительные процессы на коже, аутоиммунные заболевания и аллергия на компоненты препарата. Полный перечень уточняется на консультации.',
            de: 'Ja - Schwangerschaft und Stillzeit, entzündliche Hautprozesse, Autoimmunerkrankungen und Allergien gegen Inhaltsstoffe. Die vollständige Liste wird bei der Beratung geklärt.',
            en: 'Yes - pregnancy and breastfeeding, inflammatory skin conditions, autoimmune diseases, and allergy to the product\'s ingredients. The full list is clarified during consultation.',
        },
        serviceId: 2,
        order: 4,
    },
    {
        id: '16',
        question: {
            uk: 'Чим відрізняються коктейлі від нідосом?',
            ru: 'Чем отличаются коктейли от нидосом?',
            de: 'Was ist der Unterschied zwischen Cocktails und Nidosomen?',
            en: 'What is the difference between cocktails and nidosomes?',
        },
        answer: {
            uk: 'Коктейлі вводяться ін’єкційно і діють точково на конкретну проблему (акне, тонус, живлення), тоді як нідосоми - неінвазивна технологія глибокого проникнення активних речовин без голок.',
            ru: 'Коктейли вводятся инъекционно и действуют точечно на конкретную проблему (акне, тонус, питание), тогда как нидосомы - неинвазивная технология глубокого проникновения активных веществ без игл.',
            de: 'Cocktails werden injiziert und wirken gezielt bei einem bestimmten Problem (Akne, Tonus, Nährstoffe), während Nidosomen eine nicht-invasive Technologie zur tiefen Wirkstoffeinbringung ohne Nadeln sind.',
            en: 'Cocktails are injected and target a specific concern (acne, tone, nourishment), while nidosomes are a non-invasive technology for deep delivery of active ingredients without needles.',
        },
        serviceId: 2,
        order: 5,
    },

    // --- refit-lifting (id: 3), продолжение ---
    {
        id: '17',
        question: {
            uk: 'Скільки часу тримається ефект REFIT?',
            ru: 'Сколько времени держится эффект REFIT?',
            de: 'Wie lange hält der REFIT-Effekt an?',
            en: 'How long does the REFIT effect last?',
        },
        answer: {
            uk: 'Результат зазвичай зберігається кілька місяців, а для підтримки ефекту рекомендують курс з 5 процедур та підтримуючі сеанси раз на 1–2 місяці.',
            ru: 'Результат обычно сохраняется несколько месяцев, а для поддержания эффекта рекомендуют курс из 5 процедур и поддерживающие сеансы раз в 1–2 месяца.',
            de: 'Das Ergebnis hält in der Regel mehrere Monate an. Zur Erhaltung wird eine Serie von 5 Behandlungen sowie Auffrischungssitzungen alle 1–2 Monate empfohlen.',
            en: 'The result usually lasts several months. To maintain the effect, a course of 5 sessions plus maintenance sessions every 1–2 months is recommended.',
        },
        serviceId: 3,
        order: 3,
    },
    {
        id: '18',
        question: {
            uk: 'Чи можна поєднувати REFIT з іншими процедурами?',
            ru: 'Можно ли сочетать REFIT с другими процедурами?',
            de: 'Kann REFIT mit anderen Behandlungen kombiniert werden?',
            en: 'Can REFIT be combined with other treatments?',
        },
        answer: {
            uk: 'Так, REFIT добре поєднується з регенеративною терапією та IPL - косметолог підбере послідовність і інтервали для максимального ефекту.',
            ru: 'Да, REFIT хорошо сочетается с регенеративной терапией и IPL - косметолог подберёт последовательность и интервалы для максимального эффекта.',
            de: 'Ja, REFIT lässt sich gut mit regenerativer Therapie und IPL kombinieren - der Kosmetiker wählt Reihenfolge und Abstände für ein optimales Ergebnis.',
            en: 'Yes, REFIT combines well with regenerative therapy and IPL - the cosmetologist will select the sequence and intervals for maximum effect.',
        },
        serviceId: 3,
        order: 4,
    },
    {
        id: '19',
        question: {
            uk: 'Кому протипоказаний REFIT ліфтинг?',
            ru: 'Кому противопоказан REFIT лифтинг?',
            de: 'Für wen ist REFIT-Lifting nicht geeignet?',
            en: 'Who should avoid REFIT lifting?',
        },
        answer: {
            uk: 'Процедура не рекомендована при вагітності, наявності кардіостимулятора, металевих імплантів у зоні опрацювання та гострих запальних процесах.',
            ru: 'Процедура не рекомендована при беременности, наличии кардиостимулятора, металлических имплантов в зоне обработки и острых воспалительных процессах.',
            de: 'Die Behandlung wird nicht empfohlen bei Schwangerschaft, Herzschrittmachern, Metallimplantaten im behandelten Bereich und akuten Entzündungsprozessen.',
            en: 'The treatment is not recommended during pregnancy, with a pacemaker, metal implants in the treated area, or acute inflammatory conditions.',
        },
        serviceId: 3,
        order: 5,
    },

    // --- ipl-therapy (id: 4), продолжение ---
    {
        id: '20',
        question: {
            uk: 'Скільки сеансів IPL потрібно для результату?',
            ru: 'Сколько сеансов IPL нужно для результата?',
            de: 'Wie viele IPL-Sitzungen sind für ein Ergebnis nötig?',
            en: 'How many IPL sessions are needed for results?',
        },
        answer: {
            uk: 'Залежно від проблеми зазвичай потрібно 3–5 сеансів з інтервалом 3–4 тижні. Точну кількість визначає косметолог після оцінки стану шкіри.',
            ru: 'В зависимости от проблемы обычно требуется 3–5 сеансов с интервалом 3–4 недели. Точное количество определяет косметолог после оценки состояния кожи.',
            de: 'Je nach Anliegen sind in der Regel 3–5 Sitzungen im Abstand von 3–4 Wochen nötig. Die genaue Anzahl legt der Kosmetiker nach Beurteilung der Haut fest.',
            en: 'Depending on the concern, 3–5 sessions with a 3–4 week interval are usually needed. The exact number is determined by the cosmetologist after assessing skin condition.',
        },
        serviceId: 4,
        order: 3,
    },
    {
        id: '21',
        question: {
            uk: 'Чи підходить IPL для всіх фототипів шкіри?',
            ru: 'Подходит ли IPL для всех фототипов кожи?',
            de: 'Ist IPL für alle Hautphototypen geeignet?',
            en: 'Is IPL suitable for all skin phototypes?',
        },
        answer: {
            uk: 'IPL найбезпечніший та найефективніший для світлих і середніх фототипів шкіри. Для темної шкіри процедуру підбирають індивідуально або рекомендують альтернативу.',
            ru: 'IPL наиболее безопасен и эффективен для светлых и средних фототипов кожи. Для тёмной кожи процедуру подбирают индивидуально или рекомендуют альтернативу.',
            de: 'IPL ist am sichersten und wirksamsten bei hellen und mittleren Hautphototypen. Bei dunkler Haut wird die Behandlung individuell angepasst oder eine Alternative empfohlen.',
            en: 'IPL is safest and most effective for light to medium skin phototypes. For darker skin, the treatment is individually adjusted or an alternative is recommended.',
        },
        serviceId: 4,
        order: 4,
    },
    {
        id: '22',
        question: {
            uk: 'Чи є реабілітаційний період після IPL?',
            ru: 'Есть ли реабилитационный период после IPL?',
            de: 'Gibt es eine Erholungszeit nach IPL?',
            en: 'Is there downtime after IPL?',
        },
        answer: {
            uk: 'Зазвичай ні, можливе легке почервоніння або потемніння пігментних плям протягом кількох днів перед їх поступовим відлущенням. Обов’язково використовуйте SPF після процедури.',
            ru: 'Обычно нет, возможно лёгкое покраснение или потемнение пигментных пятен в течение нескольких дней перед их постепенным отшелушиванием. Обязательно используйте SPF после процедуры.',
            de: 'In der Regel nicht, es kann zu leichter Rötung oder Verdunkelung von Pigmentflecken für einige Tage kommen, bevor sie sich allmählich abschälen. Nach der Behandlung unbedingt SPF verwenden.',
            en: 'Usually none, though slight redness or darkening of pigment spots may occur for a few days before gradually flaking off. Be sure to use SPF after the treatment.',
        },
        serviceId: 4,
        order: 5,
    },
];

/** Общие FAQ (без привязки к услуге) */
const sortByOrder = (a: Faq, b: Faq) => (a.order ?? 0) - (b.order ?? 0);
const isActive = (faq: Faq) => faq.isActive !== false;

export const getGeneralFaqs = (): Faq[] =>
    faqs.filter((faq) => !faq.serviceId && isActive(faq)).sort(sortByOrder);

export const getFaqsByService = (serviceId: number): Faq[] =>
    faqs.filter((faq) => faq.serviceId === serviceId && isActive(faq)).sort(sortByOrder);

export const getAllFaqs = (): Faq[] =>
    faqs.filter(isActive).sort(sortByOrder);

export const getFaqFilterOptions = () => buildServiceFilterOptions(faqs);