
import { Brain, Star, Users, Heart } from "lucide-react";

const WhyWorkshopSection = () => {
  const features = [
    { icon: Brain, color: "brand-purple", title: "Base científica", desc: "Respaldado por neurociencia y psicología del desarrollo" },
    { icon: Star, color: "brand-yellow", title: "Habilidades duraderas", desc: "Herramientas que les servirán toda la vida" },
    { icon: Users, color: "brand-teal", title: "Enfoque realista", desc: "Preparación práctica para situaciones reales" },
    { icon: Heart, color: "brand-coral", title: "Conexión emocional", desc: "Ambiente seguro para explorar y crecer" }
  ];

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(136, 95, 174, 0.1), rgba(227, 216, 204, 0.2)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-white/80 to-brand-yellow/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            ¿Por qué <em className="text-brand-purple">este taller</em>?
          </h2>
          <p className="text-lg text-text-dark/70 max-w-3xl mx-auto">
            Un enfoque único que combina neurociencia, psicología positiva y experiencia real con preadolescentes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.1}s`}}>
              <div className={`w-20 h-20 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-${item.color}/30 transition-colors duration-300`}>
                <item.icon className={`w-10 h-10 text-${item.color}`} />
              </div>
              <h3 className="font-semibold text-lg mb-2">
                <em>{item.title}</em>
              </h3>
              <p className="text-text-dark/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkshopSection;
