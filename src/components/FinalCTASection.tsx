import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  onScrollToSection: (id: string) => void;
}

const FinalCTASection = ({ onScrollToSection }: FinalCTASectionProps) => {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-white">
      {/* Elementos decorativos con blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-brand-teal/10 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-brand-purple/10 blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-coral/5 blur-3xl"></div>
      </div>

      {/* Contenedor principal con animación por CSS */}
      <div className="container mx-auto max-w-4xl relative z-10 animate-fade-up">
        <div className="backdrop-blur-sm bg-white/80 border border-gray-100 rounded-3xl p-12 shadow-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 opacity-90 z-0"></div>

          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              La secundaria empieza en unos meses...
              <br />
              <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                ¿Tu hijo está emocionalmente preparado?
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              No dejes que enfrente este gran cambio sin las herramientas emocionales que necesita. 
              Dale la confianza y las habilidades para brillar en esta nueva etapa.
            </p>

            <div className="pt-4">
              <Button 
                size="lg" 
                className="relative overflow-hidden group px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 shadow-lg"
                onClick={() => onScrollToSection('pricing')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-purple opacity-100 group-hover:opacity-90 transition-opacity duration-300"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-teal/80 to-brand-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative z-10 text-white">
                  Inscribir a mi hijo ahora
                </span>
              </Button>

              <p className="text-sm mt-4 text-gray-500">
                <span className="inline-block mx-2">• Cupos limitados •</span>
                <span className="inline-block mx-2">• Garantía de satisfacción •</span>
                <span className="inline-block mx-2">• Inversión en su futuro emocional •</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
