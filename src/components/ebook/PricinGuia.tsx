import {
  CheckCircle,
  ArrowRight,
  Smartphone,
  Download,
  ShieldCheck,
  LockKeyhole,
  Mail,
  MessageCircle
} from 'lucide-react';

const PricingGuide = () => {
  return (
    <div className="bg-white">
      <section
        id="pricing"
        className="relative py-28 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-brand-beige/60 via-white to-brand-coral/10 overflow-hidden rounded-t-[3rem]"
      >
        {/* Fondos decorativos */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-brand-purple/10 to-transparent"></div>
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-teal/10 blur-[120px]"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-brand-coral/10 blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Mockup visual */}
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[3/4] border-8 border-white">
                <img
                  src="imagenes/ebook4.jpg"
                  alt="Mockup de la guía"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white px-6 py-4 rounded-2xl shadow-xl border border-brand-coral/30">
                <div className="flex items-end">
                  <div className="text-4xl font-bold text-brand-coral">$295</div>
                  <div className="ml-2 mb-1 text-gray-500">MXN</div>
                </div>
                <div className="text-sm text-gray-500 mt-1">≈ $16 USD</div>
                <div className="text-xs text-brand-coral font-semibold mt-2 bg-brand-coral/10 rounded-lg px-3 py-1 inline-block">
                  ¡Precio especial por tiempo limitado!
                </div>
              </div>
            </div>

            {/* Contenido textual */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-purple/5 rounded-full blur-[60px]"></div>

              <div className="mb-10">
                <div className="inline-flex items-center justify-center space-x-4 mb-8">
                  <div className="w-24 h-px bg-gradient-to-r from-transparent via-brand-purple/50 to-transparent"></div>
                  <span className="text-sm font-semibold tracking-widest text-brand-purple uppercase bg-white/90 px-5 py-2.5 rounded-full backdrop-blur-sm border border-brand-purple/10 shadow-xs hover:shadow-sm transition-all">
                    Última oportunidad
                  </span>
                  <div className="w-24 h-px bg-gradient-to-l from-transparent via-brand-purple/50 to-transparent"></div>
                </div>

                <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
Fortalece
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-coral to-brand-purple">
    {" "}el vínculo
  </span>
</h2>


                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                  Transforma la relación con tus adolescentes con herramientas basadas en{" "}
                  <span className="font-medium text-brand-teal">neurociencia</span> y{" "}
                  <span className="font-medium text-brand-purple">psicología positiva</span>.
                </p>
              </div>

              {/* Lista de beneficios */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                {[
                  {
                    icon: <Download className="w-6 h-6" />,
                    text: "Acceso inmediato al material digital",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    text: "Versión imprimible incluida",
                  },
                  {
                    icon: <Smartphone className="w-6 h-6" />,
                    text: "Disponible en todos tus dispositivos",
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    text: "Frases clave para momentos difíciles",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
                  >
                    <div className="flex-shrink-0 mr-4 relative">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-purple flex items-center justify-center shadow-xs group-hover:shadow-sm transition-shadow">
                        <div className="relative z-10 text-white">{item.icon}</div>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 rounded-t-xl"></div>
                    </div>
                    <span className="text-lg text-gray-800 font-medium leading-snug pt-1">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Botón CTA */}
              <div className="space-y-6">
               <button className="w-full py-5 px-8 bg-white border-2 border-brand-teal text-brand-teal text-lg font-bold rounded-full shadow-md hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
  <span className="relative z-10 flex items-center justify-center">
    <span className="group-hover:text-white transition-colors duration-300">
      Sí, quiero educar con firmeza y conexión
    </span>
    <ArrowRight className="w-5 h-5 ml-3 transition-all duration-300 group-hover:translate-x-2 group-hover:text-white" />
  </span>
  <span className="absolute inset-0 bg-gradient-to-r from-brand-teal to-brand-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
</button>

                {/* Garantías */}
                <div className="flex flex-wrap justify-center gap-4">
                  {[
                    {
                      icon: <ShieldCheck className="w-5 h-5" />,
                      text: "Resultados comprobados",
                      color: "bg-white text-brand-teal border-brand-teal/20 hover:bg-brand-teal/5",
                    },
                    {
                      icon: <LockKeyhole className="w-5 h-5" />,
                      text: "Pago 100% seguro",
                      color: "bg-white text-brand-purple border-brand-purple/20 hover:bg-brand-purple/5",
                    },
                    {
                      icon: <Download className="w-5 h-5" />,
                      text: "Acceso inmediato",
                      color: "bg-white text-brand-coral border-brand-coral/20 hover:bg-brand-coral/5",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-sm px-4 py-2.5 rounded-lg border ${item.color} shadow-xs hover:shadow-sm transition-all`}
                    >
                      <span className="mr-2">{item.icon}</span>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingGuide;
