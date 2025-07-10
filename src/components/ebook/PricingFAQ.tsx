import { CheckCircle, ArrowRight, ChevronDown, Smartphone, Download, ShieldCheck, LockKeyhole, Mail, MessageCircle } from 'lucide-react'

const PricingGuide = () => {
  return (
    <div className="bg-white">
      {/* Sección 6: Precio + Compra */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-brand-beige/50 overflow-hidden">
        {/* Efectos de fondo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-r from-brand-coral/10 to-transparent"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-brand-teal/10 blur-[80px]"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mockup visual */}
            <div className="relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] border-4 border-white">
                <img 
                  src="/mockup-guia.jpg" 
                  alt="Mockup de la guía completa"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white p-5 rounded-2xl shadow-xl border border-brand-coral/20">
                <div className="flex items-end">
                  <div className="text-4xl font-bold text-brand-coral">$295</div>
                  <div className="ml-2 mb-1 text-gray-500">MXN</div>
                </div>
                <div className="text-sm text-gray-500 mt-1">≈ $16 USD</div>
              </div>
            </div>

            {/* Contenido */}
            <div>
              <div className="mb-8">
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-medium mb-4">
                  Oferta especial
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  <span className="block">Guía Completa para</span>
                  <span className="text-brand-coral">Límites con Conexión</span>
                </h2>
                <p className="text-lg text-gray-600">Todo lo que necesitas para navegar la adolescencia con equilibrio y armonía.</p>
              </div>

              <div className="mb-10 space-y-5">
                {[
                  { icon: <Download className="w-5 h-5" />, text: "Acceso inmediato al material digital" },
                  { icon: <CheckCircle className="w-5 h-5" />, text: "Versión imprimible incluida" },
                  { icon: <Smartphone className="w-5 h-5" />, text: "Disponible en todos tus dispositivos" },
                  { icon: <MessageCircle className="w-5 h-5" />, text: "Frases clave para momentos difíciles" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5 mr-4 text-brand-teal bg-brand-teal/10 p-1.5 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-lg text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Botón CTA */}
              <div className="space-y-4">
                <button className="w-full py-5 px-8 bg-brand-coral hover:bg-brand-coral/90 text-white text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group flex items-center justify-center">
                  <span className="mr-3">Sí, quiero educar con firmeza y conexión</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    { icon: <ShieldCheck className="w-4 h-4" />, text: "Garantía", color: "bg-brand-teal/10 text-brand-teal border-brand-teal/20" },
                    { icon: <LockKeyhole className="w-4 h-4" />, text: "Pago seguro", color: "bg-white text-gray-700 border-gray-200" },
                    { icon: <Download className="w-4 h-4" />, text: "Inmediato", color: "bg-brand-coral/10 text-brand-coral border-brand-coral/20" },
                    { icon: <Mail className="w-4 h-4" />, text: "Soporte", color: "bg-white text-gray-700 border-gray-200" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-center text-xs px-3 py-1.5 rounded-full border ${item.color}`}>
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
  )
}

export default PricingGuide