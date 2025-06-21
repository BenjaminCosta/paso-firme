import {
  ChevronRight,
  Zap,
  Clock,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  return (
    <div className="w-full">
      {/* SECCIÓN FAQ - CON FONDO Y MÁS COLOR */}
      <section
        className="relative py-16 w-full bg-white border-b border-gray-100"
        style={{
          background: `linear-gradient(to bottom, rgba(255,255,255,0.95), rgba(253,245,240,0.85)), url('https://images.unsplash.com/photo-1524179091875-b615987f1618?auto=format&fit=crop&w=1740&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Encabezado sticky */}
            <div className="md:sticky top-28 md:w-1/3">
              <span className="inline-flex items-center gap-2 bg-brand-coral/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Zap size={16} /> INFORMACIÓN CLAVE
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4 font-dancing">
                Preguntas frecuentes
              </h2>
              <p className="text-gray-700">
                Todo lo que necesitas saber sobre nuestro programa para adolescentes
              </p>
            </div>

            {/* Lista de preguntas */}
            <div className="md:w-2/3">
              <div className="grid gap-6">
                {[
                  {
                    question: "¿Para qué edades es el programa?",
                    answer: "Diseñado específicamente para adolescentes de 11 a 19 años.",
                    highlight: "Rango de edad",
                  },
                  {
                    question: "¿Las sesiones son grabadas?",
                    answer: "No, todas las sesiones son en vivo para garantizar privacidad y seguridad.",
                    highlight: "100% en vivo",
                  },
                  {
                    question: "¿Mi hijo está obligado a participar?",
                    answer: "Puede elegir participar activamente u observar según su comodidad.",
                    highlight: "Participación flexible",
                  },
                  {
                    question: "¿Qué métodos de pago aceptan?",
                    answer: "Aceptamos todas las tarjetas principales y transferencias bancarias.",
                    highlight: "Pago seguro",
                  },
                  {
                    question: "¿Ofrecen descuentos para hermanos?",
                    answer: "Sí, aplicamos descuentos progresivos para familias con múltiples participantes.",
                    highlight: "Beneficio familiar",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group flex flex-col md:flex-row gap-5 p-6 bg-white/80 backdrop-blur-sm border border-white/30 rounded-xl shadow-md hover:shadow-xl transition"
                  >
                    <div className="flex-shrink-0">
                      <div className="bg-brand-purple/10 text-brand-purple p-3 rounded-lg">
                        <CheckCircle size={20} />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-semibold bg-brand-coral/10 text-brand-purple px-3 py-1 rounded-full">
                          {item.highlight}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1 font-dancing">
                        {item.question}
                      </h3>
                      <p className="text-gray-700">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CTA - CON FONDO VISUAL */}
      <section
        className="relative py-20 w-full"
        style={{
          background: `linear-gradient(rgba(255,255,255,0.6), rgba(253,245,240,0.8)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1740&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-6 md:px-16">
          <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-10 shadow-lg border border-white/30 relative">
            <div className="relative z-10">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-medium">
                  <AlertTriangle size={16} /> CUPOS LIMITADOS
                </span>
                <span className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium">
                  <Clock size={16} /> INSCRIPCIONES POR CIERRE
                </span>
              </div>

              <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">
                    Transforma su adolescencia
                  </span>
                  <br /> hoy mismo
                </h2>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                  Programa con disponibilidad reducida por el alto nivel de atención personalizada
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  "Sesiones 1:1 con especialistas",
                  "Herramientas validadas científicamente",
                  "Resultados visibles en semanas",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-brand-beige/40 p-4 rounded-lg border border-white/20"
                  >
                    <CheckCircle className="text-brand-purple flex-shrink-0" />
                    <span className="text-gray-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  className="group relative overflow-hidden bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple/90 hover:to-brand-coral/90 text-white text-lg font-bold py-7 px-10 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
                  size="lg"
                >
                  <span className="relative z-10">INSCRIBIR AHORA</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-brand-purple/80 to-brand-coral/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>

                <Button
                  variant="outline"
                  className="border-brand-purple text-brand-purple hover:bg-brand-purple/5 text-lg font-semibold py-7 px-8 rounded-xl flex items-center gap-2"
                  size="lg"
                >
                  Ver más detalles
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>

            {/* Círculo decorativo */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
