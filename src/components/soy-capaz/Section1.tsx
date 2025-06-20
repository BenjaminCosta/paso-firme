import { Smartphone, HeartPulse, Users, Brain, Shield, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Testimonials2 from './Testimonials2';

interface IntroProps {
  onScrollToSection: (id: string) => void;
}

const Section1 = ({ onScrollToSection }: IntroProps) => {
  const painPoints = [
    { text: "Ya no muestra interés por casi nada", icon: <HeartPulse className="text-brand-purple w-5 h-5" /> },
    { text: "Explosiones emocionales frecuentes", icon: <HeartPulse className="text-brand-purple w-5 h-5" /> },
    { text: "Vive pegado al celular", icon: <Smartphone className="text-brand-purple w-5 h-5" /> },
    { text: "Evita conversaciones profundas", icon: <MessageSquare className="text-brand-purple w-5 h-5" /> },
    { text: "Se rebela ante cualquier consejo", icon: <Shield className="text-brand-purple w-5 h-5" /> },
    { text: "No sabe tomar decisiones", icon: <Brain className="text-brand-purple w-5 h-5" /> }
  ];

  const solutions = [
    {
      title: "Autoconocimiento emocional",
      desc: "Entender cómo funciona su cerebro y su sistema de emociones.",
      icon: <Brain className="w-7 h-7 text-white" />
    },
    {
      title: "Regulación emocional",
      desc: "Regular lo que siente sin estallar o desconectarse.",
      icon: <HeartPulse className="w-7 h-7 text-white" />
    },
    {
      title: "Autoestima y autonomía",
      desc: "Valerse por sí mismo sin necesidad de compararse.",
      icon: <Shield className="w-7 h-7 text-white" />
    },
    {
      title: "Criterio propio",
      desc: "Tener criterio ante la presión de redes sociales.",
      icon: <Users className="w-7 h-7 text-white" />
    },
    {
      title: "Uso consciente del celular",
      desc: "Usar el celular sin engancharse ni procrastinar.",
      icon: <Smartphone className="w-7 h-7 text-white" />
    },
    {
      title: "Comunicación asertiva",
      desc: "Expresarse con seguridad, sin herir ni callarse.",
      icon: <MessageSquare className="w-7 h-7 text-white" />
    }
  ];

  return (
    <section className="relative py-16 overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542816417-0983675ab2dd?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80" 
          alt="Adolescente pensativo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-beige/30 to-brand-purple/10"></div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 md:px-16 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-brand-purple/10 text-brand-purple text-sm font-semibold px-5 py-2 rounded-full mb-4">
            TALLER PARA ADOLESCENTES
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            <span className="bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">
              ¡Soy Capaz!
            </span><br />
            Habilidades para la vida
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Un curso online que enseña las herramientas emocionales más importantes para navegar la adolescencia con confianza.
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-beige to-brand-purple mx-auto rounded-full"></div>
        </div>

        {/* Grid de problemas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {painPoints.map((item, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start mb-3">
                <div className="bg-brand-purple/10 p-2 rounded-lg mr-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{item.text}</h3>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-brand-beige/50 to-brand-purple/50 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Sección de solución */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.1.0&auto=format&fit=crop&w=1600&q=80" 
              alt="Grupo de adolescentes"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/40 to-brand-coral/40"></div>
          </div>

          <div className="p-8 md:p-12 text-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">¿Qué aprenderá en este taller?</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((item, index) => (
                  <div key={index} className="bg-white/5 rounded-xl p-5 flex items-start gap-4 border border-white/20 shadow-md hover:scale-[1.015] transition backdrop-blur-md">
                    <div className="bg-brand-purple p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-white">{item.title}</h3>
                      <p className="text-white/90 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button 
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 font-semibold"
                >
                  Ver más detalles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white'>
      <Testimonials2/>
      </div>
    </section>
  );
};

export default Section1;
