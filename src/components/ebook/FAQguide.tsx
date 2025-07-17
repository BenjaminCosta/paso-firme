import { ChevronDown, ArrowRight, Download, Smartphone, FileText } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import AudienceTestimonials from './AudienceTestimonials';

const FAQguide = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Qué recibo al comprar?",
      answer: "Una guía en PDF, un audio de emergencia, una hoja imprimible y un PDF de frases clave.",
      icon: "📦"
    },
    {
      question: "¿Cuánto tiempo tengo acceso?",
      answer: "Para siempre. Una vez descargado, el material es tuyo sin vencimiento.",
      icon: "⏳"
    },
    {
      question: "¿Puedo imprimirlo?",
      answer: "Sí. Está diseñado para que puedas usarlo tanto en digital como en papel.",
      icon: "🖨️"
    },
    {
      question: "¿Y si no me llega?",
      answer: "Revisá la carpeta de spam. Si no aparece, escribinos por DM o al correo familiayformacion@gmail.com.",
      icon: "📬"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 md:bg-fixed bg-[url('https://images.unsplash.com/photo-1636955840493-f43a02bfa064?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-beige/10 to-brand-coral/15"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-brand-teal/20 to-brand-purple/20" />

      <div className="container mx-auto relative z-10">
        {/* Encabezado */}
       <div className="max-w-3xl mx-auto text-center mb-16 px-4 sm:px-6 lg:px-0">
  <div className="inline-flex items-center justify-center space-x-4 mb-8">
    <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-r from-transparent via-brand-purple/70 to-transparent"></div>
    <span className="text-xs sm:text-sm font-medium tracking-widest text-brand-coral uppercase bg-white/80 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-sm border border-brand-coral/20">
      Respuestas Rápidas
    </span>
    <div className="w-16 sm:w-20 h-[2px] bg-gradient-to-l from-transparent via-brand-purple/70 to-transparent"></div>
  </div>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 px-2 sm:px-0 leading-tight">
    <span className="bg-gradient-to-r from-brand-teal via-brand-teal to-brand-coral bg-clip-text text-transparent">
      Preguntas frecuentes
    </span>
  </h2>
  <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal mx-auto rounded-full mb-6" />
  <p className="text-base sm:text-lg text-gray-700 max-w-xl sm:max-w-2xl mx-auto px-2 sm:px-0 leading-relaxed">
    Hemos recopilado las dudas más comunes para facilitarte la información que necesitas.
  </p>
</div>

        {/* Acordeón de preguntas */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`bg-white/80 backdrop-blur-sm rounded-xl border border-white/90 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
                activeIndex === index ? 'ring-1 ring-brand-purple/50 shadow-md' : ''
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/20 transition-colors duration-200"
              >
                <div className="flex items-center space-x-5 w-full">
                  <div className={`flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg ${
                    activeIndex === index 
                      ? 'bg-brand-purple text-white' 
                      : 'bg-white text-brand-purple shadow-sm border border-gray-200'
                  }`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 text-left flex-grow">
                    {item.question}
                  </h3>
                  <ChevronDown 
                    className={`flex-shrink-0 w-5 h-5 text-brand-purple transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </div>
              </button>
              <div 
                className={`px-6 pb-6 pt-0 transition-all duration-300 ${
                  activeIndex === index ? 'block animate-fadeIn' : 'hidden'
                }`}
              >
                <div className="ml-17 pl-1 pr-4">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
    
  );
};

export default FAQguide;