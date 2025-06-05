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
    'https://images.unsplash.com/photo-1571260898930-0d1010ce6efc?w=400&h=400&fit-crop',
    'https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=400&h=400&fit-crop'
  ];

  // Imagen fija para el lado derecho
  const rightSideImage = 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?w=400&h=400&fit-crop';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] overflow-hidden pb-20 md:pb-32">
      {/* Estructura de fondo dividido */}
      <div className="absolute inset-0 flex">
        {/* Carrusel izquierdo (60%) con overlay de degradado */}
        <div className="w-full md:w-3/5 h-full relative">
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
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              {/* Overlay de degradado más fuerte */}
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, rgba(107, 175, 178, 0.4) 0%, rgba(136, 95, 174, 0.3) 100%)` // brand-teal, brand-purple
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Lado derecho con imagen fija y overlay (40%) - AHORA VISIBLE */}
        <div className="hidden md:block w-2/5 h-full relative">
          {/* Imagen fija */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${rightSideImage})`
            }}
          />
          {/* Overlay de degradado mucho más fuerte para destacar la galería */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.8) 100%)` 
            }}
          />
          {/* Textura sutil */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/always-grey.png')]"></div>
        </div>
      </div>
      
      {/* Overlay para toda la sección: degradado de claro a oscuro (suave) */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: `linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.6) 100%)`
        }}
      ></div>

      {/* Nuevo Overlay con degrade to top (más claro a más oscuro) con brand-beige */}
      <div 
        className="absolute inset-0 z-10" 
        style={{
          background: `linear-gradient(to top, rgba(227, 216, 204, 0) 0%, rgba(227, 216, 204, 0.4) 100%)` // brand-beige
        }}
      ></div>

      {/* Logo familia en esquina superior izquierda */}
      <div className="absolute top-6 left-6 z-20">
        <img 
          src="/logos/familia.png" 
          alt="Logo Familia" 
          className="h-16 w-auto drop-shadow-md"
        />
      </div>
      
      {/* Galería flotante en la parte derecha - AHORA MÁS GRANDE */}
      <div className="absolute top-[10%] right-4 md:right-16 z-20"> 
        <div className="relative w-56 md:w-64 h-80"> 
          {galleryImages.map((img, index) => (
            <div 
              key={index}
              className="absolute bg-white p-1 shadow-xl rounded-md overflow-hidden transition-transform duration-300 hover:z-10 hover:scale-105"
              style={{
                width: '180px', 
                height: '130px', 
                transform: `rotate(${index % 2 === 0 ? -7 : 7}deg) translateX(${index % 2 === 0 ? 15 : -15}px) translateY(${index * 40}px)`, 
                zIndex: index,
                right: `${index * 15}px` 
              }}
            >
              <img 
                src={img} 
                alt={`Galería ${index + 1}`} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400';
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Contenido principal */}
      <div className="container mx-auto h-full flex flex-col justify-center items-center text-center px-4 relative z-30">
        <div className="max-w-4xl animate-fade-in">
          {/* Logo principal */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/logos/pasofirme2.png" 
              alt="Paso Firme a Secundaria Logo" 
              className="h-32 md:h-40 w-auto animate-scale-in drop-shadow-lg"
            />
          </div>
          
          {/* Título */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in [text-shadow:_0_2px_4px_rgba(0,0,0,0.4)]">
            Paso Firme a
            <span className="block italic font-light" style={{color: 'var(--brand-beige)'}}> {/* Using brand-beige */}
              Secundaria
            </span>
          </h1>
          
          {/* Subtítulos */}
          <p className="text-xl md:text-2xl text-white mb-4 font-medium animate-fade-in [text-shadow:_0_1px_2px_rgba(0,0,0,0.3)]" style={{animationDelay: '0.2s'}}>
            <em>El taller internacional que fortalece lo que no enseña la escuela.</em>
          </p>
          
          <p className="text-lg md:text-xl text-white/90 mb-6 animate-fade-in [text-shadow:_0_1px_2px_rgba(0,0,0,0.2)]" style={{animationDelay: '0.3s'}}>
            Para preadolescentes de 11 a 13 años que están por comenzar secundaria.
          </p>
          
          {/* Destacado */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-8 inline-block animate-scale-in border border-white/30 shadow-lg" style={{animationDelay: '0.4s'}}>
            <p className="text-white font-medium">
              📍 Presencial en Monterrey, México | 🌐 Online desde cualquier parte del mundo
            </p>
          </div>
          
          {/* Botón CTA */}
          <Button 
            size="lg" 
            className="relative overflow-hidden text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl animate-fade-in hover:shadow-2xl group"
            onClick={() => onScrollToSection('pricing')}
            style={{
              animationDelay: '0.6s',
              background: `linear-gradient(to right, var(--brand-coral) 0%, var(--brand-yellow) 100%)` // brand-coral, brand-yellow
            }}
          >
            <span className="relative z-10">Quiero inscribir a mi hijo</span>
            <span 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `linear-gradient(to right, var(--brand-yellow) 0%, var(--brand-purple) 100%)` // brand-yellow, brand-purple
              }}
            ></span>
          </Button>
        </div>
        
        {/* Indicadores del carrusel */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button 
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex ? 'bg-brand-coral w-6' : 'bg-white/50'}`} // brand-coral
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Mostrar imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Efectos de iluminación con tus colores */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-teal/20 blur-3xl z-0"></div> {/* brand-teal */}
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 rounded-full bg-brand-purple/20 blur-3xl z-0"></div> {/* brand-purple */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-yellow/15 blur-2xl z-0"></div> {/* brand-yellow */}
    </section>
  );
};

export default HeroSection;