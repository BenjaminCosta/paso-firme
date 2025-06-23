import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Nav3 from "@/components/caos-conexion/Nav3";
import Hero3 from "@/components/caos-conexion/Hero3";
import Intro3 from "@/components/caos-conexion/Intro3";
import ProgramSection from "@/components/caos-conexion/ProgramSection";




const CaosConexion = () => {
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
      <Hero3 onScrollToSection={scrollToSection} />
      <Intro3 />
      <ProgramSection />
      <Footer />
    </div>
    </>
  );
};

export default CaosConexion;
