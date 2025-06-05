import { Brain, Star, Users, Heart } from "lucide-react";

const WhyWorkshopSection = () => {
  const features = [
    {
      icon: Brain,
      color: "brand-purple",
      title: "Base científica",
      desc: "Respaldado por neurociencia y psicología del desarrollo",
      badge: "Fundamentos",
    },
    {
      icon: Star,
      color: "brand-yellow",
      title: "Habilidades duraderas",
      desc: "Herramientas que les servirán toda la vida",
      badge: "Beneficios",
    },
    {
      icon: Users,
      color: "brand-teal",
      title: "Enfoque realista",
      desc: "Preparación práctica para situaciones reales",
      badge: "Método",
    },
    {
      icon: Heart,
      color: "brand-coral",
      title: "Conexión emocional",
      desc: "Ambiente seguro para explorar y crecer",
      badge: "Resultados",
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-beige/40 relative overflow-hidden">
      {/* Efectos sutiles de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            ¿Por qué{" "}
            <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">
              este taller
            </span>
            ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un enfoque único que combina neurociencia, psicología positiva y experiencia real con preadolescentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => {
            const iconColor = {
              "brand-purple": "text-brand-purple",
              "brand-yellow": "text-brand-yellow",
              "brand-teal": "text-brand-teal",
              "brand-coral": "text-brand-coral",
            }[item.color];

            const bgColor = {
              "brand-purple": "bg-brand-purple",
              "brand-yellow": "bg-brand-yellow",
              "brand-teal": "bg-brand-teal",
              "brand-coral": "bg-brand-coral",
            }[item.color];

            const bgOpacity10 = {
              "brand-purple": "bg-brand-purple/10",
              "brand-yellow": "bg-brand-yellow/10",
              "brand-teal": "bg-brand-teal/10",
              "brand-coral": "bg-brand-coral/10",
            }[item.color];

            const bgOpacity20 = {
              "brand-purple": "group-hover:bg-brand-purple/20",
              "brand-yellow": "group-hover:bg-brand-yellow/20",
              "brand-teal": "group-hover:bg-brand-teal/20",
              "brand-coral": "group-hover:bg-brand-coral/20",
            }[item.color];

            const textColor = {
              "brand-purple": "text-brand-purple",
              "brand-yellow": "text-brand-yellow",
              "brand-teal": "text-brand-teal",
              "brand-coral": "text-brand-coral",
            }[item.color];

            const badgeColor = {
              "brand-purple": "bg-brand-purple/10 text-brand-purple",
              "brand-yellow": "bg-brand-yellow/10 text-brand-yellow",
              "brand-teal": "bg-brand-teal/10 text-brand-teal",
              "brand-coral": "bg-brand-coral/10 text-brand-coral",
            }[item.color];

            const gradient = {
              "brand-purple": "from-transparent via-brand-purple to-transparent",
              "brand-yellow": "from-transparent via-brand-yellow to-transparent",
              "brand-teal": "from-transparent via-brand-teal to-transparent",
              "brand-coral": "from-transparent via-brand-coral to-transparent",
            }[item.color];

            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-lg border border-gray-100 hover:border-transparent"
              >
                {/* Badge superior */}
                <span
                  className={`absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${badgeColor}`}
                >
                  {item.badge}
                </span>

                {/* Icono con efecto glow */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 rounded-full ${bgColor} opacity-0 group-hover:opacity-10 blur-md transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`w-16 h-16 rounded-2xl ${bgOpacity10} ${bgOpacity20} flex items-center justify-center mx-auto relative z-10 transition-colors duration-300`}
                  >
                    <item.icon
                      className={`w-8 h-8 ${iconColor} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                </div>

                <h3 className="font-bold text-xl text-gray-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>

                {/* Efecto de borde inferior al hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${gradient}`}
                ></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkshopSection;
