import React from 'react';
import { Button } from "@/components/ui/button";
import { Bookmark, BookOpen, Check, CheckCircle, ChevronRight, Heart, Info, Shield, Sparkles } from 'lucide-react';

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
            <div className="w-16 sm:w-20 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent"></div>
            <span className="text-xs sm:text-sm font-medium tracking-widest text-brand-coral uppercase bg-white/80 px-3 sm:px-4 py-2 rounded-full backdrop-blur-sm border border-brand-coral/20">
              Transforma tu relación
            </span>
            <div className="w-16 sm:w-20 h-px bg-gradient-to-l from-transparent via-brand-purple/40 to-transparent"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 mb-6">
            Tu <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple'>Voz</span> Real
          </h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto bg-white/70 backdrop-blur-sm inline-block px-6 py-2 rounded-full border border-white/30">
            La guía definitiva para navegar la adolescencia con equilibrio y armonía
          </p>
        </div>

        {/* Contenedor principal */}
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-br from-white/5 via-white/5 to-white/10 backdrop-blur-lg">
          {/* Fondos */}
          <div className="absolute inset-0">
            <img 
      src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80" 
      alt="Fondo abstracto"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/10 via-brand-beige/20 to-brand-coral/10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-coral/10"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.2)_0%,transparent_40%)]"></div>
          </div>

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Autora + Contenido */}
            <div className="flex flex-col lg:flex-row gap-8 mb-12">
              {/* Autora */}
              <div className="flex-shrink-0 flex flex-col items-center lg:items-start">
                <div className="relative group mb-6">
                  <div className="w-32 sm:w-40 h-32 sm:h-40 rounded-full overflow-hidden border-[3px] border-white/95 shadow-xl relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/15 to-transparent z-10"></div>
                    <img 
                      src="imagenes/facilitadora2.jpg" 
                      alt="Oli - Especialista en relaciones familiares"
                      className="w-full h-full object-cover grayscale-[5%] contrast-110"
                    />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-white/30 z-0"></div>
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-coral/80 shadow-sm z-20"></div>
                </div>

                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 font-dancing tracking-tight">Olivia Rodriguez</h3>
                  <p className="text-brand-coral font-medium text-base sm:text-lg">Relaciones Familiares</p>
                  <div className="my-3 w-12 h-[1px] bg-gradient-to-r from-brand-purple to-brand-coral mx-auto lg:mx-0"></div>
                  <div className="inline-flex items-center bg-white/95 px-4 py-1.5 rounded-full text-sm shadow-xs border border-white/60 gap-2 hover:bg-white transition-all">
                    <Sparkles className="h-4 w-4 text-brand-purple" />
                    <span className="font-medium text-gray-700">+100 familias</span>
                  </div>
                </div>
              </div>

              {/* Contenido textual */}
              <div className="flex-1 space-y-6 text-gray-800">
                <h2 className="text-lg sm:text-xl lg:text-3xl font-light leading-snug tracking-tight">
                  <span className="font-normal text-brand-purple">Hola, soy Oli.</span> Si estás aquí es porque buscas <span className="text-brand-coral/90">hacer mejor</span> tu papel de mamá o papá.
                </h2>

                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Claves */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-purple/15 to-brand-purple/5 flex items-center justify-center shadow-inner">
                          <CheckCircle className="w-3.5 h-3.5 text-brand-purple" />
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        No es imponer, sino <span className="font-semibold text-brand-coral">sostener con amor firme</span>.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all border border-white/10">
                      <div className="flex-shrink-0 mt-0.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 flex items-center justify-center shadow-inner">
                          <Info className="w-3.5 h-3.5 text-brand-teal" />
                        </div>
                      </div>
                      <p className="leading-relaxed">
                        Decir <span className="italic">"hasta aquí"</span> sin romper la <span className="text-brand-purple/90">conexión emocional</span>.
                      </p>
                    </div>
                  </div>

                  {/* Cita */}
                  <div className="flex-1 bg-gradient-to-br from-brand-purple/10 via-transparent to-brand-coral/10 p-5 rounded-xl border border-white/30 backdrop-blur-md shadow-sm hover:shadow-md transition-all">
                    <p className="italic text-gray-800 mb-3 leading-relaxed">
                      "Poner <span className="font-semibold text-brand-purple">límites en la adolescencia</span> requiere un enfoque completamente diferente."
                    </p>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-brand-teal to-brand-coral rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ebook imagen */}
            <div className="relative rounded-xl overflow-hidden h-64 sm:h-72 lg:h-96 group transform transition-all hover:shadow-lg">
              <img 
                src="imagenes/ebook3.jpeg" 
                alt="Guía práctica de límites saludables"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/30 to-brand-coral/20 mix-blend-soft-light"></div>
              <div className="absolute hidden lg:block top-6 right-6 bg-white/95 p-6 rounded-lg shadow-md max-w-md backdrop-blur-sm border border-white/80 transform hover:-translate-y-1 transition-transform">
                <p className="text-lg font-light text-gray-800 leading-snug">
                  “Poner límites no debería doler. Pero cuando se trata de adolescentes…

                  <span className="font-dancing text-brand-coral text-2xl block mt-2 tracking-tight"> todo se vuelve más difícil.”</span>
                </p>
              </div>
              <div className="absolute bottom-6 text-center lg:px-0 px-4 lg:left-6">
                <div className="bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm inline-flex items-center gap-2 border border-white/10">
                  <BookOpen className="h-4 w-4 text-white" />
                  <p className="text-white font-medium text-sm">Guía para padres conscientes</p>
                </div>
                <p className="text-white/90 text-sm mt-2 ml-1">Disponible en formato digital</p>
              </div>
            </div>
          </div>
        </div>

        {/* Último bloque con CTA */}
        <div className="bg-white/90 mt-20 backdrop-blur-lg p-6 sm:p-12 rounded-[2.5rem] border border-white/30 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30"></div>
          <div className="absolute inset-0 bg-noise opacity-5"></div>

          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex mb-3">
                <span className="text-xs font-semibold tracking-wider text-brand-teal uppercase bg-white/90 px-3 py-1 rounded-full border border-brand-teal/10 shadow-sm">
                  Guía Esencial
                </span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-dancing text-gray-900 mb-4">
                <span className="text-brand-purple">Conectar</span> con tu adolescente
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral mx-auto rounded-full opacity-80 mb-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Lista */}
              <div className="bg-white/95 p-6 sm:p-8 rounded-2xl border border-white/40 shadow-lg">
                <div className="mb-6">
                  <span className="text-base sm:text-lg font-bold text-brand-teal">✔️ Esta guía es para ti si:</span>
                </div>
                <ul className="space-y-4">
                  {[
                    "Tienes un hijo entre 10 y 17 años",
                    "Sientes que estás perdiendo tu voz en casa",
                    "Quieres sostener límites sin gritar ni ceder",
                    "Te importa el vínculo, pero también el respeto",
                    "Estás cansada de repetir todo sin resultado"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mr-4 bg-brand-teal/10 p-2 rounded-full">
                        <Check className="w-5 h-5 text-brand-teal" />
                      </div>
                      <span className="text-gray-800 text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-brand-purple to-brand-coral p-6 sm:p-8 rounded-2xl shadow-xl relative overflow-hidden min-h-full flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
                  alt="Familia feliz"
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="relative z-10 text-center w-full">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-4">Transforma tu dinámica familiar hoy</h4>
                  <p className="text-white/90 mb-6">Accede a las herramientas comprobadas para reconectar con tu adolescente</p>
                  <Button className="py-4 px-8 bg-white text-brand-purple hover:bg-white/90 font-bold rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      Comenzar ahora
                      <ChevronRight className="w-5 h-5" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Efectos */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand-purple/10 blur-[80px] z-0 animate-float-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-brand-coral/10 blur-[80px] z-0 animate-float-slow-delay"></div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;
