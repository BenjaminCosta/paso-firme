
import { CheckCircle } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Autoestima sólida y autoconocimiento",
    "Manejo de la presión social y bullying",
    "Gestión de ansiedad y miedos",
    "Construcción de identidad personal",
    "Habilidades de comunicación asertiva",
    "Organización y planificación personal",
    "Resolución de conflictos",
    "Inteligencia emocional",
    "Toma de decisiones conscientes"
  ];

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(227, 216, 204, 0.3)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-brand-beige/20 to-white/80"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Habilidades que desarrollará <em className="text-brand-teal">tu hijo/a</em>
          </h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto">
            Cada sesión está diseñada para fortalecer áreas específicas del desarrollo emocional y social.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-start gap-3 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-brand-beige hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CheckCircle className="w-5 h-5 text-brand-teal mt-0.5 flex-shrink-0" />
              <span className="font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
