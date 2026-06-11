import { ServiceItem, AdvantageItem, ProjectItem, ContactData } from "./types";

export const CONTACT_DATA: ContactData = {
  companyName: "Jaya Abadi",
  phone: "6285869012339",
  phoneDisplay: "0858-6901-2339",
  email: "jayaabadikonstruksi@gmail.com",
  address: "Jl. Karang Rejo Raya, RT.8/RW.2, Karangrejo, Kec. Gajahmungkur, Kota Semarang, Jawa Tengah 50231",
  addressMapsLink: "https://maps.google.com/?q=Jl.+Karang+Rejo+Raya,+RT.8/RW.2,+Karangrejo,+Kec.+Gajahmungkur,+Kota+Semarang,+Jawa+Tengah+50231",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.9888941017403!2d110.4079815!3d-7.0105315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b509ef48fc7%3A0x6735e236b2cb962c!2sJl.%20Karang%20Rejo%20Raya%2C%20Semarang%20City%2C%22%20Central%20Java%2050231!5e0!3m2!1sen!2sid!4v1717900000000!5m2!1sen!2sid",
  operatingHours: "Senin - Sabtu: 08:00 - 17:00 (Minggu: Libur / Siap Siaga Emergency Chat)"
};

export const HERO_SLIDES = [
  {
    id: "slide1",
    title: "Solusi Kebocoran Beton & Atap Profesional di Semarang",
    subtitle: "Mengatasi beton retak, rembes, dan kebocoran gedung dengan metode Injeksi Beton & Waterproofing bergaransi.",
    imageUrl: "/src/assets/images/hero_waterproofing_1781180624241.png",
    badge: "LAYANAN KHUSUS KONSTRUKSI"
  },
  {
    id: "slide2",
    title: "Sistem Penahan Air Injeksi Polyurethane & Beton",
    subtitle: "Menghentikan rembesan air pada basement, kolam renang, dan terowongan dengan injeksi resin reaktif bertekanan tinggi.",
    imageUrl: "/src/assets/images/hero_injection_1781180638316.png",
    badge: "TEKNOLOGI INJEKSI MODERN"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "waterproofing",
    title: "Jasa Waterproofing",
    badge: "PROYEK KETINGGIAN & SAFETY TINGGI",
    description: "Perlindungan dak beton, atap, kamar mandi, dan balkon dengan material waterproofing terbaik tahan cuaca ekstrem.",
    longDescription: "Proses pengerjaan dilakukan oleh tim spesialis bersertifikasi kerja di ketinggian (K3 Ketinggian). Kami mengaplikasikan sistem waterproofing modern seperti membran bakar (torch-on), liquid elastomeric polyurethane coating, dan semen fleksibel dua komponen yang mampu menjamin atap rata/flat deck Anda terproteksi sepenuhnya dari retak rambut dan rembesan air.",
    features: [
      "Waterproofing Dak Beton & Canopy Flat",
      "Sistem Membran Bakar Aspal Premium",
      "Kamar Mandi Lantai Atas & Area Basah",
      "Balkon & Rooftop Garden dengan Proteksi Akar",
      "Standar Safety APD Lengkap (Harness & Lifeline)",
      "Garansi Kebocoran s.d 5 Tahun"
    ],
    iconName: "Shield",
    imageUrl: "/src/assets/images/workers_safety_roof_1781180651062.png"
  },
  {
    id: "injection",
    badge: "SPESIALIS RETAK & STRUKTUR",
    title: "Injeksi Beton",
    description: "Mengatasi beton retak structural, basement rembes, dan kebocoran kolam menggunakan metode injeksi resin PU.",
    longDescription: "Solusi mutakhir menghentikan aliran air dari dalam retakan struktur beton tanpa membongkar beton. Kami menggunakan alat mesin injeksi bertekanan tinggi (hingga 400 bar) untuk memompakan bahan Polyurethane reaktif atau Epoxy resin. PU reaktif akan langsung mengembang menjadi busa padat kedap air ketika terkena kelembaban, menyumbat semua pori-pori retakan sampai ke dalam.",
    features: [
      "Injeksi Polyurethane (PU) Reaktif Cepat",
      "Injeksi Semen Epoxy Penguat Struktur",
      "Perbaikan Dinding Basement Rembes Air Tanah",
      "Mengatasi Kebocoran Ground Water Tank & Kolam",
      "Menghentikan Air Mengalir Seketika (Rapid Stopping)",
      "Garansi Hasil Injeksi yang Akurat"
    ],
    iconName: "Cpu",
    imageUrl: "/src/assets/images/hero_injection_1781180638316.png"
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: "exp",
    title: "Berpengalaman & Profesional",
    description: "Memiliki keahlian bertahun-tahun dalam menangani kebocoran kompleks pada gedung bertingkat, ruko, dan rumah tinggal.",
    iconName: "Award"
  },
  {
    id: "materials",
    title: "Material Berkualitas Tinggi",
    description: "Kami hanya menggunakan material bersertifikasi standar industri (Sika, Fosroc, BASF, dll.) untuk ketahanan jangka panjang.",
    iconName: "CheckCircle"
  },
  {
    id: "guarantee",
    title: "Bergaransi Resmi",
    description: "Memberikan jaminan kepuasan berupa sertifikat garansi tertulis. Kebocoran kembali akan kami tinjau tanpa biaya tambahan.",
    iconName: "ShieldCheck"
  },
  {
    id: "survey",
    title: "Survei Lokasi Gratis",
    description: "Layanan survei dan konsultasi gratis untuk wilayah Kota Semarang dan sekitarnya. Kami estimasi biaya seakurat mungkin.",
    iconName: "MapPin"
  }
];

