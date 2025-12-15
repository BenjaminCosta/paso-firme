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
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue mb-6">
              ¿Qué vas a encontrar en{" "}
              <span className="text-brand-red">el programa?</span>
            </h2>
            <p className="text-lg md:text-xl text-brand-gray max-w-4xl mx-auto leading-relaxed">
              Accede a las únicas y mejores herramientas prácticas basadas en{" "}
              <span className="font-bold text-brand-red">neuroeducación</span> y{" "}
              <span className="font-bold text-brand-blue">comunicación consciente</span> para dejar de pelear, hablar sin gritar y volver a conectar con tu hijo, incluso si hoy sientes que en casa todo es un caos.
            </p>
          </div>

          {/* Grid de beneficios con layout en dos columnas */}
          <div className="space-y-8 md:space-y-10 mb-16 md:mb-20 max-w-5xl mx-auto">
            
            {/* Beneficio 1: Clases Grabadas - CON IMAGEN */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-brand-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Columna izquierda: Imagen */}
                <div className="order-2 md:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg border border-brand-blue/20">
                    <img 
                      src="/imagenes/zoom.png" 
                      alt="Clases grabadas en Zoom"
                      className="w-full h-48 md:h-56 object-cover"
                    />
                  </div>
                </div>
                
                {/* Columna derecha: Texto */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <span className="inline-block bg-brand-blue/5 text-brand-blue text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 w-fit border border-brand-blue/20">
                    Aprende a tu ritmo
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">
                    10 Clases Grabadas
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Clases grabadas para avanzar a tu ritmo, una por semana durante 10 semanas.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficio 2: Grupo de Acompañamiento - CON ICONO */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-brand-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Columna izquierda: Placeholder con icono */}
                <div className="order-2 md:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-red/10 to-brand-pink/20 border border-brand-red/20 flex items-center justify-center h-48 md:h-56">
                    <Users className="w-20 h-20 md:w-24 md:h-24 text-brand-red opacity-80" />
                  </div>
                </div>
                
                {/* Columna derecha: Texto */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <span className="inline-block bg-brand-red/5 text-brand-red text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 w-fit border border-brand-red/20">
                    No estás sola
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-red mb-3">
                    Grupo de Acompañamiento
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Espacio de acompañamiento para conectar con otras madres y padres que están viviendo tu mismo proceso.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficio 3: Estrategias basadas en Ciencia - SIN IMAGEN (con icono) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-brand-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Columna izquierda: Placeholder con icono */}
                <div className="order-2 md:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-blue/10 to-brand-blue/5 border border-brand-blue/20 flex items-center justify-center h-48 md:h-56">
                    <Brain className="w-20 h-20 md:w-24 md:h-24 text-brand-blue opacity-80" />
                  </div>
                </div>
                
                {/* Columna derecha: Texto */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <span className="inline-block bg-brand-blue/5 text-brand-blue text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 w-fit border border-brand-blue/20">
                    Respaldado por expertos
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-3">
                    Estrategias basadas en Ciencia
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Psicología, neurociencia y comunicación efectiva aplicadas a la crianza.
                  </p>
                </div>
              </div>
            </div>

            {/* Beneficio 4: Acceso desde cualquier País - SIN IMAGEN (con icono) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-brand-pink/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                {/* Columna izquierda: Placeholder con icono */}
                <div className="order-2 md:order-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-red/10 to-brand-pink/20 border border-brand-red/20 flex items-center justify-center h-48 md:h-56">
                    <Globe className="w-20 h-20 md:w-24 md:h-24 text-brand-red opacity-80" />
                  </div>
                </div>
                
                {/* Columna derecha: Texto */}
                <div className="order-1 md:order-2 flex flex-col justify-center">
                  <span className="inline-block bg-brand-red/5 text-brand-red text-[10px] md:text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-3 w-fit border border-brand-red/20">
                    100% Flexible
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-red mb-3">
                    Acceso desde cualquier País
                  </h3>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                    Acceso disponible 24/7 desde cualquier lugar del mundo, cuando lo necesites.
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
