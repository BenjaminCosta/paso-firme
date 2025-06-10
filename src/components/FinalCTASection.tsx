import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Shield, Rocket, Sparkles, CheckCircle, Users } from "lucide-react";
import fondoM from '/imagenes/fondo_m.jpg'; 

interface FinalCTASectionProps {
  onScrollToSection: (id: string) => void;
}

const FinalCTASection = ({ onScrollToSection }: FinalCTASectionProps) => {
  return (
   <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-br from-brand-teal/10 via-white to-brand-purple/10">
  {/* Imagen de fondo */}
  <div
  className="absolute inset-0 z-0 "
  style={{
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.4)), url('/imagenes/fondo.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>

  {/* Efectos glassmorphism */}
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/30 rounded-full blur-[100px]"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-purple/30 rounded-full blur-[100px]"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-coral/30 rounded-full blur-[120px]"></div>
  </div>

  {/* Patrón de fondo con máscara */}
  <div className="absolute inset-0 opacity-10 z-10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Caja principal con glassmorphism */}
        <div className="bg-white/60 backdrop-blur-lg border-2 border-white/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden relative
          before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/40 before:to-brand-teal/30 before:-z-10 before:rounded-2xl
          after:absolute after:inset-0 after:bg-gradient-to-br after:from-brand-purple/40 after:via-transparent after:to-brand-teal/40 after:-z-20">
          
          {/* Borde luminoso sutil */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none border-[1px] border-white/50 mix-blend-overlay"></div>

          {/* Sello de urgencia mejorado */}
          <div className="absolute -top-2 -right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1 rounded-full rotate-12 shadow-lg animate-pulse z-20">
            ¡ÚLTIMOS CUPOS!
          </div>

          {/* Contenido compacto */}
          <div className="text-center space-y-7 relative z-10">
            {/* Badge de urgencia con efecto neón */}
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm text-brand-yellow px-4 py-1.5 rounded-full border border-brand-yellow/20 shadow-sm
              hover:shadow-[0_0_10px_rgba(234,179,8,0.3)] transition-shadow duration-300">
              <Zap className="w-4 h-4 fill-brand-yellow animate-pulse" />
              <span className="font-bold text-sm tracking-wide">ÚLTIMA OPORTUNIDAD</span>
            </div>

            {/* Título impactante con mejor gradiente */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight drop-shadow-md">
              <span className="bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">
                Prepáralo para la secundaria
              </span>
            </h2>

            {/* Subtítulo con efecto de texto brillante */}
            <p className="text-lg text-gray-700 max-w-2xl mx-auto relative inline-block">
              <span className="relative z-10">
                Quedan <span className="font-bold text-brand-coral drop-shadow-[0_2px_4px_rgba(239,71,67,0.2)]">espacios limitados</span> - 
                Inscríbelo hoy mismo al programa de desarrollo emocional
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-teal/20 via-brand-purple/20 to-brand-coral/20 rounded-full"></span>
            </p>

            {/* Beneficios con efecto glassmorphism */}
            <div className="flex flex-wrap justify-center gap-3 max-w-lg mx-auto">
              {[
                { icon: <Shield className="w-5 h-5 text-brand-teal" />, text: "Seguridad" },
                { icon: <Rocket className="w-5 h-5 text-brand-yellow" />, text: "Confianza" },
                { icon: <Sparkles className="w-5 h-5 text-brand-coral" />, text: "Habilidades" },
                { icon: <Users className="w-5 h-5 text-brand-purple" />, text: "Grupos pequeños" }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/30 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {item.icon}
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Botón principal mejorado */}
            <div className="pt-4">
  <Button 
    size="lg" 
    className="relative overflow-hidden group px-8 py-4 sm:px-12 sm:py-6 font-bold rounded-2xl transition-all duration-300 hover:scale-105 active:scale-95"
    onClick={() => onScrollToSection('pricing')}
  >
    {/* Fondo glass con blur */}
    <span className="absolute inset-0 bg-gradient-to-r from-brand-purple/80 via-brand-purple to-brand-teal backdrop-blur-md rounded-2xl border-2 border-white/30"></span>
    
    {/* Efecto de luminosidad al hover */}
    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></span>
    
    {/* Contenido del botón */}
    <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-white text-base sm:text-lg tracking-wide">
      <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">Quiero inscribirlo</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300 stroke-[2.5]" />
    </span>
    
    {/* Efecto de borde luminoso */}
    <span className="absolute inset-0 rounded-2xl border-2 border-white/20 pointer-events-none group-hover:border-white/40 transition-all duration-500"></span>
    
    {/* Sombra animada */}
    <span className="absolute inset-0 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:shadow-brand-teal/30 transition-all duration-500"></span>
  </Button>



              {/* Garantía con efecto glass */}
              <div className="flex items-center justify-center gap-3 mt-4 text-sm">
                <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30 shadow-inner">
                  <CheckCircle className="w-4 h-4 text-brand-teal" />
                  <span className="text-gray-600">Garantía de 7 días</span>
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