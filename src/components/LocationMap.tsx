import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from "lucide-react";
import { CONTACT_DATA } from "../data";

export default function LocationMap() {
  return (
    <section className="py-20 bg-slate-50 relative" id="kontak">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue-light font-display font-extrabold text-xs tracking-widest bg-brand-blue-light/5 px-3 py-1.5 rounded-full uppercase">
            KOORDINAT KANTOR & LOKASI
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Hubungi Spesialis Jaya Abadi Semarang
          </h2>
          <div className="h-1 w-16 bg-brand-safety-yellow mx-auto rounded" />
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Kantor operasional kami berada di Gajahmungkur, Kota Semarang. Kami siap melayangkan tim survei ke kediaman Anda dengan segera.
          </p>
        </div>

        {/* Content Box with Map Integration */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Address & Contacts Sidebar */}
          <div className="p-8 sm:p-10 lg:p-12 lg:col-span-5 bg-brand-blue-dark text-white flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-extrabold text-2xl tracking-tight text-white">
                Informasi Kontak Utama
              </h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Silakan datang berkonsultasi langsung ke lokasi kantor kami di Semarang, atau hubungi pusat panggilan WhatsApp untuk koordinasi cepat.
              </p>

              {/* Contacts info lines */}
              <div className="space-y-5 pt-4">
                {/* Alamat */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                      Alamat Terdaftar:
                    </span>
                    <p className="text-white text-sm mt-1 leading-relaxed">
                      {CONTACT_DATA.address}
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                      No. WhatsApp / Telepon:
                    </span>
                    <a
                      href={`tel:${CONTACT_DATA.phone}`}
                      className="text-white hover:text-brand-safety-yellow transition-colors text-lg font-mono font-bold block mt-0.5"
                    >
                      {CONTACT_DATA.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Jam Kerja */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/10 text-brand-safety-yellow flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                      Jam Kerja Kantor:
                    </span>
                    <p className="text-white text-sm mt-1">
                      {CONTACT_DATA.operatingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Navigation Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <a
                href={CONTACT_DATA.addressMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-brand-safety-yellow text-brand-blue-dark py-3.5 px-4 rounded-xl text-center font-display font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-brand-safety-yellow/90 transition-all shadow"
                id="maps-direction-btn"
              >
                <Navigation size={15} />
                Buka Google Maps
              </a>
              <a
                href={`tel:${CONTACT_DATA.phone}`}
                className="flex-1 bg-white/10 border border-white/20 hover:bg-white/20 text-white py-3.5 px-4 rounded-xl text-center font-display font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2"
              >
                Panggil Manual
              </a>
            </div>
          </div>

          {/* Interactive Responsive Iframe Embed Map */}
          <div className="h-[350px] sm:h-[450px] lg:h-auto lg:col-span-7 bg-slate-100 relative group" id="gmaps-embed-container">
            {/* Real responsive iframe embed pointing to Gajahmungkur Semarang area */}
            <iframe
              src={CONTACT_DATA.googleMapsEmbedUrl}
              className="w-full h-full border-none absolute inset-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Kantor Jaya Abadi Waterproofing Semarang"
              id="google-maps-iframe"
            />
            {/* Visual safety cover banner in corner */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-2 rounded-lg text-[10px] sm:text-xs font-semibold text-slate-800 shadow-md flex items-center gap-2 border border-slate-100 pointer-events-none transition-opacity group-hover:opacity-75">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>Gajahmungkur, Kota Semarang</span>
            </div>
          </div>

        </div>

        {/* Extra trust stats beneath the Map section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-slate-200">
          <div className="text-center space-y-1">
            <div className="font-display font-black text-3xl sm:text-4xl text-brand-blue-light" id="stat-1">
              99%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Tingkat Ketuntasan</div>
            <div className="text-[10px] text-slate-500 font-light">Bebas dari kebocoran berulang</div>
          </div>
          <div className="text-center space-y-1">
            <div className="font-display font-black text-3xl sm:text-4xl text-brand-blue-light" id="stat-2">
              100%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Survei Semarang Gratis</div>
            <div className="text-[10px] text-slate-500 font-light">Tanpa dipungut biaya transportasi</div>
          </div>
          <div className="text-center space-y-1">
            <div className="font-display font-black text-3xl sm:text-4xl text-brand-blue-light" id="stat-3">
              2 Tahun
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Garansi Maksimal</div>
            <div className="text-[10px] text-slate-500 font-light">Jaminan sertifikat resmi tertulis</div>
          </div>
          <div className="text-center space-y-1">
            <div className="font-display font-black text-3xl sm:text-4xl text-brand-blue-light" id="stat-4">
              24 Jam
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Siap Emergency Kak</div>
            <div className="text-[10px] text-slate-500 font-light">Emergency kebocoran langsung chat</div>
          </div>
        </div>

      </div>
    </section>
  );
}
