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
      <section className="relative py-28 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-brand-beige/60 via-white to-brand-coral/10 overflow-hidden rounded-t-[3rem]">
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
                  src="/mockup-guia.jpg"
                  alt="Mockup de la guía completa"
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
            <div>
              <div className="inline-flex items-center justify-center space-x-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent"></div>
                <span className="text-sm font-medium tracking-widest text-brand-purple uppercase bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm border border-brand-purple/20 shadow-sm">
                  Última oportunidad
                </span>
                <div className="w-20 h-px bg-gradient-to-l from-transparent via-brand-purple/40 to-transparent"></div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">Guía Completa para</span>
                <span className="text-brand-coral">Límites con Conexión</span>
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Todo lo que necesitas para navegar la adolescencia con equilibrio y armonía.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {[
                  { icon: <Download className="w-5 h-5" />, text: "Acceso inmediato al material digital" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Versión imprimible incluida" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Disponible en todos tus dispositivos" },
                  { icon: <MessageCircle className="w-5 h-5" />, text: "Frases clave para momentos difíciles" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-white rounded-xl shadow-sm p-4 border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-shrink-0 mt-0.5 mr-4 text-brand-teal bg-brand-teal/10 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-base text-gray-700 font-medium leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-5">
                <button className="w-full py-5 px-8 bg-brand-coral hover:bg-brand-coral/90 text-white text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] group flex items-center justify-center">
                  <span className="mr-3">Sí, quiero educar con firmeza y conexión</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    {
                      icon: <ShieldCheck className="w-4 h-4" />,
                      text: "Garantía",
                      color: "bg-brand-teal/10 text-brand-teal border-brand-teal/20"
                    },
                    {
                      icon: <LockKeyhole className="w-4 h-4" />,
                      text: "Pago seguro",
                      color: "bg-white text-gray-700 border-gray-200"
                    },
                    {
                      icon: <Download className="w-4 h-4" />,
                      text: "Inmediato",
                      color: "bg-brand-coral/10 text-brand-coral border-brand-coral/20"
                    },
                    {
                      icon: <Mail className="w-4 h-4" />,
                      text: "Soporte",
                      color: "bg-white text-gray-700 border-gray-200"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-center text-xs px-3 py-1.5 rounded-full border ${item.color}`}
                    >
                      <span className="mr-1.5">{item.icon}</span>
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
