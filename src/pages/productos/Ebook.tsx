import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav3 from "@/components/caos-conexion/Nav3";
import Heroe from "@/components/ebook/Heroe";
import PersonalSection from "@/components/ebook/PersonalSection";
import GuideInclusions from "@/components/ebook/GuideInclusions";
import AudienceTestimonials from "@/components/ebook/AudienceTestimonials";
import PricingFAQ from "@/components/ebook/PricingFAQ";





const Ebook = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="min-h-screen font-poppins text-text-dark">
      <Nav3 />
      <Heroe />
      <PersonalSection/>
      <GuideInclusions/>
      <AudienceTestimonials/>
      <PricingFAQ />
      <Footer />
    </div>
    </>
  );
};

export default Ebook;
