import {
  ArrowRight,
  Download,
  Printer,
  Smartphone,
  Check,
  Headphones,
  Map,
  MessageSquare,
  Clock,
  ShieldCheck,
  BookOpen
} from 'lucide-react';

const PricingGuide = () => {
  return (
    <div className="bg-white">
      <section className="relative py-12 md:py-20 px-4 sm:px-6 md:px-12 bg-gradient-to-br from-brand-beige/30 via-white to-brand-coral/10 overflow-hidden">
        {/* Fondos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-teal/20 blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-coral/20 blur-[100px]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-stretch min-h-[500px] md:min-h-[720px]">
          {/* Contenedor de imagen con mejoras mobile */}
          <div className="relative rounded-3xl  shadow-2xl border-[3px] md:border-[5px] border-white bg-white h-[400px] md:h-auto">
            <div className="relative w-full h-full">
              <img 
                src="imagenes/ecombo.jpeg" 
                alt="Guía Definitiva de Límites Saludables" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Overlay premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-coral/15 mix-blend-overlay"></div>
              
              {/* Contenido superpuesto */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                <div className="text-xl md:text-2xl font-bold tracking-tight">GUÍA DEFINITIVA</div>
                <div className="text-base md:text-lg opacity-90 mt-1">Límites Saludables en la Adolescencia</div>
                
                {/* Badges de contenido - ajustados para mobile */}
                <div className="flex flex-wrap gap-2 mt-3 md:mt-4">
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm border border-white/30 flex items-center">
                    <BookOpen className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
                    PDF Práctico
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm border border-white/30 flex items-center">
                    <Headphones className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
                    Audios SOS
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm border border-white/30 flex items-center">
                    <Map className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
                    Plantillas
                  </div>
                </div>
              </div>
              
              {/* Elementos de urgencia - ajustados para mobile */}
              <div className="absolute top-3 left-3 md:top-4 md:left-4 z-20">
                <div className="bg-brand-teal text-white text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg flex items-center ">
                  <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  RESULTADOS REALES
                </div>
              </div>
              
              <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20">
                <div className="bg-brand-coral text-white text-xs md:text-sm font-bold px-3 py-1 md:px-4 md:py-2 rounded-full shadow-lg flex items-center">
                  <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-1.5" />
                  OFERTA LIMITADA
                </div>
              </div>
            </div>
            
            {/* Precio flotante - optimizado para mobile */}
            <div className="absolute -bottom-4 right-0 transform translate-x-1/2 bg-white px-3 py-2 md:px-5 md:py-3 rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border border-brand-coral/20 z-30">
              <div className="text-lg md:text-[1.5rem] font-bold text-brand-coral">$295</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1 flex items-center">
                <Clock className="w-2 h-2 md:w-2 md:h-2 mr-1 md:mr-1.5 text-brand-purple" />
                <span className="hidden sm:inline">Oferta por tiempo limitado</span>
                <span className="sm:hidden">Oferta limitada</span>
              </div>
            </div>
          </div>

          {/* Contenido compacto - optimizado para mobile */}
          <div className="space-y-4 md:space-y-6 relative">
            <div className="absolute -top-6 -left-6 w-32 h-32 md:w-40 md:h-40 bg-brand-purple/5 rounded-full blur-[40px] md:blur-[60px]"></div>

            <div className="mb-6 md:mb-10 text-center px-2 md:px-4">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-1 md:gap-2 sm:gap-4 mb-4 md:mb-8">
                <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>

                <span className="text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-brand-purple uppercase bg-white/90 px-2 py-1 md:px-3 md:py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-brand-purple/10 shadow-xs hover:shadow-sm transition-all whitespace-nowrap">
                  Última oportunidad
                </span>

                <div className="hidden sm:block w-12 md:w-20 h-px bg-gradient-to-l from-transparent via-brand-purple/50 to-transparent"></div>
              </div>

              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Fortalece
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple">
                  {" "}el vínculo
                </span>
              </h2>
            </div>

            {/* Lista premium optimizada para mobile */}
            <div className="space-y-3 md:space-y-4 w-full max-w-md mx-auto">
              {/* Item 1 - Guía PDF */}
              <div className="flex items-start p-3 md:p-4 bg-white/90 rounded-xl md:rounded-2xl border border-white/30 hover:border-brand-teal/40 transition-all relative overflow-hidden group backdrop-blur-sm h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-teal/10 opacity-80 group-hover:from-brand-teal/5 group-hover:opacity-100 transition-all"></div>
                <div className="absolute -right-3 -top-3 w-16 h-16 md:w-20 md:h-20 bg-brand-teal/20 rounded-full blur-lg md:blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10 flex items-start w-full">
                  <div className="bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 p-2 rounded-lg md:rounded-xl mr-3 md:mr-4 border border-white/20 shadow-xs flex-shrink-0">
                    <Check className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">Guía Completa (PDF)</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-2">
                      10 límites con base neurocientífica + frases clave + ejercicios prácticos
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 2 - Audio */}
              <div className="flex items-start p-3 md:p-4 bg-white/90 rounded-xl md:rounded-2xl border border-white/30 hover:border-brand-purple/40 transition-all relative overflow-hidden group backdrop-blur-sm h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-purple/10 opacity-80 group-hover:from-brand-purple/5 group-hover:opacity-100 transition-all"></div>
                <div className="absolute -right-3 -top-3 w-16 h-16 md:w-20 md:h-20 bg-brand-purple/20 rounded-full blur-lg md:blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10 flex items-start w-full">
                  <div className="bg-gradient-to-br from-brand-purple/15 to-brand-purple/5 p-2 rounded-lg md:rounded-xl mr-3 md:mr-4 border border-white/20 shadow-xs flex-shrink-0">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6 text-brand-purple" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">Audio de Emergencia</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-2">
                      "Cómo poner un alto sin perder la calma" (8-10 min)
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3 - Mapa */}
              <div className="flex items-start p-3 md:p-4 bg-white/90 rounded-xl md:rounded-2xl border border-white/30 hover:border-brand-coral/40 transition-all relative overflow-hidden group backdrop-blur-sm h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-coral/10 opacity-80 group-hover:from-brand-coral/5 group-hover:opacity-100 transition-all"></div>
                <div className="absolute -right-3 -top-3 w-16 h-16 md:w-20 md:h-20 bg-brand-coral/20 rounded-full blur-lg md:blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10 flex items-start w-full">
                  <div className="bg-gradient-to-br from-brand-coral/15 to-brand-coral/5 p-2 rounded-lg md:rounded-xl mr-3 md:mr-4 border border-white/20 shadow-xs flex-shrink-0">
                    <Map className="w-5 h-5 md:w-6 md:h-6 text-brand-coral" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">Mapa de Límites</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-2">
                      Plantilla imprimible para definir tus límites
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 4 - Frases */}
              <div className="flex items-start p-3 md:p-4 bg-white/90 rounded-xl md:rounded-2xl border border-white/30 hover:border-brand-teal/40 transition-all relative overflow-hidden group backdrop-blur-sm h-20 md:h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-teal/10 opacity-80 group-hover:from-brand-teal/5 group-hover:opacity-100 transition-all"></div>
                <div className="absolute -right-3 -top-3 w-16 h-16 md:w-20 md:h-20 bg-brand-teal/20 rounded-full blur-lg md:blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative z-10 flex items-start w-full">
                  <div className="bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 p-2 rounded-lg md:rounded-xl mr-3 md:mr-4 border border-white/20 shadow-xs flex-shrink-0">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">Frases Clave</h3>
                    <p className="text-xs md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-2">
                      10 respuestas para momentos críticos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Beneficios de formato - Versión mejorada */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 mt-6 md:mt-8">
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
                <div className="bg-brand-purple/10 p-2 md:p-3 rounded-full mb-1 md:mb-2">
                  <Download className="w-4 h-4 md:w-5 md:h-5 text-brand-purple" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">Acceso inmediato</span>
              </div>
              
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
                <div className="bg-brand-coral/10 p-2 md:p-3 rounded-full mb-1 md:mb-2">
                  <Printer className="w-4 h-4 md:w-5 md:h-5 text-brand-coral" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">Imprimible</span>
              </div>
              
              <div className="flex flex-col items-center p-2 md:p-3 bg-white rounded-lg md:rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
                <div className="bg-brand-teal/10 p-2 md:p-3 rounded-full mb-1 md:mb-2">
                  <Smartphone className="w-4 h-4 md:w-5 md:h-5 text-brand-teal" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">Multiplataforma</span>
              </div>
            </div>

            {/* CTA compacto */}
            <button className="w-full mt-4 md:mt-6 py-3 md:py-4 px-4 md:px-6 bg-gradient-to-r from-brand-coral to-brand-purple text-white font-bold rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95">
              <div className="flex items-center justify-center">
                <span className="text-sm md:text-base">Descargar Ahora</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 md:ml-3" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide;