import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Heart, Star, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
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
    <section className="relative py-12 mt-20 px-4 sm:px-6">
      {/* Contenedor principal con fondo transparente */}
      <div className="max-w-5xl mx-auto relative">
       {/* Encabezado compacto */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-5">
            <div className="w-12 h-px bg-gray-600"></div>
            <span className="text-base font-medium tracking-widest text-brand-teal uppercase">Testimonios reales</span>
            <div className="w-12 h-px bg-gray-600"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-3 leading-tight">
            <span className="block">¿Es esta la guía</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral">para ti?</span>
          </h2>
          <p className="text-lg text-gray-800 max-w-xl mx-auto mt-4">
            Descubre lo que padres como tú están logrando con estas herramientas
          </p>
        </div>

        {/* Carrusel moderno */}
        <div className="mb-8">
          <Carousel className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="hidden md:flex space-x-2">
                <CarouselPrevious className="relative top-0 w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm">
                  <ChevronLeft className="w-4 h-4" />
                </CarouselPrevious>
                <CarouselNext className="relative top-0 w-10 h-10 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-sm">
                  <ChevronRight className="w-4 h-4" />
                </CarouselNext>
              </div>
            </div>
            
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full">
                    {/* Tarjeta de testimonio - diseño claro */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
                      {/* Cabecera con acento de color */}
                      <div className={`h-2 ${index % 3 === 0 ? 'bg-brand-teal/20' : index % 3 === 1 ? 'bg-brand-purple/20' : 'bg-brand-coral/20'}`}></div>
                      
                      {/* Contenido principal */}
                      <div className="p-5 flex-1">
                        <div className="flex items-start mb-4">
                          <div className={`p-2 rounded-lg mr-3 ${
                            index % 3 === 0 ? 'bg-brand-teal/10 text-brand-teal' : 
                            index % 3 === 1 ? 'bg-brand-purple/10 text-brand-purple' : 
                            'bg-brand-coral/10 text-brand-coral'
                          }`}>
                            {testimonial.icon}
                          </div>
                          <div>
                            <p className="font-medium text-gray-800">{testimonial.name}</p>
                            <p className="text-gray-500 text-sm">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        {/* Mensaje con diseño de chat moderno */}
                        <div className="relative pl-4">
                          <div className={`absolute left-0 top-2 w-1 h-3/4 rounded-full ${
                            index % 3 === 0 ? 'bg-brand-teal' : 
                            index % 3 === 1 ? 'bg-brand-purple' : 
                            'bg-brand-coral'
                          }`}></div>
                          <p className="text-gray-700 italic pl-3">"{testimonial.quote}"</p>
                        </div>
                      </div>
                      
                      {/* Pie de tarjeta sutil */}
                      <div className="px-5 pb-4">
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>Experiencia verificada</span>
                          <Check className="w-4 h-4 text-brand-teal" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* CTA discreto */}
        <div className="text-center">
          <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal/5 hover:text-brand-teal">
            Ver más testimonios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AudienceTestimonials;