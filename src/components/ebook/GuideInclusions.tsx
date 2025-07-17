import React from 'react';
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Headphones,
  Map,
  MessageCircleWarning,
  Check,
  ArrowRight,
  Brain,
  MessageSquare,
  Scale
} from 'lucide-react';

const GuideInclusions = () => {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Fondos decorativos originales */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536882240095-0379873feb4e?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=85')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-beige/5 to-brand-coral/10"></div>
      </div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/10 to-transparent -skew-x-12 translate-x-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-brand-purple/15"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Encabezado - Optimizado para mobile */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-gray-200"></div>
            <span className="text-xs md:text-sm font-medium tracking-wider text-brand-coral uppercase">COMBO COMPLETO</span>
            <div className="w-8 md:w-12 h-px bg-gray-200"></div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            ¿Qué incluye <span className="text-brand-purple">este combo</span>?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Todo lo necesario para <span className="font-semibold text-brand-coral">establecer límites</span> con conexión emocional
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 items-stretch">
          {/* Mockup del eBook con CTA - Adaptado para mobile */}
          <div className="w-full lg:w-5/12 flex flex-col">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl bg-gray-50 border-4 md:border-8 border-white flex-1 flex flex-col h-full">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1742903423866-00f0f45b156c?w=1200&q=100&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/60 to-brand-teal/60 mix-blend-multiply"></div>
              <div className="relative flex-1 flex flex-col justify-center p-6 md:p-10 text-white">
                <div className="mb-6 md:mb-8">
                  <div className="w-12 md:w-20 h-1 bg-brand-coral mb-3 md:mb-5"></div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight">Límites con Conexión</h3>
                  <p className="text-white/90 mt-1 md:mt-2 text-sm md:text-base">Guía completa para padres</p>
                </div>
                <ul className="space-y-2 md:space-y-4">
                  {[
                    { icon: <BookOpen className="w-5 h-5 md:w-7 md:h-7" />, text: '10 Límites Clave' },
                    { icon: <Brain className="w-5 h-5 md:w-7 md:h-7" />, text: 'Bases Neurocientíficas' },
                    { icon: <MessageSquare className="w-5 h-5 md:w-7 md:h-7" />, text: 'Frases Claras' },
                    { icon: <Scale className="w-5 h-5 md:w-7 md:h-7" />, text: 'Ejercicios Prácticos' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-base md:text-lg">
                      <span className="mr-2 md:mr-3 text-brand-teal bg-gradient-to-br from-brand-purple/20 to-brand-coral/20 p-1.5 md:p-2 backdrop-blur-sm rounded-full">{item.icon}</span>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* CTA con diseño anterior - Adaptado para mobile */}
            <Button className="mt-4 md:mt-6 group relative overflow-hidden px-5 py-3 md:px-8 md:py-5 bg-white hover:bg-brand-teal text-gray-900 border-2 border-brand-teal rounded-lg md:rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2 md:mr-3 font-semibold text-sm md:text-base">Acceder al Material Completo</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          {/* Contenido principal - Adaptado para mobile */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* Item 1 - Guía Principal */}
              <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-100 group hover:border-brand-teal/40 transition-all h-full">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-brand-teal/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-brand-teal/20 transition-colors">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">E-book Principal (PDF)</h3>
                </div>
                <div className="aspect-square bg-white rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center p-1 md:p-2">
                  <img 
                    src="imagenes/ebook4.jpg" 
                    alt="Preview Guía" 
                    className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>10 límites con fundamentos de neurociencia</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>Frases efectivas para cada límite</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>Errores comunes que debilitan tu autoridad</span>
                  </li>
                </ul>
              </div>

              {/* Item 2 - Audio Guía */}
              <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-100 group hover:border-brand-purple/40 transition-all h-full">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-brand-purple/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-brand-purple/20 transition-colors">
                    <Headphones className="w-5 h-5 md:w-6 md:h-6 text-brand-purple" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Audio de Emergencia</h3>
                </div>
                <div className="aspect-square bg-gray-50 rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center p-1 md:p-2">
                  <img 
                    src="imagenes/eaudio.jpeg" 
                    alt="Preview Audio" 
                    className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>"Cómo poner un alto sin perder la calma"</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>Audio de 8-10 minutos para crisis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-purple mr-2 mt-0.5 flex-shrink-0" />
                    <span>Con mi voz guiándote paso a paso</span>
                  </li>
                </ul>
              </div>

              {/* Item 3 - Mapa de Límites */}
              <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-100 group hover:border-brand-coral/40 transition-all h-full">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-brand-coral/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-brand-coral/20 transition-colors">
                    <Map className="w-5 h-5 md:w-6 md:h-6 text-brand-coral" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Mapa de Límites</h3>
                </div>
                <div className="aspect-square bg-brand-beige/50 rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center p-1 md:p-2">
                  <img 
                    src="imagenes/map.jpeg" 
                    alt="Preview Mapa" 
                    className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-coral mr-2 mt-0.5 flex-shrink-0" />
                    <span>Guía práctica para definir límites</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-coral mr-2 mt-0.5 flex-shrink-0" />
                    <span>Anota conductas y cómo responderás</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-coral mr-2 mt-0.5 flex-shrink-0" />
                    <span>Formato imprimible y editable</span>
                  </li>
                </ul>
              </div>

              {/* Item 4 - Frases Clave */}
              <div className="bg-white p-4 md:p-6 rounded-lg md:rounded-xl shadow-sm border border-gray-100 group hover:border-brand-teal/40 transition-all h-full">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-brand-teal/10 p-1.5 md:p-2 rounded-lg mr-3 md:mr-4 group-hover:bg-brand-teal/20 transition-colors">
                    <MessageCircleWarning className="w-5 h-5 md:w-6 md:h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">Frases SOS (PDF)</h3>
                </div>
                <div className="aspect-square bg-brand-beige rounded-lg mb-3 md:mb-4 overflow-hidden flex items-center justify-center p-1 md:p-2">
                  <img 
                    src="imagenes/frases.jpeg" 
                    alt="Preview Frases" 
                    className="w-full h-full object-contain transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-600">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>10 frases para momentos difíciles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>Para usar con tus hijos y contigo misma</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-brand-teal mr-2 mt-0.5 flex-shrink-0" />
                    <span>Respuestas listas para aplicar</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideInclusions;