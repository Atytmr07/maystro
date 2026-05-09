"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const WA_LINK = "https://wa.me/905558770407";
const LANGS: Lang[] = ["TR", "EN", "RU"];

/* Text wordmark — placeholder until new logo arrives */
function LogoMark() {
  return (
    <span
      className="font-serif text-lg md:text-xl font-semibold tracking-[0.22em] text-[#3A1F1A] select-none"
      aria-label="Maystro Hair & Nail"
    >
      MAYSTRO
    </span>
  );
}

function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="relative text-[11px] tracking-[0.14em] uppercase font-semibold text-[#9B7B72] hover:text-[#3A1F1A] transition-colors duration-200 cursor-pointer group"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#3A1F1A]/40 group-hover:w-full transition-all duration-300" />
    </a>
  );
}

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#hizmetler", label: t.nav.services },
    { href: "#galeri",    label: t.nav.gallery },
    { href: "#konum",     label: t.nav.contact },
  ];

  return (
    <div className="fixed top-4 inset-x-3 md:inset-x-6 z-50 max-w-7xl mx-auto">
      {/* ── Floating pill ── */}
      <header
        className={`rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-[#FFF5F0]/97 backdrop-blur-xl border-[#3A1F1A]/12 shadow-[0_8px_40px_rgba(58,31,26,0.13)]"
            : "bg-[#FFF5F0]/90 backdrop-blur-lg border-[#3A1F1A]/8 shadow-[0_4px_20px_rgba(58,31,26,0.07)]"
        }`}
      >
        {/* Mobile: simple flex row — logo | hamburger */}
        {/* Desktop: 3-col grid — logo | links | actions */}
        <div className="px-4 md:px-6 h-[58px] flex items-center justify-between md:grid md:grid-cols-3 md:gap-4">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 cursor-pointer" aria-label="Maystro Hair & Nail">
            <LogoMark />
          </a>

          {/* Desktop centre links */}
          <nav className="hidden md:flex items-center justify-center gap-7" aria-label="Ana menü">
            {navItems.map(({ href, label }) => (
              <NavLink key={href} href={href}>{label}</NavLink>
            ))}
          </nav>

          {/* Desktop right: lang + CTA */}
          <div className="hidden md:flex items-center justify-end gap-3">
            <div
              role="group"
              aria-label="Dil seçimi"
              className="flex items-center gap-0.5 bg-[#3A1F1A]/6 rounded-full p-1"
            >
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-200 cursor-pointer ${
                    lang === l
                      ? "bg-[#3A1F1A] text-white shadow-sm"
                      : "text-[#9B7B72] hover:text-[#3A1F1A]"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E8896E] text-[#3A1F1A] text-[11px] font-bold tracking-wide px-5 py-2.5 rounded-full hover:bg-[#C44536] hover:text-white transition-colors duration-200 cursor-pointer shadow-[0_2px_12px_rgba(232,137,110,0.3)]"
            >
              <MessageCircle size={12} aria-hidden="true" />
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: hamburger only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 cursor-pointer text-[#3A1F1A]"
            aria-label={mobileOpen ? "Kapat" : "Menü"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-[#3A1F1A]/10 bg-[#FFF5F0]/97 backdrop-blur-xl shadow-[0_8px_32px_rgba(58,31,26,0.10)] px-5 py-5 flex flex-col gap-4">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#9B7B72] hover:text-[#3A1F1A] transition-colors cursor-pointer"
            >
              {label}
            </a>
          ))}

          {/* Dil toggle */}
          <div className="flex items-center gap-2 pt-1">
            {LANGS.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all duration-200 cursor-pointer ${
                  lang === l
                    ? "bg-[#3A1F1A] text-white border-[#3A1F1A]"
                    : "text-[#9B7B72] border-[#3A1F1A]/25 hover:border-[#3A1F1A]/50"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
