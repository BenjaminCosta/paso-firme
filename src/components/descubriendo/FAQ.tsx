import { ChevronDown, User, Video, HelpCircle, CreditCard, Users, ArrowRight} from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button"

const FAQ = () => {
     const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "¿Es solo para adolescentes?",
      answer: "Sí. Este taller está diseñado exclusivamente para adolescentes entre 12 y 21 años. Es un espacio pensado para ellos, con lenguaje, dinámicas y ejemplos que les hacen sentido.",
      icon: <User className="w-5 h-5 text-brand-purple" />
    },
    {
      question: "¿Qué pasa si no puede asistir en vivo? ¿Puedo ver la grabación?",
      answer: "No. Este taller no se graba, ya que trabajamos con menores de edad y priorizamos su seguridad, privacidad y participación auténtica. Sólo quienes están presentes pueden vivir la experiencia completa.",
      icon: <Video className="w-5 h-5 text-brand-purple" />
    },
    {
      question: "¿Tienen que participar activamente o pueden solo observar?",
      answer: "Pueden observar con total tranquilidad. Mi enfoque no es forzar, sino invitar. Quien se anima a participar lo hace, y quien prefiere solo escuchar y reflexionar también se lleva mucho. Aquí nadie se siente presionado.",
      icon: <HelpCircle className="w-5 h-5 text-brand-purple" />
    },
    {
      question: "¿Cómo se realiza el pago?",
      answer: "El pago se hace en línea, de forma segura y sencilla a través de la plataforma oficial del taller. Al inscribirte recibirás el enlace y todos los detalles por correo.",
      icon: <CreditCard className="w-5 h-5 text-brand-purple" />
    },
    {
      question: "¿Hay descuento si se inscriben hermanos?",
      answer: "Sí. Si se inscriben 2 o más hermanos, aplica un descuento especial. Solo indícalo al momento de registrarte y te llegará la información con el monto final.",
      icon: <Users className="w-5 h-5 text-brand-purple" />
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="relative overflow-hidden py-24 px-4">
      <div
  className="absolute inset-0 z-0 md:bg-fixed"
  style={{
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.5)), url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
  
></div>
  <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-brand-teal/20 to-brand-purple/20 backdrop-blur-[2px]" />



      {/* Contenedor principal */}
            <div className="container mx-auto relative z-10">
              {/* Encabezado */}
              <div className="max-w-3xl mx-auto text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
                    Preguntas frecuentes
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal mx-auto rounded-full" />
              </div>
      
              {/* Acordeón de preguntas */}
              <div className="max-w-4xl mx-auto space-y-4 mb-16">
                {faqItems.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/50 backdrop-blur-sm rounded-xl border border-white/80 shadow-lg overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-white/10 transition-colors duration-200"
                    >
                      <div className="flex items-start">
                        <div className="bg-brand-purple/10 p-2 rounded-lg mr-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.question}</h3>
                      </div>
                      <ChevronDown 
                        className={`w-5 h-5 text-brand-purple transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                    
                    <div 
                      className={`px-6 pb-6 pt-0 transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
                    >
                      <div className="pl-12">
                        <p className="text-gray-700">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* CTA final */}
              <div className="text-center">
                <Button
                  size="lg"
                  className="relative overflow-hidden bg-gradient-to-r from-brand-purple to-brand-teal text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl group"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    Inscribir a mi adolescente <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </Button>
              </div>
            </div>
    </section>
  );
};

export default FAQ;
