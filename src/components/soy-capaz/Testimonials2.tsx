import { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Me gustó muchísimo como explicas. Siento que fue lo que necesitaba escuchar",
    author: "Mariana, 15 años"
  },
  {
    text: "Lo que más me gustó fue la calma con la que explicas… eso me dio seguridad",
    author: "Patricio, 17 años"
  },
  {
    text: "Me di cuenta que sí puedo cambiar, que tengo el poder en mí",
    author: "Manuel, 16 años"
  },
  {
    text: "Me sentí segura, escuchada y no juzgada, gracias Oli",
    author: "Ana Sofi, 14 años"
  }
];

const Testimonials2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying] = useState(true);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  return (
    <div className="w-full max-w-4xl mx-auto my-8">
      <div className="rounded-xl shadow-sm border border-brand-beige p-6 bg-white/90 backdrop-blur-sm relative z-10">
        <div className="flex items-start justify-between">
          {/* Contenido del testimonio */}
          <div className="flex-1 min-w-0 pr-4">
            <h3 className="text-lg font-semibold text-black uppercase tracking-wider mb-2">
              Testimonios Reales
            </h3>
            <div className="relative overflow-hidden h-20">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-shrink-0 w-full">
                    <p className="text-gray-700 italic mb-2 text-sm leading-snug">
                      "{testimonial.text}"
                    </p>
                    <p className="text-brand-coral text-xs font-medium">
                      — {testimonial.author}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controles y badges */}
          <div className="flex flex-col items-end space-y-3">
            <div className="flex space-x-1">
              <button
                onClick={goToPrev}
                className="w-6 h-6 flex items-center justify-center text-brand-purple hover:bg-brand-beige rounded transition-colors"
                aria-label="Anterior"
              >
                ←
              </button>
              <button
                onClick={goToNext}
                className="w-6 h-6 flex items-center justify-center text-brand-purple hover:bg-brand-beige rounded transition-colors"
                aria-label="Siguiente"
              >
                →
              </button>
            </div>

            <div className="flex flex-wrap justify-end gap-1">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-beige text-brand-purple">
                Sin sermones
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-beige text-brand-purple">
                Herramientas reales
              </span>
            </div>
          </div>
        </div>

        {/* Indicadores minimalistas */}
        <div className="flex justify-center mt-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-all ${
                index === currentIndex ? 'bg-brand-purple' : 'bg-brand-beige'
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials2;
