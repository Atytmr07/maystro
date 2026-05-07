"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const staff = [
  {
    name: "Melih Taşdemir",
    role: "Kuaför & Saç Tasarımcısı",
    initials: "MT",
    from: "#C9C0B4",
    to: "#8A7D6F",
  },
  {
    name: "Ayda Safi",
    role: "Manikür & Pedikür Uzmanı",
    initials: "AS",
    from: "#D4C5BE",
    to: "#9E8078",
  },
  {
    name: "Elina Halil",
    role: "İpek Kirpik Uzmanı",
    initials: "EH",
    from: "#C8C4B0",
    to: "#8E8A6C",
  },
  {
    name: "Meryem Selimi",
    role: "Kaş & Kirpik Uzmanı",
    initials: "MS",
    from: "#C0C8C4",
    to: "#708078",
  },
  {
    name: "Yakup Serdar Bahadır",
    role: "Kuaför & Stil Uzmanı",
    initials: "YB",
    from: "#BEC4CC",
    to: "#6E7880",
  },
];

export function TheMaestros() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  return (
    <section className="py-24 md:py-32 px-6 bg-[#EAE5DA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#78716C] uppercase mb-4">Studio</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917]">{t.team.title}</h2>
          <p className="mt-4 text-sm text-[#78716C]">{t.team.sub}</p>
        </div>

        {/* Cards grid: 2 → 3 → 5 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {staff.map((person, i) => (
            <motion.div
              key={person.name}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.06 }}
              /* last card centred on 2-col mobile grid */
              className={i === 4 ? "col-span-2 sm:col-span-1" : ""}
            >
              <div className="group cursor-default">
                {/* Portrait */}
                <div
                  className="relative aspect-[3/4] rounded-xl overflow-hidden mb-4 border border-[#1C1917]/8 transition-all duration-500 group-hover:border-[#1C1917]/20"
                  style={{
                    background: `linear-gradient(160deg, ${person.from}, ${person.to})`,
                    filter: "grayscale(0%)",
                  }}
                >
                  {/* Inner portrait grad overlay — desaturates on hover */}
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      background: `linear-gradient(160deg, ${person.from}, ${person.to})`,
                    }}
                  />
                  {/* Greyscale overlay on hover */}
                  <div className="absolute inset-0 bg-[#A09080] opacity-0 group-hover:opacity-100 mix-blend-saturation transition-opacity duration-500 pointer-events-none" />

                  {/* Initials */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-serif text-4xl font-semibold text-white/80 select-none"
                      aria-hidden="true"
                    >
                      {person.initials}
                    </span>
                  </div>

                  {/* Bottom vignette */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Name & role */}
                <p className="font-serif text-sm font-medium text-[#1C1917] leading-snug">
                  {person.name}
                </p>
                <p className="text-xs text-[#78716C] mt-1 leading-relaxed">{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
