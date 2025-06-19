import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero2 = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1542816417-0983675acc3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Adolescente pensativo'
    },
    {
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Joven desconectado de su familia'
    },
    {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Adolescente con problemas emocionales'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1542816417-0983675acc3d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const rightSideImage = 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[72vh] min-h-[720px] md:min-h-[650px] overflow-hidden">
      {/* Estructura de fondo */}
      <div className="absolute inset-0 flex">
        {/* Carrusel izquierdo */}
        <div className="w-full xl:w-[75%] h-full relative overflow-hidden">
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
              <div className="absolute inset-0 bg-black/30" />
              {/* Overlay con degradado usando la nueva paleta */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/40 to-brand-coral/35" />
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

          {/* Overlay negro más oscuro */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Overlay de color principal más intenso */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          
          {/* Segundo overlay de color más pronunciado */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 via-brand-coral/25 to-brand-beige/20" />
        </div>
      </div>

      {/* Galería flotante (solo en pantallas grandes) */}
      <div className="hidden xl:block absolute top-[30%] right-4 md:right-24 z-20">
        <div className="relative w-56 md:w-64 h-80">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="absolute bg-white/90 p-1 shadow-lg rounded-md overflow-hidden transition-all duration-300 hover:z-10 hover:scale-105 border border-white/30"
              style={{
                width: '210px',
                height: '160px',
                transform: `rotate(${index % 2 === 0 ? -5 : 5}deg) translateX(${index % 2 === 0 ? 10 : -10}px) translateY(${index * 40}px)`,
                zIndex: index,
                right: `${index * 15}px`
              }}
            >
              <img
                src={img}
                alt={`Galería ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Contenido principal - alineado a la izquierda */}
      <div className="container mx-auto h-full flex flex-col justify-center items-start text-left px-4 pt-20 relative z-30">
        <div className="max-w-4xl animate-fade-in ml-0 md:ml-8 lg:ml-16">
          {/* Título o logo responsive */}
          <div className="mb-6">
            <h1 className="md:text-7xl text-5xl font-bold text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
              <span className="">¡Soy capaz!</span><br />
            </h1>
          </div>

          {/* Subtítulos con texto más grande y sombra más marcada */}
          <p
            className="text-base md:text-xl text-white mb-4 font-medium [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]"
            style={{ animationDelay: '0.2s' }}
          >
            <span>¿Tu hijo adolescente está cada vez más desconectado...</span><br />
            <em className="text-brand-beige font-semibold">de sus emociones, de su motivación y de ti?</em>
          </p>

          {/* Destacado con fondo más opaco */}
          <div className="bg-white/30 rounded-xl p-2 md:p-4 mb-8 inline-block shadow-xl backdrop-blur-lg border border-white">
            <p className="text-white font-semibold text-sm md:text-base">
              ✅Este curso es ese empujón que necesita para volver a conectarse con lo que importa.
            </p>
          </div>

          {/* Botón CTA */}
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-brand-purple to-brand-coral text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group"
            onClick={() => onScrollToSection('pricing')}
          >
            <span className="relative z-10">Quiero inscribir a mi hijo ahora</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-purple/40 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-brand-coral/40 z-0"></div>
    </section>
  );
};

export default Hero2;