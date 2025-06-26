import { Button } from "@/components/ui/button";
import { HeartCrack, CircleAlert, Puzzle, ArrowRight } from "lucide-react";

const Intro3 = () => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white overflow-hidden">
      {/* Contenido principal */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Título moderno */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-brand-beige/10 text-brand-beige text-xs sm:text-sm font-semibold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
              Relación Parental
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 font-bold mb-4 leading-tight sm:leading-snug">
              Tu adolescente{" "}
              <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
                no está mal
              </span>
              ...
            </h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-coral mx-auto mb-8"></div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-brand-beige/10 rounded-full py-3 px-5 w-max mx-auto border border-brand-beige/20">
              <CircleAlert className="text-brand-teal" size={22} />
              <p className="text-base sm:text-xl text-gray-700 font-medium max-w-xs sm:max-w-none text-center sm:text-left">
                Pero tampoco está bien.{" "}
                <span className="font-dancing text-brand-teal text-xl sm:text-2xl font-semibold">
                  Y tú tampoco estás bien.
                </span>
              </p>
            </div>
          </div>

          {/* Tarjetas con diseño moderno */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 sm:mb-20">
            {/* Tarjeta 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex items-center mb-5 gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-coral/10 flex items-center justify-center group-hover:bg-brand-coral/20 transition-colors">
                  <HeartCrack className="text-brand-coral" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  El desgaste emocional
                </h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Entre el cansancio, la culpa y la frustración, se ha vuelto difícil incluso saber por dónde empezar.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 group">
              <div className="flex items-center mb-5 gap-4 sm:gap-5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
                  <ArrowRight className="text-brand-teal" size={24} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                  Intentos fallidos
                </h3>
              </div>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Has intentado hablar, poner reglas, tener paciencia... pero todo parece escalar o alejarte más.
              </p>
            </div>
          </div>

          {/* Destacado central con imagen de degradado */}
          <div className="relative my-12 sm:my-20 rounded-3xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85)`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/30 via-brand-beige/20 to-brand-coral/40"></div>
            </div>
            
            <div className="relative bg-white/90 p-8 sm:p-10 text-center border border-gray-200 rounded-3xl">
              <div className="flex justify-center mb-5 sm:mb-6">
                <div className="p-3 sm:p-4 bg-brand-beige/10 rounded-full">
                  <Puzzle className="text-brand-beige" size={44} />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-snug">
                <span className="font-dancing text-brand-coral text-4xl sm:text-5xl">Lo que nadie te dijo</span> es que...
              </h3>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
                El problema <span className="font-bold text-brand-coral">no</span> es que no sepas ser mamá o papá.
                <br />
                El problema es que estás intentando conectar desde herramientas que{" "}
                <span className="font-dancing text-brand-teal text-2xl font-semibold">ya no funcionan</span> con un adolescente.
              </p>
            </div>
          </div>

          {/* CTA con texto multilínea en móvil */}
<div className="text-center mt-12 sm:mt-16 px-4 sm:px-0">
  <Button
    size="lg"
    className="relative overflow-hidden bg-white text-gray-900 px-8 sm:px-14 py-8 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-transform duration-300 hover:scale-[1.03] shadow-lg hover:shadow-xl border-2 border-brand-teal group"
  >
    <span className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
      <span className="sm:inline-block">Descubre las herramientas</span>
      <span className="flex items-center gap-2 sm:gap-3">
        que sí funcionan
        <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2 text-brand-teal" size={22} />
      </span>
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-brand-coral/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
  </Button>
</div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute -bottom-40 -left-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-brand-teal/5 z-0"></div>
      <div className="absolute -top-40 -right-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-brand-coral/5 z-0"></div>
    </section>
  );
};

export default Intro3;
