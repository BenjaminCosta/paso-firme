import { 
  Video, Download, Target, Mic, Zap, Smartphone, 
  Calendar, Clock, DollarSign, ArrowRight, 
  AlertTriangle, ShieldCheck 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useSheetData from "@/hooks/useSheetData";
import useSheetDataDescubriendo from '@/hooks/useSheetData2';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const { data, loading, error } = useSheetDataDescubriendo();

  const features = [
    {
      icon: <Video className="w-5 h-5 text-white" />,
      title: "Sesión en vivo",
      description: "90 minutos por Zoom con interacción directa"
    },
    {
      icon: <Download className="w-5 h-5 text-white" />,
      title: "Material descargable",
      description: "Guías y recursos prácticos en PDF"
    },
    {
      icon: <Target className="w-5 h-5 text-white" />,
      title: "Actividades prácticas",
      description: "Ejercicios con objetivos claros y medibles"
    },
    {
      icon: <Mic className="w-5 h-5 text-white" />,
      title: "Participación flexible",
      description: "Elige usar cámara o solo audio"
    },
    {
      icon: <Zap className="w-5 h-5 text-white" />,
      title: "Dinámicas reales",
      description: "Técnicas que aplicarán inmediatamente"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-white" />,
      title: "Plan de acción",
      description: "Guía estratégica para uso saludable de pantallas"
    }
  ];

  // Tomamos el primer evento (puedes adaptar para más si quieres)
  const event = data.length > 0 ? data[0] : null;

  const eventDetails = event ? [
    { icon: <Calendar className="w-5 h-5 text-brand-purple" />, text: event.fecha },
    { icon: <Clock className="w-5 h-5 text-brand-purple" />, text: event.hora },
    { icon: <Clock className="w-5 h-5 text-brand-purple" />, text: `Duración: ${event.duracion}` },
    { icon: <Video className="w-5 h-5 text-brand-purple" />, text: `Plataforma: ${event.plataforma}` },
  ] : [];

  return (
    <section id="pricing" className="relative py-16 overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-60 h-60 bg-brand-purple/5 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-brand-teal/5 rounded-full blur-[80px] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block bg-brand-teal/10 text-brand-teal text-sm font-semibold px-5 py-2 rounded-full mb-4">
            TALLER PARA ADOLESCENTES
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              Impulsa su crecimiento hoy
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un taller completo para transformar la relación con la tecnología
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/70 to-brand-teal/70 opacity-90"></div>
            <div className="absolute inset-0 bg-black/20 opacity-90"></div>
            <div
              className="absolute inset-0 bg-[url('/imagenes/pricing.avif')] 
              bg-cover bg-center mix-blend-overlay opacity-30"
            ></div>

            <div className="relative p-10 h-full">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-white" />
                <span>Lo que incluye:</span>
              </h3>
              <div className="space-y-4 text-sm sm:text-base">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/20 backdrop-blur-lg hover:bg-white/30 transition-all duration-300 border border-white/10"
                  >
                    <div className="bg-white/20 p-2 rounded-lg">{item.icon}</div>
                    <div>
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="text-white/80 sm:text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-t-brand-purple border-l-[60px] border-l-transparent">
              <span className="absolute top-[-50px] right-[10px] text-white text-xs font-bold rotate-45 whitespace-nowrap">
                ¡ÚLTIMOS LUGARES!
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3 ">
                <div className="bg-brand-purple/10 p-2 rounded-full">
                  <AlertTriangle className="w-6 h-6 text-brand-purple" />
                </div>
                <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">
                  ¡No te lo pierdas!
                </span>
              </h3>

              <div className="space-y-4 relative text-[17px] sm:text-[18px] font-medium">
                <div className="absolute -top-5 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce">
                  ⌛ Aprovecha!
                </div>

                {loading && <p>Cargando detalles...</p>}
                {error && <p className="text-red-600">Error: {error}</p>}

                {!loading && !error && eventDetails.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-white to-gray-50 hover:from-gray-50 hover:to-gray-100 transition-all duration-300 border border-gray-100 hover:border-brand-purple/30 group"
                  >
                    <div className="bg-brand-purple/10 p-2 rounded-lg group-hover:bg-brand-purple/20 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-gray-800 group-hover:text-brand-purple transition-colors">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-br from-brand-purple/5 to-brand-teal/5 p-5 rounded-xl border-2 border-brand-purple/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bfd5ac758259b8b5e6f_pattern-1.svg')] opacity-10"></div>
                <div className="relative text-center">
                  <p className="text-sm text-gray-500 mb-1">Inversión única</p>
                  <div className="flex justify-center items-baseline gap-2">
                    <p className="text-4xl font-bold text-brand-purple drop-shadow-md">$900</p>
                    <span className="text-lg text-gray-600">MXN</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">aprox. USD 50</p>
                  <div className="flex justify-center mt-2">
                    <span className="bg-brand-teal/20 text-brand-teal text-xs font-medium px-2 py-0.5 rounded-full">
                      🔥 Oferta exclusiva
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link to={"https://www.familiayformacion.com/tienda/p/descubriendo-mi-potencial"}>
                <Button
                  variant="outline"
                  className="w-full border-2 border-brand-purple/40 text-brand-purple hover:bg-brand-purple/10 hover:border-brand-purple/60 hover:text-brand-purple py-5 text-base transition-all duration-300 group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Quiero saber más
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
                </Link>
              </div>

              <div className="mt-4 p-3 bg-yellow-50/80 border border-yellow-200 rounded-lg flex items-start gap-2">
                <span className="text-yellow-600">⚠️</span>
                <p className="text-xs text-yellow-800">
                  Lugares <span className="font-bold">limitados</span> disponibles. Reserva ahora antes que se agoten.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center px-4">
          <Link to={"https://www.familiayformacion.com/tienda/p/descubriendo-mi-potencial"}>
          <Button className="w-full sm:w-auto bg-gradient-to-r from-brand-purple to-brand-teal hover:from-brand-purple/90 hover:to-brand-teal/90 text-white py-4 sm:py-5 px-6 sm:px-10 text-sm sm:text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group">
            <span className="flex items-center justify-center gap-2 sm:gap-3">
              <Zap className="w-5 h-5" />
              Reservar ahora - Últimos cupos disponibles
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
