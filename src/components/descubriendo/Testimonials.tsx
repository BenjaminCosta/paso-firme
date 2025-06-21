import { Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Gracias Oli, cambiaste mucho mi perspectiva… Entendí que no se trata de forzarlo, sino de hacer las cosas con esfuerzo e intención",
      name: "Sofía, 14 años",
      color: "brand-purple",
    },
    {
      quote:
        "Aprendí a organizarme para no sentir tanto estrés, las técnicas para hackear el cerebro fueron lo mejor, ahora ya no dejaré que me controle",
      name: "Ana Paula, 13 años",
      color: "brand-yellow",
    },
    {
      quote:
        "Me gustó conocer sobre la dopamina, procrastinación y cómo tener más control sobre mi celular. No sabía que mi cerebro funcionaba así",
      name: "David, 17 años",
      color: "brand-coral",
    },
    {
      quote:
        "Me llevo herramientas para organizarme mejor y saber que la disciplina puede ser el inicio para sentir motivación, gracias por todo",
      name: "Eugenia, 19 años",
      color: "brand-teal",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div
        className="absolute inset-0 z-0 md:bg-fixed"
        style={{
          backgroundImage: `url('/imagenes/testimonials.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-brand-teal/5 to-white/30 z-0"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-5 leading-tight text-center break-words">
            Lo que cuentan{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text font-pacifico text-transparent">
                los adolescentes
              </span>
              <span className="absolute bottom-1 left-0 right-0 h-2 bg-brand-yellow/30 -z-0"></span>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-semibold">
            Ellos vivieron el taller desde adentro… y descubrieron{" "}
            <span className="font-bold">el poder de conocerse</span> y
            entrenarse por dentro
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
                    <div
                      className={`bg-white/60 backdrop-blur-lg rounded-2xl p-6 h-full flex flex-col justify-center border-2 border-${testimonial.color}/20 hover:border-${testimonial.color}/40 transition-all duration-300 shadow-sm hover:shadow-lg`}
                    >
                      <div
                        className={`absolute top-2 right-2 w-10 h-10 rounded-full bg-${testimonial.color}/10 flex items-center justify-center`}
                      >
                        <Quote className={`w-5 h-5 text-${testimonial.color}`} />
                      </div>
                      <p className="text-gray-900 italic text-lg mb-6 pr-4">
                        “{testimonial.quote}”
                      </p>
                      <p className="text-sm font-semibold text-gray-700">
                        — {testimonial.name}
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

export default Testimonials;
