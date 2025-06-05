
import { Quote } from "lucide-react";

const FacilitatorSection = () => {
  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 216, 204, 0.4), rgba(255, 255, 255, 0.8)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-brand-beige/40 via-white/80 to-brand-purple/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
              Sobre la <em className="text-brand-purple">facilitadora</em>
            </h2>
            <h3 className="text-2xl font-semibold text-brand-purple mb-4">
              Olivia Rodríguez
            </h3>
            <div className="space-y-4 text-text-dark/80">
              <p>
                Psicóloga especializada en desarrollo adolescente con más de 15 años de experiencia trabajando con preadolescentes y sus familias.
              </p>
              <p>
                Certificada en neuroeducación y terapia familiar sistémica. Ha acompañado a cientos de jóvenes en su transición a la secundaria, desarrollando metodologías únicas basadas en evidencia científica.
              </p>
              <p>
                Madre de dos adolescentes, combina su experiencia profesional con la comprensión real de los desafíos familiares.
              </p>
            </div>
            <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-lg border-l-4 border-brand-teal animate-scale-in" style={{animationDelay: '0.5s'}}>
              <Quote className="w-8 h-8 text-brand-teal mb-4" />
              <p className="text-lg font-medium text-text-dark italic">
                "No es una clase. Es una guía interior que los acompañará durante toda su adolescencia y más allá."
              </p>
            </div>
          </div>
          <div className="flex justify-center animate-scale-in" style={{animationDelay: '0.3s'}}>
            <div className="w-80 h-80 bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-500">
              <div className="w-72 h-72 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                <div className="text-6xl">👩‍🏫</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatorSection;
