import { MapPin, Phone, Clock, ShieldCheck } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function InfoStrip() {
  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="info-strip">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-100">
        
        {/* Item 1: Alamat Semarang */}
        <div className="flex items-start gap-4 pb-4 md:pb-0 md:pr-6">
          <div className="w-12 h-12 rounded-xl bg-brand-blue-light/10 text-brand-blue-light flex items-center justify-center shrink-0">
            <MapPin size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase">
              Alamat Kantor (Semarang)
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {CONTACT_DATA.address}
            </p>
            <a
              href={CONTACT_DATA.addressMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-brand-blue-light hover:text-brand-safety-orange underline mt-1"
              id="strip-maps-link"
            >
              Petunjuk Navigasi Maps →
            </a>
          </div>
        </div>

        {/* Item 2: Telepon & WhatsApp */}
        <div className="flex items-start gap-4 pt-4 md:pt-0 md:px-6">
          <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0">
            <Phone size={24} className="animate-wiggle" />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase">
              Telepon / WhatsApp
            </h4>
            <p className="text-slate-900 font-mono font-bold text-base md:text-lg">
              {CONTACT_DATA.phoneDisplay}
            </p>
            <p className="text-slate-500 text-xs">
              Fast Response: Konsultasi & Jadwal Survei Bebas Biaya
            </p>
            <a
              href={`https://wa.me/${CONTACT_DATA.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-bold text-green-600 hover:text-green-700 underline mt-1"
            >
              Hubungi via WA Sekarang →
            </a>
          </div>
        </div>

        {/* Item 3: Jam Operasional */}
        <div className="flex items-start gap-4 pt-4 md:pt-0 md:pl-6">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
            <Clock size={24} />
          </div>
          <div className="space-y-1">
            <h4 className="font-display font-bold text-slate-900 text-sm tracking-wide uppercase">
              Jam Operasional Kerja
            </h4>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              {CONTACT_DATA.operatingHours}
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-600 font-medium mt-2">
              <ShieldCheck size={14} />
              <span>Tim Siap Siaga Kebocoran Darurat</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
