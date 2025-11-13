import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const ProgramDetails = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <div className="">
    {/* Sección FAQ con Acordeón */}
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Efectos de fondo modernos con background-attachment fixed */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-brand-pink/5 to-brand-blue/10 bg-fixed"></div>
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-brand-blue/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-brand-red/10 rounded-full z-0 hidden md:block"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-brand-pink/30 text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 sm:mb-6">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight">
              Preguntas que otros padres{" "}
              <span className="font-dancing text-brand-red">también tuvieron</span>
            </h2>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-6 sm:mb-8"></div>
          </div>

          {/* Preguntas y respuestas siempre visibles */}
          <div className="bg-white/90 rounded-2xl p-6 sm:p-10 shadow-xl border border-brand-pink/30 space-y-8">
            
            {/* Pregunta 1 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Necesito mucho tiempo a la semana?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Solo una hora a la semana. Las herramientas son aplicables en la vida diaria.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Qué pasa si no puedo conectarme a las sesiones en vivo?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Todas las sesiones quedan grabadas. Puedes verlas cuando quieras.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Funciona si soy mamá o papá soltero?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Sí. Las estrategias se adaptan a cualquier tipo de familia.
              </p>
            </div>

            {/* Pregunta 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Y si mi relación con mi hijo está muy dañada?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Precisamente este programa está hecho para eso. No necesitas que él cambie; aprenderás cómo reconectar desde ti.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-red/5 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-blue/5 blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
    </section>
     
      {/* Sección CTA Final */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-brand-sand via-white to-brand-pink/10">
  {/* Fondo con imagen y degradado mejorado */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div 
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1648221350871-e3ae3c8d0f58?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D')] bg-cover bg-center opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-sand/80 via-white/70 to-brand-pink/20" />
  </div>

  {/* Formas geométricas decorativas */}
  <div className="absolute top-20 right-10 w-20 h-20 border-2 border-brand-blue/15 rotate-45 z-0 hidden md:block"></div>
  <div className="absolute bottom-40 left-20 w-16 h-16 bg-brand-pink/20 rounded-full z-0 hidden sm:block"></div>
  <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-brand-pink/10 rounded-lg rotate-12 z-0 hidden lg:block"></div>

  <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
    <div className="flex flex-col items-center">
      
      {/* Contenido principal mejorado */}
      <div className="w-full space-y-8 backdrop-blur-sm bg-white/30 p-8 sm:p-12 rounded-3xl border border-brand-pink/30 shadow-2xl">
        
        {/* Texto principal */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/40 text-brand-red rounded-full text-sm sm:text-base font-bold border border-brand-red/20 shadow-sm">
            <MessageSquare className="w-5 h-5" />
            Mensaje de Oli Rodríguez
          </div>

          <div className="max-w-3xl mx-auto space-y-5">
            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed">
              Soy <span className="font-bold text-brand-red">Oli Rodríguez</span>, asesora familiar y coach de adolescentes.
            </p>
            <p className="text-lg sm:text-xl text-brand-gray leading-relaxed">
              He acompañado a <span className="font-bold text-brand-blue">miles de familias</span> a transformar su relación con sus hijos.
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-brand-blue leading-relaxed">
              No puedo prometerte que los gritos desaparecerán mañana, pero sí puedo prometerte que tendrás las herramientas para crear el cambio que tu familia necesita.
            </p>
          </div>
        </div>

        {/* Divisor decorativo */}
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
          <div className="w-2 h-2 rounded-full bg-brand-red"></div>
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-blue/30"></div>
        </div>

        {/* Botón CTA grande - Mejorado para mobile */}
        <div className="text-center space-y-4">
            <Button
              size="lg"
              className="relative overflow-hidden bg-white text-brand-blue px-8 sm:px-14 py-8 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-[1.03] hover:bg-brand-blue hover:text-white shadow-lg hover:shadow-xl border-2 border-brand-blue group"
              onClick={() => onScrollToSection('planes')}
            >
              <span className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1">
                <span className="sm:inline-block">QUIERO RECUPERAR LA</span>
                <span className="flex items-center gap-2 sm:gap-3">CONEXIÓN AHORA
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={22} />
                </span>
              </span>
            </Button>
   

          {/* Microcopy */}
          <p className="text-sm sm:text-base text-brand-gray/80 font-medium px-4">
            <span className="font-dancing text-brand-red text-lg sm:text-xl">Miles de familias ya lo lograron.</span>{" "}
            Tú también puedes hacerlo, paso a paso.
          </p>
        </div>

      </div>
    </div>
  </div>

  {/* Elementos decorativos con blur */}
  <div className="absolute -bottom-40 -left-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-br from-brand-red/5 to-brand-pink/5 blur-3xl z-0"></div>
  <div className="absolute -top-40 -right-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/5 to-brand-sand/5 blur-3xl z-0"></div>
</section>
</div>

  );
};

// Componente de tarjeta moderna
const ModernFeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) => {
  const colorClasses = {
    teal: "from-brand-teal/5 to-brand-teal/20",
    coral: "from-brand-coral/5 to-brand-coral/20",
    beige: "from-brand-beige/5 to-brand-beige/20",
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full`}>
      <div className="flex items-center mb-5 gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default ProgramDetails;
