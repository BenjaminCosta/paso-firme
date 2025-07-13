import {
  ArrowRight,
  Download,
  Printer,
  Smartphone,
  Laptop,
  Check,
  Headphones,
  Map,
  MessageSquare,
  Clock,
  ShieldCheck,
  Zap
} from 'lucide-react';

const PricingGuide = () => {
  return (
    <div className="bg-white">
      <section className="relative py-20 px-6 sm:px-12 bg-gradient-to-br from-brand-beige/30 via-white to-brand-coral/10 overflow-hidden">
        {/* Fondos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-teal/20 blur-[100px]"></div>
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-brand-coral/20 blur-[100px]"></div>
        </div>


          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch min-h-[720px]">

          {/* Galería premium con altura sincronizada */}
<div className="relative h-full self-stretch flex flex-col mt-5 justify-between">
  <div className="flex flex-col gap-5 flex-grow min-h-0">
    {/* Ebook grande */}
    <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[5px] border-white w-full flex-grow aspect-[3/4] max-h-[60vh]">
      <img 
        src="imagenes/ebook4.jpg" 
        alt="Guía PDF" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white bg-gradient-to-t from-black/70 to-transparent">
        <div className="text-xl font-bold">Guía Definitiva</div>
        <div className="text-base opacity-90 mt-1.5">PDF + Recursos Bonus</div>
      </div>
    </div>

    {/* Miniaturas */}
    <div className="grid grid-cols-2 gap-5 flex-grow min-h-0">
      {/* Audio */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-[3px] border-white transform hover:-translate-y-1 transition-all">
        <div className="absolute top-3 left-3 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full z-10">
          <Headphones className="inline w-4 h-4 mr-1.5" />
          AUDIO
        </div>
        <img 
          src="imagenes/frases.jpg" 
          alt="Audio SOS" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center text-sm font-medium">
          "Cómo poner un alto"
        </div>
      </div>

      {/* Mapa */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square border-[3px] border-white transform hover:-translate-y-1 transition-all">
        <div className="absolute top-3 left-3 bg-black/60 text-white text-sm px-3 py-1.5 rounded-full z-10">
          <Map className="inline w-4 h-4 mr-1.5" />
          PLANTILLA
        </div>
        <img 
          src="imagenes/map.jpg" 
          alt="Mapa Límites" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center text-sm font-medium">
          Mapa de límites
        </div>
      </div>
    </div>
  </div>

  {/* Precio flotante */}
  <div className="absolute bottom-4 -right-4 bg-white px-5 py-3 rounded-2xl shadow-2xl border border-brand-coral/20 transform group-hover:scale-105 transition-all">
    <div className="text-[1.5rem] font-bold text-brand-coral">$295</div>
    <div className="text-sm text-gray-500 mt-1.5 flex items-center">
      <Clock className="w-2 h-2 mr-1.5 text-brand-purple" />
      <span>Oferta por tiempo limitado</span>
    </div>
  </div>

  {/* Sello de garantía */}
  <div className="absolute -top-4 -left-4 z-10">
    <div className="bg-brand-teal text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg flex items-center">
      <ShieldCheck className="w-5 h-5 mr-2" />
      GARANTÍA 100%
    </div>
  </div>
</div>



            {/* Contenido compacto */}
            <div className="space-y-6">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/5 rounded-full blur-[60px]"></div>

<div className="mb-10 text-center px-4">
  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8">
    <div className="hidden sm:block w-20 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>

    <span className="text-[11px] sm:text-xs md:text-sm font-semibold tracking-widest text-brand-purple uppercase bg-white/90 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full backdrop-blur-sm border border-brand-purple/10 shadow-xs hover:shadow-sm transition-all whitespace-nowrap">
      Última oportunidad
    </span>

    <div className="hidden sm:block w-20 h-px bg-gradient-to-l from-transparent via-brand-purple/50 to-transparent"></div>
  </div>

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
    Fortalece
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple">
      {" "}el vínculo
    </span>
  </h2>
<div/>

           {/* Lista premium con cajas de tamaño uniforme */}
<div className="space-y-4 w-full max-w-md mx-auto">
  {/* Item 1 - Guía PDF */}
  <div className="flex items-start p-4 bg-white/90 rounded-2xl border border-white/30 hover:border-brand-teal/40 transition-all relative overflow-hidden group backdrop-blur-sm h-24">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-teal/10 opacity-80 group-hover:from-brand-teal/5 group-hover:opacity-100 transition-all"></div>
    <div className="absolute -right-5 -top-5 w-20 h-20 bg-brand-teal/20 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative z-10 flex items-start w-full">
      <div className="bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 p-2.5 rounded-xl mr-4 border border-white/20 shadow-xs flex-shrink-0">
        <Check className="w-6 h-6 text-brand-teal" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-base truncate">Guía Completa (PDF)</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          10 límites con base neurocientífica + frases clave + ejercicios prácticos
        </p>
      </div>
    </div>
  </div>

  {/* Item 2 - Audio */}
  <div className="flex items-start p-4 bg-white/90 rounded-2xl border border-white/30 hover:border-brand-purple/40 transition-all relative overflow-hidden group backdrop-blur-sm h-24">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-purple/10 opacity-80 group-hover:from-brand-purple/5 group-hover:opacity-100 transition-all"></div>
    <div className="absolute -right-5 -top-5 w-20 h-20 bg-brand-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative z-10 flex items-start w-full">
      <div className="bg-gradient-to-br from-brand-purple/15 to-brand-purple/5 p-2.5 rounded-xl mr-4 border border-white/20 shadow-xs flex-shrink-0">
        <Headphones className="w-6 h-6 text-brand-purple" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-base truncate">Audio de Emergencia</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          "Cómo poner un alto sin perder la calma" (8-10 min)
        </p>
      </div>
    </div>
  </div>

  {/* Item 3 - Mapa */}
  <div className="flex items-start p-4 bg-white/90 rounded-2xl border border-white/30 hover:border-brand-coral/40 transition-all relative overflow-hidden group backdrop-blur-sm h-24">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-coral/10 opacity-80 group-hover:from-brand-coral/5 group-hover:opacity-100 transition-all"></div>
    <div className="absolute -right-5 -top-5 w-20 h-20 bg-brand-coral/20 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative z-10 flex items-start w-full">
      <div className="bg-gradient-to-br from-brand-coral/15 to-brand-coral/5 p-2.5 rounded-xl mr-4 border border-white/20 shadow-xs flex-shrink-0">
        <Map className="w-6 h-6 text-brand-coral" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-base truncate">Mapa de Límites</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          Plantilla imprimible para definir tus límites
        </p>
      </div>
    </div>
  </div>

  {/* Item 4 - Frases */}
  <div className="flex items-start p-4 bg-white/90 rounded-2xl border border-white/30 hover:border-brand-teal/40 transition-all relative overflow-hidden group backdrop-blur-sm h-24">
    <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-teal/10 opacity-80 group-hover:from-brand-teal/5 group-hover:opacity-100 transition-all"></div>
    <div className="absolute -right-5 -top-5 w-20 h-20 bg-brand-teal/20 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity"></div>
    <div className="relative z-10 flex items-start w-full">
      <div className="bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 p-2.5 rounded-xl mr-4 border border-white/20 shadow-xs flex-shrink-0">
        <MessageSquare className="w-6 h-6 text-brand-teal" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-gray-900 text-base truncate">Frases Clave</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          10 respuestas para momentos críticos
        </p>
      </div>
    </div>
  </div>
</div>

{/* Beneficios de formato - Versión mejorada */}
<div className="grid grid-cols-3 gap-3 mt-8">
  <div className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
    <div className="bg-brand-purple/10 p-3 rounded-full mb-2">
      <Download className="w-5 h-5 text-brand-purple" />
    </div>
    <span className="text-sm font-medium text-gray-700">Acceso inmediato</span>
  </div>
  
  <div className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
    <div className="bg-brand-coral/10 p-3 rounded-full mb-2">
      <Printer className="w-5 h-5 text-brand-coral" />
    </div>
    <span className="text-sm font-medium text-gray-700">Imprimible</span>
  </div>
  
  <div className="flex flex-col items-center p-3 bg-white rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-all">
    <div className="bg-brand-teal/10 p-3 rounded-full mb-2">
      <Smartphone className="w-5 h-5 text-brand-teal" />
    </div>
    <span className="text-sm font-medium text-gray-700">Multiplataforma</span>
  </div>
</div>
              {/* CTA compacto */}
              <button className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-brand-coral to-brand-purple text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
                <div className="flex items-center justify-center">
                  <span>Descargar Ahora</span>
                  <ArrowRight className="w-5 h-5 ml-3" />
                </div>
              </button>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default PricingGuide;