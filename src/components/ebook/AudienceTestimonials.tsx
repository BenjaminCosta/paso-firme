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
      name: "Clara",
      role: "Mamá de adolescente",
      icon: <Heart className="w-5 h-5 text-brand-coral" />
    },
    {
      quote: "Mi hijo no cambió de la noche a la mañana, pero yo sí. Y eso cambió todo.",
      name: "Familia Vargas Luján",
      role: "Padres comprometidos",
      icon: <Star className="w-5 h-5 text-brand-teal" />
    },
    {
      quote: "Siento que tengo una hoja de ruta emocional. Me sostengo sin perder la cabeza.",
      name: "Luz del Carmen",
      role: "Mamá de 2 adolescentes",
      icon: <MessageSquare className="w-5 h-5 text-brand-purple" />
    }
  ];

  return (
    <section className="relative py-16 px-4 sm:px-6 overflow-hidden">
      {/* Fondos con overlays y gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-white/30 to-white/10 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(255,255,255,0.8)_70%)]"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-[80px]"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-[80px]"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Encabezado estilo Story */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-brand-teal"></div>
            <span className="text-sm font-medium tracking-widest text-brand-teal uppercase">DM REALES</span>
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-brand-teal"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="block">Lo que dicen</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple">nuestras mamás</span>
          </h2>
        </div>

        {/* Carrusel estilo Stories */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="relative h-full p-1">
                    {/* Tarjeta estilo Story */}
                    <div className="bg-white rounded-2xl shadow-lg border border-white/80 overflow-hidden h-full flex flex-col transform transition-all hover:scale-[1.02]">
                      {/* Fondo con gradiente */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-beige/20 z-0"></div>
                      
                      {/* Contenido */}
                      <div className="relative z-10 p-6 flex-1 flex flex-col">
                        {/* Header estilo Story */}
                        <div className="flex items-center mb-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            index % 3 === 0 ? 'bg-brand-coral/10' : 
                            index % 3 === 1 ? 'bg-brand-teal/10' : 
                            'bg-brand-purple/10'
                          }`}>
                            {testimonial.icon}
                          </div>
                          <div className="ml-3">
                            <p className="font-bold text-gray-900">{testimonial.name}</p>
                            <p className="text-xs text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        
                        {/* Mensaje estilo DM */}
                        <div className="relative bg-gray-50/70 rounded-xl p-4 mb-4 flex-1">
                          <div className="absolute -left-1 top-4 w-1 h-3/4 rounded-full bg-gradient-to-b from-brand-coral to-brand-purple"></div>
                          <p className="text-gray-800 pl-3 italic">"{testimonial.quote}"</p>
                        </div>
                        
                        {/* Footer estilo redes */}
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>📱 Mensaje directo</span>
                          <span className="flex items-center">
                            <Check className="w-3 h-3 text-brand-teal mr-1" />
                            Verificado
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Controles personalizados */}
            <div className="flex items-center justify-center mt-6 space-x-3">
              <CarouselPrevious className="relative top-0 w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all">
                <ChevronLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="relative top-0 w-12 h-12 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 shadow-lg hover:shadow-xl transition-all">
                <ChevronRight className="w-5 h-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>

        {/* CTA estilo Instagram */}
        <div className="text-center mt-8">
          <Button className="bg-gradient-to-r from-brand-coral to-brand-purple text-white py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
            Ver más testimonios
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AudienceTestimonials;