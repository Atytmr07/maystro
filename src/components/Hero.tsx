"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, ShieldCheck, Leaf, Star, ArrowUpRight } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const WA_LINK = "https://wa.me/905558770407";
const HERO_PHOTO = "/hero.webp";
const FALLBACK_PHOTOS = [
  { src: "/gallery/nail-3.jpg", alt: "Altın inci tırnak sanatı" },
  { src: "/gallery/nail-1.jpg", alt: "Pembe koi balığı tırnak" },
  { src: "/gallery/nail-5.jpg", alt: "Bordo fransız tırnak" },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* Large decorative arc — faint salmon behind text */
function DecoArc() {
  return (
    <svg
      aria-hidden="true"
      className="absolute -top-48 -right-48 w-[800px] h-[800px] pointer-events-none"
      viewBox="0 0 800 800"
      fill="none"
    >
      <circle cx="680" cy="120" r="420" stroke="#E8896E" strokeWidth="140" opacity="0.055" />
      <circle cx="680" cy="120" r="280" stroke="#E8896E" strokeWidth="2" opacity="0.12" />
    </svg>
  );
}

/* Small floating dots pattern */
function DotGrid() {
  return (
    <svg
      aria-hidden="true"
      className="absolute bottom-20 left-0 w-40 h-40 pointer-events-none opacity-[0.07]"
      viewBox="0 0 160 160"
    >
      {[0,1,2,3,4].map(row =>
        [0,1,2,3,4].map(col => (
          <circle key={`${row}-${col}`} cx={col * 32 + 8} cy={row * 32 + 8} r="2.5" fill="#E8896E" />
        ))
      )}
    </svg>
  );
}

/* Floating availability chip */
function AvailabilityChip({ shouldReduce }: { shouldReduce: boolean | null }) {
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 1.0, ease: [0.22, 1, 0.36, 1] as any }}
      className="absolute top-8 right-8 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-[0_8px_36px_rgba(58,31,26,0.14)] border border-white/70"
    >
      <div className="flex items-center gap-2">
        <span className="relative w-2 h-2 flex-shrink-0">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
          <span className="relative block w-2 h-2 rounded-full bg-emerald-400" />
        </span>
        <span className="text-xs font-bold text-[#3A1F1A] whitespace-nowrap tracking-wide">
          Randevu Mevcut
        </span>
      </div>
      <p className="text-[10px] text-[#9B7B72] mt-1 pl-4 tracking-wide">WhatsApp · Anında yanıt</p>
    </motion.div>
  );
}

/* Floating rating card */
function RatingCard({ shouldReduce }: { shouldReduce: boolean | null }) {
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 14, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay: 1.25, ease: [0.22, 1, 0.36, 1] as any }}
      className="absolute bottom-8 left-8 z-20 bg-[#3A1F1A]/92 backdrop-blur-md text-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(58,31,26,0.30)]"
    >
      <div className="flex items-center gap-1 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={10} className="fill-[#D4A574] text-[#D4A574]" aria-hidden="true" />
        ))}
      </div>
      <p className="text-base font-bold font-serif">4.9 / 5.0</p>
      <p className="text-[10px] text-white/55 mt-0.5 tracking-wide">200+ değerlendirme</p>
    </motion.div>
  );
}

