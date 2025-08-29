// data/service.ts
import type {Service} from "../models/Service.ts";
import type {Subservice} from "../models/Subservice.ts";
import type {Doctor} from "../models/Doctor.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Scpecials} from "../models/Scpecials.ts";

export const services: Service[] = [
  {
    id: "service1",
    title: {
      uk: "Видалення новоутворень",
      ru: "Удаление новообразований",
      en: "Removal of skin growths",
      de: "Entfernung von Hautwucherungen"
    },
    slug: "vidalennya-novoutvoren",
    mainImage: "https://www.besedaclinic.com.ua/storage/gallery/1704836044.webp",
    content: [
      { id: "c1", type: "text", content: { uk: "Безпечне видалення новоутворень різного типу.", ru: "Безопасное удаление новообразований разных типов.", en: "Safe removal of different types of skin growths.", de: "Sichere Entfernung von Hautwucherungen verschiedener Typen." } },
      { id: "c2", type: "image", image: "https://salonnomer5.ru/assets/components/phpthumbof/cache/service-172.b483ceb3ceea83bee0f08e007b0b37bb.jpg" }
    ],
    faqs: ["faq1"],
    doctors: ["doctor1", "doctor2"],
    subservices: ["sub1", "sub2"]
  },
  {
    id: "service2",
    title: {
      uk: "Лазерна косметологія",
      ru: "Лазерная косметология",
      en: "Laser cosmetology",
      de: "Laserkosmetik"
    },
    slug: "lazernaya-kosmetologiya",
    mainImage: "https://www.besedaclinic.com.ua/storage/gallery/1710252886.webp",
    content: [
      { id: "c3", type: "text", content: { uk: "Процедури для омолодження та видалення пігментації.", ru: "Процедуры для омоложения и удаления пигментации.", en: "Procedures for rejuvenation and pigmentation removal.", de: "Verfahren zur Verjüngung und Entfernung von Pigmentierung." } },
      { id: "c4", type: "image", image: "/images/services/laser-1.jpg" }
    ],
    faqs: ["faq2"],
    doctors: ["doctor3"],
    subservices: ["sub3"]
  },
  {
    id: "service3",
    title: {
      uk: "Дерматологія",
      ru: "Дерматология",
      en: "Dermatology",
      de: "Dermatologie"
    },
    slug: "dermatologiya",
    mainImage: "https://www.besedaclinic.com.ua/storage/gallery/1709124268.webp",
    content: [
      { id: "c5", type: "text", content: { uk: "Діагностика та лікування захворювань шкіри.", ru: "Диагностика и лечение заболеваний кожи.", en: "Diagnosis and treatment of skin diseases.", de: "Diagnose und Behandlung von Hautkrankheiten." } },
      { id: "c6", type: "image", image: "/images/services/dermatology-1.jpg" }
    ],
    faqs: ["faq3"],
    doctors: ["doctor2", "doctor4"],
    subservices: ["sub4"]
  },
  {
    id: "service4",
    title: {
      uk: "Трихологія",
      ru: "Трихология",
      en: "Trichology",
      de: "Trichologie"
    },
    slug: "trichologiya",
    mainImage: "https://www.besedaclinic.com.ua/storage/gallery/1709139818.webp",
    content: [
      { id: "c7", type: "text", content: { uk: "Лікування волосся та шкіри голови.", ru: "Лечение волос и кожи головы.", en: "Hair and scalp treatment.", de: "Behandlung von Haar und Kopfhaut." } },
      { id: "c8", type: "image", image: "/images/services/trichology-1.jpg" }
    ],
    faqs: ["faq4"],
    doctors: ["doctor1", "doctor5"],
    subservices: ["sub5"]
  }
];

