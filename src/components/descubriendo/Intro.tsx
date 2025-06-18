import { Smartphone, Zap, AlertCircle, BrainCircuit, ArrowRight, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface IntroProps {
  onScrollToSection: (id: string) => void;
}

const Intro = ({ onScrollToSection }: IntroProps) => {
  const painPoints = [
    { 
      text: "Se levanta y lo primero que ve es el celular",
      icon: <Smartphone className="text-brand-purple w-5 h-5" />
    },
    { 
      text: "Pasa horas en TikTok o jugando",
      icon: <Zap className="text-brand-purple w-5 h-5" />
    },
    { 
      text: "Dice que va a hacer tarea, pero se distrae",
      icon: <AlertCircle className="text-brand-purple w-5 h-5" />
    },
    { 
      text: "No tiene energía ni motivación",
      icon: <Zap className="text-brand-purple w-5 h-5" />
    },
     { 
      text: "Pospone tareas hasta el último momento",
      icon: <Clock className="text-brand-purple w-5 h-5" />
    },
    { 
      text: "Se enoja cuando le pides que deje el celular",
      icon: <AlertCircle className="text-brand-purple w-5 h-5" />
    }
  ];

  const dopamineCycle = [
    "Se distraen fácilmente",
    "Pierden el enfoque",
    "Dejan tareas importantes para después",
    "Y aunque tú ya se los has dicho… no logran cambiar."
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden" id="intro">
      {/* Fondo moderno con gradientes e imágenes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-brand-teal/5 to-brand-purple/5"></div>
        <div 
          className="absolute top-0 right-0 w-1/2 h-full bg-[url('/images/digital-brain.jpg')] bg-cover bg-center mix-blend-overlay opacity-10"
          style={{ maskImage: 'linear-gradient(to left, black 20%, transparent 100%)' }}
        ></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      </div>

      {/* Contenedor principal */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-5xl mx-auto">
          {/* Título moderno */}
          <div className="text-center mb-16">
             <span className="inline-block bg-brand-teal/10 text-brand-teal text-sm font-semibold px-5 py-2 rounded-full mb-4">
            TRANSFORMACIÓN DIGITAL
          </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ¿Reconoces esta situación?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-purple mx-auto"></div>
          </div>
          
          {/* Lista en grid moderno */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {painPoints.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start mb-3">
                  <div className="bg-brand-purple/10 p-2 rounded-lg mr-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
                </div>
                <div className="h-1 w-full bg-gradient-to-r from-brand-teal/30 to-brand-purple/30 rounded-full"></div>
              </div>
            ))}
          </div>
          {/* Tarjeta especial mejorada */}
<div className="bg-gradient-to-br from-brand-teal to-brand-purple px-8 py-10 mb-10 rounded-3xl shadow-2xl text-white max-w-3xl mx-auto">
  <div className="flex items-start gap-5">
    <div className="bg-white/20 p-4 rounded-xl">
      <BrainCircuit className="w-7 h-7" />
    </div>
    <div>
      <h3 className="text-2xl font-semibold leading-snug">
        <span className="font-pacifico block text-3xl">No es flojera</span>
        Es el cerebro sin dirección clara
      </h3>
      <p className="text-white/90 text-base mt-4">
        La neurociencia explica este comportamiento y cómo podemos modificarlo.
      </p>
    </div>
  </div>
</div>


        {/* Sección explicativa */}
<div className="relative rounded-3xl p-8 md:p-12 shadow-inner overflow-hidden">
  {/* Imagen de fondo + overlays degradados */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1722970913865-14852ea8c1c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRlZW4lMjB3aXRoJTIwcGhvbmUlMjBhZGRpY3Rpb258ZW58MHwwfDB8fHwy')] bg-cover bg-center opacity-40" />
    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-brand-teal/50 to-brand-purple/60 " />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-purple/30 " />
  </div>

  {/* Elementos decorativos */}
  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-teal/10"></div>
  <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-brand-purple/10"></div>

  <div className="relative z-10">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
      El ciclo de <span className="text-brand-purple">dopamina rápida</span> que atrapa a los adolescentes
    </h3>

    <ul className="space-y-3 mb-8">
      {dopamineCycle.map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="bg-brand-teal/20 p-1 rounded-full mr-3 mt-1">
            <div className="w-2 h-2 bg-brand-teal rounded-full"></div>
          </div>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>

    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-gray-200 mb-8">
      <p className="text-lg font-medium text-gray-800 mb-4">
        En <span className="font-pacifico text-brand-purple">Descubriendo Mi Potencial</span>, tu adolescente aprenderá a:
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          "Usar el celular con estrategia",
          "Entender cómo funciona su cerebro",
          "Recuperar el enfoque perdido",
          "Generar motivación sostenible"
        ].map((item, index) => (
          <div key={index} className="flex items-center">
            <div className="bg-brand-teal/10 p-1 rounded-full mr-3">
              <ArrowRight className="w-4 h-4 text-brand-teal" />
            </div>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Botón CTA moderno */}
    <div className="text-center px-4">
  <Button
    size="lg"
    className="relative overflow-hidden w-full sm:w-auto 
               bg-gradient-to-r from-brand-coral/70 to-brand-teal 
               text-white px-6 py-5 sm:px-8 sm:py-6 
               text-base sm:text-lg font-semibold 
               rounded-xl sm:rounded-2xl 
               transition-all duration-300 
               hover:scale-[1.02] active:scale-[0.98]
               shadow-lg hover:shadow-xl group"
    onClick={() => onScrollToSection('pricing')}
  >
    <span className="relative z-10 flex items-center justify-center">
      Transformar esta situación 
      <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
    </span>
    {/* Efecto hover con gradiente inverso */}
    <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-coral/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    
    {/* Efecto de brillo al hacer hover */}
    <span className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-700">
    </span>
  </Button>
</div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};
export default Intro;