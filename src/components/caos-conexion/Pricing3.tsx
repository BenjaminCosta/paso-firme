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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useSheetData4 from "@/hooks/useSheetData4";
import { Link } from "react-router-dom";

const Pricing3 = () => {
  const { data, loading, error } = useSheetData4();
  
  const exchangeRate = 0.06;

  const item = data[0];

  return (
    <div className="space-y-16">
      <section
  id="pricing"
  className="py-16 md:py-24 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-br from-white to-gray-50"
>
  {/* Fondos animados más sutiles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-10% right-10% w-72 h-72 bg-brand-teal/5 rounded-full blur-[100px] animate-float" />
    <div className="absolute bottom-10% left-10% w-80 h-80 bg-brand-coral/5 rounded-full blur-[110px] animate-float-delay" />
    <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-brand-beige/5 rounded-full blur-[90px] animate-float-rotate" />
  </div>

  <div className="container mx-auto px-2 md:px-4 max-w-5xl relative z-10">
    <div className="text-center mb-14 md:mb-20">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border-2 border-brand-coral text-brand-coral rounded-full text-sm md:text-base font-bold mb-5 md:mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
        <Zap className="w-4 h-4 md:w-5 md:h-5" />
        <span>ÚLTIMA EDICIÓN · PRECIO ESPECIAL</span>
      </div>
      <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
        <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
          Accede al Programa<br className="hidden md:block" />Del Caos a La Conexión
        </span>
      </h2>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Left side - Benefits */}
      <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Qué incluye el programa:</h3>
        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
            <span className="text-gray-700"><strong>10 Clases Completas</strong> con la Ruta del Caos a la Conexión</span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
            <span className="text-gray-700"><strong>Reunión semanal</strong> de Consulta y Acompañamiento con Olivia por Zoom</span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
            <span className="text-gray-700"><strong>Comunidad Privada</strong> de Madres y Padres Conscientes en WhatsApp</span>
          </li>
          <li className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-brand-teal mt-1 flex-shrink-0" />
            <span className="text-gray-700"><strong>Ejercicios prácticos</strong> para aplicar con tu Hijo desde la primera semana</span>
          </li>
          <li className="flex items-start gap-4">
            <Gift className="w-6 h-6 text-brand-coral mt-1 flex-shrink-0" />
            <span className="text-gray-700"><strong>BONUS INCLUIDO:</strong> Taller "Soy Capaz" para tu hijo adolescente</span>
          </li>
        </ul>

        {/* Zoom image */}
        <div className="mt-8 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <img 
            src="imagenes/zoom.png" 
            alt="Sesiones en Zoom con Olivia"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Right side - Pricing card */}
      <div className="lg:w-1/2 relative group">
        {/* Efecto de borde gradiente moderno */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-teal to-brand-coral rounded-3xl opacity-20 blur-sm group-hover:opacity-30 transition duration-500" />
        
        <Card className="relative bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden h-full">
          {/* Ribbon moderno */}
          <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-coral to-brand-teal text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-2 rotate-45 scale-110">
            ÚLTIMAS 16 PLAZAS
          </div>

          <CardContent className="p-8 sm:p-10 flex flex-col h-full">
            <div className="flex items-start gap-6 mb-8">
              <div className="p-4 bg-gradient-to-br from-brand-teal/5 to-brand-coral/5 rounded-2xl shadow-inner border border-gray-100">
                <Users className="w-8 h-8 text-brand-teal" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                  Programa Completo
                </h3>
                <p className="text-gradient bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent font-medium text-lg">
                  Precio de Lanzamiento
                </p>
              </div>
            </div>

            <div className="mb-8 flex-grow">
              <div className="space-y-5">
                <div className="flex items-start gap-5">
                  <div className="p-2.5 bg-brand-teal/5 rounded-xl border border-gray-100 shadow-sm">
                    <Calendar className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Fecha de inicio</h4>
                    <p className="text-gray-700">{item?.fecha}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-2.5 bg-brand-teal/5 rounded-xl border border-gray-100 shadow-sm">
                    <Clock className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Duración</h4>
                    <p className="text-gray-700">{item?.duracion}</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-2.5 bg-brand-teal/5 rounded-xl border border-gray-100 shadow-sm">
                    <Video className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">Modalidad</h4>
                    <p className="text-gray-700">{item?.modalidad}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 bg-gradient-to-r from-gray-50 to-white/50 p-5 rounded-xl border border-gray-100">
    <div>
      <h4 className="font-bold text-gray-900 text-lg mb-3">Inversión</h4>
      <div className="flex items-end gap-3">
        <p className="text-4xl font-bold text-brand-teal drop-shadow-md">
          ${item?.precio || ""} MXN
        </p>
        {item?.precio ? (
          <div className="text-sm text-gray-500 mb-1">
            (~${(parseFloat(item.precio) * exchangeRate).toFixed(0)} USD)
          </div>
        ) : (
          <div className="text-sm text-gray-400">Precio no disponible</div>
        )}
      </div>
      <p className="text-sm text-gray-500 mt-2">(Precio de Lanzamiento)</p>
    </div>
  </div>
  {/* Barra de urgencia mejorada */}
  <div
    role="note"
    aria-live="polite"
    className="group mt-4 relative rounded-2xl"
  >
    {/* Borde gradiente animado */}
    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-400 via-red-500 to-rose-500 opacity-70 group-hover:opacity-100 blur-[1px] transition-opacity duration-500" />
    {/* Contenido */}
    <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/90 backdrop-blur-sm border border-red-100/70">
      {/* Glows y patrón */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-6 -left-8 w-40 h-40 bg-red-200/30 rounded-full blur-2xl" />
        <div className="absolute -bottom-8 -right-10 w-52 h-52 bg-rose-300/20 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(244,63,94,0.12),transparent_60%)]" />
        <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(135deg,rgba(255,0,0,0.05)_0_8px,transparent_8px_16px)] mix-blend-multiply" />
      </div>
      <div className="relative px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-start gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-2 rounded-xl bg-gradient-to-br from-red-100 to-rose-100 text-red-600 shadow-inner ring-1 ring-red-300/40">
            <AlertTriangle className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <p className="text-[11px] font-semibold tracking-[0.12em] text-red-600/90 mb-0.5">
              OFERTA LIMITADA
            </p>
            <p className="text-sm leading-snug text-red-700 font-medium">
              Única semana con este <span className="font-bold underline decoration-red-400/60 decoration-2 underline-offset-2">precio especial</span>, aprovechá esta oportunidad.
            </p>
          </div>
        </div>
        <div className="flex-1" />
        {/* Lado derecho (badge) */}
        <div className="flex sm:flex-col items-end sm:items-center justify-between sm:justify-start gap-2 sm:gap-1 self-stretch">
          <div className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-red-500 to-rose-500 text-white text-[10px] font-bold tracking-wide shadow-lg shadow-red-500/25 animate-pulse">
            AHORA
          </div>
          <div className="hidden sm:block text-[10px] font-medium text-red-500/80 tracking-wide">
            No se repite
          </div>
        </div>
      </div>
      {/* Línea inferior animada */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full overflow-hidden">
        <div className="h-full w-full bg-gradient-to-r from-red-400 via-rose-400 to-red-400 animate-[shimmer_2.8s_linear_infinite] [background-size:200%_100%]" />
      </div>
    </div>
  </div>
</div>

            <div className="flex flex-col gap-5 w-full mt-auto">
              <Link 
                to="https://www.familiayformacion.com/tienda/p/soy-capaz-habilidades-para-la-vida-adolescente-ebwrr"
                className="w-full"
              >
                <Button 
                  className="w-full py-6 bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal hover:to-brand-coral/90 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group hover:scale-[1.02]"
                  size="lg"
                >
                  <span>COMPRAR MI PLAZA</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </Button>
              </Link>

              <p className="text-sm text-center text-gray-500 font-medium">
                <span className="text-red-500 animate-pulse">✧</span> Últimas 16 Plazas Disponibles <span className="text-red-500 animate-pulse">✧</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>



    

    </div>
  );
};

export default Pricing3;
