
import HeroSection from "@/components/HeroSection";
import ContextSection from "@/components/ContextSection";
import WhyWorkshopSection from "@/components/WhyWorkshopSection";
import SkillsSection from "@/components/SkillsSection";
import FacilitatorSection from "@/components/FacilitatorSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-poppins text-text-dark">
      <Navbar />
      <HeroSection onScrollToSection={scrollToSection} />
      <ContextSection />
      <WhyWorkshopSection />
      <SkillsSection />
      <FacilitatorSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection onScrollToSection={scrollToSection} />
      <Footer />
    </div>
  );
};

export default Index;
