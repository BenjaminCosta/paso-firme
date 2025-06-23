import { Button } from "@/components/ui/button";
import { Check, Heart, MessageSquare, Shield, Eye, HandHeart, ArrowRight } from "lucide-react";

const ProgramSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Fondo con imagen sin blur */}
      <div className="absolute inset-0 overflow-hidden">
       <div
        className="absolute inset-0 z-0 md:bg-fixed"
        style={{
          backgroundImage: `url('/imagenes/testimonials.avif')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >   <div className="absolute inset-0 bg-white/30"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 via-brand-beige/20 to-brand-coral/30"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado con estilo moderno */}
          <div className="text-center mb-20">
            <span className="inline-block bg-white text-brand-coral text-sm font-bold px-6 py-2 rounded-full mb-5 uppercase tracking-widest border border-brand-coral/20 shadow-sm">
              Transformación Familiar
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 leading-tight">
              Del <span className="font-dancing text-brand-coral text-6xl">Caos</span> a la{" "}
              <span className="font-dancing bg-gradient-to-r from-brand-teal to-brand-grey bg-clip-text text-transparent text-6xl">
                Conexión
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Programa online de <span className="font-semibold text-brand-teal">10 semanas</span> para reconstruir tu relación con tu adolescente
            </p>
          </div>

          {/* Contenido del programa - Diseño glassmorphism moderno */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Tarjeta con beneficios - Efecto glass */}
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <div className="p-3 bg-brand-teal/10 rounded-xl">
                  <HandHeart className="text-brand-teal" size={28} />
                </div>
                <span>Lo que <span className="font-dancing text-brand-coral">lograrás</span>:</span>
              </h3>
              
              <ul className="space-y-6">
                <BenefitItem 
                  icon={<Heart className="text-brand-teal" />} 
                  text="Volver a conectar emocionalmente con tu adolescente" 
                  highlight="conectar"
                />
                <BenefitItem 
                  icon={<MessageSquare className="text-brand-beige" />} 
                  text="Recuperar la confianza y la comunicación" 
                  highlight="confianza"
                />
                <BenefitItem 
                  icon={<Shield className="text-brand-coral" />} 
                  text="Establecer límites firmes sin dañar el vínculo" 
                  highlight="límites"
                />
                <BenefitItem 
                  icon={<Eye className="text-brand-teal" />} 
                  text="Entender qué hay detrás de su conducta" 
                  highlight="entender"
                />
                <BenefitItem 
                  icon={<Heart className="text-brand-beige" />} 
                  text="Acompañarlo sin sobreproteger ni controlar" 
                  highlight="acompañar"
                />
                <BenefitItem 
                  icon={<HandHeart className="text-brand-coral" />} 
                  text="Sanar lo que se ha fracturado entre ustedes" 
                  highlight="sanar"
                />
              </ul>
            </div>

            {/* Tarjeta con imagen y destacado - Efecto glass moderno */}
            <div className="relative rounded-3xl overflow-hidden h-full min-h-[450px] group">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=85)`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-900/20 to-transparent"></div>
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="bg-white/60 backdrop-blur-md rounded-2xl p-8 border-3 border-white/30 shadow-xl transform transition-all duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Sin sufrimiento innecesario</h3>
                  <p className="text-gray-700 text-lg">
                    Todo esto, <span className="font-semibold text-brand-coral">sin gritos</span>, sin castigos excesivos, sin sentirte <span className="text-brand-purple">sola/o</span> en el proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Ultra Moderno */}
          <div className="text-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gray-900 text-white px-16 py-7 text-xl font-bold rounded-full transition-all duration-500 hover:scale-[1.03] shadow-2xl hover:shadow-3xl group border-2 border-gray-900 hover:bg-black"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
                  Quiero transformar mi relación
                </span>
                <ArrowRight className="text-brand-teal transition-all duration-500 group-hover:translate-x-2 group-hover:text-brand-coral" size={24} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            
            <p className="mt-5 text-gray-600 font-medium flex items-center justify-center gap-2">
              <span className="inline-block w-4 h-4 bg-brand-teal rounded-full animate-pulse"></span>
              Inscripciones abiertas | <span className="text-brand-coral">Grupo limitado</span>
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-brand-teal/5 z-0"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-brand-coral/5 z-0"></div>
      <div className="absolute top-1/4 -right-10 w-40 h-40 rounded-full bg-brand-beige/10 z-0"></div>
    </section>
  );
};

// Componente auxiliar mejorado para los beneficios
const BenefitItem = ({ icon, text, highlight }: { icon: React.ReactNode, text: string, highlight: string }) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'i'));
  
  return (
    <li className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors duration-300">
      <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
        {icon}
      </div>
      <span className="text-gray-800 text-lg">
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="font-dancing text-brand-coral text-xl font-bold">{part}</span>
          ) : (
            part
          )
        )}
      </span>
    </li>
  );
};

export default ProgramSection;