export const subservices: Subservice[] = [
    {
      id: "sub1",
      serviceId: "service1",
      title: {
        uk: "Лазерне видалення родимок",
        ru: "Лазерное удаление родинок",
        en: "Laser mole removal",
        de: "Laser-Muttermalentfernung"
      },
      slug: "lazernoe-udalennya-rodimok",
      mainImage: "https://besedaclinic.com.ua/userfiles/images/images%201/images%202/%D0%A0/%D0%9E/%D0%B2/%D0%B3/The%20Best%20Anti-Aging%20Ingredients%20for%20Diminishing%20Forehead%20Wrinkles.jpg",
      content: [
        { id: "b1", type: "text", content: { uk: "Безболісне видалення родимок лазером.", ru: "Безболезненное удаление родинок лазером.", en: "Painless laser mole removal.", de: "Schmerzfreie Entfernung von Muttermalen mit Laser." } }
      ],
      prices: [
        { name: "Маленька родимка", value: 500 },
        { name: "Велика родимка", value: 1000 }
      ],
      faqs: ["faq1"],
      doctors: ["doctor1"]
    },
    {
      id: "sub2",
      serviceId: "service1",
      title: {
        uk: "Кріодеструкція новоутворень",
        ru: "Криодеструкция новообразований",
        en: "Cryodestruction of growths",
        de: "Kryodestruktion von Wucherungen"
      },
      slug: "kriodestrukciya-novoutvoren",
      mainImage: "https://besedaclinic.com.ua/userfiles/images/images%201/images%202/%D0%A0/%D0%9E/photo_2024-02-26%2017_42_20.jpeg",
      content: [
        { id: "b2", type: "text", content: { uk: "Видалення утворень рідким азотом.", ru: "Удаление новообразований жидким азотом.", en: "Removal of growths with liquid nitrogen.", de: "Entfernung von Wucherungen mit flüssigem Stickstoff." } }
      ],
      prices: [
        { name: "Маленька", value: 400 },
        { name: "Велика", value: 900 }
      ],
      faqs: ["faq1"],
      doctors: ["doctor2"]
    },
    {
      id: "sub3",
      serviceId: "service2",
      title: {
        uk: "Лазерне омолодження шкіри",
        ru: "Лазерное омоложение кожи",
        en: "Laser skin rejuvenation",
        de: "Laser-Hautverjüngung"
      },
      slug: "lazernoe-omolodzhennya",
      mainImage: "https://besedaclinic.com.ua/userfiles/images/images%201/shutterstock_580636846-600x600.jpg",
      content: [
        { id: "b3", type: "text", content: { uk: "Відновлення пружності та еластичності шкіри.", ru: "Восстановление упругости и эластичности кожи.", en: "Restores skin firmness and elasticity.", de: "Stellt Festigkeit und Elastizität der Haut wieder her." } }
      ],
      prices: [
        { name: "Одна зона", value: 1500 }
      ],
      faqs: ["faq2"],
      doctors: ["doctor3"]
    },
    {
      id: "sub4",
      serviceId: "service3",
      title: {
        uk: "Лікування акне",
        ru: "Лечение акне",
        en: "Acne treatment",
        de: "Akne-Behandlung"
      },
      slug: "lіkuvannya-akne",
      mainImage: "https://besedaclinic.com.ua/userfiles/images/images%201/images%202/%D0%A0/Oil%20Over%20You.jpeg",
      content: [
        { id: "b4", type: "text", content: { uk: "Комплексне лікування вугрової хвороби.", ru: "Комплексное лечение угревой болезни.", en: "Comprehensive acne treatment.", de: "Umfassende Akne-Behandlung." } }
      ],
      prices: [
        { name: "Консультація", value: 300 },
        { name: "Процедура", value: 800 }
      ],
      faqs: ["faq3"],
      doctors: ["doctor2", "doctor4"]
    },
    {
      id: "sub5",
      serviceId: "service4",
      title: {
        uk: "Лікування випадіння волосся",
        ru: "Лечение выпадения волос",
        en: "Hair loss treatment",
        de: "Behandlung von Haarausfall"
      },
      slug: "lіkuvannya-vypadinnya-volossya",
      mainImage: "https://besedaclinic.com.ua/userfiles/files/%D1%96/IMG_9025.JPG",
      content: [
        { id: "b5", type: "text", content: { uk: "Відновлення волосся та стимуляція росту.", ru: "Восстановление волос и стимуляция роста.", en: "Hair restoration and growth stimulation.", de: "Haarwiederherstellung und Wachstumsstimulation." } }
      ],
      prices: [
        { name: "Консультація", value: 300 },
        { name: "Процедура", value: 800 }
      ],
      faqs: ["faq3"],
      doctors: ["doctor2", "doctor4"]
    }
  ]


