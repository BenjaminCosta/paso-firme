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
    <section className="relative py-12 md:py-16 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      {/* Background with image and overlay */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('/imagenes/testimonials.avif')`,
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-brand-teal/5 to-white/30 z-0"></div>

      {/* Decorative effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-teal/10 blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-coral/10 blur-[100px]" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="relative inline-block">
              HISTORIAS REALES
              <span className="absolute bottom-0 left-0 w-full h-1 bg-brand-coral"></span>
            </span>
          </h2>
          <p className="text-gray-200 mt-3 max-w-2xl mx-auto">
            Lo que dicen padres como tú sobre el programa
          </p>
        </div>

        {/* Ultra compact gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className={`bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all ${
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
                      <PlayCircle className="w-12 h-12 text-white/90 hover:text-white transition-colors" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-[5/7] flex items-center justify-center p-2 bg-gray-50">
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

        {/* Minimalist CTA */}
        <div className="text-center mt-10">
          <Button 
            className="bg-gradient-to-r from-brand-teal to-brand-coral text-white font-semibold py-3 px-6 text-base shadow-sm hover:shadow-md transition-all hover:opacity-90"
            size="sm"
          >
            Ver más testimonios
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials3;