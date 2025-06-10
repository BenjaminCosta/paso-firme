import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Yo no sabía cómo ayudarlo con todo lo que implica este cambio, y este taller le dio y me dio tranquilidad… porque sé que ahora entra mucho mejor preparado a secundaria",
      color: "brand-purple",
    },
    {
      quote:
        "Debería ser obligatorio para cualquier preadolescente.",
      color: "brand-yellow",
    },
    {
      quote:
        "Es increíble lo que este taller hizo en mi hija; la noté más segura, pero sobre todo con más fuerza y preparación interna, gracias Oli",
      color: "brand-coral",
    },
    {
      quote:
        "No solo aprendió cosas… le pusieron nombre a lo que sentía y le dieron las herramientas para manejarlo. Ahora entiendo porqué este taller es tan necesario",
      color: "brand-teal",
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div
        className="absolute inset-0 z-0 md:bg-fixed"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.3), rgba(227, 216, 204, 0.1)), url('https://images.unsplash.com/photo-1636740106158-d630d506e2cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHByZSUyMGFkb2xlc2NlbmNlc3xlbnwwfDB8MHx8fDI%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-brand-teal/5 to-white/30 z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-5 leading-tight text-center break-words">
  Lo que cuentan{" "}
  <span className="relative inline-block">
    <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text font-pacifico text-transparent">
      las familias
    </span>
    <span className="absolute bottom-1 left-0 right-0 h-2 bg-brand-yellow/30 -z-0"></span>
  </span>
</h2>



         <p className="text-xl text-gray-800 max-w-3xl mx-auto font-semibold">
  Padres que vieron un cambio real en sus hijos… y una{" "}
  <span className="font-bold">conexión familiar</span> más fuerte que nunca
</p>

        </div>

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
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="group relative h-full p-1">
                    <div className={`bg-white rounded-2xl p-6 h-full flex flex-col justify-center border-2 border-${testimonial.color}/20 hover:border-${testimonial.color}/40 transition-all duration-300 shadow-sm hover:shadow-lg`}
                     
                    >
                      <div
                        className={`absolute top-6 right-6 w-10 h-10 rounded-full bg-${testimonial.color}/10 flex items-center justify-center`}
                      >
                        <Quote className={`w-5 h-5 text-${testimonial.color}`} />
                      </div>
                      <p className="text-gray-700 italic text-lg mb-6 pr-4">
                        “{testimonial.quote.split(".")[0]}.”
                        {testimonial.quote.includes(".") && (
                          <span>
                            {" "}
                            {testimonial.quote.slice(
                              testimonial.quote.indexOf(".") + 1
                            )}
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

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
