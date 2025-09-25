import { DynamicHead } from "@/components/DynamicHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Hero,
  Who,
  What,
  Outcomes,
  Testimonials,
  Modules,
  Pricing,
  CTA
} from "@/components/pubertad-adolescencia";
import Navbar4 from "@/components/pubertad-adolescencia/Navbar4";

const PubertadAdolescencia = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <DynamicHead taller="pubertad" />
      <div className="min-h-screen font-poppins text-text-dark overflow-x-hidden">
        <Navbar4 />
        <main>
          
          <Hero onScrollToSection={scrollToSection} />
          <Pricing  />
          <Who onScrollToSection={scrollToSection} />
          <What onScrollToSection={scrollToSection} />
          <Outcomes onScrollToSection={scrollToSection} />
          <Testimonials onScrollToSection={scrollToSection} />
          <Modules onScrollToSection={scrollToSection} />
          <CTA onScrollToSection={scrollToSection} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PubertadAdolescencia;
