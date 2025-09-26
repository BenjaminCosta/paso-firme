import { Button } from "@/components/ui/button";
import { Users, Target, ArrowRight } from "lucide-react";

interface WhoProps {
  onScrollToSection: (id: string) => void;
}

const Who = ({ onScrollToSection }: WhoProps) => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-64 md:h-96 bg-brand-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-flex items-center bg-brand-blue/10 text-brand-blue text-sm font-semibold px-4 md:px-6 py-2 rounded-full mb-3 backdrop-blur-sm border border-brand-blue/20">
              <Target className="w-4 h-4 mr-2" />
              Audiencia
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 px-4">
              ¿Para Quién es Este Taller?
            </h2>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4">
              Diseñado específicamente para acompañar las diferentes etapas del desarrollo
            </p>
          </div>

          {/* Target Audience - Etapa Unificada */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div className="group relative max-w-4xl w-full">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 rounded-xl md:rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/40 backdrop-blur-[2px]" />
              </div>
              
              {/* Content */}
              <div className="relative bg-white/70 backdrop-blur-lg p-6 md:p-10 lg:p-12 rounded-xl md:rounded-2xl border border-brand-red/30 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 shadow-lg">
                <div className="text-center mb-8 md:mb-10">
                  <div className="flex flex-col sm:flex-row sm:inline-flex items-center gap-3 md:gap-4 mb-6">
                    <div className="p-3 md:p-4 bg-gradient-to-br from-brand-red/15 to-brand-pink/15 rounded-xl border border-brand-red/30 shadow-md">
                      <Users className="w-8 md:w-10 h-8 md:h-10 text-brand-red" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        Etapa Inicial de Pubertad y Adolescencia
                      </h3>
                      <p className="text-lg md:text-xl text-brand-red font-semibold mt-2">
                        8 a 16 años
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
                  <div className="h-full flex flex-col">
                    <div className="bg-gradient-to-br from-brand-red/10 to-brand-pink/15 p-4 md:p-6 rounded-xl border border-brand-red/30 h-full flex flex-col backdrop-blur-sm">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
                        🌱 Si tu hijo/a está comenzando...
                      </h4>
                      <ul className="space-y-4 md:space-y-5 text-gray-700 flex-grow">
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-red flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Apenas empieza a preguntar sobre el cuerpo y la privacidad</span>
                        </li>
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-red flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Quieres prevenir rupturas antes de que sea tarde</span>
                        </li>
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-red flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Buscas una guía realista que no juzgue, sino que acompañe</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="h-full flex flex-col">
                    <div className="bg-gradient-to-br from-brand-blue/10 to-brand-pink/15 p-4 md:p-6 rounded-xl border border-brand-blue/30 h-full flex flex-col backdrop-blur-sm">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 text-center flex items-center justify-center gap-2">
                        🚀 Si ya está en plena transformación...
                      </h4>
                      <ul className="space-y-4 md:space-y-5 text-gray-700 flex-grow">
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-blue flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Ya comenzó a contestar y tener cambios emocionales bruscos</span>
                        </li>
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-blue flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Sientes que lo estás perdiendo poco a poco</span>
                        </li>
                        <li className="flex items-start gap-3 p-1 md:p-2">
                          <span className="text-brand-blue flex-shrink-0 text-base md:text-lg font-bold">✔️</span>
                          <span className="leading-relaxed text-sm md:text-base">Necesitas reconectar y fortalecer el vínculo</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Decorative accents mejorados */}
                <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-gradient-to-r from-brand-red via-brand-pink to-brand-blue rounded-t-xl md:rounded-t-2xl"></div>
                <div className="absolute -top-2 md:-top-3 left-1/2 transform -translate-x-1/2 w-16 md:w-20 h-4 md:h-6 bg-gradient-to-r from-brand-red to-brand-pink rounded-full blur-md opacity-70"></div>
                
                {/* Línea separadora sutil - solo desktop */}
                <div className="absolute left-1/2 transform -translate-x-px top-28 md:top-32 bottom-16 md:bottom-20 w-px bg-gradient-to-b from-transparent via-brand-red/30 to-transparent hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* Mensaje Final */}
          <div className="text-center mb-8 md:mb-12 px-4">
            <div className="inline-block bg-gradient-to-r from-brand-red/10 to-brand-pink/10 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border border-brand-red/20">
              <p className="text-lg md:text-xl text-gray-800">
                Si tu hijo/a está en cualquier punto del camino entre la pubertad y la adolescencia…
                <span className="font-semibold block mt-2">este taller es para ti.</span>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center relative px-4">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-brand-pink/5 to-brand-blue/5 rounded-3xl blur-xl" />
            </div>
            <Button
              onClick={() => window.open('https://www.familiayformacion.com/tienda/p/pubertad-adolescencia', '_blank')}
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group w-full sm:w-auto"
            >
              Reservar Mi Lugar
              <ArrowRight className="ml-2 w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
