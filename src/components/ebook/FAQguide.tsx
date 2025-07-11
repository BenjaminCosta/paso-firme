import { ChevronDown, ArrowRight, Download, Smartphone, FileText } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const FAQguide = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Qué incluye exactamente la guía?",
      answer: "Recibirás tres recursos principales: 1) La guía completa en PDF (80+ páginas) con estrategias detalladas, 2) Un audio de emergencia para momentos críticos, y 3) Un kit imprimible que incluye frases clave y el mapa de límites por edades.",
      icon: "📚"
    },
    {
      question: "¿Cómo recibo el material después de comprar?",
      answer: "Inmediatamente después de confirmado tu pago, recibirás un email con acceso a tu área de miembros donde podrás descargar todos los archivos. El email puede llegar a tu bandeja de entrada o spam (recomendamos revisar ambas).",
      icon: "📩"
    },
    {
      question: "¿La guía es compatible con todos los dispositivos?",
      answer: "Sí, los PDFs están optimizados para verse perfectamente en móviles, tablets y computadoras. Además, el audio está en formato MP3 universal compatible con cualquier reproductor.",
      icon: "📱"
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito/débito, PayPal y transferencias bancarias en México. Los pagos son procesados de forma segura a través de nuestra plataforma de pagos certificada.",
      icon: "💳"
    },
    {
      question: "¿Ofrecen soporte después de la compra?",
      answer: "Por supuesto. Puedes contactarnos por email a soporte@tuemail.com o por WhatsApp al +52 55 1234 5678. Nuestro equipo está disponible de lunes a viernes de 9am a 6pm para resolver cualquier duda técnica.",
      icon: "🛟"
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Fondo original mejorado */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 md:bg-fixed bg-[url('https://images.unsplash.com/photo-1636955840493-f43a02bfa064?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 via-brand-beige/10 to-brand-coral/15"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-brand-teal/20 to-brand-purple/20" />

      {/* Contenedor principal */}
      <div className="container mx-auto relative z-10">
        {/* Encabezado */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium text-brand-purple bg-white/80 rounded-full mb-4 shadow-sm">
            Respuestas rápidas
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-brand-teal via-brand-teal to-brand-coral bg-clip-text text-transparent">
              Preguntas frecuentes
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal mx-auto rounded-full mb-6" />
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hemos recopilado las dudas más comunes para facilitarte la información que necesitas.
          </p>
        </div>

        {/* Acordeón de preguntas - Versión mejorada */}
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
                <div className="ml-17 pl-1 pr-4"> {/* Ajustado para alinear con el icono */}
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

       
{/* CTA final - Versión premium mejorada */}
<div className="text-center">
  <div className="inline-flex flex-col items-center">
    <Button
      size="lg"
      className="relative overflow-hidden bg-gradient-to-r from-brand-purple via-brand-coral to-brand-teal text-white px-10 py-7 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl group"
    >
      <span className="relative z-10 flex items-center justify-center">
        <span className="mr-3 bg-white/20 px-3 py-1 rounded-full text-sm font-medium tracking-wide ">
          🔥 OFERTA ESPECIAL
        </span>
        Descargar Guía Completa
        <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-3 duration-200" />
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
    </Button>
    
    <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-3">
      <div className="flex items-center text-sm text-gray-600">
        <Download className="w-5 h-5 mr-2 text-brand-teal" />
        Acceso inmediato 24/7
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <Smartphone className="w-5 h-5 mr-2 text-brand-purple" />
        Multiplataforma
      </div>
      <div className="flex items-center text-sm text-gray-600">
        <FileText className="w-5 h-5 mr-2 text-brand-coral" />
        PDF + Audios descargables
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default FAQguide;