import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/descubriendo/Hero";
import Intro from "@/components/descubriendo/Intro";
import Testimonials from "@/components/descubriendo/Testimonials";
import TargetAudience  from "@/components/descubriendo/TargetAudience";
import FAQ from "@/components/descubriendo/FAQ";
import { Pricing } from "@/components/descubriendo/Pricing";
import Nav1 from "@/components/descubriendo/Nav1";
import { DynamicHead } from "@/components/DynamicHead";
import FacilitatorSection from "@/components/pasofirme/FacilitatorSection";
import Facilitator from "@/components/descubriendo/Facilitator";



const Descubriendo = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <DynamicHead taller="descubriendo" />
    <div className="min-h-screen font-poppins text-text-dark">
      <Nav1 />
      <Hero onScrollToSection={scrollToSection} />
      <Intro onScrollToSection={scrollToSection}/>
      <TargetAudience onScrollToSection={scrollToSection}/>
      <Facilitator />
      <Testimonials />
      <Pricing />
      <FAQ  />
      <Footer />
    </div>
    </>
  );
};

export default Descubriendo;
