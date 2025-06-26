import { Quote, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials3 = () => {
  const testimonials = [
    {
      quote: "Llevaba meses sin saber cómo acercarme a mi hija. Gracias a este programa, por fin puedo hablar con ella sin que terminemos en discusión.",
      author: "Mamá de adolescente de 14 años",
      highlight: "acercarme a mi hija"
    },
    {
      quote: "Entendí que no tengo que controlarlo todo. Aprendí a ver a mi hijo con otros ojos y eso lo cambió todo.",
      author: "Papá de adolescente de 16 años",
      highlight: "ver a mi hijo con otros ojos"
    },
    {
      quote: "No es exageración decir que este programa salvó mi relación con mi hija.",
      author: "Mamá de 3 hijos",
      highlight: "salvó mi relación"
    }
  ];

  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div
        className="absolute inset-0 z-0 md:bg-fixed"
        style={{
          backgroundImage: `url('/imagenes/testimonials.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-brand-teal/5 to-white/30 z-0"></div>


      {/* Efectos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-coral/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Encabezado con texto claro */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-brand-teal/10 backdrop-blur-sm rounded-full text-brand-teal text-sm font-bold border border-white/20 mb-6">
            Tranformacion Familiar
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-beige mb-4">
            <span className="font-dancing text-brand-coral text-5xl md:text-6xl">Reseñas</span> de padres
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Historias reales de transformación familiar
          </p>
        </div>

        {/* Carousel de testimonios */}
        <div className="px-4 md:px-8 lg:px-12">
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
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col border border-white/30 hover:border-brand-teal/50 transition-all duration-300 shadow-xl hover:shadow-2xl">
                      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-brand-coral/20 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-brand-coral" />
                      </div>
                      <p 
                        className="text-gray-800 text-lg mb-6 pr-4"
                        dangerouslySetInnerHTML={{
                          __html: `"${testimonial.quote.replace(
                            testimonial.highlight, 
                            `<strong class="text-brand-teal font-medium">${testimonial.highlight}</strong>`
                          )}"`
                        }}
                      />
                      <p className="mt-auto text-sm font-medium text-gray-600">
                        — {testimonial.author}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Controles del carrusel */}
            <div className="mt-10 flex justify-center gap-4">
              <CarouselPrevious className="relative left-0 transform-none -translate-y-0 bg-white/80 hover:bg-brand-teal hover:text-white border border-white/30" />
              <CarouselNext className="relative right-0 transform-none -translate-y-0 bg-white/80 hover:bg-brand-teal hover:text-white border border-white/30" />
            </div>
          </Carousel>
        </div>


      </div>
    </section>
  );
};

export default Testimonials3;