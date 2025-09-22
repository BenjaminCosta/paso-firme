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
  Star,
  Shield,
  Brain,
  BookOpen,
  X,
  ChevronDown,
  HelpCircle,
  Download,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const workshopDate = "27 de Septiembre, 2023";
  const workshopTime = "7:00 PM (Hora CDMX)";
  const workshopDuration = "90 minutos";
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: Video,
      title: "Taller en vivo",
      description: "90 minutos por Zoom con Olivia"
    },
    {
      icon: Download,
      title: "Grabación",
      description: "Disponible por 7 días después del taller"
    },
    {
      icon: BookOpen,
      title: "Guía descargable",
      description: "Frases, ideas clave y recordatorios visuales"
    },
    {
      icon: Shield,
      title: "Herramientas prácticas",
      description: "Aplicables desde el primer día"
    },
    {
      icon: Users,
      title: "Comunidad de apoyo",
      description: "Padres que también están aprendiendo"
    },
    {
      icon: Brain,
      title: "Contenido respaldado",
      description: "Por neurociencia y educación emocional"
    }
  ];

  // Definición de keyframes para animaciones
  const floatAnimation = {
    '0%, 100%': { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-20px)' },
  };

  const spinAnimation = {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 py-12 md:py-24 px-4 relative overflow-hidden [&_*]:transition-all [&_*]:duration-300">
      {/* Elementos decorativos modernos */}
      <div className="absolute inset-0">
        {/* Gradientes principales con mezcla de colores */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(139,92,246,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(45,212,191,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.05),transparent_70%)]" />
        </div>
        
        {/* Formas flotantes con gradientes */}
        <div className="absolute top-0 left-0 w-[45rem] h-[45rem] bg-gradient-to-br from-purple-200/20 via-brand-teal/10 to-indigo-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-tl from-brand-teal/20 via-purple-300/20 to-indigo-300/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl animate-float-delay-slow" />
        
        {/* Patrones de puntos modernos */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 15px 15px, rgba(139,92,246,0.1) 2px, transparent 0),
              radial-gradient(circle at 35px 35px, rgba(45,212,191,0.1) 2px, transparent 0),
              radial-gradient(circle at 25px 25px, rgba(99,102,241,0.1) 1px, transparent 0)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Formas geométricas con rotación */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-purple-300/30 rounded-xl rotate-45 animate-spin-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-2 border-brand-teal/20 rounded-full animate-reverse-spin-slow" />
          <div className="absolute top-2/3 left-1/3 w-40 h-40 border border-indigo-300/30 rounded-lg -rotate-12 animate-float-rotate" />
          
          {/* Elementos de diseño adicionales */}
          <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-purple-200/10 to-brand-teal/10 rounded-lg rotate-12 animate-float-rotate" />
          <div className="absolute bottom-1/3 left-1/4 w-16 h-16 bg-gradient-to-tl from-brand-teal/10 to-purple-200/10 rounded-xl -rotate-12 animate-float-rotate-reverse" />
          
          {/* Círculos pulsantes */}
          <div className="absolute top-1/3 right-1/3 w-12 h-12 border border-purple-200/30 rounded-full animate-ping-slow" />
          <div className="absolute bottom-2/3 left-2/3 w-8 h-8 border border-brand-teal/20 rounded-full animate-ping-slow [animation-delay:1s]" />
          
          {/* Líneas decorativas con gradiente */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-[linear-gradient(45deg,transparent_45%,rgba(139,92,246,0.03)_50%,transparent_55%)] animate-pulse" />
            <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[linear-gradient(-45deg,transparent_45%,rgba(45,212,191,0.03)_50%,transparent_55%)] animate-pulse" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-brand-purple to-purple-700 text-white rounded-full text-sm md:text-base font-bold mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span>TALLER ESPECIAL PARA PADRES</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-purple to-purple-700 bg-clip-text text-transparent">
              Pubertad y Adolescencia
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-10">
            Guía para padres: comprende los cambios, fortalece vínculos y aprende a acompañar a tu hijo/a
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Calendar className="w-5 h-5 text-brand-purple" />
              <span className="text-gray-700">{workshopDate}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Clock className="w-5 h-5 text-brand-purple" />
              <span className="text-gray-700">{workshopTime}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Video className="w-5 h-5 text-brand-purple" />
              <span className="text-gray-700">{workshopDuration}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Sección de características */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute right-0 top-0 w-64 h-64 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-200/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-brand-purple via-brand-teal to-purple-600 bg-clip-text text-transparent mb-8">
                ¿Qué aprenderás en este taller?
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="group relative"
                    onClick={() => setActiveFeature(index)}
                  >
                    {/* Card Background con efectos */}
                    <div className={`absolute -inset-0.5 rounded-lg transition-all duration-500 ${
                      activeFeature === index
                        ? 'bg-gradient-to-br from-brand-purple via-brand-teal to-purple-500 opacity-50 blur-[1px]'
                        : 'bg-gradient-to-br from-transparent to-transparent group-hover:from-brand-purple/30 group-hover:via-brand-teal/30 group-hover:to-purple-500/30 opacity-0 group-hover:opacity-100 blur-[1px]'
                    }`} />
                    
                    {/* Card Content */}
                    <div className={`relative p-4 rounded-lg backdrop-blur-sm cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? 'bg-white/90 shadow-md transform -translate-y-0.5'
                        : 'bg-white/60 group-hover:bg-white/80 group-hover:shadow-sm group-hover:-translate-y-0.5'
                    }`}>
                      <div className="flex items-start gap-3">
                        {/* Icono con efectos */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          activeFeature === index
                            ? 'bg-gradient-to-br from-brand-purple/20 via-brand-teal/20 to-purple-500/20'
                            : 'bg-purple-100/50 group-hover:bg-gradient-to-br group-hover:from-brand-purple/10 group-hover:via-brand-teal/10 group-hover:to-purple-500/10'
                        }`}>
                          <feature.icon className={`w-5 h-5 transition-all duration-300 ${
                            activeFeature === index
                              ? 'text-brand-purple transform scale-110'
                              : 'text-gray-600 group-hover:text-brand-teal group-hover:scale-105'
                          }`} />
                        </div>

                        {/* Contenido con animaciones */}
                        <div>
                          <h3 className={`font-semibold transition-all duration-300 ${
                            activeFeature === index
                              ? 'text-brand-purple'
                              : 'text-gray-800 group-hover:text-brand-teal'
                          }`}>
                            {feature.title}
                          </h3>
                          <p className={`text-sm mt-0.5 transition-all duration-300 ${
                            activeFeature === index
                              ? 'text-gray-700'
                              : 'text-gray-600 group-hover:text-gray-700'
                          }`}>
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative dot */}
                      <div className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        activeFeature === index
                          ? 'bg-brand-purple/70 scale-125'
                          : 'bg-gray-300 group-hover:bg-brand-teal/50 group-hover:scale-110'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-brand-teal/10 to-purple-300/20 opacity-30 rounded-2xl blur-xl" />
                <div className="relative bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-200/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 bg-gradient-to-br from-brand-purple/10 to-brand-teal/10 rounded-xl">
                      <Users className="w-6 h-6 text-brand-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent mb-2">
                        Beneficio exclusivo
                      </h3>
                      <p className="text-gray-700">
                        Acceso a <span className="text-brand-purple font-semibold">comunidad privada</span> donde podrás compartir experiencias y hacer preguntas directamente a Olivia.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de precio y CTA */}
          <div className="flex flex-col">
            <div className="bg-gradient-to-br from-brand-purple to-purple-700 text-white rounded-2xl p-8 shadow-xl mb-6 flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Taller Completo</h2>
                  <p className="opacity-90">Precio de lanzamiento exclusivo</p>
                </div>
                <div className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  ÚLTIMAS 16 PLAZAS
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-5xl font-bold">$690</span>
                  <span className="text-xl opacity-90 mb-1">MXN</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="line-through opacity-70">$890 MXN</span>
                  <span className="bg-white/20 px-2 py-1 rounded text-xs">AHORRA 23%</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <HeartHandshake className="w-5 h-5" />
                  <span>Incluye todos los materiales y acceso a la comunidad</span>
                </div>
                
                <div className="bg-white/10 p-4 rounded-xl mb-4">
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-semibold">Oferta por tiempo limitado</span>
                  </div>
                  <p className="text-sm opacity-90">Este precio especial está disponible sólo por esta semana</p>
                </div>
              </div>

              <Link to="https://www.familiayformacion.com/tienda/p/pubertad-adolescencia">
                <Button className="w-full py-6 bg-white text-brand-purple hover:bg-gray-100 font-bold text-lg shadow-lg">
                  <span>RESERVAR MI LUGAR AHORA</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Zoom preview mejorado */}
            <div className="relative group rounded-2xl overflow-hidden">
              {/* Efectos de fondo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-purple via-brand-teal to-purple-500 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-300" />
              <div className="relative rounded-xl overflow-hidden">
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent opacity-80 transition-opacity duration-300" />
                
                <img
                  src="/imagenes/zoom.png"
                  alt="Sesiones en Zoom con Olivia"
                  className="w-full h-auto object-cover"
                />
                
                {/* Contenido superpuesto */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="transform group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Video className="w-5 h-5 text-white" />
                      <span className="text-white font-medium text-sm">Sesión en vivo</span>
                    </div>
                    <h4 className="text-white text-xl font-bold mb-2">
                      Sesiones interactivas con Olivia
                    </h4>
                    <p className="text-white/90 text-sm">
                      Participa, pregunta y aprende en tiempo real
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;