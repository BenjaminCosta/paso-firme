import React from 'react';
import { Button } from "@/components/ui/button";
import { Heart, MessageSquare, User, ChevronRight, ChevronLeft } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const AudienceTestimonials = () => {
  const testimonials = [
    {
      quote: "Lo que más agradezco de esta guía es que no me hace sentir culpable por poner límites. Me hace sentir mamá con fuerza.",
      name: "Clara",
      role: "Mamá de adolescente",
      icon: <Heart className="w-4 h-4 text-white" />,
      color: "bg-brand-coral"
    },
    {
      quote: "Mi hijo no cambió de la noche a la mañana, pero yo sí. Y eso cambió todo.",
      name: "Familia Vargas Luján",
      role: "Padres comprometidos",
      icon: <User className="w-4 h-4 text-white" />,
      color: "bg-brand-teal"
    },
    {
      quote: "Siento que tengo una hoja de ruta emocional. Me sostengo sin perder la cabeza.",
      name: "Luz del Carmen",
      role: "Mamá de 2 adolescentes",
      icon: <MessageSquare className="w-4 h-4 text-white" />,
      color: "bg-brand-purple"
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-white via-brand-beige/10 to-white">
      {/* Fondo decorativo suave */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand-coral/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-purple/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5)_0%,_transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-brand-teal to-transparent"></div>
            <span className="mx-3 text-xs font-semibold tracking-widest text-brand-teal uppercase">Testimonios</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent via-brand-teal to-transparent"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Lo que dicen <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple">nuestras familias</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mt-4">
            Experiencias reales de padres que transformaron su dinámica familiar
          </p>
        </div>

        {/* Carrusel */}
        <div>
          <Carousel>
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="p-2 h-full">
                    <div className="relative h-full bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-1">
                      <div className={`absolute top-0 left-0 w-full h-1 ${testimonial.color}`}></div>
                      <div className="p-6 flex flex-col h-full">
                        <div className="flex items-center mb-5">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${testimonial.color} shadow-md`}>
                            {testimonial.icon}
                          </div>
                          <div className="ml-4">
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                          </div>
                          <span className="ml-auto text-xs text-gray-400">Hoy</span>
                        </div>
                        <div className="flex-1 mb-6 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-coral to-brand-teal rounded-full"></div>
                          <p className="text-gray-700 pl-5 italic">"{testimonial.quote}"</p>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400">
                          <div className="flex gap-1">
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                          </div>
                          <span className="flex items-center">✓✓ <span className="ml-1">Leído</span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controles */}
            <div className="flex items-center justify-center mt-10 gap-4">
              <CarouselPrevious className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow hover:shadow-md transition">
                <ChevronLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 shadow hover:shadow-md transition">
                <ChevronRight className="w-5 h-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AudienceTestimonials;
