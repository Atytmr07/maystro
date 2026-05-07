"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const INSTAGRAM = "https://www.instagram.com/maystro.studioo/";

const photos = [
  { src: "/gallery/nail-1.jpg", alt: "Pembe koi balığı tırnak sanatı — Maystro" },
  { src: "/gallery/nail-2.jpg", alt: "Altın opal iridesan tırnak — Maystro" },
  { src: "/gallery/nail-3.jpg", alt: "Altın inci iridesan tırnak yakın çekim — Maystro" },
  { src: "/gallery/nail-4.jpg", alt: "Bordo yıldız karışık tırnak sanatı — Maystro" },
  { src: "/gallery/nail-5.jpg", alt: "Bordo dalmaçyalı fransız tırnak — Maystro" },
  { src: "/gallery/nail-6.jpg", alt: "Kurt tablosu tırnak sanatı — Maystro" },
];

function GalleryPhoto({
  photo,
  index,
  shouldReduce,
}: {
  photo: (typeof photos)[0];
  index: number;
  shouldReduce: boolean | null;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.a
      href={INSTAGRAM}
      target="_blank"
      rel="noopener noreferrer"
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
      className="relative block overflow-hidden rounded-xl border border-[#1C1917]/8 group cursor-pointer bg-[#E8E3D8]"
      style={{ aspectRatio: "3/4" }}
    >
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          onError={() => setFailed(true)}
        />
      )}

      {/* Bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-[#1C1917]/0 group-hover:bg-[#1C1917]/15 transition-colors duration-300">
        <div className="w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300">
          <ArrowUpRight size={14} className="text-[#1C1917]" aria-hidden="true" />
        </div>
      </div>
    </motion.a>
  );
}

export function GallerySection() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  return (
    <section id="galeri" className="py-24 md:py-32 px-6 bg-[#F2EFE6]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.35em] text-[#78716C] uppercase mb-4">
              @maystro.studioo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-[#1C1917]">
              {t.gallery.title}
            </h2>
          </div>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm text-[#78716C] hover:text-[#1C1917] transition-colors duration-200 cursor-pointer group"
          >
            {t.gallery.more}
            <ArrowUpRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <GalleryPhoto key={photo.src} photo={photo} index={i} shouldReduce={shouldReduce} />
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[#78716C] cursor-pointer"
          >
            {t.gallery.more}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
