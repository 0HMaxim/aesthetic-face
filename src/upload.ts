import { push, ref, set } from "firebase/database";
import { db } from "./firebase";

// // Здесь вставляем наш блог

export const blogData = {
  slug: "humanoid-robots-evolution-2025",
  mainImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2000",
  title: {
    ru: "Эра гуманоидов: Как роботы меняют наше представление о быте",
    uk: "Ера гуманоїдів: Як роботи змінюють наше уявлення про побут",
    en: "The Era of Humanoids: How Robots are Changing Our Daily Lives"
  },
  subtitle: {
    ru: "Разбираемся, почему роботы наконец-то выходят из цехов Tesla и Boston Dynamics прямо к нам в гостиные.",
    uk: "Розбираємося, чому роботи нарешті виходять із цехів Tesla та Boston Dynamics прямо до нас у вітальні.",
    en: "Understanding why robots are finally leaving Tesla and Boston Dynamics factories and heading straight to our living rooms."
  },
  content: [
    {
      type: "heading",
      align: "left",
      content: { ru: "1. Почему именно сейчас?", uk: "1. Чому саме зараз?", en: "1. Why now?" }
    },
    {
      type: "paragraph",
      content: {
        ru: "Десятилетиями роботы были привязаны к полу на заводах. Но в 2024-2025 годах произошел прорыв в 'воплощенном интеллекте' (Embodied AI). Это комбинация нейросетей типа LLM и продвинутых сервоприводов.",
        uk: "Десятиліттями роботи були прив'язані до підлоги на заводах. Але у 2024-2025 роках стався прорив у 'втіленому інтелекті' (Embodied AI). Це комбінація нейромереж типу LLM та просунутих сервоприводів.",
        en: "For decades, robots were bolted to factory floors. In 2024-2025, a breakthrough in 'Embodied AI' occurred—a combination of LLM-type neural networks and advanced actuators."
      }
    },
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1546776310-eef45dd6d63c?q=80&w=1000",
      align: "left",
      widthPercent: 40,
      children: [
        {
          type: "heading",
          content: { ru: "Ключевые игроки рынка", uk: "Ключові гравці ринку", en: "Market Key Players" }
        },
        {
          type: "list",
          content: {
            ru: "Tesla Optimus (Gen 2)\nFigure AI (в партнерстве с OpenAI)\nBoston Dynamics Atlas (Electric)\nUnitree H1",
            uk: "Tesla Optimus (Gen 2)\nFigure AI (у партнерстві з OpenAI)\nBoston Dynamics Atlas (Electric)\nUnitree H1",
            en: "Tesla Optimus (Gen 2)\nFigure AI (with OpenAI)\nBoston Dynamics Atlas (Electric)\nUnitree H1"
          }
        },
        {
          type: "paragraph",
          content: {
            ru: "Каждый из них использует разные подходы к балансировке, но цель одна — универсальность.",
            uk: "Кожен із них використовує різні підходи до балансування, але мета одна — універсальність.",
            en: "Each uses different approaches to balancing, but the goal is the same — versatility."
          }
        }
      ]
    },
    {
      type: "heading",
      align: "right",
      content: { ru: "2. Обучение через подражание", uk: "2. Навчання через наслідування", en: "2. Learning through Imitation" }
    },
    {
      type: "paragraph",
      align: "right",
      content: {
        ru: "Современные роботы не программируются кодом 'если стена — поверни'. Они смотрят тысячи видео, как человек моет посуду или складывает одежду, и имитируют эти движения, адаптируясь к физике объекта в реальном времени.",
        uk: "Сучасні роботи не програмуються кодом 'якщо стіна — поверни'. Вони дивляться тисячі відео, як людина миє посуд або складає одяг, і імітують ці рухи, адаптуючись до фізики об'єкта в реальному часі.",
        en: "Modern robots aren't programmed with 'if wall, then turn' code. They watch thousands of videos of humans washing dishes or folding clothes and imitate those movements."
      }
    },
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1000",
      align: "right",
      widthPercent: 50,
      children: [
        {
          type: "heading",
          content: { ru: "Технологический стек", uk: "Технологічний стек", en: "Tech Stack" }
        },
        {
          type: "list",
          content: {
            ru: "Лидары высокой точности\nТактильные датчики на кончиках пальцев\nНейронные процессоры (NPU)\nСистемы компьютерного зрения 360°",
            uk: "Лідари високої точності\nТактильні датчики на кінчиках пальців\nНейронні процесори (NPU)\nСистеми комп'ютерного зору 360°",
            en: "High-precision lidars\nTactile sensors on fingertips\nNeural Processing Units (NPU)\n360° Computer Vision systems"
          }
        }
      ]
    },
    {
      type: "heading",
      content: { ru: "3. Проблемы и вызовы", uk: "3. Проблеми та виклики", en: "3. Problems and Challenges" }
    },
    {
      type: "paragraph",
      content: {
        ru: "Самая большая проблема — это батарея. Большинство современных гуманоидов могут работать автономно от 2 до 4 часов. Этого достаточно для уборки, но мало для полноценной смены в госпитале или на складе.",
        uk: "Найбільша проблема — це батарея. Більшість сучасних гуманоїдів можуть працювати автономно від 2 до 4 годин. Цього достатньо для прибирання, але замало для повноцінної зміни в госпіталі або на складі.",
        en: "The biggest problem is the battery. Most modern humanoids can work autonomously for only 2 to 4 hours."
      }
    },
    {
      type: "list",
      align: "center",
      content: {
        ru: "Высокая стоимость (от $20,000 до $150,000)\nШум гидравлики и моторов\nВопросы безопасности при работе с детьми\nСложность обслуживания",
        uk: "Висока вартість (від $20,000 до $150,000)\nШум гідравліки та моторів\nПитання безпеки при роботі з дітьми\nСкладність обслуговування",
        en: "High cost ($20k to $150k)\nNoise from hydraulics/motors\nSafety concerns with children\nMaintenance complexity"
      }
    },
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      align: "center",
      widthPercent: 80,
      children: [
        {
          type: "paragraph",
          align: "center",
          content: {
            ru: "На фото: Тестирование захвата манипулятора в условиях лаборатории робототехники.",
            uk: "На фото: Тестування захоплення маніпулятора в умовах лабораторії робототехніки.",
            en: "In photo: Gripper testing in a robotics lab environment."
          }
        }
      ]
    },
    {
      type: "heading",
      content: { ru: "4. Будущее рядом", uk: "4. Майбутнє поруч", en: "4. Future is Near" }
    },
    {
      type: "paragraph",
      content: {
        ru: "К 2030 году эксперты предсказывают, что наличие домашнего ассистента станет такой же нормой, как наличие стиральной машины сегодня. Они будут не просто выполнять задачи, но и распознавать ваши эмоции через микро-выражения лица.",
        uk: "До 2030 року експерти передбачають, що наявність домашнього асистента стане такою ж нормою, як наявність пральної машини сьогодні. Вони будуть не просто виконувати завдання, а й розпізнавати ваші емоції через мікро-вирази обличчя.",
        en: "By 2030, experts predict that having a home assistant will be as normal as having a washing machine today."
      }
    }
  ]
};



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




