import {
  Calendar,
  Clock,
  Users,
  Video,
  MessageSquare,
  Gift,
  AlertTriangle,
  ArrowRight,
  Zap,
  CheckCircle,
  Play,
  Brain,
  Globe,
  TrendingUp,
  Crown,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useSheetData4 from "@/hooks/useSheetData4";
import { Link } from "react-router-dom";

const Pricing3 = () => {
  const { data, loading, error } = useSheetData4();
  
  const exchangeRate = 0.055;

  const item = data[0];

  return (
    <div className="space-y-16">
      <section
        id="pricing"
        className="py-16 md:py-24 px-4 relative overflow-hidden bg-gradient-to-br from-brand-sand/30 via-white to-brand-pink/20"
      >
        {/* Formas geométricas de fondo */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden md:block"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-brand-blue/5 rounded-full z-0 hidden md:block"></div>
        <div className="absolute top-1/3 right-10 w-40 h-40 border-4 border-brand-red/10 rounded-full z-0 hidden lg:block"></div>
        <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-brand-red/5 to-brand-pink/10 blur-3xl z-0"></div>
        <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/5 to-brand-sand/10 blur-3xl z-0"></div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          
          {/* Sección: Lo que recibirás */}
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-blue mb-6">
              Lo que recibirás durante estas{" "}
              <span className="text-brand-red">10 semanas</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Cada semana trabajas herramientas prácticas, basadas en{" "}
              <span className="font-bold text-brand-red">neuroeducación</span> y{" "}
              <span className="font-bold text-brand-blue">comunicación consciente</span>, para mejorar la relación con tu hijo; tanto si hay caos como si quieres fortalecer lo que ya funciona.
            </p>
          </div>

          {/* Grid de beneficios con imágenes */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20 max-w-5xl mx-auto items-stretch">
            
            {/* Lista de beneficios */}
            <div className="space-y-6 flex flex-col">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-pink/20 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-xl">
                    <Play className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue text-lg mb-1">
                      10 clases grabadas
                    </h3>
                    <p className="text-brand-gray text-sm">
                      Una por semana, para avanzar a tu ritmo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-pink/20 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-xl">
                    <MessageSquare className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-red text-lg mb-1">
                      Grupo de acompañamiento
                    </h3>
                    <p className="text-brand-gray text-sm">
                      Comunidad privada de apoyo mutuo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-pink/20 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-xl">
                    <Brain className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue text-lg mb-1">
                      Estrategias basadas en ciencia
                    </h3>
                    <p className="text-brand-gray text-sm">
                      Neurociencia, psicología y comunicación afectiva
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-pink/20 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-red/10 rounded-xl">
                    <Globe className="w-6 h-6 text-brand-red" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-red text-lg mb-1">
                      Acceso desde cualquier país
                    </h3>
                    <p className="text-brand-gray text-sm">
                      Disponible 24/7, cuando lo necesites
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-brand-pink/20 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-blue/10 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-bold text-brand-blue text-lg mb-1">
                      Resultados visibles
                    </h3>
                    <p className="text-brand-gray text-sm">
                      Desde las primeras semanas de aplicación
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mockup de dispositivos - Ocupa toda la altura */}
            <div className="bg-white rounded-2xl p-4 shadow-lg border border-brand-pink/20 flex items-center">
              <img 
                src="/imagenes/mockup-caos.png" 
                alt="Programa en múltiples dispositivos"
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Sección de planes */}
          <div id="planes" className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-brand-blue text-center mb-4">
              Elige la forma que mejor{" "}
              <span className="text-brand-red">se adapta a ti</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-gray text-center max-w-3xl mx-auto">
              Ambas versiones transforman tu relación.<br />
              La diferencia está en <span className="font-bold text-brand-blue">cuánto acompañamiento directo</span> deseas de mí.
            </p>
          </div>

          {/* Grid de planes */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Plan Standard */}
            <Card className="relative bg-white border-2 border-brand-blue/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-brand-blue/10 rounded-2xl mb-4">
                    <Video className="w-8 sm:w-10 h-8 sm:h-10 text-brand-blue" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue mb-2">
                    Plan Standard
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Ideal si quieres avanzar a tu ritmo con estructura clara y sin depender de horarios.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-brand-blue">$170</span>
                    <span className="text-lg sm:text-xl text-brand-gray">USD</span>
                  </div>
                  <p className="text-sm text-brand-gray">Pago único</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <h4 className="font-bold text-brand-blue text-base sm:text-lg">Incluye:</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      10 clases grabadas (una por semana)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      Disponibilidad a los contenidos durante 10 semanas
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      Acceso inmediato desde cualquier dispositivo
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link to="https://www.familiayformacion.com/tienda/p/caos-conexion-standard" className="block">
                    <Button className="w-full py-5 sm:py-6 bg-gradient-to-r from-brand-blue to-brand-blue/90 hover:from-brand-blue/90 hover:to-brand-blue text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 group rounded-lg">
                      <span className="text-center leading-tight">QUIERO LA VERSIÓN STANDARD</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Plan Premium */}
            <Card className="relative bg-white border-2 border-brand-red shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
              {/* Badge "Más elegido" */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-brand-red to-brand-blue text-white text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-lg">
                <Crown className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">MÁS ELEGIDO</span>
                <span className="sm:hidden">TOP</span>
              </div>

              <CardContent className="p-6 sm:p-8 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block p-3 bg-brand-red/10 rounded-2xl mb-4">
                    <Users className="w-8 sm:w-10 h-8 sm:h-10 text-brand-red" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-brand-red mb-2">
                    Plan Premium
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Ideal si quieres apoyo personalizado, resolver dudas en tiempo real y avanzar de la mano conmigo.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl sm:text-5xl font-bold text-brand-red">$250</span>
                    <span className="text-lg sm:text-xl text-brand-gray">USD</span>
                  </div>
                  <p className="text-sm text-brand-gray">Pago único</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  <h4 className="font-bold text-brand-red text-base sm:text-lg">Incluye todo lo anterior, más:</h4>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      <strong>Sesiones semanales por Zoom</strong> con Oli
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      <strong>Chat de WhatsApp Premium</strong> con Oli (respuestas semanales)
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-red mt-0.5 flex-shrink-0" />
                    <span className="text-brand-gray text-sm">
                      <strong>Comunidad Premium</strong> con familias que están viviendo el mismo proceso
                    </span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Link to="https://www.familiayformacion.com/tienda/p/caos-conexion-premium" className="block">
                    <Button className="w-full py-5 sm:py-6 bg-gradient-to-r from-brand-red to-brand-blue hover:from-brand-red/90 hover:to-brand-blue/90 text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2 sm:gap-3 group rounded-lg">
                      <span className="text-center leading-tight">QUIERO LA VERSIÓN PREMIUM</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing3;
