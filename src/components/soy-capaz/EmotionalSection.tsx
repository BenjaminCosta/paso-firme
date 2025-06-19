import { Button } from "@/components/ui/button";

const EmotionalSection = () => {
  const bgImage = 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';

  const señales = [
    { text: "“Todo le frustra.”", color: "from-brand-purple/70 to-brand-purple/40" },
    { text: "“Se encierra en su cuarto y no quiere hablar.”", color: "from-brand-coral/70 to-brand-coral/40" },
    { text: "“Ya no se valora como antes.”", color: "from-brand-purple/60 to-brand-coral/50" },
    { text: "“Siento que lo estoy perdiendo.”", color: "from-brand-coral/60 to-brand-purple/50" },
    { text: "“Le cuesta poner límites o se va al otro extremo.”", color: "from-brand-purple/70 to-brand-beige/40" },
    { text: "“Se compara, se aísla, procrastina… y el celular no lo suelta.”", color: "from-brand-coral/70 to-brand-beige/50" }
  ];

  return (
    <section className="relative py-20 overflow-hidden"> {/* padding vertical menor */}
      {/* Fondo con overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(136, 95, 174, 0.1), rgba(233, 112, 82, 0.2)), url(${bgImage})`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-transparent to-brand-coral/15" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Título principal */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-beige to-white bg-clip-text text-transparent">
              ¿Reconoces estas señales
            </span>{" "}
            en tu adolescente?
          </h2>
          <p className="text-xl text-brand-beige/90 mb-6">
            La <span className="font-pacifico text-white">adolescencia</span> no es el problema, es la falta de herramientas emocionales
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-purple to-brand-coral mx-auto" />
        </div>

        {/* Cuerpo */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          {/* Columna izquierda */}
          <div className="flex flex-col gap-6 min-h-[480px] py-1"> {/* altura reducida y flex */}
            {señales.map((item, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${item.color} p-5 rounded-2xl border border-white/20 shadow-xl hover:shadow-2xl transition hover:-translate-y-1`}
              >
                <p className="text-lg font-semibold text-white">{item.text}</p> {/* texto un poco más chico */}
              </div>
            ))}
          </div>

          {/* Columna derecha */}
          <div className="flex flex-col justify-between min-h-[480px]">
            <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-8 border border-white/25 shadow-2xl overflow-hidden relative flex flex-col justify-between h-full backdrop-blur-sm">
              {/* Luces decorativas */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-brand-beige/50 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-brand-coral/30 rounded-full blur-[90px]" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="mb-6 space-y-3">
                  <h3 className="text-3xl font-bold text-white leading-snug">
                    Transforma la{" "}
                    <span className="font-pacifico text-brand-coral text-4xl">crisis</span> en{" "}
                    <span className="font-pacifico text-brand-purple text-4xl">crecimiento</span>
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-coral" />
                  <p className="text-brand-beige text-base font-semibold">
                    No es una fase difícil, es una{" "}
                    <span className="underline underline-offset-4 decoration-brand-coral">oportunidad única</span>
                  </p>
                </div>

                <div className="space-y-4 text-base text-white/90 leading-relaxed">
                  <p>
                    En mi experiencia con cientos de adolescentes:{" "}
                    <span className="font-semibold text-brand-beige">
                      el verdadero problema no es la edad, sino la falta de recursos internos.
                    </span>
                  </p>
                  <p>
                    Cuando no saben gestionar lo que sienten, recurren al celular, al aislamiento o a la frustración.{" "}
                    <span className="text-brand-coral font-semibold font-pacifico">Pero hay otra manera.</span>
                  </p>
                </div>

                {/* Botón CTA */}
                <div className="mt-8">
                  <Button
                    className="w-full py-5 bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple/90 hover:to-brand-coral/90 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition hover:scale-[1.02] group relative overflow-hidden"
                  >
                    <span className="relative z-10">ÚLTIMOS CUPOS DISPONIBLES</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
                  </Button>
                  <p className="text-center text-brand-beige/80 mt-3 text-sm">
                    Inscripciones abiertas hasta agotar los últimos <span className="font-semibold text-white">15 cupos</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmotionalSection;
