import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Modules = ({ onScrollToSection }: HeroSectionProps) => {
  const modules = [
    {
      day: "DÍA 1",
      title: "Conócete y valórate",
      description: "Autoconocimiento real, comparación y autoestima sin filtros",
      objectives: [
        "Cómo detectar tu diálogo interno y reconocer lo que sí construye",
        "Regulación emocional y estrategias para calmar tu mente",
        "Desarrollo de autoestima desde una base auténtica"
      ],
      bgImage: "https://images.unsplash.com/photo-1536607774613-b287a2f4e698?w=1800&dpr=2&q=85&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY3fHx0ZWVuYWdlJTIwZnJpZW5kZ3JvdXB8ZW58MHx8NHx8fDI%3D",
      accentColor: "from-brand-purple to-brand-coral"
    },
    {
      day: "DÍA 2",
      title: "Decide con criterio y relaciónate sanamente",
      description: "Celular, dopamina, presión social",
      objectives: [
        "Relaciones sanas y confianza para expresarte",
        "Poner límites para el respeto mutuo",
        "Estrategias para equilibrar tu mundo interno"
      ],
      bgImage: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accentColor: "from-brand-coral to-brand-purple"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#f8f5f2] to-white py-16 md:py-24">
      {/* Encabezado mejorado con animación */}
       <div className="max-w-5xl mx-auto px-6 md:px-8 mb-12 md:mb-16 text-center">
        <span className="inline-block text-brand-coral font-semibold text-base md:text-lg mb-3 tracking-widest">
          ESTRUCTURA DEL CURSO
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Un camino <span className="relative whitespace-nowrap">
            <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-brand-beige/50 z-0"></span>
            <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">transformador</span>
          </span> en 2 días
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Una experiencia diseñada para despertar la conciencia y el autodescubrimiento
        </p>
      </div>

      {/* Módulos con diseño mejorado */}
      <div className="space-y-6 max-w-6xl mx-auto px-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[340px] md:min-h-[380px] w-full overflow-hidden group rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
          >
            {/* Fondo con efectos mejorados */}
            <div className="absolute inset-0">
              <img 
                src={module.bgImage} 
                alt="" 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/70"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 via-brand-purple/60 to-brand-purple/40"></div>
            </div>
            
            {/* Contenido con mejor jerarquía visual */}
            <div className="relative h-full flex flex-col justify-end px-8 py-10 md:px-12 md:py-14">
              <div className="max-w-2xl">
                <span className="inline-block text-white/80 font-bold text-sm md:text-base mb-2 tracking-widest">
                  {module.day}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 leading-tight">
                  {module.title}
                </h3>
                <p className="text-lg md:text-xl text-white/90 mb-6 max-w-lg font-medium">
                  {module.description}
                </p>
                
                {/* Objetivos con diseño más limpio */}
                <div className="space-y-3 mb-8">
                  {module.objectives.map((obj, i) => (
                    <div key={i} className="flex items-center bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                       <div className=" mt-0">
                        <div className="h-2 w-2 rounded-full bg-brand-coral "></div>
                      </div>
                      <span className="ml-3 text-base md:text-lg text-white">{obj}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Número de módulo más estilizado */}
              <div className="absolute right-6 md:right-10 top-6 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-8xl md:text-9xl font-bold text-white/10 group-hover:text-white/20 transition-all duration-700">
                  0{index + 1}
                </span>
              </div>
            </div>
            
            {/* Efecto de acento superior */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-purple to-brand-coral"></div>
          </div>
        ))}
      </div>

     {/* CTA Premium */}
<div className="max-w-3xl mx-auto px-6 mt-20 md:mt-28 text-center relative">
  {/* Efecto de gradiente de fondo (sutil) */}
  <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-brand-purple/5 to-brand-coral/5 -z-10 blur-lg opacity-70"></div>
  
  {/* Contenedor principal con bordes sofisticados */}
  <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
    
    {/* Efecto de borde luminoso */}
    <div className="absolute inset-0 rounded-2xl border-2 border-white/5 pointer-events-none"></div>
    
    {/* Badge premium */}
    <div className="mb-6">
      <span className="inline-flex items-center text-xs font-semibold tracking-wider text-brand-coral bg-gradient-to-r from-white to-brand-coral/10 px-4 py-2 rounded-full border border-brand-coral/20">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
        ENFOQUE DEL CURSO
      </span>
    </div>

    {/* Titular impactante */}
    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-coral">Reflexión</span> • 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-coral to-brand-purple"> Comprensión</span> • 
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-coral"> Acción</span>
    </h3>

    {/* Texto con mejor jerarquía */}
    <div className="max-w-2xl mx-auto mb-8">
      <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-4">
        Cada sesión está diseñada para que el adolescente <span className="font-semibold text-gray-900">reflexione, entienda y actúe</span>.
      </p>
      <p className="text-gray-600 text-base md:text-lg">
        No desde el miedo ni el control, sino desde <span className="font-medium text-brand-purple">la conciencia y autocomprensión</span>.
      </p>
    </div>

    {/* Botón premium con efecto hover */}
    <Button 
    onClick={() => onScrollToSection('pricing')}
    className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold tracking-wide overflow-hidden transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-[1.02]">
      <span className="relative z-10 flex items-center">
        Quiero más información
        <svg className="ml-3 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </Button>

    {/* Sello de calidad */}
    <div className="mt-8 pt-6 border-t border-white/20">
      <div className="inline-flex items-center text-sm text-gray-500 font-medium">
        <svg className="w-5 h-5 mr-2 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
        Transformación personal basada en neurociencia
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Modules;