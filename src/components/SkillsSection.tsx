import { CheckCircle } from "lucide-react";

const SkillsSection = () => {
  const skills = [
    "Saber quién es sin compararse todo el tiempo",
    "Resistir presión social sin alejarse de todo",
    "Decidir con seguridad (aunque aún esté aprendiendo)",
    "Entender y manejar su ansiedad ante los cambios",
    "Relacionarse con criterio en el mundo digital",
    "Construir una autoestima más sólida y realista",
  ];

  return (
    <section className="relative overflow-hidden py-24 px-4">
      {/* Fondo mejorado */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(227, 216, 204, 0.1)), url('https://images.unsplash.com/photo-1629360035258-2ccb13aa3679?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></div>
      
      {/* Efectos de luz */}
      <div className="absolute inset-0 z-1 bg-gradient-to-b from-brand-teal/5 via-transparent to-brand-yellow/5"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Encabezado mejorado */}
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-brand-teal/20 text-brand-teal rounded-full text-sm font-bold mb-6 border border-brand-teal/30 backdrop-blur-sm animate-fade-in">
            Transformación Emocional
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Tu hijo va a{" "}
            <span className="font-pacifico italic bg-gradient-to-r from-brand-teal to-brand-yellow bg-clip-text text-transparent">
              aprender
            </span>{" "}
            a:
          </h2>
        </div>

        {/* Lista de habilidades mejorada */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="group relative flex items-start gap-4 bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-brand-teal/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-teal/15"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-1 bg-brand-teal/40 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CheckCircle className="relative w-6 h-6 text-brand-teal mt-0.5 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
              </div>
              <span className="font-medium text-white/90 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-brand-teal group-hover:to-brand-yellow group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {skill}
              </span>
              <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-teal/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Frase destacada mejorada */}
        <div className="mt-16 text-center px-4">
          <div className="inline-block bg-gradient-to-r from-brand-teal/10 to-brand-yellow/10 p-3 rounded-full mb-6">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3">
              <p className="text-lg md:text-xl text-white font-medium leading-relaxed max-w-4xl mx-auto">
                Estas no son <span className="italic text-brand-yellow font-semibold">"habilidades bonitas"</span>, 
                sino herramientas <span className="text-brand-teal font-medium">esenciales</span> para que tu hijo enfrente la secundaria con:
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center font-pacifico font-medium gap-4 mt-6 max-w-3xl mx-auto">
            <span className="px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-xl border border-brand-teal/30 backdrop-blur-lg shadow-lg shadow-brand-teal/10 hover:shadow-brand-teal/20 transition-all duration-300 hover:-translate-y-0.5">
              Confianza
            </span>
            <span className="px-4 py-2 bg-brand-yellow/10 text-brand-yellow rounded-full text-xl border border-brand-yellow/30 backdrop-blur-lg shadow-lg shadow-brand-yellow/10 hover:shadow-brand-yellow/20 transition-all duration-300 hover:-translate-y-0.5">
              Autoconocimiento
            </span>
            <span className="px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-xl border border-brand-purple/30 backdrop-blur-lg shadow-lg shadow-brand-purple/10 hover:shadow-brand-purple/20 transition-all duration-300 hover:-translate-y-0.5">
              Resiliencia
            </span>
          </div>
        </div>

        {/* Nota al pie mejorada */}
        <div className="mt-14 text-center">
          <p className="text-gray-400/90 text-sm font-medium inline-block px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-700/50">
            <span className="text-brand-teal">*Metodología validada</span> con más de 500 adolescentes en transición a secundaria
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;