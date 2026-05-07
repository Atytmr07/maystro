"use client";

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useLang } from "@/lib/i18n";

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const WA_LINK = "https://wa.me/905558770407";
const INSTAGRAM = "https://www.instagram.com/maystro.studioo/";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#1C1917] text-white">
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Brand column */}
          <div>
            {/* Logo — cream bg container so it stays readable on dark footer */}
            <div className="mb-5 inline-block bg-[#F2EFE6] rounded-xl p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Maystro Hair & Nail" className="h-16 w-16 object-contain" />
            </div>
            <p className="text-sm text-white/55 leading-relaxed">
              Hijyenik · Profesyonel · Kaliteli Hizmet
            </p>

            {/* WhatsApp CTA */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-white/20 text-white/80 hover:text-white hover:border-white/50 text-sm px-5 py-2.5 rounded-full transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle size={14} aria-hidden="true" />
              0555 877 04 07
            </a>
          </div>

          {/* Info column */}
          <div className="space-y-5">
            <p className="text-[10px] tracking-[0.3em] text-white/35 uppercase mb-6">
              {t.nav.contact}
            </p>

            <div className="flex gap-3 text-sm text-white/60">
              <MapPin size={15} className="flex-shrink-0 mt-0.5 text-white/35" aria-hidden="true" />
              <span className="leading-relaxed">{t.footer.address}</span>
            </div>

            <div className="flex gap-3 text-sm text-white/60">
              <Phone size={15} className="flex-shrink-0 mt-0.5 text-white/35" aria-hidden="true" />
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-200 cursor-pointer"
              >
                0555 877 04 07
              </a>
            </div>

            <div className="flex gap-3 text-sm text-white/60">
              <Clock size={15} className="flex-shrink-0 mt-0.5 text-white/35" aria-hidden="true" />
              <span className="leading-relaxed">{t.footer.hours}</span>
            </div>
          </div>

          {/* Social column */}
          <div>
            <p className="text-[10px] tracking-[0.3em] text-white/35 uppercase mb-6">Social</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              {/* Instagram SVG (official glyph) */}
              <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors duration-200 text-white/60 group-hover:text-white">
                <InstagramIcon size={14} />
              </span>
              <span className="text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                @maystro.studioo
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/25">
            © 2026 Maystro Hair &amp; Nail. {t.footer.rights}
          </p>
          <p className="text-xs text-white/20">Lara · Muratpaşa · Antalya</p>
        </div>
      </div>
    </footer>
  );
}
