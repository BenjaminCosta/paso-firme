import { 
  Calendar, 
  Clock, 
  Users, 
  Video, 
  MessageSquare,
  Gift,
  AlertTriangle,
  ArrowRight,
  Zap
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing3 = () => {
  return (
    <div className="space-y-16">
      {/* Sección principal del programa */}
      <section id="parent-program" className="py-16 md:py-24 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-br from-white to-brand-beige/10">
        {/* Efectos de fondo modernos */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-brand-teal/5 rounded-full blur-[80px] md:blur-[100px] animate-float"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-brand-coral/5 rounded-full blur-[80px] md:blur-[100px] animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/4 w-40 h-40 bg-brand-beige/5 rounded-full blur-[70px] animate-float-rotate"></div>
        </div>

        <div className="container mx-auto px-2 md:px-4 max-w-4xl relative z-10">
          {/* Encabezado */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 text-brand-teal rounded-full text-xs md:text-sm font-bold mb-4 md:mb-5 border border-brand-teal/10 shadow-sm">
              <Zap className="w-3 h-3 md:w-4 md:h-4" />
              ÚLTIMOS LUGARES DISPONIBLES
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
              <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
                Transforma tu relación con tu adolescente
              </span>
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
              Programa de acompañamiento para padres con herramientas prácticas
            </p>
          </div>

          {/* Tarjeta de detalles */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/20 to-brand-coral/15 rounded-3xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
            <Card className="relative bg-white/95 backdrop-blur-sm border border-gray-200/80 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5 overflow-hidden">
              {/* Banda de urgencia sutil */}
              <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-coral to-brand-teal text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-2 rotate-45 scale-110">
                INSCRIPCIONES ABIERTAS
              </div>
              
              <CardContent className="p-6 sm:p-8">
                {/* Encabezado de la tarjeta */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="p-3.5 bg-gradient-to-br from-brand-teal/10 to-brand-coral/10 rounded-xl shadow-inner">
                    <Users className="w-7 h-7 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Programa para Padres de Adolescentes</h3>
                    <p className="text-gradient bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent font-medium">
                      Modalidad en línea con acompañamiento
                    </p>
                  </div>
                </div>

                {/* Grid de detalles */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Columna izquierda (teal) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal/10 rounded-lg shadow-sm">
                        <Calendar className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Fecha de inicio</h4>
                        <p className="text-gray-700">Jueves 31 de julio de 2025</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal/10 rounded-lg shadow-sm">
                        <Clock className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Duración</h4>
                        <p className="text-gray-700">10 semanas (1 sesión por semana)</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-teal/10 rounded-lg shadow-sm">
                        <Video className="w-5 h-5 text-brand-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Modalidad</h4>
                        <p className="text-gray-700">En línea (Zoom)</p>
                      </div>
                    </div>
                  </div>

                  {/* Columna derecha (coral) */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-coral/10 rounded-lg shadow-sm">
                        <Video className="w-5 h-5 text-brand-coral" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Grabaciones</h4>
                        <p className="text-gray-700">Disponibles todas las sesiones</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-coral/10 rounded-lg shadow-sm">
                        <MessageSquare className="w-5 h-5 text-brand-coral" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Acompañamiento</h4>
                        <p className="text-gray-700">Grupo de apoyo incluido</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-brand-coral/10 rounded-lg shadow-sm">
                        <Gift className="w-5 h-5 text-brand-coral" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Promoción especial</h4>
                        <p className="text-gray-700">$2,900 para parejas</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sección de inversión */}
                <div className="mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Inversión</h4>
                      <div className="flex items-end gap-2">
                        <div className="text-3xl sm:text-4xl font-extrabold text-brand-teal">$2,500 MXN</div>
                        <div className="text-sm text-gray-500 mb-1">Promoción pareja: $2,900</div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-brand-coral/10 to-brand-teal/10 text-brand-coral text-xs font-bold px-3 py-1.5 rounded-full self-start sm:self-center border border-brand-coral/20">
                      CUPOS LIMITADOS
                    </div>
                  </div>
                </div>

                {/* Botón CTA principal */}
                <Button 
                  className="w-full py-5 bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal/90 hover:to-brand-coral/90 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  size="lg"
                >
                  <span className="text-base">Quiero asegurar mi lugar ahora</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>

                {/* Nota sutil de urgencia */}
                <p className="text-xs text-center text-gray-500 mt-3">
                  Sección 7 • Últimos lugares disponibles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sección CTA de urgencia */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-brand-beige/20 to-white">
        {/* Fondo con imagen de Unsplash y overlay */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Imagen de fondo con degradado */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80')] bg-cover bg-center"
            style={{
              maskImage: 'linear-gradient(to right, rgba(0,0,0,0.5) 0%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0.5) 0%, transparent 100%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white/30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Contenido de texto */}
            <div className="md:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-brand-coral/10 to-brand-teal/10 text-brand-coral rounded-full text-lg font-bold border border-brand-coral/10 shadow-sm">
                <AlertTriangle className="w-4 h-4" />
                 ¡Aprovecha hoy!
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                ¡No esperes a que sea demasiado tarde!
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral">•</span>
                  <span>A que tu hijo se cierre más…</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral">•</span>
                  <span>A que tú te sigas desgastando emocionalmente sin herramientas claras.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral">•</span>
                  <span>Este programa no solo mejora la relación con tu adolescente…</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-coral">•</span>
                  <span>la puede transformar por completo.</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="bg-brand-teal/10 p-1.5 rounded-full">
                    <Zap className="w-4 h-4 text-brand-teal" />
                  </span>
                   Últimos lugares disponibles
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <span className="bg-brand-coral/10 p-1.5 rounded-full">
                    <MessageSquare className="w-4 h-4 text-brand-coral" />
                  </span>
                   Accede hoy y comienza el cambio
                </div>
              </div>
            </div>

            {/* Tarjeta CTA con glassmorphism */}
            <div className="md:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/30 to-brand-coral/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-xl border border-white shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Comienza a recuperar lo más valioso:
                  </h3>
                  <p className="text-xl font-semibold text-brand-teal mb-6">
                    el vínculo con tu hijo o hija.
                  </p>

                  <Button 
                    className="w-full py-6 bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal/90 hover:to-brand-coral/90 text-white font-bold text-lg shadow-lg hover:shadow-xl transition-all group"
                    size="lg"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Zap></Zap> Inscribirme ahora y comenzar el cambio
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>

                  <p className="text-xs text-center text-gray-500 mt-4">
                    Garantía de satisfacción • Cancelación flexible
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing3;