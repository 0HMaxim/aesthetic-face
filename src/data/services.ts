// data/service.ts
import type {Photo} from "../models/Photo.ts";
import type {GeneralInfo} from "../models/GeneralInfo.ts";

export const photos: Photo[] = [
  {
    id: "photo1",
    serviceId: "service1",
    subserviceId: "subservice2",
    title: {
      uk: "До та після видалення родимки",
      ru: "До и после удаления родинки",
      en: "Before and After Mole Removal",
      de: "Vorher-Nachher Muttermalentfernung"
    },
    description: {
      uk: "Результат після безболісного видалення новоутворення на обличчі за допомогою сучасних лазерних технологій.",
      ru: "Результат после безболезненного удаления новообразования на лице с помощью современных лазерных технологий.",
      en: "The result after painless removal of a facial growth using modern laser technologies.",
      de: "Das Ergebnis nach der schmerzlosen Entfernung einer Wucherung im Gesicht mit moderner Lasertechnologie."
    },
    mainImage: "https://calm.ua/wp-content/uploads/2022/08/doposle1.jpg",
    imgArr: [
      {
        src: "https://euroderm.kharkov.ua/wp-content/uploads/2020/11/radiovolnami-rodinok-udalenie-e1605888621632.jpg",
        title: {
          uk: "Загоєння після процедури",
          ru: "Заживление после процедуры",
          en: "Healing after the procedure",
          de: "Heilung nach dem Eingriff"
        },
        description: {
          uk: "Фото демонструє процес загоєння через кілька тижнів після видалення.",
          ru: "Фото демонстрирует процесс заживления спустя несколько недель после удаления.",
          en: "The photo shows the healing process a few weeks after removal.",
          de: "Das Foto zeigt den Heilungsprozess einige Wochen nach der Entfernung."
        }
      },
      {
        src: "https://calm.ua/wp-content/uploads/2022/08/doposle3.jpg",
        title: {
          uk: "Кінцевий результат",
          ru: "Конечный результат",
          en: "Final result",
          de: "Endergebnis"
        },
        description: {
          uk: "Остаточний вигляд шкіри без сліду від новоутворення.",
          ru: "Окончательный вид кожи без следа от новообразования.",
          en: "The final appearance of the skin with no trace of the growth.",
          de: "Das endgültige Erscheinungsbild der Haut ohne jegliche Spuren der Wucherung."
        }
      }
    ]
  },
  // Service 2: Gesichts- und Körperkosmetologie (ID: service2) -> Subservice 6: Gesichtsreinigung
  {
    id: "photo2",
    serviceId: "service2",
    subserviceId: "subservice6",
    title: {
      uk: "Результат ультразвукової чистки обличчя",
      ru: "Результат ультразвуковой чистки лица",
      en: "Result of Ultrasonic Facial Cleansing",
      de: "Ergebnis der Ultraschall-Gesichtsreinigung"
    },
    description: {
      uk: "Глибоке очищення та освітлення шкіри після першої процедури, яке повертає шкірі здорове сяйво.",
      ru: "Глубокая очистка и осветление кожи после первой процедуры, которая возвращает коже здоровое сияние.",
      en: "Deep cleansing and brightening of the skin after the first procedure, restoring a healthy glow.",
      de: "Tiefenreinigung und Aufhellung der Haut nach der ersten Behandlung, die der Haut ein gesundes Strahlen zurückgibt."
    },
    mainImage: "https://detali.com/wp-content/uploads/2023/10/uz-chistka-lica-1.jpg",
    imgArr: [
      {
        src: "https://kavcosmo.ru/images/uzpiling.png",
        title: {
          uk: "Покращення еластичності",
          ru: "Улучшение эластичности",
          en: "Improved Elasticity",
          de: "Verbesserte Elastizität"
        },
        description: {
          uk: "Фото демонструє підвищення пружності шкіри та розгладження дрібних зморшок.",
          ru: "Фото демонстрирует повышение упругости кожи и разглаживание мелких морщин.",
          en: "The photo shows increased skin firmness and the smoothing of fine wrinkles.",
          de: "Das Foto zeigt eine erhöhte Hautfestigkeit und die Glättung feiner Falten."
        }
      }
    ]
  },
  // Service 2: Gesichts- und Körperkosmetologie (ID: service2) -> Subservice 7: Chemisches Peeling
  {
    id: "photo3",
    serviceId: "service2",
    subserviceId: "subservice7",
    title: {
      uk: "До та після хімічного пілінгу",
      ru: "До и после химического пилинга",
      en: "Before and After Chemical Peel",
      de: "Vorher-Nachher Chemisches Peeling"
    },
    description: {
      uk: "Ефективне зменшення пігментації та зморшок, оновлення шкіри.",
      ru: "Эффективное уменьшение пигментации и морщин, обновление кожи.",
      en: "Effective reduction of pigmentation and wrinkles, skin renewal.",
      de: "Effektive Reduzierung von Pigmentierung und Falten, Hauterneuerung."
    },
    mainImage: "https://www.ayna-spb.ru/netcat_files/userfiles/derma-peeling.jpg",
    imgArr: [
      {
        src: "https://altero-med.ru/assets/images/12-01-2024/kdoh7v-img-2016.jpeg",
        title: {
          uk: "Видалення пігментних плям",
          ru: "Удаление пигментных пятен",
          en: "Pigment Spot Removal",
          de: "Entfernung von Pigmentflecken"
        },
        description: {
          uk: "Фото демонструє помітне освітлення та вирівнювання тону шкіри.",
          ru: "Фото демонстрирует заметное осветление и выравнивание тона кожи.",
          en: "The photo shows a noticeable lightening and evening out of skin tone.",
          de: "Das Foto zeigt eine spürbare Aufhellung und Gleichmäßigkeit des Hauttons."
        }
      }
    ]
  },
  // Service 3: Massage (ID: service3) -> Subservice 12: Lymphdrainage-Massage
  {
    id: "photo4",
    serviceId: "service3",
    subserviceId: "subservice12",
    title: {
      uk: "До та після лімфодренажного масажу",
      ru: "До и после лимфодренажного массажа",
      en: "Before and After Lymphatic Drainage Massage",
      de: "Vorher-Nachher Lymphdrainage-Massage"
    },
    description: {
      uk: "Зменшення набряків та об'ємів, покращення мікроциркуляції та загального самопочуття.",
      ru: "Уменьшение отеков и объемов, улучшение микроциркуляции и общего самочувствия.",
      en: "Reduction of swelling and volume, improvement of microcirculation and overall well-being.",
      de: "Reduzierung von Schwellungen und Umfängen, Verbesserung der Mikrozirkulation und des allgemeinen Wohlbefindens."
    },
    mainImage: "https://altero-med.ru/assets/images/12-01-2024/rxws20-img-2177.jpg",
    imgArr: [
      {
        src: "https://l-beauty.ru/wp-content/uploads/2018/01/21984495_152623421993938_869212556491751424_n.jpg",
        title: {
          uk: "Покращення рельєфу тіла",
          ru: "Улучшение рельефа тела",
          en: "Improved Body Contours",
          de: "Verbesserte Körperkonturen"
        },
        description: {
          uk: "Зменшення целюліту та підтягнутість шкіри після курсу масажу.",
          ru: "Уменьшение целлюлита и подтянутость кожи после курса массажа.",
          en: "Reduction of cellulite and tighter skin after a course of massage.",
          de: "Reduzierung von Cellulite und straffere Haut nach einer Massagekur."
        }
      }
    ]
  },
  // Service 4: Konturplastik (ID: service4) -> Subservice 15: Lippenvergrößerung
  {
    id: "photo5",
    serviceId: "service4",
    subserviceId: "subservice15",
    title: {
      uk: "До та після збільшення губ",
      ru: "До и после увеличения губ",
      en: "Before and After Lip Augmentation",
      de: "Vorher-Nachher Lippenvergrößerung"
    },
    description: {
      uk: "Надання губам природного об'єму та симетрії за допомогою гіалуронової кислоти.",
      ru: "Придание губам естественного объема и симметрии с помощью гиалуроновой кислоты.",
      en: "Giving the lips natural volume and symmetry using hyaluronic acid.",
      de: "Den Lippen mit Hyaluronsäure natürliches Volumen und Symmetrie verleihen."
    },
    mainImage: "https://beauty-medicine.ru/wp-content/uploads/2024/01/img-before-after-ratn-uvel-gub-2024-01-001.jpg",
    imgArr: [
      {
        src: "https://jollyclinic.ru/wp-content/uploads/guby_1.webp",
        title: {
          uk: "Зволоження та розгладження",
          ru: "Увлажнение и разглаживание",
          en: "Hydration and Smoothing",
          de: "Feuchtigkeitsversorgung und Glättung"
        },
        description: {
          uk: "Крім об'єму, губи стають більш зволоженими та зникають дрібні зморшки.",
          ru: "Помимо объема, губы становятся более увлажненными и исчезают мелкие морщинки.",
          en: "In addition to volume, the lips become more hydrated and fine wrinkles disappear.",
          de: "Neben dem Volumen werden die Lippen mit Feuchtigkeit versorgt und feine Falten verschwinden."
        }
      }
    ]
  },
  // Service 5: IPL Shiny (ID: service5) -> Subservice 19: Behandlung von Couperose
  {
    id: "photo6",
    serviceId: "service5",
    subserviceId: "subservice19",
    title: {
      uk: "До та після лікування куперозу",
      ru: "До и после лечения купероза",
      en: "Before and After Couperose Treatment",
      de: "Vorher-Nachher Behandlung von Couperose"
    },
    description: {
      uk: "Ефективне видалення судинних зірочок та почервонінь на шкірі обличчя.",
      ru: "Эффективное удаление сосудистых звездочек и покраснений на коже лица.",
      en: "Effective removal of spider veins and redness on the facial skin.",
      de: "Effektive Entfernung von Besenreisern und Rötungen auf der Gesichtshaut."
    },
    mainImage: "https://www.telosbeauty.ru/files/30/16/before_after_kuperoz_2_2.png",
    imgArr: [
      {
        src: "https://pkclinic.ru/userfiles/info_block_items/431.jpeg?v=20",
        title: {
          uk: "Чиста шкіра",
          ru: "Чистая кожа",
          en: "Clear Skin",
          de: "Klare Haut"
        },
        description: {
          uk: "Кінцевий результат після повного курсу: рівномірний тон шкіри без видимих судин.",
          ru: "Конечный результат после полного курса: равномерный тон кожи без видимых сосудов.",
          en: "The final result after a full course: an even skin tone without visible vessels.",
          de: "Das Endergebnis nach einem vollständigen Kurs: ein ebenmäßiger Hautton ohne sichtbare Gefäße."
        }
      }
    ]
  },
  // Service 6: Botulinumtoxin-Therapie (ID: service6) -> Subservice 23: Korrektur von Mimikfalten
  {
    id: "photo7",
    serviceId: "service6",
    subserviceId: "subservice23",
    title: {
      uk: "До та після корекції мімічних зморшок",
      ru: "До и после коррекции мимических морщин",
      en: "Before and After Wrinkle Correction",
      de: "Vorher-Nachher Korrektur von Mimikfalten"
    },
    description: {
      uk: "Розгладження зморшок на лобі та міжбрів'ї за допомогою ботулінотерапії.",
      ru: "Разглаживание морщин на лбу и межбровье с помощью ботулинотерапии.",
      en: "Smoothing wrinkles on the forehead and between the eyebrows with botulinum therapy.",
      de: "Glättung von Falten auf der Stirn und zwischen den Augenbrauen mit Botulinumtherapie."
    },
    mainImage: "https://static.tildacdn.com/tild3138-3837-4861-a366-376532323332/b7b4d434-fa52-41df-9.jpg",
    imgArr: [
      {
        src: "https://altos-klinika.cz/wp-content/uploads/2021/11/26yp2HQaqpg.jpeg",
        title: {
          uk: "Природний вигляд",
          ru: "Естественный вид",
          en: "Natural Look",
          de: "Natürliches Aussehen"
        },
        description: {
          uk: "Ефект омолодження без втрати природної міміки.",
          ru: "Эффект омоложения без потери естественной мимики.",
          en: "Rejuvenating effect without losing natural facial expressions.",
          de: "Verjüngungseffekt ohne Verlust der natürlichen Mimik."
        }
      }
    ]
  },
  // Service 7: Trichologie (ID: service7) -> Subservice 29: Behandlung von Haarausfall
  {
    id: "photo8",
    serviceId: "service7",
    subserviceId: "subservice29",
    title: {
      uk: "До та після лікування алопеції",
      ru: "До и после лечения алопеции",
      en: "Before and After Alopecia Treatment",
      de: "Vorher-Nachher Alopezie-Behandlung"
    },
    description: {
      uk: "Зупинка випадіння волосся та стимуляція його росту після курсу лікування.",
      ru: "Остановка выпадения волос и стимуляция их роста после курса лечения.",
      en: "Stopping hair loss and stimulating its growth after a course of treatment.",
      de: "Stoppen des Haarausfalls und Stimulierung des Haarwuchses nach einer Behandlungskur."
    },
    mainImage: "https://static.tildacdn.com/tild3437-3538-4333-a164-653430363466/sq4NkoaxJG4.jpg",
    imgArr: [
      {
        src: "https://cidk.ru/wp-content/uploads/2021/08/fullsizerender-18.jpg",
        title: {
          uk: "Покращення густоти",
          ru: "Улучшение густоты",
          en: "Improved Density",
          de: "Verbesserte Haardichte"
        },
        description: {
          uk: "Фото показує збільшення густоти волосся на проблемних ділянках.",
          ru: "Фото показывает увеличение густоты волос на проблемных участках.",
          en: "The photo shows an increase in hair density in problem areas.",
          de: "Das Foto zeigt eine Zunahme der Haardichte in Problembereichen."
        }
      }
    ]
  },
  // Service 8: Mesotherapie (ID: service8) -> Subservice 31: Gesichtsmesotherapie
  {
    id: "photo9",
    serviceId: "service8",
    subserviceId: "subservice31",
    title: {
      uk: "До та після мезотерапії обличчя",
      ru: "До и после мезотерапии лица",
      en: "Before and After Facial Mesotherapy",
      de: "Vorher-Nachher Gesichtsmesotherapie"
    },
    description: {
      uk: "Результат мезотерапії для покращення тонусу шкіри, зволоження та зменшення дрібних зморшок.",
      ru: "Результат мезотерапии для улучшения тонуса кожи, увлажнения и уменьшения мелких морщин.",
      en: "The result of mesotherapy for improving skin tone, hydration, and reducing fine wrinkles.",
      de: "Das Ergebnis der Mesotherapie zur Verbesserung des Hauttons, der Feuchtigkeit und zur Reduzierung feiner Falten."
    },
    mainImage: "https://www.floris-sumy.com.ua/userfiles/image/MIzo.jpg",
    imgArr: [
      {
        src: "https://janvi.com.ua/wp-content/uploads/2019/12/1.1.1-999x1024.jpg",
        title: {
          uk: "Свіжий та сяючий вигляд",
          ru: "Свежий и сияющий вид",
          en: "Fresh and Radiant Look",
          de: "Frisches und strahlendes Aussehen"
        },
        description: {
          uk: "Шкіра виглядає відпочилою та здоровою.",
          ru: "Кожа выглядит отдохнувшей и здоровой.",
          en: "The skin looks rested and healthy.",
          de: "Die Haut sieht erholt und gesund aus."
        }
      }
    ]
  },

  {
    id: "photo00",
    serviceId: "service8",
    subserviceId: "subservice31",
    title: {
      uk: "До та після мезотерапії обличчя",
      ru: "До и после мезотерапии лица",
      en: "Before and After Facial Mesotherapy",
      de: "Vorher-Nachher Gesichtsmesotherapie"
    },
    description: {
      uk: "Результат мезотерапії для покращення тонусу шкіри, зволоження та зменшення дрібних зморшок.",
      ru: "Результат мезотерапии для улучшения тонуса кожи, увлажнения и уменьшения мелких морщин.",
      en: "The result of mesotherapy for improving skin tone, hydration, and reducing fine wrinkles.",
      de: "Das Ergebnis der Mesotherapie zur Verbesserung des Hauttons, der Feuchtigkeit und zur Reduzierung feiner Falten."
    },
    mainImage: "https://savanna.in.ua/wp-content/uploads/2019/03/injekciji-mezoterapija-oblychchya-pigmentaciya-salon-krasy-savanna.jpg",
    imgArr: [
      {
        src: "https://janvi.com.ua/wp-content/uploads/2019/12/1.1.1-999x1024.jpg",
        title: {
          uk: "Свіжий та сяючий вигляд",
          ru: "Свежий и сияющий вид",
          en: "Fresh and Radiant Look",
          de: "Frisches und strahlendes Aussehen"
        },
        description: {
          uk: "Шкіра виглядає відпочилою та здоровою.",
          ru: "Кожа выглядит отдохнувшей и здоровой.",
          en: "The skin looks rested and healthy.",
          de: "Die Haut sieht erholt und gesund aus."
        }
      }
    ]
  },


  // Service 9: Biorevitalisierung (ID: service9) -> Subservice 35: Gesichtsbiorevitalisierung
  {
    id: "photo10",
    serviceId: "service9",
    subserviceId: "subservice35",
    title: {
      uk: "До та після біоревіталізації",
      ru: "До и после биоревитализации",
      en: "Before and After Biorevitalization",
      de: "Vorher-Nachher Biorevitalisierung"
    },
    description: {
      uk: "Глибоке зволоження шкіри, повернення пружності та еластичності.",
      ru: "Глубокое увлажнение кожи, возвращение упругости и эластичности.",
      en: "Deep hydration of the skin, restoring firmness and elasticity.",
      de: "Tiefe Feuchtigkeitsversorgung der Haut, Wiederherstellung der Festigkeit und Elastizität."
    },
    mainImage: "https://age-clinic.ru/wp-content/uploads/2020/01/8ad42b7992b87a3920dd5c03ff475b73.jpg",
    imgArr: [
      {
        src: "https://medestetic.moscow/upload/resize_cache/webp/iblock/377/500_400_2/377324e9a0dc4ca57cd8fffcef11db24.webp",
        title: {
          uk: "Зменшення дрібних зморшок",
          ru: "Уменьшение мелких морщин",
          en: "Reduction of Fine Wrinkles",
          de: "Reduzierung feiner Falten"
        },
        description: {
          uk: "Фото демонструє розгладження поверхневих зморшок.",
          ru: "Фото демонстрирует разглаживание поверхностных морщин.",
          en: "The photo shows the smoothing of superficial wrinkles.",
          de: "Das Foto zeigt die Glättung oberflächlicher Falten."
        }
      }
    ]
  },
  // Service 10: Laser-Haarentfernung (ID: service10) -> Subservice 42: Laser-Haarentfernung für den Bikinibereich

  // Service 11: Laserentfernung von Dehnungsstreifen & Narben (ID: service11) -> Subservice 45: Entfernung von Dehnungsstreifen nach der Schwangerschaft
  {
    id: "photo12",
    serviceId: "service11",
    subserviceId: "subservice45",
    title: {
      uk: "До та після видалення розтяжок",
      ru: "До и после удаления растяжек",
      en: "Before and After Stretch Mark Removal",
      de: "Vorher-Nachher Entfernung von Dehnungsstreifen"
    },
    description: {
      uk: "Значне зменшення видимості розтяжок після вагітності.",
      ru: "Значительное уменьшение видимости растяжек после беременности.",
      en: "Significant reduction in the visibility of stretch marks after pregnancy.",
      de: "Deutliche Reduzierung der Sichtbarkeit von Dehnungsstreifen nach der Schwangerschaft."
    },
    mainImage: "https://absolutmed.ru/wp-content/uploads/2023/05/12c03a2a488347b151757f708f37a217.webp",
    imgArr: [
      {
        src: "https://www.moscow-beauty.com/upload/iblock/925/925a2e91f65fdd5dc554a505d92a8382.JPG",
        title: {
          uk: "Покращення текстури шкіри",
          ru: "Улучшение текстуры кожи",
          en: "Improved Skin Texture",
          de: "Verbesserte Hauttextur"
        },
        description: {
          uk: "Шкіра стає більш гладкою та однорідною.",
          ru: "Кожа становится более гладкой и однородной.",
          en: "The skin becomes smoother and more even.",
          de: "Die Haut wird glatter und gleichmäßiger."
        }
      }
    ]
  },
  // Service 12: Fraktionierte Verjüngung RESUR-FX (ID: service12) -> Subservice 47: Gesichtsverjüngung
  {
    id: "photo13",
    serviceId: "service12",
    subserviceId: "subservice47",
    title: {
      uk: "До та після фракційного омолодження",
      ru: "До и после фракционного омоложения",
      en: "Before and After Fractional Rejuvenation",
      de: "Vorher-Nachher Fraktionierte Verjüngung"
    },
    description: {
      uk: "Глибоке омолодження шкіри, що забезпечує ліфтинг та зменшення зморшок.",
      ru: "Глубокое омоложение кожи, обеспечивающее лифтинг и уменьшение морщин.",
      en: "Deep skin rejuvenation that provides lifting and wrinkle reduction.",
      de: "Tiefe Hautverjüngung, die Lifting und Faltenreduzierung bewirkt."
    },
    mainImage: "https://harmony-health.com.ua/wp-content/uploads/2021/11/624f0f607ace6963c8970dee6f2b7ace-e1638194719214.jpg",
    imgArr: [
      {
        src: "https://deva-clinique.com/wp-content/uploads/2021/07/deva-clinique-plastic-surgery-24-800x342.png",
        title: {
          uk: "Покращення тонусу",
          ru: "Улучшение тонуса",
          en: "Improved Skin Tone",
          de: "Verbesserter Hautton"
        },
        description: {
          uk: "Фото демонструє помітне підвищення пружності шкіри.",
          ru: "Фото демонстрирует заметное повышение упругости кожи.",
          en: "The photo shows a noticeable increase in skin firmness.",
          de: "Das Foto zeigt eine spürbare Zunahme der Hautfestigkeit."
        }
      }
    ]
  },
  // Service 13: Intime Kosmetik (ID: service13) -> Subservice 51: Intimes Peeling

  // Service 14: Plasmalifting (PRP-Therapie) (ID: service14) -> Subservice 57: Gesichts-Plasmalifting
  {
    id: "photo15",
    serviceId: "service14",
    subserviceId: "subservice57",
    title: {
      uk: "До та після плазмоліфтингу обличчя",
      ru: "До и после плазмолифтинга лица",
      en: "Before and After Facial Plasmalifting",
      de: "Vorher-Nachher Gesichts-Plasmalifting"
    },
    description: {
      uk: "Загальне омолодження шкіри, поліпшення її регенерації та пружності.",
      ru: "Общее омоложение кожи, улучшение ее регенерации и упругости.",
      en: "Overall skin rejuvenation, improving its regeneration and firmness.",
      de: "Allgemeine Hautverjüngung, Verbesserung der Regeneration und Festigkeit."
    },
    mainImage: "https://brennerclinic.com.ua/images/other/plazma2.jpg",
    imgArr: [
      {
        src: "https://lh3.googleusercontent.com/proxy/yyoJ_phJNd-o3WoIU22OSe-_SdxpZBIoOTg_QswCQacm3c4Dr8iAi0Mu-mVAhK6EWUCCLABrtzmY86RSUeK1R-LgA7I",
        title: {
          uk: "Сяючий вигляд",
          ru: "Сияющий вид",
          en: "Radiant Look",
          de: "Strahlendes Aussehen"
        },
        description: {
          uk: "Шкіра стає більш свіжою та сяючою завдяки активації клітин.",
          ru: "Кожа становится более свежей и сияющей благодаря активации клеток.",
          en: "The skin becomes fresher and more radiant due to cell activation.",
          de: "Die Haut wird durch Zellaktivierung frischer und strahlender."
        }
      }
    ]
  },
  // Service 15: Sklerotherapie (ID: service15) -> Subservice 61: Sklerotherapie für Besenreiser
  {
    id: "photo16",
    serviceId: "service15",
    subserviceId: "subservice61",
    title: {
      uk: "До та після склеротерапії",
      ru: "До и после склеротерапии",
      en: "Before and After Sclerotherapy",
      de: "Vorher-Nachher Sklerotherapie"
    },
    description: {
      uk: "Видалення судинних зірочок на ногах, повернення естетичного вигляду.",
      ru: "Удаление сосудистых звездочек на ногах, возвращение эстетического вида.",
      en: "Removal of spider veins on the legs, restoring an aesthetic appearance.",
      de: "Entfernung von Besenreisern an den Beinen, Wiederherstellung eines ästhetischen Erscheinungsbildes."
    },
    mainImage: "https://dobrota.ua/wp-content/uploads/st-4.jpeg",
    imgArr: [
      {
        src: "https://lh5.googleusercontent.com/proxy/Kb_z4SzWbU2ITvJ-Q8x2CQ_OD0g2VV3lWXp5zmJJgXLbI_K3BzOq0Eot91nHFqWOpHf-NZRU9MNGJk7IoSsjBlB2FkD_sU-8ZHeLLO40gly5-8waEy6koIgJnKAo",
        title: {
          uk: "Чисті ноги",
          ru: "Чистые ноги",
          en: "Clear Legs",
          de: "Klare Beine"
        },
        description: {
          uk: "Фото після повного курсу, демонструє значне зменшення судинних сіток.",
          ru: "Фото после полного курса, демонстрирует значительное уменьшение сосудистых сеток.",
          en: "Photo after a full course, showing a significant reduction in spider veins.",
          de: "Foto nach einem vollständigen Kurs, das eine deutliche Reduzierung der Besenreiser zeigt."
        }
      }
    ]
  },
  // Добавьте еще 4 элемента, чтобы было 20
  // Service 1: Entfernung von Hautwucherungen (ID: service1) -> Subservice 1: Warzenentfernung
  {
    id: "photo17",
    serviceId: "service1",
    subserviceId: "subservice1",
    title: {
      uk: "До та після видалення бородавки",
      ru: "До и после удаления бородавки",
      en: "Before and After Wart Removal",
      de: "Vorher-Nachher Warzenentfernung"
    },
    description: {
      uk: "Безболісне та ефективне видалення бородавки за допомогою лазерних технологій.",
      ru: "Безболезненное и эффективное удаление бородавки с помощью лазерных технологий.",
      en: "Painless and effective removal of a wart using laser technologies.",
      de: "Schmerzfreie und effektive Entfernung einer Warze mit Lasertechnologie."
    },
    mainImage: "https://likari.info/uploads/posts/2022-07/lazerne-vydalenya-borodavok.jpg",
    imgArr: [
      {
        src: "https://oksalmed.com/content/servicessub/127/udalenie-borodavki.webp",
        title: {
          uk: "Кінцевий результат без шрамів",
          ru: "Конечный результат без шрамов",
          en: "Final Result without Scars",
          de: "Endergebnis ohne Narben"
        },
        description: {
          uk: "Фото після загоєння, шкіра виглядає чистою та гладкою, без рубців.",
          ru: "Фото после заживления, кожа выглядит чистой и гладкой, без рубцов.",
          en: "Photo after healing, the skin looks clean and smooth, without scars.",
          de: "Foto nach der Heilung, die Haut sieht sauber und glatt aus, ohne Narben."
        }
      }
    ]
  },
  // Service 4: Konturplastik (ID: service4) -> Subservice 16: Wangenknochen-Konturkorrektur
  {
    id: "photo18",
    serviceId: "service4",
    subserviceId: "subservice16",
    title: {
      uk: "До та після корекції скул",
      ru: "До и после коррекции скул",
      en: "Before and After Cheekbone Contouring",
      de: "Vorher-Nachher Korrektur der Wangenknochen"
    },
    description: {
      uk: "Підкреслення природної краси обличчя, надання чіткості скулам за допомогою філерів.",
      ru: "Подчеркивание естественной красоты лица, придание четкости скулам с помощью филлеров.",
      en: "Highlighting the natural beauty of the face, giving definition to the cheekbones with fillers.",
      de: "Betonung der natürlichen Schönheit des Gesichts, Definition der Wangenknochen mit Fillern."
    },
    mainImage: "https://age-clinic.ru/wp-content/uploads/2020/08/102560476_999644190450299_8550134024117397471_n.jpg",
    imgArr: [
      {
        src: "https://renessanssamara.ru/wp-content/uploads/2019/12/korrekcziya-srednej-treti-licza.webp",
        title: {
          uk: "Гармонія пропорцій",
          ru: "Гармония пропорций",
          en: "Harmony of Proportions",
          de: "Harmonie der Proportionen"
        },
        description: {
          uk: "Фото демонструє, як процедура надає обличчю більш гармонійний та молодий вигляд.",
          ru: "Фото демонстрирует, как процедура придает лицу более гармоничный и молодой вид.",
          en: "The photo shows how the procedure gives the face a more harmonious and youthful look.",
          de: "Das Foto zeigt, wie der Eingriff dem Gesicht ein harmonischeres und jüngeres Aussehen verleiht."
        }
      }
    ]
  },
  // Service 5: IPL Shiny (ID: service5) -> Subservice 21: Akne-Therapie
  {
    id: "photo19",
    serviceId: "service5",
    subserviceId: "subservice21",
    title: {
      uk: "До та після терапії акне",
      ru: "До и после терапии акне",
      en: "Before and After Acne Therapy",
      de: "Vorher-Nachher Akne-Therapie"
    },
    description: {
      uk: "Зменшення запалень, почервонінь та висипань, запобігання появі нових елементів.",
      ru: "Уменьшение воспалений, покраснений и высыпаний, предотвращение появления новых элементов.",
      en: "Reduction of inflammation, redness, and breakouts, preventing the appearance of new elements.",
      de: "Reduzierung von Entzündungen, Rötungen und Hautunreinheiten, Verhinderung des Auftretens neuer Elemente."
    },
    mainImage: "https://vidnova.ua/wp-content/uploads/2023/10/Maket_01-4-scaled.jpg",
    imgArr: [
      {
        src: "https://slim.ua/images/lechenie-ugrevoj-bolezni-v-sliv.jpg",
        title: {
          uk: "Чиста та здорова шкіра",
          ru: "Чистая и здоровая кожа",
          en: "Clear and Healthy Skin",
          de: "Klare und gesunde Haut"
        },
        description: {
          uk: "Фото після курсу терапії, демонструє значне поліпшення стану шкіри.",
          ru: "Фото после курса терапии, демонстрирует значительное улучшение состояния кожи.",
          en: "Photo after a course of therapy, showing a significant improvement in the skin's condition.",
          de: "Foto nach einer Therapie, das eine deutliche Verbesserung des Hautzustands zeigt."
        }
      }
    ]
  },

  {
    id: "photo20",
    serviceId: "service11",
    subserviceId: "subservice43",
    title: {
      uk: "До та після видалення постакне",
      ru: "До и после удаления постакне",
      en: "Before and After Post-Acne Scar Removal",
      de: "Vorher-Nachher Entfernung von Post-Akne-Narben"
    },
    description: {
      uk: "Лазерне шліфування шкіри, що допомагає вирівняти рельєф та зменшити видимість рубців після акне.",
      ru: "Лазерная шлифовка кожи, которая помогает выровнять рельеф и уменьшить видимость рубцов после акне.",
      en: "Laser skin resurfacing that helps to even out the texture and reduce the visibility of post-acne scars.",
      de: "Laser-Hautstraffung, die hilft, die Textur auszugleichen und die Sichtbarkeit von Post-Akne-Narben zu reduzieren."
    },
    mainImage: "https://coolaser.clinic/wp-content/uploads/2019/11/000-86.jpg",
    imgArr: [
      {
        src: "https://picosure.com.ua/media/posts/5/ba-picosure-acne-scar-2.webp",
        title: {
          uk: "Гладка шкіра",
          ru: "Гладкая кожа",
          en: "Smooth Skin",
          de: "Glatte Haut"
        },
        description: {
          uk: "Фото після кількох сеансів, демонструє значне згладжування рубців.",
          ru: "Фото после нескольких сеансов, демонстрирует значительное сглаживание рубцов.",
          en: "Photo after several sessions, showing significant smoothing of the scars.",
          de: "Foto nach mehreren Sitzungen, das eine deutliche Glättung der Narben zeigt."
        }
      }
    ]
  }
];

