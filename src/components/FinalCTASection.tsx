
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onScrollToSection: (id: string) => void;
}

const FinalCTASection = ({ onScrollToSection }: FinalCTASectionProps) => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-purple"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-transparent"></div>
      <div className="container mx-auto max-w-4xl text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            La secundaria empieza en unos meses...
          </h2>
          <p className="text-xl mb-4">
            <em>¿Tu hijo está emocionalmente preparado?</em>
          </p>
          <p className="text-lg mb-8 opacity-90">
            No dejes que enfrente este gran cambio sin las herramientas emocionales que necesita. 
            Dale la confianza y las habilidades para brillar en esta nueva etapa.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-brand-teal hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-scale-in"
            onClick={() => onScrollToSection('pricing')}
            style={{animationDelay: '0.5s'}}
          >
            Inscribir a mi hijo ahora
          </Button>
          <p className="text-sm mt-4 opacity-80">
            Cupos limitados • Garantía de satisfacción • Inversión en su futuro emocional
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
