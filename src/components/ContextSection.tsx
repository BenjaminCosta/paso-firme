import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, CheckCircle, ArrowRight } from "lucide-react";

const ContextSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-brand-coral/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-brand-beige/20 text-brand-purple rounded-full text-sm font-medium mb-4">
            Transición importante
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            El gran salto de primaria a <span className="text-brand-purple">secundaria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Este cambio representa mucho más que un nuevo nivel académico. Es una transformación 
            emocional, social y personal que marca el inicio de la adolescencia.
          </p>
        </div>
        
        {/* Tarjetas comparativas */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Columna de desafíos */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-coral/40 to-brand-purple/40 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <Card className="relative h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-brand-coral/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-coral/10 to-brand-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-10 h-10 text-brand-coral" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Desafíos comunes
                  </h3>
                  <p className="text-gray-500">Lo que enfrentan sin preparación</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-brand-coral" />
                      </div>
                    </div>
                    <span className="text-gray-700">Miedo a lo desconocido y ansiedad por el cambio</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-brand-coral" />
                      </div>
                    </div>
                    <span className="text-gray-700">Presión social y necesidad de encajar</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-brand-coral" />
                      </div>
                    </div>
                    <span className="text-gray-700">Cambios físicos y emocionales confusos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-brand-coral/10 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-brand-coral" />
                      </div>
                    </div>
                    <span className="text-gray-700">Mayor exigencia académica sin herramientas emocionales</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Columna de beneficios */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/40 to-brand-purple/40 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <Card className="relative h-full border border-gray-100 bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-brand-teal/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-teal/10 to-brand-teal/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-brand-teal" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Con preparación emocional
                  </h3>
                  <p className="text-gray-500">Resultados con nuestro programa</p>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-gray-700">Confianza para enfrentar nuevos desafíos</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-gray-700">Herramientas para manejar la presión social</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-gray-700">Autoconocimiento y aceptación personal</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircle className="w-6 h-6 text-brand-teal" />
                    </div>
                    <span className="text-gray-700">Estrategias de organización y gestión emocional</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContextSection;