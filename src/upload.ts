import { push, ref, set } from "firebase/database";
import { db } from "./firebase"; // путь к твоему файлу firebase.ts

// // Здесь вставляем наш блог
//
// export const blogData = {
//   slug: "dubai-luxury-real-estate-story",
//   mainImage: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
//   title: {
//     uk: "Дубай: історія народження столиці розкоші",
//     ru: "Дубай: история рождения столицы роскоши",
//     en: "Dubai: The Birth of the Capital of Luxury",
//     de: "Dubai: Die Geburt der Hauptstadt des Luxus",
//   },
//   subtitle: {
//     uk: "Як пустеля перетворилася на світовий центр інновацій, архітектури та розкоші",
//     ru: "Как пустыня превратилась в мировой центр инноваций, архитектуры и роскоши",
//     en: "How the desert turned into the world’s center of innovation, architecture, and luxury",
//     de: "Wie sich die Wüste in das weltweite Zentrum für Innovation, Architektur und Luxus verwandelte",
//   },
//   content: [
//     {
//       type: "heading",
//       content: {
//         uk: "Початок: місто серед пісків",
//         ru: "Начало: город среди песков",
//         en: "The Beginning: A City Among the Sands",
//         de: "Der Anfang: Eine Stadt im Sand",
//       },
//     },
//     {
//       type: "paragraph",
//       content: {
//         uk: "Ще півстоліття тому Дубай був невеликим портовим містом. Але стратегічне бачення шейха Рашида бін Саїда Аль Мактума змінило все.",
//         ru: "Ещё полвека назад Дубай был маленьким портовым городом. Но стратегическое видение шейха Рашида бин Саида Аль Мактума изменило всё.",
//         en: "Just half a century ago, Dubai was a small port town. But the strategic vision of Sheikh Rashid bin Saeed Al Maktoum changed everything.",
//         de: "Noch vor einem halben Jahrhundert war Dubai eine kleine Hafenstadt. Doch die strategische Vision von Scheich Rashid bin Saeed Al Maktoum veränderte alles.",
//       },
//     },
//     {
//       type: "image",
//       media: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
//       align: "left",
//       widthPercent: 50,
//       children: [
//         {
//           type: "heading",
//           content: {
//             uk: "Перші проекти",
//             ru: "Первые проекты",
//             en: "The First Projects",
//             de: "Die ersten Projekte",
//           },
//         },
//         {
//           type: "paragraph",
//           content: {
//             uk: "Першими символами майбутнього міста стали порти Джебель-Алі та міжнародний аеропорт Дубая — ворота в майбутнє.",
//             ru: "Первыми символами будущего города стали порт Джебель-Али и международный аэропорт Дубая — ворота в будущее.",
//             en: "The first symbols of the city’s future were the Jebel Ali Port and Dubai International Airport — gateways to the world.",
//             de: "Die ersten Symbole der zukünftigen Stadt waren der Hafen Jebel Ali und der internationale Flughafen von Dubai – Tore zur Zukunft.",
//           },
//         },
//       ],
//     },
//     {
//       type: "heading",
//       content: {
//         uk: "Архітектурна революція",
//         ru: "Архитектурная революция",
//         en: "The Architectural Revolution",
//         de: "Die architektonische Revolution",
//       },
//     },
//     {
//       type: "paragraph",
//       content: {
//         uk: "З відкриттям Burj Al Arab у 1999 році Дубай заявив про себе як про місто майбутнього. Його архітектура стала символом статусу та інновацій.",
//         ru: "С открытием Burj Al Arab в 1999 году Дубай заявил о себе как о городе будущего. Его архитектура стала символом статуса и инноваций.",
//         en: "With the opening of Burj Al Arab in 1999, Dubai announced itself as the city of the future. Its architecture became a symbol of status and innovation.",
//         de: "Mit der Eröffnung des Burj Al Arab im Jahr 1999 präsentierte sich Dubai als Stadt der Zukunft. Seine Architektur wurde zum Symbol für Status und Innovation.",
//       },
//     },
//     {
//       type: "image",
//       media: "https://images.unsplash.com/photo-1585647347487-7c31c0b7be8f",
//       align: "right",
//       widthPercent: 45,
//       children: [
//         {
//           type: "heading",
//           content: {
//             uk: "Ікони сучасності",
//             ru: "Иконы современности",
//             en: "Icons of Modernity",
//             de: "Ikonen der Moderne",
//           },
//         },
//         {
//           type: "list",
//           content: {
//             uk: "Burj Khalifa — найвища будівля світу\nPalm Jumeirah — острів у формі пальми\nDubai Marina — серце міського життя",
//             ru: "Burj Khalifa — самое высокое здание мира\nPalm Jumeirah — остров в форме пальмы\nDubai Marina — сердце городской жизни",
//             en: "Burj Khalifa — the tallest building in the world\nPalm Jumeirah — an island shaped like a palm tree\nDubai Marina — the heart of urban life",
//             de: "Burj Khalifa – das höchste Gebäude der Welt\nPalm Jumeirah – eine Insel in Form einer Palme\nDubai Marina – das Herz des Stadtlebens",
//           },
//         },
//       ],
//     },
//     {
//       type: "heading",
//       content: {
//         uk: "Розкіш як філософія",
//         ru: "Роскошь как философия",
//         en: "Luxury as a Philosophy",
//         de: "Luxus als Philosophie",
//       },
//     },
//     {
//       type: "paragraph",
//       content: {
//         uk: "Вілли з видом на море, пентхауси з басейнами на даху та автоматизовані системи керування — усе створене, щоб людина відчула абсолютний комфорт.",
//         ru: "Виллы с видом на море, пентхаусы с бассейнами на крыше и автоматизированные системы управления — всё создано для ощущения абсолютного комфорта.",
//         en: "Seaside villas, rooftop penthouses with pools, and automated smart home systems — all designed to deliver ultimate comfort.",
//         de: "Villen mit Meerblick, Penthäuser mit Dachpools und automatisierte Steuerungssysteme – alles geschaffen, um absoluten Komfort zu bieten.",
//       },
//     },
//     {
//       type: "image",
//       media: "https://images.unsplash.com/photo-1573455494057-482d249e0413",
//       align: "center",
//       widthPercent: 60,
//       children: [
//         {
//           type: "heading",
//           content: {
//             uk: "Технології у кожній деталі",
//             ru: "Технологии в каждой детали",
//             en: "Technology in Every Detail",
//             de: "Technologie in jedem Detail",
//           },
//         },
//         {
//           type: "paragraph",
//           content: {
//             uk: "Сучасні житлові комплекси в Дубаї обладнані штучним інтелектом, системами безпеки та енергоефективними рішеннями нового покоління.",
//             ru: "Современные жилые комплексы в Дубае оснащены искусственным интеллектом, системами безопасности и энергоэффективными решениями нового поколения.",
//             en: "Modern Dubai residences are equipped with AI systems, smart security, and next-generation energy-efficient solutions.",
//             de: "Moderne Wohnanlagen in Dubai sind mit KI-Systemen, Sicherheitslösungen und energieeffizienter Technologie der nächsten Generation ausgestattet.",
//           },
//         },
//       ],
//     },
//     {
//       type: "heading",
//       content: {
//         uk: "Дубай сьогодні",
//         ru: "Дубай сегодня",
//         en: "Dubai Today",
//         de: "Dubai heute",
//       },
//     },
//     {
//       type: "paragraph",
//       content: {
//         uk: "Дубай — це не лише про розкіш. Це про майбутнє, яке вже настало. Місто стало домом для інновацій, культури та можливостей.",
//         ru: "Дубай — это не только о роскоши. Это о будущем, которое уже наступило. Город стал домом для инноваций, культуры и возможностей.",
//         en: "Dubai is not only about luxury. It’s about the future that has already arrived. The city has become a home of innovation, culture, and opportunity.",
//         de: "Dubai steht nicht nur für Luxus. Es steht für die Zukunft, die bereits begonnen hat. Die Stadt ist zu einer Heimat für Innovation, Kultur und Chancen geworden.",
//       },
//     },
//     {
//       type: "image",
//       media: "https://images.unsplash.com/photo-1590490359864-5d9a1ad3c9b2",
//       align: "right",
//       widthPercent: 55,
//       children: [
//         {
//           type: "heading",
//           content: {
//             uk: "Вид з висоти",
//             ru: "Вид с высоты",
//             en: "A View from Above",
//             de: "Ein Blick von oben",
//           },
//         },
//         {
//           type: "paragraph",
//           content: {
//             uk: "Панорама міста вночі — це мільйони вогнів, що символізують мрії, які стали реальністю.",
//             ru: "Ночная панорама города — это миллионы огней, символизирующих мечты, ставшие реальностью.",
//             en: "The city skyline at night — millions of lights symbolizing dreams turned into reality.",
//             de: "Die nächtliche Skyline der Stadt – Millionen Lichter, die Träume symbolisieren, die wahr geworden sind.",
//           },
//         },
//       ],
//     },
//   ],
// };
//
//
// export const employeeData =
//     [
//       {
//         "fullName": {"uk":"Максим Коваль","ru":"Максим Коваль","en":"Maksym Koval","de":"Maksym Koval"},
//         "shortName": {"uk":"М. Коваль","ru":"М. Коваль","en":"M. Koval","de":"M. Koval"},
//         "position": {"uk":"Senior Fullstack Developer","ru":"Senior Fullstack Developer","en":"Senior Fullstack Developer","de":"Senior Fullstack Developer"},
//         "slug": "maksym-koval",
//         "specializations": [
//           {"uk":"Frontend: React, TypeScript, TailwindCSS","ru":"Frontend: React, TypeScript, TailwindCSS","en":"Frontend: React, TypeScript, TailwindCSS","de":"Frontend: React, TypeScript, TailwindCSS"},
//           {"uk":"Backend: Java, Spring Boot, PostgreSQL","ru":"Backend: Java, Spring Boot, PostgreSQL","en":"Backend: Java, Spring Boot, PostgreSQL","de":"Backend: Java, Spring Boot, PostgreSQL"}
//         ],
//         "education": [
//           {"uk":"Бакалавр комп'ютерних наук, КПІ","ru":"Бакалавр компьютерных наук, КПИ","en":"Bachelor in Computer Science, Kyiv Polytechnic Institute","de":"Bachelor in Computer Science, Kyiv Polytechnic Institute"}
//         ],
//         "certificates": ["AWS Certified Developer – Associate","Scrum Master Professional Certificate"],
//         "photo": ""
//       },
//       {
//         "fullName": {"uk":"Ольга Петрів","ru":"Ольга Петрова","en":"Olga Petriv","de":"Olga Petriv"},
//         "shortName": {"uk":"О. Петрів","ru":"О. Петрова","en":"O. Petriv","de":"O. Petriv"},
//         "position": {"uk":"Senior Fullstack Developer","ru":"Senior Fullstack Developer","en":"Senior Fullstack Developer","de":"Senior Fullstack Developer"},
//         "slug": "olga-petriv",
//         "specializations": [
//           {"uk":"Frontend: Vue.js, React, TypeScript","ru":"Frontend: Vue.js, React, TypeScript","en":"Frontend: Vue.js, React, TypeScript","de":"Frontend: Vue.js, React, TypeScript"},
//           {"uk":"Backend: Node.js, NestJS, MongoDB","ru":"Backend: Node.js, NestJS, MongoDB","en":"Backend: Node.js, NestJS, MongoDB","de":"Backend: Node.js, NestJS, MongoDB"}
//         ],
//         "education": [
//           {"uk":"Магістр IT, Львівський університет","ru":"Магистр IT, Львовский университет","en":"Master in Information Technology, Lviv University","de":"Master in Information Technology, Lviv University"}
//         ],
//         "certificates": ["Google Cloud Professional Developer","Kubernetes Application Developer"],
//         "photo": ""
//       },
//       {
//         "fullName": {"uk":"Іван Шевченко","ru":"Иван Шевченко","en":"Ivan Shevchenko","de":"Ivan Shevchenko"},
//         "shortName": {"uk":"І. Шевченко","ru":"И. Шевченко","en":"I. Shevchenko","de":"I. Shevchenko"},
//         "position": {"uk":"Lead Fullstack Developer","ru":"Lead Fullstack Developer","en":"Lead Fullstack Developer","de":"Lead Fullstack Developer"},
//         "slug": "ivan-shevchenko",
//         "specializations": [
//           {"uk":"Frontend: Angular, React","ru":"Frontend: Angular, React","en":"Frontend: Angular, React","de":"Frontend: Angular, React"},
//           {"uk":"Backend: Python, Django, PostgreSQL","ru":"Backend: Python, Django, PostgreSQL","en":"Backend: Python, Django, PostgreSQL","de":"Backend: Python, Django, PostgreSQL"}
//         ],
//         "education": [
//           {"uk":"Бакалавр прикладної математики, Київський університет","ru":"Бакалавр прикладной математики, Киевский университет","en":"Bachelor in Applied Mathematics, Kyiv University","de":"Bachelor in Applied Mathematics, Kyiv University"}
//         ],
//         "certificates": ["Certified Scrum Product Owner","Microsoft Azure Developer Associate"],
//         "photo": ""
//       },
//       {
//         "fullName": {"uk":"Аліна Романенко","ru":"Алина Романенко","en":"Alina Romanenko","de":"Alina Romanenko"},
//         "shortName": {"uk":"А. Романенко","ru":"А. Романенко","en":"A. Romanenko","de":"A. Romanenko"},
//         "position": {"uk":"Senior Frontend Developer","ru":"Senior Frontend Developer","en":"Senior Frontend Developer","de":"Senior Frontend Developer"},
//         "slug": "alina-romanenko",
//         "specializations": [
//           {"uk":"Frontend: React, TypeScript, TailwindCSS","ru":"Frontend: React, TypeScript, TailwindCSS","en":"Frontend: React, TypeScript, TailwindCSS","de":"Frontend: React, TypeScript, TailwindCSS"}
//         ],
//         "education": [
//           {"uk":"Магістр комп'ютерних наук, Київський університет","ru":"Магистр компьютерных наук, Киевский университет","en":"Master in Computer Science, Kyiv University","de":"Master in Computer Science, Kyiv University"}
//         ],
//         "certificates": ["React Professional Certificate","Advanced JavaScript Certification"],
//         "photo": ""
//       },
//       {
//         "fullName": {"uk":"Сергій Кузьменко","ru":"Сергей Кузьменко","en":"Serhiy Kuzmenko","de":"Serhiy Kuzmenko"},
//         "shortName": {"uk":"С. Кузьменко","ru":"С. Кузьменко","en":"S. Kuzmenko","de":"S. Kuzmenko"},
//         "position": {"uk":"Senior Backend Developer","ru":"Senior Backend Developer","en":"Senior Backend Developer","de":"Senior Backend Developer"},
//         "slug": "serhiy-kuzmenko",
//         "specializations": [
//           {"uk":"Backend: Node.js, Express, MongoDB","ru":"Backend: Node.js, Express, MongoDB","en":"Backend: Node.js, Express, MongoDB","de":"Backend: Node.js, Express, MongoDB"},
//           {"uk":"DevOps: Docker, Kubernetes, CI/CD","ru":"DevOps: Docker, Kubernetes, CI/CD","en":"DevOps: Docker, Kubernetes, CI/CD","de":"DevOps: Docker, Kubernetes, CI/CD"}
//         ],
//         "education": [
//           {"uk":"Бакалавр комп'ютерних наук, Харківський університет","ru":"Бакалавр компьютерных наук, Харьковский университет","en":"Bachelor in Computer Science, Kharkiv University","de":"Bachelor in Computer Science, Kharkiv University"}
//         ],
//         "certificates": ["AWS Certified Solutions Architect","Docker Certified Associate"],
//         "photo": ""
//       }
//     ]
// const faqData = [
//   {
//     question: {
//       uk: "Які технології ви використовуєте у своїх проєктах?",
//       ru: "Какие технологии вы используете в своих проектах?",
//       en: "What technologies do you use in your projects?",
//       de: "Welche Technologien verwenden Sie in Ihren Projekten?"
//     },
//     answer: {
//       uk: "Ми використовуємо сучасний стек: React, TypeScript, Node.js, Java, PostgreSQL, Docker і Firebase.",
//       ru: "Мы используем современный стек: React, TypeScript, Node.js, Java, PostgreSQL, Docker и Firebase.",
//       en: "We use a modern stack: React, TypeScript, Node.js, Java, PostgreSQL, Docker, and Firebase.",
//       de: "Wir verwenden einen modernen Stack: React, TypeScript, Node.js, Java, PostgreSQL, Docker und Firebase."
//     },
//     serviceId: "development",
//     subserviceId: "technologies"
//   },
//   {
//     question: {
//       uk: "Чи можна пройти у вас стажування для студентів?",
//       ru: "Можно ли у вас пройти стажировку для студентов?",
//       en: "Do you offer internships for students?",
//       de: "Bieten Sie Praktika für Studierende an?"
//     },
//     answer: {
//       uk: "Так, ми регулярно набираємо студентів на стажування з напрямів Frontend, Backend та QA.",
//       ru: "Да, мы регулярно набираем студентов на стажировки по направлениям Frontend, Backend и QA.",
//       en: "Yes, we regularly accept students for internships in Frontend, Backend, and QA directions.",
//       de: "Ja, wir bieten regelmäßig Praktika in den Bereichen Frontend, Backend und QA an."
//     },
//     serviceId: "career",
//     subserviceId: "internship"
//   },
//   {
//     question: {
//       uk: "Який рівень англійської потрібен для роботи у вас?",
//       ru: "Какой уровень английского нужен для работы у вас?",
//       en: "What level of English is required to work with you?",
//       de: "Welches Englischniveau ist erforderlich, um bei Ihnen zu arbeiten?"
//     },
//     answer: {
//       uk: "Мінімальний рівень — B1, але для деяких позицій бажано мати B2 або вище.",
//       ru: "Минимальный уровень — B1, но для некоторых позиций желательно иметь B2 или выше.",
//       en: "The minimum level is B1, but for some positions, B2 or higher is preferred.",
//       de: "Das Mindestniveau ist B1, für einige Positionen ist jedoch B2 oder höher wünschenswert."
//     },
//     serviceId: "career",
//     subserviceId: "requirements"
//   },
//   {
//     question: {
//       uk: "Чи можна працювати віддалено?",
//       ru: "Можно ли работать удалённо?",
//       en: "Is remote work possible?",
//       de: "Ist Remote-Arbeit möglich?"
//     },
//     answer: {
//       uk: "Так, більшість наших команд працює повністю віддалено або у гібридному форматі.",
//       ru: "Да, большинство наших команд работает полностью удалённо или в гибридном формате.",
//       en: "Yes, most of our teams work fully remotely or in a hybrid format.",
//       de: "Ja, die meisten unserer Teams arbeiten vollständig remote oder im Hybridmodus."
//     },
//     serviceId: "career",
//     subserviceId: "remote"
//   },
//   {
//     question: {
//       uk: "Як можна подати заявку на вакансію?",
//       ru: "Как подать заявку на вакансию?",
//       en: "How can I apply for a job?",
//       de: "Wie kann ich mich auf eine Stelle bewerben?"
//     },
//     answer: {
//       uk: "Ви можете надіслати резюме через форму на сайті або на електронну пошту HR-відділу.",
//       ru: "Вы можете отправить резюме через форму на сайте или на электронную почту HR-отдела.",
//       en: "You can submit your resume through the website form or send it to our HR email.",
//       de: "Sie können Ihren Lebenslauf über das Formular auf der Website oder per E-Mail an die Personalabteilung senden."
//     },
//     serviceId: "career",
//     subserviceId: "apply"
//   },
//   {
//     question: {
//       uk: "Скільки етапів має технічна співбесіда?",
//       ru: "Сколько этапов включает техническое собеседование?",
//       en: "How many stages does the technical interview include?",
//       de: "Wie viele Phasen umfasst das technische Vorstellungsgespräch?"
//     },
//     answer: {
//       uk: "Зазвичай це 2–3 етапи: технічне тестове, співбесіда з розробником та фінальна зустріч із менеджером.",
//       ru: "Обычно это 2–3 этапа: техническое тестовое, собеседование с разработчиком и финальная встреча с менеджером.",
//       en: "Usually 2–3 stages: a technical test, an interview with a developer, and a final meeting with a manager.",
//       de: "In der Regel sind es 2–3 Phasen: ein technischer Test, ein Interview mit einem Entwickler und ein Abschlussgespräch mit dem Manager."
//     },
//     serviceId: "career",
//     subserviceId: "interview"
//   },
//   {
//     question: {
//       uk: "Чи можна отримати рекомендації після стажування?",
//       ru: "Можно ли получить рекомендации после стажировки?",
//       en: "Can I get recommendations after an internship?",
//       de: "Kann ich nach dem Praktikum eine Empfehlung erhalten?"
//     },
//     answer: {
//       uk: "Так, після успішного завершення стажування ви отримаєте сертифікат і рекомендаційний лист.",
//       ru: "Да, после успешного прохождения стажировки вы получите сертификат и рекомендательное письмо.",
//       en: "Yes, after successful completion of the internship, you’ll receive a certificate and a recommendation letter.",
//       de: "Ja, nach erfolgreichem Abschluss des Praktikums erhalten Sie ein Zertifikat und ein Empfehlungsschreiben."
//     },
//     serviceId: "career",
//     subserviceId: "internship"
//   },
//   {
//     question: {
//       uk: "Які напрямки ви розвиваєте в компанії?",
//       ru: "Какие направления вы развиваете в компании?",
//       en: "Which areas does your company specialize in?",
//       de: "Auf welche Bereiche ist Ihr Unternehmen spezialisiert?"
//     },
//     answer: {
//       uk: "Ми працюємо з веброзробкою, мобільними додатками, UI/UX дизайном та аналітикою даних.",
//       ru: "Мы занимаемся веб-разработкой, мобильными приложениями, UI/UX-дизайном и аналитикой данных.",
//       en: "We focus on web development, mobile apps, UI/UX design, and data analytics.",
//       de: "Wir konzentrieren uns auf Webentwicklung, mobile Apps, UI/UX-Design und Datenanalyse."
//     },
//     serviceId: "development",
//     subserviceId: "directions"
//   },
//   {
//     question: {
//       uk: "Чи допомагаєте ви зі створенням стартапів?",
//       ru: "Помогаете ли вы со стартапами?",
//       en: "Do you help with startup development?",
//       de: "Unterstützen Sie bei der Entwicklung von Startups?"
//     },
//     answer: {
//       uk: "Так, ми пропонуємо технічну підтримку, дизайн та консультації для стартапів на ранніх етапах.",
//       ru: "Да, мы предлагаем техническую поддержку, дизайн и консультации для стартапов на ранних этапах.",
//       en: "Yes, we provide technical support, design, and consulting for early-stage startups.",
//       de: "Ja, wir bieten technische Unterstützung, Design und Beratung für Startups in der frühen Phase an."
//     },
//     serviceId: "development",
//     subserviceId: "startup_support"
//   }
// ];
//
export const priceData =  [

{
  serviceIds: ["luxCars"],
  category: {
    uk: "Оренда люксових автомобілів",
    ru: "Аренда люксовых автомобилей",
    en: "Luxury Car Rental",
    de: "Luxusautovermietung"
  },
  columns: {
    duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
    procedure: { uk: "Модель авто", ru: "Модель авто", en: "Car Model", de: "Auto Modell" },
    price: { uk: "Ціна", ru: "Цена", en: "Price", de: "Preis" }
  },
  sections: [
    {
      subtitle: { uk: "Суперкари", ru: "Суперкары", en: "Supercars", de: "Supersportwagen" },
      items: [
        { duration: "1 день", procedure: { uk: "Lamborghini Aventador", ru: "Lamborghini Aventador", en: "Lamborghini Aventador", de: "Lamborghini Aventador" }, price: "$1500" },
        { duration: "3 дні", procedure: { uk: "Lamborghini Aventador", ru: "Lamborghini Aventador", en: "Lamborghini Aventador", de: "Lamborghini Aventador" }, price: "$4200" },
        { duration: "7 днів", procedure: { uk: "Ferrari F8 Tributo", ru: "Ferrari F8 Tributo", en: "Ferrari F8 Tributo", de: "Ferrari F8 Tributo" }, price: "$9000" },
        { duration: "1 місяць", procedure: { uk: "Ferrari Roma", ru: "Ferrari Roma", en: "Ferrari Roma", de: "Ferrari Roma" }, price: "$12000" },
        { duration: "1 день", procedure: { uk: "McLaren 720S", ru: "McLaren 720S", en: "McLaren 720S", de: "McLaren 720S" }, price: "$1600" },
        { duration: "5 днів", procedure: { uk: "Porsche 911 Turbo S", ru: "Porsche 911 Turbo S", en: "Porsche 911 Turbo S", de: "Porsche 911 Turbo S" }, price: "$7000" }
      ]
    },
    {
      subtitle: { uk: "Люксові седани", ru: "Люксовые седаны", en: "Luxury Sedans", de: "Luxus-Limousinen" },
      items: [
        { duration: "1 день", procedure: { uk: "Mercedes S-Class", ru: "Mercedes S-Class", en: "Mercedes S-Class", de: "Mercedes S-Klasse" }, price: "$300" },
        { duration: "3 дні", procedure: { uk: "Mercedes S-Class", ru: "Mercedes S-Class", en: "Mercedes S-Class", de: "Mercedes S-Klasse" }, price: "$850" },
        { duration: "1 день", procedure: { uk: "BMW 7 Series", ru: "BMW 7 Series", en: "BMW 7 Series", de: "BMW 7er Reihe" }, price: "$280" },
        { duration: "7 днів", procedure: { uk: "Audi A8", ru: "Audi A8", en: "Audi A8", de: "Audi A8" }, price: "$1600" },
        { duration: "1 місяць", procedure: { uk: "Genesis G90", ru: "Genesis G90", en: "Genesis G90", de: "Genesis G90" }, price: "$3500" }
      ]
    },
    {
      subtitle: { uk: "Міні-кари", ru: "Мини-кары", en: "Mini Cars", de: "Mini Cars" },
      items: [
        { duration: "1 день", procedure: { uk: "Mini Cooper", ru: "Mini Cooper", en: "Mini Cooper", de: "Mini Cooper" }, price: "$120" },
        { duration: "3 дні", procedure: { uk: "Fiat 500", ru: "Fiat 500", en: "Fiat 500", de: "Fiat 500" }, price: "$280" },
        { duration: "7 днів", procedure: { uk: "VW Beetle", ru: "VW Beetle", en: "VW Beetle", de: "VW Beetle" }, price: "$600" },
        { duration: "1 місяць", procedure: { uk: "Mini Electric", ru: "Mini Electric", en: "Mini Electric", de: "Mini Electric" }, price: "$1500" }
      ]
    },
    {
      subtitle: { uk: "Внедорожники", ru: "Внедорожники", en: "SUVs", de: "Geländewagen" },
      items: [
        { duration: "1 день", procedure: { uk: "Range Rover Autobiography", ru: "Range Rover Autobiography", en: "Range Rover Autobiography", de: "Range Rover Autobiography" }, price: "$500" },
        { duration: "3 дні", procedure: { uk: "Range Rover Autobiography", ru: "Range Rover Autobiography", en: "Range Rover Autobiography", de: "Range Rover Autobiography" }, price: "$1400" },
        { duration: "7 днів", procedure: { uk: "Bentley Bentayga", ru: "Bentley Bentayga", en: "Bentley Bentayga", de: "Bentley Bentayga" }, price: "$4000" },
        { duration: "1 місяць", procedure: { uk: "Lexus LX 600", ru: "Lexus LX 600", en: "Lexus LX 600", de: "Lexus LX 600" }, price: "$10000" }
      ]
    },
    {
      subtitle: { uk: "Спеціальні пропозиції", ru: "Специальные предложения", en: "Special Offers", de: "Sonderangebote" },
      items: [
        { duration: "3 дні", procedure: { uk: "Porsche 911", ru: "Porsche 911", en: "Porsche 911", de: "Porsche 911" }, price: "$900" },
        { duration: "3 дні", procedure: { uk: "Lamborghini Huracan", ru: "Lamborghini Huracan", en: "Lamborghini Huracan", de: "Lamborghini Huracan" }, price: "$1500" },
        { duration: "3 дні", procedure: { uk: "Ferrari Roma", ru: "Ferrari Roma", en: "Ferrari Roma", de: "Ferrari Roma" }, price: "$1600" }
      ]
    }
  ]
}


]



