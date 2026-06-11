import { Star, Quote, MessageSquare } from "lucide-react";
import { TESTIMONIALS, CONTACT_DATA } from "../data";

export default function Testimonials() {
  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden" id="testimoni">
      <div className="absolute top-10 right-10 w-36 h-36 bg-brand-safety-yellow/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold tracking-widest text-brand-blue-light bg-brand-blue-light/5 px-3 py-1.5 rounded-full uppercase inline-block">
            TESTIMONI KEPUASAN KLIEN
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Apa Kata Mereka Tentang Jaya Abadi?
          </h2>
          <div className="h-1.5 w-16 bg-brand-safety-yellow mx-auto rounded-full" />
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Kepuasan pelanggan di wilayah Gajahmungkur, Banyumanik, Simpang Lima, dan seluruh Kota Semarang adalah motivasi utama perbaikan mutu kami.
          </p>
        </div>

        {/* Grid Card List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testi) => {
            return (
              <div
                key={testi.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-100 shadow-sm relative hover:shadow-md transition-shadow flex flex-col justify-between"
                id={`testimonial-${testi.id}`}
              >
                {/* Quote Icon decorative decoration */}
                <div className="absolute top-6 right-6 text-slate-100 font-display font-medium pointer-events-none">
                  <Quote size={40} className="stroke-slate-100 fill-slate-50" />
                </div>

                <div className="space-y-4">
                  {/* Reviews Stars */}
                  <div className="flex items-center gap-1.5 text-brand-safety-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={15} className="fill-brand-safety-yellow text-brand-safety-yellow" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic font-light relative z-10">
                    "{testi.comment}"
                  </p>
                </div>

                {/* Sender Bio */}
                <div className="pt-6 mt-6 border-t border-slate-50 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-blue-light/10 text-brand-blue-light flex items-center justify-center font-display font-black text-sm uppercase shrink-0">
                    {testi.name[0] || "U"}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-900 text-xs sm:text-sm">
                      {testi.name}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {testi.role} • {testi.location}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* CTA Bottom bar */}
        <div className="mt-16 bg-brand-blue-light rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-white/5">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-white">
              Punya Masalah Beton Rembes atau Retak Struktur Serupa?
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm font-light">
              Konsultasikan sekarang tanpa denda survei. Kami berikan diagnosa terjamin untuk gedung & kediaman Semarang Anda.
            </p>
          </div>
          <a
            href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20ingin%20berkonsultasi%20mengenai%20keluhan%20kebocoran%20atau%20rembesan%20seperti%20testimoni%20pelanggan.%20Tolong%20survei%20ke%20lokasi%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-safety-yellow text-brand-blue-dark hover:bg-brand-safety-yellow/90 font-display font-extrabold px-6 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow"
          >
            <MessageSquare size={16} />
            Hubungi Lewat WA
          </a>
        </div>

      </div>
    </section>
  );
}
