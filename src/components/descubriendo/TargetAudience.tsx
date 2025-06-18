import { User, Smartphone, Zap, Target, Shield, Heart, BrainCircuit } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface IntroProps {
  onScrollToSection: (id: string) => void;
}

const TargetAudience = ({ onScrollToSection }: IntroProps) => {
  const audienceItems = [
    {
      icon: <User className="w-6 h-6" />,
      text: "Adolescentes de 12 a 21 años",
      highlight: "¿Tu hijo está en esta edad?"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Demasiado tiempo en pantallas",
      highlight: "¿Peleas por limitar su tiempo digital?"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "Falta de motivación constante",
      highlight: "¿Notas que le cuesta mantenerse enfocado?"
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "Metas grandes sin plan de acción",
      highlight: "¿Tiene sueños pero no sabe cómo alcanzarlos?"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: "Comparación constante con otros",
      highlight: "¿Sufre por compararse en redes sociales?"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Mamás que buscan herramientas nuevas",
      highlight: "¿Quieres ayudarle pero no sabes cómo?"
    }
  ];

  return (
    <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/60 to-brand-teal/20 backdrop-blur-[120px]" />
        <div className="absolute -top-40 left-0 w-80 h-80 rounded-full bg-brand-teal/30 blur-[90px] opacity-70" />
        <div className="absolute bottom-20 right-0 w-96 h-96 rounded-full bg-brand-purple/30 blur-[90px] opacity-70" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Título y subtítulo */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block bg-white text-brand-purple text-sm font-semibold px-5 py-2 rounded-full mb-4 border border-brand-purple/20 shadow-sm">
            ¿ES ESTE TALLER PARA TU HIJO?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-teal to-brand-purple bg-clip-text text-transparent">
              Identifica si necesita este cambio
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal via-brand-purple to-brand-teal mx-auto rounded-full mb-8" />
          <p className="text-base sm:text-lg text-gray-600">
            Revisa estas señales que indican que tu hijo podría beneficiarse enormemente de este programa
          </p>
        </div>

        {/* Cuerpo principal: ítems y foto */}
        <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-12 items-center justify-between bg-white/30 backdrop-blur-lg rounded-3xl p-6 sm:p-8 border border-white/40 shadow-xl">
          {/* Lista de señales */}
          <div className="w-full lg:w-1/2 space-y-4">
            {audienceItems.map((item, index) => (
              <div
                key={index}
                className="group relative p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/80 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-white via-brand-teal/30 to-brand-purple/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-brand-teal/20 to-brand-purple/20 text-brand-teal shadow-inner border border-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-gray-800">{item.text}</p>
                    <p className="text-sm text-brand-purple mt-1 font-medium">{item.highlight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Imagen ilustrativa */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative  min-h-[300px] md:min-h-[690px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1746971506615-a2f5093fc297?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHRlZW4lMjB3aXRoJTIwcGhvbmUlMjBhZGRjaXRpb258ZW58MHwxfDB8fHwy"
                alt="Adolescente con tecnología"
                className="w-full h-full object-cover absolute inset-0"
              />
               <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/80 via-brand-teal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">¿Reconoces alguna de estas situaciones?</h3>
                <p className="text-white/90 text-sm sm:text-base mb-3">
                  Este taller está diseñado específicamente para ayudar a jóvenes con estos desafíos modernos
                </p>
                <Button
                  variant="default"
                  className="bg-white text-brand-purple hover:bg-white/90 shadow-lg hover:shadow-brand-purple/30"
                  onClick={() => onScrollToSection('pricing')}
                >
                  Quiero más información
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Frase destacada con ícono */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 mt-14 bg-gradient-to-r from-brand-teal/20 to-brand-purple/20 rounded-2xl border border-white/30 backdrop-blur-sm relative overflow-hidden group">
          {/* Fondo de fondo */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/uploads/1412273646059cc129bb5/eae0a1da?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxmcmllbmRzaGlwfGVufDB8MHwwfHx8Mg%3D%3D')] bg-cover bg-center opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-purple/10" />

          {/* Contenido principal */}
          <div className="relative z-10 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
              <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-lg sm:text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
                "El cerebro adolescente no está roto...
                <br />
                <span className="font-bold text-white/90">
                  solo necesita el manual de instrucciones correcto.
                </span>"
              </blockquote>
              <p className="text-base sm:text-lg text-white/80 font-medium">
                Este taller provee ese manual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TargetAudience;
