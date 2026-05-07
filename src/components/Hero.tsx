"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ShieldCheck, Leaf } from "lucide-react";
import { useLang } from "@/lib/i18n";

const WA_LINK = "https://wa.me/905558770407";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Sakura watermark — only on mobile / left panel */
function SakuraWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 600"
      className="absolute inset-0 w-full h-full text-[#1C1917] opacity-[0.04] pointer-events-none"
      fill="currentColor"
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform="translate(480 140) scale(2.4)">
        {[0,72,144,216,288].map(r => (
          <ellipse key={r} cx="0" cy="-70" rx="28" ry="62" transform={`rotate(${r})`} />
        ))}
        <circle r="18" />
      </g>
      <g transform="translate(80 460) scale(1.3) rotate(-20)">
        {[0,72,144,216,288].map(r => (
          <ellipse key={r} cx="0" cy="-70" rx="28" ry="62" transform={`rotate(${r})`} />
        ))}
        <circle r="18" />
      </g>
    </svg>
  );
}

const badges = [
  { Icon: Sparkles,   key: "badge1" as const },
  { Icon: ShieldCheck, key: "badge2" as const },
  { Icon: Leaf,       key: "badge3" as const },
];

/* Studio hero photo */
const HERO_PHOTO = "/hero.webp";

/* Fallback nail photos if hero.jpg not yet placed */
const heroPanelPhotos = [
  { src: "/gallery/nail-3.jpg", alt: "Altın inci tırnak sanatı" },
  { src: "/gallery/nail-1.jpg", alt: "Pembe koi balığı tırnak" },
  { src: "/gallery/nail-5.jpg", alt: "Bordo fransız tırnak" },
];

/* Studio photo panel — uses hero.jpg, falls back to 3 nail column */
function HeroPhotoPanel() {
  const [heroFailed, setHeroFailed] = useState(false);

  if (!heroFailed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={HERO_PHOTO}
        alt="Maystro Hair & Nail stüdyo içi"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={() => setHeroFailed(true)}
      />
    );
  }

  /* Fallback: 3-photo editorial column */
  return (
    <div className="absolute inset-0 flex flex-col gap-3 pt-4 pb-4 pr-4">
      {heroPanelPhotos.map((photo, i) => (
        <div
          key={photo.src}
          className={`relative flex-1 overflow-hidden rounded-2xl border border-[#1C1917]/8 ${
            i === 1 ? "ml-8" : i === 2 ? "ml-4" : ""
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1], delay },
  });

  return (
    <section className="relative min-h-screen flex overflow-hidden pt-24">

      {/* ── LEFT: text content ── */}
      <div className="relative flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-16 min-w-0">
        <SakuraWatermark />

        <div className="relative z-10 max-w-xl">
          <motion.p
            {...fadeUp(0)}
            className="text-[10px] tracking-[0.35em] text-[#78716C] uppercase mb-6"
          >
            Lara · Antalya
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#1C1917] leading-[1.05] tracking-tight mb-6"
          >
            {t.hero.headline}
          </motion.h1>

          <motion.div {...fadeUp(0.18)} className="w-10 h-px bg-[#1C1917]/25 mb-6" />

          <motion.p
            {...fadeUp(0.22)}
            className="text-base md:text-lg text-[#78716C] font-light leading-relaxed mb-9 max-w-md"
          >
            {t.hero.sub}
          </motion.p>

          <motion.a
            {...fadeUp(0.32)}
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#1C1917] text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-[#44403C] transition-colors duration-200 cursor-pointer"
          >
            <WhatsAppIcon />
            {t.hero.cta}
          </motion.a>

          {/* Trust badges */}
          <motion.div
            {...fadeUp(0.42)}
            className="flex flex-wrap gap-5 mt-12"
          >
            {badges.map(({ Icon, key }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-[#1C1917]/12 flex items-center justify-center bg-[#1C1917]/3">
                  <Icon size={12} className="text-[#78716C]" aria-hidden="true" />
                </span>
                <span className="text-xs text-[#78716C]">{t.hero[key]}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block">
          <div className="w-px h-10 bg-gradient-to-b from-[#1C1917]/20 to-transparent" />
        </div>
      </div>

      {/* ── RIGHT: studio photo (hidden on mobile) ── */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="hidden lg:block relative w-[420px] xl:w-[480px] flex-shrink-0"
      >
        <HeroPhotoPanel />
        {/* Soft left-edge bleed into bg */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#F2EFE6] to-transparent pointer-events-none z-10" />
      </motion.div>

    </section>
  );
}
