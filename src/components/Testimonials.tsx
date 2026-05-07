"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const reviews = [
  {
    name: "Ayşe K.",
    location: "Lara, Antalya",
    service: "Manikür & Tırnak Tasarımı",
    text: "Altın opal tırnak tasarımı için geldim, sonuçtan inanılmaz memnun kaldım. Ekip çok profesyonel, hijyene son derece dikkat ediyorlar. Arkadaşlarıma da önerdim, hepsi harika yorumlar yaptı.",
    lang: "TR",
  },
  {
    name: "Наташа В.",
    location: "Анталья",
    service: "İpek Kirpik",
    text: "Отличный салон в Ларе! Ресницы сделали просто идеально — объёмный сет держится уже три недели. Персонал очень внимательный и профессиональный. Обязательно вернусь снова!",
    lang: "RU",
  },
  {
    name: "Emma L.",
    location: "Antalya · UK Expat",
    service: "Gel Nails & Lash Lift",
    text: "The best beauty studio in Antalya, hands down. I've been coming here for six months and the quality never drops. The team is professional, the studio is immaculate and the results are stunning every time.",
    lang: "EN",
  },
  {
    name: "Fatma D.",
    location: "Muratpaşa",
    service: "Kirpik Lifting",
    text: "Kirpik lifting yaptırdım ve sonuç gerçekten inanılmaz. Sabahları hiç maskara sürmeden çıkabiliyorum artık. Randevu almak da çok kolay, WhatsApp'tan anında yanıt veriyorlar.",
    lang: "TR",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-4" aria-label="5 yıldız">
      {[...Array(5)].map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="w-4 h-4 fill-[#CA8A04]" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 bg-[#EAE5DA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[10px] tracking-[0.35em] text-[#78716C] uppercase mb-4">Reviews</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917]">
            {t.testimonials.title}
          </h2>
          <p className="mt-4 text-sm text-[#78716C]">{t.testimonials.sub}</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as any, delay: i * 0.07 }}
              className="bg-[#F2EFE6] border border-[#1C1917]/8 rounded-2xl p-7 flex flex-col gap-4"
            >
              <Stars />

              {/* Quote */}
              <p className="text-sm text-[#44403C] leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#1C1917]/15" />

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#1C1917]">{review.name}</p>
                  <p className="text-xs text-[#78716C] mt-0.5">{review.location}</p>
                </div>
                <span className="text-[10px] tracking-wide text-[#78716C] border border-[#1C1917]/15 rounded-full px-3 py-1">
                  {review.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
