import { ref, set, push } from "firebase/database";
import { db } from "./firebase";
import type {Blog} from "./models/Blog.ts";


export const itInterviewBlog: Omit<Blog, "id"> = {
  slug: "how-to-learn-english-with-netflix",
  mainImage: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070", // Атмосферное фото кинозала/экрана

  title: {
    en: "Binge-Watching with Benefit: Movies as Teachers",
    ru: "Смотри и учись: как превратить Netflix в репетитора",
    uk: "Дивись та вчись: як перетворити Netflix на репетитора",
    de: "Binge-Watching mit Nutzen: Filme als Lehrer"
  },

  subtitle: {
    en: "Stop using subtitles and start understanding real native speech",
    ru: "Хватит читать субтитры — начни понимать живую речь",
    uk: "Досить читати субтитри — почни розуміти живу мову",
    de: "Hören Sie auf, Untertitel zu lesen, und verstehen Sie echte Sprache"
  },

  headerTitle: {
    en: "Lifestyle Learning",
    ru: "Обучение как стиль жизни",
    uk: "Навчання як стиль життя",
    de: "Lifestyle-Lernen"
  },

  services: [],
  employees: [],

  content: [
    // 1. Heading (Center)
    {
      type: "heading",
      align: "center",
      content: {
        en: "The Subtitle Trap",
        ru: "Ловушка субтитров",
        uk: "Пастка субтитрів",
        de: "Die Untertitel-Falle"
      }
    },
    // 2. Paragraph (Left)
    {
      type: "paragraph",
      align: "left",
      content: {
        en: "When you watch with subtitles in your native language, your brain turns off the ears and turns on the eyes. You aren't learning English; you are just reading a book with moving pictures.",
        ru: "Когда вы смотрите с субтитрами на родном языке, ваш мозг отключает уши и включает глаза. Вы не учите английский — вы просто читаете книгу с движущимися картинками.",
        uk: "Коли ви дивитеся з субтитрами рідною мовою, ваш мозок вимикає вуха і вмикає очі. Ви не вчите англійську — ви просто читаєте книгу з рухомими картинками.",
        de: "Wenn Sie mit Untertiteln in Ihrer Muttersprache schauen, schaltet Ihr Gehirn die Ohren aus."
      }
    },
    // 3. Image (Left) - Попкорн или уютный просмотр
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1524712245354-2c4e5e7124c5?q=80&w=1932",
      align: "left",
      children: [
        {
          type: "heading",
          align: "left",
          content: { en: "The 3-Step Strategy", ru: "Стратегия 3-х шагов", uk: "Стратегія 3-х кроків", de: "Die 3-Schritte-Strategie" }
        },
        {
          type: "list",
          align: "left",
          content: {
            en: [
              "Watch a 5-minute scene with English subs",
              "Rewatch the same scene WITHOUT subs",
              "Shadowing: Repeat the lines after the actor",
              "Write down 3 useful phrases (not single words)"
            ],
            ru: [
              "Посмотрите 5-минутную сцену с англ. субтитрами",
              "Пересмотрите ту же сцену БЕЗ субтитров",
              "Shadowing: повторяйте реплики за актером",
              "Выпишите 3 полезные фразы (не отдельные слова)"
            ],
            uk: [
              "Подивіться 5-хвилинну сцену з англ. субтитрами",
              "Перегляньте ту саму сцену БЕЗ субтитрів",
              "Shadowing: повторюйте репліки за актором",
              "Випишіть 3 корисні фрази (не окремі слова)"
            ],
            de: [
              "Szene mit englischen Untertiteln schauen",
              "Gleiche Szene OHNE Untertitel schauen",
              "Shadowing-Technik anwenden",
              "3 nützliche Phrasen aufschreiben"
            ]
          }
        }
      ]
    },
    // 4. Heading (Center)
    {
      type: "heading",
      align: "center",
      content: {
        en: "What to Watch First?",
        ru: "Что посмотреть в первую очередь?",
        uk: "Що подивитися насамперед?",
        de: "Was sollte man zuerst schauen?"
      }
    },
    // 5. Paragraph (Center)
    {
      type: "paragraph",
      align: "center",
      content: {
        en: "Start with sitcoms like 'Friends' or 'The Office'. The vocabulary is daily, the articulation is clear, and the jokes help you understand cultural context.",
        ru: "Начните с ситкомов, таких как «Друзья» или «Офис». Там повседневная лексика, четкая дикция, а шутки помогают понять культурный контекст.",
        uk: "Почніть із ситкомів, таких як «Друзі» або «Офіс». Там повсякденна лексика, чітка дикція, а жарти допомагають зрозуміти культурний контекст.",
        de: "Beginnen Sie mit Sitcoms wie 'Friends' oder 'The Office'."
      }
    },
    // 6. Image (Center) - Красивый кадр с камерой или пленкой
    {
      type: "image",
      media: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059",
      align: "center",
    }
  ]
};

export async function uploadBlog() {
  const businessSlug = "LinguoFlow";
  try {
    const blogRef = ref(db, `businesses/${businessSlug}/blogs`);
    const newBlogRef = push(blogRef);
    if (!newBlogRef.key) return;

    await set(newBlogRef, {
      ...itInterviewBlog,
      id: newBlogRef.key,
      updatedAt: Date.now()
    });
    console.log(`✅ Blog post "IT Interview" uploaded!`);
  } catch (err) {
    console.error("❌ Error uploading blog:", err);
  }
}


uploadBlog()
