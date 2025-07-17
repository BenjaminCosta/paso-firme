import { Clock, Zap, ChevronRight, AlertTriangle, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

const CTAfin = () => {
  const exchangeRate = 0.06;
  const priceMXN = 295;
  const priceUSD = Math.round(priceMXN * exchangeRate);
  
  // Estado para el contador de 2 días (48 horas)
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        const { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          return { ...prevTime, seconds: seconds - 1 };
        }
        
        if (minutes > 0) {
          return { ...prevTime, minutes: minutes - 1, seconds: 59 };
        }
        
        if (hours > 0) {
          return { ...prevTime, hours: hours - 1, minutes: 59, seconds: 59 };
        }
        
        if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        
        // Reiniciar el contador cuando llegue a cero
        return { days: 1, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-8 md:py-20 w-full overflow-hidden">
      {/* Fondo optimizado para mobile */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1709216461598-018ae6307dc0?w=1200&q=100&auto=format&fit=crop')] bg-cover bg-center opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-white/70 md:bg-gradient-to-r md:from-white/70 md:via-white/50 md:to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">
        {/* Solo muestra la tarjeta CTA en mobile */}
        <div className="md:hidden w-full">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-lg">
            {/* Encabezado compacto para mobile */}
            <div className="text-center mb-4">
              <h2 className="text-xl font-serif font-semibold text-gray-800">
                <span className="bg-gradient-to-r from-brand-coral to-brand-purple bg-clip-text text-transparent">
                  ¡NO PIERDAS ESTA OPORTUNIDAD!
                </span>
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Llévate el <span className="font-bold text-brand-coral">COMBO COMPLETO</span> hoy
              </p>
            </div>

            {/* Elementos de urgencia mejorados */}
            <div className="flex flex-col items-center mb-4 space-y-2">
              <div className="flex items-center gap-2 bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs font-medium">
                <AlertTriangle className="w-4 h-4" />
                <span>ÚLTIMAS UNIDADES DISPONIBLES</span>
              </div>
              <div className="flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
                <Clock className="w-4 h-4" />
                <span>TERMINA EN: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
              </div>
            </div>

            {/* Precio destacado */}
            <div className="text-center mb-4">
              <p className="text-3xl font-serif font-bold text-gray-900">
                ${priceMXN}
              </p>
              <p className="text-gray-600 text-xs">≈ ${priceUSD} USD</p>
            </div>

            {/* Botón principal */}
            <button className="w-full bg-gradient-to-r from-brand-teal to-brand-purple text-white py-3 rounded-lg font-bold shadow-md flex items-center justify-center gap-2 text-sm">
              <Zap className="w-5 h-5 animate-pulse" />
              <span>APROVECHAR EL COMBO AHORA</span>
            </button>

            {/* Beneficios rápidos */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-center">
              <div className="flex items-center justify-center gap-1 text-xs text-gray-600 bg-gray-50/50 px-2 py-1 rounded">
                <CheckCircle className="w-3 h-3 text-brand-teal" />
                <span>Acceso inmediato</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-xs text-gray-600 bg-gray-50/50 px-2 py-1 rounded">
                <Download className="w-3 h-3 text-brand-purple" />
                <span>Descarga vitalicia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Versión desktop (igual a la original) */}
        <div className="hidden md:block bg-gradient-to-b from-white/70 via-white/60 to-white/50 backdrop-blur-sm rounded-2xl p-10 border border-white/30 shadow-xl overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-semibold text-gray-800 leading-tight">
              <span className="bg-gradient-to-r from-brand-coral to-brand-purple bg-clip-text text-transparent">
                APROVECHA ESTA OPORTUNIDAD
              </span>
            </h2>
            <p className="text-lg text-gray-600 mt-3">
              Llévate el <span className="font-semibold text-brand-coral">COMBO COMPLETO</span> por solo:
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-1/2 space-y-6">
              <div className="pl-6 border-l-4 border-brand-teal/70">
                <h3 className="text-2xl font-serif font-light text-gray-800">
                  Todo lo que necesitas para:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Poner límites sin dañar la relación",
                    "Mantener la calma en momentos difíciles",
                    "Crear acuerdos claros con tu adolescente",
                    "Recuperar el respeto mutuo"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <CheckCircle className="flex-shrink-0 mt-1 text-brand-teal" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-beige/30 p-4 rounded-lg border border-brand-beige/40 mt-6">
                <p className="text-sm text-gray-700 italic">
                  "Esta guía cambió completamente nuestra dinámica familiar en solo 2 semanas"
                </p>
                <p className="text-xs text-brand-purple mt-2 text-right">- Carlos P., Padre</p>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-teal/40 to-brand-purple/30 rounded-xl blur opacity-80 group-hover:opacity-100 transition duration-500"></div>
                
                <div className="relative bg-white/95 backdrop-blur-sm p-8 rounded-lg border border-white/30 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-center gap-2 bg-brand-purple/10 text-brand-purple px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Clock className="w-4 h-4" />
                    <span>OFERTA TERMINA EN: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m</span>
                  </div>

                  <div className="text-center mb-6">
                    <p className="text-5xl font-serif font-medium text-gray-900">
                      ${priceMXN}
                    </p>
                    <p className="text-gray-600 mt-2">≈ ${priceUSD} USD</p>
                    <p className="text-sm text-brand-coral mt-1 font-medium">
                      Precio especial por tiempo limitado
                    </p>
                  </div>

                  <button className="w-full bg-gradient-to-r from-brand-teal to-brand-purple hover:from-brand-teal/90 hover:to-brand-purple/90 text-white py-4 rounded-lg font-bold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                    <Zap className="w-5 h-5" />
                    <span>OBTENER EL COMBO COMPLETO</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                      <CheckCircle className="w-4 h-4 text-brand-teal" />
                      <span>Acceso inmediato</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 text-xs text-gray-600">
                      <Download className="w-4 h-4 text-brand-purple" />
                      <span>Descarga vitalicia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAfin;