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
import { InfoBlock } from "../InfoBlock";
import useSheetData from "@/hooks/useSheetData";

const PricingSection = () => {
  const { data, loading, error } = useSheetData();
  
  const presencial = data.find((d) => d.modalidad === "presencial");
  const online = data.find((d) => d.modalidad === "online");

  if (loading) return <div>Cargando eventos...</div>;
  if (error) return <div>Error: {error}</div>;

  // Tasa de conversión aproximada
  const exchangeRate = 0.06; // 1 MXN = 0.06 USD (ejemplo)

  // Datos de ubicación
  const ubicacion = {
    nombre: "Club Alera",
    direccion: "Paseo de la Sierra 105, Zona la Alianza",
    cp: "CP 66259",
    ciudad: "San Pedro Garza García, NL.",
    mapsUrl: "https://maps.app.goo.gl/gRCSJz7wKRsN9CNp7?g_st=com.google.maps.preview.copy" // Reemplaza con tu enlace real de Google Maps
  };

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-br from-brand-beige/30 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-60 h-60 md:w-80 md:h-80 bg-brand-purple/5 rounded-full blur-[80px] md:blur-[100px] animate-float"></div>
        <div className="absolute bottom-0 left-0 w-60 h-60 md:w-80 md:h-80 bg-brand-coral/5 rounded-full blur-[80px] md:blur-[100px] animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-2 md:px-4 max-w-5xl relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 bg-brand-yellow/90 text-gray-900 rounded-full text-xs md:text-sm font-bold mb-4 md:mb-5 shadow-md">
            <Zap className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" />
            CUPOS LIMITADOS - ÚLTIMAS OPORTUNIDADES
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral bg-clip-text text-transparent">
              Transforma su experiencia escolar
            </span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Elige el formato que mejor se adapte a tus necesidades.{" "}
            <span className="font-semibold text-brand-coral">
              Grupos exclusivos con disponibilidad limitada.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Presencial */}
          {presencial && (
            <div className="relative group h-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/30 to-brand-teal/10 rounded-3xl blur opacity-70 group-hover:opacity-90 transition duration-500"></div>
              <Card className="relative h-full bg-white/95 backdrop-blur-sm border-2 border-brand-teal/20 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1.5">
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4 md:mb-6">
                    <div className="flex items-start gap-3 sm:gap-5">
                      <div className="p-2.5 sm:p-3.5 bg-brand-teal/10 rounded-xl">
                        <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-brand-teal" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Presencial</h3>
                        <p className="text-brand-teal text-sm sm:text-base font-medium">Monterrey, México</p>
                      </div>
                    </div>
                    <div className="bg-brand-teal text-white px-2 py-0.5 text-xxs sm:text-xs font-bold rounded-full shadow-sm">
                      POPULAR
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8 flex-grow">
                    <InfoBlock icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />} text={presencial.fecha} />
                    <InfoBlock icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />} text={presencial.horario} />
                    <InfoBlock icon={<Download className="w-5 h-5 sm:w-6 sm:h-6 text-brand-teal" />} text={presencial.detalles} />
                    
                    {/* Sección de ubicación presencial */}
                    <div className="pt-2">
                      <a 
                        href={ubicacion.mapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/ubicacion"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <MapPin className="w-4 h-4 text-brand-teal/80 group-hover/ubicacion:text-brand-teal" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover/ubicacion:text-brand-teal transition-colors">
                              {ubicacion.nombre}
                            </p>
                            <p className="text-xs text-gray-500 group-hover/ubicacion:text-gray-700 transition-colors">
                              {ubicacion.direccion}<br />
                              {ubicacion.cp}<br />
                              {ubicacion.ciudad}
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-brand-teal/5 to-brand-teal/10 p-4 sm:p-5 rounded-xl mb-4 sm:mb-6 border border-brand-teal/10 relative">
                      <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-xxs sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full animate-bounce">
                        ¡ÚLTIMOS!
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-teal">$1,200 MXN</div>
                        <div className="text-xs sm:text-sm text-gray-500">(~${(1200 * exchangeRate).toFixed(0)} USD)</div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                        Precio <span className="font-bold text-brand-coral">Final</span>
                      </p>
                    </div>
                    <Link to={'https://www.familiayformacion.com/tienda/p/paso-firme-a-secundaria'}>
                      <Button className="w-full py-4 sm:py-5 bg-gradient-to-r from-brand-teal to-brand-teal-dark hover:from-brand-teal-dark hover:to-brand-teal text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span className="text-sm sm:text-base">Reservar ahora</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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
                <CardContent className="p-6 sm:p-8 h-full flex flex-col">
                  <div className="flex items-start gap-3 sm:gap-5 mb-4 md:mb-6">
                    <div className="p-2.5 sm:p-3.5 bg-brand-purple/10 rounded-xl">
                      <Video className="w-5 h-5 sm:w-7 sm:h-7 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Online</h3>
                      <p className="text-brand-purple text-sm sm:text-base font-medium">Desde cualquier país</p>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4 mb-6 md:mb-8 flex-grow">
                    <InfoBlock icon={<Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple" />} text={online.fecha} />
                    <InfoBlock icon={<Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple" />} text={online.horario} />
                    <InfoBlock icon={<Download className="w-5 h-5 sm:w-6 sm:h-6 text-brand-purple" />} text={online.detalles} />
                    
                    {/* Sección de plataforma virtual */}
                    <div className="pt-2">
                      <div className="group/plataforma">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 mt-0.5">
                            <Video className="w-4 h-4 text-brand-purple/80 group-hover/plataforma:text-brand-purple" />
                          </div>
                          <div>
                            <p className="text-xs sm:text-sm font-medium text-gray-700 group-hover/plataforma:text-brand-purple transition-colors">
                              Vía virtual
                            </p>
                            <p className="text-xs text-gray-500 group-hover/plataforma:text-gray-700 transition-colors">
                              Plataforma Zoom<br />
                              Acceso desde cualquier dispositivo<br />
                              Grabaciones disponibles
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-brand-purple/5 to-brand-purple/10 p-4 sm:p-5 rounded-xl mb-4 sm:mb-6 border border-brand-purple/10 relative">
                      <div className="absolute -top-2.5 -right-2.5 bg-red-500 text-white text-xxs sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full animate-bounce">
                        ¡APROVECHA!
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-end gap-1 sm:gap-2">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-purple">$900 MXN</div>
                        <div className="text-xs sm:text-sm text-gray-500">(~${(900 * exchangeRate).toFixed(0)} USD)</div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 font-medium mt-1">
                        Precio original: <span className="line-through text-gray-500 font-semibold">$1200 MXN</span><span className="font-bold text-brand-coral"> - ¡Precio de preventa!</span>
                      </p>
                    </div>
                    <Link to={'https://www.familiayformacion.com/tienda/p/paso-firme-a-secundaria-virtual'}>
                      <Button className="w-full py-4 sm:py-5 bg-gradient-to-r from-brand-purple to-brand-purple-dark hover:from-brand-purple-dark hover:to-brand-purple text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
                        <span className="text-sm sm:text-base">Reservar ahora</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
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