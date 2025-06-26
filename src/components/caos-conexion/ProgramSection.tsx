import { Button } from "@/components/ui/button";
import { Check, Heart, MessageSquare, Shield, Eye, HandHeart, ArrowRight } from "lucide-react";

const ProgramSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Fondo con textura y gradiente mejorado */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-20"
          style={{
            maskImage: 'linear-gradient(rgba(0,0,0,0.9) 30%, transparent 100%)',
          }}
        />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado elegante mejorado */}
          <div className="text-center mb-16">
            <span className="inline-block bg-brand-teal/10 text-brand-teal text-xs font-medium tracking-widest px-4 py-2 rounded-full mb-6 border border-brand-teal/20 backdrop-blur-sm">
              PROGRAMA PREMIUM
            </span>
            <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Del <span className="font-dancing text-brand-coral text-6xl font-bold">Caos</span> a la{" "}
              <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-teal to-brand-coral">Conexión</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-coral mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforma tu relación familiar en <span className="font-dancing text-2xl text-brand-coral font-bold">10 semanas</span> con nuestro método probado
            </p>
          </div>

          {/* Contenido del programa - Diseño elegante mejorado */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {/* Tarjeta de beneficios - Estilo moderno premium */}
            <div className="bg-white rounded-2xl p-1 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-brand-teal/10 blur-xl z-0"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 z-10">
                <h3 className="text-2xl font-light text-gray-900 mb-8 flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-brand-teal/10 to-brand-coral/5 border border-brand-teal/20">
                    <HandHeart className="text-brand-teal" size={24} />
                  </div>
                  <span>Resultados <span className="font-dancing text-brand-coral text-3xl font-bold">garantizados</span></span>
                </h3>
                
                <ul className="space-y-4">
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Reconectar emocionalmente con tu adolescente" 
                    bgColor="bg-brand-teal"
                  />
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Restablecer la confianza mutua y diálogo" 
                    bgColor="bg-brand-coral"
                  />
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Límites saludables que fortalecen el vínculo" 
                    bgColor="bg-brand-teal"
                  />
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Comprensión profunda de su comportamiento" 
                    bgColor="bg-brand-coral"
                  />
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Acompañamiento equilibrado sin controlar" 
                    bgColor="bg-brand-teal"
                  />
                  <BenefitItem 
                    icon={<Check className="text-white" size={16} />} 
                    text="Reparación de la relación dañada" 
                    bgColor="bg-brand-coral"
                  />
                </ul>
              </div>
            </div>

            {/* Tarjeta con imagen - Estilo galería premium */}
            <div className="relative group h-full min-h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 rounded-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500 z-0"></div>
              <div className="relative h-full rounded-2xl overflow-hidden border border-white/30 shadow-lg z-10">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1654613698291-8357353f053a?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D)`,
                  }}
                  
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-teal/20 to-brand-teal/60"></div>
                  
                </div>
                
                
                {/* Mensaje flotante premium */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/50 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/30 transform transition-all duration-500 group-hover:-translate-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Un proceso <span className="font-dancing text-brand-coral text-2xl font-bold">Transformador</span></h3>
                    <p className="text-gray-600 font-semibold">
                      Sin conflictos, sin culpas, con herramientas prácticas y apoyo constante.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Elegante mejorado */}
          <div className="text-center">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-brand-teal to-brand-coral text-white px-14 py-6 text-lg font-medium tracking-wide rounded-full transition-all duration-300 hover:shadow-xl group"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Iniciar mi transformación familiar
                <ArrowRight className="transition-all duration-300 group-hover:translate-x-2" size={20} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-teal opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
            
            <p className="mt-6 text-gray-500 text-sm flex items-center justify-center gap-2">
              <span className="inline-flex w-3 h-3 rounded-full bg-gradient-to-r from-brand-teal to-brand-coral animate-pulse"></span>
              Plazas limitadas • Inscripciones abiertas
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-[80px] -translate-x-1/3 translate-y-1/3 z-0"></div>
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-brand-coral/10 blur-[80px] translate-x-1/3 -translate-y-1/3 z-0"></div>
    </section>
  );
};

// Componente auxiliar mejorado
const BenefitItem = ({ icon, text, bgColor }: { icon: React.ReactNode, text: string, bgColor: string }) => {
  return (
    <li className="flex items-start gap-3 group">
      <div className={`flex-shrink-0 mt-1 ${bgColor} p-1.5 rounded-full group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{text}</span>
    </li>
  );
};

export default ProgramSection;