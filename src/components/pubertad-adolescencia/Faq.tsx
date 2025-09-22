import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";

const Faq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué pasa si no puedo asistir al taller en vivo?",
      answer: "No te preocupes, tendrás acceso a la grabación completa del taller para que puedas verlo en el momento que mejor te convenga. Además, recibirás todos los materiales y recursos complementarios."
    },
    {
      question: "¿Por cuánto tiempo tendré acceso a la grabación?",
      answer: "Tendrás acceso a la grabación del taller y todos los materiales complementarios de manera permanente. Podrás revisarlos tantas veces como necesites."
    },
    {
      question: "¿Cómo se desarrolla el taller en línea?",
      answer: "El taller se realiza a través de Zoom, donde podrás participar activamente, hacer preguntas y compartir experiencias en un ambiente seguro y confidencial. La sesión es interactiva y dinámica."
    },
    {
      question: "¿Qué necesito para participar en el taller?",
      answer: "Solo necesitas una conexión estable a internet, un dispositivo (computadora, tablet o celular) y un espacio tranquilo donde puedas participar sin interrupciones."
    },
    {
      question: "¿Habrá oportunidad de hacer preguntas?",
      answer: "¡Absolutamente! Durante el taller habrá espacios dedicados para preguntas y respuestas. Además, podrás interactuar y compartir experiencias con otros participantes."
    },
    {
      question: "¿Qué pasa si tengo problemas técnicos durante el taller?",
      answer: "Contarás con soporte técnico durante todo el taller para ayudarte con cualquier inconveniente que pueda surgir. Además, al tener acceso a la grabación, no te perderás ningún contenido."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-brand-purple/5 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-coral/20 to-brand-purple/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block bg-gradient-to-r from-brand-purple/20 to-brand-coral/20 text-brand-purple text-sm font-semibold px-6 py-2 rounded-full mb-4 backdrop-blur-sm border border-brand-purple/10">
              Preguntas Frecuentes
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-purple to-gray-900 bg-clip-text text-transparent mb-6">
              ¿Tienes Dudas?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Aquí encontrarás respuestas a las preguntas más comunes sobre el taller
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl border border-brand-purple/10 overflow-hidden transition-all duration-300 hover:border-brand-purple/30"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-lg text-gray-900 group-hover:text-brand-purple transition-colors duration-300">
                    {faq.question}
                  </span>
                  {openQuestion === index ? (
                    <MinusCircle className="w-6 h-6 text-brand-purple flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-6 h-6 text-gray-400 group-hover:text-brand-purple flex-shrink-0 transition-colors duration-300" />
                  )}
                </button>
                
                {openQuestion === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
