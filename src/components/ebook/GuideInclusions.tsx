import React from 'react';
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Brain,
  MessageSquare,
  Scale,
  AlertCircle,
  MonitorCheck,
  Headphones,
  Map,
  MessageCircleWarning,
  BadgeCheck,
  ShieldCheck
} from 'lucide-react';

const GuideInclusions = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=85')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-beige/5 to-brand-coral/10"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/5 to-transparent -skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gray-200"></div>
            <span className="text-sm font-medium tracking-wider text-brand-coral uppercase">COMBO COMPLETO</span>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué incluye <span className="text-brand-purple">este combo</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo necesario para <span className="font-semibold text-brand-coral">establecer límites</span> con conexión emocional
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Mockup del eBook */}
          <div className="w-full lg:w-5/12 flex">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border-8 border-white flex-1 flex flex-col h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/60 to-brand-teal/60 mix-blend-multiply"></div>
              <div className="relative flex-1 flex flex-col justify-center p-10 text-white">
                <div className="mb-8">
                  <div className="w-20 h-1 bg-brand-coral mb-5"></div>
                  <h3 className="text-3xl font-bold tracking-tight">Límites con Conexión</h3>
                  <p className="text-white/90 mt-2">Guía completa para padres</p>
                </div>
                <ul className="space-y-4">
                  {[
                    { icon: <BookOpen className="w-7 h-7" />, text: '10 Límites Clave' },
                    { icon: <Brain className="w-7 h-7" />, text: 'Bases Neurocientíficas' },
                    { icon: <MessageSquare className="w-7 h-7" />, text: 'Frases Claras' },
                    { icon: <Scale className="w-7 h-7" />, text: 'Ejercicios Prácticos' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <span className="mr-3 text-brand-teal bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-2 backdrop-blur-sm rounded-full">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="flex-1 grid grid-cols-1 gap-10">
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 text-brand-teal mr-3" />
                  <span>Contenido principal</span>
                </h3>
                <div className="space-y-6">
                  <div className="p-5 bg-brand-beige/10 rounded-xl border border-brand-beige/20">
                    <h4 className="font-bold text-brand-coral mb-3 flex items-center">
                      <BadgeCheck className="w-5 h-5 mr-2" />
                      1. Guía descargable (e-book principal)
                    </h4>
                    <ul className="space-y-3 pl-7 text-gray-700">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>10 límites claros explicados con fundamentos de neurociencia</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Frases efectivas para comunicar cada límite</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Errores comunes que debilitan tu autoridad</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>Ejercicios de reflexión para aplicar los conceptos</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-brand-teal/10 rounded-xl border border-brand-teal/20">
                    <h4 className="font-bold text-brand-teal mb-3 flex items-center">
                      <Headphones className="w-5 h-5 mr-2" />
                      2. Mini audio de emergencia
                    </h4>
                    <p className="text-gray-700 pl-7">
                      <span className="font-medium">"Cómo poner un alto sin perder la calma"</span> - Audio de 8-10 minutos con mi voz para escuchar en momentos de crisis
                    </p>
                  </div>

                  <div className="p-5 bg-brand-purple/10 rounded-xl border border-brand-purple/20">
                    <h4 className="font-bold text-brand-purple mb-3 flex items-center">
                      <Map className="w-5 h-5 mr-2" />
                      3. Hoja adicional: "Mapa de límites claros"
                    </h4>
                    <p className="text-gray-700 pl-7">
                      Plantilla práctica donde puedes anotar: qué conductas ya no permites, cómo lo expresarás y qué harás si se repite
                    </p>
                  </div>

                  <div className="p-5 bg-brand-coral/10 rounded-xl border border-brand-coral/20">
                    <h4 className="font-bold text-brand-coral mb-3 flex items-center">
                      <MessageCircleWarning className="w-5 h-5 mr-2" />
                      4. PDF visual: "Frases SOS para límites con firmeza"
                    </h4>
                    <p className="text-gray-700 pl-7">
                      10 frases prácticas listas para usar en momentos difíciles (tanto con tus hijos como contigo misma)
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gradient-to-b from-white/80 via-white/60 to-brand-coral/10 backdrop-blur-lg p-8 rounded-3xl border border-gray-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ShieldCheck className="w-6 h-6 text-brand-coral mr-3" />
                    <span>Beneficios exclusivos</span>
                  </h3>
                  <div className="grid md:grid-cols-3 gap-5">
                    {[
                      {
                        icon: <Brain className="w-8 h-8 text-brand-purple" />,
                        title: 'Base científica',
                        desc: 'Fundamentos de neurociencia aplicados'
                      },
                      {
                        icon: <AlertCircle className="w-8 h-8 text-brand-teal" />,
                        title: 'Errores comunes',
                        desc: 'Qué evitar al establecer límites'
                      },
                      {
                        icon: <MonitorCheck className="w-8 h-8 text-brand-coral" />,
                        title: 'Enfoque práctico',
                        desc: 'Herramientas listas para aplicar'
                      }
                    ].map((item, index) => (
                      <div key={index} className="bg-white/90 p-5 rounded-xl border border-white shadow-sm">
                        <div className="mb-3 p-2 rounded-full bg-white inline-flex shadow-sm border border-gray-100">
                          {item.icon}
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button className="w-full py-6 bg-gradient-to-r from-brand-coral to-brand-purple hover:from-brand-purple hover:to-brand-coral text-white text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
                    Descargar combo completo
                  </Button>
                  <p className="text-center text-gray-500 mt-3 text-sm flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span>Pago seguro • Acceso inmediato • Contenido exclusivo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideInclusions;