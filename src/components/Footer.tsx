import { ShieldAlert, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-slate-300 pt-16 pb-8 border-t border-white/10" id="footer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Logo Brand & Caption */}
          <div className="space-y-4" id="footer-branding-col">
            <a href="#" className="flex items-center gap-2.5">
              <div className="bg-brand-safety-yellow text-brand-blue-dark font-display font-black text-lg p-2 rounded">
                JA
              </div>
              <div>
                <div className="font-display font-extrabold text-white text-lg tracking-wider leading-none">
                  JAYA ABADI
                </div>
                <div className="text-[10px] text-brand-safety-yellow font-medium mt-0.5 tracking-wider">
                  WATERPROOFING & INJEKSI
                </div>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              Jasa spesialis perbaikan beton retak, bocor, rembes, and pelapis atap dak beton bergaransi di Kota Semarang. Kami sediakan tim bersertifikat safety K3 penuh dengan kualitas terbukti nyata.
            </p>
            <div className="inline-flex items-center gap-1.5 bg-brand-safety-yellow/10 text-brand-safety-yellow border border-brand-safety-yellow/30 px-2.5 py-1 rounded text-[11px] font-semibold uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse" />
              <span>Semarang Spesialis</span>
            </div>
          </div>

          {/* Quick links navigations */}
          <div className="space-y-4" id="footer-links-col">
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm">
              <a href="#" className="hover:text-brand-safety-yellow transition-colors block">
                Beranda Utama
              </a>
              <a href="#layanan" className="hover:text-brand-safety-yellow transition-colors block">
                Pelayanan Spesialis
              </a>
              <a href="#keunggulan" className="hover:text-brand-safety-yellow transition-colors block">
                Keunggulan & Garansi
              </a>
              <a href="#estimasi" className="hover:text-brand-safety-yellow transition-colors block">
                Kalkulator Estimator
              </a>
              <a href="#portfolio" className="hover:text-brand-safety-yellow transition-colors block">
                Dokumentasi Lapangan
              </a>
              <a href="#kontak" className="hover:text-brand-safety-yellow transition-colors block">
                Lokasi Kantor Google Maps
              </a>
            </div>
          </div>

          {/* Location markers info */}
          <div className="space-y-4" id="footer-address-col">
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase">
              Alamat Semarang
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              {CONTACT_DATA.address}
            </p>
            <a
              href={CONTACT_DATA.addressMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-safety-yellow hover:underline"
            >
              <span>Petunjuk Rute Maps</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Quick hotline contacts */}
          <div className="space-y-4" id="footer-contact-col">
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase">
              Hubungi Pemesanan
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-brand-safety-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">24-hour WhatsApp:</span>
                  <a
                    href={`https://wa.me/${CONTACT_DATA.phone}`}
                    className="hover:text-brand-safety-yellow font-mono font-bold"
                  >
                    {CONTACT_DATA.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Mail size={16} className="text-brand-safety-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Email Kantor:</span>
                  <a
                    href={`mailto:${CONTACT_DATA.email}`}
                    className="hover:text-brand-safety-yellow font-light"
                  >
                    {CONTACT_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock size={16} className="text-brand-safety-yellow mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Waktu Operasional:</span>
                  <span className="text-slate-400 font-light block mt-0.5 text-[11px] sm:text-xs">
                    {CONTACT_DATA.operatingHours}
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Outer credit disclaimers bar */}
        <div className="pt-8 mt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-slate-500">
          <div className="space-y-1">
            <p>
              &copy; {currentYear} <strong>Jaya Abadi Waterproofing & Injeksi Beton Semarang</strong>. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="text-[10px] text-slate-600 font-light">
              Pelayanan spesifik perbaikan keretakan dak semen, basement bocor, kolam rembes menggunakan Polyurethane Injection premium.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-slate-400">
            <span>Garansi Resmi</span>
            <span>•</span>
            <span>K3 Safety Tinggi</span>
            <span>•</span>
            <span>Survei Bebas Biaya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
