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
      bgImage: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      bgImage: "https://images.unsplash.com/photo-1548217395-6c6095abb49c?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
      bgImage: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="bg-[#f8f5f2] py-24">
      {/* Encabezado mejorado */}
      <div className="max-w-5xl mx-auto px-8 mb-20 text-center">
        <span className="inline-block text-brand-coral font-semibold text-lg mb-4 tracking-widest">
          ESTRUCTURA DEL PROGRAMA
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Un camino <span className="relative whitespace-nowrap">
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-brand-beige/50 z-0"></span>
            <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">transformador</span>
          </span> en 4 días
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Cada módulo combina teoría neurocientífica con ejercicios prácticos para generar cambios reales y duraderos.
        </p>
      </div>

      {/* Módulos mejorados */}
      <div className="space-y-2 max-w-7xl mx-auto">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[480px] w-full overflow-hidden group"
            style={{ transform: "none", opacity: 1 }}
          >
            {/* Fondo con efectos */}
            <div className="absolute inset-0">
              <img 
                src={module.bgImage} 
                alt="" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/85 to-brand-purple/60"></div>
              <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(136,95,174,0.3)_0%,_transparent_50%)]"></div>
            </div>
            
            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-center px-12 py-16 md:px-24">
              <div className="max-w-2xl">
                <span className="inline-block text-brand-beige font-bold text-lg mb-4 tracking-widest">
                  {module.day}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {module.title}
                </h3>
                <p className="text-xl text-brand-beige/90 mb-8 max-w-lg">
                  {module.description}
                </p>
                
                {/* Objetivos de aprendizaje */}
                <div className="space-y-3 mb-10">
                  {module.objectives.map((obj, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="h-5 w-5 text-brand-coral" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-3 text-brand-beige">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Número de módulo interactivo */}
              <div className="absolute right-12 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                <span className="text-[180px] font-bold text-white/80">
                  {index + 1}
                </span>
              </div>
            </div>
            
            {/* Efecto de borde inferior */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>

      {/* CTA Final mejorado */}
      <div
        className="max-w-4xl mx-auto px-8 pt-24 text-center"
      >
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Listo para transformar la experiencia adolescente?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Inscríbelo hoy mismo y dale las herramientas que necesitará para navegar esta etapa con confianza.
          </p>
          <Button
            className="mx-auto py-6 px-12 bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple/90 hover:to-brand-coral/90 text-white text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
          >
            <span className="relative z-10">INSCRIBIR AHORA - ÚLTIMOS CUPOS</span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 hover:opacity-100 transition-opacity duration-500"></span>
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Garantía de satisfacción de 7 días
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modules;
