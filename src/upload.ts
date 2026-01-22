import { ref, set } from "firebase/database";
import { db } from "./firebase";

// Данные нашего нового бизнеса (Клининг)
export const businessData = {
  slug: "clean-and-glow", // Это будет ключом в БД
  meta: {
    name: {
      uk: "Clean & Glow — Професійний клінінг",
      ru: "Clean & Glow — Профессиональный клининг",
      en: "Clean & Glow — Professional Cleaning",
      de: "Clean & Glow — Professionelle Reinigung"
    },
    shortName: {
      uk: "Clean & Glow",
      ru: "Clean & Glow",
      en: "Clean & Glow",
      de: "Clean & Glow"
    },
    type: "company",
    slogan: {
      uk: "Ми миємо — ви відпочиваєте",
      ru: "Мы моем — вы отдыхаете",
      en: "We clean — you relax",
      de: "Wir reinigen — Sie entspannen sich"
    },
    description: {
      uk: "Професійне прибирання квартир, будинків та офісів за допомогою еко-засобів.",
      ru: "Профессиональная уборка квартир, домов и офисов при помощи эко-средств.",
      en: "Professional cleaning of apartments, houses, and offices using eco-friendly products.",
      de: "Professionelle Reinigung von Wohnungen und Büros mit umweltfreundlichen Mitteln."
    },
    logo: "https://example.com/logo-cleaning.png",
    // Сразу создаем вкладки, чтобы они подтянулись в админку
    tabs: {
      "about": { route: "about", order: 0, enabled: true, shortName: { uk: "Про нас", ru: "О нас", en: "About", de: "Über uns" } },
      "services": { route: "services", order: 1, enabled: true, shortName: { uk: "Послуги", ru: "Услуги", en: "Services", de: "Dienstleistungen" } },
      "price": { route: "price", order: 2, enabled: true, shortName: { uk: "Ціни", ru: "Цены", en: "Prices", de: "Preise" } },
      "contact": { route: "contact", order: 3, enabled: true, shortName: { uk: "Контакти", ru: "Контакты", en: "Contact", de: "Kontakt" } }
    }
  },
  generalInfo: {
    address: {
      uk: "Київ, вул. Велика Васильківська, 72",
      ru: "Киев, ул. Большая Васильковская, 72",
      en: "72 Velyka Vasylkivska St, Kyiv",
      de: "Velyka Vasylkivska Str. 72, Kiew"
    },
    phone: {
      uk: "+38 (050) 111-22-33",
      ru: "+38 (050) 111-22-33",
      en: "+38 (050) 111-22-33",
      de: "+38 (050) 111-22-33"
    },
    email: "info@clean-glow.com",
    working_hours: [
      {
        days: { uk: "Пн-Пт", ru: "Пн-Пт", en: "Mon-Fri", de: "Mo-Fr" },
        hours: "08:00 - 21:00"
      }
    ],
    messengers: {
      telegram: "@clean_glow_bot",
      whatsapp: "+380501112233"
    },
    socials: {
      instagram: "@clean.glow.kyiv",
      facebook: "clean.glow.ukraine"
    },
    map: "50.4316, 30.5164"
  }
};

export async function uploadBusiness() {
  try {
    // Маршрут: businesses / [slug]
    // Мы не используем push(), чтобы слаг был читаемым ключом (например, "clean-and-glow")
    const businessRef = ref(db, `businesses/${businessData.slug}`);

    await set(businessRef, businessData);

    console.log(`✅ Business "${businessData.slug}" uploaded successfully!`);
  } catch (err) {
    console.error("❌ Error uploading business:", err);
  }
}

// Вызов функции
