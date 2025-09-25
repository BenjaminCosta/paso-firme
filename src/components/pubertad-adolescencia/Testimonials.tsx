import { Button } from "@/components/ui/button";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface TestimonialItem {
  src: string;
  alt: string;
}

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-white to-gray-50/80 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden p-6 h-full border border-r-brand-red/10 border-b-brand-blue/10 border-t-brand-red/5 border-l-brand-blue/5">
      {/* Elementos decorativos con gradientes */}
      <div className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-br from-brand-red/20 to-brand-blue/10 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 w-4 h-4 bg-gradient-to-tr from-brand-blue/20 to-brand-red/10 rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
      
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl h-full bg-gradient-to-br from-gray-50 to-white">
        {/* Imagen */}
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Marco decorativo con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-blue/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 border-t border-l border-brand-red/10 border-b border-rrounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

interface TestimonialsProps {
  onScrollToSection: (id: string) => void;
}

const Testimonials = ({ onScrollToSection }: TestimonialsProps) => {
  const testimonials: TestimonialItem[] = [
    {
      src: "/imagenes/msj1b.jpeg",
      alt: "Testimonio de transformación familiar"
    },
    {
      src: "/imagenes/msj2b.jpeg",
      alt: "Historia de reconexión padre e hijo"
    },
    {
      src: "/imagenes/msj3b.jpeg",
      alt: "Experiencia de cambio positivo"
    },
    {
      src: "/imagenes/msj4b.jpeg",
      alt: "Resultado transformador del taller"
    },
    {
      src: "/imagenes/msj5b.jpeg",
      alt: "Testimonio de éxito familiar"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Fondo con imagen y gradientes */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548878582-59ec94281735?auto=format&fit=crop&q=100&w=4000"
          alt="Familia con adolescentes compartiendo momento"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-transparent to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/5 via-transparent to-brand-blue/5" />
      </div>

      {/* Elementos decorativos de fondo mejorados */}
      <div className="absolute inset-0">
        {/* Círculos y esferas con gradientes */}
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-brand-red/10 via-brand-blue/5 to-transparent rounded-full blur-[120px] animate-float-slow" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-brand-blue/10 via-brand-red/5 to-transparent rounded-full blur-[120px] animate-float-slow-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-brand-red/3 via-brand-blue/3 to-brand-red/3 rounded-full blur-[150px] animate-pulse-slow" />
        
        {/* Formas geométricas con gradientes */}
        <div className="absolute top-[15%] right-[10%] w-40 h-40 bg-gradient-to-br from-brand-red/5 to-brand-blue/5 rounded-lg rotate-45 " />
        <div className="absolute bottom-[25%] left-[8%] w-32 h-32 bg-gradient-to-tr from-brand-blue/5 to-brand-red/5 rounded-full" />
        <div className="absolute top-[40%] left-[15%] w-24 h-24 bg-gradient-to-bl from-brand-red/5 via-brand-blue/3 to-transparent rounded-lg rotate-12" />
        <div className="absolute bottom-[35%] right-[12%] w-28 h-28 bg-gradient-to-tl from-brand-blue/5 via-brand-red/3 to-transparent rounded-full" />
        
        {/* Líneas decorativas con gradientes */}
        <div className="absolute top-[30%] left-0 w-32 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-brand-blue/30" />
        <div className="absolute bottom-[25%] right-0 w-40 h-px bg-gradient-to-r from-brand-blue/30 via-brand-red/30 to-transparent" />
        <div className="absolute top-[60%] right-0 w-36 h-px bg-gradient-to-r from-brand-red/30 to-brand-blue/30" />
        <div className="absolute bottom-[45%] left-0 w-28 h-px bg-gradient-to-r from-brand-blue/30 to-brand-red/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header Mejorado */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-red/10 to-brand-blue/10 text-brand-red text-sm font-semibold px-6 py-3 rounded-full mb-6 border border-brand-red/20 shadow-lg">
              <span>Historias Reales</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experiencias que <span className="text-brand-red">Transforman</span>
            </h2>
            <p className="text-gray-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-r-brand-red/10 border-b-brand-blue/10 border-t-brand-red/5 border-l-brand-blue/5">
              Familias que han encontrado el camino hacia una conexión más profunda y una comunicación efectiva
            </p>
          </div>

          {/* Carrusel de testimonios mejorado */}
          <div className="max-w-6xl mx-auto px-4 relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-8 touch-pan-y">
                {testimonials.map((item, index) => (
                  <div 
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_60%] lg:flex-[0_0_40%] xl:flex-[0_0_32%] px-3"
                  >
                    <TestimonialCard item={item} />
                  </div>
                ))}
              </div>
            </div>

            {/* Botones de navegación con gradiente */}
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-50/90 shadow-md border border-r-brand-red/10 border-b-brand-blue/10 border-t-brand-red/5 border-l-brand-blue/5 hover:bg-white transition-colors duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft className="w-5 h-5 text-brand-red" />
            </button>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-white to-gray-50/90 shadow-md border border-r-brand-red/10 border-b-brand-blue/10 border-t-brand-red/5 border-l-brand-blue/5 hover:bg-white transition-colors duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight className="w-5 h-5 text-brand-red" />
            </button>
          </div>

          {/* Indicadores con gradiente */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? 'w-8 bg-gradient-to-r from-brand-red to-brand-blue'
                    : 'w-2 bg-gradient-to-r from-brand-red/20 to-brand-blue/20 hover:from-brand-red/30 hover:to-brand-blue/30'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>

          {/* CTA Section con gradiente */}
          <div className="text-center mt-20">
            <Button
              onClick={() => window.open('https://www.familiayformacion.com/tienda/p/pubertad-adolescencia', '_blank')}
              size="lg"
              className="bg-gradient-to-r from-brand-red to-brand-red hover:from-brand-red/90 hover:to-brand-red/90 text-white text-lg px-10 py-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 font-semibold group"
            >
              <span className="flex items-center gap-3">
                <Star className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                Sé la Próxima Historia de Éxito
                <Star className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
