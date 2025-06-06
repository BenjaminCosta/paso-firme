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
    <section className="relative overflow-hidden py-20 px-4">
      {/* Fondo con efecto parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(51, 51, 51, 0.4)), url('https://images.unsplash.com/photo-1629360035258-2ccb13aa3679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado moderno */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-brand-teal/20 text-brand-teal rounded-full text-sm font-bold mb-6 border border-brand-teal/30 backdrop-blur-sm">
            Tranformacion Emocional
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Habilidades que <span className="bg-gradient-to-r from-brand-teal to-brand-yellow bg-clip-text text-transparent">desarrollarán</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cada sesión está diseñada para fortalecer áreas clave del desarrollo emocional y social.
          </p>
        </div>
        
        {/* Grid de habilidades moderno */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative flex items-start gap-4 bg-gray-900/70 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-brand-teal/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-teal/10"
            >
              {/* Icono con efecto neón */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-brand-teal/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CheckCircle className="relative w-6 h-6 text-brand-teal mt-0.5 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Texto con gradiente al hover */}
              <span className="font-medium text-white group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-yellow group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {skill}
              </span>
              
              {/* Efecto de brillo al hover */}
              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-teal/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Nota al pie */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm font-medium">
            *Resultados basados en nuestra metodología probada con +500 adolescentes
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;