export const doctors: Doctor[] = [
  {
    id: "doctor1",
    slug: "beseda-tetiana",
    fullName: {
      uk: "Бесєда Тетяна Павлівна",
      ru: "Беседа Татьяна Павловна",
      en: "Beseda Tetiana Pavlivna",
      de: "Beseda Tetiana Pawliwna"
    },
    position: {
      uk: "Головний лікар, Дерматовенеролог, Трихолог",
      ru: "Главный врач, Дерматовенеролог, Трихолог",
      en: "Chief Doctor, Dermatovenereologist, Trichologist",
      de: "Chefarzt, Dermatovenerologe, Trichologe"
    },
    specializations: [
      { uk: "Дерматовенеролог", ru: "Дерматовенеролог", en: "Dermatovenereologist", de: "Dermatovenerologe" },
      { uk: "Трихолог", ru: "Трихолог", en: "Trichologist", de: "Trichologe" }
    ],
    education: [
      { uk: "Національний медичний університет", ru: "Национальный медицинский университет", en: "National Medical University", de: "Nationales Medizinisches Universität" }
    ],
    certificates: ["https://marketplace.canva.com/EAGMPfFcHWI/1/0/1600w/canva-blue-and-white-simple-modern-certificate-of-appreciation-kYHEaKKpJI0.jpg", "https://5.imimg.com/data5/SELLER/Default/2024/2/382609921/MP/AN/IW/124928557/school-certificate-printing-service.jpg" ,"https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg"],
    photo: "https://www.besedaclinic.com.ua/storage/gallery/1741612941.webp",
    services: ["service1"],
    subservices: ["sub1"],
    shortName: {
      uk: "Тетяни",
      ru: "Татьяне",
      en: "Tetyana",
      de: "Tetyana"
    }
  },
  {
    id: "doctor6",
    slug: "ivanenko-oleksandr",
    fullName: {
      uk: "Іваненко Олександр Михайлович",
      ru: "Иваненко Александр Михайлович",
      en: "Ivanenko Oleksandr Mykhailovych",
      de: "Ivanenko Oleksandr Mykhailovych"
    },
    position: {
      uk: "Хірург, Онколог",
      ru: "Хирург, Онколог",
      en: "Surgeon, Oncologist",
      de: "Chirurg, Onkologe"
    },
    specializations: [
      { uk: "Онкохірург", ru: "Онкохирург", en: "Oncosurgeon", de: "Onkochirurg" },
      { uk: "Абдомінальний хірург", ru: "Абдоминальный хирург", en: "Abdominal Surgeon", de: "Abdominalchirurg" }
    ],
    education: [
      { uk: "Львівський національний медичний університет", ru: "Львовский национальный медицинский университет", en: "Lviv National Medical University", de: "Lwiw Nationale Medizinische Universität" }
    ],
    certificates: ["https://marketplace.canva.com/EAGMPfFcHWI/1/0/1600w/canva-blue-and-white-simple-modern-certificate-of-appreciation-kYHEaKKpJI0.jpg", "https://5.imimg.com/data5/SELLER/Default/2024/2/382609921/MP/AN/IW/124928557/school-certificate-printing-service.jpg" ,"https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg"],
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    services: ["service2"],
    subservices: ["sub3"],
    shortName: {
      uk: "Олександра",
      ru: "Александра",
      en: "Oleksandr",
      de: "Oleksandr"
    }
  },
  {
    id: "doctor7",
    slug: "petrenko-natalia",
    fullName: {
      uk: "Петренко Наталія Ігорівна",
      ru: "Петренко Наталия Игоревна",
      en: "Petrenko Natalia Ihorivna",
      de: "Petrenko Natalia Ihorivna"
    },
    position: {
      uk: "Кардіолог, Терапевт",
      ru: "Кардиолог, Терапевт",
      en: "Cardiologist, Therapist",
      de: "Kardiologe, Therapeut"
    },
    specializations: [
      { uk: "Кардіолог", ru: "Кардиолог", en: "Cardiologist", de: "Kardiologe" },
      { uk: "Терапевт", ru: "Терапевт", en: "Therapist", de: "Therapeut" }
    ],
    education: [
      { uk: "Київський медичний університет", ru: "Киевский медицинский университет", en: "Kyiv Medical University", de: "Kiew Medizinische Universität" }
    ],
    certificates: ["https://marketplace.canva.com/EAGMPfFcHWI/1/0/1600w/canva-blue-and-white-simple-modern-certificate-of-appreciation-kYHEaKKpJI0.jpg", "https://5.imimg.com/data5/SELLER/Default/2024/2/382609921/MP/AN/IW/124928557/school-certificate-printing-service.jpg" ,"https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg"],
    photo: "https://images.unsplash.com/photo-1527613426441-4da17471b66d",
    services: ["service3"],
    subservices: ["sub5"],
    shortName: {
      uk: "Наталії",
      ru: "Натальи",
      en: "Natalia",
      de: "Natalia"
    }
  },
  {
    id: "doctor8",
    slug: "shevchenko-iryna",
    fullName: {
      uk: "Шевченко Ірина Сергіївна",
      ru: "Шевченко Ирина Сергеевна",
      en: "Shevchenko Iryna Serhiivna",
      de: "Shevchenko Iryna Serhiivna"
    },
    position: {
      uk: "Педіатр, Неонатолог",
      ru: "Педиатр, Неонатолог",
      en: "Pediatrician, Neonatologist",
      de: "Pädiater, Neonatologe"
    },
    specializations: [
      { uk: "Педіатр", ru: "Педиатр", en: "Pediatrician", de: "Pädiater" },
      { uk: "Неонатолог", ru: "Неонатолог", en: "Neonatologist", de: "Neonatologe" }
    ],
    education: [
      { uk: "Харківський медичний університет", ru: "Харьковский медицинский университет", en: "Kharkiv Medical University", de: "Charkiw Medizinische Universität" }
    ],
    certificates: ["https://marketplace.canva.com/EAGMPfFcHWI/1/0/1600w/canva-blue-and-white-simple-modern-certificate-of-appreciation-kYHEaKKpJI0.jpg", "https://5.imimg.com/data5/SELLER/Default/2024/2/382609921/MP/AN/IW/124928557/school-certificate-printing-service.jpg" ,"https://d2vyhi5ouo1we3.cloudfront.net/force_jpg/aHR0cHM6Ly9pbWFnZXMuYmFubmVyYmVhci5jb20vcmVxdWVzdHMvaW1hZ2VzLzAwOC85MjQvNTc5L29yaWdpbmFsL2VhYzQyY2FiZjM5YzIxY2Y4NThlNWY4NDRlZmM0YTA1MjJmOGUxNzkucG5nPzE2MzI4MDgzMDI=/image.jpg"],
    photo: "https://images.unsplash.com/photo-1550831107-1553da8c8464",
    services: ["service4"],
    subservices: ["sub6"],
    shortName: {
      uk: "Ірини",
      ru: "Ирины",
      en: "Iryna",
      de: "Iryna"
    }
  }
];


