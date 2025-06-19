import { Button } from "@/components/ui/button";

const EmotionalSection = () => {
  const bgImage = '';

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
      <div
        className="absolute inset-0 z-0 md:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541996206728-9e1c3466a148?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlZW5hZ2VycyUyMGVtb3Rpb25hbCUyMGxhbmRzY2FwZXxlbnwwfHw0fHx8Mg%3D%3D')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 via-transparent to-brand-coral/15" />

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

{/* Columna derecha mejorada */}
<div className="flex flex-col">
  <div className="bg-gradient-to-br from-white/15 to-white/5 rounded-3xl p-8 border border-white/25 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden relative flex flex-col justify-between h-full backdrop-blur-sm">
    {/* Efectos de luz */}
    <div className="absolute top-0 right-0 w-28 h-28 bg-brand-beige/50 rounded-full blur-[80px]" />
    <div className="absolute bottom-0 left-0 w-36 h-36 bg-brand-coral/30 rounded-full blur-[90px]" />

    <div className="relative z-10 space-y-6">
      {/* Encabezado */}
      <div>
        <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2  text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
          Transforma la{" "}
          <span className="font-pacifico bg-gradient-to-r from-brand-coral to-brand-yellow bg-clip-text text-transparent">
            crisis
          </span>{" "}
          en{" "}
          <span className="font-pacifico bg-gradient-to-r from-brand-purple to-brand-coral bg-clip-text text-transparent">
            crecimiento
          </span>
        </h3>
        <div className="w-16 h-1 bg-gradient-to-r from-brand-purple to-brand-coral mb-3 rounded-full" />
        <p className="text-brand-beige text-lg font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
          No es una fase, es una{" "}
          <span className="font-pacifico text-white underline decoration-brand-coral underline-offset-4">
            oportunidad única
          </span>
        </p>
      </div>

      {/* Contenido compacto */}
      <div className="space-y-4 text-white/90">
        <p className="text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          <span className="font-semibold text-brand-beige">
            La adolescencia no es el problema:
          </span>{" "}
          el verdadero desafío es la falta de herramientas emocionales para gestionar esta etapa.
        </p>

        <p className="text-lg leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">
          Sin recursos internos, los jóvenes recurren al celular, al aislamiento o a la frustración.{" "}
          <span className="text-brand-coral font-semibold font-pacifico drop-shadow-md">
            Pero existe un camino diferente.
          </span>
        </p>
      </div>

      {/* Destacado */}
      <div className="bg-gradient-to-r from-brand-purple/30 to-brand-coral/20 p-5 rounded-xl border border-white/20 mt-4">
        <p className="text-center text-xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
          <span className="font-pacifico bg-brand-beige bg-clip-text text-transparent">
            "Este curso es el punto de inflexión que necesitan"
          </span>
        </p>
      </div>
    </div>

    {/* CTA mejorado */}
    <div className="mt-8">
      <Button
        className="w-full py-5 bg-gradient-to-r from-brand-purple to-brand-coral hover:from-brand-purple/90 hover:to-brand-coral/90 text-white text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
      >
        <span className="relative z-10">RESERVA SU CUPO AHORA</span>
        <span className="absolute inset-0 bg-gradient-to-r from-brand-coral to-brand-purple opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[inherit]" />
      </Button>
    </div>
  </div>
</div>

          </div>
        </div>

    </section>
  );
};

export default EmotionalSection;
