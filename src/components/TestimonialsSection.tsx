import { Quote } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    { 
      quote: "Mi hija llegó nerviosa y salió completamente transformada. Ahora tiene herramientas reales para manejar la ansiedad y se siente segura de comenzar la secundaria. Vale cada peso invertido.", 
      author: "María José, mamá de Sofía (12 años)", 
      color: "brand-teal" 
    },
    { 
      quote: "Como padre, me sorprendió ver cómo Olivia logró que mi hijo se abriera y hablara de sus miedos. Ahora tiene más confianza en sí mismo y mejor comunicación en casa.", 
      author: "Roberto, papá de Diego (11 años)", 
      color: "brand-purple" 
    },
    { 
      quote: "El taller online fue perfecto para nosotros. Mi hija pudo participar desde casa y los materiales son excelentes. La metodología de Olivia es única y muy efectiva.", 
      author: "Carmen, mamá de Valeria (13 años)", 
      color: "brand-yellow" 
    },
    { 
      quote: "No sabíamos cómo ayudar a nuestro hijo con sus miedos sobre la secundaria. Este taller nos dio paz mental a nosotros y confianza a él. Recomendado al 100%.", 
      author: "Ana y Luis, padres de Mateo (12 años)", 
      color: "brand-coral" 
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Fondo con efecto parallax CSS puro */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(227, 216, 204, 0.4)), url('https://images.unsplash.com/photo-1629360035258-2ccb13aa3679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>

      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-brand-teal/5 to-white/30 z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Lo que dicen las <span className="bg-gradient-to-r from-brand-coral to-brand-purple bg-clip-text text-transparent">familias</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Testimonios reales de padres que han visto la transformación en sus hijos
          </p>
        </div>

        {/* Carousel de testimonios */}
        <div className="px-8 md:px-12 lg:px-16">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative h-full p-1">
                    <div className={`bg-white rounded-2xl p-6 h-full border-2 border-${testimonial.color}/20 hover:border-${testimonial.color}/40 transition-all duration-300 shadow-sm hover:shadow-lg`}>
                      <div className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-${testimonial.color}/10 flex items-center justify-center`}>
                        <Quote className={`w-5 h-5 text-${testimonial.color}`} />
                      </div>
                      <p className="text-gray-700 italic text-lg mb-6 pr-4">
                        "{testimonial.quote}"
                      </p>
                      <p className={`font-medium text-${testimonial.color}`}>
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles del carousel */}
            <div className="mt-8 flex justify-center gap-4">
              <CarouselPrevious className="relative left-0 transform-none -translate-y-0 hover:bg-brand-teal/10 hover:text-brand-teal" />
              <CarouselNext className="relative right-0 transform-none -translate-y-0 hover:bg-brand-teal/10 hover:text-brand-teal" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
