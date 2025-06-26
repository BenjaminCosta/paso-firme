import { Quote, Award, Users, MessageSquare, Heart, Sparkles } from "lucide-react";

const Facilitator3 = () => {
  return (
    <section className="py-24 px-10 bg-white relative overflow-hidden">
      {/* Efectos de fondo modernos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-brand-teal/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-coral/5 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-brand-beige/10 rounded-full blur-[80px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex flex-col gap-12 items-center lg:flex-row-reverse">
          {/* Columna de contenido - AHORA PRIMERO EN MOBILE */}
          <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
            {/* Encabezado */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 px-5 py-2 bg-white rounded-full text-brand-coral text-sm font-bold shadow-sm border border-brand-beige/50">
                <Award className="h-5 w-5" />
                <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
                  ESPECIALISTA CERTIFICADA
                </span>
              </span>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="font-dancing text-brand-coral text-6xl md:text-7xl">Olivia Rodríguez</span> 
              </h1>
              
              <div className="h-1.5 w-24 bg-gradient-to-r from-brand-teal to-brand-coral rounded-full" />
              
              <p className="text-xl text-gray-600">
                Transformando relaciones familiares a través de la{" "}
                <span className="font-medium text-brand-teal">educación emocional</span>
              </p>
            </div>

            {/* Contenido principal */}
            <div className="space-y-6">
              <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3">
                  <Users className="h-6 w-6 text-brand-teal" />
                  <span className="border-b-2 border-brand-teal/20 pb-1">Mi Experiencia</span>
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral">▹</span>
                    <span><strong>Asesora familiar</strong> y <strong>coach de adolescentes</strong> con más de 15 años de experiencia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral">▹</span>
                    <span>Ha impactado a <strong>más de 1 millón de familias</strong> mundialmente</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-coral">▹</span>
                    <span>Especialista en <strong>neurociencia adolescente</strong> y <strong>disciplina positiva</strong></span>
                  </li>
                </ul>
              </div>

              {/* Testimonio destacado */}
              <div className="p-6 bg-gradient-to-br from-white to-brand-beige/20 rounded-xl border border-brand-beige/50 shadow-sm group hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-brand-coral/10 rounded-xl group-hover:bg-brand-coral/20 transition-colors">
                    <Quote className="h-6 w-6 text-brand-coral rotate-180" />
                  </div>
                  <div>
                    <p className="text-lg italic text-gray-800 mb-3">
                      "Sé lo que es querer hacerlo todo bien y aún sentirte perdido. Por eso creé este programa: para guiarte en reconectar con tu adolescente."
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Heart className="h-4 w-4 text-brand-coral" />
                      <span>Madre y profesional apasionada</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón CTA premium */}
            <button className="mt-6 px-10 py-5 bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal/90 hover:to-brand-coral/90 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-brand-teal/80 to-brand-coral/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center justify-center gap-3 text-lg">
                <MessageSquare className="h-5 w-5" />
                <span>
                  Quiero comenzar este viaje contigo
                </span>
                <span className="ml-2 group-hover:translate-x-2 transition-transform duration-200">
                  &rarr;
                </span>
              </span>
            </button>
          </div>

          {/* Columna de imagen - AHORA DEBAJO EN MOBILE */}
          <div className="lg:w-1/2 relative order-2 lg:order-1">
            <div className="relative group">
              {/* Efecto de borde animado */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-brand-teal/30 to-brand-coral/20 opacity-70 group-hover:opacity-100 blur-md transition-all duration-500" />
              
              {/* Contenedor principal de imagen */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white shadow-2xl transform group-hover:-translate-y-2 transition-transform duration-300">
                <div className="aspect-[4/5] w-full bg-gray-100 flex items-center justify-center">
                  <img 
                    src="/imagenes/facilitadora3.jpeg" 
                    alt="Olivia Rodríguez"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Badge de experiencia premium */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-brand-teal to-brand-coral text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  <span className="font-bold">15+ años</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilitator3;