export const serviceData = [

  // Вставляйте этот объект в массив export const serviceData = [...] в вашем файле upload.ts
// Вставляйте этот объект в массив export const serviceData = [...] в вашем файле upload.ts
// Вставляйте этот объект в массив export const serviceData = [...] в вашем файле upload.ts

  {
    id: "service-009",

    // Поля M:M (по умолчанию пустые)
    parentServiceIds: [],
    subservices: [],

    // Основные мета-данные
    slug: "global-premium-property-selection",
    title: {
      uk: "Глобальний Преміум-підбір та Оренда Нерухомості",
      ru: "Глобальный Премиум-подбор и Аренда Недвижимости",
      en: "Global Premium Property Selection and Rental",
      de: "Globale Premium-Immobilienauswahl und Vermietung"
    },
    subtitle: {
      uk: "Ваш приватний доступ до ексклюзивних об'єктів для оренди та покупки по всьому світу.",
      ru: "Ваш частный доступ к эксклюзивным объектам для аренды и покупки по всему миру.",
      en: "Your private access to exclusive properties for rent and purchase worldwide.",
      de: "Ihr privater Zugang zu exklusiven Miet- und Kaufobjekten weltweit."
    },
    headerTitle: {
      uk: "Нерухомість Вашої Мрії Без Кордонів",
      ru: "Недвижимость Вашей Мечты Без Границ",
      en: "Your Dream Property Without Borders",
      de: "Ihre Traumimmobilie ohne Grenzen"
    },
    mainImage: "https://example.com/images/global-real-estate-main.jpg",

    // Связи (пустые для новой записи)
    blogs: [],
    prices: [],
    specials: [],
    employees: [], // ID менеджера по недвижимости

    // Основной контент (ContentBlock[])
    content: [
      {
        type: "heading",
        content: {
          uk: "1. Індивідуальний Підхід та Конфіденційність",
          ru: "1. Индивидуальный Подход и Конфиденциальность",
          en: "1. Personalized Approach and Confidentiality",
          de: "1. Individueller Ansatz und Vertraulichkeit"
        },
        align: "left"
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми розуміємо, що пошук ідеальної нерухомості вимагає часу та довіри. Наші агенти працюють у режимі повного конфіденційності, аналізуючи ваші потреби, від бюджету до необхідного рівня інфраструктури, у будь-якій країні світу.",
          ru: "Мы понимаем, что поиск идеальной недвижимости требует времени и доверия. Наши агенты работают в режиме полной конфиденциальности, анализируя ваши потребности, от бюджета до необходимого уровня инфраструктуры, в любой стране мира.",
          en: "We understand that finding the perfect property requires time and trust. Our agents operate with complete confidentiality, analyzing your needs, from budget to the required infrastructure level, in any country worldwide.",
          de: "Wir verstehen, dass die Suche nach der idealen Immobilie Zeit und Vertrauen erfordert. Unsere Agenten arbeiten mit absoluter Vertraulichkeit und analysieren Ihre Bedürfnisse, vom Budget bis zur benötigten Infrastruktur, in jedem Land der Welt."
        },
        align: "left"
      },

      // Блок с изображением: Аналитика
      {
        type: "image",
        media: "https://example.com/images/property-analytics.jpg",
        widthPercent: 70,
        align: "center",
        children: [
          {
            type: "paragraph",
            content: {
              uk: "Ви отримуєте доступ до закритої бази об'єктів, які ще не представлені на відкритому ринку.",
              ru: "Вы получаете доступ к закрытой базе объектов, которые еще не представлены на открытом рынке.",
              en: "You gain access to a private database of properties not yet available on the open market.",
              de: "Sie erhalten Zugang zu einer privaten Datenbank von Objekten, die noch nicht auf dem freien Markt verfügbar sind."
            },
            align: "center"
          },
        ]
      },

      {
        type: "heading",
        content: {
          uk: "2. Комплексний Супровід Угод",
          ru: "2. Комплексное Сопровождение Сделок",
          en: "2. Comprehensive Transaction Support",
          de: "2. Umfassende Transaktionsunterstützung"
        },
        align: "left"
      },
      {
        type: "list",
        content: {
          uk: [
            "Юридична перевірка: Повна перевірка об'єкта та документів у юрисдикції обраної країни.",
            "Ведення переговорів: Максимально вигідні умови покупки чи оренди.",
            "Управління: Послуги з управління нерухомістю після покупки (за бажанням).",
            "Фінанси: Допомога в оформленні іпотеки або інвестиційних угод."
          ],
          ru: [
            "Юридическая проверка: Полная проверка объекта и документов в юрисдикции выбранной страны.",
            "Ведение переговоров: Максимально выгодные условия покупки или аренды.",
            "Управление: Услуги по управлению недвижимостью после покупки (по желанию).",
            "Финансы: Помощь в оформлении ипотеки или инвестиционных сделок."
          ],
          en: [
            "Legal Vetting: Full inspection of the property and documents in the chosen country's jurisdiction.",
            "Negotiations: Securing the most favorable purchase or rental terms.",
            "Management: Property management services after purchase (optional).",
            "Finance: Assistance with mortgage arrangements or investment transactions."
          ],
          de: [
            "Rechtliche Prüfung: Vollständige Überprüfung des Objekts und der Dokumente in der jeweiligen Gerichtsbarkeit.",
            "Verhandlungen: Sicherung der günstigsten Kauf- oder Mietbedingungen.",
            "Verwaltung: Immobiliendienstleistungen nach dem Kauf (optional).",
            "Finanzen: Unterstützung bei der Vermittlung von Hypotheken oder Investitionsgeschäften."
          ]
        },
        align: "left"
      },

      // Новий блок: Цитата
      {
        type: "blockquote",
        content: {
          uk: "«Ми не просто знаходимо дім, ми відкриваємо для вас новий спосіб життя.»",
          ru: "«Мы не просто находим дом, мы открываем для вас новый образ жизни.»",
          en: "“We don't just find a home, we open up a new way of life for you.”",
          de: "„Wir finden nicht nur ein Zuhause, wir eröffnen Ihnen eine neue Lebensweise.“"
        },
        align: "center"
      },

      // Блок з зображенням та текстом: Кроки
      {
        type: "image",
        media: "https://example.com/images/luxury-home-view.jpg",
        align: "left",
        widthPercent: 50,
        children: [
          {
            type: "heading",
            content: {
              uk: "Три Прості Кроки до Вашої Нерухомості",
              ru: "Три Простых Шага к Вашей Недвижимости",
              en: "Three Simple Steps to Your Property",
              de: "Drei einfache Schritte zu Ihrer Immobilie"
            },
            align: "left"
          },
          {
            type: "list",
            content: {
              uk: ["Консультація та бриф", "Підбір та перегляд", "Угода та завершення"],
              ru: ["Консультация и бриф", "Подбор и просмотр", "Сделка и завершение"],
              en: ["Consultation and Briefing", "Selection and Viewing", "Transaction and Closing"],
              de: ["Beratung und Briefing", "Auswahl und Besichtigung", "Transaktion und Abschluss"]
            },
            align: "left"
          },
        ]
      },
    ]
  }

];
//
//
async function uploadBlog() {
  try {
    const newRef = push(ref(db, "blogs")); // создаём новый ключ в "blogs"
    await set(newRef, { ...blogData, id: newRef.key });
    console.log("Blog uploaded successfully! ID:", newRef.key);
  } catch (err) {
    console.error("Error uploading blog:", err);
  }
}
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
// export async function uploadPrices() {
//   try {
//     for (const price of priceData) {
//       const newRef = push(ref(db, "prices")); // создаём уникальный ключ в "prices"
//       await set(newRef, { ...price, id: newRef.key }); // добавляем id
//       console.log(`✅ Price uploaded: ${price.category.en} (ID: ${newRef.key})`);
//     }
//     console.log("🎉 All prices uploaded successfully!");
//   } catch (err) {
//     console.error("❌ Error uploading prices:", err);
//   }
// }
//
export async function uploadService() {
  try {
    for (const service of serviceData) {
      const newRef = push(ref(db, "services")); // создаём уникальный ключ в "prices"
      await set(newRef, {...service, id: newRef.key}); // добавляем id
      console.log(`✅ Price uploaded: ${service.title.en} (ID: ${newRef.key})`);
    }
    console.log("🎉 All prices uploaded successfully!");
  } catch (err) {
    console.error("❌ Error uploading prices:", err);
  }
}


//
// // Вызов функции
uploadBlog();
// //uploadFaqs();
// //uploadEmployee();
// //uploadPrices()
//();