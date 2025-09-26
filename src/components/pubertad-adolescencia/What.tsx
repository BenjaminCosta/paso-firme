import { Button } from "@/components/ui/button";
import { Brain, Heart, MessageCircle, ArrowRight, Info } from "lucide-react";

interface WhatProps {
  onScrollToSection: (id: string) => void;
}

const What = ({ onScrollToSection }: WhatProps) => {
  return (
        <section className="py-24 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-[20%] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-red/10 rounded-full blur-[150px] animate-pulse" />
        
        {/* Decorative Patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-brand-pink/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-brand-blue/20 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-brand-red/20 rounded-lg rotate-45 animate-[spin_15s_linear_infinite]" />
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/3 left-20 w-24 h-24">
          <div className="absolute inset-0 border-2 border-brand-pink/20 rounded-lg rotate-45 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-brand-pink/10 rounded-lg -rotate-45" />
        </div>
        <div className="absolute bottom-1/3 right-32 w-20 h-20">
          <div className="absolute inset-0 border-2 border-brand-blue/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-brand-blue/10 rounded-full scale-75" />
        </div>

        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-pink/30 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-brand-blue/30 rounded-full animate-bounce delay-300" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-brand-red/30 rounded-full animate-bounce delay-700" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center bg-brand-red/10 text-brand-red text-sm font-semibold px-6 py-2 rounded-full mb-3 backdrop-blur-sm border border-brand-red/20">
              <Info className="w-4 h-4 mr-2" />
              Sobre el Taller
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es el Taller de
              <span className="text-brand-red"> Pubertad y Adolescencia Sin Miedo?</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Un espacio seguro y formativo para entender y navegar los cambios físicos y emocionales
              de esta etapa crucial del desarrollo
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Entender */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-red/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 flex flex-col min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent" />
              </div>
              <div className="p-4 bg-brand-red/10 rounded-xl border border-brand-red/20 w-fit mb-6 group-hover:bg-brand-red/15 transition-colors">
                <Brain className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Entender y Comprender
              </h3>
              <ul className="space-y-4 grow">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red" />
                  <p>
                    Entender lo que está pasando en el <span className="font-bold">cerebro</span>, 
                    <span className="font-bold"> cuerpo</span> y <span className="font-bold">emociones</span> de sus hijos
                  </p>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-red" />
                  <p>
                    Sentirse más <span className="font-bold">seguros</span> y menos 
                    <span className="font-bold"> perdidos</span> en esta etapa de transición
                  </p>
                </li>
              </ul>
            </div>

            {/* Comunicar */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-blue/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 flex flex-col min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent" />
              </div>
              <div className="p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20 w-fit mb-6 group-hover:bg-brand-blue/15 transition-colors">
                <MessageCircle className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comunicar y Conectar
              </h3>
              <ul className="space-y-4 grow">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue" />
                  <p>
                    Saber <span className="font-bold">cómo hablar</span> sin que se 
                    <span className="font-bold"> cierren</span> o <span className="font-bold">reaccionen mal</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue" />
                  <p>
                    Conservar el <span className="font-bold">vínculo</span> en los años más 
                    <span className="font-bold"> decisivos</span>
                  </p>
                </li>
              </ul>
            </div>

            {/* Herramientas */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-teal/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 flex flex-col min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-transparent" />
              </div>
              <div className="p-4 bg-brand-teal/10 rounded-xl border border-brand-teal/20 w-fit mb-6 group-hover:bg-brand-teal/15 transition-colors">
                <Heart className="w-8 h-8 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Acompañar y Guiar
              </h3>
              <ul className="space-y-4 grow">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-teal" />
                  <p>
                    Tener <span className="font-bold">herramientas reales</span> para acompañarlos sin
                    <span className="font-bold"> gritos</span> ni <span className="font-bold">desconexión</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-teal" />
                  <p>
                    Crear un <span className="font-bold">espacio seguro</span> para el
                    <span className="font-bold"> desarrollo emocional</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