export const faqs: FAQ[] = [
  {
    id: "faq1",
    serviceId: "service1",
    question: {
      uk: "Чи боляче видаляти новоутворення?",
      ru: "Больно ли удалять новообразования?",
      en: "Is it painful to remove skin growths?",
      de: "Ist die Entfernung von Hautwucherungen schmerzhaft?"
    },
    answer: {
      uk: "Процедура проводиться під місцевою анестезією...",
      ru: "Процедура проводится под местной анестезией...",
      en: "The procedure is performed under local anesthesia...",
      de: "Der Eingriff wird unter örtlicher Betäubung durchgeführt..."
    }
  },
  {
    id: "faq2",
    subserviceId: "sub1",
    question: {
      uk: "Скільки триває відновлення після лазера?",
      ru: "Сколько длится восстановление после лазера?",
      en: "How long is recovery after laser treatment?",
      de: "Wie lange dauert die Erholung nach der Laserbehandlung?"
    },
    answer: {
      uk: "Залежить від типу лазера, зазвичай 3-5 днів...",
      ru: "Зависит от типа лазера, обычно 3-5 дней...",
      en: "Depends on the type of laser, usually 3-5 days...",
      de: "Hängt vom Lasertyp ab, normalerweise 3-5 Tage..."
    }
  },
  {
    id: "faq3",
    serviceId: "service2",
    question: {
      uk: "Чим відрізняється пластика губ від збільшення?",
      ru: "Чем отличается пластика губ от увеличения?",
      en: "What is the difference between lip plastic surgery and augmentation?",
      de: "Was ist der Unterschied zwischen Lippenplastik und -vergrößerung?"
    },
    answer: {
      uk: "На відміну від звичайного збільшення контурна пластика дозволяє ще й змінити форму губ...",
      ru: "В отличие от обычного увеличения контурная пластика позволяет также изменить форму губ...",
      en: "Unlike regular augmentation, contour plastic also allows changing the shape of the lips...",
      de: "Im Gegensatz zur normalen Vergrößerung ermöglicht die Konturplastik auch eine Veränderung der Lippenform..."
    }
  },
  {
    id: "faq4",
    serviceId: "service2",
    question: {
      uk: "Скільки мл потрібно колоти в губи вперше?",
      ru: "Сколько мл нужно колоть в губы впервые?",
      en: "How many ml should be injected into the lips for the first time?",
      de: "Wie viele ml sollten bei der ersten Lippeninjektion verabreicht werden?"
    },
    answer: {
      uk: "Мінімальний обсяг – 1 мл. Максимум — не більше 2 мл за процедуру.",
      ru: "Минимальный объем — 1 мл. Максимум — не более 2 мл за процедуру.",
      en: "The minimum is 1 ml. The maximum is no more than 2 ml per procedure.",
      de: "Das Minimum beträgt 1 ml. Das Maximum nicht mehr als 2 ml pro Behandlung."
    }
  },
  {
    id: "faq5",
    serviceId: "service3",
    question: {
      uk: "Які існують протипоказання для азелаїнового пілінгу?",
      ru: "Какие существуют противопоказания для азелаинового пилинга?",
      en: "What are the contraindications for azelaic peeling?",
      de: "Welche Kontraindikationen gibt es für Azelainsäure-Peeling?"
    },
    answer: {
      uk: "Протипоказання: герпес, запальні захворювання, рани, алергія на компоненти...",
      ru: "Противопоказания: герпес, воспалительные заболевания, раны, аллергия на компоненты...",
      en: "Contraindications: herpes, inflammatory diseases, wounds, allergy to ingredients...",
      de: "Kontraindikationen: Herpes, entzündliche Erkrankungen, Wunden, Allergie gegen Inhaltsstoffe..."
    }
  },
  {
    id: "faq6",
    serviceId: "service2",
    question: {
      uk: "Через скільки проходить набряк після збільшення губ?",
      ru: "Через сколько проходит отек после увеличения губ?",
      en: "How long does swelling last after lip augmentation?",
      de: "Wie lange hält die Schwellung nach einer Lippenvergrößerung an?"
    },
    answer: {
      uk: "Набряк і синці можуть триматися до 7 днів. Це норма.",
      ru: "Отек и синяки могут держаться до 7 дней. Это норма.",
      en: "Swelling and bruising can last up to 7 days. This is normal.",
      de: "Schwellungen und Blutergüsse können bis zu 7 Tage anhalten. Das ist normal."
    }
  },
  {
    id: "faq7",
    serviceId: "service2",
    question: {
      uk: "Скільки тримається 1 мл у губах?",
      ru: "Сколько держится 1 мл в губах?",
      en: "How long does 1 ml last in the lips?",
      de: "Wie lange hält 1 ml in den Lippen?"
    },
    answer: {
      uk: "Ефект тримається від 6 до 12 місяців.",
      ru: "Эффект держится от 6 до 12 месяцев.",
      en: "The effect lasts from 6 to 12 months.",
      de: "Der Effekt hält 6 bis 12 Monate."
    }
  },
  {
    id: "faq8",
    serviceId: "service2",
    question: {
      uk: "Як спати після збільшення губ?",
      ru: "Как спать после увеличения губ?",
      en: "How to sleep after lip augmentation?",
      de: "Wie schläft man nach einer Lippenvergrößerung?"
    },
    answer: {
      uk: "В перші дні забороняється спати на животі.",
      ru: "В первые дни запрещено спать на животе.",
      en: "In the first days, it is forbidden to sleep on your stomach.",
      de: "In den ersten Tagen ist es verboten, auf dem Bauch zu schlafen."
    }
  },
  {
    id: "faq9",
    serviceId: "service4",
    question: {
      uk: "Скільки потрібно процедур біоревіталізації?",
      ru: "Сколько нужно процедур биоревитализации?",
      en: "How many biorevitalization procedures are needed?",
      de: "Wie viele Biorevitalisierungsverfahren sind erforderlich?"
    },
    answer: {
      uk: "Середній курс становить 3-5 процедур.",
      ru: "Средний курс составляет 3-5 процедур.",
      en: "The average course is 3-5 procedures.",
      de: "Der durchschnittliche Kurs beträgt 3-5 Sitzungen."
    }
  }
];

