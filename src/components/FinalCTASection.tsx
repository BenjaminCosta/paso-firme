import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Shield, Rocket, Sparkles, CheckCircle, Users } from "lucide-react";

interface FinalCTASectionProps {
  onScrollToSection: (id: string) => void;
}

const FinalCTASection = ({ onScrollToSection }: FinalCTASectionProps) => {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-brand-teal/10">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[80px]"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-white border-2 border-brand-teal/20 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative">
          {/* Sello de urgencia */}
          <div className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-md animate-pulse">
            ¡ÚLTIMOS CUPOS!
          </div>
          {/* Contenido compacto */}
          <div className="text-center space-y-6">
            {/* Badge de urgencia */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 text-brand-yellow px-4 py-1.5 rounded-full border border-brand-yellow/20">
              <Zap className="w-4 h-4 fill-brand-yellow" />
              <span className="font-bold text-xs tracking-wide">ÚLTIMA OPORTUNIDAD</span>
            </div>

            {/* Título impactante */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                Prepáralo para la secundaria
              </span>
            </h2>

            {/* Subtítulo */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quedan <span className="font-bold text-brand-coral">espacios limitados</span> - 
              Inscríbelo hoy mismo al programa de desarrollo emocional
            </p>

            {/* Beneficios en línea */}
            <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
              {[
                { icon: <Shield className="w-5 h-5 text-brand-teal" />, text: "Seguridad" },
                { icon: <Rocket className="w-5 h-5 text-brand-yellow" />, text: "Confianza" },
                { icon: <Sparkles className="w-5 h-5 text-brand-coral" />, text: "Habilidades" },
                { icon: <Users className="w-5 h-5 text-brand-purple" />, text: "Grupos pequeños" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
                  {item.icon}
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Botón principal */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="relative overflow-hidden group px-10 py-5 font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                onClick={() => onScrollToSection('pricing')}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-purple opacity-100 group-hover:opacity-90 transition-opacity"></span>
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <span>Quiero inscribirlo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>

              {/* Garantía */}
              <div className="flex items-center justify-center gap-3 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span>Garantía de 7 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;