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
    <section className="relative overflow-hidden py-24 px-4">
      {/* Fondo con efecto parallax simulando con background-attachment: fixed */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(227, 216, 204, 0.4)), url('https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-brand-teal/5 to-white/30 z-0"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Habilidades que desarrollará <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">tu hijo/a</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Cada sesión está diseñada para fortalecer áreas específicas del desarrollo emocional y social.
          </p>
        </div>
        
        {/* Grid de habilidades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative flex items-start gap-4 bg-white/95 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Icono con efecto */}
              <div className="relative">
                <CheckCircle className="w-6 h-6 text-brand-teal mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-brand-teal/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300"></div>
              </div>
              
              {/* Texto */}
              <span className="font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                {skill}
              </span>
              
              {/* Efecto de borde al hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-teal/20 pointer-events-none transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
