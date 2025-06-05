
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle } from "lucide-react";

const ContextSection = () => {
  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 216, 204, 0.3), rgba(227, 216, 204, 0.1)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/20 via-white/80 to-brand-teal/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            El gran salto de primaria a <em className="text-brand-purple">secundaria</em>
          </h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto">
            Este cambio representa mucho más que un nuevo nivel académico. Es una transformación emocional, social y personal que marca el inicio de la adolescencia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <Card className="border-2 border-brand-coral/20 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-brand-coral/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Heart className="w-8 h-8 text-brand-coral" />
                </div>
                <h3 className="text-2xl font-semibold text-text-dark mb-4">
                  <em>Desafíos comunes</em>
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span>Miedo a lo desconocido y ansiedad por el cambio</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span>Presión social y necesidad de encajar</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span>Cambios físicos y emocionales confusos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-brand-coral rounded-full mt-2 flex-shrink-0"></div>
                  <span>Mayor exigencia académica sin herramientas emocionales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-2 border-brand-teal/20 bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-brand-teal/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse" style={{animationDelay: '1s'}}>
                  <Shield className="w-8 h-8 text-brand-teal" />
                </div>
                <h3 className="text-2xl font-semibold text-text-dark mb-4">
                  <em>Con preparación emocional</em>
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Confianza para enfrentar nuevos desafíos</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Herramientas para manejar la presión social</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Autoconocimiento y aceptación personal</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
                  <span>Estrategias de organización y gestión emocional</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;
