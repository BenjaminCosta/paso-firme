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
import Facilitator3 from "@/components/caos-conexion/Facilitator3";
import Testimonials3 from "@/components/caos-conexion/Testimonials3";




const CaosConexion = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <DynamicHead taller="conexion" />
    <div className="min-h-screen font-poppins text-text-dark">
      <Nav3 />
      <Hero3 onScrollToSection={scrollToSection} />
      <Intro3 />
      <ProgramSection />
      <Testimonials3 />
      <Facilitator3 />
      <ProgramDetails />
      <Pricing3 />
      <Footer />
    </div>
    </>
  );
};

export default CaosConexion;
