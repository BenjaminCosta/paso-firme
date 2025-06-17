import { Brain, Star, Users, Heart, Globe, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

interface WhyWorkshopSectionProps {
  onScrollToSection: (id: string) => void;
}

const WhyWorkshopSection = ({ onScrollToSection }: WhyWorkshopSectionProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const features = [
    {
      icon: Brain,
      color: "brand-purple",
      title: "Basado en neurociencia",
      desc: "Aplicado al desarrollo adolescente",
      badge: "Fundamentos",
    },
    {
      icon: Users,
      color: "brand-teal",
      title: "Enfoque realista",
      desc: "Sin drama, sin clichés, sin condescendencia",
      badge: "Método",
    },
    {
      icon: Star,
      color: "brand-yellow",
      title: "Habilidades duraderas",
      desc: "Enfocado en habilidades internas que duran toda la vida",
      badge: "Beneficios",
    },
    {
      icon: Heart,
      color: "brand-coral",
      title: "Creado por especialista",
      desc: "Con años de experiencia acompañando adolescentes reales",
      badge: "Resultados",
    },
    {
      icon: Globe,
      color: "brand-purple",
      title: "Formatos accesibles",
      desc: "Para México y cualquier país del mundo",
      badge: "Accesibilidad",
    },
    {
      icon: BookOpen,
      color: "brand-teal",
      title: "Contenido práctico",
      desc: "Ejercicios y herramientas aplicables desde el primer día",
      badge: "Enfoque",
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-beige/40 relative overflow-hidden">
      {/* Fondo con textura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-brand-beige/20"></div>
      </div>

      {/* Efectos de burbujas */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-5 leading-tight">
            ¿Por qué{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative z-10 bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text font-pacifico text-transparent">
                "Paso Firme"
              </span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-brand-yellow/30 -z-0"></span>
            </span>{" "}
            es el taller que tu hijo/a necesita?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un enfoque único que combina neurociencia, psicología positiva y experiencia real con preadolescentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <span
                  className={`absolute -top-3 right-4 px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${badgeColor}`}
                >
                  {item.badge}
                </span>

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

                <h3 className="font-bold text-center text-xl text-gray-900 mb-2 group-hover:text-brand-purple transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base text-center leading-relaxed">{item.desc}</p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${gradient}`}
                ></div>
              </div>
            );
          })}
        </div>

        {/* Botón de urgencia discreto */}
        <div className="text-center mt-16">
          <Button
             onClick={() => onScrollToSection('pricing')}
            className="bg-gradient-to-r from-brand-coral to-brand-purple text-white hover:from-brand-coral/90 hover:to-brand-purple/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Esto es lo que mi hijo necesita
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Cupos limitados - Inscripciones abiertas
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkshopSection;
