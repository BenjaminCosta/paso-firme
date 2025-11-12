import { Button } from "@/components/ui/button";
import { MessageCircleHeart, ShieldCheck, Home, Lightbulb, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Intro3 = ({ onScrollToSection }: HeroSectionProps) => {
  const iconsRef = useRef<HTMLDivElement>(null);
  const [iconsAnimated, setIconsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !iconsAnimated) {
            setIconsAnimated(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (iconsRef.current) {
      observer.observe(iconsRef.current);
    }

    return () => observer.disconnect();
  }, [iconsAnimated]);

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-brand-sand via-white to-brand-pink/10 overflow-hidden">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado previo pequeño */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-brand-pink/30 text-brand-red text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
              Para mamás y papás que sienten que quieren hacerlo mejor, con más calma, sin perder la conexión.
            </span>
            
            {/* Encabezado principal grande */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-brand-blue font-bold mb-4 leading-tight sm:leading-snug">
              Si en casa hay gritos, silencios o{" "}
              <span className="bg-gradient-to-r from-brand-red to-brand-blue bg-clip-text text-transparent">
                faltas de respeto…
              </span>
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-8"></div>
            
            <p className="text-2xl sm:text-3xl text-brand-red font-bold">
              no te falta amor.{" "}
              <span className="font-dancing text-brand-blue text-3xl sm:text-4xl">
                Te faltan herramientas…
              </span>
            </p>
          </div>

          {/* Texto descriptivo */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg mb-12 sm:mb-16 border border-brand-pink/30">
            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed text-center mb-6">
              En <span className="font-bold text-brand-red">Del Caos a la Conexión</span> acompaño a mamás y papás que quieren mejorar la relación con su hijo adolescente.
            </p>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed text-center mb-4">
              Algunos llegan cuando ya hay distancia o discusiones.
            </p>
            <p className="text-base sm:text-lg text-brand-gray leading-relaxed text-center mb-6">
              Otros, porque desean prevenir que eso pase…
            </p>
            <p className="text-lg sm:text-xl text-brand-blue font-semibold leading-relaxed text-center">
              En ambos casos, aprendes a comunicarte con respeto, poner límites sanos y fortalecer el vínculo día a día.
            </p>
          </div>

          {/* Destacado central con imagen */}
          <div className="relative my-12 sm:my-20 rounded-3xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-60"
              style={{
                backgroundImage: `url(imagenes/intro2.avif)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/30 via-brand-pink/20 to-brand-blue/40"></div>
            </div>
            
            <div className="relative bg-gradient-to-b from-white/60 via-white/85 to-white/60 p-8 sm:p-12 border border-brand-pink/40 rounded-3xl">
              <div className="flex justify-center mb-6 sm:mb-8">
                <div className="p-3 sm:p-4 bg-brand-pink/30 rounded-full">
                  <Lightbulb className="text-brand-red" size={44} />
                </div>
              </div>
              
              {/* Bullets visuales con íconos */}
              <div ref={iconsRef} className="space-y-6 sm:space-y-8 max-w-2xl mx-auto">
                <div 
                  className={`icon-item flex items-center justify-center gap-4 sm:gap-6 transition-all duration-700 ${
                    iconsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-blue/10 flex items-center justify-center shadow-md">
                    <MessageCircleHeart className="text-brand-blue" size={28} />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-lg sm:text-xl font-bold text-brand-blue mb-1">
                      Respeto y comunicación real.
                    </p>
                  </div>
                </div>

                <div 
                  className={`icon-item flex items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-200 ${
                    iconsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-red/10 flex items-center justify-center shadow-md">
                    <ShieldCheck className="text-brand-red" size={28} />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-lg sm:text-xl font-bold text-brand-red mb-1">
                      Límites que se cumplen sin gritos.
                    </p>
                  </div>
                </div>

                <div 
                  className={`icon-item flex items-center justify-center gap-4 sm:gap-6 transition-all duration-700 delay-[400ms] ${
                    iconsAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-pink/40 flex items-center justify-center shadow-md">
                    <Home className="text-brand-red" size={28} />
                  </div>
                  <div className="flex-1 text-center">
                    <p className="text-lg sm:text-xl font-bold text-brand-blue mb-1">
                      Un hogar con calma, conexión y cooperación.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
            <Button
              size="lg"
              className="relative overflow-hidden bg-white text-brand-red px-8 sm:px-14 py-8 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-brand-red hover:text-white shadow-lg hover:shadow-xl border-2 border-brand-red group"
              onClick={() => onScrollToSection('pricing')}
            >
              <span className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
                <span className="sm:inline-block">Quiero estas herramientas</span>
                <span className="flex items-center gap-2 sm:gap-3">
                  para mi familia
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={22} />
                </span>
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Formas geométricas modernas decorativas */}
      {/* Círculos grandes sutiles */}
      <div className="absolute -bottom-40 -left-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-br from-brand-red/5 to-brand-pink/5 blur-3xl z-0"></div>
      <div className="absolute -top-40 -right-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/5 to-brand-sand/5 blur-3xl z-0"></div>
      
      {/* Formas geométricas adicionales */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-brand-blue/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-brand-red/10 rounded-full z-0 hidden md:block"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-pink/10 rotate-45 z-0 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-8 h-8 border-2 border-brand-blue/15 rotate-45 z-0 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/3 w-14 h-14 bg-gradient-to-br from-brand-red/5 to-brand-pink/10 rounded-lg rotate-12 z-0 hidden lg:block"></div>
    </section>
  );
};

export default Intro3;

