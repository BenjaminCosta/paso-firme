import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero = ({ onScrollToSection }: HeroSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80',
      alt: 'Adolescentes en etapa de desarrollo'
    },
    {
      url: 'https://images.unsplash.com/photo-1518101645466-7795885ff8f8?auto=format&fit=crop&q=80',
      alt: 'Preadolescentes en ambiente escolar'
    },
    {
      url: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&q=80',
      alt: 'Jóvenes en etapa de cambio'
    }
  ];

  // Imagen de la facilitadora
  const facilitadoraImage = '/imagenes/facilitadora4.jpeg';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % carouselImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  return (
    <section className="relative h-[80vh] min-h-[720px] md:min-h-[720px] overflow-hidden">
      {/* Estructura de fondo */}
      <div className="absolute inset-0 flex">
        {/* Panel izquierdo con carrusel */}
        <div className="w-full xl:w-[65%] h-full relative overflow-hidden">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
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
              {/* Overlay principal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              {/* Overlay de color */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/30 via-brand-coral/20 to-brand-teal/25" />
            </div>
          ))}
        </div>

        {/* Panel derecho con imagen de la facilitadora */}
        <div className="hidden xl:block w-[35%] h-full relative overflow-hidden">
          {/* Imagen de la facilitadora */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transform hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage: `url(${facilitadoraImage})`,
            }}
          >
            {/* Overlay con gradiente */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-brand-purple/50 to-brand-purple/70 backdrop-blur-sm" />
          </div>
          
          {/* Contenido del panel */}
          <div className="relative h-full flex items-center justify-center px-8">
            <div className="text-white text-center backdrop-blur-sm bg-black/20 p-6 rounded-2xl border border-white/10">
              <h2 className="text-3xl mb-6 font-dancing">¿Por qué este taller?</h2>
              <ul className="space-y-4 text-lg">
                <li className="backdrop-blur-sm bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                  Entender los cambios
                </li>
                <li className="backdrop-blur-sm bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                  Fortalecer vínculos
                </li>
                <li className="backdrop-blur-sm bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                  Crear confianza
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto h-full flex flex-col justify-center relative z-30 px-4">
        <div className="max-w-3xl animate-fade-in md:ml-8 lg:ml-16">
          {/* Badge mejorado */}
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold px-6 py-2 rounded-full mb-8 shadow-lg">
            Taller Transformador para Padres
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 [text-shadow:_0_3px_12px_rgba(0,0,0,0.8)]">
            Pubertad y Adolescencia
            <br />
            <span className="font-dancing text-brand-coral text-4xl md:text-5xl lg:text-6xl block mt-2">
              Sin Miedo
            </span>
          </h1>

          {/* Subtítulo con glassmorphism */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8 max-w-2xl shadow-xl border border-white/30">
            <p className="text-white text-lg md:text-xl leading-relaxed">
              Lo que toda mamá o papá necesita saber antes de que la relación se fracture.
              <br /><br />
              <span className="text-brand-coral font-medium">
                Una guía para acompañar con claridad, conexión y sin gritos.
              </span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-brand-coral via-brand-purple to-brand-teal text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-xl group"
            >
              <span className="relative z-10 flex items-center">
                ¡Quiero Inscribirme!
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Button>
            <Button
              onClick={() => onScrollToSection('detalles')}
              size="lg"
              className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Conocer Más
            </Button>
          </div>
        </div>
      </div>

      {/* Efectos de iluminación */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-brand-purple/30 blur-3xl z-0" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 rounded-full bg-brand-coral/30 blur-3xl z-0" />
    </section>
  );
};

export default Hero;
