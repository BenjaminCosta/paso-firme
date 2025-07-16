import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Zap, ChevronRight, ShieldCheck } from 'lucide-react';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Heroe = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative w-full h-auto lg:h-[800px] overflow-hidden">
      {/* Premium Gradient Background System */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Image with Darkened Effect */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1699062450156-583cc13f2d83?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80"
            alt="Background"
            className="w-full h-full object-cover opacity-35"
          />
        </div>
        
        {/* Base Dark Gradient (Bottom to Top) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-gray-900/10 to-transparent"></div>
        
        {/* Color Gradient Overlays - Updated with beige/coral/teal */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/20 via-transparent to-brand-teal/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-coral/20 via-transparent to-brand-teal/15"></div>
        
        {/* Diagonal Mesh Gradient - Updated colors */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `
            linear-gradient(335deg, rgba(245, 228, 203, 0.3) 0%, transparent 25%),
            linear-gradient(245deg, rgba(13, 148, 136, 0.3) 0%, transparent 25%),
            linear-gradient(115deg, rgba(239, 108, 108, 0.3) 0%, transparent 20%)
          `,
          backgroundBlendMode: 'overlay'
        }}></div>
        
        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 bg-[length:80px_80px] bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)]"></div>
        
        {/* Light Flare Effect (Top) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-b from-white/5 to-transparent"></div>
        
        {/* Dark Vignette (Edges) */}
        <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center, transparent 60%, rgba(0,0,0,0.5) 100%)"></div>
        
        {/* Animated Particles */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 1000 1000\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.2\'/%3E%3C/svg%3E")'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center pt-12 lg:pt-0 pb-12 lg:pb-0">
        
{/* Elegant Title Section - Mobile - Premium */}
<div className="lg:hidden mt-14 mb-10 px-6 relative">
  {/* Mobile-optimized decorative elements */}
  <div className="absolute left-4 top-0 h-full w-2 bg-gradient-to-b from-transparent via-brand-teal/40 to-transparent"></div>
  
  <div className="pl-6">
    <h1 className="font-serif text-3xl font-light text-gray-800 tracking-tight leading-snug relative">
      <span className="relative z-10">
        Una guía clara para poner límites
        sin gritar, ceder ni perder
        conexión con tu hijo/a adolescente.
      </span>
      <div className="absolute -bottom-2 left-0 h-[3px] w-full bg-gradient-to-r from-transparent via-brand-purple/70 to-transparent"></div>
    </h1>
    
    <div className="mt-5 flex justify-center items-center">
      <div className="h-[2px] w-12 bg-brand-coral/70"></div>
      <div className="h-2 w-2 rounded-full bg-brand-purple/80 mx-2"></div>
      <div className="h-[2px] w-12 bg-brand-teal/70"></div>
    </div>
  </div>
</div>
        {/* Mobile Hero - Versión Premium */}
<div className="lg:hidden w-full mb-12 px-4 relative">
  <div className="relative w-full aspect-[9/10] bg-gradient-to-br from-brand-beige/15 via-brand-coral/15 to-brand-teal/20 rounded-tl-[70px] rounded-br-[70px] border-2 border-white/40 shadow-3xl-mobile backdrop-blur-md overflow-hidden flex items-center justify-center transform transition-all hover:scale-[1.01] hover:shadow-glow-mobile">
    
    {/* Efecto de partículas animadas */}
    <div className="absolute inset-0 overflow-hidden z-0">
      {[...Array(12)].map((_, i) => (
        <div 
          key={i}
          className="absolute bg-white rounded-full opacity-20 animate-float-particle"
          style={{
            width: `${Math.random() * 8 + 3}px`,
            height: `${Math.random() * 8 + 3}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`
          }}
        ></div>
      ))}
    </div>
    
    {/* Marco con efecto neumórfico */}
    <div className="absolute inset-0 rounded-tl-[68px] rounded-br-[68px] border border-white/20 shadow-inner-mobile"></div>
    
    {/* Imagen con efecto de carga suave */}
    <img
      src="imagenes/ebook2.jpeg"
      alt="Mockup del producto"
      className="w-full h-auto object-cover relative z-10 transform transition-transform hover:scale-105 duration-700"
      loading="lazy"
    />
    
    {/* Overlay de gradiente sutil */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/15 z-10"></div>
    
    {/* Efecto de reflexión */}
    <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-white/30 to-transparent backdrop-blur-[8px] opacity-70 z-0"></div>
    
    {/* Esquina decorativa */}
    <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-brand-teal/50 rounded-tl-[70px] z-20"></div>
    <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-brand-coral/50 rounded-br-[70px] z-20"></div>
  </div>

  {/* Efecto de sombra dinámica */}
  <div className="absolute -bottom-4 left-1/4 right-1/4 h-3 bg-black/10 blur-md filter opacity-70"></div>
</div>

        <div className="w-full lg:w-1/2">
          

         {/* Elegant Title Section - Desktop - Premium */}
<div className="hidden lg:block mb-8 pl-8 border-l-2 border-brand-teal/60 relative">
  <div className="absolute -left-8 top-0 h-full w-0.5 bg-gradient-to-b from-transparent via-brand-teal/40 to-transparent"></div>
  
  <h1 className="font-serif text-4xl font-light text-gray-800 tracking-tight leading-snug relative">
    <span className="relative z-10">
      Una guía clara para poner límites<br />
      sin gritar, ceder ni perder conexión<br />
      con tu hijo/a adolescente.
    </span>
    <div className="absolute -bottom-3 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand-purple to-transparent"></div>
  </h1>
  
  <div className="mt-6 flex items-center">
    <div className="h-0.5 w-16 bg-brand-coral/80"></div>
    <div className="h-1 w-1 rounded-full bg-brand-purple mx-2"></div>
    <div className="h-0.5 w-16 bg-brand-teal/80"></div>
  </div>
</div>



          {/* Premium Glassmorphism Benefits Card */}
          <div className="mb-8 lg:mb-12 max-w-2xl relative group px-4 lg:px-0">
            {/* Glow Effect - Updated colors */}
            <div className="absolute -inset-0.5 rounded-2xl lg:rounded-3xl bg-gradient-to-r from-brand-coral/60 via-brand-beige/60 to-brand-teal/60 opacity-70 blur-xl group-hover:opacity-90 transition-all duration-700 animate-glow-pulse"></div>
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-xl rounded-xl lg:rounded-2xl p-4  border border-white/40 shadow-xl lg:shadow-2xl overflow-hidden">
              {/* Animated Gradient Orbs - Updated colors */}
              <div className="absolute -right-8 -top-8 w-32 h-32 lg:w-48 lg:h-48 rounded-full bg-gradient-to-r from-brand-teal/25 to-brand-beige/25 animate-orb-float opacity-80"></div>
              <div className="absolute -left-6 -bottom-6 w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-gradient-to-r from-brand-beige/20 to-brand-coral/20 animate-orb-float-delay opacity-70"></div>
              
              {/* Header with Icon - Updated colors */}
              <div className="relative z-10 mb-3 lg:mb-4">
                <div className="inline-flex items-center bg-gradient-to-r from-brand-coral/10 to-brand-teal/10 px-4 py-2 lg:px-5 lg:py-3 rounded-full border border-white/30 shadow-sm">
                  <Zap className="w-5 h-5 text-brand-coral mr-2 lg:mr-3 animate-pulse-fast" />
                  <h3 className="text-xl  font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-coral to-brand-teal tracking-tight">
                    🎁 COMBO COMPLETO
                  </h3>
                </div>
              </div>
              
              <ul className="relative z-10 space-y-3 lg:space-y-3">
                {[
                  {
                    icon: "📘",
                    title: "Guía descargable (PDF)",
                    highlight: "ACCESO RÁPIDO"
                  },
                  {
                    icon: "🎧",
                    title: "Audio de emergencia",
                    highlight: "TRANQUILIDAD INMEDIATA"
                  },
                  {
                    icon: "📝",
                    title: "Hoja adicional: Mapa de límites",
                    highlight: "ORIENTACIÓN CLARA"
                  },
                  {
                    icon: "💬",
                    title: "Frases SOS para momentos críticos",
                    highlight: "RESPUESTAS ÚTILES"
                  }
                ].map((item, index) => (
                  <li key={index} className="flex items-center group">
                    {/* Icono */}
                    <div className="relative mr-3 lg:mr-4 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-white/80 rounded-lg transform rotate-6 scale-95 opacity-80"></div>
                      <div className="relative w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center bg-gradient-to-br from-brand-teal/15 to-brand-purple/15 rounded-lg border border-white/30 group-hover:from-brand-teal/20 group-hover:to-brand-purple/20 transition-all duration-300">
                        <span className="text-base lg:text-lg">{item.icon}</span>
                      </div>
                    </div>

                    {/* Título + Highlight */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full">
                      <h4 className="text-base lg:text-lg font-semibold text-gray-800 group-hover:text-gray-900 transition-colors text-center sm:text-left">
                        {item.title}
                      </h4>
                      <span className="mt-0.5 lg:mt-1 sm:ml-2 text-xs font-bold bg-gradient-to-r from-brand-coral to-brand-purple text-white px-1.5 py-0.5 lg:px-2 lg:py-0.5 rounded-full whitespace-nowrap">
                        {item.highlight}
                      </span>
                    </div>

                    {/* Flechita */}
                    <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-brand-teal/60 ml-2 lg:ml-4 group-hover:text-brand-coral group-hover:translate-x-1 transition-all duration-300" />
                  </li>
                ))}
              </ul>
              
              {/* Mobile CTA Button - Updated */}
              <div className="lg:hidden mt-6 flex justify-center">
                <Button className="bg-gradient-to-r from-brand-coral to-brand-teal hover:from-brand-coral/90 hover:to-brand-teal/90 text-white font-bold py-4 px-6 rounded-lg lg:rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full max-w-xs">
                  <Download className="w-5 h-5 mr-2" />
                  Descargar eBook
                </Button>
              </div>
            </div>
          </div>
        </div>

       {/* Mockup Premium con Elementos de Urgencia */}
<div className="absolute right-[7%]  top-[47.5%] transform -translate-y-1/2 hidden lg:block w-[32%] max-w-[450px] z-20">
  <div className="relative w-full h-[500px]">
    {/* Base del mockup con profundidad */}
    <div className="absolute inset-0 rounded-[28px] overflow-hidden shadow-3xl bg-gradient-to-br from-white to-gray-50">
      {/* Efecto de luz ambiental */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/10 via-brand-purple/5 to-brand-coral/8"></div>
      
      {/* Marco del dispositivo */}
      <div className="absolute inset-3 rounded-2xl border-2 border-white/10 backdrop-blur-md shadow-inner-lg overflow-hidden ">
        {/* Imagen del producto */}
        <div className="absolute inset-0 bg-[url('/imagenes/ebook1.jpeg')] bg-cover bg-center"></div>
        
        {/* Overlays de pantalla */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-white/15"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent w-1/3"></div>
      </div>
      
      {/* Efecto de reflexión */}
      <div className="absolute -bottom-20 left-0 right-0 h-20 bg-gradient-to-t from-white/30 to-transparent backdrop-blur-sm"></div>
    </div>

   

    {/* Elemento de urgencia premium - Versión mejorada */}
<div className="absolute -top-10 -left-10 bg-gradient-to-br from-brand-teal to-brand-purple text-white px-5 py-3 rounded-xl shadow-2xl z-30 group overflow-hidden">
  {/* Efecto de fondo animado */}
  <div className="absolute inset-0 bg-[length:200%_200%] bg-gradient-to-r from-brand-teal/80 via-brand-purple/80 to-brand-teal/80 animate-gradient-shift opacity-90"></div>
  
  {/* Contenido */}
  <div className="relative z-10 flex items-center space-x-3">
    <div className="bg-white/20 p-2 rounded-lg">
      <Zap className="w-5 h-5 text-white animate-bounce" />
    </div>
    <div className="text-center">
      <div className="text-sm font-bold tracking-wide uppercase">¡APROVECHA AHORA!</div>
      <div className="text-xs font-medium opacity-90 mt-1">ÚLTIMAS UNIDADES DISPONIBLES</div>
    </div>
  </div>

  {/* Efecto de destello */}
  <div className="absolute -inset-4 bg-white/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

  <style >{`
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    .animate-gradient-shift {
      animation: gradient-shift 4s ease infinite;
    }
  `}</style>
</div>
 {/* Badge de confianza premium */}
<div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-lg shadow-lg border border-gray-100/80 hover:shadow-xl transition-all">
  <div className="flex items-center space-x-2">
    <div className="p-1.5 bg-brand-teal/10 rounded-lg">
      <ShieldCheck className="w-5 h-5 text-brand-teal" />
    </div>
    <div className="text-brand-teal font-semibold text-sm tracking-wide">
       MÉTODO CERTIFICADO
    </div>
  </div>
</div>
</div>

  </div>
</div>

{/* Desktop CTA Button - Premium Design */}
<div className="hidden lg:flex absolute bottom-20 left-0 right-0 justify-center z-20">
  <Button className="relative overflow-hidden group bg-gradient-to-r from-brand-coral to-brand-teal hover:from-brand-teal hover:to-brand-coral/80 text-white font-bold py-6 px-10 rounded-2xl shadow-2xl hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 transform hover:scale-[1.02]">
    <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    <div className="flex items-center justify-center relative z-10">
      <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
      <span className="text-lg tracking-wide">Descargar eBook Completo </span>
    </div>
    <span className="absolute inset-x-0 bottom-0 h-1 bg-white/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-in-out"></span>
  </Button>
</div>

      <style >{`
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 0.9; }
        }
        .animate-glow-pulse {
          animation: glow-pulse 4s ease infinite;
        }
        
        @keyframes orb-float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-15px) scale(1.05); }
        }
        .animate-orb-float {
          animation: orb-float 8s ease-in-out infinite;
        }
        .animate-orb-float-delay {
          animation: orb-float 10s ease-in-out infinite 1s;
        }
        
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-pulse-fast {
          animation: pulse-fast 2s ease infinite;
        }
        
        @keyframes text-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-shift {
          animation: text-shift 8s ease infinite;
          background-size: 300% 300%;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          animation: gradient-shift 6s ease infinite;
          background-size: 200% 200%;
        }
        
        .backdrop-blur-lg {
          backdrop-filter: blur(16px);
        }
      `}</style>
    </section>
  );
};

export default Heroe;