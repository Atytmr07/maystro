import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServicesMatrix } from "@/components/ServicesMatrix";
import { GallerySection } from "@/components/GallerySection";
import { Testimonials } from "@/components/Testimonials";
import { TheMaestros } from "@/components/TheMaestros";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="bg-[#FFF5F0]">
      <Navbar />
      <Hero />
      <ServicesMatrix />
      <GallerySection />
      <Testimonials />
      <TheMaestros />
      <LocationSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