/* Studio photo panel */
function HeroPhotoPanel({ shouldReduce }: { shouldReduce: boolean | null }) {
  const [heroFailed, setHeroFailed] = useState(false);

  return (
    <>
      {!heroFailed ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={HERO_PHOTO}
          alt="Maystro Hair & Nail stüdyo içi"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={() => setHeroFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col gap-3 pt-4 pb-4 pr-4">
          {FALLBACK_PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              className={`relative flex-1 overflow-hidden rounded-2xl border border-[#3A1F1A]/8 ${
                i === 1 ? "ml-8" : i === 2 ? "ml-4" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#3A1F1A]/30 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#FFF5F0] to-transparent pointer-events-none z-10" />

      {/* Salmon accent top stripe */}
      <div className="absolute top-0 left-24 right-0 h-1 bg-gradient-to-r from-[#E8896E] to-[#C44536] z-10" />

      <AvailabilityChip shouldReduce={shouldReduce} />
      <RatingCard shouldReduce={shouldReduce} />
    </>
  );
}

/* Mobile nail strip — 3 photos horizontal, visible on small screens */
function MobilePhotoStrip({ shouldReduce }: { shouldReduce: boolean | null }) {
  return (
    <motion.div
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] as any }}
      className="lg:hidden flex gap-3 mt-10 mb-2 overflow-hidden"
    >
      {FALLBACK_PHOTOS.map((photo, i) => (
        <div
          key={photo.src}
          className={`relative flex-1 overflow-hidden rounded-2xl border border-[#3A1F1A]/8 ${
            i === 1 ? "mt-4" : ""
          }`}
          style={{ aspectRatio: "3/4" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ))}
    </motion.div>
  );
}

const statItems: { value: string; label: Record<Lang, string> }[] = [
  { value: "500+", label: { TR: "Mutlu Müşteri", EN: "Happy Clients",  RU: "Клиентов"  } },
  { value: "4",   label: { TR: "Uzman",          EN: "Experts",        RU: "Мастеров"  } },
  { value: "6+",  label: { TR: "Hizmet",          EN: "Services",       RU: "Услуг"     } },
];

const badges = [
  { Icon: Sparkles,    key: "badge1" as const },
  { Icon: ShieldCheck, key: "badge2" as const },
  { Icon: Leaf,        key: "badge3" as const },
];

export function Hero() {
  const { t, lang } = useLang();
  const shouldReduce = useReducedMotion();

  const fadeUp = (delay = 0) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any, delay },
  });

  return (
    <section className="relative min-h-screen flex overflow-hidden pt-20 md:pt-24">
      <DecoArc />

      {/* ── LEFT: text content ── */}
      <div className="relative flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-20 py-16 min-w-0 z-10">
        <DotGrid />

        <div className="relative z-10 max-w-xl">

          {/* Salmon overline with dash */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
            <span className="w-8 h-px bg-[#E8896E]" />
            <p className="text-[10px] tracking-[0.38em] text-[#E8896E] uppercase font-bold">
              Lara · Antalya
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.1)}
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold text-[#3A1F1A] leading-[1.05] tracking-tight mb-7"
          >
            {t.hero.headline}
          </motion.h1>

          {/* Salmon double-rule accent */}
          <motion.div {...fadeUp(0.18)} className="flex items-center gap-2 mb-7">
            <div className="w-14 h-[2.5px] bg-[#E8896E] rounded-full" />
            <div className="w-4 h-[2.5px] bg-[#E8896E]/35 rounded-full" />
          </motion.div>

          {/* Sub headline */}
          <motion.p
            {...fadeUp(0.22)}
            className="text-base md:text-lg text-[#9B7B72] font-light leading-relaxed mb-10 max-w-md"
          >
            {t.hero.sub}
          </motion.p>

          {/* Dual CTA */}
          <motion.div {...fadeUp(0.30)} className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#E8896E] text-[#3A1F1A] text-sm font-bold px-8 py-4 rounded-full hover:bg-[#C44536] hover:text-white transition-colors duration-200 cursor-pointer shadow-[0_4px_28px_rgba(232,137,110,0.45)]"
            >
              <WhatsAppIcon />
              {t.hero.cta}
            </a>
            <a
              href="#galeri"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#3A1F1A] hover:text-[#E8896E] transition-colors duration-200 cursor-pointer group"
            >
              {t.gallery.title}
              <ArrowUpRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </motion.div>

          {/* Stats strip */}
          <motion.div {...fadeUp(0.38)} className="flex items-center mb-12">
            {statItems.map((s, i) => (
              <div key={s.value} className="flex items-center">
                <div className={i > 0 ? "pl-7" : ""}>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-[#3A1F1A]">
                    {s.value}
                  </p>
                  <p className="text-[10px] tracking-[0.2em] text-[#9B7B72] uppercase mt-0.5">
                    {s.label[lang]}
                  </p>
                </div>
                {i < statItems.length - 1 && (
                  <div className="ml-7 h-9 w-px bg-[#E8896E]/25" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Trust badges — salmon icons */}
          <motion.div {...fadeUp(0.46)} className="flex flex-wrap gap-5">
            {badges.map(({ Icon, key }) => (
              <div key={key} className="flex items-center gap-2">
                <span className="w-7 h-7 rounded-full border border-[#E8896E]/30 flex items-center justify-center bg-[#E8896E]/10">
                  <Icon size={12} className="text-[#E8896E]" aria-hidden="true" />
                </span>
                <span className="text-xs text-[#9B7B72]">{t.hero[key]}</span>
              </div>
            ))}
          </motion.div>

          {/* Mobile nail strip */}
          <MobilePhotoStrip shouldReduce={shouldReduce} />

        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none hidden lg:block">
          <div className="w-px h-12 bg-gradient-to-b from-[#E8896E]/40 to-transparent" />
        </div>
      </div>

      {/* ── RIGHT: studio photo (desktop) ── */}
      <motion.div
        initial={shouldReduce ? false : { opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as any, delay: 0.15 }}
        className="hidden lg:block relative w-[46%] xl:w-[48%] flex-shrink-0"
      >
        <HeroPhotoPanel shouldReduce={shouldReduce} />
      </motion.div>

    </section>
  );
}
