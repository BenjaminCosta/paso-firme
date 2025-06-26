import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero2 = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1470286084930-1df42b2b99e9?w=1800&dpr=2&q=85&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlZW5hZ2UlMjBmcmllbmRncm91cHxlbnwwfHw0fHx8Mg%3D%3D',
      alt: 'Adolescente pensativo'
    },
    {
      url: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1800&dpr=2&q=85&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Joven desconectado de su familia'
    },
    {
      url: 'https://images.unsplash.com/photo-1536607774613-b287a2f4e698?w=1800&dpr=2&q=85&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHx0ZWVuYWdlJTIwZnJpZW5kZ3JvdXB8ZW58MHx8NHx8fDI%3D',
      alt: 'Adolescente con problemas emocionales'
    }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVlbiUyMGZyaWVuZHN8ZW58MHx8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1684083125679-890a980599a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVlbiUyMGZyaWVuZHN8ZW58MHx8MHx8fDI%3D',
    'https://images.unsplash.com/photo-1626895684825-03b8655f26b0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRlZW5hZ2UlMjBmcmllbmRncm91cHxlbnwwfHw0fHx8Mg%3D%3D'
  ];

  const rightSideImage = 'https://images.unsplash.com/photo-1684083125679-890a980599a7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

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
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Overlay de color principal más intenso */}
          <div className="absolute inset-0 bg-gradient-to-l from-white/40 to-transparent" />
          <div
            className="absolute inset-0 opacity-40 bg-center bg-no-repeat bg-contain mix-blend-soft-light"
            style={{
              backgroundImage: "url('/logos/familia2.png')",
              backgroundSize: '120%',
              backgroundPosition: 'center'
            }}
          />
          
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
           <div className="mb-6 sm:mb-8 relative">
  {/* Título principal */}
  <h1 className="text-5xl xs:text-6xl sm:text-7xl md:text-8xl font-bold text-white [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)] relative z-10 leading-tight">
    ¡Soy Capaz!
  </h1>

  {/* Subtítulo en mobile: subrayado palabra por palabra */}
  <div className="mt-3 sm:mt-4 pl-2 relative flex flex-wrap gap-x-2 lg:hidden">
    {/* Línea decorativa izquierda */}
    <div className="absolute left-0 top-1/2 h-3/4 w-1 bg-gradient-to-b from-brand-purple to-brand-coral transform -translate-y-1/2 rounded-full"></div>

    {["Habilidades", "para", "la", "vida", "adolescente"].map((word, index) => (
      <span key={index} className="relative inline-block">
        <span className="relative z-10 italic text-xl xs:text-2xl sm:text-3xl font-bold text-white">
          {word}
        </span>
        <span
          className="absolute bottom-0 left-0 h-1 sm:h-1.5 w-full bg-brand-beige/40 -z-0"
          style={{ transform: 'skewX(-15deg)' }}
        ></span>
      </span>
    ))}
  </div>

  {/* Subtítulo en pantallas grandes: subrayado global */}
  <div className="hidden lg:block mt-4 pl-2 relative">
    <div className="absolute left-0 top-1/2 h-3/4 w-1 bg-gradient-to-b from-brand-purple to-brand-coral transform -translate-y-1/2 rounded-full"></div>
    
    <span className="text-4xl font-bold text-white pl-4 tracking-wider relative inline-block">
      <span className="relative italic z-10">Habilidades para la vida adolescente</span>
      <span
        className="absolute bottom-0 left-0 h-2 w-full bg-brand-beige/40 -z-0"
        style={{ transform: 'skewX(-15deg)' }}
      ></span>
    </span>
  </div>

  {/* Elementos decorativos */}
  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-brand-purple/20 blur-xl z-0"></div>
  <div className="absolute -bottom-2 -right-4 w-12 h-12 rounded-full bg-brand-coral/20 blur-xl z-0"></div>
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