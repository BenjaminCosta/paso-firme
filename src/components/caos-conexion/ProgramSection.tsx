import { Button } from "@/components/ui/button";
import { Check, Heart, MessageSquare, Shield, Eye, HandHeart, ArrowRight, Calendar, Clock, X } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const ProgramSection = ({ onScrollToSection }: HeroSectionProps) => {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !bannerClosed) {
        setShowBanner(true);
      } else {
        setShowBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bannerClosed]);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-brand-sand via-white to-brand-pink/10">
      {/* Fondo con textura y gradiente mejorado */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-10"
          style={{
            maskImage: 'linear-gradient(rgba(0,0,0,0.9) 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-brand-blue/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-brand-red/10 rounded-full z-0 hidden md:block"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-pink/10 rotate-45 z-0 hidden lg:block"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado nuevo */}
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-pink/30 text-brand-red text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-6 border border-brand-red/20 backdrop-blur-sm uppercase">
              Comienza tu Transformación
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue mb-6 leading-tight">
              Comenzamos cada lunes.{" "}
              <span className="font-dancing text-brand-red text-5xl md:text-6xl lg:text-7xl">Este puede ser tu inicio.</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-8 rounded-full"></div>
          </div>

          {/* Grid: Contenido a la izquierda, Imagen a la derecha */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 items-stretch">
            {/* Contenido a la izquierda con formas geométricas */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-xl border border-brand-pink/30 overflow-hidden min-h-[500px] flex items-center">
              {/* Formas geométricas de fondo sutiles */}
              <div className="absolute top-10 right-10 w-20 h-20 border-2 border-brand-pink/15 rounded-lg rotate-12 z-0"></div>
              <div className="absolute bottom-12 left-8 w-16 h-16 bg-brand-blue/5 rounded-full z-0"></div>
              <div className="absolute top-1/2 right-1/4 w-12 h-12 border-2 border-brand-red/10 rotate-45 z-0"></div>
              <div className="absolute bottom-20 right-12 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-brand-pink/5 rounded-full z-0"></div>
              <div className="absolute top-16 left-12 w-10 h-10 border border-brand-blue/10 rounded-full z-0"></div>
              
              <div className="space-y-6 relative z-10">
                <p className="text-2xl md:text-3xl text-brand-gray font-bold leading-relaxed">
                  Cada semana arranca un nuevo grupo.
                </p>
                <p className="text-lg md:text-xl text-brand-gray leading-relaxed">
                  Si hoy dices basta de caos, este próximo lunes ya puedes estar dentro del programa.
                </p>
                <p className="text-2xl md:text-3xl text-brand-blue font-bold leading-relaxed">
                  Da el paso que tu familia necesita.
                </p>

                {/* Animación de flecha discreta */}
                <div className="flex items-center justify-center gap-2 pt-4">
                  <ArrowRight className="text-brand-red animate-pulse" size={28} />
                  <ArrowRight className="text-brand-blue animate-pulse delay-150" size={28} />
                  <ArrowRight className="text-brand-red animate-pulse delay-300" size={28} />
                </div>
              </div>
            </div>

            {/* Imagen a la derecha */}
            <div className="relative group min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-brand-blue/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 z-0"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border border-brand-pink/30 shadow-xl z-10">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1654613698291-8357353f053a?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D)`,
                  }}
                  
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/20 to-brand-blue/60"></div>
                  
                </div>
                
                
                {/* Mensaje flotante premium */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-brand-pink/30 transform transition-all duration-500 group-hover:-translate-y-3">
                    <h3 className="text-xl font-semibold text-brand-blue mb-2">Un proceso <span className="font-dancing text-brand-red text-2xl font-bold">Transformador</span></h3>
                    <p className="text-brand-gray font-semibold">
                      Sin conflictos, sin culpas, con herramientas prácticas y apoyo constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA mejorado con nueva paleta */}
          <div className="text-center">
           <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <a 
              href="https://wa.me/5215552106494?text=Hola%20Olivia!%20Quiero%20ingresar%20a%20tu%20Programa%20Del%20Caos%20a%20la%20Conexi%C3%B3n%2C%20vengo%20de%20tu%20p%C3%A1gina%2C%20mi%20nombre%20es…"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-white text-brand-blue border-2 border-brand-red px-10 sm:px-16 py-6 sm:py-7 text-xl sm:text-2xl font-bold tracking-wide rounded-full transition-all duration-300 hover:bg-brand-red hover:text-white hover:shadow-xl group mx-auto max-w-[90vw] sm:max-w-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 whitespace-nowrap">
                  EMPIEZO HOY
                  <ArrowRight className="transition-all duration-300 group-hover:translate-x-2" size={24} />
                </span>
              </Button>
            </a>
          </div>
            
            <p className="mt-6 text-brand-gray text-sm flex items-center justify-center gap-2">
              <span className="inline-flex w-3 h-3 rounded-full bg-gradient-to-r from-brand-red to-brand-blue animate-pulse"></span>
              Plazas limitadas • Inscripciones abiertas
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos con nueva paleta */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-red/5 blur-3xl -translate-x-1/3 translate-y-1/3 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl translate-x-1/3 -translate-y-1/3 z-0"></div>

      {/* Banner móvil flotante con botón X - Se oculta al tocar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transform transition-all duration-500 ${
          showBanner ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={() => setBannerClosed(true)}
      >
        <div className="bg-gradient-to-r from-brand-red to-brand-blue text-white py-3 px-4 shadow-2xl">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 flex-1">
              <span className="text-2xl">👋</span>
              <p className="text-sm font-semibold">
                Nuevos grupos comienzan el lunes · Reserva tu lugar hoy
              </p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button
                size="sm"
                className="bg-white text-brand-blue hover:bg-brand-sand font-bold text-xs px-4 py-2 rounded-full shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  onScrollToSection('planes');
                }}
              >
                Reservar
              </Button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setBannerClosed(true);
                  setShowBanner(false); 
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                aria-label="Cerrar banner"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente auxiliar mejorado
const BenefitItem = ({ icon, text, bgColor }: { icon: React.ReactNode, text: string, bgColor: string }) => {
  return (
    <li className="flex items-start gap-3 group">
      <div className={`flex-shrink-0 mt-1 ${bgColor} p-1.5 rounded-full group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{text}</span>
    </li>
  );
};

export default ProgramSection;