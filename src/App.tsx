import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InfoStrip from "./components/InfoStrip";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import LocationMap from "./components/LocationMap";
import ConsultationForm from "./components/ConsultationForm";
import Footer from "./components/Footer";
import { MessageSquare, ShieldAlert } from "lucide-react";
import { CONTACT_DATA } from "./data";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased overflow-x-hidden" id="app-wrapper">
      {/* Sticky Top Navbar */}
      <Navbar />

      {/* Hero Section with slideshow and call actions */}
      <main id="main-content">
        <Hero />

        {/* Profil & Kontak Sektor 1: Quick info strip */}
        <InfoStrip />

        {/* Layanan Utama Sektor 2: Card grids with standard safety and high-pressure notes */}
        <Services />

        {/* Keunggulan Us & Estimator Biaya Sektor 3 */}
        <WhyChooseUs />

        {/* Galeri Proyek Sektor 4: Documentation work grids */}
        <Gallery />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Google Maps Embed Sektor 5 */}
        <LocationMap />

        {/* FAQ Accordion and Appointment Questionnaire */}
        <ConsultationForm />
      </main>

      {/* Footer Sektor 6 */}
      <Footer />

      {/* Floating Sticky WhatsApp Consultation Button (Mobile Specific) */}
      <div className="fixed bottom-6 right-6 z-40" id="floating-wa">
        <a
          href={`https://wa.me/${CONTACT_DATA.phone}?text=Halo%20Jaya%20Abadi,%20saya%20menghubungi%20Anda%20dari%20website%20landing%20page.%20Bisa%20konsultasi%20mengenai%20kebocoran%20beton/atap?`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 sm:px-5 sm:py-3.5 shadow-2xl transition-all hover:scale-105 active:scale-95 group font-display font-bold text-xs sm:text-sm tracking-wider uppercase border border-white/20"
          title="Chat WhatsApp Sekarang"
        >
          <MessageSquare size={18} className="animate-pulse" />
          <span className="hidden sm:inline">Hubungi WA (Gratis)</span>
        </a>
      </div>
    </div>
  );
}
