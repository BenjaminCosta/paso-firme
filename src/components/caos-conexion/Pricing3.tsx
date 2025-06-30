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
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import useSheetData4 from "@/hooks/useSheetData4";
import { Link } from "react-router-dom";

const Pricing3 = () => {
  const { data, loading, error } = useSheetData4();

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
          Transforma tu relación <br className="hidden md:block" />con tu adolescente
        </span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
        Programa de acompañamiento para padres con herramientas prácticas
        <span className="block mt-3 text-brand-coral font-semibold">¡Última oportunidad con este precio exclusivo!</span>
      </p>
    </div>

    <div className="relative group">
      {/* Efecto de borde gradiente moderno */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-teal to-brand-coral rounded-3xl opacity-20 blur-sm group-hover:opacity-30 transition duration-500" />
      
      <Card className="relative bg-white/95 backdrop-blur-md border border-gray-100 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden">
        {/* Ribbon moderno */}
        <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-coral to-brand-teal text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-2 rotate-45 scale-110">
                INSCRIPCIONES ABIERTAS
              </div>

        <CardContent className="p-8 sm:p-10">
          <div className="flex items-start gap-6 mb-8">
            <div className="p-4 bg-gradient-to-br from-brand-teal/5 to-brand-coral/5 rounded-2xl shadow-inner border border-gray-100">
              <Users className="w-8 h-8 text-brand-teal" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                Programa para Padres de Adolescentes
              </h3>
              <p className="text-gradient bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent font-medium text-lg">
                Edición limitada · Modalidad en línea
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-5">
              <div className="flex items-start gap-5">
                <div className="p-2.5 bg-brand-teal/5 rounded-xl border border-gray-100 shadow-sm">
                  <Calendar className="w-6 h-6 text-brand-teal" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Fecha de inicio</h4>
                  <p className="text-gray-700">{item?.fecha} <span className="text-red-500 font-medium text-sm"></span></p>
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

            <div className="space-y-5">
              <div className="flex items-start gap-5">
                <div className="p-2.5 bg-brand-coral/5 rounded-xl border border-gray-100 shadow-sm">
                  <Video className="w-6 h-6 text-brand-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Grabaciones</h4>
                  <p className="text-gray-700">Acceso ilimitado</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-2.5 bg-brand-coral/5 rounded-xl border border-gray-100 shadow-sm">
                  <MessageSquare className="w-6 h-6 text-brand-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Acompañamiento</h4>
                  <p className="text-gray-700">Grupo privado incluido</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-2.5 bg-brand-coral/5 rounded-xl border border-gray-100 shadow-sm">
                  <Gift className="w-6 h-6 text-brand-coral" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Promoción especial</h4>
                  <p className="text-gray-700">Descuento para parejas <span className="text-red-500 font-medium text-sm">· Oferta exclusiva</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 bg-gradient-to-r from-gray-50 to-white/50 p-5 rounded-xl border border-gray-100">
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-3">Inversión final</h4>
                <div className="flex items-end gap-3">
                  <div className="text-4xl sm:text-[2.75rem] font-extrabold text-brand-teal">$2,500 MXN</div>
                  <div className="text-base text-gray-500 mb-1.5">Promoción pareja: $2,900</div>
                </div>
                <p className="text-sm text-red-500 font-medium mt-2">
                  ⚠️ Precio aumentará en la próxima edición
                </p>
              </div>
              <div className="bg-white border-2 border-red-500 text-red-500 text-sm font-bold px-4 py-2 rounded-full self-start sm:self-center shadow-sm hover:scale-105 transition-transform">
                ¡CUPOS LIMITADOS!
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5 w-full">
            <Link 
              to="https://www.familiayformacion.com/tienda/p/soy-capaz-habilidades-para-la-vida-adolescente-ebwrr"
              className="w-full lg:w-1/2"
            >
              <Button 
                className="w-full py-6 bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple hover:to-brand-coral/90 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group hover:scale-[1.02]"
                size="lg"
              >
                <span>Reservar mi lugar ahora</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
              </Button>
            </Link>

            <Link 
              to="https://www.familiayformacion.com/tienda/p/soy-capaz-habilidades-para-la-vida-adolescente-ebwrr-9rc7y"
              className="w-full lg:w-1/2"
            >
              <Button 
                variant="outline"
                className="w-full py-6 border-2 border-brand-purple text-brand-purple hover:text-white font-semibold text-lg hover:bg-brand-purple transition-all hover:scale-[1.02]"
                size="lg"
              >
                Acceder promoción pareja
              </Button>
            </Link>
          </div>

          <p className="text-sm text-center text-gray-500 mt-5 font-medium">
            <span className="text-red-500 animate-pulse">✧</span> Las inscripciones cierran al completar los cupos disponibles <span className="text-red-500 animate-pulse">✧</span>
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-white to-brand-beige/10">
  {/* Fondo con imagen y degradado mejorado */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div 
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1648221350871-e3ae3c8d0f58?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D')] bg-cover bg-center opacity-90"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/50 to-transparent" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
    <div className="flex flex-col lg:flex-row items-center gap-8">
      
      {/* Contenido principal compacto */}
      <div className="lg:w-1/2 space-y-6 backdrop-blur-sm bg-white/50 p-8 rounded-2xl border border-white/20 shadow-lg">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white text-brand-coral rounded-full text-lg font-semibold border border-white shadow-sm">
          <AlertTriangle className="w-5 h-5" />
          ¡Última oportunidad!
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          <span className="text-brand-coral text-5xl">No</span> esperes más
        </h2>

        <ul className="space-y-3 text-lg font-semibold text-gray-800">
          <li className="flex items-start gap-3">
            <span className="text-brand-coral text-2xl mt-1">•</span>
            <span>Evita que tu hijo se cierre emocionalmente</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-coral text-2xl mt-1">•</span>
            <span>Deja de agotarte sin herramientas claras</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-brand-coral text-2xl mt-1">•</span>
            <span>Transforma por completo la relación</span>
          </li>
        </ul>

        <div className="grid grid-cols-2 gap-3 pt-4">
          <div className="flex items-center gap-2 text-lg font-medium text-gray-700 bg-white/80 p-2 rounded-lg">
            <Zap className="w-4 h-4 text-brand-teal" />
            Últimos lugares
          </div>
          <div className="flex items-center gap-2 text-lg font-medium text-gray-700 bg-white/80 p-2 rounded-lg">
            <MessageSquare className="w-4 h-4 text-brand-coral" />
            Comienza hoy
          </div>
        </div>
      </div>

      {/* Tarjeta CTA con glassmorphism */}
      <div className="lg:w-1/2 mt-6 lg:mt-0">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/40 to-brand-coral/30 rounded-2xl blur opacity-80 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-xl border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Recupera lo más valioso:
            </h3>
            <p className="font-dancing text-3xl text-brand-coral mb-5">
              Tu Conexión Familiar
            </p>

            <Link to="https://www.familiayformacion.com/tienda/p/soy-capaz-habilidades-para-la-vida-adolescente-ebwrr">
            <Button 
              className="w-full py-5 bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal/90 hover:to-brand-coral/90 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all group"
              size="lg"
            >
              <span className="flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" /> 
                <span>Iniciar transformación</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            </Link>

            <p className="text-xs text-center text-gray-500 mt-4">
              Cupos limitados • Inscripción abierta
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
