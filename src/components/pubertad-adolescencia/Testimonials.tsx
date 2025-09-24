import { Button } from "@/components/ui/button";

interface TestimonialItem {
  src: string;
  alt: string;
}

interface TestimonialCardProps {
  item: TestimonialItem;
}

const TestimonialCard = ({ item }: TestimonialCardProps) => {
  return (
    <div className="group relative bg-gradient-to-br from-white/80 to-white/90 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden p-4 h-full border border-brand-blue/5 hover:border-brand-blue/10">
      {/* Bordes decorativos */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/5 to-brand-pink/5 rounded-2xl opacity-50" />
      
      <div className="relative aspect-[3/2] overflow-hidden rounded-xl h-full bg-gradient-to-br from-white/80 to-white/90">
        {/* Imagen */}
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        
        {/* Overlay con gradiente suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Marco decorativo en hover */}
        <div className="absolute inset-0 border border-brand-blue/0 group-hover:border-brand-blue/20 rounded-xl transition-all duration-300" />
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

  return (
    <section className="py-24 bg-gradient-to-b from-white via-brand-red/5 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-brand-pink/5 rounded-full blur-[180px] animate-pulse-slow" />
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[180px] animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-blue/3 rounded-full blur-[200px] animate-pulse-slow opacity-50" />
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle_at_1px_1px,_black_1px,_transparent_0)] bg-[length:48px_48px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-brand-blue/20 to-brand-red/20 text-brand-blue text-sm font-semibold px-6 py-2 rounded-full mb-4 backdrop-blur-sm border border-brand-blue/10">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-red to-gray-900 bg-clip-text text-transparent mb-6">
              Experiencias Transformadoras
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Historias reales de familias que han encontrado claridad y conexión a través de nuestro taller
            </p>
          </div>

          {/* Galería de testimonios moderna */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item, index) => (
              <div 
                key={index} 
                className="group h-full"
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="bg-gradient-to-r from-brand-red to-brand-blue hover:from-brand-red/90 hover:to-brand-blue/90 text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Sé Parte de Estas Historias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
