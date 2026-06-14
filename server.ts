import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize GenAI client lazily or with a guard to prevent startup crashes when keys are unavailable
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log("Gemini API client initialized successfully on server-side.");
  } catch (error) {
    console.error("Failed to initialize Gemini API client:", error);
  }
} else {
  console.warn("GEMINI_API_KEY is not configured or holds a placeholder value. Chatbot will run in fallback simulation mode.");
}

// System Instruction for the Jaya Abadi Assistant
const SYSTEM_INSTRUCTION = `Anda adalah "Abdi", chatbot AI asisten pintar dari Jaya Abadi, penyedia jasa waterproofing (anti-bocor) dan injeksi beton spesialis andal di Semarang, Jawa Tengah.

Tugas utama Anda:
1. Membantu menjawab pertanyaan umum mengenai layanan Jaya Abadi.
2. Menjelaskan secara ringkas perbedaan antara Waterproofing dan Injeksi Beton:
   - Waterproofing (Anti-Bocor): Perlindungan preventif/reaktif permukaan luar/atas seperti dak atap beton rata, balkon, canopi, atau kamar mandi basah. Kita mengaplikasikan membran bakar aspal ketebalan 3mm, liquid elastomer polyurethane coating, dan semen fleksibel. Ini dikerjakan oleh tim yang tersertifikasi kerja di ketinggian (K3 Ketinggian) dengan peralatan keselamatan APD lengkap yaitu harness & lifeline.
   - Injeksi Beton: Solusi perbaikan kebocoran langsung pada titik retak konstruksi (basement merembes, kolam renang bocor, ground water tank/GWT) dengan menyuntikkan resin Polyurethane (PU) reaktif bertekanan tinggi s.d 400 bar. PU reaktif mengembang jadi busa padat kedap air ketika terkena kelembaban untuk menyumbat celah dari dalam tanpa merusak beton.
3. Menyampaikan informasi garansi: Jaya Abadi memberikan garansi resmi lisan & tertulis selama 1 s.d 2 tahun (sesuai jenis pengerjaan & kondisi beton awal). Kebocoran kembali dalam masa garansi ditinjau gratis tanpa biaya tambahan.
4. Menawarkan survei lokasi GRATIS khusus wilayah Kota Semarang dan sekitarnya (seperti Gajahmungkur, Tembalang, Banyumanik, Simpang Lima, dll.).
5. Memandu penjadwalan survei atau konsultasi. Jika klien ingin menjadwalkan kunjungan atau estimasi, tanyakan denga sopan Nama, Kendala Kebocoran (misal dak bocor atau basement rembes), dan Area Lokasi mereka. Berikan juga tautan WhatsApp kami (https://wa.me/6285869012339) agar mereka bisa terhubung langsung secara instan.

Informasi Jaya Abadi:
- Telepon/WhatsApp: 0858-6901-2339 (6285869012339)
- Email: jayaabadikonstruksi@gmail.com
- Alamat: Jl. Karang Rejo Raya, RT.8/RW.2, Karangrejo, Kec. Gajahmungkur, Kota Semarang
- Waktu Operasional: Senin - Sabtu: 08:00 - 17:00 WIB (Hari Minggu libur fisik, tapi tetap siap siaga melayani chat emergency via WhatsApp)

Aturan Gaya Bicara:
- Bahasa: Harus menggunakan Bahasa Indonesia yang ramah, sopan, dan profesional. Sapa klien dengan rasa hormat seperti "Bapak", "Ibu", atau "Kak".
- Format: Gunakan list (poin-poin) yang rapi bila menjelaskan agar sangat mudah dibaca. Jangan terlalu panjang lebar di satu paragraf.`;

