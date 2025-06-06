import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, Video, Download, Zap, ArrowRight } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-brand-beige/30 to-white">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-coral/5 rounded-full blur-[100px] animate-float-delay"></div>
        <div className="absolute inset-0 bg-[url('https://uploads-ssl.webflow.com/627a1044a798e6627445c8d1/62b7f330aef06a1f8e40e8e7_noise-pattern.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Encabezado con más urgencia */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-yellow/90 text-gray-900 rounded-full text-sm font-bold mb-5 shadow-md">
            <Zap className="w-4 h-4" fill="currentColor" />
            CUPOS LIMITADOS - ÚLTIMAS OPORTUNIDADES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral bg-clip-text text-transparent">
              Transforma su experiencia escolar
            </span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Elige el formato que mejor se adapte a tus necesidades. <span className="font-semibold text-brand-coral">Grupos exclusivos con disponibilidad limitada.</span>
          </p>
        </div>
        
        {/* Tarjetas 20% más altas y modernas */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Presencial */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/30 to-brand-teal/10 rounded-3xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
            <Card className="relative h-full bg-white/95 backdrop-blur-sm border-2 border-brand-teal/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-brand-teal/10 rounded-xl">
                      <MapPin className="w-7 h-7 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Presencial</h3>
                      <p className="text-brand-teal font-medium">Monterrey, México</p>
                    </div>
                  </div>
                  <div className="bg-brand-teal text-white px-3 py-1 text-xs font-bold rounded-full shadow-sm">
                    POPULAR
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Calendar className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-800 font-medium">15, 22 y 29 de febrero</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Clock className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-800 font-medium">3 sesiones de 2.5 horas</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Users className="w-6 h-6 text-brand-teal flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Grupo exclusivo (12 personas)</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-brand-teal/5 to-brand-teal/10 p-5 rounded-xl mb-6 border border-brand-teal/10">
                    <div className="text-4xl font-extrabold text-brand-teal mb-1">$2,500 MXN</div>
                    <p className="text-sm text-gray-600 font-medium">Incluye todos los materiales y refrigerios</p>
                  </div>
                  
                  <Button className="w-full py-5 bg-gradient-to-r from-brand-teal to-brand-teal-dark hover:from-brand-teal-dark hover:to-brand-teal text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <span>Reservar ahora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Online */}
          <div className="relative group h-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple/30 to-brand-purple/10 rounded-3xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
            <Card className="relative h-full bg-white/95 backdrop-blur-sm border-2 border-brand-purple/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-3.5 bg-brand-purple/10 rounded-xl">
                    <Video className="w-7 h-7 text-brand-purple" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Online</h3>
                    <p className="text-brand-purple font-medium">Desde cualquier lugar</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Calendar className="w-6 h-6 text-brand-purple flex-shrink-0" />
                    <span className="text-gray-800 font-medium">8, 15 y 22 de marzo</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Video className="w-6 h-6 text-brand-purple flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Sesiones interactivas por Zoom</span>
                  </div>
                  <div className="flex items-center gap-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-white/30 shadow-sm hover:shadow-md transition-all">
                    <Download className="w-6 h-6 text-brand-purple flex-shrink-0" />
                    <span className="text-gray-800 font-medium">Materiales digitales descargables</span>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-gradient-to-r from-brand-purple/5 to-brand-purple/10 p-5 rounded-xl mb-6 border border-brand-purple/10">
                    <div className="text-4xl font-extrabold text-brand-purple mb-1">$2,500 MXN</div>
                    <p className="text-sm text-gray-600 font-medium">Acceso completo + bonus exclusivos</p>
                  </div>
                  
                  <Button className="w-full py-5 bg-gradient-to-r from-brand-purple to-brand-purple-dark hover:from-brand-purple-dark hover:to-brand-purple text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                    <span>Inscribirme ahora</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Nota de urgencia mejorada */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-brand-coral/20 px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all">
            <div className="p-2 bg-brand-coral/10 rounded-full">
              <Zap className="w-5 h-5 text-brand-coral animate-pulse" />
            </div>
            <div>
              <p className="font-bold text-brand-coral">¡ÚLTIMAS PLAZAS DISPONIBLES!</p>
              <p className="text-sm text-gray-700">Inscripciones abiertas hasta agotar cupos</p>
            </div>
          </div>
        </div>
      </div>

      <style >{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 8s ease-in-out 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default PricingSection;