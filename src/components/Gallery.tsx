import React, { useState } from "react";
import { Eye, MapPin, Tag, ChevronLeft, ChevronRight, X, ShieldCheck } from "lucide-react";
import { GALLERY_ITEMS } from "../data";

export default function Gallery() {
  const [filter, setFilter] = useState<"all" | "waterproofing" | "injection">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  const handleOpenLightbox = (pId: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.id === pId);
    if (idx !== -1) {
      setLightboxIndex(idx);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading section */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-blue-light font-display font-bold text-xs uppercase tracking-widest bg-brand-blue-light/5 px-3 py-1 rounded">
            PORTFOLIO KERJA LAPANGAN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Dokumentasi Kerja Lapangan Tim Jaya Abadi
          </h2>
          <div className="h-1.5 w-16 bg-brand-safety-yellow mx-auto rounded-full" />
          
          {/* USER SPECIFIED CAPTION - MANDATORY PLACEMENT */}
          <p className="text-brand-blue-light font-medium text-sm sm:text-base border-l-4 border-brand-safety-yellow bg-slate-50 py-3.5 px-4 rounded-r-xl max-w-2xl mx-auto italic mt-4 shadow-sm" id="user-caption-badge">
            "Proses pengerjaan real oleh tim ahli kami di ketinggian dengan keamanan penuh."
          </p>
        </div>

        {/* Filters bar */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap" id="gallery-filters">
          <button
            onClick={() => setFilter("all")}
            className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase transition-all ${
              filter === "all"
                ? "bg-brand-blue-light text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Semua Dokumentasi
          </button>
          <button
            onClick={() => setFilter("waterproofing")}
            className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase transition-all ${
              filter === "waterproofing"
                ? "bg-brand-blue-light text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Waterproofing Atap
          </button>
          <button
            onClick={() => setFilter("injection")}
            className={`px-5 py-2.5 rounded-full font-display font-semibold text-xs tracking-wider uppercase transition-all ${
              filter === "injection"
                ? "bg-brand-blue-light text-white shadow-md"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            Injeksi Beton
          </button>
        </div>

        {/* Gallery grid layouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="gallery-grid">
          {filteredItems.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(item.id)}
                className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col h-full"
                id={`gallery-item-${item.id}`}
              >
                {/* Photo frame */}
                <div className="relative h-60 overflow-hidden shrink-0">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Dark backdrop element */}
                  <div className="absolute inset-0 bg-brand-blue-dark/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/95 text-brand-blue-dark p-3 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                      <Eye size={20} className="text-brand-blue-light" />
                    </div>
                  </div>
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 bg-brand-safety-yellow text-brand-blue-dark px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    {item.tag}
                  </div>
                </div>

                {/* Meta details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs text-brand-concrete-grey font-semibold">
                      <MapPin size={13} className="text-brand-safety-orange" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-base sm:text-lg text-slate-900 line-clamp-2 leading-snug group-hover:text-brand-blue-light transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-brand-blue-light">
                    <span>Lihat Detil Konstruksi ✔</span>
                    <span className="text-brand-safety-orange">100% Real Proyek</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Safety Note bottom */}
        <div className="mt-12 bg-amber-50 rounded-2xl border border-amber-200 p-5 flex flex-col sm:flex-row items-center gap-4 max-w-3xl mx-auto shadow-sm">
          <div className="w-10 h-10 rounded-full bg-brand-safety-yellow/20 text-yellow-600 flex items-center justify-center shrink-0">
            ⚠
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">
              Aspek Keselamatan Konstruksi (K3 Ketinggian):
            </h4>
            <p className="text-slate-600 text-xs mt-0.5 font-light leading-relaxed">
              Semua pekerja kami dilengkapi dengan Alat Pelindung Diri (APD) standar utama: Helm pengaman tali dagu, tas pinggang perkakas, sarung tangan anti getar, rompi reflektif, serta tali penambat tubuh berpasangan ganda (double-lanyard safety harness).
            </p>
          </div>
        </div>

      </div>

      {/* Lightbox Zoom Component */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-slate-950/95 z-55 flex flex-col items-center justify-center p-4 select-none"
          onClick={() => setLightboxIndex(null)}
          id="gallery-lightbox"
        >
          {/* Top Panel */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-50">
            <div className="text-xs sm:text-sm font-mono text-slate-400">
              Dokumentasi {lightboxIndex + 1} dari {GALLERY_ITEMS.length}
            </div>
            <button
              onClick={() => setLightboxIndex(null)}
              className="bg-white/10 hover:bg-white/20 p-2 sm:p-3 rounded-full text-white transition-colors"
              aria-label="Tutup"
              id="close-lightbox"
            >
              <X size={20} />
            </button>
          </div>

          {/* Main Photo area */}
          <div className="relative max-w-5xl w-full max-h-[75vh] flex items-center justify-center px-12" onClick={(e) => e.stopPropagation()}>
            {/* Prev trigger button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors shrink-0"
              aria-label="Sebelumnya"
              id="prev-lightbox-btn"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Photo frame */}
            <img
              src={GALLERY_ITEMS[lightboxIndex].imageUrl}
              alt={GALLERY_ITEMS[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-lg border border-white/10"
              referrerPolicy="no-referrer"
            />

            {/* Next trigger button */}
            <button
              onClick={handleNext}
              className="absolute right-0 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors shrink-0"
              aria-label="Selanjutnya"
              id="next-lightbox-btn"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Info Card at the bottom of the lightbox */}
          <div className="mt-6 max-w-2xl bg-brand-blue-dark/90 border border-white/10 rounded-2xl p-5 text-white text-center sm:text-left space-y-1 z-50">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs text-brand-safety-yellow font-extrabold tracking-widest uppercase">
              <Tag size={12} />
              <span>{GALLERY_ITEMS[lightboxIndex].tag}</span>
              <span>•</span>
              <MapPin size={12} className="text-brand-safety-orange" />
              <span>{GALLERY_ITEMS[lightboxIndex].location}</span>
            </div>
            <h4 className="font-display font-extrabold text-lg sm:text-xl text-white">
              {GALLERY_ITEMS[lightboxIndex].title}
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm font-light mt-1">
              {GALLERY_ITEMS[lightboxIndex].description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
