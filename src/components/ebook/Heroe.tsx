import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Heroe = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const carouselImages = [
    {
      url: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Padre e hija conversando'
    },
    {
      url: 'https://images.unsplash.com/photo-1549421263-6064833b071b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80',
      alt: 'Adolescente pensativo'
    },
    {
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Familia abrazándose'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[72vh] min-h-[720px] md:min-h-[650px] w-full overflow-hidden">
      {/* Fondo con diseño elegante */}
      <div className="absolute inset-0 flex">
        {/* Lado izquierdo - Carrusel con overlay */}
        <div className="w-full lg:w-[75%] h-full relative overflow-hidden">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />
            </div>
          ))}
        </div>

        {/* Lado derecho - Degradado elegante */}
        <div className="hidden lg:block w-[40%] h-full relative bg-gradient-to-br from-brand-purple/90 to-brand-teal/80">
          <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center mix-blend-overlay" />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            
                {/* Beneficios en desktop */}
          <div className="hidden mt-20 lg:flex  h-full items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-2xl border-2 border-white/20 max-w-sm transform">
              <h3 className="text-2xl font-bold text-white mb-6">Tu guía incluye:</h3>
              
              <div className="space-y-4">
                {[
                  {
                    icon: '📖',
                    title: 'Guía descargable',
                    desc: 'PDF con ejercicios prácticos'
                  },
                  {
                    icon: '🎧',
                    title: 'Audios de apoyo',
                    desc: 'Técnicas para mantener la calma'
                  },
                  {
                    icon: '🗺️',
                    title: 'Mapa de límites',
                    desc: 'Plantilla imprimible paso a paso'
                  },
                  {
                    icon: '💬',
                    title: 'Frases clave',
                    desc: 'Para momentos de tensión'
                  },
                  {
                    icon: '📱',
                    title: 'Acceso móvil',
                    desc: 'Disponible en todos tus dispositivos'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="text-2xl mr-4 transition-transform group-hover:scale-125">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-semibold group-hover:text-brand-coral transition-colors">{item.title}</h4>
                      <p className="text-white/80 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center space-x-4">
                  <div className="text-white/80 text-xs">
                    <svg className="inline-block w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Acceso inmediato
                  </div>
                  <div className="text-white/80 text-xs">
                    <svg className="inline-block w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Garantía de 7 días
                  </div>
                </div>
              </div>
            </div>
          </div>
               
              </div>
            </div>
          
      </div>

      {/* Contenido principal */}
<div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-12">
  <div className="h-full flex flex-col lg:flex-row items-center">
    {/* Texto principal */}
    <div className="w-full lg:w-7/12 pt-24 lg:pt-16">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
        <span className="block text-white bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Límites en la adolescencia</span>
        <span className="block text-brand-coral text-3xl sm:text-4xl mt-4 font-medium tracking-normal">Sin perder a tu hijo</span>
      </h1>

      {/* Guía esencial - Diseño mejorado */}
      <div className="mb-10 max-w-2xl relative">
        <div className="absolute -left-1 top-0 h-full w-1 bg-gradient-to-b from-brand-coral to-brand-purple rounded-full"></div>
        <p className="text-xl sm:text-2xl text-white/90 pl-6">
          Una guía directa y emocionalmente firme para que pongas límites sin gritar, sin ceder,
y sin romper la conexión con tu hijo adolescente (ni contigo).

            
        </p>
      </div>

      {/* Beneficios en móvil - Versión mejorada */}
      <div className="lg:hidden bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-lg rounded-2xl p-6 mb-8 border border-white/10 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-5 flex items-center">
          <svg className="w-5 h-5 mr-2 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
          </svg>
          Incluye en tu compra:
        </h3>
        <div className="space-y-4">
          {[
            "Guía descargable (PDF)",
            "Audio de emergencia",
            "Mapa de límites claros",
            "Frases SOS para momentos críticos"
          ].map((item, index) => (
            <div key={index} className="flex items-center group">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-teal/90 flex items-center justify-center mr-3 transition-all group-hover:bg-brand-coral">
                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white group-hover:text-brand-coral transition-all">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA - Versión mejorada */}
      <div className="flex flex-col sm:flex-row gap-5 items-start">
        <Button className="relative overflow-hidden py-6 px-10 bg-gradient-to-r from-brand-coral to-brand-purple hover:from-brand-purple hover:to-brand-coral text-lg font-bold rounded-full shadow-xl hover:shadow-brand-coral/20 transition-all transform hover:scale-[1.02] group">
          <span className="relative z-10">Descargar ahora — $295 MXN</span>
          <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Button>
        <div className="flex items-center text-white/80 text-sm sm:self-center">
          <svg className="flex-shrink-0 w-4 h-4 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <span className="border-b border-transparent hover:border-white/50 transition-colors">Pago 100% seguro</span>
        </div>
      </div>
    </div>
  </div>
</div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-brand-teal/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-purple/10 blur-3xl"></div>
    </section>
  );
};

export default Heroe;