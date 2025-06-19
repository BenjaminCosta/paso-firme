import { Calendar, Clock, Users, Video, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing2 = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-br from-brand-beige/20 to-white">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-brand-purple/10 rounded-full blur-[80px] md:blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-brand-coral/10 rounded-full blur-[80px] md:blur-[100px] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-2 md:px-4 max-w-4xl relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-brand-purple/10 text-brand-purple rounded-full text-xs md:text-sm font-bold mb-4 md:mb-5 border border-brand-purple/20">
            <Zap className="w-3 h-3 md:w-4 md:h-4" />
            CUPO LIMITADO - INSCRIPCIONES ABIERTAS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">
              Detalles del Curso
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre nuestro programa para adolescentes
          </p>
        </div>

        {/* Tarjeta de detalles */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple/20 to-brand-coral/15 rounded-3xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
          <Card className="relative bg-white/95 backdrop-blur-sm border-2 border-brand-purple/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5">
            <CardContent className="p-6 sm:p-8">
              {/* Encabezado de la tarjeta */}
              <div className="flex items-start gap-5 mb-6">
                <div className="p-3.5 bg-brand-purple/10 rounded-xl">
                  <Video className="w-7 h-7 text-brand-purple" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">¡Soy Capaz! Habilidades para la vida adolescente</h3>
                  <p className="text-brand-purple font-medium">Curso online en vivo</p>
                </div>
              </div>

              {/* Grid de detalles */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {/* Columna izquierda */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-purple/10 rounded-lg">
                      <Calendar className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Fecha</h4>
                      <p className="text-gray-700">21 - 24 julio de 2025</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-purple/10 rounded-lg">
                      <Clock className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Horario</h4>
                      <p className="text-gray-700">10:00 a.m. - 11:15 a.m. (CDMX)</p>
                      <p className="text-sm text-gray-500">4 sesiones de 1h 15min cada día</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-purple/10 rounded-lg">
                      <Users className="w-5 h-5 text-brand-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Edad recomendada</h4>
                      <p className="text-gray-700">11 a 19 años</p>
                    </div>
                  </div>
                </div>

                {/* Columna derecha */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-coral/10 rounded-lg">
                      <Video className="w-5 h-5 text-brand-coral" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Modalidad</h4>
                      <p className="text-gray-700">Online en vivo vía Zoom</p>
                      <p className="text-sm text-gray-500">Desde cualquier lugar del mundo</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-brand-coral/10 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-brand-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Privacidad</h4>
                      <p className="text-gray-700">No se graban las sesiones</p>
                      <p className="text-sm text-gray-500">Participación opcional en cámara/micrófono</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección de inversión */}
              <div className="bg-gradient-to-r from-brand-purple/5 to-brand-coral/5 p-5 sm:p-6 rounded-xl mb-6 border border-brand-purple/10">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Inversión</h4>
                    <div className="flex items-end gap-2">
                      <div className="text-3xl sm:text-4xl font-extrabold text-brand-purple">$1,499 MXN</div>
                      <div className="text-sm text-gray-500 mb-1">(~$90 USD)</div>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Descuento para hermanos: 2 x $2,500 MXN
                    </p>
                  </div>
                  <div className="bg-brand-coral/10 text-brand-coral text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-center">
                    CUPOS LIMITADOS
                  </div>
                </div>
              </div>

              {/* Botón CTA */}
              <Button 
                className="w-full py-5 bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple/90 hover:to-brand-coral/90 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                size="lg"
              >
                <span className="text-base">Inscribir ahora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing2;