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
      quote: "Esta guía transformó cómo veo la paternidad. Ahora tengo herramientas que funcionan sin dañar nuestro vínculo.",
      name: "Ana, madre de 2",
      role: "Madre de adolescentes",
      icon: <Heart className="w-5 h-5 text-brand-coral" />
    },
    {
      quote: "Por fin entiendo cómo poner límites sin sentirme culpable. Mi relación con mi hijo adolescente nunca fue mejor.",
      name: "Carlos, padre soltero",
      role: "Padre de 16 años",
      icon: <Star className="w-5 h-5 text-brand-teal" />
    },
    {
      quote: "De manual teórico a guía práctica. Cada consejo es aplicable y respeta tanto a padres como a hijos.",
      name: "María, educadora",
      role: "Especialista en adolescencia",
      icon: <MessageSquare className="w-5 h-5 text-brand-purple" />
    },
    {
      quote: "Implementamos las estrategias y en 3 semanas vimos cambios significativos en la dinámica familiar.",
      name: "Laura y Javier",
      role: "Padres de gemelos",
      icon: <Heart className="w-5 h-5 text-brand-coral" />
    },
    {
      quote: "Como terapeuta familiar, recomiendo esta guía por su enfoque equilibrado y respetuoso.",
      name: "Dr. Rodríguez",
      role: "Terapeuta familiar",
      icon: <Star className="w-5 h-5 text-brand-teal" />
    }
  ];

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gray-900 overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-gray-900/90 to-brand-teal/30"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-teal/20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-purple/20 blur-[100px]"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Encabezado con más impacto */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-brand-teal/50"></div>
            <span className="text-sm font-medium tracking-widest text-brand-teal uppercase">Testimonios reales</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-brand-coral/50"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="block">¿Es esta guía</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral">para ti?</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mt-6">
            Descubre lo que padres como tú están logrando con estas herramientas
          </p>
        </div>

        {/* Sección de comparación mejor distribuida */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {/* Columna positiva */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-teal/40 transition-all duration-300 h-full">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 flex items-center justify-center text-brand-teal mr-5 border border-brand-teal/30">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">Perfecta para ti si...</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Tienes hijos entre 10-17 años",
                "Quieres autoridad sin autoritarismo",
                "Valoras el respeto mutuo",
                "Buscas herramientas prácticas",
                "Prefieres conexión sobre control",
                "Estás abierto/a a nuevos enfoques"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-brand-teal">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna negativa */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-brand-coral/40 transition-all duration-300 h-full">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 flex items-center justify-center text-brand-coral mr-5 border border-brand-coral/30">
                <X className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white">No es para ti si...</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "Buscas soluciones mágicas",
                "Prefieres castigos severos",
                "No quieres reflexionar",
                "Esperas cambios instantáneos",
                "Crees en 'mi casa, mis reglas' sin diálogo",
                "No estás dispuesto/a a adaptarte"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-4 text-brand-coral">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                  <span className="text-white/90 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Carrusel de testimonios moderno */}
        
          <Carousel className="w-full">

          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold text-white">Voces que inspiran</h3>
            <div className="hidden md:flex space-x-3">
              <CarouselPrevious className="relative top-0 left-0 right-0 translate-x-0 translate-y-0 w-12 h-12 rounded-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white">
                <ChevronLeft className="w-5 h-5" />
              </CarouselPrevious>
              <CarouselNext className="relative top-0 left-0 right-0 translate-x-0 translate-y-0 w-12 h-12 rounded-full bg-white/5 border-white/20 hover:bg-white/10 hover:border-white/30 text-white">
                <ChevronRight className="w-5 h-5" />
              </CarouselNext>
            </div>
          </div>
          
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
                    <div className="mb-6 text-white/80 text-lg italic flex-grow">"{testimonial.quote}"</div>
                    <div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-white font-medium block">{testimonial.name}</span>
                          <span className="text-white/60 text-sm">{testimonial.role}</span>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                          {testimonial.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
 

        {/* CTA mejorado */}
        <div className="text-center">
          <Button className="relative overflow-hidden py-6 px-14 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral hover:from-brand-coral hover:via-brand-purple hover:to-brand-teal text-white text-lg font-bold rounded-xl shadow-2xl transition-all transform hover:scale-[1.02] group">
            <span className="relative z-10 flex items-center justify-center">
              Descubrir la guía completa
              <ChevronRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
          </Button>
          
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            {[
              { icon: "✓", text: "Garantía de 7 días" },
              { icon: "🔒", text: "Pago 100% seguro" },
              { icon: "⚡", text: "Acceso inmediato" },
              { icon: "📱", text: "Dispositivos múltiples" }
            ].map((item, index) => (
              <div key={index} className="flex items-center text-white/80 text-sm bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceTestimonials;