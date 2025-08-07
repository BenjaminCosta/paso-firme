import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero3 = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D',
      alt: 'Padre e hijo adolescente reconectando'
    }
  ];

  const rightSideImage = '/imagenes/facilitadora4.jpeg';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/40 to-brand-coral/35" />
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
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-brand-coral/10 to-brand-beige/15" />
        </div>
      </div>

      {/* Contenido principal - alineado a la izquierda */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-4 pt-20 relative z-30">
        <div className="max-w-3xl animate-fade-in ml-0 md:ml-8 lg:ml-16">
          {/* Título o logo responsive */}
          <div className="mb-8 max-w-3xl">
            <h1 className="md:text-5xl text-4xl font-bold text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
              Recupera la <span className="font-bold">Conexión</span> y<br />
              Crea un <span className="font-bold">Vínculo de Confianza</span><br />
              <span className="text-brand-beige">para toda la vida con tu <span className="font-bold">Hijo Adolescente</span> en 10 Semanas</span><br />
              <span className="text-2xl font-normal">(Sin castigos y sin terapia familiar)</span>
            </h1>
          </div>

          {/* Destacado con fondo más opaco */}
          <div className="bg-white/30 rounded-xl p-2 md:p-4 mb-8 inline-block shadow-xl backdrop-blur-lg border border-white">
            <p className="text-white font-semibold text-sm md:text-base">
              ❤️‍🩹 Obtén HOY el paso a paso probado para pasar Del Caos a la Conexión con tu Hijo y ten a Olivia como tu Coach en el camino.
            </p>
          </div>

          {/* Botón CTA */}
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-brand-teal to-brand-coral text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group"
            onClick={() => onScrollToSection('pricing')}
          >
            <span className="relative z-10">Quiero reconectar con mi hijo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-teal/40 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-brand-coral/40 z-0"></div>
    </section>
  );
};

export default Hero3;