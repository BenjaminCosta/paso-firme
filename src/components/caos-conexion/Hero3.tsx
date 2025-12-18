import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import Player from "@vimeo/player";

interface HeroSectionProps {
  onScrollToSection: (id: string) => void;
}

const Hero3 = ({ onScrollToSection }: HeroSectionProps) => {
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showPoster, setShowPoster] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);

  const backgroundImage = '';

  // Inicializar Vimeo Player
  useEffect(() => {
    if (iframeRef.current) {
      const player = new Player(iframeRef.current);
      playerRef.current = player;

      // Escuchar evento de reproducción para ocultar poster
      player.on('playing', () => {
        setShowPoster(false);
      });

      // Actualizar barra de progreso
      player.on('timeupdate', (data) => {
        setShowPoster(false);
        const progress = (data.seconds / data.duration) * 100;
        setProgress(progress);
      });

      return () => {
        player.destroy();
      };
    }
  }, []);

  // Toggle mute/unmute
  const handleMuteToggle = async () => {
    if (playerRef.current) {
      try {
        if (isMuted) {
          await playerRef.current.setMuted(false);
          await playerRef.current.setVolume(1);
          setIsMuted(false);
        } else {
          await playerRef.current.setMuted(true);
          await playerRef.current.setVolume(0);
          setIsMuted(true);
        }
      } catch (error) {
        console.error('Error toggling mute:', error);
      }
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
              Recupera la Calma y la Conexión con tu Hijo,<br />
              <span className="text-brand-red">SIN Gritar y SIN Perder Autoridad.</span>
            </h1>
            
            {/* Texto descriptivo - Reducido */}
            <p className="text-base md:text-lg lg:text-xl text-brand-gray leading-relaxed max-w-3xl mx-auto px-4">
              En menos de <span className="font-bold text-brand-red">10 semanas</span> con mi Método <span className="font-bold text-brand-blue">'CALMA'</span> vas a lograr que tu hijo te escuche, te haga caso y hable contigo sin gritos ni peleas, para que vuelva la calma, el respeto, la buena comunicación y una convivencia más sana en casa.
            </p>
          </div>

          {/* Video de Vimeo - Background con controles custom */}
          <div className="max-w-3xl mx-auto px-4">
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-2xl bg-black/20 backdrop-blur-sm border border-white/20">
              <div className="relative w-full aspect-video">
                {/* Poster image - se oculta cuando el video empieza */}
                {showPoster && (
                  <div className="absolute inset-0 z-20 bg-black">
                    <img 
                      src="/imagenes/facilitadora2 copy.jpg" 
                      alt="Video preview"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback a .webp si .jpg no existe
                        e.currentTarget.src = "/imagenes/facilitadora2 copy.webp";
                      }}
                    />
                  </div>
                )}

                {/* Iframe de Vimeo - sin interacción */}
                <iframe
                  ref={iframeRef}
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  src="https://player.vimeo.com/video/1147753752?autoplay=1&loop=1&muted=1&autopause=0&background=1&controls=0&title=0&byline=0&portrait=0"
                  title="Video de introducción - Del Caos a la Conexión"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                />

                {/* Overlay con controles custom */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Botón de audio - arriba a la derecha */}
                  <button
                    onClick={handleMuteToggle}
                    className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-30 pointer-events-auto"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-brand-gray" />
                    ) : (
                      <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-brand-red" />
                    )}
                  </button>

                  {/* Barra de progreso - solo lectura */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-10 pointer-events-none">
                    <div 
                      className="h-full bg-gradient-to-r from-brand-red to-brand-blue transition-all duration-200"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Botón principal - 10% más grande */}
          <div className="space-y-3 md:space-y-4 px-4">
            <a 
              href="https://wa.me/5215552106494?text=Hola%20Olivia!%20Quiero%20ingresar%20a%20tu%20Programa%20Del%20Caos%20a%20la%20Conexi%C3%B3n%2C%20vengo%20de%20tu%20p%C3%A1gina%2C%20mi%20nombre%20es…"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-brand-red to-brand-blue text-white px-9 md:px-11 py-6 md:py-7 text-lg md:text-xl font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-3xl group w-full md:w-auto"
              >
                <span className="relative z-10">QUIERO RECUPERAR LA CONEXIÓN</span>
                <span className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-red opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
            </a>

            {/* Microcopy bajo el botón */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-brand-gray text-xs md:text-sm">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                100% online y flexible
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Empiezas cuando quieras
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                Acceso inmediato + acompañamiento
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero3;