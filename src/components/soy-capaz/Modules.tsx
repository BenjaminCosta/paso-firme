import { Button } from "@/components/ui/button";

const Modules = () => {
  const modules = [
    {
      day: "DÍA 1",
      title: "Conócete y valórate",
      description: "Autoconocimiento real, comparación y autoestima sin filtros",
      objectives: [
        "Identificar tus cualidades auténticas",
        "Reducir la comparación tóxica",
        "Construir autoestima desde lo real"
      ],
      bgImage: "https://images.unsplash.com/photo-1536607774613-b287a2f4e698?w=1800&dpr=2&q=85&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHx0ZWVuYWdlJTIwZnJpZW5kZ3JvdXB8ZW58MHx8NHx8fDI%3D"
    },
    {
      day: "DÍA 2",
      title: "Domina lo que sientes",
      description: "Regulación emocional, reacciones impulsivas y cómo calmar tu mente",
      objectives: [
        "Técnicas de regulación emocional",
        "Manejo de reacciones impulsivas",
        "Estrategias de inteligencia emocional"
      ],
      bgImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      day: "DÍA 3",
      title: "Decide con criterio",
      description: "Celular, dopamina, presión social y cómo usar tu cerebro a tu favor",
      objectives: [
        "Entender el efecto dopamínico",
        "Manejo consciente de tecnología",
        "Toma de decisiones autónomas"
      ],
      bgImage: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      day: "DÍA 4",
      title: "Relaciónate sin perderte",
      description: "Límites sanos, relaciones equilibradas y confianza para expresarte",
      objectives: [
        "Establecer límites saludables",
        "Comunicación asertiva",
        "Mantener identidad en relaciones"
      ],
      bgImage: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#f8f5f2] py-16 md:py-20">
      {/* Encabezado mejorado */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-12 md:mb-16 text-center">
        <span className="inline-block text-brand-coral font-semibold text-base md:text-lg mb-3 tracking-widest">
          ESTRUCTURA DEL PROGRAMA
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Un camino <span className="relative whitespace-nowrap">
            <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-brand-beige/50 z-0"></span>
            <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">transformador</span>
          </span> en 4 días
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Cada módulo combina teoría neurocientífica con ejercicios prácticos para generar cambios reales y duraderos.
        </p>
      </div>

      {/* Módulos mejorados y más compactos */}
      <div className="space-y-3 max-w-7xl mx-auto px-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[320px] md:min-h-[360px] w-full overflow-hidden group"
            style={{ transform: "none", opacity: 1 }}
          >
            {/* Fondo con efectos */}
            <div className="absolute inset-0">
              <img 
                src={module.bgImage} 
                alt="" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/10 via-brand-purple/10 to-brand-purple/30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-beige/30 via-brand-purple/40 to-brand-purple/60"></div>
            </div>
            
            {/* Contenido compacto */}
            <div className="relative h-full flex flex-col justify-center px-8 py-8 md:px-16 md:py-12">
              <div className="max-w-2xl">
                <span className="inline-block text-brand-beige font-bold text-base md:text-lg mb-2 tracking-widest">
                  {module.day}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {module.title}
                </h3>
                <p className="text-base md:text-lg text-brand-beige/90 mb-4 md:mb-6 max-w-lg">
                  {module.description}
                </p>
                
                {/* Objetivos de aprendizaje más compactos */}
                <div className="space-y-2 mb-6">
                  {module.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-4 w-4 md:h-5 md:w-5 text-brand-coral" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2 text-sm md:text-base text-brand-beige">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Número de módulo interactivo */}
              <div className="absolute right-6 md:right-12 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <span className="text-[120px] md:text-[180px] font-bold text-white/80">
                  {index + 1}
                </span>
              </div>
            </div>
            
            {/* Efecto de borde inferior */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modules;