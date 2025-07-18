import { Clock, Zap, ChevronRight, AlertTriangle, CheckCircle, ArrowRight, Download, BookAudio, BookOpenText, Mic, Map } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const CTAfin = () => {
  const exchangeRate = 0.06;
  const priceMXN = 295;
  const priceUSD = Math.round(priceMXN * exchangeRate);

  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        return { days: 1, hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-12 md:py-20 w-full overflow-hidden">
      {/* Fondo con imagen y overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1709216461598-018ae6307dc0?w=1200&q=100&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white/80" />
      </div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-xl rounded-2xl p-4 md:p-10 shadow-xl border border-white/30">
          
          {/* Urgencia - Más elementos */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-8">
            <span className="inline-flex items-center gap-1 md:gap-2 bg-red-100 text-red-700 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              <AlertTriangle size={14} className="md:size-4" /> ¡OFERTA POR TIEMPO LIMITADO!
            </span>
            <span className="inline-flex items-center gap-1 md:gap-2 bg-yellow-100 text-yellow-700 px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              <Clock size={14} className="md:size-4" /> Solo hoy: {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          </div>

          {/* Título */}
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
              <span className="bg-gradient-to-r from-brand-coral to-brand-purple bg-clip-text text-transparent">
                Llévate el combo completo
              </span>
            </h2>
            <p className="text-gray-700 text-sm md:text-lg max-w-2xl mx-auto">
              Todo lo que necesitás para poner límites sin gritar ni romper el vínculo
            </p>
          </div>

          {/* Contenido del combo */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-5 mb-8 md:mb-10 text-gray-800">
            <div className="flex flex-col items-center text-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <BookOpenText className="w-6 h-6 md:w-8 md:h-8 text-brand-teal mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-1">E-book</h3>
              <p className="text-xs md:text-sm">Estrategias prácticas</p>
            </div>
            <div className="flex flex-col items-center text-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <Mic className="w-6 h-6 md:w-8 md:h-8 text-brand-purple mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Audio Emergencia</h3>
              <p className="text-xs md:text-sm">Escucha donde quieras</p>
            </div>
            <div className="flex flex-col items-center text-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <Download className="w-6 h-6 md:w-8 md:h-8 text-brand-coral mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Frases SOS</h3>
              <p className="text-xs md:text-sm">Para momentos difíciles</p>
            </div>
            <div className="flex flex-col items-center text-center p-2 md:p-4 bg-white rounded-lg md:rounded-xl shadow-sm border border-gray-200">
              <Map className="w-6 h-6 md:w-8 md:h-8 text-brand-blue mb-2 md:mb-3" />
              <h3 className="font-semibold text-sm md:text-base mb-1">Mapa de límites</h3>
              <p className="text-xs md:text-sm">Guía paso a paso</p>
            </div>
          </div>

          {/* Botones CTA con más urgencia */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link to={'https://www.familiayformacion.com/tienda/p/combo-completo-lmites-en-la-adolescencia'}>
            <Button className="group relative w-full overflow-hidden bg-gradient-to-r from-brand-teal to-brand-purple hover:from-brand-teal/90 hover:to-brand-purple/90 text-white font-bold py-3 px-4 md:px-6 rounded-xl transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg text-sm md:text-base">
              <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5" />
                ¡APROVECHA AHORA! 
              </span>
            </Button>
            </Link>
            <Link to={'https://www.familiayformacion.com/tienda/p/combo-completo-lmites-en-la-adolescencia'}>
            <Button className="border border-brand-purple text-brand-purple bg-white hover:bg-brand-purple/10 font-semibold py-3 px-4 md:px-6 rounded-xl flex items-center w-full justify-center gap-1 md:gap-2 text-sm md:text-base">
              Ver detalles
              <ArrowRight size={16} className="md:size-5" />
            </Button>
            </Link>
          </div>

          {/* Mensaje de urgencia adicional */}
          <div className="mt-4 text-center">
            <p className="text-xs md:text-sm text-red-600 font-medium">
              ⚠️ Esta oferta desaparecerá en {timeLeft.hours}h {timeLeft.minutes}m - ¡No pierdas esta oportunidad!
            </p>
          </div>

          {/* Decorativo */}
          <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-purple/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default CTAfin;