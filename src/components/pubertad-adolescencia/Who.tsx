import { Button } from "@/components/ui/button";
import { Users, Target, ArrowRight } from "lucide-react";

interface WhoProps {
  onScrollToSection: (id: string) => void;
}

const Who = ({ onScrollToSection }: WhoProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-brand-red/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center bg-brand-blue/10 text-brand-blue text-sm font-semibold px-6 py-2 rounded-full mb-3 backdrop-blur-sm border border-brand-blue/20">
              <Target className="w-4 h-4 mr-2" />
              Audiencia
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Para Quién es Este Taller?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Diseñado específicamente para acompañar las diferentes etapas del desarrollo
            </p>
          </div>

          {/* Target Audience Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 [&>*]:h-full">
            {/* Primera etapa Card */}
            <div className="group relative">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1444840535719-195841cb6e2b?auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-[2px]" />
              </div>
              
              {/* Content */}
              <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-brand-pink/20 transition-all duration-300 hover:shadow-lg hover:bg-white/80 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-brand-pink/10 rounded-xl border border-brand-pink/20">
                      <Target className="w-8 h-8 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        Etapa Inicial (9-13 años)
                      </h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-6 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red flex-shrink-0">✔️</span>
                        <span>Apenas empieza a preguntar sobre el cuerpo y la privacidad</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red flex-shrink-0">✔️</span>
                        <span>Quieres prevenir rupturas antes de que sea tarde</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-red flex-shrink-0">✔️</span>
                        <span>Buscas una guía realista que no juzgue, sino que acompañe</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda etapa Card */}
            <div className="group relative">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80"
                  alt=""
                  className="w-full h-full object-cover opacity-15"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-[2px]" />
              </div>
              
              {/* Content */}
              <div className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-brand-blue/20 transition-all duration-300 hover:shadow-lg hover:bg-white/80 h-full">
                <div className="flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="p-4 bg-brand-blue/10 rounded-xl border border-brand-blue/20">
                      <Users className="w-8 h-8 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        En Plena Adolescencia (14-17 años)
                      </h3>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <ul className="space-y-6 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue flex-shrink-0">✔️</span>
                        <span>Ya comenzó a contestar y tener cambios emocionales bruscos</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue flex-shrink-0">✔️</span>
                        <span>Sientes que lo estás perdiendo poco a poco</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-blue flex-shrink-0">✔️</span>
                        <span>Necesitas reconectar y fortalecer el vínculo</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mensaje Final */}
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-brand-red/10 to-brand-pink/10 backdrop-blur-sm p-6 rounded-2xl border border-brand-red/20">
              <p className="text-xl text-gray-800">
                Si estás en cualquier punto del camino entre la pubertad y la adolescencia…
                <span className="font-semibold block mt-2">este taller es para ti.</span>
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center relative">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 via-brand-pink/5 to-brand-blue/5 rounded-3xl blur-xl" />
            </div>
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Reservar Mi Lugar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
