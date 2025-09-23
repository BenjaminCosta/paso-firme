import {
  Calendar,
  Clock,
  Users,
  Video,
  Gift,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  CheckCircle,
  HeartHandshake,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const workshopDate = "27 de Septiembre, 2023";
  const workshopTime = "7:00 PM (Hora CDMX)";
  const workshopDuration = "90 minutos";

  return (
    <div className="space-y-16">
      <section
        id="pricing"
        className="py-16 md:py-24 px-4 sm:px-0 relative overflow-hidden bg-gradient-to-br from-white via-brand-red/5 to-white"
      >
        {/* Fondos animados más sutiles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10% right-10% w-72 h-72 bg-brand-pink/10 rounded-full blur-[100px] animate-float" />
          <div className="absolute bottom-10% left-10% w-80 h-80 bg-brand-blue/10 rounded-full blur-[110px] animate-float-delay" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-brand-red/10 rounded-full blur-[90px] animate-float-rotate" />
        </div>

        <div className="container mx-auto px-2 md:px-4 max-w-5xl relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white border-2 border-brand-pink text-brand-pink rounded-full text-sm md:text-base font-bold mb-5 md:mb-6 shadow-sm hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
              <span>TALLER ESPECIAL PARA PADRES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-4 md:mb-5 leading-tight">
              <span className="bg-gradient-to-r from-brand-red to-brand-pink bg-clip-text text-transparent">
                Pubertad y Adolescencia:<br className="hidden md:block" />Guía para Padres
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprende los cambios, fortalece vínculos y aprende a acompañar a tu hijo/a en esta etapa crucial del desarrollo
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Left side - Benefits */}
            <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg border border-brand-pink/30">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Qué incluye el programa:</h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Taller en vivo de 90 minutos</strong> por Zoom</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Grabación disponible</strong> por 7 días</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Guía descargable</strong> con frases, ideas clave y recordatorios visuales</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Herramientas prácticas</strong> que puedes aplicar desde ese mismo día</span>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-brand-blue mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Comunidad de apoyo</strong> de padres que también están aprendiendo</span>
                </li>
                <li className="flex items-start gap-4">
                  <Gift className="w-6 h-6 text-brand-pink mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Contenido respaldado</strong> por neurociencia, disciplina positiva y educación emocional</span>
                </li>
              </ul>

              {/* Zoom image */}
              <div className="mt-8 rounded-xl overflow-hidden border border-brand-blue/30 shadow-sm">
                <img 
                  src="/imagenes/zoom.png" 
                  alt="Sesiones en Zoom con Olivia"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right side - Pricing card */}
            <div className="lg:w-1/2 relative group">
              {/* Efecto de borde gradiente moderno */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-blue to-brand-pink rounded-3xl opacity-20 blur-sm group-hover:opacity-30 transition duration-500" />
              
              <Card className="relative bg-white/95 backdrop-blur-md border border-brand-pink/30 shadow-2xl hover:shadow-3xl transition-all duration-300 group-hover:-translate-y-2 overflow-hidden h-full">
                {/* Ribbon moderno */}
                <div className="absolute top-0 right-0 bg-gradient-to-l from-brand-pink to-brand-blue text-white text-xs font-bold px-3 py-1 transform translate-x-8 translate-y-2 rotate-45 scale-110">
                  ÚLTIMAS 16 PLAZAS
                </div>

                <CardContent className="p-8 sm:p-10 flex flex-col h-full">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="p-4 bg-gradient-to-br from-brand-blue/5 to-brand-pink/5 rounded-2xl shadow-inner border border-brand-pink/30">
                      <Users className="w-8 h-8 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                        Taller Completo
                      </h3>
                      <p className="text-gradient bg-gradient-to-r from-brand-blue to-brand-pink bg-clip-text text-transparent font-medium text-lg">
                        Precio de Lanzamiento
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <div className="space-y-5">
                      <div className="flex items-start gap-5">
                        <div className="p-2.5 bg-brand-red/10 rounded-xl border border-brand-red/20 shadow-sm">
                          <Calendar className="w-6 h-6 text-brand-red" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">Fecha</h4>
                          <p className="text-gray-700">{workshopDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="p-2.5 bg-brand-blue/10 rounded-xl border border-brand-blue/20 shadow-sm">
                          <Clock className="w-6 h-6 text-brand-blue" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">Hora</h4>
                          <p className="text-gray-700">{workshopTime}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-5">
                        <div className="p-2.5 bg-brand-pink/10 rounded-xl border border-brand-pink/20 shadow-sm">
                          <Video className="w-6 h-6 text-brand-pink" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">Duración</h4>
                          <p className="text-gray-700">{workshopDuration}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 bg-gradient-to-r from-brand-red/5 to-brand-pink/5 p-6 rounded-xl border border-brand-red/20">
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg mb-3">Inversión</h4>
                        <div className="space-y-2">
                          <div className="flex items-end gap-3">
                            <p className="text-4xl font-bold text-brand-red drop-shadow-md">
                              $690 MXN
                            </p>
                            <div className="text-sm text-gray-500 mb-1">
                              (~$38 USD)
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm text-gray-500 line-through">$890 MXN</p>
                            <span className="px-2 py-0.5 bg-brand-pink/10 text-brand-pink text-xs font-semibold rounded-full">PRECIO PREVENTA</span>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <HeartHandshake className="w-5 h-5 text-brand-blue" />
                          <p className="text-sm text-brand-red font-medium">
                            Incluye grabación + guía descargable + comunidad de apoyo
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Barra de urgencia mejorada */}
                    <div role="note" aria-live="polite" className="group mt-4 relative rounded-2xl">
                      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-blue opacity-70 group-hover:opacity-100 blur-[1px] transition-opacity duration-500" />
                      <div className="relative overflow-hidden rounded-[calc(theme(borderRadius.2xl)-1px)] bg-white/90 backdrop-blur-sm border border-brand-pink/20">
                        <div className="relative px-4 sm:px-5 py-3 flex flex-col sm:flex-row sm:items-start gap-3">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <div className="p-2 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-red/20 text-brand-pink shadow-inner ring-1 ring-brand-pink/40">
                              <AlertTriangle className="w-5 h-5 animate-pulse" />
                            </div>
                            <div>
                              <p className="text-[11px] font-semibold tracking-[0.12em] text-brand-pink/90 mb-0.5">
                                OFERTA LIMITADA
                              </p>
                              <p className="text-sm leading-snug text-brand-red font-medium">
                                Única semana con este <span className="font-bold underline decoration-brand-pink/60 decoration-2 underline-offset-2">precio especial</span>
                              </p>
                            </div>
                          </div>
                          <div className="flex-1" />
                          <div className="flex sm:flex-col items-end sm:items-center justify-between sm:justify-start gap-2 sm:gap-1 self-stretch">
                            <div className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-brand-pink to-brand-red text-white text-[10px] font-bold tracking-wide shadow-lg shadow-brand-red/25 animate-pulse">
                              AHORA
                            </div>
                            <div className="hidden sm:block text-[10px] font-medium text-brand-pink/80 tracking-wide">
                              No se repite
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 w-full mt-auto">
                    <Link 
                      to="https://www.familiayformacion.com/tienda/p/pubertad-adolescencia"
                      className="w-full"
                    >
                      <Button 
                        className="w-full py-6 bg-gradient-to-r from-brand-red to-brand-pink hover:from-brand-red/90 hover:to-brand-pink/90 text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-3 group hover:scale-[1.02]"
                        size="lg"
                      >
                        <span>SÍ, QUIERO ENTENDER A MI HIJO Y ACOMPAÑARLO SIN MIEDO</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                      </Button>
                    </Link>

                    <div className="text-center space-y-2">
                      <p className="text-sm text-brand-red font-medium">
                        <span className="text-brand-pink">💝</span> No esperes a que sea más difícil. Este taller es el paso más claro, amoroso y realista que puedes dar hoy.
                      </p>
                      <p className="text-xs text-gray-500">
                        <Clock className="w-4 h-4 inline mr-1 text-brand-blue" />
                        Inscripciones abiertas hasta el 26 de Septiembre
                      </p>
                    </div>
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

export default Pricing;