export const GALLERY_ITEMS: ProjectItem[] = [
  {
    id: "p1",
    title: "Waterproofing Membran Bakar Gedung Komersial",
    category: "waterproofing",
    tag: "Dak Beton Atap",
    imageUrl: "/src/assets/images/hero_waterproofing_1781180624241.png",
    location: "Gajahmungkur, Semarang",
    description: "Pemasangan membran bakar aspal ketebalan 3mm dengan pengawasan keselamatan kerja K3 penuh."
  },
  {
    id: "p2",
    title: "Injeksi Retak Beton Basement Hotel",
    category: "injection",
    tag: "Injeksi PU",
    imageUrl: "/src/assets/images/hero_injection_1781180638316.png",
    location: "Simpang Lima, Semarang",
    description: "Injeksi polyurethane reaktif untuk rembesan air tanah di dinding beton penahan (retaining wall) basement."
  },
  {
    id: "p3",
    title: "Waterproofing Dak Rumah Tinggal Mewah",
    category: "waterproofing",
    tag: "Dak Beton",
    imageUrl: "/src/assets/images/workers_safety_roof_1781180651062.png",
    location: "Candi Baru, Semarang",
    description: "Aplikasi waterproofing elastomer poliuretan multi-lapisan pada atap beton seluas 350 m²."
  },
  {
    id: "p4",
    title: "Injeksi Kebocoran Ground Water Tank",
    category: "injection",
    tag: "Tangki Air / GWT",
    imageUrl: "/src/assets/images/hero_injection_1781180638316.png",
    location: "Tembalang, Semarang",
    description: "Menyumbat micro-cracks pada tangki penyimpanan air bawah tanah perumahan agar tidak merembes."
  },
  {
    id: "p5",
    title: "Waterproofing Kamar Mandi Rooftop",
    category: "waterproofing",
    tag: "Kamar Mandi",
    imageUrl: "/src/assets/images/hero_waterproofing_1781180624241.png",
    location: "Kec. Banyumanik, Semarang",
    description: "Aplikasi semen fleksibel bertulang kasa fiber di lantai semen dan sambungan pipa air."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Berapa lama garansi yang diberikan Jaya Abadi?",
    answer: "Kami memberikan garansi tertulis mulai dari 2 hingga 5 tahun tergantung dari jenis metode waterproofing yang dipilih dan kondisi awal struktur beton Anda."
  },
  {
    question: "Apakah survei lokasi di wilayah Semarang benar-benar gratis?",
    answer: "Ya, betul sekali. Kami melayani survei secara gratis untuk seluruh wilayah Semarang (Gajahmungkur, Tembalang, Banyumanik, Simpang Lima, Semarang Barat, Utara, Timur, Selatan)."
  },
  {
    question: "Bagaimana cara kerja metode Injeksi Polyurethane (PU)?",
    answer: "Lubang kecil dibor di sepanjang jalur retakan beton dengan kemiringan 45 derajat. Kemudian penetrator besi (packer) dimasukkan dan terkunci. Polyurethane dipompa dengan mesin bertekanan tinggi sehingga menyumbat jalur aliran air dan mengembang menjadi busa kedap air yang tahan lama."
  },
  {
    question: "Dapatkah pengerjaan waterproofing dilakukan saat musim hujan?",
    answer: "Untuk waterproofing dak atap eksternal/membran bakar, disarankan saat kondisi cuaca cerah agar material melekat sempurna. Namun untuk injeksi beton internal (seperti basement bocor), metode ini justru paling efektif diaplikasikan saat kebocoran aktif terjadi untuk melihat jalur rembesan air secara riil."
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Bpk. Hendra Wijaya",
    role: "Pemilik Ruko",
    location: "Karangrejo, Semarang",
    comment: "Sangat puas dengan penanganan dak beton ruko saya yang bocor parah bertahun-tahun. Tim Jaya Abadi langsung datang, survei gratis, dan melakukan waterproofing rapi profesional. Sekarang sudah aman dari hujan deras."
  },
  {
    id: "t2",
    name: "Ibu Siska Amelia",
    role: "Manajer Pemeliharaan Gedung",
    location: "Semarang Tengah",
    comment: "Injeksi beton basemen berfungsi luar biasa. Menghentikan air rembesan tanah seketika. Tim menggunakan helm, rompi, tali harness pengaman lengkap. Sangat mengutamakan keselamatan kerja."
  },
  {
    id: "t3",
    name: "Bpk. Rahmad",
    role: "Arsitek / Kontraktor Swasta",
    location: "Banyumanik, Semarang",
    comment: "Sudah langganan beberapa proyek dengan Jaya Abadi untuk waterproofing pelat atap atas. Garansinya jelas, pengerjaan cepat dan rapi. Sangat merekomendasikan jasa mereka di Semarang!"
  }
];
