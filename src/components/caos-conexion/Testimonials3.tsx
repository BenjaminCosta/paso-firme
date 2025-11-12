import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

const Testimonials3 = () => {
  const testimonials = [
    { 
      type: "video",
      src: "/videos/vid1.mp4",
      poster: "/imagenes/vid1-poster.png" // Add poster images for better loading
    },
    { 
      type: "image",
      src: "/imagenes/msj2.jpeg"
    },
    { 
      type: "video",
      src: "/videos/vid2.mp4",
      poster: "/imagenes/vid2-poster.png"
    },
    { 
      type: "image",
      src: "/imagenes/msj3.jpeg"
    },
    { 
      type: "video",
      src: "/videos/vid3.mp4",
      poster: "/imagenes/vid3-poster.png"
    },
    { 
      type: "image",
      src: "/imagenes/msj4.jpeg"
    }
  ];

  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoClick = (index: number) => {
    if (playingVideo === index) {
      // Pause if clicking the currently playing video
      videoRefs.current[index]?.pause();
      setPlayingVideo(null);
    } else {
      // Pause any currently playing video
      if (playingVideo !== null) {
        videoRefs.current[playingVideo]?.pause();
      }
      
      // Play the new video
      videoRefs.current[index]?.play();
      setPlayingVideo(index);
    }
  };

  return (
    <section className="relative py-12 md:py-16 px-4 sm:px-6 bg-gradient-to-br from-brand-sand via-white to-brand-pink/10 overflow-hidden">
      {/* Background with image and overlay */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('/imagenes/testimonials.avif')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-brand-sand/30 via-white/20 to-brand-pink/10 z-0"></div>

      {/* Formas geométricas decorativas modernas */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-brand-pink/20 rounded-lg rotate-12 z-0 hidden sm:block"></div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-brand-blue/5 rounded-full z-0 hidden sm:block"></div>
      <div className="absolute top-1/3 right-10 w-24 h-24 border-2 border-brand-red/10 rounded-full z-0 hidden md:block"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-brand-pink/10 rotate-45 z-0 hidden lg:block"></div>

      {/* Decorative effects with blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-red/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-blue/5 blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block bg-brand-pink/30 text-brand-red text-xs sm:text-sm font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4 sm:mb-6">
            Testimonios Reales
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-blue mb-4 leading-tight">
            Más de{" "}
            <span className="font-dancing text-brand-red text-4xl sm:text-5xl md:text-6xl">1 000 familias</span>{" "}
            ya viven con más calma, respeto y conexión.
          </h2>
          <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-brand-red to-brand-blue mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            Estas son algunas de las historias reales de mamás y papás que decidieron transformar su relación con sus hijos.
          </p>
        </div>

        {/* Ultra compact gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className={`bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-brand-pink/20 hover:shadow-xl hover:border-brand-red/30 transition-all ${
                item.type === 'video' ? 'flex flex-col' : ''
              }`}
            >
              {item.type === 'video' ? (
                <div 
                  className="relative aspect-square mb-3 rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => handleVideoClick(index)}
                >
                  <video 
                    ref={el => videoRefs.current[index] = el}
                    src={item.src}
                    poster={item.poster}
                    className="w-full h-full object-cover rounded-lg"
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true" // For iOS Safari
                    preload="metadata" // Better performance
                  />
                  {playingVideo !== index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <PlayCircle className="w-12 h-12 text-white/90 hover:text-white transition-colors drop-shadow-lg" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-[5/7] flex items-center justify-center p-2 bg-brand-sand/30">
  <img
    src={item.src}
    alt="Testimonio"
    className="w-full h-full object-contain rounded-lg"
    loading="lazy"
  />
</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA mejorado */}
        <div className="text-center mt-10">
          <Button 
            className="bg-white text-brand-blue border-2 border-brand-red font-bold py-4 px-8 text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-brand-red hover:text-white rounded-full group"
            size="lg"
          >
            Ver más testimonios
            <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;