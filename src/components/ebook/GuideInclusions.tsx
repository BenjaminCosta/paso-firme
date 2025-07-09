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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/5 to-transparent -skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-gray-200"></div>
            <span className="text-sm font-medium tracking-wider text-brand-coral uppercase">CONTENIDO DEL EBOOK</span>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ¿Qué incluye <span className="text-brand-purple">esta guía</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Herramientas <span className="font-semibold text-brand-coral">prácticas y emocionalmente inteligentes</span> para navegar la adolescencia
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Mockup del eBook - Misma altura que el contenido */}
          <div className="w-full lg:w-5/12 flex">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-50 border-8 border-white transform rotate-1 flex-1 flex flex-col">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 to-brand-teal/30 mix-blend-multiply"></div>
              
              {/* Contenido del mockup */}
              <div className="relative flex-1 flex flex-col justify-center p-10 text-white">
                <div className="mb-8">
                  <div className="w-20 h-1 bg-brand-coral mb-5"></div>
                  <h3 className="text-3xl font-bold tracking-tight">Límites con Conexión</h3>
                  <p className="text-white/90 mt-2">Guía para padres conscientes</p>
                </div>
                
                <ul className="space-y-4">
                  {[
                    { icon: <BookOpen className="w-5 h-5" />, text: '10 Límites Clave' },
                    { icon: <Brain className="w-5 h-5" />, text: 'Bases Neuroemocionales' },
                    { icon: <MessageSquare className="w-5 h-5" />, text: 'Frases Máster' },
                    { icon: <Scale className="w-5 h-5" />, text: 'Estrategias Prácticas' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-lg">
                      <span className="mr-3 text-brand-coral">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contenido principal - Ajustado para misma altura */}
          <div className="w-full lg:w-7/12 flex flex-col">
            <div className="flex-1 grid grid-cols-1 gap-10">
              {/* Lista de contenidos */}
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 text-brand-teal mr-3" />
                  <span>Contenido principal</span>
                </h3>
                
                <ul className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <BadgeCheck className="w-5 h-5 text-brand-coral" />,
                      title: '10 límites clave',
                      desc: 'Explicados con profundidad para la adolescencia'
                    },
                    {
                      icon: <Brain className="w-5 h-5 text-brand-purple" />,
                      title: 'Fundamento neuroemocional',
                      desc: 'Impacto en el desarrollo de tu hijo'
                    },
                    {
                      icon: <MessageSquare className="w-5 h-5 text-brand-teal" />,
                      title: 'Frases máster',
                      desc: 'Comunicación clara en momentos difíciles'
                    },
                    {
                      icon: <Scale className="w-5 h-5 text-brand-coral" />,
                      title: 'Estrategias prácticas',
                      desc: 'Cuando se cumple o no el límite, sin castigos'
                    },
                    {
                      icon: <AlertCircle className="w-5 h-5 text-brand-purple" />,
                      title: 'Errores comunes',
                      desc: 'Qué debilita tu autoridad sin darte cuenta'
                    },
                    {
                      icon: <MonitorCheck className="w-5 h-5 text-brand-teal" />,
                      title: 'Reflexión personal',
                      desc: 'Ejercicios para aplicar desde tu realidad'
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 mr-4 p-1.5 rounded-full bg-gray-100 text-gray-700">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bonus y CTA - Agrupados para mantener altura */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-brand-purple/5 to-brand-coral/5 p-8 rounded-3xl border border-gray-100 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <ShieldCheck className="w-6 h-6 text-brand-coral mr-3" />
                    <span>Bonus exclusivos</span>
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-5">
                    {[
                      {
                        icon: <Headphones className="w-8 h-8 text-brand-purple" />,
                        title: 'Audio de emergencia',
                        desc: 'Mantén la calma en momentos críticos'
                      },
                      {
                        icon: <Map className="w-8 h-8 text-brand-teal" />,
                        title: 'Mapa de límites',
                        desc: 'Plantilla imprimible personalizable'
                      },
                      {
                        icon: <MessageCircleWarning className="w-8 h-8 text-brand-coral" />,
                        title: 'Frases SOS',
                        desc: 'Comunicación firme y respetuosa'
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

                {/* CTA */}
                <div className="pt-2">
                  <Button className="w-full py-6 bg-gradient-to-r from-brand-coral to-brand-purple hover:from-brand-purple hover:to-brand-coral text-white text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02]">
                    Descargar combo completo — $295 MXN
                  </Button>
                  <p className="text-center text-gray-500 mt-3 text-sm flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span>Pago seguro • Acceso inmediato • Garantía de 7 días</span>
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