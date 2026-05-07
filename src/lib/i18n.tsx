"use client";

import { createContext, useContext, useState, useEffect } from "react";

export type Lang = "TR" | "EN" | "RU";

const translations = {
  TR: {
    nav: {
      services: "Hizmetler",
      gallery: "Galeri",
      contact: "İletişim",
      cta: "Randevu Al",
    },
    hero: {
      headline: "Güzelliğin Doğal Senfonisi.",
      sub: "Lara'nın kalbinde; saçtan tırnağa, ipek kirpikten kusursuz bakıma uzanan premium bir deneyim.",
      cta: "WhatsApp'tan Randevu Al",
      badge1: "Profesyonel",
      badge2: "Hijyenik",
      badge3: "Kaliteli Hizmet",
    },
    services: {
      title: "Hizmetlerimiz",
      sub: "Her ayrıntı, sizin için özenle tasarlandı.",
      cat1: {
        name: "Kuaför & Saç Tasarımı",
        tag: "Парикмахерская / Hair",
        items: ["Kesim & Şekillendirme", "Renklendirme & Röfle", "Keratin Bakımı", "Saç Tedavileri", "Kaynak & Uzatma"],
      },
      cat2: {
        name: "Manikür & Pedikür",
        tag: "Маникюр / Nail",
        items: ["Klasik Manikür", "Jel Tırnak", "Tırnak Tasarımı", "Fransız Manikür", "Spa Pedikür"],
      },
      cat3: {
        name: "İpek Kirpik",
        tag: "Silk Lashes",
        items: ["Klasik Set", "Hacimli Set", "Mega Volüm", "Kirpik Dolumu"],
      },
      cat4: {
        name: "Kaş / Kirpik Lifting",
        tag: "Brow & Lash",
        items: ["Kaş Lifting", "Kirpik Lifting", "Laminasyon", "Kaş Tasarımı"],
      },
    },
    gallery: {
      title: "Çalışmalarımızdan",
      more: "Daha fazlası için Instagram",
    },
    location: {
      title: "Bizi Ziyaret Edin",
      sub: "Lara, Muratpaşa / Antalya",
      hours: "Pzt–Cmt 09:00 – 21:00",
      closed: "Pazar Kapalı",
      directions: "Yol Tarifi Al",
    },
    testimonials: {
      title: "Müşterilerimiz Ne Diyor?",
      sub: "Gerçek deneyimler, gerçek sonuçlar.",
    },
    team: {
      title: "Maestrolarımız",
      sub: "Her biri kendi alanının ustası.",
    },
    footer: {
      hours: "Pzt–Cmt 09:00 – 21:00 · Pazar Kapalı",
      address: "1968. Sk. 14B, 07160 Lara, Muratpaşa / Antalya",
      rights: "Tüm hakları saklıdır.",
    },
  },
  EN: {
    nav: {
      services: "Services",
      gallery: "Gallery",
      contact: "Contact",
      cta: "Book Now",
    },
    hero: {
      headline: "The Natural Symphony of Beauty.",
      sub: "In the heart of Lara; a premium experience spanning hair to nails, silk lashes to flawless care.",
      cta: "Book via WhatsApp",
      badge1: "Professional",
      badge2: "Hygienic",
      badge3: "Quality Service",
    },
    services: {
      title: "Our Services",
      sub: "Every detail, thoughtfully crafted for you.",
      cat1: {
        name: "Hair & Design",
        tag: "Парикмахерская / Hair",
        items: ["Cut & Style", "Color & Highlights", "Keratin Treatment", "Hair Therapies", "Extensions"],
      },
      cat2: {
        name: "Manicure & Pedicure",
        tag: "Маникюр / Nail",
        items: ["Classic Manicure", "Gel Nails", "Nail Art", "French Manicure", "Spa Pedicure"],
      },
      cat3: {
        name: "Silk Lashes",
        tag: "Silk Lashes",
        items: ["Classic Set", "Volume Set", "Mega Volume", "Lash Refill"],
      },
      cat4: {
        name: "Brow / Lash Lifting",
        tag: "Brow & Lash",
        items: ["Brow Lift", "Lash Lift", "Lamination", "Brow Design"],
      },
    },
    gallery: {
      title: "Our Work",
      more: "More on Instagram",
    },
    location: {
      title: "Visit Us",
      sub: "Lara, Muratpaşa / Antalya",
      hours: "Mon–Sat 09:00 – 21:00",
      closed: "Sunday Closed",
      directions: "Get Directions",
    },
    testimonials: {
      title: "What Our Clients Say",
      sub: "Real experiences, real results.",
    },
    team: {
      title: "The Maestros",
      sub: "Masters of their craft.",
    },
    footer: {
      hours: "Mon–Sat 09:00 – 21:00 · Sunday Closed",
      address: "1968. Sk. 14B, 07160 Lara, Muratpaşa / Antalya",
      rights: "All rights reserved.",
    },
  },
  RU: {
    nav: {
      services: "Услуги",
      gallery: "Галерея",
      contact: "Контакты",
      cta: "Записаться",
    },
    hero: {
      headline: "Природная Симфония Красоты.",
      sub: "В сердце Лары; премиум-опыт от волос до ногтей, шёлковых ресниц до безупречного ухода.",
      cta: "Записаться через WhatsApp",
      badge1: "Профессионально",
      badge2: "Гигиенично",
      badge3: "Качественный Сервис",
    },
    services: {
      title: "Наши Услуги",
      sub: "Каждая деталь создана с заботой о вас.",
      cat1: {
        name: "Парикмахерская",
        tag: "Парикмахерская / Hair",
        items: ["Стрижка & Укладка", "Окрашивание & Мелирование", "Кератин", "Уход за волосами", "Наращивание"],
      },
      cat2: {
        name: "Маникюр & Педикюр",
        tag: "Маникюр / Nail",
        items: ["Классический маникюр", "Гель-лак", "Дизайн ногтей", "Французский маникюр", "Спа-педикюр"],
      },
      cat3: {
        name: "Шёлковые Ресницы",
        tag: "Silk Lashes",
        items: ["Классика", "Объём", "Мега объём", "Коррекция"],
      },
      cat4: {
        name: "Лифтинг бровей / ресниц",
        tag: "Brow & Lash",
        items: ["Лифтинг бровей", "Лифтинг ресниц", "Ламинирование", "Дизайн бровей"],
      },
    },
    gallery: {
      title: "Наши Работы",
      more: "Больше в Instagram",
    },
    location: {
      title: "Посетите нас",
      sub: "Лара, Муратпаша / Анталья",
      hours: "Пн–Сб 09:00 – 21:00",
      closed: "Воскресенье закрыто",
      directions: "Проложить маршрут",
    },
    testimonials: {
      title: "Отзывы наших клиентов",
      sub: "Реальный опыт, реальные результаты.",
    },
    team: {
      title: "Мастера",
      sub: "Каждый — профессионал своего дела.",
    },
    footer: {
      hours: "Пн–Сб 09:00 – 21:00 · Воскресенье закрыто",
      address: "1968. Sk. 14B, 07160 Лара, Муратпаша / Анталья",
      rights: "Все права защищены.",
    },
  },
} as const;

type Translations = typeof translations.TR;

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "TR",
  setLang: () => {},
  t: translations.TR,
});

const VALID_LANGS: Lang[] = ["TR", "EN", "RU"];

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("TR");

  useEffect(() => {
    // 1. Prefer saved user preference
    const saved = localStorage.getItem("maystro-lang") as Lang | null;
    if (saved && VALID_LANGS.includes(saved)) {
      setLangState(saved);
      return;
    }
    // 2. Auto-detect from browser
    const nav = navigator.language.toLowerCase();
    if (nav.startsWith("ru")) setLangState("RU");
    else if (nav.startsWith("en")) setLangState("EN");
    // else keep TR default
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem("maystro-lang", l);
    setLangState(l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] as Translations }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
