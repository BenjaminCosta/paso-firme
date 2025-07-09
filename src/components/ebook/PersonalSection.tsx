import React from 'react';
import { Button } from "@/components/ui/button";

const PersonalSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondos decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/5 via-brand-purple/3 to-transparent"></div>
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-brand-coral/10 to-brand-purple/5 blur-[80px]"></div>
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-brand-teal/5 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header más impactante */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-300"></div>
            <span className="text-sm font-medium tracking-widest text-brand-coral uppercase">Transforma tu relación</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="font-dancing text-brand-purple text-7xl italic block mb-3">Límites</span>
            que construyen conexión
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            La guía definitiva para navegar la adolescencia con equilibrio y armonía
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-stretch">
          {/* Columna visual - Mejorada con más impacto */}
          <div className="space-y-6 flex flex-col">
            {/* Imagen principal con overlay mejorado */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl h-[450px] flex-1">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Familia conectando"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-10 text-center">
                <blockquote className="text-white text-2xl/relaxed font-light">
                  <p className="mb-3">"Los límites no son barreras,</p>
                  <p>son el marco donde crece</p>
                  <p className="font-medium mt-3 text-brand-coral">la confianza mutua."</p>
                </blockquote>
              </div>
            </div>

            {/* Mini galería con efecto hover */}
            <div className="grid grid-cols-2 gap-5">
              {[
                {
                  src: "https://images.unsplash.com/photo-1549421263-6064833b071b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
                  overlay: "bg-gradient-to-br from-brand-purple/40 to-black/30",
                  text: "Comprender sus emociones"
                },
                {
                  src: "https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                  overlay: "bg-gradient-to-bl from-brand-coral/40 to-black/30",
                  text: "Diálogo que acerca"
                }
              ].map((item, index) => (
                <div key={index} className="relative rounded-2xl overflow-hidden h-48 group flex-1">
                  <img 
                    src={item.src} 
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 ${item.overlay} transition-opacity duration-300 group-hover:opacity-90`}></div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-medium text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de contenido - Mejor distribución */}
          <div className="flex flex-col space-y-6">
            {/* Bloque de presentación mejorado */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-brand-purple/5 blur-[60px]"></div>
              <div className="flex items-start space-x-5 mb-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple/10 to-brand-coral/10 flex items-center justify-center text-3xl">
                  👋
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Soy <span className="text-brand-purple">Oli</span>, tu guía
                  </h3>
                  <p className="text-gray-600">Especialista en relaciones familiares</p>
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  He acompañado a cientos de familias a transformar sus dinámicas, encontrando ese <span className="font-medium text-gray-900">punto justo</span> entre estructura y flexibilidad.
                </p>
                <p className="text-lg leading-relaxed">
                  Esta guía condensa <span className="font-medium text-brand-purple">15 años de experiencia</span> en un método práctico que realmente funciona.
                </p>
              </div>
            </div>

            {/* Bloque de valor - Más visual */}
            <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl border border-gray-100 relative overflow-hidden">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-brand-coral/5 blur-[60px]"></div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-px bg-gradient-to-r from-brand-coral to-brand-purple"></div>
                <h4 className="text-xl font-semibold text-gray-900">¿Qué hace especial esta guía?</h4>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-light text-gray-900 leading-snug">
                  No es teoría, es <span className="font-medium text-brand-purple">acción práctica</span> para:
                </p>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Decir 'no' sin dañar la relación",
                  "Detectar cuándo ceder y cuándo mantenerte firme",
                  "Comunicación que construye confianza",
                  "Autocuidado para padres resilientes",
                  "Herramientas para crisis emocionales",
                  "Mapa de límites por edades"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1 mr-3 w-6 h-6 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple text-xs">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloque CTA - Más prominente */}
            <div className="mt-auto bg-gradient-to-r from-white to-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white to-brand-purple/5 opacity-60"></div>
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-3">Transforma tu relación hoy</h4>
                  <p className="text-gray-700">
                    Accede a las herramientas probadas que están ayudando a cientos de familias.
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <Button className="py-5 px-8 bg-gradient-to-r from-brand-coral to-brand-purple hover:from-brand-purple hover:to-brand-coral text-white text-lg font-bold rounded-xl shadow-lg transition-all transform hover:scale-[1.02] w-full">
                    Descargar guía completa
                  </Button>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                    </svg>
                    <span>Pago seguro • Acceso inmediato • Garantía de 7 días</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;