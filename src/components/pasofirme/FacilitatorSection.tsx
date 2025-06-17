import { Quote } from "lucide-react";

const FacilitatorSection = () => {
  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Elementos decorativos sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-purple/5 blur-3xl"></div>
        <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-brand-teal/5 blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Columna de texto */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-sm font-medium mb-4">
                Facilitadora Certificada
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Sobre la <span className="bg-gradient-to-r from-brand-purple to-brand-teal bg-clip-text text-transparent">facilitadora</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3
                  className="text-3xl font-dancing text-brand-purple mb-3"
                  style={{ fontFamily: "'Dancing Script', cursive" }}
                >
                  Olivia Rodríguez
                </h3>
                <div className="h-1 w-16 bg-gradient-to-r from-brand-teal to-brand-purple rounded-full mb-4"></div>
              </div>

              <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
               <p className="text-lg text-gray-700 leading-relaxed">
  <strong>Asesora familiar</strong>, <strong>coach de adolescentes</strong>, <strong>educadora emocional</strong> y especialista en neurociencia. <br /> <br />
  Con más de <strong>un millón de familias conectadas</strong> a través de sus redes, podcast, talleres y programas, ha transformado la manera en que padres e hijos se relacionan en la etapa más compleja:{" "}
  <span className="font-semibold text-brand-purple italic">
    la adolescencia.
  </span>
</p>

              </div>
            </div>

            {/* Cita destacada */}
            <div className="mt-8 p-6 bg-gradient-to-br from-white to-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors duration-300">
                  <Quote className="w-6 h-6 text-brand-teal" />
                </div>
                <p
                  className="text-lg text-gray-800 italic"
                >
                  "No es una clase. Es una guía interior que los acompañará durante toda su adolescencia y más allá."
                </p>
              </div>
            </div>
          </div>

          {/* Columna de imagen */}
          <div className="relative">
            <div className="relative group">
              {/* Marco decorativo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/20 via-brand-purple/10 to-brand-coral/10 transform rotate-2 scale-95 group-hover:rotate-1 group-hover:scale-100 transition-all duration-500"></div>

              {/* Contenedor de la imagen */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-gray-100 transform group-hover:-translate-y-1 transition-transform duration-300">
                <img
                  src="imagenes/facilitadora2.jpg"
                  alt="Facilitadora Olivia Rodríguez"
                  className="w-full h-full object-cover aspect-square"
                />

                {/* Badge de experiencia */}
                <div className="absolute -bottom-2 -right-2 px-4 py-2 bg-white/30 backdrop-blur-lg text-brand-purple font-semibold rounded-lg shadow-lg">
                  15+ años
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitatorSection;
