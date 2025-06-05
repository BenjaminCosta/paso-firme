
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, Users, Video, Download } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 via-white to-brand-purple/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            <em>Modalidades y precios</em>
          </h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto">
            Elige la modalidad que mejor se adapte a tu familia. Ambas opciones incluyen el mismo contenido de calidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Presencial */}
          <Card className="border-2 border-brand-teal hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <MapPin className="w-12 h-12 text-brand-teal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-dark">Modalidad Presencial</h3>
                <p className="text-brand-teal font-medium">Monterrey, México</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-teal" />
                  <span>Sábados 15, 22 y 29 de febrero</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-brand-teal" />
                  <span>3 sesiones de 2.5 horas</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-teal" />
                  <span>Grupo reducido (máx. 12 participantes)</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-brand-teal">$2,500 MXN</div>
                <p className="text-text-dark/70">Incluye materiales y refrigerio</p>
              </div>
              
              <Button className="w-full bg-brand-teal hover:bg-brand-teal/90 text-white">
                Inscribir modalidad presencial
              </Button>
            </CardContent>
          </Card>

          {/* Online */}
          <Card className="border-2 border-brand-purple hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-brand-coral text-white px-4 py-1 rounded-full text-sm font-medium">
                🔥 Preventa
              </span>
            </div>
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-6">
                <Video className="w-12 h-12 text-brand-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-dark">Modalidad Online</h3>
                <p className="text-brand-purple font-medium">Desde cualquier parte del mundo</p>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-purple" />
                  <span>Sábados 8, 15 y 22 de marzo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-brand-purple" />
                  <span>Vía Zoom interactivo</span>
                </div>
                <div className="flex items-center gap-3">
                  <Download className="w-5 h-5 text-brand-purple" />
                  <span>Materiales descargables incluidos</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-sm text-text-dark/60 line-through">$1,800 MXN</div>
                <div className="text-3xl font-bold text-brand-purple">$1,200 MXN</div>
                <p className="text-brand-coral font-medium">Precio de preventa hasta el 15 de febrero</p>
              </div>
              
              <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white">
                Aprovechar preventa online
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
