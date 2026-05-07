"use client";

import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import { useLang, type Lang } from "@/lib/i18n";

const WA_LINK = "https://wa.me/905558770407";
const LANGS: Lang[] = ["TR", "EN", "RU"];

/* Native img — no useState failure risk */
function LogoMark() {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.png"
      alt="Maystro Hair & Nail"
      className="h-10 w-10 object-contain"
    />
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
      className="relative text-[11px] tracking-[0.14em] uppercase font-semibold text-[#78716C] hover:text-[#1C1917] transition-colors duration-200 cursor-pointer group"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#1C1917]/40 group-hover:w-full transition-all duration-300" />
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
            ? "bg-[#F2EFE6]/97 backdrop-blur-xl border-[#1C1917]/12 shadow-[0_8px_40px_rgba(28,25,23,0.13)]"
            : "bg-[#F2EFE6]/90 backdrop-blur-lg border-[#1C1917]/8 shadow-[0_4px_20px_rgba(28,25,23,0.07)]"
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
              className="flex items-center gap-0.5 bg-[#1C1917]/6 rounded-full p-1"
            >
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-200 cursor-pointer ${
                    lang === l
                      ? "bg-[#1C1917] text-white shadow-sm"
                      : "text-[#78716C] hover:text-[#1C1917]"
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
              className="flex items-center gap-2 bg-[#1C1917] text-white text-[11px] font-bold tracking-wide px-5 py-2.5 rounded-full hover:bg-[#44403C] transition-colors duration-200 cursor-pointer"
            >
              <MessageCircle size={12} aria-hidden="true" />
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile: hamburger only */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 cursor-pointer text-[#1C1917]"
            aria-label={mobileOpen ? "Kapat" : "Menü"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="mt-2 rounded-2xl border border-[#1C1917]/10 bg-[#F2EFE6]/97 backdrop-blur-xl shadow-[0_8px_32px_rgba(28,25,23,0.10)] px-5 py-5 flex flex-col gap-4">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
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
                    ? "bg-[#1C1917] text-white border-[#1C1917]"
                    : "text-[#78716C] border-[#1C1917]/25 hover:border-[#1C1917]/50"
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
