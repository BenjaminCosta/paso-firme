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
      url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      alt: 'Familia con adolescente'
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
      {/* Fondo con efectos mejorados */}
      <div className="absolute inset-0">
        {/* Carrusel de fondo */}
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
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-brand-purple/10 to-brand-beige/20" />
          </div>
        ))}
        
        {/* Círculos de color */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-brand-purple/20 blur-[90px]"></div>
        <div className="absolute bottom-1/3 -right-20 w-72 h-72 rounded-full bg-brand-coral/20 blur-[100px]"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-brand-teal/20 blur-[80px]"></div>
      </div>

      {/* Mockup elegante */}
      <div className="absolute right-[8%] top-1/2 mt-4 transform -translate-y-1/2 hidden lg:block w-[25%] max-w-[380px] z-20">
        <div className="relative w-full h-[420px] group">
          <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border-2 border-white/20 backdrop-blur-sm bg-white/5">
            <div className="absolute inset-0 bg-[url('/path-to-ebook-mockup.png')] bg-contain bg-no-repeat bg-center z-10" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-teal-400/10" />
          </div>
          
          {/* Efecto de página */}
          <div className="absolute top-0 right-0 h-full w-6 bg-gradient-to-l from-white/30 to-transparent transform skew-x-[-12deg] origin-right"></div>
          
          {/* Reflexión */}
          <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-sm">
            <div className="absolute inset-0 bg-[url('/path-to-ebook-mockup.png')] bg-contain bg-no-repeat bg-center opacity-20" />
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full container mt-4 mx-auto px-16 flex items-center">
        <div className="w-full lg:w-1/2">
        
          <h1 className="text-6xl md:text-7xl font-medium text-white leading-tight mb-2">
            Límites en la adolescencia...
          </h1>
          
          {/* Subtítulo con diseño mejorado */}
          <div className="mb-6">
            <p className="font-dancing font-bold text-brand-coral text-4xl md:text-5xl">
            Sin perder a tu hijo
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-brand-teal to-brand-purple mt-2"></div>
          </div>

          {/* Descripción con glassmorphism */}
          <div className="mb-10 max-w-2xl relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 shadow-lg">
              <p className="text-xl text-white/90 italic">
                "Una guía clara y firme para poner límites sin gritar, ceder ni perder conexión con tu hijo (ni contigo)."
              </p>
            </div>
            <div className="absolute -left-2 top-0 h-full w-1 bg-gradient-to-b from-brand-coral to-brand-purple rounded-full"></div>
          </div>

          {/* CTA Premium Mejorado */}
<div className="flex flex-col sm:flex-row gap-4 items-center"> {/* Cambiado a items-center para alinear verticalmente */}
  <Button className="relative overflow-hidden py-5 px-8 bg-gradient-to-r from-brand-coral to-brand-purple hover:from-brand-purple hover:to-brand-coral text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all group flex items-center">
    <span className="relative z-10 flex items-center">
      Descargar E-Book
      <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
      </svg>
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Button>
  
  <div className="flex items-center text-white/80 text-sm bg-white/5 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
    <svg className="flex-shrink-0 w-5 h-5 mr-2 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
    </svg>
    <span>Pago 100% seguro</span>
  </div>
</div>
        </div>
      </div>
    </section>
  );
};

export default Heroe;