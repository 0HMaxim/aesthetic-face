// data/service.ts
import type {Service} from "../models/Service.ts";
import type {Subservice} from "../models/Subservice.ts";
import type {Doctor} from "../models/Doctor.ts";
import type {FAQ} from "../models/FAQ.ts";
import type {Scpecials} from "../models/Scpecials.ts";
import type {PriceModel} from "../models/Price";
import type {Photo} from "../models/Photo.ts";



export const services: Service[] = [
  {
    id: "service1",
    title: {
      uk: "Видалення новоутворень",
      ru: "Удаление новообразований",
      en: "Removal of Skin Growths",
      de: "Entfernung von Hautwucherungen"
    },
    slug: "vidalennya-novoutvoren",
    mainImage: "https://plus.unsplash.com/premium_photo-1706557115599-c5ce88552cdc?q=80&w=1740",
    content: [
      { type: "heading", content: { uk: "Що ми пропонуємо", ru: "Что мы предлагаем", en: "What We Offer", de: "Was wir anbieten" } },
      { type: "text", content: { uk: "Наш центр пропонує безпечне та ефективне видалення новоутворень шкіри будь-якої складності. Кожен пацієнт проходить консультацію для підбору оптимального методу.", ru: "Наш центр предлагает безопасное и эффективное удаление новообразований кожи любой сложности. Каждый пациент получает консультацию для выбора оптимального метода.", en: "Our clinic offers safe and effective removal of skin growths of any complexity. Each patient receives a consultation to choose the best procedure method.", de: "Unser Zentrum bietet sichere und effektive Entfernung von Hautwucherungen jeglicher Komplexität. Jeder Patient erhält eine Beratung zur Auswahl der besten Methode." } },
      { type: "image", content: { image: "https://theskindrs.com.sg/wp-content/uploads/2025/03/seborrheic-keratosis.jpg" }, sideText: { uk: "Ми використовуємо лазер та радіохвильові методи для мінімальної травматичності.", ru: "Мы используем лазерные и радиоволновые методы для минимальной травматичности.", en: "We use laser and radio wave methods for minimal trauma.", de: "Wir verwenden Laser- und Radiofrequenzmethoden für minimale Traumata." } },
      { type: "text", content: { uk: "Процедури амбулаторні, безболісні та займають від 10 до 60 хвилин.", ru: "Процедуры амбулаторные, безболезненные и занимают от 10 до 60 минут.", en: "Procedures are outpatient, painless, and take 10 to 60 minutes.", de: "Die Verfahren sind ambulant, schmerzlos und dauern 10 bis 60 Minuten." } },
      { type: "heading", content: { uk: "Методи видалення", ru: "Методы удаления", en: "Removal Methods", de: "Entfernungsmethoden" } },
      { type: "text", content: { uk: "Лазерне видалення, кріодеструкція, радіохвильова хірургія. Кожен метод підбирається індивідуально.", ru: "Лазерное удаление, криодеструкция, радиоволновая хирургия. Каждый метод подбирается индивидуально.", en: "Laser removal, cryodestruction, radio wave surgery. Each method is chosen individually.", de: "Laserentfernung, Kryodestruktion, Radiofrequenzchirurgie. Jede Methode wird individuell ausgewählt." } },
      { type: "image", content: { image: "https://evolsin-medical.com/cdn/shop/articles/stielwarzen01.png?v=1731490358" }, sideText: { uk: "Профілактичні огляди допомагають виявити новоутворення на ранніх стадіях.", ru: "Профилактические осмотры помогают выявлять новообразования на ранних стадиях.", en: "Preventive check-ups help detect skin growths early.", de: "Regelmäßige Vorsorgeuntersuchungen helfen, Hautwucherungen frühzeitig zu erkennen." } },
      { type: "text", content: { uk: "Короткочасне почервоніння після процедури – нормальна реакція шкіри.", ru: "Кратковременное покраснение после процедуры – нормальная реакция кожи.", en: "Temporary redness after the procedure is a normal skin reaction.", de: "Vorübergehende Rötung nach dem Verfahren ist eine normale Hautreaktion." } },
      { type: "text", content: { uk: "Після процедури слід дотримуватися рекомендацій лікаря для швидкого відновлення.", ru: "После процедуры следует соблюдать рекомендации врача для быстрого восстановления.", en: "After the procedure, follow doctor's recommendations for fast recovery.", de: "Nach dem Verfahren sollten die Anweisungen des Arztes für eine schnelle Heilung befolgt werden." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Мінімальна травматичність, швидке загоєння та естетичний результат.", ru: "Минимальная травматичность, быстрое заживление и эстетический результат.", en: "Minimal trauma, fast healing, and aesthetic result.", de: "Minimale Traumatisierung, schnelle Heilung und ästhetisches Ergebnis." } },
      { type: "text", content: { uk: "Індивідуальний підхід до кожного пацієнта та комфорт під час процедури.", ru: "Индивидуальный подход к каждому пациенту и комфорт во время процедуры.", en: "Individual approach to each patient and comfort during the procedure.", de: "Individueller Ansatz für jeden Patienten und Komfort während des Verfahrens." } },
      { type: "text", content: { uk: "Високі стандарти стерильності та безпеки на кожному етапі.", ru: "Высокие стандарты стерильности и безопасности на каждом этапе.", en: "High standards of sterility and safety at every step.", de: "Hohe Standards für Sterilität und Sicherheit in jedem Schritt." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Регулярні профілактичні огляди та своєчасне звернення до лікаря.", ru: "Регулярные профилактические осмотры и своевременное обращение к врачу.", en: "Regular preventive check-ups and timely doctor visits.", de: "Regelmäßige Vorsorgeuntersuchungen und rechtzeitige Arztbesuche." } },
      { type: "text", content: { uk: "Уникати самостійного видалення новоутворень – небезпечно.", ru: "Избегайте самостоятельного удаления новообразований – опасно.", en: "Avoid self-removal of growths – it is dangerous.", de: "Vermeiden Sie die Selbstentfernung von Hautwucherungen – gefährlich." } },
    ],
    faqs: ["faq1", "faq2"],
    doctors: ["doctor1", "doctor2"],
    subservices: ["sub1", "sub2"]
  },

  {
    id: "service2",
    title: {
      uk: "Косметологія обличчя та тіла",
      ru: "Косметология лица и тела",
      en: "Facial & Body Cosmetology",
      de: "Gesichts- & Körperkosmetik"
    },
    slug: "face-body-cosmetology",
    mainImage: "https://images.unsplash.com/photo-1622399591207-269e63936861?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що ми пропонуємо", ru: "Что мы предлагаем", en: "What We Offer", de: "Was wir anbieten" } },
      { type: "text", content: { uk: "Процедури для очищення, омолодження та догляду за шкірою обличчя і тіла, що підбираються індивідуально для кожного клієнта.", ru: "Процедуры для очищения, омоложения и ухода за кожей лица и тела, подбираются индивидуально для каждого клиента.", en: "Procedures for cleansing, rejuvenation, and skin care of face and body, tailored individually for each client.", de: "Verfahren zur Reinigung, Verjüngung und Hautpflege von Gesicht und Körper, individuell auf jeden Kunden abgestimmt." } },
      { type: "image", content: { image: "https://pro-estet.com/wp-content/uploads/2021/02/%D0%AD%D0%BD%D0%B7%D0%B8%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BF%D0%B8%D0%BB%D0%B8%D0%BD%D0%B3-1024x683.jpg" }, sideText: { uk: "Використовуємо сучасні методи, що підходять для різних типів шкіри, забезпечуючи максимальний результат.", ru: "Используем современные методы, подходящие для разных типов кожи, обеспечивая максимальный результат.", en: "We use modern methods suitable for different skin types, ensuring maximum results.", de: "Wir verwenden moderne Methoden, die für verschiedene Hauttypen geeignet sind und maximale Ergebnisse gewährleisten." } },
      { type: "text", content: { uk: "Консультація з косметологом перед процедурою дозволяє підібрати оптимальний догляд та індивідуальну програму.", ru: "Консультация с косметологом перед процедурой позволяет подобрать оптимальный уход и индивидуальную программу.", en: "Consultation with a cosmetologist before the procedure allows selecting optimal care and a personalized program.", de: "Eine Beratung mit einem Kosmetologen vor der Behandlung ermöglicht die Auswahl der optimalen Pflege und eines individuellen Programms." } },
      { type: "heading", content: { uk: "Наші методи", ru: "Наши методы", en: "Our Methods", de: "Unsere Methoden" } },
      { type: "text", content: { uk: "Масаж обличчя та тіла, очищення шкіри, пілінги, маски та інші косметологічні процедури.", ru: "Массаж лица и тела, очищение кожи, пилинги, маски и другие косметологические процедуры.", en: "Facial and body massage, skin cleansing, peels, masks, and other cosmetology procedures.", de: "Gesichts- und Körpermassage, Hautreinigung, Peelings, Masken und andere kosmetische Verfahren." } },
      { type: "image", content: { image: "https://verba-beauty.com/wp-content/uploads/2024/03/carbon-980x700.jpg" }, sideText: { uk: "Процедури виконуються професійними косметологами з використанням сучасного обладнання.", ru: "Процедуры выполняются профессиональными косметологами с использованием современного оборудования.", en: "Procedures are performed by professional cosmetologists using modern equipment.", de: "Die Verfahren werden von professionellen Kosmetologen mit moderner Ausrüstung durchgeführt." } },
      { type: "text", content: { uk: "Індивідуальний підхід дозволяє врахувати всі особливості шкіри та побажання клієнта.", ru: "Индивидуальный подход позволяет учесть все особенности кожи и пожелания клиента.", en: "Individual approach allows taking into account all skin characteristics and client preferences.", de: "Individueller Ansatz ermöglicht die Berücksichtigung aller Hautmerkmale und Kundenwünsche." } },
      { type: "text", content: { uk: "Результат процедур – чиста, сяюча та зволожена шкіра.", ru: "Результат процедур – чистая, сияющая и увлажненная кожа.", en: "Result of procedures – clean, radiant, and moisturized skin.", de: "Ergebnis der Verfahren – saubere, strahlende und mit Feuchtigkeit versorgte Haut." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Професійний догляд для обличчя та тіла, ефективність та безпека процедур.", ru: "Профессиональный уход для лица и тела, эффективность и безопасность процедур.", en: "Professional care for face and body, effectiveness and safety of procedures.", de: "Professionelle Pflege für Gesicht und Körper, Wirksamkeit und Sicherheit der Verfahren." } },
      { type: "text", content: { uk: "Використання сертифікованих косметичних засобів та сучасного обладнання.", ru: "Использование сертифицированных косметических средств и современного оборудования.", en: "Use of certified cosmetic products and modern equipment.", de: "Verwendung von zertifizierten Kosmetikprodukten und moderner Ausrüstung." } },
      { type: "image", content: { image: "https://goldenmandarin.ru/wp-content/uploads/2020/07/DSC08557.jpg" }, sideText: { uk: "Завдяки новітнім методикам процедури максимально комфортні та безболісні.", ru: "Благодаря новейшим методикам процедуры максимально комфортные и безболезненные.", en: "Thanks to advanced methods, procedures are maximally comfortable and painless.", de: "Dank modernster Methoden sind die Verfahren maximal komfortabel und schmerzfrei." } },
      { type: "text", content: { uk: "Шкіра після процедур виглядає здоровою та доглянутою.", ru: "Кожа после процедур выглядит здоровой и ухоженной.", en: "Skin looks healthy and well-groomed after procedures.", de: "Die Haut sieht nach den Verfahren gesund und gepflegt aus." } },
      { type: "text", content: { uk: "Можливість скласти індивідуальний курс процедур залежно від потреб клієнта.", ru: "Возможность составить индивидуальный курс процедур в зависимости от потребностей клиента.", en: "Ability to create a personalized procedure course depending on client needs.", de: "Möglichkeit, einen individuellen Behandlungsplan je nach Kundenbedarf zu erstellen." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Дотримуйтесь порад косметолога для тривалого ефекту та здорової шкіри.", ru: "Следуйте советам косметолога для длительного эффекта и здоровой кожи.", en: "Follow cosmetologist recommendations for long-lasting effect and healthy skin.", de: "Befolgen Sie die Empfehlungen des Kosmetologen für langanhaltende Wirkung und gesunde Haut." } },
      { type: "text", content: { uk: "Регулярні процедури допомагають підтримувати тонус та красу шкіри.", ru: "Регулярные процедуры помогают поддерживать тонус и красоту кожи.", en: "Regular procedures help maintain skin tone and beauty.", de: "Regelmäßige Behandlungen helfen, den Hauttonus und die Schönheit zu erhalten." } },
    ],
    faqs: ["faq3"],
    doctors: ["doctor3", "doctor4"],
    subservices: ["sub3", "sub4"]
  },

  {
    id: "service3",
    title: {
      uk: "Масаж",
      ru: "Массаж",
      en: "Massage",
      de: "Massage"
    },
    slug: "massage",
    mainImage: "https://massage.co.ua/wp-content/uploads/2016/10/Modeliuiuchyi-masazh-tila-scaled.jpeg",
    content: [
      { type: "heading", content: { uk: "Що ми пропонуємо", ru: "Что мы предлагаем", en: "What We Offer", de: "Was wir anbieten" } },
      { type: "text", content: { uk: "Різні види масажу для релаксації, відновлення м’язів та поліпшення кровообігу.", ru: "Различные виды массажа для релаксации, восстановления мышц и улучшения кровообращения.", en: "Various types of massage for relaxation, muscle recovery, and improved blood circulation.", de: "Verschiedene Massagearten zur Entspannung, Muskelregeneration und Verbesserung der Durchblutung." } },
      { type: "image", content: { image: "https://visium-clinic.com.ua/media/bm0dr032/massazh-kak-podobrat-podhodyashchij.jpg?width=530&height=360&rnd=133626661049430000" }, sideText: { uk: "Масаж виконується кваліфікованими фахівцями з використанням безпечних технік.", ru: "Массаж выполняется квалифицированными специалистами с использованием безопасных техник.", en: "Massage is performed by qualified specialists using safe techniques.", de: "Massage wird von qualifizierten Fachleuten unter Verwendung sicherer Techniken durchgeführt." } },
      { type: "text", content: { uk: "Індивідуальний підхід до кожного клієнта залежно від стану м’язів та потреб організму.", ru: "Индивидуальный подход к каждому клиенту в зависимости от состояния мышц и потребностей организма.", en: "Individual approach for each client depending on muscle condition and body needs.", de: "Individueller Ansatz für jeden Kunden je nach Muskelzustand und Körperbedürfnissen." } },
      { type: "heading", content: { uk: "Методи масажу", ru: "Методы массажа", en: "Massage Methods", de: "Massage-Methoden" } },
      { type: "text", content: { uk: "Класичний, антицелюлітний, лікувальний, спортивний та релаксуючий масаж.", ru: "Классический, антицеллюлитный, лечебный, спортивный и расслабляющий массаж.", en: "Classical, anti-cellulite, therapeutic, sports, and relaxing massage.", de: "Klassische, Anti-Cellulite-, therapeutische, Sport- und Entspannungsmassage." } },
      { type: "image", content: { image: "https://www.soleuno.ch/fileadmin/_processed_/2/f/csm_BRAG_Stock_Wellness-Massage_23b5d33d60.jpg" }, sideText: { uk: "Процедури стимулюють кровообіг та покращують загальний тонус тіла.", ru: "Процедуры стимулируют кровообращение и улучшают общий тонус тела.", en: "Procedures stimulate blood circulation and improve overall body tone.", de: "Die Verfahren regen die Durchblutung an und verbessern den allgemeinen Körpertonus." } },
      { type: "text", content: { uk: "Регулярні сеанси допомагають зняти стрес та втому.", ru: "Регулярные сеансы помогают снять стресс и усталость.", en: "Regular sessions help relieve stress and fatigue.", de: "Regelmäßige Sitzungen helfen, Stress und Müdigkeit abzubauen." } },
      { type: "text", content: { uk: "Застосування натуральних олій та спеціальних технік для максимального ефекту.", ru: "Использование натуральных масел и специальных техник для максимального эффекта.", en: "Use of natural oils and special techniques for maximum effect.", de: "Verwendung von natürlichen Ölen und speziellen Techniken für maximale Wirkung." } },
      { type: "heading", content: { uk: "Переваги масажу", ru: "Преимущества массажа", en: "Massage Benefits", de: "Vorteile der Massage" } },
      { type: "text", content: { uk: "Поліпшення кровообігу та лімфодренаж, зняття напруги та болю в м’язах.", ru: "Улучшение кровообращения и лимфодренажа, снятие напряжения и боли в мышцах.", en: "Improvement of circulation and lymphatic drainage, relief of tension and muscle pain.", de: "Verbesserung der Durchblutung und des Lymphabflusses, Linderung von Spannungen und Muskelschmerzen." } },
      { type: "text", content: { uk: "Покращення рухливості суглобів та загальної гнучкості тіла.", ru: "Улучшение подвижности суставов и общей гибкости тела.", en: "Improvement of joint mobility and overall body flexibility.", de: "Verbesserung der Gelenkbeweglichkeit und der allgemeinen Körperflexibilität." } },
      { type: "text", content: { uk: "Релаксація та зменшення стресу після напруженого дня.", ru: "Релаксация и уменьшение стресса после напряженного дня.", en: "Relaxation and stress reduction after a busy day.", de: "Entspannung und Stressabbau nach einem anstrengenden Tag." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Регулярний масаж допомагає підтримувати тонус та здоров’я м’язів.", ru: "Регулярный массаж помогает поддерживать тонус и здоровье мышц.", en: "Regular massage helps maintain muscle tone and health.", de: "Regelmäßige Massage hilft, den Muskeltonus und die Gesundheit zu erhalten." } },
      { type: "text", content: { uk: "Перед процедурою рекомендується консультація з фахівцем для визначення типу масажу.", ru: "Перед процедурой рекомендуется консультация со специалистом для определения типа массажа.", en: "Prior consultation with a specialist is recommended to determine the type of massage.", de: "Vor der Behandlung wird eine Beratung mit einem Spezialisten empfohlen, um die Art der Massage zu bestimmen." } },
      { type: "text", content: { uk: "Використання правильних технік допомагає уникнути травм та досягти максимального ефекту.", ru: "Использование правильных техник помогает избежать травм и достичь максимального эффекта.", en: "Using correct techniques helps avoid injuries and achieve maximum effect.", de: "Die Anwendung korrekter Techniken hilft, Verletzungen zu vermeiden und maximale Ergebnisse zu erzielen." } },
      { type: "text", content: { uk: "Масажі можуть бути як розслаблюючими, так і лікувальними залежно від потреб клієнта.", ru: "Массажи могут быть как расслабляющими, так и лечебными в зависимости от потребностей клиента.", en: "Massages can be relaxing or therapeutic depending on client needs.", de: "Massagen können je nach Kundenbedürfnissen entspannend oder therapeutisch sein." } }
    ],
    faqs: ["faq4"],
    doctors: ["doctor5", "doctor6"],
    subservices: ["sub5", "sub6"]
  },

  {
    id: "service4",
    title: {
      uk: "Контурна пластика",
      ru: "Контурная пластика",
      en: "Contour Plastics",
      de: "Konturplastik"
    },
    slug: "contour-plastics",
    mainImage: "https://plus.unsplash.com/premium_photo-1743025736906-897f737b5ee8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що таке контурна пластика", ru: "Что такое контурная пластика", en: "What is Contour Plastics", de: "Was ist Konturplastik" } },
      { type: "text", content: { uk: "Контурна пластика – це метод корекції форми обличчя та об’єму губ за допомогою ін’єкцій філерів.", ru: "Контурная пластика – это метод коррекции формы лица и объема губ с помощью инъекций филлеров.", en: "Contour plastics is a method of correcting facial shape and lip volume using filler injections.", de: "Konturplastik ist eine Methode zur Korrektur der Gesichtsform und des Lippenvolumens mittels Filler-Injektionen." } },
      { type: "image", content: { image: "https://plus.unsplash.com/premium_photo-1682001110131-14c033d4e584?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxsaXBzJTIwQ29udG91cnxlbnwwfHwwfHx8MA%3D%3D" }, sideText: { uk: "Процедура проводиться сертифікованими спеціалістами із дотриманням всіх стандартів безпеки.", ru: "Процедура проводится сертифицированными специалистами с соблюдением всех стандартов безопасности.", en: "The procedure is performed by certified specialists following all safety standards.", de: "Die Behandlung wird von zertifizierten Fachleuten unter Einhaltung aller Sicherheitsstandards durchgeführt." } },
      { type: "text", content: { uk: "Індивідуальний підхід дозволяє досягти природного та гармонійного результату.", ru: "Индивидуальный подход позволяет достичь естественного и гармоничного результата.", en: "An individual approach allows achieving a natural and harmonious result.", de: "Ein individueller Ansatz ermöglicht ein natürliches und harmonisches Ergebnis." } },
      { type: "heading", content: { uk: "Області корекції", ru: "Области коррекции", en: "Correction Areas", de: "Korrekturbereiche" } },
      { type: "text", content: { uk: "Контурна пластика застосовується для губ, щік, підборіддя, скул та носо-губних складок.", ru: "Контурная пластика применяется для губ, щек, подбородка, скул и носогубных складок.", en: "Contour plastics is applied to lips, cheeks, chin, cheekbones, and nasolabial folds.", de: "Konturplastik wird an Lippen, Wangen, Kinn, Wangenknochen und Nasolabialfalten angewendet." } },
      { type: "image", content: { image: "https://plus.unsplash.com/premium_photo-1711609635542-8a0fbc8b9aaf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, sideText: { uk: "Використовуються гіалуронові філери високої якості для безпечного результату.", ru: "Используются гиалуроновые филлеры высокого качества для безопасного результата.", en: "High-quality hyaluronic fillers are used for a safe result.", de: "Hochwertige Hyaluron-Filler werden für ein sicheres Ergebnis verwendet." } },
      { type: "text", content: { uk: "Процедура займає від 20 до 60 хвилин в залежності від зони корекції.", ru: "Процедура занимает от 20 до 60 минут в зависимости от зоны коррекции.", en: "The procedure takes 20 to 60 minutes depending on the correction area.", de: "Die Behandlung dauert je nach Korrekturbereich 20 bis 60 Minuten." } },
      { type: "text", content: { uk: "Мінімальний дискомфорт завдяки використанню місцевої анестезії.", ru: "Минимальный дискомфорт благодаря использованию местной анестезии.", en: "Minimal discomfort thanks to the use of local anesthesia.", de: "Minimaler Komfort dank lokaler Anästhesie." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Природний вигляд, швидкий результат та тривалість ефекту до 12 місяців.", ru: "Естественный вид, быстрый результат и длительность эффекта до 12 месяцев.", en: "Natural look, quick result, and effect lasting up to 12 months.", de: "Natürlicher Look, schnelle Ergebnisse und Wirkung bis zu 12 Monate." } },
      { type: "text", content: { uk: "Безпечні матеріали та контрольоване введення філерів.", ru: "Безопасные материалы и контролируемое введение филлеров.", en: "Safe materials and controlled filler injection.", de: "Sichere Materialien und kontrollierte Filler-Injektion." } },
      { type: "text", content: { uk: "Індивідуальна корекція залежно від анатомії та бажань клієнта.", ru: "Индивидуальная коррекция в зависимости от анатомии и желаний клиента.", en: "Individual correction depending on anatomy and client desires.", de: "Individuelle Korrektur je nach Anatomie und Kundenwunsch." } },
      { type: "heading", content: { uk: "Рекомендації після процедури", ru: "Рекомендации после процедуры", en: "Post-Procedure Recommendations", de: "Empfehlungen nach dem Verfahren" } },
      { type: "text", content: { uk: "Уникати масажу та сильного тиску на оброблену зону протягом 24 годин.", ru: "Избегать массажа и сильного давления на обработанную зону в течение 24 часов.", en: "Avoid massage and strong pressure on the treated area for 24 hours.", de: "Vermeiden Sie Massage und starken Druck auf den behandelten Bereich für 24 Stunden." } },
      { type: "text", content: { uk: "Не піддавати зону впливу високих температур та ультрафіолету протягом 48 годин.", ru: "Не подвергать зону воздействию высоких температур и ультрафиолета в течение 48 часов.", en: "Do not expose the area to high temperatures and UV light for 48 hours.", de: "Setzen Sie den Bereich 48 Stunden lang nicht hohen Temperaturen und UV-Strahlung aus." } },
      { type: "text", content: { uk: "Підтримувати здоровий спосіб життя для збереження результату.", ru: "Поддерживать здоровый образ жизни для сохранения результата.", en: "Maintain a healthy lifestyle to preserve the result.", de: "Pflegen Sie einen gesunden Lebensstil, um das Ergebnis zu erhalten." } }
    ],
    faqs: ["faq5"],
    doctors: ["doctor3", "doctor6"],
    subservices: ["sub7", "sub8"]
  },

  {
    id: "service5",
    title: {
      uk: "IPL Shiny (лікування куперозу, пігментації, акне)",
      ru: "IPL Shiny (лечение купероза, пигментации, акне)",
      en: "IPL Shiny (treatment of couperose, pigmentation, acne)",
      de: "IPL Shiny (Behandlung von Couperose, Pigmentierung, Akne)"
    },
    slug: "ipl-shiny",
    mainImage: "https://img.freepik.com/free-photo/laser-epilation-hair-removal-therapy_1303-23487.jpg?semt=ais_hybrid&w=740&q=80",
    content: [
      { type: "heading", content: { uk: "Що таке IPL Shiny", ru: "Что такое IPL Shiny", en: "What is IPL Shiny", de: "Was ist IPL Shiny" } },
      { type: "text", content: { uk: "IPL Shiny – це сучасна фототерапія для корекції проблем шкіри, таких як купероз, пігментація та акне.", ru: "IPL Shiny – это современная фототерапия для коррекции проблем кожи, таких как купероз, пигментация и акне.", en: "IPL Shiny is a modern phototherapy for correcting skin issues such as couperose, pigmentation, and acne.", de: "IPL Shiny ist eine moderne Phototherapie zur Korrektur von Hautproblemen wie Couperose, Pigmentierung und Akne." } },
      { type: "image", content: { image: "https://besedaclinic.com.ua/userfiles/images/images%201/images%202/%D0%A0/lumenis-m22-1.jpg" }, sideText: { uk: "Процедура безболісна та не травмує шкіру, підходить для обличчя та тіла.", ru: "Процедура безболезненная и не травмирует кожу, подходит для лица и тела.", en: "The procedure is painless and non-traumatic, suitable for face and body.", de: "Die Behandlung ist schmerzlos und nicht traumatisch, geeignet für Gesicht und Körper." } },
      { type: "text", content: { uk: "IPL випромінювання стимулює вироблення колагену та відновлює здоровий тон шкіри.", ru: "IPL излучение стимулирует выработку коллагена и восстанавливает здоровый тон кожи.", en: "IPL radiation stimulates collagen production and restores healthy skin tone.", de: "IPL-Strahlung stimuliert die Kollagenproduktion und stellt einen gesunden Hautton wieder her." } },
      { type: "heading", content: { uk: "Показання", ru: "Показания", en: "Indications", de: "Indikationen" } },
      { type: "text", content: { uk: "Лікування куперозу, видалення пігментації, корекція акне та постакне.", ru: "Лечение купероза, удаление пигментации, коррекция акне и постакне.", en: "Treatment of couperose, pigmentation removal, acne and post-acne correction.", de: "Behandlung von Couperose, Pigmententfernung, Akne- und Post-Akne-Korrektur." } },
      { type: "image", content: { image: "https://img.freepik.com/free-photo/view-doctor-cosmetologist-doing-anti-aging-procedure-cosmetology-office-satisfied-woman-disposable-hat-lying-couch-relaxing_158595-7715.jpg" }, sideText: { uk: "Курс процедур підбирається індивідуально залежно від типу та стану шкіри.", ru: "Курс процедур подбирается индивидуально в зависимости от типа и состояния кожи.", en: "The course of procedures is individually selected depending on skin type and condition.", de: "Der Behandlungskurs wird individuell je nach Hauttyp und -zustand ausgewählt." } },
      { type: "text", content: { uk: "Процедура займає 20-40 хвилин і не потребує реабілітації.", ru: "Процедура занимает 20-40 минут и не требует реабилитации.", en: "The procedure lasts 20-40 minutes and requires no rehabilitation.", de: "Die Behandlung dauert 20-40 Minuten und erfordert keine Rehabilitation." } },
      { type: "heading", content: { uk: "Переваги IPL Shiny", ru: "Преимущества IPL Shiny", en: "Advantages of IPL Shiny", de: "Vorteile von IPL Shiny" } },
      { type: "text", content: { uk: "Мінімальна травматичність, швидкий видимий результат, покращення структури та кольору шкіри.", ru: "Минимальная травматичность, быстрый видимый результат, улучшение структуры и цвета кожи.", en: "Minimal trauma, quick visible result, improvement of skin texture and color.", de: "Minimale Traumatisierung, schnelle sichtbare Ergebnisse, Verbesserung der Hautstruktur und -farbe." } },
      { type: "text", content: { uk: "Безболісно та безпечне для всіх типів шкіри.", ru: "Безболезненно и безопасно для всех типов кожи.", en: "Painless and safe for all skin types.", de: "Schmerzlos und sicher für alle Hauttypen." } },
      { type: "text", content: { uk: "Підходить як для обличчя, так і для тіла.", ru: "Подходит как для лица, так и для тела.", en: "Suitable for both face and body.", de: "Geeignet für Gesicht und Körper." } },
      { type: "heading", content: { uk: "Рекомендації після процедури", ru: "Рекомендации после процедуры", en: "Post-Procedure Recommendations", de: "Empfehlungen nach dem Verfahren" } },
      { type: "text", content: { uk: "Уникати прямого сонячного випромінювання протягом 7 днів.", ru: "Избегать прямого солнечного излучения в течение 7 дней.", en: "Avoid direct sunlight for 7 days.", de: "Vermeiden Sie 7 Tage lang direkte Sonneneinstrahlung." } },
      { type: "text", content: { uk: "Використовувати сонцезахисний крем з SPF 30+.", ru: "Использовать солнцезащитный крем с SPF 30+.", en: "Use sunscreen with SPF 30+.", de: "Verwenden Sie Sonnenschutzmittel mit SPF 30+." } },
      { type: "text", content: { uk: "Не застосовувати агресивні косметичні засоби протягом 3 днів.", ru: "Не применять агрессивные косметические средства в течение 3 дней.", en: "Do not use aggressive cosmetics for 3 days.", de: "Verwenden Sie 3 Tage lang keine aggressiven Kosmetika." } },
      { type: "text", content: { uk: "Повторні процедури можна проводити через 2-4 тижні за потреби.", ru: "Повторные процедуры можно проводить через 2-4 недели при необходимости.", en: "Repeat procedures can be done after 2-4 weeks if needed.", de: "Wiederholte Behandlungen können nach 2-4 Wochen bei Bedarf durchgeführt werden." } }
    ],
    faqs: ["faq6"],
    doctors: ["doctor3", "doctor5"],
    subservices: ["sub9", "sub10"]
  },

  {
    id: "service6",
    title: {
      uk: "Ботулінтерапія",
      ru: "Ботулинотерапия",
      en: "Botulinum Therapy",
      de: "Botulintherapie"
    },
    slug: "botulinotherapy",
    mainImage: "https://images.unsplash.com/photo-1709813610121-e2a51545e212?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що таке ботулінтерапія", ru: "Что такое ботулинотерапия", en: "What is Botulinum Therapy", de: "Was ist Botulintherapie" } },
      { type: "text", content: { uk: "Ботулінтерапія – метод омолодження, який усуває мімічні зморшки за допомогою ін'єкцій ботулотоксину.", ru: "Ботулинотерапия – метод омоложения, устраняющий мимические морщины с помощью инъекций ботулотоксина.", en: "Botulinum therapy is an anti-aging method that eliminates mimic wrinkles using botulinum toxin injections.", de: "Botulintherapie ist eine Anti-Aging-Methode, die mimische Falten mit Botulinumtoxin-Injektionen beseitigt." } },
      { type: "image", content: { image: "https://parkinson-ahmedabad.com/wp-content/uploads/2020/04/botulinum1.jpg" }, sideText: { uk: "Процедура безпечна, проводиться швидко та не потребує реабілітації.", ru: "Процедура безопасна, проводится быстро и не требует реабилитации.", en: "The procedure is safe, quick, and requires no rehabilitation.", de: "Die Behandlung ist sicher, schnell und erfordert keine Rehabilitation." } },
      { type: "text", content: { uk: "Ботулотоксин розслаблює м’язи, що викликають зморшки, забезпечуючи гладку шкіру.", ru: "Ботулотоксин расслабляет мышцы, вызывающие морщины, обеспечивая гладкую кожу.", en: "Botulinum toxin relaxes muscles causing wrinkles, providing smooth skin.", de: "Botulinumtoxin entspannt die Muskeln, die Falten verursachen, und sorgt für glatte Haut." } },
      { type: "heading", content: { uk: "Показання", ru: "Показания", en: "Indications", de: "Indikationen" } },
      { type: "text", content: { uk: "Мімічні зморшки на лобі, міжбрів’ї, навколо очей та губ.", ru: "Мимические морщины на лбу, между бровями, вокруг глаз и губ.", en: "Mimic wrinkles on forehead, glabella, around eyes and lips.", de: "Mimische Falten auf der Stirn, Glabella, um die Augen und Lippen." } },
      { type: "text", content: { uk: "Корекція асиметрії обличчя та підняття брів.", ru: "Коррекция асимметрии лица и поднятие бровей.", en: "Correction of facial asymmetry and eyebrow lifting.", de: "Korrektur der Gesichtssymmetrie und Augenbrauenlifting." } },
      { type: "image", content: { image: "https://www.amazonkaclinic.com.ua/wp-content/uploads/2020/11/botox-mini.jpg" }, sideText: { uk: "Результат проявляється через 3–7 днів і тримається 3–6 місяців.", ru: "Результат проявляется через 3–7 дней и держится 3–6 месяцев.", en: "Results appear in 3–7 days and last 3–6 months.", de: "Ergebnisse zeigen sich in 3–7 Tagen und halten 3–6 Monate an." } },
      { type: "text", content: { uk: "Процедура займає 10–30 хвилин і проводиться амбулаторно.", ru: "Процедура занимает 10–30 минут и проводится амбулаторно.", en: "Procedure takes 10–30 minutes and is performed outpatient.", de: "Die Behandlung dauert 10–30 Minuten und wird ambulant durchgeführt." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Швидкий результат, безболісно, не потребує операції.", ru: "Быстрый результат, безболезненно, не требует операции.", en: "Quick result, painless, non-surgical.", de: "Schnelles Ergebnis, schmerzlos, nicht-chirurgisch." } },
      { type: "text", content: { uk: "Безпечна методика для всіх типів шкіри.", ru: "Безопасный метод для всех типов кожи.", en: "Safe method for all skin types.", de: "Sichere Methode für alle Hauttypen." } },
      { type: "text", content: { uk: "Підвищує впевненість та покращує зовнішній вигляд.", ru: "Повышает уверенность и улучшает внешний вид.", en: "Boosts confidence and improves appearance.", de: "Steigert das Selbstvertrauen und verbessert das Erscheinungsbild." } },
      { type: "heading", content: { uk: "Рекомендації після процедури", ru: "Рекомендации после процедуры", en: "Post-Procedure Recommendations", de: "Empfehlungen nach dem Verfahren" } },
      { type: "text", content: { uk: "Не масажувати оброблену ділянку протягом 24 годин.", ru: "Не массировать обработанную область в течение 24 часов.", en: "Do not massage treated area for 24 hours.", de: "Behandelte Stelle 24 Stunden nicht massieren." } },
      { type: "text", content: { uk: "Уникати фізичних навантажень та сауни 24 години після процедури.", ru: "Избегать физических нагрузок и сауны 24 часа после процедуры.", en: "Avoid physical activity and sauna for 24 hours after procedure.", de: "Vermeiden Sie körperliche Belastung und Sauna 24 Stunden nach der Behandlung." } },
      { type: "text", content: { uk: "Повторну процедуру можна проводити через 3–6 місяців.", ru: "Повторную процедуру можно проводить через 3–6 месяцев.", en: "Repeat procedure can be done after 3–6 months.", de: "Wiederholte Behandlung kann nach 3–6 Monaten durchgeführt werden." } }
    ],
    faqs: ["faq7"],
    doctors: ["doctor1", "doctor4"],
    subservices: ["sub11", "sub12"]
  },

  {
    id: "service7",
    title: {
      uk: "Трихологія",
      ru: "Трихология",
      en: "Trichology",
      de: "Trichologie"
    },
    slug: "trichology",
    mainImage: "https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що таке трихологія", ru: "Что такое трихология", en: "What is Trichology", de: "Was ist Trichologie" } },
      { type: "text", content: { uk: "Трихологія – наука про волосся та шкіру голови. Ми діагностуємо і лікуємо проблеми волосся, обираючи індивідуальний підхід.", ru: "Трихология – наука о волосах и коже головы. Мы диагностируем и лечим проблемы волос, выбирая индивидуальный подход.", en: "Trichology is the science of hair and scalp. We diagnose and treat hair problems using an individual approach.", de: "Trichologie ist die Wissenschaft über Haare und Kopfhaut. Wir diagnostizieren und behandeln Haarprobleme individuell." } },
      { type: "image", content: { image: "https://www.hair.com/on/demandware.static/-/Sites-hair-us-Library/default/dw25a3d287/project/loreal/brand-sites/salonsecret/americas/us/article-pictures/jessie/trichology-header.jpg" }, sideText: { uk: "Обстеження включає аналіз волосся та стану шкіри голови, щоб підібрати правильне лікування.", ru: "Обследование включает анализ волос и состояния кожи головы для подбора правильного лечения.", en: "Examination includes hair and scalp analysis to select the appropriate treatment.", de: "Die Untersuchung umfasst die Analyse von Haaren und Kopfhaut zur Auswahl der geeigneten Behandlung." } },
      { type: "text", content: { uk: "Ми застосовуємо сучасні методи відновлення волосся та лікування випадіння.", ru: "Мы применяем современные методы восстановления волос и лечения выпадения.", en: "We use modern methods for hair restoration and treatment of hair loss.", de: "Wir verwenden moderne Methoden zur Wiederherstellung von Haaren und Behandlung von Haarausfall." } },
      { type: "heading", content: { uk: "Показання", ru: "Показания", en: "Indications", de: "Indikationen" } },
      { type: "text", content: { uk: "Випадіння волосся, лупа, ламкість та сухість волосся.", ru: "Выпадение волос, перхоть, ломкость и сухость волос.", en: "Hair loss, dandruff, brittleness and dryness of hair.", de: "Haarausfall, Schuppen, Brüchigkeit und Trockenheit der Haare." } },
      { type: "text", content: { uk: "Проблеми зі шкірою голови: подразнення, свербіж, жирність або сухість.", ru: "Проблемы с кожей головы: раздражение, зуд, жирность или сухость.", en: "Scalp problems: irritation, itching, oily or dry scalp.", de: "Probleme der Kopfhaut: Reizung, Juckreiz, fettige oder trockene Kopfhaut." } },
      { type: "image", content: { image: "https://www.thehairlossclinic.com/wp-content/uploads/2020/03/trichology-post.jpg" }, sideText: { uk: "Індивідуальний план лікування включає мезотерапію, маски, вітамінні комплекси та апаратні процедури.", ru: "Индивидуальный план лечения включает мезотерапию, маски, витаминные комплексы и аппаратные процедуры.", en: "Individual treatment plan includes mesotherapy, masks, vitamin complexes, and hardware procedures.", de: "Individueller Behandlungsplan umfasst Mesotherapie, Masken, Vitaminkomplexe und apparative Verfahren." } },
      { type: "text", content: { uk: "Регулярні огляди допомагають контролювати ефективність процедур.", ru: "Регулярные осмотры помогают контролировать эффективность процедур.", en: "Regular check-ups help monitor procedure effectiveness.", de: "Regelmäßige Kontrollen helfen, die Wirksamkeit der Verfahren zu überwachen." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Комплексний підхід до здоров’я волосся та шкіри голови.", ru: "Комплексный подход к здоровью волос и кожи головы.", en: "Comprehensive approach to hair and scalp health.", de: "Ganzheitlicher Ansatz für Haar- und Kopfhautgesundheit." } },
      { type: "text", content: { uk: "Сучасні методики лікування та відновлення волосся.", ru: "Современные методики лечения и восстановления волос.", en: "Modern methods of hair treatment and restoration.", de: "Moderne Methoden der Haarbehandlung und -wiederherstellung." } },
      { type: "text", content: { uk: "Безболісні процедури, комфорт для пацієнта.", ru: "Безболезненные процедуры, комфорт для пациента.", en: "Painless procedures, patient comfort.", de: "Schmerzfreie Verfahren, Komfort für den Patienten." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Дотримуватися призначеного плану лікування та рекомендацій лікаря.", ru: "Соблюдать назначенный план лечения и рекомендации врача.", en: "Follow the prescribed treatment plan and doctor's recommendations.", de: "Befolgen Sie den vorgeschriebenen Behandlungsplan und die Empfehlungen des Arztes." } },
      { type: "text", content: { uk: "Уникати самостійного застосування медичних препаратів без консультації.", ru: "Избегать самостоятельного применения медицинских препаратов без консультации.", en: "Avoid self-administration of medical products without consultation.", de: "Vermeiden Sie die Selbstanwendung medizinischer Produkte ohne Beratung." } },
      { type: "text", content: { uk: "Підтримувати здоровий спосіб життя для кращого ефекту процедур.", ru: "Поддерживать здоровый образ жизни для лучшего эффекта процедур.", en: "Maintain a healthy lifestyle for better procedure outcomes.", de: "Pflegen Sie einen gesunden Lebensstil für bessere Ergebnisse der Verfahren." } }
    ],
    faqs: ["faq8"],
    doctors: ["doctor1", "doctor5"],
    subservices: ["sub13", "sub14"]
  },

  {
    id: "service8",
    title: {
      uk: "Мезотерапія",
      ru: "Мезотерапия",
      en: "Mesotherapy",
      de: "Mesotherapie"
    },
    slug: "mesotherapy",
    mainImage: "https://re-age.ru/wp-content/uploads/2021/04/ineczii-botulotoksina-1.jpg",
    content: [
      { type: "heading", content: { uk: "Що таке мезотерапія", ru: "Что такое мезотерапия", en: "What is Mesotherapy", de: "Was ist Mesotherapie" } },
      { type: "text", content: { uk: "Мезотерапія – це ін’єкційне введення вітамінів, мінералів та активних речовин у шкіру для омолодження та відновлення.", ru: "Мезотерапия – это инъекционное введение витаминов, минералов и активных веществ в кожу для омоложения и восстановления.", en: "Mesotherapy is the injection of vitamins, minerals, and active substances into the skin for rejuvenation and restoration.", de: "Mesotherapie ist die Injektion von Vitaminen, Mineralien und Wirkstoffen in die Haut zur Verjüngung und Regeneration." } },
      { type: "image", content: { image: "https://64.media.tumblr.com/f63997ebec2b8336aeebe7be48ad32d5/tumblr_inline_p7qittEzOE1sye2q3_500.jpg" }, sideText: { uk: "Процедура стимулює вироблення колагену та покращує пружність шкіри.", ru: "Процедура стимулирует выработку коллагена и улучшает упругость кожи.", en: "The procedure stimulates collagen production and improves skin elasticity.", de: "Das Verfahren regt die Kollagenproduktion an und verbessert die Hautelastizität." } },
      { type: "text", content: { uk: "Мезотерапія ефективна для обличчя, шиї, декольте та рук.", ru: "Мезотерапия эффективна для лица, шеи, декольте и рук.", en: "Mesotherapy is effective for face, neck, décolleté, and hands.", de: "Mesotherapie ist wirksam für Gesicht, Hals, Dekolleté und Hände." } },
      { type: "heading", content: { uk: "Показання", ru: "Показания", en: "Indications", de: "Indikationen" } },
      { type: "text", content: { uk: "Сухість шкіри, втрата пружності, зморшки, пігментація.", ru: "Сухость кожи, потеря упругости, морщины, пигментация.", en: "Dry skin, loss of elasticity, wrinkles, pigmentation.", de: "Trockene Haut, Elastizitätsverlust, Falten, Pigmentierung." } },
      { type: "text", content: { uk: "Після процедури шкіра виглядає більш свіжою та підтягнутою.", ru: "После процедуры кожа выглядит более свежей и подтянутой.", en: "After the procedure, the skin looks fresher and firmer.", de: "Nach der Behandlung sieht die Haut frischer und straffer aus." } },
      { type: "image", content: { image: "https://tlsclinic.ru/wp-content/uploads/2022/06/diploma.webp" }, sideText: { uk: "Використовуються сертифіковані мезококтейлі для досягнення максимального ефекту.", ru: "Используются сертифицированные мезококтейли для достижения максимального эффекта.", en: "Certified meso-cocktails are used to achieve maximum effect.", de: "Zertifizierte Meso-Cocktails werden verwendet, um maximale Wirkung zu erzielen." } },
      { type: "text", content: { uk: "Процедура безболісна, можливе легке почервоніння після ін’єкцій.", ru: "Процедура безболезненна, возможное легкое покраснение после инъекций.", en: "The procedure is painless, slight redness may appear after injections.", de: "Die Behandlung ist schmerzfrei, leichte Rötung nach Injektionen möglich." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Швидкий видимий результат, покращення структури шкіри та тонусу.", ru: "Быстрый видимый результат, улучшение структуры кожи и тонуса.", en: "Quick visible results, improved skin structure and tone.", de: "Schnelle sichtbare Ergebnisse, verbesserte Hautstruktur und -tonus." } },
      { type: "text", content: { uk: "Комплексний вплив на шкіру: зволоження, живлення, стимуляція колагену.", ru: "Комплексное воздействие на кожу: увлажнение, питание, стимуляция коллагена.", en: "Comprehensive skin effect: hydration, nutrition, collagen stimulation.", de: "Umfassende Hautwirkung: Feuchtigkeit, Ernährung, Kollagenstimulation." } },
      { type: "text", content: { uk: "Мінімальний період реабілітації та комфорт під час процедури.", ru: "Минимальный период реабилитации и комфорт во время процедуры.", en: "Minimal recovery period and comfort during procedure.", de: "Minimale Erholungszeit und Komfort während der Behandlung." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Дотримуватися рекомендацій спеціаліста після процедур для максимального ефекту.", ru: "Соблюдать рекомендации специалиста после процедур для максимального эффекта.", en: "Follow specialist recommendations after procedures for maximum effect.", de: "Befolgen Sie die Empfehlungen des Spezialisten nach der Behandlung für maximale Wirkung." } },
      { type: "text", content: { uk: "Регулярні курси процедур для підтримки результату та профілактики старіння шкіри.", ru: "Регулярные курсы процедур для поддержания результата и профилактики старения кожи.", en: "Regular courses of procedures to maintain results and prevent skin aging.", de: "Regelmäßige Behandlungszyklen zur Erhaltung der Ergebnisse und Vorbeugung von Hautalterung." } },
      { type: "text", content: { uk: "Використовувати якісну косметику для підтримки ефекту між процедурами.", ru: "Использовать качественную косметику для поддержания эффекта между процедурами.", en: "Use high-quality cosmetics to maintain effect between procedures.", de: "Verwenden Sie hochwertige Kosmetik, um die Wirkung zwischen den Behandlungen zu erhalten." } },
      { type: "text", content: { uk: "Мезотерапія підходить для будь-якого типу шкіри та віку пацієнта.", ru: "Мезотерапия подходит для любого типа кожи и возраста пациента.", en: "Mesotherapy is suitable for all skin types and patient ages.", de: "Mesotherapie ist für alle Hauttypen und Altersgruppen geeignet." } }
    ],
    faqs: ["faq9"],
    doctors: ["doctor2", "doctor6"],
    subservices: ["sub15", "sub16"]
  },

  {
    id: "service9",
    title: {
      uk: "Біоревіталізація / Біорепарація",
      ru: "Биоревитализация / Биорепарация",
      en: "Biorevitalization / Bioreparation",
      de: "Biorevitalisierung / Bioreparatur"
    },
    slug: "biorevitalizacia-bioreparacia",
    mainImage: "https://cdn.swoop.ge/ImagesStorage/a5a285a4-2cb5-4c98-a9d3-5a32e70ed90f.png",
    content: [
      { type: "heading", content: { uk: "Що таке біоревіталізація", ru: "Что такое биоревитализация", en: "What is Biorevitalization", de: "Was ist Biorevitalisierung" } },
      { type: "text", content: { uk: "Біоревіталізація – це введення гіалуронової кислоти та активних компонентів у шкіру для глибокого зволоження та відновлення.", ru: "Биоревитализация – это введение гиалуроновой кислоты и активных компонентов в кожу для глубокого увлажнения и восстановления.", en: "Biorevitalization is the injection of hyaluronic acid and active components into the skin for deep hydration and restoration.", de: "Biorevitalisierung ist die Injektion von Hyaluronsäure und aktiven Komponenten in die Haut zur tiefen Hydratation und Regeneration." } },
      { type: "image", content: { image: "https://www.classic-hairdoc.de/wp-content/uploads/2021/05/methoden-mesotherapie.jpg" }, sideText: { uk: "Процедура стимулює вироблення колагену та покращує текстуру шкіри.", ru: "Процедура стимулирует выработку коллагена и улучшает текстуру кожи.", en: "The procedure stimulates collagen production and improves skin texture.", de: "Die Behandlung regt die Kollagenproduktion an und verbessert die Hautstruktur." } },
      { type: "text", content: { uk: "Біорепарація сприяє регенерації шкіри та відновленню її природного тонусу.", ru: "Биорепарация способствует регенерации кожи и восстановлению её природного тонуса.", en: "Bioreparation promotes skin regeneration and restores its natural tone.", de: "Bioreparatur fördert die Hautregeneration und stellt den natürlichen Tonus wieder her." } },
      { type: "heading", content: { uk: "Показання", ru: "Показания", en: "Indications", de: "Indikationen" } },
      { type: "text", content: { uk: "Суха та тьмяна шкіра, зморшки, втрата пружності, пігментація.", ru: "Сухая и тусклая кожа, морщины, потеря упругости, пигментация.", en: "Dry and dull skin, wrinkles, loss of elasticity, pigmentation.", de: "Trockene und fahle Haut, Falten, Elastizitätsverlust, Pigmentierung." } },
      { type: "text", content: { uk: "Після процедури шкіра виглядає свіжою та підтягнутою.", ru: "После процедуры кожа выглядит свежей и подтянутой.", en: "After the procedure, the skin looks fresh and firm.", de: "Nach der Behandlung sieht die Haut frisch und straff aus." } },
      { type: "image", content: { image: "https://plus.unsplash.com/photo-1588776814546-0b4d1b3d0de4?q=80&w=1740" }, sideText: { uk: "Використовуються сертифіковані препарати для максимального ефекту.", ru: "Используются сертифицированные препараты для максимального эффекта.", en: "Certified products are used for maximum effect.", de: "Zertifizierte Präparate werden für maximale Wirkung verwendet." } },
      { type: "text", content: { uk: "Процедура безболісна, можливе легке почервоніння після ін’єкцій.", ru: "Процедура безболезненна, возможное легкое покраснение после инъекций.", en: "The procedure is painless, slight redness may occur after injections.", de: "Die Behandlung ist schmerzfrei, leichte Rötung nach Injektionen möglich." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Глибоке зволоження та відновлення структури шкіри.", ru: "Глубокое увлажнение и восстановление структуры кожи.", en: "Deep hydration and restoration of skin structure.", de: "Tiefe Hydratation und Wiederherstellung der Hautstruktur." } },
      { type: "text", content: { uk: "Покращення пружності, тонусу та кольору обличчя.", ru: "Улучшение упругости, тонуса и цвета лица.", en: "Improvement of elasticity, tone, and complexion.", de: "Verbesserung von Elastizität, Tonus und Teint." } },
      { type: "text", content: { uk: "Мінімальний реабілітаційний період та комфорт під час процедури.", ru: "Минимальный реабилитационный период и комфорт во время процедуры.", en: "Minimal recovery period and comfort during the procedure.", de: "Minimale Erholungszeit und Komfort während der Behandlung." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Дотримуватися порад спеціаліста після процедур для збереження ефекту.", ru: "Следовать рекомендациям специалиста после процедур для сохранения эффекта.", en: "Follow specialist recommendations after procedures to maintain effect.", de: "Befolgen Sie die Empfehlungen des Spezialisten nach der Behandlung, um die Wirkung zu erhalten." } },
      { type: "text", content: { uk: "Регулярні процедури для підтримки здорового вигляду та молодості шкіри.", ru: "Регулярные процедуры для поддержания здорового вида и молодости кожи.", en: "Regular procedures to maintain healthy and youthful skin.", de: "Regelmäßige Behandlungen zur Erhaltung einer gesunden und jugendlichen Haut." } },
      { type: "text", content: { uk: "Використання якісної косметики між процедурами покращує ефект.", ru: "Использование качественной косметики между процедурами улучшает эффект.", en: "Using high-quality cosmetics between procedures enhances effect.", de: "Die Verwendung hochwertiger Kosmetik zwischen den Behandlungen verbessert die Wirkung." } },
      { type: "text", content: { uk: "Біоревіталізація / біорепарація підходить для будь-якого типу шкіри та віку пацієнта.", ru: "Биоревитализация / биорепарация подходит для любого типа кожи и возраста пациента.", en: "Biorevitalization / bioreparation is suitable for all skin types and patient ages.", de: "Biorevitalisierung / Bioreparatur ist für alle Hauttypen und Altersgruppen geeignet." } }
    ],
    faqs: ["faq10"],
    doctors: ["doctor3", "doctor5"],
    subservices: ["sub17", "sub18"]
  },

  {
    id: "service10",
    title: {
      uk: "Лазерна епіляція",
      ru: "Лазерная эпиляция",
      en: "Laser Hair Removal",
      de: "Laser-Haarentfernung"
    },
    slug: "lazernaya-epilyaciya",
    mainImage: "https://plus.unsplash.com/premium_photo-1661726996340-8398be0d48ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що таке лазерна епіляція", ru: "Что такое лазерная эпиляция", en: "What is Laser Hair Removal", de: "Was ist Laser-Haarentfernung" } },
      { type: "text", content: { uk: "Лазерна епіляція – це безпечне видалення небажаного волосся за допомогою лазерного випромінювання.", ru: "Лазерная эпиляция – это безопасное удаление нежелательных волос с помощью лазера.", en: "Laser hair removal is a safe method of removing unwanted hair using laser technology.", de: "Laser-Haarentfernung ist eine sichere Methode zur Entfernung unerwünschter Haare mit Laser." } },
      { type: "image", content: { image: "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, sideText: { uk: "Процедура стимулює руйнування волосся без пошкодження шкіри.", ru: "Процедура разрушает волосы без повреждения кожи.", en: "The procedure destroys hair without damaging the skin.", de: "Die Behandlung zerstört Haare, ohne die Haut zu schädigen." } },
      { type: "text", content: { uk: "Підходить для будь-яких зон: обличчя, ноги, руки, бікіні.", ru: "Подходит для любых зон: лицо, ноги, руки, бикини.", en: "Suitable for all areas: face, legs, arms, bikini.", de: "Geeignet für alle Bereiche: Gesicht, Beine, Arme, Bikini." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Швидкий результат та довготривала гладкість шкіри.", ru: "Быстрый результат и длительная гладкость кожи.", en: "Fast results and long-lasting smooth skin.", de: "Schnelle Ergebnisse und langanhaltend glatte Haut." } },
      { type: "text", content: { uk: "Мінімальний дискомфорт під час процедури.", ru: "Минимальный дискомфорт во время процедуры.", en: "Minimal discomfort during the procedure.", de: "Minimales Unbehagen während der Behandlung." } },
      { type: "text", content: { uk: "Підходить для будь-якого типу волосся та шкіри.", ru: "Подходит для любого типа волос и кожи.", en: "Suitable for all hair and skin types.", de: "Geeignet für alle Haar- und Hauttypen." } },
      { type: "image", content: { image: "https://plus.unsplash.com/premium_photo-1661505071420-1f10ce4108e0?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }, sideText: { uk: "Сертифіковане обладнання гарантує безпечну та ефективну процедуру.", ru: "Сертифицированное оборудование гарантирует безопасную и эффективную процедуру.", en: "Certified equipment ensures a safe and effective procedure.", de: "Zertifizierte Geräte gewährleisten eine sichere und effektive Behandlung." } },
      { type: "text", content: { uk: "Після процедури можливе легке почервоніння, що швидко зникає.", ru: "После процедуры возможна легкая краснота, которая быстро проходит.", en: "Slight redness may occur after the procedure, which subsides quickly.", de: "Leichte Rötung kann nach der Behandlung auftreten, die schnell abklingt." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Перед процедурою бажано не видаляти волосся воском чи пінцетом.", ru: "Перед процедурой желательно не удалять волосы воском или пинцетом.", en: "Avoid waxing or plucking hair before the procedure.", de: "Vor der Behandlung sollte man Haare nicht wachsen oder zupfen." } },
      { type: "text", content: { uk: "Захист від сонця після процедури покращує ефект.", ru: "Защита от солнца после процедуры улучшает эффект.", en: "Sun protection after the procedure enhances results.", de: "Sonnenschutz nach der Behandlung verbessert die Wirkung." } },
      { type: "text", content: { uk: "Серія процедур гарантує стійкий результат.", ru: "Серия процедур гарантирует стойкий результат.", en: "A series of treatments ensures long-lasting results.", de: "Eine Serie von Behandlungen garantiert langanhaltende Ergebnisse." } },
      { type: "text", content: { uk: "Безпечна для обличчя та чутливих зон.", ru: "Безопасна для лица и чувствительных зон.", en: "Safe for face and sensitive areas.", de: "Sicher für Gesicht und empfindliche Bereiche." } },
      { type: "text", content: { uk: "Процедура проводиться кваліфікованим спеціалістом.", ru: "Процедура проводится квалифицированным специалистом.", en: "Performed by a qualified specialist.", de: "Von einem qualifizierten Spezialisten durchgeführt." } },
      { type: "text", content: { uk: "Результат помітний вже після першої процедури.", ru: "Результат заметен уже после первой процедуры.", en: "Results are noticeable after the first session.", de: "Ergebnisse sind bereits nach der ersten Behandlung sichtbar." } }
    ],
    faqs: ["faq11"],
    doctors: ["doctor3", "doctor6"],
    subservices: ["sub19", "sub20"]
  },

  {
    id: "service11",
    title: {
      uk: "Лазерне видалення розтяжок / рубців",
      ru: "Лазерное удаление растяжек / шрамов",
      en: "Laser Scar / Stretch Mark Removal",
      de: "Laserentfernung von Dehnungsstreifen / Narben"
    },
    slug: "lazernoe-udalenie-rubcov",
    mainImage: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      { type: "heading", content: { uk: "Що таке лазерне видалення розтяжок", ru: "Что такое лазерное удаление растяжек", en: "What is Laser Stretch Mark Removal", de: "Was ist Laser-Dehnungsstreifenentfernung" } },
      { type: "text", content: { uk: "Процедура спрямована на відновлення структури шкіри та зменшення видимості рубців і розтяжок.", ru: "Процедура направлена на восстановление структуры кожи и уменьшение видимости шрамов и растяжек.", en: "The procedure restores skin structure and reduces the visibility of scars and stretch marks.", de: "Die Behandlung stellt die Hautstruktur wieder her und reduziert das Erscheinungsbild von Narben und Dehnungsstreifen." } },
      { type: "image", content: { image: "https://static.insales-cdn.com/files/1/3937/32042849/original/rastjagi_big4.jpg" }, sideText: { uk: "Сучасний лазер впливає на глибокі шари шкіри, стимулюючи вироблення колагену.", ru: "Современный лазер воздействует на глубокие слои кожи, стимулируя выработку коллагена.", en: "Modern laser targets deep skin layers, stimulating collagen production.", de: "Moderne Laser zielen auf tiefe Hautschichten und stimulieren die Kollagenproduktion." } },
      { type: "text", content: { uk: "Процедура безпечна та ефективна для обличчя та тіла.", ru: "Процедура безопасна и эффективна для лица и тела.", en: "The procedure is safe and effective for face and body.", de: "Die Behandlung ist sicher und effektiv für Gesicht und Körper." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Зменшення видимості рубців та розтяжок, покращення текстури шкіри.", ru: "Снижение видимости шрамов и растяжек, улучшение текстуры кожи.", en: "Reduced appearance of scars and stretch marks, improved skin texture.", de: "Reduzierte Sichtbarkeit von Narben und Dehnungsstreifen, verbesserte Hauttextur." } },
      { type: "text", content: { uk: "Безпечна процедура без тривалого відновлення.", ru: "Безопасная процедура без длительного восстановления.", en: "Safe procedure without long recovery.", de: "Sichere Behandlung ohne lange Erholungszeit." } },
      { type: "text", content: { uk: "Підходить для будь-якого типу шкіри.", ru: "Подходит для любого типа кожи.", en: "Suitable for all skin types.", de: "Geeignet für alle Hauttypen." } },
      { type: "image", content: { image: "https://live.staticflickr.com/3754/33359986622_73e5028b12_c.jpg" }, sideText: { uk: "Лазер стимулює відновлення шкіри та вироблення нового колагену.", ru: "Лазер стимулирует восстановление кожи и выработку нового коллагена.", en: "Laser stimulates skin regeneration and new collagen production.", de: "Laser regt die Hautregeneration und die Kollagenproduktion an." } },
      { type: "text", content: { uk: "Результат помітний вже через кілька процедур.", ru: "Результат заметен уже через несколько процедур.", en: "Results are noticeable after a few sessions.", de: "Ergebnisse sind nach wenigen Sitzungen sichtbar." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Уникати засмаги перед та після процедури для максимального ефекту.", ru: "Избегать загара до и после процедуры для максимального эффекта.", en: "Avoid tanning before and after the procedure for best results.", de: "Vor und nach der Behandlung auf Bräunung verzichten für optimale Ergebnisse." } },
      { type: "text", content: { uk: "Регулярні процедури покращують результат та ефективність.", ru: "Регулярные процедуры улучшают результат и эффективность.", en: "Regular treatments improve results and effectiveness.", de: "Regelmäßige Behandlungen verbessern Ergebnisse und Effektivität." } },
      { type: "text", content: { uk: "Високі стандарти стерильності та безпеки під час кожної процедури.", ru: "Высокие стандарты стерильности и безопасности во время каждой процедуры.", en: "High standards of sterility and safety in every session.", de: "Hohe Standards für Sterilität und Sicherheit bei jeder Sitzung." } },
      { type: "text", content: { uk: "Консультація спеціаліста допомагає визначити оптимальний курс процедур.", ru: "Консультация специалиста помогает определить оптимальный курс процедур.", en: "Specialist consultation helps determine the optimal treatment course.", de: "Die Beratung eines Spezialisten hilft, den optimalen Behandlungsverlauf zu bestimmen." } },
      { type: "text", content: { uk: "Процедура комфортна та безболісна.", ru: "Процедура комфортная и безболезненная.", en: "The procedure is comfortable and painless.", de: "Die Behandlung ist komfortabel und schmerzlos." } },
      { type: "text", content: { uk: "Після процедури рекомендується зволоження та захист шкіри.", ru: "После процедуры рекомендуется увлажнение и защита кожи.", en: "Moisturize and protect the skin after the procedure.", de: "Nach der Behandlung sollte die Haut befeuchtet und geschützt werden." } }
    ],
    faqs: ["faq12"],
    doctors: ["doctor4", "doctor5"],
    subservices: ["sub21", "sub22"]
  },

  {
    id: "service12",
    title: {
      uk: "Фракційне омолодження RESUR-FX",
      ru: "Фракционное омоложение RESUR-FX",
      en: "Fractional Rejuvenation RESUR-FX",
      de: "Fraktionierte Verjüngung RESUR-FX"
    },
    slug: "frakcionnoe-omolozhenie-resur-fx",
    mainImage: "https://www.datocms-assets.com/44663/1616253758-resurfx-video.png",
    content: [
      { type: "heading", content: { uk: "Що таке RESUR-FX", ru: "Что такое RESUR-FX", en: "What is RESUR-FX", de: "Was ist RESUR-FX" } },
      { type: "text", content: { uk: "Фракційне омолодження RESUR-FX – сучасний метод стимуляції колагену та оновлення шкіри.", ru: "Фракционное омоложение RESUR-FX – современный метод стимуляции коллагена и обновления кожи.", en: "RESUR-FX fractional rejuvenation is a modern method to stimulate collagen and renew skin.", de: "Fraktionierte Verjüngung RESUR-FX ist eine moderne Methode zur Stimulation von Kollagen und Hauterneuerung." } },
      { type: "image", content: { image: "https://skinsation.ie/cdn/shop/articles/ResurfX.png?v=1739460595&width=1000" }, sideText: { uk: "Процедура вирівнює текстуру шкіри, зменшує зморшки та покращує тон.", ru: "Процедура выравнивает текстуру кожи, уменьшает морщины и улучшает тон.", en: "The procedure smooths skin texture, reduces wrinkles, and improves tone.", de: "Die Behandlung glättet die Hautstruktur, reduziert Falten und verbessert den Teint." } },
      { type: "text", content: { uk: "Метод підходить для обличчя, шиї та декольте.", ru: "Метод подходит для лица, шеи и декольте.", en: "Method suitable for face, neck, and décolleté.", de: "Methode geeignet für Gesicht, Hals und Dekolleté." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Advantages", de: "Vorteile" } },
      { type: "text", content: { uk: "Створює ефект ліфтингу без хірургічного втручання.", ru: "Создает эффект лифтинга без хирургического вмешательства.", en: "Provides a lifting effect without surgery.", de: "Erzeugt einen Lifting-Effekt ohne chirurgischen Eingriff." } },
      { type: "text", content: { uk: "Зменшення зморшок та пігментації.", ru: "Уменьшение морщин и пигментации.", en: "Reduces wrinkles and pigmentation.", de: "Reduziert Falten und Pigmentierung." } },
      { type: "text", content: { uk: "Стимуляція природного вироблення колагену.", ru: "Стимуляция естественного производства коллагена.", en: "Stimulates natural collagen production.", de: "Stimuliert die natürliche Kollagenproduktion." } },
      { type: "image", content: { image: "https://theaestheticxpert.com/wp-content/uploads/2021/02/RLR-Image-2.png" }, sideText: { uk: "Безпечна процедура з мінімальним часом відновлення.", ru: "Безопасная процедура с минимальным временем восстановления.", en: "Safe procedure with minimal downtime.", de: "Sichere Behandlung mit minimaler Ausfallzeit." } },
      { type: "text", content: { uk: "Покращення тонусу та еластичності шкіри.", ru: "Улучшение тонуса и эластичности кожи.", en: "Improves skin tone and elasticity.", de: "Verbessert Hauttonus und Elastizität." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Регулярні процедури для досягнення максимального ефекту.", ru: "Регулярные процедуры для достижения максимального эффекта.", en: "Regular treatments for optimal results.", de: "Regelmäßige Behandlungen für optimale Ergebnisse." } },
      { type: "text", content: { uk: "Після процедури рекомендується використовувати зволожуючі засоби та захист від сонця.", ru: "После процедуры рекомендуется использовать увлажняющие средства и защиту от солнца.", en: "After procedure, use moisturizers and sun protection.", de: "Nach der Behandlung Feuchtigkeitscremes und Sonnenschutz verwenden." } },
      { type: "text", content: { uk: "Процедура комфортна та безболісна.", ru: "Процедура комфортная и безболезненная.", en: "The procedure is comfortable and painless.", de: "Die Behandlung ist komfortabel und schmerzlos." } },
      { type: "text", content: { uk: "Відновлення займає кілька днів, невелике почервоніння можливе.", ru: "Восстановление занимает несколько дней, возможна легкая краснота.", en: "Recovery takes a few days; mild redness may occur.", de: "Die Erholung dauert einige Tage; leichte Rötung möglich." } },
      { type: "text", content: { uk: "Ефект від процедур накопичувальний та помітний через кілька тижнів.", ru: "Эффект от процедур накопительный и заметен через несколько недель.", en: "Effects are cumulative and noticeable after a few weeks.", de: "Die Wirkung ist kumulativ und nach einigen Wochen sichtbar." } },
      { type: "text", content: { uk: "Професійна консультація допомагає підібрати оптимальний курс процедур.", ru: "Профессиональная консультация помогает подобрать оптимальный курс процедур.", en: "Professional consultation helps determine optimal treatment course.", de: "Professionelle Beratung hilft, den optimalen Behandlungsverlauf zu bestimmen." } }
    ],
    faqs: ["faq13"],
    doctors: ["doctor1", "doctor6"],
    subservices: ["sub23", "sub24"]
  },

  {
    id: "service13",
    title: {
      uk: "Інтимна косметологія",
      ru: "Интимная косметология",
      en: "Intimate Cosmetology",
      de: "Intime Kosmetik"
    },
    slug: "intimnaya-kosmetologiya",
    mainImage: "https://img.freepik.com/premium-photo/laser-bikini-hair-removal-cosmetology-women-health-intimate-hygiene-beautiful-woman-s-body-with-smooth-soft-skin-epilation-spa-concept-depilation-bikini-zone_124463-703.jpg",
    content: [
      { type: "heading", content: { uk: "Що таке інтимна косметологія", ru: "Что такое интимная косметология", en: "What is Intimate Cosmetology", de: "Was ist Intime Kosmetik" } },
      { type: "text", content: { uk: "Інтимна косметологія включає методи догляду за інтимними зонами для покращення зовнішнього вигляду та здоров’я.", ru: "Интимная косметология включает методы ухода за интимными зонами для улучшения внешнего вида и здоровья.", en: "Intimate cosmetology includes care methods for intimate areas to enhance appearance and health.", de: "Intime Kosmetik umfasst Pflegemethoden für intime Bereiche zur Verbesserung von Aussehen und Gesundheit." } },
      { type: "image", content: { image: "https://img.freepik.com/premium-photo/bikini-laser-epilation-cosmetology-hair-removal-cosmetology-procedure-laser-epilation-cosmetology-cosmetology-spa-concept_553815-103.jpg" }, sideText: { uk: "Процедури безпечні, комфортні та індивідуально підібрані.", ru: "Процедуры безопасны, комфортны и индивидуально подобраны.", en: "Procedures are safe, comfortable, and individually tailored.", de: "Behandlungen sind sicher, komfortabel und individuell angepasst." } },
      { type: "text", content: { uk: "Методи включають відбілювання, ліфтинг тканин та догляд за чутливою шкірою.", ru: "Методы включают отбеливание, лифтинг тканей и уход за чувствительной кожей.", en: "Methods include whitening, tissue lifting, and care for sensitive skin.", de: "Methoden umfassen Aufhellung, Gewebelifting und Pflege empfindlicher Haut." } },
      { type: "heading", content: { uk: "Переваги процедур", ru: "Преимущества процедур", en: "Procedure Benefits", de: "Vorteile der Verfahren" } },
      { type: "text", content: { uk: "Покращення естетики інтимних зон.", ru: "Улучшение эстетики интимных зон.", en: "Improves the aesthetics of intimate areas.", de: "Verbessert die Ästhetik der Intimbereiche." } },
      { type: "text", content: { uk: "Підвищення комфорту та впевненості пацієнта.", ru: "Повышение комфорта и уверенности пациента.", en: "Enhances comfort and patient confidence.", de: "Steigert Komfort und Selbstvertrauen des Patienten." } },
      { type: "text", content: { uk: "Безпечні ін’єкційні та апаратні методики.", ru: "Безопасные инъекционные и аппаратные методики.", en: "Safe injection and device-based methods.", de: "Sichere Injektions- und Geräteverfahren." } },
      { type: "image", content: { image: "https://img.freepik.com/premium-photo/laser-epilation-cosmetology-beauty-salon-hair-removal-procedure-laser-epilation-cosmetology-spa-hair-removal-concept-beautiful-woman-getting-hair-removing-legs_124463-677.jpg" }, sideText: { uk: "Індивідуальний підхід та конфіденційність.", ru: "Индивидуальный подход и конфиденциальность.", en: "Individual approach and confidentiality.", de: "Individueller Ansatz und Vertraulichkeit." } },
      { type: "text", content: { uk: "М’який догляд за шкірою, без подразнень.", ru: "Мягкий уход за кожей, без раздражений.", en: "Gentle skin care without irritation.", de: "Sanfte Hautpflege ohne Reizungen." } },
      { type: "text", content: { uk: "Профілактика дискомфорту та сухості шкіри.", ru: "Профилактика дискомфорта и сухости кожи.", en: "Prevents discomfort and dryness.", de: "Vorbeugung von Unbehagen und Hauttrockenheit." } },
      { type: "heading", content: { uk: "Рекомендації", ru: "Рекомендации", en: "Recommendations", de: "Empfehlungen" } },
      { type: "text", content: { uk: "Регулярні процедури для підтримки здоров’я та естетики.", ru: "Регулярные процедуры для поддержания здоровья и эстетики.", en: "Regular treatments maintain health and aesthetics.", de: "Regelmäßige Behandlungen zur Erhaltung von Gesundheit und Ästhetik." } },
      { type: "text", content: { uk: "Консультація перед процедурою обов’язкова.", ru: "Консультация перед процедурой обязательна.", en: "Consultation before treatment is mandatory.", de: "Beratung vor der Behandlung ist Pflicht." } },
      { type: "text", content: { uk: "Після процедур рекомендується дотримуватися гігієнічних рекомендацій.", ru: "После процедур рекомендуется соблюдать гигиенические рекомендации.", en: "Follow hygiene recommendations after procedures.", de: "Befolgen Sie nach der Behandlung die Hygieneempfehlungen." } },
      { type: "text", content: { uk: "Процедури комфортні та безболісні.", ru: "Процедуры комфортные и безболезненные.", en: "Procedures are comfortable and painless.", de: "Behandlungen sind komfortabel und schmerzlos." } },
      { type: "text", content: { uk: "Ми гарантуємо конфіденційність та професіоналізм на кожному етапі.", ru: "Мы гарантируем конфиденциальность и профессионализм на каждом этапе.", en: "We guarantee confidentiality and professionalism at every step.", de: "Wir garantieren Vertraulichkeit und Professionalität in jedem Schritt." } }
    ],
    faqs: ["faq14"],
    doctors: ["doctor2", "doctor5"],
    subservices: ["sub25", "sub26"]
  },

  {
    id: "service14",
    title: {
      uk: "Плазмоліфтинг",
      ru: "Плазмолифтинг",
      en: "Plasmolifting",
      de: "Plasmolifting"
    },
    slug: "plazmolifting",
    mainImage: "https://klinika.pl.ua/media/gallery/thumbnails/watermarked/4926fc20-6777-4c44-a953-82a5e275542e.large.jpg",
    content: [
      { type: "heading", content: { uk: "Що таке плазмоліфтинг", ru: "Что такое плазмолифтинг", en: "What is Plasmolifting", de: "Was ist Plasmolifting" } },
      { type: "text", content: { uk: "Плазмоліфтинг – це метод омолодження шкіри за допомогою власної плазми пацієнта, насиченої тромбоцитами.", ru: "Плазмолифтинг – это метод омоложения кожи с использованием собственной плазмы пациента, богатой тромбоцитами.", en: "Plasmolifting is a skin rejuvenation method using the patient’s own plasma enriched with platelets.", de: "Plasmolifting ist eine Methode zur Hautverjüngung mit dem eigenen, plättchenreichen Plasma des Patienten." } },
      { type: "image", content: { image: "https://ihc-russia.ru/upload/iblock/7ff/3pl3p31f5qv05s3oqkiofg1qpj1mhi9u.jpeg" }, sideText: { uk: "Процедура стимулює вироблення колагену та еластину.", ru: "Процедура стимулирует выработку коллагена и эластина.", en: "The procedure stimulates collagen and elastin production.", de: "Das Verfahren regt die Produktion von Kollagen und Elastin an." } },
      { type: "text", content: { uk: "Метод безпечний, мінімально травматичний і не викликає алергічних реакцій.", ru: "Метод безопасный, минимально травматичный и не вызывает аллергических реакций.", en: "The method is safe, minimally invasive, and does not cause allergic reactions.", de: "Die Methode ist sicher, minimalinvasiv und verursacht keine allergischen Reaktionen." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Benefits", de: "Vorteile" } },
      { type: "text", content: { uk: "Покращує тонус та пружність шкіри.", ru: "Улучшает тонус и упругость кожи.", en: "Improves skin tone and elasticity.", de: "Verbessert den Hauttonus und die Elastizität." } },
      { type: "text", content: { uk: "Зменшує дрібні зморшки та запальні процеси.", ru: "Уменьшает мелкие морщины и воспалительные процессы.", en: "Reduces fine wrinkles and inflammatory processes.", de: "Reduziert feine Falten und Entzündungsprozesse." } },
      { type: "text", content: { uk: "Прискорює регенерацію та відновлення шкіри.", ru: "Ускоряет регенерацию и восстановление кожи.", en: "Accelerates skin regeneration and recovery.", de: "Beschleunigt die Hautregeneration und Erholung." } },
      { type: "image", content: { image: "https://filler.by/wp-content/uploads/2020/07/plazmalift-dekolte-1-1024x543.png" }, sideText: { uk: "Процедура підходить для обличчя, шиї та декольте.", ru: "Процедура подходит для лица, шеи и декольте.", en: "Procedure is suitable for face, neck, and décolleté.", de: "Das Verfahren eignet sich für Gesicht, Hals und Dekolleté." } },
      { type: "text", content: { uk: "Може комбінуватися з іншими косметологічними методами для кращого ефекту.", ru: "Можно комбинировать с другими косметологическими методами для лучшего эффекта.", en: "Can be combined with other cosmetic methods for better results.", de: "Kann mit anderen kosmetischen Methoden für bessere Ergebnisse kombiniert werden." } },
      { type: "text", content: { uk: "Безпечний для всіх типів шкіри.", ru: "Безопасен для всех типов кожи.", en: "Safe for all skin types.", de: "Sicher für alle Hauttypen." } },
      { type: "heading", content: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Verfahren" } },
      { type: "text", content: { uk: "Забір невеликої кількості крові пацієнта.", ru: "Забор небольшого количества крови пациента.", en: "A small amount of patient’s blood is taken.", de: "Eine kleine Menge Blut des Patienten wird entnommen." } },
      { type: "text", content: { uk: "Обробка крові для отримання збагаченої плазми.", ru: "Обработка крови для получения обогащенной плазмы.", en: "Blood is processed to obtain platelet-rich plasma.", de: "Das Blut wird verarbeitet, um plättchenreiches Plasma zu gewinnen." } },
      { type: "text", content: { uk: "Введення плазми у проблемні зони за допомогою ін’єкцій.", ru: "Введение плазмы в проблемные зоны с помощью инъекций.", en: "Plasma is injected into problem areas.", de: "Das Plasma wird in Problemzonen injiziert." } },
      { type: "text", content: { uk: "Процедура займає від 30 до 60 хвилин.", ru: "Процедура занимает от 30 до 60 минут.", en: "Procedure lasts 30 to 60 minutes.", de: "Das Verfahren dauert 30 bis 60 Minuten." } },
      { type: "text", content: { uk: "Після процедури можливе легке почервоніння та набряк, які швидко проходять.", ru: "После процедуры возможна легкая покраснение и отек, которые быстро проходят.", en: "Slight redness and swelling may occur but subside quickly.", de: "Leichte Rötung und Schwellung können auftreten, klingen aber schnell ab." } }
    ],
    faqs: ["faq15"],
    doctors: ["doctor1", "doctor3"],
    subservices: ["sub27", "sub28"]
  },

  {
    id: "service15",
    title: {
      uk: "Склеротерапія",
      ru: "Склеротерапия",
      en: "Sclerotherapy",
      de: "Sklerotherapie"
    },
    slug: "sclerotherapy",
    mainImage: "https://www.veinhealth.com.au/wp-content/uploads/2021/03/Blog-Hyperpigmentation-after-Sclerotherapy-feat.jpg",
    content: [
      { type: "heading", content: { uk: "Що таке склеротерапія", ru: "Что такое склеротерапия", en: "What is Sclerotherapy", de: "Was ist Sklerotherapie" } },
      { type: "text", content: { uk: "Склеротерапія – це безопераційний метод лікування варикозного розширення вен за допомогою введення спеціального розчину.", ru: "Склеротерапия – это безоперационный метод лечения варикозного расширения вен с помощью введения специального раствора.", en: "Sclerotherapy is a non-surgical method for treating varicose veins using a special solution injection.", de: "Sklerotherapie ist eine nicht-chirurgische Methode zur Behandlung von Krampfadern durch Injektion einer speziellen Lösung." } },
      { type: "image", content: { image: "https://surfacemedicalesthetics.com/wp-content/uploads/2021/06/Possible-Side-Effects-of-Sclerotherapy-You-Should-Know-scaled-1.jpeg" }, sideText: { uk: "Процедура спрямована на закриття уражених вен та покращення кровообігу.", ru: "Процедура направлена на закрытие пораженных вен и улучшение кровообращения.", en: "The procedure targets closure of affected veins and improves circulation.", de: "Das Verfahren zielt auf den Verschluss betroffener Venen und die Verbesserung der Durchblutung ab." } },
      { type: "text", content: { uk: "Мінімальна травматичність, без хірургічного втручання.", ru: "Минимальная травматичность, без хирургического вмешательства.", en: "Minimal trauma, no surgical intervention.", de: "Minimale Traumatisierung, kein chirurgischer Eingriff." } },
      { type: "heading", content: { uk: "Переваги", ru: "Преимущества", en: "Benefits", de: "Vorteile" } },
      { type: "text", content: { uk: "Швидке відновлення, покращення естетичного вигляду ніг.", ru: "Быстрое восстановление, улучшение эстетического вида ног.", en: "Fast recovery, improved aesthetic appearance of legs.", de: "Schnelle Erholung, verbesserte ästhetische Erscheinung der Beine." } },
      { type: "text", content: { uk: "Безболісна процедура та мінімальні ризики.", ru: "Безболезненная процедура и минимальные риски.", en: "Painless procedure with minimal risks.", de: "Schmerzfreie Behandlung mit minimalem Risiko." } },
      { type: "text", content: { uk: "Покращує тонус та еластичність вен.", ru: "Улучшает тонус и эластичность вен.", en: "Improves tone and elasticity of veins.", de: "Verbessert Tonus und Elastizität der Venen." } },
      { type: "image", content: { image: "https://draltaf.com.au/wp-content/uploads/ALTA-sclerotherapy-2-case-study-006.jpg" }, sideText: { uk: "Підходить для лікування судинних зірочок та варикозу.", ru: "Подходит для лечения сосудистых звездочек и варикоза.", en: "Suitable for treatment of spider veins and varicose veins.", de: "Geeignet zur Behandlung von Besenreisern und Krampfadern." } },
      { type: "text", content: { uk: "Застосовується для верхніх і нижніх кінцівок.", ru: "Применяется для верхних и нижних конечностей.", en: "Used for upper and lower limbs.", de: "Wird für obere und untere Extremitäten angewendet." } },
      { type: "text", content: { uk: "Процедура триває від 20 до 45 хвилин.", ru: "Процедура длится от 20 до 45 минут.", en: "Procedure lasts 20 to 45 minutes.", de: "Die Behandlung dauert 20 bis 45 Minuten." } },
      { type: "text", content: { uk: "Можливе легке почервоніння та набряк, що швидко минає.", ru: "Возможны легкое покраснение и отёк, которые быстро проходят.", en: "Mild redness and swelling may occur but resolve quickly.", de: "Leichte Rötung und Schwellung können auftreten, klingen jedoch schnell ab." } },
      { type: "heading", content: { uk: "Підготовка та рекомендації", ru: "Подготовка и рекомендации", en: "Preparation and Recommendations", de: "Vorbereitung und Empfehlungen" } },
      { type: "text", content: { uk: "За 24 години до процедури уникати алкоголю та сильних фізичних навантажень.", ru: "За 24 часа до процедуры избегайте алкоголя и интенсивных физических нагрузок.", en: "Avoid alcohol and intense physical activity 24 hours before the procedure.", de: "Vermeiden Sie 24 Stunden vor der Behandlung Alkohol und intensive körperliche Aktivitäten." } },
      { type: "text", content: { uk: "Носити компресійні панчохи після процедури для кращого ефекту.", ru: "Носить компрессионные чулки после процедуры для лучшего эффекта.", en: "Wear compression stockings after procedure for better effect.", de: "Tragen Sie nach der Behandlung Kompressionsstrümpfe für besseren Effekt." } },
      { type: "text", content: { uk: "Регулярні профілактичні огляди допомагають уникнути рецидивів.", ru: "Регулярные профилактические осмотры помогают избежать рецидивов.", en: "Regular preventive check-ups help prevent recurrence.", de: "Regelmäßige Vorsorgeuntersuchungen helfen, Rückfälle zu vermeiden." } },
      { type: "text", content: { uk: "Склеротерапія проводиться тільки кваліфікованим фахівцем.", ru: "Склеротерапия проводится только квалифицированным специалистом.", en: "Sclerotherapy should only be performed by a qualified specialist.", de: "Sklerotherapie sollte nur von einem qualifizierten Facharzt durchgeführt werden." } }
    ],
    faqs: ["faq16"],
    doctors: ["doctor2", "doctor4"],
    subservices: ["sub29", "sub30"]
  },


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
      { uk: "Трихолог", ru: "Трихолог", en: "Trichologist", de: "Trichologe" },
      { uk: "Доглядові процедури за шкірою обличчя", ru: "Уходовые процедуры за кожей лица", en: "Facial Skin Care Procedures", de: "Pflegeverfahren für Gesichtshaut" },
      { uk: "IPL терапія", ru: "IPL терапия", en: "IPL Therapy", de: "IPL Therapie" },
      { uk: "Лікування Акне та Постакне", ru: "Лечение Акне и Постакне", en: "Acne and Post-Acne Treatment", de: "Behandlung von Akne und Postakne" }
    ],
    education: [
      { uk: "Національний медичний університет", ru: "Национальный медицинский университет", en: "National Medical University", de: "Nationales Medizinisches Universität" },
      { uk: "Національний медичний університет", ru: "Национальный медицинский университет", en: "National Medical University", de: "Nationales Medizinisches Universität" },
      { uk: "Київський медичний інститут", ru: "Киевский медицинский институт", en: "Kyiv Medical Institute", de: "Kiew Medizinisches Institut" },
      { uk: "Львівський медичний університет", ru: "Львовский медицинский университет", en: "Lviv Medical University", de: "Lwiwer Medizinische Universität" }

    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=928",
    services: ["service1"],
    subservices: ["sub1"],
    shortName: { uk: "Тетяни", ru: "Татьяне", en: "Tetyana", de: "Tetyana" }
  },
  {
    id: "doctor2",
    slug: "ivanov-serhii",
    fullName: {
      uk: "Іванов Сергій Миколайович",
      ru: "Иванов Сергей Николаевич",
      en: "Ivanov Serhii Mykolayovych",
      de: "Ivanov Serhii Nikolajewitsch"
    },
    position: {
      uk: "Дерматолог, Косметолог",
      ru: "Дерматолог, Косметолог",
      en: "Dermatologist, Cosmetologist",
      de: "Dermatologe, Kosmetologe"
    },
    specializations: [
      { uk: "Доглядові процедури за шкірою обличчя", ru: "Уходовые процедуры за кожей лица", en: "Facial Skin Care Procedures", de: "Pflegeverfahren für Gesichtshaut" },
      { uk: "Доглядові процедури по тілу", ru: "Уходовые процедуры по телу", en: "Body Skin Care Procedures", de: "Pflegeverfahren für den Körper" },
      { uk: "Масаж обличчя", ru: "Массаж лица", en: "Facial Massage", de: "Gesichtsmassage" },
      { uk: "Комбінована чистка обличчя,спини", ru: "Комбинированная чистка лица и спины", en: "Combined Facial and Back Cleaning", de: "Kombinierte Gesichts- und Rückenreinigung" },
      { uk: "Лазерна епіляція", ru: "Лазерная эпиляция", en: "Laser Hair Removal", de: "Laser-Haarentfernung" }
    ],
    education: [
      { uk: "Київський медичний університет", ru: "Киевский медицинский университет", en: "Kyiv Medical University", de: "Kiew Medizinische Universität" },
      { uk: "Харківський медичний університет", ru: "Харьковский медицинский университет", en: "Kharkiv Medical University", de: "Charkiwer Medizinische Universität" },
      { uk: "Інститут косметології", ru: "Институт косметологии", en: "Institute of Cosmetology", de: "Institut für Kosmetologie" }
    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=928",
    services: ["service2", "service5"],
    subservices: ["sub3", "sub6"],
    shortName: { uk: "Сергія", ru: "Сергею", en: "Serhii", de: "Serhii" }
  },
  {
    id: "doctor3",
    slug: "petrova-olena",
    fullName: {
      uk: "Петрова Олена Володимирівна",
      ru: "Петрова Елена Владимировна",
      en: "Petrova Olena Volodymyrivna",
      de: "Petrova Olena Wladimiriewna"
    },
    position: {
      uk: "Косметолог, Трихолог",
      ru: "Косметолог, Трихолог",
      en: "Cosmetologist, Trichologist",
      de: "Kosmetologin, Trichologin"
    },
    specializations: [
      { uk: "Пілінги", ru: "Пилинги", en: "Peelings", de: "Peelings" },
      { uk: "Мезотерапія", ru: "Мезотерапия", en: "Mesotherapy", de: "Mesotherapie" },
      { uk: "Біоревіталізація / Біорепарація", ru: "Биоревитализация / Биорепарация", en: "Biorevitalization / Bioreparation", de: "Biorevitalisierung / Bioreparatur" },
      { uk: "Фотоомолодження", ru: "Фотоомоложение", en: "Photo Rejuvenation", de: "Fotoverjüngung" },
      { uk: "Контурна пластика губ", ru: "Контурная пластика губ", en: "Lip Contour Plastic", de: "Konturplastik der Lippen" }
    ],
    education: [
      { uk: "Львівський національний медичний університет", ru: "Львовский национальный медицинский университет", en: "Lviv National Medical University", de: "Lviv Nationale Medizinische Universität" },
      { uk: "Інститут дерматології", ru: "Институт дерматологии", en: "Institute of Dermatology", de: "Institut für Dermatologie" },
      { uk: "Національна медична академія післядипломної освіти", ru: "Национальная медицинская академия последипломного образования", en: "National Medical Academy of Postgraduate Education", de: "Nationale Medizinische Akademie für postgraduale Ausbildung" },
      { uk: "Інститут трихології", ru: "Институт трихологии", en: "Institute of Trichology", de: "Institut für Trichologie" },
      { uk: "Інститут дерматовенерології", ru: "Институт дерматовенерологии", en: "Institute of Dermatovenereology", de: "Institut für Dermatovenerologie" },
      { uk: "Міжнародний інститут лазерної косметології", ru: "Международный институт лазерной косметологии", en: "International Institute of Laser Cosmetology", de: "Internationales Institut für Laser-Kosmetologie" },
    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=928",
    services: ["service7", "service6"],
    subservices: ["sub5", "sub7"],
    shortName: { uk: "Олени", ru: "Елене", en: "Olena", de: "Olena" }
  },
  {
    id: "doctor4",
    slug: "kuznetsov-andrii",
    fullName: {
      uk: "Кузнецов Андрій Сергійович",
      ru: "Кузнецов Андрей Сергеевич",
      en: "Kuznetsov Andrii Serhiyovych",
      de: "Kuznetsov Andrei Sergejewitsch"
    },
    position: {
      uk: "Дерматолог, Лікар лазерної косметології",
      ru: "Дерматолог, Врач лазерной косметологии",
      en: "Dermatologist, Laser Cosmetology Specialist",
      de: "Dermatologe, Laser-Kosmetologie Arzt"
    },
    specializations: [
      { uk: "Лазерна епіляція", ru: "Лазерная эпиляция", en: "Laser Hair Removal", de: "Laser-Haarentfernung" },
      { uk: "IPL терапія", ru: "IPL терапия", en: "IPL Therapy", de: "IPL Therapie" },
      { uk: "Термоліфтинг", ru: "Термолифтинг", en: "Thermolifting", de: "Thermolifting" },
      { uk: "Лікування Куперозу / Розацеа", ru: "Лечение Купероза / Розацеа", en: "Treatment of Couperose / Rosacea", de: "Behandlung von Couperose / Rosazea" },
      { uk: "Лікування Пігментації", ru: "Лечение Пигментации", en: "Pigmentation Treatment", de: "Behandlung von Pigmentierung" }
    ],
    education: [
      { uk: "Національний університет охорони здоров’я", ru: "Национальный университет здравоохранения", en: "National Health University", de: "Nationales Gesundheitsuniversität" },
      { uk: "Європейська школа естетичної медицини", ru: "Европейская школа эстетической медицины", en: "European School of Aesthetic Medicine", de: "Europäische Schule für ästhetische Medizin" },
      { uk: "Інститут мезотерапії та плазмотерапії", ru: "Институт мезотерапии и плазмотерапии", en: "Institute of Mesotherapy and Plasmotherapy", de: "Institut für Mesotherapie und Plasmatherapie" },
      { uk: "Академія косметології та естетичної медицини", ru: "Академия косметологии и эстетической медицины", en: "Academy of Cosmetology and Aesthetic Medicine", de: "Akademie für Kosmetologie und ästhetische Medizin" },
    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=928",
    services: ["service3", "service14"],
    subservices: ["sub4", "sub28"],
    shortName: { uk: "Андрія", ru: "Андрею", en: "Andrii", de: "Andrii" }
  },

  {
    id: "doctor5",
    slug: "moroz-ivan",
    fullName: {
      uk: "Мороз Іван Петрович",
      ru: "Мороз Иван Петрович",
      en: "Moroz Ivan Petrovych",
      de: "Moroz Ivan Petrowitsch"
    },
    position: {
      uk: "Косметолог, Спеціаліст з контурної пластики",
      ru: "Косметолог, Специалист по контурной пластике",
      en: "Cosmetologist, Contour Plastic Specialist",
      de: "Kosmetolog, Spezialist für Konturplastik"
    },
    specializations: [
      { uk: "Контурна пластика губ", ru: "Контурная пластика губ", en: "Lip Contour Plastic", de: "Konturplastik der Lippen" },
      { uk: "Біоревіталізація / Біорепарація", ru: "Биоревитализация / Биорепарация", en: "Biorevitalization / Bioreparation", de: "Biorevitalisierung / Bioreparatur" },
      { uk: "Мезотерапія", ru: "Мезотерапия", en: "Mesotherapy", de: "Mesotherapie" },
      { uk: "Доглядові процедури за шкірою обличчя", ru: "Уходовые процедуры за кожей лица", en: "Facial Skin Care Procedures", de: "Pflegeverfahren für Gesichtshaut" },
      { uk: "Масаж обличчя", ru: "Массаж лица", en: "Facial Massage", de: "Gesichtsmassage" }
    ],
    education: [
      { uk: "Національний медичний університет", ru: "Национальный медицинский университет", en: "National Medical University", de: "Nationales Medizinisches Universität" },
      { uk: "Інститут косметології", ru: "Институт косметологии", en: "Institute of Cosmetology", de: "Institut für Kosmetologie" },
      { uk: "Міжнародна школа дерматології", ru: "Международная школа дерматологии", en: "International School of Dermatology", de: "Internationale Schule der Dermatologie" },
      { uk: "Інститут контурної пластики", ru: "Институт контурной пластики", en: "Institute of Contour Plastic Surgery", de: "Institut für Konturplastik" },
      { uk: "Інститут ботулінічної терапії", ru: "Институт ботулинотерапии", en: "Institute of Botulinum Therapy", de: "Institut für Botulinumtherapie" },

    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1588776814546-4be62e1f28b6?q=80&w=928",
    services: ["service4", "service6"],
    subservices: ["sub5", "sub8"],
    shortName: { uk: "Івана", ru: "Ивану", en: "Ivan", de: "Ivan" }
  },
  {
    id: "doctor6",
    slug: "petrova-sveta",
    fullName: {
      uk: "Петрова Світлана Олександрівна",
      ru: "Петрова Светлана Александровна",
      en: "Petrova Svitlana Oleksandrivna",
      de: "Petrova Swetlana Alexandrowna"
    },
    position: {
      uk: "Косметолог, Дерматолог",
      ru: "Косметолог, Дерматолог",
      en: "Cosmetologist, Dermatologist",
      de: "Kosmetologin, Dermatologin"
    },
    specializations: [
      { uk: "Лікування Куперозу / Розацеа", ru: "Лечение Купероза / Розацеа", en: "Treatment of Couperose / Rosacea", de: "Behandlung von Couperose / Rosazea" },
      { uk: "Лікування Пігментації", ru: "Лечение Пигментации", en: "Pigmentation Treatment", de: "Behandlung von Pigmentierung" },
      { uk: "Лікування Акне та Постакне", ru: "Лечение Акне и Постакне", en: "Acne and Post-Acne Treatment", de: "Behandlung von Akne und Postakne" },
      { uk: "IPL терапія", ru: "IPL терапия", en: "IPL Therapy", de: "IPL Therapie" },
      { uk: "Фотоомолодження", ru: "Фотоомоложение", en: "Photo Rejuvenation", de: "Fotoverjüngung" }
    ],
    education: [
      { uk: "Київський медичний університет", ru: "Киевский медицинский университет", en: "Kyiv Medical University", de: "Kiew Medizinische Universität" },
      { uk: "Інститут дерматології", ru: "Институт дерматологии", en: "Institute of Dermatology", de: "Institut für Dermatologie" }
    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1590080873602-b6f9076c2f90?q=80&w=928",
    services: ["service5", "service14"],
    subservices: ["sub9", "sub11"],
    shortName: { uk: "Світлани", ru: "Светлане", en: "Svitlana", de: "Svitlana" }
  },
  {
    id: "doctor7",
    slug: "ivanenko-dmytro",
    fullName: {
      uk: "Іваненко Дмитро Сергійович",
      ru: "Иваненко Дмитрий Сергеевич",
      en: "Ivanenko Dmytro Serhiyovych",
      de: "Ivanenko Dmitri Sergejewitsch"
    },
    position: {
      uk: "Масажист, Косметолог",
      ru: "Массажист, Косметолог",
      en: "Masseuse, Cosmetologist",
      de: "Masseur, Kosmetologe"
    },
    specializations: [
      { uk: "Масаж обличчя", ru: "Массаж лица", en: "Facial Massage", de: "Gesichtsmassage" },
      { uk: "Доглядові процедури по тілу", ru: "Уходовые процедуры по телу", en: "Body Skin Care Procedures", de: "Pflegeverfahren für den Körper" },
      { uk: "Термоліфтинг", ru: "Термолифтинг", en: "Thermolifting", de: "Thermolifting" },
      { uk: "Лазерна епіляція", ru: "Лазерная эпиляция", en: "Laser Hair Removal", de: "Laser-Haarentfernung" },
      { uk: "Комбінована чистка обличчя,спини", ru: "Комбинированная чистка лица и спины", en: "Combined Facial and Back Cleaning", de: "Kombinierte Gesichts- und Rückenreinigung" }
    ],
    education: [
      { uk: "Національний університет фізичного виховання", ru: "Национальный университет физического воспитания", en: "National University of Physical Education", de: "Nationales Universität für Sportpädagogik" },
      { uk: "Інститут апаратної косметології", ru: "Институт аппаратной косметологии", en: "Institute of Hardware Cosmetology", de: "Institut für apparative Kosmetologie" },
      { uk: "Школа медичного масажу", ru: "Школа медицинского массажа", en: "School of Medical Massage", de: "Schule für medizinische Massage" },
      { uk: "Інститут омолодження", ru: "Институт омоложения", en: "Institute of Rejuvenation", de: "Institut für Verjüngung" },
      { uk: "Міжнародний інститут пілінгів та догляду за шкірою", ru: "Международный институт пилингов и ухода за кожей", en: "International Institute of Peelings and Skin Care", de: "Internationales Institut für Peelings und Hautpflege" },

    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=928",
    services: ["service3", "service6"],
    subservices: ["sub12", "sub15"],
    shortName: { uk: "Дмитра", ru: "Дмитрию", en: "Dmytro", de: "Dmytro" }
  },
  {
    id: "doctor8",
    slug: "koval-anna",
    fullName: {
      uk: "Коваль Анна Михайлівна",
      ru: "Коваль Анна Михайловна",
      en: "Koval Anna Mykhailivna",
      de: "Koval Anna Michailowna"
    },
    position: {
      uk: "Косметолог, Спеціаліст IPL та лазерної терапії",
      ru: "Косметолог, Специалист IPL и лазерной терапии",
      en: "Cosmetologist, IPL and Laser Therapy Specialist",
      de: "Kosmetologin, IPL- und Lasertherapie-Spezialistin"
    },
    specializations: [
      { uk: "IPL терапія", ru: "IPL терапия", en: "IPL Therapy", de: "IPL Therapie" },
      { uk: "Лазерна епіляція", ru: "Лазерная эпиляция", en: "Laser Hair Removal", de: "Laser-Haarentfernung" },
      { uk: "Лазерний пілінг", ru: "Лазерный пилинг", en: "Laser Peeling", de: "Laserpeeling" },
      { uk: "Пілінги", ru: "Пилинги", en: "Peelings", de: "Peelings" },
      { uk: "Плазмотерапія", ru: "Плазмотерапия", en: "Plasmotherapy", de: "Plasmatherapie" }
    ],
    education: [
      { uk: "Національний університет охорони здоров’я", ru: "Национальный университет здравоохранения", en: "National Health University", de: "Nationales Gesundheitsuniversität" },
      { uk: "Інститут лазерної косметології", ru: "Институт лазерной косметологии", en: "Institute of Laser Cosmetology", de: "Institut für Laser-Kosmetologie" },
      { uk: "Школа медичного масажу", ru: "Школа медицинского массажа", en: "School of Medical Massage", de: "Schule für medizinische Massage" },
      { uk: "Інститут омолодження", ru: "Институт омоложения", en: "Institute of Rejuvenation", de: "Institut für Verjüngung" },
      { uk: "Міжнародний інститут пілінгів та догляду за шкірою", ru: "Международный институт пилингов и ухода за кожей", en: "International Institute of Peelings and Skin Care", de: "Internationales Institut für Peelings und Hautpflege" },
      { uk: "Європейська академія мезотерапії", ru: "Европейская академия мезотерапии", en: "European Academy of Mesotherapy", de: "Europäische Akademie für Mesotherapie" },
      { uk: "Академія естетичної дерматології", ru: "Академия эстетической дерматологии", en: "Academy of Aesthetic Dermatology", de: "Akademie für ästhetische Dermatologie" }

    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1590080873602-b6f9076c2f90?q=80&w=928",
    services: ["service5", "service14"],
    subservices: ["sub16", "sub19"],
    shortName: { uk: "Анни", ru: "Анне", en: "Anna", de: "Anna" }
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
  },]



export const prices: PriceModel[] = [
  {
    category: { uk: "ТРИХОЛОГІЯ", ru: "ТРИХОЛОГИЯ", en: "Trichology", de: "Trichologie" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" },
    },
    sections: [
      {
        subtitle: { uk: "КОНСУЛЬТАЦІЯ", ru: "КОНСУЛЬТАЦИЯ", en: "Consultation", de: "Beratung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Трихоскопія + консультація трихолога (головного лікаря)", ru: "Трихоскопия + консультация трихолога (главного врача)", en: "Trichoscopy + trichologist consultation (head doctor)", de: "Trichoskopie + Trichologenkonsultation (Chefarzt)" }, price: "₴ 1200" },
          { duration: "45 хв", procedure: { uk: "Трихоскопія + консультація трихолога", ru: "Трихоскопия + консультация трихолога", en: "Trichoscopy + trichologist consultation", de: "Trichoskopie + Trichologenkonsultation" }, price: "₴ 1000" },
          { duration: "30 хв", procedure: { uk: "Контрольний огляд трихолога", ru: "Контрольный осмотр трихолога", en: "Follow-up trichologist check", de: "Kontrolluntersuchung Trichologe" }, price: "₴ 400" },
        ],
      },
      {
        subtitle: { uk: "СТИМУЛЯЦІЯ РОСТУ ВОЛОССЯ / ЛІКУВАННЯ ВИПАДІННЯ ВОЛОССЯ / ЛІКУВАННЯ АЛОПЕЦІЇ", ru: "СТИМУЛЯЦИЯ РОСТА ВОЛОС / ЛЕЧЕНИЕ ВЫПАДЕНИЯ ВОЛОС / ЛЕЧЕНИЕ АЛОПЕЦИИ", en: "Hair Growth Stimulation / Hair Loss Treatment / Alopecia Treatment", de: "Haarwuchsstimulation / Haarausfallbehandlung / Alopezie Behandlung" },
        items: [
          { duration: "30 хв", procedure: { uk: "Мезотерапія волосистої частини голови Dermaheal (Корея) - 2,5 мл", ru: "Мезотерапия волосистой части головы Dermaheal (Корея) - 2,5 мл", en: "Mesotherapy scalp Dermaheal (Korea) - 2.5 ml", de: "Mesotherapie Kopfhaut Dermaheal (Korea) - 2,5 ml" }, price: "₴ 2500" },
          { duration: "30 хв", procedure: { uk: "Hair Vital лікування вогнищевої та дифузної алопеції 2,5", ru: "Hair Vital лечение очаговой и диффузной алопеции 2,5", en: "Hair Vital treatment for focal and diffuse alopecia 2.5", de: "Hair Vital Behandlung fokale und diffuse Alopezie 2,5" }, price: "₴ 2500" },
          { duration: "30 хв", procedure: { uk: "Hair Loss Control лікування андрогенної алопеції у чоловіків та жінок", ru: "Hair Loss Control лечение андрогенной алопеции у мужчин и женщин", en: "Hair Loss Control androgenic alopecia treatment for men and women", de: "Hair Loss Control Behandlung androgenetischer Alopezie bei Männern und Frauen" }, price: "₴ 2500" },
        ],
      },
    ],
  },
  {
    category: { uk: "БіОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ", ru: "БИОРЕВИТАЛИЗАЦИЯ / БИОРЕПАРАЦИЯ", en: "Biorevitalization / Bioreparation", de: "Biorevitalisierung / Bioreparation" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" },
    },
    sections: [
      {
        subtitle: { uk: "БІОРЕПАРАЦІЯ", ru: "БИОРЕПАРАЦИЯ", en: "Bioreparation", de: "Bioreparation" },
        items: [
          { duration: "45 хв", procedure: { uk: "TWAC 2.0 (Великобританія) - 3 мл", ru: "TWAC 2.0 (Великобритания) - 3 мл", en: "TWAC 2.0 (UK) - 3 ml", de: "TWAC 2.0 (UK) - 3 ml" }, price: "₴ 5700" },
          { duration: "45 хв", procedure: { uk: "TWAC 3.0 (Великобританія) - 3 мл", ru: "TWAC 3.0 (Великобритания) - 3 мл", en: "TWAC 3.0 (UK) - 3 ml", de: "TWAC 3.0 (UK) - 3 ml" }, price: "₴ 6700" },
          { duration: "45 хв", procedure: { uk: "Plinest fast (Mastelli, Іспанія) - 2 мл", ru: "Plinest fast (Mastelli, Испания) - 2 мл", en: "Plinest fast (Mastelli, Spain) - 2 ml", de: "Plinest fast (Mastelli, Spanien) - 2 ml" }, price: "₴ 4500" },
        ],
      },
      {
        subtitle: { uk: "БіОРЕВІТАЛІЗАЦІЯ", ru: "БИОРЕВИТАЛИЗАЦИЯ", en: "Biorevitalization", de: "Biorevitalisierung" },
        items: [
          { duration: "60 хв", procedure: { uk: "RRS HA Long Lasting 3 ml", ru: "RRS HA Long Lasting 3 ml", en: "RRS HA Long Lasting 3 ml", de: "RRS HA Long Lasting 3 ml" }, price: "₴ 6500" },
          { duration: "45 хв", procedure: { uk: "Juvederm Volite (Allergan, США) - 1 мл", ru: "Juvederm Volite (Allergan, США) - 1 мл", en: "Juvederm Volite (Allergan, USA) - 1 ml", de: "Juvederm Volite (Allergan, USA) - 1 ml" }, price: "₴ 6000" },
          { duration: "45 хв", procedure: { uk: "Saypha Rich (Австрія) 1 мл", ru: "Saypha Rich (Австрия) 1 мл", en: "Saypha Rich (Austria) 1 ml", de: "Saypha Rich (Österreich) 1 ml" }, price: "₴ 3900" },
        ],
      },
    ],
  },
  {
    category: { uk: "ТРИХОЛОГІЯ", ru: "ТРИХОЛОГИЯ", en: "Trichology", de: "Trichologie" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" },
    },
    sections: [
      {
        subtitle: { uk: "КОНСУЛЬТАЦІЯ", ru: "КОНСУЛЬТАЦИЯ", en: "Consultation", de: "Beratung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Трихоскопія + консультація трихолога (головного лікаря)", ru: "Трихоскопия + консультация трихолога (главного врача)", en: "Trichoscopy + trichologist consultation (head doctor)", de: "Trichoskopie + Trichologenkonsultation (Chefarzt)" }, price: "₴ 1200" },
          { duration: "45 хв", procedure: { uk: "Трихоскопія + консультація трихолога", ru: "Трихоскопия + консультация трихолога", en: "Trichoscopy + trichologist consultation", de: "Trichoskopie + Trichologenkonsultation" }, price: "₴ 1000" },
          { duration: "30 хв", procedure: { uk: "Контрольний огляд трихолога", ru: "Контрольный осмотр трихолога", en: "Follow-up trichologist check", de: "Kontrolluntersuchung Trichologe" }, price: "₴ 400" },
        ],
      },
      {
        subtitle: { uk: "СТИМУЛЯЦІЯ РОСТУ ВОЛОССЯ / ЛІКУВАННЯ ВИПАДІННЯ ВОЛОССЯ / ЛІКУВАННЯ АЛОПЕЦІЇ", ru: "СТИМУЛЯЦИЯ РОСТА ВОЛОС / ЛЕЧЕНИЕ ВЫПАДЕНИЯ ВОЛОС / ЛЕЧЕНИЕ АЛОПЕЦИИ", en: "Hair Growth Stimulation / Hair Loss Treatment / Alopecia Treatment", de: "Haarwuchsstimulation / Haarausfallbehandlung / Alopezie Behandlung" },
        items: [
          { duration: "30 хв", procedure: { uk: "Мезотерапія волосистої частини голови Dermaheal (Корея) - 2,5 мл", ru: "Мезотерапия волосистой части головы Dermaheal (Корея) - 2,5 мл", en: "Mesotherapy scalp Dermaheal (Korea) - 2.5 ml", de: "Mesotherapie Kopfhaut Dermaheal (Korea) - 2,5 ml" }, price: "₴ 2500" },
          { duration: "30 хв", procedure: { uk: "Hair Vital лікування вогнищевої та дифузної алопеції 2,5", ru: "Hair Vital лечение очаговой и диффузной алопеции 2,5", en: "Hair Vital treatment for focal and diffuse alopecia 2.5", de: "Hair Vital Behandlung fokale und diffuse Alopezie 2,5" }, price: "₴ 2500" },
          { duration: "30 хв", procedure: { uk: "Hair Loss Control лікування андрогенної алопеції у чоловіків та жінок", ru: "Hair Loss Control лечение андрогенной алопеции у мужчин и женщин", en: "Hair Loss Control androgenic alopecia treatment for men and women", de: "Hair Loss Control Behandlung androgenetischer Alopezie bei Männern und Frauen" }, price: "₴ 2500" },
        ],
      },
    ],
  },

  {
    category: { uk: "БіОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ", ru: "БИОРЕВИТАЛИЗАЦИЯ / БИОРЕПАРАЦИЯ", en: "Biorevitalization / Bioreparation", de: "Biorevitalisierung / Bioreparation" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" },
    },
    sections: [
      {
        subtitle: { uk: "БІОРЕПАРАЦІЯ", ru: "БИОРЕПАРАЦИЯ", en: "Bioreparation", de: "Bioreparation" },
        items: [
          { duration: "45 хв", procedure: { uk: "TWAC 2.0 (Великобританія) - 3 мл", ru: "TWAC 2.0 (Великобритания) - 3 мл", en: "TWAC 2.0 (UK) - 3 ml", de: "TWAC 2.0 (UK) - 3 ml" }, price: "₴ 5700" },
          { duration: "45 хв", procedure: { uk: "TWAC 3.0 (Великобританія) - 3 мл", ru: "TWAC 3.0 (Великобритания) - 3 мл", en: "TWAC 3.0 (UK) - 3 ml", de: "TWAC 3.0 (UK) - 3 ml" }, price: "₴ 6700" },
          { duration: "45 хв", procedure: { uk: "Plinest fast (Mastelli, Іспанія) - 2 мл", ru: "Plinest fast (Mastelli, Испания) - 2 мл", en: "Plinest fast (Mastelli, Spain) - 2 ml", de: "Plinest fast (Mastelli, Spanien) - 2 ml" }, price: "₴ 4500" },
        ],
      },
      {
        subtitle: { uk: "БіОРЕВІТАЛІЗАЦІЯ", ru: "БИОРЕВИТАЛИЗАЦИЯ", en: "Biorevitalization", de: "Biorevitalisierung" },
        items: [
          { duration: "60 хв", procedure: { uk: "RRS HA Long Lasting 3 ml", ru: "RRS HA Long Lasting 3 ml", en: "RRS HA Long Lasting 3 ml", de: "RRS HA Long Lasting 3 ml" }, price: "₴ 6500" },
          { duration: "45 хв", procedure: { uk: "Juvederm Volite (Allergan, США) - 1 мл", ru: "Juvederm Volite (Allergan, США) - 1 мл", en: "Juvederm Volite (Allergan, USA) - 1 ml", de: "Juvederm Volite (Allergan, USA) - 1 ml" }, price: "₴ 6000" },
          { duration: "45 хв", procedure: { uk: "Saypha Rich (Австрія) 1 мл", ru: "Saypha Rich (Австрия) 1 мл", en: "Saypha Rich (Austria) 1 ml", de: "Saypha Rich (Österreich) 1 ml" }, price: "₴ 3900" },
        ],
      },
    ],
  },
];


export const photos: Photo[] = [
  {
    id: "1",
    mainImage: "https://plus.unsplash.com/premium_photo-1661603790515-33c1cd3d89f0?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgArr: [
      { src: "https://images.unsplash.com/photo-1745327883508-b6cd32e5dde5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://images.unsplash.com/photo-1700522924565-9fad1c05469e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    title: { en: "Relaxing massage", ru: "Расслабляющий массаж", uk: "Розслабляючий масаж", de: "Entspannende Massage" },
    description: { en: "Deep relaxation and stress relief", ru: "Глубокое расслабление и снятие стресса", uk: "Глибоке розслаблення і зняття стресу", de: "Tiefe Entspannung und Stressabbau" },
    serviceId: "service2",
    subserviceId: "sub1",
  },
  {
    id: "2",
    mainImage: "https://plus.unsplash.com/premium_photo-1732576711193-bc2b59d5fd2c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgArr: [
      { src: "https://plus.unsplash.com/premium_photo-1661645623435-41d9869758d9?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://plus.unsplash.com/premium_photo-1661645601775-7ea2247c2ec0?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://plus.unsplash.com/premium_photo-1716626436810-2f3ffeea98fb?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    title: { en: "Facial peeling", ru: "Пилинг лица", uk: "Пілінг обличчя", de: "Gesichtspeeling" },
    description: { en: "Cleansing and renewal of the skin", ru: "Очищение и обновление кожи", uk: "Очищення та оновлення шкіри", de: "Reinigung und Hauterneuerung" },
    serviceId: "service2",
    subserviceId: "sub6",
  },
  {
    id: "3",
    mainImage: "https://plus.unsplash.com/premium_photo-1661295770914-090b07d3e92d?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgArr: [
      { src: "https://plus.unsplash.com/premium_photo-1743025737228-d68d2352dc5b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://images.unsplash.com/photo-1670201203150-bf8771401590?q=80&w=860&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://images.unsplash.com/photo-1590718313039-da29f5ef56d5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    title: { en: "Lip augmentation", ru: "Увеличение губ", uk: "Збільшення губ", de: "Lippenvergrößerung" },
    description: { en: "Correction of lip shape and volume", ru: "Коррекция формы и объема губ", uk: "Корекція форми та об’єму губ", de: "Korrektur von Lippenform und -volumen" },
    serviceId: "service3",
    subserviceId: "sub4",
  },
  {
    id: "4",
    mainImage: "https://plus.unsplash.com/premium_photo-1661386084694-0523d8d1fc9e?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgArr: [
      { src: "https://images.unsplash.com/photo-1700760933574-9f0f4ea9aa3b?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://images.unsplash.com/photo-1700760934166-4c766d708139?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://plus.unsplash.com/premium_photo-1661726996340-8398be0d48ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    title: { en: "Laser hair removal", ru: "Лазерная эпиляция", uk: "Лазерна епіляція", de: "Laser-Haarentfernung" },
    description: { en: "Safe and effective hair removal", ru: "Безопасное и эффективное удаление волос", uk: "Безпечне та ефективне видалення волосся", de: "Sichere und effektive Haarentfernung" },
    serviceId: "service4",
    subserviceId: "sub5",
  },
  {
    id: "5",
    mainImage: "https://plus.unsplash.com/premium_photo-1745168404740-98c70a68c4b5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgArr: [
      { src: "https://plus.unsplash.com/premium_photo-1745168450664-402507bfffdd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://plus.unsplash.com/premium_photo-1745168450685-20c69bb58d82?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
      { src: "https://images.unsplash.com/photo-1713085085470-fba013d67e65?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
    ],
    title: { en: "Mesotherapy", ru: "Мезотерапия", uk: "Мезотерапія", de: "Mesotherapie" },
    description: { en: "Nutrient injection for skin rejuvenation", ru: "Введение полезных веществ для омоложения кожи", uk: "Введення корисних речовин для омолодження шкіри", de: "Injektion von Nährstoffen zur Hautverjüngung" },
    serviceId: "service6",
    subserviceId: "sub7",
  },
];