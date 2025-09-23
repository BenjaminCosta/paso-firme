import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1654613698275-b0930ef9570f?auto=format&fit=crop&q=100&w=4000',
      alt: 'Preadolescentes en ambiente escolar'
    },
  ];

  const rightSideImage = '/imagenes/facilitadora3.jpeg';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative h-[72vh] min-h-[720px] md:min-h-[720px] overflow-hidden">
      {/* Estructura de fondo */}
      <div className="absolute inset-0 flex">
        {/* Carrusel izquierdo */}
        <div className="w-full xl:w-[70%] h-full relative overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {/* Imagen de fondo */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${image.url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              {/* Overlay negro más oscuro para mejor contraste */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/20" />
              {/* Overlay con degradado usando la nueva paleta */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/50 via-brand-red/30 to-brand-pink/20" />
            </div>
          ))}
        </div>

        {/* Lado derecho con múltiples overlays */}
        <div className="hidden xl:block w-[40%] h-full relative">
          {/* Imagen base */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rightSideImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Segundo overlay de color más pronunciado */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/40 via-brand-red/20 to-brand-pink/10" />
          
          {/* Información de la facilitadora */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/60 to-transparent backdrop-blur-sm">
            <div className="text-white text-center max-w-md mx-auto">
              <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-brand-pink text-xs font-semibold px-4 py-1 rounded-full mb-3">
                ESPECIALISTA CERTIFICADA
              </div>
              <h3 className="text-3xl font-dancing mb-3">Olivia Rodríguez</h3>
              <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-brand-pink to-transparent mb-3" />
              <div className="space-y-1">
                <p className="text-white/95 text-sm">
                  <span className="text-brand-pink">+1 millón</span> de familias impactadas mundialmente
                </p>
                <p className="text-white/90 text-sm font-medium">
                  Especialista en Neurociencia Adolescente y Disciplina Positiva
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal - alineado a la izquierda */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-4 pt-20 relative z-30">
        <div className="max-w-3xl animate-fade-in ml-0 md:ml-8 lg:ml-16">
          {/* Título o logo responsive */}
          <div className="mb-8 max-w-3xl">
            <h1 className="md:text-6xl text-4xl font-bold text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-2 rounded-full mb-8 shadow-lg">
                Taller Transformador para Padres
              </span>
              <br />
              Pubertad y Adolescencia
              <br />
              <span className="font-dancing text-brand-pink text-4xl md:text-5xl lg:text-6xl block mt-2">
                Sin Miedo
              </span>
            </h1>
          </div>

          {/* Destacado mejorado con diseño premium */}
<div className="relative group">
  
    {/* Contenido principal */}
  <div className="relative bg-gradient-to-br from-white/20 to-white/10 rounded-2xl p-6 mb-8 shadow-2xl backdrop-blur-xl border border-white/30 group-hover:border-white/50 transition-all duration-300">
    
    
    {/* Texto con mejor jerarquía */}
    <div className="space-y-4 md:space-y-6">
      <p className="text-white text-lg md:text-xl  leading-relaxed font-medium text-center md:text-left">
        Lo que toda mamá o papá necesita saber antes de que la relación se fracture.
      </p>
      
      {/* Separador decorativo */}
      <div className="flex items-center justify-center md:justify-start space-x-2">
        <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brand-blue/50"></div>
        <Sparkles className="w-4 h-4 text-brand-pink/80" />
        <div className="w-8 h-0.5 bg-gradient-to-r from-brand-blue/50 to-transparent"></div>
      </div>

      <p className="text-brand-pink text-lg md:text-1xl leading-tight font-semibold text-center md:text-left bg-gradient-to-r from-brand-pink via-brand-red to-brand-blue bg-clip-text text-transparent">
        Una guía para acompañar con claridad, conexión y sin gritos.
      </p>
    </div>
  </div>
</div>

          {/* Botones CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="relative overflow-hidden bg-brand-red text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group"
            >
              <span className="relative z-10 flex items-center">
                ¡Quiero Inscribirme!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-brand-red/90 transition-opacity duration-500" />
            </Button>
            <Button
              onClick={() => onScrollToSection('detalles')}
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border border-brand-pink/40 hover:bg-brand-pink/20 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-blue/30 blur-3xl z-0" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-brand-red/30 blur-3xl z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-pink/20 blur-3xl z-0" />
    </section>
  );
};

export default Hero;