//
//
// export const serviceData = [
//
//   {
//     id: "service-004",
//     slug: "elite-event-planning",
//     title: {
//       uk: "Організація елітних заходів",
//       ru: "Организация элитных мероприятий",
//       en: "Elite Event Planning",
//       de: "Elite-Eventplanung"
//     },
//     mainImage: "https://example.com/images/elite-event-main.jpg",
//     content: [
//       { type: "heading", content: { uk: "Вступ", ru: "Введение", en: "Introduction", de: "Einleitung" }, align: "center" },
//       { type: "paragraph", content: { uk: "Ми створюємо неповторні події для найвибагливіших клієнтів.", ru: "Мы создаем неповторимые события для самых взыскательных клиентов.", en: "We create unique events for the most discerning clients.", de: "Wir gestalten einzigartige Veranstaltungen für anspruchsvollste Kunden." }, align: "center" },
//
//       // Первый блок с изображением и overlay контентом
//       {
//         type: "image",
//         content: { src: "https://example.com/images/event-hall.jpg", alt: "Елітний зал" },
//         children: [
//           { type: "heading", content: { uk: "Розкішні локації", ru: "Роскошные локации", en: "Luxury Venues", de: "Luxuslocations" }, align: "center" },
//           { type: "paragraph", content: { uk: "Вибір залів та майданчиків по всій країні.", ru: "Выбор залов и площадок по всей стране.", en: "Selection of halls and venues nationwide.", de: "Auswahl von Sälen und Locations landesweit." }, align: "center" },
//         ]
//       },
//
//       { type: "heading", content: { uk: "Наші послуги", ru: "Наши услуги", en: "Our Services", de: "Unsere Dienstleistungen" }, align: "center" },
//       { type: "paragraph", content: { uk: "Ми надаємо повний спектр послуг для організації заходів:", ru: "Мы предоставляем полный спектр услуг для организации мероприятий:", en: "We provide a full range of services for event planning:", de: "Wir bieten ein komplettes Leistungsspektrum für die Eventplanung:" }, align: "center" },
//       { type: "list", content: { uk: ["Планування заходу", "Декор та оформлення", "Кейтеринг преміум-класу", "Ведучі та артисти", "Технічне забезпечення"], ru: ["Планирование мероприятия", "Декор и оформление", "Кейтеринг премиум-класса", "Ведущие и артисты", "Техническое обеспечение"], en: ["Event planning", "Decoration and styling", "Premium catering", "Hosts and performers", "Technical support"], de: ["Eventplanung", "Dekor und Gestaltung", "Premium-Catering", "Moderatoren und Künstler", "Technische Ausstattung"] }, align: "center" },
//
//       // Второй блок изображения с children
//       {
//         type: "image",
//         content: { src: "https://example.com/images/catering.jpg", alt: "Кейтеринг" },
//         children: [
//           { type: "heading", content: { uk: "Преміум кейтеринг", ru: "Премиум кейтеринг", en: "Premium Catering", de: "Premium-Catering" }, align: "center" },
//           { type: "paragraph", content: { uk: "Вишукані страви та напої від провідних шеф-кухарів.", ru: "Изысканные блюда и напитки от ведущих шеф-поваров.", en: "Exquisite dishes and drinks from top chefs.", de: "Exquisite Gerichte und Getränke von Spitzenköchen." }, align: "center" },
//         ]
//       },
//
//       { type: "heading", content: { uk: "Тематичні події", ru: "Тематические события", en: "Themed Events", de: "Themenveranstaltungen" }, align: "center" },
//       { type: "paragraph", content: { uk: "Ми створюємо заходи з унікальною концепцією та дизайном.", ru: "Мы создаем мероприятия с уникальной концепцией и дизайном.", en: "We create events with unique concept and design.", de: "Wir gestalten Veranstaltungen mit einzigartigem Konzept und Design." }, align: "center" },
//
//       {
//         type: "image",
//         content: { src: "https://example.com/images/theme-event.jpg", alt: "Тематичне оформлення" },
//         children: [
//           { type: "heading", content: { uk: "Індивідуальний підхід", ru: "Индивидуальный подход", en: "Individual Approach", de: "Individueller Ansatz" }, align: "center" },
//           { type: "paragraph", content: { uk: "Кожна подія розробляється під конкретного клієнта.", ru: "Каждое мероприятие разрабатывается под конкретного клиента.", en: "Every event is tailored to the client.", de: "Jede Veranstaltung wird individuell für den Kunden entwickelt." }, align: "center" },
//         ]
//       },
//
//       { type: "heading", content: { uk: "Команда", ru: "Команда", en: "Team", de: "Team" }, align: "center" },
//       { type: "paragraph", content: { uk: "Професіонали з багаторічним досвідом в організації VIP заходів.", ru: "Профессионалы с многолетним опытом в организации VIP мероприятий.", en: "Professionals with years of experience in VIP event planning.", de: "Professionals mit jahrelanger Erfahrung in der VIP-Eventplanung." }, align: "center" },
//
//       { type: "image", content: { src: "https://example.com/images/team.jpg", alt: "Команда професіоналів" }, align: "center" },
//
//       { type: "heading", content: { uk: "Зв'яжіться з нами", ru: "Свяжитесь с нами", en: "Contact Us", de: "Kontaktieren Sie uns" }, align: "center" },
//       { type: "paragraph", content: { uk: "Забронюйте вашу елітну подію вже сьогодні!", ru: "Забронируйте ваше элитное мероприятие уже сегодня!", en: "Book your elite event today!", de: "Buchen Sie noch heute Ihre Eliteveranstaltung!" }, align: "center" },
//
//       { type: "image", content: { src: "https://example.com/images/contact.jpg", alt: "Контакти" }, align: "center" }
//     ]
//   }
//   ];
//
//
// async function uploadBlog() {
//   try {
//     const newRef = push(ref(db, "blogs")); // создаём новый ключ в "blogs"
//     await set(newRef, { ...blogData, id: newRef.key });
//     console.log("Blog uploaded successfully! ID:", newRef.key);
//   } catch (err) {
//     console.error("Error uploading blog:", err);
//   }
// }
//
//
// async function uploadFaqs() {
//   try {
//     for (const faq of faqData) {
//       const newRef = push(ref(db, "faqs"));
//       await set(newRef, { ...faq, id: newRef.key });
//       console.log(`✅ Uploaded FAQ: ${faq.question.en} (ID: ${newRef.key})`);
//     }
//     console.log("🎉 All FAQs uploaded successfully!");
//   } catch (err) {
//     console.error("❌ Error uploading FAQs:", err);
//   }
// }
//
//
//
// async function uploadEmployee() {
//   try {
//     for (const employee of employeeData) {
//       const newRef = push(ref(db, "employees")); // создаём новый уникальный ключ
//       await set(newRef, { ...employee, id: newRef.key }); // сохраняем сотрудника с ключом
//       console.log(`Employee uploaded: ${employee.fullName.en} (ID: ${newRef.key})`);
//     }
//     console.log("✅ All employees uploaded successfully!");
//   } catch (err) {
//     console.error("❌ Error uploading employees:", err);
//   }
// }
//
//
export async function uploadPrices() {
  try {
    for (const price of priceData) {
      const newRef = push(ref(db, "prices")); // создаём уникальный ключ в "prices"
      await set(newRef, { ...price, id: newRef.key }); // добавляем id
      console.log(`✅ Price uploaded: ${price.category.en} (ID: ${newRef.key})`);
    }
    console.log("🎉 All prices uploaded successfully!");
  } catch (err) {
    console.error("❌ Error uploading prices:", err);
  }
}
//
// export async function uploadService() {
//   try {
//     for (const service of serviceData) {
//       const newRef = push(ref(db, "services")); // создаём уникальный ключ в "prices"
//       await set(newRef, { ...service, id: newRef.key }); // добавляем id
//       console.log(`✅ Price uploaded: ${service.title.en} (ID: ${newRef.key})`);
//     }
//     console.log("🎉 All prices uploaded successfully!");
//   } catch (err) {
//     console.error("❌ Error uploading prices:", err);
//   }
// }
//
//
//
//
//
//
// // Вызов функции
// //uploadBlog
// //uploadFaqs();
// //uploadEmployee();
uploadPrices()
// //uploadService();
