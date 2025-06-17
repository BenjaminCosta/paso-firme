import { User, Smartphone, Zap, Target, Shield, Heart, BrainCircuit } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const TargetAudience = () => {
  const audienceItems = [
    {
      icon: <User className="w-5 h-5 text-white" />,
      text: "Adolescentes de 12 a 21 años",
      bg: "bg-gradient-to-br from-brand-purple/80 to-brand-teal/80",
      border: "border-white/20"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-white" />,
      text: "Demasiado tiempo en pantallas",
      bg: "bg-gradient-to-br from-brand-teal/80 to-brand-coral/80",
      border: "border-white/20"
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      text: "Falta de motivación constante",
      bg: "bg-gradient-to-br from-brand-coral/80 to-brand-purple/80",
      border: "border-white/20"
    },
    {
      icon: <Target className="w-5 h-5 text-white" />,
      text: "Metas grandes sin plan de acción",
      bg: "bg-gradient-to-br from-brand-purple/80 to-brand-teal/80",
      border: "border-white/20"
    },
    {
      icon: <Shield className="w-5 h-5 text-white" />,
      text: "Comparación constante con otros",
      bg: "bg-gradient-to-br from-brand-teal/80 to-brand-coral/80",
      border: "border-white/20"
    },
    {
      icon: <Heart className="w-5 h-5 text-white" />,
      text: "Mamás que buscan herramientas nuevas",
      bg: "bg-gradient-to-br from-brand-coral/80 to-brand-purple/80",
      border: "border-white/20"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden px-4">
      {/* Fondo con efecto de partículas sutiles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/20 to-brand-coral/10 backdrop-blur-[2px]" />
        
        {/* Efecto de partículas */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-brand-purple/30"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Contenedor principal */}
      <div className="container mx-auto relative z-10">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16 px-4">
          <span className="inline-block bg-brand-purple/10 text-brand-purple text-sm font-semibold px-5 py-2 rounded-full mb-4">
            TRANSFORMACIÓN DIGITAL
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              ¿Para quién es este taller?
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal mx-auto rounded-full mb-8" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un programa diseñado para transformar la mentalidad y hábitos de jóvenes y sus familias
          </p>
        </div>

        {/* Grid de items - versión más compacta */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 px-4">
          {audienceItems.map((item, index) => (
            <div 
              key={index}
              className={`${item.bg} ${item.border} backdrop-blur-sm p-6 rounded-2xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group`}
            >
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-500" />
              
              <div className="relative z-10 flex items-start space-x-4">
                <div className={`bg-white/20 p-2.5 rounded-lg flex-shrink-0 backdrop-blur-sm border ${item.border}`}>
                  {item.icon}
                </div>
                <p className="text-lg font-semibold text-white leading-snug">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección destacada - versión más moderna */}
        <div className="max-w-4xl mx-auto px-6 py-10 bg-gradient-to-r from-brand-teal/20 to-brand-purple/20 rounded-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden group">
          {/* Fondo animado */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/30 to-brand-purple/30 opacity-70" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
                "El cerebro adolescente no está roto...
                <br />
                <span className="font-bold text-white/90">
                  solo necesita el manual de instrucciones correcto.
                </span>"
              </blockquote>
              <p className="text-lg text-white/80 font-medium">
                Este taller provee ese manual.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Efectos decorativos mejorados */}
      <div className="absolute -top-40 left-0 w-80 h-80 rounded-full bg-brand-teal/20 blur-[90px] -z-10 opacity-70" />
      <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-brand-purple/20 blur-[90px] -z-10 opacity-70" />
    </section>
  );
};