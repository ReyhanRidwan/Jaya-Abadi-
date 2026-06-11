import { useState } from "react";
import { Shield, Hammer, Check, ArrowRight, Eye, AlertTriangle } from "lucide-react";
import { SERVICES, CONTACT_DATA } from "../data";

export default function Services() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="layanan">
      {/* Decorative accent background grids */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-brand-safety-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-48 h-48 bg-brand-blue-light/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-brand-blue-light/10 text-brand-blue-light font-display font-extrabold text-xs tracking-wider uppercase px-3.5 py-1.5 rounded-full">
            <Shield size={14} className="text-brand-blue-light" />
            Layanan Spesialis Konstruksi
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Layanan Handal Spesialis <span className="text-brand-blue-light">Waterproofing</span> & <span className="text-brand-blue-light">Injeksi Beton</span>
          </h2>
          <div className="h-1.5 w-24 bg-brand-safety-yellow mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Jaya Abadi mengadopsi bahan bermutu tinggi serta alat canggih bertekanan besar untuk mengatasi rembesan secara mutlak. Kami prioritaskan aspek keselamatan kerja dan komitmen garansi tertulis.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service) => {
            const isWaterproofing = service.id === "waterproofing";
            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col group h-full"
                id={`service-card-${service.id}`}
              >
                {/* Visual Image container */}
                <div className="h-64 sm:h-72 relative overflow-hidden shrink-0">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-brand-blue-dark text-brand-safety-yellow py-1.5 px-3 rounded text-xs font-display font-bold uppercase tracking-wider shadow">
                    {service.badge}
                  </div>

                  {/* Safety standard highlight tag */}
                  {isWaterproofing ? (
                    <div className="absolute bottom-4 left-4 right-4 bg-yellow-500/90 text-brand-blue-dark backdrop-blur-md py-2 px-3 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-2">
                      <AlertTriangle size={15} />
                      <span>Standar Safety K3: Sabuk Pengaman Tubuh (Full Body Harness)</span>
                    </div>
                  ) : (
                    <div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 text-white backdrop-blur-md py-2 px-3 rounded-lg text-[11px] sm:text-xs font-semibold flex items-center gap-2">
                      <Shield size={15} className="text-brand-safety-yellow" />
                      <span>Injeksi Mekanik Bertekanan Tinggi Berkekuatan s.d 400 Bar</span>
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-slate-900 mb-2 tracking-tight group-hover:text-brand-blue-light transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-brand-concrete-grey font-medium text-xs uppercase tracking-widest mb-4">
                      {isWaterproofing ? "SOLUSI SEMUA AREA REMBES" : "PERBAIKAN STRUKTUR BETON PARAH"}
                    </p>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Pilar Keahlian Kami:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                            <span className="w-5 h-5 rounded-full bg-brand-blue-light/10 text-brand-blue-light flex items-center justify-center shrink-0">
                              <Check size={12} strokeWidth={3} />
                            </span>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedService(service.id)}
                      className="text-brand-blue-light font-display font-bold text-sm tracking-wide hover:text-brand-safety-orange transition-colors flex items-center gap-1.5"
                    >
                      <Eye size={16} />
                      Baca Seluk-beluk Metode
                    </button>
                    
                    <a
                      href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20ingin%20memesan%20jasa%20${encodeURIComponent(service.title)}%20di%20Semarang.%20Mohon%20info%20jadwal%20survei.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-brand-blue-dark text-white hover:bg-brand-blue-light font-display font-semibold transition-colors px-5 py-2.5 rounded-lg text-xs tracking-wider uppercase flex items-center gap-2 shadow"
                    >
                      Pesan Jasa
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Metodologi Popup/Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-brand-blue-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-100 hover:bg-slate-200 p-2 rounded-full"
              aria-label="Tutup"
            >
              ✕
            </button>

            {(() => {
              const service = SERVICES.find((s) => s.id === selectedService);
              if (!service) return null;
              return (
                <div className="space-y-6">
                  <div className="inline-block bg-brand-safety-yellow text-brand-blue-dark px-3 py-1 rounded text-xs font-bold uppercase">
                    Metodologi {service.title}
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 leading-tight">
                    Bagaimana Kami Mengerjakan {service.title}?
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {service.longDescription}
                  </p>

                  <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-100 space-y-3">
                    <h4 className="font-display font-bold text-slate-800 text-sm sm:text-base">
                      Mengapa Harus Dikombinasikan dengan Layanan Jaya Abadi?
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-safety-orange font-bold mr-1">•</span>
                        <span>Survei lokasi dengan alat ukur kelembaban (moisture meter) digital untuk memetakan titik basah secara akurat.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-safety-orange font-bold mr-1">•</span>
                        <span>Teknisi spesialis lokal berpengalaman, bukan pekerja serabutan lepas.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-safety-orange font-bold mr-1">•</span>
                        <span>Sertifikat Jaminan Garansi resmi cap basah setelah penutupan pelunasan.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20sudah%20membaca%20metode%20detail%20mengenai%20${encodeURIComponent(service.title)}.%20Saya%20tertarik%25.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-brand-safety-orange text-white text-center font-display font-bold py-3 px-4 rounded-xl text-xs sm:text-sm uppercase tracking-wider hover:bg-brand-safety-orange/90 transition-colors shadow flex items-center justify-center gap-2"
                    >
                      Konsultasikan Metode Ini
                    </a>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="px-6 py-3 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs sm:text-sm font-semibold"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
}
