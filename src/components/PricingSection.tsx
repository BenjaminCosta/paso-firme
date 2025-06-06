import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, Video, Download, Zap } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 relative overflow-hidden bg-brand-beige/20">
      {/* Efectos de fondo dinámicos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/5 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-coral/5 rounded-full blur-[90px]"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Encabezado urgente */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/90 text-gray-900 rounded-full text-sm font-bold mb-4 animate-pulse">
            <Zap className="w-4 h-4" fill="currentColor" />
            CUPOS LIMITADOS
          </div>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              ¡Reserva tu lugar ahora!
            </span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Solo quedan <span className="font-bold text-brand-coral">3 espacios</span> por modalidad. Mismo contenido transformador, diferentes formatos.
          </p>
        </div>
        
        {/* Tarjetas compactas y urgentes */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Presencial */}
          <Card className="relative overflow-hidden border-2 border-brand-teal/20 bg-white group hover:border-brand-teal/40 transition-colors">
            <div className="absolute top-0 right-0 bg-brand-teal text-white px-3 py-1 text-xs font-bold">
              POPULAR
            </div>
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-brand-teal/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Presencial</h3>
                  <p className="text-brand-teal font-medium text-sm">Monterrey, México</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700 text-sm">15, 22 y 29 de feb</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700 text-sm">3 sesiones de 2.5h</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-teal flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Grupo de 12 personas</span>
                </div>
              </div>
              
              <div className="bg-brand-teal/5 p-4 rounded-lg mb-4">
                <div className="text-3xl font-bold text-brand-teal mb-1">$2,500 MXN</div>
                <p className="text-xs text-gray-600">Incluye materiales + refrigerio</p>
              </div>
              
              <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white font-bold shadow-md hover:shadow-brand-teal/30 transition-all">
                Quiero mi lugar
              </Button>
            </CardContent>
          </Card>

          {/* Online */}
          <Card className="relative overflow-hidden border-2 border-brand-purple/20 bg-white group hover:border-brand-purple/40 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-3 bg-brand-purple/10 rounded-lg">
                  <Video className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Online</h3>
                  <p className="text-brand-purple font-medium text-sm">Desde cualquier lugar</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  <span className="text-gray-700 text-sm">8, 15 y 22 de mar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Zoom interactivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  <span className="text-gray-700 text-sm">Materiales digitales</span>
                </div>
              </div>
              
              <div className="bg-brand-purple/5 p-4 rounded-lg mb-4">
                <div className="text-3xl font-bold text-brand-purple mb-1">$2,500 MXN</div>
                <p className="text-xs text-gray-600">Acceso completo + bonus</p>
              </div>
              
              <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-bold shadow-md hover:shadow-brand-purple/30 transition-all">
                Reservar ahora
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Urgencia adicional */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 bg-brand-coral/10 border border-brand-coral/20 px-4 py-3 rounded-lg">
            <Clock className="w-4 h-4 text-brand-coral" />
            <span className="text-sm font-medium text-gray-800">
              <span className="font-bold text-brand-coral">Oferta especial:</span> Inscríbete hoy y obtén una guía exclusiva
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;