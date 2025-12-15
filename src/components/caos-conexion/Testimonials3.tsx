import { ArrowRight, ChevronLeft, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Testimonials3 = ({ onScrollToSection }: HeroSectionProps) => {
  const testimonials = [
    {
      video: "/videos/vid1.mp4",
      poster: "/imagenes/vid1-poster.png",
      headline: "De gritos constantes y reclamos cada pocos minutos a una relación con más calma, conexión y cariño.",
      subheadline: "Mamá de adolescente de 15 años",
      context: "Antes todo eran órdenes, correcciones y discusiones: tareas, dientes, pendientes y reproches permanentes. Al aplicar las herramientas del programa entendí que darle espacio, acompañar sin presionar y ofrecer ayuda desde la calma cambia completamente la dinámica.",
      transformation: "Hoy mi hijo se acerca, pide ayuda, organiza sus pendientes y la conexión mejoró notablemente.",
      quote: "En lugar de portazos antes de irse a la escuela, ahora me da besos, y eso me hace profundamente feliz.",
      name: "Katia",
      role: "mamá de adolescente de 15 años"
    },
    {
      video: "/videos/vid2.mp4",
      poster: "/imagenes/vid2-poster.png",
      headline: "Pasé de sentir distancia emocional a tener conversaciones profundas, largas y llenas de confianza con mi hijo.",
      subheadline: "Mamá de adolescente",
      context: "Al soltar el control y cambiar mi forma de comunicarme, mi hijo empezó a abrirse. Una noche volvimos del cine, cenamos juntos y conversamos durante horas.",
      transformation: "Sentí que hablaba con un adulto, maduro e inteligente. Pude conocer realmente cómo piensa, cómo se siente, sus ideas, sus intereses y sus proyectos.",
      quote: "Fue una experiencia increíble que fortaleció nuestro vínculo de una forma que nunca había vivido.",
      name: "Carolina",
      role: "mamá de adolescente"
    },
    {
      video: "/videos/vid3.mp4",
      poster: "/imagenes/vid3-poster.png",
      headline: "Hoy me siento mucho más cerca de mi hijo y nuestra comunicación es completamente distinta.",
      subheadline: "Participante del programa",
      context: "Aprendí a validar sus emociones y a no minimizar lo que le preocupa. Eso, por sí solo, abrió el diálogo. El cambio más grande fue dejar de dar instrucciones todo el tiempo y empezar a escuchar activamente.",
      transformation: "Cuando escucho y respondo sin juzgar, me sorprende todo lo que mi hijo comparte conmigo y cómo mejoró nuestra relación.",
      quote: "",
      name: "Madre participante",
      role: "del programa"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [videoProgress, setVideoProgress] = useState(0);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Actualizar progreso del video
  useEffect(() => {
    const video = videoRefs.current[currentIndex];
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setVideoProgress(progress);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, [currentIndex]);

  const handleVideoClick = (index: number) => {
    if (playingVideo === index) {
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      if (playingVideo !== null) {
        videoRefs.current[playingVideo]?.pause();
      }
      videoRefs.current[index]?.play();
      setPlayingVideo(index);
    }
  };

  const nextTestimonial = () => {
    if (playingVideo !== null) {
      videoRefs.current[playingVideo]?.pause();
      setPlayingVideo(null);
    }
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    if (playingVideo !== null) {
      videoRefs.current[playingVideo]?.pause();
      setPlayingVideo(null);
    }
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#1a2332] via-[#243447] to-[#1f2d3d] overflow-hidden">
      {/* Formas geométricas decorativas modernas */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-28 h-28 bg-white/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 border-4 border-brand-pink/20 rounded-full z-0 hidden md:block"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-brand-pink/10 rotate-45 z-0 hidden lg:block"></div>   
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight px-4">
            Esto dicen algunas de las{" "}
            <span className="font-dancing text-brand-pink text-4xl sm:text-5xl md:text-6xl lg:text-7xl">+1000 Familias</span>{" "}
            que Ayudé que viven con más Calma, Respeto y Conexión
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-brand-pink to-white mx-auto mb-6"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Testimonial - Con animación sutil */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto transition-opacity duration-500 ease-in-out">
            
            {/* Text Content - First on mobile, Right on desktop */}
            <div className="space-y-4 md:space-y-5 text-white order-1 md:order-2">
              {/* Stars - Rojo */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-brand-red fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              {/* Headline - Bold */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                {currentTestimonial.headline}
              </h3>

              {/* Subheadline - Bold */}
              <p className="text-base md:text-lg font-bold text-brand-pink">
                {currentTestimonial.subheadline}
              </p>

              {/* Context */}
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {currentTestimonial.context}
              </p>

              {/* Transformation */}
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {currentTestimonial.transformation}
              </p>

              {/* Quote */}
              {currentTestimonial.quote && (
                <p className="text-sm md:text-base text-white/95 italic leading-relaxed border-l-4 border-brand-pink pl-4">
                  "{currentTestimonial.quote}"
                </p>
              )}

              {/* Separator Line */}
              <div className="w-full h-px bg-white/30 my-4"></div>

              {/* Name with Avatar */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/30">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white">{currentTestimonial.name}</p>
                  <p className="text-xs text-white/70">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            {/* Video - Second on mobile, Left on desktop */}
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div 
                className="relative w-full max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-2xl border-2 border-white/20 hover:border-brand-pink/50 transition-all duration-300 group"
                onClick={() => handleVideoClick(currentIndex)}
                onMouseEnter={() => setIsHoveringVideo(true)}
                onMouseLeave={() => setIsHoveringVideo(false)}
              >
                <video 
                  ref={el => videoRefs.current[currentIndex] = el}
                  src={currentTestimonial.video}
                  poster={currentTestimonial.poster}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                {playingVideo !== currentIndex && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition-colors">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-[#1a2332] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}
                
                {/* Barra de progreso - Solo visible al hover */}
                {isHoveringVideo && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transition-opacity duration-300">
                    <div 
                      className="h-full bg-brand-pink transition-all duration-200"
                      style={{ width: `${videoProgress}%` }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border-2 border-white/40 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Anterior testimonio"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 border-2 border-white/40 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Siguiente testimonio"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (playingVideo !== null) {
                  videoRefs.current[playingVideo]?.pause();
                  setPlayingVideo(null);
                }
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-brand-pink' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a 
            href="https://wa.me/5215552106494?text=Hola%20Olivia!%20Quiero%20ingresar%20a%20tu%20Programa%20Del%20Caos%20a%20la%20Conexi%C3%B3n%2C%20vengo%20de%20tu%20p%C3%A1gina%2C%20mi%20nombre%20es…"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              className="bg-white text-[#1a2332] font-bold py-5 md:py-6 px-10 md:px-12 text-base md:text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:bg-brand-pink hover:text-white hover:scale-105 rounded-full group border-2 border-white/50"
              size="lg"
            >
              Quiero Vivir Esta Transformación
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;