import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav3 from "@/components/caos-conexion/Nav3";
import Hero3 from "@/components/caos-conexion/Hero3";
import Intro3 from "@/components/caos-conexion/Intro3";
import ProgramSection from "@/components/caos-conexion/ProgramSection";
import ProgramDetails from "@/components/caos-conexion/ProgramDetails";
import Testimonials from "@/components/descubriendo/Testimonials";
import Pricing3 from "@/components/caos-conexion/Pricing3";
import { DynamicHead } from "@/components/DynamicHead";
import Testimonials3 from "@/components/caos-conexion/Testimonials3";
import LeadMagnetBanner from "@/components/caos-conexion/LeadMagnetBanner";




const CaosConexion = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 60; // Altura aproximada de la navbar
      const extraOffset = 80; // Offset adicional para evitar overlap visual
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight - extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
    <DynamicHead taller="conexion" />
    <div className="min-h-screen overflow-x-hidden font-poppins text-text-dark">
      <Nav3 />
      <Hero3 onScrollToSection={scrollToSection} />
      <Pricing3 />
      <Intro3 onScrollToSection={scrollToSection}/>
      <Testimonials3 onScrollToSection={scrollToSection} />
      <ProgramSection onScrollToSection={scrollToSection} />
      <ProgramDetails onScrollToSection={scrollToSection}/>
      
      <Footer />

      {/* Lead Magnet Banner */}
      <LeadMagnetBanner
        heroId="hero"
        webhookUrl="https://script.google.com/macros/s/AKfycbwCefbkFMeQiNE__RY1TzEQSLimerv3kbf7G9hol49rgr6gldst9F4eK_Wbj1BW4iuX/exec"
        cooldownDays={1}
      />
    </div>
    </>
  );
};

export default CaosConexion;
