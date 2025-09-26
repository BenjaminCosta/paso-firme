interface ModulesProps {
  onScrollToSection: (id: string) => void;
}

const Modules = ({ onScrollToSection }: ModulesProps) => {
  const modules = [
    {
      day: "MÓDULO 1",
      title: "¿Y si el cambio no empieza en tu hijo, sino en ti?",
      objective: "Claves del cerebro adolescente que te hacen decir: 'Ahora todo tiene sentido'",
      bgImage: "https://images.unsplash.com/photo-1537913088049-4f3f455e4837?auto=format&fit=crop&q=100&w=4000"
    },
    {
      day: "MÓDULO 2",
      title: "El problema no es contigo, el problema es su cerebro.",
      objective: "Maneras de acompañarlo sin sentir que tienes que gritar, rendirte o desaparecer",
      bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
    },
    {
      day: "MÓDULO 3",
      title: "¿Qué hago con todo esto que me dice, que me pide, que ya no quiere?",
      objective: "Formas de recuperar tu influencia y tu paz, incluso cuando hay portazos, silencios o '¡déjame en paz!'",
      bgImage: "https://images.unsplash.com/photo-1548878582-59ec94281735?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      day: "MÓDULO 4",
      title: "No eres la misma mamá/papá que hace un año… y eso puede ser lo mejor que te pasó.",
      objective: "Un mapa claro para dejar de tomarte todo personal… y empezar a actuar donde sí puedes transformar",
      bgImage: "https://images.unsplash.com/photo-1533900634839-91e7a120a88a?auto=format&fit=crop&q=100&w=4000"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      {/* Encabezado mejorado con animación */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 mb-12 md:mb-16 text-center">
        <span className="inline-block text-brand-red font-semibold text-base md:text-lg mb-3 tracking-widest">
          ESTRUCTURA DEL TALLER
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          Tu hoja de ruta hacia{" "}
          <span className="relative whitespace-nowrap">
            <span className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 md:h-3 bg-brand-blue/20 z-0"></span>
            <span className="relative z-10 bg-gradient-to-r from-brand-blue to-brand-red bg-clip-text text-transparent">
              la transformación
            </span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Cuatro módulos diseñados para guiarte paso a paso hacia una relación más profunda y armoniosa
        </p>
      </div>

      {/* Módulos con diseño mejorado */}
      <div className="space-y-8 max-w-7xl mx-auto px-4">
        {modules.map((module, index) => (
          <div
            key={index}
            className="relative h-auto min-h-[400px] md:min-h-[450px] w-full overflow-hidden group rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-2"
          >
            {/* Fondo con efectos mejorados */}
            <div className="absolute inset-0">
              <img 
                src={module.bgImage} 
                alt="" 
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/80"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-brand-pink/60 via-brand-pink/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/20 to-brand-blue/20"></div>
            </div>

            {/* Efectos decorativos */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-pink via-brand-red to-brand-blue"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-pink/30 to-transparent rounded-tl-full"></div>
            
            {/* Contenido mejorado */}
            <div className="relative h-full flex flex-col justify-end px-10 py-12 md:px-16 md:py-16">
              <div className="max-w-3xl">
                {/* Badge del módulo con mejor diseño */}
                <div className="mb-4">
                  <span className="inline-flex items-center bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-sm md:text-base px-4 py-2 rounded-full tracking-widest shadow-lg">
                    <svg className="w-4 h-4 mr-2 text-brand-pink" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {module.day}
                  </span>
                </div>

                {/* Título con mejor tipografía */}
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl">
                  {module.title}
                </h3>
                
                {/* Objetivo con diseño premium */}
                <div className="relative">
                  <div className="bg-white/15 backdrop-blur-xl border border-white/25 p-6 md:p-8 rounded-2xl shadow-2xl hover:bg-white/20 transition-all duration-500">
                    <div className="flex items-start">
                      <div className="mt-1.5 mr-4 flex-shrink-0">
                        <div className="relative">
                          <div className="h-3 w-3 rounded-full bg-white shadow-lg"></div>
                        </div>
                      </div>
                      <p className="text-lg md:text-xl text-white font-medium leading-relaxed">
                        {module.objective}
                      </p>
                    </div>
                    
                    {/* Decoración interna */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-2xl"></div>
                  </div>
                </div>
              </div>
              
              {/* Número de módulo más elegante */}
              <div className="absolute right-8 md:right-12 top-8 md:top-12">
                <div className="relative">
                  <span className="text-7xl md:text-8xl font-black text-white/15 group-hover:text-white/25 transition-all duration-700 drop-shadow-2xl">
                    0{index + 1}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-brand-blue/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                </div>
              </div>

              {/* Elementos decorativos adicionales */}
              <div className="absolute left-8 top-1/2 transform -translate-y-1/2 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                <div className="w-1 h-32 bg-gradient-to-b from-transparent via-brand-pink to-transparent"></div>
              </div>
            </div>

            {/* Efecto de brillo en hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Modules;

