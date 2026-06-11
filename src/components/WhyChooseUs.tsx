import { useState } from "react";
import { Award, CheckCircle, ShieldCheck, MapPin, Calculator, Send, Info } from "lucide-react";
import { ADVANTAGES, CONTACT_DATA } from "../data";

export default function WhyChooseUs() {
  // Cost estimator states
  const [selectedServiceType, setSelectedServiceType] = useState<string>("waterproofing");
  const [areaSize, setAreaSize] = useState<number>(30); 
  const [concreteCondition, setConcreteCondition] = useState<string>("sedang"); 

  // Estimate calculated dynamically
  const calculateEstimate = () => {
    let pricePerSquareMeter = 0;
    if (selectedServiceType === "waterproofing") {
      pricePerSquareMeter = 110000; // Average price in IDR per m2
    } else {
      pricePerSquareMeter = 195000; // Average price for injection packers / points
    }

    let multiplier = 1;
    if (concreteCondition === "ringan") multiplier = 0.9;
    if (concreteCondition === "berat") multiplier = 1.25;

    return Math.round(areaSize * pricePerSquareMeter * multiplier);
  };

  const estimatedValue = calculateEstimate();

  const handleSendEstimateToWA = () => {
    const serviceName = selectedServiceType === "waterproofing" ? "Waterproofing Atap/Dak" : "Injeksi Beton Rettak";
    const conditionText = concreteCondition === "ringan" ? "Retak Ringan (Rembes Halus)" : concreteCondition === "sedang" ? "Retak Sedang (Kebocoran Genangan)" : "Retak Berat / Air Mengalir Aktif";
    
    const textMessage = `Halo spesialis Jaya Abadi Semarang, saya mencoba kalkulator estimasi di website Anda:
- Layanan: Jasa ${serviceName}
- Estimasi Luas / Titik: ${areaSize} ${selectedServiceType === "waterproofing" ? "m²" : "Titik Packer Injeksi"}
- Kondisi Beton: ${conditionText}
- Estimasi Kasar Aplikasi: Rp ${estimatedValue.toLocaleString("id-ID")}

Mohon jadwalkan survei ke lokasi saya untuk pengecekan detail gratis dan penawaran resmi. Terima kasih.`;

    const encodedText = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${CONTACT_DATA.phone}?text=${encodedText}`, "_blank");
  };

  return (
    <section className="py-20 bg-brand-blue-dark text-white relative overflow-hidden" id="keunggulan">
      {/* Absolute grid and circle patterns represent safety netting and concrete reinforcers */}
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-safety-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-safety-yellow font-display font-extrabold text-xs uppercase tracking-widest bg-brand-safety-yellow/10 px-3.5 py-1.5 rounded-full border border-brand-safety-yellow/20">
            MENGAPA JAYA ABADI?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight">
            Keunggulan Utama Jaya Abadi <span className="text-brand-safety-yellow">Waterproofing</span> Semarang
          </h2>
          <div className="h-1 w-20 bg-brand-safety-yellow mx-auto rounded" />
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Dedikasi kami tertumpu pada ketuntasan penyelesaian rembes dan konstruksi atap yang kokoh. Kami hadir dengan sistem kerja berstandar sipil modern.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {ADVANTAGES.map((adv) => {
            return (
              <div
                key={adv.id}
                className="bg-white/5 border border-white/10 hover:border-brand-safety-yellow/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 group hover:translate-y-[-4px]"
                id={`advantage-card-${adv.id}`}
              >
                {/* Custom Icon Switcher */}
                <div className="w-12 h-12 rounded-xl bg-brand-safety-yellow text-brand-blue-dark flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {adv.iconName === "Award" && <Award size={24} />}
                  {adv.iconName === "CheckCircle" && <CheckCircle size={24} />}
                  {adv.iconName === "ShieldCheck" && <ShieldCheck size={24} />}
                  {adv.iconName === "MapPin" && <MapPin size={24} />}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-safety-yellow transition-colors">
                  {adv.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-light">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Estimator Section Area */}
        <div className="bg-slate-900/65 rounded-3xl border border-white/10 p-6 md:p-10 lg:p-12" id="estimasi">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Intro text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-safety-orange/15 text-brand-safety-orange border border-brand-safety-orange/30 px-3 py-1 rounded-md text-xs font-bold uppercase">
                <Calculator size={14} />
                <span>Simulasi Anggaran Transparan</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                Hitung Estimasi Kasar Kebutuhan Konstruksi Anda
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Gunakan alat bantu simulator kami untuk mendapatkan gambaran awal pengeluaran. Estimasi harga Jaya Abadi bersaing ketat namun tetap mengutamakan mutu orisinalitas bahan waterproofing & sealant.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-brand-safety-yellow/10 text-brand-safety-yellow flex items-center justify-center shrink-0 text-xs font-bold">1</span>
                  <span>Tidak ada biaya survei / kunjungan awal di Semarang.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-brand-safety-yellow/10 text-brand-safety-yellow flex items-center justify-center shrink-0 text-xs font-bold">2</span>
                  <span>Harga akhir dapat berubah setelah tim meninjau struktur langsung.</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <span className="w-6 h-6 rounded-full bg-brand-safety-yellow/10 text-brand-safety-yellow flex items-center justify-center shrink-0 text-xs font-bold">3</span>
                  <span>Setiap penawaran resmi dilampiri sertifikat jaminan kerja.</span>
                </div>
              </div>
            </div>

            {/* Interactive Calculator Element */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl relative border-t-4 border-brand-safety-yellow">
              <h4 className="font-display font-extrabold text-lg text-slate-900 mb-6 flex items-center gap-2">
                Kalkulator Estimasi Proyek
              </h4>

              <div className="space-y-5">
                {/* Service Type Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">
                    Pilih Kategori Jasa:
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedServiceType("waterproofing");
                        if (areaSize > 250) setAreaSize(50);
                      }}
                      className={`py-3 px-4 rounded-xl text-center font-display font-bold text-xs tracking-wider uppercase transition-all border ${
                        selectedServiceType === "waterproofing"
                          ? "bg-brand-blue-light text-white border-brand-blue-light"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                      id="calc-opt-waterproofing"
                    >
                      Waterproofing Atap
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedServiceType("injection");
                        if (areaSize > 100) setAreaSize(10);
                      }}
                      className={`py-3 px-4 rounded-xl text-center font-display font-bold text-xs tracking-wider uppercase transition-all border ${
                        selectedServiceType === "injection"
                          ? "bg-brand-blue-light text-white border-brand-blue-light"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                      id="calc-opt-injection"
                    >
                      Injeksi Beton
                    </button>
                  </div>
                </div>

                {/* Range Slider for Dimensions */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-extrabold text-slate-400 uppercase tracking-widest">
                    <span>
                      {selectedServiceType === "waterproofing" ? "Estimasi Luas Area (m²):" : "Estimasi Titik Injeksi (Titik):"}
                    </span>
                    <span className="text-brand-blue-light font-bold text-sm font-mono normal-case">
                      {areaSize} {selectedServiceType === "waterproofing" ? "m²" : "Titik Packer"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={selectedServiceType === "waterproofing" ? "5" : "3"}
                    max={selectedServiceType === "waterproofing" ? "300" : "50"}
                    value={areaSize}
                    onChange={(e) => setAreaSize(parseInt(e.target.value) || 5)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-safety-orange"
                    id="calc-slider"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                    <span>{selectedServiceType === "waterproofing" ? "5 m²" : "3 Titik"}</span>
                    <span>{selectedServiceType === "waterproofing" ? "300 m²" : "50 Titik"}</span>
                  </div>
                </div>

                {/* Condition dropdown */}
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-400 uppercase tracking-widest block">
                    Kondisi Kerusakan / Keretakan:
                  </label>
                  <select
                    value={concreteCondition}
                    onChange={(e) => setConcreteCondition(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue-light text-slate-850"
                    id="calc-select-cond"
                  >
                    <option value="ringan">Remesan ringan / Lembab tipis</option>
                    <option value="sedang">Bocor tetesan air saat hujan</option>
                    <option value="berat">Retak structural parah / Air bocor aktif</option>
                  </select>
                </div>

                {/* Simulated Pricing Output Card */}
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 flex items-center justify-between mt-6">
                  <div>
                    <span className="text-xs text-slate-400 font-bold block uppercase tracking-wider">
                      Estimasi Kasar Biaya:
                    </span>
                    <span className="text-2xl sm:text-3xl font-display font-black text-brand-blue-dark">
                      Rp {estimatedValue.toLocaleString("id-ID")}
                    </span>
                    <span className="text-[10px] text-brand-concrete-grey block mt-0.5">
                      *Belum termasuk diskon volume area luas.
                    </span>
                  </div>
                  <div className="hidden sm:block text-slate-100 bg-brand-blue-dark p-2 rounded-lg text-xs hover:bg-slate-800 transition-colors">
                    <Info size={18} className="text-brand-safety-yellow" />
                  </div>
                </div>

                {/* Submit trigger directly to WhatsApp */}
                <button
                  type="button"
                  onClick={handleSendEstimateToWA}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-display font-bold py-3.5 px-6 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-95"
                  id="calc-submit-wa"
                >
                  <Send size={16} />
                  Kirim Hasil Ke WA & Survei Lokasi
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
