import { Button } from "@/components/ui/button";
import { Calendar, Brain, Headphones, Users, Download, MessageSquare, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const ProgramDetails = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Efectos de fondo modernos */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-beige/5 to-brand-coral/10"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Encabezado impactante */}
          <div className="text-center mb-12 sm:mb-20">
            <span className="inline-block bg-brand-coral/10 text-brand-coral text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 sm:mb-6">
              PROGRAMA EXCLUSIVO
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Transformación <span className="font-dancing text-brand-coral">Real</span><br />
              <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent text-xl sm:text-3xl md:text-4xl font-semibold">en 10 Sesiones</span>
            </h2>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-brand-teal via-brand-beige to-brand-coral mx-auto mb-6 sm:mb-8"></div>
            <p className="text-base sm:text-xl text-gray-600 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
              No solo teoría, sino <span className="font-semibold text-brand-teal">herramientas prácticas</span> que generan cambios reales
            </p>
          </div>

          {/* Tarjetas de características modernas - 6 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 sm:mb-20">
            <ModernFeatureCard
              icon={<Calendar className="text-brand-teal" size={28} />}
              title="Sesiones Semanales"
              description="10 encuentros en vivo via Zoom"
              color="teal"
            />

            <ModernFeatureCard
              icon={<Brain className="text-brand-coral" size={28} />}
              title="Contenido Poderoso"
              description="Estrategias máster + retos semanales"
              color="coral"
            />

          <ModernFeatureCard
  icon={<Headphones className="text-brand-beige" size={28} />}
  title="Acceso Flexible"
  description="Revisa las sesiones grabadas cuando lo necesites"
  color="beige"
/>


            <ModernFeatureCard
              icon={<Users className="text-brand-teal" size={28} />}
              title="Comunidad Privada"
              description="Red de apoyo y acompañamiento"
              color="teal"
            />

            <ModernFeatureCard
              icon={<Download className="text-brand-coral" size={28} />}
              title="Recursos Exclusivos"
              description="Guías, audios y material descargable"
              color="coral"
            />

            <ModernFeatureCard
              icon={<MessageSquare className="text-brand-beige" size={28} />}
              title="Frases Clave"
              description="Lenguaje efectivo para comunicarte"
              color="beige"
            />
          </div>

          {/* Destacado con efecto glassmorphism */}
          <div className="relative mb-12 sm:mb-20 group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-teal/20 to-brand-coral/20 rounded-3xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-white/30 shadow-xl text-center">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                <span className="font-dancing text-brand-coral text-4xl sm:text-5xl">Resultados</span> Tangibles
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
                Este programa te dará <span className="font-semibold text-brand-teal">herramientas claras</span> para reconectar con tu adolescente, establecer <span className="font-semibold text-brand-coral">límites saludables</span> y construir una relación más fuerte.
              </p>
           <Button
  size="lg"
  className="bg-gray-900 text-white px-6 sm:px-14 py-5 sm:py-6 text-sm sm:text-xl font-bold rounded-full hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl w-full max-w-xs sm:max-w-2xl mx-auto"
  onClick={() => onScrollToSection('pricing')}
>
  <span className="flex flex-wrap items-center justify-center text-center gap-2 leading-tight">
    Quiero transformar mi relación familiar
    <ArrowRight
      className="hidden sm:inline-block transition-all duration-300 group-hover:translate-x-1"
      size={20}
    />
  </span>
</Button>


            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-teal/5 -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-coral/5 translate-x-1/2 translate-y-1/2 z-0"></div>
    </section>
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
