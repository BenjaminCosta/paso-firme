import { Button } from "@/components/ui/button";
import { Check, Heart, MessageSquare, Shield, Eye, HandHeart, ArrowRight } from "lucide-react";

const ProgramSection = () => {
  return (
    <section className="relative py-28 overflow-hidden bg-white">
      {/* Fondo sutil con textura */}
     
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/65 to-white z-0"></div>
      </div>
       

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado elegante */}
          <div className="text-center mb-20">
            <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs font-medium tracking-widest px-4 py-2 rounded-full mb-6 border border-brand-beige/20">
              PROGRAMA PREMIUM
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Del <span className="font-dancing text-brand-coral font-bold">Caos</span> a la{" "}
              <span className="font-medium">Conexión</span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-teal to-transparent mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforma tu relación familiar en <span className="font-dancing text-brand-teal font-bold">10 semanas</span> con nuestro método probado
            </p>
          </div>

          {/* Contenido del programa - Diseño elegante */}
          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            {/* Tarjeta de beneficios - Estilo minimalista */}
            <div className="bg-white rounded-2xl p-2 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-light text-gray-900 mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-brand-teal/5">
                    <HandHeart className="text-brand-teal" size={24} />
                  </div>
                  <span>Resultados <span className="font-dancing text-brand-coral font-bold">garantizados</span></span>
                </h3>
                
                <ul className="space-y-5">
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Reconectar emocionalmente con tu adolescente" 
                  />
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Restablecer la confianza mutua y diálogo" 
                  />
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Límites saludables que fortalecen el vínculo" 
                  />
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Comprensión profunda de su comportamiento" 
                  />
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Acompañamiento equilibrado sin controlar" 
                  />
                  <BenefitItem 
                    icon={<Check className="text-brand-teal" size={18} />} 
                    text="Reparación de la relación dañada" 
                  />
                </ul>
              </div>
            </div>

            {/* Tarjeta con imagen - Estilo galería moderna */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/5 to-brand-coral/5 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative h-full min-h-[500px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=85)`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-gray-900/10 to-transparent"></div>
                </div>
                
                {/* Mensaje flotante elegante */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 transform transition-all duration-500 group-hover:-translate-y-2">
                    <h3 className="text-xl font-light text-gray-900 mb-2">Un proceso <span className="font-dancing text-brand-coral font-bold">transformador</span></h3>
                    <p className="text-gray-600">
                      Sin conflictos, sin culpas, con herramientas prácticas y apoyo constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Elegante */}
          <div className="text-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-white text-gray-900 px-14 py-6 text-lg font-normal tracking-wide rounded-full transition-all duration-300 hover:bg-gray-50 shadow-sm hover:shadow-md border border-gray-200 group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Iniciar mi transformación familiar
                <ArrowRight className="text-brand-teal transition-all duration-300 group-hover:translate-x-1" size={20} />
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-brand-teal to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            
            <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-brand-teal/80"></span>
              Plazas limitadas • Inicio el 15 de septiembre
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos sutiles */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-teal/5 -translate-x-1/3 translate-y-1/3 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-coral/5 translate-x-1/3 -translate-y-1/3 z-0"></div>
    </section>
  );
};

// Componente auxiliar minimalista
const BenefitItem = ({ icon, text }: { icon: React.ReactNode, text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-1">
        {icon}
      </div>
      <span className="text-gray-700">{text}</span>
    </li>
  );
};

export default ProgramSection;