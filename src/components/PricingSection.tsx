import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Video,
  Download,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { InfoBlock } from "./InfoBlock";
import useSheetData from "@/hooks/UseSheetData";


const PricingSection = () => {
  const { data, loading, error } = useSheetData();
  
  // Corrección del typo "modalidad" (antes había "modalidad" y "modalidad")
  const presencial = data.find((d) => d.modalidad === "presencial");
  const online = data.find((d) => d.modalidad === "online");

  if (loading) return <div>Cargando eventos...</div>;
  if (error) return <div>Error: {error}</div>;

  console.log("Datos procesados:", { data, presencial, online });

  // ... (resto del componente igual)



  return (
    <section id="pricing" className="py-20 px-0 relative overflow-hidden bg-gradient-to-br from-brand-beige/30 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/5 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-coral/5 rounded-full blur-[100px] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-2 md:px-4 max-w-5xl relative z-10">
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
            Elige el formato que mejor se adapte a tus necesidades.{" "}
            <span className="font-semibold text-brand-coral">
              Grupos exclusivos con disponibilidad limitada.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Presencial */}
          {presencial && (
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
                    <InfoBlock icon={<Calendar className="w-6 h-6 text-brand-teal" />} text={presencial.fecha} />
                    <InfoBlock icon={<Clock className="w-6 h-6 text-brand-teal" />} text={presencial.horario} />
                    <InfoBlock icon={<Download className="w-6 h-6 text-brand-teal" />} text={presencial.detalles} />
                  </div>

                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-brand-teal/5 to-brand-teal/10 p-5 rounded-xl mb-6 border border-brand-teal/10 relative">
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        ¡ÚLTIMOS!
                      </div>
                      <div className="text-4xl font-extrabold text-brand-teal mb-1">$1,200 MXN</div>
                      <p className="text-sm text-gray-600 font-medium">
                        Precio <span className="font-bold text-brand-coral">Final</span>
                      </p>
                    </div>
                    <Link to={'https://www.familiayformacion.com/tienda/p/paso-firme-a-secundaria'}>
                      <Button className="w-full py-5 bg-gradient-to-r from-brand-teal to-brand-teal-dark hover:from-brand-teal-dark hover:to-brand-teal text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span>Reservar ahora</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Online */}
          {online && (
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
                      <p className="text-brand-purple font-medium">Desde cualquier país</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 flex-grow">
                    <InfoBlock icon={<Calendar className="w-6 h-6 text-brand-purple" />} text={online.fecha} />
                    <InfoBlock icon={<Clock className="w-6 h-6 text-brand-purple" />} text={online.horario} />
                    <InfoBlock icon={<Download className="w-6 h-6 text-brand-purple" />} text={online.detalles} />
                  </div>

                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-brand-purple/5 to-brand-purple/10 p-5 rounded-xl mb-6 border border-brand-purple/10 relative">
                      <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
                        ¡ÚLTIMOS!
                      </div>
                      <div className="text-4xl font-extrabold text-brand-purple mb-1">$900 MXN</div>
                      <p className="text-sm text-gray-600 font-medium">
                        Precio <span className="font-bold text-brand-coral">Final</span>
                      </p>
                    </div>
                    <Link to={'https://www.familiayformacion.com/tienda/p/paso-firme-online'}>
                      <Button className="w-full py-5 bg-gradient-to-r from-brand-purple to-brand-purple-dark hover:from-brand-purple-dark hover:to-brand-purple text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span>Reservar ahora</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
