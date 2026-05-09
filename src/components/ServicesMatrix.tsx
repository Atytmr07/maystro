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
      className="absolute -right-16 -top-16 w-72 h-72 text-[#3A1F1A] opacity-[0.03] pointer-events-none"
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
  "bg-[#F5D5C5]", // warm stone — Hair
  "bg-[#FFF5F0]", // cream — Nail
  "bg-[#FFF5F0]", // cream — Lashes
  "bg-[#F5D5C5]", // warm stone — Lifting
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
          <p className="text-[10px] tracking-[0.35em] text-[#9B7B72] uppercase mb-4">
            {t.nav.services}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3A1F1A] leading-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-sm text-[#9B7B72] leading-relaxed">{t.services.sub}</p>
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
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as any, delay: i * 0.07 }}
                className={`${gridSpans[i]} ${cardAccents[i]} border border-[#3A1F1A]/10 rounded-2xl p-8 flex flex-col gap-6 group hover:border-[#3A1F1A]/25 transition-colors duration-300`}
              >
                {/* Card header */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[9px] tracking-[0.3em] text-[#9B7B72] uppercase mb-2">
                      {cat.tag}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl text-[#3A1F1A]">{cat.name}</h3>
                  </div>
                  <span className="w-9 h-9 rounded-full border border-[#3A1F1A]/12 flex items-center justify-center bg-white/60 flex-shrink-0 group-hover:bg-[#3A1F1A] group-hover:border-[#3A1F1A] transition-all duration-300">
                    <Icon
                      size={14}
                      className="text-[#9B7B72] group-hover:text-white transition-colors duration-300"
                      aria-hidden="true"
                    />
                  </span>
                </div>

                {/* Divider */}
                <div className="w-8 h-px bg-[#3A1F1A]/15" />

                {/* Service items */}
                <ul className="space-y-2.5 flex-1">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-[#9B7B72]">
                      <span
                        className="w-1 h-1 rounded-full bg-[#3A1F1A]/30 flex-shrink-0"
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
