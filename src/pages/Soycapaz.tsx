import Footer from "@/components/Footer";
import EmotionalSection from "@/components/soy-capaz/EmotionalSection";
import Hero2 from "@/components/soy-capaz/Hero2";
import Modules from "@/components/soy-capaz/Modules";
import Nav2 from "@/components/soy-capaz/Nav2";
import Pricing2 from "@/components/soy-capaz/Pricing2";
import Section1 from "@/components/soy-capaz/Section1";



const SoyCapaz = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="min-h-screen font-poppins text-text-dark">
      <Nav2 />
      <Hero2 onScrollToSection={scrollToSection} />
      <Section1 onScrollToSection={scrollToSection} />
      <EmotionalSection />
      <Modules />
      <Pricing2 />
      <Footer />
    </div>
  );
};

export default SoyCapaz;