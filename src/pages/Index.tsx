import Header from "./_components/Header.tsx";
import HeroSection from "./_components/HeroSection.tsx";
import ServicesSection from "./_components/ServicesSection.tsx";
import PricingSection from "./_components/PricingSection.tsx";
import WhyChooseUs from "./_components/WhyChooseUs.tsx";
import GallerySection from "./_components/GallerySection.tsx";
import FAQSection from "./_components/FAQSection.tsx";
import CTASection from "./_components/CTASection.tsx";
import Footer from "./_components/Footer.tsx";
import SkyBackground from "./_components/SkyBackground.tsx";

export default function Index() {
  return (
    <div className="relative min-h-screen">
      <SkyBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <PricingSection />
          <WhyChooseUs />
          <GallerySection />
          <FAQSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
