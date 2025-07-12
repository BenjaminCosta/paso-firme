import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles } from 'lucide-react';

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
  <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[600px] order-2 lg:order-1">
    <img 
      src="imagenes/facilitadora2.jpg" 
      alt="Facilitadora Oli"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
    {/* Badge de experiencia premium */}
    <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-brand-teal to-brand-coral text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
      <Sparkles className="h-4 w-4" />
      <span className="font-bold">Olivia Rodriguez</span>
    </div>
  </div>

  {/* Bloque "Soy Oli" */}
  <div className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl p-10 rounded-3xl border border-white/40 shadow-2xl overflow-hidden order-1 lg:order-2">
    {/* Luces decorativas */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent opacity-70"></div>
    <div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-brand-purple/10 blur-[100px] animate-pulse-slow"></div>
    <div className="absolute -left-20 -bottom-20 w-60 h-60 rounded-full bg-brand-coral/10 blur-[80px]"></div>

    {/* Contenido */}
    <div className="relative z-10">
      {/* Header con emoji y nombre */}
      <div className="flex items-start space-x-6 mb-8">
        <div className="flex-shrink-0 relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-coral/15 border-2 border-white/40 flex items-center justify-center text-4xl shadow-lg shadow-brand-purple/10 backdrop-blur-sm">
            👋
          </div>
          <div className="absolute -inset-2 rounded-2xl border-2 border-white/20 pointer-events-none"></div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">
            Soy <span className="font-dancing text-brand-purple text-4xl">Oli</span>, tu guía
          </h3>
          <div className="inline-block bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 shadow-sm">
            <span className="text-brand-purple font-medium tracking-wide">Especialista en relaciones familiares</span>
          </div>
        </div>
      </div>

      {/* Texto dividido en 3 bloques */}
      <div className="space-y-4">
        <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Acompañé a más de <span className="font-bold text-brand-purple">100 familias</span> a poner límites con <span className="font-semibold text-brand-coral">presencia</span> y sin perder la conexión.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 delay-75">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Poner <span className="font-semibold text-brand-purple">límites en la adolescencia</span> no es controlar, es sostener tu lugar con <span className="font-semibold text-brand-coral">amor firme</span>.
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 delay-100">
          <p className="text-base sm:text-lg leading-relaxed text-gray-700">
            Esta guía no es para padres perfectos, sino para quienes eligen ser <span className="font-bold text-brand-coral">conscientes</span> y confiar en el proceso.
          </p>
        </div>
      </div>

      {/* Cierre */}
      <div className="mt-5 pt-4 border-t border-white/30">
        <div className="flex items-center space-x-2 text-brand-purple/80">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          <span className="font-medium">Método validado por +100 familias reales</span>
        </div>
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
              src="imagenes/ebook3.jpeg" 
              alt="Mockup de la guía"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 to-brand-coral/10"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
              <h3 className="text-2xl font-bold text-white">Guía práctica en formato digital</h3>
              <p className="text-white/90 mt-2">Accesible desde cualquier dispositivo</p>
            </div>
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-lg p-12 rounded-[2.5rem] border border-white/30 shadow-2xl relative overflow-hidden">
  {/* Efectos de fondo */}
  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
  <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-white/30"></div>

  
{/* Contenido principal */}
<div className="relative z-10">
  {/* Encabezado con estilo moderno y elegante */}
  <div className="text-center mb-16">
    <div className="inline-flex mb-6">
      <span className="text-xs font-semibold tracking-wider text-brand-teal uppercase bg-white/90 px-4 py-2 rounded-full border border-brand-teal/10 shadow-sm">
        Guía Esencial
      </span>
    </div>
    <h3 className="text-6xl font-dancing font-normal text-gray-900 mb-4">
      <span className=" text-brand-purple">Conectar</span> con tu adolescente
    </h3>
    <div className="w-32 h-1.5 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral mx-auto rounded-full opacity-80 mb-8"></div>
  </div>

  {/* Bloque de texto elegante */}
  <div className="max-w-3xl mx-auto text-center mb-20">
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-white">
      <p className="text-xl text-gray-700 leading-relaxed mb-6">
        Descubre el <span className=" text-brand-coral">método</span> que combina:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
          <div className="bg-brand-teal/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
            </svg>
          </div>
          <h4 className="font-medium text-gray-800">Neurociencia</h4>
          <p className="text-gray-600 text-sm mt-2">Entiende el cerebro en desarrollo</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
          <div className="bg-brand-purple/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </div>
          <h4 className="font-medium text-gray-800">Comunicación</h4>
          <p className="text-gray-600 text-sm mt-2">Diálogos que realmente funcionan</p>
        </div>
        
        <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
          <div className="bg-brand-coral/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-6 h-6 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
            </svg>
          </div>
          <h4 className="font-medium text-gray-800">Resultados</h4>
          <p className="text-gray-600 text-sm mt-2">Técnicas con garantía comprobada</p>
        </div>
      </div>
    </div>
  </div>

  {/* CTA premium con imagen de familia */}
  <div className="bg-gradient-to-br from-brand-purple to-brand-coral p-0 rounded-2xl shadow-2xl relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-10 md:p-12 text-center md:text-left">
        <h4 className="text-2xl font-bold text-white mb-4">Transforma tu dinámica familiar hoy</h4>
        <p className="text-white/90 mb-6">
          Accede a las herramientas que han ayudado a cientos de familias a reconectar con sus adolescentes.
        </p>
        <Button className="py-5 px-8 bg-white text-brand-purple hover:bg-white/90 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
          <span className="flex items-center gap-3">
            Comenzar ahora
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </Button>
      </div>
      <div className="md:w-1/2 hidden md:block h-full">
        <div className="relative h-full min-h-[300px]">
          <img 
            src="imagenes/galcaos3.jpeg" 
            alt="Padre e hija sonriendo"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/70 to-transparent"></div>
          <div className="absolute bottom-6 left-6 bg-white/90 text-brand-purple px-4 py-2 rounded-full shadow-sm">
            <span className="text-sm font-medium">+100 familias transformadas</span>
          </div>
        </div>
      </div>
    </div>
   <div className="relative z-10 text-center pb-6 pt-4 bg-white/10">
  <p className="text-white/90 text-sm flex items-center justify-center gap-2">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
    </svg>
    Acceso inmediato • Contenido 100% descargable
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