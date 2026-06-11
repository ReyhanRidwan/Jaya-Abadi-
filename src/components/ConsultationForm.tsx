import React, { useState } from "react";
import { MessageSquare, Calendar, Phone, ArrowUpRight, HelpCircle } from "lucide-react";
import { CONTACT_DATA, FAQ_ITEMS } from "../data";

export default function ConsultationForm() {
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [selectedIssue, setSelectedIssue] = useState("Atap Dak Beton Rembes / Bocor");
  const [clientMessage, setClientMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const handleSubmitToWA = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim()) {
      alert("Mohon masukkan Nama Anda.");
      return;
    }

    const compiledText = `Halo tim Jaya Abadi Semarang, saya ingin berkonsultasi mengenai perbaikan konstruksi:
- Nama: ${clientName}
- Telepon/WA: ${clientPhone || "Tidak diisi"}
- Jenis Kebocoran: ${selectedIssue}
- Detail Keluhan: ${clientMessage || "Survei langsung ke lokasi"}

Mohon hubungi saya kembali untuk menjadwalkan pengecekan survei di lokasi. Terima kasih.`;

    const encoded = encodeURIComponent(compiledText);
    window.open(`https://wa.me/${CONTACT_DATA.phone}?text=${encoded}`, "_blank");
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden" id="konsultasi">
      
      {/* Decorative safety lines top bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-safety-yellow via-brand-safety-orange to-brand-blue-light" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: FAQ Accordions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-blue-light bg-brand-blue-light/5 px-3 py-1.5 rounded-full inline-block">
                TANYA JAWAB (FAQ)
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight leading-tight">
                Pertanyaan yang Sering Diajukan Klien kami di Semarang
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                Sebelum mengundang teknisi kami ke lapangan, ketahui dasar-dasar pengerjaan waterproofing dan beton berkualitas berikut.
              </p>
            </div>

            {/* Accordion list */}
            <div className="space-y-3.5 pt-4" id="faq-accordions">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-150 rounded-xl overflow-hidden bg-slate-50 hover:bg-slate-100/50 transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-5 py-4 font-display font-bold text-sm sm:text-base text-slate-900 flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <span>{item.question}</span>
                      <span className={`text-brand-blue-light font-display font-medium text-lg transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}>
                        ＋
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-xs sm:text-sm font-light leading-relaxed border-t border-slate-100">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Column 2: Free Consultation constructor */}
          <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm" id="form-consultation">
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-brand-safety-orange font-bold text-xs uppercase tracking-widest">
                <Calendar size={14} />
                <span>FORMULIR JADWAL SURVEI</span>
              </div>
              <h3 className="font-display font-extrabold text-2xl text-slate-900 tracking-tight">
                Ajukan Jadwal Survei & Penawaran
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm font-medium">
                Pengecekan di lapangan wajib dilakukan oleh estimatorkami agar diagnosa keretakan beton Anda akurat.
              </p>
            </div>

            {/* Real form */}
            <form onSubmit={handleSubmitToWA} className="space-y-4">
              
              {/* Nama */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Nama Lengkap Anda (Wajib):
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Pak Budi"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue-light focus:outline-none text-slate-800"
                  id="form-input-name"
                />
              </div>

              {/* No HP */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Nomor HP / WhatsApp:
                </label>
                <input
                  type="tel"
                  placeholder="Contoh: 0812XXXXXXXX"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue-light focus:outline-none text-slate-800 font-mono"
                  id="form-input-phone"
                />
              </div>

              {/* Jenis Masalah */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Masalah Kebocoran Utama:
                </label>
                <select
                  value={selectedIssue}
                  onChange={(e) => setSelectedIssue(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue-light focus:outline-none text-slate-800"
                  id="form-select-issue"
                >
                  <option value="Atap Dak Beton Rembes / Bocor">Atap Dak Beton Rembes / Bocor</option>
                  <option value="Basement Hotel / Kantor Rembes Air Tanah">Basement Hotel / Kantor Rembes Air Tanah</option>
                  <option value="Retak Struktur Beton Kolom / Dinding">Retak Struktur Beton Kolom / Dinding</option>
                  <option value="Kamar Mandi Lantai Atas Bocor Kebawah">Kamar Mandi Lantai Atas Bocor Kebawah</option>
                  <option value="Kolam Renang / Ground Water Tank Bocor">Kolam Renang / Ground Water Tank Bocor</option>
                  <option value="Canopy / Balkon Gedung Rembes">Canopy / Balkon Gedung Rembes</option>
                </select>
              </div>

              {/* Pesan Tambahan */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Deskripsi Singkat Gejala (Opsional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Jelaskan sejak kapan rembes, seberapa luas keretakan, atau daerah rumah Anda secara kasar..."
                  value={clientMessage}
                  onChange={(e) => setClientMessage(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-brand-blue-light focus:outline-none text-slate-800"
                  id="form-textarea-message"
                />
              </div>

              {/* Submit CTA button */}
              <button
                type="submit"
                className="w-full bg-brand-blue-light hover:bg-brand-blue-dark text-white font-display font-bold py-4 px-6 rounded-xl text-xs sm:text-sm tracking-wider uppercase transition-all duration-205 flex items-center justify-center gap-2.5 shadow-md mt-6 active:scale-95"
                id="form-submit-wa"
              >
                <MessageSquare size={16} />
                Hubungi Konsultan Sekarang
                <ArrowUpRight size={14} className="text-brand-safety-yellow" />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
