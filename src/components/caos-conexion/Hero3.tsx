import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero3 = ({ onScrollToSection }: HeroSectionProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const backgroundImage = '';

  // Autoplay cuando el componente se monta
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  // Actualizar barra de progreso
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      const progress = (video.currentTime / video.duration) * 100;
      setProgress(progress);
    };

    video.addEventListener('timeupdate', updateProgress);
    return () => video.removeEventListener('timeupdate', updateProgress);
  }, []);

  const handleVideoToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen md:min-h-[900px] overflow-hidden">
      {/* Fondo claro con imagen intro2.avif */}
      <div className="absolute inset-0">
        {/* Imagen de fondo con opacity 40 */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url(/imagenes/intro2.avif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        {/* Fondo claro con brand-pink y brand-sand */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sand/90 via-brand-pink/45 to-white/90" />
      </div>

      {/* Formas geométricas decorativas */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-brand-pink/30 rounded-lg rotate-12 z-0 hidden md:block"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-brand-blue/10 rounded-full z-0 hidden md:block"></div>
      <div className="absolute top-1/3 right-10 w-40 h-40 border-4 border-brand-red/20 rounded-full z-0 hidden lg:block"></div>
      <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-brand-pink/20 rotate-45 z-0 hidden lg:block"></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 border-4 border-brand-blue/20 rotate-45 z-0 hidden md:block"></div>
      <div className="absolute top-1/4 right-1/3 w-28 h-28 bg-gradient-to-br from-brand-red/10 to-brand-pink/15 rounded-lg rotate-12 z-0 hidden lg:block"></div>
      
      {/* Círculos grandes sutiles */}
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-brand-red/10 to-brand-pink/15 blur-3xl z-0"></div>
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-bl from-brand-blue/10 to-brand-sand/15 blur-3xl z-0"></div>

      {/* Contenido principal - Centrado */}
      <div className="container mx-auto px-4 py-32 md:py-20 relative z-10 w-full">
        <div className="max-w-4xl w-full mx-auto text-center space-y-6 md:space-y-8">
          
          {/* Título principal - Reducido */}
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-blue leading-tight px-4">
              Tu hijo no cambió.<br />
              <span className="text-brand-red">Cambió la forma en que lo miras…</span>
            </h1>
            
            {/* Texto descriptivo - Reducido */}
            <p className="text-base md:text-lg lg:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto px-4">
              En <span className="font-bold text-brand-red">10 semanas</span> aprenderás cómo volver a tener <span className="font-bold text-brand-blue">respeto, calma y conexión</span> en casa,
              tanto si hoy hay conflictos, como si solo quieres fortalecer una relación sana.
            </p>
          </div>

          {/* Video de Oli - Más grande y centrado debajo del título */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
              <video
                ref={videoRef}
                className="w-full aspect-video"
                poster="/videos/caos-conexion2.mp4"
                onClick={handleVideoToggle}
                playsInline
                muted
                loop
              >
                <source src="/videos/caos-conexion2.mp4" type="video/mp4" />
                <track
                  kind="subtitles"
                  src="/videos/caos-conexion-subtitles.vtt"
                  srcLang="es"
                  label="Español"
                  default
                />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Overlay de play/pause */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-black/30 cursor-pointer transition-opacity hover:bg-black/40"
                  onClick={handleVideoToggle}
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 md:w-10 md:h-10 text-brand-red ml-1" fill="currentColor" />
                  </div>
                </div>
              )}

              {/* Controles cuando está reproduciendo */}
              {isPlaying && (
                <>
                  {/* Botón de pausa */}
                  <button
                    onClick={handleVideoToggle}
                    className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
                  >
                    <Pause className="w-5 h-5 md:w-6 md:h-6 text-brand-red" fill="currentColor" />
                  </button>

                  {/* Botón de audio */}
                  <button
                    onClick={handleMuteToggle}
                    className="absolute bottom-3 right-16 md:bottom-4 md:right-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-20"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-brand-gray" />
                    ) : (
                      <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />
                    )}
                  </button>
                </>
              )}

              {/* Barra de progreso (no interactiva) */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10">
                <div 
                  className="h-full bg-gradient-to-r from-brand-red to-brand-blue transition-all duration-200"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Miniatura sugerida */}
              {!isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 md:p-6 pb-6 md:pb-8">
                  <p className="text-white text-sm md:text-base lg:text-lg font-semibold text-center">
                    ¿Tu hijo adolescente ya no te escucha? Empieza aquí.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Botón principal - 10% más grande */}
          <div className="space-y-3 md:space-y-4 px-4">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-brand-red to-brand-blue text-white px-9 md:px-11 py-6 md:py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group w-full md:w-auto"
              onClick={() => onScrollToSection('planes')}
            >
              <span className="relative z-10">QUIERO RECUPERAR LA CONEXIÓN</span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>

            {/* Microcopy bajo el botón */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-brand-gray text-xs md:text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Comenzamos cada lunes
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                100% online
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Acceso inmediato
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero3;