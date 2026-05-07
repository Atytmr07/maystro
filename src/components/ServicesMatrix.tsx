"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Scissors, Sparkles, Eye, ArrowUp } from "lucide-react";
import { useLang } from "@/lib/i18n";

const categoryIcons = [Scissors, Sparkles, Eye, ArrowUp];

/* Subtle sakura watermark for this section */
function SectionSakura() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 400"
      className="absolute -right-16 -top-16 w-72 h-72 text-[#1C1917] opacity-[0.03] pointer-events-none"
      fill="currentColor"
    >
      <g transform="translate(200 200) scale(1.6)">
        <ellipse cx="0" cy="-70" rx="28" ry="62" />
        <ellipse cx="0" cy="-70" rx="28" ry="62" transform="rotate(72)" />
        <ellipse cx="0" cy="-70" rx="28" ry="62" transform="rotate(144)" />
        <ellipse cx="0" cy="-70" rx="28" ry="62" transform="rotate(216)" />
        <ellipse cx="0" cy="-70" rx="28" ry="62" transform="rotate(288)" />
        <circle r="18" />
      </g>
    </svg>
  );
}

/* Bento layout:
   Desktop 3-col:
   [ cat1 (col-span-2) | cat2 (col-span-1) ]
   [ cat3 (col-span-1) | cat4 (col-span-2) ]
*/
const gridSpans = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

const cardAccents = [
  "bg-[#E8E3D8]", // warm stone — Hair
  "bg-[#F2EFE6]", // cream — Nail
  "bg-[#F2EFE6]", // cream — Lashes
  "bg-[#E8E3D8]", // warm stone — Lifting
];

export function ServicesMatrix() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  const cats = [t.services.cat1, t.services.cat2, t.services.cat3, t.services.cat4];

  return (
    <section id="hizmetler" className="relative py-24 md:py-32 px-6 overflow-hidden">
      <SectionSakura />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-16 max-w-xl">
          <p className="text-[10px] tracking-[0.35em] text-[#78716C] uppercase mb-4">
            {t.nav.services}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917] leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-sm text-[#78716C] leading-relaxed">{t.services.sub}</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cats.map((cat, i) => {
            const Icon = categoryIcons[i];
            return (
              <motion.article
                key={i}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                className={`${gridSpans[i]} ${cardAccents[i]} border border-[#1C1917]/10 rounded-2xl p-8 flex flex-col gap-6 group hover:border-[#1C1917]/25 transition-colors duration-300`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.3em] text-[#78716C] uppercase mb-2">
                      {cat.tag}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-[#1C1917]">{cat.name}</h3>
                  </div>
                  <span className="w-9 h-9 rounded-full border border-[#1C1917]/12 flex items-center justify-center bg-white/60 flex-shrink-0 group-hover:bg-[#1C1917] group-hover:border-[#1C1917] transition-all duration-300">
                    <Icon
                      size={14}
                      className="text-[#78716C] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-[#1C1917]/15" />

                {/* Service items */}
                <ul className="space-y-2.5 flex-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#78716C]">
                      <span
                        className="w-1 h-1 rounded-full bg-[#1C1917]/30 flex-shrink-0"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
