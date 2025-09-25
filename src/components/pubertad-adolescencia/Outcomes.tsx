import { Button } from "@/components/ui/button";
import { Brain, Heart, ArrowRight, Target, MessageCircle, Shield, Trophy, BookOpen, CheckCircle, Lightbulb, MapPin } from "lucide-react";

interface OutcomesProps {
  onScrollToSection: (id: string) => void;
}

const Outcomes = ({ onScrollToSection }: OutcomesProps) => {

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85"
            alt="Background pattern"
            className="w-full h-full object-cover opacity-15 scale-110"
          />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-20 right-[10%] w-[800px] h-[800px] bg-brand-pink/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute -bottom-20 left-[10%] w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-red/10 rounded-full blur-[150px] animate-pulse" />
        
        {/* Decorative Patterns - Circles */}
        <div className="absolute top-20 left-20 w-32 h-32">
          <div className="absolute inset-0 border-2 border-brand-pink/20 rounded-full animate-[spin_30s_linear_infinite]" />
          <div className="absolute inset-[15%] border-2 border-brand-pink/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
        </div>
        <div className="absolute bottom-20 right-20 w-40 h-40">
          <div className="absolute inset-0 border-2 border-brand-blue/20 rounded-full animate-[spin_35s_linear_infinite]" />
          <div className="absolute inset-[20%] border-2 border-brand-blue/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
        </div>

        {/* Decorative Patterns - Squares */}
        <div className="absolute top-1/4 right-32 w-24 h-24">
          <div className="absolute inset-0 border-2 border-brand-red/20 rounded-lg rotate-45 animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-[15%] border-2 border-brand-red/10 rounded-lg -rotate-45" />
        </div>
        <div className="absolute bottom-1/3 left-40 w-20 h-20">
          <div className="absolute inset-0 border-2 border-brand-pink/20 rounded-lg rotate-12 animate-[spin_25s_linear_infinite]" />
          <div className="absolute inset-[15%] border-2 border-brand-pink/10 rounded-lg -rotate-12" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-pink/30 rounded-full animate-pulse" />
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-brand-blue/30 rounded-full animate-pulse delay-150" />
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-brand-red/30 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-brand-pink/30 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-brand-blue/30 rounded-full animate-pulse delay-700" />

        {/* Diagonal Lines */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-brand-pink/0 via-brand-pink/20 to-brand-pink/0 rotate-45" />
        <div className="absolute top-1/3 right-1/4 w-px h-40 bg-gradient-to-b from-brand-red/0 via-brand-red/20 to-brand-red/0 -rotate-45" />
        <div className="absolute bottom-0 right-1/3 w-px h-32 bg-gradient-to-b from-brand-blue/0 via-brand-blue/20 to-brand-blue/0 rotate-45" />

        {/* Main Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/60 to-white/50" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2">
              <Trophy className="w-5 h-5 text-brand-blue" />
              <span className="inline-flex items-center bg-brand-blue/10 text-brand-blue text-sm font-semibold px-6 py-2 rounded-full backdrop-blur-sm border border-brand-blue/20">
                Resultados
              </span>
              <Trophy className="w-5 h-5 text-brand-blue" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 mb-6">
              ¿Qué Lograrás con Este
              <span className="text-brand-blue"> Taller</span>?
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              Beneficios concretos para padres e hijos en su camino compartido
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Image Grid */}
            <div className="relative grid grid-cols-6 grid-rows-5 gap-4 h-[600px]">
              {/* Large Image */}
              <div className="col-span-4 row-span-3 relative overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/30 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="https://images.unsplash.com/photo-1758525861781-bea6e7d79334?auto=format&fit=crop&q=100&w=4000"
                  alt="Adolescente pensativo"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>

              {/* Small Image 1 */}
              <div className="col-span-2 row-span-2 col-start-5 relative overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="https://images.unsplash.com/photo-1541580621-47abd5e3da8b?auto=format&fit=crop&q=100&w=4000"
                  alt="Padre e hija conversando"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>

              {/* Small Image 2 */}
              <div className="col-span-3 row-span-2 row-start-4 relative overflow-hidden rounded-2xl shadow-xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-transparent opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100" />
                <img
                  src="https://images.unsplash.com/photo-1607062294260-e5b054f2c96b?auto=format&fit=crop&q=100&w=4000"
                  alt="Adolescentes estudiando juntos"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
              </div>

              {/* Quote Card */}
              <div className="col-span-3 row-span-2 col-start-4 row-start-4 relative overflow-hidden rounded-2xl group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red via-brand-pink to-brand-blue opacity-5" />
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
                <div className="relative h-full p-6 flex flex-col items-center justify-center text-center">
                  <div className="absolute top-2 left-2 w-12 h-12 text-brand-red/10 font-serif text-6xl">"</div>
                  <p className="text-lg font-medium text-gray-800 z-10">
                    Cuando guías con calma, tu hijo encuentra su equilibrio
                  </p>
                  <div className="absolute bottom-2 right-2 w-12 h-12 text-brand-red/10 font-serif text-6xl rotate-180">"</div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-brand-red/20 rounded-2xl" />
              </div>
            </div>

            {/* Right Column - Outcomes List */}
            <div className="flex flex-col justify-center">
              <div className="space-y-8">
                {/* Card 1 */}
                <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-red/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-red/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 p-3 bg-brand-red/10 rounded-xl border border-brand-red/20 transition-colors group-hover:bg-brand-red/15">
                      <Brain className="w-6 h-6 text-brand-red" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Comprensión Profunda</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-red/50 group-hover/item:bg-brand-red transition-colors" />
                          <span>Entender las reacciones y cambios cerebrales de tus hijos</span>
                        </li>
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-red/50 group-hover/item:bg-brand-red transition-colors" />
                          <span>Dejar de actuar desde el miedo o la duda</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-blue/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 p-3 bg-brand-blue/10 rounded-xl border border-brand-blue/20 transition-colors group-hover:bg-brand-blue/15">
                      <MessageCircle className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Comunicación Efectiva</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue/50 group-hover/item:bg-brand-blue transition-colors" />
                          <span>Crear un puente de comunicación y confianza renovado</span>
                        </li>
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-blue/50 group-hover/item:bg-brand-blue transition-colors" />
                          <span>Reconocer y regular tus propias reacciones como adulto</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-teal/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-teal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="flex gap-4 relative">
                    <div className="flex-shrink-0 p-3 bg-brand-teal/10 rounded-xl border border-brand-teal/20 transition-colors group-hover:bg-brand-teal/15">
                      <Shield className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Acompañamiento Equilibrado</h3>
                      <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-teal/50 group-hover/item:bg-brand-teal transition-colors" />
                          <span>Saber cuándo intervenir y cuándo soltar</span>
                        </li>
                        <li className="flex items-start gap-3 group/item hover:text-gray-900 transition-colors">
                          <span className="block w-1.5 h-1.5 mt-2 rounded-full bg-brand-teal/50 group-hover/item:bg-brand-teal transition-colors" />
                          <span>Acompañar sin sobreproteger, pero sin desaparecer</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center relative">
            <div className="absolute inset-x-0 -top-10 -bottom-10 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-red/5 to-brand-pink/5 rounded-3xl blur-xl" />
            </div>
            <Button
              onClick={() => window.open('https://www.familiayformacion.com/tienda/p/pubertad-adolescencia', '_blank')}
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Comenzar Mi Transformación
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