export const specials: Scpecials[] = [
  {
    id: "1",
    title: {
      uk: "Лазерна епіляція -30%",
      de: "Laser-Haarentfernung -30%",
      en: "Laser Hair Removal -30%",
      ru: "Лазерная эпиляция -30%"
    },
    subtitle: {
      uk: "Знижка на лазерні процедури цього місяця",
      de: "Rabatt auf Laserbehandlungen diesen Monat",
      en: "Discount on laser treatments this month",
      ru: "Скидка на лазерные процедуры в этом месяце"
    },
    headerTitle: {
      uk: "Акція на лазерну епіляцію",
      de: "Aktion für Laser-Haarentfernung",
      en: "Laser Hair Removal Promotion",
      ru: "Акция на лазерную эпиляцию"
    },
    content: [
      { id: "1-1", type: "text", content: { uk: "Щоб отримати знижку, запишіться на процедуру через наш сайт або телефон.", de: "Um den Rabatt zu erhalten, buchen Sie über unsere Website oder telefonisch.", en: "To get the discount, book your procedure via our website or phone.", ru: "Чтобы получить скидку, запишитесь на процедуру через наш сайт или по телефону." } },
      { id: "1-2", type: "text", content: { uk: "Лазерна епіляція дозволяє швидко видаляти небажане волосся, забезпечуючи гладку шкіру.", de: "Die Laser-Haarentfernung entfernt unerwünschte Haare schnell und sorgt für glatte Haut.", en: "Laser hair removal quickly removes unwanted hair, leaving smooth skin.", ru: "Лазерная эпиляция позволяет быстро удалять нежелательные волосы, обеспечивая гладкую кожу." } },
      { id: "1-3", type: "image", image: "https://www.health.com/thmb/7o5Q_4BNlWP8LEV4o3_DLSZ5cBg=/2121x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1409466138-f80dbd560dd64c2cb5357ae5f043586c.jpg" },
      { id: "1-4", type: "text", content: { uk: "Після процедури шкіра стає гладкою та м’якою на дотик, а ризик подразнень мінімальний.", de: "Nach der Behandlung ist die Haut glatt und weich, das Risiko von Reizungen ist minimal.", en: "After the procedure, skin is smooth and soft, with minimal irritation risk.", ru: "После процедуры кожа становится гладкой и мягкой на ощупь, риск раздражений минимален." } },
      { id: "1-5", type: "text", content: { uk: "Рекомендується курс процедур для досягнення стійкого результату та оптимальної ефективності.", de: "Eine Behandlungskur wird empfohlen, um dauerhafte Ergebnisse und maximale Wirksamkeit zu erzielen.", en: "A course of treatments is recommended for long-lasting results and maximum effectiveness.", ru: "Рекомендуется пройти курс процедур для стойкого результата и максимальной эффективности." } },
      {
        id: "3-5",
        type: "faq", FAQs: faqs.filter(faq => ["faq5"].includes(faq.id)),
      },
    ],
    slug: "laser-epilation",
    mainImage: "https://cambridgelaserclinic.com/wp-content/uploads/laser-hair-removal-1-scaled.jpg",
    images: ["/images/epilation1.jpg", "/images/epilation2.jpg"],
  },

  {
    id: "2",
    title: { uk: "Безкоштовна консультація", de: "Kostenlose Beratung", en: "Free Consultation", ru: "Бесплатная консультация" },
    subtitle: { uk: "Для нових клієнтів", de: "Für Neukunden", en: "For new clients", ru: "Для новых клиентов" },
    headerTitle: { uk: "Перша консультація безкоштовна", de: "Erste Beratung kostenlos", en: "First consultation free", ru: "Первая консультация бесплатна" },
    content: [
      { id: "2-1", type: "text", content: { uk: "Запишіться на консультацію онлайн або по телефону, щоб отримати персональні рекомендації.", de: "Buchen Sie die Beratung online oder telefonisch, um persönliche Empfehlungen zu erhalten.", en: "Book your consultation online or by phone to receive personalized advice.", ru: "Запишитесь на консультацию онлайн или по телефону, чтобы получить персональные рекомендации." } },
      { id: "2-2", type: "text", content: { uk: "Спеціаліст проаналізує стан вашої шкіри та підбере оптимальні процедури.", de: "Der Spezialist analysiert Ihren Hautzustand und wählt die optimalen Behandlungen aus.", en: "The specialist will analyze your skin and select the optimal treatments.", ru: "Специалист проанализирует состояние вашей кожи и подберет оптимальные процедуры." } },
      { id: "2-3", type: "image", image: "https://media.istockphoto.com/id/1404962365/photo/female-doctor-examining-a-patient-at-her-office.jpg?s=612x612&w=0&k=20&c=ASz3AWonL9oBb4qI-aKi69wZmZro1JXJVhS9zK4Lv00=" },
      { id: "2-4", type: "text", content: { uk: "Ви отримаєте поради щодо домашнього догляду та способів підтримки результатів процедур.", de: "Sie erhalten Tipps zur Heimpflege und zur Aufrechterhaltung der Behandlungsergebnisse.", en: "You will receive tips for home care and maintaining treatment results.", ru: "Вы получите советы по домашнему уходу и поддержанию результатов процедур." } },
      { id: "2-5", type: "text", content: { uk: "Консультація включає відповіді на всі ваші запитання та рекомендації спеціаліста.", de: "Die Beratung beantwortet alle Ihre Fragen und gibt Empfehlungen.", en: "The consultation answers all your questions and provides specialist recommendations.", ru: "Консультация отвечает на все ваши вопросы и дает рекомендации специалиста." } },
      {
        id: "2-6",
        type: "faq",
        FAQs: faqs.filter(faq => ["faq3", "faq4"].includes(faq.id))
      },
    ],
    slug: "free-consultation",
    mainImage: "https://dcimedicine.com/wp-content/uploads/2024/09/5-1024x1024.png",
    images: [],
  },

  {
    id: "3",
    title: { uk: "Пілінг обличчя -20%", de: "Gesichtspeeling -20%", en: "Facial Peeling -20%", ru: "Пилинг лица -20%" },
    subtitle: { uk: "Свіжа шкіра за вигідною ціною", de: "Frische Haut zum Vorteilspreis", en: "Fresh skin at a great price", ru: "Свежая кожа по выгодной цене" },
    headerTitle: { uk: "Акція на пілінг", de: "Aktion für Peeling", en: "Facial Peeling Promotion", ru: "Акция на пилинг" },
    content: [
      { id: "3-1", type: "text", content: { uk: "Пілінг допомагає видалити відмерлі клітини та стимулює регенерацію шкіри.", de: "Das Peeling entfernt abgestorbene Zellen und stimuliert die Hautregeneration.", en: "Peeling helps remove dead cells and stimulates skin regeneration.", ru: "Пилинг помогает удалить омертвевшие клетки и стимулирует регенерацию кожи." } },
      { id: "3-2", type: "image", image: "https://www.lincolndentalcenter.ca/wp-content/uploads/2025/03/10-Reasons-Why-You-Should-Consider-Botox-Cosmetic-Treatment.jpg" },
      { id: "3-3", type: "text", content: { uk: "Процедура робить шкіру свіжою, гладкою та сяючою.", de: "Die Behandlung macht die Haut frisch, glatt und strahlend.", en: "The treatment makes skin fresh, smooth and glowing.", ru: "Процедура делает кожу свежей, гладкой и сияющей." } },
      { id: "3-4", type: "text", content: { uk: "Рекомендується дотримуватись домашнього догляду після сеансу для тривалого ефекту.", de: "Empfohlen wird, die Heimpflege nach der Behandlung fortzusetzen.", en: "It is recommended to follow home care after the session for lasting results.", ru: "Рекомендуется соблюдать домашний уход после сеанса для долгого эффекта." } },
      {
        id: "2-6",
        type: "faq",
        FAQs: faqs.filter(faq => ["faq3", "faq4"].includes(faq.id))
      },
    ],
    slug: "facial-peeling",
    mainImage: "https://int.filorga.com/wp-content/uploads/sites/2/2025/03/Une-femme-qui-re%CC%81alise-un-peeling-visage-1620x1080.jpg",
    images: [],
  },

  {
    id: "4",
    title: { uk: "Масаж спини -15%", de: "Rückenmassage -15%", en: "Back Massage -15%", ru: "Массаж спины -15%" },
    subtitle: { uk: "Розслаблення та турбота про здоров'я", de: "Entspannung und Gesundheitspflege", en: "Relaxation and wellness", ru: "Расслабление и забота о здоровье" },
    headerTitle: { uk: "Акція на масаж спини", de: "Aktion für Rückenmassage", en: "Back Massage Promotion", ru: "Акция на массаж спины" },
    content: [
      { id: "4-1", type: "text", content: { uk: "Масаж допомагає зняти напругу та покращити кровообіг.", de: "Massage hilft, Verspannungen zu lösen und die Durchblutung zu verbessern.", en: "Massage helps relieve tension and improve circulation.", ru: "Массаж помогает снять напряжение и улучшить кровообращение." } },
      { id: "4-2", type: "image", image: "https://bellevie-cln.ru/wp-content/uploads/2024/09/kr6a1780-scaled-1.webp" },
      { id: "4-3", type: "text", content: { uk: "Результат: менше стресу, більше комфорту та відчуття розслаблення.", de: "Ergebnis: weniger Stress, mehr Komfort und Entspannung.", en: "Result: less stress, more comfort, and feeling relaxed.", ru: "Результат: меньше стресса, больше комфорта и ощущение расслабления." } },
      { id: "3-4", type: "text", content: { uk: "Рекомендується дотримуватись домашнього догляду після сеансу для тривалого ефекту.", de: "Empfohlen wird, die Heimpflege nach der Behandlung fortzusetzen.", en: "It is recommended to follow home care after the session for lasting results.", ru: "Рекомендуется соблюдать домашний уход после сеанса для долгого эффекта." } },
    ],
    slug: "back-massage",
    mainImage: "https://www.allaboutbeauty-schwabach.de/wp-content/uploads/2022/07/rueckenmassage.jpg",
    images: [],
  }
    ]

