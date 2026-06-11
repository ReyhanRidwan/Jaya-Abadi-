import { useState, useEffect } from "react";
import { Phone, Menu, X, ShieldAlert, Check } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-brand-blue-dark/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3"
          : "bg-gradient-to-b from-brand-blue-dark/90 to-transparent py-5"
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group" id="logo-link">
            <div className="bg-brand-safety-yellow text-brand-blue-dark p-2 rounded-lg font-display font-black text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              JA
            </div>
            <div>
              <div className="font-display font-extrabold text-white text-lg sm:text-xl tracking-wider leading-none">
                JAYA ABADI
              </div>
              <div className="text-[10px] sm:text-xs text-brand-safety-yellow font-medium mt-0.5 tracking-widest">
                WATERPROOFING & INJEKSI
              </div>
            </div>
          </a>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex items-center gap-8" id="desktop-nav">
            <a href="#" className="text-sm font-medium hover:text-brand-safety-yellow text-white transition-colors">
              Beranda
            </a>
            <a href="#layanan" className="text-sm font-medium hover:text-brand-safety-yellow text-white/90 transition-colors">
              Layanan Utama
            </a>
            <a href="#keunggulan" className="text-sm font-medium hover:text-brand-safety-yellow text-white/90 transition-colors">
              Keunggulan
            </a>
            <a href="#estimasi" className="text-sm font-medium hover:text-brand-safety-yellow text-white/90 transition-colors">
              Estimator Biaya
            </a>
            <a href="#portfolio" className="text-sm font-medium hover:text-brand-safety-yellow text-white/90 transition-colors">
              Galeri Proyek
            </a>
            <a href="#kontak" className="text-sm font-medium hover:text-brand-safety-yellow text-white/90 transition-colors">
              Lokasi & Kontak
            </a>
          </nav>

          {/* Quick Action Button - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_DATA.phone}`}
              className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors"
              id="top-phone-link"
            >
              <Phone size={16} className="text-brand-safety-yellow" />
              <span>{CONTACT_DATA.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20waterproofing%20atau%20injeksi%20beton.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-safety-yellow text-brand-blue-dark hover:bg-brand-safety-yellow/90 font-display font-bold px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-md hover:shadow-lg active:scale-95"
              id="top-wa-btn"
            >
              <ShieldAlert size={14} className="animate-pulse text-brand-blue-dark" />
              Konsultasi Gratis
            </a>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-safety-yellow p-2 focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-blue-dark border-b border-white/10" id="mobile-nav-panel">
          <div className="px-4 pt-2 pb-6 space-y-3">
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Beranda
            </a>
            <a
              href="#layanan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Layanan Utama
            </a>
            <a
              href="#keunggulan"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Keunggulan
            </a>
            <a
              href="#estimasi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Estimator Biaya
            </a>
            <a
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Galeri Proyek
            </a>
            <a
              href="#kontak"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-md text-base font-semibold text-white/90 hover:bg-white/10 hover:text-brand-safety-yellow transition-all"
            >
              Lokasi & Kontak
            </a>
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT_DATA.phone}`}
                className="flex items-center gap-3 px-3 py-2 text-white/80 hover:text-white"
              >
                <Phone size={18} className="text-brand-safety-yellow" />
                <span className="font-mono">{CONTACT_DATA.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20ingin%20konsultasi%20mengenai%20layanan%20waterproofing%20atau%20injeksi%20beton.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand-safety-yellow text-brand-blue-dark text-center font-display font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-brand-safety-yellow/90"
              >
                <Phone size={16} />
                Konsultasi WhatsApp (Gratis)
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
