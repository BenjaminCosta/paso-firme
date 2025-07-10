import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, X, MessageSquare, Heart, Star, ChevronRight, ChevronLeft, ShieldCheck, LockKeyhole, Download, Smartphone } from 'lucide-react';
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

        {/* Sección de comparación con fondo oscuro mejorado */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
  {/* Columna positiva - Versión oscura premium */}
  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 rounded-2xl p-8 border border-gray-700/30 hover:border-brand-teal/50 transition-all duration-300 h-full group shadow-lg hover:shadow-xl">
    <div className="flex items-center mb-8">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-teal to-brand-teal/80 flex items-center justify-center text-white mr-6 shadow-lg group-hover:scale-105 transition-transform">
        <Check className="w-8 h-8" strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-bold text-white">
        <span className="bg-gradient-to-r from-brand-teal to-brand-teal/80 bg-clip-text text-transparent">
          Perfecta para ti si...
        </span>
      </h3>
    </div>
    
    <ul className="space-y-5">
      {[
        "Tienes hijos entre 10-17 años",
        "Quieres autoridad sin autoritarismo",
        "Valoras el respeto mutuo",
        "Buscas herramientas prácticas",
        "Prefieres conexión sobre control",
        "Estás abierto/a a nuevos enfoques"
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-4 text-brand-teal bg-gray-800 p-1.5 rounded-lg border border-gray-700">
            <ChevronRight className="w-5 h-5" />
          </div>
          <span className="text-gray-200 text-lg font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* Columna negativa - Versión oscura premium */}
  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/90 rounded-2xl p-8 border border-gray-700/30 hover:border-brand-coral/50 transition-all duration-300 h-full group shadow-lg hover:shadow-xl">
    <div className="flex items-center mb-8">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-coral to-brand-coral/80 flex items-center justify-center text-white mr-6 shadow-lg group-hover:scale-105 transition-transform">
        <X className="w-8 h-8" strokeWidth={2.5} />
      </div>
      <h3 className="text-2xl font-bold text-white">
        <span className="bg-gradient-to-r from-brand-coral to-brand-coral/80 bg-clip-text text-transparent">
          No es para ti si...
        </span>
      </h3>
    </div>
    
    <ul className="space-y-5">
      {[
        "Buscas soluciones mágicas",
        "Prefieres castigos severos",
        "No quieres reflexionar",
        "Esperas cambios instantáneos",
        "Crees en 'mi casa, mis reglas' sin diálogo",
        "No estás dispuesto/a a adaptarte"
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 mt-1 mr-4 text-brand-coral bg-gray-800 p-1.5 rounded-lg border border-gray-700">
            <ChevronRight className="w-5 h-5" />
          </div>
          <span className="text-gray-200 text-lg font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</div>

        {/* Carrusel de testimonios moderno */}
        
          <>
  {/* Sección de Testimonios */}
  <div className="mb-20">
    <Carousel className="w-full">
      {/* Encabezado y controles DEBEN estar dentro de Carousel */}
      <div className="flex items-center justify-between mb-12">
        <h3 className="text-3xl font-bold text-white">Lo que dicen padres como tú</h3>
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
            {/* Contenido del testimonio estilo Story/DM */}
            <div className="relative h-full min-h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden flex flex-col">
                {/* Cabecera */}
                <div className="h-16 bg-gray-800/80 backdrop-blur-sm flex items-center px-4 border-b border-gray-700">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    {testimonial.icon}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium text-sm">{testimonial.name}</p>
                    <p className="text-white/50 text-xs">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Mensaje */}
                <div className="flex-1 p-6 flex items-center">
                  <div className="relative max-w-[80%]">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl rounded-tl-none p-5 border border-white/20">
                      <p className="text-white/90 italic">"{testimonial.quote}"</p>
                    </div>
                    <div className="absolute -left-1.5 top-0 w-3 h-3 overflow-hidden">
                      <div className="w-3 h-3 bg-white/10 backdrop-blur-sm border-l border-t border-white/20 transform -rotate-45 origin-bottom-right"></div>
                    </div>
                  </div>
                </div>
                
                {/* Pie */}
                <div className="h-14 bg-gray-800/80 backdrop-blur-sm flex items-center justify-between px-4 border-t border-gray-700">
                  <div className="flex-1 bg-gray-700/50 rounded-full h-10 flex items-center px-4 text-white/50 text-sm">
                    Escribe un mensaje...
                  </div>
                  <button className="ml-2 w-10 h-10 rounded-full bg-brand-teal/90 flex items-center justify-center text-white">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-white/80 text-xs bg-black/30 px-3 py-1 rounded-full">
                Hace 2 días
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  </div>


</>
      </div>
    </section>
  );
};

export default AudienceTestimonials;