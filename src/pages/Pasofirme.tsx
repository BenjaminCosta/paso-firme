
import HeroSection from "@/components/pasofirme/HeroSection";
import ContextSection from "@/components/pasofirme/ContextSection";
import WhyWorkshopSection from "@/components/pasofirme/WhyWorkshopSection";
import SkillsSection from "@/components/pasofirme/SkillsSection";
import FacilitatorSection from "@/components/pasofirme/FacilitatorSection";
import PricingSection from "@/components/pasofirme/PricingSection";
import TestimonialsSection from "@/components/pasofirme/TestimonialsSection";
import FinalCTASection from "@/components/pasofirme/FinalCTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DynamicHead } from "@/components/DynamicHead";
const Pasofirme = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    <DynamicHead taller="pasofirme" />
    <div className="min-h-screen font-poppins text-text-dark">
      <Navbar />
      <HeroSection onScrollToSection={scrollToSection} />
      <ContextSection />
      <WhyWorkshopSection onScrollToSection={scrollToSection} />
      <SkillsSection />
      <FacilitatorSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection onScrollToSection={scrollToSection} />
      <Footer />
    </div>
    </>
  );
};

export default Pasofirme;
