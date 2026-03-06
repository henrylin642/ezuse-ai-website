/**
 * Home Page - Ezuse AI Official Website
 * CIS Design System: Brand Orange #FF8A3D + Deep Charcoal #1C1C1C + Warm Beige #FFF4E6
 * Typography: Source Sans 3 + Noto Sans TC
 * Sections: Hero, Why, Products, Cases, Otter, Contact, Footer
 */
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ProductsSection from "@/components/ProductsSection";
import CasesSection from "@/components/CasesSection";
import OtterSection from "@/components/OtterSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhySection />
      <ProductsSection />
      <CasesSection />
      <OtterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
