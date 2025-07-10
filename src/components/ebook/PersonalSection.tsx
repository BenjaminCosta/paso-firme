import React from 'react';
import { Button } from "@/components/ui/button";

const PersonalSection = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Fondos decorativos */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-purple/20 via-brand-purple/10 to-transparent"></div>
        <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-brand-coral/15 to-brand-purple/10 blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center space-x-4 mb-8">
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent"></div>
            <span className="text-sm font-medium tracking-widest text-brand-coral uppercase bg-white/80 px-4 py-2 rounded-full backdrop-blur-sm border border-brand-coral/20">
              Transforma tu relación
            </span>
            <div className="w-20 h-px bg-gradient-to-l from-transparent via-brand-purple/40 to-transparent"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-semibold text-gray-900 mb-6 ">
            Tu <span className=' text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to to-brand-purple'>Voz</span> Real
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-white/30">
            La guía definitiva para navegar la adolescencia con equilibrio y armonía
          </p>
        </div>

        {/* Primera fila: Presentación con foto de la facilitadora */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Foto de la facilitadora */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Facilitadora Oli"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
          </div>

          {/* Bloque "Soy Oli" */}
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-3xl border border-white/30 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/50 rounded-3xl"></div>
            <div className="absolute -right-20 -top-20 w-60 h-60 rounded-full bg-brand-purple/10 blur-[80px]"></div>
            <div className="relative z-10">
              <div className="flex items-start space-x-6 mb-8">
                <div className="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-purple/15 to-brand-coral/10 border border-white/30 flex items-center justify-center text-4xl shadow-inner">
                  👋
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Soy <span className="font-dancing text-brand-purple text-4xl">Oli</span>, tu guía
                  </h3>
                  <p className="text-gray-600 bg-white/50 px-3 py-1 rounded-full inline-block border border-white/30">Especialista en relaciones familiares</p>
                </div>
              </div>
              <div className="space-y-5 text-gray-700">
                <p className="text-lg leading-relaxed bg-white/70 p-4 rounded-xl border border-white/30 backdrop-blur-sm">
                  He acompañado a cientos de familias a transformar sus dinámicas, encontrando ese <span className="font-medium text-gray-900">punto justo</span> entre estructura y flexibilidad.
                </p>
                <p className="text-lg leading-relaxed bg-white/70 p-4 rounded-xl border border-white/30 backdrop-blur-sm">
                  Esta guía condensa <span className="font-medium text-brand-purple">15 años de experiencia</span> en un método práctico que realmente funciona.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila: Quote + Mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bloque con quote */}
          <div className="bg-gradient-to-br from-brand-purple/5 to-brand-coral/5 p-10 rounded-3xl border border-white/30 shadow-lg relative overflow-hidden h-full">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10 h-full flex flex-col justify-center">
              <blockquote className="text-3xl font-light text-gray-900 leading-snug mb-6">
                <p className="mb-4">"Poner límites no debería doler.</p>
                <p>Pero cuando se trata de adolescentes...</p>
                <p className="font-dancing text-brand-coral text-4xl mt-4">todo se vuelve más difícil."</p>
              </blockquote>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-coral rounded-full"></div>
            </div>
          </div>

          {/* Mockup de la guía */}
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[400px] group">
            <img 
              src="https://images.unsplash.com/photo-1660155039357-5591f19761a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" 
              alt="Mockup de la guía"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Guía práctica en formato digital</h3>
              <p className="text-white/90 mt-2">Accesible desde cualquier dispositivo</p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/30 shadow-2xl relative overflow-hidden">
  {/* Efectos de fondo */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-10"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30"></div>
  
  {/* Contenido principal */}
  <div className="relative z-10">
    {/* Encabezado con estilo minimalista */}
    <div className="text-center mb-12">
      <div className="inline-block mb-6">
        <span className="text-sm font-medium tracking-widest text-brand-coral uppercase bg-white px-4 py-2 rounded-full border border-brand-coral/20">
          Valor único
        </span>
      </div>
      <h3 className="text-4xl font-light text-gray-900 mb-4">
        <span className="font-dancing text-brand-purple text-5xl">Por qué</span> esta guía es diferente
      </h3>
      <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-coral mx-auto rounded-full"></div>
    </div>

    {/* Bloque de texto elegante */}
    <div className="max-w-3xl mx-auto text-center mb-16">
      <p className="text-xl text-gray-700 leading-relaxed mb-8">
        No es solo otro libro de consejos. Es un <span className="font-medium text-brand-purple">sistema probado</span> que combina neurociencia, psicología adolescente y años de experiencia en terreno.
      </p>
    </div>

    {/* CTA premium */}
    <div className="bg-gradient-to-r from-brand-purple/90 to-brand-coral/90 p-10 rounded-2xl shadow-xl relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center opacity-15"></div>
      <div className="relative z-10 text-center">
        <h4 className="text-2xl font-bold text-white mb-4">Transformación familiar garantizada</h4>
        <p className="text-white/90 mb-6 max-w-xl mx-auto">
          Obtén acceso inmediato a todas las herramientas y comienza a ver cambios desde la primera semana.
        </p>
        <Button className="py-5 px-12 bg-white text-brand-purple hover:bg-white/95 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
          <span className="flex items-center gap-3">
            Descargar guía completa
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </Button>
        <p className="mt-5 text-white/80 text-sm flex items-center justify-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          Garantía de satisfacción de 7 días
        </p>
      </div>
    </div>
  </div>

  {/* Elementos decorativos */}
  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-[80px]"></div>
  <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-coral/10 blur-[80px]"></div>
</div>
      </div>
    </section>
  );
};

export default PersonalSection;