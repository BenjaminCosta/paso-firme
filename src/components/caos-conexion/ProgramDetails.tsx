import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight, Award } from "lucide-react";
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const ProgramDetails = ({ onScrollToSection }: HeroSectionProps) => {
  return (
    <div className="">
    {/* Sección FAQ con Acordeón */}
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Efectos de fondo modernos con background-attachment fixed */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546387903-6d82d96ccca6?ixlib=rb-4.1.0&auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center mix-blend-overlay"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 via-brand-pink/5 to-brand-blue/10 bg-fixed"></div>
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-brand-blue/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-brand-red/10 rounded-full z-0 hidden md:block"></div>

      {/* Contenido principal */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Encabezado */}
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block bg-brand-pink/30 text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 sm:mb-6">
              Preguntas Frecuentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue mb-4 sm:mb-6 leading-tight">
              Preguntas que otros padres{" "}
              <span className="font-dancing text-brand-red">también tuvieron</span>
            </h2>
            <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-6 sm:mb-8"></div>
          </div>

          {/* Preguntas y respuestas siempre visibles */}
          <div className="bg-white/90 rounded-2xl p-6 sm:p-10 shadow-xl border border-brand-pink/30 space-y-8">
            
            {/* Pregunta 1 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Y si mi hijo no me escucha o no quiere hablar conmigo?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Es lo más común.<br />
                Tu hijo no te ignora por falta de amor, sino porque está en modo defensa.<br />
                Cuando tú recuperas tu calma, él empieza a escucharte y a acercarse sin obligarlo.
              </p>
            </div>

            {/* Pregunta 2 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Necesito mucho tiempo a la semana?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                No, solo 1 hora a la semana. Las herramientas son aplicables en la vida diaria.
              </p>
            </div>

            {/* Pregunta 3 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Sirve si ya probé de todo y nada funcionó?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Sí.<br />
                Probaste hablar, repetir, castigar, tener paciencia o gritar.<br />
                Pero nunca te enseñaron a regular tus emociones.<br />
                Ahí es donde realmente cambia la forma en que tu hijo responde.
              </p>
            </div>

            {/* Pregunta 4 */}
            <div className="border-b border-brand-pink/20 pb-6">
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Necesito que mi hijo participe?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                No.<br />
                El trabajo es contigo.<br />
                Cuando tú cambias la forma de comunicarte, tu hijo cambia la forma de responderte.
              </p>
            </div>

            {/* Pregunta 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-brand-blue mb-3">
                ¿Cuándo empiezo a ver cambios?
              </h3>
              <p className="text-base sm:text-lg text-brand-gray leading-relaxed">
                Las primeras mejoras suelen verse en 1–2 semanas:<br />
                Menos peleas, más escucha y un ambiente más tranquilo.<br />
                El proceso completo profundiza esos cambios durante las 10 semanas.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Elementos decorativos modernos */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-red/5 blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-brand-blue/5 blur-3xl translate-x-1/2 translate-y-1/2 z-0"></div>
    </section>
     
      {/* Sección CTA Final */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-br from-brand-sand via-white to-brand-pink/10">
  {/* Fondo con imagen y degradado mejorado */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div 
      className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1648221350871-e3ae3c8d0f58?w=1600&auto=format&fit=crop&q=85&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGZhbWlseSUyMHByb2JsZW1zJTIwYWRvbGVzY2VudHxlbnwwfDB8MHx8fDI%3D')] bg-cover bg-center opacity-40"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-brand-sand/80 via-white/70 to-brand-pink/20" />
  </div>

  {/* Formas geométricas decorativas */}
  <div className="absolute top-20 right-10 w-20 h-20 border-2 border-brand-blue/15 rotate-45 z-0 hidden md:block"></div>
  <div className="absolute bottom-40 left-20 w-16 h-16 bg-brand-pink/20 rounded-full z-0 hidden sm:block"></div>
  <div className="absolute top-1/3 left-10 w-24 h-24 bg-gradient-to-br from-brand-red/5 to-brand-pink/10 rounded-lg rotate-12 z-0 hidden lg:block"></div>

  <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
    
      {/* Imagen redonda tipo biografía - Centrada arriba */}
      <div className="flex flex-col items-center mb-8 sm:mb-10">
        <div className="relative group">
          {/* Anillo decorativo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-red/20 to-brand-blue/20 transform scale-105 group-hover:scale-110 transition-transform duration-500"></div>
          
          {/* Imagen redonda */}
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
            <img 
              src="/imagenes/facilitadora4.jpeg" 
              alt="Oli Rodríguez - Asesora familiar"
              className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
            />
          </div>
          
          {/* Badge pequeño sobre la imagen */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border-2 border-brand-pink/30">
            <p className="text-brand-blue font-bold text-xs flex items-center gap-1 whitespace-nowrap">
              <Award className="w-3 h-3 text-brand-blue" />
              +10 años
            </p>
          </div>
        </div>
        
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-pink/40 text-brand-red rounded-full text-sm sm:text-base font-bold border border-brand-red/20 shadow-sm mt-6">
          <MessageSquare className="w-5 h-5" />
          Soy Oli Rodríguez
        </div>
      </div>

      {/* Todo el texto junto y uniforme */}
      <div className="space-y-4 mb-12 backdrop:blur-sm bg-white/50 p-6 sm:p-10 rounded-2xl shadow-xl border border-brand-pink/30">
        <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue leading-tight text-center">
          Asesora Familiar y Coach de Adolescentes
        </h3>
        
        <p className="text-base sm:text-lg text-text-dark leading-relaxed">
          Ayudo a madres y padres a <span className="font-bold text-brand-red">recuperar la calma y la conexión</span> con sus hijos, sin gritar y sin perder autoridad para que vuelvan a escucharte, respetarte y hablar contigo sin peleas.
        </p>
        
        <p className="text-base sm:text-lg text-text-dark  leading-relaxed">
          Conozco el cansancio, la culpa, la frustración, el miedo a estar fallando. Pero también conozco <span className="font-bold text-brand-blue">el alivio que se siente</span> cuando entiendes que no estás haciendo todo mal, solo necesitas otras herramientas.
        </p>

        <p className="text-base sm:text-lg text-text-dark leading-relaxed">
          Las mamás y papás conectan conmigo porque no los juzgo, no los idealizo, los acompaño como adultos que quieren hacerlo mejor sin perderse a sí mismos en este proceso.
        </p>

        <p className="text-base sm:text-lg text-text-dark leading-relaxed">
          Mi adolescencia fue tranquila por fuera, pero muy intensa por dentro. Crecí siendo una joven sensible y observadora, acostumbrada a adaptarme y a no dar problemas. Mis padres me amaban y estuvieron presentes, pero en casa casi no hablábamos de emociones. Aprendí a resolver sola lo que sentía y recién de adulta entendí cuánto marca eso.
        </p>

        <p className="text-base sm:text-lg text-text-dark leading-relaxed italic border-l-4 border-brand-pink pl-4 bg-brand-pink/5 py-3 rounded-r-lg">
          "Lo que más me transformó fue descubrir que amar no siempre alcanza si no sabemos acompañar emocionalmente. Eso me llevó a dedicarme a ayudar a madres y adolescentes: porque lo que muchas familias necesitan no es más teoría, sino herramientas reales para escucharse, regularse y volver a encontrarse."
        </p>

        <p className="text-base sm:text-lg text-text-dark leading-relaxed">
          Convertirme en mamá también me mostró algo clave: no importa cuánto sepas, si por dentro estás cansada, frustrada o desbordada, la conexión se rompe. Cuando aprendí a regularme, recuperar mi calma y responder desde la claridad, mi relación con mis hijos cambió. <span className="font-bold text-brand-blue">Ese es el corazón de todo lo que enseño hoy.</span>
        </p>

        <p className="text-xl sm:text-2xl font-bold text-brand-red leading-relaxed text-center pt-4">
          Hoy decidí canalizar todo este aprendizaje en mi Programa "Del Caos a la Conexión"
        </p>
      </div>

      {/* Botón CTA - Centrado */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <a 
          href="https://wa.me/5215552106494?text=Hola%20Olivia!%20Quiero%20ingresar%20a%20tu%20Programa%20Del%20Caos%20a%20la%20Conexi%C3%B3n%2C%20vengo%20de%20tu%20p%C3%A1gina%2C%20mi%20nombre%20es…"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-brand-red to-brand-blue text-white px-10 sm:px-16 py-6 sm:py-7 text-lg sm:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              QUIERO ACCEDER
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-2" size={22} />
            </span>
          </Button>
        </a>

        {/* Microcopy */}
        <p className="text-sm sm:text-base text-brand-gray/80 font-medium">
          <span className="font-dancing text-brand-red text-lg sm:text-xl">Comienza hoy tu transformación.</span>{" "}
          Acceso inmediato al programa completo.
        </p>
      </div>

  </div>

  {/* Elementos decorativos con blur */}
  <div className="absolute -bottom-40 -left-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-br from-brand-red/5 to-brand-pink/5 blur-3xl z-0"></div>
  <div className="absolute -top-40 -right-40 w-[24rem] sm:w-[30rem] h-[24rem] sm:h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/5 to-brand-sand/5 blur-3xl z-0"></div>
</section>
</div>

  );
};

// Componente de tarjeta moderna
const ModernFeatureCard = ({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) => {
  const colorClasses = {
    teal: "from-brand-teal/5 to-brand-teal/20",
    coral: "from-brand-coral/5 to-brand-coral/20",
    beige: "from-brand-beige/5 to-brand-beige/20",
  };

  return (
    <div className={`bg-gradient-to-br ${colorClasses[color]} rounded-2xl p-6 sm:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full`}>
      <div className="flex items-center mb-5 gap-4">
        <div className="p-3 bg-white rounded-xl shadow-sm">{icon}</div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-base sm:text-lg">{description}</p>
    </div>
  );
};

export default ProgramDetails;
