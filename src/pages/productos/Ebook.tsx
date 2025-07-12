import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav3 from "@/components/caos-conexion/Nav3";
import Heroe from "@/components/ebook/Heroe";
import PersonalSection from "@/components/ebook/PersonalSection";
import GuideInclusions from "@/components/ebook/GuideInclusions";
import AudienceTestimonials from "@/components/ebook/AudienceTestimonials";
import PricingGuide from "@/components/ebook/PricinGuia";
import FAQguide from "@/components/ebook/FAQguide";
import { DynamicHead } from "@/components/DynamicHead";
import NavEbook from "@/components/ebook/NavEbook";





const Ebook = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <DynamicHead taller="ebook" />
    <div className="min-h-screen font-poppins text-text-dark">
      <NavEbook />
      <Heroe onScrollToSection={scrollToSection} />
      <PersonalSection/>
      <GuideInclusions/>
      <AudienceTestimonials/>
      <PricingGuide />
      <FAQguide />
      <Footer />
    </div>
    </>
  );
};

export default Ebook;
