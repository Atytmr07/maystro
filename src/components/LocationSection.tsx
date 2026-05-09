"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { useLang } from "@/lib/i18n";

const MAPS_URL =
  "https://www.google.com/maps/place/Maystro+Hair+%26+Nail/@36.8528688,30.7495476,15z";

const EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12770.26400904912!2d30.7495475630747!3d36.852868799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39b645bb52091%3A0x705721be4028a93c!2sMaystro%20Hair%20%26%20Nail!5e0!3m2!1str!2str!4v1778100304504!5m2!1str!2str";

export function LocationSection() {
  const { t } = useLang();
  const shouldReduce = useReducedMotion();

  return (
    <section id="konum" className="py-24 md:py-32 px-6 bg-[#FFF5F0]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={shouldReduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }}
          className="mb-12"
        >
          <p className="text-[10px] tracking-[0.35em] text-[#9B7B72] uppercase mb-4">
            {t.nav.contact}
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-[#3A1F1A]">
            {t.location.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Info card — 2 cols */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {/* Address */}
            <div className="flex gap-4 p-6 rounded-2xl border border-[#3A1F1A]/10 bg-[#FBE0D2]">
              <span className="w-9 h-9 rounded-full border border-[#3A1F1A]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin size={14} className="text-[#9B7B72]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#9B7B72] uppercase mb-2">
                  {t.location.sub}
                </p>
                <p className="text-sm text-[#3A1F1A] leading-relaxed">
                  1968. Sk. 14B<br />07160 Lara, Muratpaşa<br />Antalya
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 rounded-2xl border border-[#3A1F1A]/10 bg-[#FBE0D2]">
              <span className="w-9 h-9 rounded-full border border-[#3A1F1A]/12 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock size={14} className="text-[#9B7B72]" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-medium text-[#3A1F1A] mb-1">{t.location.hours}</p>
                <p className="text-sm text-[#9B7B72]">{t.location.closed}</p>
              </div>
            </div>

            {/* Google Maps link */}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#3A1F1A]/20 text-[#3A1F1A] text-sm font-medium px-6 py-3 rounded-full hover:bg-[#3A1F1A] hover:text-white transition-all duration-200 cursor-pointer w-fit"
            >
              <ExternalLink size={13} aria-hidden="true" />
              {t.location.directions}
            </a>
          </motion.div>

          {/* Map — 3 cols */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as any, delay: 0.15 }}
            className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#3A1F1A]/10 shadow-sm"
            style={{ aspectRatio: "4/3" }}
          >
            <iframe
              src={EMBED_SRC}
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maystro Hair & Nail — Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
