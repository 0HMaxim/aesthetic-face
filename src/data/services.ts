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
    slug: "vydalennya-novoutvoren",
    mainImage: "https://plus.unsplash.com/premium_photo-1706557115599-c5ce88552cdc?q=80&w=1740",
    content: [
      {
        type: "heading",
        content: {
          uk: "Професійне видалення новоутворень шкіри",
          ru: "Профессиональное удаление новообразований кожи",
          en: "Professional Removal of Skin Growths",
          de: "Professionelle Entfernung von Hautwucherungen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Новоутворення на шкірі — це широке поняття, що включає родимки, папіломи, бородавки, фіброми, кератоми та інші зміни структури шкіри. Хоча більшість з них є доброякісними, вони можуть викликати фізичний та естетичний дискомфорт. Деякі новоутворення також несуть ризик переродження в злоякісні, тому їх своєчасна діагностика та видалення є ключовими для збереження здоров'я.",
          ru: "Новообразования на коже — это широкое понятие, включающее родинки, папилломы, бородавки, фибромы, кератомы и другие изменения структуры кожи. Хотя большинство из них доброкачественные, они могут вызывать физический и эстетический дискомфорт. Некоторые новообразования также несут риск перерождения в злокачественные, поэтому их своевременная диагностика и удаление являются ключом к сохранению здоровья.",
          en: "Skin growths are a broad term that includes moles, papillomas, warts, fibromas, keratomas, and other changes in skin structure. Although most are benign, they can cause physical and aesthetic discomfort. Some growths also carry a risk of degenerating into malignancy, so their timely diagnosis and removal are key to maintaining health.",
          de: "Hautwucherungen sind ein weiter Begriff, der Muttermale, Papillome, Warzen, Fibrome, Keratome und andere Veränderungen der Hautstruktur umfasst. Obwohl die meisten gutartig sind, können sie körperliche und ästhetische Beschwerden verursachen. Einige Wucherungen bergen auch das Risiko, bösartig zu entarten, weshalb ihre rechtzeitige Diagnose und Entfernung für die Erhaltung der Gesundheit entscheidend sind."
        }
      },
      {
        type: "image",
        content: { image: "https://themedermatology.com/wp-content/uploads/2024/04/tu.png" },
        sideText: {
          uk: "Ми використовуємо передові методи діагностики, включаючи цифрову дерматоскопію, для точного визначення характеру кожного новоутворення перед видаленням.",
          ru: "Мы используем передовые методы диагностики, включая цифровую дерматоскопию, для точного определения характера каждого новообразования перед удалением.",
          en: "We use advanced diagnostic methods, including digital dermatoscopy, to accurately determine the nature of each growth before removal.",
          de: "Wir setzen modernste Diagnosemethoden ein, einschließlich digitaler Dermatoskopie, um die Art jeder Wucherung vor der Entfernung genau zu bestimmen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Коли варто звернутися до лікаря?",
          ru: "Когда следует обратиться к врачу?",
          en: "When Should You See a Doctor?",
          de: "Wann sollten Sie einen Arzt aufsuchen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Негайна консультація дерматолога необхідна, якщо новоутворення:",
          ru: "Немедленная консультация дерматолога необходима, если новообразование:",
          en: "Immediate consultation with a dermatologist is necessary if a growth:",
          de: "Eine sofortige Konsultation mit einem Dermatologen ist erforderlich, wenn eine Wucherung:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Швидко збільшується в розмірі\nЗмінило колір або форму\nМає нерівні, асиметричні краї\nКровоточить, свербить або болить\nВикликає будь-який дискомфорт",
          ru: "Быстро увеличивается в размере\nИзменило цвет или форму\nИмеет неровные, асимметричные края\nКровоточит, чешется или болит\nВызывает любой дискомфорт",
          en: "Is rapidly increasing in size\nHas changed color or shape\nHas uneven, asymmetrical borders\nBleeds, itches, or hurts\nCauses any discomfort",
          de: "Schnell an Größe zunimmt\nFarbe oder Form verändert hat\nUngleichmäßige, asymmetrische Ränder aufweist\nBlutet, juckt oder schmerzt\nIrgendwelche Beschwerden verursacht"
        }
      },
      {
        type: "heading",
        content: {
          uk: "Види новоутворень, які ми видаляємо",
          ru: "Виды новообразований, которые мы удаляем",
          en: "Types of Growths We Remove",
          de: "Arten von Wucherungen, die wir entfernen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Наша клініка спеціалізується на видаленні широкого спектру доброякісних новоутворень, зокрема:",
          ru: "Наша клиника специализируется на удалении широкого спектра доброкачественных новообразований, включая:",
          en: "Our clinic specializes in the removal of a wide range of benign growths, including:",
          de: "Unsere Klinik ist auf die Entfernung einer Vielzahl von gutartigen Wucherungen spezialisiert, darunter:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Папіломи та бородавки (вірусні новоутворення)\nРодимки (невуси), що потребують видалення за медичними або естетичними показаннями\nФіброми (утворення зі сполучної тканини)\nКератоми (вікові зміни шкіри)\nАтероми (кісти сальних залоз)\nКонтагіозний молюск",
          ru: "Папилломы и бородавки (вирусные новообразования)\nРодинки (невусы), требующие удаления по медицинским или эстетическим показаниям\nФибромы (образования из соединительной ткани)\nКератомы (возрастные изменения кожи)\nАтеромы (кисты сальных желез)\nКонтагиозный моллюск",
          en: "Papillomas and warts (viral growths)\nMoles (nevi) requiring removal for medical or aesthetic reasons\nFibromas (connective tissue growths)\nKeratomas (age-related skin changes)\nAtheromas (sebaceous cysts)\nMolluscum contagiosum",
          de: "Papillome und Warzen (virale Wucherungen)\nMuttermale (Nävi), die aus medizinischen oder ästhetischen Gründen entfernt werden müssen\nFibrome (Bindegewebswucherungen)\nKeratome (altersbedingte Hautveränderungen)\nAtherome (Talgdrüsenzysten)\nMolluscum contagiosum (Dellwarzen)"
        }
      },
      {
        type: "heading",
        content: {
          uk: "Наші методи видалення: безпека та ефективність",
          ru: "Наши методы удаления: безопасность и эффективность",
          en: "Our Removal Methods: Safety and Efficacy",
          de: "Unsere Entfernungsmethoden: Sicherheit und Wirksamkeit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми застосовуємо лише сучасні та малотравматичні методи, що забезпечують чудовий косметичний результат та швидке загоєння. Вибір методу здійснюється лікарем індивідуально після огляду та діагностики.",
          ru: "Мы применяем только современные и малотравматичные методы, обеспечивающие превосходный косметический результат и быстрое заживление. Выбор метода осуществляется врачом индивидуально после осмотра и диагностики.",
          en: "We use only modern and minimally invasive methods that provide excellent cosmetic results and rapid healing. The choice of method is made by the doctor individually after examination and diagnosis.",
          de: "Wir verwenden nur moderne und minimalinvasive Methoden, die hervorragende kosmetische Ergebnisse und eine schnelle Heilung gewährleisten. Die Wahl der Methode trifft der Arzt individuell nach Untersuchung und Diagnose."
        }
      },
      {
        type: "image",
        content: { image: "https://theskindrs.com.sg/wp-content/uploads/2025/03/seborrheic-keratosis.jpg" },
        sideText: {
          uk: "Лазерне видалення — це золотий стандарт для багатьох новоутворень. Лазерний промінь точно випаровує патологічні тканини, не пошкоджуючи здорову шкіру навколо. Процедура безкровна та стерильна.",
          ru: "Лазерное удаление — это золотой стандарт для многих новообразований. Лазерный луч точно испаряет патологические ткани, не повреждая здоровую кожу вокруг. Процедура бескровна и стерильна.",
          en: "Laser removal is the gold standard for many growths. The laser beam precisely vaporizes pathological tissues without damaging the surrounding healthy skin. The procedure is bloodless and sterile.",
          de: "Die Laserentfernung ist der Goldstandard für viele Wucherungen. Der Laserstrahl verdampft präzise pathologisches Gewebe, ohne die umliegende gesunde Haut zu schädigen. Das Verfahren ist blutlos und steril."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Радіохвильова хірургія (апарат «Сургітрон») використовує високочастотні радіохвилі для безконтактного розрізу тканин. Цей метод ідеально підходить для видалення родимок, оскільки дозволяє взяти матеріал для гістологічного дослідження.",
          ru: "Радиоволновая хирургия (аппарат «Сургитрон») использует высокочастотные радиоволны для бесконтактного разреза тканей. Этот метод идеально подходит для удаления родинок, так как позволяет взять материал для гистологического исследования.",
          en: "Radiowave surgery (Surgitron device) uses high-frequency radio waves for non-contact tissue cutting. This method is ideal for removing moles as it allows for taking material for histological examination.",
          de: "Die Radiofrequenzchirurgie (Surgitron-Gerät) verwendet hochfrequente Radiowellen zum kontaktlosen Schneiden von Gewebe. Diese Methode ist ideal zur Entfernung von Muttermalen, da sie die Entnahme von Material für die histologische Untersuchung ermöglicht."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Кріодеструкція — це видалення за допомогою рідкого азоту. Надзвичайно низька температура руйнує клітини новоутворення. Метод ефективний для бородавок, папілом та кератом.",
          ru: "Криодеструкция — это удаление с помощью жидкого азота. Экстремально низкая температура разрушает клетки новообразования. Метод эффективен для бородавок, папиллом и кератом.",
          en: "Cryodestruction is removal using liquid nitrogen. The extremely low temperature destroys the cells of the growth. This method is effective for warts, papillomas, and keratomas.",
          de: "Kryodestruktion ist die Entfernung mit flüssigem Stickstoff. Die extrem niedrige Temperatur zerstört die Zellen der Wucherung. Diese Methode ist wirksam bei Warzen, Papillomen und Keratomen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Етапи процедури",
          ru: "Этапы процедуры",
          en: "Procedure Steps",
          de: "Verfahrensschritte"
        }
      },
      {
        type: "list",
        content: {
          uk: "1. Консультація та діагностика: Лікар проводить огляд та дерматоскопію.\n2. Знеболення: Застосовується місцева анестезія (крем або ін'єкція) для максимального комфорту.\n3. Видалення: Лікар видаляє новоутворення обраним методом (процедура займає від 5 до 30 хвилин).\n4. Рекомендації: Ви отримуєте детальні інструкції по догляду за обробленою ділянкою.",
          ru: "1. Консультация и диагностика: Врач проводит осмотр и дерматоскопию.\n2. Обезболивание: Применяется местная анестезия (крем или инъекция) для максимального комфорта.\n3. Удаление: Врач удаляет новообразование выбранным методом (процедура занимает от 5 до 30 минут).\n4. Рекомендации: Вы получаете подробные инструкции по уходу за обработанной областью.",
          en: "1. Consultation and diagnosis: The doctor conducts an examination and dermatoscopy.\n2. Anesthesia: Local anesthesia (cream or injection) is applied for maximum comfort.\n3. Removal: The doctor removes the growth using the chosen method (the procedure takes 5 to 30 minutes).\n4. Recommendations: You receive detailed instructions for caring for the treated area.",
          de: "1. Beratung und Diagnose: Der Arzt führt eine Untersuchung und Dermatoskopie durch.\n2. Anästhesie: Zur maximalen Bequemlichkeit wird eine Lokalanästhesie (Creme oder Injektion) angewendet.\n3. Entfernung: Der Arzt entfernt die Wucherung mit der gewählten Methode (das Verfahren dauert 5 bis 30 Minuten).\n4. Empfehlungen: Sie erhalten detaillierte Anweisungen zur Pflege des behandelten Bereichs."
        }
      },
      {
        type: "image",
        content: { image: "https://evolsin-medical.com/cdn/shop/articles/stielwarzen01.png?v=1731490358" },
        sideText: {
          uk: "Післяпроцедурний догляд є вкрай важливим для швидкого загоєння та запобігання утворенню рубців. Дотримуйтесь усіх рекомендацій вашого лікаря.",
          ru: "Послепроцедурный уход крайне важен для быстрого заживления и предотвращения образования рубцов. Следуйте всем рекомендациям вашего врача.",
          en: "Post-procedure care is crucial for rapid healing and preventing scarring. Follow all of your doctor's recommendations.",
          de: "Die Nachsorge ist für eine schnelle Heilung und die Vermeidung von Narbenbildung von entscheidender Bedeutung. Befolgen Sie alle Empfehlungen Ihres Arztes."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги видалення новоутворень у нашій клініці",
          ru: "Преимущества удаления новообразований в нашей клинике",
          en: "Benefits of Growth Removal at Our Clinic",
          de: "Vorteile der Entfernung von Wucherungen in unserer Klinik"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Досвідчені лікарі-дерматологи, високі стандарти стерильності, індивідуальний підхід до кожного пацієнта та використання обладнання експертного класу гарантують безпеку та найкращий результат.",
          ru: "Опытные врачи-дерматологи, высокие стандарты стерильности, индивидуальный подход к каждому пациенту и использование оборудования экспертного класса гарантируют безопасность и наилучший результат.",
          en: "Experienced dermatologists, high standards of sterility, an individual approach to each patient, and the use of expert-class equipment guarantee safety and the best results.",
          de: "Erfahrene Dermatologen, hohe Sterilitätsstandards, ein individueller Ansatz für jeden Patienten und der Einsatz von erstklassiger Ausrüstung garantieren Sicherheit und beste Ergebnisse."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не відкладайте турботу про здоров'я вашої шкіри. Запишіться на консультацію, щоб отримати професійну допомогу та позбутися новоутворень безпечно та ефективно.",
          ru: "Не откладывайте заботу о здоровье вашей кожи. Запишитесь на консультацию, чтобы получить профессиональную помощь и избавиться от новообразований безопасно и эффективно.",
          en: "Don't postpone taking care of your skin's health. Schedule a consultation to get professional help and get rid of growths safely and effectively.",
          de: "Verschieben Sie die Pflege Ihrer Hautgesundheit nicht. Vereinbaren Sie einen Beratungstermin, um professionelle Hilfe zu erhalten und Wucherungen sicher und effektiv loszuwerden."
        }
      }
    ],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor1", "doctor2", "doctor8"],
    subservices: ["subservice1", "subservice2", "subservice3", "subservice4", "subservice5"]
  },

  {
    id: "service2",
    title: {
      uk: "Косметологія обличчя та тіла",
      ru: "Косметология лица и тела",
      en: "Face and Body Cosmetology",
      de: "Gesichts- und Körperkosmetologie"
    },
    slug: "kosmetolohiya-oblychchya-ta-tila",
    mainImage: "https://images.unsplash.com/photo-1622399591207-269e63936861?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мистецтво догляду за вашою красою та здоров'ям",
          ru: "Искусство ухода за вашей красотой и здоровьем",
          en: "The Art of Caring for Your Beauty and Health",
          de: "Die Kunst der Pflege für Ihre Schönheit und Gesundheit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Сучасна косметологія — це наука, що поєднує передові технології та глибоке розуміння фізіології шкіри. Наша клініка пропонує повний спектр послуг, спрямованих не просто на маскування недоліків, а на комплексне оздоровлення та омолодження шкіри обличчя і тіла. Ми розробляємо індивідуальні програми догляду, які допомагають досягти гармонійного та довготривалого результату.",
          ru: "Современная косметология — это наука, сочетающая передовые технологии и глубокое понимание физиологии кожи. Наша клиника предлагает полный спектр услуг, направленных не просто на маскировку недостатков, а на комплексное оздоровление и омоложение кожи лица и тела. Мы разрабатываем индивидуальные программы ухода, которые помогают достичь гармоничного и долговременного результата.",
          en: "Modern cosmetology is a science that combines advanced technologies and a deep understanding of skin physiology. Our clinic offers a full range of services aimed not just at masking imperfections, but at the comprehensive health and rejuvenation of the skin on the face and body. We develop individual care programs that help achieve harmonious and long-lasting results.",
          de: "Die moderne Kosmetologie ist eine Wissenschaft, die fortschrittliche Technologien und ein tiefes Verständnis der Hautphysiologie kombiniert. Unsere Klinik bietet ein umfassendes Leistungsspektrum, das nicht nur auf die Maskierung von Unvollkommenheiten abzielt, sondern auf die umfassende Gesundheit und Verjüngung der Haut von Gesicht und Körper. Wir entwickeln individuelle Pflegeprogramme, die helfen, harmonische und langanhaltende Ergebnisse zu erzielen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Наші основні напрямки в косметології",
          ru: "Наши основные направления в косметологии",
          en: "Our Main Areas in Cosmetology",
          de: "Unsere Hauptbereiche in der Kosmetologie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Професійне очищення та догляд\nІнтенсивне оновлення та пілінги\nАпаратні методики омолодження\nЕстетичний догляд за тілом",
          ru: "Профессиональное очищение и уход\nИнтенсивное обновление и пилинги\nАппаратные методики омоложения\nЭстетический уход за телом",
          en: "Professional Cleansing and Care\nIntensive Renewal and Peels\nApparatus-Based Rejuvenation Methods\nAesthetic Body Care",
          de: "Professionelle Reinigung und Pflege\nIntensive Erneuerung und Peelings\nGerätegestützte Verjüngungsmethoden\nÄsthetische Körperpflege"
        }
      },
      {
        type: "image",
        content: { image: "https://sana.kh.ua/wp-content/uploads/2020/03/sana-diagnostics.jpg" },
        sideText: {
          uk: "Кожна програма догляду починається з ретельної діагностики стану шкіри, що дозволяє нам підібрати найефективніші процедури саме для вас.",
          ru: "Каждая программа ухода начинается с тщательной диагностики состояния кожи, что позволяет нам подобрать самые эффективные процедуры именно для вас.",
          en: "Every care program begins with a thorough diagnosis of the skin's condition, allowing us to select the most effective procedures specifically for you.",
          de: "Jedes Pflegeprogramm beginnt mit einer gründlichen Diagnose des Hautzustands, die es uns ermöglicht, die wirksamsten Verfahren speziell für Sie auszuwählen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чистота — основа здорової шкіри",
          ru: "Чистота — основа здоровой кожи",
          en: "Cleanliness is the Foundation of Healthy Skin",
          de: "Sauberkeit ist die Grundlage gesunder Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми пропонуємо глибоке очищення шкіри за допомогою атравматичної ультразвукової та ефективної механічної чистки. Ці процедури допомагають позбутися комедонів, надлишків себуму та ороговілих клітин, покращуючи дихання шкіри та готуючи її до подальшого догляду.",
          ru: "Мы предлагаем глубокое очищение кожи с помощью атравматичной ультразвуковой и эффективной механической чистки. Эти процедуры помогают избавиться от комедонов, излишков себума и ороговевших клеток, улучшая дыхание кожи и подготавливая её к дальнейшему уходу.",
          en: "We offer deep skin cleansing using atraumatic ultrasonic and effective mechanical cleaning. These procedures help to get rid of comedones, excess sebum, and dead skin cells, improving skin respiration and preparing it for further care.",
          de: "Wir bieten eine Tiefenreinigung der Haut mittels atraumatischer Ultraschall- und effektiver mechanischer Reinigung an. Diese Verfahren helfen, Komedonen, überschüssigen Talg und abgestorbene Hautzellen zu entfernen, die Hautatmung zu verbessern und sie auf die weitere Pflege vorzubereiten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Оновлення та сяйво",
          ru: "Обновление и сияние",
          en: "Renewal and Radiance",
          de: "Erneuerung und Ausstrahlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Хімічні пілінги та карбокситерапія — це потужні інструменти для оновлення шкіри. Пілінги допомагають боротися з пігментацією, постакне та дрібними зморшками, стимулюючи регенерацію. Карбокситерапія насичує шкіру киснем зсередини, миттєво покращуючи колір обличчя та надаючи йому здорового сяйва.",
          ru: "Химические пилинги и карбокситерапия — это мощные инструменты для обновления кожи. Пилинги помогают бороться с пигментацией, постакне и мелкими морщинами, стимулируя регенерацию. Карбокситерапия насыщает кожу кислородом изнутри, мгновенно улучшая цвет лица и придавая ему здоровое сияние.",
          en: "Chemical peels and carboxytherapy are powerful tools for skin renewal. Peels help combat pigmentation, post-acne, and fine wrinkles by stimulating regeneration. Carboxytherapy saturates the skin with oxygen from within, instantly improving the complexion and giving it a healthy glow.",
          de: "Chemische Peelings und Carboxytherapie sind leistungsstarke Werkzeuge zur Hauterneuerung. Peelings helfen bei der Bekämpfung von Pigmentierung, Post-Akne und feinen Falten, indem sie die Regeneration anregen. Die Carboxytherapie sättigt die Haut von innen mit Sauerstoff, verbessert sofort den Teint und verleiht ihm einen gesunden Glanz."
        }
      },
      {
        type: "image",
        content: { image: "https://brando-s.ru/wp-content/uploads/Glavnaya-2-1.jpg" },
        sideText: {
          uk: "Сучасні апаратні методики, такі як RF-ліфтинг, дозволяють досягти ефекту підтяжки шкіри без хірургічного втручання.",
          ru: "Современные аппаратные методики, такие как RF-лифтинг, позволяют достичь эффекта подтяжки кожи без хирургического вмешательства.",
          en: "Modern hardware techniques, such as RF-lifting, allow for a skin tightening effect without surgical intervention.",
          de: "Moderne gerätegestützte Techniken wie das RF-Lifting ermöglichen einen Hautstraffungseffekt ohne chirurgischen Eingriff."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Догляд за тілом",
          ru: "Уход за телом",
          en: "Body Care",
          de: "Körperpflege"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Краса не обмежується обличчям. Наші доглядові процедури для тіла, включаючи пілінги та обгортання, спрямовані на покращення текстури шкіри, боротьбу з целюлітом та підвищення пружності. Це чудовий спосіб не тільки покращити зовнішній вигляд, але й розслабитися та приділити час собі.",
          ru: "Красота не ограничивается лицом. Наши уходовые процедуры для тела, включая пилинги и обертывания, направлены на улучшение текстуры кожи, борьбу с целлюлитом и повышение упругости. Это прекрасный способ не только улучшить внешний вид, но и расслабиться и уделить время себе.",
          en: "Beauty is not limited to the face. Our body care treatments, including peels and wraps, are aimed at improving skin texture, combating cellulite, and increasing firmness. This is a great way not only to improve your appearance but also to relax and take time for yourself.",
          de: "Schönheit ist nicht auf das Gesicht beschränkt. Unsere Körperpflegebehandlungen, einschließlich Peelings und Wickel, zielen darauf ab, die Hauttextur zu verbessern, Cellulite zu bekämpfen und die Festigkeit zu erhöhen. Dies ist eine großartige Möglichkeit, nicht nur Ihr Aussehen zu verbessern, sondern auch zu entspannen und sich Zeit für sich selbst zu nehmen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ваш індивідуальний шлях до краси",
          ru: "Ваш индивидуальный путь к красоте",
          en: "Your Individual Path to Beauty",
          de: "Ihr individueller Weg zur Schönheit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми не віримо в універсальні рішення. Кожна шкіра унікальна, і саме тому ми приділяємо максимум уваги персональній консультації. Наші спеціалісти допоможуть вам розібратися у потребах вашої шкіри та складуть ефективну програму процедур.",
          ru: "Мы не верим в универсальные решения. Каждая кожа уникальна, и именно поэтому мы уделяем максимум внимания персональной консультации. Наши специалисты помогут вам разобраться в потребностях вашей кожи и составят эффективную программу процедур.",
          en: "We don't believe in one-size-fits-all solutions. Every skin is unique, which is why we pay maximum attention to personal consultation. Our specialists will help you understand your skin's needs and create an effective program of procedures.",
          de: "Wir glauben nicht an Einheitslösungen. Jede Haut ist einzigartig, weshalb wir der persönlichen Beratung maximale Aufmerksamkeit schenken. Unsere Spezialisten helfen Ihnen, die Bedürfnisse Ihrer Haut zu verstehen und ein effektives Behandlungsprogramм zu erstellen."
        }
      }
    ],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor4", "doctor5", "doctor1"],
    subservices: ["subservice6", "subservice7", "subservice8", "subservice9", "subservice10"]
  },

    {
      id: "service3",
      title: {
        uk: "Масаж",
        ru: "Массаж",
        en: "Massage",
        de: "Massage"
      },
      slug: "masazh",
      mainImage: "https://massage.co.ua/wp-content/uploads/2016/10/Modeliuiuchyi-masazh-tila-scaled.jpeg",
      content: [
        {
          type: "heading",
          content: {
            uk: "Мистецтво дотику для вашого здоров'я та гармонії",
            ru: "Искусство прикосновения для вашего здоровья и гармонии",
            en: "The Art of Touch for Your Health and Harmony",
            de: "Die Kunst der Berührung für Ihre Gesundheit und Harmonie"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Масаж — це перевірена тисячоліттями практика, яка є не просто процедурою для розслаблення, а потужним інструментом для відновлення фізичного здоров'я та емоційної рівноваги. У нашій клініці ми поєднуємо класичні техніки та сучасні підходи, щоб запропонувати вам масаж, який ідеально відповідає потребам вашого тіла та душі.",
            ru: "Массаж — это проверенная тысячелетиями практика, которая является не просто процедурой для расслабления, а мощным инструментом для восстановления физического здоровья и эмоционального равновесия. В нашей клинике мы сочетаем классические техники и современные подходы, чтобы предложить вам массаж, идеально соответствующий потребностям вашего тела и души.",
            en: "Massage is a practice proven over millennia, which is not just a procedure for relaxation, but a powerful tool for restoring physical health and emotional balance. In our clinic, we combine classic techniques and modern approaches to offer you a massage that perfectly suits the needs of your body and soul.",
            de: "Die Massage ist eine über Jahrtausende bewährte Praxis, die nicht nur ein Verfahren zur Entspannung ist, sondern ein wirksames Instrument zur Wiederherstellung der körperlichen Gesundheit und des emotionalen Gleichgewichts. In unserer Klinik kombinieren wir klassische Techniken und moderne Ansätze, um Ihnen eine Massage anzubieten, die perfekt auf die Bedürfnisse Ihres Körpers und Ihrer Seele zugeschnitten ist."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Чому масаж — це більше, ніж просто розслаблення?",
            ru: "Почему массаж — это больше, чем просто расслабление?",
            en: "Why is massage more than just relaxation?",
            de: "Warum ist Massage mehr als nur Entspannung?"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Професійний масаж комплексно впливає на весь організм: покращує кровообіг та лімфоток, що сприяє детоксикації; знімає м'язові спазми та біль; підвищує еластичність м'язів та рухливість суглобів; стимулює вироблення ендорфінів — «гормонів щастя», що знижує рівень стресу та покращує настрій.",
            ru: "Профессиональный массаж комплексно воздействует на весь организм: улучшает кровообращение и лимфоток, что способствует детоксикации; снимает мышечные спазмы и боль; повышает эластичность мышц и подвижность суставов; стимулирует выработку эндорфинов — «гормонов счастья», что снижает уровень стресса и улучшает настроение.",
            en: "Professional massage has a complex effect on the entire body: it improves blood and lymph circulation, which promotes detoxification; relieves muscle spasms and pain; increases muscle elasticity and joint mobility; stimulates the production of endorphins - the \"happiness hormones,\" which reduces stress levels and improves mood.",
            de: "Eine professionelle Massage wirkt sich komplex auf den gesamten Körper aus: Sie verbessert die Blut- und Lymphzirkulation, was die Entgiftung fördert; sie löst Muskelkrämpfe und Schmerzen; sie erhöht die Muskelelastizität und die Gelenkbeweglichkeit; sie stimuliert die Produktion von Endorphinen - den „Glückshormonen“, was den Stresspegel senkt und die Stimmung verbessert."
          }
        },
        {
          type: "image",
          content: { image: "https://www.fdoctor.ru/upload/medialibrary/a4b/massazh.jpg" },
          sideText: {
            uk: "Наші спеціалісти — це сертифіковані масажисти з медичною освітою, які глибоко розуміють анатомію та фізіологію людського тіла.",
            ru: "Наши специалисты — это сертифицированные массажисты с медицинским образованием, которые глубоко понимают анатомию и физиологию человеческого тела.",
            en: "Our specialists are certified massage therapists with a medical background who have a deep understanding of the human body's anatomy and physiology.",
            de: "Unsere Spezialisten sind zertifizierte Massagetherapeuten mit medizinischem Hintergrund, die ein tiefes Verständnis für die Anatomie und Physiologie des menschlichen Körpers haben."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Знайдіть свій ідеальний масаж",
            ru: "Найдите свой идеальный массаж",
            en: "Find Your Perfect Massage",
            de: "Finden Sie Ihre perfekte Massage"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ми пропонуємо різні види масажу, кожен з яких має свої унікальні цілі та техніки:",
            ru: "Мы предлагаем различные виды массажа, каждый из которых имеет свои уникальные цели и техники:",
            en: "We offer different types of massage, each with its own unique goals and techniques:",
            de: "Wir bieten verschiedene Arten von Massagen an, jede mit ihren eigenen einzigartigen Zielen und Techniken:"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Класичний масаж:** Універсальна процедура для загального оздоровлення, зняття втоми та напруги в м'язах. Ідеальний вибір для першого знайомства з масажем.",
            ru: "**Классический массаж:** Универсальная процедура для общего оздоровления, снятия усталости и напряжения в мышцах. Идеальный выбор для первого знакомства с массажем.",
            en: "**Classic Massage:** A universal procedure for general wellness, relieving fatigue and muscle tension. An ideal choice for a first introduction to massage.",
            de: "**Klassische Massage:** Ein universelles Verfahren für allgemeines Wohlbefinden, zur Linderung von Müdigkeit und Muskelverspannungen. Eine ideale Wahl für eine erste Bekanntschaft mit der Massage."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лімфодренажний масаж:** Делікатна техніка, спрямована на виведення зайвої рідини та токсинів. Ефективно бореться з набряками, покращує імунітет та сприяє схудненню.",
            ru: "**Лимфодренажный массаж:** Деликатная техника, направленная на выведение лишней жидкости и токсинов. Эффективно борется с отеками, улучшает иммунитет и способствует похудению.",
            en: "**Lymphatic Drainage Massage:** A delicate technique aimed at removing excess fluid and toxins. Effectively combats swelling, improves immunity, and promotes weight loss.",
            de: "**Lymphdrainage-Massage:** Eine sanfte Technik zur Entfernung von überschüssiger Flüssigkeit und Giftstoffen. Bekämpft effektiv Schwellungen, verbessert die Immunität und fördert die Gewichtsabnahme."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Антицелюлітний масаж:** Інтенсивна методика для корекції фігури та покращення стану шкіри. Допомагає розгладити «апельсинову кірку», зменшити об'єми та підвищити пружність шкіри.",
            ru: "**Антицеллюлитный массаж:** Интенсивная методика для коррекции фигуры и улучшения состояния кожи. Помогает разгладить «апельсиновую корку», уменьшить объемы и повысить упругость кожи.",
            en: "**Anti-Cellulite Massage:** An intensive technique for body shaping and improving skin condition. Helps to smooth the \"orange peel skin,\" reduce volume, and increase skin firmness.",
            de: "**Anti-Cellulite-Massage:** Eine intensive Technik zur Körperformung und Verbesserung des Hautzustands. Hilft, die „Orangenhaut“ zu glätten, das Volumen zu reduzieren und die Hautfestigkeit zu erhöhen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Релакс-масаж:** М'яка, медитативна процедура для глибокого розслаблення та зняття стресу. Часто проводиться з використанням ароматичних олій для повної гармонізації.",
            ru: "**Релакс-массаж:** Мягкая, медитативная процедура для глубокого расслабления и снятия стресса. Часто проводится с использованием ароматических масел для полной гармонизации.",
            en: "**Relaxation Massage:** A soft, meditative procedure for deep relaxation and stress relief. Often performed with aromatic oils for complete harmonization.",
            de: "**Entspannungsmassage:** Ein sanftes, meditatives Verfahren zur tiefen Entspannung und zum Stressabbau. Wird oft mit aromatischen Ölen für eine vollständige Harmonisierung durchgeführt."
          }
        },
        {
          type: "image",
          content: { image: "https://lazova-clinic.ru/wp-content/uploads/2022/11/back-sports-massage-therapy-1024x682.jpg" },
          sideText: {
            uk: "Ми створюємо атмосферу спокою та комфорту, щоб кожна процедура масажу стала для вас справжнім ритуалом турботи про себе.",
            ru: "Мы создаем атмосферу спокойствия и комфорта, чтобы каждая процедура массажа стала для вас настоящим ритуалом заботы о себе.",
            en: "We create an atmosphere of peace and comfort, so that every massage procedure becomes a true ritual of self-care for you.",
            de: "Wir schaffen eine Atmosphäre der Ruhe und des Komforts, damit jede Massagebehandlung für Sie zu einem wahren Ritual der Selbstpflege wird."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Індивідуальний підхід",
            ru: "Индивидуальный подход",
            en: "Individual Approach",
            de: "Individueller Ansatz"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Перед сеансом наш спеціаліст обов'язково проведе коротку консультацію, щоб зрозуміти ваші потреби, виявити можливі протипоказання та підібрати оптимальну техніку та інтенсивність масажу.",
            ru: "Перед сеансом наш специалист обязательно проведет короткую консультацию, чтобы понять ваши потребности, выявить возможные противопоказания и подобрать оптимальную технику и интенсивность массажа.",
            en: "Before the session, our specialist will conduct a short consultation to understand your needs, identify any possible contraindications, and select the optimal massage technique and intensity.",
            de: "Vor der Sitzung führt unser Spezialist eine kurze Beratung durch, um Ihre Bedürfnisse zu verstehen, mögliche Kontraindikationen zu identifizieren und die optimale Massagetechnik und -intensität auszuwählen."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor6", "doctor7"],
      subservices: ["subservice11", "subservice12", "subservice13", "subservice14"]
    },


    {
      id: "service4",
      title: {
        uk: "Контурна пластика",
        ru: "Контурная пластика",
        en: "Contour Plastics (Dermal Fillers)",
        de: "Konturplastik (Dermale Füller)"
      },
      slug: "konturna-plastyka",
      mainImage: "https://plus.unsplash.com/premium_photo-1743025736906-897f737b5ee8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        {
          type: "heading",
          content: {
            uk: "Моделювання ідеальних рис обличчя без хірургії",
            ru: "Моделирование идеальных черт лица без хирургии",
            en: "Modeling Ideal Facial Features without Surgery",
            de: "Modellierung idealer Gesichtszüge ohne Operation"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Контурна пластика — це мистецтво створення гармонії та молодості обличчя за допомогою ін'єкцій спеціальних препаратів — філерів. На відміну від пластичної хірургії, цей метод не вимагає наркозу та тривалої реабілітації. Він дозволяє делікатно відновити втрачені об'єми, скоригувати риси, заповнити зморшки та досягти вираженого ефекту омолодження, зберігаючи вашу природну індивідуальність.",
            ru: "Контурная пластика — это искусство создания гармонии и молодости лица с помощью инъекций специальных препаратов — филлеров. В отличие от пластической хирургии, этот метод не требует наркоза и длительной реабилитации. Он позволяет деликатно восстановить утраченные объемы, скорректировать черты, заполнить морщины и достичь выраженного эффекта омоложения, сохраняя вашу природную индивидуальность.",
            en: "Contour plastics is the art of creating harmony and youthfulness in the face through injections of special preparations - fillers. Unlike plastic surgery, this method does not require anesthesia or a long recovery period. It allows for the delicate restoration of lost volume, correction of features, filling of wrinkles, and achieving a pronounced rejuvenation effect while preserving your natural individuality.",
            de: "Konturplastik ist die Kunst, Harmonie und Jugendlichkeit im Gesicht durch Injektionen von speziellen Präparaten - Fillern - zu schaffen. Im Gegensatz zur plastischen Chirurgie erfordert diese Methode keine Narkose oder lange Erholungszeit. Sie ermöglicht die sanfte Wiederherstellung verlorenen Volumens, die Korrektur von Merkmalen, das Auffüllen von Falten und die Erzielung eines ausgeprägten Verjüngungseffekts unter Wahrung Ihrer natürlichen Individualität."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Що таке філери?",
            ru: "Что такое филлеры?",
            en: "What are fillers?",
            de: "Was sind Filler?"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ми використовуємо філери на основі стабілізованої гіалуронової кислоти. Це гель, який за своїм складом є аналогічним до гіалуронової кислоти, що виробляється в нашому організмі. Тому він є абсолютно безпечним, біосумісним та з часом повністю розсмоктується. Залежно від зони корекції та бажаного ефекту, лікар підбирає філер відповідної щільності та в'язкості.",
            ru: "Мы используем филлеры на основе стабилизированной гиалуроновой кислоты. Это гель, который по своему составу аналогичен гиалуроновой кислоте, вырабатываемой в нашем организме. Поэтому он абсолютно безопасен, биосовместим и со временем полностью рассасывается. В зависимости от зоны коррекции и желаемого эффекта, врач подбирает филлер соответствующей плотности и вязкости.",
            en: "We use fillers based on stabilized hyaluronic acid. This is a gel that is analogous in composition to the hyaluronic acid produced in our body. Therefore, it is completely safe, biocompatible, and fully absorbs over time. Depending on the correction area and the desired effect, the doctor selects a filler of the appropriate density and viscosity.",
            de: "Wir verwenden Filler auf Basis stabilisierter Hyaluronsäure. Dies ist ein Gel, das in seiner Zusammensetzung der in unserem Körper produzierten Hyaluronsäure analog ist. Daher ist es absolut sicher, biokompatibel und wird im Laufe der Zeit vollständig abgebaut. Je nach Korrekturbereich und gewünschtem Effekt wählt der Arzt einen Filler mit der entsprechenden Dichte und Viskosität aus."
          }
        },
        {
          type: "image",
          content: { image: "https://ihc-russia.ru/upload/iblock/7ec/tcycrf2oljhzixbxr2wqkdgdey5hyszw.jpg" },
          sideText: {
            uk: "Усі процедури проводяться досвідченими лікарями-ін'єкціоністами, які досконало володіють анатомією обличчя та використовують лише сертифіковані препарати.",
            ru: "Все процедуры проводятся опытными врачами-инъекционистами, которые в совершенстве владеют анатомией лица и используют только сертифицированные препараты.",
            en: "All procedures are performed by experienced injectionist doctors who have a perfect command of facial anatomy and use only certified products.",
            de: "Alle Eingriffe werden von erfahrenen Injektionsärzten durchgeführt, die die Gesichtsanatomie perfekt beherrschen und nur zertifizierte Produkte verwenden."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Можливості контурної пластики",
            ru: "Возможности контурной пластики",
            en: "Possibilities of Contour Plastics",
            de: "Möglichkeiten der Konturplastik"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Збільшення губ:** Дозволяє надати губам бажаного об'єму та чуттєвості, скоригувати асиметрію та зволожити їх.",
            ru: "**Увеличение губ:** Позволяет придать губам желаемый объем и чувственность, скорректировать асимметрию и увлажнить их.",
            en: "**Lip Augmentation:** Allows to give the lips the desired volume and sensuality, correct asymmetry, and moisturize them.",
            de: "**Lippenvergrößerung:** Ermöglicht es, den Lippen das gewünschte Volumen und die Sinnlichkeit zu verleihen, Asymmetrien zu korrigieren und sie mit Feuchtigkeit zu versorgen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Корекція вилиць:** Відновлює втрачений об'єм, створює ефект ліфтингу та робить риси обличчя більш виразними.",
            ru: "**Коррекция скул:** Восстанавливает утраченный объем, создает эффект лифтинга и делает черты лица более выразительными.",
            en: "**Cheekbone Correction:** Restores lost volume, creates a lifting effect, and makes facial features more expressive.",
            de: "**Wangenknochenkorrektur:** Stellt verlorenes Volumen wieder her, erzeugt einen Lifting-Effekt und macht die Gesichtszüge ausdrucksvoller."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Моделювання підборіддя:** Гармонізує нижню третину обличчя, робить профіль чіткішим та надає овалу обличчя завершеного вигляду.",
            ru: "**Моделирование подбородка:** Гармонизирует нижнюю треть лица, делает профиль более четким и придает овалу лица завершенный вид.",
            en: "**Chin Modeling:** Harmonizes the lower third of the face, makes the profile sharper, and gives the facial oval a finished look.",
            de: "**Kinnmodellierung:** Harmonisiert das untere Drittel des Gesichts, macht das Profil schärfer und verleiht dem Gesichtsoval ein vollendetes Aussehen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Корекція носогубних складок:** Заповнює заломи, що йдуть від носа до куточків рота, миттєво роблячи обличчя молодшим та свіжішим.",
            ru: "**Коррекция носогубных складок:** Заполняет заломы, идущие от носа к уголкам рта, мгновенно делая лицо моложе и свежее.",
            en: "**Nasolabial Fold Correction:** Fills the creases running from the nose to the corners of the mouth, instantly making the face look younger and fresher.",
            de: "**Korrektur der Nasolabialfalten:** Füllt die Falten, die von der Nase zu den Mundwinkeln verlaufen, und lässt das Gesicht sofort jünger und frischer aussehen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Чому пацієнти обирають контурну пластику?",
            ru: "Почему пациенты выбирают контурную пластику?",
            en: "Why do patients choose contour plastics?",
            de: "Warum entscheiden sich Patienten für die Konturplastik?"
          }
        },
        {
          type: "list",
          content: {
            uk: "Миттєвий результат: ефект помітний одразу після процедури.\nБезпека: препарати на основі гіалуронової кислоти є біосумісними та з часом розсмоктуються.\nМінімальна реабілітація: невеликий набряк проходить за кілька днів.\nПриродність: досвідчений лікар створює гармонійні зміни, що не змінюють вас до невпізнання.\nЗворотність: за потреби філер можна розчинити за допомогою спеціального ферменту.",
            ru: "Мгновенный результат: эффект заметен сразу после процедуры.\nБезопасность: препараты на основе гиалуроновой кислоты биосовместимы и со временем рассасываются.\nМинимальная реабилитация: небольшой отек проходит за несколько дней.\nЕстественность: опытный врач создает гармоничные изменения, которые не меняют вас до неузнаваемости.\nОбратимость: при необходимости филлер можно растворить с помощью специального фермента.",
            en: "Instant result: the effect is noticeable immediately after the procedure.\nSafety: hyaluronic acid-based preparations are biocompatible and dissolve over time.\nMinimal rehabilitation: minor swelling subsides in a few days.\nNaturalness: an experienced doctor creates harmonious changes that do not alter you beyond recognition.\nReversibility: if necessary, the filler can be dissolved with a special enzyme.",
            de: "Sofortiges Ergebnis: Die Wirkung ist sofort nach dem Eingriff spürbar.\nSicherheit: Präparate auf Hyaluronsäurebasis sind biokompatibel und lösen sich mit der Zeit auf.\nMinimale Rehabilitation: Leichte Schwellungen klingen in wenigen Tagen ab.\nNatürlichkeit: Ein erfahrener Arzt schafft harmonische Veränderungen, die Sie nicht bis zur Unkenntlichkeit verändern.\nReversibilität: Bei Bedarf kann der Füller mit einem speziellen Enzym aufgelöst werden."
          }
        },
        {
          type: "image",
          content: { image: "https://www.datocms-assets.com/132609/1727985059-how-chin-and-jawline-filler-can-contour-your-face-4854.jpeg" },
          sideText: {
            uk: "Наша мета — не змінити, а підкреслити вашу природну красу та повернути обличчю молодий та відпочилий вигляд.",
            ru: "Наша цель — не изменить, а подчеркнуть вашу естественную красоту и вернуть лицу молодой и отдохнувший вид.",
            en: "Our goal is not to change, but to emphasize your natural beauty and restore a youthful and rested look to your face.",
            de: "Unser Ziel ist es nicht, zu verändern, sondern Ihre natürliche Schönheit zu betonen und Ihrem Gesicht ein jugendliches und ausgeruhtes Aussehen zurückzugeben."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Ваш шлях до гармонії",
            ru: "Ваш путь к гармонии",
            en: "Your Path to Harmony",
            de: "Ihr Weg zur Harmonie"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Все починається з консультації, на якій лікар уважно вислухає ваші побажання, проведе аналіз пропорцій обличчя та запропонує оптимальний план корекції. Ми прагнемо до того, щоб результат перевершив ваші очікування, а процес був максимально комфортним та безпечним.",
            ru: "Всё начинается с консультации, на которой врач внимательно выслушает ваши пожелания, проведет анализ пропорций лица и предложит оптимальный план коррекции. Мы стремимся к тому, чтобы результат превзошел ваши ожидания, а процесс был максимально комфортным и безопасным.",
            en: "It all starts with a consultation, where the doctor will carefully listen to your wishes, analyze your facial proportions, and propose an optimal correction plan. We strive to ensure that the result exceeds your expectations and that the process is as comfortable and safe as possible.",
            de: "Alles beginnt mit einer Beratung, bei der der Arzt Ihre Wünsche sorgfältig anhört, Ihre Gesichtsproportionen analysiert und einen optimalen Korrekturplan vorschlägt. Wir bemühen uns sicherzustellen, dass das Ergebnis Ihre Erwartungen übertrifft und der Prozess so angenehm und sicher wie möglich ist."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor1", "doctor2", "doctor4"],
      subservices: ["subservice15", "subservice16", "subservice17", "subservice18"]
    },

    {
      id: "service5",
      title: {
        uk: "IPL Shiny (лікування куперозу, пігментації, акне)",
        ru: "IPL Shiny (лечение купероза, пигментации, акне)",
        en: "IPL Shiny (Rosacea, Pigmentation, Acne Treatment)",
        de: "IPL Shiny (Behandlung von Couperose, Pigmentierung, Akne)"
      },
      slug: "ipl-shiny-lechenie",
      mainImage: "https://img.freepik.com/free-photo/laser-epilation-hair-removal-therapy_1303-23487.jpg?semt=ais_hybrid&w=740&q=80",
      content: [
        {
          type: "heading",
          content: {
            uk: "Технологія інтенсивного імпульсного світла для бездоганної шкіри",
            ru: "Технология интенсивного импульсного света для безупречной кожи",
            en: "Intense Pulsed Light Technology for Flawless Skin",
            de: "Intensiv-Pulslicht-Technologie für makellose Haut"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "IPL (Intense Pulsed Light) — це передова технологія фототерапії, яка дозволяє вирішувати цілий комплекс естетичних проблем шкіри без пошкодження її поверхні. Апарат генерує потужні імпульси широкосмугового світла, які проникають у шкіру та вибірково впливають на різні мішені: судини, пігмент або бактерії. Це універсальний інструмент для досягнення рівного тону, чистої та здорової шкіри.",
            ru: "IPL (Intense Pulsed Light) — это передовая технология фототерапии, которая позволяет решать целый комплекс эстетических проблем кожи без повреждения её поверхности. Аппарат генерирует мощные импульсы широкополосного света, которые проникают в кожу и избирательно воздействуют на различные мишени: сосуды, пигмент или бактерии. Это универсальный инструмент для достижения ровного тона, чистой и здоровой кожи.",
            en: "IPL (Intense Pulsed Light) is an advanced phototherapy technology that solves a whole range of aesthetic skin problems without damaging its surface. The device generates powerful pulses of broadband light that penetrate the skin and selectively target different structures: vessels, pigment, or bacteria. It is a versatile tool for achieving an even tone and clear, healthy skin.",
            de: "IPL (Intensiv-Pulslicht) ist eine fortschrittliche Phototherapie-Technologie, die eine ganze Reihe von ästhetischen Hautproblemen löst, ohne die Hautoberfläche zu beschädigen. Das Gerät erzeugt starke Impulse breitbandigen Lichts, die in die Haut eindringen und selektiv auf verschiedene Zielstrukturen einwirken: Gefäße, Pigmente oder Bakterien. Es ist ein vielseitiges Werkzeug, um einen ebenmäßigen Teint und eine reine, gesunde Haut zu erzielen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Як працює IPL? Принцип вибіркового фототермолізу",
            ru: "Как работает IPL? Принцип избирательного фототермолиза",
            en: "How Does IPL Work? The Principle of Selective Photothermolysis",
            de: "Wie funktioniert IPL? Das Prinzip der selektiven Photothermolyse"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "В основі методу лежить здатність різних структур шкіри (хромофорів) поглинати світло певної довжини хвилі. Світлова енергія поглинається мішенню, миттєво перетворюється на тепло і руйнує її, не пошкоджуючи навколишні здорові тканини.",
            ru: "В основе метода лежит способность различных структур кожи (хромофоров) поглощать свет определенной длины волны. Световая энергия поглощается мишенью, мгновенно преобразуется в тепло и разрушает её, не повреждая окружающие здоровые ткани.",
            en: "The method is based on the ability of different skin structures (chromophores) to absorb light of a specific wavelength. The light energy is absorbed by the target, instantly converted into heat, and destroys it without damaging the surrounding healthy tissue.",
            de: "Die Methode basiert auf der Fähigkeit verschiedener Hautstrukturen (Chromophore), Licht einer bestimmten Wellenlänge zu absorbieren. Die Lichtenergie wird vom Ziel absorbiert, sofort in Wärme umgewandelt und zerstört es, ohne das umgebende gesunde Gewebe zu beschädigen."
          }
        },
        {
          type: "list",
          content: {
            uk: "Гемоглобін у судинах поглинає світло, що призводить до їх «склеювання» (лікування куперозу).\nМеланін у пігментних плямах поглинає світло і руйнується (лікування пігментації).\nПорфірин (продукт життєдіяльності бактерій акне) поглинає світло, що вбиває бактерії (лікування акне).",
            ru: "Гемоглобин в сосудах поглощает свет, что приводит к их «склеиванию» (лечение купероза).\nМеланин в пигментных пятнах поглощает свет и разрушается (лечение пигментации).\nПорфирин (продукт жизнедеятельности бактерий акне) поглощает свет, что убивает бактерии (лечение акне).",
            en: "Hemoglobin in vessels absorbs light, leading to their \"sealing\" (rosacea treatment).\nMelanin in pigment spots absorbs light and is destroyed (pigmentation treatment).\nPorphyrin (a byproduct of acne bacteria) absorbs light, which kills the bacteria (acne treatment).",
            de: "Hämoglobin in den Gefäßen absorbiert Licht, was zu deren „Verklebung“ führt (Couperose-Behandlung).\nMelanin in Pigmentflecken absorbiert Licht und wird zerstört (Pigmentbehandlung).\nPorphyrin (ein Nebenprodukt von Akne-Bakterien) absorbiert Licht, was die Bakterien abtötet (Akne-Behandlung)."
          }
        },
        {
          type: "image",
          content: { image: "https://arbat-esthetic.ru/pics/BIG--1529190639.jpg" },
          sideText: {
            uk: "Наш апарат оснащений різними світлофільтрами, що дозволяє лікарю підібрати ідеальні параметри для вирішення саме вашої проблеми.",
            ru: "Наш аппарат оснащен различными светофильтрами, что позволяет врачу подобрать идеальные параметры для решения именно вашей проблемы.",
            en: "Our device is equipped with various light filters, allowing the doctor to select the ideal parameters to solve your specific problem.",
            de: "Unser Gerät ist mit verschiedenen Lichtfiltern ausgestattet, die es dem Arzt ermöglichen, die idealen Parameter zur Lösung Ihres spezifischen Problems auszuwählen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Спектр можливостей IPL Shiny",
            ru: "Спектр возможностей IPL Shiny",
            en: "The Spectrum of IPL Shiny's Capabilities",
            de: "Das Spektrum der Möglichkeiten von IPL Shiny"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лікування судинних зірочок:** Ефективно видаляє розширені капіляри на обличчі, зменшує прояви куперозу та розацеа, прибирає стійке почервоніння.",
            ru: "**Лечение сосудистых звёздочек:** Эффективно удаляет расширенные капилляры на лице, уменьшает проявления купероза и розацеа, убирает стойкое покраснение.",
            en: "**Treatment of Spider Veins:** Effectively removes dilated capillaries on the face, reduces symptoms of rosacea, and eliminates persistent redness.",
            de: "**Behandlung von Besenreisern:** Entfernt effektiv erweiterte Kapillaren im Gesicht, reduziert die Symptome von Couperose und beseitigt anhaltende Rötungen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Видалення пігментних плям:** Освітлює та усуває веснянки, сонячне та вікове лентіго, роблячи тон шкіри ідеально рівним.",
            ru: "**Удаление пигментных пятен:** Осветляет и устраняет веснушки, солнечное и возрастное лентиго, делая тон кожи идеально ровным.",
            en: "**Pigment Spot Removal:** Lightens and eliminates freckles, solar and age-related lentigo, making the skin tone perfectly even.",
            de: "**Entfernung von Pigmentflecken:** Hellt auf und beseitigt Sommersprossen, solare und altersbedingte Lentigines und sorgt für einen perfekt ebenmäßigen Hautton."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Терапія акне:** Чинить потужну антибактеріальну та протизапальну дію, зменшуючи кількість висипань та усуваючи плями постакне.",
            ru: "**Терапия акне:** Оказывает мощное антибактериальное и противовоспалительное действие, уменьшая количество высыпаний и устраняя пятна постакне.",
            en: "**Acne Therapy:** Has a powerful antibacterial and anti-inflammatory effect, reducing the number of breakouts and eliminating post-acne spots.",
            de: "**Akne-Therapie:** Wirkt stark antibakteriell und entzündungshemmend, reduziert die Anzahl der Ausbrüche und beseitigt Post-Akne-Flecken."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Фотоомолодження:** Комплексна процедура, яка одночасно бореться з пігментом, судинами та стимулює вироблення колагену, покращуючи пружність та текстуру шкіри.",
            ru: "**Фотоомоложение:** Комплексная процедура, которая одновременно борется с пигментом, сосудами и стимулирует выработку коллагена, улучшая упругость и текстуру кожи.",
            en: "**Photorejuvenation:** A comprehensive procedure that simultaneously combats pigment, vessels, and stimulates collagen production, improving skin firmness and texture.",
            de: "**Photorejuvenation:** Ein umfassendes Verfahren, das gleichzeitig Pigmente und Gefäße bekämpft und die Kollagenproduktion anregt, wodurch die Hautfestigkeit und -textur verbessert werden."
          }
        },
        {
          type: "image",
          content: { image: "https://ihc-russia.ru/upload/iblock/d0d/kiez1vqmkg49bco1yy4c0haqmeodasp6.jpeg" },
          sideText: {
            uk: "Завдяки багатозадачності IPL, за один курс процедур можна вирішити одразу декілька естетичних проблем.",
            ru: "Благодаря многозадачности IPL, за один курс процедур можно решить сразу несколько эстетических проблем.",
            en: "Thanks to the multitasking capabilities of IPL, several aesthetic problems can be solved in a single course of procedures.",
            de: "Dank der Multitasking-Fähigkeiten von IPL können mehrere ästhetische Probleme in einem einzigen Behandlungskurs gelöst werden."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Переваги лікування на апараті IPL Shiny",
            ru: "Преимущества лечения на аппарате IPL Shiny",
            en: "Advantages of Treatment with the IPL Shiny Device",
            de: "Vorteile der Behandlung mit dem IPL Shiny-Gerät"
          }
        },
        {
          type: "list",
          content: {
            uk: "Висока ефективність та видимий результат.\nБезпека та неінвазивність (без пошкодження шкіри).\nМінімальний період реабілітації.\nКомфортність процедури завдяки системі охолодження.\nШвидкість: сеанс триває 20-40 хвилин.",
            ru: "Высокая эффективность и видимый результат.\nБезопасность и неинвазивность (без повреждения кожи).\nМинимальный период реабилитации.\nКомфортность процедуры благодаря системе охлаждения.\nСкорость: сеанс длится 20-40 минут.",
            en: "High efficiency and visible results.\nSafety and non-invasiveness (no skin damage).\nMinimal recovery period.\nComfort of the procedure due to the cooling system.\nSpeed: a session lasts 20-40 minutes.",
            de: "Hohe Effizienz und sichtbare Ergebnisse.\nSicherheit und Nicht-Invasivität (keine Hautschäden).\nMinimale Erholungszeit.\nKomfort des Verfahrens dank des Kühlsystems.\nGeschwindigkeit: eine Sitzung dauert 20-40 Minuten."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor3", "doctor5", "doctor1"],
      subservices: ["subservice19", "subservice20", "subservice21", "subservice22"]
    },

    {
      id: "service6",
      title: {
        uk: "Ботулінотерапія",
        ru: "Ботулинотерапия",
        en: "Botulinum Toxin Therapy",
        de: "Botulinumtoxin-Therapie"
      },
      slug: "botulinoterapiya",
      mainImage: "https://images.unsplash.com/photo-1709813610121-e2a51545e212?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        {
          type: "heading",
          content: {
            uk: "Керування мімікою для бездоганно гладкої шкіри",
            ru: "Управление мимикой для безупречно гладкой кожи",
            en: "Managing Facial Expressions for Flawlessly Smooth Skin",
            de: "Mimikmanagement für makellos glatte Haut"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ботулінотерапія — це безпечна та надзвичайно ефективна ін'єкційна методика, що використовує препарати на основі ботулотоксину типу А. Вона спрямована на розслаблення мімічних м'язів, що призводить до розгладження зморшок та запобігає утворенню нових. Це «золотий стандарт» у сучасній косметології для отримання природного результату омолодження, що дозволяє зберегти вашу індивідуальність, але надати обличчю відпочилого та спокійного вигляду.",
            ru: "Ботулинотерапия — это безопасная и чрезвычайно эффективная инъекционная методика, использующая препараты на основе ботулотоксина типа А. Она направлена на расслабление мимических мышц, что приводит к разглаживанию морщин и предотвращает образование новых. Это «золотой стандарт» в современной косметологии для получения естественного результата омоложения, который позволяет сохранить вашу индивидуальность, но придать лицу отдохнувший и спокойный вид.",
            en: "Botulinum toxin therapy is a safe and extremely effective injection technique that uses preparations based on botulinum toxin type A. It is aimed at relaxing facial muscles, which leads to the smoothing of wrinkles and prevents the formation of new ones. It is the \"gold standard\" in modern cosmetology for achieving a natural rejuvenation result that preserves your individuality while giving your face a rested and calm appearance.",
            de: "Die Botulinumtoxin-Therapie ist eine sichere und äußerst wirksame Injektionstechnik, die Präparate auf der Basis von Botulinumtoxin Typ A verwendet. Sie zielt darauf ab, die Gesichtsmuskeln zu entspannen, was zur Glättung von Falten führt und die Bildung neuer verhindert. Es ist der „Goldstandard“ in der modernen Kosmetologie, um ein natürliches Verjüngungsergebnis zu erzielen, das Ihre Individualität bewahrt und Ihrem Gesicht ein ausgeruhtes und ruhiges Aussehen verleiht."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Як це працює? Наука на службі краси",
            ru: "Как это работает? Наука на службе красоты",
            en: "How does it work? Science in the service of beauty",
            de: "Wie funktioniert das? Wissenschaft im Dienste der Schönheit"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ботулотоксин типу А — це очищений природний протеїн, який при введенні в м'яз тимчасово блокує передачу нервового імпульсу. М'яз перестає скорочуватися у відповідь на ваші емоції (наприклад, коли ви хмуритеся), і шкіра над ним розгладжується. Важливо розуміти, що препарат не «заморожує» обличчя, а лише знімає гіпертонус, надмірну напругу певних м'язів. Дозування підбирається лікарем індивідуально для збереження живої та природної міміки.",
            ru: "Ботулотоксин типа А — это очищенный природный протеин, который при введении в мышцу временно блокирует передачу нервного импульса. Мышца перестает сокращаться в ответ на ваши эмоции (например, когда вы хмуритесь), и кожа над ней разглаживается. Важно понимать, что препарат не «замораживает» лицо, а лишь снимает гипертонус, избыточное напряжение определенных мышц. Дозировка подбирается врачом индивидуально для сохранения живой и естественной мимики.",
            en: "Botulinum toxin type A is a purified natural protein that, when injected into a muscle, temporarily blocks the transmission of a nerve impulse. The muscle stops contracting in response to your emotions (for example, when you frown), and the skin above it smooths out. It is important to understand that the drug does not \"freeze\" the face, but only relieves hypertonicity, excessive tension of certain muscles. The dosage is selected by the doctor individually to preserve lively and natural facial expressions.",
            de: "Botulinumtoxin Typ A ist ein gereinigtes natürliches Protein, das bei Injektion in einen Muskel die Übertragung eines Nervenimpulses vorübergehend blockiert. Der Muskel hört auf, sich als Reaktion auf Ihre Emotionen zusammenzuziehen (zum Beispiel, wenn Sie die Stirn runzeln), und die Haut darüber glättet sich. Es ist wichtig zu verstehen, dass das Medikament das Gesicht nicht „einfriert“, sondern nur den Hypertonus, die übermäßige Spannung bestimmter Muskeln, lindert. Die Dosierung wird vom Arzt individuell ausgewählt, um lebendige und natürliche Gesichtsausdrücke zu erhalten."
          }
        },
        {
          type: "image",
          content: { image: "https://optim.tildacdn.com/tild6138-3431-4963-b033-313030616230/-/format/webp/2148853846.jpg.webp" },
          sideText: {
            uk: "Усі процедури проводяться досвідченими лікарями-ін'єкціоністами, які досконало володіють анатомією обличчя та використовують лише сертифіковані препарати світових брендів.",
            ru: "Все процедуры проводятся опытными врачами-инъекционистами, которые в совершенстве владеют анатомией лица и используют только сертифицированные препараты мировых брендов.",
            en: "All procedures are performed by experienced injectionist doctors who have a perfect command of facial anatomy and use only certified products from world brands.",
            de: "Alle Eingriffe werden von erfahrenen Injektionsärzten durchgeführt, die die Gesichtsanatomie perfekt beherrschen und nur zertifizierte Produkte von Weltmarken verwenden."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Напрямки застосування ботулінотерапії",
            ru: "Направления применения ботулинотерапии",
            en: "Areas of application of botulinum therapy",
            de: "Anwendungsbereiche der Botulinumtherapie"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Корекція мімічних зморшок:** Це основне показання. Процедура ефективно розгладжує горизонтальні зморшки на лобі, вертикальні заломи на міжбрів'ї та «гусячі лапки» навколо очей.",
            ru: "**Коррекция мимических морщин:** Это основное показание. Процедура эффективно разглаживает горизонтальные морщины на лбу, вертикальные заломы на межбровье и «гусиные лапки» вокруг глаз.",
            en: "**Correction of mimic wrinkles:** This is the main indication. The procedure effectively smoothes horizontal wrinkles on the forehead, vertical folds on the glabella, and “crow’s feet” around the eyes.",
            de: "**Korrektur von Mimikfalten:** Dies ist die Hauptindikation. Das Verfahren glättet effektiv horizontale Falten auf der Stirn, vertikale Falten auf der Glabella und „Krähenfüße“ um die Augen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лікування гіпергідрозу:** Ін'єкції ботулотоксину є найефективнішим методом лікування підвищеної пітливості пахв, долонь та стоп.",
            ru: "**Лечение гипергидроза:** Инъекции ботулотоксина являются самым эффективным методом лечения повышенной потливости подмышек, ладоней и стоп.",
            en: "**Treatment of hyperhidrosis:** Injections of botulinum toxin are the most effective method of treating excessive sweating of the armpits, palms, and feet.",
            de: "**Behandlung von Hyperhidrose:** Injektionen von Botulinumtoxin sind die wirksamste Methode zur Behandlung von übermäßigem Schwitzen der Achselhöhlen, Handflächen und Füße."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Делікатна корекція:** За допомогою ботулотоксину можна досягти ефекту ліфтингу брів, підняти опущені куточки губ, скоригувати «ясенну посмішку» або розслабити тяжі на шиї.",
            ru: "**Деликатная коррекция:** С помощью ботулотоксина можно достичь эффекта лифтинга бровей, приподнять опущенные уголки губ, скорректировать «десневую улыбку» или расслабить тяжи на шее.",
            en: "**Delicate correction:** With the help of botulinum toxin, you can achieve the effect of a brow lift, lift the drooping corners of the lips, correct a “gummy smile” or relax the bands on the neck.",
            de: "**Feinkorrektur:** Mit Hilfe von Botulinumtoxin können Sie den Effekt eines Augenbrauenlifts erzielen, die herabhängenden Mundwinkel anheben, ein „Zahnfleischlächeln“ korrigieren oder die Bänder am Hals entspannen."
          }
        },
        {
          type: "image",
          content: { image: "https://avismed-nsk.ru/wp-content/uploads/2021/11/botulinoterapiya-scaled.webp" },
          sideText: {
            uk: "Результат процедури — гладенька шкіра та природний вираз обличчя, що випромінює спокій та молодість.",
            ru: "Результат процедуры — гладкая кожа и естественное выражение лица, излучающее спокойствие и молодость.",
            en: "The result of the procedure is smooth skin and a natural facial expression that radiates calmness and youth.",
            de: "Das Ergebnis des Eingriffs ist eine glatte Haut und ein natürlicher Gesichtsausdruck, der Ruhe und Jugend ausstrahlt."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Процедура, ефект та тривалість",
            ru: "Процедура, эффект и продолжительность",
            en: "Procedure, effect and duration",
            de: "Verfahren, Wirkung und Dauer"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Процедура є швидкою (15-30 хвилин) та комфортною. Ефект починає проявлятися на 3-5 день і досягає свого максимуму через 2 тижні. Результат зберігається в середньому 4-6 місяців. При регулярних процедурах ефект може тривати довше, оскільки м'язи «відучуються» від звички активно скорочуватися.",
            ru: "Процедура быстрая (15-30 минут) и комфортная. Эффект начинает проявляться на 3-5 день и достигает своего максимума через 2 недели. Результат сохраняется в среднем 4-6 месяцев. При регулярных процедурах эффект может длиться дольше, так как мышцы «отучаются» от привычки активно сокращаться.",
            en: "The procedure is fast (15-30 minutes) and comfortable. The effect begins to appear on the 3-5th day and reaches its maximum in 2 weeks. The result lasts an average of 4-6 months. With regular procedures, the effect can last longer, as the muscles “unlearn” the habit of actively contracting.",
            de: "Das Verfahren ist schnell (15-30 Minuten) und komfortabel. Die Wirkung tritt am 3.-5. Tag ein und erreicht ihr Maximum in 2 Wochen. Das Ergebnis hält durchschnittlich 4-6 Monate an. Bei regelmäßigen Eingriffen kann die Wirkung länger anhalten, da die Muskeln die Gewohnheit des aktiven Zusammenziehens „verlernen“."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Безпека перш за все",
            ru: "Безопасность прежде всего",
            en: "Safety first",
            de: "Sicherheit geht vor"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ботулінотерапія є однією з найбільш вивчених процедур в естетичній медицині. При правильному виконанні кваліфікованим лікарем та використанні сертифікованих препаратів вона є абсолютно безпечною та не викликає звикання.",
            ru: "Ботулинотерапия является одной из самых изученных процедур в эстетической медицине. При правильном выполнении квалифицированным врачом и использовании сертифицированных препаратов она абсолютно безопасна и не вызывает привыкания.",
            en: "Botulinum therapy is one of the most studied procedures in aesthetic medicine. When performed correctly by a qualified doctor and using certified drugs, it is completely safe and not addictive.",
            de: "Die Botulinumtherapie ist eines der am besten untersuchten Verfahren in der ästhetischen Medizin. Bei korrekter Durchführung durch einen qualifizierten Arzt und Verwendung zertifizierter Medikamente ist sie absolut sicher und nicht süchtig machend."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3", "faq4"],
      doctors: ["doctor1", "doctor4", "doctor2"],
      subservices: ["subservice23", "subservice24", "subservice25", "subservice26"]
    },

    {
      id: "service7",
      title: {
        uk: "Трихологія",
        ru: "Трихология",
        en: "Trichology",
        de: "Trichologie"
      },
      slug: "trykholohiya",
      mainImage: "https://plus.unsplash.com/premium_photo-1674841252227-02aff6975847?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        {
          type: "heading",
          content: {
            uk: "Науковий підхід до здоров'я та краси вашого волосся",
            ru: "Научный подход к здоровью и красоте ваших волос",
            en: "A Scientific Approach to the Health and Beauty of Your Hair",
            de: "Ein wissenschaftlicher Ansatz für die Gesundheit und Schönheit Ihrer Haare"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Трихологія — це спеціалізований розділ дерматології, що займається глибокою діагностикою та лікуванням захворювань волосся та шкіри голови. Густе, блискуче волосся — це не лише елемент краси, але й важливий індикатор здоров'я. Наші лікарі-трихологи не просто борються з симптомами, а знаходять і усувають першопричини проблем, розробляючи для кожного пацієнта індивідуальну та комплексну програму лікування.",
            ru: "Трихология — это специализированный раздел дерматологии, занимающийся глубокой диагностикой и лечением заболеваний волос и кожи головы. Густые, блестящие волосы — это не только элемент красоты, но и важный индикатор здоровья. Наши врачи-трихологи не просто борются с симптомами, а находят и устраняют первопричины проблем, разрабатывая для каждого пациента индивидуальную и комплексную программу лечения.",
            en: "Trichology is a specialized branch of dermatology dedicated to the deep diagnosis and treatment of hair and scalp diseases. Thick, shiny hair is not just an element of beauty but also an important indicator of health. Our trichologists do not just fight symptoms; they find and eliminate the root causes of problems, developing an individual and comprehensive treatment program for each patient.",
            de: "Die Trichologie ist ein spezialisierter Zweig der Dermatologie, der sich der tiefen Diagnose und Behandlung von Haar- und Kopfhauterkrankungen widmet. Dickes, glänzendes Haar ist nicht nur ein Element der Schönheit, sondern auch ein wichtiger Indikator für die Gesundheit. Unsere Trichologen bekämpfen nicht nur Symptome; sie finden und beseitigen die eigentlichen Ursachen von Problemen und entwickeln für jeden Patienten ein individuelles und umfassendes Behandlungsprogramm."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Коли варто звернутися до трихолога?",
            ru: "Когда следует обратиться к трихологу?",
            en: "When Should You See a Trichologist?",
            de: "Wann sollten Sie einen Trichologen aufsuchen?"
          }
        },
        {
          type: "list",
          content: {
            uk: "Якщо ви помітили посилене випадіння волосся.\nЯкщо волосся стало тонким, рідким та втратило об'єм.\nПри появі лупи, свербежу, почервоніння або висипань на шкірі голови.\nЯкщо волосся стало надмірно жирним або сухим.\nПри погіршенні якості волосся (ламкість, тьмяність).",
            ru: "Если вы заметили усиленное выпадение волос.\nЕсли волосы стали тонкими, редкими и потеряли объем.\nПри появлении перхоти, зуда, покраснения или высыпаний на коже головы.\nЕсли волосы стали чрезмерно жирными или сухими.\nПри ухудшении качества волос (ломкость, тусклость).",
            en: "If you notice increased hair loss.\nIf your hair has become thin, sparse, and lost volume.\nIf you have dandruff, itching, redness, or rashes on your scalp.\nIf your hair has become excessively oily or dry.\nIf the quality of your hair has deteriorated (brittleness, dullness).",
            de: "Wenn Sie vermehrten Haarausfall bemerken.\nWenn Ihr Haar dünn, spärlich geworden ist und an Volumen verloren hat.\nWenn Sie Schuppen, Juckreiz, Rötungen oder Ausschläge auf Ihrer Kopfhaut haben.\nWenn Ihr Haar übermäßig fettig oder trocken geworden ist.\nWenn sich die Qualität Ihres Haares verschlechtert hat (Brüchigkeit, Mattheit)."
          }
        },
        {
          type: "image",
          content: { image: "https://detali.com/wp-content/uploads/2023/10/young-woman-with-hair-problem-receiving-injection-2022-05-31-02-21-43-utc_novyj-razmer-scaled.jpg" },
          sideText: {
            uk: "Основа будь-якого успішного лікування — це точна діагностика. Ми використовуємо цифрову трихоскопію для детального аналізу стану шкіри голови та волосся.",
            ru: "Основа любого успешного лечения — это точная диагностика. Мы используем цифровую трихоскопию для детального анализа состояния кожи головы и волос.",
            en: "The basis of any successful treatment is an accurate diagnosis. We use digital trichoscopy for a detailed analysis of the scalp and hair condition.",
            de: "Die Grundlage jeder erfolgreichen Behandlung ist eine genaue Diagnose. Wir verwenden die digitale Trichoskopie für eine detaillierte Analyse des Kopfhaut- und Haarzustands."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Наш комплексний підхід до лікування",
            ru: "Наш комплексный подход к лечению",
            en: "Our Comprehensive Approach to Treatment",
            de: "Unser umfassender Behandlungsansatz"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Діагностика:** Кожен візит починається з консультації та трихоскопії для визначення точної причини проблеми.",
            ru: "**Диагностика:** Каждый визит начинается с консультации и трихоскопии для определения точной причины проблемы.",
            en: "**Diagnostics:** Every visit begins with a consultation and trichoscopy to determine the exact cause of the problem.",
            de: "**Diagnostik:** Jeder Besuch beginnt mit einer Beratung und Trichoskopie, um die genaue Ursache des Problems zu ermitteln."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лікування захворювань шкіри голови:** Ми ефективно лікуємо себорею та інші дерматити, створюючи здорову основу для росту міцного волосся.",
            ru: "**Лечение заболеваний кожи головы:** Мы эффективно лечим себорею и другие дерматиты, создавая здоровую основу для роста крепких волос.",
            en: "**Scalp Disease Treatment:** We effectively treat seborrhea and other dermatitis, creating a healthy foundation for strong hair growth.",
            de: "**Behandlung von Kopfhauterkrankungen:** Wir behandeln Seborrhoe und andere Dermatitiden wirksam und schaffen eine gesunde Grundlage für starkes Haarwachstum."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Терапія випадіння волосся:** На основі діагнозу ми розробляємо індивідуальну програму, що може включати ін'єкційні методики, професійний догляд та медикаментозну терапію.",
            ru: "**Терапия выпадения волос:** На основе диагноза мы разрабатываем индивидуальную программу, которая может включать инъекционные методики, профессиональный уход и медикаментозную терапию.",
            en: "**Hair Loss Therapy:** Based on the diagnosis, we develop an individual program that may include injection techniques, professional care, and medication therapy.",
            de: "**Haarausfalltherapie:** Basierend auf der Diagnose entwickeln wir ein individuelles Programm, das Injektionstechniken, professionelle Pflege und medikamentöse Therapie umfassen kann."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Стимуляція росту:** Ін'єкційні процедури, такі як мезотерапія та плазмоліфтинг, доставляють поживні речовини та фактори росту безпосередньо до волосяних фолікулів, пробуджуючи їх та стимулюючи ріст нового волосся.",
            ru: "**Стимуляция роста:** Инъекционные процедуры, такие как мезотерапия и плазмолифтинг, доставляют питательные вещества и факторы роста непосредственно к волосяным фолликулам, пробуждая их и стимулируя рост новых волос.",
            en: "**Growth Stimulation:** Injection procedures, such as mesotherapy and plasmolifting, deliver nutrients and growth factors directly to the hair follicles, awakening them and stimulating new hair growth.",
            de: "**Wachstumsstimulation:** Injektionsverfahren wie Mesotherapie und Plasmalifting liefern Nährstoffe und Wachstumsfaktoren direkt an die Haarfollikel, wecken sie auf und stimulieren das Wachstum neuer Haare."
          }
        },
        {
          type: "image",
          content: { image: "https://static.tildacdn.com/tild6233-6135-4633-b261-333032636630/09085540_.jpg" },
          sideText: {
            uk: "Ін'єкційні методики є одним з найефективніших інструментів у арсеналі трихолога для боротьби з випадінням волосся.",
            ru: "Инъекционные методики являются одним из самых эффективных инструментов в арсенале трихолога для борьбы с выпадением волос.",
            en: "Injection techniques are one of the most effective tools in a trichologist's arsenal for combating hair loss.",
            de: "Injektionstechniken sind eines der wirksamsten Werkzeuge im Arsenal eines Trichologen zur Bekämpfung von Haarausfall."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Чому не варто займатися самолікуванням?",
            ru: "Почему не стоит заниматься самолечением?",
            en: "Why you shouldn't self-medicate",
            de: "Warum Sie sich nicht selbst behandeln sollten"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Причини проблем з волоссям часто є комплексними і можуть бути пов'язані з гормональним фоном, дефіцитами в організмі або іншими захворюваннями. Використання неправильно підібраних шампунів чи «народних методів» у кращому випадку буде неефективним, а в гіршому — може погіршити стан. Лише лікар може встановити правильний діагноз та призначити дієве лікування.",
            ru: "Причины проблем с волосами часто комплексные и могут быть связаны с гормональным фоном, дефицитами в организме или другими заболеваниями. Использование неправильно подобранных шампуней или «народных методов» в лучшем случае будет неэффективным, а в худшем — может усугубить состояние. Только врач может поставить правильный диагноз и назначить действенное лечение.",
            en: "The causes of hair problems are often complex and can be related to hormonal background, deficiencies in the body, or other diseases. Using incorrectly chosen shampoos or \"folk methods\" will at best be ineffective, and at worst - can aggravate the condition. Only a doctor can make a correct diagnosis and prescribe effective treatment.",
            de: "Die Ursachen von Haarproblemen sind oft komplex und können mit dem hormonellen Hintergrund, Mängeln im Körper oder anderen Krankheiten zusammenhängen. Die Verwendung von falsch ausgewählten Shampoos oder „Volksmethoden“ ist bestenfalls unwirksam und kann im schlimmsten Fall den Zustand verschlimmern. Nur ein Arzt kann eine korrekte Diagnose stellen und eine wirksame Behandlung verschreiben."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor8", "doctor1"],
      subservices: ["subservice27", "subservice28", "subservice29", "subservice30"]
    },


    {
      id: "service8",
      title: {
        uk: "Мезотерапія",
        ru: "Мезотерапия",
        en: "Mesotherapy",
        de: "Mesotherapie"
      },
      slug: "mezoterapiya",
      mainImage: "https://re-age.ru/wp-content/uploads/2021/04/ineczii-botulotoksina-1.jpg",
      content: [
        {
          type: "heading",
          content: {
            uk: "Адресна доставка краси та здоров'я вашій шкірі",
            ru: "Адресная доставка красоты и здоровья вашей коже",
            en: "Targeted Delivery of Beauty and Health to Your Skin",
            de: "Gezielte Lieferung von Schönheit und Gesundheit für Ihre Haut"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Мезотерапія — це одна з найпопулярніших ін'єкційних методик у світі, заснована на принципі «мало, рідко та в потрібне місце». Суть методу полягає у введенні мікродоз індивідуально підібраних коктейлів з біологічно активних речовин безпосередньо в шкіру. Такий підхід забезпечує максимальну концентрацію корисних компонентів саме там, де це необхідно, дозволяючи вирішувати широкий спектр проблем обличчя, тіла та волосся.",
            ru: "Мезотерапия — это одна из самых популярных инъекционных методик в мире, основанная на принципе «мало, редко и в нужное место». Суть метода заключается во введении микродоз индивидуально подобранных коктейлей из биологически активных веществ непосредственно в кожу. Такой подход обеспечивает максимальную концентрацию полезных компонентов именно там, где это необходимо, позволяя решать широкий спектр проблем лица, тела и волос.",
            en: "Mesotherapy is one of the most popular injection techniques in the world, based on the principle \"a little, rarely, and in the right place.\" The essence of the method is the introduction of micro-doses of individually selected cocktails of biologically active substances directly into the skin. This approach ensures the maximum concentration of beneficial components exactly where they are needed, allowing for the resolution of a wide range of problems for the face, body, and hair.",
            de: "Die Mesotherapie ist eine der beliebtesten Injektionstechniken der Welt und basiert auf dem Prinzip „wenig, selten und am richtigen Ort“. Die Essenz der Methode besteht in der Einführung von Mikrodosen individuell ausgewählter Cocktails aus biologisch aktiven Substanzen direkt in die Haut. Dieser Ansatz gewährleistet die maximale Konzentration nützlicher Komponenten genau dort, wo sie benötigt werden, und ermöglicht die Lösung einer Vielzahl von Problemen im Gesicht, am Körper und an den Haaren."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Що входить до складу «коктейлів краси»?",
            ru: "Что входит в состав «коктейлей красоты»?",
            en: "What is in the \"beauty cocktails\"?",
            de: "Was ist in den „Schönheitscocktails“ enthalten?"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Лікар-косметолог створює унікальний рецепт для кожного пацієнта, виходячи з його потреб. До складу препаратів можуть входити гіалуронова кислота, вітаміни, мікроелементи, амінокислоти, пептиди, антиоксиданти, а також ліполітичні та дренажні компоненти.",
            ru: "Врач-косметолог создает уникальный рецепт для каждого пациента, исходя из его потребностей. В состав препаратов могут входить гиалуроновая кислота, витамины, микроэлементы, аминокислоты, пептиды, антиоксиданты, а также липолитические и дренажные компоненты.",
            en: "The cosmetologist creates a unique recipe for each patient based on their needs. The preparations may include hyaluronic acid, vitamins, microelements, amino acids, peptides, antioxidants, as well as lipolytic and drainage components.",
            de: "Der Kosmetologe erstellt für jeden Patienten ein einzigartiges Rezept, das auf seinen Bedürfnissen basiert. Die Präparate können Hyaluronsäure, Vitamine, Spurenelemente, Aminosäuren, Peptide, Antioxidantien sowie lipolytische und entwässernde Komponenten enthalten."
          }
        },
        {
          type: "image",
          content: { image: "https://neuroclinic.medichi23.ru/upload/iblock/d5b/yjpx67i4nzbsh2ipmsrqa0gwajdt4vwe.jpg" },
          sideText: {
            uk: "Індивідуальний підбір компонентів є ключем до високої ефективності процедури.",
            ru: "Индивидуальный подбор компонентов является ключом к высокой эффективности процедуры.",
            en: "The individual selection of components is the key to the high effectiveness of the procedure.",
            de: "Die individuelle Auswahl der Komponenten ist der Schlüssel zur hohen Wirksamkeit des Verfahrens."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Сфери застосування мезотерапії",
            ru: "Сферы применения мезотерапии",
            en: "Areas of application of mesotherapy",
            de: "Anwendungsbereiche der Mesotherapie"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Мезотерапія обличчя:** Ідеально підходить для зволоження, покращення кольору обличчя, боротьби з дрібними зморшками та профілактики старіння. Надає шкірі знаменитого ефекту «мезосяйва».",
            ru: "**Мезотерапия лица:** Идеально подходит для увлажнения, улучшения цвета лица, борьбы с мелкими морщинами и профилактики старения. Придает коже знаменитый эффект «мезосияния».",
            en: "**Facial mesotherapy:** Ideal for moisturizing, improving complexion, combating fine wrinkles, and preventing aging. Gives the skin the famous \"meso-glow\" effect.",
            de: "**Gesichtsmesotherapie:** Ideal zur Befeuchtung, Verbesserung des Teints, Bekämpfung feiner Fältchen und zur Vorbeugung des Alterns. Verleiht der Haut den berühmten „Meso-Glow“-Effekt."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Мезотерапія тіла:** Допомагає підвищити пружність шкіри, зменшити прояви розтяжок, а також скоригувати локальні жирові відкладення за допомогою ліполітичних коктейлів.",
            ru: "**Мезотерапия тела:** Помогает повысить упругость кожи, уменьшить проявления растяжек, а также скорректировать локальные жировые отложения с помощью липолитических коктейлей.",
            en: "**Body mesotherapy:** Helps to increase skin firmness, reduce the appearance of stretch marks, and also correct local fat deposits with the help of lipolytic cocktails.",
            de: "**Körpermesotherapie:** Hilft, die Hautfestigkeit zu erhöhen, das Erscheinungsbild von Dehnungsstreifen zu reduzieren und auch lokale Fettablagerungen mit Hilfe von lipolytischen Cocktails zu korrigieren."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Мезотерапія шкіри голови:** Є однією з найефективніших методик для лікування випадіння волосся та стимуляції його росту. Поживні речовини доставляються безпосередньо до волосяних фолікулів.",
            ru: "**Мезотерапия кожи головы:** Является одной из самых эффективных методик для лечения выпадения волос и стимуляции их роста. Питательные вещества доставляются непосредственно к волосяным фолликулам.",
            en: "**Scalp mesotherapy:** It is one of the most effective methods for treating hair loss and stimulating its growth. Nutrients are delivered directly to the hair follicles.",
            de: "**Kopfhaut-Mesotherapie:** Es ist eine der wirksamsten Methoden zur Behandlung von Haarausfall und zur Stimulierung des Haarwachstums. Nährstoffe werden direkt zu den Haarfollikeln transportiert."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Мезотерапія для корекції целюліту:** Спеціальні коктейлі покращують мікроциркуляцію та лімфодренаж, руйнують жирові клітини та вирівнюють рельєф шкіри.",
            ru: "**Мезотерапия для коррекции целлюлита:** Специальные коктейли улучшают микроциркуляцию и лимфодренаж, разрушают жировые клетки и выравнивают рельеф кожи.",
            en: "**Mesotherapy for cellulite correction:** Special cocktails improve microcirculation and lymphatic drainage, destroy fat cells, and even out the skin relief.",
            de: "**Mesotherapie zur Cellulite-Korrektur:** Spezielle Cocktails verbessern die Mikrozirkulation und Lymphdrainage, zerstören Fettzellen und glätten das Hautrelief."
          }
        },
        {
          type: "image",
          content: { image: "https://re-age.ru/wp-content/uploads/2020/09/mezoterapiya-licza.jpg" },
          sideText: {
            uk: "Мезотерапія завжди проводиться курсом, оскільки має накопичувальний ефект. Кількість процедур визначається лікарем індивідуально.",
            ru: "Мезотерапия всегда проводится курсом, так как имеет накопительный эффект. Количество процедур определяется врачом индивидуально.",
            en: "Mesotherapy is always carried out in a course, as it has a cumulative effect. The number of procedures is determined by the doctor individually.",
            de: "Die Mesotherapie wird immer in einem Kurs durchgeführt, da sie eine kumulative Wirkung hat. Die Anzahl der Behandlungen wird vom Arzt individuell festgelegt."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Переваги мезотерапії",
            ru: "Преимущества мезотерапии",
            en: "Advantages of Mesotherapy",
            de: "Vorteile der Mesotherapie"
          }
        },
        {
          type: "list",
          content: {
            uk: "Цілеспрямована дія: активні речовини потрапляють точно в ціль.\nВисока ефективність порівняно з косметичними засобами.\nТривалий результат завдяки накопичувальному ефекту.\nМінімальний системний вплив на організм.",
            ru: "Целенаправленное действие: активные вещества попадают точно в цель.\nВысокая эффективность по сравнению с косметическими средствами.\nДлительный результат благодаря накопительному эффекту.\nМинимальное системное воздействие на организм.",
            en: "Targeted action: active substances hit the target exactly.\nHigh efficiency compared to cosmetic products.\nLong-lasting result due to the cumulative effect.\nMinimal systemic effect on the body.",
            de: "Gezielte Wirkung: Wirkstoffe treffen genau ins Ziel.\nHohe Effizienz im Vergleich zu kosmetischen Produkten.\nLanganhaltendes Ergebnis durch den kumulativen Effekt.\nMinimale systemische Wirkung auf den Körper."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor2", "doctor4", "doctor5", "doctor8"],
      subservices: ["subservice31", "subservice32", "subservice33", "subservice34"]
    },


  {
    id: "service9",
    title: {
    uk: "Біоревіталізація / Біорепарація",
      ru: "Биоревитализация / Биорепарация",
      en: "Biorevitalization / Bioreparation",
      de: "Biorevitalisierung / Bioreparation"
},
slug: "biorevitalizatsiya-bioreparatsiya",
    mainImage: "https://ihc-russia.ru/upload/iblock/83e/7uqesm6c0qs486vzmeoo93ubc64eujz4.jpeg",
    content: [
  {
    type: "heading",
    content: {
      uk: "Глибоке зволоження та відновлення шкіри на клітинному рівні",
      ru: "Глубокое увлажнение и восстановление кожи на клеточном уровне",
      en: "Deep Hydration and Skin Restoration at the Cellular Level",
      de: "Tiefe Hydratation und Hautreparatur auf zellulärer Ebene"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Біоревіталізація та біорепарація — це ін'єкційні методики, які є наступним кроком після мезотерапії в інтенсивному омолодженні шкіри. Їхня головна мета — не просто доставити поживні речовини, а створити в шкірі депо гіалуронової кислоти, запустивши потужні процеси регенерації, зволоження та відновлення. Це фундаментальні процедури для боротьби зі зневодненням, втратою тонусу та першими ознаками старіння.",
      ru: "Биоревитализация и биорепарация — это инъекционные методики, которые являются следующим шагом после мезотерапии в интенсивном омоложении кожи. Их главная цель — не просто доставить питательные вещества, а создать в коже депо гиалуроновой кислоты, запустив мощные процессы регенерации, увлажнения и восстановления. Это фундаментальные процедуры для борьбы с обезвоживанием, потерей тонуса и первыми признаками старения.",
      en: "Biorevitalization and bioreparation are injection techniques that are the next step after mesotherapy in intensive skin rejuvenation. Their main goal is not just to deliver nutrients, but to create a depot of hyaluronic acid in the skin, launching powerful processes of regeneration, hydration, and restoration. These are fundamental procedures for combating dehydration, loss of tone, and the first signs of aging.",
      de: "Biorevitalisierung und Bioreparation sind Injektionstechniken, die der nächste Schritt nach der Mesotherapie in der intensiven Hautverjüngung sind. Ihr Hauptziel ist es nicht nur, Nährstoffe zu liefern, sondern ein Depot von Hyaluronsäure in der Haut zu schaffen, das starke Regenerations-, Hydratations- und Wiederherstellungsprozesse in Gang setzt. Dies sind grundlegende Verfahren zur Bekämpfung von Dehydration, Tonusverlust und den ersten Anzeichen des Alterns."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Біоревіталізація: «жива вода» для вашої шкіри",
      ru: "Биоревитализация: «живая вода» для вашей кожи",
      en: "Biorevitalization: \"living water\" for your skin",
      de: "Biorevitalisierung: „lebendiges Wasser“ für Ihre Haut"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Класична біоревіталізація використовує препарати на основі чистої нестабілізованої гіалуронової кислоти. Потрапляючи в шкіру, вона, як магніт, притягує та утримує молекули води, створюючи потужний ефект гідратації. Це покращує середовище для клітин шкіри, стимулюючи їх до оновлення та виробництва колагену. Процедура ідеально підходить для молодої, зневодненої шкіри.",
      ru: "Классическая биоревитализация использует препараты на основе чистой нестабилизированной гиалуроновой кислоты. Попадая в кожу, она, как магнит, притягивает и удерживает молекулы воды, создавая мощный эффект гидратации. Это улучшает среду для клеток кожи, стимулируя их к обновлению и производству коллагена. Процедура идеально подходит для молодой, обезвоженной кожи.",
      en: "Classic biorevitalization uses preparations based on pure, non-stabilized hyaluronic acid. Once in the skin, it acts like a magnet, attracting and retaining water molecules, creating a powerful hydration effect. This improves the environment for skin cells, stimulating them to renew and produce collagen. The procedure is ideal for young, dehydrated skin.",
      de: "Die klassische Biorevitalisierung verwendet Präparate auf Basis reiner, nicht stabilisierter Hyaluronsäure. Einmal in der Haut, wirkt sie wie ein Magnet, der Wassermoleküle anzieht und bindet und so einen starken Hydratationseffekt erzeugt. Dies verbessert die Umgebung für die Hautzellen und regt sie zur Erneuerung und Kollagenproduktion an. Das Verfahren ist ideal für junge, dehydrierte Haut."
    }
  },
  {
    type: "image",
    content: { image: "https://cosmeticru.com/uploads/blog/main_image/265/main_1529051547102.jpg" },
    sideText: {
      uk: "Процедура проводиться папульною технікою, створюючи невеликі горбки, які розсмоктуються протягом 1-3 днів, насичуючи шкіру вологою.",
      ru: "Процедура проводится папульной техникой, создавая небольшие бугорки, которые рассасываются в течение 1-3 дней, насыщая кожу влагой.",
      en: "The procedure is performed using a papular technique, creating small bumps that are absorbed within 1-3 days, saturating the skin with moisture.",
      de: "Das Verfahren wird mit einer papulären Technik durchgeführt, bei der kleine Beulen entstehen, die innerhalb von 1-3 Tagen resorbiert werden und die Haut mit Feuchtigkeit sättigen."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Біорепарація: зволоження + відновлення",
      ru: "Биорепарация: увлажнение + восстановление",
      en: "Bioreparation: hydration + restoration",
      de: "Bioreparation: Hydratation + Wiederherstellung"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Біорепарація — це більш просунута версія процедури. Препарати для біорепарації, крім гіалуронової кислоти, містять цілий комплекс активних речовин: вітаміни, амінокислоти, пептиди, антиоксиданти. Ці компоненти не тільки зволожують, але й активно відновлюють пошкоджені клітини, борються з вільними радикалами та надають потужний омолоджуючий ефект. Це вибір для більш зрілої шкіри з вираженими ознаками старіння.",
      ru: "Биорепарация — это более продвинутая версия процедуры. Препараты для биорепарации, помимо гиалуроновой кислоты, содержат целый комплекс активных веществ: витамины, аминокислоты, пептиды, антиоксиданты. Эти компоненты не только увлажняют, но и активно восстанавливают поврежденные клетки, борются со свободными радикалами и оказывают мощный омолаживающий эффект. Это выбор для более зрелой кожи с выраженными признаками старения.",
      en: "Bioreparation is a more advanced version of the procedure. Bioreparation preparations, in addition to hyaluronic acid, contain a whole complex of active substances: vitamins, amino acids, peptides, antioxidants. These components not only moisturize, but also actively restore damaged cells, fight free radicals and have a powerful anti-aging effect. This is the choice for more mature skin with pronounced signs of aging.",
      de: "Bioreparation ist eine fortschrittlichere Version des Verfahrens. Bioreparationspräparate enthalten neben Hyaluronsäure einen ganzen Komplex an Wirkstoffen: Vitamine, Aminosäuren, Peptide, Antioxidantien. Diese Komponenten spenden nicht nur Feuchtigkeit, sondern stellen auch geschädigte Zellen aktiv wieder her, bekämpfen freie Radikale und haben eine starke Anti-Aging-Wirkung. Dies ist die Wahl für reifere Haut mit ausgeprägten Zeichen der Hautalterung."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Які проблеми вирішують ці методики?",
      ru: "Какие проблемы решают эти методики?",
      en: "What problems do these techniques solve?",
      de: "Welche Probleme lösen diese Techniken?"
    }
  },
  {
    type: "list",
    content: {
      uk: "Сухість, зневоднення, стягнутість шкіри.\nДрібні зморшки, особливо в зоні навколо очей.\nВтрата тонусу та пружності.\nТьмяний, «стресовий» колір обличчя.\nВідновлення шкіри після активної засмаги або пілінгів.\nПрофілактика передчасного старіння.",
      ru: "Сухость, обезвоживание, стянутость кожи.\nМелкие морщины, особенно в зоне вокруг глаз.\nПотеря тонуса и упругости.\nТусклый, «стрессовый» цвет лица.\nВосстановление кожи после активного загара или пилингов.\nПрофилактика преждевременного старения.",
      en: "Dryness, dehydration, tightness of the skin.\nFine wrinkles, especially in the area around the eyes.\nLoss of tone and elasticity.\nDull, “stressful” complexion.\nSkin restoration after active tanning or peeling.\nPrevention of premature aging.",
      de: "Trockenheit, Dehydration, Spannungsgefühl der Haut.\nFeine Fältchen, besonders im Augenbereich.\nVerlust von Tonus und Elastizität.\nFahler, „gestresster“ Teint.\nWiederherstellung der Haut nach aktivem Bräunen oder Peeling.\nVorbeugung vorzeitiger Hautalterung."
    }
  },
  {
    type: "image",
    content: { image: "https://static.tildacdn.com/tild3833-6138-4364-b334-316466306137/_0.png" },
    sideText: {
      uk: "Процедури можна проводити не тільки на обличчі, але й на таких делікатних зонах, як шия, декольте та кисті рук.",
      ru: "Процедуры можно проводить не только на лице, но и на таких деликатных зонах, как шея, декольте и кисти рук.",
      en: "The procedures can be performed not only on the face, but also on such delicate areas as the neck, décolleté and hands.",
      de: "Die Eingriffe können nicht nur im Gesicht, sondern auch an so empfindlichen Stellen wie Hals, Dekolleté und Händen durchgeführt werden."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Курс процедур для максимального ефекту",
      ru: "Курс процедур для максимального эффекта",
      en: "Course of procedures for maximum effect",
      de: "Behandlungskurs für maximale Wirkung"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Для досягнення стійкого результату біоревіталізація та біорепарація проводяться курсом з 3-5 процедур з інтервалом 2-4 тижні. Ефект від курсу зберігається до 6-12 місяців.",
      ru: "Для достижения стойкого результата биоревитализация и биорепарация проводятся курсом из 3-5 процедур с интервалом 2-4 недели. Эффект от курса сохраняется до 6-12 месяцев.",
      en: "To achieve a lasting result, biorevitalization and bioreparation are carried out in a course of 3-5 procedures with an interval of 2-4 weeks. The effect of the course lasts up to 6-12 months.",
      de: "Um ein dauerhaftes Ergebnis zu erzielen, werden Biorevitalisierung und Bioreparation in einem Kurs von 3-5 Eingriffen im Abstand von 2-4 Wochen durchgeführt. Die Wirkung des Kurses hält bis zu 6-12 Monate an."
    }
  }
],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor1", "doctor2", "doctor4"],
    subservices: ["subservice35", "subservice36", "subservice37", "subservice38"]
},

    {
      id: "service10",
      title: {
        uk: "Лазерна епіляція",
        ru: "Лазерная эпиляция",
        en: "Laser Hair Removal",
        de: "Laser-Haarentfernung"
      },
      slug: "lazerna-epilyatsiya",
      mainImage: "https://plus.unsplash.com/premium_photo-1661726996340-8398be0d48ae?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: [
        {
          type: "heading",
          content: {
            uk: "Ідеально гладенька шкіра назавжди: технологія лазерної епіляції",
            ru: "Идеально гладкая кожа навсегда: технология лазерной эпиляции",
            en: "Perfectly Smooth Skin Forever: Laser Hair Removal Technology",
            de: "Perfekt glatte Haut für immer: Laser-Haarentfernungs-Technologie"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Лазерна епіляція — це найсучасніший, найбезпечніший та найефективніший спосіб позбутися небажаного волосся на будь-якій ділянці тіла. Забудьте про щоденне гоління, подразнення, вросле волосся та болісні процедури воскової депіляції. Курс процедур лазерної епіляції дозволяє зруйнувати волосяний фолікул, забезпечуючи довготривалий результат і даруючи вам свободу та впевненість у будь-якій ситуації.",
            ru: "Лазерная эпиляция — это самый современный, безопасный и эффективный способ избавиться от нежелательных волос на любом участке тела. Забудьте о ежедневном бритье, раздражении, вросших волосах и болезненных процедурах восковой депиляции. Курс процедур лазерной эпиляции позволяет разрушить волосяной фолликул, обеспечивая долговременный результат и даря вам свободу и уверенность в любой ситуации.",
            en: "Laser hair removal is the most modern, safe, and effective way to get rid of unwanted hair on any part of the body. Forget about daily shaving, irritation, ingrown hairs, and painful waxing procedures. A course of laser hair removal procedures allows you to destroy the hair follicle, ensuring a long-lasting result and giving you freedom and confidence in any situation.",
            de: "Die Laser-Haarentfernung ist die modernste, sicherste und effektivste Methode, um unerwünschte Haare an jedem Körperteil loszuwerden. Vergessen Sie das tägliche Rasieren, Irritationen, eingewachsene Haare und schmerzhafte Wachsbehandlungen. Ein Kurs von Laser-Haarentfernungsbehandlungen ermöglicht es Ihnen, den Haarfollikel zu zerstören, was ein langanhaltendes Ergebnis gewährleistet und Ihnen Freiheit und Vertrauen in jeder Situation gibt."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Як це працює? Наука гладкої шкіри",
            ru: "Как это работает? Наука гладкой кожи",
            en: "How does it work? The science of smooth skin",
            de: "Wie funktioniert das? Die Wissenschaft der glatten Haut"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "В основі методу лежить принцип селективного фототермолізу. Лазерний промінь генерує світлову енергію, яку поглинає меланін — пігмент, що відповідає за колір волосся. Енергія світла перетворюється на тепло, яке концентрується у волосяному фолікулі і руйнує його, не пошкоджуючи при цьому навколишню шкіру. Оскільки лазер діє лише на волосся в активній стадії росту (анаген), для повного видалення необхідний курс процедур.",
            ru: "В основе метода лежит принцип селективного фототермолиза. Лазерный луч генерирует световую энергию, которую поглощает меланин — пигмент, отвечающий за цвет волоса. Энергия света преобразуется в тепло, которое концентрируется в волосяном фолликуле и разрушает его, не повреждая при этом окружающую кожу. Поскольку лазер действует только на волосы в активной стадии роста (анаген), для полного удаления необходим курс процедур.",
            en: "The method is based on the principle of selective photothermolysis. The laser beam generates light energy that is absorbed by melanin - the pigment responsible for hair color. The light energy is converted into heat, which is concentrated in the hair follicle and destroys it without damaging the surrounding skin. Since the laser only affects hair in the active growth stage (anagen), a course of procedures is necessary for complete removal.",
            de: "Die Methode basiert auf dem Prinzip der selektiven Photothermolyse. Der Laserstrahl erzeugt Lichtenergie, die von Melanin - dem für die Haarfarbe verantwortlichen Pigment - absorbiert wird. Die Lichtenergie wird in Wärme umgewandelt, die sich im Haarfollikel konzentriert und ihn zerstört, ohne die umgebende Haut zu schädigen. Da der Laser nur auf Haare in der aktiven Wachstumsphase (Anagen) wirkt, ist für eine vollständige Entfernung ein Behandlungskurs erforderlich."
          }
        },
        {
          type: "image",
          content: { image: "https://detali.com/wp-content/uploads/2023/10/lazernaya-ehpilyaciya-tela-1.jpg" },
          sideText: {
            uk: "Ми використовуємо сучасний діодний лазер з потужною системою контактного охолодження, що робить процедуру швидкою, ефективною та максимально комфортною.",
            ru: "Мы используем современный диодный лазер с мощной системой контактного охлаждения, что делает процедуру быстрой, эффективной и максимально комфортной.",
            en: "We use a modern diode laser with a powerful contact cooling system, which makes the procedure fast, effective, and as comfortable as possible.",
            de: "Wir verwenden einen modernen Diodenlaser mit einem leistungsstarken Kontaktkühlsystem, das das Verfahren schnell, effektiv und so angenehm wie möglich macht."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Переваги лазерної епіляції",
            ru: "Преимущества лазерной эпиляции",
            en: "Advantages of laser hair removal",
            de: "Vorteile der Laser-Haarentfernung"
          }
        },
        {
          type: "list",
          content: {
            uk: "Довготривалий результат: після повного курсу зникає до 95% волосся.\nВирішення проблеми врослого волосся: лазер руйнує фолікул, тому волосся більше не вростає.\nВідсутність подразнення: шкіра залишається гладенькою, без почервоніння та порізів від бритви.\nШвидкість: обробка великих зон (наприклад, ніг) займає відносно небагато часу.\nЕкономічність: у довгостроковій перспективі це вигідніше, ніж постійні витрати на віск чи бритви.",
            ru: "Долговременный результат: после полного курса исчезает до 95% волос.\nРешение проблемы вросших волос: лазер разрушает фолликул, поэтому волос больше не врастает.\nОтсутствие раздражения: кожа остается гладкой, без покраснения и порезов от бритвы.\nСкорость: обработка больших зон (например, ног) занимает относительно немного времени.\nЭкономичность: в долгосрочной перспективе это выгоднее, чем постоянные расходы на воск или бритвы.",
            en: "Long-term result: up to 95% of hair disappears after a full course.\nSolving the problem of ingrown hairs: the laser destroys the follicle, so the hair no longer grows in.\nNo irritation: the skin remains smooth, without redness and cuts from the razor.\nSpeed: processing large areas (e.g., legs) takes relatively little time.\nCost-effectiveness: in the long run, it is more profitable than constant expenses on wax or razors.",
            de: "Langzeitergebnis: Nach einem kompletten Kurs verschwinden bis zu 95 % der Haare.\nLösung des Problems eingewachsener Haare: Der Laser zerstört den Follikel, sodass das Haar nicht mehr einwächst.\nKeine Reizung: Die Haut bleibt glatt, ohne Rötungen und Schnitte vom Rasierer.\nGeschwindigkeit: Die Bearbeitung großer Flächen (z. B. Beine) dauert relativ wenig Zeit.\nWirtschaftlichkeit: Langfristig ist es rentabler als ständige Ausgaben für Wachs oder Rasierer."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Зони застосування",
            ru: "Зоны применения",
            en: "Application zones",
            de: "Anwendungsbereiche"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Лазерна епіляція ефективна та безпечна для будь-якої ділянки тіла:",
            ru: "Лазерная эпиляция эффективна и безопасна для любого участка тела:",
            en: "Laser hair removal is effective and safe for any part of the body:",
            de: "Die Laser-Haarentfernung ist wirksam und sicher für jeden Körperteil:"
          }
        },
        {
          type: "list",
          content: {
            uk: "Обличчя (верхня губа, підборіддя)\nРуки (повністю або частково)\nНоги (гомілки, стегна)\nЗона бікіні (класичне або глибоке)\nПахви, спина, живіт",
            ru: "Лицо (верхняя губа, подбородок)\nРуки (полностью или частично)\nНоги (голени, бедра)\nЗона бикини (классическое или глубокое)\nПодмышки, спина, живот",
            en: "Face (upper lip, chin)\nArms (fully or partially)\nLegs (shins, thighs)\nBikini area (classic or deep)\nUnderarms, back, abdomen",
            de: "Gesicht (Oberlippe, Kinn)\nArme (ganz oder teilweise)\nBeine (Schienbeine, Oberschenkel)\nBikinizone (klassisch oder tief)\nAchseln, Rücken, Bauch"
          }
        },
        {
          type: "image",
          content: { image: "https://brando-s.ru/wp-content/uploads/Pervaya.png" },
          sideText: {
            uk: "Перед початком курсу наш спеціаліст проводить консультацію, визначає ваш фототип та виключає протипоказання для гарантії безпеки та ефективності.",
            ru: "Перед началом курса наш специалист проводит консультацию, определяет ваш фототип и исключает противопоказания для гарантии безопасности и эффективности.",
            en: "Before starting the course, our specialist conducts a consultation, determines your phototype and excludes contraindications to guarantee safety and effectiveness.",
            de: "Vor Beginn des Kurses führt unser Spezialist eine Beratung durch, bestimmt Ihren Fototyp und schließt Kontraindikationen aus, um Sicherheit und Wirksamkeit zu gewährleisten."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Ваш шлях до ідеальної гладкості",
            ru: "Ваш путь к идеальной гладкости",
            en: "Your path to perfect smoothness",
            de: "Ihr Weg zu perfekter Glätte"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Все починається з консультації. Разом з лікарем ви складете індивідуальний графік процедур. Важливо дотримуватися рекомендацій щодо підготовки (уникати засмаги, не висмикувати волосся) та догляду після процедури для досягнення найкращого результату.",
            ru: "Все начинается с консультации. Вместе с врачом вы составите индивидуальный график процедур. Важно соблюдать рекомендации по подготовке (избегать загара, не выдергивать волосы) и уходу после процедуры для достижения наилучшего результата.",
            en: "It all starts with a consultation. Together with the doctor, you will draw up an individual schedule of procedures. It is important to follow the recommendations for preparation (avoid tanning, do not pluck hair) and after-care to achieve the best result.",
            de: "Alles beginnt mit einer Beratung. Gemeinsam mit dem Arzt erstellen Sie einen individuellen Behandlungsplan. Es ist wichtig, die Empfehlungen zur Vorbereitung (Vermeidung von Sonnenbrand, kein Zupfen der Haare) und zur Nachsorge zu befolgen, um das beste Ergebnis zu erzielen."
          }
        }
      ],
      faqs: ["faq1", "faq2", "faq3"],
      doctors: ["doctor7", "doctor8", "doctor5"],
      subservices: ["subservice39", "subservice40", "subservice41", "subservice42"]
    },


    {
    id: "service11",
    title: {
  uk: "Лазерне видалення розтяжок та рубців",
      ru: "Лазерное удаление растяжек и рубцов",
      en: "Laser Removal of Stretch Marks & Scars",
      de: "Laserentfernung von Dehnungsstreifen & Narben"
},
    slug: "lazerne-vydalennya-roztyazhok-rubtsiv",
      mainImage: "https://images.unsplash.com/photo-1602926280191-948de7f729c5?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
  {
    type: "heading",
    content: {
      uk: "Технологія фракційного лазера для ідеально рівної шкіри",
      ru: "Технология фракционного лазера для идеально ровной кожи",
      en: "Fractional Laser Technology for Perfectly Even Skin",
      de: "Fraktionierte Lasertechnologie für perfekt ebenmäßige Haut"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Рубці, шрами, розтяжки та постакне — це структурні дефекти шкіри, які раніше вважалися майже невиліковними. Сучасна естетична медицина пропонує революційний метод їх корекції — фракційне лазерне шліфування. Ця технологія дозволяє глибоко перебудувати та оновити шкіру, значно зменшити видимість дефектів, вирівняти рельєф та повернути шкірі гладкість та однорідність.",
      ru: "Рубцы, шрамы, растяжки и постакне — это структурные дефекты кожи, которые ранее считались почти неизлечимыми. Современная эстетическая медицина предлагает революционный метод их коррекции — фракционную лазерную шлифовку. Эта технология позволяет глубоко перестроить и обновить кожу, значительно уменьшить видимость дефектов, выровнять рельеф и вернуть коже гладкость и однородность.",
      en: "Scars, stretch marks, and post-acne are structural skin defects that were previously considered almost incurable. Modern aesthetic medicine offers a revolutionary method for their correction - fractional laser resurfacing. This technology allows for deep skin remodeling and renewal, significantly reducing the visibility of defects, evening out the texture, and restoring smoothness and uniformity to the skin.",
      de: "Narben, Dehnungsstreifen und Post-Akne sind strukturelle Hautdefekte, die früher als fast unheilbar galten. Die moderne ästhetische Medizin bietet eine revolutionäre Methode zu ihrer Korrektur - das fraktionierte Laser-Resurfacing. Diese Technologie ermöglicht eine tiefgreifende Hautumgestaltung und -erneuerung, reduziert die Sichtbarkeit von Defekten erheblich, gleicht die Textur aus und stellt die Glätte und Gleichmäßigkeit der Haut wieder her."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Принцип дії фракційного фототермолізу",
      ru: "Принцип действия фракционного фототермолиза",
      en: "The Principle of Fractional Photothermolysis",
      de: "Das Prinzip der fraktionierten Photothermolyse"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Лазерний промінь поділяється на безліч мікроскопічних променів, які створюють у шкірі контрольовані мікрозони пошкодження, залишаючи навколишні тканини неушкодженими. Це запускає потужний процес загоєння: клітини, що залишилися недоторканими, починають інтенсивно виробляти новий колаген та еластин. Цей новий колагеновий каркас поступово заміщує рубцеву тканину, вирівнюючи рельєф шкіри зсередини.",
      ru: "Лазерный луч разделяется на множество микроскопических лучей, которые создают в коже контролируемые микрозоны повреждения, оставляя окружающие ткани нетронутыми. Это запускает мощный процесс заживления: оставшиеся нетронутыми клетки начинают интенсивно вырабатывать новый коллаген и эластин. Этот новый коллагеновый каркас постепенно замещает рубцовую ткань, выравнивая рельеф кожи изнутри.",
      en: "The laser beam is divided into numerous microscopic beams that create controlled micro-zones of damage in the skin, leaving the surrounding tissue intact. This triggers a powerful healing process: the untouched cells begin to intensively produce new collagen and elastin. This new collagen framework gradually replaces the scar tissue, evening out the skin's texture from within.",
      de: "Der Laserstrahl wird in zahlreiche mikroskopische Strahlen aufgeteilt, die kontrollierte Mikroschädigungszonen in der Haut erzeugen und das umgebende Gewebe intakt lassen. Dies löst einen starken Heilungsprozess aus: Die unberührten Zellen beginnen intensiv, neues Kollagen und Elastin zu produzieren. Dieses neue Kollagengerüst ersetzt nach und nach das Narbengewebe und glättet die Hauttextur von innen heraus."
    }
  },
  {
    type: "image",
    content: { image: "https://lazklinik39.ru/upload/medialibrary/3a3/3a368eb7ca4c5caa8a85f83d62b8a84c.jpg" },
    sideText: {
      uk: "Фракційний принцип дії забезпечує високу ефективність процедури при значно коротшому періоді реабілітації порівняно з суцільним лазерним шліфуванням.",
      ru: "Фракционный принцип действия обеспечивает высокую эффективность процедуры при значительно более коротком периоде реабилитации по сравнению со сплошной лазерной шлифовкой.",
      en: "The fractional principle of action provides high procedure efficiency with a significantly shorter recovery period compared to full-field laser resurfacing.",
      de: "Das fraktionierte Wirkprinzip bietet eine hohe Verfahrenseffizienz bei einer deutlich kürzeren Erholungszeit im Vergleich zum vollständigen Laser-Resurfacing."
    }
  },
  {
    type: "heading",
    content: {
      uk: "З якими дефектами ми працюємо?",
      ru: "С какими дефектами мы работаем?",
      en: "What defects do we work with?",
      de: "Mit welchen Mängeln arbeiten wir?"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "**Видалення постакне:** Лазер ефективно розгладжує атрофічні рубці (ямки) та покращує загальний стан шкіри після вугрової хвороби.",
      ru: "**Удаление постакне:** Лазер эффективно разглаживает атрофические рубцы (ямки) и улучшает общее состояние кожи после угревой болезни.",
      en: "**Post-acne removal:** The laser effectively smoothes atrophic scars (pits) and improves the overall condition of the skin after acne.",
      de: "**Entfernung von Post-Akne:** Der Laser glättet effektiv atrophische Narben (Gruben) und verbessert den allgemeinen Zustand der Haut nach Akne."
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "**Видалення рубців після операцій:** Значно зменшує видимість хірургічних шрамів, роблячи їх більш м'якими, плоскими та світлими.",
      ru: "**Удаление рубцов после операций:** Значительно уменьшает видимость хирургических шрамов, делая их более мягкими, плоскими и светлыми.",
      en: "**Removal of scars after surgery:** Significantly reduces the visibility of surgical scars, making them softer, flatter and lighter.",
      de: "**Narbenentfernung nach Operationen:** Reduziert die Sichtbarkeit von Operationsnarben deutlich und macht sie weicher, flacher und heller."
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "**Видалення розтяжок:** Стимулює вироблення колагену всередині розтяжок, покращуючи їх колір та текстуру.",
      ru: "**Удаление растяжек:** Стимулирует выработку коллагена внутри растяжек, улучшая их цвет и текстуру.",
      en: "**Stretch mark removal:** Stimulates collagen production within stretch marks, improving their color and texture.",
      de: "**Entfernung von Dehnungsstreifen:** Stimuliert die Kollagenproduktion in den Dehnungsstreifen und verbessert deren Farbe und Textur."
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "**Шліфування атрофічних рубців:** Ефективно працює з будь-якими «западаючими» рубцями, в тому числі після вітряної віспи чи травм.",
      ru: "**Шлифовка атрофических рубцов:** Эффективно работает с любыми «западающими» рубцами, в том числе после ветряной оспы или травм.",
      en: "**Atrophic scar resurfacing:** Effectively works with any “pitted” scars, including those from chickenpox or injuries.",
      de: "**Atrophische Narbenglättung:** Wirkt effektiv bei allen „eingesunkenen“ Narben, auch nach Windpocken oder Verletzungen."
    }
  },
  {
    type: "image",
    content: { image: "https://alteos.ru/upload/iblock/589/0cpu9wn9rnhl3u0szzdstc3mjgoa6gfk.jpg" },
    sideText: {
      uk: "Важливо розуміти, що повне видалення рубців є неможливим, але сучасні лазери дозволяють досягти їх значного згладжування, роблячи практично непомітними.",
      ru: "Важно понимать, что полное удаление рубцов невозможно, но современные лазеры позволяют добиться их значительного сглаживания, делая практически незаметными.",
      en: "It is important to understand that complete removal of scars is impossible, but modern lasers allow to achieve their significant smoothing, making them almost invisible.",
      de: "Es ist wichtig zu verstehen, dass eine vollständige Entfernung von Narben unmöglich ist, aber moderne Laser ermöglichen eine deutliche Glättung, wodurch sie fast unsichtbar werden."
    }
  },
  {
    type: "heading",
    content: {
      uk: "Процес лікування",
      ru: "Процесс лечения",
      en: "Treatment process",
      de: "Behandlungsprozess"
    }
  },
  {
    type: "paragraph",
    content: {
      uk: "Лікування завжди проводиться курсом. Кількість процедур (зазвичай від 3 до 6) та інтервал між ними (1-1.5 місяця) визначається лікарем індивідуально. Кожна процедура вимагає періоду реабілітації (5-10 днів), який супроводжується почервонінням та лущенням. Протягом всього курсу є обов'язковим використання сонцезахисних засобів.",
      ru: "Лечение всегда проводится курсом. Количество процедур (обычно от 3 до 6) и интервал между ними (1-1.5 месяца) определяется врачом индивидуально. Каждая процедура требует периода реабилитации (5-10 дней), который сопровождается покраснением и шелушением. В течение всего курса является обязательным использование солнцезащитных средств.",
      en: "Treatment is always carried out in a course. The number of procedures (usually from 3 to 6) and the interval between them (1-1.5 months) is determined by the doctor individually. Each procedure requires a rehabilitation period (5-10 days), which is accompanied by redness and peeling. Throughout the course, the use of sunscreens is mandatory.",
      de: "Die Behandlung wird immer in einem Kurs durchgeführt. Die Anzahl der Behandlungen (in der Regel 3 bis 6) und der Abstand zwischen ihnen (1-1,5 Monate) wird vom Arzt individuell festgelegt. Jede Behandlung erfordert eine Rehabilitationsphase (5-10 Tage), die von Rötungen und Schuppungen begleitet wird. Während des gesamten Kurses ist die Verwendung von Sonnenschutzmitteln obligatorisch."
    }
  }
],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor1", "doctor3", "doctor5"],
    subservices: ["subservice43", "subservice44", "subservice45", "subservice46"]
},
    
  {
    id: "service12",
    title: {
      uk: "Фракційне омолодження RESUR-FX",
      ru: "Фракционное омоложение RESUR-FX",
      en: "Fractional Rejuvenation RESUR-FX",
      de: "Fraktionierte Verjüngung RESUR-FX"
    },
    slug: "fraktsiyne-omolodzhennya-resur-fx",
    mainImage: "https://www.datocms-assets.com/44663/1616253758-resurfx-video.png",
    content: [
      {
        type: "heading",
        content: {
          uk: "Неаблятивне фракційне омолодження ResurFX: максимальний результат з мінімальною реабілітацією",
          ru: "Неаблятивное фракционное омоложение ResurFX: максимальный результат с минимальной реабилитацией",
          en: "Non-Ablative Fractional Rejuvenation ResurFX: Maximum Results with Minimal Downtime",
          de: "Nicht-ablative fraktionierte Verjüngung ResurFX: Maximale Ergebnisse bei minimaler Ausfallzeit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "ResurFX — це модуль легендарної платформи M22 від Lumenis, який є найсучаснішим неаблятивним фракційним лазером. «Неаблятивний» означає, що лазерний промінь впливає на глибокі шари шкіри, стимулюючи вироблення колагену, але не пошкоджує її поверхню (епідерміс). Це забезпечує значне омолодження, вирівнювання рельєфу та покращення текстури шкіри з мінімальним періодом реабілітації. Процедура ідеально підходить для тих, хто хоче отримати видимий результат без тривалого відновлення та відриву від звичного життя.",
          ru: "ResurFX — это модуль легендарной платформы M22 от Lumenis, представляющий собой самый современный неаблятивный фракционный лазер. «Неаблятивный» означает, что лазерный луч воздействует на глубокие слои кожи, стимулируя выработку коллагена, но не повреждает её поверхность (эпидермис). Это обеспечивает значительное омоложение, выравнивание рельефа и улучшение текстуры кожи с минимальным периодом реабилитации. Процедура идеально подходит для тех, кто хочет получить видимый результат без длительного восстановления и отрыва от привычной жизни.",
          en: "ResurFX is a module of the legendary M22 platform by Lumenis, representing the most advanced non-ablative fractional laser. \"Non-ablative\" means the laser beam affects the deep skin layers to stimulate collagen production without damaging the surface (epidermis). This provides significant rejuvenation, texture smoothing, and skin improvement with a minimal recovery period. The procedure is ideal for those who want visible results without a long downtime.",
          de: "ResurFX ist ein Modul der legendären M22-Plattform von Lumenis und stellt den modernsten nicht-ablativen fraktionierten Laser dar. „Nicht-ablativ“ bedeutet, dass der Laserstrahl die tiefen Hautschichten beeinflusst, um die Kollagenproduktion zu stimulieren, ohne die Oberfläche (Epidermis) zu beschädigen. Dies sorgt für eine signifikante Verjüngung, Glättung der Textur und Hautverbesserung bei minimaler Erholungszeit. Das Verfahren ist ideal für diejenigen, die sichtbare Ergebnisse ohne lange Ausfallzeiten wünschen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Принцип дії: глибока стимуляція без пошкодження",
          ru: "Принцип действия: глубокая стимуляция без повреждения",
          en: "Principle of Action: Deep Stimulation without Damage",
          de: "Wirkprinzip: Tiefe Stimulation ohne Beschädigung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазер ResurFX створює в дермі мікроскопічні зони контрольованого прогріву. У відповідь на цей термічний вплив клітини-фібробласти починають активно синтезувати новий, молодий колаген та еластин, які заміщують старі, пошкоджені волокна. Це призводить до ущільнення шкіри, підвищення її пружності та природного омолодження зсередини. Завдяки унікальному сканеру CoolScan™, який забезпечує безперервне контактне охолодження, процедура проходить максимально комфортно.",
          ru: "Лазер ResurFX создает в дерме микроскопические зоны контролируемого прогрева. В ответ на это термическое воздействие клетки-фибробласты начинают активно синтезировать новый, молодой коллаген и эластин, которые замещают старые, поврежденные волокна. Это приводит к уплотнению кожи, повышению её упругости и естественному омоложению изнутри. Благодаря уникальному сканеру CoolScan™, который обеспечивает непрерывное контактное охлаждение, процедура проходит максимально комфортно.",
          en: "The ResurFX laser creates microscopic zones of controlled heating in the dermis. In response to this thermal effect, fibroblast cells begin to actively synthesize new, young collagen and elastin, which replace old, damaged fibers. This leads to skin densification, increased firmness, and natural rejuvenation from within. Thanks to the unique CoolScan™ scanner, which provides continuous contact cooling, the procedure is as comfortable as possible.",
          de: "Der ResurFX-Laser erzeugt mikroskopisch kleine Zonen kontrollierter Erwärmung in der Dermis. Als Reaktion на diesen thermischen Effekt beginnen die Fibroblastenzellen aktiv, neues, junges Kollagen und Elastin zu synthetisieren, die alte, beschädigte Fasern ersetzen. Dies führt zu einer Hautverdichtung, erhöhter Festigkeit und natürlicher Verjüngung von innen heraus. Dank des einzigartigen CoolScan™-Scanners, der eine kontinuierliche Kontaktkühlung bietet, ist das Verfahren so angenehm wie möglich."
        }
      },
      {
        type: "image",
        content: { image: "https://janelle-clinic.ru/wp-content/uploads/2024/05/janelle_image14.jpg" },
        sideText: {
          uk: "Мінімальна реабілітація (1-2 дні легкого почервоніння) дозволяє не змінювати свій соціальний графік.",
          ru: "Минимальная реабилитация (1-2 дня легкого покраснения) позволяет не менять свой социальный график.",
          en: "Minimal downtime (1-2 days of slight redness) allows you to maintain your social schedule.",
          de: "Minimale Ausfallzeit (1-2 Tage leichte Rötung) ermöglicht es Ihnen, Ihren sozialen Terminkalender beizubehalten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Напрямки застосування ResurFX",
          ru: "Направления применения ResurFX",
          en: "Areas of Application for ResurFX",
          de: "Anwendungsbereiche für ResurFX"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Омолодження обличчя, шиї та декольте:** Процедура ефективно бореться з дрібними зморшками, втратою пружності, розширеними порами та нерівною текстурою шкіри.",
          ru: "**Омоложение лица, шеи и декольте:** Процедура эффективно борется с мелкими морщинами, потерей упругости, расширенными порами и неровной текстурой кожи.",
          en: "**Rejuvenation of the face, neck, and décolleté:** The procedure effectively combats fine wrinkles, loss of firmness, enlarged pores, and uneven skin texture.",
          de: "**Verjüngung von Gesicht, Hals und Dekolleté:** Das Verfahren bekämpft effektiv feine Fältchen, Festigkeitsverlust, vergrößerte Poren und ungleichmäßige Hauttextur."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Терапія постакне:** ResurFX є одним з найкращих методів для вирівнювання атрофічних рубців (ямок), що залишилися після вугрової хвороби.",
          ru: "**Терапия постакне:** ResurFX является одним из лучших методов для выравнивания атрофических рубцов (ямок), оставшихся после угревой болезни.",
          en: "**Post-acne therapy:** ResurFX is one of the best methods for smoothing atrophic scars (pits) left after acne.",
          de: "**Post-Akne-Therapie:** ResurFX ist eine der besten Methoden zur Glättung atrophischer Narben (Gruben), die nach Akne zurückbleiben."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Корекція пігментації:** Лазерне оновлення шкіри сприяє відлущенню клітин з надлишковим пігментом та вирівнюванню загального тону обличчя.",
          ru: "**Коррекция пигментации:** Лазерное обновление кожи способствует отшелушиванию клеток с избыточным пигментом и выравниванию общего тона лица.",
          en: "**Pigmentation correction:** Laser skin renewal promotes the exfoliation of cells with excess pigment and evens out the overall skin tone.",
          de: "**Pigmentkorrektur:** Die Laser-Hauterneuerung fördert das Peeling von Zellen mit überschüssigem Pigment und gleicht den gesamten Hautton aus."
        }
      },
      {
        type: "image",
        content: { image: "https://luaclinic.ru/wp-content/uploads/2024/03/photo_2024-03-22_16-28-19-e1711114172186.jpg" },
        sideText: {
          uk: "Процедура може проводитись у будь-яку пору року за умови дотримання рекомендацій лікаря та використання сонцезахисних засобів.",
          ru: "Процедура может проводиться в любое время года при условии соблюдения рекомендаций врача и использования солнцезащитных средств.",
          en: "The procedure can be performed at any time of the year, provided that the doctor's recommendations and the use of sunscreens are followed.",
          de: "Das Verfahren kann zu jeder Jahreszeit durchgeführt werden, sofern die Empfehlungen des Arztes und die Verwendung von Sonnenschutzmitteln befolgt werden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур для стійкого результату",
          ru: "Курс процедур для стойкого результата",
          en: "Course of procedures for a lasting result",
          de: "Behandlungskurs für ein dauerhaftes Ergebnis"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ефект від ResurFX має накопичувальний характер, оскільки процес вироблення нового колагену є поступовим. Для досягнення максимального результату рекомендується курс з 3-5 процедур з інтервалом в 1 місяць. Фінальний результат оцінюється через 3-6 місяців після завершення курсу.",
          ru: "Эффект от ResurFX имеет накопительный характер, поскольку процесс выработки нового коллагена является постепенным. Для достижения максимального результата рекомендуется курс из 3-5 процедур с интервалом в 1 месяц. Финальный результат оценивается через 3-6 месяцев после завершения курса.",
          en: "The effect of ResurFX is cumulative, as the process of new collagen production is gradual. To achieve the maximum result, a course of 3-5 procedures with an interval of 1 month is recommended. The final result is evaluated 3-6 months after the course is completed.",
          de: "Die Wirkung von ResurFX ist kumulativ, da der Prozess der neuen Kollagenproduktion allmählich verläuft. Um das maximale Ergebnis zu erzielen, wird ein Kurs von 3-5 Behandlungen im Abstand von 1 Monat empfohlen. Das Endergebnis wird 3-6 Monate nach Abschluss des Kurses bewertet."
        }
      }
    ],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor3", "doctor5", "doctor1"],
    subservices: ["subservice47", "subservice48", "subservice49", "subservice50"]
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
    subservices: ["subservice51", "subservice52", "subservice53", "subservice54", "subservice55", "subservice56"]
  },

  {
    id: "service14",
    title: {
      uk: "Плазмоліфтинг (PRP-терапія)",
      ru: "Плазмолифтинг (PRP-терапия)",
      en: "Plasmolifting (PRP Therapy)",
      de: "Plasmalifting (PRP-Therapie)"
    },
    slug: "plazmolifting-prp-terapiya",
    mainImage: "https://klinika.pl.ua/media/gallery/thumbnails/watermarked/4926fc20-6777-4c44-a953-82a5e275542e.large.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Природне омолодження за рахунок власних ресурсів організму",
          ru: "Естественное омоложение за счет собственных ресурсов организма",
          en: "Natural Rejuvenation Using the Body's Own Resources",
          de: "Natürliche Verjüngung durch die körpereigenen Ressourcen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Плазмоліфтинг, або PRP-терапія (Platelet-Rich Plasma), — це революційна та на 100% біосумісна ін'єкційна методика, яка використовує прихований потенціал вашого власного організму. В основу методу покладено використання плазми крові пацієнта, збагаченої тромбоцитами. Ці маленькі клітини є справжнім концентратом «факторів росту», які запускають потужні процеси регенерації та омолодження тканин.",
          ru: "Плазмолифтинг, или PRP-терапия (Platelet-Rich Plasma), — это революционная и на 100% биосовместимая инъекционная методика, которая использует скрытый потенциал вашего собственного организма. В основу метода положено использование плазмы крови пациента, обогащенной тромбоцитами. Эти маленькие клетки являются настоящим концентратом «факторов роста», которые запускают мощные процессы регенерации и омоложения тканей.",
          en: "Plasmolifting, or PRP therapy (Platelet-Rich Plasma), is a revolutionary and 100% biocompatible injection technique that utilizes the hidden potential of your own body. The method is based on using the patient's blood plasma enriched with platelets. These small cells are a true concentrate of \"growth factors\" that trigger powerful processes of tissue regeneration and rejuvenation.",
          de: "Plasmalifting oder PRP-Therapie (plättchenreiches Plasma) ist eine revolutionäre und zu 100 % biokompatible Injektionstechnik, die das verborgene Potenzial Ihres eigenen Körpers nutzt. Die Methode basiert auf der Verwendung des mit Thrombozyten angereicherten Blutplasmas des Patienten. Diese kleinen Zellen sind ein wahres Konzentrat von „Wachstumsfaktoren“, die starke Prozesse der Geweberegeneration und -verjüngung auslösen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "У чому секрет вашої власної плазми?",
          ru: "В чем секрет вашей собственной плазмы?",
          en: "What is the secret of your own plasma?",
          de: "Was ist das Geheimnis Ihres eigenen Plasmas?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після спеціальної обробки (центрифугування) ми отримуємо плазму, концентрація тромбоцитів у якій у 5-6 разів вища за норму. При введенні в шкіру, ці тромбоцити вивільняють фактори росту, які діють як каталізатор молодості: вони стимулюють фібробласти до виробництва нового колагену, еластину та гіалуронової кислоти, покращують кровообіг та живлення тканин.",
          ru: "После специальной обработки (центрифугирования) мы получаем плазму, концентрация тромбоцитов в которой в 5-6 раз выше нормы. При введении в кожу, эти тромбоциты высвобождают факторы роста, которые действуют как катализатор молодости: они стимулируют фибробласты к производству нового коллагена, эластина и гиалуроновой кислоты, улучшают кровообращение и питание тканей.",
          en: "After special processing (centrifugation), we obtain plasma in which the platelet concentration is 5-6 times higher than normal. When injected into the skin, these platelets release growth factors that act as a catalyst for youth: they stimulate fibroblasts to produce new collagen, elastin, and hyaluronic acid, and improve blood circulation and tissue nutrition.",
          de: "Nach einer speziellen Verarbeitung (Zentrifugation) erhalten wir Plasma, in dem die Thrombozytenkonzentration 5-6 Mal höher ist als normal. Bei Injektion in die Haut setzen diese Thrombozyten Wachstumsfaktoren frei, die als Katalysator für die Jugend wirken: Sie regen die Fibroblasten zur Produktion von neuem Kollagen, Elastin und Hyaluronsäure an und verbessern die Durchblutung und die Gewebeernährung."
        }
      },
      {
        type: "image",
        content: { image: "https://ihc-russia.ru/upload/iblock/217/ladmw9kpngfvz1ewupc34w2rwjiq0ldf.jpeg" },
        sideText: {
          uk: "Оскільки використовується власний матеріал пацієнта, ризик алергії, відторгнення чи інфікування повністю виключений.",
          ru: "Поскольку используется собственный материал пациента, риск аллергии, отторжения или инфицирования полностью исключен.",
          en: "Since the patient's own material is used, the risk of allergy, rejection or infection is completely excluded.",
          de: "Da das patienteneigene Material verwendet wird, ist das Risiko von Allergien, Abstoßung oder Infektionen vollständig ausgeschlossen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Сфери застосування плазмоліфтингу",
          ru: "Сферы применения плазмолифтинга",
          en: "Areas of application of plasmolifting",
          de: "Anwendungsbereiche des Plasmaliftings"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Плазмоліфтинг обличчя:** Ефективно бореться з віковими змінами, покращує колір та текстуру шкіри, лікує акне та постакне.",
          ru: "**Плазмолифтинг лица:** Эффективно борется с возрастными изменениями, улучшает цвет и текстуру кожи, лечит акне и постакне.",
          en: "**Facial plasmolifting:** Effectively combats age-related changes, improves skin color and texture, treats acne and post-acne.",
          de: "**Gesichts-Plasmalifting:** Bekämpft effektiv altersbedingte Veränderungen, verbessert Hautfarbe und -textur, behandelt Akne und Post-Akne."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Плазмоліфтинг шкіри голови:** Є однією з найдієвіших методик для зупинки випадіння та стимуляції росту нового, здорового волосся.",
          ru: "**Плазмолифтинг кожи головы:** Является одной из самых действенных методик для остановки выпадения и стимуляции роста новых, здоровых волос.",
          en: "**Scalp plasmolifting:** It is one of the most effective methods to stop hair loss and stimulate the growth of new, healthy hair.",
          de: "**Kopfhaut-Plasmalifting:** Es ist eine der wirksamsten Methoden, um Haarausfall zu stoppen und das Wachstum von neuem, gesundem Haar zu stimulieren."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Омолодження шиї та декольте:** Відновлює пружність та тонус тонкої шкіри, розгладжує зморшки та покращує її зовнішній вигляд.",
          ru: "**Омоложение шеи и декольте:** Восстанавливает упругость и тонус тонкой кожи, разглаживает морщины и улучшает её внешний вид.",
          en: "**Rejuvenation of the neck and décolleté:** Restores firmness and tone of thin skin, smoothes wrinkles and improves its appearance.",
          de: "**Verjüngung von Hals und Dekolleté:** Stellt die Festigkeit und den Tonus dünner Haut wieder her, glättet Falten und verbessert ihr Aussehen."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Омолодження рук:** Повертає шкірі кистей рук щільність, еластичність та здоровий колір, зменшуючи прояви старіння.",
          ru: "**Омоложение рук:** Возвращает коже кистей рук плотность, эластичность и здоровый цвет, уменьшая проявления старения.",
          en: "**Hand rejuvenation:** Restores density, elasticity and healthy color to the skin of the hands, reducing the signs of aging.",
          de: "**Handverjüngung:** Stellt Dichte, Elastizität und gesunde Farbe der Haut der Hände wieder her und reduziert die Zeichen der Hautalterung."
        }
      },
      {
        type: "image",
        content: { image: "https://taurasmed.com/userfls/editor/medium/883_prp-4.jpg" },
        sideText: {
          uk: "Процедура займає близько 45-60 хвилин і складається з трьох простих етапів: забір крові, її обробка та введення плазми.",
          ru: "Процедура занимает около 45-60 минут и состоит из трех простых этапов: забор крови, её обработка и введение плазмы.",
          en: "The procedure takes about 45-60 minutes and consists of three simple steps: blood collection, its processing and plasma injection.",
          de: "Das Verfahren dauert etwa 45-60 Minuten und besteht aus drei einfachen Schritten: Blutentnahme, Verarbeitung und Plasmainjektion."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур для максимального ефекту",
          ru: "Курс процедур для максимального эффекта",
          en: "Course of procedures for maximum effect",
          de: "Behandlungskurs für maximale Wirkung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Плазмоліфтинг має накопичувальний ефект. Для досягнення стійкого та вираженого результату рекомендується курс з 3-5 процедур з інтервалом 2-4 тижні. Ефект від курсу зберігається надовго, оскільки ви стимулюєте власні клітини працювати активніше.",
          ru: "Плазмолифтинг имеет накопительный эффект. Для достижения стойкого и выраженного результата рекомендуется курс из 3-5 процедур с интервалом 2-4 недели. Эффект от курса сохраняется надолго, так как вы стимулируете собственные клетки работать активнее.",
          en: "Plasmolifting has a cumulative effect. To achieve a stable and pronounced result, a course of 3-5 procedures with an interval of 2-4 weeks is recommended. The effect of the course lasts for a long time, as you stimulate your own cells to work more actively.",
          de: "Das Plasmalifting hat eine kumulative Wirkung. Um ein stabiles und ausgeprägtes Ergebnis zu erzielen, wird ein Kurs von 3-5 Behandlungen im Abstand von 2-4 Wochen empfohlen. Die Wirkung des Kurses hält lange an, da Sie Ihre eigenen Zellen dazu anregen, aktiver zu arbeiten."
        }
      }
    ],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor2", "doctor4", "doctor1", "doctor8"],
    subservices: ["subservice57", "subservice58", "subservice59", "subservice60"]
  },


  {
    id: "service15",
    title: {
      uk: "Склеротерапія",
      ru: "Склеротерапия",
      en: "Sclerotherapy",
      de: "Sklerotherapie"
    },
    slug: "skleroterapiya",
    mainImage: "https://soracamed.com/wp-content/uploads/2024/10/Sclerotherapy.jpg.webp",
    content: [
      {
        type: "heading",
        content: {
          uk: "Сучасний «золотий стандарт» лікування варикозу та судинних зірочок",
          ru: "Современный «золотой стандарт» лечения варикоза и сосудистых звёздочек",
          en: "The Modern \"Gold Standard\" for Treating Varicose and Spider Veins",
          de: "Der moderne „Goldstandard“ zur Behandlung von Krampfadern und Besenreisern"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Склеротерапія — це малоінвазивна ін'єкційна методика, яка дозволяє без розрізів, наркозу та госпіталізації ефективно видаляти розширені вени та капіляри. Процедура полягає у введенні в просвіт ураженої судини спеціального препарату (склерозанту). Ця речовина викликає контрольований хімічний опік внутрішньої стінки вени, що призводить до її «склеювання» та подальшого повного розсмоктування. Кровотік перенаправляється по здорових судинах.",
          ru: "Склеротерапия — это малоинвазивная инъекционная методика, которая позволяет без разрезов, наркоза и госпитализации эффективно удалять расширенные вены и капилляры. Процедура заключается во введении в просвет пораженного сосуда специального препарата (склерозанта). Это вещество вызывает контролируемый химический ожог внутренней стенки вены, что приводит к её «склеиванию» и последующему полному рассасыванию. Кровоток перенаправляется по здоровым сосудам.",
          en: "Sclerotherapy is a minimally invasive injection technique that allows for the effective removal of dilated veins and capillaries without incisions, anesthesia, or hospitalization. The procedure involves injecting a special preparation (sclerosant) into the lumen of the affected vessel. This substance causes a controlled chemical burn on the inner wall of the vein, leading to its \"sealing\" and subsequent complete absorption. Blood flow is redirected through healthy vessels.",
          de: "Die Sklerotherapie ist eine minimalinvasive Injektionstechnik, die die effektive Entfernung erweiterter Venen und Kapillaren ohne Schnitte, Anästhesie oder Krankenhausaufenthalt ermöglicht. Das Verfahren beinhaltet die Injektion eines speziellen Präparats (Sklerosierungsmittel) in das Lumen des betroffenen Gefäßes. Diese Substanz verursacht eine kontrollierte chemische Verbrennung an der Innenwand der Vene, was zu deren „Versiegelung“ und anschließendem vollständigem Abbau führt. Der Blutfluss wird durch gesunde Gefäße umgeleitet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Види склеротерапії, які ми пропонуємо",
          ru: "Виды склеротерапии, которые мы предлагаем",
          en: "Types of Sclerotherapy We Offer",
          de: "Arten der von uns angebotenen Sklerotherapie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Мікросклеротерапія: ювелірна робота з найдрібнішими судинними «зірочками» та «павутинками».\nПінна склеротерапія (Foam-Form): використання склерозанту у вигляді піни для видалення більш крупних варикозних вен.\nЕхо-склеротерапія: проведення процедури під контролем УЗД для точного введення препарату в глибоко розташовані вени.",
          ru: "Микросклеротерапия: ювелирная работа с мельчайшими сосудистыми «звёздочками» и «паутинками».\nПенная склеротерапия (Foam-Form): использование склерозанта в виде пены для удаления более крупных варикозных вен.\nЭхо-склеротерапия: проведение процедуры под контролем УЗИ для точного введения препарата в глубоко расположенные вены.",
          en: "Microsclerotherapy: precision work on the tiniest spider and reticular veins.\nFoam Sclerotherapy (Foam-Form): using sclerosant in foam form to remove larger varicose veins.\nUltrasound-Guided Sclerotherapy (Echo-sclerotherapy): performing the procedure under ultrasound control for precise injection into deep-seated veins.",
          de: "Mikrosklerotherapie: Präzisionsarbeit an den kleinsten Besenreisern und retikulären Venen.\nSchaum-Sklerotherapie (Foam-Form): Verwendung von Sklerosierungsmittel in Schaumform zur Entfernung größerer Krampfadern.\nUltraschallgesteuerte Sklerotherapie (Echo-Sklerotherapie): Durchführung des Verfahrens unter Ultraschallkontrolle zur präzisen Injektion in tief liegende Venen."
        }
      },
      {
        type: "image",
        content: { image: "https://imgproxy.sante.by/Ts8YAbfxkbCHaqKy4BMPO_TQF8vXPsbzxRT6rNxDdM0/w:1257/h:629/rt:fit/g:ce:0:0/czM6Ly9zYW50ZS5ieS8xMzcxL9GE0LvQtdCx0L7Qu9C-0LPQuNGPLdCyLdC80LjQvdGB0LrQtS3RgdCw0L3RgtC1LdGB0LrQu9C10YDQvtGC0LXRgNCw0L_QuNGPLmpwZw.jpg" },
        sideText: {
          uk: "Вибір методики та препарату здійснюється лікарем-флебологом після ретельної діагностики, включаючи УЗД вен.",
          ru: "Выбор методики и препарата осуществляется врачом-флебологом после тщательной диагностики, включая УЗИ вен.",
          en: "The choice of method and preparation is made by a phlebologist after a thorough diagnosis, including a vein ultrasound.",
          de: "Die Wahl der Methode und des Präparats wird von einem Phlebologen nach einer gründlichen Diagnose, einschließlich eines Venenultraschalls, getroffen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги склеротерапії",
          ru: "Преимущества склеротерапии",
          en: "Advantages of Sclerotherapy",
          de: "Vorteile der Sklerotherapie"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Це амбулаторна процедура, яка не вимагає госпіталізації. Сеанс триває всього 20-40 хвилин. Склеротерапія практично безболісна, не залишає шрамів та рубців і дозволяє одразу повернутися до звичного ритму життя, дотримуючись простих рекомендацій.",
          ru: "Это амбулаторная процедура, не требующая госпитализации. Сеанс длится всего 20-40 минут. Склеротерапия практически безболезненна, не оставляет шрамов и рубцов и позволяет сразу вернуться к привычному ритму жизни, соблюдая простые рекомендации.",
          en: "It is an outpatient procedure that does not require hospitalization. A session lasts only 20-40 minutes. Sclerotherapy is virtually painless, leaves no scars, and allows you to immediately return to your normal rhythm of life by following simple recommendations.",
          de: "Es ist ein ambulantes Verfahren, das keine Krankenhausaufenthalte erfordert. Eine Sitzung dauert nur 20-40 Minuten. Die Sklerotherapie ist praktisch schmerzfrei, hinterlässt keine Narben und ermöglicht es Ihnen, sofort in Ihren normalen Lebensrhythmus zurückzukehren, indem Sie einfache Empfehlungen befolgen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Судинні «зірочки» та «сіточки» (телеангіектазії та ретикулярний варикоз).\nПоодинокі варикозно розширені вени.\nВарикозна хвороба на ранніх стадіях.\nЯк доповнення до лазерного або хірургічного лікування.",
          ru: "Сосудистые «звёздочки» и «сеточки» (телеангиэктазии и ретикулярный варикоз).\nЕдиничные варикозно расширенные вены.\nВарикозная болезнь на ранних стадиях.\nКак дополнение к лазерному или хирургическому лечению.",
          en: "Spider and reticular veins (telangiectasias and reticular varicose veins).\nSingle varicose veins.\nVaricose disease in the early stages.\nAs an adjunct to laser or surgical treatment.",
          de: "Besenreiser und retikuläre Venen (Teleangiektasien und retikuläre Varikose).\nEinzelne Krampfadern.\nKrampfaderleiden im Frühstadium.\nAls Ergänzung zur Laser- oder chirurgischen Behandlung."
        }
      },
      {
        type: "image",
        content: { image: "https://fleboperm.ru/wp-content/uploads/2022/02/scleroter.jpg" },
        sideText: {
          uk: "Після процедури обов'язковим є носіння компресійного трикотажу для досягнення найкращого результату.",
          ru: "После процедуры обязательным является ношение компрессионного трикотажа для достижения наилучшего результата.",
          en: "After the procedure, wearing compression hosiery is mandatory to achieve the best result.",
          de: "Nach dem Eingriff ist das Tragen von Kompressionsstrümpfen obligatorisch, um das beste Ergebnis zu erzielen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Довіряйте професіоналам",
          ru: "Доверяйте профессионалам",
          en: "Trust the Professionals",
          de: "Vertrauen Sie den Profis"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Склеротерапія, хоч і є малоінвазивною, вимагає від лікаря глибоких знань анатомії вен та досконалого володіння технікою. Наші лікарі-флебологи мають багаторічний досвід та використовують лише сертифіковані препарати, що гарантує безпеку та ефективність кожної процедури.",
          ru: "Склеротерапия, хоть и является малоинвазивной, требует от врача глубоких знаний анатомии вен и совершенного владения техникой. Наши врачи-флебологи имеют многолетний опыт и используют только сертифицированные препараты, что гарантирует безопасность и эффективность каждой процедуры.",
          en: "Sclerotherapy, although minimally invasive, requires the doctor to have a deep knowledge of vein anatomy and perfect command of the technique. Our phlebologists have many years of experience and use only certified preparations, which guarantees the safety and effectiveness of each procedure.",
          de: "Die Sklerotherapie erfordert, obwohl sie minimalinvasiv ist, vom Arzt ein tiefes Wissen über die Venenanatomie und eine perfekte Beherrschung der Technik. Unsere Phlebologen verfügen über langjährige Erfahrung und verwenden nur zertifizierte Präparate, was die Sicherheit und Wirksamkeit jedes Eingriffs gewährleistet."
        }

      }
    ],
    faqs: ["faq1", "faq2", "faq3"],
    doctors: ["doctor8"],
    subservices: ["subservice61", "subservice62", "subservice63", "subservice64"]
  },


];
export const subservices: Subservice[] = [
  {
    id: "subservice1", // Уникальный ID для этой подуслуги
    serviceId: "service1", // ID родительской услуги "Удаление новообразований"
    title: {
      uk: "Видалення бородавок",
      ru: "Удаление бородавок",
      en: "Wart Removal",
      de: "Warzenentfernung"
    },
    slug: "vydalennya-borodavok",
    mainImage: "https://oldenburger-frauenarzt.de/wp-content/uploads/2024/11/fibrom-im-alter.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Що таке бородавки і чому їх варто видаляти?",
          ru: "Что такое бородавки и почему их стоит удалять?",
          en: "What are warts and why should they be removed?",
          de: "Was sind Warzen und warum sollten sie entfernt werden?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Бородавки — це доброякісні новоутворення шкіри, викликані вірусом папіломи людини (ВПЛ). Вони можуть з'являтися на будь-якій частині тіла і, хоча часто є безболісними, можуть викликати естетичний дискомфорт, поширюватися на інші ділянки шкіри або передаватися іншим людям. Професійне видалення є найбезпечнішим та найефективнішим способом позбутися їх.",
          ru: "Бородавки — это доброкачественные новообразования кожи, вызванные вирусом папилломы человека (ВПЧ). Они могут появляться на любой части тела и, хотя часто безболезненны, могут вызывать эстетический дискомфорт, распространяться на другие участки кожи или передаваться другим людям. Профессиональное удаление является самым безопасным и эффективным способом избавиться от них.",
          en: "Warts are benign skin growths caused by the human papillomavirus (HPV). They can appear on any part of the body and, although often painless, can cause aesthetic discomfort, spread to other areas of the skin, or be transmitted to other people. Professional removal is the safest and most effective way to get rid of them.",
          de: "Warzen sind gutartige Hautwucherungen, die durch das humane Papillomavirus (HPV) verursacht werden. Sie können an jedem Körperteil auftreten und, obwohl oft schmerzlos, ästhetische Beschwerden verursachen, sich auf andere Hautbereiche ausbreiten oder auf andere Personen übertragen werden. Die professionelle Entfernung ist der sicherste und effektivste Weg, sie loszuwerden."
        }
      },
      {
        type: "image",
        content: {
          image: "https://www.leading-medicine-guide.com/cms/image/u7427/warzen-entfernen-1.jpg"
        },
        sideText: {
          uk: "Сучасні методи дозволяють видалити бородавки швидко, безболісно та без утворення рубців. Ми підбираємо метод індивідуально для кожного пацієнта.",
          ru: "Современные методы позволяют удалить бородавки быстро, безболезненно и без образования рубцов. Мы подбираем метод индивидуально для каждого пациента.",
          en: "Modern methods allow for the removal of warts quickly, painlessly, and without scarring. We select the method individually for each patient.",
          de: "Moderne Methoden ermöglichen eine schnelle, schmerzlose und narbenfreie Entfernung von Warzen. Wir wählen die Methode für jeden Patienten individuell aus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Методи видалення, які ми використовуємо",
          ru: "Методы удаления, которые мы используем",
          en: "Removal Methods We Use",
          de: "Entfernungsmethoden, die wir anwenden"
        }
      },
      {
        type: "list",
        content: {
          uk: "Лазерне видалення: точковий вплив лазерного променя, що випаровує тканини бородавки.\nКріодеструкція: заморожування бородавки рідким азотом, що призводить до її руйнування.\nРадіохвильова хірургія: використання високочастотних радіохвиль для безконтактного розрізу та коагуляції тканин.\nЕлектрокоагуляція: видалення за допомогою електричного струму.",
          ru: "Лазерное удаление: точечное воздействие лазерного луча, который испаряет ткани бородавки.\nКриодеструкция: замораживание бородавки жидким азотом, что приводит к её разрушению.\nРадиоволновая хирургия: использование высокочастотных радиоволн для бесконтактного разреза и коагуляции тканей.\nЭлектрокоагуляция: удаление с помощью электрического тока.",
          en: "Laser removal: precise laser beam action that vaporizes the wart tissue.\nCryodestruction: freezing the wart with liquid nitrogen, leading to its destruction.\nRadio-wave surgery: using high-frequency radio waves for non-contact cutting and coagulation of tissues.\nElectrocoagulation: removal using an electric current.",
          de: "Laserentfernung: präzise Einwirkung eines Laserstrahls, der das Warzengewebe verdampft.\nKryodestruktion: Einfrieren der Warze mit flüssigem Stickstoff, was zu ihrer Zerstörung führt.\nRadiofrequenzchirurgie: Verwendung von hochfrequenten Radiowellen zum kontaktlosen Schneiden und Koagulieren von Gewebe.\nElektrokoagulation: Entfernung mit Hilfe von elektrischem Strom."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Вибір методу залежить від типу бородавки, її розміру, локалізації та індивідуальних особливостей пацієнта. Наш лікар на консультації порекомендує найкращий варіант для вас.",
          ru: "Выбор метода зависит от типа бородавки, её размера, локализации и индивидуальных особенностей пациента. Наш врач на консультации порекомендует наилучший вариант для вас.",
          en: "The choice of method depends on the type of wart, its size, location, and the individual characteristics of the patient. Our doctor will recommend the best option for you during the consultation.",
          de: "Die Wahl der Methode hängt von der Art der Warze, ihrer Größe, ihrem Standort und den individuellen Merkmalen des Patienten ab. Unser Arzt wird Ihnen bei der Beratung die beste Option empfehlen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги процедури в нашому центрі",
          ru: "Преимущества процедуры в нашем центре",
          en: "Advantages of the Procedure at Our Center",
          de: "Vorteile des Verfahrens in unserem Zentrum"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Безпека та стерильність: Ми суворо дотримуємося всіх медичних протоколів.\nВисока ефективність: Більшість бородавок видаляються за один сеанс.\nМінімальна травматичність: Сучасне обладнання дозволяє мінімізувати пошкодження здорових тканин.\nШвидке відновлення: Період реабілітації короткий і не вимагає складного догляду.",
          ru: "Безопасность и стерильность: Мы строго соблюдаем все медицинские протоколы.\nВысокая эффективность: Большинство бородавок удаляются за один сеанс.\nМинимальная травматичность: Современное оборудование позволяет минимизировать повреждение здоровых тканей.\nБыстрое восстановление: Период реабилитации короткий и не требует сложного ухода.",
          en: "Safety and sterility: We strictly adhere to all medical protocols.\nHigh efficiency: Most warts are removed in a single session.\nMinimal trauma: Modern equipment minimizes damage to healthy tissues.\nQuick recovery: The rehabilitation period is short and does not require complex care.",
          de: "Sicherheit und Sterilität: Wir halten uns strikt an alle medizinischen Protokolle.\nHohe Effizienz: Die meisten Warzen werden in einer einzigen Sitzung entfernt.\nMinimale Traumatisierung: Moderne Geräte minimieren die Schädigung gesunden Gewebes.\nSchnelle Genesung: Die Rehabilitationsphase ist kurz und erfordert keine komplexe Pflege."
        }
      },
      {
        type: "image",
        content: {
          image: "https://www.dermatologie-am-see.ch/wp-content/uploads/2022/03/warzen-dermatologie-1920x1080.jpg"
        },
        sideText: {
          uk: "Після процедури лікар надасть детальні рекомендації щодо догляду за обробленою ділянкою для досягнення найкращого естетичного результату.",
          ru: "После процедуры врач предоставит подробные рекомендации по уходу за обработанной областью для достижения наилучшего эстетического результата.",
          en: "After the procedure, the doctor will provide detailed recommendations for caring for the treated area to achieve the best aesthetic result.",
          de: "Nach dem Eingriff gibt der Arzt detaillierte Empfehlungen zur Pflege des behandelten Bereichs, um das beste ästhetische Ergebnis zu erzielen."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не намагайтеся видаляти бородавки самостійно. Це може призвести до інфікування, поширення вірусу та утворення рубців. Довірте своє здоров'я професіоналам.",
          ru: "Не пытайтесь удалять бородавки самостоятельно. Это может привести к инфицированию, распространению вируса и образованию рубцов. Доверьте свое здоровье профессионалам.",
          en: "Do not attempt to remove warts on your own. This can lead to infection, spread of the virus, and scarring. Entrust your health to professionals.",
          de: "Versuchen Sie nicht, Warzen selbst zu entfernen. Dies kann zu Infektionen, zur Ausbreitung des Virus und zur Narbenbildung führen. Vertrauen Sie Ihre Gesundheit Fachleuten an."
        }
      }
    ],
    faqs: ["faq1", "faq2"],
    doctors: ["doctor1", "doctor3"]
  },


  {
    id: "subservice2", // НОВАЯ ПОДУСЛУГА
    serviceId: "service1", // Привязка к той же основной услуге
    title: {
      uk: "Видалення родимок (невусів)",
      ru: "Удаление родинок (невусов)",
      en: "Mole (Nevus) Removal",
      de: "Muttermalentfernung (Nävusentfernung)"
    },
    slug: "vydalennya-rodimok",
    mainImage: "https://lazersvit.com/storage/cache/files/2021/12/22/nevus-main.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Професійне видалення родимок: здоров'я та естетика",
          ru: "Профессиональное удаление родинок: здоровье и эстетика",
          en: "Professional Mole Removal: Health and Aesthetics",
          de: "Professionelle Muttermalentfernung: Gesundheit und Ästhetik"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Родимки (невуси) — це пігментні утворення на шкірі, які є у кожної людини. Більшість із них абсолютно безпечні. Однак деякі родимки можуть створювати естетичний дискомфорт, травмуватися або, в рідкісних випадках, нести ризик злоякісного переродження (меланоми). Тому контроль за станом родимок та їх професійне видалення за показаннями є важливою частиною турботи про здоров'я шкіри.",
          ru: "Родинки (невусы) — это пигментные образования на коже, которые есть у каждого человека. Большинство из них абсолютно безопасны. Однако некоторые родинки могут доставлять эстетический дискомфорт, травмироваться или, в редких случаях, нести риск злокачественного перерождения (меланомы). Поэтому контроль за состоянием родинок и их профессиональное удаление по показаниям являются важной частью заботы о здоровье кожи.",
          en: "Moles (nevi) are pigmented formations on the skin that everyone has. Most of them are completely safe. However, some moles can cause aesthetic discomfort, get injured, or, in rare cases, carry a risk of malignant transformation (melanoma). Therefore, monitoring the condition of moles and their professional removal when indicated is an important part of skin health care.",
          de: "Muttermale (Nävi) sind pigmentierte Gebilde auf der Haut, die jeder Mensch hat. Die meisten von ihnen sind absolut harmlos. Einige Muttermale können jedoch ästhetische Beschwerden verursachen, verletzt werden oder in seltenen Fällen das Risiko einer bösartigen Entartung (Melanom) bergen. Daher ist die Überwachung des Zustands von Muttermalen und ihre professionelle Entfernung bei Indikation ein wichtiger Teil der Hautgesundheitspflege."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Обов'язкова діагностика: Дерматоскопія",
          ru: "Обязательная диагностика: Дерматоскопия",
          en: "Mandatory Diagnosis: Dermatoscopy",
          de: "Obligatorische Diagnose: Dermatoskopie"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перед видаленням будь-якої родимки ми проводимо цифрову дерматоскопію. Це безконтактний та безболісний метод дослідження, який дозволяє під багаторазовим збільшенням вивчити структуру невуса та виявити найменші ознаки, підозрілі на злоякісність. Тільки після ретельної діагностики лікар приймає рішення про можливість та оптимальний метод видалення.",
          ru: "Перед удалением любой родинки мы проводим цифровую дерматоскопию. Это бесконтактный и безболезненный метод исследования, который позволяет под многократным увеличением изучить структуру невуса и выявить малейшие признаки, подозрительные на злокачественность. Только после тщательной диагностики врач принимает решение о возможности и оптимальном методе удаления.",
          en: "Before removing any mole, we perform digital dermatoscopy. This is a non-contact and painless examination method that allows us to study the structure of the nevus under high magnification and detect the slightest signs suspicious of malignancy. Only after a thorough diagnosis does the doctor decide on the possibility and optimal method of removal.",
          de: "Vor der Entfernung eines Muttermals führen wir eine digitale Dermatoskopie durch. Dies ist eine kontaktlose und schmerzfreie Untersuchungsmethode, die es uns ermöglicht, die Struktur des Nävus unter starker Vergrößerung zu untersuchen und die geringsten Anzeichen auf Bösartigkeit zu erkennen. Erst nach einer gründlichen Diagnose entscheidet der Arzt über die Möglichkeit und die optimale Methode der Entfernung."
        }
      },
      {
        type: "image",
        content: { image: "https://medera.by/wp-content/uploads/2020/10/laser-remontal-6.jpg" },
        sideText: {
          uk: "Дерматоскоп дозволяє побачити те, що неможливо помітити неозброєним оком, забезпечуючи максимальну точність та безпеку діагностики.",
          ru: "Дерматоскоп позволяет увидеть то, что невозможно заметить невооруженным глазом, обеспечивая максимальную точность и безопасность диагностики.",
          en: "A dermatoscope allows us to see what is invisible to the naked eye, ensuring maximum diagnostic accuracy and safety.",
          de: "Ein Dermatoskop ermöglicht es uns, das zu sehen, was mit bloßem Auge unsichtbar ist, und gewährleistet maximale diagnostische Genauigkeit und Sicherheit."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ознаки родимки, що вимагає уваги (Правило ABCDE)",
          ru: "Признаки родинки, требующей внимания (Правило ABCDE)",
          en: "Signs of a Mole That Requires Attention (The ABCDE Rule)",
          de: "Anzeichen eines Muttermals, das Aufmerksamkeit erfordert (Die ABCDE-Regel)"
        }
      },
      {
        type: "list",
        content: {
          uk: "A (Asymmetry) - Асиметрія: одна половина родимки не схожа на іншу.\nB (Border) - Край: нерівний, розмитий або зазубрений край.\nC (Color) - Колір: неоднорідний колір, наявність різних відтінків (коричневий, чорний, червоний).\nD (Diameter) - Діаметр: розмір більше 6 мм (як гумка на олівці).\nE (Evolving) - Еволюція: будь-які зміни в розмірі, формі, кольорі або симптомах (свербіж, кровоточивість).",
          ru: "A (Asymmetry) - Асимметрия: одна половина родинки не похожа на другую.\nB (Border) - Край: неровный, размытый или зазубренный край.\nC (Color) - Цвет: неоднородный цвет, наличие разных оттенков (коричневый, черный, красный).\nD (Diameter) - Диаметр: размер более 6 мм (как ластик на карандаше).\nE (Evolving) - Эволюция: любые изменения в размере, форме, цвете или симптомах (зуд, кровоточивость).",
          en: "A (Asymmetry) - One half of the mole does not match the other.\nB (Border) - An irregular, blurry, or jagged border.\nC (Color) - Non-uniform color, presence of different shades (brown, black, red).\nD (Diameter) - A size larger than 6 mm (like a pencil eraser).\nE (Evolving) - Any changes in size, shape, color, or symptoms (itching, bleeding).",
          de: "A (Asymmetry) - Asymmetrie: Eine Hälfte des Muttermals sieht nicht aus wie die andere.\nB (Border) - Begrenzung: Ein unregelmäßiger, verschwommener oder gezackter Rand.\nC (Color) - Farbe: Uneinheitliche Farbe, Vorhandensein verschiedener Farbtöne (braun, schwarz, rot).\nD (Diameter) - Durchmesser: Eine Größe von mehr als 6 mm (wie ein Radiergummi am Bleistift).\nE (Evolving) - Entwicklung: Jegliche Veränderungen in Größe, Form, Farbe oder Symptomen (Juckreiz, Blutung)."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "При виявленні хоча б однієї з цих ознак необхідно терміново звернутися до дерматолога.",
          ru: "При обнаружении хотя бы одного из этих признаков необходимо срочно обратиться к дерматологу.",
          en: "If you notice even one of these signs, you should see a dermatologist immediately.",
          de: "Wenn Sie auch nur eines dieser Anzeichen bemerken, sollten Sie sofort einen Dermatologen aufsuchen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Методи видалення родимок",
          ru: "Методы удаления родинок",
          en: "Methods of Mole Removal",
          de: "Methoden der Muttermalentfernung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми пропонуємо кілька методів, вибір яких залежить від результатів дерматоскопії, розміру, типу та розташування невуса:",
          ru: "Мы предлагаем несколько методов, выбор которых зависит от результатов дерматоскопии, размера, типа и расположения невуса:",
          en: "We offer several methods, the choice of which depends on the results of dermatoscopy, the size, type, and location of the nevus:",
          de: "Wir bieten mehrere Methoden an, deren Wahl von den Ergebnissen der Dermatoskopie, der Größe, dem Typ und der Lage des Nävus abhängt:"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "1. **Радіохвильове видалення:** Найбільш сучасний і щадний метод. Дозволяє видалити невус з мінімальним пошкодженням навколишніх тканин та одночасно відправити матеріал на гістологічне дослідження, що є обов'язковим для пігментних утворень.",
          ru: "1. **Радиоволновое удаление:** Наиболее современный и щадящий метод. Позволяет удалить невус с минимальным повреждением окружающих тканей и одновременно отправить материал на гистологическое исследование, что является обязательным для пигментных образований.",
          en: "1. **Radiowave Removal:** The most modern and gentle method. It allows for the removal of the nevus with minimal damage to surrounding tissues and simultaneously allows sending the material for histological examination, which is mandatory for pigmented formations.",
          de: "1. **Radiofrequenzentfernung:** Die modernste und schonendste Methode. Sie ermöglicht die Entfernung des Nävus mit minimaler Schädigung des umliegenden Gewebes und erlaubt gleichzeitig die Einsendung des Materials zur histologischen Untersuchung, was bei pigmentierten Gebilden obligatorisch ist."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "2. **Лазерне видалення:** Застосовується тільки для родимок, щодо яких є 100% впевненість у їх доброякісності (за результатами дерматоскопії). Лазер пошарово випаровує пігмент, не залишаючи рубців. Гістологія після лазера неможлива.",
          ru: "2. **Лазерное удаление:** Применяется только для родинок, в доброкачественности которых есть 100% уверенность (по результатам дерматоскопии). Лазер послойно испаряет пигмент, не оставляя рубцов. Гистология после лазера невозможна.",
          en: "2. **Laser Removal:** Used only for moles that are 100% confirmed to be benign (based on dermatoscopy results). The laser vaporizes the pigment layer by layer, leaving no scars. Histology after laser removal is not possible.",
          de: "2. **Laserentfernung:** Wird nur bei Muttermalen angewendet, bei denen eine 100%ige Sicherheit über ihre Gutartigkeit besteht (basierend auf den Ergebnissen der Dermatoskopie). Der Laser verdampft das Pigment Schicht für Schicht und hinterlässt keine Narben. Eine histologische Untersuchung nach der Laserentfernung ist nicht möglich."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "3. **Хірургічне висічення:** Класичний метод, який застосовується для великих, глибоких або підозрілих родимок. Дозволяє видалити утворення повністю з обов'язковим гістологічним аналізом. Накладаються косметичні шви.",
          ru: "3. **Хирургическое иссечение:** Классический метод, который применяется для крупных, глубоких или подозрительных родинок. Позволяет удалить образование полностью с обязательным гистологическим анализом. Накладываются косметические швы.",
          en: "3. **Surgical Excision:** A classic method used for large, deep, or suspicious moles. It allows for the complete removal of the formation with a mandatory histological analysis. Cosmetic stitches are applied.",
          de: "3. **Chirurgische Exzision:** Eine klassische Methode, die bei großen, tiefen oder verdächtigen Muttermalen angewendet wird. Sie ermöglicht die vollständige Entfernung des Gebildes mit einer obligatorischen histologischen Analyse. Es werden kosmetische Nähte angelegt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чому гістологія є обов'язковою?",
          ru: "Почему гистология обязательна?",
          en: "Why is Histology Mandatory?",
          de: "Warum ist die Histologie obligatorisch?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гістологічне дослідження — це мікроскопічний аналіз видалених тканин. Це єдиний спосіб достовірно підтвердити, що родимка була доброякісною, і повністю виключити ризик розвитку раку шкіри. Ми дбаємо про ваше здоров'я, тому наполягаємо на цьому дослідженні.",
          ru: "Гистологическое исследование — это микроскопический анализ удаленных тканей. Это единственный способ достоверно подтвердить, что родинка была доброкачественной, и полностью исключить риск развития рака кожи. Мы заботимся о вашем здоровье, поэтому настаиваем на этом исследовании.",
          en: "Histological examination is a microscopic analysis of the removed tissue. It is the only way to reliably confirm that the mole was benign and to completely rule out the risk of skin cancer. We care about your health, which is why we insist on this examination.",
          de: "Die histologische Untersuchung ist eine mikroskopische Analyse des entfernten Gewebes. Es ist die einzige Möglichkeit, zuverlässig zu bestätigen, dass das Muttermal gutartig war, und das Risiko von Hautkrebs vollständig auszuschließen. Ihre Gesundheit liegt uns am Herzen, weshalb wir auf dieser Untersuchung bestehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Догляд після видалення",
          ru: "Уход после удаления",
          en: "Post-Removal Care",
          de: "Pflege nach der Entfernung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Оберігати ранку від потрапляння води протягом перших днів.\nОбробляти антисептиком за рекомендацією лікаря.\nНе здирати скоринку, вона має відпасти самостійно.\nУникати сонячних променів та солярію протягом місяця, використовувати сонцезахисний крем (SPF 50+).",
          ru: "Оберегать ранку от попадания воды в первые дни.\nОбрабатывать антисептиком по рекомендации врача.\nНе сдирать корочку, она должна отпасть самостоятельно.\nИзбегать солнечных лучей и солярия в течение месяца, использовать солнцезащитный крем (SPF 50+).",
          en: "Protect the wound from water for the first few days.\nTreat with an antiseptic as recommended by the doctor.\nDo not peel off the scab; it should fall off on its own.\nAvoid sunlight and tanning beds for a month, and use sunscreen (SPF 50+).",
          de: "Schützen Sie die Wunde in den ersten Tagen vor Wasser.\nBehandeln Sie sie mit einem Antiseptikum gemäß den Anweisungen des Arztes.\nKratzen Sie den Schorf nicht ab; er sollte von selbst abfallen.\nMeiden Sie einen Monat lang Sonnenlicht und Solarien und verwenden Sie Sonnenschutzmittel (LSF 50+)."
        }
      },
      {
        type: "image",
        content: { image: "https://lazersvit.com/storage/files/2023/07/24/uhod-posle-udelenija-3-min.jpg" },
        sideText: {
          uk: "Правильний догляд — запорука швидкого загоєння та відмінного косметичного результату.",
          ru: "Правильный уход — залог быстрого заживления и отличного косметического результата.",
          en: "Proper care is the key to rapid healing and an excellent cosmetic result.",
          de: "Die richtige Pflege ist der Schlüssel zu einer schnellen Heilung und einem ausgezeichneten kosmetischen Ergebnis."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не ризикуйте своїм здоров'ям, видаляючи родимки в неперевірених місцях або народними методами. Це може призвести до неповного видалення, інфікування, опіків, рубців та, що найнебезпечніше, до пропущеної онкології.",
          ru: "Не рискуйте своим здоровьем, удаляя родинки в непроверенных местах или народными методами. Это может привести к неполному удалению, инфицированию, ожогам, рубцам и, что самое опасное, к пропущенной онкологии.",
          en: "Do not risk your health by removing moles in unverified places or using folk methods. This can lead to incomplete removal, infection, burns, scars, and, most dangerously, missed oncology.",
          de: "Riskieren Sie nicht Ihre Gesundheit, indem Sie Muttermale an nicht überprüften Orten oder mit Volksmethoden entfernen. Dies kann zu unvollständiger Entfernung, Infektionen, Verbrennungen, Narben und, am gefährlichsten, zu übersehener Onkologie führen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Запишіться на консультацію",
          ru: "Запишитесь на консультацию",
          en: "Schedule a Consultation",
          de: "Vereinbaren Sie einen Beratungstermin"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Якщо у вас є родимка, яка вас турбує, або ви бажаєте видалити її з естетичних міркувань, запишіться на консультацію до нашого дерматолога. Ми проведемо ретельну діагностику та підберемо найбезпечніший метод саме для вас.",
          ru: "Если у вас есть родинка, которая вас беспокоит, или вы хотите удалить её из эстетических соображений, запишитесь на консультацию к нашему дерматологу. Мы проведем тщательную диагностику и подберем самый безопасный метод именно для вас.",
          en: "If you have a mole that worries you or you want to remove it for aesthetic reasons, schedule a consultation with our dermatologist. We will conduct a thorough diagnosis and select the safest method specifically for you.",
          de: "Wenn Sie ein Muttermal haben, das Sie beunruhigt, oder es aus ästhetischen Gründen entfernen lassen möchten, vereinbaren Sie einen Beratungstermin bei unserem Dermatologen. Wir führen eine gründliche Diagnose durch und wählen die sicherste Methode speziell für Sie aus."
        }
      }
    ],
    faqs: ["faq_mole_1", "faq_mole_2", "faq_mole_3"],
    doctors: ["doctor1", "doctor2"]
    },

    {
      id: "subservice3", // НОВАЯ ПОДУСЛУГА
      serviceId: "service1", // Привязка к основной услуге "Удаление новообразований"
      title: {
        uk: "Видалення папілом",
        ru: "Удаление папиллом",
        en: "Papilloma Removal",
        de: "Entfernung von Papillomen"
      },
      slug: "vydalennya-papilom",
      mainImage: "https://santa-med.ru/upload/uploads/2018/12/papillomy-na-vekah.jpg",
      content: [
        {
          type: "heading",
          content: {
            uk: "Безпечне та ефективне видалення папілом",
            ru: "Безопасное и эффективное удаление папиллом",
            en: "Safe and Effective Papilloma Removal",
            de: "Sichere und effektive Entfernung von Papillomen"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Папіломи — це доброякісні новоутворення, викликані вірусом папіломи людини (ВПЛ). Зазвичай вони виглядають як м'які нарости на тонкій ніжці або широкій основі, тілесного або коричневого кольору. Найчастіше папіломи з'являються на шиї, в пахвових западинах, під грудьми та в пахових складках. Хоча вони не становлять загрози для життя, їх варто видаляти.",
            ru: "Папилломы — это доброкачественные новообразования, вызванные вирусом папилломы человека (ВПЧ). Обычно они выглядят как мягкие наросты на тонкой ножке или широком основании, телесного или коричневого цвета. Чаще всего папилломы появляются на шее, в подмышечных впадинах, под грудью и в паховых складках. Хотя они не представляют угрозы для жизни, их стоит удалять.",
            en: "Papillomas are benign growths caused by the Human Papillomavirus (HPV). They usually appear as soft growths on a thin stalk or a broad base, either skin-colored or brown. Most often, papillomas appear on the neck, in the armpits, under the breasts, and in the groin folds. Although they are not life-threatening, their removal is recommended.",
            de: "Papillome sind gutartige Wucherungen, die durch das Humane Papillomavirus (HPV) verursacht werden. Sie erscheinen normalerweise als weiche Auswüchse an einem dünnen Stiel oder einer breiten Basis, hautfarben oder braun. Am häufigsten treten Papillome am Hals, in den Achselhöhlen, unter den Brüsten und in den Leistenfalten auf. Obwohl sie nicht lebensbedrohlich sind, wird ihre Entfernung empfohlen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Чому необхідно видаляти папіломи?",
            ru: "Почему необходимо удалять папилломы?",
            en: "Why is it Necessary to Remove Papillomas?",
            de: "Warum ist die Entfernung von Papillomen notwendig?"
          }
        },
        {
          type: "list",
          content: {
            uk: "Естетичний дефект: Папіломи, особливо множинні, можуть виглядати неестетично.\nРизик травматизації: Вони легко травмуються одягом або прикрасами, що може викликати кровотечу та запалення.\nПоширення вірусу: Розчісування або травма папіломи може призвести до поширення ВПЛ на сусідні ділянки шкіри (аутоінокуляція) та появи нових утворень.\nРизик передачі: ВПЛ може передаватися контактно-побутовим шляхом іншим людям.",
            ru: "Эстетический дефект: Папилломы, особенно множественные, могут выглядеть неэстетично.\nРиск травматизации: Они легко травмируются одеждой или украшениями, что может вызвать кровотечение и воспаление.\nРаспространение вируса: Расчесывание или травма папилломы может привести к распространению ВПЧ на соседние участки кожи (аутоинокуляция) и появлению новых образований.\nРиск передачи: ВПЧ может передаваться контактно-бытовым путем другим людям.",
            en: "Aesthetic defect: Papillomas, especially multiple ones, can look unaesthetic.\nRisk of injury: They are easily injured by clothing or jewelry, which can cause bleeding and inflammation.\nVirus spread: Scratching or injuring a papilloma can lead to the spread of HPV to adjacent skin areas (autoinoculation) and the appearance of new growths.\nRisk of transmission: HPV can be transmitted to other people through household contact.",
            de: "Ästhetischer Makel: Papillome, insbesondere wenn sie zahlreich sind, können unästhetisch aussehen.\nVerletzungsrisiko: Sie können leicht durch Kleidung oder Schmuck verletzt werden, was zu Blutungen und Entzündungen führen kann.\nVirusverbreitung: Das Kratzen oder Verletzen eines Papilloms kann zur Verbreitung von HPV auf benachbarte Hautbereiche (Autoinokulation) und zum Auftreten neuer Wucherungen führen.\nÜbertragungsrisiko: HPV kann durch Haushaltskontakt auf andere Personen übertragen werden."
          }
        },
        {
          type: "image",
          content: { image: "https://lancet.clinic/media/images/papilloma.original.jpg" },
          sideText: {
            uk: "Найчастіше папіломи локалізуються в місцях тертя шкіри, що підвищує ризик їх пошкодження та подальшого поширення.",
            ru: "Чаще всего папилломы локализуются в местах трения кожи, что повышает риск их повреждения и дальнейшего распространения.",
            en: "Most often, papillomas are located in areas of skin friction, which increases the risk of their damage and further spread.",
            de: "Am häufigsten befinden sich Papillome in Bereichen der Hautreibung, was das Risiko ihrer Beschädigung und weiteren Ausbreitung erhöht."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Сучасні методи видалення в нашій клініці",
            ru: "Современные методы удаления в нашей клинике",
            en: "Modern Removal Methods at Our Clinic",
            de: "Moderne Entfernungsmethoden in unserer Klinik"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ми використовуємо тільки апаратні методики, які дозволяють видалити папіломи швидко, безкровно та з чудовим косметичним ефектом. Перед процедурою лікар проводить огляд, щоб підтвердити діагноз.",
            ru: "Мы используем только аппаратные методики, которые позволяют удалить папилломы быстро, бескровно и с превосходным косметическим эффектом. Перед процедурой врач проводит осмотр, чтобы подтвердить диагноз.",
            en: "We use only hardware techniques that allow for the removal of papillomas quickly, bloodlessly, and with an excellent cosmetic effect. Before the procedure, the doctor conducts an examination to confirm the diagnosis.",
            de: "Wir verwenden ausschließlich apparative Techniken, die eine schnelle, blutlose Entfernung von Papillomen mit einem hervorragenden kosmetischen Ergebnis ermöglichen. Vor dem Eingriff führt der Arzt eine Untersuchung durch, um die Diagnose zu bestätigen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лазерне видалення:** Лазерний промінь точно і пошарово випаровує тканину папіломи, не зачіпаючи здорову шкіру. Лазер коагулює судини, що робить процедуру безкровною. Ідеально підходить для видалення папілом на обличчі та інших делікатних зонах.",
            ru: "**Лазерное удаление:** Лазерный луч точно и послойно испаряет ткань папилломы, не затрагивая здоровую кожу. Лазер коагулирует сосуды, что делает процедуру бескровной. Идеально подходит для удаления папиллом на лице и других деликатных зонах.",
            en: "**Laser Removal:** The laser beam accurately and layer-by-layer vaporizes the papilloma tissue without affecting healthy skin. The laser coagulates blood vessels, making the procedure bloodless. It is ideal for removing papillomas on the face and other delicate areas.",
            de: "**Laserentfernung:** Der Laserstrahl verdampft das Papillomgewebe präzise und schichtweise, ohne die gesunde Haut zu beeinträchtigen. Der Laser koaguliert die Blutgefäße, was den Eingriff blutlos macht. Ideal zur Entfernung von Papillomen im Gesicht und anderen empfindlichen Bereichen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Радіохвильове видалення:** Апарат генерує високочастотні радіохвилі, які безконтактно «зрізають» папілому біля самої основи. Метод забезпечує швидке загоєння і мінімальний ризик утворення рубців.",
            ru: "**Радиоволновое удаление:** Аппарат генерирует высокочастотные радиоволны, которые бесконтактно «срезают» папиллому у самого основания. Метод обеспечивает быстрое заживление и минимальный риск образования рубцов.",
            en: "**Radiowave Removal:** The device generates high-frequency radio waves that non-contactly \"cut\" the papilloma at its very base. The method ensures rapid healing and a minimal risk of scarring.",
            de: "**Radiofrequenzentfernung:** Das Gerät erzeugt hochfrequente Radiowellen, die das Papillom berührungslos an seiner Basis „abschneiden“. Die Methode gewährleistet eine schnelle Heilung und ein minimales Risiko der Narbenbildung."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Кріодеструкція:** Використання рідкого азоту для заморожування та руйнування тканин папіломи. Це швидкий і ефективний метод, який добре підходить для невеликих утворень на тілі.",
            ru: "**Криодеструкция:** Использование жидкого азота для замораживания и разрушения тканей папилломы. Это быстрый и эффективный метод, который хорошо подходит для небольших образований на теле.",
            en: "**Cryodestruction:** The use of liquid nitrogen to freeze and destroy papilloma tissue. It is a quick and effective method well-suited for small growths on the body.",
            de: "**Kryodestruktion:** Die Anwendung von flüssigem Stickstoff zum Einfrieren und Zerstören des Papillomgewebes. Es ist eine schnelle und effektive Methode, die sich gut für kleine Wucherungen am Körper eignet."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Процес видалення: що очікувати?",
            ru: "Процесс удаления: чего ожидать?",
            en: "The Removal Process: What to Expect?",
            de: "Der Entfernungsprozess: Was ist zu erwarten?"
          }
        },
        {
          type: "list",
          content: {
            uk: "Консультація та огляд лікаря.\nЗа потреби — місцеве знеболення (анестезуючий крем або ін'єкція).\nСама процедура видалення триває всього кілька хвилин.\nПісля видалення на місці папіломи утворюється невелика скоринка.\nЛікар надає рекомендації по догляду.",
            ru: "Консультация и осмотр врача.\nПри необходимости — местное обезболивание (анестезирующий крем или инъекция).\nСама процедура удаления занимает всего несколько минут.\nПосле удаления на месте папилломы образуется небольшая корочка.\nВрач предоставляет рекомендации по уходу.",
            en: "Consultation and examination by a doctor.\nIf necessary, local anesthesia (anesthetic cream or injection).\nThe removal procedure itself takes only a few minutes.\nA small scab forms on the site of the papilloma after removal.\nThe doctor provides aftercare recommendations.",
            de: "Beratung und Untersuchung durch einen Arzt.\nBei Bedarf lokale Betäubung (Betäubungscreme oder Injektion).\nDer Entfernungsvorgang selbst dauert nur wenige Minuten.\nNach der Entfernung bildet sich an der Stelle des Papilloms eine kleine Kruste.\nDer Arzt gibt Empfehlungen zur Nachsorge."
          }
        },
        {
          type: "image",
          content: { image: "https://totalcharm.ru/upload/iblock/72a/bnsytn92ix8d056gm2g1pbuwkfraepuv.jpg" },
          sideText: {
            uk: "Процедура проходить швидко та комфортно, дозволяючи повернутися до звичних справ одразу після її завершення.",
            ru: "Процедура проходит быстро и комфортно, позволяя вернуться к обычным делам сразу после её завершения.",
            en: "The procedure is quick and comfortable, allowing you to return to your usual activities immediately after its completion.",
            de: "Der Eingriff ist schnell und komfortabel, sodass Sie direkt danach wieder Ihren gewohnten Tätigkeiten nachgehen können."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Важливість комплексного підходу",
            ru: "Важность комплексного подхода",
            en: "The Importance of a Comprehensive Approach",
            de: "Die Bedeutung eines umfassenden Ansatzes"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Важливо розуміти, що видалення папілом — це усунення зовнішнього прояву ВПЛ. Сам вірус залишається в організмі. При множинних папіломах або частих рецидивах наш лікар може порекомендувати додаткове обстеження та противірусну терапію для зміцнення імунітету та пригнічення активності вірусу.",
            ru: "Важно понимать, что удаление папиллом — это устранение внешнего проявления ВПЧ. Сам вирус остается в организме. При множественных папилломах или частых рецидивах наш врач может порекомендовать дополнительное обследование и противовирусную терапию для укрепления иммунитета и подавления активности вируса.",
            en: "It is important to understand that removing papillomas eliminates the external manifestation of HPV. The virus itself remains in the body. In cases of multiple papillomas or frequent recurrences, our doctor may recommend additional examinations and antiviral therapy to strengthen the immune system and suppress viral activity.",
            de: "Es ist wichtig zu verstehen, dass die Entfernung von Papillomen die äußere Manifestation von HPV beseitigt. Das Virus selbst verbleibt im Körper. Bei multiplen Papillomen oder häufigen Rezidiven kann unser Arzt zusätzliche Untersuchungen und eine antivirale Therapie zur Stärkung des Immunsystems und zur Unterdrückung der Virusaktivität empfehlen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Рекомендації по догляду",
            ru: "Рекомендации по уходу",
            en: "Aftercare Recommendations",
            de: "Nachsorgeempfehlungen"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Після процедури важливо дотримуватися простих правил:",
            ru: "После процедуры важно соблюдать простые правила:",
            en: "After the procedure, it is important to follow simple rules:",
            de: "Nach dem Eingriff ist es wichtig, einfache Regeln zu befolgen:"
          }
        },
        {
          type: "list",
          content: {
            uk: "Не мочити оброблену ділянку першу добу.\nОберігати від тертя одягом.\nНе здирати скоринку, що утворилася.\nУникати відвідування лазні, сауни та басейну до повного загоєння (7-10 днів).\nЗахищати ділянку від сонця, щоб уникнути пігментації.",
            ru: "Не мочить обработанный участок первые сутки.\nОберегать от трения одеждой.\nНе сдирать образовавшуюся корочку.\nИзбегать посещения бани, сауны и бассейна до полного заживления (7-10 дней).\nЗащищать участок от солнца, чтобы избежать пигментации.",
            en: "Do not wet the treated area for the first 24 hours.\nProtect it from friction with clothing.\nDo not peel off the scab that forms.\nAvoid visiting baths, saunas, and swimming pools until fully healed (7-10 days).\nProtect the area from the sun to avoid pigmentation.",
            de: "Den behandelten Bereich in den ersten 24 Stunden nicht nass machen.\nVor Reibung durch Kleidung schützen.\nDie gebildete Kruste nicht abkratzen.\nVermeiden Sie den Besuch von Bädern, Saunen und Schwimmbädern bis zur vollständigen Heilung (7-10 Tage).\nSchützen Sie den Bereich vor der Sonne, um Pigmentierung zu vermeiden."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Не займайтеся самолікуванням! Спроби видалити папіломи самостійно за допомогою неперевірених засобів можуть призвести до опіків, рубців, інфікування та поширення вірусу.",
            ru: "Не занимайтесь самолечением! Попытки удалить папилломы самостоятельно с помощью непроверенных средств могут привести к ожогам, рубцам, инфицированию и распространению вируса.",
            en: "Do not self-medicate! Attempts to remove papillomas on your own using unverified products can lead to burns, scars, infection, and the spread of the virus.",
            de: "Behandeln Sie sich nicht selbst! Versuche, Papillome eigenständig mit nicht geprüften Mitteln zu entfernen, können zu Verbrennungen, Narben, Infektionen und der Verbreitung des Virus führen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Довірте красу та здоров'я вашої шкіри професіоналам. Запишіться на консультацію, щоб швидко і безпечно позбутися папілом.",
            ru: "Доверьте красоту и здоровье вашей кожи профессионалам. Запишитесь на консультацию, чтобы быстро и безопасно избавиться от папиллом.",
            en: "Entrust the beauty and health of your skin to professionals. Schedule a consultation to get rid of papillomas quickly and safely.",
            de: "Vertrauen Sie die Schönheit und Gesundheit Ihrer Haut Profis an. Vereinbaren Sie einen Beratungstermin, um Papillome schnell und sicher loszuwerden."
          }
        }
      ],
      faqs: ["faq_papilloma_1", "faq_papilloma_2"],
      doctors: ["doctor1", "doctor3"]
    },
    {
      id: "subservice4", // НОВАЯ ПОДУСЛУГА
      serviceId: "service1", // Привязка к основной услуге "Удаление новообразований"
      title: {
        uk: "Видалення кератом",
        ru: "Удаление кератом",
        en: "Keratoma Removal",
        de: "Entfernung von Keratomen"
      },
      slug: "vydalennya-keratom",
      mainImage: "https://center-laser-surgery.ru/wp-content/uploads/2019/11/keratoma.png",
      content: [
        {
          type: "heading",
          content: {
            uk: "Видалення кератом: повернення гладкості та здоров'я шкіри",
            ru: "Удаление кератом: возвращение гладкости и здоровья кожи",
            en: "Keratoma Removal: Restoring Smoothness and Skin Health",
            de: "Entfernung von Keratomen: Wiederherstellung von Glätte und Hautgesundheit"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Кератоми — це доброякісні новоутворення, що виникають внаслідок надлишкового зроговіння епідермісу. Найчастіше зустрічається себорейна кератома, яка виглядає як коричнева або жовтувата бляшка з шорсткою поверхнею. Ці утворення є віковими змінами шкіри і не несуть загрози здоров'ю, але часто сприймаються як значний косметичний дефект.",
            ru: "Кератомы — это доброкачественные новообразования, возникающие из-за избыточного ороговения эпидермиса. Наиболее часто встречается себорейная кератома, которая выглядит как коричневая или желтоватая бляшка с шершавой поверхностью. Эти образования являются возрастными изменениями кожи и не несут угрозы здоровью, но часто воспринимаются как значительный косметический дефект.",
            en: "Keratomas are benign growths that arise from excessive keratinization of the epidermis. The most common type is seborrheic keratosis, which appears as a brown or yellowish plaque with a rough surface. These formations are age-related skin changes and pose no health threat, but are often perceived as a significant cosmetic defect.",
            de: "Keratome sind gutartige Wucherungen, die durch eine übermäßige Verhornung der Epidermis entstehen. Am häufigsten ist die seborrhoische Keratose, die als bräunliche oder gelbliche Plaque mit einer rauen Oberfläche erscheint. Diese Bildungen sind altersbedingte Hautveränderungen und stellen keine Gesundheitsgefahr dar, werden aber oft als erheblicher kosmetischer Makel empfunden."
          }
        },
        {
          type: "image",
          content: { image: "https://dalwin.ru/wp-content/uploads/2023/03/4adebd359276d35ee7b8c9d9c79be344.jpg" },
          sideText: {
            uk: "Кератоми можуть з'являтися на будь-яких ділянках тіла, крім долонь і підошов, але найчастіше локалізуються на обличчі, шиї, грудях і спині.",
            ru: "Кератомы могут появляться на любых участках тела, кроме ладоней и подошв, но чаще всего локализуются на лице, шее, груди и спине.",
            en: "Keratomas can appear on any part of the body except the palms and soles, but are most often located on the face, neck, chest, and back.",
            de: "Keratome können an jedem Körperteil außer den Handflächen und Fußsohlen auftreten, befinden sich aber am häufigsten im Gesicht, am Hals, auf der Brust und am Rücken."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Показання до видалення кератом",
            ru: "Показания к удалению кератом",
            en: "Indications for Keratoma Removal",
            de: "Indikationen für die Entfernung von Keratomen"
          }
        },
        {
          type: "list",
          content: {
            uk: "Естетичний дискомфорт: бажання позбутися помітного дефекту.\nПостійна травматизація: утворення зачіпається одягом, що викликає подразнення або кровоточивість.\nЗбільшення кількості та розміру: активний ріст кератом.\nСвербіж або лущення: неприємні відчуття в ділянці новоутворення.\nДиференційна діагностика: у рідкісних випадках кератома може бути схожа на злоякісне утворення, і видалення потрібне для виключення ризиків.",
            ru: "Эстетический дискомфорт: желание избавиться от заметного дефекта.\nПостоянная травматизация: образование задевается одеждой, что вызывает раздражение или кровоточивость.\nУвеличение количества и размера: активный рост кератом.\nЗуд или шелушение: неприятные ощущения в области новообразования.\nДифференциальная диагностика: в редких случаях кератома может быть похожа на злокачественное образование, и удаление требуется для исключения рисков.",
            en: "Aesthetic discomfort: the desire to get rid of a noticeable defect.\nConstant trauma: the formation is irritated by clothing, causing irritation or bleeding.\nIncrease in number and size: active growth of keratomas.\nItching or peeling: unpleasant sensations in the area of the growth.\nDifferential diagnosis: in rare cases, a keratoma can resemble a malignant formation, and removal is required to rule out risks.",
            de: "Ästhetisches Unbehagen: der Wunsch, einen auffälligen Makel loszuwerden.\nStändige Traumatisierung: die Bildung wird durch Kleidung gereizt, was zu Irritationen oder Blutungen führt.\nZunahme von Anzahl und Größe: aktives Wachstum von Keratomen.\nJuckreiz oder Schuppung: unangenehme Empfindungen im Bereich der Wucherung.\nDifferentialdiagnose: In seltenen Fällen kann ein Keratom einer bösartigen Bildung ähneln, und eine Entfernung ist erforderlich, um Risiken auszuschließen."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Найефективніші методи видалення",
            ru: "Самые эффективные методы удаления",
            en: "The Most Effective Removal Methods",
            de: "Die effektivsten Entfernungsmethoden"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Ми обираємо метод видалення індивідуально, враховуючи розмір, глибину та локалізацію кератоми. Наша мета — досягти максимального ефекту з мінімальним втручанням.",
            ru: "Мы выбираем метод удаления индивидуально, учитывая размер, глубину и локализацию кератомы. Наша цель — достичь максимального эффекта с минимальным вмешательством.",
            en: "We choose the removal method individually, considering the size, depth, and location of the keratoma. Our goal is to achieve maximum effect with minimal intervention.",
            de: "Wir wählen die Entfernungsmethode individuell unter Berücksichtigung von Größe, Tiefe und Lage des Keratoms. Unser Ziel ist es, mit minimalem Eingriff die maximale Wirkung zu erzielen."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Лазерне видалення (CO2 лазер):** Золотий стандарт для видалення кератом. Лазерний промінь точно, шар за шаром, випаровує тканини новоутворення, не пошкоджуючи здорову шкіру. Процедура безкровна, стерильна і забезпечує швидке загоєння.",
            ru: "**Лазерное удаление (CO2 лазер):** Золотой стандарт для удаления кератом. Лазерный луч точно, слой за слоем, испаряет ткани новообразования, не повреждая здоровую кожу. Процедура бескровна, стерильна и обеспечивает быстрое заживление.",
            en: "**Laser Removal (CO2 Laser):** The gold standard for keratoma removal. The laser beam precisely vaporizes the growth's tissue layer by layer without damaging healthy skin. The procedure is bloodless, sterile, and ensures rapid healing.",
            de: "**Laserentfernung (CO2-Laser):** Der Goldstandard für die Entfernung von Keratomen. Der Laserstrahl verdampft das Gewebe der Wucherung präzise Schicht für Schicht, ohne die gesunde Haut zu schädigen. Das Verfahren ist blutlos, steril und gewährleistet eine schnelle Heilung."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Кріодеструкція:** Видалення за допомогою рідкого азоту. Підходить для невеликих, поверхневих кератом. Низька температура руйнує клітини утворення, після чого воно відторгається.",
            ru: "**Криодеструкция:** Удаление с помощью жидкого азота. Подходит для небольших, поверхностных кератом. Низкая температура разрушает клетки образования, после чего оно отторгается.",
            en: "**Cryodestruction:** Removal using liquid nitrogen. Suitable for small, superficial keratomas. The low temperature destroys the cells of the formation, after which it is rejected.",
            de: "**Kryodestruktion:** Entfernung mit flüssigem Stickstoff. Geeignet für kleine, oberflächliche Keratome. Die niedrige Temperatur zerstört die Zellen der Bildung, woraufhin sie abgestoßen wird."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "**Радіохвильовий метод:** Ефективний для кератом на ніжці або випуклих утворень. Дозволяє акуратно «зрізати» новоутворення, мінімізуючи вплив на навколишні тканини.",
            ru: "**Радиоволновый метод:** Эффективен для кератом на ножке или выпуклых образований. Позволяет аккуратно «срезать» новообразование, минимизируя воздействие на окружающие ткани.",
            en: "**Radiowave Method:** Effective for pedunculated or raised keratomas. It allows for the neat \"cutting off\" of the growth, minimizing the impact on surrounding tissues.",
            de: "**Radiofrequenzmethode:** Wirksam bei gestielten oder erhabenen Keratomen. Sie ermöglicht das saubere „Abschneiden“ der Wucherung und minimiert die Auswirkungen auf das umliegende Gewebe."
          }
        },
        {
          type: "heading",
          content: {
            uk: "Як проходить процедура?",
            ru: "Как проходит процедура?",
            en: "How is the procedure performed?",
            de: "Wie läuft der Eingriff ab?"
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Процедура видалення кератом є швидкою та комфортною. Вона включає огляд та консультацію лікаря, застосування місцевої анестезії (зазвичай крем) та безпосередньо видалення, яке триває від 5 до 20 хвилин. Після процедури на місці кератоми утворюється захисна скоринка, яка самостійно відпадає протягом 7-14 днів.",
            ru: "Процедура удаления кератом является быстрой и комфортной. Она включает осмотр и консультацию врача, применение местной анестезии (обычно крем) и непосредственно удаление, которое длится от 5 до 20 минут. После процедуры на месте кератомы образуется защитная корочка, которая самостоятельно отпадает в течение 7-14 дней.",
            en: "The keratoma removal procedure is quick and comfortable. It includes an examination and consultation with a doctor, the application of local anesthesia (usually a cream), and the removal itself, which lasts from 5 to 20 minutes. After the procedure, a protective scab forms on the site of the keratoma, which falls off on its own within 7-14 days.",
            de: "Der Eingriff zur Entfernung von Keratomen ist schnell und komfortabel. Er umfasst eine Untersuchung und Beratung durch einen Arzt, die Anwendung einer lokalen Betäubung (normalerweise eine Creme) und die eigentliche Entfernung, die 5 bis 20 Minuten dauert. Nach dem Eingriff bildet sich an der Stelle des Keratoms eine Schutzkruste, die innerhalb von 7-14 Tagen von selbst abfällt."
          }
        },
        {
          type: "paragraph",
          content: {
            uk: "Не намагайтеся видаляти кератоми самостійно! Це неефективно та може призвести до ускладнень: інфікування, утворення рубців або неповної ліквідації новоутворення. Довіряйте лише професіоналам.",
            ru: "Не пытайтесь удалять кератомы самостоятельно! Это неэффективно и может привести к осложнениям: инфицированию, образованию рубцов или неполному удалению новообразования. Доверяйте только профессионалам.",
            en: "Do not attempt to remove keratomas yourself! This is ineffective and can lead to complications: infection, scarring, or incomplete removal of the growth. Trust only professionals.",
            de: "Versuchen Sie nicht, Keratome selbst zu entfernen! Dies ist unwirksam und kann zu Komplikationen führen: Infektionen, Narbenbildung oder unvollständige Entfernung der Wucherung. Vertrauen Sie nur Fachleuten."
          }
        }
      ],
      faqs: ["faq_keratoma_1", "faq_keratoma_2"],
      doctors: ["doctor1", "doctor2"]
    },

  {
    id: "subservice5", // НОВАЯ ПОДУСЛУГА
    serviceId: "service1", // Привязка к основной услуге "Удаление новообразований"
    title: {
      uk: "Видалення кондилом",
      ru: "Удаление кондилом",
      en: "Condyloma Removal",
      de: "Entfernung von Kondylomen"
    },
    slug: "vydalennya-kondylom",
    mainImage: "https://laserdoctor.ru/upload/resize_cache/iblock/643/600_338_1/7ck5r4gzji63ukh3tl4yzwnjuhxjnmx5.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Делікатне вирішення проблеми: видалення кондилом",
          ru: "Деликатное решение проблемы: удаление кондилом",
          en: "A Delicate Solution: Condyloma Removal",
          de: "Eine heikle Lösung: Entfernung von Kondylomen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гострокінцеві кондиломи (аногенітальні бородавки) — це специфічні новоутворення, викликані вірусом папіломи людини (ВПЛ), які вражають шкіру та слизові оболонки інтимних зон. Це захворювання, що передається статевим шляхом, вимагає обов'язкового професійного лікування через високу контагіозність та ризик ускладнень. Ми гарантуємо повну конфіденційність та дбайливий підхід.",
          ru: "Остроконечные кондиломы (аногенитальные бородавки) — это специфические новообразования, вызванные вирусом папилломы человека (ВПЧ), которые поражают кожу и слизистые оболочки интимных зон. Это заболевание, передающееся половым путем, требует обязательного профессионального лечения из-за высокой контагиозности и риска осложнений. Мы гарантируем полную конфиденциальность и деликатный подход.",
          en: "Genital warts (condyloma acuminata) are specific growths caused by the Human Papillomavirus (HPV) that affect the skin and mucous membranes of intimate areas. This sexually transmitted disease requires mandatory professional treatment due to high contagiousness and the risk of complications. We guarantee complete confidentiality and a sensitive approach.",
          de: "Feigwarzen (Kondylome) sind spezifische Wucherungen, die durch das Humane Papillomavirus (HPV) verursacht werden und die Haut und Schleimhäute der Intimbereiche betreffen. Diese sexuell übertragbare Krankheit erfordert aufgrund der hohen Ansteckungsgefahr und des Komplikationsrisikos eine obligatorische professionelle Behandlung. Wir garantieren vollständige Vertraulichkeit und einen sensiblen Ansatz."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чому кондиломи необхідно видаляти негайно?",
          ru: "Почему кондиломы необходимо удалять немедленно?",
          en: "Why Must Condylomas Be Removed Immediately?",
          de: "Warum müssen Kondylome sofort entfernt werden?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Висока заразність: ризик передачі вірусу статевому партнеру.\nШвидке поширення: кондиломи можуть швидко збільшуватися в розмірі та кількості, вражаючи нові ділянки.\nРизик травматизації: викликають дискомфорт, можуть кровоточити під час статевого акту або контакту з білизною.\nПсихологічний дискомфорт: значно знижують якість інтимного життя.\nОнкогенний ризик: деякі типи ВПЛ, що викликають кондиломи, пов'язані з підвищеним ризиком розвитку раку шийки матки, вульви, пеніса та прямої кишки.",
          ru: "Высокая заразность: риск передачи вируса половому партнеру.\nБыстрое распространение: кондиломы могут быстро увеличиваться в размере и количестве, поражая новые участки.\nРиск травматизации: вызывают дискомфорт, могут кровоточить во время полового акта или контакта с бельем.\nПсихологический дискомфорт: значительно снижают качество интимной жизни.\nОнкогенный риск: некоторые типы ВПЧ, вызывающие кондиломы, связаны с повышенным риском развития рака шейки матки, вульвы, пениса и прямой кишки.",
          en: "High contagiousness: risk of transmitting the virus to a sexual partner.\nRapid spread: condylomas can quickly increase in size and number, affecting new areas.\nRisk of trauma: cause discomfort, can bleed during intercourse or contact with underwear.\nPsychological discomfort: significantly reduce the quality of intimate life.\nOncogenic risk: some HPV types that cause condylomas are associated with an increased risk of developing cervical, vulvar, penile, and rectal cancer.",
          de: "Hohe Ansteckungsgefahr: Risiko der Übertragung des Virus auf den Sexualpartner.\nSchnelle Ausbreitung: Kondylome können schnell an Größe und Anzahl zunehmen und neue Bereiche befallen.\nVerletzungsrisiko: verursachen Unbehagen, können beim Geschlechtsverkehr oder Kontakt mit Unterwäsche bluten.\nPsychisches Unbehagen: beeinträchtigen die Lebensqualität im Intimbereich erheblich.\nOnkogenes Risiko: Einige HPV-Typen, die Kondylome verursachen, sind mit einem erhöhten Risiko für die Entwicklung von Gebärmutterhals-, Vulva-, Penis- und Rektalkrebs verbunden."
        }
      },
      {
        type: "image",
        content: { image: "https://medicris.ru/photos/remove_of_papilloma.png" },
        sideText: {
          uk: "Лікування кондилом обов'язково має проходити у лікаря. Самолікування є небезпечним і може призвести до ускладнень.",
          ru: "Лечение кондилом обязательно должно проходить у врача. Самолечение опасно и может привести к осложнениям.",
          en: "Treatment of condylomas must be carried out by a doctor. Self-treatment is dangerous and can lead to complications.",
          de: "Die Behandlung von Kondylomen muss von einem Arzt durchgeführt werden. Selbstbehandlung ist gefährlich und kann zu Komplikationen führen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Діагностика та вибір методу лікування",
          ru: "Диагностика и выбор метода лечения",
          en: "Diagnosis and Choice of Treatment Method",
          de: "Diagnose und Wahl der Behandlungsmethode"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Діагноз встановлюється на основі візуального огляду лікарем (дерматовенерологом, гінекологом або урологом). У деяких випадках може знадобитися додаткове обстеження (ПЛР-тест на ВПЛ, цитологія). Лікування обов'язково мають пройти обидва статеві партнери. Ми використовуємо найбільш щадні та ефективні методи видалення.",
          ru: "Диагноз устанавливается на основе визуального осмотра врачом (дерматовенерологом, гинекологом или урологом). В некоторых случаях может потребоваться дополнительное обследование (ПЦР-тест на ВПЧ, цитология). Лечение обязательно должны пройти оба половых партнера. Мы используем самые щадящие и эффективные методы удаления.",
          en: "The diagnosis is made based on a visual examination by a doctor (dermatovenerologist, gynecologist, or urologist). In some cases, additional tests (PCR test for HPV, cytology) may be required. Both sexual partners must undergo treatment. We use the most gentle and effective removal methods.",
          de: "Die Diagnose wird auf der Grundlage einer visuellen Untersuchung durch einen Arzt (Dermatovenerologe, Gynäkologe oder Urologe) gestellt. In einigen Fällen können zusätzliche Tests (PCR-Test auf HPV, Zytologie) erforderlich sein. Beide Sexualpartner müssen sich einer Behandlung unterziehen. Wir verwenden die schonendsten und effektivsten Entfernungsmethoden."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Лазерне видалення (CO2 лазер):** Найкращий метод для видалення кондилом будь-якої локалізації, включаючи слизові оболонки. Лазер точно випаровує утворення, не залишаючи рубців і мінімізуючи ризик рецидиву.",
          ru: "**Лазерное удаление (CO2 лазер):** Предпочтительный метод для удаления кондилом любой локализации, включая слизистые оболочки. Лазер точно испаряет образования, не оставляя рубцов и минимизируя риск рецидива.",
          en: "**Laser Removal (CO2 Laser):** The preferred method for removing condylomas of any location, including mucous membranes. The laser precisely vaporizes the growths, leaving no scars and minimizing the risk of recurrence.",
          de: "**Laserentfernung (CO2-Laser):** Die bevorzugte Methode zur Entfernung von Kondylomen jeder Lokalisation, einschließlich der Schleimhäute. Der Laser verdampft die Wucherungen präzise, hinterlässt keine Narben und minimiert das Rückfallrisiko."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "**Радіохвильове видалення:** Дозволяє безконтактно видаляти кондиломи, особливо на ніжці. Метод забезпечує швидке загоєння і дозволяє взяти тканину для гістологічного аналізу, якщо є сумніви в діагнозі.",
          ru: "**Радиоволновое удаление:** Позволяет бесконтактно удалять кондиломы, особенно на ножке. Метод обеспечивает быстрое заживление и позволяет взять ткань для гистологического анализа, если есть сомнения в диагнозе.",
          en: "**Radiowave Removal:** Allows for non-contact removal of condylomas, especially pedunculated ones. The method ensures rapid healing and allows for tissue sampling for histological analysis if the diagnosis is in doubt.",
          de: "**Radiofrequenzentfernung:** Ermöglicht die berührungslose Entfernung von Kondylomen, insbesondere von gestielten. Die Methode gewährleistet eine schnelle Heilung und ermöglicht die Entnahme von Gewebe für eine histologische Analyse, wenn Zweifel an der Diagnose bestehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Важливість комплексного лікування",
          ru: "Важность комплексного лечения",
          en: "The Importance of Comprehensive Treatment",
          de: "Die Bedeutung einer umfassenden Behandlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Видалення кондилом є лише частиною терапії. Оскільки вірус ВПЛ залишається в організмі, лікар додатково призначає противірусні та імуномодулюючі препарати. Це необхідно для пригнічення активності вірусу та значного зниження ризику повторної появи кондилом.",
          ru: "Удаление кондилом является лишь частью терапии. Так как вирус ВПЧ остается в организме, врач дополнительно назначает противовирусные и иммуномодулирующие препараты. Это необходимо для подавления активности вируса и значительного снижения риска повторного появления кондилом.",
          en: "Removing condylomas is only part of the therapy. Since the HPV virus remains in the body, the doctor also prescribes antiviral and immunomodulatory drugs. This is necessary to suppress the virus's activity and significantly reduce the risk of recurrence.",
          de: "Die Entfernung von Kondylomen ist nur ein Teil der Therapie. Da das HPV-Virus im Körper verbleibt, verschreibt der Arzt zusätzlich antivirale und immunmodulierende Medikamente. Dies ist notwendig, um die Aktivität des Virus zu unterdrücken und das Risiko eines erneuten Auftretens erheblich zu reduzieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Рекомендації після процедури",
          ru: "Рекомендации после процедуры",
          en: "Post-Procedure Recommendations",
          de: "Empfehlungen nach dem Eingriff"
        }
      },
      {
        type: "list",
        content: {
          uk: "Дотримання ретельної гігієни інтимних зон.\nУтримання від статевих контактів до повного загоєння (зазвичай 2-3 тижні).\nВідмова від відвідування басейнів, саун, лазень та відкритих водойм.\nНосіння білизни з натуральних тканин.\nОбов'язковий контрольний огляд у лікаря.",
          ru: "Соблюдение тщательной гигиены интимных зон.\nВоздержание от половых контактов до полного заживления (обычно 2-3 недели).\nОтказ от посещения бассейнов, саун, бань и открытых водоемов.\nНошение белья из натуральных тканей.\nОбязательный контрольный осмотр у врача.",
          en: "Maintain thorough hygiene of intimate areas.\nAbstain from sexual contact until fully healed (usually 2-3 weeks).\nAvoid visiting swimming pools, saunas, baths, and open water.\nWear underwear made from natural fabrics.\nMandatory follow-up examination with the doctor.",
          de: "Sorgfältige Hygiene im Intimbereich.\nVerzicht auf Geschlechtsverkehr bis zur vollständigen Heilung (normalerweise 2-3 Wochen).\nVermeiden Sie den Besuch von Schwimmbädern, Saunen, Bädern und offenen Gewässern.\nTragen Sie Unterwäsche aus natürlichen Stoffen.\nObligatorische Nachuntersuchung beim Arzt."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не відкладайте візит до лікаря. Своєчасне звернення дозволить швидко, ефективно та з мінімальним дискомфортом вирішити цю делікатну проблему та захистити здоров'я — ваше та вашого партнера.",
          ru: "Не откладывайте визит к врачу. Своевременное обращение позволит быстро, эффективно и с минимальным дискомфортом решить эту деликатную проблему и защитить здоровье — ваше и вашего партнера.",
          en: "Do not delay your visit to the doctor. Timely consultation will allow you to solve this delicate problem quickly, effectively, and with minimal discomfort, protecting your health and that of your partner.",
          de: "Zögern Sie Ihren Arztbesuch nicht hinaus. Eine rechtzeitige Konsultation ermöglicht es Ihnen, dieses heikle Problem schnell, effektiv und mit minimalem Unbehagen zu lösen und Ihre Gesundheit und die Ihres Partners zu schützen."
        }
      }
    ],
    faqs: ["faq_condyloma_1", "faq_condyloma_2"],
    doctors: ["doctor1", "doctor2", "doctor4"] // Возможно, потребуются гинекологи/урологи
  },

  {
    id: "subservice6", // НОВАЯ ПОДУСЛУГА
    serviceId: "service2", // Привязка к новой основной услуге "Косметология"
    title: {
      uk: "Чистка обличчя (ультразвукова / механічна)",
      ru: "Чистка лица (ультразвуковая / механическая)",
      en: "Facial Cleansing (Ultrasonic / Mechanical)",
      de: "Gesichtsreinigung (Ultraschall / Mechanisch)"
    },
    slug: "chystka-oblychchya",
    mainImage: "https://ihc-russia.ru/upload/iblock/694/vn5z3rqbrefo9ztvfjhwzicptd5e3mro.jpeg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Глибоке очищення для здоров'я та сяйва вашої шкіри",
          ru: "Глубокое очищение для здоровья и сияния вашей кожи",
          en: "Deep Cleansing for the Health and Radiance of Your Skin",
          de: "Tiefenreinigung für die Gesundheit und Ausstrahlung Ihrer Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Професійна чистка обличчя — це базова процедура в косметології, спрямована на глибоке очищення пор від забруднень, надлишків шкірного сала, комедонів (чорних цяток) та ороговілих клітин. Регулярна чистка допомагає підтримувати шкіру здоровою, запобігає появі запалень та покращує проникнення активних компонентів доглядової косметики. Ми пропонуємо два найпопулярніші види чистки: ультразвукову та механічну, а також їх комбінацію.",
          ru: "Профессиональная чистка лица — это базовая процедура в косметологии, направленная на глубокое очищение пор от загрязнений, излишков кожного сала, комедонов (черных точек) и ороговевших клеток. Регулярная чистка помогает поддерживать кожу здоровой, предотвращает появление воспалений и улучшает проникновение активных компонентов уходовой косметики. Мы предлагаем два самых популярных вида чистки: ультразвуковую и механическую, а также их комбинацию.",
          en: "Professional facial cleansing is a fundamental cosmetology procedure aimed at deeply cleansing pores of impurities, excess sebum, comedones (blackheads), and dead skin cells. Regular cleansing helps maintain healthy skin, prevents inflammation, and improves the penetration of active ingredients from skincare products. We offer the two most popular types of cleansing: ultrasonic and mechanical, as well as their combination.",
          de: "Die professionelle Gesichtsreinigung ist eine grundlegende kosmetische Behandlung, die darauf abzielt, die Poren tief von Unreinheiten, überschüssigem Talg, Komedonen (Mitessern) und abgestorbenen Hautzellen zu reinigen. Regelmäßige Reinigung hilft, die Haut gesund zu halten, beugt Entzündungen vor und verbessert das Eindringen von Wirkstoffen aus Hautpflegeprodukten. Wir bieten die beiden beliebtesten Reinigungsarten an: Ultraschall- und mechanische Reinigung sowie deren Kombination."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ультразвукова чистка: делікатне очищення",
          ru: "Ультразвуковая чистка: деликатное очищение",
          en: "Ultrasonic Cleansing: Gentle Purification",
          de: "Ultraschallreinigung: Sanfte Reinigung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ультразвукова чистка проводиться за допомогою спеціального апарата-скрабера, який генерує ультразвукові хвилі. Ці хвилі викликають вібрацію, яка делікатно «вибиває» забруднення з пор, відлущує омертвілі клітини та одночасно проводить мікромасаж шкіри. Це абсолютно безболісний та атравматичний метод.",
          ru: "Ультразвуковая чистка проводится с помощью специального аппарата-скрабера, который генерирует ультразвуковые волны. Эти волны вызывают вибрацию, которая деликатно «выбивает» загрязнения из пор, отшелушивает омертвевшие клетки и одновременно проводит микромассаж кожи. Это абсолютно безболезненный и атравматичный метод.",
          en: "Ultrasonic cleansing is performed using a special scrubber device that generates ultrasonic waves. These waves cause vibrations that gently \"knock out\" impurities from the pores, exfoliate dead cells, and simultaneously provide a micro-massage of the skin. It is a completely painless and non-traumatic method.",
          de: "Die Ultraschallreinigung wird mit einem speziellen Scrubber-Gerät durchgeführt, das Ultraschallwellen erzeugt. Diese Wellen verursachen Vibrationen, die Unreinheiten sanft aus den Poren „herausschlagen“, abgestorbene Zellen peelen und gleichzeitig eine Mikromassage der Haut bewirken. Es ist eine völlig schmerzfreie und nicht-traumatische Methode."
        }
      },
      {
        type: "image",
        content: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBllxkU38bvnJVRf5QdXDhkqQ7yo8eRv6F8g&s" },
        sideText: {
          uk: "Ідеально підходить для нормальної, чутливої та схильної до сухості шкіри як регулярна доглядова процедура для підтримки чистоти та свіжості.",
          ru: "Идеально подходит для нормальной, чувствительной и склонной к сухости кожи в качестве регулярной уходовой процедуры для поддержания чистоты и свежести.",
          en: "Ideal for normal, sensitive, and dry-prone skin as a regular maintenance procedure to keep the skin clean and fresh.",
          de: "Ideal für normale, empfindliche und zu Trockenheit neigende Haut als regelmäßige Pflegebehandlung, um die Haut sauber und frisch zu halten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Механічна (мануальна) чистка: глибоке вирішення проблем",
          ru: "Механическая (мануальная) чистка: глубокое решение проблем",
          en: "Mechanical (Manual) Cleansing: A Deep Solution for Problems",
          de: "Mechanische (manuelle) Reinigung: Eine tiefgreifende Problemlösung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Механічна чистка — це класичний метод, який передбачає ручне видалення комедонів, міліумів (жировиків) та гнійничків за допомогою спеціальних інструментів (ложечка Уно, голка Відаля) та стерильних серветок. Процедура проводиться після розпарювання або нанесення спеціальних засобів, що розкривають пори. Це найефективніший метод для жирної, проблемної та схильної до акне шкіри.",
          ru: "Механическая чистка — это классический метод, который подразумевает ручное удаление комедонов, милиумов (жировиков) и гнойничков с помощью специальных инструментов (ложечка Уно, игла Видаля) и стерильных салфеток. Процедура проводится после распаривания или нанесения специальных средств, раскрывающих поры. Это самый эффективный метод для жирной, проблемной и склонной к акне кожи.",
          en: "Mechanical cleansing is a classic method that involves the manual removal of comedones, milia (whiteheads), and pustules using special tools (Uno spoon, Vidal needle) and sterile wipes. The procedure is performed after steaming or applying special pore-opening products. It is the most effective method for oily, problematic, and acne-prone skin.",
          de: "Die mechanische Reinigung ist eine klassische Methode, bei der Komedonen, Milien (Grießkörner) und Pusteln manuell mit speziellen Werkzeugen (Uno-Löffel, Vidal-Nadel) und sterilen Tüchern entfernt werden. Die Behandlung wird nach dem Bedampfen oder dem Auftragen spezieller porenöffnender Produkte durchgeführt. Es ist die effektivste Methode für fettige, problematische und zu Akne neigende Haut."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Часто косметолог застосовує **комбіновану чистку**, поєднуючи ультразвуковий пілінг на делікатних ділянках (щоки, лоб) з механічною обробкою проблемних зон (Т-зона).",
          ru: "Часто косметолог применяет **комбинированную чистку**, сочетая ультразвуковой пилинг на деликатных участках (щеки, лоб) с механической обработкой проблемных зон (Т-зона).",
          en: "Often, a cosmetologist will use **combined cleansing**, pairing ultrasonic peeling on delicate areas (cheeks, forehead) with mechanical treatment of problem areas (T-zone).",
          de: "Oft wendet eine Kosmetikerin eine **kombinierte Reinigung** an, bei der ein Ultraschallpeeling an empfindlichen Stellen (Wangen, Stirn) mit einer mechanischen Behandlung von Problemzonen (T-Zone) kombiniert wird."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für die Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Розширені пори, чорні цятки (комедони).\nЖирний блиск, підвищена сальність шкіри.\nНерівний тон та рельєф шкіри.\nАкне та постакне (поза стадією загострення).\nЗнижений тонус, тьмяний колір обличчя.",
          ru: "Расширенные поры, черные точки (комедоны).\nЖирный блеск, повышенная сальность кожи.\nНеровный тон и рельеф кожи.\nАкне и постакне (вне стадии обострения).\nСниженный тонус, тусклый цвет лица.",
          en: "Enlarged pores, blackheads (comedones).\nOily shine, increased skin oiliness.\nUneven skin tone and texture.\nAcne and post-acne (outside the exacerbation stage).\nReduced tone, dull complexion.",
          de: "Erweiterte Poren, Mitesser (Komedonen).\nFettiger Glanz, erhöhte Hautfettigkeit.\nUnebenmäßiger Hautton und unebenes Hautrelief.\nAkne und Post-Akne (außerhalb des akuten Stadiums).\nReduzierter Tonus, fahler Teint."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Етапи проведення чистки обличчя",
          ru: "Этапы проведения чистки лица",
          en: "Stages of the Facial Cleansing Procedure",
          de: "Phasen der Gesichtsreinigung"
        }
      },
      {
        type: "list",
        content: {
          uk: "1. Демакіяж та очищення шкіри.\n2. Тонізація.\n3. Глибоке очищення (пілінг-гоммаж або ензимний пілінг).\n4. Холодне гідрування (нанесення гелю, що розкриває пори).\n5. Проведення чистки (ультразвукової, механічної або комбінованої).\n6. Нанесення антисептичної маски для заспокоєння шкіри та звуження пор.\n7. Завершальний етап: нанесення крему за типом шкіри.",
          ru: "1. Демакияж и очищение кожи.\n2. Тонизация.\n3. Глубокое очищение (пилинг-гоммаж или энзимный пилинг).\n4. Холодное гидрирование (нанесение геля, раскрывающего поры).\n5. Проведение чистки (ультразвуковой, механической или комбинированной).\n6. Нанесение антисептической маски для успокоения кожи и сужения пор.\n7. Завершающий этап: нанесение крема по типу кожи.",
          en: "1. Makeup removal and skin cleansing.\n2. Toning.\n3. Deep cleansing (gommage peel or enzyme peel).\n4. Cold hydrogenation (applying a pore-opening gel).\n5. Performing the cleansing (ultrasonic, mechanical, or combined).\n6. Applying an antiseptic mask to soothe the skin and tighten pores.\n7. Final stage: applying a cream according to skin type.",
          de: "1. Make-up-Entfernung und Hautreinigung.\n2. Tonisierung.\n3. Tiefenreinigung (Gommage-Peeling oder Enzympeeling).\n4. Kalte Hydrierung (Auftragen eines porenöffnenden Gels).\n5. Durchführung der Reinigung (Ultraschall, mechanisch oder kombiniert).\n6. Auftragen einer antiseptischen Maske zur Beruhigung der Haut und zum Verengen der Poren.\n7. Abschlusspflege: Auftragen einer Creme je nach Hauttyp."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Рекомендації після процедури",
          ru: "Рекомендации после процедуры",
          en: "Post-Procedure Recommendations",
          de: "Empfehlungen nach der Behandlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після механічної чистки може спостерігатися легке почервоніння, яке проходить протягом кількох годин (рідше — до 1-2 днів). Протягом 2-3 днів не рекомендується відвідувати сауну, басейн, солярій та наносити декоративну косметику. Обов'язково використовуйте сонцезахисний крем перед виходом на вулицю.",
          ru: "После механической чистки может наблюдаться легкое покраснение, которое проходит в течение нескольких часов (реже — до 1-2 дней). В течение 2-3 дней не рекомендуется посещать сауну, бассейн, солярий и наносить декоративную косметику. Обязательно используйте солнцезащитный крем перед выходом на улицу.",
          en: "After mechanical cleansing, slight redness may be observed, which subsides within a few hours (rarely up to 1-2 days). For 2-3 days, it is not recommended to visit saunas, swimming pools, tanning beds, or apply decorative cosmetics. Be sure to use sunscreen before going outside.",
          de: "Nach einer mechanischen Reinigung kann eine leichte Rötung auftreten, die innerhalb weniger Stunden (selten bis zu 1-2 Tage) abklingt. Für 2-3 Tage wird empfohlen, Sauna, Schwimmbad, Solarium und dekorative Kosmetik zu meiden. Verwenden Sie unbedingt einen Sonnenschutz, bevor Sie nach draußen gehen."
        }
      }
    ],
    faqs: ["faq1", "faq_cleansing_2"],
    doctors: ["doctor1", "doctor2"]
  },

  {
    id: "subservice7", // НОВАЯ ПОДУСЛУГА
    serviceId: "service2", // Привязка к услуге "Косметология"
    title: {
      uk: "Хімічний пілінг",
      ru: "Химический пилинг",
      en: "Chemical Peel",
      de: "Chemisches Peeling"
    },
    slug: "khimichnyy-pilinh",
    mainImage: "https://s5.stc.all.kpcdn.net/woman/wp-content/uploads/2025/02/pilingi-dlya-licza-960.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Оновлення та омолодження шкіри за допомогою хімічних пілінгів",
          ru: "Обновление и омоложение кожи с помощью химических пилингов",
          en: "Skin Renewal and Rejuvenation with Chemical Peels",
          de: "Hauterneuerung und -verjüngung mit chemischen Peelings"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Хімічний пілінг — це контрольоване пошкодження шкіри за допомогою спеціальних кислотних складів для стимуляції її регенерації та оновлення. Процедура ефективно відлущує ороговілий шар епідермісу, запускає процеси вироблення колагену та еластину, що призводить до покращення текстури, вирівнювання тону та омолодження шкіри. Це один з найефективніших методів для вирішення широкого спектру естетичних проблем.",
          ru: "Химический пилинг — это контролируемое повреждение кожи с помощью специальных кислотных составов для стимуляции её регенерации и обновления. Процедура эффективно отшелушивает ороговевший слой эпидермиса, запускает процессы выработки коллагена и эластина, что приводит к улучшению текстуры, выравниванию тона и омоложению кожи. Это один из самых эффективных методов для решения широкого спектра эстетических проблем.",
          en: "A chemical peel is a controlled skin injury using special acid compositions to stimulate its regeneration and renewal. The procedure effectively exfoliates the dead skin layer, triggers the production of collagen and elastin, leading to improved texture, even tone, and skin rejuvenation. It is one of the most effective methods for solving a wide range of aesthetic problems.",
          de: "Ein chemisches Peeling ist eine kontrollierte Hautverletzung mit speziellen Säureformulierungen, um ihre Regeneration und Erneuerung zu stimulieren. Die Behandlung peelt effektiv die abgestorbene Hautschicht, regt die Produktion von Kollagen und Elastin an, was zu einer verbesserten Textur, einem ebenmäßigen Hautton und einer Hautverjüngung führt. Es ist eine der wirksamsten Methoden zur Lösung einer Vielzahl ästhetischer Probleme."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Види хімічних пілінгів",
          ru: "Виды химических пилингов",
          en: "Types of Chemical Peels",
          de: "Arten von chemischen Peelings"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Залежно від глибини впливу, пілінги поділяються на:",
          ru: "В зависимости от глубины воздействия, пилинги делятся на:",
          en: "Depending on the depth of penetration, peels are divided into:",
          de: "Je nach Eindringtiefe werden Peelings unterteilt in:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Поверхневі (AHA, BHA-кислоти): Працюють у межах рогового шару. Покращують колір обличчя, зволожують, звужують пори. Не потребують реабілітації.\nСерединні (ТСА, пілінг Джесснера): Діють на всю глибину епідермісу. Ефективні проти пігментації, постакне, дрібних зморшок. Потребують періоду відновлення 5-7 днів.\nГлибокі (фенолові): Проводяться в умовах стаціонару. Спрямовані на кардинальне омолодження та корекцію рубців.",
          ru: "Поверхностные (AHA, BHA-кислоты): Работают в пределах рогового слоя. Улучшают цвет лица, увлажняют, сужают поры. Не требуют реабилитации.\nСрединные (ТСА, пилинг Джесснера): Действуют на всю глубину эпидермиса. Эффективны против пигментации, постакне, мелких морщин. Требуют периода восстановления 5-7 дней.\nГлубокие (феноловые): Проводятся в условиях стационара. Направлены на кардинальное омоложение и коррекцию рубцов.",
          en: "Superficial (AHA, BHA acids): Work within the stratum corneum. Improve complexion, moisturize, and tighten pores. No downtime required.\nMedium (TCA, Jessner's peel): Affect the entire depth of the epidermis. Effective against pigmentation, post-acne, and fine wrinkles. Require a recovery period of 5-7 days.\nDeep (phenol peels): Performed in a hospital setting. Aimed at radical rejuvenation and scar correction.",
          de: "Oberflächliche (AHA-, BHA-Säuren): Wirken innerhalb der Hornschicht. Verbessern den Teint, spenden Feuchtigkeit und verengen die Poren. Keine Ausfallzeit erforderlich.\nMittlere (TCA-, Jessner-Peeling): Wirken auf die gesamte Tiefe der Epidermis. Wirksam gegen Pigmentierung, Post-Akne und feine Falten. Erfordern eine Erholungszeit von 5-7 Tagen.\nTiefe (Phenol-Peelings): Werden im Krankenhaus durchgeführt. Zielen auf eine radikale Verjüngung und Narbenkorrektur ab."
        }
      },
      {
        type: "image",
        content: { image: "https://belecia.ru/wp-content/uploads/2023/05/piling-lica-doma_610d448cbb285.jpg" },
        sideText: {
          uk: "Наш косметолог індивідуально підбирає тип пілінгу та концентрацію кислот, виходячи зі стану вашої шкіри та бажаного результату.",
          ru: "Наш косметолог индивидуально подбирает тип пилинга и концентрацию кислот, исходя из состояния вашей кожи и желаемого результата.",
          en: "Our cosmetologist individually selects the type of peel and acid concentration based on your skin condition and desired outcome.",
          de: "Unsere Kosmetikerin wählt den Peeling-Typ und die Säurekonzentration individuell nach Ihrem Hautzustand und dem gewünschten Ergebnis aus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до проведення хімічного пілінгу",
          ru: "Показания к проведению химического пилинга",
          en: "Indications for a Chemical Peel",
          de: "Indikationen für ein chemisches Peeling"
        }
      },
      {
        type: "list",
        content: {
          uk: "Проблемна шкіра (акне, комедони, постакне).\nГіперпігментація, веснянки, застійні плями.\nВікові зміни (дрібні зморшки, втрата пружності).\nТьмяний, нерівний колір обличчя.\nРозширені пори та надмірна жирність шкіри.\nГіперкератоз (потовщення рогового шару).",
          ru: "Проблемная кожа (акне, комедоны, постакне).\nГиперпигментация, веснушки, застойные пятна.\nВозрастные изменения (мелкие морщины, потеря упругости).\nТусклый, неровный цвет лица.\nРасширенные поры и избыточная жирность кожи.\nГиперкератоз (утолщение рогового слоя).",
          en: "Problematic skin (acne, comedones, post-acne).\nHyperpigmentation, freckles, stagnant spots.\nAge-related changes (fine wrinkles, loss of elasticity).\nDull, uneven complexion.\nEnlarged pores and excessive oiliness.\nHyperkeratosis (thickening of the stratum corneum).",
          de: "Problemhaut (Akne, Komedonen, Post-Akne).\nHyperpigmentierung, Sommersprossen, Stauungsflecken.\nAltersbedingte Veränderungen (feine Falten, Elastizitätsverlust).\nFahler, ungleichmäßiger Teint.\nErweiterte Poren und übermäßige Fettigkeit.\nHyperkeratose (Verdickung der Hornschicht)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie läuft die Behandlung ab?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура починається з ретельного очищення та знежирення шкіри. Потім косметолог наносить кислотний склад на 1-4 шари, контролюючи реакцію шкіри. Ви можете відчувати легке печіння. Після визначеного часу експозиції пілінг нейтралізується, наноситься заспокійлива маска та сонцезахисний крем.",
          ru: "Процедура начинается с тщательного очищения и обезжиривания кожи. Затем косметолог наносит кислотный состав в 1-4 слоя, контролируя реакцию кожи. Вы можете ощущать легкое жжение. После определенного времени экспозиции пилинг нейтрализуется, наносится успокаивающая маска и солнцезащитный крем.",
          en: "The procedure begins with a thorough cleansing and degreasing of the skin. The cosmetologist then applies the acid composition in 1-4 layers, monitoring the skin's reaction. You may feel a slight burning sensation. After a specific exposure time, the peel is neutralized, and a soothing mask and sunscreen are applied.",
          de: "Die Behandlung beginnt mit einer gründlichen Reinigung und Entfettung der Haut. Die Kosmetikerin trägt dann die Säuremischung in 1-4 Schichten auf und überwacht die Hautreaktion. Sie können ein leichtes Brennen spüren. Nach einer bestimmten Einwirkzeit wird das Peeling neutralisiert und eine beruhigende Maske sowie Sonnenschutz aufgetragen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Догляд після пілінгу: запорука успіху",
          ru: "Уход после пилинга: залог успеха",
          en: "Post-Peel Care: The Key to Success",
          de: "Pflege nach dem Peeling: Der Schlüssel zum Erfolg"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Правильний догляд після процедури є надзвичайно важливим. Протягом реабілітаційного періоду (від 2 до 10 днів) шкіра буде лущитися. У цей час необхідно:",
          ru: "Правильный уход после процедуры чрезвычайно важен. В течение реабилитационного периода (от 2 до 10 дней) кожа будет шелушиться. В это время необходимо:",
          en: "Proper post-procedure care is extremely important. During the recovery period (from 2 to 10 days), the skin will peel. During this time, it is necessary to:",
          de: "Die richtige Pflege nach der Behandlung ist äußerst wichtig. Während der Erholungsphase (von 2 bis 10 Tagen) wird sich die Haut schälen. Während dieser Zeit ist es notwendig:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Використовувати м'які очищувальні засоби.\nІнтенсивно зволожувати шкіру та застосовувати регенеруючі креми (наприклад, з пантенолом).\nКатегорично заборонено здирати лусочки шкіри!\nОбов'язково використовувати сонцезахисний крем з SPF 50+ навіть у хмарну погоду.\nУникати відвідування саун, басейнів та інтенсивних тренувань.",
          ru: "Использовать мягкие очищающие средства.\nИнтенсивно увлажнять кожу и применять регенерирующие кремы (например, с пантенолом).\nКатегорически запрещено сдирать чешуйки кожи!\nОбязательно использовать солнцезащитный крем с SPF 50+ даже в облачную погоду.\nИзбегать посещения саун, бассейнов и интенсивных тренировок.",
          en: "Use gentle cleansers.\nIntensively moisturize the skin and apply regenerating creams (e.g., with panthenol).\nIt is strictly forbidden to pick at peeling skin!\nAlways use sunscreen with SPF 50+, even on cloudy days.\nAvoid visiting saunas, swimming pools, and intense workouts.",
          de: "Verwenden Sie milde Reinigungsmittel.\nDie Haut intensiv mit Feuchtigkeit versorgen und regenerierende Cremes (z.B. mit Panthenol) anwenden.\nEs ist strengstens verboten, an der schälenden Haut zu zupfen!\nVerwenden Sie immer einen Sonnenschutz mit LSF 50+, auch an bewölkten Tagen.\nVermeiden Sie den Besuch von Saunen, Schwimmbädern und intensive Trainingseinheiten."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Хімічні пілінги зазвичай проводяться курсом з 3-6 процедур з інтервалом у 2-4 тижні для досягнення максимального та стійкого результату. Запрошуємо на консультацію для підбору ідеального пілінгу для вашої шкіри!",
          ru: "Химические пилинги обычно проводятся курсом из 3-6 процедур с интервалом в 2-4 недели для достижения максимального и стойкого результата. Приглашаем на консультацию для подбора идеального пилинга для вашей кожи!",
          en: "Chemical peels are usually performed in a course of 3-6 procedures with an interval of 2-4 weeks to achieve maximum and lasting results. We invite you for a consultation to select the perfect peel for your skin!",
          de: "Chemische Peelings werden in der Regel in einem Kurs von 3-6 Behandlungen im Abstand von 2-4 Wochen durchgeführt, um maximale und lang anhaltende Ergebnisse zu erzielen. Wir laden Sie zu einer Beratung ein, um das perfekte Peeling für Ihre Haut auszuwählen!"
        }
      }
    ],
    faqs: ["faq_peeling_1", "faq_peeling_2", "faq_peeling_3"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2"]
  },

  {
    id: "subservice8", // НОВАЯ ПОДУСЛУГА
    serviceId: "service2", // Привязка к услуге "Косметология"
    title: {
      uk: "Карбокситерапія обличчя",
      ru: "Карбокситерапия лица",
      en: "Facial Carboxytherapy",
      de: "Carboxytherapie für das Gesicht"
    },
    slug: "karboksyterapiya-oblychchya",
    mainImage: "https://ice-face.ru/wp-content/uploads/2023/11/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F-23.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Показання до процедури: кому підійде карбокситерапія?",
          ru: "Показания к процедуре: кому подойдет карбокситерапия?",
          en: "Indications: Who is Carboxytherapy for?",
          de: "Indikationen: Für wen ist die Carboxytherapie geeignet?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Тьмяний, «втомлений» колір обличчя.\nТемні кола та набряки під очима.\nВтрата тонусу та еластичності шкіри.\nДрібні зморшки та перші ознаки старіння.\nПостакне та застійні плями.\nСухість та зневоднення шкіри.",
          ru: "Тусклый, «уставший» цвет лица.\nТемные круги и отечность под глазами.\nПотеря тонуса и эластичности кожи.\nМелкие морщины и первые признаки старения.\nПостакне и застойные пятна.\nСухость и обезвоженность кожи.",
          en: "Dull, \"tired\" complexion.\nDark circles and puffiness under the eyes.\nLoss of skin tone and elasticity.\nFine lines and first signs of aging.\nPost-acne and stagnant spots.\nDryness and dehydrated skin.",
          de: "Fahler, „müder“ Teint.\nDunkle Ringe und Schwellungen unter den Augen.\nVerlust von Hautton und Elastizität.\nFeine Linien und erste Anzeichen der Hautalterung.\nPost-Akne und Stauungsflecken.\nTrockene und dehydrierte Haut."
        }
      },
      {
        type: "image",
        content: { image: "https://ihc-russia.ru/upload/iblock/ad3/d828jjiaz1r944ioznhi3fyk780q7pee.jpeg" },
        sideText: {
          uk: "Процедура є абсолютно комфортною та не викликає больових відчуттів, лише легке шипіння та тепло.",
          ru: "Процедура абсолютно комфортна и не вызывает болевых ощущений, только легкое шипение и тепло.",
          en: "The procedure is completely comfortable and does not cause pain, only a slight fizzing sensation and warmth.",
          de: "Die Behandlung ist absolut angenehm und schmerzfrei, man spürt nur ein leichtes Zischen und Wärme."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Що таке неінвазивна карбокситерапія?",
          ru: "Что такое неинвазивная карбокситерапия?",
          en: "What is Non-Invasive Carboxytherapy?",
          de: "Was ist nicht-invasive Carboxytherapie?"
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ефект від процедури: миттєве перетворення",
          ru: "Эффект от процедуры: мгновенное преображение",
          en: "Effect of the Procedure: Instant Transformation",
          de: "Wirkung der Behandlung: Sofortige Verwandlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Карбокситерапія — це інноваційна методика, заснована на впливі на шкіру вуглекислого газу (CO2). Наша клініка пропонує **неінвазивну (безінєкційну)** версію процедури. На шкіру наноситься спеціальний гель, а поверх нього — маска-активатор. В результаті їх взаємодії виділяється CO2, який проникає в епідерміс та дерму, запускаючи каскад позитивних біохімічних реакцій.",
          ru: "Карбокситерапия — это инновационная методика, основанная на воздействии на кожу углекислого газа (CO2). Наша клиника предлагает **неинвазивную (безинъекционную)** версию процедуры. На кожу наносится специальный гель, а поверх него — маска-активатор. В результате их взаимодействия выделяется CO2, который проникает в эпидермис и дерму, запуская каскад положительных биохимических реакций.",
          en: "Carboxytherapy is an innovative technique based on the effect of carbon dioxide (CO2) on the skin. Our clinic offers a **non-invasive (injection-free)** version of the procedure. A special gel is applied to the skin, followed by an activator mask. Their interaction releases CO2, which penetrates the epidermis and dermis, triggering a cascade of positive biochemical reactions.",
          de: "Carboxytherapie ist eine innovative Technik, die auf der Wirkung von Kohlendioxid (CO2) auf die Haut basiert. Unsere Klinik bietet eine **nicht-invasive (injektionsfreie)** Version der Behandlung an. Ein spezielles Gel wird auf die Haut aufgetragen, gefolgt von einer Aktivator-Maske. Ihre Wechselwirkung setzt CO2 frei, das in die Epidermis und Dermis eindringt und eine Kaskade positiver biochemischer Reaktionen auslöst."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Вже після першого сеансу шкіра виглядає значно свіжішою, зволоженою та сяючою. Для стійкого результату рекомендується курс з 4-8 процедур. Карбокситерапія чудово поєднується з іншими косметологічними процедурами, такими як чистки та пілінги, посилюючи їх ефект.",
          ru: "Уже после первого сеанса кожа выглядит значительно более свежей, увлажненной и сияющей. Для стойкого результата рекомендуется курс из 4-8 процедур. Карбокситерапия прекрасно сочетается с другими косметологическими процедурами, такими как чистки и пилинги, усиливая их эффект.",
          en: "After the very first session, the skin looks significantly fresher, more hydrated, and radiant. For a lasting result, a course of 4-8 procedures is recommended. Carboxytherapy combines perfectly with other cosmetology procedures, such as cleanings and peels, enhancing their effect.",
          de: "Bereits nach der ersten Sitzung sieht die Haut deutlich frischer, hydratisierter und strahlender aus. Für ein nachhaltiges Ergebnis wird ein Kurs von 4-8 Behandlungen empfohlen. Die Carboxytherapie lässt sich perfekt mit anderen kosmetischen Behandlungen wie Reinigungen und Peelings kombinieren und verstärkt deren Wirkung."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Принцип дії: «стрес» на користь шкірі",
          ru: "Принцип действия: «стресс» на пользу коже",
          en: "Principle of Action: Beneficial \"Stress\" for the Skin",
          de: "Wirkprinzip: Vorteilbringender „Stress“ für die Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Проникнення CO2 в шкіру сприймається клітинами як кисневе голодування. У відповідь на цей «стрес» організм миттєво реагує: посилюється кровообіг та лімфоток, а з гемоглобіну вивільняється велика кількість кисню (ефект Бора). В результаті клітини шкіри отримують потужний заряд енергії, покращується клітинний метаболізм, стимулюється виробництво нового колагену. Процедура є абсолютно безпечною і фізіологічною.",
          ru: "Проникновение CO2 в кожу воспринимается клетками как кислородное голодание. В ответ на этот «стресс» организм мгновенно реагирует: усиливается кровообращение и лимфоток, а из гемоглобина высвобождается большое количество кислорода (эффект Бора). В результате клетки кожи получают мощный заряд энергии, улучшается клеточный метаболизм, стимулируется производство нового коллагена. Процедура абсолютно безопасна и физиологична.",
          en: "The penetration of CO2 into the skin is perceived by cells as oxygen deprivation. In response to this \"stress,\" the body reacts instantly: blood circulation and lymph flow are enhanced, and a large amount of oxygen is released from hemoglobin (the Bohr effect). As a result, skin cells receive a powerful energy boost, cellular metabolism improves, and the production of new collagen is stimulated. The procedure is completely safe and physiological.",
          de: "Das Eindringen von CO2 in die Haut wird von den Zellen als Sauerstoffmangel wahrgenommen. Als Reaktion auf diesen „Stress“ reagiert der Körper sofort: die Durchblutung und der Lymphfluss werden verbessert, und eine große Menge Sauerstoff wird aus dem Hämoglobin freigesetzt (Bohr-Effekt). Dadurch erhalten die Hautzellen einen kräftigen Energieschub, der Zellstoffwechsel verbessert sich und die Produktion von neuem Kollagen wird angeregt. Die Behandlung ist absolut sicher und physiologisch."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Етапи процедури карбокситерапії",
          ru: "Этапы процедуры карбокситерапии",
          en: "Stages of the Carboxytherapy Procedure",
          de: "Phasen der Carboxytherapie-Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "1. Очищення та тонізація шкіри.\n2. Нанесення активного CO2-гелю товстим шаром.\n3. Накладання маски-активатора.\n4. Експозиція протягом 20-25 хвилин. \n5. Зняття маски та залишків гелю.\n6. Нанесення фінішного крему за типом шкіри.",
          ru: "1. Очищение и тонизация кожи.\n2. Нанесение активного CO2-геля толстым слоем.\n3. Накладывание маски-активатора.\n4. Экспозиция в течение 20-25 минут. \n5. Снятие маски и остатков геля.\n6. Нанесение финишного крема по типу кожи.",
          en: "1. Cleansing and toning the skin.\n2. Applying a thick layer of active CO2 gel.\n3. Placing the activator mask.\n4. Exposure for 20-25 minutes.\n5. Removing the mask and gel residues.\n6. Applying a finishing cream according to skin type.",
          de: "1. Reinigung und Tonisierung der Haut.\n2. Auftragen einer dicken Schicht des aktiven CO2-Gels.\n3. Auflegen der Aktivator-Maske.\n4. Einwirkzeit von 20-25 Minuten.\n5. Entfernen der Maske und der Gelreste.\n6. Auftragen einer Abschlusspflege je nach Hauttyp."
        }
      }
    ],
    faqs: ["faq_carboxy_1", "faq_carboxy_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2"]
  },


  {
    id: "subservice9", // НОВАЯ ПОДУСЛУГА
    serviceId: "service2", // Привязка к услуге "Косметология"
    title: {
      uk: "Доглядові процедури для тіла",
      ru: "Уходовые процедуры для тела",
      en: "Body Care Treatments",
      de: "Körperpflegebehandlungen"
    },
    slug: "dohlyadovi-protsedury-dlya-tila",
    mainImage: "https://skinlift.ru/wp-content/uploads/uhodovye-proczedury.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Комплексний догляд для краси та здоров'я вашого тіла",
          ru: "Комплексный уход для красоты и здоровья вашего тела",
          en: "Comprehensive Care for the Beauty and Health of Your Body",
          de: "Umfassende Pflege für die Schönheit und Gesundheit Ihres Körpers"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Шкіра тіла, так само як і шкіра обличчя, потребує регулярного та якісного догляду. Наші процедури для тіла спрямовані на глибоке очищення, зволоження, живлення, покращення тонусу шкіри та корекцію естетичних недоліків. Ми пропонуємо ритуали краси, які не тільки покращують зовнішній вигляд, але й дарують відчуття розслаблення та гармонії.",
          ru: "Кожа тела, так же как и кожа лица, нуждается в регулярном и качественном уходе. Наши процедуры для тела направлены на глубокое очищение, увлажнение, питание, улучшение тонуса кожи и коррекцию эстетических недостатков. Мы предлагаем ритуалы красоты, которые не только улучшают внешний вид, но и дарят ощущение расслабления и гармонии.",
          en: "The skin on your body, just like the skin on your face, needs regular and high-quality care. Our body treatments are aimed at deep cleansing, moisturizing, nourishing, improving skin tone, and correcting aesthetic imperfections. We offer beauty rituals that not only improve your appearance but also give you a feeling of relaxation and harmony.",
          de: "Die Haut Ihres Körpers benötigt ebenso wie Ihre Gesichtshaut regelmäßige und hochwertige Pflege. Unsere Körperbehandlungen zielen auf Tiefenreinigung, Feuchtigkeitspflege, Nährstoffversorgung, Verbesserung des Hauttons und Korrektur ästhetischer Mängel ab. Wir bieten Schönheitsrituale an, die nicht nur Ihr Aussehen verbessern, sondern auch ein Gefühl der Entspannung und Harmonie vermitteln."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Наші основні напрямки",
          ru: "Наши основные направления",
          en: "Our Main Areas",
          de: "Unsere Hauptbereiche"
        }
      },
      {
        type: "list",
        content: {
          uk: "Пілінги для тіла\nАнтицелюлітні та лімфодренажні обгортання\nЗволожуючі та живильні процедури\nПрограми для підвищення пружності шкіри",
          ru: "Пилинги для тела\nАнтицеллюлитные и лимфодренажные обертывания\nУвлажняющие и питательные процедуры\nПрограммы для повышения упругости кожи",
          en: "Body Peels\nAnti-Cellulite and Lymphatic Drainage Wraps\nMoisturizing and Nourishing Treatments\nSkin Firming Programs",
          de: "Körperpeelings\nAnti-Cellulite- und Lymphdrainage-Wickel\nFeuchtigkeitsspendende und nährende Behandlungen\nHautstraffungsprogramme"
        }
      },
      {
        type: "image",
        content: { image: "https://ihc-russia.ru/upload/iblock/72f/n44lfnnyy1wm2f0prd1kuvwzy34f1mp0.jpeg" },
        sideText: {
          uk: "Ми використовуємо професійну косметику на основі натуральних інгредієнтів: морських водоростей, глини, шоколаду, ефірних олій та рослинних екстрактів.",
          ru: "Мы используем профессиональную косметику на основе натуральных ингредиентов: морских водорослей, глины, шоколада, эфирных масел и растительных экстрактов.",
          en: "We use professional cosmetics based on natural ingredients: seaweed, clay, chocolate, essential oils, and plant extracts.",
          de: "Wir verwenden professionelle Kosmetik auf Basis natürlicher Inhaltsstoffe: Meeresalgen, Tonerde, Schokolade, ätherische Öle und Pflanzenextrakte."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Пілінги (ексфоліація) для тіла",
          ru: "Пилинги (эксфолиация) для тела",
          en: "Body Peels (Exfoliation)",
          de: "Körperpeelings (Exfoliation)"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Це процедура глибокого очищення шкіри, яка видаляє ороговілі клітини, стимулює оновлення та готує шкіру до подальших процедур (наприклад, обгортань). Після пілінгу шкіра стає неймовірно гладкою, м'якою та оксамитовою. Ми пропонуємо сольові, цукрові та ензимні пілінги.",
          ru: "Это процедура глубокого очищения кожи, которая удаляет ороговевшие клетки, стимулирует обновление и подготавливает кожу к дальнейшим процедурам (например, обертываниям). После пилинга кожа становится невероятно гладкой, мягкой и бархатистой. Мы предлагаем солевые, сахарные и энзимные пилинги.",
          en: "This is a deep cleansing procedure that removes dead skin cells, stimulates renewal, and prepares the skin for further treatments (such as wraps). After the peel, the skin becomes incredibly smooth, soft, and velvety. We offer salt, sugar, and enzyme peels.",
          de: "Dies ist eine Tiefenreinigungsbehandlung, die abgestorbene Hautzellen entfernt, die Erneuerung anregt und die Haut auf weitere Behandlungen (wie Wickel) vorbereitet. Nach dem Peeling wird die Haut unglaublich glatt, weich und samtig. Wir bieten Salz-, Zucker- und Enzympeelings an."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Обгортання для тіла",
          ru: "Обертывания для тела",
          en: "Body Wraps",
          de: "Körperwickel"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Це одна з найефективніших процедур для корекції фігури та покращення стану шкіри. На тіло наноситься активна маска, після чого вас загортають у спеціальну плівку та термоковдру. Це створює ефект сауни, посилюючи проникнення корисних речовин. Залежно від складу, обгортання допомагають:",
          ru: "Это одна из самых эффективных процедур для коррекции фигуры и улучшения состояния кожи. На тело наносится активная маска, после чего вас укутывают в специальную пленку и термоодеяло. Это создает эффект сауны, усиливая проникновение полезных веществ. В зависимости от состава, обертывания помогают:",
          en: "This is one of the most effective procedures for body contouring and improving skin condition. An active mask is applied to the body, after which you are wrapped in a special film and a thermal blanket. This creates a sauna effect, enhancing the penetration of beneficial substances. Depending on the composition, wraps help to:",
          de: "Dies ist eine der effektivsten Behandlungen zur Körperformung und Verbesserung des Hautzustands. Eine aktive Maske wird auf den Körper aufgetragen, danach werden Sie in eine spezielle Folie und eine Heizdecke gewickelt. Dies erzeugt einen Saunaeffekt, der das Eindringen von nützlichen Substanzen verbessert. Je nach Zusammensetzung helfen Wickel dabei:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Зменшити прояви целюліту.\nВивести зайву рідину та токсини (лімфодренаж).\nПідвищити пружність та еластичність шкіри.\nНаситити шкіру вітамінами та мікроелементами.\nГлибоко зволожити та відновити шкіру.",
          ru: "Уменьшить проявления целлюлита.\nВывести лишнюю жидкость и токсины (лимфодренаж).\nПовысить упругость и эластичность кожи.\nНасытить кожу витаминами и микроэлементами.\nГлубоко увлажнить и восстановить кожу.",
          en: "Reduce the appearance of cellulite.\nRemove excess fluid and toxins (lymphatic drainage).\nIncrease skin firmness and elasticity.\nSaturate the skin with vitamins and microelements.\nDeeply moisturize and restore the skin.",
          de: "Das Erscheinungsbild von Cellulite reduzieren.\nÜberschüssige Flüssigkeit und Giftstoffe entfernen (Lymphdrainage).\nDie Festigkeit und Elastizität der Haut erhöhen.\nDie Haut mit Vitaminen und Spurenelementen sättigen.\nDie Haut tief mit Feuchtigkeit versorgen und wiederherstellen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедур",
          ru: "Показания к процедурам",
          en: "Indications for Treatments",
          de: "Indikationen für Behandlungen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Наші доглядові процедури підійдуть вам, якщо ви хочете вирішити такі проблеми, як целюліт, сухість або в'ялість шкіри, набряклість, або просто бажаєте розслабитися та приділити час собі. Процедури особливо ефективні курсом з 5-10 сеансів.",
          ru: "Наши уходовые процедуры подойдут вам, если вы хотите решить такие проблемы, как целлюлит, сухость или дряблость кожи, отечность, или просто желаете расслабиться и уделить время себе. Процедуры особенно эффективны курсом из 5-10 сеансов.",
          en: "Our care treatments are suitable for you if you want to solve problems such as cellulite, dry or flabby skin, puffiness, or simply want to relax and take time for yourself. The procedures are especially effective in a course of 5-10 sessions.",
          de: "Unsere Pflegebehandlungen sind für Sie geeignet, wenn Sie Probleme wie Cellulite, trockene oder schlaffe Haut, Schwellungen lösen möchten oder einfach nur entspannen und sich Zeit für sich selbst nehmen wollen. Die Behandlungen sind besonders wirksam in einem Kurs von 5-10 Sitzungen."
        }
      }
    ],
    faqs: ["faq_body_1", "faq_body_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_body_specialist_1"]
  },

  {
    id: "subservice10", // НОВАЯ ПОДУСЛУГА
    serviceId: "service2", // Привязка к услуге "Косметология"
    title: {
      uk: "Ліфтинг-термопроцедури (RF-ліфтинг)",
      ru: "Лифтинг-термопроцедуры (RF-лифтинг)",
      en: "Lifting Thermo-Procedures (RF-Lifting)",
      de: "Lifting-Thermo-Verfahren (RF-Lifting)"
    },
    slug: "lifting-termo-protsedury",
    mainImage: "https://nkcenter.cz/wp-content/uploads/2022/10/7-%D1%80%D1%84-%D0%BB%D0%B8%D1%84%D1%82%D0%B8%D0%BD%D0%B3-%D0%BB%D0%B8%D1%86%D0%BE.jpeg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Безопераційна підтяжка шкіри: RF-ліфтинг",
          ru: "Безоперационная подтяжка кожи: RF-лифтинг",
          en: "Non-Surgical Skin Tightening: RF-Lifting",
          de: "Nicht-chirurgische Hautstraffung: RF-Lifting"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "RF-ліфтинг (радіочастотний ліфтинг) — це одна з найефективніших апаратних методик для безопераційного омолодження та підтяжки шкіри обличчя і тіла. Процедура заснована на дії радіочастотної енергії, яка прогріває глибокі шари дерми, не пошкоджуючи епідерміс. Цей контрольований прогрів запускає потужні процеси регенерації та оновлення.",
          ru: "RF-лифтинг (радиочастотный лифтинг) — это одна из самых эффективных аппаратных методик для безоперационного омоложения и подтяжки кожи лица и тела. Процедура основана на действии радиочастотной энергии, которая прогревает глубокие слои дермы, не повреждая эпидермис. Этот контролируемый прогрев запускает мощные процессы регенерации и обновления.",
          en: "RF-lifting (radiofrequency lifting) is one of the most effective hardware methods for non-surgical rejuvenation and tightening of the skin on the face and body. The procedure is based on the action of radiofrequency energy, which heats the deep layers of the dermis without damaging the epidermis. This controlled heating triggers powerful regeneration and renewal processes.",
          de: "RF-Lifting (Radiofrequenz-Lifting) ist eine der effektivsten apparativen Methoden zur nicht-chirurgischen Verjüngung und Straffung der Haut im Gesicht und am Körper. Das Verfahren basiert auf der Wirkung von Radiofrequenzenergie, die die tiefen Schichten der Dermis erwärmt, ohne die Epidermis zu schädigen. Diese kontrollierte Erwärmung löst starke Regenerations- und Erneuerungsprozesse aus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як це працює? Магія колагену",
          ru: "Как это работает? Магия коллагена",
          en: "How Does It Work? The Magic of Collagen",
          de: "Wie funktioniert es? Die Magie des Kollagens"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Під впливом тепла (до 40-42°C) старі та розтягнуті волокна колагену, які формують каркас нашої шкіри, стискаються та ущільнюються. Це забезпечує миттєвий ефект ліфтингу. Але головний результат — відкладений. Прогрів стимулює клітини-фібробласти до активного виробництва нового, молодого колагену та еластину. Процес оновлення колагенового каркасу триває кілька місяців, забезпечуючи наростаючий та довготривалий ефект.",
          ru: "Под воздействием тепла (до 40-42°C) старые и растянутые волокна коллагена, которые формируют каркас нашей кожи, сжимаются и уплотняются. Это обеспечивает мгновенный эффект лифтинга. Но главный результат — отложенный. Прогрев стимулирует клетки-фибробласты к активному производству нового, молодого коллагена и эластина. Процесс обновления коллагенового каркаса длится несколько месяцев, обеспечивая нарастающий и долговременный эффект.",
          en: "Under the influence of heat (up to 40-42°C), old and stretched collagen fibers, which form the framework of our skin, contract and tighten. This provides an immediate lifting effect. But the main result is delayed. The heating stimulates fibroblast cells to actively produce new, young collagen and elastin. The process of renewing the collagen framework continues for several months, providing a progressive and long-lasting effect.",
          de: "Unter dem Einfluss von Wärme (bis zu 40-42 °C) ziehen sich alte und gedehnte Kollagenfasern, die das Gerüst unserer Haut bilden, zusammen und straffen sich. Dies sorgt für einen sofortigen Lifting-Effekt. Aber das Hauptergebnis ist verzögert. Die Erwärmung stimuliert die Fibroblastenzellen zur aktiven Produktion von neuem, jungem Kollagen und Elastin. Der Prozess der Erneuerung des Kollagengerüsts dauert mehrere Monate an und sorgt für einen fortschreitenden und lang anhaltenden Effekt."
        }
      },
      {
        type: "image",
        content: { image: "https://profbeautyclub.ru/wp-content/uploads/2024/08/img_8295-1-scaled.jpg" },
        sideText: {
          uk: "Процедура RF-ліфтингу є комфортною, неінвазивною та не потребує реабілітації. Ви можете повернутися до звичного життя одразу після сеансу.",
          ru: "Процедура RF-лифтинга комфортна, неинвазивна и не требует реабилитации. Вы можете вернуться к обычной жизни сразу после сеанса.",
          en: "The RF-lifting procedure is comfortable, non-invasive, and requires no downtime. You can return to your normal life immediately after the session.",
          de: "Die RF-Lifting-Behandlung ist angenehm, nicht-invasiv und erfordert keine Ausfallzeit. Sie können sofort nach der Sitzung zu Ihrem normalen Leben zurückkehren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні ефекти від процедури",
          ru: "Основные эффекты от процедуры",
          en: "Main Effects of the Procedure",
          de: "Haupteffekte der Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Видима підтяжка шкіри (ліфтинг) обличчя, шиї, декольте.\nЗменшення глибини зморшок та розгладження дрібних ліній.\nПідвищення пружності та еластичності шкіри.\nПокращення овалу обличчя, зменшення «другого підборіддя».\nЗменшення проявів целюліту та підвищення тонусу шкіри на тілі (живіт, стегна, руки).",
          ru: "Видимая подтяжка кожи (лифтинг) лица, шеи, декольте.\nУменьшение глубины морщин и разглаживание мелких линий.\nПовышение упругости и эластичности кожи.\nУлучшение овала лица, уменьшение «второго подбородка».\nУменьшение проявлений целлюлита и повышение тонуса кожи на теле (живот, бедра, руки).",
          en: "Visible skin tightening (lifting) of the face, neck, and décolleté.\nReduction in the depth of wrinkles and smoothing of fine lines.\nIncreased skin firmness and elasticity.\nImproved facial contour, reduction of the \"double chin\".\nReduction in the appearance of cellulite and increased skin tone on the body (abdomen, thighs, arms).",
          de: "Sichtbare Hautstraffung (Lifting) im Gesicht, am Hals und am Dekolleté.\nVerringerung der Faltentiefe und Glättung feiner Linien.\nErhöhte Festigkeit und Elastizität der Haut.\nVerbesserte Gesichtskontur, Reduzierung des „Doppelkinns“.\nVerringerung des Erscheinungsbildes von Cellulite und erhöhter Hautton am Körper (Bauch, Oberschenkel, Arme)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до RF-ліфтингу",
          ru: "Показания к RF-лифтингу",
          en: "Indications for RF-Lifting",
          de: "Indikationen für RF-Lifting"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура ідеально підходить для пацієнтів віком від 30-35 років з першими або вже вираженими ознаками старіння, такими як втрата чіткості овалу обличчя, в'ялість шкіри, зморшки, зниження тонусу. RF-ліфтинг є чудовою профілактикою вікових змін та альтернативою хірургічним методам.",
          ru: "Процедура идеально подходит для пациентов в возрасте от 30-35 лет с первыми или уже выраженными признаками старения, такими как потеря четкости овала лица, дряблость кожи, морщины, снижение тонуса. RF-лифтинг является отличной профилактикой возрастных изменений и альтернативой хирургическим методам.",
          en: "The procedure is ideal for patients aged 30-35 and older with the first or already pronounced signs of aging, such as loss of facial contour clarity, skin laxity, wrinkles, and reduced tone. RF-lifting is an excellent prevention of age-related changes and an alternative to surgical methods.",
          de: "Das Verfahren ist ideal für Patienten ab 30-35 Jahren mit den ersten oder bereits ausgeprägten Anzeichen der Hautalterung, wie z. B. Verlust der Gesichtskontur, Hautschlaffheit, Falten und reduziertem Tonus. RF-Lifting ist eine ausgezeichnete Vorbeugung gegen altersbedingte Veränderungen und eine Alternative zu chirurgischen Methoden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур для максимального результату",
          ru: "Курс процедур для максимального результата",
          en: "Course of Procedures for Maximum Results",
          de: "Behandlungskurs für maximale Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення стійкого та вираженого ефекту RF-ліфтинг проводиться курсом, що складається з 4-8 сеансів з інтервалом 7-10 днів. Результат зберігається до 1.5-2 років. Запрошуємо на консультацію, щоб дізнатися, як RF-ліфтинг може повернути молодість вашій шкірі.",
          ru: "Для достижения стойкого и выраженного эффекта RF-лифтинг проводится курсом, состоящим из 4-8 сеансов с интервалом 7-10 дней. Результат сохраняется до 1.5-2 лет. Приглашаем на консультацию, чтобы узнать, как RF-лифтинг может вернуть молодость вашей коже.",
          en: "To achieve a stable and pronounced effect, RF-lifting is performed in a course of 4-8 sessions with an interval of 7-10 days. The result lasts for up to 1.5-2 years. We invite you for a consultation to find out how RF-lifting can restore youth to your skin.",
          de: "Um eine stabile und ausgeprägte Wirkung zu erzielen, wird das RF-Lifting in einem Kurs von 4-8 Sitzungen im Abstand von 7-10 Tagen durchgeführt. Das Ergebnis hält bis zu 1,5-2 Jahre an. Wir laden Sie zu einer Beratung ein, um herauszufinden, wie RF-Lifting Ihrer Haut die Jugend zurückgeben kann."
        }
      }
    ],
    faqs: ["faq_rf_lifting_1", "faq_rf_lifting_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2", "doctor_body_specialist_1"]
  },

  {
    id: "subservice11", // НОВАЯ ПОДУСЛУГА
    serviceId: "service3", // Привязка к новой основной услуге "Массаж"
    title: {
      uk: "Класичний масаж",
      ru: "Классический массаж",
      en: "Classic Massage",
      de: "Klassische Massage"
    },
    slug: "klasychnyy-masazh",
    mainImage: "https://wellness-spa.by/assets/uploads/beauty/8a13114edb836bbded95cfa66d1e7037.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Класичний масаж: основа здоров'я та гарного самопочуття",
          ru: "Классический массаж: основа здоровья и хорошего самочувствия",
          en: "Classic Massage: The Foundation of Health and Well-being",
          de: "Klassische Massage: Die Grundlage für Gesundheit und Wohlbefinden"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Класичний (або загальний) масаж — це фундаментальна оздоровча процедура, спрямована на опрацювання всього тіла або окремих його зон. Він поєднує в собі базові масажні прийоми, які ефективно впливають на м'язи, суглоби, шкіру та нервову систему. Це універсальний метод для зняття втоми, відновлення сил та профілактики багатьох захворювань.",
          ru: "Классический (или общий) массаж — это фундаментальная оздоровительная процедура, направленная на проработку всего тела или отдельных его зон. Он сочетает в себе базовые массажные приемы, которые эффективно воздействуют на мышцы, суставы, кожу и нервную систему. Это универсальный метод для снятия усталости, восстановления сил и профилактики многих заболеваний.",
          en: "Classic (or general) massage is a fundamental wellness procedure aimed at working on the entire body or its individual zones. It combines basic massage techniques that effectively affect muscles, joints, skin, and the nervous system. It is a universal method for relieving fatigue, restoring strength, and preventing many diseases.",
          de: "Die klassische (oder allgemeine) Massage ist eine grundlegende Wellness-Behandlung, die darauf abzielt, den gesamten Körper oder einzelne Zonen zu bearbeiten. Sie kombiniert grundlegende Massagetechniken, die effektiv auf Muskeln, Gelenke, Haut und das Nervensystem wirken. Sie ist eine universelle Methode zur Linderung von Müdigkeit, zur Wiederherstellung der Kräfte und zur Vorbeugung vieler Krankheiten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні техніки класичного масажу",
          ru: "Основные техники классического массажа",
          en: "Main Techniques of Classic Massage",
          de: "Haupttechniken der klassischen Massage"
        }
      },
      {
        type: "list",
        content: {
          uk: "Погладжування: заспокоює нервову систему, готує тіло до масажу.\nРозтирання: розігріває тканини, покращує кровообіг та рухливість суглобів.\nРозминання: глибоке опрацювання м'язів, зняття спазмів та напруги.\nВібрація та поплескування: тонізують м'язи та нервові закінчення.",
          ru: "Поглаживание: успокаивает нервную систему, подготавливает тело к массажу.\nРастирание: разогревает ткани, улучшает кровообращение и подвижность суставов.\nРазминание: глубокая проработка мышц, снятие спазмов и напряжения.\nВибрация и похлопывание: тонизируют мышцы и нервные окончания.",
          en: "Stroking (Effleurage): soothes the nervous system, prepares the body for the massage.\nRubbing (Friction): warms up tissues, improves blood circulation and joint mobility.\nKneading (Petrissage): deep muscle work, relieves spasms and tension.\nVibration and Tapping (Tapotement): tones muscles and nerve endings.",
          de: "Streichung (Effleurage): beruhigt das Nervensystem, bereitet den Körper auf die Massage vor.\nReibung (Friktion): erwärmt das Gewebe, verbessert die Durchblutung und die Gelenkbeweglichkeit.\nKnetung (Petrissage): tiefe Muskelarbeit, löst Krämpfe und Verspannungen.\nVibration und Klopfen (Tapotement): tonisiert Muskeln und Nervenenden."
        }
      },
      {
        type: "image",
        content: { image: "https://www.estimed.com.ua/wp-content/uploads/2019/07/2-600x375.jpg" },
        sideText: {
          uk: "Наші масажисти індивідуально підбирають інтенсивність та комбінацію технік, враховуючи ваші потреби та побажання.",
          ru: "Наши массажисты индивидуально подбирают интенсивность и комбинацию техник, учитывая ваши потребности и пожелания.",
          en: "Our massage therapists individually select the intensity and combination of techniques based on your needs and preferences.",
          de: "Unsere Masseure wählen die Intensität und Kombination der Techniken individuell nach Ihren Bedürfnissen und Wünschen aus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Користь класичного масажу",
          ru: "Польза классического массажа",
          en: "Benefits of Classic Massage",
          de: "Vorteile der klassischen Massage"
        }
      },
      {
        type: "list",
        content: {
          uk: "Зняття м'язової напруги та болю: ефективний при болях у спині, шиї, після фізичних навантажень.\nПокращення кровообігу та лімфотоку: сприяє виведенню токсинів та зменшенню набряків.\nЗміцнення імунної системи: стимулює захисні сили організму.\nЗняття стресу та втоми: глибоко розслабляє, покращує сон та настрій.\nПідвищення еластичності м'язів та рухливості суглобів.\nПокращення стану шкіри: робить її більш пружною та еластичною.",
          ru: "Снятие мышечного напряжения и боли: эффективен при болях в спине, шее, после физических нагрузок.\nУлучшение кровообращения и лимфотока: способствует выведению токсинов и уменьшению отеков.\nУкрепление иммунной системы: стимулирует защитные силы организма.\nСнятие стресса и усталости: глубоко расслабляет, улучшает сон и настроение.\nПовышение эластичности мышц и подвижности суставов.\nУлучшение состояния кожи: делает её более упругой и эластичной.",
          en: "Relief of muscle tension and pain: effective for back pain, neck pain, and after physical exertion.\nImproved blood and lymph circulation: helps to remove toxins and reduce swelling.\nStrengthening the immune system: stimulates the body's defenses.\nStress and fatigue relief: deeply relaxes, improves sleep and mood.\nIncreased muscle elasticity and joint mobility.\nImproved skin condition: makes it firmer and more elastic.",
          de: "Linderung von Muskelverspannungen und Schmerzen: wirksam bei Rücken- und Nackenschmerzen sowie nach körperlicher Anstrengung.\nVerbesserte Blut- und Lymphzirkulation: hilft, Giftstoffe auszuscheiden und Schwellungen zu reduzieren.\nStärkung des Immunsystems: stimuliert die körpereigenen Abwehrkräfte.\nStress- und Müdigkeitsabbau: entspannt tief, verbessert den Schlaf und die Stimmung.\nErhöhte Muskelelastizität und Gelenkbeweglichkeit.\nVerbesserter Hautzustand: macht sie straffer und elastischer."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Коли рекомендований класичний масаж?",
          ru: "Когда рекомендован классический массаж?",
          en: "When is Classic Massage Recommended?",
          de: "Wann wird eine klassische Massage empfohlen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Цей вид масажу ідеально підходить для загального оздоровлення, при сидячому способі життя, хронічній втомі, безсонні, а також як частина відновлювальної терапії. Регулярні сеанси (курсом 8-12 процедур) дають стійкий та довготривалий результат. Також масаж можна робити разово для зняття гострої напруги або просто для задоволення.",
          ru: "Этот вид массажа идеально подходит для общего оздоровления, при сидячем образе жизни, хронической усталоosti, бессоннице, а также как часть восстановительной терапии. Регулярные сеансы (курсом 8-12 процедур) дают стойкий и долговременный результат. Также массаж можно делать разово для снятия острого напряжения или просто для удовольствия.",
          en: "This type of massage is ideal for general wellness, a sedentary lifestyle, chronic fatigue, insomnia, and as part of restorative therapy. Regular sessions (a course of 8-12 procedures) provide a stable and long-lasting result. A single massage can also be done to relieve acute tension or simply for pleasure.",
          de: "Diese Art der Massage ist ideal für das allgemeine Wohlbefinden, bei sitzender Lebensweise, chronischer Müdigkeit, Schlaflosigkeit und als Teil der regenerativen Therapie. Regelmäßige Sitzungen (ein Kurs von 8-12 Behandlungen) erzielen ein stabiles und langanhaltendes Ergebnis. Eine einzelne Massage kann auch zur Linderung akuter Verspannungen oder einfach zum Vergnügen durchgeführt werden."
        }
      }
    ],
    faqs: ["faq_massage_classic_1", "faq_massage_classic_2"],
    doctors: ["doctor1", "doctor_massage_therapist_2"]
  },

  {
    id: "subservice12", // НОВАЯ ПОДУСЛУГА
    serviceId: "service3", // Привязка к основной услуге "Массаж"
    title: {
      uk: "Лімфодренажний масаж",
      ru: "Лимфодренажный массаж",
      en: "Lymphatic Drainage Massage",
      de: "Lymphdrainage-Massage"
    },
    slug: "limfodrenazhnyy-masazh",
    mainImage: "https://косметология-эксперт.рф/wp-content/uploads/2025/03/Cd_5K2uBs8s.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лімфодренажний масаж: детокс та легкість для вашого тіла",
          ru: "Лимфодренажный массаж: детокс и легкость для вашего тела",
          en: "Lymphatic Drainage Massage: Detox and Lightness for Your Body",
          de: "Lymphdrainage-Massage: Detox und Leichtigkeit für Ihren Körper"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лімфодренажний масаж — це особлива техніка, спрямована на стимуляцію руху лімфи в організмі. Лімфатична система відповідає за виведення токсинів, зайвої рідини та продуктів розпаду з тканин. Уповільнення її роботи призводить до набряків, зниження імунітету, втоми та проявів целюліту. Масаж допомагає «розігнати» лімфу, активізуючи процеси очищення та відновлення організму.",
          ru: "Лимфодренажный массаж — это особая техника, направленная на стимуляцию движения лимфы в организме. Лимфатическая система отвечает за выведение токсинов, лишней жидкости и продуктов распада из тканей. Замедление её работы приводит к отекам, снижению иммунитета, усталости и проявлениям целлюлита. Массаж помогает «разогнать» лимфу, активизируя процессы очищения и восстановления организма.",
          en: "Lymphatic drainage massage is a special technique aimed at stimulating the movement of lymph in the body. The lymphatic system is responsible for removing toxins, excess fluid, and waste products from tissues. A slowdown in its function leads to swelling, reduced immunity, fatigue, and the appearance of cellulite. The massage helps to \"boost\" the lymph, activating the body's cleansing and recovery processes.",
          de: "Die Lymphdrainage-Massage ist eine spezielle Technik, die darauf abzielt, den Lymphfluss im Körper zu stimulieren. Das Lymphsystem ist für den Abtransport von Giftstoffen, überschüssiger Flüssigkeit und Abfallprodukten aus dem Gewebe verantwortlich. Eine Verlangsamung seiner Funktion führt zu Schwellungen, verminderter Immunität, Müdigkeit und dem Auftreten von Cellulite. Die Massage hilft, die Lymphe „anzukurbeln“ und so die Reinigungs- und Erholungsprozesse des Körpers zu aktivieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як це працює?",
          ru: "Как это работает?",
          en: "How Does It Work?",
          de: "Wie funktioniert es?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "На відміну від класичного масажу, лімфодренажний виконується м'якими, повільними та хвилеподібними рухами строго по лініях лімфотоку. Спеціаліст не розминає м'язи, а делікатно впливає на лімфатичні судини та вузли, стимулюючи їх скорочення та сприяючи вільному руху рідини.",
          ru: "В отличие от классического массажа, лимфодренажный выполняется мягкими, медленными и волнообразными движениями строго по линиям лимфотока. Специалист не разминает мышцы, а деликатно воздействует на лимфатические сосуды и узлы, стимулируя их сокращение и способствуя свободному движению жидкости.",
          en: "Unlike classic massage, lymphatic drainage is performed with soft, slow, and wave-like movements strictly along the lines of lymph flow. The specialist does not knead the muscles but gently affects the lymphatic vessels and nodes, stimulating their contraction and promoting the free movement of fluid.",
          de: "Im Gegensatz zur klassischen Massage wird die Lymphdrainage mit sanften, langsamen und wellenartigen Bewegungen streng entlang der Lymphbahnen durchgeführt. Der Spezialist knetet nicht die Muskeln, sondern wirkt sanft auf die Lymphgefäße und -knoten ein, um deren Kontraktion zu stimulieren und den freien Flüssigkeitsfluss zu fördern."
        }
      },
      {
        type: "image",
        content: { image: "https://s0.rbk.ru/v6_top_pics/media/img/7/31/756221906232317.jpg" },
        sideText: {
          uk: "Це дуже приємна та розслаблююча процедура, яка не викликає больових відчуттів і дарує відчуття легкості вже після першого сеансу.",
          ru: "Это очень приятная и расслабляющая процедура, которая не вызывает болевых ощущений и дарит чувство легкости уже после первого сеанса.",
          en: "This is a very pleasant and relaxing procedure that does not cause pain and gives a feeling of lightness after the first session.",
          de: "Dies ist eine sehr angenehme und entspannende Behandlung, die keine Schmerzen verursacht und bereits nach der ersten Sitzung ein Gefühl der Leichtigkeit vermittelt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні переваги лімфодренажного масажу",
          ru: "Основные преимущества лимфодренажного массажа",
          en: "Main Benefits of Lymphatic Drainage Massage",
          de: "Hauptvorteile der Lymphdrainage-Massage"
        }
      },
      {
        type: "list",
        content: {
          uk: "Зменшення набряків: ефективно виводить зайву рідину з організму, зменшуючи набряклість ніг, обличчя та тіла.\nДетоксикація: прискорює виведення токсинів та продуктів метаболізму.\nЗміцнення імунітету: покращує роботу лімфатичної системи, яка є частиною імунної.\nКорекція фігури: є важливою частиною антицелюлітних програм, вирівнює рельєф шкіри.\nВідновлення після травм та операцій: прискорює загоєння та зняття післяопераційних набряків.\nПокращення стану шкіри: шкіра стає більш пружною, свіжою, зникають синці під очима.",
          ru: "Уменьшение отеков: эффективно выводит лишнюю жидкость из организма, уменьшая отечность ног, лица и тела.\nДетоксикация: ускоряет выведение токсинов и продуктов метаболизма.\nУкрепление иммунитета: улучшает работу лимфатической системы, которая является частью иммунной.\nКоррекция фигуры: является важной частью антицеллюлитных программ, выравнивает рельеф кожи.\nВосстановление после травм и операций: ускоряет заживление и снятие послеоперационных отеков.\nУлучшение состояния кожи: кожа становится более упругой, свежей, исчезают синяки под глазами.",
          en: "Reduction of swelling: effectively removes excess fluid from the body, reducing swelling in the legs, face, and body.\nDetoxification: accelerates the removal of toxins and metabolic products.\nImmunity boost: improves the function of the lymphatic system, which is part of the immune system.\nBody shaping: an important part of anti-cellulite programs, smoothes the skin's texture.\nRecovery after injuries and surgeries: accelerates healing and reduces post-operative swelling.\nImproved skin condition: the skin becomes firmer, fresher, and dark circles under the eyes disappear.",
          de: "Reduzierung von Schwellungen: entfernt effektiv überschüssige Flüssigkeit aus dem Körper und reduziert Schwellungen in Beinen, Gesicht und Körper.\nEntgiftung: beschleunigt den Abtransport von Giftstoffen und Stoffwechselprodukten.\nStärkung des Immunsystems: verbessert die Funktion des Lymphsystems, das Teil des Immunsystems ist.\nKörperformung: ein wichtiger Bestandteil von Anti-Cellulite-Programmen, glättet die Hautstruktur.\nErholung nach Verletzungen und Operationen: beschleunigt die Heilung und reduziert postoperative Schwellungen.\nVerbesserter Hautzustand: die Haut wird straffer, frischer und Augenringe verschwinden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Кому рекомендований масаж?",
          ru: "Кому рекомендован массаж?",
          en: "Who is this massage recommended for?",
          de: "Für wen wird diese Massage empfohlen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лімфодренажний масаж буде корисний при схильності до набряків, варикозному розширенні вен (на початкових стадіях), целюліті, зниженому імунітеті та для загального оздоровлення організму. Також він є чудовою процедурою для відновлення після перельотів або інтенсивних тренувань. Для досягнення максимального ефекту рекомендується курс з 10-12 процедур.",
          ru: "Лимфодренажный массаж будет полезен при склонности к отекам, варикозном расширении вен (на начальных стадиях), целлюлите, сниженном иммунитете и для общего оздоровления организма. Также он является прекрасной процедурой для восстановления после перелетов или интенсивных тренировок. Для достижения максимального эффекта рекомендуется курс из 10-12 процедур.",
          en: "Lymphatic drainage massage is beneficial for those prone to swelling, varicose veins (in the initial stages), cellulite, low immunity, and for general body wellness. It is also an excellent procedure for recovery after flights or intense workouts. A course of 10-12 procedures is recommended for maximum effect.",
          de: "Die Lymphdrainage-Massage ist vorteilhaft bei Neigung zu Schwellungen, Krampfadern (im Anfangsstadium), Cellulite, geringer Immunität und für das allgemeine Wohlbefinden des Körpers. Sie ist auch eine ausgezeichnete Prozedur zur Erholung nach Flügen oder intensiven Trainingseinheiten. Für eine maximale Wirkung wird ein Kurs von 10-12 Behandlungen empfohlen."
        }
      }
    ],
    faqs: ["faq_lymphatic_massage_1", "faq_lymphatic_massage_2"],
    doctors: ["doctor1", "doctor_massage_therapist_3"]
  },


  {
    id: "subservice13", // НОВАЯ ПОДУСЛУГА
    serviceId: "service3", // Привязка к основной услуге "Массаж"
    title: {
      uk: "Антицелюлітний масаж",
      ru: "Антицеллюлитный массаж",
      en: "Anti-Cellulite Massage",
      de: "Anti-Cellulite-Massage"
    },
    slug: "antiytselyulitnyy-masazh",
    mainImage: "https://lifting-lab.com/wp-content/uploads/2022/02/anticellulitnyi-massazh-tela.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Антицелюлітний масаж: шлях до гладкої та пружної шкіри",
          ru: "Антицеллюлитный массаж: путь к гладкой и упругой коже",
          en: "Anti-Cellulite Massage: The Path to Smooth and Firm Skin",
          de: "Anti-Cellulite-Massage: Der Weg zu glatter und straffer Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Антицелюлітний масаж — це інтенсивна методика, спеціально розроблена для боротьби з целюлітом («апельсиновою кіркою») та покращення стану шкіри в проблемних зонах (стегна, сідниці, живіт, руки). Його головна мета — нормалізувати кровообіг та лімфоток у підшкірно-жировій клітковині, зруйнувати жирові відкладення та вивести зайву рідину і токсини.",
          ru: "Антицеллюлитный массаж — это интенсивная методика, специально разработанная для борьбы с целлюлитом («апельсиновой коркой») и улучшения состояния кожи в проблемных зонах (бедра, ягодицы, живот, руки). Его главная цель — нормализовать кровообращение и лимфоток в подкожно-жировой клетчатке, разрушить жировые отложения и вывести лишнюю жидкость и токсины.",
          en: "Anti-cellulite massage is an intensive technique specifically designed to combat cellulite (\"orange peel skin\") and improve the skin's condition in problem areas (thighs, buttocks, abdomen, arms). Its main goal is to normalize blood and lymph circulation in the subcutaneous fat tissue, break down fat deposits, and remove excess fluid and toxins.",
          de: "Die Anti-Cellulite-Massage ist eine intensive Technik, die speziell zur Bekämpfung von Cellulite („Orangenhaut“) und zur Verbesserung des Hautzustands in Problemzonen (Oberschenkel, Gesäß, Bauch, Arme) entwickelt wurde. Ihr Hauptziel ist die Normalisierung der Blut- und Lymphzirkulation im Unterhautfettgewebe, der Abbau von Fettablagerungen und die Entfernung von übersüssiger Flüssigkeit und Giftstoffen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Техніка та інтенсивність",
          ru: "Техника и интенсивность",
          en: "Technique and Intensity",
          de: "Technik und Intensität"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Цей вид масажу відрізняється від класичного та релакс-масажу своєю енергійністю та глибиною впливу. Спеціаліст використовує спеціальні прийоми: інтенсивне розтирання, глибоке розминання, поплескування, щипки та перекати. Масаж проводиться локально, на проблемних зонах, для досягнення максимального ефекту. Можливе використання вакуумних банок або спеціальних масажерів.",
          ru: "Этот вид массажа отличается от классического и релакс-массажа своей энергичностью и глубиной воздействия. Специалист использует особые приемы: интенсивное растирание, глубокое разминание, похлопывания, щипки и перекаты. Массаж проводится локально, на проблемных зонах, для достижения максимального эффекта. Возможно использование вакуумных банок или специальных массажеров.",
          en: "This type of massage differs from classic and relaxation massages in its energy and depth of impact. The specialist uses special techniques: intensive rubbing, deep kneading, tapping, pinching, and rolling. The massage is performed locally on problem areas to achieve maximum effect. Vacuum cups or special massagers may be used.",
          de: "Diese Art der Massage unterscheidet sich von der klassischen und der Entspannungsmassage durch ihre Energie und die Tiefe der Einwirkung. Der Spezialist verwendet spezielle Techniken: intensives Reiben, tiefes Kneten, Klopfen, Zupfen und Rollen. Die Massage wird lokal an den Problemzonen durchgeführt, um eine maximale Wirkung zu erzielen. Es können Vakuumgläser oder spezielle Massagegeräte verwendet werden."
        }
      },
      {
        type: "image",
        content: { image: "https://osteopatiya.kh.ua/wp-content/uploads/anticzellyulitnyj-massazh.jpg" },
        sideText: {
          uk: "Важливо розуміти, що процедура може бути чутливою, особливо перші сеанси. Однак результат вартий тимчасового дискомфорту.",
          ru: "Важно понимать, что процедура может быть чувствительной, особенно первые сеансы. Однако результат стоит временного дискомфорта.",
          en: "It is important to understand that the procedure can be sensitive, especially the first few sessions. However, the result is worth the temporary discomfort.",
          de: "Es ist wichtig zu verstehen, dass die Behandlung empfindlich sein kann, insbesondere die ersten Sitzungen. Das Ergebnis ist jedoch das vorübergehende Unbehagen wert."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ключові ефекти антицелюлітного масажу",
          ru: "Ключевые эффекты антицеллюлитного массажа",
          en: "Key Effects of Anti-Cellulite Massage",
          de: "Wichtige Effekte der Anti-Cellulite-Massage"
        }
      },
      {
        type: "list",
        content: {
          uk: "Зменшення видимості целюліту: шкіра стає більш гладкою та рівною.\nЗменшення об'ємів: за рахунок виведення зайвої рідини та прискорення розщеплення жирів.\nПідвищення тонусу та пружності шкіри: стимулюється вироблення колагену та еластину.\nПокращення мікроциркуляції: шкіра отримує більше кисню та поживних речовин.\nЛімфодренажний ефект: зникає набряклість, тіло стає легшим.",
          ru: "Уменьшение видимости целлюлита: кожа становится более гладкой и ровной.\nУменьшение объемов: за счет выведения лишней жидкости и ускорения расщепления жиров.\nПовышение тонуса и упругости кожи: стимулируется выработка коллагена и эластина.\nУлучшение микроциркуляции: кожа получает больше кислорода и питательных веществ.\nЛимфодренажный эффект: уходит отечность, тело становится легче.",
          en: "Reduced visibility of cellulite: the skin becomes smoother and more even.\nVolume reduction: due to the removal of excess fluid and accelerated fat breakdown.\nIncreased skin tone and firmness: the production of collagen and elastin is stimulated.\nImproved microcirculation: the skin receives more oxygen and nutrients.\nLymphatic drainage effect: swelling disappears, the body feels lighter.",
          de: "Reduzierte Sichtbarkeit von Cellulite: die Haut wird glatter und ebenmäßiger.\nVolumenreduktion: durch die Entfernung von überschüssiger Flüssigkeit und beschleunigten Fettabbau.\nErhöhter Hauttonus und Festigkeit: die Produktion von Kollagen und Elastin wird angeregt.\nVerbesserte Mikrozirkulation: die Haut erhält mehr Sauerstoff und Nährstoffe.\nLymphdrainage-Effekt: Schwellungen verschwinden, der Körper fühlt sich leichter an."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Важливість курсу та комплексного підходу",
          ru: "Важность курса и комплексного подхода",
          en: "The Importance of a Course and a Comprehensive Approach",
          de: "Die Bedeutung eines Kurses und eines umfassenden Ansatzes"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Антицелюлітний масаж працює найкраще при проходженні повного курсу, який зазвичай складається з 10-15 процедур з інтервалом 2-3 дні. Для максимального та довготривалого ефекту ми рекомендуємо поєднувати масаж зі збалансованим харчуванням, фізичною активністю та правильним питним режимом. Також масаж чудово комбінується з обгортаннями та іншими процедурами для тіла.",
          ru: "Антицеллюлитный массаж работает лучше всего при прохождении полного курса, который обычно состоит из 10-15 процедур с интервалом 2-3 дня. Для максимального и долговременного эффекта мы рекомендуем сочетать массаж со сбалансированным питанием, физической активностью и правильным питьевым режимом. Также массаж прекрасно комбинируется с обертываниями и другими процедурами для тела.",
          en: "Anti-cellulite massage works best when completed as a full course, which usually consists of 10-15 procedures with an interval of 2-3 days. For maximum and long-lasting results, we recommend combining the massage with a balanced diet, physical activity, and proper hydration. The massage also combines perfectly with body wraps and other body treatments.",
          de: "Die Anti-Cellulite-Massage wirkt am besten, wenn sie als vollständiger Kurs absolviert wird, der in der Regel aus 10-15 Behandlungen im Abstand von 2-3 Tagen besteht. Für maximale und langanhaltende Ergebnisse empfehlen wir, die Massage mit einer ausgewogenen Ernährung, körperlicher Aktivität und ausreichender Flüssigkeitszufuhr zu kombinieren. Die Massage lässt sich auch perfekt mit Körperwickeln und anderen Körperbehandlungen kombinieren."
        }
      }
    ],
    faqs: ["faq_cellulite_massage_1", "faq_cellulite_massage_2"],
    doctors: ["doctor1", "doctor2", "doctor3"]
  },

  {
    id: "subservice14", // НОВАЯ ПОДУСЛУГА
    serviceId: "service3", // Привязка к основной услуге "Массаж"
    title: {
      uk: "Релакс-масаж",
      ru: "Релакс-массаж",
      en: "Relaxation Massage",
      de: "Entspannungsmassage"
    },
    slug: "relaks-masazh",
    mainImage: "https://shkolamm.ru//wp-content/uploads/2018/11/Obshhij-massazh-1536x700-1024x467.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Релакс-масаж: повне перезавантаження для тіла та душі",
          ru: "Релакс-массаж: полная перезагрузка для тела и души",
          en: "Relaxation Massage: A Complete Reset for Body and Soul",
          de: "Entspannungsmassage: Ein kompletter Neustart für Körper und Seele"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Релакс-масаж — це м'яка та делікатна процедура, головна мета якої — зняти психоемоційну напругу, усунути наслідки стресу та занурити вас у стан глибокого розслаблення. На відміну від інших видів масажу, тут немає інтенсивного силового впливу. Вся увага зосереджена на плавних, ритмічних та гармонізуючих рухах.",
          ru: "Релакс-массаж — это мягкая и деликатная процедура, главная цель которой — снять психоэмоциональное напряжение, устранить последствия стресса и погрузить вас в состояние глубокого расслабления. В отличие от других видов массажа, здесь нет интенсивного силового воздействия. Всё внимание сосредоточено на плавных, ритмичных и гармонизирующих движениях.",
          en: "Relaxation massage is a gentle and delicate procedure whose main goal is to relieve psycho-emotional tension, eliminate the effects of stress, and immerse you in a state of deep relaxation. Unlike other types of massage, there is no intense force involved. All focus is on smooth, rhythmic, and harmonizing movements.",
          de: "Die Entspannungsmassage ist eine sanfte und zarte Behandlung, deren Hauptziel es ist, psycho-emotionale Spannungen abzubauen, die Auswirkungen von Stress zu beseitigen und Sie in einen Zustand tiefer Entspannung zu versetzen. Im Gegensatz zu anderen Massagearten gibt es hier keine intensive Krafteinwirkung. Der gesamte Fokus liegt auf fließenden, rhythmischen und harmonisierenden Bewegungen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Особливості техніки",
          ru: "Особенности техники",
          en: "Technique Specifics",
          de: "Besonderheiten der Technik"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Масажист використовує довгі, ковзкі рухи, м'які розминання та легкі вібрації. Темп масажу повільний та медитативний. Часто процедура супроводжується приємною розслаблюючою музикою, приглушеним світлом та ароматерапією з використанням натуральних ефірних олій (лаванди, іланг-ілангу, сандалу), що поглиблює ефект релаксації.",
          ru: "Массажист использует длинные, скользящие движения, мягкие разминания и легкие вибрации. Темп массажа медленный и медитативный. Часто процедура сопровождается приятной расслабляющей музыкой, приглушенным светом и ароматерапией с использованием натуральных эфирных масел (лаванды, иланг-иланга, сандала), что углубляет эффект релаксации.",
          en: "The massage therapist uses long, gliding strokes, gentle kneading, and light vibrations. The pace of the massage is slow and meditative. The procedure is often accompanied by pleasant relaxing music, dim lighting, and aromatherapy using natural essential oils (lavender, ylang-ylang, sandalwood), which deepens the relaxation effect.",
          de: "Der Masseur verwendet lange, gleitende Streichungen, sanfte Knetungen und leichte Vibrationen. Das Tempo der Massage ist langsam und meditativ. Die Behandlung wird oft von angenehmer Entspannungsmusik, gedämpftem Licht und Aromatherapie mit natürlichen ätherischen Ölen (Lavendel, Ylang-Ylang, Sandelholz) begleitet, was den Entspannungseffekt vertieft."
        }
      },
      {
        type: "image",
        content: { image: "https://shkolamm.ru//wp-content/uploads/2018/11/body-therapies-1024x683.jpg" },
        sideText: {
          uk: "Це час, коли ви можете повністю відволіктися від повсякденних турбот, думок та прислухатися до свого тіла.",
          ru: "Это время, когда вы можете полностью отвлечься от повседневных забот, мыслей и прислушаться к своему телу.",
          en: "This is a time when you can completely disconnect from daily worries and thoughts and listen to your body.",
          de: "Dies ist eine Zeit, in der Sie sich vollständig von alltäglichen Sorgen und Gedanken lösen und auf Ihren Körper hören können."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Кому і коли потрібен релакс-масаж?",
          ru: "Кому и когда нужен релакс-массаж?",
          en: "Who Needs a Relaxation Massage and When?",
          de: "Wer braucht wann eine Entspannungsmassage?"
        }
      },
      {
        type: "list",
        content: {
          uk: "При хронічному стресі та втомі.\nПри підвищеній тривожності та дратівливості.\nПри порушеннях сну та безсонні.\nПри емоційному вигоранні та високих розумових навантаженнях.\nПісля важкого робочого тижня для відновлення сил.\nЯк подарунок для себе чи близької людини.",
          ru: "При хроническом стрессе и усталости.\nПри повышенной тревожности и раздражительности.\nПри нарушениях сна и бессоннице.\nПри эмоциональном выгорании и высоких умственных нагрузках.\nПосле тяжелой рабочей недели для восстановления сил.\nВ качестве подарка для себя или близкого человека.",
          en: "For chronic stress and fatigue.\nFor increased anxiety and irritability.\nFor sleep disorders and insomnia.\nFor emotional burnout and high mental loads.\nAfter a tough work week to restore energy.\nAs a gift for yourself or a loved one.",
          de: "Bei chronischem Stress und Müdigkeit.\nBei erhöhter Angst und Reizbarkeit.\nBei Schlafstörungen und Schlaflosigkeit.\nBei emotionalem Burnout und hoher geistiger Belastung.\nNach einer anstrengenden Arbeitswoche zur Regeneration.\nAls Geschenk für sich selbst oder einen geliebten Menschen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат процедури",
          ru: "Результат процедуры",
          en: "Procedure Result",
          de: "Ergebnis der Behandlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після сеансу релакс-масажу ви відчуєте глибоке розслаблення м'язів, ясність думок, спокій та внутрішню гармонію. Покращується настрій, нормалізується сон, з'являється відчуття легкості в усьому тілі та прилив життєвих сил. Регулярні сеанси допомагають зміцнити нервову систему та підвищити стійкість до стресів.",
          ru: "После сеанса релакс-массажа вы почувствуете глубокое расслабление мышц, ясность мыслей, спокойствие и внутреннюю гармонию. Улучшается настроение, нормализуется сон, появляется ощущение легкости во всем теле и прилив жизненных сил. Регулярные сеансы помогают укрепить нервную систему и повысить стрессоустойчивость.",
          en: "After a relaxation massage session, you will feel deep muscle relaxation, clarity of thought, peace, and inner harmony. Your mood improves, sleep normalizes, and you feel a sense of lightness throughout your body and a surge of vitality. Regular sessions help strengthen the nervous system and increase stress resistance.",
          de: "Nach einer Entspannungsmassage spüren Sie eine tiefe Muskelentspannung, geistige Klarheit, Ruhe und innere Harmonie. Ihre Stimmung verbessert sich, der Schlaf normalisiert sich und Sie fühlen eine Leichtigkeit im ganzen Körper sowie einen Vitalitätsschub. Regelmäßige Sitzungen helfen, das Nervensystem zu stärken und die Stressresistenz zu erhöhen."
        }
      }
    ],
    faqs: ["faq6"],
    doctors: ["doctor3", "doctor_massage_therapist_2"]
  },

  {
    id: "subservice15", // НОВАЯ ПОДУСЛУГА
    serviceId: "service4", // Привязка к новой основной услуге "Контурна пластика"
    title: {
      uk: "Збільшення губ",
      ru: "Увеличение губ",
      en: "Lip Augmentation",
      de: "Lippenvergrößerung"
    },
    slug: "zblishennya-hub",
    mainImage: "https://cosmetologyclinic.ru/wp-content/uploads/2024/01/Komochki-posle-uvelicheniya-gub.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Збільшення губ: чуттєвість та гармонія вашої посмішки",
          ru: "Увеличение губ: чувственность и гармония вашей улыбки",
          en: "Lip Augmentation: Sensuality and Harmony for Your Smile",
          de: "Lippenvergrößerung: Sinnlichkeit und Harmonie für Ihr Lächeln"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Збільшення та корекція форми губ за допомогою філерів на основі гіалуронової кислоти — одна з найпопулярніших процедур у сучасній косметології. Вона дозволяє не тільки додати губам бажаного об'єму, але й скоригувати асиметрію, зволожити, підкреслити контур та зробити їх більш виразними, зберігаючи при цьому максимальну природність.",
          ru: "Увеличение и коррекция формы губ с помощью филлеров на основе гиалуроновой кислоты — одна из самых популярных процедур в современной косметологии. Она позволяет не только придать губам желаемый объем, но и скорректировать асимметрию, увлажнить, подчеркнуть контур и сделать их более выразительными, сохраняя при этом максимальную естественность.",
          en: "Lip augmentation and shape correction using hyaluronic acid-based fillers is one of the most popular procedures in modern cosmetology. It not only adds desired volume to the lips but also corrects asymmetry, moisturizes, defines the contour, and makes them more expressive while maintaining maximum naturalness.",
          de: "Die Lippenvergrößerung und -formkorrektur mit Hyaluronsäure-Fillern ist eine der beliebtesten Behandlungen in der modernen Kosmetologie. Sie verleiht den Lippen nicht nur das gewünschte Volumen, sondern korrigiert auch Asymmetrien, spendet Feuchtigkeit, definiert die Kontur und macht sie ausdrucksvoller, während die maximale Natürlichkeit erhalten bleibt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чому саме гіалуронова кислота?",
          ru: "Почему именно гиалуроновая кислота?",
          en: "Why Hyaluronic Acid?",
          de: "Warum Hyaluronsäure?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гіалуронова кислота — це природний компонент нашої шкіри, який відповідає за її зволоження та пружність. Філери на її основі є абсолютно біосумісними, вони не викликають алергії та з часом повністю розсмоктуються і виводяться з організму. Це робить процедуру максимально безпечною.",
          ru: "Гиалуроновая кислота — это естественный компонент нашей кожи, отвечающий за её увлажнение и упругость. Филлеры на её основе абсолютно биосовместимы, они не вызывают аллергии и со временем полностью рассасываются и выводятся из организма. Это делает процедуру максимально безопасной.",
          en: "Hyaluronic acid is a natural component of our skin, responsible for its hydration and elasticity. Fillers based on it are completely biocompatible, do not cause allergies, and are eventually fully absorbed and eliminated from the body. This makes the procedure as safe as possible.",
          de: "Hyaluronsäure ist ein natürlicher Bestandteil unserer Haut, der für ihre Feuchtigkeit und Elastizität verantwortlich ist. Darauf basierende Füller sind vollständig biokompatibel, verursachen keine Allergien und werden im Laufe der Zeit vollständig vom Körper abgebaut und ausgeschieden. Dies macht die Behandlung so sicher wie möglich."
        }
      },
      {
        type: "image",
        content: { image: "https://medcity.ua/upload/iblock/9bd/tbx0ssvq5els3818y14whjsrcqhsyw0q.jpg" },
        sideText: {
          uk: "Ми використовуємо лише преміальні, сертифіковані препарати від світових виробників, що гарантує якісний та передбачуваний результат.",
          ru: "Мы используем только премиальные, сертифицированные препараты от мировых производителей, что гарантирует качественный и предсказуемый результат.",
          en: "We use only premium, certified products from global manufacturers, which guarantees a high-quality and predictable result.",
          de: "Wir verwenden nur hochwertige, zertifizierte Produkte von weltweit führenden Herstellern, was ein qualitativ hochwertiges und vorhersagbares Ergebnis garantiert."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Можливості процедури",
          ru: "Возможности процедуры",
          en: "Procedure Possibilities",
          de: "Möglichkeiten der Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Надання губам додаткового об'єму.\nКорекція асиметрії.\nФормування чіткого контуру губ.\nПідняття опущених куточків рота.\nГлибоке зволоження та усунення сухості.\nРозгладження дрібних зморшок навколо губ.",
          ru: "Придание губам дополнительного объема.\nКоррекция асимметрии.\nФормирование четкого контура губ.\nПоднятие опущенных уголков рта.\nГлубокое увлажнение и устранение сухости.\nРазглаживание мелких морщинок вокруг губ.",
          en: "Adding extra volume to the lips.\nCorrecting asymmetry.\nCreating a clear lip contour.\nLifting drooping corners of the mouth.\nDeep hydration and elimination of dryness.\nSmoothing fine lines around the lips.",
          de: "Den Lippen zusätzliches Volumen verleihen.\nAsymmetrien korrigieren.\nEine klare Lippenkontur schaffen.\nHängende Mundwinkel anheben.\nTiefe Hydratation und Beseitigung von Trockenheit.\nGlättung feiner Linien um die Lippen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie läuft die Behandlung ab?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура починається з консультації, де лікар обговорює з вами бажану форму та об'єм. Потім наноситься аплікаційна анестезія (крем) для максимального комфорту. Сама ін'єкційна частина триває 15-30 хвилин. Лікар вводить філер за допомогою тонкої голки або канюлі, делікатно моделюючи форму губ. Результат видно одразу, але остаточну форму губи приймають після того, як спаде невеликий набряк (за 2-5 днів).",
          ru: "Процедура начинается с консультации, где врач обсуждает с вами желаемую форму и объем. Затем наносится аппликационная анестезия (крем) для максимального комфорта. Сама инъекционная часть длится 15-30 минут. Врач вводит филлер с помощью тонкой иглы или канюли, деликатно моделируя форму губ. Результат виден сразу, но окончательную форму губы принимают после того, как спадет небольшой отек (через 2-5 дней).",
          en: "The procedure begins with a consultation where the doctor discusses your desired shape and volume. Then, a topical anesthetic (cream) is applied for maximum comfort. The injection part itself lasts 15-30 minutes. The doctor injects the filler using a fine needle or cannula, delicately shaping the lips. The result is visible immediately, but the final shape is achieved after the slight swelling subsides (in 2-5 days).",
          de: "Die Behandlung beginnt mit einer Beratung, bei der der Arzt die gewünschte Form und das Volumen mit Ihnen bespricht. Dann wird eine topische Anästhesiecreme für maximalen Komfort aufgetragen. Der Injektionsteil selbst dauert 15-30 Minuten. Der Arzt injiziert den Füller mit einer feinen Nadel oder Kanüle und formt die Lippen sanft. Das Ergebnis ist sofort sichtbar, aber die endgültige Form wird erreicht, nachdem die leichte Schwellung abgeklungen ist (in 2-5 Tagen)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Догляд після процедури",
          ru: "Уход после процедуры",
          en: "Post-Procedure Care",
          de: "Pflege nach der Behandlung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Протягом перших днів слід уникати гарячих напоїв, відвідування сауни та солярію, а також інтенсивних фізичних навантажень. Не рекомендується активно масажувати губи. Ефект від процедури зберігається в середньому 8-12 місяців, залежно від препарату та індивідуальних особливостей організму.",
          ru: "В течение первых дней следует избегать горячих напитков, посещения сауны и солярия, а также интенсивных физических нагрузок. Не рекомендуется активно массировать губы. Эффект от процедуры сохраняется в среднем 8-12 месяцев, в зависимости от препарата и индивидуальных особенностей организма.",
          en: "For the first few days, you should avoid hot drinks, visiting saunas and tanning beds, and intense physical activity. It is not recommended to actively massage the lips. The effect of the procedure lasts an average of 8-12 months, depending on the product and individual body characteristics.",
          de: "In den ersten Tagen sollten Sie heiße Getränke, Saunabesuche, Solarien und intensive körperliche Betätigung meiden. Es wird nicht empfohlen, die Lippen aktiv zu massieren. Die Wirkung der Behandlung hält durchschnittlich 8-12 Monate an, abhängig vom Produkt und den individuellen Eigenschaften des Körpers."
        }
      }
    ],
    faqs: ["faq_lips_1", "faq_lips_2", "faq_lips_3"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice16", // НОВАЯ ПОДУСЛУГА
    serviceId: "service4", // Привязка к услуге "Контурна пластика"
    title: {
      uk: "Контурна корекція вилиць",
      ru: "Контурная коррекция скул",
      en: "Cheekbone Contour Correction",
      de: "Wangenknochen-Konturkorrektur"
    },
    slug: "konturna-korekciya-vylyts",
    mainImage: "https://images.unsplash.com/photo-1670201203116-26644750a726?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "heading",
        content: {
          uk: "Моделювання вилиць: виразний профіль та ефект ліфтингу",
          ru: "Моделирование скул: выразительный профиль и эффект лифтинга",
          en: "Cheekbone Modeling: A Defined Profile and Lifting Effect",
          de: "Wangenknochen-Modellierung: Ein definiertes Profil und Lifting-Effekt"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Контурна пластика вилиць — це ін'єкційна процедура, яка дозволяє відновити втрачений з віком об'єм, зробити риси обличчя більш чіткими та гармонійними, а також досягти ефекту безопераційного ліфтингу. За допомогою щільних філерів на основі гіалуронової кислоти лікар-косметолог створює гарний рельєф, підкреслюючи природну красу та омолоджуючи обличчя.",
          ru: "Контурная пластика скул — это инъекционная процедура, которая позволяет восстановить утраченный с возрастом объем, сделать черты лица более четкими и гармоничными, а также добиться эффекта безоперационного лифтинга. С помощью плотных филлеров на основе гиалуроновой кислоты врач-косметолог создает красивый рельеф, подчеркивая естественную красоту и омолаживая лицо.",
          en: "Cheekbone contouring is an injectable procedure that restores volume lost with age, makes facial features sharper and more harmonious, and achieves a non-surgical lifting effect. Using dense hyaluronic acid-based fillers, a cosmetologist creates a beautiful contour, emphasizing natural beauty and rejuvenating the face.",
          de: "Die Wangenknochen-Konturierung ist ein injizierbares Verfahren, das altersbedingt verlorenes Volumen wiederherstellt, die Gesichtszüge schärfer und harmonischer macht und einen nicht-chirurgischen Lifting-Effekt erzielt. Mit dichten Hyaluronsäure-Fillern schafft ein Kosmetologe eine schöne Kontur, die die natürliche Schönheit unterstreicht und das Gesicht verjüngt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Для чого потрібна корекція вилиць?",
          ru: "Для чего нужна коррекция скул?",
          en: "Why is Cheekbone Correction Needed?",
          de: "Warum ist eine Wangenknochenkorrektur notwendig?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Відновлення об'єму: з віком підшкірно-жирова клітковина в зоні вилиць зменшується, що робить обличчя «втомленим».\nЛіфтинг-ефект: збільшення об'єму вилиць підтягує середню третину обличчя, зменшуючи носогубні складки та «брилі».\nГармонізація пропорцій: процедура дозволяє зробити обличчя більш витонченим та аристократичним.\nПідкреслення краси: високі, чіткі вилиці роблять обличчя більш молодим та привабливим.",
          ru: "Восстановление объема: с возрастом подкожно-жировая клетчатка в зоне скул уменьшается, что делает лицо «уставшим».\nЛифтинг-эффект: увеличение объема скул подтягивает среднюю треть лица, уменьшая носогубные складки и «брыли».\nГармонизация пропорций: процедура позволяет сделать лицо более утонченным и аристократичным.\nПодчеркивание красоты: высокие, четкие скулы делают лицо более молодым и привлекательным.",
          en: "Volume restoration: with age, the subcutaneous fat in the cheekbone area decreases, making the face look \"tired\".\nLifting effect: increasing cheekbone volume lifts the middle third of the face, reducing nasolabial folds and jowls.\nHarmonization of proportions: the procedure can make the face appear more refined and aristocratic.\nBeauty enhancement: high, defined cheekbones make the face look younger and more attractive.",
          de: "Volumenwiederherstellung: Mit dem Alter nimmt das Unterhautfett im Wangenknochenbereich ab, was das Gesicht „müde“ aussehen lässt.\nLifting-Effekt: Die Erhöhung des Wangenknochenvolumens strafft das mittlere Drittel des Gesichts und reduziert Nasolabialfalten und Hängebäckchen.\nHarmonisierung der Proportionen: Das Verfahren kann das Gesicht verfeinerter und aristokratischer erscheinen lassen.\nSchönheitsverbesserung: Hohe, definierte Wangenknochen lassen das Gesicht jünger und attraktiver aussehen."
        }
      },
      {
        type: "image",
        content: { image: "https://plasticheskaya-hirurgiya-spb.ru/images/Konturnaya%20plastika%20skul.jpg" },
        sideText: {
          uk: "Результат процедури виглядає абсолютно природно. Обличчя не змінюється до невпізнання, а набуває свіжого, відпочилого та підтягнутого вигляду.",
          ru: "Результат процедуры выглядит абсолютно естественно. Лицо не меняется до неузнаваемости, а приобретает свежий, отдохнувший и подтянутый вид.",
          en: "The result of the procedure looks completely natural. The face does not change beyond recognition but acquires a fresh, rested, and lifted appearance.",
          de: "Das Ergebnis des Verfahrens sieht vollkommen natürlich aus. Das Gesicht verändert sich nicht bis zur Unkenntlichkeit, sondern erhält ein frisches, ausgeruhtes und gestrafftes Aussehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процес моделювання",
          ru: "Процесс моделирования",
          en: "The Modeling Process",
          de: "Der Modellierungsprozess"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після консультації та виключення протипоказань, лікар очищує шкіру та наносить розмітку для точного введення препарату. Для корекції вилиць використовуються щільні, в'язкі філери (волюмайзери), які добре тримають форму. Препарат вводиться глибоко, близько до кістки, за допомогою голки або канюлі. Процедура займає близько 30-45 хвилин. Завдяки анестезії вона проходить комфортно.",
          ru: "После консультации и исключения противопоказаний, врач очищает кожу и наносит разметку для точного введения препарата. Для коррекции скул используются плотные, вязкие филлеры (волюмайзеры), которые хорошо держат форму. Препарат вводится глубоко, близко к кости, с помощью иглы или канюли. Процедура занимает около 30-45 минут. Благодаря анестезии она проходит комфортно.",
          en: "After a consultation and ruling out contraindications, the doctor cleanses the skin and applies markings for precise product injection. Dense, viscous fillers (volumizers) that hold their shape well are used for cheekbone correction. The product is injected deep, close to the bone, using a needle or cannula. The procedure takes about 30-45 minutes. It is comfortable thanks to anesthesia.",
          de: "Nach einer Beratung und dem Ausschluss von Kontraindikationen reinigt der Arzt die Haut und bringt Markierungen für die präzise Injektion des Produkts an. Für die Wangenknochenkorrektur werden dichte, viskose Füller (Volumizer) verwendet, die ihre Form gut halten. Das Produkt wird tief, nahe am Knochen, mit einer Nadel oder Kanüle injiziert. Das Verfahren dauert etwa 30-45 Minuten. Dank Anästhesie ist es angenehm."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Тривалість ефекту та догляд",
          ru: "Длительность эффекта и уход",
          en: "Duration of Effect and Aftercare",
          de: "Wirkungsdauer und Nachsorge"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Результат від корекції вилиць помітний одразу і зберігається від 12 до 24 місяців. Тривалість залежить від обраного препарату та індивідуального метаболізму. Після процедури можливий невеликий набряк, який проходить за кілька днів. Рекомендується уникати сауни, солярію та інтенсивних масажів обличчя протягом 2 тижнів.",
          ru: "Результат от коррекции скул заметен сразу и сохраняется от 12 до 24 месяцев. Длительность зависит от выбранного препарата и индивидуального метаболизма. После процедуры возможен небольшой отек, который проходит за несколько дней. Рекомендуется избегать сауны, солярия и интенсивных массажей лица в течение 2 недель.",
          en: "The result of cheekbone correction is noticeable immediately and lasts from 12 to 24 months. The duration depends on the chosen product and individual metabolism. Minor swelling is possible after the procedure, which subsides in a few days. It is recommended to avoid saunas, tanning beds, and intensive facial massages for 2 weeks.",
          de: "Das Ergebnis der Wangenknochenkorrektur ist sofort sichtbar und hält 12 bis 24 Monate an. Die Dauer hängt vom gewählten Produkt und dem individuellen Stoffwechsel ab. Nach dem Eingriff ist eine leichte Schwellung möglich, die in wenigen Tagen abklingt. Es wird empfohlen, für 2 Wochen auf Sauna, Solarium und intensive Gesichtsmassagen zu verzichten."
        }
      }
    ],
    faqs: ["faq_cheeks_1", "faq_cheeks_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice17", // НОВАЯ ПОДУСЛУГА
    serviceId: "service4", // Привязка к услуге "Контурна пластика"
    title: {
      uk: "Моделювання підборіддя",
      ru: "Моделирование подбородка",
      en: "Chin Modeling",
      de: "Kinnmodellierung"
    },
    slug: "modelyuvannya-pidboriddya",
    mainImage: "https://ihc-russia.ru/upload/iblock/cf2/p5yjgdquw27i646pheyt6d0mxctxlosv.jpeg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Моделювання підборіддя: гармонія профілю та чіткість ліній",
          ru: "Моделирование подбородка: гармония профиля и четкость линий",
          en: "Chin Modeling: Profile Harmony and Line Definition",
          de: "Kinnmodellierung: Profilharmonie und Liniendefinition"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Контурна пластика підборіддя — це безопераційна методика корекції форми та розміру підборіддя за допомогою ін'єкцій щільних філерів на основі гіалуронової кислоти. Ця процедура дозволяє досягти гармонії пропорцій нижньої третини обличчя, зробити профіль більш виразним, а овал — чіткішим. Правильно сформоване підборіддя візуально омолоджує та надає обличчю вольового та аристократичного вигляду.",
          ru: "Контурная пластика подбородка — это безоперационная методика коррекции формы и размера подбородка с помощью инъекций плотных филлеров на основе гиалуроновой кислоты. Эта процедура позволяет достичь гармонии пропорций нижней трети лица, сделать профиль более выразительным, а овал — более четким. Правильно сформированный подбородок визуально омолаживает и придает лицу волевой и аристократичный вид.",
          en: "Chin contouring is a non-surgical method for correcting the shape and size of the chin using injections of dense hyaluronic acid-based fillers. This procedure helps to achieve harmonious proportions in the lower third of the face, make the profile more expressive, and define the jawline. A well-defined chin visually rejuvenates and gives the face a strong and aristocratic look.",
          de: "Die Kinnkonturierung ist eine nicht-chirurgische Methode zur Korrektur der Form und Größe des Kinns durch Injektionen von dichten Hyaluronsäure-Fillern. Dieses Verfahren hilft, harmonische Proportionen im unteren Drittel des Gesichts zu erreichen, das Profil ausdrucksvoller zu gestalten und die Kieferlinie zu definieren. Ein gut definiertes Kinn verjüngt optisch und verleiht dem Gesicht ein starkes und aristokratisches Aussehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Які проблеми вирішує корекція підборіддя?",
          ru: "Какие проблемы решает коррекция подбородка?",
          en: "What Problems Does Chin Correction Solve?",
          de: "Welche Probleme löst die Kinnkorrektur?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Недостатній об'єм або «скошене» підборіддя.\nАсиметрія.\nНечіткий овал обличчя, згладжений шийно-підборідний кут.\nВікові зміни, втрата об'єму.\nПорушення пропорцій обличчя (наприклад, при корекції носа або губ для створення балансу).\nЯмочка на підборідді, яку пацієнт хоче прибрати.",
          ru: "Недостаточный объем или «скошенный» подбородок.\nАсимметрия.\nНечеткий овал лица, сглаженный шейно-подбородочный угол.\nВозрастные изменения, потеря объема.\nНарушение пропорций лица (например, при коррекции носа или губ для создания баланса).\nЯмочка на подбородке, которую пациент хочет убрать.",
          en: "Insufficient volume or a \"receding\" chin.\nAsymmetry.\nUndefined jawline, smoothed cervicomental angle.\nAge-related changes, volume loss.\nFacial proportion imbalance (e.g., to create balance with nose or lip correction).\nA chin dimple that the patient wishes to remove.",
          de: "Unzureichendes Volumen oder ein „fliehendes“ Kinn.\nAsymmetrie.\nUndefinierte Kieferlinie, abgeflachter Zervikomentalwinkel.\nAltersbedingte Veränderungen, Volumenverlust.\nUngleichgewicht der Gesichtsproportionen (z. B. um ein Gleichgewicht bei Nasen- oder Lippenkorrekturen zu schaffen).\nEin Kinngrübchen, das der Patient entfernen möchte."
        }
      },
      {
        type: "image",
        content: { image: "https://spbmedika.ru/upload/delight.webpconverter/upload/resize_cache/iblock/8ef/dcqc86oi36jfk3x7m3pbz44f8yxjzock/400_400_2/plastika-podborodka.jpg.webp?174316399011304" },
        sideText: {
          uk: "Корекція підборіддя часто є фінальним штрихом, який надає всьому обличчю завершеного та гармонійного вигляду.",
          ru: "Коррекция подбородка часто является финальным штрихом, который придает всему лицу завершенный и гармоничный вид.",
          en: "Chin correction is often the final touch that gives the entire face a finished and harmonious look.",
          de: "Die Kinnkorrektur ist oft der letzte Schliff, der dem gesamten Gesicht ein vollendetes und harmonisches Aussehen verleiht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура, техніка та препарати",
          ru: "Процедура, техника и препараты",
          en: "Procedure, Technique, and Products",
          de: "Verfahren, Technik und Produkte"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар-косметолог проводить ретельний аналіз пропорцій вашого обличчя та підбирає оптимальний препарат. Для моделювання підборіддя використовуються найщільніші філери (волюметрики), які здатні імітувати кісткову тканину та довго зберігати форму. Ін'єкції виконуються за допомогою голки або канюлі в глибокі шари тканин. Процедура проводиться під аплікаційною анестезією та триває 30-40 хвилин.",
          ru: "Врач-косметолог проводит тщательный анализ пропорций вашего лица и подбирает оптимальный препарат. Для моделирования подбородка используются самые плотные филлеры (волюметрики), которые способны имитировать костную ткань и долго сохранять форму. Инъекции выполняются с помощью иглы или канюли в глубокие слои тканей. Процедура проводится под аппликационной анестезией и длится 30-40 минут.",
          en: "The cosmetologist conducts a thorough analysis of your facial proportions and selects the optimal product. For chin modeling, the densest fillers (volumetrics) are used, which can mimic bone tissue and maintain their shape for a long time. Injections are performed using a needle or cannula into the deep tissue layers. The procedure is done under topical anesthesia and lasts 30-40 minutes.",
          de: "Der Kosmetologe führt eine gründliche Analyse Ihrer Gesichtsproportionen durch und wählt das optimale Produkt aus. Für die Kinnmodellierung werden die dichtesten Füller (Volumetrika) verwendet, die Knochengewebe imitieren und ihre Form lange beibehalten können. Die Injektionen werden mit einer Nadel oder Kanüle in die tiefen Gewebeschichten durchgeführt. Das Verfahren erfolgt unter topischer Anästhesie und dauert 30-40 Minuten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та реабілітація",
          ru: "Результат и реабилитация",
          en: "Results and Recovery",
          de: "Ergebnisse und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ви одразу бачите результат, який стає остаточним після спадання незначного набряку через 3-7 днів. Ефект зберігається протягом 12-24 місяців. Період реабілітації мінімальний: протягом кількох днів може відчуватися легка болючість при натисканні. Рекомендується обмежити активну міміку, відмовитися від відвідування сауни та солярію на 10-14 днів.",
          ru: "Вы сразу видите результат, который становится окончательным после спада незначительного отека через 3-7 дней. Эффект сохраняется в течение 12-24 месяцев. Период реабилитации минимален: в течение нескольких дней может ощущаться легкая болезненность при нажатии. Рекомендуется ограничить активную мимику, отказаться от посещения сауны и солярия на 10-14 дней.",
          en: "You see the result immediately, which becomes final after minor swelling subsides in 3-7 days. The effect lasts for 12-24 months. The recovery period is minimal: slight tenderness upon pressure may be felt for a few days. It is recommended to limit active facial expressions and avoid visiting saunas and tanning beds for 10-14 days.",
          de: "Sie sehen das Ergebnis sofort, das nach dem Abklingen leichter Schwellungen in 3-7 Tagen endgültig wird. Die Wirkung hält 12-24 Monate an. Die Erholungsphase ist minimal: Leichte Druckempfindlichkeit kann einige Tage lang zu spüren sein. Es wird empfohlen, aktive Mimik zu begrenzen und Saunen und Solarien für 10-14 Tage zu meiden."
        }
      }
    ],
    faqs: ["faq_chin_1", "faq_chin_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice18", // НОВАЯ ПОДУСЛУГА
    serviceId: "service4", // Привязка к услуге "Контурна пластика"
    title: {
      uk: "Корекція носогубних складок",
      ru: "Коррекция носогубных складок",
      en: "Nasolabial Fold Correction",
      de: "Korrektur der Nasolabialfalten"
    },
    slug: "korekciya-nosohubnykh-skladok",
    mainImage: "https://newsomsk.ru/images/news/fullhd/2020/04/c077056a524ad5cce8a343cdfb06f441.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Корекція носогубних складок: повернення молодого та свіжого вигляду",
          ru: "Коррекция носогубных складок: возвращение молодого и свежего вида",
          en: "Nasolabial Fold Correction: Restoring a Young and Fresh Look",
          de: "Korrektur der Nasolabialfalten: Wiederherstellung eines jungen und frischen Aussehens"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Носогубні складки — це лінії, що йдуть від крил носа до куточків рота. З віком вони стають більш вираженими, надаючи обличчю втомленого та сумного вигляду. Контурна пластика за допомогою філерів на основі гіалуронової кислоти дозволяє ефективно заповнити ці заломи, розгладити шкіру та миттєво «стерти» кілька років з обличчя, повертаючи йому м'якість та свіжість.",
          ru: "Носогубные складки — это линии, идущие от крыльев носа к уголкам рта. с возрастом они становятся более выраженными, придавая лицу усталый и печальный вид. Контурная пластика с помощью филлеров на основе гиалуроновой кислоты позволяет эффективно заполнить эти заломы, разгладить кожу и мгновенно «стереть» несколько лет с лица, возвращая ему мягкость и свежесть.",
          en: "Nasolabial folds are the lines that run from the wings of the nose to the corners of the mouth. With age, they become more pronounced, giving the face a tired and sad appearance. Contour plastics using hyaluronic acid-based fillers effectively fill these creases, smooth the skin, and instantly \"erase\" several years from the face, restoring its softness and freshness.",
          de: "Nasolabialfalten sind die Linien, die von den Nasenflügeln zu den Mundwinkeln verlaufen. Mit dem Alter werden sie ausgeprägter und verleihen dem Gesicht ein müdes und trauriges Aussehen. Die Konturplastik mit Hyaluronsäure-Fillern füllt diese Falten effektiv auf, glättet die Haut und „radiert“ sofort mehrere Jahre aus dem Gesicht, wodurch es seine Weichheit und Frische zurückerhält."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Причини появи носогубних складок",
          ru: "Причины появления носогубных складок",
          en: "Causes of Nasolabial Folds",
          de: "Ursachen von Nasolabialfalten"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Важливо розуміти, що «носогубки» — це не просто зморшки. Їх поява пов'язана з комплексом вікових змін: втратою об'єму в ділянці вилиць, опущенням (птозом) м'яких тканин, активною мімікою та зниженням еластичності шкіри. Тому для найкращого результату лікар часто рекомендує комплексний підхід.",
          ru: "Важно понимать, что «носогубки» — это не просто морщины. Их появление связано с комплексом возрастных изменений: потерей объема в области скул, опущением (птозом) мягких тканей, активной мимикой и снижением эластичности кожи. Поэтому для наилучшего результата врач часто рекомендует комплексный подход.",
          en: "It's important to understand that nasolabial folds are not just wrinkles. Their appearance is associated with a complex of age-related changes: volume loss in the cheekbone area, sagging (ptosis) of soft tissues, active facial expressions, and decreased skin elasticity. Therefore, for the best result, the doctor often recommends a comprehensive approach.",
          de: "Es ist wichtig zu verstehen, dass Nasolabialfalten nicht nur Falten sind. Ihr Auftreten ist mit einem Komplex von altersbedingten Veränderungen verbunden: Volumenverlust im Wangenknochenbereich, Absacken (Ptosis) von Weichgewebe, aktive Mimik und verminderte Hautelastizität. Daher empfiehlt der Arzt für das beste Ergebnis oft einen umfassenden Ansatz."
        }
      },
      {
        type: "image",
        content: { image: "https://picsovet2.kidstaff.com.ua/uploads/2020/07/19/202007190342374715d3e00_650x650.jpg" },
        sideText: {
          uk: "Найбільш природний ефект досягається не прямим заповненням самої складки, а відновленням об'єму у вилицях, що підтягує тканини і природним чином розгладжує носогубну зону.",
          ru: "Наиболее естественный эффект достигается не прямым заполнением самой складки, а восстановлением объема в скулах, что подтягивает ткани и естественным образом разглаживает носогубную зону.",
          en: "The most natural effect is achieved not by directly filling the fold itself, but by restoring volume in the cheekbones, which tightens the tissues and naturally smooths the nasolabial area.",
          de: "Der natürlichste Effekt wird nicht durch das direkte Auffüllen der Falte selbst erzielt, sondern durch die Wiederherstellung des Volumens in den Wangenknochen, was das Gewebe strafft und den Nasolabialbereich auf natürliche Weise glättet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура корекції?",
          ru: "Как проходит процедура коррекции?",
          en: "How is the correction procedure performed?",
          de: "Wie wird der Korrekturvorgang durchgeführt?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після консультації та визначення оптимальної тактики, лікар наносить анестезуючий крем. Потім, за допомогою канюлі (спеціальної тупокінцевої гнучкої голки) або класичної голки, лікар вводить філер середньої щільності безпосередньо в зону залому або в сусідні ділянки для створення ліфтингу. Використання канюлі мінімізує ризик синців та робить процедуру максимально комфортною. Сеанс триває близько 30-40 хвилин.",
          ru: "После консультации и определения оптимальной тактики, врач наносит анестезирующий крем. Затем, с помощью канюли (специальной тупоконечной гибкой иглы) или классической иглы, врач вводит филлер средней плотности непосредственно в зону залома или в соседние участки для создания лифтинга. Использование канюли минимизирует риск синяков и делает процедуру максимально комфортной. Сеанс длится около 30-40 минут.",
          en: "After a consultation and determining the optimal tactic, the doctor applies an anesthetic cream. Then, using a cannula (a special blunt-tipped flexible needle) or a classic needle, the doctor injects a medium-density filler directly into the crease area or adjacent areas to create a lift. The use of a cannula minimizes the risk of bruising and makes the procedure as comfortable as possible. The session lasts about 30-40 minutes.",
          de: "Nach einer Beratung und der Festlegung der optimalen Taktik trägt der Arzt eine Betäubungscreme auf. Dann injiziert der Arzt mit einer Kanüle (einer speziellen stumpfen, flexiblen Nadel) oder einer klassischen Nadel einen mitteldichten Füller direkt in den Faltenbereich oder in angrenzende Bereiche, um einen Lifting-Effekt zu erzielen. Die Verwendung einer Kanüle minimiert das Risiko von Blutergüssen und macht das Verfahren so angenehm wie möglich. Die Sitzung dauert etwa 30-40 Minuten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та його тривалість",
          ru: "Результат и его длительность",
          en: "Result and its Duration",
          de: "Ergebnis und seine Dauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Результат помітний одразу після процедури: обличчя виглядає свіжим, відпочилим та значно молодшим. Ефект від корекції носогубних складок зберігається від 9 до 18 місяців. У період реабілітації (2-3 дні) рекомендується утриматися від активної міміки та теплових процедур.",
          ru: "Результат заметен сразу после процедуры: лицо выглядит свежим, отдохнувшим и значительно моложе. Эффект от коррекции носогубных складок сохраняется от 9 до 18 месяцев. В период реабилитации (2-3 дня) рекомендуется воздержаться от активной мимики и тепловых процедур.",
          en: "The result is noticeable immediately after the procedure: the face looks fresh, rested, and significantly younger. The effect of nasolabial fold correction lasts from 9 to 18 months. During the recovery period (2-3 days), it is recommended to refrain from active facial expressions and thermal procedures.",
          de: "Das Ergebnis ist sofort nach dem Eingriff sichtbar: Das Gesicht sieht frisch, ausgeruht und deutlich jünger aus. Die Wirkung der Nasolabialfaltenkorrektur hält 9 bis 18 Monate an. Während der Erholungsphase (2-3 Tage) wird empfohlen, auf aktive Mimik und Wärmebehandlungen zu verzichten."
        }
      }
    ],
    faqs: ["faq_nasolabial_1", "faq_nasolabial_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice19", // НОВАЯ ПОДУСЛУГА
    serviceId: "service5", // Привязка к новой основной услуге "IPL Shiny"
    title: {
      uk: "Лікування судинних зірочок (куперозу)",
      ru: "Лечение сосудистых звёздочек (купероза)",
      en: "Treatment of Spider Veins (Rosacea)",
      de: "Behandlung von Besenreisern (Couperose)"
    },
    slug: "lechenie-sosudistykh-zvezdochek",
    mainImage: "https://crowsnestcosmeticandvein.com.au/wp-content/uploads/2022/12/Spider_Veins_Face-scaled-1-scaled.jpeg",
    content: [
      {
        type: "heading",
        content: {
          uk: "IPL-терапія: чиста шкіра без почервонінь та судинної сітки",
          ru: "IPL-терапия: чистая кожа без покраснений и сосудистой сетки",
          en: "IPL Therapy: Clear Skin without Redness and Spider Veins",
          de: "IPL-Therapie: Klare Haut ohne Rötungen und Besenreiser"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Судинні «зірочки» (телеангіектазії) та купероз — це розширені капіляри, які просвічують крізь шкіру, створюючи почервоніння та видиму судинну сітку. Найчастіше вони з'являються на крилах носа, щоках та підборідді. Технологія IPL є золотим стандартом для безпечного та ефективного видалення таких дефектів. Вона дозволяє повернути шкірі рівний, здоровий тон без ін'єкцій та тривалої реабілітації.",
          ru: "Сосудистые «звёздочки» (телеангиэктазии) и купероз — это расширенные капилляры, которые просвечивают сквозь кожу, создавая покраснения и видимую сосудистую сетку. Чаще всего они появляются на крыльях носа, щеках и подбородке. Технология IPL является золотым стандартом для безопасного и эффективного удаления таких дефектов. Она позволяет вернуть коже ровный, здоровый тон без инъекций и длительной реабилитации.",
          en: "Spider veins (telangiectasias) and rosacea are dilated capillaries that show through the skin, creating redness and a visible vascular network. They most often appear on the wings of the nose, cheeks, and chin. IPL technology is the gold standard for the safe and effective removal of such defects. It allows you to restore an even, healthy skin tone without injections and a long recovery period.",
          de: "Besenreiser (Teleangiektasien) und Couperose sind erweiterte Kapillaren, die durch die Haut scheinen und Rötungen sowie ein sichtbares Gefäßnetz erzeugen. Sie treten am häufigsten an den Nasenflügeln, Wangen und am Kinn auf. Die IPL-Technologie ist der Goldstandard für die sichere und effektive Entfernung solcher Defekte. Sie ermöglicht es, einen ebenmäßigen, gesunden Hautton ohne Injektionen und lange Erholungszeit wiederherzustellen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Принцип дії: вибірковий фототермоліз",
          ru: "Принцип действия: избирательный фототермолиз",
          en: "Principle of Action: Selective Photothermolysis",
          de: "Wirkprinzip: Selektive Photothermolyse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Світловий імпульс IPL вибірково поглинається гемоглобіном — білком, що міститься в еритроцитах всередині судин. Енергія світла миттєво перетворюється на тепло, нагріваючи стінки капіляра. Під дією температури стінки судини «склеюються» (коагулюються), кров перестає по ній циркулювати, і протягом кількох тижнів судина розсмоктується і зникає. При цьому навколишні тканини не пошкоджуються.",
          ru: "Световой импульс IPL избирательно поглощается гемоглобином — белком, который содержится в эритроцитах внутри сосудов. Энергия света мгновенно преобразуется в тепло, нагревая стенки капилляра. Под действием температуры стенки сосуда «склеиваются» (коагулируются), кровь перестает по нему циркулировать, и в течение нескольких недель сосуд рассасывается и исчезает. При этом окружающие ткани не повреждаются.",
          en: "The IPL light pulse is selectively absorbed by hemoglobin, a protein contained in red blood cells inside the vessels. The light energy is instantly converted into heat, heating the capillary walls. Under the influence of temperature, the vessel walls \"stick together\" (coagulate), blood stops circulating through it, and within a few weeks, the vessel is reabsorbed and disappears. The surrounding tissues are not damaged.",
          de: "Der IPL-Lichtimpuls wird selektiv vom Hämoglobin, einem Protein in den roten Blutkörperchen innerhalb der Gefäße, absorbiert. Die Lichtenergie wird sofort in Wärme umgewandelt und erhitzt die Kapillarwände. Unter dem Einfluss der Temperatur „verkleben“ die Gefäßwände (koagulieren), das Blut hört auf, durch sie zu zirkulieren, und innerhalb weniger Wochen wird das Gefäß resorbiert und verschwindet. Das umliegende Gewebe wird dabei nicht geschädigt."
        }
      },
      {
        type: "image",
        content: { image: "https://lazersvit.com/storage/cache/files/2025/05/04/sosudistyie-zvezdochki-na-litse-main-min.webp" },
        sideText: {
          uk: "Процедура дозволяє ефективно боротися як з одиничними розширеними судинами, так і з дифузним почервонінням (розацеа).",
          ru: "Процедура позволяет эффективно бороться как с единичными расширенными сосудами, так и с диффузным покраснением (розацеа).",
          en: "The procedure effectively combats both single dilated vessels and diffuse redness (rosacea).",
          de: "Das Verfahren bekämpft wirksam sowohl einzelne erweiterte Gefäße als auch diffuse Rötungen (Rosazea)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до IPL-терапії",
          ru: "Показания к IPL-терапии",
          en: "Indications for IPL Therapy",
          de: "Indikationen für die IPL-Therapie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Купероз (видима судинна сітка на обличчі).\nТелеангіектазії (одиничні «судинні зірочки»).\nРозацеа (еритематозна стадія, що супроводжується стійким почервонінням).\n«Винні плями» (капілярна мальформація).",
          ru: "Купероз (видимая сосудистая сетка на лице).\nТелеангиэктазии (одиночные «сосудистые звёздочки»).\nРозацеа (эритематозная стадия, сопровождающаяся стойким покраснением).\n«Винные пятна» (капиллярная мальформация).",
          en: "Rosacea (visible vascular network on the face).\nTelangiectasias (single \"spider veins\").\nRosacea (erythematous stage, accompanied by persistent redness).\nPort-wine stains (capillary malformation).",
          de: "Couperose (sichtbares Gefäßnetz im Gesicht).\nTeleangiektasien (einzelne „Besenreiser“).\nRosazea (erythematöses Stadium, begleitet von anhaltender Rötung).\nPortweinflecken (kapillare Malformation)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процес лікування та реабілітація",
          ru: "Процесс лечения и реабилитация",
          en: "Treatment Process and Recovery",
          de: "Behandlungsprozess und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Під час процедури ви відчуваєте короткі гарячі «спалахи». Після сеансу можливе легке почервоніння, а оброблені судини можуть тимчасово потемніти — це нормальна реакція, що свідчить про ефективність. Реабілітація не потрібна, але протягом 2 тижнів необхідно уникати сонця, сауни та використовувати крем з SPF 50+. Для повного видалення судин зазвичай потрібен курс з 2-5 процедур з інтервалом 3-4 тижні.",
          ru: "Во время процедуры вы ощущаете короткие горячие «вспышки». После сеанса возможно легкое покраснение, а обработанные сосуды могут временно потемнеть — это нормальная реакция, свидетельствующая об эффективности. Реабилитация не требуется, но в течение 2 недель необходимо избегать солнца, сауны и использовать крем с SPF 50+. Для полного удаления сосудов обычно требуется курс из 2-5 процедур с интервалом 3-4 недели.",
          en: "During the procedure, you feel short, hot \"flashes.\" After the session, slight redness is possible, and the treated vessels may temporarily darken — this is a normal reaction indicating effectiveness. No recovery period is needed, but for 2 weeks, you must avoid the sun, saunas, and use a cream with SPF 50+. A course of 2-5 procedures with an interval of 3-4 weeks is usually required for complete vessel removal.",
          de: "Während des Eingriffs spüren Sie kurze, heiße „Blitze“. Nach der Sitzung ist eine leichte Rötung möglich, und die behandelten Gefäße können vorübergehend dunkler werden – dies ist eine normale Reaktion, die auf die Wirksamkeit hinweist. Es ist keine Erholungsphase erforderlich, aber für 2 Wochen müssen Sie die Sonne und Saunen meiden und eine Creme mit LSF 50+ verwenden. Ein Kurs von 2-5 Behandlungen im Abstand von 3-4 Wochen ist in der Regel zur vollständigen Entfernung der Gefäße erforderlich."
        }
      }
    ],
    faqs: ["faq_ipl_veins_1", "faq_ipl_veins_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2"]
  },

  {
    id: "subservice20", // НОВАЯ ПОДУСЛУГА
    serviceId: "service5", // Привязка к основной услуге "IPL Shiny"
    title: {
      uk: "Видалення пігментних плям",
      ru: "Удаление пигментных пятен",
      en: "Pigment Spot Removal",
      de: "Entfernung von Pigmentflecken"
    },
    slug: "vydalennya-pihmentnykh-plyam",
    mainImage: "https://c-clinica.com/upload/medialibrary/264/rl3uf812t5ddsg21bypxmed54a1ktjc9/azernoe_udalenie_pigmentatsii.png",
    content: [
      {
        type: "heading",
        content: {
          uk: "IPL-терапія: рівний тон шкіри без пігментації",
          ru: "IPL-терапия: ровный тон кожи без пигментации",
          en: "IPL Therapy: Even Skin Tone without Pigmentation",
          de: "IPL-Therapie: Ebenmäßiger Hautton ohne Pigmentierung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Пігментні плями (гіперпігментація) — це ділянки шкіри з надлишковим накопиченням меланіну, що з'являються через вплив сонця, гормональні зміни або вікові процеси. Веснянки, лентіго, постзапальна пігментація — всі ці дефекти роблять тон шкіри нерівномірним. Технологія IPL дозволяє ефективно освітлити та повністю видалити пігментні плями, повертаючи шкірі однорідний, сяючий колір.",
          ru: "Пигментные пятна (гиперпигментация) — это участки кожи с избыточным накоплением меланина, которые появляются из-за воздействия солнца, гормональных изменений или возрастных процессов. Веснушки, лентиго, поствоспалительная пигментация — все эти дефекты делают тон кожи неравномерным. Технология IPL позволяет эффективно осветлить и полностью удалить пигментные пятна, возвращая коже однородный, сияющий цвет.",
          en: "Pigment spots (hyperpigmentation) are areas of skin with excessive melanin accumulation that appear due to sun exposure, hormonal changes, or aging processes. Freckles, lentigo, post-inflammatory hyperpigmentation - all these defects make the skin tone uneven. IPL technology effectively lightens and completely removes pigment spots, restoring a uniform, radiant skin color.",
          de: "Pigmentflecken (Hyperpigmentierung) sind Hautbereiche mit übermäßiger Melaninansammlung, die durch Sonneneinstrahlung, hormonelle Veränderungen oder Alterungsprozesse entstehen. Sommersprossen, Lentigo, postinflammatorische Hyperpigmentierung - all diese Defekte machen den Hautton ungleichmäßig. Die IPL-Technologie hellt Pigmentflecken effektiv auf und entfernt sie vollständig, wodurch die Haut wieder einen einheitlichen, strahlenden Teint erhält."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як IPL бореться з пігментом?",
          ru: "Как IPL борется с пигментом?",
          en: "How Does IPL Combat Pigment?",
          de: "Wie bekämpft IPL Pigmente?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Світлові імпульси апарату IPL мають певну довжину хвилі, яка цілеспрямовано поглинається меланіном — пігментом, що забарвлює плями. Поглинена енергія світла перетворюється на тепло, яке нагріває та руйнує клітини з надлишком меланіну. При цьому здорова шкіра навколо плями залишається неушкодженою. Зруйнований пігмент поступово виводиться на поверхню шкіри та відлущується.",
          ru: "Световые импульсы аппарата IPL имеют определенную длину волны, которая целенаправленно поглощается меланином — пигментом, окрашивающим пятна. Поглощенная энергия света преобразуется в тепло, которое нагревает и разрушает клетки с избытком меланина. При этом здоровая кожа вокруг пятна остается неповрежденной. Разрушенный пигмент постепенно выводится на поверхность кожи и отшелушивается.",
          en: "The light pulses from the IPL device have a specific wavelength that is purposefully absorbed by melanin - the pigment that colors the spots. The absorbed light energy is converted into heat, which heats and destroys the cells with excess melanin. The healthy skin around the spot remains undamaged. The destroyed pigment is gradually brought to the skin's surface and exfoliates.",
          de: "Die Lichtimpulse des IPL-Geräts haben eine bestimmte Wellenlänge, die gezielt von Melanin - dem Pigment, das die Flecken färbt - absorbiert wird. Die absorbierte Lichtenergie wird in Wärme umgewandelt, die die Zellen mit überschüssigem Melanin erhitzt und zerstört. Die gesunde Haut um den Fleck herum bleibt unbeschädigt. Das zerstörte Pigment wird allmählich an die Hautoberfläche transportiert und schält sich ab."
        }
      },
      {
        type: "image",
        content: { image: "https://kosmetologiya-kazan.ru/wp-content/uploads/2024/10/pigment-optimized.jpg" },
        sideText: {
          uk: "Відразу після процедури пігментна пляма темніє — це вірна ознака того, що лікування було успішним. Протягом 7-14 днів вона світлішає і зникає.",
          ru: "Сразу после процедуры пигментное пятно темнеет — это верный признак того, что лечение было успешным. В течение 7-14 дней оно светлеет и исчезает.",
          en: "Immediately after the procedure, the pigment spot darkens - this is a sure sign that the treatment was successful. Within 7-14 days, it lightens and disappears.",
          de: "Unmittelbar nach der Behandlung verdunkelt sich der Pigmentfleck - dies ist ein sicheres Zeichen dafür, dass die Behandlung erfolgreich war. Innerhalb von 7-14 Tagen hellt er auf und verschwindet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до видалення пігментації",
          ru: "Показания к удалению пигментации",
          en: "Indications for Pigmentation Removal",
          de: "Indikationen zur Pigmententfernung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Сонячне та вікове лентіго (коричневі плями на обличчі, руках, зоні декольте).\nВеснянки (ефеліди).\nПосттравматична пігментація (плями після травм, опіків).\nПостзапальна пігментація (плями, що залишилися після акне).\nЗастійні плями.",
          ru: "Солнечное и возрастное лентиго (коричневые пятна на лице, руках, зоне декольте).\nВеснушки (эфелиды).\nПосттравматическая пигментация (пятна после травм, ожогов).\nПоствоспалительная пигментация (пятна, оставшиеся после акне).\nЗастойные пятна.",
          en: "Solar and age-related lentigo (brown spots on the face, hands, décolleté area).\nFreckles (ephelides).\nPost-traumatic pigmentation (spots after injuries, burns).\nPost-inflammatory hyperpigmentation (spots left after acne).\nStagnant spots.",
          de: "Solare und altersbedingte Lentigo (braune Flecken im Gesicht, an den Händen, im Dekolleté-Bereich).\nSommersprossen (Epheliden).\nPosttraumatische Pigmentierung (Flecken nach Verletzungen, Verbrennungen).\nPostinflammatorische Hyperpigmentierung (Flecken, die nach Akne zurückbleiben).\nStauungsflecken."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Важливі моменти та реабілітація",
          ru: "Важные моменты и реабилитация",
          en: "Important Points and Recovery",
          de: "Wichtige Punkte und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура не вимагає спеціальної підготовки, але за 2 тижні до неї не можна засмагати. Під час сеансу ви відчуваєте тепло та легке поколювання. Після процедури шкіра може бути трохи почервонілою. Головне правило після IPL-терапії — активний захист від сонця. Обов'язково використовуйте крем з SPF 50+ протягом місяця, щоб уникнути повторної появи пігментації. Для повного видалення плям може знадобитися курс з 2-4 процедур.",
          ru: "Процедура не требует специальной подготовки, но за 2 недели до нее нельзя загорать. Во время сеанса вы ощущаете тепло и легкое покалывание. После процедуры кожа может быть немного покрасневшей. Главное правило после IPL-терапии — активная защита от солнца. Обязательно используйте крем с SPF 50+ в течение месяца, чтобы избежать повторного появления пигментации. Для полного удаления пятен может потребоваться курс из 2-4 процедур.",
          en: "The procedure does not require special preparation, but you should not sunbathe for 2 weeks before it. During the session, you feel warmth and a slight tingling sensation. After the procedure, the skin may be slightly reddened. The main rule after IPL therapy is active sun protection. Be sure to use a cream with SPF 50+ for a month to avoid the reappearance of pigmentation. A course of 2-4 procedures may be required for complete spot removal.",
          de: "Das Verfahren erfordert keine besondere Vorbereitung, aber Sie sollten sich 2 Wochen vorher nicht sonnen. Während der Sitzung spüren Sie Wärme und ein leichtes Kribbeln. Nach dem Eingriff kann die Haut leicht gerötet sein. Die Hauptregel nach der IPL-Therapie ist ein aktiver Sonnenschutz. Verwenden Sie unbedingt einen Monat lang eine Creme mit LSF 50+, um das Wiederauftreten von Pigmentierungen zu vermeiden. Für eine vollständige Entfernung der Flecken kann ein Kurs von 2-4 Behandlungen erforderlich sein."
        }
      }
    ],
    faqs: ["faq_ipl_pigment_1", "faq_ipl_pigment_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2"]
  },


  {
    id: "subservice21", // НОВАЯ ПОДУСЛУГА
    serviceId: "service5", // Привязка к основной услуге "IPL Shiny"
    title: {
      uk: "Терапія акне",
      ru: "Терапия акне",
      en: "Acne Therapy",
      de: "Akne-Therapie"
    },
    slug: "terapiya-akne",
    mainImage: "https://lechenie-ugrei.ru/pic/man/jpg_p_12.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "IPL-терапія: чиста шкіра без запалень та постакне",
          ru: "IPL-терапия: чистая кожа без воспалений и постакне",
          en: "IPL Therapy: Clear Skin without Inflammation and Post-Acne",
          de: "IPL-Therapie: Reine Haut ohne Entzündungen und Post-Akne"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Акне (вугрова хвороба) — це хронічне запальне захворювання сальних залоз. IPL-терапія є одним з найсучасніших та найефективніших методів у комплексному лікуванні акне. Вона дозволяє впливати на ключові ланки розвитку хвороби: знищувати бактерії, що викликають запалення, та зменшувати почервоніння і застійні плями, що залишаються після висипань (постакне).",
          ru: "Акне (угревая болезнь) — это хроническое воспалительное заболевание сальных желез. IPL-терапия является одним из самых современных и эффективных методов в комплексном лечении акне. Она позволяет воздействовать на ключевые звенья развития болезни: уничтожать бактерии, вызывающие воспаление, и уменьшать покраснения и застойные пятна, которые остаются после высыпаний (постакне).",
          en: "Acne is a chronic inflammatory disease of the sebaceous glands. IPL therapy is one of the most modern and effective methods in the comprehensive treatment of acne. It targets the key links in the disease's development: destroying the bacteria that cause inflammation and reducing the redness and stagnant spots left after breakouts (post-acne).",
          de: "Akne ist eine chronisch-entzündliche Erkrankung der Talgdrüsen. Die IPL-Therapie ist eine der modernsten und effektivsten Methoden in der umfassenden Behandlung von Akne. Sie zielt auf die entscheidenden Glieder in der Krankheitsentwicklung ab: die Zerstörung der Bakterien, die Entzündungen verursachen, und die Reduzierung von Rötungen und Stauungsflecken, die nach Ausbrüchen zurückbleiben (Post-Akne)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Подвійний удар по акне: як це працює?",
          ru: "Двойной удар по акне: как это работает?",
          en: "A Double Strike on Acne: How Does It Work?",
          de: "Ein doppelter Schlag gegen Akne: Wie funktioniert es?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Антибактеріальна дія: Світлові хвилі певної довжини поглинаються порфіринами — продуктами життєдіяльності бактерій Propionibacterium acnes. Це призводить до утворення вільних радикалів, які руйнують бактерії зсередини, зменшуючи запалення.\nПротизапальна дія: IPL-світло коагулює дрібні кровоносні судини, які живлять запальний процес. Це допомагає швидко зняти почервоніння, а також усунути синюшні та червоні плями постакне.",
          ru: "Антибактериальное действие: Световые волны определенной длины поглощаются порфиринами — продуктами жизнедеятельности бактерий Propionibacterium acnes. Это приводит к образованию свободных радикалов, которые разрушают бактерии изнутри, уменьшая воспаление.\nПротивовоспалительное действие: IPL-свет коагулирует мелкие кровеносные сосуды, которые питают воспалительный процесс. Это помогает быстро снять покраснение, а также устранить синюшные и красные пятна постакне.",
          en: "Antibacterial action: Light waves of a certain length are absorbed by porphyrins - waste products of Propionibacterium acnes bacteria. This leads to the formation of free radicals that destroy the bacteria from within, reducing inflammation.\nAnti-inflammatory action: IPL light coagulates the small blood vessels that feed the inflammatory process. This helps to quickly reduce redness and also eliminate bluish and red post-acne spots.",
          de: "Antibakterielle Wirkung: Lichtwellen einer bestimmten Länge werden von Porphyrinen - Abfallprodukten der Propionibacterium acnes-Bakterien - absorbiert. Dies führt zur Bildung freier Radikale, die die Bakterien von innen zerstören und Entzündungen reduzieren.\nEntzündungshemmende Wirkung: IPL-Licht koaguliert die kleinen Blutgefäße, die den Entzündungsprozess nähren. Dies hilft, Rötungen schnell zu reduzieren und auch bläuliche und rote Post-Akne-Flecken zu beseitigen."
        }
      },
      {
        type: "image",
        content: { image: "https://www.ayna-spb.ru/netcat_files/userfiles/pic-1.jpg" },
        sideText: {
          uk: "IPL-терапія не тільки лікує активні висипання, але й запобігає появі нових, а також бореться з наслідками акне.",
          ru: "IPL-терапия не только лечит активные высыпания, но и предотвращает появление новых, а также борется с последствиями акне.",
          en: "IPL therapy not only treats active breakouts but also prevents the appearance of new ones and combats the consequences of acne.",
          de: "Die IPL-Therapie behandelt nicht nur aktive Ausbrüche, sondern beugt auch dem Auftreten neuer vor und bekämpft die Folgen von Akne."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до IPL-лікування акне",
          ru: "Показания к IPL-лечению акне",
          en: "Indications for IPL Acne Treatment",
          de: "Indikationen für die IPL-Aknebehandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Акне I-II ступеня (папули, пустули).\nРозширені пори та підвищена жирність шкіри.\nЗастійні плями та почервоніння після висипань (постакне).\nРозацеа, ускладнена папуло-пустульозними елементами.",
          ru: "Акне I-II степени (папулы, пустулы).\nРасширенные поры и повышенная жирность кожи.\nЗастойные пятна и покраснения после высыпаний (постакне).\nРозацеа, осложненная папуло-пустулезными элементами.",
          en: "Acne grades I-II (papules, pustules).\nEnlarged pores and increased skin oiliness.\nStagnant spots and redness after breakouts (post-acne).\nRosacea complicated by papulopustular elements.",
          de: "Akne Grad I-II (Papeln, Pusteln).\nVergrößerte Poren und erhöhte Hautfettigkeit.\nStauungsflecken und Rötungen nach Ausbrüchen (Post-Akne).\nRosazea, kompliziert durch papulopustulöse Elemente."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Важливість комплексного підходу",
          ru: "Важность комплексного подхода",
          en: "The Importance of a Comprehensive Approach",
          de: "Die Bedeutung eines umfassenden Ansatzes"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "IPL-терапія показує найкращі результати як частина комплексної програми, розробленої дерматологом. Вона може включати професійні чистки, пілінги та правильно підібраний домашній догляд. Для стійкої ремісії зазвичай потрібен курс з 4-8 процедур IPL з інтервалом 1-2 тижні.",
          ru: "IPL-терапия показывает наилучшие результаты как часть комплексной программы, разработанной дерматологом. Она может включать профессиональные чистки, пилинги и правильно подобранный домашний уход. Для стойкой ремиссии обычно требуется курс из 4-8 процедур IPL с интервалом в 1-2 недели.",
          en: "IPL therapy shows the best results as part of a comprehensive program developed by a dermatologist. It may include professional cleanings, peels, and properly selected home care. For stable remission, a course of 4-8 IPL procedures with an interval of 1-2 weeks is usually required.",
          de: "Die IPL-Therapie zeigt die besten Ergebnisse als Teil eines umfassenden, von einem Dermatologen entwickelten Programms. Es kann professionelle Reinigungen, Peelings und eine richtig ausgewählte Heimpflege umfassen. Für eine stabile Remission ist in der Regel ein Kurs von 4-8 IPL-Behandlungen im Abstand von 1-2 Wochen erforderlich."
        }
      }
    ],
    faqs: ["faq_ipl_acne_1", "faq_ipl_acne_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice22", // НОВАЯ ПОДУСЛУГА
    serviceId: "service5", // Привязка к основной услуге "IPL Shiny"
    title: {
      uk: "Омолодження шкіри IPL (Фотоомолодження)",
      ru: "Омоложение кожи IPL (Фотоомоложение)",
      en: "IPL Skin Rejuvenation (Photorejuvenation)",
      de: "IPL-Hautverjüngung (Photorejuvenation)"
    },
    slug: "omolodzhennya-shkiry-ipl",
    mainImage: "https://diva-salon.ru/images/news/2024/ipl.webp",
    content: [
      {
        type: "heading",
        content: {
          uk: "Фотоомолодження IPL: поверніть шкірі молодість та сяйво",
          ru: "Фотоомоложение IPL: верните коже молодость и сияние",
          en: "IPL Photorejuvenation: Restore Youth and Radiance to Your Skin",
          de: "IPL-Photorejuvenation: Geben Sie Ihrer Haut Jugend und Ausstrahlung zurück"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Фотоомолодження — це комплексна процедура, яка за допомогою інтенсивного імпульсного світла (IPL) одночасно вирішує цілий ряд проблем, пов'язаних з віковими змінами та фотостарінням. IPL-терапія стимулює внутрішні ресурси шкіри, запускаючи процеси оновлення та виробництва колагену, а також усуває такі недоліки, як пігментні плями та судинна сітка. Результат — більш пружна, гладенька шкіра з рівним, здоровим тоном.",
          ru: "Фотоомоложение — это комплексная процедура, которая с помощью интенсивного импульсного света (IPL) одновременно решает целый ряд проблем, связанных с возрастными изменениями и фотостарением. IPL-терапия стимулирует внутренние ресурсы кожи, запуская процессы обновления и производства коллагена, а также устраняет такие недостатки, как пигментные пятна и сосудистая сетка. Результат — более упругая, гладкая кожа с ровным, здоровым тоном.",
          en: "Photorejuvenation is a comprehensive procedure that uses intense pulsed light (IPL) to simultaneously address a range of issues related to aging and photoaging. IPL therapy stimulates the skin's internal resources, triggering renewal and collagen production processes, as well as eliminating imperfections like pigment spots and spider veins. The result is firmer, smoother skin with an even, healthy tone.",
          de: "Die Photorejuvenation ist ein umfassendes Verfahren, das mit intensivem Pulslicht (IPL) gleichzeitig eine Reihe von Problemen im Zusammenhang mit Alterung und Lichtalterung behandelt. Die IPL-Therapie stimuliert die hauteigenen Ressourcen, löst Erneuerungs- und Kollagenproduktionsprozesse aus und beseitigt Unvollkommenheiten wie Pigmentflecken und Besenreiser. Das Ergebnis ist eine straffere, glattere Haut mit einem ebenmäßigen, gesunden Teint."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Багатозадачність IPL: як досягається комплексний ефект?",
          ru: "Многозадачность IPL: как достигается комплексный эффект?",
          en: "The Multitasking of IPL: How is the Comprehensive Effect Achieved?",
          de: "Das Multitasking von IPL: Wie wird der umfassende Effekt erzielt?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Апарат IPL генерує світло різної довжини хвилі, що дозволяє одночасно впливати на три основні мішені в шкірі:",
          ru: "Аппарат IPL генерирует свет разной длины волны, что позволяет одновременно воздействовать на три основные мишени в коже:",
          en: "The IPL device generates light of various wavelengths, allowing it to simultaneously target three main chromophores in the skin:",
          de: "Das IPL-Gerät erzeugt Licht unterschiedlicher Wellenlängen und kann so gleichzeitig auf drei Hauptzielstrukturen in der Haut einwirken:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Меланін: руйнує пігментні плями, вирівнюючи тон шкіри.\nГемоглобін: коагулює розширені судини, прибираючи почервоніння та купероз.\nВода в дермі: прогріває глибокі шари шкіри, що потужно стимулює фібробласти до виробництва нового колагену та еластину. Це призводить до підвищення пружності та розгладження зморшок.",
          ru: "Меланин: разрушает пигментные пятна, выравнивая тон кожи.\nГемоглобин: коагулирует расширенные сосуды, убирая покраснения и купероз.\nВода в дерме: прогревает глубокие слои кожи, что мощно стимулирует фибробласты к производству нового коллагена и эластина. Это приводит к повышению упругости и разглаживанию морщин.",
          en: "Melanin: destroys pigment spots, evening out the skin tone.\nHemoglobin: coagulates dilated blood vessels, removing redness and rosacea.\nWater in the dermis: heats the deep layers of the skin, powerfully stimulating fibroblasts to produce new collagen and elastin. This leads to increased firmness and smoothing of wrinkles.",
          de: "Melanin: zerstört Pigmentflecken und gleicht den Hautton aus.\nHämoglobin: koaguliert erweiterte Blutgefäße und entfernt Rötungen und Couperose.\nWasser in der Dermis: erwärmt die tiefen Hautschichten und stimuliert die Fibroblasten stark zur Produktion von neuem Kollagen und Elastin. Dies führt zu erhöhter Festigkeit und Glättung von Falten."
        }
      },
      {
        type: "image",
        content: { image: "https://dramjad.ru/images/2023/04/bbl-omolo-3.jpg" },
        sideText: {
          uk: "Таким чином, за одну процедуру ви отримуєте освітлення, усунення судин та ліфтинг-ефект.",
          ru: "Таким образом, за одну процедуру вы получаете осветление, устранение сосудов и лифтинг-эффект.",
          en: "Thus, in one procedure, you get lightening, vessel removal, and a lifting effect.",
          de: "So erhalten Sie in einer Behandlung Aufhellung, Gefäßentfernung und einen Lifting-Effekt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до фотоомолодження",
          ru: "Показания к фотоомоложению",
          en: "Indications for Photorejuvenation",
          de: "Indikationen für die Photorejuvenation"
        }
      },
      {
        type: "list",
        content: {
          uk: "Перші ознаки старіння (дрібні зморшки, втрата тонусу).\nФотостаріння (пігментація, сухість, потовщення шкіри через сонце).\nПігментні плями та нерівний колір обличчя.\nКупероз та судинні «зірочки».\nРозширені пори.\nТьмяна, «втомлена» шкіра.",
          ru: "Первые признаки старения (мелкие морщины, потеря тонуса).\nФотостарение (пигментация, сухость, утолщение кожи из-за солнца).\nПигментные пятна и неровный цвет лица.\nКупероз и сосудистые «звёздочки».\nРасширенные поры.\nТусклая, «уставшая» кожа.",
          en: "First signs of aging (fine wrinkles, loss of tone).\nPhotoaging (pigmentation, dryness, skin thickening due to the sun).\nPigment spots and uneven skin tone.\nRosacea and spider veins.\nEnlarged pores.\nDull, \"tired\" skin.",
          de: "Erste Anzeichen der Hautalterung (feine Falten, Tonusverlust).\nLichtalterung (Pigmentierung, Trockenheit, Hautverdickung durch die Sonne).\nPigmentflecken und ungleichmäßiger Hautton.\nCouperose und Besenreiser.\nVergrößerte Poren.\nFahle, „müde“ Haut."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та результати",
          ru: "Курс процедур и результаты",
          en: "Course of Procedures and Results",
          de: "Behandlungskurs und Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ефект від фотоомолодження має накопичувальний характер. Помітні покращення ви побачите вже після першого сеансу, але для досягнення максимального та довготривалого результату рекомендується пройти курс з 3-5 процедур з інтервалом 3-4 тижні. Після курсу шкіра стає значно більш пружною, гладенькою, її тон вирівнюється, а обличчя набуває здорового сяйва. Ефект зберігається до 1-2 років.",
          ru: "Эффект от фотоомоложения имеет накопительный характер. Заметные улучшения вы увидите уже после первого сеанса, но для достижения максимального и долговременного результата рекомендуется пройти курс из 3-5 процедур с интервалом в 3-4 недели. После курса кожа становится значительно более упругой, гладкой, ее тон выравнивается, а лицо приобретает здоровое сияние. Эффект сохраняется до 1-2 лет.",
          en: "The effect of photorejuvenation is cumulative. You will see noticeable improvements after the first session, but to achieve the maximum and long-lasting result, a course of 3-5 procedures with an interval of 3-4 weeks is recommended. After the course, the skin becomes significantly firmer and smoother, its tone evens out, and the face acquires a healthy glow. The effect lasts for up to 1-2 years.",
          de: "Die Wirkung der Photorejuvenation ist kumulativ. Sie werden bereits nach der ersten Sitzung deutliche Verbesserungen feststellen, aber um das maximale und langanhaltende Ergebnis zu erzielen, wird ein Kurs von 3-5 Behandlungen im Abstand von 3-4 Wochen empfohlen. Nach dem Kurs wird die Haut deutlich straffer und glatter, ihr Ton gleicht sich aus und das Gesicht erhält einen gesunden Glanz. Die Wirkung hält bis zu 1-2 Jahre an."
        }
      }
    ],
    faqs: ["faq_ipl_rejuvenation_1", "faq_ipl_rejuvenation_2"],
    doctors: ["doctor_cosmetologist_1", "doctor_cosmetologist_2", "doctor_dermatologist_1"]
  },

  {
    id: "subservice23", // НОВАЯ ПОДУСЛУГА
    serviceId: "service6", // Привязка к новой основной услуге "Ботулинотерапия"
    title: {
      uk: "Корекція мімічних зморшок",
      ru: "Коррекция мимических морщин",
      en: "Correction of Expression Lines",
      de: "Korrektur von Mimikfalten"
    },
    slug: "korekciya-mimichnykh-zmorshok",
    mainImage: "https://k-l-p.ru/d/mimich-8.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Гладка шкіра без зморшок: ефективність ботулінотерапії",
          ru: "Гладкая кожа без морщин: эффективность ботулинотерапии",
          en: "Smooth Skin without Wrinkles: The Effectiveness of Botulinum Toxin Therapy",
          de: "Glatte Haut ohne Falten: Die Wirksamkeit der Botulinumtoxin-Therapie"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мімічні зморшки з'являються через активну роботу м'язів обличчя, коли ми хмуримося, дивуємося чи сміємося. З часом ці заломи стають статичними, тобто помітними навіть у стані спокою. Ботулінотерапія є золотим стандартом для боротьби з такими зморшками. Ін'єкції препарату на основі ботулотоксину тимчасово блокують передачу нервового імпульсу до м'яза, розслабляючи його. В результаті шкіра над м'язом розгладжується, а звичка хмуритися зникає.",
          ru: "Мимические морщины появляются из-за активной работы мышц лица, когда мы хмуримся, удивляемся или смеемся. со временем эти заломы становятся статическими, то есть заметными даже в состоянии покоя. Ботулинотерапия является золотым стандартом для борьбы с такими морщинами. Инъекции препарата на основе ботулотоксина временно блокируют передачу нервного импульса к мышце, расслабляя её. В результате кожа над мышцей разглаживается, а привычка хмуриться исчезает.",
          en: "Expression lines appear due to the active work of facial muscles when we frown, are surprised, or laugh. Over time, these creases become static, meaning they are visible even at rest. Botulinum toxin therapy is the gold standard for combating such wrinkles. Injections of a botulinum toxin-based preparation temporarily block the transmission of nerve impulses to the muscle, relaxing it. As a result, the skin over the muscle smooths out, and the habit of frowning disappears.",
          de: "Mimikfalten entstehen durch die aktive Arbeit der Gesichtsmuskeln, wenn wir die Stirn runzeln, überrascht sind oder lachen. Mit der Zeit werden diese Falten statisch, das heißt, sie sind auch in Ruhe sichtbar. Die Botulinumtoxin-Therapie ist der Goldstandard zur Bekämpfung solcher Falten. Injektionen eines Präparats auf Basis von Botulinumtoxin blockieren vorübergehend die Übertragung von Nervenimpulsen zum Muskel und entspannen ihn. Dadurch glättet sich die Haut über dem Muskel, und die Gewohnheit, die Stirn zu runzeln, verschwindet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Зони корекції",
          ru: "Зоны коррекции",
          en: "Correction Zones",
          de: "Korrekturzonen"
        }
      },
      {
        type: "list",
        content: {
          uk: "Міжбрів'я (вертикальні «зморшки гніву»).\nЛоб (горизонтальні зморшки).\nЗовнішні куточки очей («гусячі лапки»).\nСпинка носа («кролячі зморшки»).\nПідборіддя (нерівний рельєф).",
          ru: "Межбровье (вертикальные «морщины гнева»).\nЛоб (горизонтальные морщины).\nВнешние уголки глаз («гусиные лапки»).\nСпинка носа («кроличьи морщинки»).\nПодбородок (неровный рельеф).",
          en: "Glabella (vertical \"frown lines\").\nForehead (horizontal wrinkles).\nOuter corners of the eyes (\"crow's feet\").\nBridge of the nose (\"bunny lines\").\nChin (uneven texture).",
          de: "Glabella (vertikale „Zornesfalten“).\nStirn (horizontale Falten).\nÄußere Augenwinkel („Krähenfüße“).\nNasenrücken („Häschenfalten“).\nKinn (unebenes Relief)."
        }
      },
      {
        type: "image",
        content: { image: "https://thumbs.dreamstime.com/b/woman-s-face-rejuvenation-woman-s-face-rejuvenation-plastic-surgery-anti-aging-concept-111153496.jpg" },
        sideText: {
          uk: "Досвідчений лікар розраховує дозування так, щоб зберегти вашу індивідуальність та живу міміку, усунувши лише надмірну напругу м'язів.",
          ru: "Опытный врач рассчитывает дозировку так, чтобы сохранить вашу индивидуальность и живую мимику, устранив лишь избыточное напряжение мышц.",
          en: "An experienced doctor calculates the dosage to preserve your individuality and lively facial expressions, eliminating only excessive muscle tension.",
          de: "Ein erfahrener Arzt berechnet die Dosierung so, dass Ihre Individualität und lebendige Mimik erhalten bleiben und nur übermäßige Muskelverspannungen beseitigt werden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та ефект",
          ru: "Процедура и эффект",
          en: "Procedure and Effect",
          de: "Verfahren und Wirkung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура є швидкою та майже безболісною. Лікар за допомогою дуже тонкої голки вводить препарат у заздалегідь визначені точки. Сеанс триває 15-20 хвилин. Перший ефект починає проявлятися на 3-5 день, а остаточний результат оцінюється через 14 днів. Шкіра розгладжується, обличчя виглядає свіжим та розслабленим. Ефект зберігається в середньому 4-6 місяців, після чого процедуру можна повторити.",
          ru: "Процедура быстрая и почти безболезненная. Врач с помощью очень тонкой иглы вводит препарат в заранее определенные точки. Сеанс длится 15-20 минут. Первый эффект начинает проявляться на 3-5 день, а окончательный результат оценивается через 14 дней. Кожа разглаживается, лицо выглядит свежим и расслабленным. Эффект сохраняется в среднем 4-6 месяцев, после чего процедуру можно повторить.",
          en: "The procedure is quick and almost painless. The doctor uses a very fine needle to inject the preparation into predetermined points. The session lasts 15-20 minutes. The first effect begins to appear on the 3rd-5th day, and the final result is assessed after 14 days. The skin becomes smoother, and the face looks fresh and relaxed. The effect lasts for an average of 4-6 months, after which the procedure can be repeated.",
          de: "Das Verfahren ist schnell und nahezu schmerzfrei. Der Arzt injiziert das Präparat mit einer sehr feinen Nadel an vorbestimmte Punkte. Die Sitzung dauert 15-20 Minuten. Die erste Wirkung tritt am 3.-5. Tag ein, und das Endergebnis wird nach 14 Tagen beurteilt. Die Haut wird glatter, und das Gesicht sieht frisch und entspannt aus. Die Wirkung hält durchschnittlich 4-6 Monate an, danach kann die Behandlung wiederholt werden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Рекомендації після ін'єкцій",
          ru: "Рекомендации после инъекций",
          en: "Recommendations After Injections",
          de: "Empfehlungen nach den Injektionen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Протягом перших 4 годин після процедури не можна приймати горизонтальне положення. Протягом 7-10 днів слід утриматися від відвідування сауни, лазні, солярію та вживання алкоголю. Також не рекомендується масажувати зони ін'єкцій.",
          ru: "В течение первых 4 часов после процедуры нельзя принимать горизонтальное положение. В течение 7-10 дней следует воздержаться от посещения сауны, бани, солярия и употребления алкоголя. Также не рекомендуется массировать зоны инъекций.",
          en: "For the first 4 hours after the procedure, you should not lie down. For 7-10 days, you should refrain from visiting saunas, baths, tanning beds, and consuming alcohol. It is also not recommended to massage the injection sites.",
          de: "In den ersten 4 Stunden nach dem Eingriff sollten Sie sich nicht hinlegen. Für 7-10 Tage sollten Sie auf den Besuch von Saunen, Bädern, Solarien und den Konsum von Alkohol verzichten. Es wird auch nicht empfohlen, die Injektionsstellen zu massieren."
        }
      }
    ],
    faqs: ["faq_botox_wrinkles_1", "faq_botox_wrinkles_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice24", // НОВАЯ ПОДУСЛУГА
    serviceId: "service6", // Привязка к основной услуге "Ботулинотерапия"
    title: {
      uk: "Лікування гіпергідрозу",
      ru: "Лечение гипергидроза",
      en: "Hyperhidrosis Treatment",
      de: "Behandlung von Hyperhidrose"
    },
    slug: "lechenie-hiperhidroza",
    mainImage: "https://photo.in.ck.ua/service/5a42/1a49/c101/0514/e300/a7e4/lechenie-gipergidroza.11.jpeg?1537358754",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лікування гіпергідрозу: впевненість та комфорт у будь-якій ситуації",
          ru: "Лечение гипергидроза: уверенность и комфорт в любой ситуации",
          en: "Hyperhidrosis Treatment: Confidence and Comfort in Any Situation",
          de: "Behandlung von Hyperhidrose: Selbstvertrauen und Komfort in jeder Situation"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гіпергідроз — це стан, що характеризується надмірним потовиділенням, яке значно перевищує потреби організму в терморегуляції. Це може створювати серйозний психологічний та соціальний дискомфорт. Ботулінотерапія є одним з найефективніших та найбезпечніших методів лікування локального гіпергідрозу. Ін'єкції препарату на основі ботулотоксину дозволяють надовго забути про цю делікатну проблему.",
          ru: "Гипергидроз — это состояние, характеризующееся избыточным потоотделением, которое значительно превышает потребности организма в терморегуляции. Это может создавать серьезный психологический и социальный дискомфорт. Ботулинотерапия является одним из самых эффективных и безопасных методов лечения локального гипергидроза. Инъекции препарата на основе ботулотоксина позволяют надолго забыть об этой деликатной проблеме.",
          en: "Hyperhidrosis is a condition characterized by excessive sweating that significantly exceeds the body's thermoregulation needs. This can cause serious psychological and social discomfort. Botulinum toxin therapy is one of the most effective and safest methods for treating local hyperhidrosis. Injections of a botulinum toxin-based preparation allow you to forget about this delicate problem for a long time.",
          de: "Hyperhidrose ist ein Zustand, der durch übermäßiges Schwitzen gekennzeichnet ist, das die Thermoregulationsbedürfnisse des Körpers erheblich übersteigt. Dies kann zu erheblichem psychischem und sozialem Unbehagen führen. Die Botulinumtoxin-Therapie ist eine der wirksamsten und sichersten Methoden zur Behandlung von lokaler Hyperhidrose. Injektionen eines Präparats auf Basis von Botulinumtoxin lassen Sie dieses heikle Problem für lange Zeit vergessen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як ботулотоксин зупиняє піт?",
          ru: "Как ботулотоксин останавливает пот?",
          en: "How Does Botulinum Toxin Stop Sweat?",
          de: "Wie stoppt Botulinumtoxin Schweiß?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ботулотоксин типу А, потрапляючи в шкіру, блокує передачу нервових імпульсів від нервових закінчень до потових залоз. Залози просто перестають отримувати сигнал «виробляти піт» і тимчасово припиняють свою активність. При цьому функція терморегуляції організму в цілому не порушується, оскільки обробляються лише невеликі локальні зони.",
          ru: "Ботулотоксин типа А, попадая в кожу, блокирует передачу нервных импульсов от нервных окончаний к потовым железам. Железы просто перестают получать сигнал «вырабатывать пот» и временно прекращают свою активность. При этом функция терморегуляции организма в целом не нарушается, так как обрабатываются лишь небольшие локальные зоны.",
          en: "Botulinum toxin type A, when injected into the skin, blocks the transmission of nerve impulses from nerve endings to sweat glands. The glands simply stop receiving the signal to \"produce sweat\" and temporarily cease their activity. The body's overall thermoregulation function is not affected, as only small local areas are treated.",
          de: "Botulinumtoxin Typ A blockiert bei Injektion in die Haut die Übertragung von Nervenimpulsen von den Nervenenden zu den Schweißdrüsen. Die Drüsen hören einfach auf, das Signal zur „Schweißproduktion“ zu erhalten, und stellen ihre Aktivität vorübergehend ein. Die allgemeine Thermoregulationsfunktion des Körpers wird nicht beeinträchtigt, da nur kleine lokale Bereiche behandelt werden."
        }
      },
      {
        type: "image",
        content: { image: "https://orekhovo.clinic/wp-content/uploads/2021/12/kosmetolog_gipergidroza.jpg" },
        sideText: {
          uk: "Процедура однаково ефективна як для жінок, так і для чоловіків, які страждають від надмірного потовиділення.",
          ru: "Процедура одинаково эффективна как для женщин, так и для мужчин, страдающих от избыточного потоотделения.",
          en: "The procedure is equally effective for both women and men suffering from excessive sweating.",
          de: "Das Verfahren ist sowohl für Frauen als auch für Männer, die unter übermäßigem Schwitzen leiden, gleichermaßen wirksam."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Зони для лікування гіпергідрозу",
          ru: "Зоны для лечения гипергидроза",
          en: "Areas for Hyperhidrosis Treatment",
          de: "Bereiche für die Hyperhidrose-Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Пахвові западини (аксилярний гіпергідроз).\nДолоні (пальмарний гіпергідроз).\nСтопи (плантарний гіпергідроз).\nОбличчя та волосиста частина голови.",
          ru: "Подмышечные впадины (аксиллярный гипергидроз).\nЛадони (пальмарный гипергидроз).\nСтопы (плантарный гипергидроз).\nЛицо и волосистая часть головы.",
          en: "Underarms (axillary hyperhidrosis).\nPalms (palmar hyperhidrosis).\nSoles of the feet (plantar hyperhidrosis).\nFace and scalp.",
          de: "Achselhöhlen (axilläre Hyperhidrose).\nHandflächen (palmare Hyperhidrose).\nFußsohlen (plantare Hyperhidrose).\nGesicht und Kopfhaut."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та тривалість ефекту",
          ru: "Процедура и длительность эффекта",
          en: "Procedure and Duration of Effect",
          de: "Verfahren und Wirkungsdauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перед процедурою лікар проводить пробу Мінора для точного визначення меж зони з підвищеним потовиділенням. Потім шкіра обробляється антисептиком і наноситься анестезуючий крем. Препарат вводиться множинними мікроін'єкціями. Сеанс триває 30-60 хвилин. Ефект починає проявлятися на 2-4 день і досягає максимуму через 2 тижні. Ви забудете про проблему на 6-9 місяців, після чого процедуру можна безпечно повторити.",
          ru: "Перед процедурой врач проводит пробу Минора для точного определения границ зоны с повышенным потоотделением. Затем кожа обрабатывается антисептиком и наносится анестезирующий крем. Препарат вводится множественными микроинъекциями. Сеанс длится 30-60 минут. Эффект начинает проявляться на 2-4 день и достигает максимума через 2 недели. Вы забудете о проблеме на 6-9 месяцев, после чего процедуру можно безопасно повторить.",
          en: "Before the procedure, the doctor performs a Minor's test to accurately determine the boundaries of the area with increased sweating. The skin is then treated with an antiseptic, and an anesthetic cream is applied. The preparation is administered through multiple microinjections. The session lasts 30-60 minutes. The effect begins to appear on the 2nd-4th day and reaches its maximum after 2 weeks. You will forget about the problem for 6-9 months, after which the procedure can be safely repeated.",
          de: "Vor dem Eingriff führt der Arzt einen Minor-Test durch, um die Grenzen des Bereichs mit erhöhtem Schwitzen genau zu bestimmen. Die Haut wird dann mit einem Antiseptikum behandelt und eine Betäubungscreme aufgetragen. Das Präparat wird durch mehrere Mikroinjektionen verabreicht. Die Sitzung dauert 30-60 Minuten. Die Wirkung tritt am 2.-4. Tag ein und erreicht nach 2 Wochen ihr Maximum. Sie werden das Problem für 6-9 Monate vergessen, danach kann die Behandlung sicher wiederholt werden."
        }
      }
    ],
    faqs: ["faq_hyperhidrosis_1", "faq_hyperhidrosis_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice25", // НОВАЯ ПОДУСЛУГА
    serviceId: "service6", // Привязка к основной услуге "Ботулинотерапия"
    title: {
      uk: "Підйом куточків губ",
      ru: "Подъём уголков губ",
      en: "Lip Corner Lift",
      de: "Anheben der Mundwinkel"
    },
    slug: "pidyom-kutochkiv-hub",
    mainImage: "https://images.unsplash.com/photo-1590718313039-da29f5ef56d5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      {
        type: "heading",
        content: {
          uk: "Корекція куточків губ: повернення щасливої посмішки",
          ru: "Коррекция уголков губ: возвращение счастливой улыбки",
          en: "Lip Corner Correction: Restoring a Happy Smile",
          de: "Korrektur der Mundwinkel: Wiederherstellung eines glücklichen Lächelns"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "З віком або через анатомічні особливості м'яз, що опускає куточок рота (depressor anguli oris), стає гіперактивним. Це призводить до того, що куточки губ опускаються, надаючи обличчю сумного, втомленого або незадоволеного вигляду, навіть коли ви в гарному настрої. Ботулінотерапія дозволяє делікатно вирішити цю проблему, розслабивши цей м'яз та повернувши обличчю більш позитивний та молодий вираз.",
          ru: "С возрастом или из-за анатомических особенностей мышца, опускающая угол рта (depressor anguli oris), становится гиперактивной. Это приводит к тому, что уголки губ опускаются, придавая лицу грустное, усталое или недовольное выражение, даже когда вы в хорошем настроении. Ботулинотерапия позволяет деликатно решить эту проблему, расслабив эту мышцу и вернув лицу более позитивное и молодое выражение.",
          en: "With age or due to anatomical features, the muscle that pulls down the corner of the mouth (depressor anguli oris) becomes hyperactive. This causes the corners of the lips to droop, giving the face a sad, tired, or dissatisfied expression, even when you are in a good mood. Botulinum toxin therapy delicately solves this problem by relaxing this muscle and restoring a more positive and youthful expression to the face.",
          de: "Mit zunehmendem Alter oder aufgrund anatomischer Merkmale wird der Muskel, der den Mundwinkel nach unten zieht (Musculus depressor anguli oris), hyperaktiv. Dies führt dazu, dass die Mundwinkel herabhängen und dem Gesicht einen traurigen, müden oder unzufriedenen Ausdruck verleihen, selbst wenn Sie gut gelaunt sind. Die Botulinumtoxin-Therapie löst dieses Problem auf sanfte Weise, indem sie diesen Muskel entspannt und dem Gesicht einen positiveren und jugendlicheren Ausdruck zurückgibt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Механізм дії",
          ru: "Механизм действия",
          en: "Mechanism of Action",
          de: "Wirkmechanismus"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар вводить мікродозу препарату на основі ботулотоксину безпосередньо в м'яз-депресор. Препарат блокує нервовий імпульс, що йде до цього м'яза, і він розслабляється. В результаті м'язи-леватори, які підіймають куточки губ, починають домінувати, і куточки рота природним чином трохи підіймаються.",
          ru: "Врач вводит микродозу препарата на основе ботулотоксина непосредственно в мышцу-депрессор. Препарат блокирует нервный импульс, идущий к этой мышце, и она расслабляется. В результате мышцы-леваторы, которые поднимают уголки губ, начинают доминировать, и уголки рта естественным образом слегка приподнимаются.",
          en: "The doctor injects a micro-dose of the botulinum toxin-based preparation directly into the depressor muscle. The preparation blocks the nerve impulse to this muscle, causing it to relax. As a result, the levator muscles, which lift the corners of the lips, become dominant, and the corners of the mouth naturally lift slightly.",
          de: "Der Arzt injiziert eine Mikrodosis des Präparats auf Botulinumtoxin-Basis direkt in den Depressormuskel. Das Präparat blockiert den Nervenimpuls zu diesem Muskel, wodurch er sich entspannt. Infolgedessen werden die Levatormuskeln, die die Mundwinkel anheben, dominant, und die Mundwinkel heben sich auf natürliche Weise leicht an."
        }
      },
      {
        type: "image",
        content: { image: "https://filler.by/wp-content/uploads/2019/01/ugolki-gub-5.jpg" },
        sideText: {
          uk: "Результат виглядає дуже природно. Обличчя не втрачає своєї індивідуальності, а лише набуває більш доброзичливого та відкритого виразу.",
          ru: "Результат выглядит очень естественно. Лицо не теряет своей индивидуальности, а лишь приобретает более дружелюбное и открытое выражение.",
          en: "The result looks very natural. The face does not lose its individuality but simply acquires a more friendly and open expression.",
          de: "Das Ergebnis sieht sehr natürlich aus. Das Gesicht verliert nicht seine Individualität, sondern erhält lediglich einen freundlicheren und offeneren Ausdruck."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Кому підійде процедура?",
          ru: "Кому подойдет процедура?",
          en: "Who is the procedure for?",
          de: "Für wen ist das Verfahren geeignet?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Людям з опущеними куточками губ, що створює «маску скорботи».\nДля профілактики формування глибоких зморшок-«маріонеток».\nУ комплексі з іншими омолоджуючими процедурами для досягнення гармонійного результату.",
          ru: "Людям с опущенными уголками губ, что создает «маску скорби».\nДля профилактики формирования глубоких морщин-«марионеток».\nВ комплексе с другими омолаживающими процедурами для достижения гармоничного результата.",
          en: "People with drooping corners of the mouth, which creates a \"sad mask\".\nFor the prevention of deep \"marionette\" lines.\nIn combination with other rejuvenating procedures to achieve a harmonious result.",
          de: "Menschen mit herabhängenden Mundwinkeln, die eine „traurige Maske“ erzeugen.\nZur Vorbeugung tiefer „Marionettenfalten“.\nIn Kombination mit anderen verjüngenden Verfahren, um ein harmonisches Ergebnis zu erzielen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та тривалість ефекту",
          ru: "Процедура и длительность эффекта",
          en: "Procedure and Duration of Effect",
          de: "Verfahren und Wirkungsdauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Це одна з найшвидших ін'єкційних процедур, яка займає всього 5-10 хвилин. Лікар робить по одній ін'єкції з кожного боку. Ефект розвивається протягом 5-14 днів і триває 4-6 місяців. Часто для максимальної корекції зморшок-«маріонеток» цю процедуру поєднують із введенням філерів на основі гіалуронової кислоти.",
          ru: "Это одна из самых быстрых инъекционных процедур, которая занимает всего 5-10 минут. Врач делает по одной инъекции с каждой стороны. Эффект развивается в течение 5-14 дней и длится 4-6 месяцев. Часто для максимальной коррекции морщин-«марионеток» эту процедуру сочетают с введением филлеров на основе гиалуроновой кислоты.",
          en: "This is one of the quickest injection procedures, taking only 5-10 minutes. The doctor makes one injection on each side. The effect develops within 5-14 days and lasts for 4-6 months. Often, for maximum correction of \"marionette\" lines, this procedure is combined with the introduction of hyaluronic acid-based fillers.",
          de: "Dies ist eines der schnellsten Injektionsverfahren und dauert nur 5-10 Minuten. Der Arzt macht eine Injektion auf jeder Seite. Die Wirkung entwickelt sich innerhalb von 5-14 Tagen und hält 4-6 Monate an. Oft wird dieses Verfahren zur maximalen Korrektur von „Marionettenfalten“ mit der Einführung von Hyaluronsäure-Fillern kombiniert."
        }
      }
    ],
    faqs: ["faq_botox_corners_1"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice26", // НОВАЯ ПОДУСЛУГА
    serviceId: "service6", // Привязка к основной услуге "Ботулинотерапия"
    title: {
      uk: "Корекція «гусячих лапок»",
      ru: "Коррекция «гусиных лапок»",
      en: "Correction of \"Crow's Feet\"",
      de: "Korrektur von „Krähenfüßen“"
    },
    slug: "korekciya-husyachykh-lapok",
    mainImage: "https://www.anna-key.ru/upload/medialibrary/ed4/ed499eefa5de2c3e6f8122623b7f7a6d.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Корекція «гусячих лапок»: відкритий та молодий погляд",
          ru: "Коррекция «гусиных лапок»: открытый и молодой взгляд",
          en: "Correction of \"Crow's Feet\": An Open and Youthful Gaze",
          de: "Korrektur von „Krähenfüßen“: Ein offener und jugendlicher Blick"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "«Гусячі лапки» — це мережа дрібних мімічних зморшок у зовнішніх куточках очей, які з'являються, коли ми посміхаємося або мружимося. Вони є одними з перших ознак старіння, оскільки шкіра в цій зоні дуже тонка і ніжна. Ботулінотерапія є найефективнішим методом для розгладження цих зморшок, що дозволяє зробити погляд більш відкритим, а обличчя — свіжим та відпочилим.",
          ru: "«Гусиные лапки» — это сеть мелких мимических морщин во внешних уголках глаз, которые появляются, когда мы улыбаемся или щуримся. Они являются одними из первых признаков старения, так как кожа в этой области очень тонкая и нежная. Ботулинотерапия является самым эффективным методом для разглаживания этих морщин, позволяя сделать взгляд более открытым, а лицо — свежим и отдохнувшим.",
          en: "\"Crow's feet\" are a network of fine expression lines at the outer corners of the eyes that appear when we smile or squint. They are one of the first signs of aging, as the skin in this area is very thin and delicate. Botulinum toxin therapy is the most effective method for smoothing these wrinkles, making the gaze more open and the face look fresh and rested.",
          de: "„Krähenfüße“ sind ein Netzwerk feiner Mimikfalten an den äußeren Augenwinkeln, die beim Lächeln oder Blinzeln auftreten. Sie sind eines der ersten Anzeichen des Alterns, da die Haut in diesem Bereich sehr dünn und empfindlich ist. Die Botulinumtoxin-Therapie ist die wirksamste Methode zur Glättung dieser Falten, wodurch der Blick offener und das Gesicht frischer und ausgeruhter wirkt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як це працює?",
          ru: "Как это работает?",
          en: "How Does It Work?",
          de: "Wie funktioniert es?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура полягає в точковому введенні мікродоз ботулотоксину в круговий м'яз ока (musculus orbicularis oculi). Препарат розслабляє м'язові волокна, які відповідають за утворення зморшок. В результаті при посмішці шкіра перестає збиратися в складки, і «гусячі лапки» розгладжуються. При цьому ваша посмішка залишається абсолютно природною та щирою.",
          ru: "Процедура заключается в точечном введении микродоз ботулотоксина в круговую мышцу глаза (musculus orbicularis oculi). Препарат расслабляет мышечные волокна, отвечающие за образование морщин. В результате при улыбке кожа перестает собираться в складки, и «гусиные лапки» разглаживаются. При этом ваша улыбка остается абсолютно естественной и искренней.",
          en: "The procedure involves the precise injection of micro-doses of botulinum toxin into the orbicularis oculi muscle. The preparation relaxes the muscle fibers responsible for wrinkle formation. As a result, when you smile, the skin no longer creases, and the \"crow's feet\" are smoothed out. Your smile remains completely natural and sincere.",
          de: "Das Verfahren beinhaltet die präzise Injektion von Mikrodosen Botulinumtoxin in den Ringmuskel des Auges (Musculus orbicularis oculi). Das Präparat entspannt die Muskelfasern, die für die Faltenbildung verantwortlich sind. Dadurch knittert die Haut beim Lächeln nicht mehr, und die „Krähenfüße“ werden geglättet. Ihr Lächeln bleibt dabei absolut natürlich und aufrichtig."
        }
      },
      {
        type: "image",
        content: { image: "https://buybeauty.com.ua/images/blog/3/gusinue_lapki.jpg" },
        sideText: {
          uk: "Ботулінотерапія є чудовою профілактикою. Якщо почати робити процедуру при появі перших зморшок, можна запобігти їх поглибленню.",
          ru: "Ботулинотерапия является отличной профилактикой. Если начать делать процедуру при появлении первых морщин, можно предотвратить их углубление.",
          en: "Botulinum toxin therapy is an excellent preventative measure. If you start the procedure when the first wrinkles appear, you can prevent them from deepening.",
          de: "Die Botulinumtoxin-Therapie ist eine ausgezeichnete vorbeugende Maßnahme. Wenn Sie mit der Behandlung beginnen, sobald die ersten Falten auftreten, können Sie deren Vertiefung verhindern."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги корекції зони навколо очей",
          ru: "Преимущества коррекции зоны вокруг глаз",
          en: "Benefits of Correcting the Eye Area",
          de: "Vorteile der Korrektur der Augenpartie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Помітне омолодження погляду.\nШвидка та комфортна процедура (10-15 хвилин).\nМінімальний період реабілітації.\nЗбереження природної міміки.\nПрофілактика утворення глибоких заломів шкіри.",
          ru: "Заметное омоложение взгляда.\nБыстрая и комфортная процедура (10-15 минут).\nМинимальный период реабилитации.\nСохранение естественной мимики.\nПрофилактика образования глубоких заломов кожи.",
          en: "Noticeable rejuvenation of the eyes.\nQuick and comfortable procedure (10-15 minutes).\nMinimal recovery period.\nPreservation of natural facial expressions.\nPrevention of deep skin creases.",
          de: "Sichtbare Verjüngung der Augenpartie.\nSchnelles und komfortables Verfahren (10-15 Minuten).\nMinimale Erholungszeit.\nErhaltung der natürlichen Mimik.\nVorbeugung tiefer Hautfalten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та тривалість",
          ru: "Результат и длительность",
          en: "Result and Duration",
          de: "Ergebnis und Dauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перші зміни стають помітними на 3-7 день після процедури, а максимальний ефект досягається через 2 тижні. Гладка шкіра навколо очей буде радувати вас протягом 3-5 місяців. Після цього м'язова активність поступово відновлюється, і процедуру можна безпечно повторити.",
          ru: "Первые изменения становятся заметны на 3-7 день после процедуры, а максимальный эффект достигается через 2 недели. Гладкая кожа вокруг глаз будет радовать вас в течение 3-5 месяцев. После этого мышечная активность постепенно восстанавливается, и процедуру можно безопасно повторить.",
          en: "The first changes become noticeable 3-7 days after the procedure, with the maximum effect achieved after 2 weeks. The smooth skin around your eyes will delight you for 3-5 months. After this, muscle activity gradually returns, and the procedure can be safely repeated.",
          de: "Die ersten Veränderungen werden 3-7 Tage nach dem Eingriff sichtbar, wobei die maximale Wirkung nach 2 Wochen erreicht wird. Die glatte Haut um Ihre Augen wird Sie 3-5 Monate lang erfreuen. Danach kehrt die Muskelaktivität allmählich zurück, und das Verfahren kann sicher wiederholt werden."
        }
      }
    ],
    faqs: ["faq_botox_crows_feet_1", "faq_botox_crows_feet_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },

  {
    id: "subservice27", // НОВАЯ ПОДУСЛУГА
    serviceId: "service7", // Привязка к новой основной услуге "Трихология"
    title: {
      uk: "Діагностика шкіри голови (Трихоскопія)",
      ru: "Диагностика кожи головы (Трихоскопия)",
      en: "Scalp Diagnostics (Trichoscopy)",
      de: "Kopfhautdiagnostik (Trichoskopie)"
    },
    slug: "diahnostyka-shkiry-holovy",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxiWJ5rI7YgqRTM__gPTuO5jd5u2P0EmXUA&s",
    content: [
      {
        type: "heading",
        content: {
          uk: "Точна діагностика — перший крок до здорового волосся",
          ru: "Точная диагностика — первый шаг к здоровым волосам",
          en: "Accurate Diagnostics — The First Step to Healthy Hair",
          de: "Genaue Diagnostik — Der erste Schritt zu gesundem Haar"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ефективне лікування будь-якої проблеми з волоссям починається з правильної та точної діагностики. Без розуміння першопричини неможливо підібрати адекватну терапію. Консультація трихолога з проведенням цифрової трихоскопії є золотим стандартом у діагностиці захворювань волосся та шкіри голови. Цей метод дозволяє детально вивчити стан волосяних фолікулів, шкіри, судин та стрижнів волосся.",
          ru: "Эффективное лечение любой проблемы с волосами начинается с правильной и точной диагностики. Без понимания первопричины невозможно подобрать адекватную терапию. Консультация трихолога с проведением цифровой трихоскопии является золотым стандартом в диагностике заболеваний волос и кожи головы. Этот метод позволяет детально изучить состояние волосяных фолликулов, кожи, сосудов и стержней волос.",
          en: "Effective treatment for any hair problem begins with an accurate and precise diagnosis. Without understanding the root cause, it is impossible to select adequate therapy. A consultation with a trichologist, including a digital trichoscopy, is the gold standard in diagnosing hair and scalp diseases. This method allows for a detailed study of the condition of hair follicles, skin, blood vessels, and hair shafts.",
          de: "Eine wirksame Behandlung für jedes Haarproblem beginnt mit einer genauen und präzisen Diagnose. Ohne das Verständnis der eigentlichen Ursache ist es unmöglich, eine angemessene Therapie auszuwählen. Eine Konsultation bei einem Trichologen, einschließlich einer digitalen Trichoskopie, ist der Goldstandard bei der Diagnose von Haar- und Kopfhauterkrankungen. Diese Methode ermöglicht eine detaillierte Untersuchung des Zustands der Haarfollikel, der Haut, der Blutgefäße und der Haarschäfte."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Що таке трихоскопія?",
          ru: "Что такое трихоскопия?",
          en: "What is Trichoscopy?",
          de: "Was ist Trichoskopie?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Трихоскопія — це неінвазивний комп'ютерний метод діагностики, під час якого лікар за допомогою спеціального апарата (трихоскопа) з багаторазовим збільшенням виводить зображення шкіри голови та волосся на екран монітора. Це дозволяє об'єктивно оцінити стан, який неможливо побачити неозброєним оком.",
          ru: "Трихоскопия — это неинвазивный компьютерный метод диагностики, во время которого врач с помощью специального аппарата (трихоскопа) с многократным увеличением выводит изображение кожи головы и волос на экран монитора. Это позволяет объективно оценить состояние, которое невозможно увидеть невооруженным глазом.",
          en: "Trichoscopy is a non-invasive computer-based diagnostic method where a doctor uses a special device (trichoscope) with high magnification to display an image of the scalp and hair on a monitor screen. This allows for an objective assessment of conditions that are invisible to the naked eye.",
          de: "Die Trichoskopie ist eine nicht-invasive computergestützte Diagnosemethode, bei der ein Arzt mit einem speziellen Gerät (Trichoskop) mit hoher Vergrößerung ein Bild der Kopfhaut und der Haare auf einen Monitor anzeigt. Dies ermöglicht eine objektive Beurteilung von Zuständen, die mit bloßem Auge unsichtbar sind."
        }
      },
      {
        type: "image",
        content: { image: "https://www.shutterstock.com/image-photo/diagnostics-hair-scalp-trichoscopy-doctor-260nw-2548204039.jpg" },
        sideText: {
          uk: "Дані трихоскопії зберігаються в базі, що дозволяє відстежувати динаміку лікування та об'єктивно оцінювати його ефективність.",
          ru: "Данные трихоскопии сохраняются в базе, что позволяет отслеживать динамику лечения и объективно оценивать его эффективность.",
          en: "Trichoscopy data is stored in a database, which allows for tracking the dynamics of treatment and objectively evaluating its effectiveness.",
          de: "Die Trichoskopiedaten werden in einer Datenbank gespeichert, was die Verfolgung der Behandlungsdynamik und die objektive Bewertung ihrer Wirksamkeit ermöglicht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Що оцінює лікар під час діагностики?",
          ru: "Что оценивает врач во время диагностики?",
          en: "What Does the Doctor Evaluate During Diagnostics?",
          de: "Was bewertet der Arzt während der Diagnostik?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Тип шкіри голови (суха, жирна, нормальна).\nСтан судин, наявність запалення, лущення.\nКількість волосяних фолікулів на 1 кв. см, їх активність.\nСередній діаметр волосся, наявність стоншеного волосся.\nОзнаки різних типів алопеції (випадіння волосся).\nСтан стрижня волосини по всій довжині.",
          ru: "Тип кожи головы (сухая, жирная, нормальная).\nСостояние сосудов, наличие воспаления, шелушения.\nКоличество волосяных фолликулов на 1 кв. см, их активность.\nСредний диаметр волоса, наличие истонченных волос.\nПризнаки различных типов алопеции (выпадения волос).\nСостояние стержня волоса по всей длине.",
          en: "Scalp type (dry, oily, normal).\nCondition of blood vessels, presence of inflammation, peeling.\nNumber of hair follicles per sq. cm, their activity.\nAverage hair diameter, presence of thinning hair.\nSigns of various types of alopecia (hair loss).\nCondition of the hair shaft along its entire length.",
          de: "Kopfhauttyp (trocken, fettig, normal).\nZustand der Blutgefäße, Vorhandensein von Entzündungen, Schuppung.\nAnzahl der Haarfollikel pro Quadratzentimeter, ihre Aktivität.\nDurchschnittlicher Haardurchmesser, Vorhandensein von dünner werdendem Haar.\nAnzeichen für verschiedene Arten von Alopezie (Haarausfall).\nZustand des Haarschafts über seine gesamte Länge."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Коли потрібно звернутися до трихолога?",
          ru: "Когда нужно обратиться к трихологу?",
          en: "When Should You See a Trichologist?",
          de: "Wann sollten Sie einen Trichologen aufsuchen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не відкладайте візит, якщо ви помітили: посилене випадіння волосся, порідіння, появу лупи, свербіж та почервоніння шкіри голови, погіршення якості волосся (ламкість, тьмяність). Чим раніше буде встановлена причина, тим ефективнішим буде лікування.",
          ru: "Не откладывайте визит, если вы заметили: усиленное выпадение волос, поредение, появление перхоти, зуд и покраснение кожи головы, ухудшение качества волос (ломкость, тусклость). Чем раньше будет установлена причина, тем эффективнее будет лечение.",
          en: "Do not delay your visit if you notice: increased hair loss, thinning, dandruff, itching and redness of the scalp, or a deterioration in hair quality (brittleness, dullness). The sooner the cause is identified, the more effective the treatment will be.",
          de: "Zögern Sie Ihren Besuch nicht hinaus, wenn Sie Folgendes bemerken: vermehrten Haarausfall, dünner werdendes Haar, Schuppen, Juckreiz und Rötung der Kopfhaut oder eine Verschlechterung der Haarqualität (Brüchigkeit, Mattheit). Je früher die Ursache festgestellt wird, desto wirksamer ist die Behandlung."
        }
      }
    ],
    faqs: ["faq_trichoscopy_1", "faq_trichoscopy_2"],
    doctors: ["doctor_trichologist_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice28", // НОВАЯ ПОДУСЛУГА
    serviceId: "service7", // Привязка к основной услуге "Трихология"
    title: {
      uk: "Лікування себореї (себорейного дерматиту)",
      ru: "Лечение себореи (себорейного дерматита)",
      en: "Treatment of Seborrhea (Seborrheic Dermatitis)",
      de: "Behandlung von Seborrhoe (Seborrhoische Dermatitis)"
    },
    slug: "lechenie-seborei",
    mainImage: "https://24tricholog.ru/wp-content/uploads/2019/05/seborejnyj-dermatit-600x600.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лікування себореї: відновлення здоров'я та комфорту шкіри голови",
          ru: "Лечение себореи: восстановление здоровья и комфорта кожи головы",
          en: "Seborrhea Treatment: Restoring Health and Comfort to Your Scalp",
          de: "Behandlung von Seborrhoe: Wiederherstellung von Gesundheit und Komfort für Ihre Kopfhaut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Себорейний дерматит (себорея) — це хронічне запальне захворювання шкіри, пов'язане з порушенням роботи сальних залоз та активністю дріжджоподібного грибка Malassezia. Проявляється лущенням (лупою), свербежем, почервонінням та подразненням шкіри голови. Без правильного лікування себорея може призводити до посиленого випадіння волосся та значного дискомфорту. Наш підхід полягає в комплексній терапії, спрямованій на усунення симптомів та нормалізацію стану шкіри.",
          ru: "Себорейный дерматит (себорея) — это хроническое воспалительное заболевание кожи, связанное с нарушением работы сальных желез и активностью дрожжеподобного грибка Malassezia. Проявляется шелушением (перхотью), зудом, покраснением и раздражением кожи головы. Без правильного лечения себорея может приводить к усиленному выпадению волос и значительному дискомфорту. Наш подход заключается в комплексной терапии, направленной на устранение симптомов и нормализацию состояния кожи.",
          en: "Seborrheic dermatitis (seborrhea) is a chronic inflammatory skin condition associated with malfunctioning sebaceous glands and the activity of the Malassezia yeast-like fungus. It manifests as flaking (dandruff), itching, redness, and scalp irritation. Without proper treatment, seborrhea can lead to increased hair loss and significant discomfort. Our approach involves comprehensive therapy aimed at eliminating symptoms and normalizing the skin's condition.",
          de: "Seborrhoische Dermatitis (Seborrhoe) ist eine chronisch entzündliche Hauterkrankung, die mit einer Fehlfunktion der Talgdrüsen und der Aktivität des hefeartigen Pilzes Malassezia zusammenhängt. Sie äußert sich durch Schuppung (Schuppen), Juckreiz, Rötung und Reizung der Kopfhaut. Ohne angemessene Behandlung kann Seborrhoe zu vermehrtem Haarausfall und erheblichem Unbehagen führen. Unser Ansatz besteht in einer umfassenden Therapie, die darauf abzielt, die Symptome zu beseitigen und den Zustand der Haut zu normalisieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Види себореї",
          ru: "Виды себореи",
          en: "Types of Seborrhea",
          de: "Arten von Seborrhoe"
        }
      },
      {
        type: "list",
        content: {
          uk: "Жирна себорея: характеризується надмірною жирністю шкіри голови, волосся швидко брудниться, лусочки лупи жовтуваті та липкі.\nСуха себорея: шкіра голови суха, стягнута, лупа дрібна, біла, легко обсипається.\nЗмішаний тип: поєднання жирної себореї на шкірі голови та сухої на обличчі.",
          ru: "Жирная себорея: характеризуется избыточной жирностью кожи головы, волосы быстро пачкаются, чешуйки перхоти желтоватые и липкие.\nСухая себорея: кожа головы сухая, стянутая, перхоть мелкая, белая, легко осыпается.\nСмешанный тип: сочетание жирной себореи на коже головы и сухой на лице.",
          en: "Oily Seborrhea: characterized by excessive oiliness of the scalp, hair gets dirty quickly, dandruff flakes are yellowish and sticky.\nDry Seborrhea: the scalp is dry and tight, dandruff is fine, white, and flakes off easily.\nMixed Type: a combination of oily seborrhea on the scalp and dry on the face.",
          de: "Fettige Seborrhoe: gekennzeichnet durch übermäßige Fettigkeit der Kopfhaut, Haare werden schnell schmutzig, Schuppen sind gelblich und klebrig.\nTrockene Seborrhoe: die Kopfhaut ist trocken und gespannt, die Schuppen sind fein, weiß und lösen sich leicht.\nMischtyp: eine Kombination aus fettiger Seborrhoe auf der Kopfhaut und trockener im Gesicht."
        }
      },
      {
        type: "image",
        content: { image: "https://c-clinica.com/upload/images/trikhologiya/seborejnyj-dermatit.jpg" },
        sideText: {
          uk: "Точне визначення типу себореї за допомогою трихоскопії є ключовим для підбору правильної схеми лікування.",
          ru: "Точное определение типа себореи с помощью трихоскопии является ключом к подбору правильной схемы лечения.",
          en: "Accurately determining the type of seborrhea using trichoscopy is key to selecting the right treatment plan.",
          de: "Die genaue Bestimmung des Seborrhoe-Typs mittels Trichoskopie ist der Schlüssel zur Auswahl des richtigen Behandlungsplans."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Наш підхід до лікування",
          ru: "Наш подход к лечению",
          en: "Our Approach to Treatment",
          de: "Unser Behandlungsansatz"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікування себореї завжди комплексне. Воно включає як професійні процедури в кабінеті трихолога, так і ретельно підібраний домашній догляд та рекомендації щодо способу життя.",
          ru: "Лечение себореи всегда комплексное. Оно включает как профессиональные процедуры в кабинете трихолога, так и тщательно подобранный домашний уход и рекомендации по образу жизни.",
          en: "The treatment for seborrhea is always comprehensive. It includes both professional procedures in the trichologist's office and carefully selected home care and lifestyle recommendations.",
          de: "Die Behandlung von Seborrhoe ist immer umfassend. Sie umfasst sowohl professionelle Verfahren in der Praxis des Trichologen als auch sorgfältig ausgewählte Heimpflege- und Lebensstilempfehlungen."
        }
      },
      {
        type: "list",
        content: {
          uk: "Професійний догляд: спеціальні лікувальні пілінги для шкіри голови, кріомасаж, мезотерапія для нормалізації роботи сальних залоз.\nМедикаментозна терапія: призначення протигрибкових, протизапальних та себорегулюючих шампунів, лосьйонів та масок.\nРекомендації з харчування: корекція дієти для зменшення запальних процесів в організмі.\nПідбір домашнього догляду: вибір правильних засобів, які не будуть провокувати загострення.",
          ru: "Профессиональный уход: специальные лечебные пилинги для кожи головы, криомассаж, мезотерапия для нормализации работы сальных желез.\nМедикаментозная терапия: назначение противогрибковых, противовоспалительных и себорегулирующих шампуней, лосьонов и масок.\nРекомендации по питанию: коррекция диеты для уменьшения воспалительных процессов в организме.\nПодбор домашнего ухода: выбор правильных средств, которые не будут провоцировать обострение.",
          en: "Professional care: special therapeutic scalp peels, cryomassage, mesotherapy to normalize sebaceous gland function.\nMedication therapy: prescription of antifungal, anti-inflammatory, and sebum-regulating shampoos, lotions, and masks.\nNutritional recommendations: dietary adjustments to reduce inflammatory processes in the body.\nHome care selection: choosing the right products that will not provoke flare-ups.",
          de: "Professionelle Pflege: spezielle therapeutische Kopfhautpeelings, Kryomassage, Mesotherapie zur Normalisierung der Talgdrüsenfunktion.\nMedikamentöse Therapie: Verschreibung von antimykotischen, entzündungshemmenden und talgregulierenden Shampoos, Lotionen und Masken.\nErnährungsempfehlungen: Anpassung der Ernährung zur Reduzierung von Entzündungsprozessen im Körper.\nAuswahl der Heimpflege: Auswahl der richtigen Produkte, die keine Schübe provozieren."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Самолікування себореї часто призводить до погіршення стану. Неправильно підібрані засоби можуть пересушити шкіру або, навпаки, посилити вироблення себуму. Зверніться до нашого трихолога, щоб отримати ефективний та безпечний план лікування.",
          ru: "Самолечение себореи часто приводит к ухудшению состояния. Неправильно подобранные средства могут пересушить кожу или, наоборот, усилить выработку себума. Обратитесь к нашему трихологу, чтобы получить эффективный и безопасный план лечения.",
          en: "Self-treatment of seborrhea often leads to a worsening of the condition. Improperly chosen products can over-dry the skin or, conversely, increase sebum production. Contact our trichologist to get an effective and safe treatment plan.",
          de: "Die Selbstbehandlung von Seborrhoe führt oft zu einer Verschlechterung des Zustands. Falsch ausgewählte Produkte können die Haut austrocknen oder im Gegenteil die Talgproduktion erhöhen. Wenden Sie sich an unseren Trichologen, um einen wirksamen und sicheren Behandlungsplan zu erhalten."
        }
      }
    ],
    faqs: ["faq_seborrhea_1", "faq_seborrhea_2"],
    doctors: ["doctor_trichologist_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice29", // НОВАЯ ПОДУСЛУГА
    serviceId: "service7", // Привязка к основной услуге "Трихология"
    title: {
      uk: "Терапія випадіння волосся (алопеції)",
      ru: "Терапия выпадения волос (алопеции)",
      en: "Hair Loss (Alopecia) Therapy",
      de: "Behandlung von Haarausfall (Alopezie)"
    },
    slug: "terapiya-vypadinnya-volossya",
    mainImage: "https://rth.ru/wp-content/uploads/2022/08/ochagovaya-alopetsiya-u-muzhchin.png",
    content: [
      {
        type: "heading",
        content: {
          uk: "Терапія випадіння волосся: зупинити втрату, відновити густоту",
          ru: "Терапия выпадения волос: остановить потерю, восстановить густоту",
          en: "Hair Loss Therapy: Stop the Loss, Restore the Density",
          de: "Behandlung von Haarausfall: Den Verlust stoppen, die Dichte wiederherstellen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Випадіння волосся (алопеція) — це серйозна проблема, яка може бути викликана безліччю причин: від генетичної схильності та гормональних збоїв до стресу та дефіциту вітамінів. Успішне лікування алопеції можливе лише за умови точної діагностики та комплексного, індивідуально підібраного підходу. Наш лікар-трихолог проведе ретельне обстеження, включаючи трихоскопію, щоб встановити причину випадіння та розробити ефективну стратегію лікування.",
          ru: "Выпадение волос (алопеция) — это серьезная проблема, которая может быть вызвана множеством причин: от генетической предрасположенности и гормональных сбоев до стресса и дефицита витаминов. Успешное лечение алопеции возможно только при условии точной диагностики и комплексного, индивидуально подобранного подхода. Наш врач-трихолог проведет тщательное обследование, включая трихоскопию, чтобы установить причину выпадения и разработать эффективную стратегию лечения.",
          en: "Hair loss (alopecia) is a serious problem that can be caused by many reasons: from genetic predisposition and hormonal imbalances to stress and vitamin deficiencies. Successful treatment of alopecia is possible only with an accurate diagnosis and a comprehensive, individually selected approach. Our trichologist will conduct a thorough examination, including trichoscopy, to determine the cause of hair loss and develop an effective treatment strategy.",
          de: "Haarausfall (Alopezie) ist ein ernstes Problem, das durch viele Gründe verursacht werden kann: von genetischer Veranlagung und hormonellen Ungleichgewichten bis hin zu Stress und Vitaminmangel. Eine erfolgreiche Behandlung von Alopezie ist nur mit einer genauen Diagnose und einem umfassenden, individuell ausgewählten Ansatz möglich. Unser Trichologe wird eine gründliche Untersuchung, einschließlich Trichoskopie, durchführen, um die Ursache des Haarausfalls zu bestimmen und eine wirksame Behandlungsstrategie zu entwickeln."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні види випадіння волосся, з якими ми працюємо",
          ru: "Основные виды выпадения волос, с которыми мы работаем",
          en: "Main Types of Hair Loss We Work With",
          de: "Haupttypen von Haarausfall, mit denen wir arbeiten"
        }
      },
      {
        type: "list",
        content: {
          uk: "Андрогенетична алопеція (АГА): найпоширеніший тип, пов'язаний з генетикою та чутливістю фолікулів до андрогенів.\nДифузна алопеція: рівномірне порідіння волосся по всій голові, часто викликане стресом, хворобами, дефіцитами.\nВогнищева (гніздова) алопеція: аутоімунне захворювання, що призводить до появи круглих вогнищ облисіння.\nСеборейна алопеція: випадіння на тлі жирної себореї.",
          ru: "Андрогенетическая алопеция (АГА): самый распространенный тип, связанный с генетикой и чувствительностью фолликулов к андрогенам.\nДиффузная алопеция: равномерное поредение волос по всей голове, часто вызванное стрессом, болезнями, дефицитами.\nОчаговая (гнездная) алопеция: аутоиммунное заболевание, приводящее к появлению круглых очагов облысения.\nСеборейная алопеция: выпадение на фоне жирной себореи.",
          en: "Androgenetic alopecia (AGA): the most common type, related to genetics and follicle sensitivity to androgens.\nDiffuse alopecia: uniform hair thinning all over the head, often caused by stress, illness, or deficiencies.\nAlopecia areata: an autoimmune disease leading to round patches of baldness.\nSeborrheic alopecia: hair loss against the background of oily seborrhea.",
          de: "Androgenetische Alopezie (AGA): der häufigste Typ, der mit Genetik und Follikelempfindlichkeit gegenüber Androgenen zusammenhängt.\nDiffuse Alopezie: gleichmäßige Ausdünnung des Haares über den ganzen Kopf, oft verursacht durch Stress, Krankheiten oder Mangelerscheinungen.\nAlopecia areata: eine Autoimmunerkrankung, die zu runden kahlen Stellen führt.\nSeborrhoische Alopezie: Haarausfall vor dem Hintergrund fettiger Seborrhoe."
        }
      },
      {
        type: "image",
        content: { image: "https://besthairspb.ru/wp-content/uploads/2024/04/triholog15.jpg" },
        sideText: {
          uk: "Своєчасне звернення до лікаря дозволяє зупинити процес на ранніх стадіях та максимально відновити втрачене волосся.",
          ru: "Своевременное обращение к врачу позволяет остановить процесс на ранних стадиях и максимально восстановить утерянные волосы.",
          en: "Timely consultation with a doctor can stop the process in its early stages and maximize the recovery of lost hair.",
          de: "Eine rechtzeitige Konsultation bei einem Arzt kann den Prozess in seinen frühen Stadien stoppen und die Wiederherstellung verlorener Haare maximieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Сучасні методи лікування в нашій клініці",
          ru: "Современные методы лечения в нашей клинике",
          en: "Modern Treatment Methods in Our Clinic",
          de: "Moderne Behandlungsmethoden in unserer Klinik"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ми розробляємо індивідуальну програму, яка може включати:",
          ru: "Мы разрабатываем индивидуальную программу, которая может включать:",
          en: "We develop an individual program that may include:",
          de: "Wir entwickeln ein individuelles Programm, das Folgendes umfassen kann:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Мезотерапія шкіри голови: ін'єкційне введення спеціальних «коктейлів» з вітамінів, мікроелементів, амінокислот та факторів росту безпосередньо до волосяних фолікулів.\nПлазмотерапія (PRP): ін'єкції власної плазми пацієнта, збагаченої тромбоцитами, що потужно стимулює ріст волосся.\nПрофесійні доглядові процедури: лікувальні пілінги та маски, що покращують стан шкіри голови.\nМедикаментозна терапія: призначення зовнішніх стимуляторів росту (міноксидил) та, за потреби, внутрішніх препаратів.\nПідбір домашнього догляду: спеціалізовані шампуні, лосьйони та сироватки для підтримки результату.",
          ru: "Мезотерапия кожи головы: инъекционное введение специальных «коктейлей» из витаминов, микроэлементов, аминокислот и факторов роста непосредственно к волосяным фолликулам.\nПлазмотерапия (PRP): инъекции собственной плазмы пациента, обогащенной тромбоцитами, что мощно стимулирует рост волос.\nПрофессиональные уходовые процедуры: лечебные пилинги и маски, улучшающие состояние кожи головы.\nМедикаментозная терапия: назначение наружных стимуляторов роста (миноксидил) и, при необходимости, внутренних препаратов.\nПодбор домашнего ухода: специализированные шампуни, лосьоны и сыворотки для поддержания результата.",
          en: "Scalp mesotherapy: injections of special \"cocktails\" of vitamins, microelements, amino acids, and growth factors directly to the hair follicles.\nPlasma therapy (PRP): injections of the patient's own platelet-rich plasma, which powerfully stimulates hair growth.\nProfessional care procedures: therapeutic peels and masks that improve the scalp's condition.\nMedication therapy: prescription of external growth stimulants (minoxidil) and, if necessary, internal medications.\nHome care selection: specialized shampoos, lotions, and serums to maintain the result.",
          de: "Kopfhaut-Mesotherapie: Injektionen spezieller „Cocktails“ aus Vitaminen, Spurenelementen, Aminosäuren und Wachstumsfaktoren direkt in die Haarfollikel.\nPlasmatherapie (PRP): Injektionen des patienteneigenen plättchenreichen Plasmas, das das Haarwachstum stark stimuliert.\nProfessionelle Pflegeverfahren: therapeutische Peelings und Masken, die den Zustand der Kopfhaut verbessern.\nMedikamentöse Therapie: Verschreibung von externen Wachstumsstimulanzien (Minoxidil) und bei Bedarf internen Medikamenten.\nAuswahl der Heimpflege: spezialisierte Shampoos, Lotionen und Seren zur Erhaltung des Ergebnisses."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Не займайтеся самолікуванням. Народні засоби та розрекламовані шампуні не можуть вплинути на серйозні причини випадіння. Тільки лікар може поставити правильний діагноз та призначити лікування, яке дійсно допоможе.",
          ru: "Не занимайтесь самолечением. Народные средства и разрекламированные шампуни не могут повлиять на серьезные причины выпадения. Только врач может поставить правильный диагноз и назначить лечение, которое действительно поможет.",
          en: "Do not self-medicate. Folk remedies and advertised shampoos cannot address the serious causes of hair loss. Only a doctor can make a correct diagnosis and prescribe treatment that will actually help.",
          de: "Behandeln Sie sich nicht selbst. Volksheilmittel und beworbene Shampoos können die ernsten Ursachen von Haarausfall nicht bekämpfen. Nur ein Arzt kann eine korrekte Diagnose stellen und eine Behandlung verschreiben, die wirklich hilft."
        }
      }
    ],
    faqs: ["faq_hair_loss_1", "faq_hair_loss_2", "faq_hair_loss_3"],
    doctors: ["doctor_trichologist_1", "doctor_dermatologist_1"]
  },


  {
    id: "subservice30", // НОВАЯ ПОДУСЛУГА
    serviceId: "service7", // Привязка к основной услуге "Трихология"
    title: {
      uk: "Мезотерапія шкіри голови",
      ru: "Мезотерапия кожи головы",
      en: "Scalp Mesotherapy",
      de: "Mesotherapie für die Kopfhaut"
    },
    slug: "mezoterapiya-shkiry-holovy",
    mainImage: "https://cosmetomed.ru/storage/images/pages/volos2.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія: адресна доставка вітамінів для вашого волосся",
          ru: "Мезотерапия: адресная доставка витаминов для ваших волос",
          en: "Mesotherapy: Targeted Vitamin Delivery for Your Hair",
          de: "Mesotherapie: Gezielte Vitaminzufuhr für Ihr Haar"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія шкіри голови — це ін'єкційна методика, що полягає у введенні біологічно активних речовин безпосередньо в середні шари шкіри (дерму), де знаходяться волосяні фолікули. Цей метод дозволяє доставити необхідні вітаміни, мікроелементи, амінокислоти та фактори росту прямо до «коренів» волосся, забезпечуючи максимальне засвоєння та швидкий ефект, якого неможливо досягти за допомогою шампунів чи масок.",
          ru: "Мезотерапия кожи головы — это инъекционная методика, заключающаяся во введении биологически активных веществ непосредственно в средние слои кожи (дерму), где находятся волосяные фолликулы. Этот метод позволяет доставить необходимые витамины, микроэлементы, аминокислоты и факторы роста прямо к «корням» волос, обеспечивая максимальное усвоение и быстрый эффект, которого невозможно достичь с помощью шампуней или масок.",
          en: "Scalp mesotherapy is an injection technique that involves introducing biologically active substances directly into the middle layers of the skin (dermis), where the hair follicles are located. This method allows for the delivery of necessary vitamins, microelements, amino acids, and growth factors directly to the hair roots, ensuring maximum absorption and a rapid effect that cannot be achieved with shampoos or masks.",
          de: "Die Mesotherapie für die Kopfhaut ist eine Injektionstechnik, bei der biologisch aktive Substanzen direkt in die mittleren Hautschichten (Dermis) eingebracht werden, wo sich die Haarfollikel befinden. Diese Methode ermöglicht die Zufuhr von notwendigen Vitaminen, Spurenelementen, Aminosäuren und Wachstumsfaktoren direkt zu den Haarwurzeln, was eine maximale Aufnahme und eine schnelle Wirkung gewährleistet, die mit Shampoos oder Masken nicht erreicht werden kann."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Склад лікувальних «коктейлів»",
          ru: "Состав лечебных «коктейлей»",
          en: "Composition of Therapeutic \"Cocktails\"",
          de: "Zusammensetzung der therapeutischen „Cocktails“"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар-трихолог індивідуально підбирає склад препарату в залежності від проблеми, яку необхідно вирішити. Коктейлі можуть містити:",
          ru: "Врач-трихолог индивидуально подбирает состав препарата в зависимости от проблемы, которую необходимо решить. Коктейли могут содержать:",
          en: "The trichologist individually selects the composition of the preparation depending on the problem to be solved. The cocktails may contain:",
          de: "Der Trichologe wählt die Zusammensetzung des Präparats individuell je nach zu lösendem Problem aus. Die Cocktails können enthalten:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Вітаміни групи B: нормалізують обмін речовин у фолікулах.\nЦинк, селен, мідь: мікроелементи, необхідні для росту здорового волосся.\nАмінокислоти: «будівельний матеріал» для кератину.\nГіалуронова кислота: зволожує шкіру голови.\nФактори росту та пептиди: стимулюють активність фолікулів та ріст нового волосся.",
          ru: "Витамины группы B: нормализуют обмен веществ в фолликулах.\nЦинк, селен, медь: микроэлементы, необходимые для роста здоровых волос.\nАминокислоты: «строительный материал» для кератина.\nГиалуроновая кислота: увлажняет кожу головы.\nФакторы роста и пептиды: стимулируют активность фолликулов и рост новых волос.",
          en: "B-group vitamins: normalize metabolism in the follicles.\nZinc, selenium, copper: microelements necessary for healthy hair growth.\nAmino acids: the \"building blocks\" for keratin.\nHyaluronic acid: moisturizes the scalp.\nGrowth factors and peptides: stimulate follicle activity and the growth of new hair.",
          de: "B-Vitamine: normalisieren den Stoffwechsel in den Follikeln.\nZink, Selen, Kupfer: Spurenelemente, die für gesundes Haarwachstum notwendig sind.\nAminosäuren: die „Bausteine“ für Keratin.\nHyaluronsäure: spendet der Kopfhaut Feuchtigkeit.\nWachstumsfaktoren und Peptide: stimulieren die Follikelaktivität und das Wachstum neuer Haare."
        }
      },
      {
        type: "image",
        content: { image: "https://besthairspb.ru/wp-content/uploads/2024/03/triholog18.jpg" },
        sideText: {
          uk: "Ін'єкції проводяться дуже тонкою голкою на невелику глибину, що робить процедуру максимально комфортною.",
          ru: "Инъекции проводятся очень тонкой иглой на небольшую глубину, что делает процедуру максимально комфортной.",
          en: "Injections are made with a very fine needle at a shallow depth, making the procedure as comfortable as possible.",
          de: "Die Injektionen werden mit einer sehr feinen Nadel in geringer Tiefe durchgeführt, was das Verfahren so angenehm wie möglich macht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до мезотерапії шкіри голови",
          ru: "Показания к мезотерапии кожи головы",
          en: "Indications for Scalp Mesotherapy",
          de: "Indikationen für die Mesotherapie der Kopfhaut"
        }
      },
      {
        type: "list",
        content: {
          uk: "Дифузне та андрогенетичне випадіння волосся.\nУповільнення росту волосся.\nПогіршення якості волосся (тонкість, ламкість, сухість).\nСеборея та лупа (в комплексній терапії).\nВідновлення волосся після стресу, хвороб, вагітності.",
          ru: "Диффузное и андрогенетическое выпадение волос.\nЗамедление роста волос.\nУхудшение качества волос (истончение, ломкость, сухость).\nСеборея и перхоть (в комплексной терапии).\nВосстановление волос после стресса, болезней, беременности.",
          en: "Diffuse and androgenetic hair loss.\nSlow hair growth.\nDeterioration of hair quality (thinning, brittleness, dryness).\nSeborrhea and dandruff (in complex therapy).\nHair restoration after stress, illness, or pregnancy.",
          de: "Diffuser und androgener Haarausfall.\nLangsames Haarwachstum.\nVerschlechterung der Haarqualität (Dünnerwerden, Brüchigkeit, Trockenheit).\nSeborrhoe und Schuppen (in der komplexen Therapie).\nWiederherstellung der Haare nach Stress, Krankheit oder Schwangerschaft."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та курс процедур",
          ru: "Результат и курс процедур",
          en: "Results and Course of Procedures",
          de: "Ergebnisse und Behandlungsverlauf"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перші результати — зменшення випадіння — помітні вже після 2-3 процедур. Стимуляція росту нового волосся потребує більше часу. Для досягнення стійкого ефекту мезотерапія проводиться курсом, що складається з 6-10 сеансів з інтервалом 7-14 днів. Після курсу ваше волосся стане густішим, міцнішим та здоровішим.",
          ru: "Первые результаты — уменьшение выпадения — заметны уже после 2-3 процедур. Стимуляция роста новых волос требует больше времени. Для достижения стойкого эффекта мезотерапия проводится курсом, состоящим из 6-10 сеансов с интервалом 7-14 дней. После курса ваши волосы станут гуще, крепче и здоровее.",
          en: "The first results - a reduction in hair loss - are noticeable after 2-3 procedures. Stimulating the growth of new hair takes more time. To achieve a stable effect, mesotherapy is carried out in a course of 6-10 sessions with an interval of 7-14 days. After the course, your hair will become thicker, stronger, and healthier.",
          de: "Die ersten Ergebnisse - eine Verringerung des Haarausfalls - sind nach 2-3 Behandlungen spürbar. Die Stimulierung des Wachstums neuer Haare dauert länger. Um eine stabile Wirkung zu erzielen, wird die Mesotherapie in einem Kurs von 6-10 Sitzungen im Abstand von 7-14 Tagen durchgeführt. Nach dem Kurs wird Ihr Haar dicker, stärker und gesünder."
        }
      }
    ],
    faqs: ["faq_meso_hair_1", "faq_meso_hair_2"],
    doctors: ["doctor_trichologist_1", "doctor_cosmetologist_injector_1"]
  },

  {
    id: "subservice31", // НОВАЯ ПОДУСЛУГА
    serviceId: "service8", // Привязка к новой основной услуге "Мезотерапия"
    title: {
      uk: "Мезотерапія обличчя",
      ru: "Мезотерапия лица",
      en: "Facial Mesotherapy",
      de: "Gesichtsmesotherapie"
    },
    slug: "mezoterapiya-oblychchya",
    mainImage: "https://www.sakyra.su/images/kosmetologiya/Mezoterapiya-litsa-0.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія обличчя: вітамінний коктейль для вашої шкіри",
          ru: "Мезотерапия лица: витаминный коктейль для вашей кожи",
          en: "Facial Mesotherapy: A Vitamin Cocktail for Your Skin",
          de: "Gesichtsmesotherapie: Ein Vitamincocktail für Ihre Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія обличчя — це процедура, яка допомагає глибоко зволожити, наситити поживними речовинами та омолодити шкіру зсередини. За допомогою серії поверхневих мікроін'єкцій лікар вводить індивідуально підібраний «коктейль» з гіалуронової кислоти, вітамінів, антиоксидантів та амінокислот. Процедура стимулює клітинне оновлення, покращує кровообіг та надає шкірі здорового, сяючого вигляду.",
          ru: "Мезотерапия лица — это процедура, которая помогает глубоко увлажнить, напитать и омолодить кожу изнутри. С помощью серии поверхностных микроинъекций врач вводит индивидуально подобранный «коктейль» из гиалуроновой кислоты, витаминов, антиоксидантов и аминокислот. Процедура стимулирует клеточное обновление, улучшает кровообращение и придает коже здоровый, сияющий вид.",
          en: "Facial mesotherapy is a procedure that helps to deeply moisturize, nourish, and rejuvenate the skin from within. Through a series of superficial microinjections, a doctor administers an individually selected \"cocktail\" of hyaluronic acid, vitamins, antioxidants, and amino acids. The procedure stimulates cellular renewal, improves blood circulation, and gives the skin a healthy, radiant appearance.",
          de: "Die Gesichtsmesotherapie ist ein Verfahren, das hilft, die Haut von innen tief mit Feuchtigkeit zu versorgen, zu nähren und zu verjüngen. Durch eine Reihe von oberflächlichen Mikroinjektionen verabreicht ein Arzt einen individuell ausgewählten „Cocktail“ aus Hyaluronsäure, Vitaminen, Antioxidantien und Aminosäuren. Das Verfahren stimuliert die Zellerneuerung, verbessert die Durchblutung und verleiht der Haut ein gesundes, strahlendes Aussehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ефект «мезосяйва» та інші переваги",
          ru: "Эффект «мезосияния» и другие преимущества",
          en: "The \"Meso-Glow\" Effect and Other Benefits",
          de: "Der „Meso-Glow“-Effekt und weitere Vorteile"
        }
      },
      {
        type: "list",
        content: {
          uk: "Глибоке зволоження: усунення сухості та стягнутості.\nПокращення кольору обличчя: шкіра набуває здорового, рівного тону.\nПідвищення тонусу та еластичності: стимуляція вироблення колагену.\nПрофілактика старіння: боротьба з вільними радикалами.\nЗменшення дрібних зморшок.\nЛікування куперозу та укріплення стінок судин.",
          ru: "Глубокое увлажнение: устранение сухости и стянутости.\nУлучшение цвета лица: кожа приобретает здоровый, ровный тон.\nПовышение тонуса и эластичности: стимуляция выработки коллагена.\nПрофилактика старения: борьба со свободными радикалами.\nУменьшение мелких морщин.\nЛечение купероза и укрепление стенок сосудов.",
          en: "Deep hydration: elimination of dryness and tightness.\nImproved complexion: the skin acquires a healthy, even tone.\nIncreased tone and elasticity: stimulation of collagen production.\nAnti-aging prevention: combating free radicals.\nReduction of fine wrinkles.\nTreatment of rosacea and strengthening of blood vessel walls.",
          de: "Tiefe Hydratation: Beseitigung von Trockenheit und Spannungsgefühlen.\nVerbesserter Teint: Die Haut erhält einen gesunden, ebenmäßigen Ton.\nErhöhter Tonus und Elastizität: Stimulierung der Kollagenproduktion.\nAnti-Aging-Prävention: Bekämpfung freier Radikale.\nReduzierung feiner Fältchen.\nBehandlung von Couperose und Stärkung der Blutgefäßwände."
        }
      },
      {
        type: "image",
        content: { image: "https://bellevie-cln.ru/wp-content/uploads/2024/09/ntgdycaaa-2-scaled-1.webp" },
        sideText: {
          uk: "Мезотерапія — це ідеальна процедура для підготовки шкіри до важливих подій, оскільки вона дає швидкий ефект свіжості та сяйва.",
          ru: "Мезотерапия — это идеальная процедура для подготовки кожи к важным событиям, так как она дает быстрый эффект свежести и сияния.",
          en: "Mesotherapy is an ideal procedure for preparing the skin for important events, as it provides a quick effect of freshness and radiance.",
          de: "Die Mesotherapie ist ein ideales Verfahren zur Vorbereitung der Haut auf wichtige Ereignisse, da sie einen schnellen Effekt von Frische und Ausstrahlung bietet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie läuft die Behandlung ab?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар очищує шкіру та наносить анестезуючий крем. Потім за допомогою дуже тонкої голки виконується серія неглибоких ін'єкцій по всій поверхні обличчя, шиї та декольте. Техніка введення (папульна, наппаж) обирається індивідуально. Сеанс триває 30-40 хвилин. Після процедури залишаються невеликі папули (горбки), які розсмоктуються протягом 1-2 днів.",
          ru: "Врач очищает кожу и наносит анестезирующий крем. Затем с помощью очень тонкой иглы выполняется серия неглубоких инъекций по всей поверхности лица, шеи и декольте. Техника введения (папульная, наппаж) выбирается индивидуально. Сеанс длится 30-40 минут. После процедуры остаются небольшие папулы (бугорки), которые рассасываются в течение 1-2 дней.",
          en: "The doctor cleanses the skin and applies an anesthetic cream. Then, using a very fine needle, a series of shallow injections are performed over the entire surface of the face, neck, and décolleté. The injection technique (papular, nappage) is chosen individually. The session lasts 30-40 minutes. After the procedure, small papules (bumps) remain, which are absorbed within 1-2 days.",
          de: "Der Arzt reinigt die Haut und trägt eine Betäubungscreme auf. Anschließend wird mit einer sehr feinen Nadel eine Reihe von oberflächlichen Injektionen über die gesamte Oberfläche von Gesicht, Hals und Dekolleté durchgeführt. Die Injektionstechnik (papulös, Nappage) wird individuell ausgewählt. Die Sitzung dauert 30-40 Minuten. Nach dem Eingriff bleiben kleine Papeln (Beulen) zurück, die sich innerhalb von 1-2 Tagen zurückbilden."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс для стійкого результату",
          ru: "Курс для стойкого результата",
          en: "Course for a Lasting Result",
          de: "Kurs für ein nachhaltiges Ergebnis"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія має накопичувальний ефект. Для досягнення максимального результату рекомендується пройти курс з 4-8 процедур з інтервалом 7-14 днів. Підтримуючі сеанси можна проводити раз на кілька місяців.",
          ru: "Мезотерапия имеет накопительный эффект. Для достижения максимального результата рекомендуется пройти курс из 4-8 процедур с интервалом 7-14 дней. Поддерживающие сеансы можно проводить раз в несколько месяцев.",
          en: "Mesotherapy has a cumulative effect. To achieve the maximum result, a course of 4-8 procedures with an interval of 7-14 days is recommended. Maintenance sessions can be held once every few months.",
          de: "Die Mesotherapie hat eine kumulative Wirkung. Um das maximale Ergebnis zu erzielen, wird ein Kurs von 4-8 Behandlungen im Abstand von 7-14 Tagen empfohlen. Erhaltungssitzungen können alle paar Monate stattfinden."
        }
      }
    ],
    faqs: ["faq_meso_face_1", "faq_meso_face_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_2"]
  },

  {
    id: "subservice32", // НОВАЯ ПОДУСЛУГА
    serviceId: "service8", // Привязка к основной услуге "Мезотерапия"
    title: {
      uk: "Мезотерапія тіла",
      ru: "Мезотерапия тела",
      en: "Body Mesotherapy",
      de: "Körpermesotherapie"
    },
    slug: "mezoterapiya-tila",
    mainImage: "https://www.linline-clinic.ru/sites/default/files/styles/max_2600x2600/public/images/services/2022-06/2f481f6b-1457-4ed4-ad5b-e4c68eab60b4_0.jpg?itok=YmFHFFAi",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія тіла: тонус шкіри та корекція локальних недоліків",
          ru: "Мезотерапия тела: тонус кожи и коррекция локальных недостатков",
          en: "Body Mesotherapy: Skin Tone and Correction of Local Imperfections",
          de: "Körpermesotherapie: Hauttonus und Korrektur lokaler Unvollkommenheiten"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія тіла — це ефективна ін'єкційна методика, що дозволяє вирішувати різноманітні естетичні проблеми шляхом введення спеціально підібраних препаратів у проблемні зони. Залежно від складу «коктейлю», процедура може бути спрямована на підвищення пружності шкіри, боротьбу з розтяжками або на зменшення локальних жирових відкладень. Це дозволяє покращити силует та якість шкіри без хірургічного втручання.",
          ru: "Мезотерапия тела — это эффективная инъекционная методика, позволяющая решать разнообразные эстетические проблемы путем введения специально подобранных препаратов в проблемные зоны. В зависимости от состава «коктейля», процедура может быть направлена на повышение упругости кожи, борьбу с растяжками или на уменьшение локальных жировых отложений. Это позволяет улучшить силуэт и качество кожи без хирургического вмешательства.",
          en: "Body mesotherapy is an effective injection technique that solves various aesthetic problems by introducing specially selected preparations into problem areas. Depending on the composition of the \"cocktail,\" the procedure can be aimed at increasing skin firmness, combating stretch marks, or reducing local fat deposits. This allows for improving the silhouette and skin quality without surgery.",
          de: "Die Körpermesotherapie ist eine wirksame Injektionstechnik, die verschiedene ästhetische Probleme durch die Einführung speziell ausgewählter Präparate in Problemzonen löst. Je nach Zusammensetzung des „Cocktails“ kann die Behandlung darauf abzielen, die Hautfestigkeit zu erhöhen, Dehnungsstreifen zu bekämpfen oder lokale Fettablagerungen zu reduzieren. Dies ermöglicht eine Verbesserung der Silhouette und der Hautqualität ohne Operation."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні напрямки мезотерапії тіла",
          ru: "Основные направления мезотерапии тела",
          en: "Main Areas of Body Mesotherapy",
          de: "Hauptbereiche der Körpermesotherapie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Відновлення пружності та еластичності шкіри: використовують коктейлі з ДМАЕ, органічним кремнієм, гіалуроновою кислотою та амінокислотами. Процедура ефективна для зон живота, внутрішньої поверхні стегон та рук.\nЛікування розтяжок (стрий): препарати, що стимулюють вироблення колагену, допомагають зробити розтяжки менш помітними.\nКорекція локальних жирових відкладень (ліполітична мезотерапія): введення спеціальних речовин (ліполітиків), які руйнують мембрани жирових клітин. Ідеально підходить для зон «галіфе», живота, боків.",
          ru: "Восстановление упругости и эластичности кожи: используют коктейли с ДМАЭ, органическим кремнием, гиалуроновой кислотой и аминокислотами. Процедура эффективна для зон живота, внутренней поверхности бедер и рук.\nЛечение растяжек (стрий): препараты, стимулирующие выработку коллагена, помогают сделать растяжки менее заметными.\nКоррекция локальных жировых отложений (липолитическая мезотерапия): введение специальных веществ (липолитиков), которые разрушают мембраны жировых клеток. Идеально подходит для зон «галифе», живота, боков.",
          en: "Restoring skin firmness and elasticity: cocktails with DMAE, organic silicon, hyaluronic acid, and amino acids are used. The procedure is effective for the abdomen, inner thighs, and arms.\nTreatment of stretch marks (striae): preparations that stimulate collagen production help make stretch marks less noticeable.\nCorrection of local fat deposits (lipolytic mesotherapy): introduction of special substances (lipolytics) that destroy the membranes of fat cells. Ideal for the \"saddlebags\" area, abdomen, and flanks.",
          de: "Wiederherstellung der Hautfestigkeit und -elastizität: Es werden Cocktails mit DMAE, organischem Silizium, Hyaluronsäure und Aminosäuren verwendet. Das Verfahren ist wirksam für den Bauch, die Innenseiten der Oberschenkel und die Arme.\nBehandlung von Dehnungsstreifen (Striae): Präparate, die die Kollagenproduktion anregen, helfen, Dehnungsstreifen weniger sichtbar zu machen.\nKorrektur lokaler Fettablagerungen (lipolytische Mesotherapie): Einführung spezieller Substanzen (Lipolytika), die die Membranen von Fettzellen zerstören. Ideal für den Bereich der „Reiterhosen“, den Bauch und die Flanken."
        }
      },
      {
        type: "image",
        content: { image: "https://medgel.ru/static/2/img/stomach_mesotherapy.png.pagespeed.ce.E9SuBb4GBD.png" },
        sideText: {
          uk: "Ліполітична мезотерапія — це не метод схуднення, а спосіб корекції локальних жирових «пасток», які не піддаються дієтам та спорту.",
          ru: "Липолитическая мезотерапия — это не метод похудения, а способ коррекции локальных жировых «ловушек», которые не поддаются диетам и спорту.",
          en: "Lipolytic mesotherapy is not a weight loss method, but a way to correct local fat \"traps\" that are resistant to diet and exercise.",
          de: "Die lipolytische Mesotherapie ist keine Methode zur Gewichtsabnahme, sondern eine Möglichkeit, lokale Fettpolster zu korrigieren, die gegen Diät und Sport resistent sind."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie läuft die Behandlung ab?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура схожа на мезотерапію обличчя. Лікар обробляє шкіру антисептиком та виконує серію ін'єкцій у проблемній зоні. Глибина введення та техніка залежать від цілей процедури. При ліполітичній мезотерапії препарат вводиться глибше, в підшкірно-жирову клітковину. Сеанс триває 30-50 хвилин. Після процедури можливі почервоніння, набряк та невеликі синці, які проходять самостійно.",
          ru: "Процедура схожа на мезотерапию лица. Врач обрабатывает кожу антисептиком и выполняет серию инъекций в проблемной зоне. Глубина введения и техника зависят от целей процедуры. При липолитической мезотерапии препарат вводится глубже, в подкожно-жировую клетчатку. Сеанс длится 30-50 минут. После процедуры возможны покраснение, отек и небольшие синяки, которые проходят самостоятельно.",
          en: "The procedure is similar to facial mesotherapy. The doctor treats the skin with an antiseptic and performs a series of injections in the problem area. The depth of injection and technique depend on the goals of the procedure. In lipolytic mesotherapy, the preparation is injected deeper, into the subcutaneous fat tissue. The session lasts 30-50 minutes. After the procedure, redness, swelling, and small bruises are possible, which resolve on their own.",
          de: "Das Verfahren ähnelt der Gesichtsmesotherapie. Der Arzt behandelt die Haut mit einem Antiseptikum und führt eine Reihe von Injektionen in der Problemzone durch. Die Tiefe der Injektion und die Technik hängen von den Zielen des Verfahrens ab. Bei der lipolytischen Mesotherapie wird das Präparat tiefer in das Unterhautfettgewebe injiziert. Die Sitzung dauert 30-50 Minuten. Nach dem Eingriff sind Rötungen, Schwellungen und kleine Blutergüsse möglich, die von selbst abklingen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungsverlauf"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення видимого та стійкого результату мезотерапія тіла завжди проводиться курсом. Залежно від проблеми, курс може складатися з 6-12 процедур з інтервалом 7-14 днів.",
          ru: "Для достижения видимого и стойкого результата мезотерапия тела всегда проводится курсом. В зависимости от проблемы, курс может состоять из 6-12 процедур с интервалом 7-14 дней.",
          en: "To achieve a visible and lasting result, body mesotherapy is always performed as a course. Depending on the problem, the course may consist of 6-12 procedures with an interval of 7-14 days.",
          de: "Um ein sichtbares und dauerhaftes Ergebnis zu erzielen, wird die Körpermesotherapie immer als Kur durchgeführt. Je nach Problem kann die Kur aus 6-12 Behandlungen im Abstand von 7-14 Tagen bestehen."
        }
      }
    ],
    faqs: ["faq_meso_body_1", "faq_meso_body_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_body_specialist_1"]
  },

  {
    id: "subservice33", // НОВАЯ ПОДУСЛУГА
    serviceId: "service8", // Привязка к основной услуге "Мезотерапия"
    title: {
      uk: "Мезотерапія волосистої частини голови",
      ru: "Мезотерапия волосистой части головы",
      en: "Mesotherapy for the Scalp",
      de: "Mesotherapie für die Kopfhaut"
    },
    slug: "mezoterapiya-volosystoyi-chastyny-holovy",
    mainImage: "https://laserhealth.com.ua/storage/NewFolder/hqdefault-e1570734607383.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія: адресна доставка вітамінів для вашого волосся",
          ru: "Мезотерапия: адресная доставка витаминов для ваших волос",
          en: "Mesotherapy: Targeted Vitamin Delivery for Your Hair",
          de: "Mesotherapie: Gezielte Vitaminzufuhr für Ihr Haar"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія шкіри голови — це ін'єкційна методика, що полягає у введенні біологічно активних речовин безпосередньо в середні шари шкіри (дерму), де знаходяться волосяні фолікули. Цей метод дозволяє доставити необхідні вітаміни, мікроелементи, амінокислоти та фактори росту прямо до «коренів» волосся, забезпечуючи максимальне засвоєння та швидкий ефект, якого неможливо досягти за допомогою шампунів чи масок.",
          ru: "Мезотерапия кожи головы — это инъекционная методика, заключающаяся во введении биологически активных веществ непосредственно в средние слои кожи (дерму), где находятся волосяные фолликулы. Этот метод позволяет доставить необходимые витамины, микроэлементы, аминокислоты и факторы роста прямо к «корням» волос, обеспечивая максимальное усвоение и быстрый эффект, которого невозможно достичь с помощью шампуней или масок.",
          en: "Scalp mesotherapy is an injection technique that involves introducing biologically active substances directly into the middle layers of the skin (dermis), where the hair follicles are located. This method allows for the delivery of necessary vitamins, microelements, amino acids, and growth factors directly to the hair roots, ensuring maximum absorption and a rapid effect that cannot be achieved with shampoos or masks.",
          de: "Die Mesotherapie für die Kopfhaut ist eine Injektionstechnik, bei der biologisch aktive Substanzen direkt in die mittleren Hautschichten (Dermis) eingebracht werden, wo sich die Haarfollikel befinden. Diese Methode ermöglicht die Zufuhr von notwendigen Vitaminen, Spurenelementen, Aminosäuren und Wachstumsfaktoren direkt zu den Haarwurzeln, was eine maximale Aufnahme und eine schnelle Wirkung gewährleistet, die mit Shampoos oder Masken nicht erreicht werden kann."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Склад лікувальних «коктейлів»",
          ru: "Состав лечебных «коктейлей»",
          en: "Composition of Therapeutic \"Cocktails\"",
          de: "Zusammensetzung der therapeutischen „Cocktails“"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар-трихолог індивідуально підбирає склад препарату в залежності від проблеми, яку необхідно вирішити. Коктейлі можуть містити:",
          ru: "Врач-трихолог индивидуально подбирает состав препарата в зависимости от проблемы, которую необходимо решить. Коктейли могут содержать:",
          en: "The trichologist individually selects the composition of the preparation depending on the problem to be solved. The cocktails may contain:",
          de: "Der Trichologe wählt die Zusammensetzung des Präparats individuell je nach zu lösendem Problem aus. Die Cocktails können enthalten:"
        }
      },
      {
        type: "list",
        content: {
          uk: "Вітаміни групи B: нормалізують обмін речовин у фолікулах.\nЦинк, селен, мідь: мікроелементи, необхідні для росту здорового волосся.\nАмінокислоти: «будівельний матеріал» для кератину.\nГіалуронова кислота: зволожує шкіру голови.\nФактори росту та пептиди: стимулюють активність фолікулів та ріст нового волосся.",
          ru: "Витамины группы B: нормализуют обмен веществ в фолликулах.\nЦинк, селен, медь: микроэлементы, необходимые для роста здоровых волос.\nАминокислоты: «строительный материал» для кератина.\nГиалуроновая кислота: увлажняет кожу головы.\nФакторы роста и пептиды: стимулируют активность фолликулов и рост новых волос.",
          en: "B-group vitamins: normalize metabolism in the follicles.\nZinc, selenium, copper: microelements necessary for healthy hair growth.\nAmino acids: the \"building blocks\" for keratin.\nHyaluronic acid: moisturizes the scalp.\nGrowth factors and peptides: stimulate follicle activity and the growth of new hair.",
          de: "B-Vitamine: normalisieren den Stoffwechsel in den Follikeln.\nZink, Selen, Kupfer: Spurenelemente, die für gesundes Haarwachstum notwendig sind.\nAminosäuren: die „Bausteine“ für Keratin.\nHyaluronsäure: spendet der Kopfhaut Feuchtigkeit.\nWachstumsfaktoren und Peptide: stimulieren die Follikelaktivität und das Wachstum neuer Haare."
        }
      },
      {
        type: "image",
        content: { image: "https://an-tech.ru/storage/procedure/Fraktsionnaya-mezoterapiya-2.jpeg" },
        sideText: {
          uk: "Ін'єкції проводяться дуже тонкою голкою на невелику глибину, що робить процедуру максимально комфортною.",
          ru: "Инъекции проводятся очень тонкой иглой на небольшую глубину, что делает процедуру максимально комфортной.",
          en: "Injections are made with a very fine needle at a shallow depth, making the procedure as comfortable as possible.",
          de: "Die Injektionen werden mit einer sehr feinen Nadel in geringer Tiefe durchgeführt, was das Verfahren so angenehm wie möglich macht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до мезотерапії шкіри голови",
          ru: "Показания к мезотерапии кожи головы",
          en: "Indications for Scalp Mesotherapy",
          de: "Indikationen für die Mesotherapie der Kopfhaut"
        }
      },
      {
        type: "list",
        content: {
          uk: "Дифузне та андрогенетичне випадіння волосся.\nУповільнення росту волосся.\nПогіршення якості волосся (тонкість, ламкість, сухість).\nСеборея та лупа (в комплексній терапії).\nВідновлення волосся після стресу, хвороб, вагітності.",
          ru: "Диффузное и андрогенетическое выпадение волос.\nЗамедление роста волос.\nУхудшение качества волос (истончение, ломкость, сухость).\nСеборея и перхоть (в комплексной терапии).\nВосстановление волос после стресса, болезней, беременности.",
          en: "Diffuse and androgenetic hair loss.\nSlow hair growth.\nDeterioration of hair quality (thinning, brittleness, dryness).\nSeborrhea and dandruff (in complex therapy).\nHair restoration after stress, illness, or pregnancy.",
          de: "Diffuser und androgener Haarausfall.\nLangsames Haarwachstum.\nVerschlechterung der Haarqualität (Dünnerwerden, Brüchigkeit, Trockenheit).\nSeborrhoe und Schuppen (in der komplexen Therapie).\nWiederherstellung der Haare nach Stress, Krankheit oder Schwangerschaft."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та курс процедур",
          ru: "Результат и курс процедур",
          en: "Results and Course of Procedures",
          de: "Ergebnisse und Behandlungsverlauf"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перші результати — зменшення випадіння — помітні вже після 2-3 процедур. Стимуляція росту нового волосся потребує більше часу. Для досягнення стійкого ефекту мезотерапія проводиться курсом, що складається з 6-10 сеансів з інтервалом 7-14 днів. Після курсу ваше волосся стане густішим, міцнішим та здоровішим.",
          ru: "Первые результаты — уменьшение выпадения — заметны уже после 2-3 процедур. Стимуляция роста новых волос требует больше времени. Для достижения стойкого эффекта мезотерапия проводится курсом, состоящим из 6-10 сеансов с интервалом 7-14 дней. После курса ваши волосы станут гуще, крепче и здоровее.",
          en: "The first results - a reduction in hair loss - are noticeable after 2-3 procedures. Stimulating the growth of new hair takes more time. To achieve a stable effect, mesotherapy is carried out in a course of 6-10 sessions with an interval of 7-14 days. After the course, your hair will become thicker, stronger, and healthier.",
          de: "Die ersten Ergebnisse - eine Verringerung des Haarausfalls - sind nach 2-3 Behandlungen spürbar. Die Stimulierung des Wachstums neuer Haare dauert länger. Um eine stabile Wirkung zu erzielen, wird die Mesotherapie in einem Kurs von 6-10 Sitzungen im Abstand von 7-14 Tagen durchgeführt. Nach dem Kurs wird Ihr Haar dicker, stärker und gesünder."
        }
      }
    ],
    faqs: ["faq_meso_hair_1", "faq_meso_hair_2"],
    doctors: ["doctor_trichologist_1", "doctor_cosmetologist_injector_1"]
  },
      {
    id: "subservice34", // НОВАЯ ПОДУСЛУГА
    serviceId: "service8", // Привязка к основной услуге "Мезотерапия"
    title: {
      uk: "Мезотерапія для корекції целюліту",
      ru: "Мезотерапия для коррекции целлюлита",
      en: "Mesotherapy for Cellulite Correction",
      de: "Mesotherapie zur Cellulite-Korrektur"
    },
    slug: "mezoterapiya-dlya-korekciyi-celyulitu",
    mainImage: "https://detali.com/wp-content/uploads/2023/10/caucasian-female-patient-undergoing-an-anti-cellul-2021-09-03-15-35-00-utc_novyj-razmer-scaled.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія проти целюліту: цілеспрямований удар по «апельсиновій кірці»",
          ru: "Мезотерапия против целлюлита: целенаправленный удар по «апельсиновой корке»",
          en: "Mesotherapy against Cellulite: A Targeted Strike on \"Orange Peel Skin\"",
          de: "Mesotherapie gegen Cellulite: Ein gezielter Schlag gegen „Orangenhaut“"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія є одним з найефективніших ін'єкційних методів боротьби з целюлітом. Процедура полягає у введенні спеціальних ліполітичних та дренажних коктейлів безпосередньо в підшкірно-жирову клітковину проблемних зон. Такий підхід дозволяє впливати на всі ланки розвитку целюліту: руйнувати жирові клітини, покращувати мікроциркуляцію, виводити зайву рідину та зміцнювати сполучну тканину.",
          ru: "Мезотерапия является одним из самых эффективных инъекционных методов борьбы с целлюлитом. Процедура заключается во введении специальных липолитических и дренажных коктейлей непосредственно в подкожно-жировую клетчатку проблемных зон. Такой подход позволяет воздействовать на все звенья развития целлюлита: разрушать жировые клетки, улучшать микроциркуляцию, выводить лишнюю жидкость и укреплять соединительную ткань.",
          en: "Mesotherapy is one of the most effective injection methods for combating cellulite. The procedure involves introducing special lipolytic and drainage cocktails directly into the subcutaneous fat of problem areas. This approach allows targeting all links in the development of cellulite: destroying fat cells, improving microcirculation, removing excess fluid, and strengthening connective tissue.",
          de: "Die Mesotherapie ist eine der wirksamsten Injektionsmethoden zur Bekämpfung von Cellulite. Das Verfahren beinhaltet die Einführung spezieller lipolytischer und drainierender Cocktails direkt in das Unterhautfettgewebe von Problemzonen. Dieser Ansatz ermöglicht es, alle Glieder in der Entwicklung von Cellulite gezielt anzugehen: Zerstörung von Fettzellen, Verbesserung der Mikrozirkulation, Entfernung überschüssiger Flüssigkeit und Stärkung des Bindegewebes."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як працюють антицелюлітні коктейлі?",
          ru: "Как работают антицеллюлитные коктейли?",
          en: "How Do Anti-Cellulite Cocktails Work?",
          de: "Wie wirken Anti-Cellulite-Cocktails?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Ліполітики (напр., фосфатидилхолін, дезоксихолат): руйнують мембрани жирових клітин (адипоцитів), вивільняючи їх вміст.\nДренажні компоненти (напр., екстракт артишоку, гінкго білоба): покращують лімфоток, сприяючи виведенню зайвої рідини та продуктів розпаду жирів.\nСудинні препарати (напр., рутин): зміцнюють стінки капілярів та покращують кровообіг.\nКомпоненти для пружності шкіри (напр., органічний кремній, ДМАЕ): стимулюють вироблення колагену, роблячи шкіру більш підтягнутою.",
          ru: "Липолитики (напр., фосфатидилхолин, дезоксихолат): разрушают мембраны жировых клеток (адипоцитов), высвобождая их содержимое.\nДренажные компоненты (напр., экстракт артишока, гинкго билоба): улучшают лимфоток, способствуя выведению лишней жидкости и продуктов распада жиров.\nСосудистые препараты (напр., рутин): укрепляют стенки капилляров и улучшают кровообращение.\nКомпоненты для упругости кожи (напр., органический кремний, ДМАЭ): стимулируют выработку коллагена, делая кожу более подтянутой.",
          en: "Lipolytics (e.g., phosphatidylcholine, deoxycholate): destroy the membranes of fat cells (adipocytes), releasing their contents.\nDrainage components (e.g., artichoke extract, ginkgo biloba): improve lymph flow, helping to remove excess fluid and fat breakdown products.\nVascular preparations (e.g., rutin): strengthen capillary walls and improve blood circulation.\nSkin firming components (e.g., organic silicon, DMAE): stimulate collagen production, making the skin firmer.",
          de: "Lipolytika (z. B. Phosphatidylcholin, Desoxycholat): zerstören die Membranen von Fettzellen (Adipozyten) und setzen deren Inhalt frei.\nDrainage-Komponenten (z. B. Artischockenextrakt, Ginkgo Biloba): verbessern den Lymphfluss und helfen, überschüssige Flüssigkeit und Fettabbauprodukte zu entfernen.\nGefäßpräparate (z. B. Rutin): stärken die Kapillarwände und verbessern die Blutzirkulation.\nHautstraffende Komponenten (z. B. organisches Silizium, DMAE): regen die Kollagenproduktion an und machen die Haut straffer."
        }
      },
      {
        type: "image",
        content: { image: "https://daviani.ru/upload/osloznenie.jpg" },
        sideText: {
          uk: "Мезотерапія діє прицільно саме там, де це необхідно, що забезпечує високу ефективність процедури.",
          ru: "Мезотерапия действует прицельно именно там, где это необходимо, что обеспечивает высокую эффективность процедуры.",
          en: "Mesotherapy acts precisely where it is needed, which ensures the high effectiveness of the procedure.",
          de: "Die Mesotherapie wirkt gezielt dort, wo sie benötigt wird, was die hohe Wirksamkeit des Verfahrens gewährleistet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги методу",
          ru: "Преимущества метода",
          en: "Advantages of the Method",
          de: "Vorteile der Methode"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "На відміну від кремів, активні речовини доставляються безпосередньо в проблемну зону. Процедура дозволяє не тільки зменшити «апельсинову кірку», але й помітно зменшити об'єми та покращити якість шкіри. Мезотерапія чудово поєднується з іншими антицелюлітними методиками, такими як масаж та обгортання, посилюючи їх дію.",
          ru: "В отличие от кремов, активные вещества доставляются непосредственно в проблемную зону. Процедура позволяет не только уменьшить «апельсиновую корку», но и заметно уменьшить объемы и улучшить качество кожи. Мезотерапия прекрасно сочетается с другими антицеллюлитными методиками, такими как массаж и обертывания, усиливая их действие.",
          en: "Unlike creams, the active substances are delivered directly to the problem area. The procedure not only reduces the \"orange peel skin\" but also noticeably reduces volume and improves skin quality. Mesotherapy combines perfectly with other anti-cellulite methods, such as massage and wraps, enhancing their effect.",
          de: "Im Gegensatz zu Cremes werden die Wirkstoffe direkt in die Problemzone transportiert. Das Verfahren reduziert nicht nur die „Orangenhaut“, sondern verringert auch sichtbar das Volumen und verbessert die Hautqualität. Die Mesotherapie lässt sich perfekt mit anderen Anti-Cellulite-Methoden wie Massagen und Wickeln kombinieren und verstärkt deren Wirkung."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур для видимого результату",
          ru: "Курс процедур для видимого результата",
          en: "Course of Procedures for Visible Results",
          de: "Behandlungskurs für sichtbare Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для боротьби з целюлітом потрібен курсовий підхід. Зазвичай курс складається з 7-15 процедур, які проводяться з інтервалом в 7-10 днів. Перші результати у вигляді покращення тургору шкіри помітні вже після кількох сеансів, а зменшення об'ємів та вирівнювання рельєфу — ближче до кінця курсу.",
          ru: "Для борьбы с целлюлитом требуется курсовой подход. Обычно курс состоит из 7-15 процедур, которые проводятся с интервалом в 7-10 дней. Первые результаты в виде улучшения тургора кожи заметны уже после нескольких сеансов, а уменьшение объемов и выравнивание рельефа — ближе к концу курса.",
          en: "Fighting cellulite requires a course-based approach. Typically, a course consists of 7-15 procedures performed at intervals of 7-10 days. The first results, such as improved skin turgor, are noticeable after a few sessions, while volume reduction and smoothing of the texture become apparent towards the end of the course.",
          de: "Die Bekämpfung von Cellulite erfordert einen kurmäßigen Ansatz. In der Regel besteht eine Kur aus 7-15 Behandlungen, die im Abstand von 7-10 Tagen durchgeführt werden. Die ersten Ergebnisse, wie eine verbesserte Hautturgor, sind bereits nach wenigen Sitzungen sichtbar, während die Volumenreduktion und die Glättung der Textur gegen Ende der Kur deutlich werden."
        }
      }
    ],
    faqs: ["faq_meso_cellulite_1", "faq_meso_cellulite_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_body_specialist_1"]
  },

  {
    id: "subservice35", // НОВАЯ ПОДУСЛУГА
    serviceId: "service9", // Привязка к новой основной услуге "Биоревитализация"
    title: {
      uk: "Біоревіталізація обличчя",
      ru: "Биоревитализация лица",
      en: "Facial Biorevitalization",
      de: "Gesichtsbiorevitalisierung"
    },
    slug: "biorevitalizatsiya-oblychchya",
    mainImage: "https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/212500/C5F6vi66Dt5eEKwylE8QA.jpeg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Біоревіталізація: повернення шкірі життєвої сили",
          ru: "Биоревитализация: возвращение коже жизненной силы",
          en: "Biorevitalization: Restoring Vitality to the Skin",
          de: "Biorevitalisierung: Die Wiederherstellung der Vitalität der Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Біоревіталізація (дослівно «біологічне пожвавлення») — це ін'єкційна процедура глибокого зволоження шкіри за допомогою препаратів на основі нестабілізованої гіалуронової кислоти. Гіалуронова кислота притягує та утримує воду, створюючи в шкірі гідрорезерв. Це не тільки усуває сухість та зневоднення, але й створює оптимальні умови для роботи клітин-фібробластів, які починають активно синтезувати новий колаген та еластин.",
          ru: "Биоревитализация (дословно «биологическое оживление») — это инъекционная процедура глубокого увлажнения кожи с помощью препаратов на основе нестабилизированной гиалуроновой кислоты. Гиалуроновая кислота притягивает и удерживает воду, создавая в коже гидрорезерв. Это не только устраняет сухость и обезвоженность, но и создает оптимальные условия для работы клеток-фибробластов, которые начинают активно синтезировать новый коллаген и эластин.",
          en: "Biorevitalization (literally \"biological revival\") is an injection procedure for deep skin hydration using preparations based on non-stabilized hyaluronic acid. Hyaluronic acid attracts and retains water, creating a hydro-reserve in the skin. This not only eliminates dryness and dehydration but also creates optimal conditions for fibroblasts to actively synthesize new collagen and elastin.",
          de: "Biorevitalisierung (wörtlich „biologische Wiederbelebung“) ist ein Injektionsverfahren zur tiefen Hydratation der Haut mit Präparaten auf Basis von nicht stabilisierter Hyaluronsäure. Hyaluronsäure zieht Wasser an und speichert es, wodurch eine Hydroreserve in der Haut entsteht. Dies beseitigt nicht nur Trockenheit und Dehydration, sondern schafft auch optimale Bedingungen für Fibroblasten, um aktiv neues Kollagen und Elastin zu synthetisieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні ефекти біоревіталізації",
          ru: "Основные эффекты биоревитализации",
          en: "Main Effects of Biorevitalization",
          de: "Haupteffekte der Biorevitalisierung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Інтенсивне зволоження шкіри зсередини.\nПідвищення тургору, тонусу та еластичності.\nРозгладження дрібних зморшок («сіточка зморшок»).\nПокращення кольору обличчя, поява здорового сяйва.\nЗменшення проявів куперозу.\nПрискорення відновлення шкіри після засмаги або агресивних процедур.",
          ru: "Интенсивное увлажнение кожи изнутри.\nПовышение тургора, тонуса и эластичности.\nРазглаживание мелких морщин («сеточка морщин»).\nУлучшение цвета лица, появление здорового сияния.\nУменьшение проявлений купероза.\nУскорение восстановления кожи после загара или агрессивных процедур.",
          en: "Intensive skin hydration from within.\nIncreased turgor, tone, and elasticity.\nSmoothing of fine lines (\"wrinkle network\").\nImproved complexion, appearance of a healthy glow.\nReduction of rosacea symptoms.\nAccelerated skin recovery after sun exposure or aggressive procedures.",
          de: "Intensive Hautbefeuchtung von innen.\nErhöhter Turgor, Tonus und Elastizität.\nGlättung feiner Linien („Faltennetzwerk“).\nVerbesserter Teint, Erscheinung eines gesunden Glanzes.\nReduzierung der Rosazea-Symptome.\nBeschleunigte Hauterholung nach Sonneneinstrahlung oder aggressiven Eingriffen."
        }
      },
      {
        type: "image",
        content: { image: "https://www.medilier.ru/wp-content/uploads/2019/02/Biorevitalizatciya1-1024x1024.jpg" },
        sideText: {
          uk: "Біоревіталізація — це «швидка допомога» для втомленої, тьмяної та зневодненої шкіри.",
          ru: "Биоревитализация — это «скорая помощь» для уставшей, тусклой и обезвоженной кожи.",
          en: "Biorevitalization is \"first aid\" for tired, dull, and dehydrated skin.",
          de: "Biorevitalisierung ist „Erste Hilfe“ für müde, fahle und dehydrierte Haut."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie läuft die Behandlung ab?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після очищення шкіри та нанесення анестезуючого крему лікар за допомогою мікроголки вводить препарат у поверхневі шари шкіри по всьому обличчю (шиї, декольте). Найпопулярніша техніка — папульна, коли після ін'єкцій залишаються невеликі горбки (папули), що містять депо препарату. Ці папули повністю розсмоктуються протягом 1-3 днів, поступово віддаючи шкірі гіалуронову кислоту. Сеанс триває 40-60 хвилин.",
          ru: "После очищения кожи и нанесения анестезирующего крема врач с помощью микроиглы вводит препарат в поверхностные слои кожи по всему лицу (шеe, декольте). Самая популярная техника — папульная, когда после инъекций остаются небольшие бугорки (папулы), содержащие депо препарата. Эти папулы полностью рассасываются в течение 1-3 дней, постепенно отдавая коже гиалуроновую кислоту. Сеанс длится 40-60 минут.",
          en: "After cleansing the skin and applying an anesthetic cream, the doctor uses a micro-needle to inject the preparation into the superficial layers of the skin all over the face (neck, décolleté). The most popular technique is papular, where small bumps (papules) containing a depot of the product remain after the injections. These papules are completely absorbed within 1-3 days, gradually releasing hyaluronic acid into the skin. The session lasts 40-60 minutes.",
          de: "Nach der Reinigung der Haut und dem Auftragen einer Betäubungscreme injiziert der Arzt das Präparat mit einer Mikronadel in die oberflächlichen Hautschichten im gesamten Gesicht (Hals, Dekolleté). Die beliebteste Technik ist die papulöse, bei der nach den Injektionen kleine Beulen (Papeln) zurückbleiben, die ein Depot des Produkts enthalten. Diese Papeln werden innerhalb von 1-3 Tagen vollständig resorbiert und geben allmählich Hyaluronsäure an die Haut ab. Die Sitzung dauert 40-60 Minuten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungsverlauf"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення максимального та довготривалого ефекту біоревіталізація проводиться курсом з 3-5 процедур з інтервалом 2-3 тижні. Підтримуючий курс рекомендується проводити 1-2 рази на рік.",
          ru: "Для достижения максимального и долговременного эффекта биоревитализация проводится курсом из 3-5 процедур с интервалом 2-3 недели. Поддерживающий курс рекомендуется проводить 1-2 раза в год.",
          en: "To achieve the maximum and long-lasting effect, biorevitalization is carried out in a course of 3-5 procedures with an interval of 2-3 weeks. A maintenance course is recommended 1-2 times a year.",
          de: "Um die maximale und lang anhaltende Wirkung zu erzielen, wird die Biorevitalisierung in einem Kurs von 3-5 Behandlungen im Abstand von 2-3 Wochen durchgeführt. Ein Erhaltungskurs wird 1-2 Mal pro Jahr empfohlen."
        }
      }
    ],
    faqs: ["faq_biorev_1", "faq_biorev_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_2"]
  },


  {
    id: "subservice37", // НОВАЯ ПОДУСЛУГА
    serviceId: "service9", // Привязка к основной услуге "Биоревитализация"
    title: {
      uk: "Ін'єкції гіалуронової кислоти",
      ru: "Инъекции гиалуроновой кислоты",
      en: "Hyaluronic Acid Injections",
      de: "Hyaluronsäure-Injektionen"
    },
    slug: "iniektsii-hialuronovoi-kysloty",
    mainImage: "https://vegacentr-plus.ru/uploads/images/blog/gialuronovaja%20kislota%20.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Гіалуронова кислота: золотий стандарт ін'єкційної косметології",
          ru: "Гиалуроновая кислота: золотой стандарт инъекционной косметологии",
          en: "Hyaluronic Acid: The Gold Standard of Injection Cosmetology",
          de: "Hyaluronsäure: Der Goldstandard der Injektionskosmetologie"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ін'єкції гіалуронової кислоти — це загальна назва для цілого ряду процедур, спрямованих на омолодження, зволоження та моделювання обличчя і тіла. Гіалуронова кислота є природним компонентом нашої шкіри, що робить препарати на її основі абсолютно безпечними та біосумісними. Залежно від щільності та концентрації препарату, ін'єкції ГК можуть вирішувати абсолютно різні завдання.",
          ru: "Инъекции гиалуроновой кислоты — это общее название для целого ряда процедур, направленных на омоложение, увлажнение и моделирование лица и тела. Гиалуроновая кислота является естественным компонентом нашей кожи, что делает препараты на её основе абсолютно безопасными и биосовместимыми. В зависимости от плотности и концентрации препарата, инъекции ГК могут решать совершенно разные задачи.",
          en: "Hyaluronic acid injections is a general term for a whole range of procedures aimed at rejuvenating, moisturizing, and contouring the face and body. Hyaluronic acid is a natural component of our skin, which makes preparations based on it completely safe and biocompatible. Depending on the density and concentration of the preparation, HA injections can solve completely different tasks.",
          de: "Hyaluronsäure-Injektionen ist ein allgemeiner Begriff für eine ganze Reihe von Verfahren, die auf die Verjüngung, Befeuchtung und Konturierung von Gesicht und Körper abzielen. Hyaluronsäure ist ein natürlicher Bestandteil unserer Haut, was Präparate auf ihrer Basis absolut sicher und biokompatibel macht. Je nach Dichte und Konzentration des Präparats können HA-Injektionen völlig unterschiedliche Aufgaben lösen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні види ін'єкцій та їхні цілі",
          ru: "Основные виды инъекций и их цели",
          en: "Main Types of Injections and Their Goals",
          de: "Haupttypen von Injektionen und ihre Ziele"
        }
      },
      {
        type: "list",
        content: {
          uk: "Контурна пластика (Філери): Використовуються щільні, стабілізовані гелі ГК. Мета — створити об'єм, заповнити глибокі зморшки, змоделювати риси обличчя (вилиці, підборіддя, губи).\nБіоревіталізація: Використовується нестабілізована, «рідка» ГК. Головна мета — глибоке зволоження шкіри, стимуляція колагену та покращення її якості, без додавання об'єму.\nБіорепарація: Це біоревіталізація, збагачена додатковими компонентами (вітамінами, амінокислотами, пептидами) для більш потужного відновлювального та омолоджуючого ефекту.",
          ru: "Контурная пластика (Филлеры): Используются плотные, стабилизированные гели ГК. Цель — создать объем, заполнить глубокие морщины, смоделировать черты лица (скулы, подбородок, губы).\nБиоревитализация: Используется нестабилизированная, «жидкая» ГК. Главная цель — глубокое увлажнение кожи, стимуляция коллагена и улучшение её качества, без добавления объема.\nБиорепарация: Это биоревитализация, обогащенная дополнительными компонентами (витаминами, аминокислотами, пептидами) для более мощного восстановительного и омолаживающего эффекта.",
          en: "Contour Plastics (Fillers): Dense, stabilized HA gels are used. The goal is to create volume, fill deep wrinkles, and model facial features (cheekbones, chin, lips).\nBiorevitalization: Non-stabilized, \"liquid\" HA is used. The main goal is deep skin hydration, collagen stimulation, and improving its quality, without adding volume.\nBioreparation: This is biorevitalization enriched with additional components (vitamins, amino acids, peptides) for a more powerful restorative and rejuvenating effect.",
          de: "Konturplastik (Filler): Es werden dichte, stabilisierte HA-Gele verwendet. Das Ziel ist es, Volumen zu schaffen, tiefe Falten aufzufüllen und Gesichtszüge zu modellieren (Wangenknochen, Kinn, Lippen).\nBiorevitalisierung: Es wird nicht stabilisierte, „flüssige“ HA verwendet. Das Hauptziel ist die tiefe Hydratation der Haut, die Kollagenstimulation und die Verbesserung ihrer Qualität, ohne Volumen hinzuzufügen.\nBioreparation: Dies ist eine Biorevitalisierung, die mit zusätzlichen Komponenten (Vitaminen, Aminosäuren, Peptiden) für eine stärkere restaurative und verjüngende Wirkung angereichert ist."
        }
      },
      {
        type: "image",
        content: { image: "https://plastic-surgeon.kiev.ua/wp-content/uploads/2020/01/FotorCreated2-1-768x576.jpg" },
        sideText: {
          uk: "Правильний вибір препарату — ключ до успіху. Тільки лікар може визначити, який тип гіалуронової кислоти потрібен саме вашій шкірі для вирішення конкретної проблеми.",
          ru: "Правильный выбор препарата — ключ к успеху. Только врач может определить, какой тип гиалуроновой кислоты нужен именно вашей коже для решения конкретной проблемы.",
          en: "Choosing the right product is the key to success. Only a doctor can determine which type of hyaluronic acid your skin needs to solve a specific problem.",
          de: "Die Wahl des richtigen Produkts ist der Schlüssel zum Erfolg. Nur ein Arzt kann bestimmen, welcher Typ Hyaluronsäure Ihre Haut zur Lösung eines bestimmten Problems benötigt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Які проблеми вирішують ін'єкції ГК?",
          ru: "Какие проблемы решают инъекции ГК?",
          en: "What Problems Do HA Injections Solve?",
          de: "Welche Probleme lösen HA-Injektionen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Залежно від типу процедури, ін'єкції гіалуронової кислоти допомагають боротися з сухістю та зневодненням, мімічними та статичними зморшками, втратою об'єму та пружності, тьмяним кольором обличчя, а також дозволяють гармонізувати риси обличчя, зробивши їх більш виразними.",
          ru: "В зависимости от типа процедуры, инъекции гиалуроновой кислоты помогают бороться с сухостью и обезвоживанием, мимическими и статическими морщинами, потерей объема и упругости, тусклым цветом лица, а также позволяют гармонизировать черты лица, сделав их более выразительными.",
          en: "Depending on the type of procedure, hyaluronic acid injections help combat dryness and dehydration, expression and static wrinkles, volume and elasticity loss, a dull complexion, and also help to harmonize facial features, making them more expressive.",
          de: "Je nach Art des Verfahrens helfen Hyaluronsäure-Injektionen bei der Bekämpfung von Trockenheit und Dehydration, Mimik- und statischen Falten, Volumen- und Elastizitätsverlust, einem fahlen Teint und helfen auch, die Gesichtszüge zu harmonisieren und sie ausdrucksvoller zu machen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Безпека та професіоналізм",
          ru: "Безопасность и профессионализм",
          en: "Safety and Professionalism",
          de: "Sicherheit und Professionalität"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Усі ін'єкційні процедури в нашій клініці проводяться виключно лікарями-косметологами, які досконало володіють анатомією обличчя та використовують лише сертифіковані, перевірені препарати. Це гарантує безпеку та досягнення бажаного естетичного результату.",
          ru: "Все инъекционные процедуры в нашей клинике проводятся исключительно врачами-косметологами, которые в совершенстве владеют анатомией лица и используют только сертифицированные, проверенные препараты. Это гарантирует безопасность и достижение желаемого эстетического результата.",
          en: "All injection procedures in our clinic are performed exclusively by cosmetologists who have a perfect command of facial anatomy and use only certified, proven products. This guarantees safety and the achievement of the desired aesthetic result.",
          de: "Alle Injektionsverfahren in unserer Klinik werden ausschließlich von Kosmetikärzten durchgeführt, die die Gesichtsanatomie perfekt beherrschen und nur zertifizierte, bewährte Produkte verwenden. Dies garantiert Sicherheit und das Erreichen des gewünschten ästhetischen Ergebnisses."
        }
      }
    ],
    faqs: ["faq_ha_injections_1", "faq_ha_injections_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2"]
  },


  {
    id: "subservice38", // НОВАЯ ПОДУСЛУГА
    serviceId: "service9", // Привязка к основной услуге "Биоревитализация"
    title: {
      uk: "Комплексні програми омолодження",
      ru: "Комплексные программы омоложения",
      en: "Comprehensive Rejuvenation Programs",
      de: "Umfassende Verjüngungsprogramme"
    },
    slug: "kompleksni-prohramy-omolodzhennya",
    mainImage: "https://totalcharm.ru/upload/iblock/dc7/xtyxcf1f3zbeep22kn6k0vexlr5o4kkq.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Синергія методик: ваш індивідуальний план омолодження",
          ru: "Синергия методик: ваш индивидуальный план омоложения",
          en: "Synergy of Methods: Your Individual Rejuvenation Plan",
          de: "Synergie der Methoden: Ihr individueller Verjüngungsplan"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Сучасна косметологія довела, що найкращий та найприродніший результат омолодження досягається не однією «чарівною» процедурою, а грамотним поєднанням різних методик. Комплексна програма — це персоналізований план, розроблений лікарем-косметологом, який враховує ваш вік, тип шкіри, морфотип старіння та індивідуальні побажання. Такий підхід дозволяє одночасно працювати на всіх рівнях: покращувати якість шкіри, розгладжувати зморшки, відновлювати об'єми та чіткість контурів.",
          ru: "Современная косметология доказала, что наилучший и самый естественный результат омоложения достигается не одной «волшебной» процедурой, а грамотным сочетанием различных методик. Комплексная программа — это персонализированный план, разработанный врачом-косметологом, который учитывает ваш возраст, тип кожи, морфотип старения и индивидуальные пожелания. Такой подход позволяет одновременно работать на всех уровнях: улучшать качество кожи, разглаживать морщины, восстанавливать объемы и четкость контуров.",
          en: "Modern cosmetology has proven that the best and most natural rejuvenation result is achieved not by a single \"magic\" procedure, but by a competent combination of different methods. A comprehensive program is a personalized plan developed by a cosmetologist that takes into account your age, skin type, aging morphotype, and individual wishes. This approach allows working on all levels simultaneously: improving skin quality, smoothing wrinkles, restoring volume, and defining contours.",
          de: "Die moderne Kosmetologie hat bewiesen, dass das beste und natürlichste Verjüngungsergebnis nicht durch ein einziges „magisches“ Verfahren erzielt wird, sondern durch eine kompetente Kombination verschiedener Methoden. Ein umfassendes Programm ist ein personalisierter Plan, der von einem Kosmetologen entwickelt wird und Ihr Alter, Ihren Hauttyp, Ihren Alterungsmorphotyp und Ihre individuellen Wünsche berücksichtigt. Dieser Ansatz ermöglicht es, auf allen Ebenen gleichzeitig zu arbeiten: die Hautqualität zu verbessern, Falten zu glätten, Volumen wiederherzustellen und Konturen zu definieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Що може входити до комплексної програми?",
          ru: "Что может входить в комплексную программу?",
          en: "What Can a Comprehensive Program Include?",
          de: "Was kann ein umfassendes Programm beinhalten?"
        }
      },
      {
        type: "list",
        content: {
          uk: "1. **Покращення якості шкіри:** Біоревіталізація або біорепарація для глибокого зволоження та стимуляції колагену.\n2. **Робота з тоном та поверхнею:** IPL-терапія для видалення пігментації та судин, хімічні пілінги для вирівнювання рельєфу.\n3. **Корекція мімічних зморшок:** Ботулінотерапія для розслаблення м'язів чола, міжбрів'я та зони навколо очей.\n4. **Відновлення об'ємів та ліфтинг:** Контурна пластика (філери) для моделювання вилиць, підборіддя та корекції глибоких складок.\n5. **Професійний домашній догляд:** Підбір засобів, які будуть підтримувати та посилювати ефект від процедур.",
          ru: "1. **Улучшение качества кожи:** Биоревитализация или биорепарация для глубокого увлажнения и стимуляции коллагена.\n2. **Работа с тоном и поверхностью:** IPL-терапия для удаления пигментации и сосудов, химические пилинги для выравнивания рельефа.\n3. **Коррекция мимических морщин:** Ботулинотерапия для расслабления мышц лба, межбровья и зоны вокруг глаз.\n4. **Восстановление объемов и лифтинг:** Контурная пластика (филлеры) для моделирования скул, подбородка и коррекции глубоких складок.\n5. **Профессиональный домашний уход:** Подбор средств, которые будут поддерживать и усиливать эффект от процедур.",
          en: "1. **Improving skin quality:** Biorevitalization or bioreparation for deep hydration and collagen stimulation.\n2. **Working with tone and surface:** IPL therapy to remove pigmentation and vessels, chemical peels to even out texture.\n3. **Correction of expression lines:** Botulinum toxin therapy to relax the muscles of the forehead, glabella, and eye area.\n4. **Volume restoration and lifting:** Contour plastics (fillers) for modeling cheekbones, chin, and correcting deep folds.\n5. **Professional home care:** Selection of products that will maintain and enhance the effect of the procedures.",
          de: "1. **Verbesserung der Hautqualität:** Biorevitalisierung oder Bioreparation zur tiefen Hydratation und Kollagenstimulation.\n2. **Arbeiten mit Ton und Oberfläche:** IPL-Therapie zur Entfernung von Pigmentierung und Gefäßen, chemische Peelings zur Glättung der Textur.\n3. **Korrektur von Mimikfalten:** Botulinumtoxin-Therapie zur Entspannung der Muskeln von Stirn, Glabella und Augenpartie.\n4. **Volumenwiederherstellung und Lifting:** Konturplastik (Filler) zur Modellierung von Wangenknochen, Kinn und zur Korrektur tiefer Falten.\n5. **Professionelle Heimpflege:** Auswahl von Produkten, die die Wirkung der Verfahren erhalten und verstärken."
        }
      },
      {
        type: "image",
        content: { image: "https://medvestnik.by/images/images_category/antiaging.webp" },
        sideText: {
          uk: "Створення програми починається з детальної консультації та діагностики, де лікар визначає основні проблеми та складає покроковий план їх вирішення.",
          ru: "Создание программы начинается с детальной консультации и диагностики, где врач определяет основные проблемы и составляет пошаговый план их решения.",
          en: "Creating a program begins with a detailed consultation and diagnosis, where the doctor identifies the main problems and creates a step-by-step plan to solve them.",
          de: "Die Erstellung eines Programms beginnt mit einer detaillierten Beratung und Diagnose, bei der der Arzt die Hauptprobleme identifiziert und einen schrittweisen Lösungsplan erstellt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги комплексного підходу",
          ru: "Преимущества комплексного подхода",
          en: "Advantages of a Comprehensive Approach",
          de: "Vorteile eines umfassenden Ansatzes"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Поєднання різних методик дозволяє отримати максимально гармонійний та довготривалий результат. Процедури доповнюють та посилюють дію одна одної, забезпечуючи омолодження на всіх рівнях. Це дозволяє уникнути ефекту «переробленого» обличчя та зберегти вашу унікальну індивідуальність, зробивши вас просто кращою версією себе.",
          ru: "Сочетание различных методик позволяет получить максимально гармоничный и долговременный результат. Процедуры дополняют и усиливают действие друг друга, обеспечивая омоложение на всех уровнях. Это позволяет избежать эффекта «переделанного» лица и сохранить вашу уникальную индивидуальность, сделав вас просто лучшей версией себя.",
          en: "The combination of different methods allows for the most harmonious and long-lasting result. The procedures complement and enhance each other's effects, providing rejuvenation at all levels. This helps to avoid the \"overdone\" look and preserve your unique individuality, simply making you the best version of yourself.",
          de: "Die Kombination verschiedener Methoden ermöglicht ein äußerst harmonisches und langanhaltendes Ergebnis. Die Verfahren ergänzen und verstärken sich gegenseitig und sorgen für eine Verjüngung auf allen Ebenen. Dies hilft, das „überbehandelte“ Aussehen zu vermeiden und Ihre einzigartige Individualität zu bewahren, indem Sie einfach die beste Version Ihrer selbst werden."
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Запрошуємо вас на консультацію, щоб розробити вашу персональну дорожню карту до молодості та краси!",
          ru: "Приглашаем вас на консультацию, чтобы разработать вашу персональную дорожную карту к молодости и красоте!",
          en: "We invite you for a consultation to develop your personal roadmap to youth and beauty!",
          de: "Wir laden Sie zu einer Beratung ein, um Ihre persönliche Roadmap zu Jugend und Schönheit zu entwickeln!"
        }
      }
    ],
    faqs: ["faq_complex_1", "faq_complex_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_cosmetologist_injector_2", "doctor_dermatologist_1"]
  },

  {
    id: "subservice39", // НОВАЯ ПОДУСЛУГА
    serviceId: "service10", // Привязка к новой основной услуге "Лазерна епіляція"
    title: {
      uk: "Лазерна епіляція обличчя",
      ru: "Лазерная эпиляция лица",
      en: "Facial Laser Hair Removal",
      de: "Laser-Haarentfernung im Gesicht"
    },
    slug: "lazerna-epilyatsiya-oblychchya",
    mainImage: "https://hairbug.ru/assets/uploads/2016/05/girl_after.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Бездоганно гладенька шкіра обличчя без зайвого волосся",
          ru: "Безупречно гладкая кожа лица без лишних волос",
          en: "Flawlessly Smooth Facial Skin without Unwanted Hair",
          de: "Makellos glatte Gesichtshaut ohne unerwünschte Haare"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Небажане волосся на обличчі може створювати значний дискомфорт. Лазерна епіляція — це безпечний та ефективний спосіб вирішити цю делікатну проблему раз і назавжди. Процедура дозволяє позбутися від «вусиків», волосся на підборідді, бакенбардах або скоригувати лінію росту волосся, роблячи шкіру ідеально гладенькою та доглянутою.",
          ru: "Нежелательные волосы на лице могут доставлять значительный дискомфорт. Лазерная эпиляция — это безопасный и эффективный способ решить эту деликатную проблему раз и навсегда. Процедура позволяет избавиться от «усиков», волос на подбородке, бакенбардах или скорректировать линию роста волос, делая кожу идеально гладкой и ухоженной.",
          en: "Unwanted facial hair can cause significant discomfort. Laser hair removal is a safe and effective way to solve this delicate problem once and for all. The procedure allows you to get rid of the \"mustache,\" hair on the chin, sideburns, or to correct the hairline, making the skin perfectly smooth and well-groomed.",
          de: "Unerwünschte Gesichtsbehaarung kann erhebliches Unbehagen verursachen. Die Laser-Haarentfernung ist eine sichere und effektive Methode, um dieses heikle Problem ein für alle Mal zu lösen. Das Verfahren ermöglicht es Ihnen, den „Damenbart“, Haare am Kinn, Koteletten loszuwerden oder den Haaransatz zu korrigieren, wodurch die Haut perfekt glatt und gepflegt wird."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як працює лазер?",
          ru: "Как работает лазер?",
          en: "How Does the Laser Work?",
          de: "Wie funktioniert der Laser?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазерний промінь генерує світлову енергію, яка поглинається меланіном — пігментом, що міститься у волосині. Енергія перетворюється на тепло, яке нагріває волосяний фолікул до температури, що призводить до його руйнування. Лазер діє лише на фолікули в активній стадії росту, тому для повного видалення волосся потрібен курс процедур.",
          ru: "Лазерный луч генерирует световую энергию, которая поглощается меланином — пигментом, содержащимся в волосе. Энергия преобразуется в тепло, которое нагревает волосяной фолликул до температуры, приводящей к его разрушению. Лазер действует только на фолликулы в активной стадии роста, поэтому для полного удаления волос требуется курс процедур.",
          en: "The laser beam generates light energy that is absorbed by melanin, the pigment contained in the hair. This energy is converted into heat, which heats the hair follicle to a temperature that causes its destruction. The laser only affects follicles in the active growth stage, which is why a course of procedures is required for complete hair removal.",
          de: "Der Laserstrahl erzeugt Lichtenergie, die vom Melanin, dem im Haar enthaltenen Pigment, absorbiert wird. Diese Energie wird in Wärme umgewandelt, die den Haarfollikel auf eine Temperatur erhitzt, die zu seiner Zerstörung führt. Der Laser wirkt nur auf Follikel in der aktiven Wachstumsphase, weshalb für eine vollständige Haarentfernung ein Behandlungskurs erforderlich ist."
        }
      },
      {
        type: "image",
        content: { image: "https://static.tildacdn.com/tild6431-3162-4036-b261-653966393965/noroot.png" },
        sideText: {
          uk: "Наш сучасний діодний лазер оснащений потужною системою охолодження, що робить процедуру максимально комфортною та безболісною.",
          ru: "Наш современный диодный лазер оснащен мощной системой охлаждения, что делает процедуру максимально комфортной и безболезненной.",
          en: "Our modern diode laser is equipped with a powerful cooling system, which makes the procedure as comfortable and painless as possible.",
          de: "Unser moderner Diodenlaser ist mit einem leistungsstarken Kühlsystem ausgestattet, was das Verfahren so angenehm und schmerzfrei wie möglich macht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Зони епіляції на обличчі",
          ru: "Зоны эпиляции на лице",
          en: "Facial Hair Removal Zones",
          de: "Zonen der Haarentfernung im Gesicht"
        }
      },
      {
        type: "list",
        content: {
          uk: "Верхня губа.\nПідборіддя.\nБакенбарди (щоки).\nМіжбрів'я.\nЛінія росту волосся на лобі.",
          ru: "Верхняя губа.\nПодбородок.\nБакенбарды (щеки).\nМежбровье.\nЛиния роста волос на лбу.",
          en: "Upper lip.\nChin.\nSideburns (cheeks).\nGlabella (between the eyebrows).\nForehead hairline.",
          de: "Oberlippe.\nKinn.\nKoteletten (Wangen).\nGlabella (zwischen den Augenbrauen).\nStirnhaaransatz."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Підготовка та догляд",
          ru: "Подготовка и уход",
          en: "Preparation and Aftercare",
          de: "Vorbereitung und Nachsorge"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "За 1 день до процедури необхідно ретельно поголити зону епіляції. За 2 тижні до та після сеансу не можна засмагати. Після процедури слід використовувати заспокійливий крем та сонцезахист з SPF 50+. Курс зазвичай складається з 6-10 процедур з інтервалом 4-6 тижнів.",
          ru: "За 1 день до процедуры необходимо тщательно побрить зону эпиляции. За 2 недели до и после сеанса нельзя загорать. После процедуры следует использовать успокаивающий крем и солнцезащиту с SPF 50+. Курс обычно состоит из 6-10 процедур с интервалом 4-6 недель.",
          en: "1 day before the procedure, you must carefully shave the epilation area. You should not sunbathe for 2 weeks before and after the session. After the procedure, you should use a soothing cream and sunscreen with SPF 50+. The course usually consists of 6-10 procedures with an interval of 4-6 weeks.",
          de: "1 Tag vor dem Eingriff müssen Sie den Epilationsbereich sorgfältig rasieren. Sie sollten sich 2 Wochen vor und nach der Sitzung nicht sonnen. Nach dem Eingriff sollten Sie eine beruhigende Creme und einen Sonnenschutz mit LSF 50+ verwenden. Der Kurs besteht in der Regel aus 6-10 Behandlungen im Abstand von 4-6 Wochen."
        }
      }
    ],
    faqs: ["faq_laser_face_1", "faq_laser_face_2"],
    doctors: ["doctor_laser_specialist_1", "doctor_cosmetologist_1"]
  },

  {
    id: "subservice40", // НОВАЯ ПОДУСЛУГА
    serviceId: "service10", // Привязка к основной услуге "Лазерна епіляція"
    title: {
      uk: "Лазерна епіляція рук",
      ru: "Лазерная эпиляция рук",
      en: "Laser Hair Removal for Arms",
      de: "Laser-Haarentfernung für Arme"
    },
    slug: "lazerna-epilyatsiya-ruk",
    mainImage: "https://www.galaxy.clinic/rezkosm/bagnenko/photo_2021-10-15_15-36-32.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерна епіляція рук: естетика та комфорт надовго",
          ru: "Лазерная эпиляция рук: эстетика и комфорт надолго",
          en: "Laser Hair Removal for Arms: Long-lasting Aesthetics and Comfort",
          de: "Laser-Haarentfernung für Arme: Langanhaltende Ästhetik und Komfort"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гладенька шкіра рук — це важлива частина доглянутого образу як для жінок, так і для чоловіків. Лазерна епіляція дозволяє назавжди позбутися небажаного волосся на руках, забути про щоденне гоління, болісний віск та проблему врослого волосся. Процедура забезпечує ідеальну гладкість шкіри, яка зберігається роками.",
          ru: "Гладкая кожа рук — это важная часть ухоженного образа как для женщин, так и для мужчин. Лазерная эпиляция позволяет навсегда избавиться от нежелательных волос на руках, забыть о ежедневном бритье, болезненном воске и проблеме вросших волос. Процедура обеспечивает идеальную гладкость кожи, которая сохраняется годами.",
          en: "Smooth skin on the arms is an important part of a well-groomed look for both women and men. Laser hair removal allows you to permanently get rid of unwanted hair on your arms, forget about daily shaving, painful waxing, and the problem of ingrown hairs. The procedure provides perfectly smooth skin that lasts for years.",
          de: "Glatte Haut an den Armen ist ein wichtiger Teil eines gepflegten Aussehens für Frauen und Männer. Die Laser-Haarentfernung ermöglicht es Ihnen, unerwünschte Haare an den Armen dauerhaft loszuwerden und das tägliche Rasieren, schmerzhaftes Wachsen und das Problem eingewachsener Haare zu vergessen. Das Verfahren sorgt für perfekt glatte Haut, die jahrelang anhält."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Зони епіляції на руках",
          ru: "Зоны эпиляции на руках",
          en: "Hair Removal Zones on the Arms",
          de: "Zonen der Haarentfernung an den Armen"
        }
      },
      {
        type: "list",
        content: {
          uk: "Руки повністю (від плеча до кисті).\nПередпліччя (від ліктя до кисті).\nКисті рук та пальці.\nПлечі.",
          ru: "Руки полностью (от плеча до кисти).\nПредплечья (от локтя до кисти).\nКисти рук и пальцы.\nПлечи.",
          en: "Full arms (from shoulder to wrist).\nForearms (from elbow to wrist).\nHands and fingers.\nShoulders.",
          de: "Ganze Arme (von der Schulter bis zum Handgelenk).\nUnterarme (vom Ellbogen bis zum Handgelenk).\nHände und Finger.\nSchultern."
        }
      },
      {
        type: "image",
        content: { image: "https://eternalclinic.ru/images/mor-BaA-31.png" },
        sideText: {
          uk: "Лазерна епіляція ефективно видаляє як темне жорстке, так і тонке пушкове волосся, роблячи шкіру бездоганною.",
          ru: "Лазерная эпиляция эффективно удаляет как темные жесткие, так и тонкие пушковые волосы, делая кожу безупречной.",
          en: "Laser hair removal effectively removes both dark, coarse hair and fine, vellus hair, leaving the skin flawless.",
          de: "Die Laser-Haarentfernung entfernt effektiv sowohl dunkles, grobes Haar als auch feines, flaumiges Haar und hinterlässt eine makellose Haut."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги лазерної епіляції рук",
          ru: "Преимущества лазерной эпиляции рук",
          en: "Benefits of Laser Hair Removal for Arms",
          de: "Vorteile der Laser-Haarentfernung für Arme"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "На відміну від інших методів, лазер не викликає подразнення, порізів чи алергічних реакцій. Шкіра залишається м'якою та гладенькою. Процедура вирішує проблему врослого волосся, оскільки фолікул руйнується і волосина більше не росте. Це особливо актуально для чутливої шкіри передпліч.",
          ru: "В отличие от других методов, лазер не вызывает раздражения, порезов или аллергических реакций. Кожа остается мягкой и гладкой. Процедура решает проблему вросших волос, так как фолликул разрушается и волос больше не растет. Это особенно актуально для чувствительной кожи предплечий.",
          en: "Unlike other methods, the laser does not cause irritation, cuts, or allergic reactions. The skin remains soft and smooth. The procedure solves the problem of ingrown hairs because the follicle is destroyed and the hair no longer grows. This is especially relevant for the sensitive skin of the forearms.",
          de: "Im Gegensatz zu anderen Methoden verursacht der Laser keine Reizungen, Schnitte oder allergischen Reaktionen. Die Haut bleibt weich und glatt. Das Verfahren löst das Problem eingewachsener Haare, da der Follikel zerstört wird und das Haar nicht mehr wächst. Dies ist besonders relevant für die empfindliche Haut der Unterarme."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та підготовка",
          ru: "Курс процедур и подготовка",
          en: "Course of Procedures and Preparation",
          de: "Behandlungskurs und Vorbereitung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення стійкого результату необхідний курс з 8-12 процедур, оскільки лазер діє лише на волосся в активній фазі росту. Інтервал між сеансами складає 4-6 тижнів. Перед кожною процедурою (за 1 день) необхідно гладко поголити волосся в зоні епіляції. Категорично не рекомендується засмагати за 2 тижні до та після процедури.",
          ru: "Для достижения стойкого результата необходим курс из 8-12 процедур, так как лазер действует только на волосы в активной фазе роста. Интервал между сеансами составляет 4-6 недель. Перед каждой процедурой (за 1 день) необходимо гладко побрить волосы в зоне эпиляции. Категорически не рекомендуется загорать за 2 недели до и после процедуры.",
          en: "To achieve a lasting result, a course of 8-12 procedures is necessary, as the laser only affects hair in the active growth phase. The interval between sessions is 4-6 weeks. Before each procedure (1 day before), the hair in the epilation area must be smoothly shaved. It is strictly not recommended to sunbathe for 2 weeks before and after the procedure.",
          de: "Um ein dauerhaftes Ergebnis zu erzielen, ist ein Kurs von 8-12 Behandlungen erforderlich, da der Laser nur Haare in der aktiven Wachstumsphase beeinflusst. Der Abstand zwischen den Sitzungen beträgt 4-6 Wochen. Vor jeder Behandlung (1 Tag vorher) müssen die Haare im Epilationsbereich glatt rasiert werden. Es wird dringend davon abgeraten, sich 2 Wochen vor und nach dem Eingriff zu sonnen."
        }
      }
    ],
    faqs: ["faq_laser_arms_1", "faq_laser_arms_2"],
    doctors: ["doctor_laser_specialist_1", "doctor_laser_specialist_2"]
  },


  {
    id: "subservice41", // НОВАЯ ПОДУСЛУГА
    serviceId: "service10", // Привязка к основной услуге "Лазерна епіляція"
    title: {
      uk: "Лазерна епіляція ніг",
      ru: "Лазерная эпиляция ног",
      en: "Laser Hair Removal for Legs",
      de: "Laser-Haarentfernung für Beine"
    },
    slug: "lazerna-epilyatsiya-nih",
    mainImage: "https://static.tildacdn.com/tild6165-3336-4337-a332-373766343861/__.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерна епіляція ніг: бездоганна гладкість назавжди",
          ru: "Лазерная эпиляция ног: безупречная гладкость навсегда",
          en: "Laser Hair Removal for Legs: Flawless Smoothness Forever",
          de: "Laser-Haarentfernung für Beine: Makellose Glätte für immer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Гоління ніг — це щоденна рутина, яка забирає час та часто викликає подразнення. Віск та шугаринг болісні та призводять до вростання волосся. Лазерна епіляція ніг — це сучасне рішення, яке дозволяє забути про ці проблеми. Курс процедур забезпечує довготривале видалення небажаного волосся, роблячи шкіру ніг ідеально гладенькою та м'якою в будь-який час року.",
          ru: "Бритье ног — это ежедневная рутина, которая отнимает время и часто вызывает раздражение. Воск и шугаринг болезненны и приводят к врастанию волос. Лазерная эпиляция ног — это современное решение, которое позволяет забыть об этих проблемах. Курс процедур обеспечивает долговременное удаление нежелательных волос, делая кожу ног идеально гладкой и мягкой в любое время года.",
          en: "Shaving your legs is a daily routine that takes time and often causes irritation. Waxing and sugaring are painful and lead to ingrown hairs. Laser hair removal for legs is a modern solution that allows you to forget about these problems. A course of procedures provides long-term removal of unwanted hair, making the skin on your legs perfectly smooth and soft at any time of the year.",
          de: "Das Rasieren der Beine ist eine tägliche Routine, die Zeit kostet und oft zu Irritationen führt. Wachsen und Zuckern sind schmerzhaft und führen zu eingewachsenen Haaren. Die Laser-Haarentfernung für Beine ist eine moderne Lösung, mit der Sie diese Probleme vergessen können. Ein Behandlungskurs sorgt für eine langanhaltende Entfernung unerwünschter Haare und macht die Haut an Ihren Beinen zu jeder Jahreszeit perfekt glatt und weich."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Зони епіляції на ногах",
          ru: "Зоны эпиляции на ногах",
          en: "Hair Removal Zones on the Legs",
          de: "Zonen der Haarentfernung an den Beinen"
        }
      },
      {
        type: "list",
        content: {
          uk: "Ноги повністю (від стегна до щиколотки).\nГомілки (включаючи коліна).\nСтегна (повністю або частково).\nПальці ніг.",
          ru: "Ноги полностью (от бедра до лодыжки).\nГолени (включая колени).\nБёдра (полностью или частично).\nПальцы ног.",
          en: "Full legs (from thigh to ankle).\nLower legs (including knees).\nThighs (fully or partially).\nToes.",
          de: "Ganze Beine (vom Oberschenkel bis zum Knöchel).\nUnterschenkel (einschließlich Knie).\nOberschenkel (ganz oder teilweise).\nZehen."
        }
      },
      {
        type: "image",
        content: { image: "https://krasivo.biz/wp-content/uploads/2023/04/NOGI-scaled-2000x1334.jpg" },
        sideText: {
          uk: "Процедура на ногах проходить швидко завдяки великій насадці нашого лазера, що дозволяє обробляти значні ділянки шкіри за короткий час.",
          ru: "Процедура на ногах проходит быстро благодаря большой насадке нашего лазера, которая позволяет обрабатывать значительные участки кожи за короткое время.",
          en: "The procedure on the legs is fast thanks to the large nozzle of our laser, which allows for treating large areas of skin in a short time.",
          de: "Die Behandlung an den Beinen ist dank der großen Düse unseres Lasers schnell, die es ermöglicht, große Hautbereiche in kurzer Zeit zu behandeln."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чому варто обрати лазерну епіляцію ніг?",
          ru: "Почему стоит выбрать лазерную эпиляцию ног?",
          en: "Why Choose Laser Hair Removal for Legs?",
          de: "Warum sollten Sie sich für eine Laser-Haarentfernung für die Beine entscheiden?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Окрім довготривалого результату, лазерна епіляція має й інші переваги. Вона ефективно бореться з врослим волоссям та фолікулітом (запаленням фолікулів), які часто виникають після гоління чи воску. Шкіра стає не просто гладенькою, а й здоровою. Також ви економите час та гроші в довгостроковій перспективі, відмовляючись від необхідності постійно купувати бритви чи відвідувати процедури депіляції.",
          ru: "Кроме долговременного результата, лазерная эпиляция имеет и другие преимущества. Она эффективно борется с вросшими волосами и фолликулитом (воспалением фолликулов), которые часто возникают после бритья или воска. Кожа становится не просто гладкой, но и здоровой. Также вы экономите время и деньги в долгосрочной перспективе, отказываясь от необходимости постоянно покупать бритвы или посещать процедуры депиляции.",
          en: "In addition to a long-lasting result, laser hair removal has other benefits. It effectively combats ingrown hairs and folliculitis (inflammation of the follicles), which often occur after shaving or waxing. The skin becomes not just smooth, but also healthy. You also save time and money in the long run by eliminating the need to constantly buy razors or attend depilation procedures.",
          de: "Neben einem langanhaltenden Ergebnis hat die Laser-Haarentfernung weitere Vorteile. Sie bekämpft effektiv eingewachsene Haare und Follikulitis (Entzündung der Follikel), die oft nach dem Rasieren oder Wachsen auftreten. Die Haut wird nicht nur glatt, sondern auch gesund. Sie sparen auch langfristig Zeit und Geld, da Sie keine Rasierer mehr kaufen oder Enthaarungsbehandlungen besuchen müssen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та підготовка",
          ru: "Курс процедур и подготовка",
          en: "Course of Procedures and Preparation",
          de: "Behandlungskurs und Vorbereitung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Волосся на ногах зазвичай потребує курсу з 8-10 процедур для повного видалення. Інтервал між першими сеансами складає 4-6 тижнів, а згодом збільшується. За день до процедури зону епіляції необхідно гладко поголити. Важливо уникати засмаги за 2 тижні до та після сеансу для максимальної ефективності та безпеки.",
          ru: "Волосы на ногах обычно требуют курса из 8-10 процедур для полного удаления. Интервал между первыми сеансами составляет 4-6 недель, а затем увеличивается. За день до процедуры зону эпиляции необходимо гладко побрить. Важно избегать загара за 2 недели до и после сеанса для максимальной эффективности и безопасности.",
          en: "Hair on the legs usually requires a course of 8-10 procedures for complete removal. The interval between the first sessions is 4-6 weeks and then increases. The day before the procedure, the epilation area must be smoothly shaved. It is important to avoid tanning for 2 weeks before and after the session for maximum effectiveness and safety.",
          de: "Haare an den Beinen erfordern in der Regel einen Kurs von 8-10 Behandlungen zur vollständigen Entfernung. Der Abstand zwischen den ersten Sitzungen beträgt 4-6 Wochen und verlängert sich dann. Am Tag vor dem Eingriff muss der Epilationsbereich glatt rasiert werden. Es ist wichtig, 2 Wochen vor und nach der Sitzung auf Sonnenbaden zu verzichten, um maximale Wirksamkeit und Sicherheit zu gewährleisten."
        }
      }
    ],
    faqs: ["faq_laser_legs_1", "faq_laser_legs_2"],
    doctors: ["doctor_laser_specialist_1", "doctor_laser_specialist_2"]
  },

  {
    id: "subservice42", // НОВАЯ ПОДУСЛУГА
    serviceId: "service10", // Привязка к основной услуге "Лазерна епіляція"
    title: {
      uk: "Лазерна епіляція зони бікіні",
      ru: "Лазерная эпиляция зоны бикини",
      en: "Laser Hair Removal for the Bikini Area",
      de: "Laser-Haarentfernung für den Bikinibereich"
    },
    slug: "lazerna-epilyatsiya-zony-bikini",
    mainImage: "https://biomedlaser.ru/upload/resize_cache/medialibrary/2e7/248_165_2/nmrzr1munwh1v87lrkxo5ldyhr3yvq7b.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Епіляція бікіні: впевненість, комфорт та гігієна",
          ru: "Эпиляция бикини: уверенность, комфорт и гигиена",
          en: "Bikini Epilation: Confidence, Comfort, and Hygiene",
          de: "Bikini-Epilation: Selbstvertrauen, Komfort und Hygiene"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазерна епіляція зони бікіні — це найкращий спосіб позбутися небажаного волосся в інтимній зоні. Процедура дозволяє назавжди забути про подразнення від гоління, біль від воскової депіляції та проблему врослого волосся. Ви отримуєте ідеально гладеньку шкіру, відчуття комфорту та бездоганний вигляд у будь-якій ситуації — на пляжі, в басейні чи в повсякденному житті.",
          ru: "Лазерная эпиляция зоны бикини — это лучший способ избавиться от нежелательных волос в интимной зоне. Процедура позволяет навсегда забыть о раздражении от бритья, боли от восковой депиляции и проблеме вросших волос. Вы получаете идеально гладкую кожу, чувство комфорта и безупречный вид в любой ситуации — на пляже, в бассейне или в повседневной жизни.",
          en: "Laser hair removal for the bikini area is the best way to get rid of unwanted hair in the intimate zone. The procedure allows you to permanently forget about irritation from shaving, the pain of waxing, and the problem of ingrown hairs. You get perfectly smooth skin, a feeling of comfort, and a flawless look in any situation - at the beach, in the pool, or in everyday life.",
          de: "Die Laser-Haarentfernung für den Bikinibereich ist die beste Methode, um unerwünschte Haare in der Intimzone loszuwerden. Das Verfahren ermöglicht es Ihnen, Irritationen durch Rasieren, den Schmerz des Wachsens und das Problem eingewachsener Haare dauerhaft zu vergessen. Sie erhalten perfekt glatte Haut, ein Gefühl von Komfort und ein makelloses Aussehen in jeder Situation - am Strand, im Schwimmbad oder im Alltag."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Види епіляції бікіні",
          ru: "Виды эпиляции бикини",
          en: "Types of Bikini Epilation",
          de: "Arten der Bikini-Epilation"
        }
      },
      {
        type: "list",
        content: {
          uk: "Класичне бікіні (по лінії білизни): видалення волосся, яке виступає за краї класичних трусиків.\nГлибоке бікіні (екстра, тотальне): повне видалення волосся з лобка, статевих губ та міжсідничної складки.",
          ru: "Классическое бикини (по линии белья): удаление волос, которые выступают за края классических трусиков.\nГлубокое бикини (экстра, тотальное): полное удаление волос с лобка, половых губ и межъягодичной складки.",
          en: "Classic Bikini (along the panty line): removal of hair that extends beyond the edges of classic underwear.\nDeep Bikini (extra, total): complete removal of hair from the pubic mound, labia, and intergluteal cleft.",
          de: "Klassischer Bikini (entlang der Bikinilinie): Entfernung von Haaren, die über die Ränder der klassischen Unterwäsche hinausragen.\nTiefer Bikini (Extra, Total): vollständige Entfernung der Haare vom Schamhügel, den Schamlippen und der Gesäßfalte."
        }
      },
      {
        type: "image",
        content: { image: "https://1skin.ru/media/services/service/photo/57a650ad78144a8a81eba7fe70c80e71.jpg" },
        sideText: {
          uk: "Шкіра в зоні бікіні дуже чутлива, тому переваги лазерної епіляції, яка не травмує шкіру, тут найбільш очевидні.",
          ru: "Кожа в зоне бикини очень чувствительная, поэтому преимущества лазерной эпиляции, которая не травмирует кожу, здесь наиболее очевидны.",
          en: "The skin in the bikini area is very sensitive, so the benefits of laser hair removal, which does not traumatize the skin, are most evident here.",
          de: "Die Haut im Bikinibereich ist sehr empfindlich, daher sind die Vorteile der Laser-Haarentfernung, die die Haut nicht traumatisiert, hier am deutlichsten."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Чому це краще за інші методи?",
          ru: "Почему это лучше других методов?",
          en: "Why is it better than other methods?",
          de: "Warum ist es besser als andere Methoden?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Головна перевага — довготривалий результат. Після курсу процедур ви позбудетеся 90-95% волосся. Лазерна епіляція також вирішує проблему фолікуліту (запалення фолікулів) та врослого волосся, роблячи шкіру не тільки гладенькою, але й здоровою. Процедура є гігієнічною та допомагає підтримувати відчуття свіжості.",
          ru: "Главное преимущество — долговременный результат. После курса процедур вы избавитесь от 90-95% волос. Лазерная эпиляция также решает проблему фолликулита (воспаления фолликулов) и вросших волос, делая кожу не только гладкой, но и здоровой. Процедура гигиенична и помогает поддерживать ощущение свежести.",
          en: "The main advantage is the long-lasting result. After a course of procedures, you will get rid of 90-95% of the hair. Laser hair removal also solves the problem of folliculitis (inflammation of the follicles) and ingrown hairs, making the skin not only smooth but also healthy. The procedure is hygienic and helps maintain a feeling of freshness.",
          de: "Der Hauptvorteil ist das langanhaltende Ergebnis. Nach einem Behandlungskurs werden Sie 90-95% der Haare los. Die Laser-Haarentfernung löst auch das Problem der Follikulitis (Entzündung der Follikel) und eingewachsener Haare und macht die Haut nicht nur glatt, sondern auch gesund. Das Verfahren ist hygienisch und hilft, ein Gefühl von Frische zu bewahren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та підготовка",
          ru: "Курс процедур и подготовка",
          en: "Course of Procedures and Preparation",
          de: "Behandlungskurs und Vorbereitung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Через високу чутливість та гормональну залежність зони, курс може бути дещо довшим і складає 8-12 процедур. Інтервал між сеансами — 4-6 тижнів. За день до візиту необхідно ретельно поголити волосся. Також важливо уникати сонячних променів та солярію за 2 тижні до та після процедури.",
          ru: "Из-за высокой чувствительности и гормональной зависимости зоны, курс может быть несколько длиннее и составляет 8-12 процедур. Интервал между сеансами — 4-6 недель. За день до визита необходимо тщательно побрить волосы. Также важно избегать солнечных лучей и солярия за 2 недели до и после процедуры.",
          en: "Due to the high sensitivity and hormonal dependence of the area, the course may be slightly longer, consisting of 8-12 procedures. The interval between sessions is 4-6 weeks. The day before the visit, the hair must be carefully shaved. It is also important to avoid sunlight and tanning beds for 2 weeks before and after the procedure.",
          de: "Aufgrund der hohen Empfindlichkeit und hormonellen Abhängigkeit des Bereichs kann der Kurs etwas länger sein und aus 8-12 Behandlungen bestehen. Der Abstand zwischen den Sitzungen beträgt 4-6 Wochen. Am Tag vor dem Besuch müssen die Haare sorgfältig rasiert werden. Es ist auch wichtig, 2 Wochen vor und nach dem Eingriff Sonnenlicht und Solarien zu meiden."
        }
      }
    ],
    faqs: ["faq_laser_bikini_1", "faq_laser_bikini_2"],
    doctors: ["doctor_laser_specialist_1", "doctor_laser_specialist_2"]
  },


  {
    id: "subservice43", // НОВАЯ ПОДУСЛУГА
    serviceId: "service11", // Привязка к новой основной услуге "Лазерне видалення"
    title: {
      uk: "Видалення постакне",
      ru: "Удаление постакне",
      en: "Post-Acne Scar Removal",
      de: "Entfernung von Post-Akne-Narben"
    },
    slug: "vydalennya-postakne",
    mainImage: "https://citymed74.ru/upload/iblock/e6b/e6b91f006ee44941f1c66262713fd046.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерне шліфування: гладенька шкіра після акне",
          ru: "Лазерная шлифовка: гладкая кожа после акне",
          en: "Laser Resurfacing: Smooth Skin After Acne",
          de: "Laser-Resurfacing: Glatte Haut nach Akne"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Постакне — це стійкі зміни шкіри, що залишаються після вугрової хвороби. Вони можуть проявлятися у вигляді атрофічних рубців (ямки, «кратери»), застійних плям (червоні або синюшні сліди) та гіперпігментації. Фракційне лазерне шліфування є найефективнішим методом корекції саме рубцевих змін, оскільки воно працює на глибокому рівні, перебудовуючи структуру шкіри.",
          ru: "Постакне — это стойкие изменения кожи, которые остаются после угревой болезни. Они могут проявляться в виде атрофических рубцов (ямки, «кратеры»), застойных пятен (красные или синюшные следы) и гиперпигментации. Фракционная лазерная шлифовка является самым эффективным методом коррекции именно рубцовых изменений, так как она работает на глубоком уровне, перестраивая структуру кожи.",
          en: "Post-acne refers to persistent skin changes that remain after acne. They can manifest as atrophic scars (pits, \"craters\"), stagnant spots (red or bluish marks), and hyperpigmentation. Fractional laser resurfacing is the most effective method for correcting scar changes, as it works at a deep level, remodeling the skin's structure.",
          de: "Post-Akne bezieht sich auf anhaltende Hautveränderungen, die nach Akne zurückbleiben. Sie können sich als atrophische Narben (Gruben, „Krater“), Stauungsflecken (rote oder bläuliche Flecken) und Hyperpigmentierung manifestieren. Das fraktionierte Laser-Resurfacing ist die effektivste Methode zur Korrektur von Narbenveränderungen, da es auf einer tiefen Ebene arbeitet und die Hautstruktur umgestaltet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як працює фракційний лазер?",
          ru: "Как работает фракционный лазер?",
          en: "How Does a Fractional Laser Work?",
          de: "Wie funktioniert ein fraktionierter Laser?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазерний промінь ділиться на сотні мікропроменів, які створюють у шкірі мікроскопічні зони термічного пошкодження (мікротермальні лікувальні зони). Клітини навколо цих зон залишаються неушкодженими і починають активно ділитися, синтезуючи новий колаген та еластин. Цей процес «заповнює» рубцеві дефекти зсередини, вирівнюючи рельєф шкіри. Старий, дефектний колаген руйнується, а на його місці утворюється нова, здорова тканина.",
          ru: "Лазерный луч делится на сотни микролучей, которые создают в коже микроскопические зоны термического повреждения (микротермальные лечебные зоны). Клетки вокруг этих зон остаются неповрежденными и начинают активно делиться, синтезируя новый коллаген и эластин. Этот процесс «заполняет» рубцовые дефекты изнутри, выравнивая рельеф кожи. Старый, дефектный коллаген разрушается, а на его месте образуется новая, здоровая ткань.",
          en: "The laser beam is divided into hundreds of microbeams that create microscopic zones of thermal damage (microthermal treatment zones) in the skin. The cells around these zones remain intact and begin to actively divide, synthesizing new collagen and elastin. This process \"fills\" the scar defects from within, evening out the skin's texture. Old, defective collagen is destroyed, and new, healthy tissue is formed in its place.",
          de: "Der Laserstrahl wird in Hunderte von Mikrostrahlen aufgeteilt, die mikroskopisch kleine Zonen thermischer Schädigung (mikrothermische Behandlungszonen) in der Haut erzeugen. Die Zellen um diese Zonen herum bleiben intakt und beginnen sich aktiv zu teilen, wobei sie neues Kollagen und Elastin synthetisieren. Dieser Prozess „füllt“ die Narbendefekte von innen heraus und glättet die Hauttextur. Altes, defektes Kollagen wird zerstört, und an seiner Stelle bildet sich neues, gesundes Gewebe."
        }
      },
      {
        type: "image",
        content: { image: "https://cdn.lifehacker.ru/wp-content/uploads/2023/04/shutterstock_1296050599_1686213709-e1686213760329.jpg" },
        sideText: {
          uk: "Процедура ефективна навіть для застарілих та глибоких рубців, дозволяючи значно покращити вигляд шкіри.",
          ru: "Процедура эффективна даже для застарелых и глубоких рубцов, позволяя значительно улучшить вид кожи.",
          en: "The procedure is effective even for old and deep scars, significantly improving the skin's appearance.",
          de: "Das Verfahren ist selbst bei alten und tiefen Narben wirksam und verbessert das Erscheinungsbild der Haut erheblich."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результати лазерного шліфування постакне",
          ru: "Результаты лазерной шлифовки постакне",
          en: "Results of Post-Acne Laser Resurfacing",
          de: "Ergebnisse des Post-Akne-Laser-Resurfacing"
        }
      },
      {
        type: "list",
        content: {
          uk: "Вирівнювання рельєфу шкіри, зменшення глибини рубців.\nЗвуження розширених пор.\nПокращення тону та текстури шкіри.\nПідвищення пружності та щільності шкіри.",
          ru: "Выравнивание рельефа кожи, уменьшение глубины рубцов.\nСужение расширенных пор.\nУлучшение тона и текстуры кожи.\nПовышение упругости и плотности кожи.",
          en: "Evening out of skin texture, reduction of scar depth.\nNarrowing of enlarged pores.\nImprovement of skin tone and texture.\nIncreased skin firmness and density.",
          de: "Glättung der Hauttextur, Reduzierung der Narbentiefe.\nVerengung erweiterter Poren.\nVerbesserung von Hautton und -textur.\nErhöhte Hautfestigkeit und -dichte."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процес лікування та реабілітація",
          ru: "Процесс лечения и реабилитация",
          en: "Treatment Process and Recovery",
          de: "Behandlungsprozess und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура проводиться під аплікаційною анестезією. Після сеансу спостерігається почервоніння та набряк, які тримаються 2-4 дні. Потім починається період легкого лущення. Повна реабілітація займає 5-7 днів. Весь цей час необхідно використовувати спеціальні регенеруючі засоби та сонцезахист з SPF 50+. Для досягнення максимального результату необхідний курс з 3-5 процедур з інтервалом в 1-1.5 місяця.",
          ru: "Процедура проводится под аппликационной анестезией. После сеанса наблюдается покраснение и отек, которые держатся 2-4 дня. Затем начинается период легкого шелушения. Полная реабилитация занимает 5-7 дней. Все это время необходимо использовать специальные регенерирующие средства и солнцезащиту с SPF 50+. Для достижения максимального результата необходим курс из 3-5 процедур с интервалом в 1-1.5 месяца.",
          en: "The procedure is performed under topical anesthesia. After the session, redness and swelling are observed for 2-4 days. Then, a period of light peeling begins. Full recovery takes 5-7 days. During this time, it is necessary to use special regenerating products and sunscreen with SPF 50+. To achieve the maximum result, a course of 3-5 procedures with an interval of 1-1.5 months is required.",
          de: "Das Verfahren wird unter topischer Anästhesie durchgeführt. Nach der Sitzung werden Rötungen und Schwellungen für 2-4 Tage beobachtet. Dann beginnt eine Phase leichten Schälens. Die vollständige Genesung dauert 5-7 Tage. Während dieser Zeit ist es notwendig, spezielle regenerierende Produkte und Sonnenschutzmittel mit LSF 50+ zu verwenden. Um das maximale Ergebnis zu erzielen, ist ein Kurs von 3-5 Behandlungen im Abstand von 1-1,5 Monaten erforderlich."
        }
      }
    ],
    faqs: ["faq_laser_postacne_1", "faq_laser_postacne_2"],
    doctors: ["doctor_dermatologist_1", "doctor_cosmetologist_1"]
  },

  {
    id: "subservice44", // НОВАЯ ПОДУСЛУГА
    serviceId: "service11", // Привязка к основной услуге "Лазерне видалення"
    title: {
      uk: "Видалення рубців після операцій",
      ru: "Удаление рубцов после операций",
      en: "Post-Surgical Scar Removal",
      de: "Entfernung von postoperativen Narben"
    },
    slug: "vydalennya-rubtsiv-pislya-operatsiy",
    mainImage: "https://www.premium-a.ru/wp-content/uploads/post/5450/rubtsi.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерна корекція: зробіть шрами менш помітними",
          ru: "Лазерная коррекция: сделайте шрамы менее заметными",
          en: "Laser Correction: Make Scars Less Noticeable",
          de: "Laserkorrektur: Machen Sie Narben weniger sichtbar"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Рубці та шрами після хірургічних втручань (кесарів розтин, апендектомія, пластичні операції) можуть залишатися на все життя, нагадуючи про перенесену операцію. Сучасні технології фракційного лазерного шліфування дозволяють значно покращити зовнішній вигляд рубцевої тканини, зробити її більш еластичною, вирівняти рельєф та колір, наближаючи до здорової шкіри.",
          ru: "Рубцы и шрамы после хирургических вмешательств (кесарево сечение, аппендэктомия, пластические операции) могут оставаться на всю жизнь, напоминая о перенесенной операции. Современные технологии фракционной лазерной шлифовки позволяют значительно улучшить внешний вид рубцовой ткани, сделать её более эластичной, выровнять рельеф и цвет, приближая к здоровой коже.",
          en: "Scars from surgical interventions (cesarean section, appendectomy, plastic surgery) can remain for life, reminding of the past operation. Modern fractional laser resurfacing technologies can significantly improve the appearance of scar tissue, make it more elastic, even out its texture and color, bringing it closer to healthy skin.",
          de: "Narben von chirurgischen Eingriffen (Kaiserschnitt, Appendektomie, plastische Chirurgie) können ein Leben lang bleiben und an die vergangene Operation erinnern. Moderne fraktionierte Laser-Resurfacing-Technologien können das Erscheinungsbild von Narbengewebe erheblich verbessern, es elastischer machen, seine Textur und Farbe ausgleichen und es gesunder Haut annähern."
        }
      },
      {
        type: "heading",
        content: {
          uk: "З якими типами рубців ми працюємо?",
          ru: "С какими типами рубцов мы работаем?",
          en: "What Types of Scars Do We Work With?",
          de: "Mit welchen Arten von Narben arbeiten wir?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Нормотрофічні рубці: плоскі, світлі шрами.\nАтрофічні рубці: западаючі, втягнуті рубці.\nГіпертрофічні рубці: випуклі рубці, що не виходять за межі рани.\n*Примітка: ми не працюємо з келоїдними рубцями, оскільки лазерне шліфування може спровокувати їх ріст.",
          ru: "Нормотрофические рубцы: плоские, светлые шрамы.\nАтрофические рубцы: западающие, втянутые рубцы.\nГипертрофические рубцы: выпуклые рубцы, не выходящие за пределы раны.\n*Примечание: мы не работаем с келоидными рубцами, так как лазерная шлифовка может спровоцировать их рост.",
          en: "Normotrophic scars: flat, light-colored scars.\nAtrophic scars: sunken, indented scars.\nHypertrophic scars: raised scars that do not extend beyond the wound boundaries.\n*Note: we do not work with keloid scars, as laser resurfacing can provoke their growth.",
          de: "Normotrophe Narben: flache, helle Narben.\nAtrophe Narben: eingesunkene, eingezogene Narben.\nHypertrophe Narben: erhabene Narben, die nicht über die Wundgrenzen hinausgehen.\n*Hinweis: Wir arbeiten nicht mit Keloidnarben, da Laser-Resurfacing deren Wachstum provozieren kann."
        }
      },
      {
        type: "image",
        content: { image: "https://doctor-sokolov.ru/upload/site/seo/rubtsy-posle-blefaroplastiki-1.jpg" },
        sideText: {
          uk: "Чим раніше почати корекцію «свіжого» рубця (після повного загоєння), тим кращого результату можна досягти.",
          ru: "Чем раньше начать коррекцию «свежего» рубца (после полного заживления), тем лучшего результата можно добиться.",
          en: "The sooner you start correcting a \"fresh\" scar (after complete healing), the better the result you can achieve.",
          de: "Je früher Sie mit der Korrektur einer „frischen“ Narbe beginnen (nach vollständiger Heilung), desto bessere Ergebnisse können Sie erzielen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Механізм дії лазера на рубець",
          ru: "Механизм действия лазера на рубец",
          en: "Mechanism of Laser Action on a Scar",
          de: "Wirkmechanismus des Lasers auf eine Narbe"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Фракційний лазер створює в товщі рубцевої тканини мікроскопічні стовпчики коагуляції. Це запускає потужний процес ремоделювання: стара, груба сполучна тканина руйнується, а на її місці клітини шкіри починають активно виробляти новий, здоровий колаген та еластин. В результаті рубець поступово розм'якшується, його рельєф та колір вирівнюються.",
          ru: "Фракционный лазер создает в толще рубцовой ткани микроскопические столбики коагуляции. Это запускает мощный процесс ремоделирования: старая, грубая соединительная ткань разрушается, а на её месте клетки кожи начинают активно вырабатывать новый, здоровый коллаген и эластин. В результате рубец постепенно размягчается, его рельеф и цвет выравниваются.",
          en: "The fractional laser creates microscopic columns of coagulation within the scar tissue. This triggers a powerful remodeling process: old, rough connective tissue is destroyed, and in its place, skin cells begin to actively produce new, healthy collagen and elastin. As a result, the scar gradually softens, and its texture and color even out.",
          de: "Der fraktionierte Laser erzeugt mikroskopisch kleine Koagulationssäulen im Narbengewebe. Dies löst einen starken Umbauprozess aus: Altes, raues Bindegewebe wird zerstört, und an seiner Stelle beginnen die Hautzellen aktiv, neues, gesundes Kollagen und Elastin zu produzieren. Dadurch wird die Narbe allmählich weicher, und ihre Textur und Farbe gleichen sich aus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс лікування та очікування",
          ru: "Курс лечения и ожидания",
          en: "Treatment Course and Expectations",
          de: "Behandlungskurs und Erwartungen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Важливо розуміти, що повністю видалити рубець неможливо, але лазерна шліфовка дозволяє зробити його максимально непомітним. Для досягнення гарного результату потрібен курс з 4-6 процедур з інтервалом 1-2 місяці. Період реабілітації після кожної процедури (почервоніння, набряк, лущення) триває 5-10 днів.",
          ru: "Важно понимать, что полностью удалить рубец невозможно, но лазерная шлифовка позволяет сделать его максимально незаметным. Для достижения хорошего результата требуется курс из 4-6 процедур с интервалом в 1-2 месяца. Период реабилитации после каждой процедуры (покраснение, отек, шелушение) длится 5-10 дней.",
          en: "It is important to understand that it is impossible to completely remove a scar, but laser resurfacing can make it as inconspicuous as possible. To achieve a good result, a course of 4-6 procedures with an interval of 1-2 months is required. The recovery period after each procedure (redness, swelling, peeling) lasts 5-10 days.",
          de: "Es ist wichtig zu verstehen, dass es unmöglich ist, eine Narbe vollständig zu entfernen, aber Laser-Resurfacing kann sie so unauffällig wie möglich machen. Um ein gutes Ergebnis zu erzielen, ist ein Kurs von 4-6 Behandlungen im Abstand von 1-2 Monaten erforderlich. Die Erholungsphase nach jeder Behandlung (Rötung, Schwellung, Schuppung) dauert 5-10 Tage."
        }
      }
    ],
    faqs: ["faq_laser_scars_1", "faq_laser_scars_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1"]
  },

  {
    id: "subservice45", // НОВАЯ ПОДУСЛУГА
    serviceId: "service11", // Привязка к основной услуге "Лазерне видалення"
    title: {
      uk: "Видалення розтяжок після вагітності",
      ru: "Удаление растяжек после беременности",
      en: "Post-Pregnancy Stretch Mark Removal",
      de: "Entfernung von Dehnungsstreifen nach der Schwangerschaft"
    },
    slug: "vydalennya-roztyazhok-pislya-vahitnosti",
    mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7XHvv9mn6m6UdcgHAU9tHBSxKHxHIMGxq7A&s",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерна корекція розтяжок: повернення краси шкіри живота та стегон",
          ru: "Лазерная коррекция растяжек: возвращение красоты коже живота и бедер",
          en: "Laser Stretch Mark Correction: Restoring Beauty to the Skin of the Abdomen and Thighs",
          de: "Laser-Dehnungsstreifenkorrektur: Wiederherstellung der Schönheit der Haut an Bauch und Oberschenkeln"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Розтяжки (стриї) — це атрофічні рубці, які з'являються через розриви волокон колагену та еластину при надмірному розтягненні шкіри. Вагітність є однією з найчастіших причин їх появи на животі, стегнах та грудях. Фракційне лазерне шліфування — це найефективніший на сьогодні метод, що дозволяє значно зменшити видимість розтяжок, вирівняти текстуру шкіри та стимулювати її оновлення.",
          ru: "Растяжки (стрии) — это атрофические рубцы, которые появляются из-за разрывов волокон коллагена и эластина при чрезмерном растяжении кожи. Беременность является одной из самых частых причин их появления на животе, бедрах и груди. Фракционная лазерная шлифовка — это самый эффективный на сегодняшний день метод, позволяющий значительно уменьшить видимость растяжек, выровнять текстуру кожи и стимулировать её обновление.",
          en: "Stretch marks (striae) are atrophic scars that appear due to tears in collagen and elastin fibers when the skin is overstretched. Pregnancy is one of the most common causes of their appearance on the abdomen, thighs, and breasts. Fractional laser resurfacing is currently the most effective method to significantly reduce the visibility of stretch marks, even out skin texture, and stimulate its renewal.",
          de: "Dehnungsstreifen (Striae) sind atrophische Narben, die durch Risse in Kollagen- und Elastinfasern bei übermäßiger Dehnung der Haut entstehen. Die Schwangerschaft ist eine der häufigsten Ursachen für ihr Auftreten an Bauch, Oberschenkeln und Brüsten. Das fraktionierte Laser-Resurfacing ist derzeit die effektivste Methode, um die Sichtbarkeit von Dehnungsstreifen deutlich zu reduzieren, die Hautstruktur auszugleichen und ihre Erneuerung zu stimulieren."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як лазер діє на розтяжки?",
          ru: "Как лазер действует на растяжки?",
          en: "How Does the Laser Affect Stretch Marks?",
          de: "Wie wirkt der Laser auf Dehnungsstreifen?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Фракційний лазер створює в шкірі тисячі мікроскопічних каналів, випаровуючи стару, пошкоджену тканину всередині розтяжки. Це запускає природний процес загоєння. Організм починає інтенсивно виробляти нові волокна колагену та еластину, які «заповнюють» розтяжку зсередини. В результаті її глибина зменшується, колір наближається до кольору здорової шкіри, а рельєф вирівнюється.",
          ru: "Фракционный лазер создает в коже тысячи микроскопических каналов, испаряя старую, поврежденную ткань внутри растяжки. Это запускает естественный процесс заживления. Организм начинает интенсивно вырабатывать новые волокна коллагена и эластина, которые «заполняют» растяжку изнутри. В результате её глубина уменьшается, цвет приближается к цвету здоровой кожи, а рельеф выравнивается.",
          en: "The fractional laser creates thousands of microscopic channels in the skin, vaporizing old, damaged tissue within the stretch mark. This triggers the natural healing process. The body begins to intensively produce new collagen and elastin fibers that \"fill\" the stretch mark from the inside. As a result, its depth decreases, the color approaches that of healthy skin, and the texture evens out.",
          de: "Der fraktionierte Laser erzeugt Tausende von mikroskopisch kleinen Kanälen in der Haut und verdampft altes, beschädigtes Gewebe innerhalb des Dehnungsstreifens. Dies löst den natürlichen Heilungsprozess aus. Der Körper beginnt, intensiv neue Kollagen- und Elastinfasern zu produzieren, die den Dehnungsstreifen von innen „auffüllen“. Dadurch verringert sich seine Tiefe, die Farbe nähert sich der von gesunder Haut an und die Textur wird ausgeglichen."
        }
      },
      {
        type: "image",
        content: { image: "https://odessa.aura-clinic.com/upload/630da3b719536.jpg" },
        sideText: {
          uk: "Найкраще лазерна корекція працює на «молодих» рожевих та фіолетових розтяжках, але також значно покращує вигляд старих, білих стрий.",
          ru: "Лучше всего лазерная коррекция работает на «молодых» розовых и фиолетовых растяжках, но также значительно улучшает вид старых, белых стрий.",
          en: "Laser correction works best on \"young\" pink and purple stretch marks, but it also significantly improves the appearance of old, white striae.",
          de: "Die Laserkorrektur funktioniert am besten bei „jungen“ rosa und lila Dehnungsstreifen, verbessert aber auch das Erscheinungsbild alter, weißer Striae erheblich."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Очікувані результати",
          ru: "Ожидаемые результаты",
          en: "Expected Results",
          de: "Erwartete Ergebnisse"
        }
      },
      {
        type: "list",
        content: {
          uk: "Зменшення ширини та глибини розтяжок.\nВирівнювання кольору (білі розтяжки стають менш помітними, а червоні — світлішають).\nПідвищення пружності та щільності шкіри в зоні корекції.\nЗагальне покращення текстури шкіри.",
          ru: "Уменьшение ширины и глубины растяжек.\nВыравнивание цвета (белые растяжки становятся менее заметными, а красные — светлеют).\nПовышение упругости и плотности кожи в зоне коррекции.\nОбщее улучшение текстуры кожи.",
          en: "Reduction in the width and depth of stretch marks.\nEvening out of color (white stretch marks become less noticeable, and red ones lighten).\nIncreased firmness and density of the skin in the corrected area.\nOverall improvement in skin texture.",
          de: "Verringerung der Breite und Tiefe von Dehnungsstreifen.\nAusgleich der Farbe (weiße Dehnungsstreifen werden weniger auffällig und rote hellen sich auf).\nErhöhte Festigkeit und Dichte der Haut im korrigierten Bereich.\nAllgemeine Verbesserung der Hauttextur."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та реабілітація",
          ru: "Курс процедур и реабилитация",
          en: "Course of Procedures and Recovery",
          de: "Behandlungskurs und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення видимого ефекту необхідний курс з 4-6 процедур, які проводяться з інтервалом в 1 місяць. Після сеансу шкіра буде почервонілою та набряклою, як після сонячного опіку. Ця реакція проходить за 2-4 дні. Важливо інтенсивно зволожувати шкіру та захищати її від сонця протягом всього курсу лікування.",
          ru: "Для достижения видимого эффекта необходим курс из 4-6 процедур, которые проводятся с интервалом в 1 месяц. После сеанса кожа будет покрасневшей и отечной, как после солнечного ожога. Эта реакция проходит за 2-4 дня. Важно интенсивно увлажнять кожу и защищать её от солнца на протяжении всего курса лечения.",
          en: "To achieve a visible effect, a course of 4-6 procedures performed at 1-month intervals is required. After the session, the skin will be red and swollen, similar to a sunburn. This reaction subsides within 2-4 days. It is important to intensively moisturize the skin and protect it from the sun throughout the entire course of treatment.",
          de: "Um einen sichtbaren Effekt zu erzielen, ist ein Kurs von 4-6 Behandlungen im Abstand von 1 Monat erforderlich. Nach der Sitzung wird die Haut gerötet und geschwollen sein, ähnlich wie bei einem Sonnenbrand. Diese Reaktion klingt innerhalb von 2-4 Tagen ab. Es ist wichtig, die Haut während des gesamten Behandlungsverlaufs intensiv mit Feuchtigkeit zu versorgen und vor der Sonne zu schützen."
        }
      }
    ],
    faqs: ["faq_laser_stretch_marks_1", "faq_laser_stretch_marks_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1", "doctor_body_specialist_1"]
  },

  {
    id: "subservice46", // НОВАЯ ПОДУСЛUGА
    serviceId: "service11", // Привязка к основной услуге "Лазерне видалення"
    title: {
      uk: "Шліфування атрофічних рубців",
      ru: "Шлифовка атрофических рубцов",
      en: "Atrophic Scar Resurfacing",
      de: "Behandlung von atrophischen Narben"
    },
    slug: "shlifuvannya-atrofichnykh-rubtsiv",
    mainImage: "https://lazersvit.com/storage/files/2021/12/17/aqtrophic-scars-3-min.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лазерне шліфування: вирівнювання рельєфу та відновлення гладкості шкіри",
          ru: "Лазерная шлифовка: выравнивание рельефа и восстановление гладкости кожи",
          en: "Laser Resurfacing: Evening Out Texture and Restoring Skin Smoothness",
          de: "Laser-Resurfacing: Glättung der Textur und Wiederherstellung der Hautglätte"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Атрофічні рубці — це рубці, що знаходяться нижче рівня навколишньої шкіри, утворюючи «ямки» та заглиблення. Вони виникають через недостатнє вироблення колагену в процесі загоєння після травм, операцій, вітряної віспи або важких форм акне. Фракційне лазерне шліфування є найефективнішим методом для корекції таких дефектів, оскільки воно стимулює шкіру до глибокої перебудови та виробництва нових колагенових волокон, що «виштовхують» дно рубця назовні.",
          ru: "Атрофические рубцы — это рубцы, которые находятся ниже уровня окружающей кожи, образуя «ямки» и углубления. Они возникают из-за недостаточной выработки коллагена в процессе заживления после травм, операций, ветряной оспы или тяжелых форм акне. Фракционная лазерная шлифовка является самым эффективным методом для коррекции таких дефектов, так как она стимулирует кожу к глубокой перестройке и производству новых коллагеновых волокон, которые «выталкивают» дно рубца наружу.",
          en: "Atrophic scars are scars that lie below the level of the surrounding skin, forming \"pits\" and depressions. They occur due to insufficient collagen production during the healing process after injuries, surgeries, chickenpox, or severe forms of acne. Fractional laser resurfacing is the most effective method for correcting such defects, as it stimulates the skin to undergo deep remodeling and produce new collagen fibers that \"push\" the bottom of the scar upwards.",
          de: "Atrophe Narben sind Narben, die unter dem Niveau der umgebenden Haut liegen und „Gruben“ und Vertiefungen bilden. Sie entstehen durch eine unzureichende Kollagenproduktion während des Heilungsprozesses nach Verletzungen, Operationen, Windpocken oder schweren Formen von Akne. Das fraktionierte Laser-Resurfacing ist die wirksamste Methode zur Korrektur solcher Defekte, da es die Haut zu einer tiefen Umgestaltung und zur Produktion neuer Kollagenfasern anregt, die den Narbenboden nach oben „drücken“."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Принцип дії фракційного лазера",
          ru: "Принцип действия фракционного лазера",
          en: "Principle of Action of the Fractional Laser",
          de: "Wirkprinzip des fraktionierten Lasers"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазерний промінь створює в шкірі контрольовані мікропошкодження, випаровуючи стару рубцеву тканину. Це запускає каскад реакцій загоєння. Клітини шкіри (фібробласти) починають активно синтезувати новий, здоровий колаген та еластин. Цей процес ремоделювання призводить до поступового заповнення атрофічного дефекту, зменшення його глибини та вирівнювання загального рельєфу шкіри.",
          ru: "Лазерный луч создает в коже контролируемые микроповреждения, испаряя старую рубцовую ткань. Это запускает каскад реакций заживления. Клетки кожи (фибробласты) начинают активно синтезировать новый, здоровый коллаген и эластин. Этот процесс ремоделирования приводит к постепенному заполнению атрофического дефекта, уменьшению его глубины и выравниванию общего рельефа кожи.",
          en: "The laser beam creates controlled micro-injuries in the skin, vaporizing old scar tissue. This triggers a cascade of healing reactions. Skin cells (fibroblasts) begin to actively synthesize new, healthy collagen and elastin. This remodeling process leads to the gradual filling of the atrophic defect, reducing its depth and evening out the overall skin texture.",
          de: "Der Laserstrahl erzeugt kontrollierte Mikroverletzungen in der Haut und verdampft altes Narbengewebe. Dies löst eine Kaskade von Heilungsreaktionen aus. Hautzellen (Fibroblasten) beginnen, aktiv neues, gesundes Kollagen und Elastin zu synthetisieren. Dieser Umbauprozess führt zur allmählichen Füllung des atrophischen Defekts, zur Verringerung seiner Tiefe und zur Glättung der gesamten Hauttextur."
        }
      },
      {
        type: "image",
        content: { image: "https://lemarkel.ru/assets/images/products-new/lechenie-rubcov-kozhi2.jpg" },
        sideText: {
          uk: "Процедура підходить для корекції рубців будь-якої давності, але найкращі результати досягаються при роботі з відносно «свіжими» шрамами.",
          ru: "Процедура подходит для коррекции рубцов любой давности, но наилучшие результаты достигаются при работе с относительно «свежими» шрамами.",
          en: "The procedure is suitable for correcting scars of any age, but the best results are achieved when working with relatively \"fresh\" scars.",
          de: "Das Verfahren eignet sich zur Korrektur von Narben jeden Alters, aber die besten Ergebnisse werden bei der Arbeit mit relativ „frischen“ Narben erzielt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Яких результатів очікувати?",
          ru: "Каких результатов ожидать?",
          en: "What Results to Expect?",
          de: "Welche Ergebnisse sind zu erwarten?"
        }
      },
      {
        type: "list",
        content: {
          uk: "Значне зменшення глибини рубців.\nВирівнювання рельєфу та текстури шкіри.\nПокращення кольору рубцевої тканини.\nПідвищення щільності та пружності шкіри в зоні впливу.",
          ru: "Значительное уменьшение глубины рубцов.\nВыравнивание рельефа и текстуры кожи.\nУлучшение цвета рубцовой ткани.\nПовышение плотности и упругоosti кожи в зоне воздействия.",
          en: "Significant reduction in scar depth.\nEvening out of skin relief and texture.\nImproved color of the scar tissue.\nIncreased density and firmness of the skin in the treated area.",
          de: "Erhebliche Verringerung der Narbentiefe.\nGlättung von Hautrelief und -textur.\nVerbesserte Farbe des Narbengewebes.\nErhöhte Dichte und Festigkeit der Haut im behandelten Bereich."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та реабілітація",
          ru: "Курс процедур и реабилитация",
          en: "Course of Procedures and Recovery",
          de: "Behandlungskurs und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Корекція атрофічних рубців — це тривалий процес. Для видимого результату потрібен курс з 3-6 процедур з інтервалом 1-2 місяці. Період відновлення після кожної процедури займає 5-7 днів і супроводжується почервонінням, набряком та подальшим лущенням. Протягом усього курсу обов'язковим є використання сонцезахисних засобів.",
          ru: "Коррекция атрофических рубцов — это длительный процесс. Для видимого результата требуется курс из 3-6 процедур с интервалом в 1-2 месяца. Период восстановления после каждой процедуры занимает 5-7 дней и сопровождается покраснением, отеком и последующим шелушением. На протяжении всего курса обязательным является использование солнцезащитных средств.",
          en: "Correcting atrophic scars is a lengthy process. For a visible result, a course of 3-6 procedures with an interval of 1-2 months is required. The recovery period after each procedure takes 5-7 days and is accompanied by redness, swelling, and subsequent peeling. Throughout the entire course, the use of sunscreen is mandatory.",
          de: "Die Korrektur atrophischer Narben ist ein langwieriger Prozess. Für ein sichtbares Ergebnis ist ein Kurs von 3-6 Behandlungen im Abstand von 1-2 Monaten erforderlich. Die Erholungsphase nach jeder Behandlung dauert 5-7 Tage und wird von Rötungen, Schwellungen und anschließendem Schälen begleitet. Während des gesamten Kurses ist die Verwendung von Sonnenschutzmitteln obligatorisch."
        }
      }
    ],
    faqs: ["faq_laser_atrophic_scars_1", "faq_laser_atrophic_scars_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1"]
  },

  {
    id: "subservice47", // НОВАЯ ПОДУСЛУГА
    serviceId: "service12", // Привязка к новой основной услуге "ResurFX"
    title: {
      uk: "Омолодження обличчя",
      ru: "Омоложение лица",
      en: "Facial Rejuvenation",
      de: "Gesichtsverjüngung"
    },
    slug: "omolodzhennya-oblychchya-resurfx",
    mainImage: "https://albina.center/wp-content/uploads/2017/12/kekni-1.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Омолодження обличчя ResurFX: гладенька шкіра та рівний тон",
          ru: "Омоложение лица ResurFX: гладкая кожа и ровный тон",
          en: "ResurFX Facial Rejuvenation: Smooth Skin and Even Tone",
          de: "ResurFX-Gesichtsverjüngung: Glatte Haut und ebenmäßiger Teint"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура омолодження на апараті ResurFX — це ефективний спосіб боротьби з віковими змінами та недоліками шкіри з мінімальним дискомфортом та коротким періодом відновлення. Лазер стимулює природні процеси регенерації, що призводить до покращення текстури шкіри, звуження пор, розгладження зморшок та підвищення пружності. Ваше обличчя виглядатиме свіжим, здоровим та значно молодшим.",
          ru: "Процедура омоложения на аппарате ResurFX — это эффективный способ борьбы с возрастными изменениями и недостатками кожи с минимальным дискомфортом и коротким периодом восстановления. Лазер стимулирует естественные процессы регенерации, что приводит к улучшению текстуры кожи, сужению пор, разглаживанию морщин и повышению упругости. Ваше лицо будет выглядеть свежим, здоровым и значительно более молодым.",
          en: "The ResurFX rejuvenation procedure is an effective way to combat age-related changes and skin imperfections with minimal discomfort and a short recovery period. The laser stimulates natural regeneration processes, leading to improved skin texture, tightened pores, smoothed wrinkles, and increased firmness. Your face will look fresh, healthy, and significantly younger.",
          de: "Das ResurFX-Verjüngungsverfahren ist eine effektive Methode zur Bekämpfung von altersbedingten Veränderungen und Hautunreinheiten bei minimalem Unbehagen und kurzer Erholungszeit. Der Laser stimuliert die natürlichen Regenerationsprozesse, was zu einer verbesserten Hauttextur, verkleinerten Poren, geglätteten Falten und erhöhter Festigkeit führt. Ihr Gesicht wird frisch, gesund und deutlich jünger aussehen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Принцип неаблятивного фракційного омолодження",
          ru: "Принцип неаблятивного фракционного омоложения",
          en: "The Principle of Non-Ablative Fractional Rejuvenation",
          de: "Das Prinzip der nicht-ablativen fraktionierten Verjüngung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазер ResurFX створює в дермі мікроскопічні зони прогріву, не пошкоджуючи при цьому верхній шар шкіри. Це є ключовою перевагою, оскільки реабілітація проходить дуже швидко. У відповідь на контрольований прогрів клітини-фібробласти починають активно синтезувати новий колаген, який заміщує старий, пошкоджений. Це призводить до ущільнення шкіри та її природного омолодження зсередини.",
          ru: "Лазер ResurFX создает в дерме микроскопические зоны прогрева, не повреждая при этом верхний слой кожи. Это является ключевым преимуществом, так как реабилитация проходит очень быстро. В ответ на контролируемый прогрев клетки-фибробласты начинают активно синтезировать новый коллаген, который замещает старый, поврежденный. Это приводит к уплотнению кожи и её естественному омоложению изнутри.",
          en: "The ResurFX laser creates microscopic heating zones in the dermis without damaging the top layer of the skin. This is a key advantage, as recovery is very quick. In response to the controlled heating, fibroblast cells begin to actively synthesize new collagen, which replaces the old, damaged collagen. This leads to skin tightening and its natural rejuvenation from within.",
          de: "Der ResurFX-Laser erzeugt mikroskopisch kleine Erwärmungszonen in der Dermis, ohne die oberste Hautschicht zu beschädigen. Dies ist ein entscheidender Vorteil, da die Genesung sehr schnell verläuft. Als Reaktion auf die kontrollierte Erwärmung beginnen die Fibroblastenzellen aktiv, neues Kollagen zu synthetisieren, das das alte, beschädigte Kollagen ersetzt. Dies führt zu einer Hautstraffung und ihrer natürlichen Verjüngung von innen heraus."
        }
      },
      {
        type: "image",
        content: { image: "https://static.tildacdn.biz/tild3437-3632-4334-b062-643766323738/image.png" },
        sideText: {
          uk: "Завдяки унікальному сканеру CoolScan™, який забезпечує безперервне контактне охолодження, процедура проходить максимально комфортно.",
          ru: "Благодаря уникальному сканеру CoolScan™, который обеспечивает непрерывное контактное охлаждение, процедура проходит максимально комфортно.",
          en: "Thanks to the unique CoolScan™ scanner, which provides continuous contact cooling, the procedure is as comfortable as possible.",
          de: "Dank des einzigartigen CoolScan™-Scanners, der eine kontinuierliche Kontaktkühlung bietet, ist das Verfahren so angenehm wie möglich."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до омолодження ResurFX",
          ru: "Показания к омоложению ResurFX",
          en: "Indications for ResurFX Rejuvenation",
          de: "Indikationen für die ResurFX-Verjüngung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Дрібні та середні зморшки.\nВтрата пружності та еластичності шкіри.\nРозширені пори.\nНерівна текстура та тьмяний колір обличчя.\nПігментація та сонячні пошкодження.\nРубці постакне.",
          ru: "Мелкие и средние морщины.\nПотеря упругости и эластичности кожи.\nРасширенные поры.\nНеровная текстура и тусклый цвет лица.\nПигментация и солнечные повреждения.\nРубцы постакне.",
          en: "Fine and medium wrinkles.\nLoss of skin firmness and elasticity.\nEnlarged pores.\nUneven texture and dull complexion.\nPigmentation and sun damage.\nPost-acne scars.",
          de: "Feine und mittlere Falten.\nVerlust der Hautfestigkeit und -elastizität.\nVergrößerte Poren.\nUngleichmäßige Textur und fahler Teint.\nPigmentierung und Sonnenschäden.\nPost-Akne-Narben."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та реабілітація",
          ru: "Курс процедур и реабилитация",
          en: "Course of Procedures and Recovery",
          de: "Behandlungskurs und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення стійкого та вираженого результату рекомендується курс з 3-5 процедур з інтервалом в 1 місяць. Після сеансу спостерігається легке почервоніння та набряк, які проходять протягом 1-2 днів. Ви можете одразу повернутися до звичайного життя, дотримуючись рекомендацій лікаря щодо догляду та обов'язкового використання сонцезахисного крему.",
          ru: "Для достижения стойкого и выраженного результата рекомендуется курс из 3-5 процедур с интервалом в 1 месяц. После сеанса наблюдается легкое покраснение и отек, которые проходят в течение 1-2 дней. Вы можете сразу вернуться к обычной жизни, соблюдая рекомендации врача по уходу и обязательному использованию солнцезащитного крема.",
          en: "To achieve a stable and pronounced result, a course of 3-5 procedures with an interval of 1 month is recommended. After the session, slight redness and swelling are observed, which subside within 1-2 days. You can immediately return to your normal life by following the doctor's care recommendations and the mandatory use of sunscreen.",
          de: "Um ein stabiles und ausgeprägtes Ergebnis zu erzielen, wird ein Kurs von 3-5 Behandlungen im Abstand von 1 Monat empfohlen. Nach der Sitzung werden leichte Rötungen und Schwellungen beobachtet, die innerhalb von 1-2 Tagen abklingen. Sie können sofort in Ihr normales Leben zurückkehren, indem Sie die Pflegeempfehlungen des Arztes und die obligatorische Verwendung von Sonnenschutzmitteln befolgen."
        }
      }
    ],
    faqs: ["faq_resurfx_face_1", "faq_resurfx_face_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1", "doctor_cosmetologist_1"]
  },

  {
    id: "subservice48", // НОВАЯ ПОДУСЛУГА
    serviceId: "service12", // Привязка к основной услуге "ResurFX"
    title: {
      uk: "Омолодження зони шиї та декольте",
      ru: "Омоложение зоны шеи и декольте",
      en: "Neck and Décolleté Rejuvenation",
      de: "Verjüngung von Hals und Dekolleté"
    },
    slug: "omolodzhennya-shyi-ta-dekolte-resurfx",
    mainImage: "https://lemarkel.ru/assets/images/products/Microigolchatyj%20lifting/Mikroigolchatyj_lifting_decoilte1.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Омолодження шиї та декольте ResurFX: відновлення пружності та гладкості",
          ru: "Омоложение шеи и декольте ResurFX: восстановление упругости и гладкости",
          en: "ResurFX Neck and Décolleté Rejuvenation: Restoring Firmness and Smoothness",
          de: "ResurFX Hals- und Dekolleté-Verjüngung: Wiederherstellung von Festigkeit und Glätte"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Шкіра в зоні шиї та декольте надзвичайно тонка і ніжна, тому на ній раніше з'являються перші ознаки старіння: втрата пружності, горизонтальні зморшки («кільця Венери»), пігментація та судинні зміни. Неаблятивне фракційне омолодження ResurFX — це ідеальна процедура для делікатної роботи з цими зонами. Вона дозволяє значно покращити якість шкіри, ущільнити її та розгладити зморшки з мінімальним періодом відновлення.",
          ru: "Кожа в зоне шеи и декольте чрезвычайно тонкая и нежная, поэтому на ней раньше появляются первые признаки старения: потеря упругости, горизонтальные морщины («кольца Венеры»), пигментация и сосудистые изменения. Неаблятивное фракционное омоложение ResurFX — это идеальная процедура для деликатной работы с этими зонами. Она позволяет значительно улучшить качество кожи, уплотнить её и разгладить морщины с минимальным периодом восстановления.",
          en: "The skin on the neck and décolleté is extremely thin and delicate, which is why the first signs of aging appear there earlier: loss of firmness, horizontal wrinkles (\"Venus rings\"), pigmentation, and vascular changes. Non-ablative fractional rejuvenation ResurFX is an ideal procedure for delicate work on these areas. It significantly improves skin quality, thickens it, and smoothes wrinkles with a minimal recovery period.",
          de: "Die Haut an Hals und Dekolleté ist extrem dünn und empfindlich, weshalb dort die ersten Zeichen der Hautalterung früher auftreten: Festigkeitsverlust, horizontale Falten („Venusringe“), Pigmentierung und Gefäßveränderungen. Die nicht-ablative fraktionierte Verjüngung mit ResurFX ist ein ideales Verfahren für die sensible Arbeit in diesen Bereichen. Es verbessert die Hautqualität erheblich, verdichtet sie und glättet Falten bei minimaler Erholungszeit."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Які проблеми вирішує ResurFX в зоні шиї та декольте?",
          ru: "Какие проблемы решает ResurFX в зоне шеи и декольте?",
          en: "What problems does ResurFX solve in the neck and décolleté area?",
          de: "Welche Probleme löst ResurFX im Hals- und Dekolletébereich?"
        }
      },
      {
        type: "list",
        content: {
          uk: "В'ялість та зниження тонусу шкіри.\nГоризонтальні зморшки на шиї («кільця Венери»).\nДрібна сіточка зморшок в зоні декольте.\nПігментні плями, що з'явилися через вплив сонця.\nНерівна текстура шкіри.\nПочервоніння та дрібні судини (пойкілодермія).",
          ru: "Дряблость и снижение тонуса кожи.\nГоризонтальные морщины на шее («кольца Венеры»).\nМелкая сеточка морщин в зоне декольте.\nПигментные пятна, появившиеся из-за воздействия солнца.\nНеровная текстура кожи.\nПокраснения и мелкие сосуды (пойкилодермия).",
          en: "Skin laxity and loss of tone.\nHorizontal wrinkles on the neck (\"Venus rings\").\nFine lines in the décolleté area.\nPigment spots caused by sun exposure.\nUneven skin texture.\nRedness and small blood vessels (poikiloderma).",
          de: "Hautschlaffheit und Tonusverlust.\nHorizontale Falten am Hals („Venusringe“).\nFeine Linien im Dekolletébereich.\nPigmentflecken durch Sonneneinstrahlung.\nUngleichmäßige Hauttextur.\nRötungen und kleine Blutgefäße (Poikilodermie)."
        }
      },
      {
        type: "image",
        content: { image: "https://cosmed-spb.ru/wp-content/uploads/2024/04/lazer-shlif-sheya-anons.jpg" },
        sideText: {
          uk: "Лазер стимулює виробництво власного колагену, завдяки чому шкіра омолоджується природним шляхом, а ефект з часом тільки наростає.",
          ru: "Лазер стимулирует выработку собственного коллагена, благодаря чему кожа омолаживается естественным путем, а эффект со временем только нарастает.",
          en: "The laser stimulates the production of the skin's own collagen, causing it to rejuvenate naturally, and the effect only increases over time.",
          de: "Der Laser stimuliert die Produktion des hauteigenen Kollagens, wodurch sie sich auf natürliche Weise verjüngt und der Effekt mit der Zeit nur zunimmt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги процедури",
          ru: "Преимущества процедуры",
          en: "Advantages of the Procedure",
          de: "Vorteile des Verfahrens"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Головна перевага ResurFX — це ефективність при мінімальній травматизації. Оскільки поверхня шкіри не пошкоджується, ризик ускладнень мінімальний, а період реабілітації дуже короткий — легке почервоніння тримається всього 1-2 дні. Це дозволяє проводити процедуру навіть в сонячну пору року (за умови ретельного використання сонцезахисту).",
          ru: "Главное преимущество ResurFX — это эффективность при минимальной травматизации. Поскольку поверхность кожи не повреждается, риск осложнений минимален, а период реабилитации очень короткий — легкое покраснение держится всего 1-2 дня. Это позволяет проводить процедуру даже в солнечное время года (при условии тщательного использования солнцезащиты).",
          en: "The main advantage of ResurFX is its effectiveness with minimal trauma. Since the skin surface is not damaged, the risk of complications is minimal, and the recovery period is very short - slight redness lasts only 1-2 days. This allows the procedure to be performed even during the sunny season (with careful use of sunscreen).",
          de: "Der Hauptvorteil von ResurFX ist seine Wirksamkeit bei minimalem Trauma. Da die Hautoberfläche nicht beschädigt wird, ist das Komplikationsrisiko minimal und die Erholungszeit sehr kurz - leichte Rötungen halten nur 1-2 Tage an. Dies ermöglicht die Durchführung des Verfahrens auch in der sonnigen Jahreszeit (bei sorgfältiger Anwendung von Sonnenschutz)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungskurs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення найкращого результату рекомендується курс з 3-4 процедур з інтервалом в 4-5 тижнів. Оцінювати фінальний ефект варто через 3-6 місяців після завершення курсу, оскільки процес вироблення нового колагену є поступовим.",
          ru: "Для достижения наилучшего результата рекомендуется курс из 3-4 процедур с интервалом в 4-5 недель. Оценивать финальный эффект стоит через 3-6 месяцев после завершения курса, так как процесс выработки нового коллагена является постепенным.",
          en: "For the best result, a course of 3-4 procedures with an interval of 4-5 weeks is recommended. The final effect should be evaluated 3-6 months after the course is completed, as the process of new collagen production is gradual.",
          de: "Für das beste Ergebnis wird ein Kurs von 3-4 Behandlungen im Abstand von 4-5 Wochen empfohlen. Der endgültige Effekt sollte 3-6 Monate nach Abschluss des Kurses bewertet werden, da der Prozess der neuen Kollagenproduktion allmählich verläuft."
        }
      }
    ],
    faqs: ["faq_resurfx_neck_1", "faq_resurfx_neck_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1", "doctor_cosmetologist_1"]
  },
  {
    id: "subservice49", // НОВАЯ ПОДУСЛУГА
    serviceId: "service12", // Привязка к основной услуге "ResurFX"
    title: {
      uk: "Терапія постакне",
      ru: "Терапия постакне",
      en: "Post-Acne Therapy",
      de: "Post-Akne-Therapie"
    },
    slug: "terapiya-postakne-resurfx",
    mainImage: "https://semeyka.kh.ua/wp-content/uploads/laz-shlifovka-rubczov.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "ResurFX для лікування постакне: рівний рельєф без тривалої реабілітації",
          ru: "ResurFX для лечения постакне: ровный рельеф без длительной реабилитации",
          en: "ResurFX for Post-Acne Treatment: Smooth Texture without Long Recovery",
          de: "ResurFX zur Post-Akne-Behandlung: Glatte Textur ohne lange Erholungszeit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Постакне у вигляді атрофічних рубців (ямок) є одним з найскладніших наслідків вугрової хвороби. Неаблятивний фракційний лазер ResurFX є передовим методом для корекції таких станів. Він дозволяє ефективно вирівнювати рельєф шкіри, стимулюючи вироблення нового колагену, при цьому період відновлення є мінімальним порівняно з класичним лазерним шліфуванням.",
          ru: "Постакне в виде атрофических рубцов (ямок) является одним из самых сложных последствий угревой болезни. Неаблятивный фракционный лазер ResurFX является передовым методом для коррекции таких состояний. Он позволяет эффективно выравнивать рельеф кожи, стимулируя выработку нового коллагена, при этом период восстановления минимален по сравнению с классической лазерной шлифовкой.",
          en: "Post-acne in the form of atrophic scars (pits) is one of the most challenging consequences of acne. The non-ablative fractional laser ResurFX is an advanced method for correcting such conditions. It effectively evens out the skin texture by stimulating new collagen production, with a minimal recovery period compared to classic laser resurfacing.",
          de: "Post-Akne in Form von atrophischen Narben (Gruben) ist eine der schwierigsten Folgen von Akne. Der nicht-ablative fraktionierte Laser ResurFX ist eine fortschrittliche Methode zur Korrektur solcher Zustände. Er glättet effektiv die Hauttextur durch die Stimulierung der neuen Kollagenproduktion, bei minimaler Erholungszeit im Vergleich zum klassischen Laser-Resurfacing."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як ResurFX працює з рубцями постакне?",
          ru: "Как ResurFX работает с рубцами постакне?",
          en: "How Does ResurFX Work on Post-Acne Scars?",
          de: "Wie wirkt ResurFX auf Post-Akne-Narben?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лазер створює в глибоких шарах шкіри, прямо в рубцевій тканині, мікроскопічні зони прогріву. Це руйнує старий, дефектний колаген та запускає потужний процес неоколагенезу — утворення нової, здорової тканини. Нові волокна колагену та еластину поступово «виштовхують» дно рубця вгору, роблячи його менш глибоким та помітним. Оскільки поверхня шкіри не пошкоджується, реабілітація проходить швидко та комфортно.",
          ru: "Лазер создает в глубоких слоях кожи, прямо в рубцовой ткани, микроскопические зоны прогрева. Это разрушает старый, дефектный коллаген и запускает мощный процесс неоколлагенеза — образования новой, здоровой ткани. Новые волокна коллагена и эластина постепенно «выталкивают» дно рубца вверх, делая его менее глубоким и заметным. Поскольку поверхность кожи не повреждается, реабилитация проходит быстро и комфортно.",
          en: "The laser creates microscopic heating zones in the deep layers of the skin, directly in the scar tissue. This destroys old, defective collagen and triggers a powerful process of neocollagenesis - the formation of new, healthy tissue. New collagen and elastin fibers gradually \"push\" the bottom of the scar up, making it shallower and less noticeable. Since the skin surface is not damaged, recovery is fast and comfortable.",
          de: "Der Laser erzeugt mikroskopisch kleine Erwärmungszonen in den tiefen Hautschichten, direkt im Narbengewebe. Dies zerstört altes, defektes Kollagen und löst einen starken Prozess der Neokollagenese aus - die Bildung von neuem, gesundem Gewebe. Neue Kollagen- und Elastinfasern „drücken“ den Narbenboden allmählich nach oben, wodurch er flacher und weniger auffällig wird. Da die Hautoberfläche nicht beschädigt wird, verläuft die Genesung schnell und angenehm."
        }
      },
      {
        type: "image",
        content: { image: "https://cdn-egboh.nitrocdn.com/dCNnVNfnCTKGXoCfEkNkPhqUOMiKTshc/assets/images/optimized/rev-149c925/grace-clinics.com/wp-content/uploads/2021/09/skin-problem-with-acne-diseases-2021-08-29-05-54-20-utc.jpg" },
        sideText: {
          uk: "Курс процедур дозволяє значно вирівняти текстуру шкіри та повернути їй гладкість.",
          ru: "Курс процедур позволяет значительно выровнять текстуру кожи и вернуть ей гладкость.",
          en: "A course of procedures can significantly even out the skin texture and restore its smoothness.",
          de: "Ein Behandlungskurs kann die Hauttextur deutlich glätten und ihre Geschmeidigkeit wiederherstellen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги лікування постакне на ResurFX",
          ru: "Преимущества лечения постакне на ResurFX",
          en: "Benefits of Post-Acne Treatment with ResurFX",
          de: "Vorteile der Post-Akne-Behandlung mit ResurFX"
        }
      },
      {
        type: "list",
        content: {
          uk: "Мінімальний період реабілітації (1-2 дні почервоніння).\nВисока ефективність у вирівнюванні рельєфу.\nПроцедуру можна проводити в будь-яку пору року.\nОдночасне покращення загальної якості шкіри: звуження пор, підвищення тонусу.",
          ru: "Минимальный период реабилитации (1-2 дня покраснения).\nВысокая эффективность в выравнивании рельефа.\nПроцедуру можно проводить в любое время года.\nОдновременное улучшение общего качества кожи: сужение пор, повышение тонуса.",
          en: "Minimal recovery period (1-2 days of redness).\nHigh efficiency in smoothing the skin's texture.\nThe procedure can be performed at any time of the year.\nSimultaneous improvement in overall skin quality: pore tightening, increased tone.",
          de: "Minimale Erholungszeit (1-2 Tage Rötung).\nHohe Wirksamkeit bei der Glättung der Hauttextur.\nDas Verfahren kann zu jeder Jahreszeit durchgeführt werden.\nGleichzeitige Verbesserung der allgemeinen Hautqualität: Porenverfeinerung, erhöhter Tonus."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungskurs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для корекції рубців постакне необхідний курс з 3-5 процедур з інтервалом в 4 тижні. Ефект є накопичувальним, оскільки процес оновлення колагену триває кілька місяців. Протягом усього курсу лікування обов'язковим є щоденне використання сонцезахисного крему з SPF 50+.",
          ru: "Для коррекции рубцов постакне необходим курс из 3-5 процедур с интервалом в 4 недели. Эффект является накопительным, так как процесс обновления коллагена длится несколько месяцев. На протяжении всего курса лечения обязательным является ежедневное использование солнцезащитного крема с SPF 50+.",
          en: "To correct post-acne scars, a course of 3-5 procedures with an interval of 4 weeks is required. The effect is cumulative, as the collagen renewal process takes several months. Throughout the entire course of treatment, daily use of sunscreen with SPF 50+ is mandatory.",
          de: "Zur Korrektur von Post-Akne-Narben ist ein Kurs von 3-5 Behandlungen im Abstand von 4 Wochen erforderlich. Die Wirkung ist kumulativ, da der Kollagen-Erneuerungsprozess mehrere Monate dauert. Während des gesamten Behandlungsverlaufs ist die tägliche Anwendung von Sonnenschutzmitteln mit LSF 50+ obligatorisch."
        }
      }
    ],
    faqs: ["faq_resurfx_postacne_1", "faq_resurfx_postacne_2"],
    doctors: ["doctor_dermatologist_1", "doctor_laser_specialist_1", "doctor_cosmetologist_1"]
  },
    
    {
    id: "subservice51", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к новой основной услуге "Інтимна косметологія"
    title: {
      uk: "Інтимний пілінг",
      ru: "Интимный пилинг",
      en: "Intimate Peeling",
      de: "Intimes Peeling"
    },
    slug: "intymnyy-pilinh",
    mainImage: "https://medcity.ua/content/images/30/1000x0/intimnyy-piling-foto-1.webp",
    content: [
      {
        type: "heading",
        content: {
          uk: "Інтимний пілінг: освітлення та омолодження делікатної зони",
          ru: "Интимный пилинг: осветление и омоложение деликатной зоны",
          en: "Intimate Peeling: Lightening and Rejuvenation of the Delicate Area",
          de: "Intimes Peeling: Aufhellung und Verjüngung des Intimbereichs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Інтимний пілінг — це спеціалізована процедура, розроблена для делікатного освітлення, оновлення та омолодження шкіри в інтимній зоні (лобок, великі статеві губи, періанальна область, внутрішня поверхня стегон). На відміну від звичайних пілінгів для обличчя, для цієї зони використовуються атравматичні склади, які не викликають сильного подразнення, але при цьому ефективно борються з гіперпігментацією та віковими змінами.",
          ru: "Интимный пилинг — это специализированная процедура, разработанная для деликатного осветления, обновления и омоложения кожи в интимной зоне (лобок, большие половые губы, перианальная область, внутренняя поверхность бедер). В отличие от обычных пилингов для лица, для этой зоны используются атравматичные составы, которые не вызывают сильного раздражения, но при этом эффективно борются с гиперпигментацией и возрастными изменениями.",
          en: "Intimate peeling is a specialized procedure designed for the delicate lightening, renewal, and rejuvenation of the skin in the intimate area (pubic mound, labia majora, perianal region, inner thighs). Unlike regular facial peels, atraumatic formulations are used for this area, which do not cause severe irritation but effectively combat hyperpigmentation and age-related changes.",
          de: "Das intime Peeling ist ein spezialisiertes Verfahren zur sanften Aufhellung, Erneuerung und Verjüngung der Haut im Intimbereich (Schamhügel, große Schamlippen, Perianalbereich, Innenseiten der Oberschenkel). Im Gegensatz zu normalen Gesichtspeelings werden für diesen Bereich atraumatische Formulierungen verwendet, die keine starken Reizungen verursachen, aber wirksam gegen Hyperpigmentierung und altersbedingte Veränderungen kämpfen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні показання до процедури",
          ru: "Основные показания к процедуре",
          en: "Main Indications for the Procedure",
          de: "Hauptindikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Гіперпігментація (потемніння шкіри) в інтимній зоні.\nВтрата пружності та еластичності шкіри.\nВросле волосся та фолікуліт після депіляції.\nСухість шкіри.\nФотостаріння.",
          ru: "Гиперпигментация (потемнение кожи) в интимной зоне.\nПотеря упругости и эластичности кожи.\nВросшие волосы и фолликулит после депиляции.\nСухость кожи.\nФотостарение.",
          en: "Hyperpigmentation (darkening of the skin) in the intimate area.\nLoss of skin firmness and elasticity.\nIngrown hairs and folliculitis after hair removal.\nDry skin.\nPhotoaging.",
          de: "Hyperpigmentierung (Verdunkelung der Haut) im Intimbereich.\nVerlust der Hautfestigkeit und -elastizität.\nEingewachsene Haare und Follikulitis nach der Haarentfernung.\nTrockene Haut.\nLichtalterung."
        }
      },
      {
        type: "image",
        content: { image: "https://bg-medical.pl/wp-content/uploads/2021/04/peeling-do-okolic-intymnych.jpg" },
        sideText: {
          uk: "Процедура є всесезонною, комфортною та не потребує тривалої реабілітації.",
          ru: "Процедура всесезонная, комфортная и не требует длительной реабилитации.",
          en: "The procedure is all-seasonal, comfortable, and does not require a long recovery period.",
          de: "Das Verfahren ist ganzjährig, komfortabel und erfordert keine lange Erholungszeit."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Ефекти від інтимного пілінгу",
          ru: "Эффекты от интимного пилинга",
          en: "Effects of Intimate Peeling",
          de: "Wirkungen des intimen Peelings"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Завдяки дії спеціальних кислот та активних компонентів, пілінг запускає процеси оновлення шкіри, що призводить до освітлення пігментації, стимуляції вироблення колагену та еластину. Шкіра стає більш світлою, пружною, гладенькою та зволоженою. Також процедура має протизапальний ефект, що є чудовою профілактикою врослого волосся.",
          ru: "Благодаря действию специальных кислот и активных компонентов, пилинг запускает процессы обновления кожи, что приводит к осветлению пигментации, стимуляции выработки коллагена и эластина. Кожа становится более светлой, упругой, гладкой и увлажненной. Также процедура обладает противовоспалительным эффектом, что является отличной профилактикой вросших волос.",
          en: "Thanks to the action of special acids and active components, the peel triggers skin renewal processes, leading to the lightening of pigmentation and the stimulation of collagen and elastin production. The skin becomes brighter, firmer, smoother, and more hydrated. The procedure also has an anti-inflammatory effect, which is an excellent prevention for ingrown hairs.",
          de: "Dank der Wirkung spezieller Säuren und aktiver Komponenten löst das Peeling Hauterneuerungsprozesse aus, die zur Aufhellung der Pigmentierung und zur Stimulierung der Kollagen- und Elastinproduktion führen. Die Haut wird heller, straffer, glatter und mit mehr Feuchtigkeit versorgt. Das Verfahren hat auch eine entzündungshemmende Wirkung, was eine ausgezeichnete Vorbeugung gegen eingewachsene Haare darstellt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungskurs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення видимого та стійкого результату інтимний пілінг проводиться курсом з 3-6 процедур з інтервалом 7-14 днів. Після сеансу може спостерігатися легке почервоніння та незначне лущення, які швидко проходять.",
          ru: "Для достижения видимого и стойкого результата интимный пилинг проводится курсом из 3-6 процедур с интервалом 7-14 дней. После сеанса может наблюдаться легкое покраснение и незначительное шелушение, которые быстро проходят.",
          en: "To achieve a visible and lasting result, intimate peeling is carried out in a course of 3-6 procedures with an interval of 7-14 days. After the session, slight redness and minor peeling may be observed, which quickly subside.",
          de: "Um ein sichtbares und dauerhaftes Ergebnis zu erzielen, wird das intime Peeling in einem Kurs von 3-6 Behandlungen im Abstand von 7-14 Tagen durchgeführt. Nach der Sitzung können leichte Rötungen und geringfügiges Schälen beobachtet werden, die schnell abklingen."
        }
      }
    ],
    faqs: ["faq_intimate_peeling_1", "faq_intimate_peeling_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_gynecologist_1"]
  },


  {
    id: "subservice52", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к основной услуге "Інтимна косметологія"
    title: {
      uk: "Інтимна біоревіталізація/біорепарація",
      ru: "Интимная биоревитализация/биорепарация",
      en: "Intimate Biorevitalization/Bioreparation",
      de: "Intime Biorevitalisierung/Bioreparation"
    },
    slug: "intymna-biorevitalizatsiya-bioreparatsiya",
    mainImage: "https://sensavi.com.ua/wp-content/uploads/2023/04/pexels-shiny-diamond-3762465-1-scaled.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Інтимна біоревіталізація: глибоке зволоження та омолодження",
          ru: "Интимная биоревитализация: глубокое увлажнение и омоложение",
          en: "Intimate Biorevitalization: Deep Hydration and Rejuvenation",
          de: "Intime Biorevitalisierung: Tiefe Hydratation und Verjüngung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Інтимна біоревіталізація — це ін'єкційна методика, спрямована на глибоке зволоження та відновлення шкіри та слизових оболонок аногенітальної зони. З віком, після пологів або через гормональні зміни тканини втрачають вологу, пружність та еластичність. Процедура за допомогою препаратів на основі гіалуронової кислоти дозволяє відновити гідробаланс, стимулювати вироблення колагену та значно покращити стан інтимної зони.",
          ru: "Интимная биоревитализация — это инъекционная методика, направленная на глубокое увлажнение и восстановление кожи и слизистых оболочек аногенитальной зоны. С возрастом, после родов или из-за гормональных изменений ткани теряют влагу, упругость и эластичность. Процедура с помощью препаратов на основе гиалуроновой кислоты позволяет восстановить гидробаланс, стимулировать выработку коллагена и значительно улучшить состояние интимной зоны.",
          en: "Intimate biorevitalization is an injection technique aimed at deep hydration and restoration of the skin and mucous membranes of the anogenital area. With age, after childbirth, or due to hormonal changes, tissues lose moisture, firmness, and elasticity. The procedure, using hyaluronic acid-based preparations, helps to restore hydro-balance, stimulate collagen production, and significantly improve the condition of the intimate area.",
          de: "Die intime Biorevitalisierung ist eine Injektionstechnik zur tiefen Hydratation und Wiederherstellung der Haut und Schleimhäute des Anogenitalbereichs. Mit zunehmendem Alter, nach der Geburt oder aufgrund hormoneller Veränderungen verlieren die Gewebe an Feuchtigkeit, Festigkeit und Elastizität. Das Verfahren mit Präparaten auf Hyaluronsäurebasis hilft, den Wasserhaushalt wiederherzustellen, die Kollagenproduktion anzuregen und den Zustand des Intimbereichs erheblich zu verbessern."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Біоревіталізація чи Біорепарація?",
          ru: "Биоревитализация или Биорепарация?",
          en: "Biorevitalization or Bioreparation?",
          de: "Biorevitalisierung oder Bioreparation?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Біоревіталізація в основному спрямована на зволоження за рахунок чистої гіалуронової кислоти. Біорепарація — це більш просунута методика, де препарати, крім гіалуронової кислоти, містять вітаміни, амінокислоти та пептиди. Це забезпечує не тільки зволоження, але й потужний відновлювальний та омолоджуючий ефект. Вибір препарату здійснює лікар залежно від показань.",
          ru: "Биоревитализация в основном направлена на увлажнение за счет чистой гиалуроновой кислоты. Биорепарация — это более продвинутая методика, где препараты, помимо гиалуроновой кислоты, содержат витамины, аминокислоты и пептиды. Это обеспечивает не только увлажнение, но и мощный восстановительный и омолаживающий эффект. Выбор препарата осуществляет врач в зависимости от показаний.",
          en: "Biorevitalization is mainly aimed at hydration through pure hyaluronic acid. Bioreparation is a more advanced technique where preparations, in addition to hyaluronic acid, contain vitamins, amino acids, and peptides. This provides not only hydration but also a powerful restorative and rejuvenating effect. The choice of preparation is made by the doctor depending on the indications.",
          de: "Die Biorevitalisierung zielt hauptsächlich auf die Hydratation durch reine Hyaluronsäure ab. Die Bioreparation ist eine fortschrittlichere Technik, bei der die Präparate zusätzlich zur Hyaluronsäure Vitamine, Aminosäuren und Peptide enthalten. Dies sorgt nicht nur für Feuchtigkeit, sondern auch für eine starke regenerative und verjüngende Wirkung. Die Wahl des Präparats trifft der Arzt je nach Indikation."
        }
      },
      {
        type: "image",
        content: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE5uJz48Y42HhPzD36p9h7k9L2q8L9g_e9w&s" },
        sideText: {
          uk: "Процедура допомагає покращити не тільки естетику, але й якість інтимного життя, підвищуючи чутливість та комфорт.",
          ru: "Процедура помогает улучшить не только эстетику, но и качество интимной жизни, повышая чувствительность и комфорт.",
          en: "The procedure helps to improve not only aesthetics but also the quality of intimate life by increasing sensitivity and comfort.",
          de: "Das Verfahren hilft nicht nur, die Ästhetik zu verbessern, sondern auch die Qualität des Intimlebens durch Erhöhung der Empfindlichkeit und des Komforts."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до інтимної біоревіталізації",
          ru: "Показания к интимной биоревитализации",
          en: "Indications for Intimate Biorevitalization",
          de: "Indikationen für die intime Biorevitalisierung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Сухість та дискомфорт в інтимній зоні.\nВтрата пружності та еластичності великих та малих статевих губ.\nВікові та післяпологові зміни.\nЗниження чутливості.\nДряблість шкіри лобка та промежини.\nВ комплексній терапії хронічних запальних захворювань (напр., крауроз вульви).",
          ru: "Сухость и дискомфорт в интимной зоне.\nПотеря упругости и эластичности больших и малых половых губ.\nВозрастные и послеродовые изменения.\nСнижение чувствительности.\nДряблость кожи лобка и промежности.\nВ комплексной терапии хронических воспалительных заболеваний (напр., крауроз вульвы).",
          en: "Dryness and discomfort in the intimate area.\nLoss of firmness and elasticity of the labia majora and minora.\nAge-related and postpartum changes.\nDecreased sensitivity.\nLaxity of the skin on the pubis and perineum.\nIn the complex therapy of chronic inflammatory diseases (e.g., vulvar kraurosis).",
          de: "Trockenheit und Unbehagen im Intimbereich.\nVerlust der Festigkeit und Elastizität der großen und kleinen Schamlippen.\nAltersbedingte und postpartale Veränderungen.\nVerminderte Empfindlichkeit.\nSchlaffheit der Haut an Schamhügel und Damm.\nIn der komplexen Therapie chronisch entzündlicher Erkrankungen (z. B. Kraurosis vulvae)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та курс лікування",
          ru: "Процедура и курс лечения",
          en: "Procedure and Course of Treatment",
          de: "Verfahren und Behandlungsverlauf"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура проводиться після нанесення місцевої анестезії (крему) і є практично безболісною. Лікар вводить препарат за допомогою серії мікроін'єкцій у необхідні зони. Сеанс триває близько 30-40 хвилин. Для досягнення стійкого результату рекомендується курс з 2-4 процедур з інтервалом 2-4 тижні.",
          ru: "Процедура проводится после нанесения местной анестезии (крема) и является практически безболезненной. Врач вводит препарат с помощью серии микроинъекций в необходимые зоны. Сеанс длится около 30-40 минут. Для достижения стойкого результата рекомендуется курс из 2-4 процедур с интервалом 2-4 недели.",
          en: "The procedure is performed after the application of a local anesthetic (cream) and is virtually painless. The doctor administers the preparation through a series of microinjections into the required areas. The session lasts about 30-40 minutes. To achieve a lasting result, a course of 2-4 procedures with an interval of 2-4 weeks is recommended.",
          de: "Das Verfahren wird nach dem Auftragen einer Lokalanästhesie (Creme) durchgeführt und ist praktisch schmerzfrei. Der Arzt verabreicht das Präparat durch eine Reihe von Mikroinjektionen in die erforderlichen Bereiche. Die Sitzung dauert etwa 30-40 Minuten. Um ein dauerhaftes Ergebnis zu erzielen, wird ein Kurs von 2-4 Behandlungen im Abstand von 2-4 Wochen empfohlen."
        }
      }
    ],
    faqs: ["faq_intimate_biorev_1", "faq_intimate_biorev_2"],
    doctors: ["doctor_gynecologist_1", "doctor_cosmetologist_injector_1"]
  },

  {
    id: "subservice53", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к основной услуге "Інтимна косметологія"
    title: {
      uk: "Мезотерапія інтимних зон",
      ru: "Мезотерапия интимных зон",
      en: "Mesotherapy for Intimate Areas",
      de: "Mesotherapie für den Intimbereich"
    },
    slug: "mezoterapiya-intymnykh-zon",
    mainImage: "https://sensavi.com.ua/wp-content/uploads/2023/04/pexels-shiny-diamond-3762465-1-scaled.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мезотерапія: вітамінний заряд для здоров'я та краси інтимної зони",
          ru: "Мезотерапия: витаминный заряд для здоровья и красоты интимной зоны",
          en: "Mesotherapy: A Vitamin Boost for the Health and Beauty of the Intimate Area",
          de: "Mesotherapie: Ein Vitaminschub für die Gesundheit und Schönheit des Intimbereichs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія інтимних зон — це ін'єкційна процедура, яка полягає у введенні невеликих доз спеціально підібраних «коктейлів» у поверхневі та середні шари шкіри. На відміну від біоревіталізації, яка фокусується на глибокому зволоженні гіалуроновою кислотою, мезотерапія спрямована на вирішення ширшого спектру завдань: живлення шкіри, покращення її тону, освітлення та підвищення місцевого імунітету.",
          ru: "Мезотерапия интимных зон — это инъекционная процедура, которая заключается во введении небольших доз специально подобранных «коктейлей» в поверхностные и средние слои кожи. В отличие от биоревитализации, которая фокусируется на глубоком увлажнении гиалуроновой кислотой, мезотерапия направлена на решение более широкого спектра задач: питание кожи, улучшение её тона, осветление и повышение местного иммунитета.",
          en: "Mesotherapy for intimate areas is an injection procedure that involves introducing small doses of specially selected \"cocktails\" into the superficial and middle layers of the skin. Unlike biorevitalization, which focuses on deep hydration with hyaluronic acid, mesotherapy aims to solve a broader range of tasks: nourishing the skin, improving its tone, lightening, and boosting local immunity.",
          de: "Die Mesotherapie für den Intimbereich ist ein Injektionsverfahren, bei dem kleine Dosen speziell ausgewählter „Cocktails“ in die oberflächlichen und mittleren Hautschichten eingebracht werden. Im Gegensatz zur Biorevitalisierung, die sich auf die tiefe Hydratation mit Hyaluronsäure konzentriert, zielt die Mesotherapie darauf ab, ein breiteres Spektrum von Aufgaben zu lösen: die Haut zu nähren, ihren Ton zu verbessern, aufzuhellen und die lokale Immunität zu stärken."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Склад мезотерапевтичних коктейлів",
          ru: "Состав мезотерапевтических коктейлей",
          en: "Composition of Mesotherapy Cocktails",
          de: "Zusammensetzung von Mesotherapie-Cocktails"
        }
      },
      {
        type: "list",
        content: {
          uk: "Вітаміни (особливо вітамін С для освітлення та антиоксидантного захисту).\nАмінокислоти — будівельний матеріал для колагену.\nМікроелементи (цинк, кремній) для зміцнення шкіри.\nНизькомолекулярна гіалуронова кислота для легкого зволоження.\nРослинні екстракти з протизапальною та тонізуючою дією.",
          ru: "Витамины (особенно витамин С для осветления и антиоксидантной защиты).\nАминокислоты — строительный материал для коллагена.\nМикроэлементы (цинк, кремний) для укрепления кожи.\nНизкомолекулярная гиалуроновая кислота для легкого увлажнения.\nРастительные экстракты с противовоспалительным и тонизирующим действием.",
          en: "Vitamins (especially vitamin C for lightening and antioxidant protection).\nAmino acids - the building blocks for collagen.\nMicroelements (zinc, silicon) to strengthen the skin.\nLow molecular weight hyaluronic acid for light hydration.\nPlant extracts with anti-inflammatory and toning effects.",
          de: "Vitamine (insbesondere Vitamin C zur Aufhellung und zum antioxidativen Schutz).\nAminosäuren - die Bausteine für Kollagen.\nSpurenelemente (Zink, Silizium) zur Stärkung der Haut.\nNiedermolekulare Hyaluronsäure für leichte Hydratation.\nPflanzenextrakte mit entzündungshemmender und tonisierender Wirkung."
        }
      },
      {
        type: "image",
        content: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0zWJvWb7g-6Vl9P8F5yG8h9jR9Z9Q_e-Zw&s" },
        sideText: {
          uk: "Процедура допомагає покращити загальний стан шкіри в делікатній зоні, роблячи її більш здоровою та доглянутою.",
          ru: "Процедура помогает улучшить общее состояние кожи в деликатной зоне, делая её более здоровой и ухоженной.",
          en: "The procedure helps to improve the overall condition of the skin in the delicate area, making it healthier and more well-groomed.",
          de: "Das Verfahren hilft, den allgemeinen Zustand der Haut im Intimbereich zu verbessern und sie gesünder und gepflegter zu machen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Втрата тонусу та еластичності шкіри.\nПігментація, нерівний тон.\nСухість та профілактика вікових змін.\nПідготовка до більш інтенсивних процедур (наприклад, до інтимної контурної пластики).",
          ru: "Потеря тонуса и эластичности кожи.\nПигментация, неровный тон.\nСухость и профилактика возрастных изменений.\nПодготовка к более интенсивным процедурам (например, к интимной контурной пластике).",
          en: "Loss of skin tone and elasticity.\nPigmentation, uneven tone.\nDryness and prevention of age-related changes.\nPreparation for more intensive procedures (e.g., intimate contouring).",
          de: "Verlust von Hautton und Elastizität.\nPigmentierung, ungleichmäßiger Teint.\nTrockenheit und Vorbeugung altersbedingter Veränderungen.\nVorbereitung auf intensivere Verfahren (z. B. Intimkonturierung)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс та реабілітація",
          ru: "Курс и реабилитация",
          en: "Course and Recovery",
          de: "Kurs und Genesung"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мезотерапія завжди проводиться курсом для досягнення накопичувального ефекту. Залежно від проблеми, може знадобитися від 4 до 8 процедур з інтервалом 7-14 днів. Процедура проводиться під місцевою анестезією, займає 20-30 хвилин. Період відновлення мінімальний, можливі невеликі папули або синці, які швидко минають.",
          ru: "Мезотерапия всегда проводится курсом для достижения накопительного эффекта. В зависимости от проблемы, может потребоваться от 4 до 8 процедур с интервалом 7-14 дней. Процедура проводится под местной анестезией, занимает 20-30 минут. Период восстановления минимален, возможны небольшие папулы или синячки, которые быстро проходят.",
          en: "Mesotherapy is always carried out as a course to achieve a cumulative effect. Depending on the problem, 4 to 8 procedures with an interval of 7-14 days may be required. The procedure is performed under local anesthesia and takes 20-30 minutes. The recovery period is minimal; small papules or bruises may appear, which quickly disappear.",
          de: "Die Mesotherapie wird immer als Kur durchgeführt, um eine kumulative Wirkung zu erzielen. Je nach Problem können 4 bis 8 Behandlungen im Abstand von 7-14 Tagen erforderlich sein. Das Verfahren wird unter örtlicher Betäubung durchgeführt und dauert 20-30 Minuten. Die Erholungsphase ist minimal; kleine Papeln oder Blutergüsse können auftreten, die schnell verschwinden."
        }
      }
    ],
    faqs: ["faq_intimate_meso_1"],
    doctors: ["doctor_gynecologist_1", "doctor_cosmetologist_injector_1"]
  },


  {
    id: "subservice54", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к основной услуге "Інтимна косметологія"
    title: {
      uk: "Інтимна контурна пластика",
      ru: "Интимная контурная пластика",
      en: "Intimate Contouring",
      de: "Intime Konturierung"
    },
    slug: "intymna-konturna-plastyka",
    mainImage: "https://sensavi.com.ua/wp-content/uploads/2023/04/pexels-shiny-diamond-3762465-1-scaled.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Інтимна контурна пластика: гармонія, об'єм та чуттєвість",
          ru: "Интимная контурная пластика: гармония, объем и чувственность",
          en: "Intimate Contouring: Harmony, Volume, and Sensuality",
          de: "Intime Konturierung: Harmonie, Volumen und Sinnlichkeit"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Інтимна контурна пластика (або інтимний філінг) — це ін'єкційна методика, яка дозволяє заповнити втрачений об'єм, скоригувати форму та асиметрію, а також підвищити чутливість інтимних зон за допомогою філерів на основі стабілізованої гіалуронової кислоти. Це безпечна та ефективна альтернатива хірургічній пластиці, що дозволяє досягти миттєвого результату з мінімальним періодом реабілітації.",
          ru: "Интимная контурная пластика (или интимный филлинг) — это инъекционная методика, которая позволяет восполнить утраченный объем, скорректировать форму и асимметрию, а также повысить чувствительность интимных зон с помощью филлеров на основе стабилизированной гиалуроновой кислоты. Это безопасная и эффективная альтернатива хирургической пластике, позволяющая достичь мгновенного результата с минимальным периодом реабилитации.",
          en: "Intimate contouring (or intimate filling) is an injection technique that allows for replenishing lost volume, correcting shape and asymmetry, and enhancing the sensitivity of intimate areas using stabilized hyaluronic acid-based fillers. It is a safe and effective alternative to surgical plastics, allowing for immediate results with a minimal recovery period.",
          de: "Die intime Konturierung (oder Intimfüllung) ist eine Injektionstechnik, die es ermöglicht, verlorenes Volumen wieder aufzufüllen, Form und Asymmetrie zu korrigieren und die Empfindlichkeit der Intimbereiche mit stabilisierten Hyaluronsäure-Fillern zu verbessern. Es ist eine sichere und wirksame Alternative zur chirurgischen plastischen Chirurgie, die sofortige Ergebnisse bei minimaler Erholungszeit ermöglicht."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Основні напрямки інтимної пластики",
          ru: "Основные направления интимной пластики",
          en: "Main Areas of Intimate Plastics",
          de: "Hauptbereiche der Intimchirurgie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Аугментація (збільшення) точки G: для посилення сексуальних відчуттів.\nКорекція об'єму та форми великих статевих губ: відновлення втраченого з віком об'єму, усунення асиметрії та дряблості.\nКорекція малих статевих губ: надання пружності та тонусу.\nЗволоження та підвищення тонусу стінок піхви.\nКорекція післяпологових та вікових змін.",
          ru: "Аугментация (увеличение) точки G: для усиления сексуальных ощущений.\nКоррекция объема и формы больших половых губ: восстановление утраченного с возрастом объема, устранение асимметрии и дряблости.\nКоррекция малых половых губ: придание упругости и тонуса.\nУвлажнение и повышение тонуса стенок влагалища.\nКоррекция послеродовых и возрастных изменений.",
          en: "Augmentation (enlargement) of the G-spot: to enhance sexual sensations.\nCorrection of the volume and shape of the labia majora: restoring volume lost with age, eliminating asymmetry and laxity.\nCorrection of the labia minora: giving firmness and tone.\nHydration and increasing the tone of the vaginal walls.\nCorrection of postpartum and age-related changes.",
          de: "Augmentation (Vergrößerung) des G-Punktes: zur Steigerung der sexuellen Empfindungen.\nKorrektur von Volumen und Form der großen Schamlippen: Wiederherstellung des altersbedingt verlorenen Volumens, Beseitigung von Asymmetrie und Schlaffheit.\nKorrektur der kleinen Schamlippen: Verleihung von Festigkeit und Tonus.\nHydratation und Erhöhung des Tonus der Vaginalwände.\nKorrektur von postpartalen und altersbedingten Veränderungen."
        }
      },
      {
        type: "image",
        content: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8t7X7w7l_i_y_x_w8l_j_i7y_c_q_y_o_w&s" },
        sideText: {
          uk: "Процедура не тільки покращує естетичний вигляд, але й значно підвищує впевненість у собі та якість сексуального життя.",
          ru: "Процедура не только улучшает эстетический вид, но и значительно повышает уверенность в себе и качество сексуальной жизни.",
          en: "The procedure not only improves the aesthetic appearance but also significantly boosts self-confidence and the quality of sexual life.",
          de: "Das Verfahren verbessert nicht nur das ästhetische Erscheinungsbild, sondern steigert auch erheblich das Selbstvertrauen und die Qualität des Sexuallebens."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie wird die Behandlung durchgeführt?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Інтимна пластика проводиться лікарем-гінекологом або косметологом, який пройшов спеціальне навчання. Процедура виконується під місцевою аплікаційною анестезією, є комфортною та займає від 30 до 60 хвилин. Лікар вводить філер за допомогою канюлі, що мінімізує травматизацію тканин. Результат видно одразу.",
          ru: "Интимная пластика проводится врачом-гинекологом или косметологом, прошедшим специальное обучение. Процедура выполняется под местной аппликационной анестезией, комфортна и занимает от 30 до 60 минут. Врач вводит филлер с помощью канюли, что минимизирует травматизацию тканей. Результат виден сразу.",
          en: "Intimate plastic surgery is performed by a gynecologist or cosmetologist who has undergone special training. The procedure is performed under local topical anesthesia, is comfortable, and takes from 30 to 60 minutes. The doctor injects the filler using a cannula, which minimizes tissue trauma. The result is visible immediately.",
          de: "Die Intimchirurgie wird von einem Gynäkologen oder Kosmetologen durchgeführt, der eine spezielle Ausbildung absolviert hat. Das Verfahren wird unter örtlicher Betäubung durchgeführt, ist angenehm und dauert 30 bis 60 Minuten. Der Arzt injiziert den Füller mit einer Kanüle, was das Gewebetrauma minimiert. Das Ergebnis ist sofort sichtbar."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Результат та тривалість ефекту",
          ru: "Результат и длительность эффекта",
          en: "Result and Duration of Effect",
          de: "Ergebnis und Wirkungsdauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Ефект від інтимної контурної пластики зберігається протягом 10-18 місяців, після чого препарат біодеградує і повністю виводиться з організму. Після процедури рекомендується утриматися від статевих контактів, відвідування сауни та басейну протягом 7-10 днів.",
          ru: "Эффект от интимной контурной пластики сохраняется в течение 10-18 месяцев, после чего препарат биодеградирует и полностью выводится из организма. После процедуры рекомендуется воздержаться от половых контактов, посещения сауны и бассейна в течение 7-10 дней.",
          en: "The effect of intimate contouring lasts for 10-18 months, after which the preparation biodegrades and is completely eliminated from the body. After the procedure, it is recommended to refrain from sexual contact, visiting saunas, and swimming pools for 7-10 days.",
          de: "Die Wirkung der intimen Konturierung hält 10-18 Monate an, danach baut sich das Präparat biologisch ab und wird vollständig aus dem Körper ausgeschieden. Nach dem Eingriff wird empfohlen, 7-10 Tage auf Geschlechtsverkehr, Saunabesuche und Schwimmbäder zu verzichten."
        }
      }
    ],
    faqs: ["faq_intimate_filler_1", "faq_intimate_filler_2"],
    doctors: ["doctor_gynecologist_1", "doctor_cosmetologist_injector_1"]
  },

  {
    id: "subservice55", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к основной услуге "Інтимна косметологія"
    title: {
      uk: "Апаратне інтимне омолодження",
      ru: "Аппаратное интимное омоложение",
      en: "Apparatus-Based Intimate Rejuvenation",
      de: "Gerätegestützte Intimverjüngung"
    },
    slug: "aparatne-intymne-omolodzhennya",
    mainImage: "https://medcity.ua/content/images/30/1000x0/intimnoe-omolozhenie-foto-1.webp",
    content: [
      {
        type: "heading",
        content: {
          uk: "Апаратне омолодження: технології на варті жіночого здоров'я та комфорту",
          ru: "Аппаратное омоложение: технологии на страже женского здоровья и комфорта",
          en: "Apparatus-Based Rejuvenation: Technology for Women's Health and Comfort",
          de: "Gerätegestützte Verjüngung: Technologie für die Gesundheit und den Komfort von Frauen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Апаратні методики, зокрема фракційний CO2-лазер, зробили революцію в інтимній косметології. Вони дозволяють без операції, безболісно та ефективно вирішувати проблеми, пов'язані з віковими та післяпологовими змінами. Лазерне інтимне омолодження — це процедура, спрямована на відновлення тонусу, еластичності та функціональності тканин піхви та зовнішніх статевих органів.",
          ru: "Аппаратные методики, в частности фракционный CO2-лазер, совершили революцию в интимной косметологии. Они позволяют без операции, безболезненно и эффективно решать проблемы, связанные с возрастными и послеродовыми изменениями. Лазерное интимное омоложение — это процедура, направленная на восстановление тонуса, эластичности и функциональности тканей влагалища и наружных половых органов.",
          en: "Apparatus-based methods, particularly the fractional CO2 laser, have revolutionized intimate cosmetology. They allow for the non-surgical, painless, and effective resolution of problems related to age-related and postpartum changes. Laser intimate rejuvenation is a procedure aimed at restoring the tone, elasticity, and functionality of the vaginal tissues and external genitalia.",
          de: "Gerätegestützte Methoden, insbesondere der fraktionierte CO2-Laser, haben die Intimkosmetik revolutioniert. Sie ermöglichen die nicht-chirurgische, schmerzlose und effektive Lösung von Problemen im Zusammenhang mit altersbedingten und postpartalen Veränderungen. Die Laser-Intimverjüngung ist ein Verfahren zur Wiederherstellung des Tonus, der Elastizität und der Funktionalität des Vaginalgewebes und der äußeren Genitalien."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як працює лазерне інтимне омолодження?",
          ru: "Как работает лазерное интимное омоложение?",
          en: "How Does Laser Intimate Rejuvenation Work?",
          de: "Wie funktioniert die Laser-Intimverjüngung?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Фракційний CO2-лазер створює на слизовій оболонці піхви та шкірі вульви мікроскопічні зони термічного впливу. Це запускає потужні процеси регенерації: стимулюється вироблення нового колагену та еластину, покращується кровопостачання тканин, відновлюється структура слизової оболонки. В результаті стінки піхви стають більш щільними та еластичними, відновлюється їх нормальне зволоження.",
          ru: "Фракционный CO2-лазер создает на слизистой оболочке влагалища и коже вульвы микроскопические зоны термического воздействия. Это запускает мощные процессы регенерации: стимулируется выработка нового коллагена и эластина, улучшается кровоснабжение тканей, восстанавливается структура слизистой оболочки. В результате стенки влагалища становятся более плотными и эластичными, восстанавливается их нормальное увлажнение.",
          en: "The fractional CO2 laser creates microscopic zones of thermal impact on the vaginal mucosa and the skin of the vulva. This triggers powerful regeneration processes: the production of new collagen and elastin is stimulated, blood supply to the tissues improves, and the structure of the mucous membrane is restored. As a result, the vaginal walls become denser and more elastic, and their normal hydration is restored.",
          de: "Der fraktionierte CO2-Laser erzeugt mikroskopisch kleine Zonen thermischer Einwirkung auf die Vaginalschleimhaut und die Haut der Vulva. Dies löst starke Regenerationsprozesse aus: Die Produktion von neuem Kollagen und Elastin wird angeregt, die Blutversorgung des Gewebes verbessert sich und die Struktur der Schleimhaut wird wiederhergestellt. Dadurch werden die Vaginalwände dichter und elastischer, und ihre normale Befeuchtung wird wiederhergestellt."
        }
      },
      {
        type: "image",
        content: { image: "https://dobrobut.com/medialibrary/903/9035f11107ec1c13d7f1d3c01f6874e4.jpg" },
        sideText: {
          uk: "Процедура проводиться амбулаторно, займає 20-30 хвилин та не потребує анестезії.",
          ru: "Процедура проводится амбулаторно, занимает 20-30 минут и не требует анестезии.",
          en: "The procedure is performed on an outpatient basis, takes 20-30 minutes, and does not require anesthesia.",
          de: "Das Verfahren wird ambulant durchgeführt, dauert 20-30 Minuten und erfordert keine Anästhesie."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до апаратного лікування",
          ru: "Показания к аппаратному лечению",
          en: "Indications for Apparatus-Based Treatment",
          de: "Indikationen für die gerätegestützte Behandlung"
        }
      },
      {
        type: "list",
        content: {
          uk: "Післяпологове розтягнення та зниження тонусу м'язів піхви.\nВікова атрофія слизової, сухість та дискомфорт.\nСтресове нетримання сечі легкого ступеня.\nВтрата еластичності та пружності зовнішніх статевих органів.\nЗниження якості сексуального життя та чутливості.",
          ru: "Послеродовое растяжение и снижение тонуса мышц влагалища.\nВозрастная атрофия слизистой, сухость и дискомфорт.\nСтрессовое недержание мочи легкой степени.\nПотеря эластичности и упругости наружных половых органов.\nСнижение качества сексуальной жизни и чувствительности.",
          en: "Postpartum stretching and decreased tone of the vaginal muscles.\nAge-related mucosal atrophy, dryness, and discomfort.\nMild stress urinary incontinence.\nLoss of elasticity and firmness of the external genitalia.\nDecreased quality of sexual life and sensitivity.",
          de: "Postpartale Dehnung und verminderter Tonus der Vaginalmuskulatur.\nAltersbedingte Schleimhautatrophie, Trockenheit und Unbehagen.\nLeichte Belastungsinkontinenz.\nVerlust der Elastizität und Festigkeit der äußeren Genitalien.\nVerminderte Qualität des Sexuallebens und der Empfindlichkeit."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс та результати",
          ru: "Курс и результаты",
          en: "Course and Results",
          de: "Kurs und Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення стійкого та вираженого ефекту рекомендується курс з 2-3 процедур з інтервалом 1.5-2 місяці. Ефект є накопичувальним та зберігається протягом кількох років. Після процедури необхідно утриматися від статевого життя, відвідування басейну та саун протягом 5-7 днів.",
          ru: "Для достижения стойкого и выраженного эффекта рекомендуется курс из 2-3 процедур с интервалом 1.5-2 месяца. Эффект является накопительным и сохраняется в течение нескольких лет. После процедуры необходимо воздержаться от половой жизни, посещения бассейна и саун в течение 5-7 дней.",
          en: "To achieve a stable and pronounced effect, a course of 2-3 procedures with an interval of 1.5-2 months is recommended. The effect is cumulative and lasts for several years. After the procedure, it is necessary to refrain from sexual activity, visiting swimming pools, and saunas for 5-7 days.",
          de: "Um eine stabile und ausgeprägte Wirkung zu erzielen, wird ein Kurs von 2-3 Behandlungen im Abstand von 1,5-2 Monaten empfohlen. Die Wirkung ist kumulativ und hält mehrere Jahre an. Nach dem Eingriff ist es notwendig, 5-7 Tage auf sexuelle Aktivitäten, den Besuch von Schwimmbädern und Saunen zu verzichten."
        }
      }
    ],
    faqs: ["faq_intimate_laser_1", "faq_intimate_laser_2"],
    doctors: ["doctor_gynecologist_1"]
  },

    {
    id: "subservice56", // НОВАЯ ПОДУСЛУГА
    serviceId: "service13", // Привязка к основной услуге "Інтимна косметологія"
    title: {
      uk: "Лікування гіпергідрозу інтимних зон",
      ru: "Лечение гипергидроза интимных зон",
      en: "Treatment of Hyperhidrosis in Intimate Zones",
      de: "Behandlung von Hyperhidrose im Intimbereich"
    },
    slug: "likuvannya-hiperhidrozu-intymnykh-zon",
    mainImage: "https://sensavi.com.ua/wp-content/uploads/2023/04/pexels-shiny-diamond-3762465-1-scaled.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Лікування гіпергідрозу інтимних зон: повернення комфорту та впевненості",
          ru: "Лечение гипергидроза интимных зон: возвращение комфорта и уверенности",
          en: "Treatment of Hyperhidrosis in Intimate Zones: Restoring Comfort and Confidence",
          de: "Behandlung von Hyperhidrose im Intimbereich: Wiederherstellung von Komfort und Selbstvertrauen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Надмірне потовиділення в інтимній зоні (пах, лобок, періанальна область) може викликати значний фізичний та психологічний дискомфорт, призводити до подразнення шкіри та неприємного запаху. Ботулінотерапія є «золотим стандартом» для вирішення цієї делікатної проблеми. Процедура дозволяє безпечно та надовго заблокувати підвищену активність потових залоз, повертаючи відчуття свіжості та комфорту.",
          ru: "Чрезмерное потоотделение в интимной зоне (пах, лобок, перианальная область) может вызывать значительный физический и психологический дискомфорт, приводить к раздражению кожи и неприятному запаху. Ботулинотерапия является «золотым стандартом» для решения этой деликатной проблемы. Процедура позволяет безопасно и надолго заблокировать повышенную активность потовых желез, возвращая ощущение свежести и комфорта.",
          en: "Excessive sweating in the intimate area (groin, pubis, perianal region) can cause significant physical and psychological discomfort, leading to skin irritation and unpleasant odor. Botulinum toxin therapy is the \"gold standard\" for solving this delicate problem. The procedure allows for the safe and long-term blocking of overactive sweat glands, restoring a feeling of freshness and comfort.",
          de: "Übermäßiges Schwitzen im Intimbereich (Leiste, Schambereich, Perianalregion) kann zu erheblichem körperlichem und psychischem Unbehagen führen, was zu Hautreizungen und unangenehmem Geruch führt. Die Botulinumtoxin-Therapie ist der „Goldstandard“ zur Lösung dieses heiklen Problems. Das Verfahren ermöglicht die sichere und langfristige Blockierung überaktiver Schweißdrüsen und stellt ein Gefühl von Frische und Komfort wieder her."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як це працює?",
          ru: "Как это работает?",
          en: "How Does It Work?",
          de: "Wie funktioniert es?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Препарат на основі ботулотоксину типу А вводиться за допомогою серії мікроін'єкцій безпосередньо в шкіру проблемної зони. Він тимчасово блокує нервові сигнали, що стимулюють потові залози. В результаті залози перестають виробляти піт. Процедура впливає лише на оброблену ділянку і не порушує загальну терморегуляцію організму.",
          ru: "Препарат на основе ботулотоксина типа А вводится с помощью серии микроинъекций непосредственно в кожу проблемной зоны. Он временно блокирует нервные сигналы, стимулирующие потовые железы. В результате железы перестают вырабатывать пот. Процедура воздействует только на обработанный участок и не нарушает общую терморегуляцию организма.",
          en: "A preparation based on botulinum toxin type A is administered through a series of microinjections directly into the skin of the problem area. It temporarily blocks the nerve signals that stimulate the sweat glands. As a result, the glands stop producing sweat. The procedure affects only the treated area and does not disrupt the body's overall thermoregulation.",
          de: "Ein Präparat auf Basis von Botulinumtoxin Typ A wird durch eine Reihe von Mikroinjektionen direkt in die Haut des Problembereichs verabreicht. Es blockiert vorübergehend die Nervensignale, die die Schweißdrüsen stimulieren. Infolgedessen hören die Drüsen auf, Schweiß zu produzieren. Das Verfahren betrifft nur den behandelten Bereich und stört nicht die allgemeine Thermoregulation des Körpers."
        }
      },
      {
        type: "image",
        content: { image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf_x-c43Uu_9uY0tQxO-Z0e6I6uX9e9r9Q&s" },
        sideText: {
          uk: "Процедура проводиться з дотриманням повної конфіденційності та максимального комфорту для пацієнта.",
          ru: "Процедура проводится с соблюдением полной конфиденциальности и максимального комфорта для пациента.",
          en: "The procedure is carried out with complete confidentiality and maximum comfort for the patient.",
          de: "Das Verfahren wird unter vollständiger Vertraulichkeit und mit maximalem Komfort für den Patienten durchgeführt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Підвищена пітливість в зоні лобка.\nГіпергідроз пахових складок.\nНадмірне потовиділення в періанальній зоні.\nДискомфорт, пов'язаний з вологістю та запахом.",
          ru: "Повышенная потливость в зоне лобка.\nГипергидроз паховых складок.\nЧрезмерное потоотделение в перианальной зоне.\nДискомфорт, связанный с влажностью и запахом.",
          en: "Increased sweating in the pubic area.\nHyperhidrosis of the groin folds.\nExcessive sweating in the perianal area.\nDiscomfort related to moisture and odor.",
          de: "Vermehrtes Schwitzen im Schambereich.\nHyperhidrose der Leistenfalten.\nÜbermäßiges Schwitzen im Perianalbereich.\nUnbehagen im Zusammenhang mit Feuchtigkeit und Geruch."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та тривалість ефекту",
          ru: "Процедура и длительность эффекта",
          en: "Procedure and Duration of Effect",
          de: "Verfahren und Wirkungsdauer"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура проводиться під місцевою аплікаційною анестезією, що робить її практично безболісною. Сеанс триває близько 30-40 хвилин. Ефект починає проявлятися на 3-5 день, досягаючи максимуму через 2 тижні. Ви зможете насолоджуватися сухістю та комфортом протягом 6-9 місяців. Після цього процедуру можна повторити.",
          ru: "Процедура проводится под местной аппликационной анестезией, что делает её практически безболезненной. Сеанс длится около 30-40 минут. Эффект начинает проявляться на 3-5 день, достигая максимума через 2 недели. Вы сможете наслаждаться сухостью и комфортом в течение 6-9 месяцев. После этого процедуру можно повторить.",
          en: "The procedure is performed under local topical anesthesia, making it virtually painless. The session lasts about 30-40 minutes. The effect begins to appear on the 3rd-5th day, reaching its maximum after 2 weeks. You will be able to enjoy dryness and comfort for 6-9 months. After that, the procedure can be repeated.",
          de: "Das Verfahren wird unter örtlicher Betäubung durchgeführt, was es praktisch schmerzfrei macht. Die Sitzung dauert etwa 30-40 Minuten. Die Wirkung tritt am 3.-5. Tag ein und erreicht nach 2 Wochen ihr Maximum. Sie werden 6-9 Monate lang Trockenheit und Komfort genießen können. Danach kann das Verfahren wiederholt werden."
        }
      }
    ],
    faqs: ["faq_intimate_hyperhidrosis_1"],
    doctors: ["doctor_gynecologist_1", "doctor_dermatologist_1", "doctor_cosmetologist_injector_1"]
  },

  {
    id: "subservice57", // НОВАЯ ПОДУСЛУГА
    serviceId: "service14", // Привязка к новой основной услуге "Плазмолифтинг"
    title: {
      uk: "Плазмоліфтинг обличчя",
      ru: "Плазмолифтинг лица",
      en: "Facial Plasmolifting",
      de: "Gesichts-Plasmalifting"
    },
    slug: "plazmolifting-oblychchya",
    mainImage: "https://static.beautyinsider.ru/2017/06/%D0%9F%D0%BB%D0%B0%D0%B7%D0%BC%D0%BE%D0%BB%D0%B8%D1%84%D1%82%D0%B8%D0%BD%D0%B3-10.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Плазмоліфтинг обличчя: активуйте молодість вашої шкіри",
          ru: "Плазмолифтинг лица: активируйте молодость вашей кожи",
          en: "Facial Plasmolifting: Activate Your Skin's Youth",
          de: "Gesichts-Plasmalifting: Aktivieren Sie die Jugend Ihrer Haut"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Плазмоліфтинг обличчя — це ін'єкційна процедура, яка використовує тромбоцитарну аутоплазму, отриману з вашої власної крові, для стимуляції процесів омолодження. Введення плазми в шкіру обличчя, шиї та декольте запускає потужну регенерацію тканин: покращується кровообіг, нормалізується обмін речовин, а клітини-фібробласти починають активно виробляти новий колаген та гіалуронову кислоту. Шкіра оновлюється природним шляхом, стаючи більш пружною, свіжою та сяючою.",
          ru: "Плазмолифтинг лица — это инъекционная процедура, которая использует тромбоцитарную аутоплазму, полученную из вашей собственной крови, для стимуляции процессов омоложения. Введение плазмы в кожу лица, шеи и декольте запускает мощную регенерацию тканей: улучшается кровообращение, нормализуется обмен веществ, а клетки-фибробласты начинают активно вырабатывать новый коллаген и гиалуроновую кислоту. Кожа обновляется естественным путем, становясь более упругой, свежей и сияющей.",
          en: "Facial plasmolifting is an injection procedure that uses platelet-rich autoplasma, obtained from your own blood, to stimulate rejuvenation processes. Injecting plasma into the skin of the face, neck, and décolleté triggers powerful tissue regeneration: blood circulation improves, metabolism normalizes, and fibroblast cells begin to actively produce new collagen and hyaluronic acid. The skin is naturally renewed, becoming firmer, fresher, and more radiant.",
          de: "Das Gesichts-Plasmalifting ist ein Injektionsverfahren, bei dem plättchenreiches Eigenplasma aus Ihrem eigenen Blut verwendet wird, um Verjüngungsprozesse zu stimulieren. Die Injektion von Plasma in die Haut von Gesicht, Hals und Dekolleté löst eine starke Geweberegeneration aus: die Durchblutung verbessert sich, der Stoffwechsel normalisiert sich und die Fibroblastenzellen beginnen aktiv, neues Kollagen und Hyaluronsäure zu produzieren. Die Haut wird auf natürliche Weise erneuert und wird straffer, frischer und strahlender."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Етапи процедури",
          ru: "Этапы процедуры",
          en: "Procedure Steps",
          de: "Verfahrensschritte"
        }
      },
      {
        type: "list",
        content: {
          uk: "1. Забір невеликої кількості венозної крові (як при звичайному аналізі).\n2. Центрифугування крові у спеціальній пробірці для відділення плазми, збагаченої тромбоцитами.\n3. Очищення та знеболення шкіри за допомогою аплікаційної анестезії.\n4. Ін'єкційне введення отриманої плазми в шкіру.",
          ru: "1. Забор небольшого количества венозной крови (как при обычном анализе).\n2. Центрифугирование крови в специальной пробирке для отделения плазмы, обогащенной тромбоцитами.\n3. Очищение и обезболивание кожи с помощью аппликационной анестезии.\n4. Инъекционное введение полученной плазмы в кожу.",
          en: "1. Drawing a small amount of venous blood (like a standard blood test).\n2. Centrifuging the blood in a special tube to separate the platelet-rich plasma.\n3. Cleansing and anesthetizing the skin with a topical anesthetic.\n4. Injecting the obtained plasma into the skin.",
          de: "1. Entnahme einer kleinen Menge venösen Blutes (wie bei einem normalen Bluttest).\n2. Zentrifugieren des Blutes in einem speziellen Röhrchen, um das plättchenreiche Plasma abzutrennen.\n3. Reinigung und Betäubung der Haut mit einem topischen Anästhetikum.\n4. Injektion des gewonnenen Plasmas in die Haut."
        }
      },
      {
        type: "image",
        content: { image: "https://www.biospaclinic.ru/upload/medialibrary/d1f/3c5volqxkf2fzfztxrq95ln61x3ubz7w/plazmolifting_2_1.jpg" },
        sideText: {
          uk: "Процедура є на 100% безпечною, оскільки виключає ризик алергічних реакцій та відторгнення.",
          ru: "Процедура на 100% безопасна, так как исключает риск аллергических реакций и отторжения.",
          en: "The procedure is 100% safe as it eliminates the risk of allergic reactions and rejection.",
          de: "Das Verfahren ist 100% sicher, da es das Risiko von allergischen Reaktionen und Abstoßung ausschließt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до плазмоліфтингу обличчя",
          ru: "Показания к плазмолифтингу лица",
          en: "Indications for Facial Plasmolifting",
          de: "Indikationen für Gesichts-Plasmalifting"
        }
      },
      {
        type: "list",
        content: {
          uk: "Вікові зміни (дрібні зморшки, втрата пружності).\nТьмяний, нездоровий колір обличчя.\nСухість та зневоднення шкіри.\nАкне та постакне (для прискорення загоєння та зменшення плям).\nВідновлення шкіри після сонячних опіків або агресивних пілінгів.\nПрофілактика старіння.",
          ru: "Возрастные изменения (мелкие морщины, потеря упругости).\nТусклый, нездоровый цвет лица.\nСухость и обезвоженность кожи.\nАкне и постакне (для ускорения заживления и уменьшения пятен).\nВосстановление кожи после солнечных ожогов или агрессивных пилингов.\nПрофилактика старения.",
          en: "Age-related changes (fine wrinkles, loss of firmness).\nDull, unhealthy complexion.\nDryness and dehydration of the skin.\nAcne and post-acne (to accelerate healing and reduce spots).\nSkin recovery after sunburns or aggressive peels.\nAnti-aging prevention.",
          de: "Altersbedingte Veränderungen (feine Falten, Festigkeitsverlust).\nFahler, ungesunder Teint.\nTrockenheit und Dehydration der Haut.\nAkne und Post-Akne (um die Heilung zu beschleunigen und Flecken zu reduzieren).\nHauterholung nach Sonnenbrand oder aggressiven Peelings.\nAnti-Aging-Prävention."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс та результати",
          ru: "Курс и результаты",
          en: "Course and Results",
          de: "Kurs und Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення максимального омолоджуючого ефекту рекомендується курс з 3-5 процедур з інтервалом 2-3 тижні. Ефект від процедури є накопичувальним. Вже після перших сеансів шкіра стає більш зволоженою та свіжою, а після повного курсу значно підвищується її щільність та пружність, розгладжуються дрібні зморшки.",
          ru: "Для достижения максимального омолаживающего эффекта рекомендуется курс из 3-5 процедур с интервалом 2-3 недели. Эффект от процедуры является накопительным. Уже после первых сеансов кожа становится более увлажненной и свежей, а после полного курса значительно повышается её плотность и упругость, разглаживаются мелкие морщины.",
          en: "To achieve the maximum rejuvenating effect, a course of 3-5 procedures with an interval of 2-3 weeks is recommended. The effect of the procedure is cumulative. After the first sessions, the skin becomes more hydrated and fresh, and after the full course, its density and firmness significantly increase, and fine wrinkles are smoothed out.",
          de: "Um den maximalen Verjüngungseffekt zu erzielen, wird ein Kurs von 3-5 Behandlungen im Abstand von 2-3 Wochen empfohlen. Die Wirkung des Verfahrens ist kumulativ. Bereits nach den ersten Sitzungen wird die Haut hydratisierter und frischer, und nach dem vollständigen Kurs nehmen ihre Dichte und Festigkeit deutlich zu, und feine Fältchen werden geglättet."
        }
      }
    ],
    faqs: ["faq_prp_face_1", "faq_prp_face_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice58", // НОВАЯ ПОДУСЛУГА
    serviceId: "service14", // Привязка к основной услуге "Плазмолифтинг"
    title: {
      uk: "Плазмоліфтинг шкіри голови",
      ru: "Плазмолифтинг кожи головы",
      en: "Scalp Plasmolifting",
      de: "Plasmalifting der Kopfhaut"
    },
    slug: "plazmolifting-shkiry-holovy",
    mainImage: "https://medworldhair.com/wp-content/uploads/2023/02/Scalp-Micropigmentation-1-1.jpg.webp",
    content: [
      {
        type: "heading",
        content: {
          uk: "Плазмоліфтинг для волосся: зупиніть випадіння та активуйте ріст",
          ru: "Плазмолифтинг для волос: остановите выпадение и активируйте рост",
          en: "Plasmolifting for Hair: Stop Hair Loss and Activate Growth",
          de: "Plasmalifting für Haare: Stoppen Sie Haarausfall und aktivieren Sie das Wachstum"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Плазмоліфтинг (PRP-терапія) шкіри голови — це інноваційна та на 100% натуральна методика лікування випадіння та погіршення якості волосся. В основу процедури покладено використання власної плазми пацієнта, збагаченої тромбоцитами. Тромбоцитарні фактори росту є потужними біологічними стимуляторами, які «пробуджують» сплячі волосяні фолікули, покращують їхнє живлення та подовжують фазу активного росту волосся.",
          ru: "Плазмолифтинг (PRP-терапия) кожи головы — это инновационная и на 100% натуральная методика лечения выпадения и ухудшения качества волос. В основу процедуры положено использование собственной плазмы пациента, обогащенной тромбоцитами. Тромбоцитарные факторы роста являются мощными биологическими стимуляторами, которые «пробуждают» спящие волосяные фолликулы, улучшают их питание и продлевают фазу активного роста волос.",
          en: "Scalp plasmolifting (PRP therapy) is an innovative and 100% natural method for treating hair loss and deteriorating hair quality. The procedure is based on using the patient's own platelet-rich plasma. Platelet growth factors are powerful biological stimulators that \"awaken\" dormant hair follicles, improve their nutrition, and prolong the active hair growth phase.",
          de: "Das Plasmalifting der Kopfhaut (PRP-Therapie) ist eine innovative und 100% natürliche Methode zur Behandlung von Haarausfall und sich verschlechternder Haarqualität. Das Verfahren basiert auf der Verwendung des patienteneigenen plättchenreichen Plasmas. Thrombozyten-Wachstumsfaktoren sind starke biologische Stimulatoren, die ruhende Haarfollikel „erwecken“, ihre Ernährung verbessern und die aktive Haarwachstumsphase verlängern."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як це працює?",
          ru: "Как это работает?",
          en: "How Does It Work?",
          de: "Wie funktioniert es?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Введена в шкіру голови аутоплазма покращує мікроциркуляцію та клітинний метаболізм. Фактори росту, що вивільняються з тромбоцитів, безпосередньо стимулюють клітини волосяного фолікула, переводячи його з фази спокою (телоген) у фазу росту (анаген). Це призводить до зменшення випадіння, зміцнення наявного волосся та стимуляції росту нового.",
          ru: "Введенная в кожу головы аутоплазма улучшает микроциркуляцию и клеточный метаболизм. Факторы роста, высвобождаемые из тромбоцитов, напрямую стимулируют клетки волосяного фолликула, переводя его из фазы покоя (телоген) в фазу роста (анаген). Это приводит к уменьшению выпадения, укреплению существующих волос и стимуляции роста новых.",
          en: "Autoplasma injected into the scalp improves microcirculation and cellular metabolism. Growth factors released from platelets directly stimulate the hair follicle cells, transitioning them from the resting phase (telogen) to the growth phase (anagen). This leads to reduced hair loss, strengthening of existing hair, and stimulation of new hair growth.",
          de: "In die Kopfhaut injiziertes Eigenplasma verbessert die Mikrozirkulation und den Zellstoffwechsel. Wachstumsfaktoren, die von den Thrombozyten freigesetzt werden, stimulieren direkt die Haarfollikelzellen und versetzen sie von der Ruhephase (Telogen) in die Wachstumsphase (Anagen). Dies führt zu reduziertem Haarausfall, Stärkung vorhandener Haare und Stimulierung neuen Haarwuchses."
        }
      },
      {
        type: "image",
        content: { image: "https://formula-img.ru/wp-content/uploads/2023/04/plazmoterapiya.jpg" },
        sideText: {
          uk: "Процедура проводиться лікарем-трихологом після ретельної діагностики для досягнення максимального ефекту.",
          ru: "Процедура проводится врачом-трихологом после тщательной диагностики для достижения максимального эффекта.",
          en: "The procedure is performed by a trichologist after a thorough diagnosis to achieve the maximum effect.",
          de: "Das Verfahren wird von einem Trichologen nach einer gründlichen Diagnose durchgeführt, um die maximale Wirkung zu erzielen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до плазмоліфтингу шкіри голови",
          ru: "Показания к плазмолифтингу кожи головы",
          en: "Indications for Scalp Plasmolifting",
          de: "Indikationen für das Plasmalifting der Kopfhaut"
        }
      },
      {
        type: "list",
        content: {
          uk: "Різні види алопеції (андрогенетична, дифузна, вогнищева).\nІнтенсивне випадіння волосся після стресу, COVID-19, вагітності.\nСтоншення, порідіння та погіршення якості волосся.\nСеборея, лупа та свербіж шкіри голови (в комплексній терапії).\nПідготовка до трансплантації волосся та реабілітація після.",
          ru: "Различные виды алопеции (андрогенетическая, диффузная, очаговая).\nИнтенсивное выпадение волос после стресса, COVID-19, беременности.\nИстончение, поредение и ухудшение качества волос.\nСеборея, перхоть и зуд кожи головы (в комплексной терапии).\nПодготовка к трансплантации волос и реабилитация после.",
          en: "Various types of alopecia (androgenetic, diffuse, areata).\nIntense hair loss after stress, COVID-19, pregnancy.\nThinning, sparseness, and deteriorating hair quality.\nSeborrhea, dandruff, and itchy scalp (in complex therapy).\nPreparation for and rehabilitation after hair transplantation.",
          de: "Verschiedene Arten von Alopezie (androgenetische, diffuse, Alopecia areata).\nIntensiver Haarausfall nach Stress, COVID-19, Schwangerschaft.\nDünner werdendes, schütteres und sich verschlechterndes Haar.\nSeborrhoe, Schuppen und juckende Kopfhaut (in der komplexen Therapie).\nVorbereitung auf und Rehabilitation nach einer Haartransplantation."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс та результати",
          ru: "Курс и результаты",
          en: "Course and Results",
          de: "Kurs und Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перші результати у вигляді зменшення випадіння волосся помітні вже після 2-3 процедур. Для стимуляції росту нового волосся необхідний повний курс, який зазвичай складається з 4-6 сеансів з інтервалом 2-4 тижні. Ефект від курсу довготривалий, для його підтримки рекомендується проводити 1-2 процедури на рік.",
          ru: "Первые результаты в виде уменьшения выпадения волос заметны уже после 2-3 процедур. Для стимуляции роста новых волос необходим полный курс, который обычно состоит из 4-6 сеансов с интервалом 2-4 недели. Эффект от курса долговременный, для его поддержания рекомендуется проводить 1-2 процедуры в год.",
          en: "The first results, in the form of reduced hair loss, are noticeable after 2-3 procedures. To stimulate the growth of new hair, a full course is necessary, which usually consists of 4-6 sessions with an interval of 2-4 weeks. The effect of the course is long-lasting; to maintain it, 1-2 procedures per year are recommended.",
          de: "Die ersten Ergebnisse in Form von reduziertem Haarausfall sind nach 2-3 Behandlungen spürbar. Um das Wachstum neuer Haare zu stimulieren, ist ein vollständiger Kurs erforderlich, der in der Regel aus 4-6 Sitzungen im Abstand von 2-4 Wochen besteht. Die Wirkung des Kurses ist langanhaltend; zur Aufrechterhaltung werden 1-2 Behandlungen pro Jahr empfohlen."
        }
      }
    ],
    faqs: ["faq_prp_hair_1", "faq_prp_hair_2"],
    doctors: ["doctor_trichologist_1", "doctor_dermatologist_1", "doctor_cosmetologist_injector_1"]
  },

  {
    id: "subservice59", // НОВАЯ ПОДУСЛУГА
    serviceId: "service14", // Привязка к основной услуге "Плазмолифтинг"
    title: {
      uk: "Плазмотерапія зони шиї та декольте",
      ru: "Плазмотерапия зоны шеи и декольте",
      en: "Plasmotherapy for the Neck and Décolleté Area",
      de: "Plasmatherapie für den Hals- und Dekolletébereich"
    },
    slug: "plazmoterapiya-shyi-ta-dekolte",
    mainImage: "https://images.thevoicemag.ru/upload/img_cache/e4e/e4ebd7456240543e1b2155406c63e667_cropped_666x445.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Плазмотерапія шиї та декольте: природне омолодження делікатних зон",
          ru: "Плазмотерапия шеи и декольте: естественное омоложение деликатных зон",
          en: "Plasmotherapy for Neck and Décolleté: Natural Rejuvenation of Delicate Areas",
          de: "Plasmatherapie für Hals und Dekolleté: Natürliche Verjüngung empfindlicher Bereiche"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Шкіра шиї та декольте має дуже тонку підшкірно-жирову клітковину, тому є надзвичайно вразливою до вікових змін та впливу сонця. Саме тут часто з'являються перші зморшки, в'ялість та пігментація. Плазмоліфтинг (PRP-терапія) — це ідеальна методика для роботи з цими делікатними зонами, оскільки вона використовує власні ресурси організму для потужної регенерації та омолодження шкіри зсередини.",
          ru: "Кожа шеи и декольте имеет очень тонкую подкожно-жировую клетчатку, поэтому чрезвычайно уязвима к возрастным изменениям и воздействию солнца. Именно здесь часто появляются первые морщины, дряблость и пигментация. Плазмолифтинг (PRP-терапия) — это идеальная методика для работы с этими деликатными зонами, поскольку она использует собственные ресурсы организма для мощной регенерации и омоложения кожи изнутри.",
          en: "The skin on the neck and décolleté has very thin subcutaneous fat, making it extremely vulnerable to age-related changes and sun exposure. This is often where the first wrinkles, laxity, and pigmentation appear. Plasmolifting (PRP therapy) is an ideal method for working with these delicate areas, as it uses the body's own resources for powerful skin regeneration and rejuvenation from within.",
          de: "Die Haut an Hals und Dekolleté hat sehr dünnes Unterhautfettgewebe und ist daher extrem anfällig für altersbedingte Veränderungen und Sonneneinstrahlung. Hier treten oft die ersten Falten, Schlaffheit und Pigmentierung auf. Das Plasmalifting (PRP-Therapie) ist eine ideale Methode für die Arbeit mit diesen empfindlichen Bereichen, da es die körpereigenen Ressourcen für eine starke Hautregeneration und -verjüngung von innen nutzt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Горизонтальні зморшки на шиї («кільця Венери»).\nДрібна сіточка зморшок та в'ялість шкіри в зоні декольте.\nВтрата тонусу та еластичності.\nСухість та зневоднення шкіри.\nПігментні плями та нерівний тон, спричинені фотостарінням.",
          ru: "Горизонтальные морщины на шее («кольца Венеры»).\nМелкая сеточка морщин и дряблость кожи в зоне декольте.\nПотеря тонуса и эластичности.\nСухость и обезвоженность кожи.\nПигментные пятна и неровный тон, вызванные фотостарением.",
          en: "Horizontal wrinkles on the neck (\"Venus rings\").\nFine lines and skin laxity in the décolleté area.\nLoss of tone and elasticity.\nDryness and dehydration of the skin.\nPigment spots and uneven tone caused by photoaging.",
          de: "Horizontale Falten am Hals („Venusringe“).\nFeine Linien und Hautschlaffheit im Dekolletébereich.\nVerlust von Tonus und Elastizität.\nTrockenheit und Dehydration der Haut.\nPigmentflecken und ungleichmäßiger Hautton durch Lichtalterung."
        }
      },
      {
        type: "image",
        content: { image: "https://buybeauty.com.ua/images/blog/3/zona-dekolte.jpg" },
        sideText: {
          uk: "Власна плазма, збагачена тромбоцитами, запускає природні процеси оновлення, відновлюючи молодість шкіри.",
          ru: "Собственная плазма, обогащенная тромбоцитами, запускает естественные процессы обновления, восстанавливая молодость кожи.",
          en: "The patient's own platelet-rich plasma triggers natural renewal processes, restoring the skin's youth.",
          de: "Das patienteneigene plättchenreiche Plasma löst natürliche Erneuerungsprozesse aus und stellt die Jugend der Haut wieder her."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як плазма омолоджує шкіру шиї та декольте?",
          ru: "Как плазма омолаживает кожу шеи и декольте?",
          en: "How Does Plasma Rejuvenate the Skin of the Neck and Décolleté?",
          de: "Wie verjüngt Plasma die Haut an Hals und Dekolleté?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Фактори росту, що містяться в тромбоцитах, стимулюють клітини-фібробласти. У відповідь вони починають активно виробляти молодий колаген, еластин та власну гіалуронову кислоту. Це призводить до ущільнення шкірного каркасу, підвищення пружності, глибокого зволоження та розгладження зморшок. Процедура також покращує місцевий кровообіг, завдяки чому шкіра набуває більш здорового та рівного кольору.",
          ru: "Факторы роста, содержащиеся в тромбоцитах, стимулируют клетки-фибробласты. В ответ они начинают активно вырабатывать молодой коллаген, эластин и собственную гиалуроновую кислоту. Это приводит к уплотнению кожного каркаса, повышению упругости, глубокому увлажнению и разглаживанию морщин. Процедура также улучшает местное кровообращение, благодаря чему кожа приобретает более здоровый и ровный цвет.",
          en: "Growth factors contained in platelets stimulate fibroblast cells. In response, they begin to actively produce young collagen, elastin, and the skin's own hyaluronic acid. This leads to the densification of the skin's framework, increased firmness, deep hydration, and smoothing of wrinkles. The procedure also improves local blood circulation, giving the skin a healthier and more even color.",
          de: "Wachstumsfaktoren, die in den Blutplättchen enthalten sind, stimulieren die Fibroblastenzellen. Als Reaktion darauf beginnen sie aktiv, junges Kollagen, Elastin und hauteigene Hyaluronsäure zu produzieren. Dies führt zur Verdichtung des Hautgerüsts, erhöhter Festigkeit, tiefer Hydratation und Glättung von Falten. Das Verfahren verbessert auch die lokale Durchblutung, wodurch die Haut eine gesündere und gleichmäßigere Farbe erhält."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур та результати",
          ru: "Курс процедур и результаты",
          en: "Course of Procedures and Results",
          de: "Behandlungskurs und Ergebnisse"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура плазмотерапії для шиї та декольте проводиться курсом з 3-5 сеансів з інтервалом 2-4 тижні. Ефект є накопичувальним і стає максимально вираженим через кілька місяців після завершення курсу. Шкіра стає більш щільною, еластичною, зволоженою, а зморшки — менш помітними.",
          ru: "Процедура плазмотерапии для шеи и декольте проводится курсом из 3-5 сеансов с интервалом 2-4 недели. Эффект является накопительным и становится максимально выраженным через несколько месяцев после завершения курса. Кожа становится более плотной, эластичной, увлажненной, а морщины — менее заметными.",
          en: "The plasmotherapy procedure for the neck and décolleté is carried out in a course of 3-5 sessions with an interval of 2-4 weeks. The effect is cumulative and becomes most pronounced a few months after the course is completed. The skin becomes denser, more elastic, hydrated, and wrinkles become less noticeable.",
          de: "Das Plasmatherapie-Verfahren für Hals und Dekolleté wird in einem Kurs von 3-5 Sitzungen im Abstand von 2-4 Wochen durchgeführt. Die Wirkung ist kumulativ und wird einige Monate nach Abschluss des Kurses am ausgeprägtesten. Die Haut wird dichter, elastischer, mit Feuchtigkeit versorgt und Falten werden weniger auffällig."
        }
      }
    ],
    faqs: ["faq_prp_neck_1", "faq_prp_neck_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice60", // НОВАЯ ПОДУСЛУГА
    serviceId: "service14", // Привязка к основной услуге "Плазмолифтинг"
    title: {
      uk: "Плазмоліфтинг рук",
      ru: "Плазмолифтинг рук",
      en: "Hand Plasmolifting",
      de: "Plasmalifting für die Hände"
    },
    slug: "plazmolifting-ruk",
    mainImage: "https://www.pavicic-muenchen.de/wp-content/uploads/2022/09/dr-pavicic-news-handverjuengung.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Плазмоліфтинг рук: повернення молодості вашим рукам",
          ru: "Плазмолифтинг рук: возвращение молодости вашим рукам",
          en: "Hand Plasmolifting: Restoring Youth to Your Hands",
          de: "Plasmalifting für die Hände: Geben Sie Ihren Händen die Jugend zurück"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Руки постійно піддаються впливу зовнішнього середовища, через що шкіра на них швидко втрачає вологу, стоншується, вкривається пігментними плямами та зморшками. Плазмоліфтинг (PRP-терапія) — це ефективна та абсолютно природна методика омолодження шкіри кистей рук. Ін'єкції власної плазми, збагаченої тромбоцитами, запускають процеси глибокої регенерації, відновлюючи щільність, еластичність та здоровий колір шкіри.",
          ru: "Руки постоянно подвергаются воздействию внешней среды, из-за чего кожа на них быстро теряет влагу, истончается, покрывается пигментными пятнами и морщинами. Плазмолифтинг (PRP-терапия) — это эффективная и абсолютно естественная методика омоложения кожи кистей рук. Инъекции собственной плазмы, обогащенной тромбоцитами, запускают процессы глубокой регенерации, восстанавливая плотность, эластичность и здоровый цвет кожи.",
          en: "Hands are constantly exposed to the environment, causing the skin on them to quickly lose moisture, thin out, and become covered with pigment spots and wrinkles. Plasmolifting (PRP therapy) is an effective and completely natural method for rejuvenating the skin of the hands. Injections of the patient's own platelet-rich plasma trigger deep regeneration processes, restoring the skin's density, elasticity, and healthy color.",
          de: "Die Hände sind ständig Umwelteinflüssen ausgesetzt, wodurch die Haut an ihnen schnell Feuchtigkeit verliert, dünner wird und mit Pigmentflecken und Falten bedeckt ist. Das Plasmalifting (PRP-Therapie) ist eine wirksame und völlig natürliche Methode zur Verjüngung der Haut an den Händen. Injektionen des patienteneigenen plättchenreichen Plasmas lösen tiefe Regenerationsprozesse aus und stellen die Dichte, Elastizität und gesunde Farbe der Haut wieder her."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до плазмоліфтингу рук",
          ru: "Показания к плазмолифтингу рук",
          en: "Indications for Hand Plasmolifting",
          de: "Indikationen für das Plasmalifting der Hände"
        }
      },
      {
        type: "list",
        content: {
          uk: "Суха, тонка та зневоднена шкіра.\nВтрата пружності та еластичності.\nДрібні зморшки на кистях рук.\nПігментні плями (в комплексній терапії).\nВиступаючі вени та сухожилля через втрату підшкірного об'єму.\nПрофілактика фото- та хроностаріння.",
          ru: "Сухая, тонкая и обезвоженная кожа.\nПотеря упругости и эластичности.\nМелкие морщины на кистях рук.\nПигментные пятна (в комплексной терапии).\nВыступающие вены и сухожилия из-за потери подкожного объема.\nПрофилактика фото- и хроностарения.",
          en: "Dry, thin, and dehydrated skin.\nLoss of firmness and elasticity.\nFine wrinkles on the hands.\nPigment spots (in complex therapy).\nProminent veins and tendons due to loss of subcutaneous volume.\nPrevention of photo- and chrono-aging.",
          de: "Trockene, dünne und dehydrierte Haut.\nVerlust von Festigkeit und Elastizität.\nFeine Fältchen an den Händen.\nPigmentflecken (in der komplexen Therapie).\nHervortretende Venen und Sehnen aufgrund von Volumenverlust im Unterhautgewebe.\nPrävention von Licht- und Chrono-Alterung."
        }
      },
      {
        type: "image",
        content: { image: "https://irinakhrustaleva.com/upload/medialibrary/fd4/fd4070469bfabbb45c5e047b5dbfb3ea.jpg" },
        sideText: {
          uk: "Процедура стимулює вироблення власного колагену, що забезпечує природний та довготривалий ефект омолодження.",
          ru: "Процедура стимулирует выработку собственного коллагена, что обеспечивает естественный и долговременный эффект омоложения.",
          en: "The procedure stimulates the production of the body's own collagen, which provides a natural and long-lasting rejuvenating effect.",
          de: "Das Verfahren stimuliert die Produktion des körpereigenen Kollagens, was einen natürlichen und langanhaltenden Verjüngungseffekt bewirkt."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура та який результат?",
          ru: "Как проходит процедура и какой результат?",
          en: "How is the procedure performed and what are the results?",
          de: "Wie wird das Verfahren durchgeführt und was sind die Ergebnisse?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура аналогічна плазмоліфтингу для інших зон: у пацієнта беруть невелику кількість крові, центрифугують її для отримання плазми, а потім вводять її за допомогою мікроін'єкцій в шкіру кистей рук. Процедура проводиться під місцевою анестезією. Вже після першого сеансу шкіра стає більш зволоженою та свіжою.",
          ru: "Процедура аналогична плазмолифтингу для других зон: у пациента берут небольшое количество крови, центрифугируют её для получения плазмы, а затем вводят её с помощью микроинъекций в кожу кистей рук. Процедура проводится под местной анестезией. Уже после первого сеанса кожа становится более увлажненной и свежей.",
          en: "The procedure is similar to plasmolifting for other areas: a small amount of blood is drawn from the patient, centrifuged to obtain plasma, and then injected into the skin of the hands via microinjections. The procedure is performed under local anesthesia. After the first session, the skin becomes more moisturized and fresh.",
          de: "Das Verfahren ähnelt dem Plasmalifting für andere Bereiche: Dem Patienten wird eine kleine Menge Blut entnommen, zentrifugiert, um Plasma zu gewinnen, und dann über Mikroinjektionen in die Haut der Hände injiziert. Das Verfahren wird unter örtlicher Betäubung durchgeführt. Bereits nach der ersten Sitzung wird die Haut mit mehr Feuchtigkeit versorgt und frischer."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Курс процедур",
          ru: "Курс процедур",
          en: "Course of Procedures",
          de: "Behandlungskurs"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для досягнення максимального ефекту — ущільнення шкіри, зменшення зморшок та освітлення пігментації — рекомендується курс з 3-5 процедур з інтервалом 2-3 тижні. Результат від курсу процедур зберігається до 1-1.5 року.",
          ru: "Для достижения максимального эффекта — уплотнения кожи, уменьшения морщин и осветления пигментации — рекомендуется курс из 3-5 процедур с интервалом 2-3 недели. Результат от курса процедур сохраняется до 1-1.5 лет.",
          en: "To achieve the maximum effect - skin tightening, wrinkle reduction, and pigmentation lightening - a course of 3-5 procedures with an interval of 2-3 weeks is recommended. The result from the course of procedures lasts up to 1-1.5 years.",
          de: "Um die maximale Wirkung zu erzielen - Hautstraffung, Faltenreduzierung und Pigmentaufhellung - wird ein Kurs von 3-5 Behandlungen im Abstand von 2-3 Wochen empfohlen. Das Ergebnis des Behandlungskurses hält bis zu 1-1,5 Jahre an."
        }
      }
    ],
    faqs: ["faq_prp_hands_1", "faq_prp_hands_2"],
    doctors: ["doctor_cosmetologist_injector_1", "doctor_dermatologist_1"]
  },

  {
    id: "subservice61", // НОВАЯ ПОДУСЛУГА
    serviceId: "service15", // Привязка к новой основной услуге "Склеротерапия"
    title: {
      uk: "Склеротерапія судинних зірочок",
      ru: "Склеротерапия сосудистых звёздочек",
      en: "Sclerotherapy for Spider Veins",
      de: "Sklerotherapie für Besenreiser"
    },
    slug: "skleroterapiya-sudynnykh-zirochok",
    mainImage: "https://www.medalp.ru/upload/images/1%20(5).jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Склеротерапія: позбавлення від судинних «зірочок» та «сіточок»",
          ru: "Склеротерапия: избавление от сосудистых «звёздочек» и «сеточек»",
          en: "Sclerotherapy: Getting Rid of Spider and Reticular Veins",
          de: "Sklerotherapie: Beseitigung von Besenreisern und retikulären Venen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Судинні «зірочки» (телеангіектазії) та «сіточки» (ретикулярні вени) на ногах — це розширені внутрішньошкірні капіляри та вени, які, хоч і не становлять загрози здоров'ю, є помітним косметичним дефектом. Склеротерапія — це найефективніший метод їх усунення. Процедура дозволяє повернути шкірі ніг рівний та естетичний вигляд без хірургічного втручання.",
          ru: "Сосудистые «звёздочки» (телеангиэктазии) и «сеточки» (ретикулярные вены) на ногах — это расширенные внутрикожные капилляры и вены, которые, хотя и не представляют угрозы здоровью, являются заметным косметическим дефектом. Склеротерапия — это самый эффективный метод их устранения. Процедура позволяет вернуть коже ног ровный и эстетичный вид без хирургического вмешательства.",
          en: "Spider veins (telangiectasias) and reticular veins on the legs are dilated intradermal capillaries and veins that, while not a health threat, are a noticeable cosmetic defect. Sclerotherapy is the most effective method for their removal. The procedure allows for restoring an even and aesthetic appearance to the skin of the legs without surgery.",
          de: "Besenreiser (Teleangiektasien) und retikuläre Venen an den Beinen sind erweiterte intradermale Kapillaren und Venen, die zwar keine Gesundheitsgefahr darstellen, aber ein auffälliger kosmetischer Makel sind. Die Sklerotherapie ist die wirksamste Methode zu ihrer Entfernung. Das Verfahren ermöglicht es, der Haut der Beine ohne Operation ein ebenmäßiges und ästhetisches Aussehen zurückzugeben."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Як проходить процедура?",
          ru: "Как проходит процедура?",
          en: "How is the procedure performed?",
          de: "Wie wird die Behandlung durchgeführt?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Лікар-флеболог за допомогою дуже тонкої голки (тоншої за людську волосину) вводить у просвіт розширеної судини спеціальний препарат — склерозант. Ця речовина викликає склеювання стінок капіляра. Кров перестає надходити в цю судину, і вона стає невидимою. З часом оброблена судина повністю розсмоктується. Процедура практично безболісна і не потребує анестезії.",
          ru: "Врач-флеболог с помощью очень тонкой иглы (тоньше человеческого волоса) вводит в просвет расширенного сосуда специальный препарат — склерозант. Это вещество вызывает склеивание стенок капилляра. Кровь перестает поступать в этот сосуд, и он становится невидимым. Со временем обработанный сосуд полностью рассасывается. Процедура практически безболезненна и не требует анестезии.",
          en: "A phlebologist uses a very fine needle (thinner than a human hair) to inject a special preparation, a sclerosant, into the lumen of the dilated vessel. This substance causes the capillary walls to stick together. Blood stops flowing into this vessel, and it becomes invisible. Over time, the treated vessel is completely absorbed. The procedure is virtually painless and does not require anesthesia.",
          de: "Ein Phlebologe injiziert mit einer sehr feinen Nadel (dünner als ein menschliches Haar) ein spezielles Präparat, ein Sklerosierungsmittel, in das Lumen des erweiterten Gefäßes. Diese Substanz bewirkt, dass die Kapillarwände verkleben. Das Blut fließt nicht mehr in dieses Gefäß, und es wird unsichtbar. Mit der Zeit wird das behandelte Gefäß vollständig resorbiert. Das Verfahren ist praktisch schmerzfrei und erfordert keine Anästhesie."
        }
      },
      {
        type: "image",
        content: { image: "https://familydoctor.ru/upload/medialibrary/5ed/sosudistaie_zvezdochki-na-lice.jpg" },
        sideText: {
          uk: "За один сеанс лікар може зробити безліч ін'єкцій, обробивши значну площу.",
          ru: "За один сеанс врач может сделать множество инъекций, обработав значительную площадь.",
          en: "In one session, the doctor can make numerous injections, treating a large area.",
          de: "In einer Sitzung kann der Arzt zahlreiche Injektionen vornehmen und einen großen Bereich behandeln."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Переваги склеротерапії",
          ru: "Преимущества склеротерапии",
          en: "Advantages of Sclerotherapy",
          de: "Vorteile der Sklerotherapie"
        }
      },

      {
        type: "list",
        content: {
          uk: "Висока ефективність: дозволяє видалити до 95% судинних зірочок.\nБезпека: сучасні препарати є гіпоалергенними.\nАмбулаторна процедура: сеанс триває 20-30 хвилин, після чого ви одразу повертаєтеся до звичного життя.\nВідсутність шрамів та рубців.",
          ru: "Высокая эффективность: позволяет удалить до 95% сосудистых звёздочек.\nБезопасность: современные препараты гипоаллергенны.\nАмбулаторная процедура: сеанс длится 20-30 минут, после чего вы сразу возвращаетесь к обычной жизни.\nОтсутствие шрамов и рубцов.",
          en: "High efficiency: allows for the removal of up to 95% of spider veins.\nSafety: modern preparations are hypoallergenic.\nOutpatient procedure: the session lasts 20-30 minutes, after which you can immediately return to your normal life.\nNo scars.",
          de: "Hohe Wirksamkeit: ermöglicht die Entfernung von bis zu 95% der Besenreiser.\nSicherheit: Moderne Präparate sind hypoallergen.\nAmbulantes Verfahren: Die Sitzung dauert 20-30 Minuten, danach können Sie sofort in Ihr normales Leben zurückkehren.\nKeine Narben."
        }
      },



      {
        type: "heading",
        content: {
          uk: "Рекомендації після процедури",
          ru: "Рекомендации после процедуры",
          en: "Post-Procedure Recommendations",
          de: "Empfehlungen nach dem Eingriff"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Після сеансу склеротерапії обов'язковим є носіння компресійного трикотажу (панчохи або гольфи) протягом періоду, визначеного лікарем (зазвичай від 3 до 7 днів). Це необхідно для правильного «склеювання» судин. Також рекомендуються щоденні піші прогулянки. Для досягнення ідеального результату може знадобитися від 1 до 4 сеансів.",
          ru: "После сеанса склеротерапии обязательным является ношение компрессионного трикотажа (чулки или гольфы) в течение периода, определенного врачом (обычно от 3 до 7 дней). Это необходимо для правильного «склеивания» сосудов. Также рекомендуются ежедневные пешие прогулки. Для достижения идеального результата может потребоваться от 1 до 4 сеансов.",
          en: "After the sclerotherapy session, it is mandatory to wear compression stockings or socks for a period determined by the doctor (usually from 3 to 7 days). This is necessary for the proper \"gluing\" of the vessels. Daily walks are also recommended. To achieve the ideal result, 1 to 4 sessions may be required.",
          de: "Nach der Sklerotherapie-Sitzung ist das Tragen von Kompressionsstrümpfen oder -socken für einen vom Arzt festgelegten Zeitraum (normalerweise 3 bis 7 Tage) obligatorisch. Dies ist für das ordnungsgemäße „Verkleben“ der Gefäße erforderlich. Tägliche Spaziergänge werden ebenfalls empfohlen. Um das ideale Ergebnis zu erzielen, können 1 bis 4 Sitzungen erforderlich sein."
        }
      },
      {
        type: "image",
        content: { image: "https://clinicaboli.ru/upload/resize_cache/sprint.editor/49f/1224_486_2/8nfrqg69zgnrjtisupykcm1d4336ry4z.jpg" },
      }
    ],
    faqs: ["faq_sclero_spider_veins_1", "faq_sclero_spider_veins_2"],
    doctors: ["doctor_phlebologist_1"]
  },


  {
    id: "subservice62", // НОВАЯ ПОДУСЛУГА
    serviceId: "service15", // Привязка к основной услуге "Склеротерапия"
    title: {
      uk: "Склеротерапія варикозних вен",
      ru: "Склеротерапия варикозных вен",
      en: "Sclerotherapy for Varicose Veins",
      de: "Sklerotherapie für Krampfadern"
    },
    slug: "skleroterapiya-varykoznykh-ven",
    mainImage: "https://medifrancesolution.com/image/cache/data/blog/varices22/varices43-500x0s.jpg",
    content: [
      {
        type: "heading",
        content: {
          uk: "Склеротерапія варикозу: ефективне лікування без розрізів",
          ru: "Склеротерапия варикоза: эффективное лечение без разрезов",
          en: "Varicose Vein Sclerotherapy: Effective Treatment without Incisions",
          de: "Sklerotherapie bei Krampfadern: Wirksame Behandlung ohne Schnitte"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Склеротерапія — це сучасний та безпечний метод лікування варикозної хвороби на ранніх стадіях. Вона дозволяє усунути невеликі варикозно розширені вени (діаметром до 3-4 мм) без операції, болю та тривалої реабілітації. Процедура полягає у введенні в уражену вену спеціального препарату (склерозанту), який «пломбує» хвору судину зсередини, після чого вона поступово розсмоктується та зникає.",
          ru: "Склеротерапия — это современный и безопасный метод лечения варикозной болезни на ранних стадиях. Она позволяет устранить небольшие варикозно расширенные вены (диаметром до 3-4 мм) без операции, боли и длительной реабилитации. Процедура заключается во введении в пораженную вену специального препарата (склерозанта), который «пломбирует» больной сосуд изнутри, после чего он постепенно рассасывается и исчезает.",
          en: "Sclerotherapy is a modern and safe method for treating varicose disease in its early stages. It allows for the elimination of small varicose veins (up to 3-4 mm in diameter) without surgery, pain, or a long recovery period. The procedure involves injecting a special preparation (sclerosant) into the affected vein, which \"seals\" the diseased vessel from the inside, after which it gradually dissolves and disappears.",
          de: "Die Sklerotherapie ist eine moderne und sichere Methode zur Behandlung von Krampfadern im Frühstadium. Sie ermöglicht die Beseitigung kleiner Krampfadern (bis zu 3-4 mm Durchmesser) ohne Operation, Schmerzen oder lange Erholungszeit. Das Verfahren beinhaltet die Injektion eines speziellen Präparats (Sklerosierungsmittel) in die betroffene Vene, das das erkrankte Gefäß von innen „versiegelt“, woraufhin es allmählich aufgelöst wird und verschwindet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Foam-Form склеротерапія: інноваційний підхід",
          ru: "Foam-Form склеротерапия: инновационный подход",
          en: "Foam-Form Sclerotherapy: An Innovative Approach",
          de: "Foam-Form-Sklerotherapie: Ein innovativer Ansatz"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Для лікування більш крупних вен ми використовуємо пінну склеротерапію (Foam-Form). Перед введенням склерозант змішується з повітрям, утворюючи дрібнодисперсну піну. Така форма препарату дозволяє йому краще контактувати зі стінками вени та ефективно «закривати» навіть судини більшого діаметру. Піна не змішується з кров'ю, що робить процедуру ще більш безпечною.",
          ru: "Для лечения более крупных вен мы используем пенную склеротерапию (Foam-Form). Перед введением склерозант смешивается с воздухом, образуя мелкодисперсную пену. Такая форма препарата позволяет ему лучше контактировать со стенками вены и эффективно «закрывать» даже сосуды большего диаметра. Пена не смешивается с кровью, что делает процедуру еще более безопасной.",
          en: "For treating larger veins, we use foam sclerotherapy (Foam-Form). Before injection, the sclerosant is mixed with air to form a fine foam. This form of the preparation allows for better contact with the vein walls and effectively \"closes\" even larger diameter vessels. The foam does not mix with blood, making the procedure even safer.",
          de: "Zur Behandlung größerer Venen verwenden wir die Schaum-Sklerotherapie (Foam-Form). Vor der Injektion wird das Sklerosierungsmittel mit Luft vermischt, um einen feinen Schaum zu bilden. Diese Form des Präparats ermöglicht einen besseren Kontakt mit den Venenwänden und verschließt selbst Gefäße mit größerem Durchmesser effektiv. Der Schaum vermischt sich nicht mit dem Blut, was das Verfahren noch sicherer macht."
        }
      },

      {
        type: "image",
        content: { image: "https://www.gruzdevclinic.ru/upload/thumbs/results/source/skleroterapiya-nogi_5fb3b3.jpg" },
        sideText: {
          uk: "Процедура проводиться під контролем лікаря-флеболога, що гарантує точність та безпеку.",
          ru: "Процедура проводится под контролем врача-флеболога, что гарантирует точность и безопасность.",
          en: "The procedure is performed under the supervision of a phlebologist, which guarantees accuracy and safety.",
          de: "Das Verfahren wird unter Aufsicht eines Phlebologen durchgeführt, was Genauigkeit und Sicherheit gewährleistet."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до процедури",
          ru: "Показания к процедуре",
          en: "Indications for the Procedure",
          de: "Indikationen für das Verfahren"
        }
      },
      {
        type: "list",
        content: {
          uk: "Поодинокі варикозно розширені вени.\nРетикулярний варикоз («венозні сіточки»).\nВарикоз на початкових стадіях, коли немає показань до операції.\nЗалишковий варикоз після хірургічного лікування.",
          ru: "Единичные варикозно расширенные вены.\nРетикулярный варикоз («венозные сеточки»).\nВарикоз на начальных стадиях, когда нет показаний к операции.\nОстаточный варикоз после хирургического лечения.",
          en: "Single varicose veins.\nReticular varicose veins (\"venous nets\").\nVaricose veins in the initial stages, when there are no indications for surgery.\nResidual varicose veins after surgical treatment.",
          de: "Einzelne Krampfadern.\nRetikuläre Krampfadern („Venennetze“).\nKrampfadern im Anfangsstadium, wenn keine Operationsindikation besteht.\nRestkrampfadern nach chirurgischer Behandlung."
        }
      },

      {
        type: "image",
        content: { image: "https://fnkc-fmba.ru/upload/medialibrary/989/varikoz-na-nogah.jpg" },
      },
         {
        type: "heading",
        content: {
          uk: "Як підготуватися та що очікувати після?",
          ru: "Как подготовиться и что ожидать после?",
          en: "How to Prepare and What to Expect After?",
          de: "Wie man sich vorbereitet und was danach zu erwarten ist"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Перед процедурою необхідна консультація флеболога з УЗД вен. Сеанс триває 30-40 хвилин. Після процедури на ногу одягається компресійна панчоха, яку необхідно носити, не знімаючи, кілька днів, а потім — в денний час. Обов'язковою є щоденна ходьба. Протягом 2-4 тижнів оброблена вена може бути щільною на дотик і злегка темнішою — це нормальний процес її розсмоктування.",
          ru: "Перед процедурой необходима консультация флеболога с УЗИ вен. Сеанс длится 30-40 минут. После процедуры на ногу надевается компрессионный чулок, который необходимо носить, не снимая, несколько дней, а затем — в дневное время. Обязательной является ежедневная ходьба. В течение 2-4 недель обработанная вена может быть плотной на ощупь и слегка темнее — это нормальный процесс её рассасывания.",
          en: "Before the procedure, a consultation with a phlebologist including a vein ultrasound is necessary. The session lasts 30-40 minutes. After the procedure, a compression stocking is put on the leg, which must be worn without removal for several days, and then during the daytime. Daily walking is mandatory. For 2-4 weeks, the treated vein may feel firm to the touch and slightly darker - this is a normal part of its absorption process.",
          de: "Vor dem Eingriff ist eine Konsultation bei einem Phlebologen einschließlich eines Venenultraschalls erforderlich. Die Sitzung dauert 30-40 Minuten. Nach dem Eingriff wird ein Kompressionsstrumpf am Bein angelegt, der mehrere Tage ununterbrochen und dann tagsüber getragen werden muss. Tägliches Gehen ist obligatorisch. Für 2-4 Wochen kann sich die behandelte Vene fest anfühlen und etwas dunkler sein - dies ist ein normaler Teil ihres Absorptionsprozesses."
        }
      }
    ],
    faqs: ["faq_sclero_varicose_1", "faq_sclero_varicose_2"],
    doctors: ["doctor_phlebologist_1"]
  },

  {
    id: "subservice63", // НОВАЯ ПОДУСЛУГА
    serviceId: "service15", // Привязка к основной услуге "Склеротерапия"
    title: {
      uk: "Мікросклеротерапія",
      ru: "Микросклеротерапия",
      en: "Microsclerotherapy",
      de: "Mikrosklerotherapie"
    },
    slug: "mikroskleroterapiya",
    mainImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRIXFRUXFhUXFRUVFxUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0fHR0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwEEAAUGB//EAEEQAAIBAgMFBAcFBQcFAAAAAAECAAMRBCExBRJBUXEGE2GRIlKBobHB0RQykuHwByNCU3IVFkNigqLxRGOTssL/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBQQGB//EADYRAAICAQMDAQYFAgYDAQAAAAABAhEDBBIhBTFRQRMiYXGBkTKhscHR4fAGFCNCUvEVYoIz/9oADAMBAAIRAxEAPwCwXPOwnG0d4ioRzIhQ7JSpu5qfziAsU8QTmcvCADVrBjbMeETHYuviSpvr+uUTGiu+NvxzOogMsUahLBb6gWhQrLeCqFXZeC/OOhDtq7YWklyfS4DnNHp3Tp6vJtXZd34OXV6uGnhuff0Xk4jG42pWa7NlyGk95pNDg0sagufPqeT1Oty6h+8+PHoLRQBlxl8nbOddibSDSZJN3YwSp416FqmwwspeItUyCsSxjeQTUaXwwoollFpWZc1ZlPgSPhLnhg1yrKfaSXqbTDdosUgsMQ9vGze8gzmn03SyduCLVrMy4UmbXA9ua6H94q1V/C3mMvdOHP0HBP8A/NuL+6OnH1PJH8atHa7C7RUMQLo9m4o1gw+vUTz2r6fn0z95WvK7Gth1WPKuHz4OhQziOgxzFYwLxWMi8YGCADkgAREABtADLwAEtAAS8AAFzACwgtGBO9ADxpanG1pzHcGjXiGS6eNogBUkcYUBFQkZ38oUAlMSSSNYAC9Mk7wioZmCqkVRc6ZyVEWzZ/bgitUPM3+Uv0+CWbIsce7K8mRQg5P0OSxWLaq5cnXTwE+j6TSw0uJY4fX4s8hqtRLNNyl/0SrS1nGSGkWMsIsgyxIsU0lbZdFDgkjZOhdSnfSSTISjZVqUZdFnPKNFWoeEtSIJEKY2D4CiEAQQbjI+ET5JJm92N2xxVCw3+8T1Xz8jqJm6npWnzc1tflHZi1uXH62vidzsn9oFCrZX/dPyb7t/Bp5rVdKzYW3H3ka+DW48nD4Z0aY4EXAuOYmU+OGd+0L7WvKKw2slMQsdhQ9a684WKg+8HMRhRhPjAVC2gAsmAELnACyotAKMjAK0APERV5ymjssJa4va8W0lY1XFtYtorM3rZ6+ENo7MasL+FoUFiKNQBshqYto7LZtc28oqCzXqLVTfIEZSaIM1228Yd0IDlck+yem/w5hW+eV+nCMnqc/djDyUqJynq7s89Ncj75xFdDqYkWCL9CnKpMvjEuJSEqbLlEb3IkdxOkA1o1ZCTRrMbWt6IOfE8vznVjjfLOWbNTVqcB7Z0pDjH1YdN4miDiMFSKiO0NWkWhAunKIaYq8hLEpE02uxdwO0q1Ig06rC3C53faNJzZOnYciqasuhq8sHwzr9m9vzpXo3/wAyG3+0/WY2o/w6u+Kf0f8AJpYur+mSP2Ot2TtrDYjKnUG96h9FvI6zD1PT8+n/ABx4890aWHVYsv4GbM0ROOi+wDRhQAmkRxMB0RdxoYWxUGKr8QDCw2jqeJtqsLFtCONHqmOw2kjHrxDeUW4NoYx6cz5QtBtPCWrwousUa0KCxTVjzhQbhRxLDQxUPcQNovxMVBYyhtUjUX5Qodl7C7YHEGKh2OfEI9jeOhWc/tqpap4WE9Z0WcYad+WzE6gnLL9CaT6TehOzHkiwhlhS0XMMt5GToIq2bNFtKGzqSH3ykPUnfABrR7St5KKmLxVhYa/CXQx33OeeS+xp69Xh5+JnUghG+TXVK9jnK8mVQ7nXGF9hiVrmKGVSIShQxalyest3Ig40izTeDRU0OBvEQfAD0rwGpCXZl4A/rlHZZFRkHSJOp9kGRlS7D1W2YyPv6yD54ZXuZ0mxu2eIo2Vz3tPkx9IDwb6zH1fRsGbmPuy+Hb7Gjg6lkhxL3l+f3PRNjbbpYlN+mcx95T95TyInldXo8mmntmvr6M3cGeGaO6JfJnLR0WYDEIwwoaAMBkRCMKxARuiFgeOtRXlJEypWoRAVHoGIdACjAQ9KY5QAs0gvIRDsuUynqjygMOpQpuLEW8RlAXc1O1+zhcb1NyW5Gden1csXHoc+bTqfPqahKb07K4s1p6np2rWWKMTV4HjlRbptNqJnyRscE9opxsrTpmwFSUbS9SJrVrLHGNsU51E1VbEGdKikcyTfcq1K0dpFsYFSpV8/gPrISyehfGJUqAHXy8Jyzal3L42uxTq1CmanKcGWbx8xOiMVPuPobRBtfLOW49euNxXPTv0NktSasMql2ONxLFKrLO5TKJYFSKiuiTnFQC2uMxmOUZJU+4KYhzomXjFQ3jgvUh63PKN8AoeDoP2eYthjVCnJlYN0AvfztMLrSjLA79Ko0unbo5Ul6nrW9PIUbxl5EZN4BZG9EOyCwEQyC/UxALLn1ffGFHke/GSINoAJqWiHYg2gIjegBm9AAhVtEIauIgBapYmJjTKO36HeKHX7y+8Tv6dqvY5KfZnLrMHtY2u6NPhKtwJ7nT5FkgmjzuWG10bag1v17pc0cZcp5ytlkROIqZ/Ac/yk4oi+WavGPbO+phlyKESzFGzV4raKrqZmZ+oY8fdnZj00pdkaevtYnSY+XqspfhNCGkS7lZ8Y54zjlrcz9S9YIIWXJ1MpebJLu2TUIoEmQ3SHSNhs3abJ6LAsnvX8p26XX5cLp8o582nhk+DOjp1QdCDPT6bWwmqsycuCUO6HI80VKznaH0mP6zj4ZVJDr3iIdjY9nMRRSsPtFNXpNkS1zuHg1tCOd5w9RxZ54W8EmpLx6/D+Dt0c8Syf6iTT/I9Vwmz8OB6FKkBw3UX5CeFyZ80n78m/m2eljixx/DFfYvLhVGijyEobb7k1SD+zjlI0MjuhygMkYdeQgIzuF5CAzNwCAC2aAUDnyhYUcLU2eh/hlm0VlV9iKdIbQ3FSp2dvoxhsDcL/ALsNwaLYPcZ/dZ/WhsDcGnZJ/Wi2BuGDsk2m/HsDcM/ucfXMW0NwS9kyP4zFtCwanZ9gMjeP2aHuZx+08A1Gqd5d0HMW0Jnp+g6iVywyfblGR1PCqU168BYepPS9zCkqNpS0lT7jj2EtT/5k0yLXAjCbKGJqimdNbXtkJwdW93CpeGdmiVz2+Tttn9gcMouaak9BPKyzq+Ebkca9Tc0Oy1BdKSj/AEiVPPIsUYrsiwvZ+l/LX8IkHll5JoYNh0/UXyEi8kvI6BOwk9UeQi3sBFXs8nq+4SSmwOX2z2FpOSyKadT1lyv/AFLoZbjybZblwyM1uVPlHHY/YOKpkg0iy+spBv1XIj3zaw9Rk/df6/3Rm5dGl7yf5FCgeFrEa55jqJsaTUqaq068M4M2Nx7p8+UXKdY8fOaC5OSUF6FmwIuIropto67sN2hKkYeocv8ADP8A8H5TzfXOnqv8xj/+v5/k3+naq17KX0/g9HoPcTyzRrj7RDM3YqBMzcMVDtA7sKCwHEBgrThQDxTjoicaKcvIjaWHjEWFwkVDHLhhABi4YRDGChAAhh4rAPuYgINDwiGC2GHKNCs5T9oGy97DM6r6SWPsBz91539PzLFqIyfC7ff+pz6mLnilFHm2Dae5xu4nmcqNvRrC0jKJUpUSXvBIW+yxsTFCliKbn7pO63gDlf2ZGc2vwvNp5RXdcr6HRo8vs8qb7dj1+gQQJ4aSPToduSsmStOAMMIIAF3UBWL7q8YAvhhxzjsCji9mg8JOMqEcX2l7DpX9MDcqjRh8DOrBmjCdyVleRNxpHAY/ZNbDm1RCBzz3T7RlPRYNdi9JV8/57GTPSZPRX8v47lRcYo1cD2iaMdbifeS+5yy0+T/i/sbvs3galesnd3sGDFwDYAG+vE8Jw9R6hhWGUU7bVHVo9LP2ik1SR7XhEIAnin3N0swANRCgGXEVAZlAYs04qHZIpwoLJjA5ZElxEcBAVD0GUBoasQxirEIMQAmJjJsIgJtAQLRgVMbQDqVOhEA7cniO1MMaFepS0scuh0/XhPb9Jz+206b7rhmBrcGzI0u3oRh6uvSajM+cBxrW84UQURz6SBE9I7CbSNSiFY3ZDuk+Gq+7L2Tx/V9OsWdtdpc/yek0GX2mFX3XB1oMyDuGb0QGAZwCybGFAFvC9oDp0TeAUZuwELen4R2KihiMCr6qD1EmptdhOJranZmiTfukv/SJJ55AoGxwezlpiyqB7JTKbkTUUi7aRGYDGAQNogJDwAzegxoYrRAGYwIsIgs5hDLiIamA7GXiBB04ANDRAFvQGSWiAwPCgDDwECWjABmgDPNv2lbGN/tCDMD0rcV/LXzmr0rWPBl2v8Mv1/qc2qwrLC13j+hxWBrDez0yB6Nlf4T2CnuXBg5IcFopqp1HyBHyEuTKLqmWMO91HT6iQkVTVSOs/Z3WIq1BfIqvuJmB15LbB/P9jX6U+ZL5fueirU5Ty7NpBipIkkjN5jobRhSJDnnb2GABd77TCh0WkeKiDYYMAMPWIAN0QGQRENGBYACRAADGIU7woYPeQYIlWiJD1eBENGgMYRChHIUqkmmDQ4PGmIIPGJCsXtKnSF6jqvU5noNTLcOny5nWOLZGeWGNXN0c1tbtr/Dh1uf5jDL/AEr8z5Tc0nQn+LUP6L93/BmajqiXGL7v+DncT2hxT/eruByWyf8Araa+Ppmlh2gvrz+pny12eX+79ip/a+IGler/AOR/rL/8jp/+EfsiK1GX/k/uy1ge1WJpsD3rOt81c3BHU5ic+bpemyxrak/K4L8etzQdt38z03BbRWrTSoujAHpzB8RPG58EsOR45d0b+KayRU12ZbWpKaJk70dCZWxlFXUq2YMKsjbXJ5L2t7PnDVCyLeiwyI0U62M9J0nW8rDN8+j8+tfNGdqsN/6kfqa6hWvduO7Y9RaekjyjInGuPiWMK+Q8CYSRTkXJ1XYFf3jnhYfOec65L8C+f7Gx0qP4n8v3PRaN7TzMjaqhhB8PnIhwHv8ADOOhBGodMhAKEnEAHUSSiDTaLVOsLayJFxaGU6kCIT1rZwSHZIqAxDDiGjIhgxgKfKAitVgMTvQY0GrRANBjoLDR84IB3exiOGpVYJkmNr45aalnayjj9OZl2HDPNNQxq2yrJOONbpOkcztXtQ7ejQui8XP3j0H8I9/Sel0fRYQ97Py/Hp/X9DF1PU2+MXHxNE1Mm7OSSeJNyepOc241H3YqkZcpOXMmIYcpYRTFM0lRJIWzQsmkKqOJTOdMsjE73srjd3DIOILeRYn5zx3Upqeqm1/dI9DoouOGKf8AfJ0OHxmU4Gjs9Sz9pA1NuptFREXU2lSGrj2Xb4CNRZU2anbO0qFSm1NkdwRbID5m/ulsE073VRFv4Web1cCtMkFze5su4b2vlcm3Keow9R9xUrZj5sVS54RawBS3pI766NujLWwtfnxhPqGVrskVLDBy7tndpgaVCxpKyAnKzk7xAyIJz0JymFqs0sr3Tds1dPBY1UVQrFbQOV+8bMa1ntrncA2mdKUUdkYyfYHBvWJJWmT6pJay+INxf3yCnb4RP2b9XR1KVGe7P6JJ+6rMqjwtfSOibSXYSQA17DwOl5JRSJLlDKKjW9v0ZJsLZZo1ha/h1kBTXoPo4sWsTn+s4OJQ4jauLVRmcvOJJsSi32Bw2IBzBuPlCURu1wW1rCQGHvxUCM346GA7QEJeAyu4jEYGiGElWMKDV4DYzvICPJ6/aAkWpAg+swGXQfWb2l6LUrzO14RlajqfFYlz5Zr3DObuxY+J+HCehxQhihtgkl8DGyTnklc3ZjFV6yxWyFpFapU8pYkQ5YpqlpMaiUnqxWdCgVWxd23Rmx4CcGr6hh00d2WVI7MGiyZnUFZcwWynqt6ZAANt0HM5Am9r2GYnldX/AImwPtdfBfybWDouVPmvv/B1tCgVUItwFtc3GWQNswOYnnMnWo9seN/V9/sjXj0yf+6S+hlXFG1+8G7lkCTYHmuYkFq9bkdKFfR/qxvS4Icyn+aOGqYjGMc+8NzqL2NjfK2mdzPQqMPWRhy9pdVZslw1VsqterpwYAdL3ufKWRWnTpy/Jsi8eZrs/ukX322yoq3AK2toTkLXY6mdOPHjmrhCUvpSISeSLqUox/NmYXaYrMPSu9hcFQb2J58M5DLlljdLHtfxsshh3rme75JG5wOAxJcld1AeG6oA8bEE3nNLNll8C1Y8cTf/ANlOyr3tTeYEcMgByEocZS7stUorsi9hsLSXMKCeZzPviWOMQlkk/UeFJ6RiscRla0Q9zKqo2QI0y3vC2knaLE+O4/dAzPl0kLsrc2uEQjMdTYcsoEnJegAW2uZ4R2PdfYZRokm5Nx4ZCLd4JNquBtJjvWGWfD3Qb4HUas2KP5yspaCNSAgw8Qyd6IAGgAmqYwFMYWNIFWgMkvAVEipADygU7DkJ7yB5SSQuq1tPynRFHNJ8lKo8uoEhT1IE1Ep4nFADMyMpKKtnRjxNlOnResdd1OfE9OU5ZRyZvwvbHz6v5HS548Pflmzwmzlp5qM+ZzM4svQtHmd5U5P4yf7USj1nUQ4hUV8v5GOWuSHdTzViP1pIr/DvTlwsf5v9yX/mda3e/wDJFWvUe999iRzJN+vC8s/8djxP/TS4+n6Ef85kyL32/vf6itn7aYEoAEN87AAkzzOqThkcTb09SgmbVK7EXJPWckMcsktsFbZfKcYq5OkLesT0nqen9DjD38/L8ei+fn9DD1fUnL3cXC8+v9CKdPja09Ako8JGPKbb72Qr7p3hkw4yvNhjlg4y9S3HOUJKSZ3Ox8dvqrX1F54fLj2ya8HpoSTimdBRN85RJ0NRLKUxykGyyglEiN9gzASRAAgDEkgk+EZGmQGvw6QssUeAHFmBOfPwH0juySXBZTFL+gZGmRcGPtbO0VkUMDRMDBUzgKhoqSI6M34AyGeACXaAxVRoDEh4gMZ47EEHgB5U1S8+iRieKlOwCZaVinW/j1kk0TTEvhgeY6GMsWVorDZa728SzcgbWHsGsolgjKVydrx6F/8Am5KNJJfEu0xbhLmcrdhu8EhFWrGy2JRrvOXJOjphEXs/CKahqscsgBzI1nnc+jnq9S/Zrji36I1sOpWDF7xt3qb2RAAGijQfXrPRaTRYtNGoLn1fkyNTqcmZ2+3gELOuzmsxqlsoAo2VySTYanIDmeEry5Y44uUuyL4QcmkjuNg4QoiqeAAnic090nLyekwqopHVYXSckmXUWAZACSIiQQsIhFXEqLE5k8rmTRNN9gaCBeGfHLKDdlUrb7llRcZiRGpU+CVtwi5G5NlY0gDe9uXhGNTb4LtOoCAbyIqa7kVKhDeFo/QaSoINnEKht4gI3somAJMQAs0B0JqtlENFQ1IrGLNeFkWhnfx2FHmrCfSkeFAMYA3jGZGMyAAsYDQl2i3E0itXq2ENxdCNs19Ki1VsskHHn0+s4njlml4ivXz8v5OuU44o89zdUMKFFgMp2RUYLbHhGfPI5O2TVTLe/Qk0/QUW+wl6gz5g5c4yxRfAqpU4yrJljjTlJ0kWQg29qOl7K7HLEVXGf8IPAc+pnltdr3nfHEf75NfTaZY+/c7VMNaxmU5Hf2LCD3SDJRY9DIskHeIdgGoDAKZLIIrEmLqPw4xoGioodjmSB4ZZSdpDdJcD0QefwkHIaQ6w5aaSNjRIFgPfALFioTUtyEfoSr3SysjZWg1aRJEXgIWXiskC7QEJquLRAUK1WJhZr3xBvFYB/bIrA5Oqk+lxZ4VoQyyaYhZEkNEGMZBaDHQl3kSxRKeJxAUXJlcpqKtl+PG5OkKw1A1fSIO7y59fpCC3q328FmSaxe6u5t6NMLYAZHTwlr7cHFKTly+4wuBcGRohRSrVtZZ2L4w7FIsOIseB+koy54Y47pujqjCTdR5NjsPAGq+833AdOZnkdZ1CWql4gvz+Zs4NKsMf/b9D0HZ1gfCcTkdCibYPlK7JKPISmKwcaDVoCsIGILJUWyiZPuT8IhintGhMzduDCwXBFrARD5DVrxDRjP6PugmS7MlUAibsjbYYaIZIMVgQTEMBoCsVVqZQFYjWICvWSRZNIp16PG0ixlY0TyiGc9vXn02qPAp2AUjse0XVS2skpWDjRWqPJoaQh2j7FqRTrOeGsUvgdEIr1CwWAJO+5ueA5fnKoY2nuk7f6CzahJbYF+hTspAyN7jxlr7nNOVyTZPeXFuIjrkVclfEYjjDsiyGP0NfUqk5CZ2u18MEeXy/uaGDTym6RZw2GNrnSZ+LQZta1k1Nxh6R9fr4/X5F2TV49MtmHmXqzYISBYEgdSJt49JggtsYKvkZc9Tlm7cnZuOzu0m7zu2JYEG18yCM7X5azE6zoMcMftsarnmuxq9O1U5S9nN34OupVp5o2y1TeQExgaFkWiFaOyLXgZvRDTJvIkiAojsRKrE2SIeKwMpwbEzGIhYGb0TGmZeIZm9ExowVIrBimeAgLiMECsiSBqZxDEqOEQAQsDg1efTzwDRcoHmbSmTouhJepWxhzlkOxFu2USZaiZl4x0YtuUYnYwvEyNAb1jkbQJVxyIxFTUA8I74LccbqzXJdju304+Exdf1H2VY4LdN9kjUwadTuT4XqbHC4UDrJaHpmyXt9R72T8o/L4/H7HPqtba9ni4j+pbM1zMQmrUyjJxiWdhN++DcgfeLTz/XdSo41i9ZO/ov6mt03C3Jz9EdnQq6Ty1m3Zfp1ZEdj1aFgGrWiuhdxgMLHQYaKwokNFY6MvFYUQWhYURvRWOhd84WKjDUtFZLaAX8oWOiTVhYqFVKkQci+9hYUR3sVhTBFQwTB2Q1cRi3AHEC8VBuRhqCRJWefh7GfTdx4bbYwVYWR2A1q144jjCivLS0EtzgOvAUBEEyLkNIq4rEAAkyEppK2XY8bb4DobGZl7ysWRDomjNyvxHTXpPPZ9bl1GT2Ol5fn0RrwwwxR35aQeGwCqSQMz7TblNjRaCGmW5+9N95P9vCMrVax5eFxH0RabK2vsmgca5sSziFk0mgLXM4tZq4afG5y/wCzowYZZZ7Im02TSs3SeEzZ558ryT7v+6PS48cccFCPodHh2lVllF6k+cTY9paDRWOhqP4wsdDQ0jY6CDwCiS0LEFvxWAHeQbHQLNnI2SoFnhYqFl4WAs1Y7AU1aAyO8kWCBNSKyVEF4rCiDUisKEvVF47I7RNSqItwbUK78Q3i2HKET6aeGsG0Y7MtLUFgmSGgTGNAXtDuS7lTF4oKP1n0lGSSxxuR0YsLk+C5syktMd9UG/W1Smfu0/8AM/NvDhMnJp9Rrp7eYY/Pn5HesuLAuOZF2rVZmLubn3DwA4Ca+n02LTw2YlS/N/MyM+onmdyYFSppaXJFMV5K9WoTG+CyMUhI5zk1Ophhg5zdI6MeOWSW2Jrq9WsH3lyHBdR7fGeJ1usnqZ7pcJdl/fqeg02njhjS7vuzbbL2y4zeixHFkF/MTjo6HI6DBbXovo4B5H0T5GIakbijVB4xE0y1SqxEiyr3isdDFeIZIaFioIPEFEGpEAJqwsAe8isYHeQGLapEAs1IyNAmpALB3ohpkM8VErQlsUo1dR1IhTC0V6m0Kf8AMT8a/WFMVoqYjbFEa1Aelz8IbWFo1tftFSGgdvZb4mFC3Fb+8X/b/wB35R0g3MGfS7PBkXjTHRl5amBDR7hoXeNMlRORk0HKFHCKSDnkbjrFOEZqpKycc0o9h6JlnxHwk9xW5cmPW8JEFCxLNBsmkMw9Bnaw8+AnBrNXDBDdJ/L4l+HDLJLbE3S7LAFhn4854/U6rJnnum/kvBuYcMcUaQzA7CNVrAZcTylEVZZKdHY4TYqU1CqAOfjLUkihybKuO7NUKn36Sk8wLHzEjKKZKM2jWN2M3c6NV08L7wkHiRYsrJXZOLT+NX6j9fGQeIms7RO/iF+9SF/AkfGReFli1CMqY+sv/Tu39LJfyYiQeKXgmsyZVqdpQuT0K6dUHxvINV3Jqdiz2tpcEq/hH1i4JWKbtin8qr5KPnFwKxD9seWHb2sB8IcCtiG7W1TpQHtc/SHAciX7R4g6JTX8R+cLDkr1NrYxv8QL/Si/O8VsZXbF4s616nuHwEVsKEPUrnWtV/Gw+cXICXpudXc9XY/OHIUL7gxWOghSHECNSCg1wQ/hyj4EH3DjhvDw+kfIuBRUHhYxDBNKAGyLz6OeJoAvHZKge8huZLaSpk0xNEyxCJliAlWkrE0PX7p8LxMrf4iqWicmuxdQ3B4U1GsMranwmfrdYtPDdLu+yOjBheWVLsdBhMMEFh/zPI58888983ybWPHHHHbE3my9lNVNybL7/ZKVAk5nUUMItNd1RYfHrLEqKm7CtGINKd85FskkNCCIlQYoA8IrCjDgx7IWFC2wC8rdI9wUKfZYPAGK7HyipU2UnFEPVRCl4DcwDsylxpJ+FY9sfAb5eTP7HoH/AAk/AsW2PgN8vJI2TR/lU/wCG2PgN0vIxdm0/wCWn4V+kKXgW5+TBgU9RfwiFIakwvsi+qtughSFbBbAp6q+QhSBNgPs5bfdT8IhSHbK74CloaSfhX6RbY+A3S8lepsfDkZ0aZHPcUfKReOPgkpy8iD2cwv8lR0LD4GL2UPA/az8hjs9QGiW9sahHwJ5JAYrs9SYWZAeWQB8xnBwi+6BTkvU157KUeTfiEj7GJL20j//2Q==",
    content: [
      {
        type: "heading",
        content: {
          uk: "Мікросклеротерапія: ювелірна робота з найдрібнішими судинами",
          ru: "Микросклеротерапия: ювелирная работа с мельчайшими сосудами",
          en: "Microsclerotherapy: Precision Work on the Tiniest Vessels",
          de: "Mikrosklerotherapie: Präzisionsarbeit an den kleinsten Gefäßen"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Мікросклеротерапія — це різновид склеротерапії, призначений для видалення найдрібніших внутрішньошкірних капілярів — телеангіектазій, або судинних «зірочок». Це найбільш естетично досконала методика, що дозволяє усунути навіть найтонші червоні та сині «павутинки», які неможливо видалити іншими способами. Процедура вимагає від лікаря-флеболога особливої точності та досвіду.",
          ru: "Микросклеротерапия — это разновидность склеротерапии, предназначенная для удаления самых мелких внутрикожных капилляров — телеангиэктазий, или сосудистых «звёздочек». Это наиболее эстетически совершенная методика, позволяющая устранить даже самые тонкие красные и синие «паутинки», которые невозможно удалить другими способами. Процедура требует от врача-флеболога особой точности и опыта.",
          en: "Microsclerotherapy is a type of sclerotherapy designed to remove the smallest intradermal capillaries - telangiectasias, or spider veins. It is the most aesthetically advanced technique, allowing for the elimination of even the finest red and blue \"webs\" that cannot be removed by other methods. The procedure requires special precision and experience from the phlebologist.",
          de: "Die Mikrosklerotherapie ist eine Art der Sklerotherapie, die zur Entfernung kleinster intradermaler Kapillaren - Teleangiektasien oder Besenreiser - entwickelt wurde. Es ist die ästhetisch fortschrittlichste Technik, die die Beseitigung selbst feinster roter und blauer „Spinnennetze“ ermöglicht, die mit anderen Methoden nicht entfernt werden können. Das Verfahren erfordert besondere Präzision und Erfahrung vom Phlebologen."
        }
      },
      {
        type: "heading",
        content: {
          uk: "У чому відмінність від звичайної склеротерапії?",
          ru: "В чем отличие от обычной склеротерапии?",
          en: "What is the difference from regular sclerotherapy?",
          de: "Was ist der Unterschied zur regulären Sklerotherapie?"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Основна відмінність полягає в техніці виконання. Під час мікросклеротерапії лікар використовує найтонші голки (діаметром 0.2-0.3 мм), спеціальну оптику (збільшувальні окуляри) та поляризоване світло. Це дозволяє точно візуалізувати та пунктувати капіляри діаметром менше 1 мм, вводячи мінімальну кількість склерозанту саме в цільову судину, не зачіпаючи навколишні тканини.",
          ru: "Основное отличие заключается в технике выполнения. Во время микросклеротерапии врач использует тончайшие иглы (диаметром 0.2-0.3 мм), специальную оптику (увеличительные очки) и поляризованный свет. Это позволяет точно визуализировать и пунктировать капилляры диаметром менее 1 мм, вводя минимальное количество склерозанта именно в целевой сосуд, не затрагивая окружающие ткани.",
          en: "The main difference lies in the technique. During microsclerotherapy, the doctor uses the finest needles (0.2-0.3 mm in diameter), special optics (magnifying glasses), and polarized light. This allows for precise visualization and puncture of capillaries less than 1 mm in diameter, injecting a minimal amount of sclerosant exactly into the target vessel without affecting the surrounding tissues.",
          de: "Der Hauptunterschied liegt in der Technik. Während der Mikrosklerotherapie verwendet der Arzt feinste Nadeln (0,2-0,3 mm Durchmesser), spezielle Optiken (Vergrößerungsgläser) und polarisiertes Licht. Dies ermöglicht die präzise Visualisierung und Punktion von Kapillaren mit einem Durchmesser von weniger als 1 mm, wobei eine minimale Menge Sklerosierungsmittel genau in das Zielgefäß injiziert wird, ohne das umliegende Gewebe zu beeinträchtigen."
        }
      },
      {
        type: "image",
        content: { image: "https://phlebo1.ru/upload/iblock/fac/wu8ei8yhuuxx8ugx1luua3fc35zpezqu.jpg" },
        sideText: {
          uk: "Точність та майстерність лікаря дозволяють досягти ідеального косметичного результату.",
          ru: "Точность и мастерство врача позволяют добиться идеального косметического результата.",
          en: "The precision and skill of the doctor allow for achieving a perfect cosmetic result.",
          de: "Die Präzision und das Können des Arztes ermöglichen ein perfektes kosmetisches Ergebnis."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Показання до мікросклеротерапії",
          ru: "Показания к микросклеротерапии",
          en: "Indications for Microsclerotherapy",
          de: "Indikationen für die Mikrosklerotherapie"
        }
      },
      {
        type: "list",
        content: {
          uk: "Дрібні поодинокі телеангіектазії.\nСудинні «сіточки» червоного та синього кольору.\nЗалишкові дрібні судини після основного курсу склеротерапії або видалення вен лазером.\nСудинні зірочки, які не піддаються лікуванню лазером (наприклад, через світлий тип шкіри або колір судин).",
          ru: "Мелкие единичные телеангиэктазии.\nСосудистые «сеточки» красного и синего цвета.\nОстаточные мелкие сосуды после основного курса склеротерапии или удаления вен лазером.\nСосудистые звёздочки, не поддающиеся лечению лазером (например, из-за светлого типа кожи или цвета сосудов).",
          en: "Small single telangiectasias.\nRed and blue vascular \"webs\".\nResidual small vessels after the main course of sclerotherapy or laser vein removal.\nSpider veins that are not amenable to laser treatment (e.g., due to fair skin type or vessel color).",
          de: "Kleine einzelne Teleangiektasien.\nRote und blaue Gefäßnetze.\nRestliche kleine Gefäße nach dem Hauptkurs der Sklerotherapie oder Laser-Venenentfernung.\nBesenreiser, die nicht auf eine Laserbehandlung ansprechen (z. B. aufgrund heller Hauttypen oder der Gefäßfarbe)."
        }
      },
      {
        type: "heading",
        content: {
          uk: "Процедура та догляд",
          ru: "Процедура и уход",
          en: "Procedure and Aftercare",
          de: "Verfahren und Nachsorge"
        }
      },
      {
        type: "paragraph",
        content: {
          uk: "Процедура триває 30-45 хвилин. Після сеансу обов'язковою є компресія (еластичний бинт або панчоха) на короткий період, визначений лікарем. Це забезпечує надійне «склеювання» капілярів. Повноцінний ефект оцінюється через 3-4 тижні. Для повного усунення всіх небажаних судин може знадобитися кілька сеансів.",
          ru: "Процедура длится 30-45 минут. После сеанса обязательна компрессия (эластичный бинт или чулок) на короткий период, определенный врачом. Это обеспечивает надежное «склеивание» капилляров. Полноценный эффект оценивается через 3-4 недели. Для полного устранения всех нежелательных сосудов может потребоваться несколько сеансов.",
          en: "The procedure lasts 30-45 minutes. After the session, compression (elastic bandage or stocking) is mandatory for a short period determined by the doctor. This ensures reliable \"gluing\" of the capillaries. The full effect is assessed after 3-4 weeks. Several sessions may be required to completely eliminate all unwanted vessels.",
          de: "Das Verfahren dauert 30-45 Minuten. Nach der Sitzung ist eine Kompression (elastische Binde oder Strumpf) für einen kurzen, vom Arzt festgelegten Zeitraum zwingend erforderlich. Dies gewährleistet ein zuverlässiges „Verkleben“ der Kapillaren. Die volle Wirkung wird nach 3-4 Wochen beurteilt. Um alle unerwünschten Gefäße vollständig zu beseitigen, können mehrere Sitzungen erforderlich sein."
        }
      },
      {
        type: "image",
        content: { image: "https://medeast23.ru/upload/resize_cache/webp/resize_cache/iblock/47c/700_700_1/2jcfn6pcsy7oyy494eqdo66udfd3qp9c.webp" },
      },

    ],
    faqs: ["faq_microsclero_1"],
    doctors: ["doctor_phlebologist_1"]
  },
]

export const doctors: Doctor[] = [
  {
    id: "doctor1",
    slug: "semenov-andrii",
    fullName: {
      uk: "Семенов Андрій Петрович",
      ru: "Семенов Андрей Петрович",
      en: "Semenov Andrii Petrovych",
      de: "Semenow Andrij Petrowytsch"
    },
    position: {
      uk: "Головний лікар, Хірург, Гастроентеролог",
      ru: "Главный врач, Хирург, Гастроэнтеролог",
      en: "Chief Physician, Surgeon, Gastroenterologist",
      de: "Chefarzt, Chirurg, Gastroenterologe"
    },
    specializations: [
      { uk: "Гастрохірургія", ru: "Гастрохирургия", en: "Gastro-surgery", de: "Gastrochirurgie" },
      { uk: "Онкохірургія", ru: "Онкохирургия", en: "Oncosurgery", de: "Onkochirurgie" },
      { uk: "Ендоскопічна хірургія", ru: "Эндоскопическая хирургия", en: "Endoscopic Surgery", de: "Endoskopische Chirurgie" },
      { uk: "Лікування гастриту", ru: "Лечение гастрита", en: "Gastritis Treatment", de: "Behandlung von Gastritis" },
      { uk: "Лікування виразки шлунка", ru: "Лечение язвы желудка", en: "Stomach Ulcer Treatment", de: "Behandlung von Magengeschwüren" },
      { uk: "Діагностика захворювань ШКТ", ru: "Диагностика заболеваний ЖКТ", en: "Gastrointestinal Disease Diagnostics", de: "Diagnostik von Magen-Darm-Erkrankungen" },
      { uk: "Колоноскопія", ru: "Колоноскопия", en: "Colonoscopy", de: "Koloskopie" },
      { uk: "Лапароскопія", ru: "Лапароскопия", en: "Laparoscopy", de: "Laparoskopie" },
      { uk: "Ендоскопія", ru: "Эндоскопия", en: "Endoscopy", de: "Endoskopie" },
      { uk: "Реконструктивна хірургія", ru: "Реконструктивная хирургия", en: "Reconstructive Surgery", de: "Rekonstruktive Chirurgie" },
      { uk: "Екстрена хірургія", ru: "Экстренная хирургия", en: "Emergency Surgery", de: "Notfallchirurgie" },
      { uk: "Хірургія грижі", ru: "Хирургия грыжи", en: "Hernia Surgery", de: "Hernienchirurgie" },
      { uk: "Судинна хірургія", ru: "Сосудистая хирургия", en: "Vascular Surgery", de: "Gefäßchirurgie" },
      { uk: "Торакальна хірургія", ru: "Торакальная хирургия", en: "Thoracic Surgery", de: "Thoraxchirurgie" }
    ],
    education: [
      { uk: "Київський національний медичний університет ім. О.О. Богомольця", ru: "Киевский национальный медицинский университет им. А.А. Богомольца", en: "Kyiv National Medical University named after O.O. Bogomolets", de: "Nationale Medizinische Universität Kyjiw, benannt nach O.O. Bohomolez" },
      { uk: "Харківський національний медичний університет", ru: "Харьковский национальный медицинский университет", en: "Kharkiv National Medical University", de: "Nationale Medizinische Universität Charkiw" },
      { uk: "Львівський національний медичний університет ім. Данила Галицького", ru: "Львовский национальный медицинский университет им. Данила Галицкого", en: "Danylo Halytsky Lviv National Medical University", de: "Nationale Medizinische Universität Lwiw, benannt nach Danylo Halyzkyj" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "Nationale Medizinische Akademie für postgraduale Ausbildung P.L. Shupyk" },
      { uk: "Вінницький національний медичний університет ім. М.І. Пирогова", ru: "Винницкий национальный медицинский университет им. Н.И. Пирогова", en: "Pirogov Vinnytsia National Medical University", de: "Nationale Medizinische Universität Winnyzja, benannt nach M.I. Pirogow" },
      { uk: "Дніпропетровська державна медична академія", ru: "Днепропетровская государственная медицинская академия", en: "Dnipropetrovsk State Medical Academy", de: "Staatliche Medizinische Akademie Dnipropetrowsk" }
    ],
    certificates: [],
    photo: "https://plus.unsplash.com/premium_photo-1661745702156-cd4b0382455f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["service1", "service2"],
    subservices: ["subservise1", "subservice2"],
    shortName: { uk: "Андрію", ru: "Андрею", en: "Andrii", de: "Andrij" }
  },
  {
    id: "doctor2",
    slug: "lysenko-olha",
    fullName: {
      uk: "Лисенко Ольга Ігорівна",
      ru: "Лысенко Ольга Игоревна",
      en: "Lysenko Olha Ihorivna",
      de: "Lysenko Olha Ihoriwna"
    },
    position: {
      uk: "Лікар-терапевт, Кардіолог, Пульмонолог",
      ru: "Врач-терапевт, Кардиолог, Пульмонолог",
      en: "Physician, Cardiologist, Pulmonologist",
      de: "Ärztin, Kardiologin, Pulmonologin"
    },
    specializations: [
      { uk: "Кардіологія", ru: "Кардиология", en: "Cardiology", de: "Kardiologie" },
      { uk: "Пульмонологія", ru: "Пульмонология", en: "Pulmonology", de: "Pulmonologie" },
      { uk: "Терапія", ru: "Терапия", en: "Therapy", de: "Therapie" },
      { uk: "Діагностика та лікування серцево-судинних захворювань", ru: "Диагностика и лечение сердечно-сосудистых заболеваний", en: "Diagnosis and Treatment of Cardiovascular Diseases", de: "Diagnose und Behandlung von Herz-Kreislauf-Erkrankungen" },
      { uk: "Діагностика та лікування захворювань дихальної системи", ru: "Диагностика и лечение заболеваний дыхательной системы", en: "Diagnosis and Treatment of Respiratory System Diseases", de: "Diagnose und Behandlung von Erkrankungen der Atemwege" },
      { uk: "ЕКГ (Електрокардіографія)", ru: "ЭКГ (Электрокардиография)", en: "ECG (Electrocardiography)", de: "EKG (Elektrokardiographie)" },
      { uk: "Спірографія", ru: "Спирография", en: "Spirometry", de: "Spirometrie" },
      { uk: "Ультразвукова діагностика серця (ЕхоКГ)", ru: "Ультразвуковая диагностика сердца (ЭхоКГ)", en: "Cardiac Ultrasound (Echocardiography)", de: "Herzultraschall (Echokardiographie)" },
      { uk: "Лікування гіпертонії", ru: "Лечение гипертонии", en: "Hypertension Treatment", de: "Behandlung von Bluthochdruck" },
      { uk: "Лікування бронхіальної астми", ru: "Лечение бронхиальной астмы", en: "Bronchial Asthma Treatment", de: "Behandlung von Asthma bronchiale" },
      { uk: "Лікування пневмонії", ru: "Лечение пневмонии", en: "Pneumonia Treatment", de: "Behandlung von Lungenentzündung" },
      { uk: "Профілактичні огляди", ru: "Профилактические осмотры", en: "Preventive Check-ups", de: "Vorsorgeuntersuchungen" },
      { uk: "Діагностика та лікування ХОЗЛ", ru: "Диагностика и лечение ХОЗЛ", en: "Diagnosis and Treatment of COPD", de: "Diagnose und Behandlung von COPD" },
      { uk: "ЕхоКГ", ru: "ЭхоКГ", en: "Echocardiogram", de: "Echokardiogramm" },
      { uk: "Ендокардит", ru: "Эндокардит", en: "Endocarditis", de: "Endokarditis" },
      { uk: "Аритмія", ru: "Аритмия", en: "Arrhythmia", de: "Arrhythmie" }
    ],
    education: [
      { uk: "Національний медичний університет ім. О.О. Богомольця", ru: "Национальный медицинский университет им. А.А. Богомольца", en: "O.O. Bogomolets National Medical University", de: "Nationale Medizinische Universität O.O. Bohomolez" },
      { uk: "Одеський національний медичний університет", ru: "Одесский национальный медицинский университет", en: "Odesa National Medical University", de: "Nationale Medizinische Universität Odessa" },
      { uk: "Київська медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Киевская медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" },
      { uk: "Українська військово-медична академія", ru: "Украинская военно-медицинская академия", en: "Ukrainian Military Medical Academy", de: "Ukrainische Militärmedizinische Akademie" }
    ],
    certificates: [],
    photo: "https://images.unsplash.com/photo-1688588162416-f7a7e726e0bf?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: ["service3", "service4"],
    subservices: ["subservise3", "subservice4"],
    shortName: { uk: "Ользі", ru: "Ольге", en: "Olha", de: "Olha" }
  },
  {
    id: "doctor3",
    slug: "kostenko-oleksandr",
    fullName: {
      uk: "Костенко Олександр Вікторович",
      ru: "Костенко Александр Викторович",
      en: "Kostenko Oleksandr Viktorovych",
      de: "Kostenko Oleksandr Wiktorowytsch"
    },
    position: {
      uk: "Ортопед-травматолог, Хірург",
      ru: "Ортопед-травматолог, Хирург",
      en: "Orthopedist-Traumatologist, Surgeon",
      de: "Orthopäde-Traumatologe, Chirurg"
    },
    specializations: [
      { uk: "Ортопедія", ru: "Ортопедия", en: "Orthopedics", de: "Orthopädie" },
      { uk: "Травматологія", ru: "Травматология", en: "Traumatology", de: "Traumatologie" },
      { uk: "Артроскопічна хірургія", ru: "Артроскопическая хирургия", en: "Arthroscopic Surgery", de: "Arthroskopische Chirurgie" },
      { uk: "Ендопротезування суглобів", ru: "Эндопротезирование суставов", en: "Joint Arthroplasty", de: "Gelenkersatz" },
      { uk: "Лікування переломів", ru: "Лечение переломов", en: "Fracture Treatment", de: "Behandlung von Knochenbrüchen" },
      { uk: "Лікування остеоартрозу", ru: "Лечение остеоартроза", en: "Osteoarthritis Treatment", de: "Behandlung von Osteoarthritis" },
      { uk: "Спортивна медицина", ru: "Спортивная медицина", en: "Sports Medicine", de: "Sportmedizin" },
      { uk: "Лікування захворювань хребта", ru: "Лечение заболеваний позвоночника", en: "Spinal Disease Treatment", de: "Behandlung von Wirbelsäulenerkrankungen" },
      { uk: "Хірургія кисті", ru: "Хирургия кисти", en: "Hand Surgery", de: "Handchirurgie" },
      { uk: "Хірургія стопи", ru: "Хирургия стопы", en: "Foot Surgery", de: "Fußchirurgie" },
      { uk: "Реконструктивна ортопедія", ru: "Реконструктивная ортопедия", en: "Reconstructive Orthopedics", de: "Rekonstruktive Orthopädie" },
      { uk: "Терапія болю", ru: "Терапия боли", en: "Pain Therapy", de: "Schmerztherapie" }
    ],
    education: [
      { uk: "Тернопільський державний медичний університет ім. І.Я. Горбачевського", ru: "Тернопольский государственный медицинский университет им. И.Я. Горбачевского", en: "I. Horbachevsky Ternopil State Medical University", de: "Staatliche Medizinische Universität Ternopil, benannt nach I.Ja. Horbatschowskyj" },
      { uk: "Івано-Франківський національний медичний університет", ru: "Ивано-Франковский национальный медицинский университет", en: "Ivano-Frankivsk National Medical University", de: "Nationale Medizinische Universität Iwano-Frankiwsk" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" }
    ],
    certificates: [],
    photo: "https://img.freepik.com/free-photo/african-american-black-doctor-man-with-stethoscope-isolated-white-background_231208-2222.jpg",
    services: ["service5"],
    subservices: ["subservise5"],
    shortName: { uk: "Олександру", ru: "Александру", en: "Oleksandr", de: "Oleksandr" }
  },
  {
    id: "doctor4",
    slug: "melnyk-anna",
    fullName: {
      uk: "Мельник Анна Василівна",
      ru: "Мельник Анна Васильевна",
      en: "Melnyk Anna Vasylivna",
      de: "Melnyk Hanna Wassyliwna"
    },
    position: {
      uk: "Офтальмолог, Хірург-офтальмолог",
      ru: "Офтальмолог, Хирург-офтальмолог",
      en: "Ophthalmologist, Ophthalmic Surgeon",
      de: "Augenärztin, Augenchirurgin"
    },
    specializations: [
      { uk: "Лазерна корекція зору", ru: "Лазерная коррекция зрения", en: "Laser Vision Correction", de: "Laser-Sehkorrektur" },
      { uk: "Катаракта", ru: "Катаракта", en: "Cataracts", de: "Katarakt" },
      { uk: "Глаукома", ru: "Глаукома", en: "Glaucoma", de: "Glaukom" },
      { uk: "Хірургічне лікування сітківки", ru: "Хирургическое лечение сетчатки", en: "Surgical Retinal Treatment", de: "Chirurgische Behandlung der Netzhaut" },
      { uk: "Лікування захворювань рогівки", ru: "Лечение заболеваний роговицы", en: "Corneal Disease Treatment", de: "Behandlung von Hornhauterkrankungen" },
      { uk: "Діагностика зору у дітей", ru: "Диагностика зрения у детей", en: "Pediatric Vision Diagnostics", de: "Diagnostik des Sehvermögens bei Kindern" },
      { uk: "Ортокератологія", ru: "Ортокератология", en: "Orthokeratology", de: "Orthokeratologie" },
      { uk: "Лікування синдрому сухого ока", ru: "Лечение синдрома сухого глаза", en: "Dry Eye Syndrome Treatment", de: "Behandlung des Trockene-Augen-Syndroms" },
      { uk: "Вимірювання очного тиску", ru: "Измерение глазного давления", en: "Intraocular Pressure Measurement", de: "Messung des Augeninnendrucks" },
      { uk: "Оптична когерентна томографія", ru: "Оптическая когерентная томография", en: "Optical Coherence Tomography", de: "Optische Kohärenztomographie" },
      { uk: "Фемтолазерна хірургія", ru: "Фемтолазерная хирургия", en: "Femtosecond Laser Surgery", de: "Femtosekunden-Laserchirurgie" }
    ],
    education: [
      { uk: "Державний медичний університет ім. І.І. Мечникова, м. Одеса", ru: "Государственный медицинский университет им. И.И. Мечникова, г. Одесса", en: "Mechnikov State Medical University, Odesa", de: "Staatliche Medizinische Universität I.I. Metschnikow, Odessa" },
      { uk: "Запорізький державний медичний університет", ru: "Запорожский государственный медицинский университет", en: "Zaporizhzhia State Medical University", de: "Staatliche Medizinische Universität Saporischschja" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "Nationale Medizinische Akademie für postgraduale Ausbildung P.L. Shupyk" },
      { uk: "Львівський національний медичний університет ім. Данила Галицького", ru: "Львовский национальный медицинский университет им. Данила Галицкого", en: "Danylo Halytsky Lviv National Medical University", de: "Nationale Medizinische Universität Lwiw, benannt nach Danylo Halyzkyj" }
    ],
    certificates: [],
    photo: "https://i.pinimg.com/736x/1b/52/fd/1b52fd81c2282b432b85dc6a8a01f13d.jpg",
    services: ["service6"],
    subservices: ["subservise6"],
    shortName: { uk: "Анні", ru: "Анне", en: "Anna", de: "Anna" }
  },
  {
    id: "doctor5",
    slug: "kovalenko-dmytro",
    fullName: {
      uk: "Коваленко Дмитро Сергійович",
      ru: "Коваленко Дмитрий Сергеевич",
      en: "Kovalenko Dmytro Serhiiovych",
      de: "Kowalenko Dmytro Serhijowytsch"
    },
    position: {
      uk: "Невролог, Епілептолог",
      ru: "Невролог, Эпилептолог",
      en: "Neurologist, Epileptologist",
      de: "Neurologe, Epileptologe"
    },
    specializations: [
      { uk: "Епілепсія", ru: "Эпилепсия", en: "Epilepsy", de: "Epilepsie" },
      { uk: "Головний біль", ru: "Головная боль", en: "Headaches", de: "Kopfschmerzen" },
      { uk: "Інсульт", ru: "Инсульт", en: "Stroke", de: "Schlaganfall" },
      { uk: "Хвороба Паркінсона", ru: "Болезнь Паркинсона", en: "Parkinson's Disease", de: "Parkinson-Krankheit" },
      { uk: "Розсіяний склероз", ru: "Рассеянный склероз", en: "Multiple Sclerosis", de: "Multiple Sklerose" },
      { uk: "Нейропатія", ru: "Нейропатия", en: "Neuropathy", de: "Neuropathie" },
      { uk: "Діагностика ЕЕГ", ru: "Диагностика ЭЭГ", en: "EEG Diagnostics", de: "EEG-Diagnostik" },
      { uk: "Лікування мігрені", ru: "Лечение мигрени", en: "Migraine Treatment", de: "Behandlung von Migräne" },
      { uk: "Порушення сну", ru: "Нарушения сна", en: "Sleep Disorders", de: "Schlafstörungen" },
      { uk: "Когнітивні розлади", ru: "Когнитивные расстройства", en: "Cognitive Disorders", de: "Kognitive Störungen" },
      { uk: "Нейрореабілітація", ru: "Нейрореабилитация", en: "Neurorehabilitation", de: "Neurorehabilitation" }
    ],
    education: [
      { uk: "Одеський національний медичний університет", ru: "Одесский национальный медицинский университет", en: "Odesa National Medical University", de: "Nationale Medizinische Universität Odessa" },
      { uk: "Львівський національний медичний університет ім. Данила Галицького", ru: "Львовский национальный медицинский университет им. Данила Галицкого", en: "Danylo Halytsky Lviv National Medical University", de: "Nationale Medizinische Universität Lwiw, benannt nach Danylo Halyzkyj" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" }
    ],
    certificates: [],
    photo: "https://i.pinimg.com/564x/65/00/ed/6500edde63ff653629baf862eff5013d.jpg",
    services: ["service7"],
    subservices: ["subservise7"],
    shortName: { uk: "Дмитру", ru: "Дмитрию", en: "Dmytro", de: "Dmytro" }
  },
  {
    id: "doctor6",
    slug: "semenchuk-ihor",
    fullName: {
      uk: "Семенчук Ігор Володимирович",
      ru: "Семенчук Игорь Владимирович",
      en: "Semenchuk Ihor Volodymyrovych",
      de: "Semenchuk Ihor Wolodymyrowytsch"
    },
    position: {
      uk: "Уролог, Андролог, Хірург",
      ru: "Уролог, Андролог, Хирург",
      en: "Urologist, Andrologist, Surgeon",
      de: "Urologe, Androloge, Chirurg"
    },
    specializations: [
      { uk: "Урологія", ru: "Урология", en: "Urology", de: "Urologie" },
      { uk: "Андрологія", ru: "Андрология", en: "Andrology", de: "Andrologie" },
      { uk: "Ендоурологія", ru: "Эндоурология", en: "Endourology", de: "Endourologie" },
      { uk: "Лікування простатиту", ru: "Лечение простатита", en: "Prostatitis Treatment", de: "Behandlung von Prostatitis" },
      { uk: "Лікування сечокам'яної хвороби", ru: "Лечение мочекаменной болезни", en: "Urolithiasis Treatment", de: "Behandlung von Harnsteinleiden" },
      { uk: "Хірургія нирок", ru: "Хирургия почек", en: "Kidney Surgery", de: "Nierenchirurgie" },
      { uk: "Еректильна дисфункція", ru: "Эректильная дисфункция", en: "Erectile Dysfunction", de: "Erektile Dysfunktion" },
      { uk: "Чоловіче безпліддя", ru: "Мужское бесплодие", en: "Male Infertility", de: "Männliche Unfruchtbarkeit" },
      { uk: "Вазектомія", ru: "Вазэктомия", en: "Vasectomy", de: "Vasektomie" },
      { uk: "Цистоскопія", ru: "Цистоскопия", en: "Cystoscopy", de: "Zystoskopie" },
      { uk: "УЗД сечостатевої системи", ru: "УЗИ мочеполовой системы", en: "Ultrasound of the Genitourinary System", de: "Ultraschall des Urogenitalsystems" }
    ],
    education: [
      { uk: "Харківський національний медичний університет", ru: "Харьковский национальный медицинский университет", en: "Kharkiv National Medical University", de: "Nationale Medizinische Universität Charkiw" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" },
      { uk: "Буковинський державний медичний університет", ru: "Буковинский государственный медицинский университет", en: "Bukovinian State Medical University", de: "Staatliche Medizinische Universität der Bukowina" }
    ],
    certificates: [],
    photo: "https://i.pinimg.com/736x/f4/c9/ef/f4c9ef33d04a22050038e9e53eeb7d85.jpg",
    services: ["service8"],
    subservices: ["subservise8"],
    shortName: { uk: "Ігорю", ru: "Игорю", en: "Ihor", de: "Ihor" }
  },
  {
    id: "doctor7",
    slug: "kravchuk-yuliia",
    fullName: {
      uk: "Кравчук Юлія Олександрівна",
      ru: "Кравчук Юлия Александровна",
      en: "Kravchuk Yuliia Oleksandrivna",
      de: "Krawtschuk Julija Oleksandriwna"
    },
    position: {
      uk: "Гінеколог, Ендокринолог, Репродуктолог",
      ru: "Гинеколог, Эндокринолог, Репродуктолог",
      en: "Gynecologist, Endocrinologist, Reproductologist",
      de: "Gynäkologin, Endokrinologin, Reproduktionsmedizinerin"
    },
    specializations: [
      { uk: "Гінекологічна ендокринологія", ru: "Гинекологическая эндокринология", en: "Gynecological Endocrinology", de: "Gynäkologische Endokrinologie" },
      { uk: "Репродуктивна медицина", ru: "Репродуктивная медицина", en: "Reproductive Medicine", de: "Reproduktionsmedizin" },
      { uk: "Діагностика та лікування безпліддя", ru: "Диагностика и лечение бесплодия", en: "Diagnosis and Treatment of Infertility", de: "Diagnose und Behandlung von Unfruchtbarkeit" },
      { uk: "Планування вагітності", ru: "Планирование беременности", en: "Pregnancy Planning", de: "Schwangerschaftsplanung" },
      { uk: "Лікування клімактеричних розладів", ru: "Лечение климактерических расстройств", en: "Treatment of Climacteric Disorders", de: "Behandlung von Wechseljahrsbeschwerden" },
      { uk: "Лікування захворювань шийки матки", ru: "Лечение заболеваний шейки матки", en: "Treatment of Cervical Diseases", de: "Behandlung von Gebärmutterhalserkrankungen" },
      { uk: "УЗД органів малого тазу", ru: "УЗИ органов малого таза", en: "Pelvic Ultrasound", de: "Ultraschall der Beckenorgane" },
      { uk: "Кольпоскопія", ru: "Кольпоскопия", en: "Colposcopy", de: "Kolposkopie" },
      { uk: "Ендометріоз", ru: "Эндометриоз", en: "Endometriosis", de: "Endometriose" },
      { uk: "Синдром полікістозних яєчників", ru: "Синдром поликистозных яичников", en: "Polycystic Ovary Syndrome", de: "Polyzystisches Ovarialsyndrom" }
    ],
    education: [
      { uk: "Буковинський державний медичний університет", ru: "Буковинский государственный медицинский университет", en: "Bukovinian State Medical University", de: "Staatliche Medizinische Universität der Bukowina" },
      { uk: "Одеський національний медичний університет", ru: "Одесский национальный медицинский университет", en: "Odesa National Medical University", de: "Nationale Medizinische Universität Odessa" },
      { uk: "Львівський національний медичний університет ім. Данила Галицького", ru: "Львовский национальный медицинский университет им. Данила Галицкого", en: "Danylo Halytsky Lviv National Medical University", de: "Nationale Medizinische Universität Lwiw, benannt nach Danylo Halyzkyj" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" }
    ],
    certificates: [],
    photo: "https://i.pinimg.com/474x/2a/12/5c/2a125c7aa0d47538b857291fa0901286.jpg",
    services: ["service9"],
    subservices: ["subservise9"],
    shortName: { uk: "Юлії", ru: "Юлии", en: "Yuliia", de: "Julija" }
  },
  {
    id: "doctor8",
    slug: "oliinyk-serhii",
    fullName: {
      uk: "Олійник Сергій Іванович",
      ru: "Олейник Сергей Иванович",
      en: "Oliinyk Serhii Ivanovych",
      de: "Olijnyk Serhij Iwanowytsch"
    },
    position: {
      uk: "Отоларинголог, Хірург",
      ru: "Отоларинголог, Хирург",
      en: "Otolaryngologist, Surgeon",
      de: "Otolaryngologe, Chirurg"
    },
    specializations: [
      { uk: "Ендоскопічна хірургія ЛОР-органів", ru: "Эндоскопическая хирургия ЛОР-органов", en: "Endoscopic ENT Surgery", de: "Endoskopische HNO-Chirurgie" },
      { uk: "Лікування синуситу", ru: "Лечение синусита", en: "Sinusitis Treatment", de: "Behandlung von Sinusitis" },
      { uk: "Лікування тонзиліту", ru: "Лечение тонзиллита", en: "Tonsillitis Treatment", de: "Behandlung von Mandelentzündung" },
      { uk: "Тимпанопластика", ru: "Тимпанопластика", en: "Tympanoplasty", de: "Tympanoplastik" },
      { uk: "Аденотомія", ru: "Аденотомия", en: "Adenoidectomy", de: "Adenotomie" },
      { uk: "Септопластика", ru: "Септопластика", en: "Septoplasty", de: "Septoplastik" },
      { uk: "Діагностика слуху", ru: "Диагностика слуха", en: "Hearing Diagnostics", de: "Hördiagnostik" },
      { uk: "Лікування отиту", ru: "Лечение отита", en: "Otitis Treatment", de: "Behandlung von Ohrenentzündungen" },
      { uk: "Ринопластика", ru: "Ринопластика", en: "Rhinoplasty", de: "Rhinoplastik" },
      { uk: "Медикаментозне лікування ЛОР-захворювань", ru: "Медикаментозное лечение ЛОР-заболеваний", en: "Medical Treatment of ENT Diseases", de: "Medikamentöse Behandlung von HNO-Erkrankungen" }
    ],
    education: [
      { uk: "Харківський національний медичний університет", ru: "Харьковский национальный медицинский университет", en: "Kharkiv National Medical University", de: "Nationale Medizinische Universität Charkiw" },
      { uk: "Дніпропетровська державна медична академія", ru: "Днепропетровская государственная медицинская академия", en: "Dnipropetrovsk State Medical Academy", de: "Staatliche Medizinische Akademie Dnipropetrowsk" },
      { uk: "Київський національний медичний університет ім. О.О. Богомольця", ru: "Киевский национальный медицинский университет им. А.А. Богомольца", en: "Kyiv National Medical University named after O.O. Bogomolets", de: "Nationale Medizinische Universität Kyjiw, benannt nach O.O. Bohomolez" }
    ],
    certificates: [],
    photo: "https://previews.123rf.com/images/edhar/edhar1112/edhar111200367/11480871-senior-handsome-man-doctor.jpg",
    services: ["service10"],
    subservices: ["subservise10"],
    shortName: { uk: "Сергію", ru: "Сергею", en: "Serhii", de: "Serhij" }
  },
  {
    id: "doctor9",
    slug: "antonov-mykhailo",
    fullName: {
      uk: "Антонов Михайло Петрович",
      ru: "Антонов Михаил Петрович",
      en: "Antonov Mykhailo Petrovych",
      de: "Antonow Mychajlo Petrowytsch"
    },
    position: {
      uk: "Анестезіолог, Реаніматолог",
      ru: "Анестезиолог, Реаниматолог",
      en: "Anesthesiologist, Resuscitator",
      de: "Anästhesiologe, Reanimatologe"
    },
    specializations: [
      { uk: "Загальна анестезія", ru: "Общая анестезия", en: "General Anesthesia", de: "Allgemeine Anästhesie" },
      { uk: "Регіонарна анестезія", ru: "Регионарная анестезия", en: "Regional Anesthesia", de: "Regionalanästhesie" },
      { uk: "Інтенсивна терапія", ru: "Интенсивная терапия", en: "Intensive Care", de: "Intensivtherapie" },
      { uk: "Кардіореанімація", ru: "Кардиореанимация", en: "Cardiopulmonary Resuscitation", de: "Kardiopulmonale Reanimation" },
      { uk: "Реанімація в екстремальних умовах", ru: "Реанимация в экстремальных условиях", en: "Resuscitation in Extreme Conditions", de: "Reanimation unter extremen Bedingungen" },
      { uk: "Анестезія в педіатрії", ru: "Анестезия в педиатрии", en: "Pediatric Anesthesia", de: "Pädiatrische Anästhesie" },
      { uk: "Лікування гострого болю", ru: "Лечение острой боли", en: "Acute Pain Management", de: "Behandlung von akuten Schmerzen" },
      { uk: "Медикаментозна седація", ru: "Медикаментозная седация", en: "Medical Sedation", de: "Medikamentöse Sedierung" }
    ],
    education: [
      { uk: "Дніпропетровська державна медична академія", ru: "Днепропетровская государственная медицинская академия", en: "Dnipropetrovsk State Medical Academy", de: "Staatliche Medizinische Akademie Dnipropetrowsk" },
      { uk: "Вінницький національний медичний університет ім. М.І. Пирогова", ru: "Винницкий национальный медицинский университет им. Н.И. Пирогова", en: "Pirogov Vinnytsia National Medical University", de: "Nationale Medizinische Universität Winnyzja, benannt nach M.I. Pirogow" },
      { uk: "Київський національний медичний університет ім. О.О. Богомольця", ru: "Киевский национальный медицинский университет им. А.А. Богомольца", en: "Kyiv National Medical University named after O.O. Bogomolets", de: "Nationale Medizinische Universität Kyjiw, benannt nach O.O. Bohomolez" }
    ],
    certificates: [],
    photo: "https://previews.123rf.com/images/karelnoppe/karelnoppe1408/karelnoppe140800011/30606941-close-up-portrait-of-young-male-doctor-isolated-on-white-background.jpg",
    services: ["service11"],
    subservices: ["subservise11"],
    shortName: { uk: "Михайлу", ru: "Михаилу", en: "Mykhailo", de: "Mychajlo" }
  },
  {
    id: "doctor10",
    slug: "hryhorieva-svitlana",
    fullName: {
      uk: "Григор’єва Світлана Іванівна",
      ru: "Григорьева Светлана Ивановна",
      en: "Hryhorieva Svitlana Ivanivna",
      de: "Hryhorjewa Switlana Iwaniwna"
    },
    position: {
      uk: "Дерматовенеролог, Косметолог, Трихолог",
      ru: "Дерматовенеролог, Косметолог, Трихолог",
      en: "Dermatovenereologist, Cosmetologist, Trichologist",
      de: "Dermatovenerologin, Kosmetologin, Trichologin"
    },
    specializations: [
      { uk: "Косметологія", ru: "Косметология", en: "Cosmetology", de: "Kosmetologie" },
      { uk: "Дерматологія", ru: "Дерматология", en: "Dermatology", de: "Dermatologie" },
      { uk: "Трихологія", ru: "Трихология", en: "Trichology", de: "Trichologie" },
      { uk: "Лазерна косметологія", ru: "Лазерная косметология", en: "Laser Cosmetology", de: "Laser-Kosmetologie" },
      { uk: "Ін'єкційна косметологія", ru: "Инъекционная косметология", en: "Injection Cosmetology", de: "Injektions-Kosmetologie" },
      { uk: "Лікування акне", ru: "Лечение акне", en: "Acne Treatment", de: "Akne-Behandlung" },
      { uk: "Діагностика та лікування захворювань шкіри голови", ru: "Диагностика и лечение заболеваний кожи головы", en: "Diagnosis and Treatment of Scalp Diseases", de: "Diagnose und Behandlung von Kopfhauterkrankungen" },
      { uk: "Дерматоскопія", ru: "Дерматоскопия", en: "Dermatoscopy", de: "Dermatoskopie" },
      { uk: "Процедури з омолодження шкіри", ru: "Процедуры по омоложению кожи", en: "Skin Rejuvenation Procedures", de: "Hautverjüngungsverfahren" },
      { uk: "Видалення новоутворень", ru: "Удаление новообразований", en: "Removal of Neoplasms", de: "Entfernung von Neoplasmen" }
    ],
    education: [
      { uk: "Національний медичний університет ім. О.О. Богомольця", ru: "Национальный медицинский университет им. А.А. Богомольца", en: "O.O. Bogomolets National Medical University", de: "Nationale Medizinische Universität O.O. Bohomolez" },
      { uk: "Харківський національний медичний університет", ru: "Харьковский национальный медицинский университет", en: "Kharkiv National Medical University", de: "Nationale Medizinische Universität Charkiw" },
      { uk: "Українська військово-медична академія", ru: "Украинская военно-медицинская академия", en: "Ukrainian Military Medical Academy", de: "Ukrainische Militärmedizinische Akademie" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" }
    ],
    certificates: [],
    photo: "https://previews.123rf.com/images/lithian/lithian1603/lithian160300106/53995140-portrait-of-a-beautiful-young-woman-doctor-with-stethoscope.jpg",
    services: ["service12"],
    subservices: ["subservise12"],
    shortName: { uk: "Світлані", ru: "Светлане", en: "Svitlana", de: "Switlana" }
  },
  {
    id: "doctor11",
    slug: "fedorenko-mariia",
    fullName: {
      uk: "Федоренко Марія Андріївна",
      ru: "Федоренко Мария Андреевна",
      en: "Fedorenko Mariia Andriivna",
      de: "Fedorenko Marija Andrijwna"
    },
    position: {
      uk: "Педіатр, Дитячий ендокринолог, Неонатолог",
      ru: "Педиатр, Детский эндокринолог, Неонатолог",
      en: "Pediatrician, Pediatric Endocrinologist, Neonatologist",
      de: "Kinderärztin, Kinderendokrinologin, Neonatologin"
    },
    specializations: [
      { uk: "Педіатрія", ru: "Педиатрия", en: "Pediatrics", de: "Pädiatrie" },
      { uk: "Дитяча ендокринологія", ru: "Детская эндокринология", en: "Pediatric Endocrinology", de: "Kinderendokrinologie" },
      { uk: "Неонатологія", ru: "Неонатология", en: "Neonatology", de: "Neonatologie" },
      { uk: "Вакцинація дітей", ru: "Вакцинация детей", en: "Child Vaccination", de: "Kinderimpfung" },
      { uk: "Діагностика та лікування ендокринних захворювань у дітей", ru: "Диагностика и лечение эндокринных заболеваний у детей", en: "Diagnosis and Treatment of Endocrine Diseases in Children", de: "Diagnose und Behandlung von endokrinen Erkrankungen bei Kindern" },
      { uk: "Ведення новонароджених", ru: "Ведение новорожденных", en: "Newborn Care", de: "Neugeborenenbetreuung" },
      { uk: "Лікування дитячих інфекційних захворювань", ru: "Лечение детских инфекционных заболеваний", en: "Treatment of Pediatric Infectious Diseases", de: "Behandlung von Infektionskrankheiten bei Kindern" },
      { uk: "Дієтологія для дітей", ru: "Диетология для детей", en: "Pediatric Dietetics", de: "Ernährungsberatung für Kinder" },
      { uk: "Профілактичні огляди", ru: "Профилактические осмотры", en: "Preventive Check-ups", de: "Vorsorgeuntersuchungen" },
      { uk: "Діагностика затримки росту", ru: "Диагностика задержки роста", en: "Diagnosis of Growth Retardation", de: "Diagnose von Wachstumsverzögerungen" },
      { uk: "УЗД для дітей", ru: "УЗИ для детей", en: "Pediatric Ultrasound", de: "Ultraschalluntersuchungen für Kinder" }
    ],
    education: [
      { uk: "Вінницький національний медичний університет ім. М.І. Пирогова", ru: "Винницкий национальный медицинский университет им. Н.И. Пирогова", en: "Pirogov Vinnytsia National Medical University", de: "Nationale Medizinische Universität Winnyzja, benannt nach M.I. Pirogow" },
      { uk: "Київський національний медичний університет ім. О.О. Богомольця", ru: "Киевский национальный медицинский университет им. А.А. Богомольца", en: "Kyiv National Medical University named after O.O. Bogomolets", de: "Nationale Medizinische Universität Kyjiw, benannt nach O.O. Bohomolez" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" }
    ],
    certificates: [],
    photo: "https://cdn6.dissolve.com/p/D2115_159_258/D2115_159_258_1200.jpg",
    services: ["service13"],
    subservices: ["subservise13"],
    shortName: { uk: "Марії", ru: "Марии", en: "Mariia", de: "Marija" }
  },
  {
    id: "doctor12",
    slug: "shvec-viktor",
    fullName: {
      uk: "Швець Віктор Миколайович",
      ru: "Швец Виктор Николаевич",
      en: "Shvets Viktor Mykolaiovych",
      de: "Shwez Wiktor Mykolajowytsch"
    },
    position: {
      uk: "Психіатр, Психотерапевт, Нарколог",
      ru: "Психиатр, Психотерапевт, Нарколог",
      en: "Psychiatrist, Psychotherapist, Narcologist",
      de: "Psychiater, Psychotherapeut, Narkologe"
    },
    specializations: [
      { uk: "Психотерапія", ru: "Психотерапия", en: "Psychotherapy", de: "Psychotherapie" },
      { uk: "Наркологія", ru: "Наркология", en: "Narcology", de: "Narkologie" },
      { uk: "Лікування депресії", ru: "Лечение депрессии", en: "Depression Treatment", de: "Behandlung von Depressionen" },
      { uk: "Лікування тривожних розладів", ru: "Лечение тревожных расстройств", en: "Anxiety Disorder Treatment", de: "Behandlung von Angststörungen" },
      { uk: "Лікування залежностей", ru: "Лечение зависимостей", en: "Addiction Treatment", de: "Behandlung von Abhängigkeiten" },
      { uk: "Посттравматичний стресовий розлад", ru: "Посттравматическое стрессовое расстройство", en: "Post-Traumatic Stress Disorder", de: "Posttraumatische Belastungsstörung" },
      { uk: "Когнітивно-поведінкова терапія", ru: "Когнитивно-поведенческая терапия", en: "Cognitive Behavioral Therapy", de: "Kognitive Verhaltenstherapie" },
      { uk: "Сімейна терапія", ru: "Семейная терапия", en: "Family Therapy", de: "Familientherapie" },
      { uk: "Лікування розладів сну", ru: "Лечение расстройств сна", en: "Sleep Disorder Treatment", de: "Behandlung von Schlafstörungen" },
      { uk: "Психофармакологія", ru: "Психофармакология", en: "Psychopharmacology", de: "Psychopharmakologie" }
    ],
    education: [
      { uk: "Запорізький державний медичний університет", ru: "Запорожский государственный медицинский университет", en: "Zaporizhzhia State Medical University", de: "Staatliche Medizinische Universität Saporischschja" },
      { uk: "Київський національний медичний університет ім. О.О. Богомольця", ru: "Киевский национальный медицинский университет им. А.А. Богомольца", en: "Kyiv National Medical University named after O.O. Bogomolets", de: "Nationale Medizinische Universität Kyjiw, benannt nach O.O. Bohomolez" },
      { uk: "Національна медична академія післядипломної освіти ім. П.Л. Шупика", ru: "Национальная медицинская академия последипломного образования им. П.Л. Шупика", en: "Shupyk National Medical Academy of Postgraduate Education", de: "P.L. Shupyk Nationale Medizinische Akademie für postgraduale Ausbildung" },
      { uk: "Львівський національний медичний університет ім. Данила Галицького", ru: "Львовский национальный медицинский университет им. Данила Галицкого", en: "Danylo Halytsky Lviv National Medical University", de: "Nationale Medizinische Universität Lwiw, benannt nach Danylo Halyzkyj" }
    ],
    certificates: [],
    photo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Drmike_%28cropped%29.png",
    services: ["service14"],
    subservices: ["subservise14"],
    shortName: { uk: "Віктору", ru: "Виктору", en: "Viktor", de: "Wiktor" }
  }
];


export const faqs: FAQ[] = [
  // Service 1: Видалення новоутворень
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
      uk: "Усі процедури з видалення проводяться під місцевою анестезією (укол або знеболюючий крем), тому є абсолютно комфортними та безболісними.",
      ru: "Все процедуры по удалению проводятся под местной анестезией (укол или обезболивающий крем), поэтому являются абсолютно комфортными и безболезненными.",
      en: "All removal procedures are performed under local anesthesia (injection or numbing cream), making them completely comfortable and painless.",
      de: "Alle Entfernungsverfahren werden unter örtlicher Betäubung (Injektion oder Betäubungscreme) durchgeführt und sind daher absolut angenehm und schmerzfrei."
    }
  },
  {
    id: "faq2",
    serviceId: "service1",
    question: {
      uk: "Чи відправляєте ви видалені родимки на гістологію?",
      ru: "Отправляете ли вы удаленные родинки на гистологию?",
      en: "Do you send removed moles for histology?",
      de: "Senden Sie entfernte Muttermale zur Histologie ein?"
    },
    answer: {
      uk: "Так, обов'язково. Будь-яке пігментне новоутворення, яке видаляється, ми відправляємо на гістологічне дослідження для підтвердження його доброякісності. Це золотий стандарт безпеки.",
      ru: "Да, обязательно. Любое пигментное новообразование, которое удаляется, мы отправляем на гистологическое исследование для подтверждения его доброкачественности. Это золотой стандарт безопасности.",
      en: "Yes, absolutely. Any pigmented growth that is removed is sent for histological examination to confirm its benign nature. This is the gold standard for safety.",
      de: "Ja, absolut. Jede entfernte pigmentierte Wucherung wird zur histologischen Untersuchung geschickt, um ihre Gutartigkeit zu bestätigen. Dies ist der Goldstandard für Sicherheit."
    }
  },
  {
    id: "faq3",
    subserviceId: "subservice1", // Видалення бородавок
    question: {
      uk: "Чи може бородавка з'явитися знову після видалення?",
      ru: "Может ли бородавка появиться снова после удаления?",
      en: "Can a wart reappear after removal?",
      de: "Kann eine Warze nach der Entfernung wieder auftreten?"
    },
    answer: {
      uk: "Бородавки викликані вірусом ВПЛ. Сучасні методи повністю руйнують тканину бородавки, але вірус може залишатися в організмі. При зниженні імунітету є невеликий ризик рецидиву. Лікар може порадити додаткову терапію.",
      ru: "Бородавки вызваны вирусом ВПЧ. Современные методы полностью разрушают ткань бородавки, но вирус может оставаться в организме. При снижении иммунитета есть небольшой риск рецидива. Врач может посоветовать дополнительную терапию.",
      en: "Warts are caused by the HPV virus. Modern methods completely destroy the wart tissue, but the virus can remain in the body. If the immune system is weakened, there is a small risk of recurrence. The doctor may recommend additional therapy.",
      de: "Warzen werden durch das HPV-Virus verursacht. Moderne Methoden zerstören das Warzengewebe vollständig, aber das Virus kann im Körper verbleiben. Bei geschwächtem Immunsystem besteht ein geringes Risiko eines Wiederauftretens. Der Arzt kann eine zusätzliche Therapie empfehlen."
    }
  },
  // Service 2: Косметологія обличчя та тіла
  {
    id: "faq4",
    serviceId: "service2",
    question: {
      uk: "Як часто потрібно робити чистку обличчя?",
      ru: "Как часто нужно делать чистку лица?",
      en: "How often should I get a facial cleansing?",
      de: "Wie oft sollte ich eine Gesichtsreinigung durchführen lassen?"
    },
    answer: {
      uk: "Це залежить від типу вашої шкіри. Для жирної та проблемної шкіри рекомендується раз на 1-1.5 місяця. Для нормальної та сухої — раз на 2-3 місяці або за потребою.",
      ru: "Это зависит от типа вашей кожи. Для жирной и проблемной кожи рекомендуется раз в 1-1.5 месяца. Для нормальной и сухой — раз в 2-3 месяца или по необходимости.",
      en: "It depends on your skin type. For oily and problematic skin, it is recommended once every 1-1.5 months. For normal and dry skin - once every 2-3 months or as needed.",
      de: "Das hängt von Ihrem Hauttyp ab. Bei fettiger und problematischer Haut wird es alle 1-1,5 Monate empfohlen. Bei normaler und trockener Haut - alle 2-3 Monate oder nach Bedarf."
    }
  },
  {
    id: "faq5",
    subserviceId: "subservice7", // Хімічний пілінг
    question: {
      uk: "Чи можна робити хімічний пілінг влітку?",
      ru: "Можно ли делать химический пилинг летом?",
      en: "Can I get a chemical peel in the summer?",
      de: "Kann ich im Sommer ein chemisches Peeling machen lassen?"
    },
    answer: {
      uk: "Так, але тільки поверхневі, всесезонні пілінги (наприклад, мигдальний, молочний). Серединні пілінги в період активного сонця робити не рекомендується. Обов'язковою умовою є використання крему з SPF 50+.",
      ru: "Да, но только поверхностные, всесезонные пилинги (например, миндальный, молочный). Срединные пилинги в период активного солнца делать не рекомендуется. Обязательным условием является использование крема с SPF 50+.",
      en: "Yes, but only superficial, all-season peels (e.g., mandelic, lactic). Medium-depth peels are not recommended during the active sun period. The mandatory condition is the use of a cream with SPF 50+.",
      de: "Ja, aber nur oberflächliche, ganzjährige Peelings (z.B. Mandel-, Milchsäure). Mitteltiefe Peelings werden während der aktiven Sonnenperiode nicht empfohlen. Die zwingende Voraussetzung ist die Verwendung einer Creme mit LSF 50+."
    }
  },
  // Service 3: Масаж
  {
    id: "faq6",
    serviceId: "service3",
    question: {
      uk: "Який масаж краще обрати, якщо я ніколи його не робив?",
      ru: "Какой массаж лучше выбрать, если я никогда его не делал?",
      en: "Which massage should I choose if I've never had one?",
      de: "Welche Massage sollte ich wählen, wenn ich noch nie eine hatte?"
    },
    answer: {
      uk: "Для першого разу ідеально підійде класичний масаж всього тіла або релакс-масаж. Вони допоможуть зняти загальну напругу та познайомитися з процедурою. Розкажіть масажисту про свої відчуття, і він підбере оптимальну інтенсивність.",
      ru: "Для первого раза идеально подойдет классический массаж всего тела или релакс-массаж. Они помогут снять общее напряжение и познакомиться с процедурой. Расскажите массажисту о своих ощущениях, и он подберет оптимальную интенсивность.",
      en: "For a first time, a classic full-body massage or a relaxation massage is ideal. They will help relieve general tension and introduce you to the procedure. Tell the therapist about your sensations, and they will select the optimal intensity.",
      de: "Für das erste Mal ist eine klassische Ganzkörpermassage oder eine Entspannungsmassage ideal. Sie helfen, allgemeine Verspannungen zu lösen und Sie mit dem Verfahren vertraut zu machen. Sprechen Sie mit dem Therapeuten über Ihre Empfindungen, und er wird die optimale Intensität auswählen."
    }
  },
  {
    id: "faq7",
    subserviceId: "subservice13", // Антицелюлітний масаж
    question: {
      uk: "Антицелюлітний масаж — це дуже боляче?",
      ru: "Антицеллюлитный массаж — это очень больно?",
      en: "Is anti-cellulite massage very painful?",
      de: "Ist eine Anti-Cellulite-Massage sehr schmerzhaft?"
    },
    answer: {
      uk: "Процедура може бути чутливою, особливо перші 2-3 сеанси, коли тканини ще набряклі. Можлива поява невеликих синців. Однак досвідчений масажист завжди працює в межах вашого больового порогу, і з кожною процедурою дискомфорт зменшується.",
      ru: "Процедура может быть чувствительной, особенно первые 2-3 сеанса, когда ткани еще отечные. Возможно появление небольших синяков. Однако опытный массажист всегда работает в пределах вашего болевого порога, и с каждой процедурой дискомфорт уменьшается.",
      en: "The procedure can be sensitive, especially the first 2-3 sessions when the tissues are still swollen. Small bruises may appear. However, an experienced therapist always works within your pain threshold, and the discomfort decreases with each procedure.",
      de: "Das Verfahren kann empfindlich sein, insbesondere die ersten 2-3 Sitzungen, wenn das Gewebe noch geschwollen ist. Es können kleine blaue Flecken auftreten. Ein erfahrener Therapeut arbeitet jedoch immer innerhalb Ihrer Schmerzgrenze, und das Unbehagen nimmt mit jeder Behandlung ab."
    }
  },
  // Service 4: Контурна пластика
  {
    id: "faq8",
    serviceId: "service4",
    question: {
      uk: "Як довго тримається ефект від філерів?",
      ru: "Как долго держится эффект от филлеров?",
      en: "How long do the effects of fillers last?",
      de: "Wie lange hält die Wirkung von Fillern an?"
    },
    answer: {
      uk: "Тривалість ефекту залежить від препарату, зони введення та індивідуальних особливостей метаболізму. В середньому, ефект від корекції губ триває 8-12 місяців, а від моделювання вилиць та підборіддя — 12-24 місяці.",
      ru: "Длительность эффекта зависит от препарата, зоны введения и индивидуальных особенностей метаболизма. В среднем, эффект от коррекции губ длится 8-12 месяцев, а от моделирования скул и подбородка — 12-24 месяца.",
      en: "The duration of the effect depends on the product, the injection area, and individual metabolic features. On average, the effect of lip correction lasts 8-12 months, and for cheekbone and chin modeling - 12-24 months.",
      de: "Die Dauer der Wirkung hängt vom Produkt, dem Injektionsbereich und den individuellen Stoffwechseleigenschaften ab. Im Durchschnitt hält die Wirkung der Lippenkorrektur 8-12 Monate an, bei Wangenknochen- und Kinnmodellierung - 12-24 Monate."
    }
  },
  {
    id: "faq9",
    subserviceId: "subservice15", // Збільшення губ
    question: {
      uk: "Чи будуть мої губи виглядати природно?",
      ru: "Будут ли мои губы выглядеть естественно?",
      en: "Will my lips look natural?",
      de: "Werden meine Lippen natürlich aussehen?"
    },
    answer: {
      uk: "Так. Сучасні техніки та препарати дозволяють досягти максимально природного результату. Наш лікар завжди враховує ваші індивідуальні пропорції та побажання, щоб лише підкреслити вашу красу, а не змінити до невпізнання.",
      ru: "Да. Современные техники и препараты позволяют достичь максимально естественного результата. Наш врач всегда учитывает ваши индивидуальные пропорции и пожелания, чтобы лишь подчеркнуть вашу красоту, а не изменить до неузнаваемости.",
      en: "Yes. Modern techniques and products allow for the most natural results. Our doctor always considers your individual proportions and wishes to only enhance your beauty, not change you beyond recognition.",
      de: "Ja. Moderne Techniken und Produkte ermöglichen die natürlichsten Ergebnisse. Unser Arzt berücksichtigt immer Ihre individuellen Proportionen und Wünsche, um Ihre Schönheit nur zu unterstreichen und Sie nicht bis zur Unkenntlichkeit zu verändern."
    }
  },
  // Service 5: IPL Shiny
  {
    id: "faq10",
    serviceId: "service5",
    question: {
      uk: "Наскільки болючою є процедура IPL?",
      ru: "Насколько болезненна процедура IPL?",
      en: "How painful is the IPL procedure?",
      de: "Wie schmerzhaft ist das IPL-Verfahren?"
    },
    answer: {
      uk: "Під час спалаху ви відчуваєте тепло та легке поколювання, схоже на клацання гумкою по шкірі. Наш апарат оснащений потужною системою охолодження, що робить процедуру комфортною.",
      ru: "Во время вспышки вы ощущаете тепло и легкое покалывание, похожее на щелчок резинкой по коже. Наш аппарат оснащен мощной системой охлаждения, что делает процедуру комфортной.",
      en: "During the flash, you feel warmth and a slight tingling, similar to a rubber band snap on the skin. Our device is equipped with a powerful cooling system, which makes the procedure comfortable.",
      de: "Während des Blitzes spüren Sie Wärme und ein leichtes Kribbeln, ähnlich wie bei einem Gummiband-Schnapper auf der Haut. Unser Gerät ist mit einem leistungsstarken Kühlsystem ausgestattet, was das Verfahren angenehm macht."
    }
  },
  {
    id: "faq11",
    subserviceId: "subservice19", // Лікування судинних зірочок
    question: {
      uk: "Скільки потрібно процедур IPL, щоб прибрати судини?",
      ru: "Сколько нужно процедур IPL, чтобы убрать сосуды?",
      en: "How many IPL procedures are needed to remove vessels?",
      de: "Wie viele IPL-Behandlungen sind erforderlich, um Gefäße zu entfernen?"
    },
    answer: {
      uk: "Кількість процедур залежить від розміру та глибини судин. Зазвичай для повного видалення судинної сіточки або куперозу потрібен курс з 2-5 процедур з інтервалом 3-4 тижні.",
      ru: "Количество процедур зависит от размера и глубины сосудов. Обычно для полного удаления сосудистой сеточки или купероза требуется курс из 2-5 процедур с интервалом 3-4 недели.",
      en: "The number of procedures depends on the size and depth of the vessels. Usually, a course of 2-5 procedures with an interval of 3-4 weeks is required for the complete removal of a vascular network or rosacea.",
      de: "Die Anzahl der Behandlungen hängt von der Größe und Tiefe der Gefäße ab. In der Regel ist ein Kurs von 2-5 Behandlungen im Abstand von 3-4 Wochen erforderlich, um ein Gefäßnetz oder Couperose vollständig zu entfernen."
    }
  },
  // Service 6: Ботулінотерапія
  {
    id: "faq12",
    serviceId: "service6",
    question: {
      uk: "Чи не буде моє обличчя схожим на маску після ботулінотерапії?",
      ru: "Не будет ли мое лицо похоже на маску после ботулинотерапии?",
      en: "Will my face look like a mask after botulinum toxin therapy?",
      de: "Wird mein Gesicht nach der Botulinumtoxin-Therapie wie eine Maske aussehen?"
    },
    answer: {
      uk: "Ні. Ефект «маски» виникає при введенні надмірної дози препарату. Наші лікарі використовують техніку «живого обличчя», підбираючи дозування індивідуально, щоб розслабити лише ті м'язи, що утворюють зморшки, і зберегти вашу природну міміку.",
      ru: "Нет. Эффект «маски» возникает при введении избыточной дозы препарата. Наши врачи используют технику «живого лица», подбирая дозировку индивидуально, чтобы расслабить только те мышцы, которые образуют морщины, и сохранить вашу естественную мимику.",
      en: "No. The \"mask\" effect occurs when an excessive dose of the drug is administered. Our doctors use the \"live face\" technique, selecting the dosage individually to relax only the muscles that form wrinkles and preserve your natural facial expressions.",
      de: "Nein. Der „Masken“-Effekt tritt auf, wenn eine übermäßige Dosis des Medikaments verabreicht wird. Unsere Ärzte verwenden die „lebendiges Gesicht“-Technik und wählen die Dosierung individuell aus, um nur die Muskeln zu entspannen, die Falten bilden, und Ihre natürlichen Gesichtsausdrücke zu erhalten."
    }
  },
  {
    id: "faq13",
    subserviceId: "subservice24", // Лікування гіпергідрозу
    question: {
      uk: "Чи безпечно блокувати потові залози?",
      ru: "Безопасно ли блокировать потовые железы?",
      en: "Is it safe to block sweat glands?",
      de: "Ist es sicher, Schweißdrüsen zu blockieren?"
    },
    answer: {
      uk: "Так, це абсолютно безпечно. Процедура проводиться локально (наприклад, в пахвах), і це ніяк не впливає на загальну терморегуляцію організму, оскільки ми продовжуємо потіти через мільйони інших залоз по всьому тілу.",
      ru: "Да, это абсолютно безопасно. Процедура проводится локально (например, в подмышках), и это никак не влияет на общую терморегуляцию организма, так как мы продолжаем потеть через миллионы других желез по всему телу.",
      en: "Yes, it is completely safe. The procedure is performed locally (e.g., in the armpits), and it does not affect the body's overall thermoregulation, as we continue to sweat through millions of other glands throughout the body.",
      de: "Ja, es ist absolut sicher. Das Verfahren wird lokal durchgeführt (z. B. in den Achselhöhlen) und beeinträchtigt die allgemeine Thermoregulation des Körpers nicht, da wir weiterhin durch Millionen anderer Drüsen am ganzen Körper schwitzen."
    }
  },
  // Service 7: Трихологія
  {
    id: "faq14",
    serviceId: "service7",
    question: {
      uk: "Що таке трихоскопія і чи це боляче?",
      ru: "Что такое трихоскопия и больно ли это?",
      en: "What is trichoscopy and is it painful?",
      de: "Was ist Trichoskopie und ist es schmerzhaft?"
    },
    answer: {
      uk: "Трихоскопія — це комп'ютерна діагностика стану волосся та шкіри голови за допомогою камери з багаторазовим збільшенням. Це абсолютно безболісна та неінвазивна процедура, схожа на УЗД.",
      ru: "Трихоскопия — это компьютерная диагностика состояния волос и кожи головы с помощью камеры с многократным увеличением. Это абсолютно безболезненная и неинвазивная процедура, похожая на УЗИ.",
      en: "Trichoscopy is a computer-based diagnosis of the condition of the hair and scalp using a camera with multiple magnification. It is a completely painless and non-invasive procedure, similar to an ultrasound.",
      de: "Die Trichoskopie ist eine computergestützte Diagnose des Zustands von Haar und Kopfhaut mit einer Kamera mit mehrfacher Vergrößerung. Es ist ein völlig schmerzloses und nicht-invasives Verfahren, ähnlich wie ein Ultraschall."
    }
  },
  {
    id: "faq15",
    subserviceId: "subservice29", // Терапія випадіння волосся
    question: {
      uk: "Чому шампуні від випадіння не допомагають?",
      ru: "Почему шампуни от выпадения не помогают?",
      en: "Why don't hair loss shampoos help?",
      de: "Warum helfen Shampoos gegen Haarausfall nicht?"
    },
    answer: {
      uk: "Причини випадіння волосся (алопеції) зазвичай є внутрішніми (гормони, дефіцити, стрес). Шампунь діє лише на поверхні шкіри і не може вплинути на ці процеси. Він може лише покращити зовнішній вигляд волосся. Для лікування потрібен комплексний підхід, призначений лікарем.",
      ru: "Причины выпадения волос (алопеции) обычно внутренние (гормоны, дефициты, стресс). Шампунь действует только на поверхности кожи и не может повлиять на эти процессы. Он может лишь улучшить внешний вид волос. Для лечения нужен комплексный подход, назначенный врачом.",
      en: "The causes of hair loss (alopecia) are usually internal (hormones, deficiencies, stress). A shampoo only acts on the surface of the skin and cannot influence these processes. It can only improve the appearance of the hair. Treatment requires a comprehensive approach prescribed by a doctor.",
      de: "Die Ursachen für Haarausfall (Alopezie) sind in der Regel intern (Hormone, Mangelerscheinungen, Stress). Ein Shampoo wirkt nur auf der Hautoberfläche und kann diese Prozesse nicht beeinflussen. Es kann nur das Aussehen der Haare verbessern. Die Behandlung erfordert einen umfassenden, von einem Arzt verordneten Ansatz."
    }
  },
  // Service 8: Мезотерапія
  {
    id: "faq16",
    serviceId: "service8",
    question: {
      uk: "Яка різниця між мезотерапією та біоревіталізацією?",
      ru: "Какая разница между мезотерапией и биоревитализацией?",
      en: "What is the difference between mesotherapy and biorevitalization?",
      de: "Was ist der Unterschied zwischen Mesotherapie und Biorevitalisierung?"
    },
    answer: {
      uk: "Основна різниця — в концентрації гіалуронової кислоти та цілях. Мезотерапія — це «вітамінні коктейлі» для вирішення широкого спектру проблем. Біоревіталізація використовує високу концентрацію ГК і спрямована в першу чергу на глибоке зволоження та стимуляцію колагену.",
      ru: "Основная разница — в концентрации гиалуроновой кислоты и целях. Мезотерапия — это «витаминные коктейли» для решения широкого спектра проблем. Биоревитализация использует высокую концентрацию ГК и направлена в первую очередь на глубокое увлажнение и стимуляцию коллагена.",
      en: "The main difference is in the concentration of hyaluronic acid and the goals. Mesotherapy uses \"vitamin cocktails\" to solve a wide range of problems. Biorevitalization uses a high concentration of HA and is primarily aimed at deep hydration and collagen stimulation.",
      de: "Der Hauptunterschied liegt in der Konzentration der Hyaluronsäure und den Zielen. Die Mesotherapie verwendet „Vitamin-Cocktails“, um eine breite Palette von Problemen zu lösen. Die Biorevitalisierung verwendet eine hohe Konzentration von HA und zielt hauptsächlich auf eine tiefe Hydratation und Kollagenstimulation ab."
    }
  },
  // Service 9: Біоревіталізація
  {
    id: "faq17",
    subserviceId: "subservice35", // Біоревіталізація обличчя
    question: {
      uk: "Що таке папули після біоревіталізації і як довго вони тримаються?",
      ru: "Что такое папулы после биоревитализации и как долго они держатся?",
      en: "What are papules after biorevitalization and how long do they last?",
      de: "Was sind Papeln nach der Biorevitalisierung und wie lange halten sie an?"
    },
    answer: {
      uk: "Папули — це невеликі горбки в місцях ін'єкцій, що містять депо препарату. Це нормальна і очікувана реакція. Вони повністю розсмоктуються самостійно протягом 1-3 днів, поступово насичуючи шкіру гіалуроновою кислотою.",
      ru: "Папулы — это небольшие бугорки в местах инъекций, содержащие депо препарата. Это нормальная и ожидаемая реакция. Они полностью рассасываются самостоятельно в течение 1-3 дней, постепенно насыщая кожу гиалуроновой кислотой.",
      en: "Papules are small bumps at the injection sites that contain a depot of the product. This is a normal and expected reaction. They resolve completely on their own within 1-3 days, gradually saturating the skin with hyaluronic acid.",
      de: "Papeln sind kleine Beulen an den Injektionsstellen, die ein Depot des Produkts enthalten. Dies ist eine normale und erwartete Reaktion. Sie bilden sich innerhalb von 1-3 Tagen von selbst vollständig zurück und sättigen die Haut allmählich mit Hyaluronsäure."
    }
  },
  // Service 10: Лазерна епіляція
  {
    id: "faq18",
    serviceId: "service10",
    question: {
      uk: "Лазерна епіляція — це назавжди?",
      ru: "Лазерная эпиляция — это навсегда?",
      en: "Is laser hair removal permanent?",
      de: "Ist die Laser-Haarentfernung dauerhaft?"
    },
    answer: {
      uk: "Після повного курсу руйнується до 95% волосяних фолікулів. Результат є довготривалим, але через гормональні зміни або інші фактори з часом можуть активуватися «сплячі» фолікули. Для підтримки ідеального результату рекомендується проводити 1-2 підтримуючі процедури на рік.",
      ru: "После полного курса разрушается до 95% волосяных фолликулов. Результат долговременный, но из-за гормональных изменений или других факторов со временем могут активироваться «спящие» фолликулы. Для поддержания идеального результата рекомендуется проводить 1-2 поддерживающие процедуры в год.",
      en: "After a full course, up to 95% of hair follicles are destroyed. The result is long-lasting, but due to hormonal changes or other factors, \"dormant\" follicles may become active over time. To maintain the ideal result, 1-2 maintenance procedures per year are recommended.",
      de: "Nach einem vollständigen Kurs werden bis zu 95% der Haarfollikel zerstört. Das Ergebnis ist langanhaltend, aber aufgrund hormoneller Veränderungen oder anderer Faktoren können im Laufe der Zeit „ruhende“ Follikel aktiv werden. Um das ideale Ergebnis zu erhalten, werden 1-2 Erhaltungsbehandlungen pro Jahr empfohlen."
    }
  },
  {
    id: "faq19",
    subserviceId: "subservice39", // Лазерна епіляція обличчя
    question: {
      uk: "Чи не буде волосся на обличчі рости ще сильніше після лазера?",
      ru: "Не будут ли волосы на лице расти еще сильнее после лазера?",
      en: "Will facial hair grow back thicker after laser?",
      de: "Wird das Gesichtshaar nach dem Laser dicker nachwachsen?"
    },
    answer: {
      uk: "Ні, це міф. Лазер руйнує фолікул, тому волосся з нього або не росте зовсім, або виростає значно світлішим та тоншим. Лазерна епіляція не стимулює ріст нового волосся.",
      ru: "Нет, это миф. Лазер разрушает фолликул, поэтому волос из него либо не растет совсем, либо вырастает значительно более светлым и тонким. Лазерная эпиляция не стимулирует рост новых волос.",
      en: "No, that's a myth. The laser destroys the follicle, so hair either doesn't grow back at all, or it grows back much lighter and thinner. Laser hair removal does not stimulate new hair growth.",
      de: "Nein, das ist ein Mythos. Der Laser zerstört den Follikel, sodass das Haar entweder gar nicht mehr nachwächst oder viel heller und dünner nachwächst. Die Laser-Haarentfernung stimuliert kein neues Haarwachstum."
    }
  },
  // Service 11: Лазерне видалення розтяжок / шрамів
  {
    id: "faq20",
    serviceId: "service11",
    question: {
      uk: "Наскільки болючою є процедура лазерного шліфування?",
      ru: "Насколько болезненна процедура лазерной шлифовки?",
      en: "How painful is laser resurfacing?",
      de: "Wie schmerzhaft ist das Laser-Resurfacing?"
    },
    answer: {
      uk: "Процедура проводиться під аплікаційною анестезією (знеболюючий крем), що робить її комфортною. Під час сеансу ви можете відчувати тепло та поколювання. Після процедури відчуття схожі на сонячний опік.",
      ru: "Процедура проводится под аппликационной анестезией (обезболивающий крем), что делает её комфортной. Во время сеанса вы можете ощущать тепло и покалывание. После процедуры ощущения похожи на солнечный ожог.",
      en: "The procedure is performed under topical anesthesia (numbing cream), which makes it comfortable. During the session, you may feel warmth and a tingling sensation. After the procedure, the sensations are similar to a sunburn.",
      de: "Das Verfahren wird unter topischer Anästhesie (Betäubungscreme) durchgeführt, was es angenehm macht. Während der Sitzung können Sie Wärme und ein Kribbeln spüren. Nach dem Eingriff ähneln die Empfindungen einem Sonnenbrand."
    }
  },
  {
    id: "faq21",
    subserviceId: "subservice45", // Видалення розтяжок
    question: {
      uk: "Чи можна повністю прибрати розтяжки лазером?",
      ru: "Можно ли полностью убрать растяжки лазером?",
      en: "Can stretch marks be completely removed with a laser?",
      de: "Können Dehnungsstreifen vollständig mit einem Laser entfernt werden?"
    },
    answer: {
      uk: "Повністю видалити розтяжки неможливо, оскільки це атрофічний рубець. Однак курс процедур лазерного шліфування дозволяє зробити їх на 80-90% менш помітними, вирівнявши рельєф та колір шкіри.",
      ru: "Полностью удалить растяжки невозможно, так как это атрофический рубец. Однако курс процедур лазерной шлифовки позволяет сделать их на 80-90% менее заметными, выровняв рельеф и цвет кожи.",
      en: "It is impossible to completely remove stretch marks, as they are atrophic scars. However, a course of laser resurfacing procedures can make them 80-90% less noticeable by evening out the skin's texture and color.",
      de: "Es ist unmöglich, Dehnungsstreifen vollständig zu entfernen, da es sich um atrophische Narben handelt. Ein Kurs von Laser-Resurfacing-Verfahren kann sie jedoch zu 80-90% weniger sichtbar machen, indem die Hauttextur und -farbe ausgeglichen werden."
    }
  },
  // Service 12: Фракційне омолодження RESUR-FX
  {
    id: "faq22",
    serviceId: "service12",
    question: {
      uk: "Яка різниця між ResurFX та звичайним лазерним шліфуванням?",
      ru: "Какая разница между ResurFX и обычной лазерной шлифовкой?",
      en: "What is the difference between ResurFX and regular laser resurfacing?",
      de: "Was ist der Unterschied zwischen ResurFX und normalem Laser-Resurfacing?"
    },
    answer: {
      uk: "ResurFX — це неаблятивний лазер. Він прогріває глибокі шари шкіри, не пошкоджуючи її поверхню. Це забезпечує ефективне омолодження з мінімальним періодом реабілітації (1-2 дні). Класичне (аблятивне) шліфування випаровує поверхню шкіри і вимагає більш тривалого відновлення.",
      ru: "ResurFX — это неаблятивный лазер. Он прогревает глубокие слои кожи, не повреждая её поверхность. Это обеспечивает эффективное омоложение с минимальным периодом реабилитации (1-2 дня). Классическая (аблятивная) шлифовка испаряет поверхность кожи и требует более длительного восстановления.",
      en: "ResurFX is a non-ablative laser. It heats the deep layers of the skin without damaging its surface. This provides effective rejuvenation with a minimal recovery period (1-2 days). Classic (ablative) resurfacing vaporizes the skin's surface and requires a longer recovery.",
      de: "ResurFX ist ein nicht-ablativer Laser. Er erwärmt die tiefen Hautschichten, ohne die Oberfläche zu beschädigen. Dies sorgt für eine effektive Verjüngung mit einer minimalen Erholungszeit (1-2 Tage). Das klassische (ablative) Resurfacing verdampft die Hautoberfläche und erfordert eine längere Erholung."
    }
  },
  // Service 13: Інтимна косметологія
  {
    id: "faq23",
    serviceId: "service13",
    question: {
      uk: "Чи безпечні ін'єкційні процедури в інтимній зоні?",
      ru: "Безопасны ли инъекционные процедуры в интимной зоне?",
      en: "Are injection procedures in the intimate area safe?",
      de: "Sind Injektionsverfahren im Intimbereich sicher?"
    },
    answer: {
      uk: "Так, абсолютно. Процедури проводяться лікарем-гінекологом або спеціально навченим косметологом з дотриманням усіх правил асептики та антисептики. Використовуються лише сертифіковані препарати, розроблені спеціально для цієї делікатної зони.",
      ru: "Да, абсолютно. Процедуры проводятся врачом-гинекологом или специально обученным косметологом с соблюдением всех правил асептики и антисептики. Используются только сертифицированные препараты, разработанные специально для этой деликатной зоны.",
      en: "Yes, absolutely. The procedures are performed by a gynecologist or a specially trained cosmetologist in compliance with all rules of asepsis and antisepsis. Only certified preparations specifically designed for this delicate area are used.",
      de: "Ja, absolut. Die Verfahren werden von einem Gynäkologen oder einem speziell ausgebildeten Kosmetologen unter Einhaltung aller Asepsis- und Antisepsis-Regeln durchgeführt. Es werden nur zertifizierte Präparate verwendet, die speziell für diesen empfindlichen Bereich entwickelt wurden."
    }
  },
  {
    id: "faq24",
    subserviceId: "subservice54", // Інтимна контурна пластика
    question: {
      uk: "Чи впливає збільшення точки G на чутливість?",
      ru: "Влияет ли увеличение точки G на чувствительность?",
      en: "Does G-spot augmentation affect sensitivity?",
      de: "Beeinflusst die G-Punkt-Vergrößerung die Empfindlichkeit?"
    },
    answer: {
      uk: "Так, це одна з головних цілей процедури. Введення філера робить цю зону більш доступною для стимуляції, що у багатьох жінок призводить до посилення сексуальних відчуттів та полегшення досягнення оргазму.",
      ru: "Да, это одна из главных целей процедуры. Введение филлера делает эту зону более доступной для стимуляции, что у многих женщин приводит к усилению сексуальных ощущений и облегчению достижения оргазма.",
      en: "Yes, that is one of the main goals of the procedure. The introduction of the filler makes this area more accessible for stimulation, which for many women leads to enhanced sexual sensations and easier achievement of orgasm.",
      de: "Ja, das ist eines der Hauptziele des Verfahrens. Die Einführung des Füllstoffs macht diesen Bereich zugänglicher für die Stimulation, was bei vielen Frauen zu gesteigerten sexuellen Empfindungen und einem leichteren Erreichen des Orgasmus führt."
    }
  },
  // Service 14: Плазмоліфтинг
  {
    id: "faq25",
    serviceId: "service14",
    question: {
      uk: "Наскільки безпечний плазмоліфтинг?",
      ru: "Насколько безопасен плазмолифтинг?",
      en: "How safe is plasmolifting?",
      de: "Wie sicher ist Plasmalifting?"
    },
    answer: {
      uk: "Це одна з найбезпечніших ін'єкційних процедур, оскільки використовується ваша власна кров. Це на 100% виключає ризик алергічних реакцій, відторгнення чи інфікування.",
      ru: "Это одна из самых безопасных инъекционных процедур, так как используется ваша собственная кровь. Это на 100% исключает риск аллергических реакций, отторжения или инфицирования.",
      en: "It is one of the safest injection procedures, as it uses your own blood. This 100% eliminates the risk of allergic reactions, rejection, or infection.",
      de: "Es ist eines der sichersten Injektionsverfahren, da Ihr eigenes Blut verwendet wird. Dies schließt das Risiko von allergischen Reaktionen, Abstoßung oder Infektionen zu 100% aus."
    }
  },
  // Service 15: Склеротерапія
  {
    id: "faq26",
    serviceId: "service15",
    question: {
      uk: "Що буде, якщо не носити компресійний трикотаж після склеротерапії?",
      ru: "Что будет, если не носить компрессионный трикотаж после склеротерапии?",
      en: "What happens if I don't wear compression stockings after sclerotherapy?",
      de: "Was passiert, wenn ich nach der Sklerotherapie keine Kompressionsstrümpfe trage?"
    },
    answer: {
      uk: "Носіння компресійного трикотажу — це обов'язкова та найважливіша частина лікування. Без компресії стінки вени не зможуть надійно «склеїтися», і процедура буде неефективною. Вена може відновити свій просвіт.",
      ru: "Ношение компрессионного трикотажа — это обязательная и важнейшая часть лечения. Без компрессии стенки вены не смогут надежно «склеиться», и процедура будет неэффективной. Вена может восстановить свой просвет.",
      en: "Wearing compression hosiery is a mandatory and crucial part of the treatment. Without compression, the vein walls will not be able to reliably \"stick together,\" and the procedure will be ineffective. The vein may recanalize.",
      de: "Das Tragen von Kompressionsstrümpfen ist ein obligatorischer und entscheidender Teil der Behandlung. Ohne Kompression können die Venenwände nicht zuverlässig „verkleben“, und das Verfahren ist unwirksam. Die Vene kann sich wieder öffnen."
    }
  },
  {
    id: "faq27",
    subserviceId: "subservice61", // Склеротерапія судинних зірочок
    question: {
      uk: "Коли зникнуть вени після склеротерапії?",
      ru: "Когда исчезнут вены после склеротерапии?",
      en: "When will the veins disappear after sclerotherapy?",
      de: "Wann werden die Venen nach der Sklerotherapie verschwinden?"
    },
    answer: {
      uk: "Дрібні капіляри стають невидимими майже одразу. Більші судини можуть тимчасово потемніти або виглядати як синець. Процес повного розсмоктування вени займає від 3-4 тижнів до кількох місяців, залежно від її діаметру.",
      ru: "Мелкие капилляры становятся невидимыми почти сразу. Более крупные сосуды могут временно потемнеть или выглядеть как синяк. Процесс полного рассасывания вены занимает от 3-4 недель до нескольких месяцев, в зависимости от её диаметра.",
      en: "Small capillaries become invisible almost immediately. Larger vessels may temporarily darken or look like a bruise. The process of complete absorption of the vein takes from 3-4 weeks to several months, depending on its diameter.",
      de: "Kleine Kapillaren werden fast sofort unsichtbar. Größere Gefäße können vorübergehend dunkler werden oder wie ein blauer Fleck aussehen. Der Prozess der vollständigen Resorption der Vene dauert je nach Durchmesser 3-4 Wochen bis mehrere Monate."
    }
  },
  // Додаткові загальні питання
  {
    id: "faq28",
    serviceId: "service4",
    question: {
      uk: "Чи є протипоказання до ін'єкційних процедур?",
      ru: "Есть ли противопоказания к инъекционным процедурам?",
      en: "Are there any contraindications to injection procedures?",
      de: "Gibt es Kontraindikationen für Injektionsverfahren?"
    },
    answer: {
      uk: "Так. Основними протипоказаннями є вагітність та лактація, онкологічні захворювання, аутоімунні хвороби в стадії загострення, порушення згортання крові та запальні процеси в зоні ін'єкцій. Перед будь-якою процедурою лікар проводить детальну консультацію.",
      ru: "Да. Основными противопоказаниями являются беременность и лактация, онкологические заболевания, аутоиммунные болезни в стадии обострения, нарушения свертываемости крови и воспалительные процессы в зоне инъекций. Перед любой процедурой врач проводит подробную консультацию.",
      en: "Yes. The main contraindications are pregnancy and lactation, oncological diseases, autoimmune diseases in the acute stage, blood clotting disorders, and inflammatory processes in the injection area. Before any procedure, the doctor conducts a detailed consultation.",
      de: "Ja. Die Hauptkontraindikationen sind Schwangerschaft und Stillzeit, onkologische Erkrankungen, Autoimmunerkrankungen im akuten Stadium, Blutgerinnungsstörungen und entzündliche Prozesse im Injektionsbereich. Vor jedem Eingriff führt der Arzt eine ausführliche Beratung durch."
    }
  },
  {
    id: "faq29",
    serviceId: "service10",
    question: {
      uk: "Чи можна робити лазерну епіляцію на засмаглій шкірі?",
      ru: "Можно ли делать лазерную эпиляцию на загорелой коже?",
      en: "Can laser hair removal be done on tanned skin?",
      de: "Kann eine Laser-Haarentfernung auf gebräunter Haut durchgeführt werden?"
    },
    answer: {
      uk: "Ні, категорично не рекомендується. Лазер реагує на меланін, і на засмаглій шкірі є високий ризик отримання опіку. Необхідно утриматися від засмаги щонайменше 2 тижні до та після процедури.",
      ru: "Нет, категорически не рекомендуется. Лазер реагирует на меланин, и на загорелой коже есть высокий риск получения ожога. Необходимо воздержаться от загара как минимум 2 недели до и после процедуры.",
      en: "No, it is strictly not recommended. The laser reacts to melanin, and on tanned skin, there is a high risk of getting a burn. It is necessary to refrain from tanning for at least 2 weeks before and after the procedure.",
      de: "Nein, es wird dringend davon abgeraten. Der Laser reagiert auf Melanin, und auf gebräunter Haut besteht ein hohes Risiko für Verbrennungen. Es ist notwendig, mindestens 2 Wochen vor und nach dem Eingriff auf Sonnenbaden zu verzichten."
    }
  },
  {
    id: "faq30",
    serviceId: "service6",
    question: {
      uk: "З якого віку можна робити ін'єкції ботулотоксину?",
      ru: "С какого возраста можно делать инъекции ботулотоксина?",
      en: "From what age can botulinum toxin injections be done?",
      de: "Ab welchem Alter können Botulinumtoxin-Injektionen durchgeführt werden?"
    },
    answer: {
      uk: "Процедуру можна робити з 18 років за наявності показань. Часто ботулінотерапію починають робити в 25-30 років з профілактичною метою, щоб запобігти утворенню глибоких статичних зморшок.",
      ru: "Процедуру можно делать с 18 лет при наличии показаний. Часто ботулинотерапию начинают делать в 25-30 лет с профилактической целью, чтобы предотвратить образование глубоких статических морщин.",
      en: "The procedure can be done from the age of 18 if there are indications. Often, botulinum toxin therapy is started at the age of 25-30 for preventive purposes, to prevent the formation of deep static wrinkles.",
      de: "Das Verfahren kann ab 18 Jahren bei entsprechenden Indikationen durchgeführt werden. Oft wird die Botulinumtoxin-Therapie im Alter von 25-30 Jahren zu präventiven Zwecken begonnen, um die Bildung tiefer statischer Falten zu verhindern."
    }
  },
  {
    id: "faq31",
    subserviceId: "subservice47", // Омолодження обличчя ResurFX
    question: {
      uk: "Як швидко я побачу результат від омолодження ResurFX?",
      ru: "Как быстро я увижу результат от омоложения ResurFX?",
      en: "How quickly will I see results from ResurFX rejuvenation?",
      de: "Wie schnell werde ich Ergebnisse von der ResurFX-Verjüngung sehen?"
    },
    answer: {
      uk: "Перші покращення текстури та тону шкіри помітні вже через 2-3 тижні після першої процедури. Оскільки ефект є накопичувальним і пов'язаний з виробленням нового колагену, фінальний результат оцінюється через 3-6 місяців після завершення курсу.",
      ru: "Первые улучшения текстуры и тона кожи заметны уже через 2-3 недели после первой процедуры. Поскольку эффект накопительный и связан с выработкой нового коллагена, финальный результат оценивается через 3-6 месяцев после завершения курса.",
      en: "The first improvements in skin texture and tone are noticeable 2-3 weeks after the first procedure. Since the effect is cumulative and related to the production of new collagen, the final result is assessed 3-6 months after the course is completed.",
      de: "Die ersten Verbesserungen der Hauttextur und des Hauttons sind 2-3 Wochen nach der ersten Behandlung spürbar. Da die Wirkung kumulativ ist und mit der Produktion von neuem Kollagen zusammenhängt, wird das Endergebnis 3-6 Monate nach Abschluss des Kurses bewertet."
    }
  },
  {
    id: "faq32",
    subserviceId: "subservice33", // Мезотерапія шкіри голови
    question: {
      uk: "Наскільки болюча мезотерапія шкіри голови?",
      ru: "Насколько болезненна мезотерапия кожи головы?",
      en: "How painful is scalp mesotherapy?",
      de: "Wie schmerzhaft ist die Mesotherapie der Kopfhaut?"
    },
    answer: {
      uk: "Процедура може бути чутливою, але цілком терпимою. Використовуються дуже тонкі та короткі голки. Відчуття можна порівняти з легкими уколами. За бажанням можна нанести місцевий анестетик.",
      ru: "Процедура может быть чувствительной, но вполне терпимой. Используются очень тонкие и короткие иглы. Ощущения можно сравнить с легкими уколами. По желанию можно нанести местный анестетик.",
      en: "The procedure can be sensitive but is quite tolerable. Very thin and short needles are used. The sensations can be compared to light pricks. A local anesthetic can be applied if desired.",
      de: "Das Verfahren kann empfindlich sein, ist aber durchaus erträglich. Es werden sehr dünne und kurze Nadeln verwendet. Die Empfindungen können mit leichten Stichen verglichen werden. Auf Wunsch kann ein lokales Anästhetikum aufgetragen werden."
    }
  },
  {
    id: "faq33",
    subserviceId: "subservice57", // Плазмоліфтинг обличчя
    question: {
      uk: "Чи потрібна підготовка до плазмоліфтингу?",
      ru: "Нужна ли подготовка к плазмолифтингу?",
      en: "Is preparation required for plasmolifting?",
      de: "Ist eine Vorbereitung für das Plasmalifting erforderlich?"
    },
    answer: {
      uk: "Так, для отримання якісної плазми за 2-3 дні до процедури рекомендується виключити з раціону жирну, смажену їжу та алкоголь, а також пити більше чистої води.",
      ru: "Да, для получения качественной плазмы за 2-3 дня до процедуры рекомендуется исключить из рациона жирную, жареную пищу и алкоголь, а также пить больше чистой воды.",
      en: "Yes, to obtain high-quality plasma, it is recommended to exclude fatty, fried foods, and alcohol from your diet 2-3 days before the procedure, and to drink more pure water.",
      de: "Ja, um hochwertiges Plasma zu erhalten, wird empfohlen, 2-3 Tage vor dem Eingriff auf fettige, frittierte Speisen und Alkohol zu verzichten und mehr reines Wasser zu trinken."
    }
  },
  {
    id: "faq34",
    serviceId: "service13",
    question: {
      uk: "Наскільки конфіденційними є процедури інтимної косметології?",
      ru: "Насколько конфиденциальны процедуры интимной косметологии?",
      en: "How confidential are intimate cosmetology procedures?",
      de: "Wie vertraulich sind intimkosmetische Behandlungen?"
    },
    answer: {
      uk: "Ми гарантуємо 100% конфіденційність та делікатний підхід. Уся інформація про ваше здоров'я та процедури є лікарською таємницею.",
      ru: "Мы гарантируем 100% конфиденциальность и деликатный подход. Вся информация о вашем здоровье и процедурах является врачебной тайной.",
      en: "We guarantee 100% confidentiality and a delicate approach. All information about your health and procedures is protected by medical confidentiality.",
      de: "Wir garantieren 100% Vertraulichkeit und einen sensiblen Umgang. Alle Informationen über Ihre Gesundheit und Behandlungen unterliegen der ärztlichen Schweigepflicht."
    }
  },
  {
    id: "faq35",
    subserviceId: "subservice62", // Склеротерапія варикозних вен
    question: {
      uk: "Чи може варикоз повернутися після склеротерапії?",
      ru: "Может ли варикоз вернуться после склеротерапии?",
      en: "Can varicose veins return after sclerotherapy?",
      de: "Können Krampfadern nach der Sklerotherapie wieder auftreten?"
    },
    answer: {
      uk: "Вени, які були оброблені склерозантом, зникають назавжди. Однак склеротерапія не усуває причину варикозної хвороби. При наявності схильності з часом можуть розширитися інші вени. Тому важливо дотримуватися рекомендацій флеболога.",
      ru: "Вены, которые были обработаны склерозантом, исчезают навсегда. Однако склеротерапия не устраняет причину варикозной болезни. При наличии предрасположенности со временем могут расшириться другие вены. Поэтому важно соблюдать рекомендации флеболога.",
      en: "Veins that have been treated with a sclerosant disappear forever. However, sclerotherapy does not eliminate the cause of varicose disease. If there is a predisposition, other veins may dilate over time. Therefore, it is important to follow the phlebologist's recommendations.",
      de: "Venen, die mit einem Sklerosierungsmittel behandelt wurden, verschwinden für immer. Die Sklerotherapie beseitigt jedoch nicht die Ursache der Krampfadererkrankung. Bei einer Veranlagung können sich im Laufe der Zeit andere Venen erweitern. Daher ist es wichtig, die Empfehlungen des Phlebologen zu befolgen."
    }
  },
  {
    id: "faq36",
    serviceId: "service2",
    question: {
      uk: "Чи можна поєднувати декілька косметологічних процедур в один день?",
      ru: "Можно ли сочетать несколько косметологических процедур в один день?",
      en: "Can several cosmetology procedures be combined in one day?",
      de: "Können mehrere kosmetische Behandlungen an einem Tag kombiniert werden?"
    },
    answer: {
      uk: "Так, багато процедур чудово поєднуються. Наприклад, чистку обличчя можна поєднати з карбокситерапією. Ваш лікар-косметолог на консультації складе для вас оптимальний план.",
      ru: "Да, многие процедуры прекрасно сочетаются. Например, чистку лица можно совместить с карбокситерапией. Ваш врач-косметолог на консультации составит для вас оптимальный план.",
      en: "Yes, many procedures combine well. For example, a facial cleansing can be combined with carboxytherapy. Your cosmetologist will create an optimal plan for you during the consultation.",
      de: "Ja, viele Behandlungen lassen sich gut kombinieren. Zum Beispiel kann eine Gesichtsreinigung mit einer Carboxytherapie kombiniert werden. Ihr Kosmetologe wird während der Beratung einen optimalen Plan für Sie erstellen."
    }
  },
  {
    id: "faq37",
    serviceId: "service11",
    question: {
      uk: "Коли краще починати лікування рубців?",
      ru: "Когда лучше начинать лечение рубцов?",
      en: "When is the best time to start scar treatment?",
      de: "Wann ist die beste Zeit, um mit der Narbenbehandlung zu beginnen?"
    },
    answer: {
      uk: "Чим «свіжіший» рубець, тим краще він піддається корекції. Лікування можна починати після повного загоєння рани, коли рубець ще рожевий. Однак сучасні лазери ефективно працюють і з застарілими, білими рубцями.",
      ru: "Чем «свежее» рубец, тем лучше он поддается коррекции. Лечение можно начинать после полного заживления раны, когда рубец еще розовый. Однако современные лазеры эффективно работают и с застарелыми, белыми рубцами.",
      en: "The \"fresher\" the scar, the better it responds to correction. Treatment can begin after the wound has completely healed, while the scar is still pink. However, modern lasers also work effectively on old, white scars.",
      de: "Je „frischer“ die Narbe ist, desto besser spricht sie auf eine Korrektur an. Die Behandlung kann beginnen, nachdem die Wunde vollständig verheilt ist, während die Narbe noch rosa ist. Moderne Laser arbeiten jedoch auch bei alten, weißen Narben effektiv."
    }
  },
  {
    id: "faq38",
    serviceId: "service10",
    question: {
      uk: "Чому перед лазерною епіляцією потрібно голити волосся, а не виривати?",
      ru: "Почему перед лазерной эпиляцией нужно брить волосы, а не вырывать?",
      en: "Why do you need to shave hair before laser hair removal, not pluck it?",
      de: "Warum müssen Sie die Haare vor der Laser-Haarentfernung rasieren und nicht zupfen?"
    },
    answer: {
      uk: "Мішенню для лазера є пігмент у волосяному фолікулі (корені). Якщо ви вириваєте волосся з коренем (воском, епілятором), лазеру не буде на що подіяти. Гоління залишає корінь неушкодженим, що забезпечує ефективність процедури.",
      ru: "Мишенью для лазера является пигмент в волосяном фолликуле (корне). Если вы вырываете волос с корнем (воском, эпилятором), лазеру не на что будет подействовать. Бритье оставляет корень нетронутым, что обеспечивает эффективность процедуры.",
      en: "The target for the laser is the pigment in the hair follicle (root). If you pluck the hair out by the root (with wax, an epilator), the laser will have nothing to act on. Shaving leaves the root intact, which ensures the effectiveness of the procedure.",
      de: "Das Ziel für den Laser ist das Pigment im Haarfollikel (Wurzel). Wenn Sie das Haar an der Wurzel auszupfen (mit Wachs, einem Epilierer), hat der Laser nichts, worauf er einwirken kann. Das Rasieren lässt die Wurzel intakt, was die Wirksamkeit des Verfahrens gewährleistet."
    }
  },
  {
    id: "faq39",
    serviceId: "service4",
    question: {
      uk: "Що буде з філерами через рік?",
      ru: "Что будет с филлерами через год?",
      en: "What will happen to the fillers in a year?",
      de: "Was passiert mit den Fillern in einem Jahr?"
    },
    answer: {
      uk: "Філери на основі гіалуронової кислоти є біодеградуючими. Це означає, що вони поступово розсмоктуються і природним шляхом виводяться з організму. Шкіра повертається до свого початкового стану, часто навіть у трохи кращому стані завдяки стимуляції колагену.",
      ru: "Филлеры на основе гиалуроновой кислоты являются биодеградируемыми. Это означает, что они постепенно рассасываются и естественным путем выводятся из организма. Кожа возвращается в свое первоначальное состояние, часто даже в немного лучшем состоянии благодаря стимуляции коллагена.",
      en: "Hyaluronic acid-based fillers are biodegradable. This means they gradually dissolve and are naturally eliminated from the body. The skin returns to its original state, often even in a slightly better condition due to collagen stimulation.",
      de: "Füllstoffe auf Hyaluronsäurebasis sind biologisch abbaubar. Das bedeutet, dass sie sich allmählich auflösen und auf natürliche Weise aus dem Körper ausgeschieden werden. Die Haut kehrt in ihren ursprünglichen Zustand zurück, oft sogar in einem etwas besseren Zustand aufgrund der Kollagenstimulation."
    }
  },
  {
    id: "faq40",
    serviceId: "service9",
    question: {
      uk: "Чим біорепарація краща за біоревіталізацію?",
      ru: "Чем биорепарация лучше биоревитализации?",
      en: "How is bioreparation better than biorevitalization?",
      de: "Wie ist die Bioreparation besser als die Biorevitalisierung?"
    },
    answer: {
      uk: "Біорепарація — це більш комплексний підхід. Окрім гіалуронової кислоти для зволоження, препарати містять вітаміни, пептиди та амінокислоти, які додатково живлять шкіру, борються з вільними радикалами та надають більш виражений омолоджуючий ефект. Це кращий вибір для шкіри з ознаками старіння.",
      ru: "Биорепарация — это более комплексный подход. Кроме гиалуроновой кислоты для увлажнения, препараты содержат витамины, пептиды и аминокислоты, которые дополнительно питают кожу, борются со свободными радикалами и оказывают более выраженный омолаживающий эффект. Это лучший выбор для кожи с признаками старения.",
      en: "Bioreparation is a more comprehensive approach. In addition to hyaluronic acid for hydration, the preparations contain vitamins, peptides, and amino acids that additionally nourish the skin, fight free radicals, and provide a more pronounced anti-aging effect. It is a better choice for skin with signs of aging.",
      de: "Die Bioreparation ist ein umfassenderer Ansatz. Neben Hyaluronsäure zur Hydratation enthalten die Präparate Vitamine, Peptide und Aminosäuren, die die Haut zusätzlich nähren, freie Radikale bekämpfen und eine ausgeprägtere Anti-Aging-Wirkung haben. Es ist eine bessere Wahl für Haut mit Anzeichen von Alterung."
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
  },
]

export const prices: PriceModel[] = [
  {
    serviceId: "service1",
    category: {
      uk: "ВИДАЛЕННЯ НОВОУТВОРЕНЬ",
      ru: "УДАЛЕНИЕ НОВООБРАЗОВАНИЙ",
      en: "Neoplasm Removal",
      de: "Entfernung von Neubildungen"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Удаление бородавок", ru: "Удаление бородавок", en: "Wart Removal", de: "Warzenentfernung" },
        items: [
          { duration: "15 хв", procedure: { uk: "Удаление бородавки (1 шт)", ru: "Удаление бородавки (1 шт)", en: "Wart removal (1 pc)", de: "Warzenentfernung (1 Stk)" }, price: "₴ 800" },
          { duration: "30 хв", procedure: { uk: "Удаление множественных бородавок (до 5 шт)", ru: "Удаление множественных бородавок (до 5 шт)", en: "Removal of multiple warts (up to 5 pcs)", de: "Entfernung mehrerer Warzen (bis zu 5 Stk)" }, price: "₴ 2200" }
        ]
      },
      {
        subtitle: { uk: "Удаление родинок (невусов)", ru: "Удаление родинок (невусов)", en: "Mole (Nevus) Removal", de: "Entfernung von Muttermalen (Naevi)" },
        items: [
          { duration: "20 хв", procedure: { uk: "Удаление родинки (1 шт)", ru: "Удаление родинки (1 шт)", en: "Mole removal (1 pc)", de: "Entfernung eines Muttermals (1 Stk)" }, price: "₴ 1200" },
          { duration: "40 хв", procedure: { uk: "Удаление крупных родинок (от 1 см)", ru: "Удаление крупных родинок (от 1 см)", en: "Removal of large moles (from 1 cm)", de: "Entfernung großer Muttermale (ab 1 cm)" }, price: "₴ 2000" }
        ]
      },
      {
        subtitle: { uk: "Удаление папиллом", ru: "Удаление папиллом", en: "Papilloma Removal", de: "Entfernung von Papillomen" },
        items: [
          { duration: "10 хв", procedure: { uk: "Удаление папилломы (1-3 шт)", ru: "Удаление папилломы (1-3 шт)", en: "Papilloma removal (1-3 pcs)", de: "Papillomenentfernung (1-3 Stk)" }, price: "₴ 600" },
          { duration: "25 хв", procedure: { uk: "Удаление множественных папиллом (от 5 шт)", ru: "Удаление множественных папиллом (от 5 шт)", en: "Removal of multiple papillomas (from 5 pcs)", de: "Entfernung mehrerer Papillome (ab 5 Stk)" }, price: "₴ 1800" }
        ]
      },
      {
        subtitle: { uk: "Удаление кератом", ru: "Удаление кератом", en: "Keratoma Removal", de: "Keratomentfernung" },
        items: [
          { duration: "15 хв", procedure: { uk: "Удаление кератомы (1 шт)", ru: "Удаление кератомы (1 шт)", en: "Keratoma removal (1 pc)", de: "Keratomentfernung (1 Stk)" }, price: "₴ 900" }
        ]
      },
      {
        subtitle: { uk: "Удаление кондилом", ru: "Удаление кондилом", en: "Condyloma Removal", de: "Kondylomentfernung" },
        items: [
          { duration: "20 хв", procedure: { uk: "Удаление кондилом (1-3 шт)", ru: "Удаление кондилом (1-3 шт)", en: "Condyloma removal (1-3 pcs)", de: "Kondylomentfernung (1-3 Stk)" }, price: "₴ 1100" }
        ]
      }
    ]
  },
  {
    serviceId: "service2",
    category: {
      uk: "КОСМЕТОЛОГІЯ ОБЛИЧЧЯ ТА ТІЛА",
      ru: "КОСМЕТОЛОГИЯ ЛИЦА И ТЕЛА",
      en: "Facial and Body Cosmetology",
      de: "Gesichts- und Körperkosmetik"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Чистка лица", ru: "Чистка лица", en: "Facial cleansing", de: "Gesichtsreinigung" },
        items: [
          { duration: "60 хв", procedure: { uk: "Ультразвукова чистка", ru: "Ультразвуковая чистка", en: "Ultrasonic cleansing", de: "Ultraschallreinigung" }, price: "₴ 1800" },
          { duration: "90 хв", procedure: { uk: "Механічна чистка", ru: "Механическая чистка", en: "Manual cleansing", de: "Manuelle Reinigung" }, price: "₴ 2500" }
        ]
      },
      {
        subtitle: { uk: "Хімічний пілінг", ru: "Химический пилинг", en: "Chemical peeling", de: "Chemische Peelings" },
        items: [
          { duration: "45 хв", procedure: { uk: "Поверхневий пілінг", ru: "Поверхностный пилинг", en: "Superficial peeling", de: "Oberflächliches Peeling" }, price: "₴ 1500" },
          { duration: "60 хв", procedure: { uk: "Серединний пілінг", ru: "Срединный пилинг", en: "Medium peeling", de: "Mittleres Peeling" }, price: "₴ 2800" }
        ]
      },
      {
        subtitle: { uk: "Карбокситерапія обличчя", ru: "Карбокситерапия лица", en: "Facial Carboxytherapy", de: "Gesichts-Carboxytherapie" },
        items: [
          { duration: "45 хв", procedure: { uk: "Карбокситерапія обличчя (1 сеанс)", ru: "Карбокситерапия лица (1 сеанс)", en: "Facial carboxytherapy (1 session)", de: "Gesichts-Carboxytherapie (1 Sitzung)" }, price: "₴ 2100" }
        ]
      },
      {
        subtitle: { uk: "Доглядові процедури для тіла", ru: "Уходовые процедуры для тела", en: "Body care procedures", de: "Körperpflegeverfahren" },
        items: [
          { duration: "60 хв", procedure: { uk: "Обгортання (антицелюлітне, зволожуюче)", ru: "Обертывание (антицеллюлитное, увлажняющее)", en: "Wraps (anti-cellulite, moisturizing)", de: "Körperwickel (Anti-Cellulite, feuchtigkeitsspendend)" }, price: "₴ 2600" }
        ]
      },
      {
        subtitle: { uk: "Ліфтинг-термопроцедури (RF-ліфтинг)", ru: "Лифтинг-термопроцедуры (RF-лифтинг)", en: "Lifting thermal procedures (RF-lifting)", de: "Thermo-Lifting-Verfahren (RF-Lifting)" },
        items: [
          { duration: "45 хв", procedure: { uk: "RF-ліфтинг обличчя", ru: "RF-лифтинг лица", en: "Facial RF-lifting", de: "Gesichts-RF-Lifting" }, price: "₴ 3000" },
          { duration: "60 хв", procedure: { uk: "RF-ліфтинг тіла (1 зона)", ru: "RF-лифтинг тела (1 зона)", en: "Body RF-lifting (1 area)", de: "Körper-RF-Lifting (1 Zone)" }, price: "₴ 3500" }
        ]
      }
    ]
  },
  {
    serviceId: "service3",
    category: { uk: "МАСАЖ", ru: "МАССАЖ", en: "Massage", de: "Massage" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Класичний масаж", ru: "Классический массаж", en: "Classic Massage", de: "Klassische Massage" },
        items: [
          { duration: "60 хв", procedure: { uk: "Масаж спини", ru: "Массаж спины", en: "Back massage", de: "Rückenmassage" }, price: "₴ 1200" },
          { duration: "90 хв", procedure: { uk: "Загальний класичний масаж", ru: "Общий классический массаж", en: "Full body classic massage", de: "Ganzkörper-Klassische Massage" }, price: "₴ 2000" }
        ]
      },
      {
        subtitle: { uk: "Лімфодренажний масаж", ru: "Лимфодренажный массаж", en: "Lymphatic Drainage Massage", de: "Lymphdrainage-Massage" },
        items: [
          { duration: "75 хв", procedure: { uk: "Лімфодренажний масаж тіла", ru: "Лимфодренажный массаж тела", en: "Full body lymphatic drainage massage", de: "Ganzkörper-Lymphdrainage-Massage" }, price: "₴ 2300" }
        ]
      },
      {
        subtitle: { uk: "Антицелюлітний масаж", ru: "Антицеллюлитный массаж", en: "Anti-Cellulite Massage", de: "Anti-Cellulite-Massage" },
        items: [
          { duration: "60 хв", procedure: { uk: "Антицелюлітний масаж (1 зона)", ru: "Антицеллюлитный массаж (1 зона)", en: "Anti-cellulite massage (1 area)", de: "Anti-Cellulite-Massage (1 Zone)" }, price: "₴ 2200" }
        ]
      },
      {
        subtitle: { uk: "Релакс-масаж", ru: "Релакс-массаж", en: "Relaxation Massage", de: "Entspannungsmassage" },
        items: [
          { duration: "90 хв", procedure: { uk: "Загальний розслаблюючий масаж", ru: "Общий расслабляющий массаж", en: "Full body relaxation massage", de: "Ganzkörper-Entspannungsmassage" }, price: "₴ 2500" }
        ]
      }
    ]
  },
  {
    serviceId: "service4",
    category: {
      uk: "КОНТУРНА ПЛАСТИКА",
      ru: "КОНТУРНАЯ ПЛАСТИКА",
      en: "Contour Plastic",
      de: "Konturplastik"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Збільшення губ", ru: "Увеличение губ", en: "Lip Augmentation", de: "Lippenvergrößerung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Збільшення губ філером на основі гіалуронової кислоти", ru: "Увеличение губ филлером на основе гиалуроновой кислоты", en: "Lip augmentation with hyaluronic acid filler", de: "Lippenvergrößerung mit Hyaluronsäure-Füllstoff" }, price: "₴ 6500" }
        ]
      },
      {
        subtitle: { uk: "Контурна корекція вилиць", ru: "Контурная коррекция скул", en: "Cheekbone Contour Correction", de: "Konturkorrektur der Wangenknochen" },
        items: [
          { duration: "60 хв", procedure: { uk: "Корекція вилиць філером (1 мл)", ru: "Коррекция скул филлером (1 мл)", en: "Cheekbone correction with filler (1 ml)", de: "Wangenknochenkorrektur mit Füllstoff (1 ml)" }, price: "₴ 7000" }
        ]
      },
      {
        subtitle: { uk: "Моделювання підборіддя", ru: "Моделирование подбородка", en: "Chin Modeling", de: "Kinnmodellierung" },
        items: [
          { duration: "50 хв", procedure: { uk: "Моделювання підборіддя філером", ru: "Моделирование подбородка филлером", en: "Chin modeling with filler", de: "Kinnmodellierung mit Füllstoff" }, price: "₴ 6800" }
        ]
      },
      {
        subtitle: { uk: "Корекція носогубних складок", ru: "Коррекция носогубных складок", en: "Nasolabial Fold Correction", de: "Korrektur der Nasolabialfalten" },
        items: [
          { duration: "45 хв", procedure: { uk: "Корекція носогубних складок філером", ru: "Коррекция носогубных складок филлером", en: "Nasolabial fold correction with filler", de: "Korrektur der Nasolabialfalten mit Füllstoff" }, price: "₴ 6000" }
        ]
      }
    ]
  },
  {
    serviceId: "service5",
    category: {
      uk: "IPL SHINY",
      ru: "IPL SHINY",
      en: "IPL SHINY",
      de: "IPL SHINY"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Лікування судинних зірочок (куперозу)", ru: "Лечение сосудистых звёздочек (купероза)", en: "Treatment of spider veins (couperose)", de: "Behandlung von Besenreisern (Couperose)" },
        items: [
          { duration: "30 хв", procedure: { uk: "IPL-терапія (1 зона)", ru: "IPL-терапия (1 зона)", en: "IPL therapy (1 area)", de: "IPL-Therapie (1 Zone)" }, price: "₴ 2400" }
        ]
      },
      {
        subtitle: { uk: "Видалення пігментних плям", ru: "Удаление пигментных пятен", en: "Pigmented spot removal", de: "Entfernung von Pigmentflecken" },
        items: [
          { duration: "20 хв", procedure: { uk: "IPL-терапія пігментації (обличчя)", ru: "IPL-терапия пигментации (лицо)", en: "IPL therapy for pigmentation (face)", de: "IPL-Therapie bei Pigmentierung (Gesicht)" }, price: "₴ 2700" }
        ]
      },
      {
        subtitle: { uk: "Терапія акне", ru: "Терапия акне", en: "Acne Therapy", de: "Akne-Therapie" },
        items: [
          { duration: "40 хв", procedure: { uk: "IPL-терапія акне", ru: "IPL-терапия акне", en: "IPL therapy for acne", de: "IPL-Therapie bei Akne" }, price: "₴ 3000" }
        ]
      },
      {
        subtitle: { uk: "Омолодження шкіри IPL (Фотоомолодження)", ru: "Омоложение кожи IPL (Фотоомоложение)", en: "IPL skin rejuvenation (Photorejuvenation)", de: "IPL-Hautverjüngung (Photorejuvenation)" },
        items: [
          { duration: "45 хв", procedure: { uk: "Фотоомолодження обличчя", ru: "Фотоомоложение лица", en: "Facial photorejuvenation", de: "Gesichts-Photorejuvenation" }, price: "₴ 3300" }
        ]
      }
    ]
  },
  {
    serviceId: "service6",
    category: {
      uk: "БОТУЛІНОТЕРАПІЯ",
      ru: "БОТУЛИНОТЕРАПИЯ",
      en: "Botulinum Therapy",
      de: "Botulinum-Therapie"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Корекція мімічних зморшок", ru: "Коррекция мимических морщин", en: "Correction of expression lines", de: "Korrektur von Mimikfalten" },
        items: [
          { duration: "30 хв", procedure: { uk: "Корекція лоба (1 зона)", ru: "Коррекция лба (1 зона)", en: "Forehead correction (1 area)", de: "Stirnkorrektur (1 Zone)" }, price: "₴ 4500" },
          { duration: "45 хв", procedure: { uk: "Корекція міжбрів'я та чола", ru: "Коррекция межбровья и лба", en: "Frown lines and forehead correction", de: "Korrektur von Zornesfalten und Stirn" }, price: "₴ 7500" }
        ]
      },
      {
        subtitle: { uk: "Лікування гіпергідрозу", ru: "Лечение гипергидроза", en: "Hyperhidrosis Treatment", de: "Hyperhidrose-Behandlung" },
        items: [
          { duration: "60 хв", procedure: { uk: "Лікування гіпергідрозу (пахви, долоні)", ru: "Лечение гипергидроза (подмышки, ладони)", en: "Hyperhidrosis treatment (armpits, palms)", de: "Hyperhidrose-Behandlung (Achseln, Handflächen)" }, price: "₴ 9000" }
        ]
      },
      {
        subtitle: { uk: "Підйом куточків губ", ru: "Подъём уголков губ", en: "Lip Corner Lift", de: "Anhebung der Mundwinkel" },
        items: [
          { duration: "25 хв", procedure: { uk: "Корекція куточків губ", ru: "Коррекция уголков губ", en: "Lip corner correction", de: "Korrektur der Mundwinkel" }, price: "₴ 3600" }
        ]
      },
      {
        subtitle: { uk: "Корекція «гусячих лапок»", ru: "Коррекция «гусиных лапок»", en: "Crow's Feet Correction", de: "Korrektur von 'Krähenfüßen'" },
        items: [
          { duration: "20 хв", procedure: { uk: "Корекція «гусячих лапок»", ru: "Коррекция «гусиных лапок»", en: "Crow's feet correction", de: "Korrektur von 'Krähenfüßen'" }, price: "₴ 4200" }
        ]
      }
    ]
  },
  {
    serviceId: "service7",
    category: { uk: "ТРИХОЛОГІЯ", ru: "ТРИХОЛОГИЯ", en: "Trichology", de: "Trichologie" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Діагностика шкіри голови (Трихоскопія)", ru: "Диагностика кожи головы (Трихоскопия)", en: "Scalp Diagnostics (Trichoscopy)", de: "Kopfhautdiagnostik (Trichoskopie)" },
        items: [
          { duration: "45 хв", procedure: { uk: "Трихоскопія + консультація", ru: "Трихоскопия + консультация", en: "Trichoscopy + consultation", de: "Trichoskopie + Beratung" }, price: "₴ 2100" }
        ]
      },
      {
        subtitle: { uk: "Лікування себореї", ru: "Лечение себореи", en: "Seborrhea Treatment", de: "Behandlung von Seborrhoe" },
        items: [
          { duration: "30 хв", procedure: { uk: "Курс лікування себореї (1 сеанс)", ru: "Курс лечения себореи (1 сеанс)", en: "Seborrhea treatment course (1 session)", de: "Behandlungskurs Seborrhoe (1 Sitzung)" }, price: "₴ 1650" }
        ]
      },
      {
        subtitle: { uk: "Терапія випадіння волосся (алопеції)", ru: "Терапия выпадения волос (алопеции)", en: "Hair Loss Therapy (Alopecia)", de: "Therapie von Haarausfall (Alopezie)" },
        items: [
          { duration: "45 хв", procedure: { uk: "Інфузійна терапія при алопеції", ru: "Инфузионная терапия при алопеции", en: "Infusion therapy for alopecia", de: "Infusionstherapie bei Alopezie" }, price: "₴ 3600" }
        ]
      },
      {
        subtitle: { uk: "Мезотерапія шкіри голови", ru: "Мезотерапия кожи головы", en: "Scalp Mesotherapy", de: "Kopfhaut-Mesotherapie" },
        items: [
          { duration: "30 хв", procedure: { uk: "Мезотерапія для росту волосся", ru: "Мезотерапия для роста волос", en: "Mesotherapy for hair growth", de: "Mesotherapie für Haarwuchs" }, price: "₴ 2400" }
        ]
      }
    ]
  },
  {
    serviceId: "service8",
    category: { uk: "МЕЗОТЕРАПІЯ", ru: "МЕЗОТЕРАПИЯ", en: "Mesotherapy", de: "Mesotherapie" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Мезотерапія обличчя", ru: "Мезотерапия лица", en: "Facial Mesotherapy", de: "Gesichts-Mesotherapie" },
        items: [
          { duration: "60 хв", procedure: { uk: "Мезотерапія обличчя з вітамінами", ru: "Мезотерапия лица с витаминами", en: "Facial mesotherapy with vitamins", de: "Gesichts-Mesotherapie mit Vitaminen" }, price: "₴ 2700" }
        ]
      },
      {
        subtitle: { uk: "Мезотерапія тіла", ru: "Мезотерапия тела", en: "Body Mesotherapy", de: "Körper-Mesotherapie" },
        items: [
          { duration: "60 хв", procedure: { uk: "Мезотерапія для схуднення (1 зона)", ru: "Мезотерапия для похудения (1 зона)", en: "Mesotherapy for weight loss (1 area)", de: "Mesotherapie zur Gewichtsabnahme (1 Zone)" }, price: "₴ 3000" }
        ]
      },
      {
        subtitle: { uk: "Мезотерапія волосистої частини голови", ru: "Мезотерапия волосистой части головы", en: "Scalp Mesotherapy", de: "Kopfhaut-Mesotherapie" },
        items: [
          { duration: "30 хв", procedure: { uk: "Мезотерапія для волосся", ru: "Мезотерапия для волос", en: "Mesotherapy for hair", de: "Mesotherapie für Haare" }, price: "₴ 2550" }
        ]
      },
      {
        subtitle: { uk: "Мезотерапія для корекції целюліту", ru: "Мезотерапия для коррекции целлюлита", en: "Mesotherapy for cellulite correction", de: "Mesotherapie zur Cellulite-Korrektur" },
        items: [
          { duration: "45 хв", procedure: { uk: "Мезотерапія від целюліту", ru: "Мезотерапия от целлюлита", en: "Mesotherapy for cellulite", de: "Mesotherapie gegen Cellulite" }, price: "₴ 2850" }
        ]
      }
    ]
  },
  {
    serviceId: "service9",
    category: {
      uk: "БІОРЕВІТАЛІЗАЦІЯ / БІОРЕПАРАЦІЯ",
      ru: "БИОРЕВИТАЛИЗАЦИЯ / БИОРЕПАРАЦИЯ",
      en: "Biorevitalization / Bioreparation",
      de: "Biorevitalisierung / Bioreparation"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Біоревіталізація обличчя", ru: "Биоревитализация лица", en: "Facial Biorevitalization", de: "Gesichts-Biorevitalisierung" },
        items: [
          { duration: "60 хв", procedure: { uk: "Біоревіталізація обличчя (1 сеанс)", ru: "Биоревитализация лица (1 сеанс)", en: "Facial biorevitalization (1 session)", de: "Gesichts-Biorevitalisierung (1 Sitzung)" }, price: "₴ 4500" }
        ]
      },
      {
        subtitle: { uk: "Ін'єкції гіалуронової кислоти", ru: "Инъекции гиалуроновой кислоты", en: "Hyaluronic Acid Injections", de: "Hyaluronsäure-Injektionen" },
        items: [
          { duration: "45 хв", procedure: { uk: "Ін'єкції гіалуронової кислоти (1 мл)", ru: "Инъекции гиалуроновой кислоты (1 мл)", en: "Hyaluronic acid injections (1 ml)", de: "Hyaluronsäure-Injektionen (1 ml)" }, price: "₴ 5400" }
        ]
      },
      {
        subtitle: { uk: "Комплексні програми омолодження", ru: "Комплексные программы омоложения", en: "Complex Rejuvenation Programs", de: "Komplexe Verjüngungsprogramme" },
        items: [
          { duration: "90 хв", procedure: { uk: "Комплексне омолодження обличчя, шиї, декольте", ru: "Комплексное омоложение лица, шеи, декольте", en: "Complex rejuvenation of face, neck, and décolleté", de: "Komplexe Verjüngung von Gesicht, Hals und Dekolleté" }, price: "₴ 7500" }
        ]
      }
    ]
  },
  {
    serviceId: "service10",
    category: {
      uk: "ЛАЗЕРНА ЕПІЛЯЦІЯ",
      ru: "ЛАЗЕРНАЯ ЭПИЛЯЦИЯ",
      en: "Laser Hair Removal",
      de: "Laser-Haarentfernung"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Лазерна епіляція обличчя", ru: "Лазерная эпиляция лица", en: "Facial Laser Hair Removal", de: "Gesichts-Laser-Haarentfernung" },
        items: [
          { duration: "20 хв", procedure: { uk: "Лазерна епіляція верхньої губи", ru: "Лазерная эпиляция верхней губы", en: "Laser hair removal of upper lip", de: "Laser-Haarentfernung der Oberlippe" }, price: "₴ 750" },
          { duration: "30 хв", procedure: { uk: "Лазерна епіляція підборіддя", ru: "Лазерная эпиляция подбородка", en: "Chin laser hair removal", de: "Kinn-Laser-Haarentfernung" }, price: "₴ 1050" }
        ]
      },
      {
        subtitle: { uk: "Лазерна епіляція рук", ru: "Лазерная эпиляция рук", en: "Arm Laser Hair Removal", de: "Arm-Laser-Haarentfernung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Лазерна епіляція передпліччя", ru: "Лазерная эпиляция предплечий", en: "Forearm laser hair removal", de: "Unterarm-Laser-Haarentfernung" }, price: "₴ 1800" }
        ]
      },
      {
        subtitle: { uk: "Лазерна епіляція ніг", ru: "Лазерная эпиляция ног", en: "Leg Laser Hair Removal", de: "Bein-Laser-Haarentfernung" },
        items: [
          { duration: "60 хв", procedure: { uk: "Лазерна епіляція гомілок", ru: "Лазерная эпиляция голеней", en: "Lower leg laser hair removal", de: "Unterschenkel-Laser-Haarentfernung" }, price: "₴ 2400" }
        ]
      },
      {
        subtitle: { uk: "Лазерна епіляція зони бікіні", ru: "Лазерная эпиляция зоны бикини", en: "Bikini Area Laser Hair Removal", de: "Bikini-Zone-Laser-Haarentfernung" },
        items: [
          { duration: "40 хв", procedure: { uk: "Лазерна епіляція класичного бікіні", ru: "Лазерная эпиляция классического бикини", en: "Classic bikini laser hair removal", de: "Klassische Bikini-Laser-Haarentfernung" }, price: "₴ 2100" }
        ]
      }
    ]
  },
  {
    serviceId: "service11",
    category: {
      uk: "ЛАЗЕРНЕ ВИДАЛЕННЯ РОЗТЯЖОК ТА РУБЦІВ",
      ru: "ЛАЗЕРНОЕ УДАЛЕНИЕ РАСТЯЖЕК И РУБЦОВ",
      en: "Laser Removal of Stretch Marks and Scars",
      de: "Laserentfernung von Dehnungsstreifen und Narben"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Видалення постакне", ru: "Удаление постакне", en: "Post-acne removal", de: "Post-Akne-Entfernung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Лазерне шліфування обличчя", ru: "Лазерная шлифовка лица", en: "Facial laser resurfacing", de: "Laser-Hautstraffung im Gesicht" }, price: "₴ 4500" }
        ]
      },
      {
        subtitle: { uk: "Видалення рубців після операцій", ru: "Удаление рубцов после операций", en: "Removal of post-operative scars", de: "Entfernung postoperativer Narben" },
        items: [
          { duration: "30 хв", procedure: { uk: "Лазерне видалення рубців (за 1 см²)", ru: "Лазерное удаление рубцов (за 1 см²)", en: "Laser scar removal (per 1 cm²)", de: "Laser-Narbenentfernung (pro 1 cm²)" }, price: "₴ 1200" }
        ]
      },
      {
        subtitle: { uk: "Видалення розтяжок після вагітності", ru: "Удаление растяжек после беременности", en: "Removal of post-pregnancy stretch marks", de: "Entfernung von Dehnungsstreifen nach der Schwangerschaft" },
        items: [
          { duration: "60 хв", procedure: { uk: "Лазерне видалення розтяжок (1 зона)", ru: "Лазерное удаление растяжек (1 зона)", en: "Laser stretch mark removal (1 area)", de: "Laser-Dehnungsstreifen-Entfernung (1 Zone)" }, price: "₴ 5400" }
        ]
      },
      {
        subtitle: { uk: "Шліфування атрофічних рубців", ru: "Шлифовка атрофических рубцов", en: "Aesthetic scar resurfacing", de: "Ästhetische Narbenbehandlung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Лазерне шліфування атрофічних рубців (за 1 см²)", ru: "Лазерное шлифовка атрофических рубцов (за 1 см²)", en: "Aesthetic scar laser resurfacing (per 1 cm²)", de: "Laser-Ablativbehandlung von Narben (pro 1 cm²)" }, price: "₴ 1050" }
        ]
      }
    ]
  },
  {
    serviceId: "service12",
    category: {
      uk: "ФРАКЦІЙНЕ ОМОЛОДЖЕННЯ RESUR-FX",
      ru: "ФРАКЦИОННОЕ ОМОЛОЖЕНИЕ RESUR-FX",
      en: "Fractional Rejuvenation RESUR-FX",
      de: "Fraktionierte Verjüngung RESUR-FX"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Омолодження обличчя", ru: "Омоложение лица", en: "Facial Rejuvenation", de: "Gesichtsverjüngung" },
        items: [
          { duration: "60 хв", procedure: { uk: "Фракційне омолодження обличчя", ru: "Фракционное омоложение лица", en: "Fractional facial rejuvenation", de: "Fraktionierte Gesichtsverjüngung" }, price: "₴ 6000" }
        ]
      },
      {
        subtitle: { uk: "Омолодження зони шиї та декольте", ru: "Омоложение зоны шеи и декольте", en: "Neck and Décolleté Rejuvenation", de: "Hals- und Dekolletéverjüngung" },
        items: [
          { duration: "45 хв", procedure: { uk: "Фракційне омолодження шиї", ru: "Фракционное омоложение шеи", en: "Fractional neck rejuvenation", de: "Fraktionierte Halsverjüngung" }, price: "₴ 4500" }
        ]
      },
      {
        subtitle: { uk: "Терапія постакне", ru: "Терапия постакне", en: "Post-acne Therapy", de: "Post-Akne-Therapie" },
        items: [
          { duration: "50 хв", procedure: { uk: "Терапія постакне", ru: "Терапия постакне", en: "Post-acne therapy", de: "Post-Akne-Therapie" }, price: "₴ 3900" }
        ]
      }
    ]
  },
  {
    serviceId: "service13",
    category: {
      uk: "ІНТИМНА КОСМЕТОЛОГІЯ",
      ru: "ИНТИМНАЯ КОСМЕТОЛОГИЯ",
      en: "Intimate Cosmetology",
      de: "Intime Kosmetologie"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Інтимний пілінг", ru: "Интимный пилинг", en: "Intimate peeling", de: "Intimes Peeling" },
        items: [
          { duration: "45 хв", procedure: { uk: "Хімічний пілінг інтимних зон", ru: "Химический пилинг интимных зон", en: "Chemical peeling of intimate areas", de: "Chemisches Peeling der Intimbereiche" }, price: "₴ 3000" }
        ]
      },
      {
        subtitle: { uk: "Інтимна біоревіталізація/біорепарація", ru: "Интимная биоревитализация/биорепарация", en: "Intimate Biorevitalization/Bioreparation", de: "Intime Biorevitalisierung/Bioreparation" },
        items: [
          { duration: "60 хв", procedure: { uk: "Ін'єкції гіалуронової кислоти в інтимні зони", ru: "Инъекции гиалуроновой кислоты в интимные зоны", en: "Hyaluronic acid injections into intimate areas", de: "Hyaluronsäure-Injektionen in die Intimbereiche" }, price: "₴ 6000" }
        ]
      },
      {
        subtitle: { uk: "Мезотерапія інтимних зон", ru: "Мезотерапия интимных зон", en: "Intimate Areas Mesotherapy", de: "Mesotherapy of intimate areas", price: "₴ 3600" },
        items: [
          { duration: "45 хв", procedure: { uk: "Мезотерапія інтимних зон", ru: "Мезотерапия интимных зон", en: "Mesotherapy of intimate areas", de: "Mesotherapie der Intimbereiche" }, price: "₴ 3600" }
        ]
      },
      {
        subtitle: { uk: "Інтимна контурна пластика", ru: "Интимная контурная пластика", en: "Intimate Contour Plastic", de: "Intime Konturplastik" },
        items: [
          { duration: "60 хв", procedure: { uk: "Ін'єкційна корекція інтимних зон", ru: "Инъекционная коррекция интимных зон", en: "Injectable correction of intimate areas", de: "Injektionskorrektur der Intimbereiche" }, price: "₴ 7500" }
        ]
      },
      {
        subtitle: { uk: "Апаратне інтимне омолодження", ru: "Аппаратное интимное омоложение", en: "Hardware Intimate Rejuvenation", de: "Hardware-Intimverjüngung" },
        items: [
          { duration: "30 хв", procedure: { uk: "Апаратне омолодження інтимних зон", ru: "Аппаратное омоложение интимных зон", en: "Hardware rejuvenation of intimate areas", de: "Hardware-Verjüngung der Intimbereiche" }, price: "₴ 4500" }
        ]
      },
      {
        subtitle: { uk: "Лікування гіпергідрозу інтимних зон", ru: "Лечение гипергидроза интимных зон", en: "Treatment of intimate area hyperhidrosis", de: "Behandlung von Hyperhidrose in den Intimbereichen" },
        items: [
          { duration: "60 хв", procedure: { uk: "Ботулінотерапія інтимних зон", ru: "Ботулинотерапия интимных зон", en: "Botulinum therapy for intimate areas", de: "Botulinumtherapie für Intimbereiche" }, price: "₴ 9000" }
        ]
      }
    ]
  },
  {
    serviceId: "service14",
    category: {
      uk: "ПЛАЗМОЛІФТИНГ (PRP-ТЕРАПІЯ)",
      ru: "ПЛАЗМОЛИФТИНГ (PRP-ТЕРАПИЯ)",
      en: "Plasmolifting (PRP-Therapy)",
      de: "Plasmolifting (PRP-Therapie)"
    },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Плазмоліфтинг обличчя", ru: "Плазмолифтинг лица", en: "Facial Plasmolifting", de: "Gesichts-Plasmolifting" },
        items: [
          { duration: "60 хв", procedure: { uk: "Плазмоліфтинг обличчя (1 процедура)", ru: "Плазмолифтинг лица (1 процедура)", en: "Facial plasmolifting (1 procedure)", de: "Gesichts-Plasmolifting (1 Verfahren)" }, price: "₴ 3900" }
        ]
      },
      {
        subtitle: { uk: "Плазмоліфтинг шкіри голови", ru: "Плазмолифтинг кожи головы", en: "Scalp Plasmolifting", de: "Kopfhaut-Plasmolifting" },
        items: [
          { duration: "45 хв", procedure: { uk: "Плазмоліфтинг шкіри голови", ru: "Плазмолифтинг кожи головы", en: "Scalp plasmolifting", de: "Kopfhaut-Plasmolifting" }, price: "₴ 3300" }
        ]
      },
      {
        subtitle: { uk: "Плазмотерапія зони шиї та декольте", ru: "Плазмотерапия зоны шеи и декольте", en: "Neck and Décolleté Plasmotherapy", de: "Hals- und Dekolleté-Plasmotherapie" },
        items: [
          { duration: "60 хв", procedure: { uk: "Плазмотерапія шиї та декольте", ru: "Плазмотерапия шеи и декольте", en: "Plasmotherapy of neck and décolleté", de: "Plasmotherapie von Hals und Dekolleté" }, price: "₴ 4200" }
        ]
      },
      {
        subtitle: { uk: "Плазмоліфтинг рук", ru: "Плазмолифтинг рук", en: "Hand Plasmolifting", de: "Hand-Plasmolifting" },
        items: [
          { duration: "45 хв", procedure: { uk: "Плазмоліфтинг рук", ru: "Плазмолифтинг рук", en: "Hand plasmolifting", de: "Hand-Plasmolifting" }, price: "₴ 3000" }
        ]
      }
    ]
  },
  {
    serviceId: "service15",
    category: { uk: "СКЛЕРОТЕРАПІЯ", ru: "СКЛЕРОТЕРАПИЯ", en: "Sclerotherapy", de: "Sklerotherapie" },
    columns: {
      duration: { uk: "Тривалість", ru: "Длительность", en: "Duration", de: "Dauer" },
      procedure: { uk: "Процедура", ru: "Процедура", en: "Procedure", de: "Prozedur" },
      price: { uk: "Вартість", ru: "Стоимость", en: "Price", de: "Preis" }
    },
    sections: [
      {
        subtitle: { uk: "Склеротерапія судинних зірочок", ru: "Склеротерапия сосудистых звёздочек", en: "Sclerotherapy for spider veins", de: "Sklerotherapie bei Besenreisern" },
        items: [
          { duration: "30 хв", procedure: { uk: "Склеротерапія (1 зона)", ru: "Склеротерапия (1 зона)", en: "Sclerotherapy (1 area)", de: "Sklerotherapie (1 Zone)" }, price: "₴ 2700" }
        ]
      },
      {
        subtitle: { uk: "Склеротерапія варикозних вен", ru: "Склеротерапия варикозных вен", en: "Sclerotherapy for varicose veins", de: "Sklerotherapie bei Krampfadern" },
        items: [
          { duration: "45 хв", procedure: { uk: "Склеротерапія варикозної вени (1 нога)", ru: "Склеротерапия варикозной вены (1 нога)", en: "Varicose vein sclerotherapy (1 leg)", de: "Sklerotherapie einer Krampfader (1 Bein)" }, price: "₴ 4500" }
        ]
      },
      {
        subtitle: { uk: "Мікросклеротерапія", ru: "Микросклеротерапия", en: "Microsclerotherapy", de: "Mikrosklerotherapie" },
        items: [
          { duration: "20 хв", procedure: { uk: "Мікросклеротерапія (1 зона)", ru: "Микросклеротерапия (1 зона)", en: "Microsclerotherapy (1 area)", de: "Mikrosklerotherapie (1 Zone)" }, price: "₴ 2100" }
        ]
      }
    ]
  }
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