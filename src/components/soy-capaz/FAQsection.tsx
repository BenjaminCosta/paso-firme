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
      {/* SECCIÓN FAQ - CON FONDO MODERNO Y ELEGANTE */}
<section className="relative py-20 w-full overflow-x-hidden">
  {/* Fondo de Unsplash con overlay degradado */}
  <div className="absolute inset-0 -z-10">
    <img 
      src="https://images.unsplash.com/photo-1707275952362-fbb87150ba88?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRleHR1cmUlMjBtb2Rlcm58ZW58MHx8MHx8fDI%3Dq=80" 
      alt="Fondo abstracto moderno"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/80 to-white"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-white/80 to-transparent md:w-1/3"></div>
  </div>

  <div className="container mx-auto px-6 md:px-16 relative">
    <div className="flex flex-col md:flex-row gap-12 items-start">
      {/* Encabezado sticky - con nuevo diseño */}
      <div className="lg:sticky top-32 md:w-1/3">
        <span className="inline-flex items-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-5 tracking-wide">
          <Zap size={16} className="text-brand-coral" /> INFORMACIÓN CLAVE
        </span>
        <h2 className="text-5xl font-bold text-gray-900 mb-5 font-dancing leading-tight">
          Preguntas <br className="hidden md:block"/>frecuentes
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Todo lo que necesitas saber sobre nuestro exclusivo programa para adolescentes
        </p>
        
        {/* Elemento decorativo */}
        <div className="hidden md:block mt-8">
          <div className="w-20 h-1 bg-gradient-to-r from-brand-purple to-brand-coral rounded-full"></div>
        </div>
      </div>

      {/* Lista de preguntas - diseño mejorado */}
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
              className="group relative flex flex-col md:flex-row gap-6 p-7 bg-white/90 backdrop-blur-sm border border-white/30 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Efecto de borde hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-brand-purple/20 pointer-events-none transition-all duration-300"></div>
              
              <div className="flex-shrink-0">
                <div className="bg-gradient-to-br from-brand-purple/10 to-brand-coral/10 text-brand-purple p-3.5 rounded-xl">
                  <CheckCircle size={22} className="text-brand-purple" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold bg-gradient-to-r from-brand-purple/10 to-brand-coral/10 text-brand-purple px-3 py-1.5 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-dancing">
                  {item.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  {/* Elementos decorativos de fondo */}
  <div className="absolute -right-32 top-0 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl -z-0"></div>
  <div className="absolute left-0 bottom-0 w-48 h-48 rounded-full bg-brand-coral/5 blur-3xl -z-0"></div>
</section>

      {/* SECCIÓN CTA - CON FONDO VISUAL */}
      <section
        className="relative py-20 w-full overflow-x-hidden"
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

            {/* Círculo decorativo ajustado */}
            <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-brand-purple/10 blur-3xl"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQSection;