export const generalInfo: GeneralInfo = {
  address: {
    uk: "Софіївська Борщагівка, вул. Академіка Шалімова 67В",
    ru: "Софиевская Борщаговка, ул. Академика Шалимова 67В",
    en: "Sofiivska Borshchahivka, Akademika Shalimova 67V",
    de: "Sofiivska Borshchahivka, Akademika Shalimova 67V"
  },
  phone: {
    uk: "+38(098)-622-35-05",
    ru: "+38(098)-622-35-05",
    en: "+38(098)-622-35-05",
    de: "+38(098)-622-35-05"
  },
  working_hours: [
    {
      days: [
        { uk: "Пн-Сб",
          ru: "Пн-Сб",
          en: "Mon-Sat",
          de: "Mo-Sa" }
      ],
      hours: "10:00 - 20:00"
    },
    /*{
      days: {
        uk: "Нд",
        ru: "Вс",
        en: "Sun",
        de: "So"
      },
      hours: "10:00 - 18:00"
    }*/
  ],
  email: "beseda.aesthetic.clinic@ukr.net",
  messengers: {
    telegram: "https://t.me/besedaclinic",
    viber: "viber://chat?number=%2B380986223505",
    whatsapp: "https://wa.me/380986223505"
  },
  socials: {
    instagram: "https://www.instagram.com/beseda_aesthetic_clinic",
    facebook: "#"
  },
  map: "<iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9307.558190835218!2d10.137663!3d54.323584!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b257006749bc5f%3A0x8f1b9e3b04ce89ed!2sAesthetic%20Face%20Beauty%20Salon!5e0!3m2!1sru!2sde!4v1758060486545!5m2!1sru!2sde\" class=\"w-full h-full min-h-[400px]\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe>"
};