// API routes for Chatbot
app.post("/api/chat", async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Messages array is required." });
    }

    // fallback simulation mode if AI is not available
    if (!ai) {
      console.log("No Gemini API key available. Running chat response in mock/simulation mode.");
      const lastUserMsg = messages[messages.length - 1]?.text || "";
      let mockReply = "";

      const lowerMsg = lastUserMsg.toLowerCase();
      if (lowerMsg.includes("beda") || lowerMsg.includes("perbedaan") || (lowerMsg.includes("waterproofing") && lowerMsg.includes("injeksi"))) {
        mockReply = `Halo Kak! Saya Abdi, asisten Jaya Abadi. Berikut adalah perbedaan mendasar layanan kami:\n\n` +
          `• **Waterproofing (Anti-Bocor)**: Perlindungan preventif permukaan beton luar/atas (seperti dak atap beton, balkon, kanopi) dari rembesan air hujan menggunakan sistem membran bakar aspal 3mm atau liquid elastomer PU. Sangat penting sebelum beton mengalami abrasi dan pengeroposan.\n\n` +
          `• **Injeksi Beton**: Perbaikan langsung jika kebocoran aktif sudah terjadi di struktur beton (seperti basement rembes air tanah, kolam renang bocor, ground water tank/GWT retak). Kami suntikkan polyurethane (PU) reaktif bertekanan tinggi ke dalam retakan agar mengembang menyumbat rembesan dari dalam tanpa harus membongkar beton.\n\n` +
          `Apakah ada area beton Bapak/Ibu yang sedang mengalami rembesan atau bocor saat ini baru? Kami menyediakan konsultasi & survei sepenuhnya gratis!`;
      } else if (lowerMsg.includes("garansi") || lowerMsg.includes("jaminan")) {
        mockReply = `Halo Kak! Seluruh pengerjaan waterproofing dan injeksi beton kami dilindungi oleh **Garansi Resmi Tertulis selama 1 hingga 2 tahun** (sesuai dengan tipe material dan tingkat keparahan beton).\n\n` +
          `Jika terjadi kebocoran berulang pada area yang telah kami perbaiki selama masa garansi, tim Jaya Abadi siap meluncur kembali untuk pemeriksaan dan perbaikan tanpa biaya tambahan.`;
      } else if (lowerMsg.includes("survei") || lowerMsg.includes("biaya") || lowerMsg.includes("gratis") || lowerMsg.includes("jadwal") || lowerMsg.includes("daftar") || lowerMsg.includes("booking")) {
        mockReply = `Tentu Kak, kami menyediakan **Survei Lokasi & Konsultasi GRATIS** untuk seluruh wilayah Kota Semarang!\n\n` +
          `Agar kami dapat menjadwalkannya dengan cepat, mohon bagikan informasi berikut:\n` +
          `1. **Nama Anda**:\n` +
          `2. **Kendala Kebocoran** (retak beton, dak bocor, basemen rembes, dll):\n` +
          `3. **Area / Alamat Lokasi**:\n\n` +
          `Bapak/Ibu juga dapat langsung terhubung secara instan ke admin teknis kami via WhatsApp ke nomor **0858-6901-2339** atau klik link berikut: [Hubungi WhatsApp Kami](https://wa.me/6285869012339?text=Halo%2520Jaya%2520Abadi%252C%2520saya%2520tertarik%2520dengan%2520layanan%2520survei%2520gratis%2520untuk%2520perbaikan%2520kebocoran).`;
      } else if (lowerMsg.includes("wa") || lowerMsg.includes("whatsapp") || lowerMsg.includes("nomor") || lowerMsg.includes("telepon") || lowerMsg.includes("contact") || lowerMsg.includes("kontak")) {
        mockReply = `Anda dapat langsung menghubungi kami di nomor WhatsApp **0858-6901-2339** (0858-6901-2339) atau klik tautan berikut untuk langsung memulai chat: [Chat WhatsApp Jaya Abadi](https://wa.me/6285869012339).\n\n` +
          `Kami beroperasi penuh Senin s.d Sabtu jam 08:00 - 17:00, namun admin WhatsApp kami akan merespons secepat mungkin di hari Minggu/Libur untuk keadaan darurat (Emergency Bocor) demi ketenangan hunian Anda.`;
      } else {
        mockReply = `Halo Kak! Selamat datang di spesialis perbaikan kebocoran Jaya Abadi Semarang. Saya Abdi, asisten virtual Anda. \n\n` +
          `Ada yang bisa saya bantu jelaskan hari ini? Kami ahli dalam:\n` +
          `1. **Waterproofing** (pelapis anti-bocor dak atap, balkon, membran bakar K3 Ketinggian)\n` +
          `2. **Injeksi Beton PU** (menghentikan basemen bocor, kolam rembes, retak struktur beton)\n\n` +
          `Semua layanan dilindungi **Garansi Resmi 1-2 Tahun** dan kami melayani **Survei Lapangan GRATIS** untuk area Kota Semarang.`;
      }
      return res.json({ text: mockReply });
    }

    // Convert chat messages to conform to GoogleGenAI input schema
    const contents = messages.map((m: any) => ({
      role: m.role === "assistant" ? "model" : m.role,
      parts: [{ text: m.text || m.content }]
    }));

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    res.json({ text: response.text });
  } catch (error: any) {
    console.error("Error in AI Chatbot API:", error);
    res.status(500).json({ error: error.message || "An error occurred with Gemini." });
  }
});

// Setup Vite or Static File Hosting
async function setupVite() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite development middleware mounted.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Static file serving configured for production.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

setupVite().catch((err) => {
  console.error("Vite server setup failed:", err);
});
