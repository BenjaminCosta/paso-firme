import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const HeroSection = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&h=800&fit=crop',
      alt: 'Grupo de adolescentes colaborando'
    },
    {
      url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit-crop',
      alt: 'Estudiante recibiendo orientación'
    },
    {
      url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit-crop',
      alt: 'Equipo de estudiantes trabajando juntos'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1541178735493-479c1a27ed24?w=400&h=400&fit-crop',
    'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&h=400&fit-crop',
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=800&fit-crop',
    'https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=400&h=400&fit-crop'
  ];

  const rightSideImage = 'https://images.unsplash.com/photo-1592738721506-c64f5689167d?q=80&w=1974&auto=format&fit=crop';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[72vh] min-h-[650px] overflow-hidden">
      {/* Estructura de fondo */}
      <div className="absolute inset-0 flex">
        {/* Carrusel izquierdo */}
        <div className="w-full md:w-[70%] h-full relative overflow-hidden">
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
              {/* Overlay negro suave */}
              <div className="absolute inset-0 bg-black/10" />
              {/* Overlay con degradado suave */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-purple/15" />
            </div>
          ))}
        </div>

        {/* Lado derecho con múltiples overlays */}
        <div className="hidden md:block w-[40%] h-full relative">
          {/* Imagen base */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${rightSideImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />

          {/* Overlay negro suave */}
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Overlay de color principal */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/15 to-transparent" />
          
          {/* Segundo overlay de color complementario */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/15 via-brand-yellow/5 to-brand-coral/15" />

          {/* Logo familia */}
          <div
            className="absolute inset-0 opacity-60 bg-center bg-no-repeat bg-contain mix-blend-soft-light"
            style={{
              backgroundImage: "url('/logos/familia2.png')",
              backgroundSize: '120%',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Galería flotante (solo en pantallas grandes) */}
      <div className="hidden lg:block absolute top-[20%] right-4 md:right-40 z-20">
        <div className="relative w-56 md:w-64 h-80">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="absolute bg-white/90 p-1 shadow-lg rounded-md overflow-hidden transition-all duration-300 hover:z-10 hover:scale-105 border border-white/30"
              style={{
                width: '180px',
                height: '130px',
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
          {/* Título */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.6)]">
            Paso Firme a
            <span 
              className="block italic font-light text-white text-4xl md:text-6xl font-dancing [text-shadow:_0_3px_10px_rgba(0,0,0,0.8)]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Secundaria
            </span>
          </h1>

          {/* Subtítulos */}
          <p
            className="text-lg md:text-xl text-white mb-3 font-medium [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)]"
            style={{ animationDelay: '0.2s' }}
          >
            <em>El taller internacional que fortalece lo que no enseña la escuela.</em>
          </p>

          <p
            className="text-base md:text-lg text-brand-beige mb-5 [text-shadow:_0_1px_3px_rgba(0,0,0,0.4)]"
            style={{ animationDelay: '0.3s' }}
          >
            <em>Para preadolescentes de 11 a 13 años que están por comenzar secundaria.</em>
          </p>

          {/* Destacado */}
          <div className="bg-white/20 rounded-xl p-4 mb-6 inline-block border border-white/30 shadow-lg backdrop-blur-md">
            <p className="text-white font-medium">
              📍 Presencial en Monterrey, México | 🌐 Online desde cualquier parte del mundo
            </p>
          </div>

          {/* Botón CTA */}
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#e97052] to-[#c0bb48] text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl group"
            onClick={() => onScrollToSection('pricing')}
          >
            <span className="relative z-10">Quiero inscribir a mi hijo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c0bb48] to-[#885fae] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#6bafb2]/30 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#885fae]/30 z-0"></div>
    </section>
  );
};

export default HeroSection;