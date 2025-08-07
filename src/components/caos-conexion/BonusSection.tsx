import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const BonusSection = () => {
  return (
    <section className="relative py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      {/* Efecto de fondo sutil */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-brand-teal/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-coral/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14"> {/* Reducido mb-12/16 a mb-10/14 */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4"> {/* Reducido mb-4/6 a mb-3/4 */}
            <span className="bg-gradient-to-r from-brand-teal to-brand-coral bg-clip-text text-transparent">
              Bonus Taller Soy Capaz
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 font-medium mb-4 md:mb-5"> {/* Reducido mb-6 a mb-4/5 */}
            INCLUYE DE REGALO UN ACCESO EXCLUSIVO A UN TALLER PARA TU HIJO! 	
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-teal to-brand-coral mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-start"> {/* Reducido gap-8/12 a gap-6/10 */}
          {/* Left Column - 10% más compacta */}
          <div className="space-y-4 md:space-y-6"> {/* Reducido space-y-6/8 a space-y-4/6 */}
            <div className="bg-white p-5 md:p-7 rounded-2xl shadow-lg border border-gray-100/70"> {/* Reducido p-6/8 a p-5/7 */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4"> {/* Reducido mb-4/6 a mb-3/4 */}
                "¡Soy Capaz! Habilidades para la vida adolescente"
              </h3>
              <p className="text-gray-700 mb-4 md:mb-5"> {/* Reducido mb-6/8 a mb-4/5 */}
                Diseñado para transformar desde adentro a los hijos de quienes entran al programa.
              </p>
              
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4"> {/* Reducido mb-4/6 a mb-3/4 */}
                ¿Qué aprenderá tu adolescente en este taller?
              </h4>
              
              <div className="space-y-3 md:space-y-4"> {/* Reducido space-y-4/6 a space-y-3/4 */}
                <div className="pl-4 border-l-4 border-brand-teal bg-brand-teal/5 rounded-r-lg p-2"> {/* Reducido pl-5/p-3 a pl-4/p-2 */}
                  <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-1"> {/* Eliminado md:mb-2 */}
                    BLOQUE 1: Soy capaz de sentir sin explotar
                  </h5>
                  <p className="text-gray-600">Reconocer sus emociones, aprender a regularse sin lastimarse ni lastimar.</p>
                </div>
                
                <div className="pl-4 border-l-4 border-brand-purple bg-brand-purple/5 rounded-r-lg p-2">
                  <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    BLOQUE 2: Soy capaz de poner límites sin sentirme mal
                  </h5>
                  <p className="text-gray-600">Decir "no" con firmeza y respeto, defender su espacio personal sin culpa.</p>
                </div>
                
                <div className="pl-4 border-l-4 border-brand-coral bg-brand-coral/5 rounded-r-lg p-2">
                  <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    BLOQUE 3: Soy capaz de tomar decisiones desde mi valor
                  </h5>
                  <p className="text-gray-600">Distinguir entre presión externa y deseos reales, y tomar decisiones desde la autoestima.</p>
                </div>
                
                <div className="pl-4 border-l-4 border-brand-beige bg-brand-beige/5 rounded-r-lg p-2">
                  <h5 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                    BLOQUE 4: Soy capaz de empezar hoy
                  </h5>
                  <p className="text-gray-600">Salir del estancamiento, encontrar motivación, esperanza y sentido.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-brand-teal/5 via-white to-brand-coral/5 p-5 md:p-7 rounded-2xl border border-white shadow-lg">
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3 md:mb-4">
                Este taller le permitirá:
              </h4>
              <ul className=" text-gray-700"> {/* Reducido space-y-3 a space-y-2 */}
                <li className="flex items-start bg-white/50 p-2 rounded-lg"> {/* Reducido p-3 a p-2 */}
                  <span className="text-brand-teal mr-2 text-lg">•</span> {/* Reducido mr-3 a mr-2 */}
                  <span>Sentirse más seguro consigo mismo</span>
                </li>
                <li className="flex items-start bg-white/50 p-2 rounded-lg">
                  <span className="text-brand-teal mr-2 text-lg">•</span>
                  <span>Reconocer quién es y quién quiere ser</span>
                </li>
                <li className="flex items-start bg-white/50 p-2 rounded-lg">
                  <span className="text-brand-teal mr-2 text-lg">•</span>
                  <span>Empezar a ver su vida como algo que puede liderar</span>
                </li>
                <li className="flex items-start bg-white/50 p-2 rounded-lg">
                  <span className="text-brand-teal mr-2 text-lg">•</span>
                  <span>Sentirse visto, entendido y acompañado</span>
                </li>
                <li className="flex items-start bg-white/50 p-2 rounded-lg">
                  <span className="text-brand-teal mr-2 text-lg">•</span>
                  <span>Saber que no está solo, y que es capaz.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Sin cambios */}
          <div className="space-y-6 md:space-y-8 h-full flex flex-col">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100/70 flex-1">
              <div className="overflow-hidden rounded-xl mb-6 md:mb-8">
                <img 
                  src="/imagenes/facilitadora2.jpg" 
                  alt="Facilitadora del taller"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="text-center mb-6 md:mb-8 bg-gradient-to-r from-brand-teal/5 to-brand-coral/5 p-4 rounded-lg">
                <p className="text-lg font-bold text-brand-coral">
                  💥 Este taller está valuado en $197 USD. Y no se vende por separado.
                </p>
                <p className="text-gray-600 mt-2">
                  Solo lo reciben los hijos de quienes entran al programa DEL CAOS A LA CONEXIÓN.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-white p-5 md:p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 italic">
                  "Los papás entran a transformarse con nosotros.<br />
                  Sus hijos también lo harán.<br />
                  Porque la adolescencia no es caos... solo necesita guía, herramientas y una nueva conversación interior."
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button 
                className="bg-gradient-to-r from-brand-teal to-brand-coral hover:from-brand-teal hover:to-brand-coral/90 text-white font-bold py-6 px-8 text-lg md:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 mx-auto w-full md:w-auto"
                size="lg"
              >
                <span>Quiero acceder al programa + taller</span>
                <ArrowRight className="w-5 h-5 ml-2 md:ml-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;