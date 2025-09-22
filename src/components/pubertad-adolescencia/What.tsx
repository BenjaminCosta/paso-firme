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
        <div className="absolute top-20 right-[20%] w-[500px] h-[500px] bg-brand-coral/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-[20%] w-[500px] h-[500px] bg-brand-teal/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px] animate-pulse" />
        
        {/* Decorative Patterns */}
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-brand-coral/20 rounded-full animate-[spin_20s_linear_infinite]" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-brand-teal/20 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute top-1/4 right-20 w-16 h-16 border-2 border-brand-purple/20 rounded-lg rotate-45 animate-[spin_15s_linear_infinite]" />
        
        {/* Additional Decorative Elements */}
        <div className="absolute top-1/3 left-20 w-24 h-24">
          <div className="absolute inset-0 border-2 border-brand-coral/20 rounded-lg rotate-45 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-brand-coral/10 rounded-lg -rotate-45" />
        </div>
        <div className="absolute bottom-1/3 right-32 w-20 h-20">
          <div className="absolute inset-0 border-2 border-brand-teal/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-0 border-2 border-brand-teal/10 rounded-full scale-75" />
        </div>
        
        {/* Floating Dots */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-coral/30 rounded-full animate-bounce" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-brand-teal/30 rounded-full animate-bounce delay-300" />
        <div className="absolute top-2/3 left-1/3 w-2 h-2 bg-brand-purple/30 rounded-full animate-bounce delay-700" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white opacity-90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center bg-brand-coral/10 text-brand-coral text-sm font-semibold px-6 py-2 rounded-full mb-3 backdrop-blur-sm border border-brand-coral/20">
              <Info className="w-4 h-4 mr-2" />
              Sobre el Taller
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Qué es el Taller de
              <span className="text-brand-coral"> Pubertad y Adolescencia</span>?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Un espacio seguro y formativo para entender y navegar los cambios físicos y emocionales
              de esta etapa crucial del desarrollo
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Entender */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-coral/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 flex flex-col min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-coral/10 to-transparent" />
              </div>
              <div className="p-4 bg-brand-coral/10 rounded-xl border border-brand-coral/20 w-fit mb-6 group-hover:bg-brand-coral/15 transition-colors">
                <Brain className="w-8 h-8 text-brand-coral" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Entender y Comprender
              </h3>
              <ul className="space-y-4 grow">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-coral" />
                  <p>
                    Entender lo que está pasando en el <span className="font-bold">cerebro</span>, 
                    <span className="font-bold"> cuerpo</span> y <span className="font-bold">emociones</span> de sus hijos
                  </p>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-coral" />
                  <p>
                    Sentirse más <span className="font-bold">seguros</span> y menos 
                    <span className="font-bold"> perdidos</span> en esta etapa de transición
                  </p>
                </li>
              </ul>
            </div>

            {/* Comunicar */}
            <div className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-brand-purple/20 transition-all duration-300 hover:shadow-xl hover:bg-white/90 flex flex-col min-h-[400px]">
              <div className="absolute inset-0 rounded-3xl -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent" />
              </div>
              <div className="p-4 bg-brand-purple/10 rounded-xl border border-brand-purple/20 w-fit mb-6 group-hover:bg-brand-purple/15 transition-colors">
                <MessageCircle className="w-8 h-8 text-brand-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Comunicar y Conectar
              </h3>
              <ul className="space-y-4 grow">
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-purple" />
                  <p>
                    Saber <span className="font-bold">cómo hablar</span> sin que se 
                    <span className="font-bold"> cierren</span> o <span className="font-bold">reaccionen mal</span>
                  </p>
                </li>
                <li className="flex items-start gap-3 text-gray-700">
                  <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-brand-purple" />
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

          {/* CTA Section */}
          <div className="text-center relative">
            <div className="absolute inset-x-0 -top-10 -bottom-10 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/5 via-brand-purple/5 to-brand-teal/5 rounded-3xl blur-xl" />
            </div>
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="bg-white border-2 border-brand-coral text-brand-coral px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group hover:bg-brand-coral hover:text-white"
            >
              ¡Quiero Participar!
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
