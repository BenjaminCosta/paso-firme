import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X, MessageSquare, Heart, Star, ChevronRight, ChevronLeft } from 'lucide-react';
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
      name: "Ana, madre comprometida",
      role: "Madre responsable",
      icon: <Heart className="w-5 h-5 text-brand-coral" />
    },
    {
      quote: "Mi hijo no cambió de la noche a la mañana, pero yo sí. Y eso cambió todo.",
      name: "Carlos, padre dedicado",
      role: "Padre presente",
      icon: <Star className="w-5 h-5 text-brand-teal" />
    },
    {
      quote: "Siento que tengo una hoja de ruta emocional. Me sostengo sin perder la cabeza.",
      name: "María, educadora familiar",
      role: "Especialista en familia",
      icon: <MessageSquare className="w-5 h-5 text-brand-purple" />
    }
  ];

  return (
    <section className="relative py-12 px-4 sm:px-6 bg-gray-900 overflow-hidden">
      {/* Efectos de fondo minimalistas */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-950"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full bg-brand-teal/10 blur-[80px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-purple/10 blur-[80px]"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Encabezado compacto */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-5">
            <div className="w-12 h-px bg-gray-600"></div>
            <span className="text-base font-medium tracking-widest text-brand-teal uppercase">Testimonios reales</span>
            <div className="w-12 h-px bg-gray-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 leading-tight">
            <span className="block">¿Es esta la guía</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral">para ti?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto mt-4">
            Descubre lo que padres como tú están logrando con estas herramientas
          </p>
        </div>

        {/* Carrusel de testimonios compacto */}
        <div className="mb-8">
          <Carousel className="w-full">
            <div className="flex items-center justify-between mb-8">
              <div className="hidden md:flex space-x-2">
                <CarouselPrevious className="relative top-0 w-10 h-10 rounded-full bg-white/5 border-white/20 hover:bg-white/10 text-white">
                  <ChevronLeft className="w-4 h-4" />
                </CarouselPrevious>
                <CarouselNext className="relative top-0 w-10 h-10 rounded-full bg-white/5 border-white/20 hover:bg-white/10 text-white">
                  <ChevronRight className="w-4 h-4" />
                </CarouselNext>
              </div>
            </div>
            
            <CarouselContent className="-ml-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full min-h-[320px]">
                    <div className="absolute inset-0 bg-gray-800/80 rounded-2xl overflow-hidden flex flex-col border border-gray-700/50">
                      {/* Cabecera */}
                      <div className="h-14 bg-gray-800 flex items-center px-4 border-b border-gray-700">
                        <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                          {testimonial.icon}
                        </div>
                        <div className="ml-2">
                          <p className="text-white font-medium text-sm">{testimonial.name}</p>
                          <p className="text-white/50 text-xs">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      {/* Mensaje */}
                      <div className="flex-1 p-4 flex items-center">
                        <div className="relative max-w-[85%]">
                          <div className="bg-white/10 rounded-xl rounded-tl-none p-4 border border-white/20">
                            <p className="text-white/90 italic text-sm">"{testimonial.quote}"</p>
                          </div>
                          <div className="absolute -left-1.5 top-0 w-3 h-3 overflow-hidden">
                            <div className="w-3 h-3 bg-white/10 border-l border-t border-white/20 transform -rotate-45 origin-bottom-right"></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Pie */}
                      <div className="h-12 bg-gray-800 flex items-center justify-between px-3 border-t border-gray-700">
                        <div className="flex-1 bg-gray-700/50 rounded-full h-8 flex items-center px-3 text-white/50 text-xs">
                          Escribe un mensaje...
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AudienceTestimonials;