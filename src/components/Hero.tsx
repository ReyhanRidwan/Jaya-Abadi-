import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, ArrowRight, ShieldCheck, CheckCircle, Users } from "lucide-react";
import { HERO_SLIDES, CONTACT_DATA } from "../data";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // changes every 6 seconds as requested
    return () => clearInterval(timer);
  }, []);

  const handleManualSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] lg:h-screen w-full overflow-hidden bg-brand-blue-dark text-white" id="beranda">
      {/* Slide Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {HERO_SLIDES.map((slide, index) => {
            if (index !== currentSlide) return null;
            return (
              <motion.div
                key={slide.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                {/* Image element with required referrerPolicy */}
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Gradient dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark/95 via-brand-blue-dark/70 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark via-transparent to-transparent opacity-90" />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Floating safety construction decoration accents */}
      <div className="absolute top-24 right-10 z-10 hidden xl:flex flex-col gap-3 pointer-events-none">
        <div className="bg-brand-safety-yellow/10 border border-brand-safety-yellow/30 backdrop-blur-md text-brand-safety-yellow px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2">
          <ShieldCheck size={14} />
          <span>Sertifikasi K3 Konstruksi Ketinggian</span>
        </div>
        <div className="bg-white/5 border border-white/10 backdrop-blur-md text-white/95 px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 self-end">
          <CheckCircle size={14} className="text-brand-safety-yellow" />
          <span>Garansi Kebocoran s.d 5 Tahun</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="max-w-3xl pt-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -25, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-brand-safety-yellow text-brand-blue-dark font-display font-extrabold text-[10px] sm:text-xs tracking-widest px-3 py-1.5 rounded-md uppercase">
                <span className="w-2 h-2 rounded-full bg-brand-safety-orange animate-ping" />
                {HERO_SLIDES[currentSlide].badge}
              </div>

              {/* H1 Title as targeted by user */}
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] text-balance">
                {currentSlide === 0 ? (
                  <>
                    Solusi Kebocoran <span className="text-brand-safety-yellow relative inline-block">Beton & Atap<span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-safety-yellow/20" /></span> Profesional di Semarang
                  </>
                ) : (
                  <>
                    Sistem Penahan Air <span className="text-brand-safety-yellow relative inline-block">Injeksi Polyurethane<span className="absolute bottom-1 left-0 w-full h-[6px] bg-brand-safety-yellow/20" /></span> & Beton
                  </>
                )}
              </h1>

              {/* Sub-title as targeted by user */}
              <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-2 gap-4 max-w-md pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-brand-safety-yellow/15 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Semarang & Sekitarnya</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-brand-safety-yellow/15 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Garansi Resmi 3-5 Thn</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-brand-safety-yellow/15 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Metode Injeksi PU Resin</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-brand-safety-yellow/15 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    ✓
                  </div>
                  <span>Survei Lokasi GRATIS</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20tertarik%20dengan%20layanan%20Waterproofing%20/%20Injeksi%20Beton%20Anda.%20Saya%20ingin%20konsultasi%20gratis%20dan%20jadwal%20survei.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand-safety-orange hover:bg-brand-safety-orange/90 text-white font-display font-bold px-8 py-4 rounded-xl text-sm tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-safety-orange/20 active:scale-95"
                  id="hero-wa-cta"
                >
                  <Phone size={18} />
                  Konsultasi Gratis via WhatsApp
                </a>
                <a
                  href="#layanan"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-display font-medium px-8 py-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2"
                >
                  Lihat Detail Layanan
                  <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Manual Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualSlide(idx)}
            className={`transition-all duration-300 rounded-full h-2 ${
              idx === currentSlide ? "bg-brand-safety-yellow w-8" : "bg-white/45 w-2 hover:bg-white"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
            id={`slide-dot-${idx}`}
          />
        ))}
      </div>

      {/* Trust Banner mini row inside hero bottom */}
      <div className="absolute bottom-0 right-0 left-0 hidden md:block bg-brand-blue-dark/50 border-t border-white/10 backdrop-blur-sm py-4 z-15">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-brand-safety-yellow font-bold">ALAMAT SEMARANG:</span>
            <span>{CONTACT_DATA.address}</span>
          </div>
          <div className="flex items-center gap-3 divide-x divide-white/20 font-mono">
            <span className="pl-3">HP: {CONTACT_DATA.phoneDisplay}</span>
            <span className="pl-3">SPESIALIS PENYAKIT BETON & BOCOOR</span>
          </div>
        </div>
      </div>
    </section>
  );
}
