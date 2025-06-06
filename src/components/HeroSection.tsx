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
    'https://images.unsplash.com/photo-1636740106158-d630d506e2cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHByZSUyMGFkb2xlc2NlbmNlc3xlbnwwfDB8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&h=400&fit-crop',
    'https://images.unsplash.com/photo-1746937107789-895b1d2f5c3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHByZSUyMGFkb2xlc2NlbmNlcyUyMHNjaG9vbHxlbnwwfDB8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1543729232-05ab73949532?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHByZSUyMGFkb2xlc2NlbmNlcyUyMHBhcmVudHN8ZW58MHwwfDB8fHwy'
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
        <div className="w-full md:w-[75%] h-full relative overflow-hidden">
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
              {/* Overlay con degradado más pronunciado */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/30 to-brand-purple/25" />
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

          {/* Overlay negro más oscuro */}
          <div className="absolute inset-0 bg-black/70" />
          
          {/* Overlay de color principal más intenso */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          
          {/* Segundo overlay de color más pronunciado */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/25 via-brand-yellow/15 to-brand-coral/25" />

          {/* Logo familia */}
          <div
            className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain mix-blend-soft-light"
            style={{
              backgroundImage: "url('/logos/familia2.png')",
              backgroundSize: '120%',
              backgroundPosition: 'center'
            }}
          />
        </div>
      </div>

      {/* Galería flotante (solo en pantallas grandes) */}
      <div className="hidden xl:block absolute top-[30%] right-4 md:right-28 z-20">
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
          {/* Título con sombra más pronunciada */}
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 leading-tight [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
  Paso Firme <span 
    className="italic font-light text-white text-5xl md:text-7xl font-dancing [text-shadow:_0_4px_15px_rgba(0,0,0,0.9)]"
    style={{ fontFamily: "'Dancing Script', cursive" }}
  >
    a Secundaria
  </span>
</h1>


          {/* Subtítulos con texto más grande y sombra más marcada */}
          <p
            className="text-lg md:text-xl text-white mb-4 font-medium [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]"
            style={{ animationDelay: '0.2s' }}
          >
            <span>El taller internacional que fortalece lo que no enseña la escuela.</span><br />
             <em className="text-brand-beige">Para preadolescentes de 11 a 13 años que están por comenzar secundaria.</em>
          </p>

          {/* Destacado con fondo más opaco */}
          <div className="bg-white/30 rounded-xl p-4 mb-8 inline-block shadow-xl backdrop-blur-md">
            <p className="text-white font-semibold text-base">
              📍 Presencial en Monterrey, México | 🌐 Online desde cualquier parte del mundo
            </p>
          </div>

          {/* Botón CTA */}
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-[#e97052] to-[#c0bb48] text-white px-10 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group"
            onClick={() => onScrollToSection('pricing')}
          >
            <span className="relative z-10">Quiero inscribir a mi hijo</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#c0bb48] to-[#885fae] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
        </div>
      </div>

      {/* Efectos de iluminación suaves */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-[#6bafb2]/40 z-0"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-[#885fae]/40 z-0"></div>
    </section>
  );
};

export default HeroSection;