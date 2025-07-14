import React from 'react';
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle, Sparkles } from 'lucide-react';

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

      {/* Sección Autora - Diseño Premium con Imagen de Fondo */}
<div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12 border border-white/20">
  {/* Imagen de fondo con overlay */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1528458909336-e7a0adfed0a5?q=80&w=1348&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dq=80" 
      alt="Fondo abstracto"
      className="w-full h-full object-cover opacity-30"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-coral/10 via-brand-beige/20 to-brand-beige/30"></div>
  </div>

  <div className="relative z-10 p-10 lg:p-10 flex flex-col lg:flex-row items-center gap-20">
    {/* Columna izquierda - Foto y título */}
    <div className="flex flex-col items-center lg:items-start">
      {/* Foto circular con efecto */}
      <div className="relative mb-8 group">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 transform transition duration-500 group-hover:scale-105">
          <img 
            src="imagenes/facilitadora2.jpg" 
            alt="Oli - Especialista en relaciones familiares"
            className="w-full h-full object-cover grayscale-[10%]"
          />
        </div>
        {/* Efecto decorativo */}
        <div className="absolute -inset-4 rounded-full border-2 border-brand-purple/30 z-0 animate-pulse-slow group-hover:animate-none group-hover:opacity-70 transition-opacity duration-300"></div>
        {/* Puntos decorativos */}
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-coral/80 shadow-md"></div>
        <div className="absolute -bottom-2 -left-2 w-5 h-5 rounded-full bg-brand-teal/80 shadow-md"></div>
      </div>
      
      {/* Nombre y especialidad */}
      <div className="text-center lg:text-left">
        <h3 className="text-3xl font-bold text-gray-800 font-dancing tracking-tight">Olivia Rodriguez</h3>
        <p className="text-brand-coral font-medium mt-2 text-lg">Relaciones Familiares</p>
        
        {/* Línea decorativa */}
        <div className="my-5 w-16 h-0.5 bg-gradient-to-r from-brand-purple to-brand-coral mx-auto lg:mx-0"></div>
        
        {/* Badge de experiencia */}
        <div className="inline-flex items-center bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-white/50 gap-2">
          <Sparkles className="h-5 w-5 text-brand-purple" />
          <span className="font-medium text-gray-700">+100 familias</span>
        </div>
      </div>
    </div>

    {/* Columna derecha - Texto */}
    <div className="flex-1">
      <div className="space-y-3 text-gray-800">
        {/* Bloque de presentación */}
        <div className="text-3xl font-light leading-snug">
          <span className="font-normal text-brand-purple">Hola, soy Oli.</span><br />
          <span className="text-2xl">Y si estás aquí es porque ya no quieres seguir dudando si estás haciendo bien tu papel de mamá o papá.</span>
        </div>

        {/* Texto destacado */}
        <div className="pl-6 border-l-4 border-brand-purple/50 bg-white/50 p-4 rounded-r-lg backdrop-blur-sm">
          <p className="text-lg italic">
            "Poner <span className="font-semibold text-brand-purple">límites en la adolescencia</span> no es lo mismo que hacerlo en la infancia."
          </p>
        </div>

        {/* Párrafos con iconos */}
        <div className="space-y-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1 text-brand-purple">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg leading-relaxed">
              No se trata de imponer ni controlar, sino de <span className="font-semibold text-brand-coral">sostener tu lugar con amor firme</span>.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1 text-brand-teal">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-lg leading-relaxed">
              Decir <span className="italic">"hasta aquí"</span> sin romper la conexión... y sin romperte por dentro.
            </p>
          </div>
        </div>

        {/* Cierre */}
        <div className="pt-6 mt-6 border-t border-gray-200/50">
          <p className="text-lg">
            Esta guía nace de acompañar a <span className="font-semibold">cientos de familias</span> como la tuya.
          </p>
          <p className="text-xl font-medium text-brand-purple mt-4">
            Para padres <span className="text-brand-coral">conscientes</span>, no perfectos.
          </p>
          <p className="mt-6 text-lg italic text-gray-600">
            Gracias por confiar. Vamos a hacerlo juntas(os).
          </p>
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

  
<div className="relative z-10">
  {/* Encabezado */}
  <div className="text-center mb-8">
    <div className="inline-flex mb-2">
      <span className="text-xs font-semibold tracking-wider text-brand-teal uppercase bg-white/90 px-3 rounded-full border border-brand-teal/10 shadow-sm">
        Guía Esencial
      </span>
    </div>
    <h3 className="text-5xl font-dancing text-gray-900 mb-3">
      <span className="text-brand-purple">Conectar</span> con tu adolescente
    </h3>
    <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-coral mx-auto rounded-full opacity-80 mb-6"></div>
  </div>

  {/* Contenido */}
  <div className="max-w-3xl mx-auto text-center mb-10">
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white">
      <p className="text-lg text-gray-700 mb-4">
        Descubre el <span className="text-brand-coral">método</span> que combina:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z", 
           color: "teal", title: "Neurociencia", desc: "Entiende el cerebro en desarrollo"},
          {icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z", 
           color: "purple", title: "Comunicación", desc: "Diálogos que realmente funcionan"},
          {icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", 
           color: "coral", title: "Resultados", desc: "Técnicas con garantía comprobada"}
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-lg border border-gray-100 shadow-xs hover:shadow-sm transition-shadow">
            <div className={`bg-brand-${item.color}/10 w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3`}>
              <svg className="w-5 h-5 text-brand-${item.color}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/>
              </svg>
            </div>
            <h4 className="font-medium text-gray-800">{item.title}</h4>
            <p className="text-gray-600 text-xs mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* CTA */}
  <div className="bg-gradient-to-br from-brand-purple to-brand-coral p-0 rounded-xl shadow-xl relative overflow-hidden">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80')] bg-cover bg-center opacity-20"></div>
    <div className="relative z-10 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 p-8 text-center md:text-left">
        <h4 className="text-xl font-bold text-white mb-3">Transforma tu dinámica familiar hoy</h4>
        <p className="text-white/90 mb-4 text-sm">Accede a las herramientas que han ayudado a cientos de familias a reconectar con sus adolescentes.</p>
        <Button className="py-3 px-6 bg-white text-brand-purple hover:bg-white/90 font-bold rounded-lg shadow-md hover:shadow-lg transition-all">
          <span className="flex items-center gap-2 text-sm">
            Comenzar ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </Button>
      </div>
      <div className="md:w-1/2 hidden md:block h-full min-h-[250px] relative">
        <img src="imagenes/galcaos3.jpeg" alt="Padre e hija sonriendo" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/70 to-transparent"></div>
        <div className="absolute bottom-4 left-4 bg-white/90 text-brand-purple px-3 py-1 rounded-full shadow-sm text-xs">
          +100 familias transformadas
        </div>
      </div>
    </div>
    <div className="relative z-10 text-center pb-4 pt-3 bg-white/10">
      <p className="text-white/90 text-xs flex items-center justify-center gap-1">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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