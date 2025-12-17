import { Button } from "@/components/ui/button";
import { useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero3 = ({ onScrollToSection }: HeroSectionProps) => {
  const backgroundImage = '';

  return (
    <section id="hero" className="relative min-h-screen md:min-h-[900px] overflow-hidden">
      {/* Fondo claro con imagen intro2.avif */}
      <div className="absolute inset-0">
        {/* Imagen de fondo con opacity 40 */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/imagenes/intro2.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Fondo claro con brand-pink y brand-sand */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sand/90 via-brand-pink/45 to-white/90" />
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-brand-pink/30 rounded-lg rotate-12 z-0 hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-brand-blue/10 rounded-full z-0 hidden md:block"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 border-4 border-brand-red/20 rounded-full z-0 hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-brand-pink/20 rotate-45 z-0 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border-4 border-brand-blue/20 rotate-45 z-0 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-brand-red/10 to-brand-pink/15 rounded-lg rotate-12 z-0 hidden lg:block"></div>
      
      {/* Círculos grandes sutiles */}
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-brand-red/10 to-brand-pink/15 blur-3xl z-0"></div>
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/10 to-brand-sand/15 blur-3xl z-0"></div>

      {/* Contenido principal - Centrado */}
      <div className="container mx-auto px-4 py-32 md:py-20 relative z-10 w-full">
        <div className="max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8">
          
          {/* Título principal - Reducido */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue leading-tight px-4">
              Recupera la Calma y la Conexión con tu Hijo,<br />
              <span className="text-brand-red">SIN Gritar y SIN Perder Autoridad.</span>
            </h1>
            
            {/* Texto descriptivo - Reducido */}
            <p className="text-base md:text-lg lg:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto px-4">
              En menos de <span className="font-bold text-brand-red">10 semanas</span> con mi Método <span className="font-bold text-brand-blue">'CALMA'</span> vas a lograr que tu hijo te escuche, te haga caso y hable contigo sin gritos ni peleas, para que vuelva la calma, el respeto, la buena comunicación y una convivencia más sana en casa.
            </p>
          </div>

          {/* Video de YouTube - Embed responsive */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/cL5_THnt0VY?autoplay=1&mute=1&loop=1&playlist=cL5_THnt0VY&controls=1&rel=0&modestbranding=1"
                  title="Video de introducción - Del Caos a la Conexión"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Botón principal - 10% más grande */}
          <div className="space-y-3 md:space-y-4 px-4">
            <a 
              href="https://wa.me/5215552106494?text=Hola%20Olivia!%20Quiero%20ingresar%20a%20tu%20Programa%20Del%20Caos%20a%20la%20Conexi%C3%B3n%2C%20vengo%20de%20tu%20p%C3%A1gina%2C%20mi%20nombre%20es…"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-brand-red to-brand-blue text-white px-9 md:px-11 py-6 md:py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group w-full md:w-auto"
              >
                <span className="relative z-10">QUIERO RECUPERAR LA CONEXIÓN</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
            </a>

            {/* Microcopy bajo el botón */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-brand-gray text-xs md:text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                100% online y flexible
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Empiezas cuando quieras
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Acceso inmediato + acompañamiento
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero3;