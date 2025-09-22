import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";

interface TestimonialsProps {
  onScrollToSection: (id: string) => void;
}

const Testimonials = ({ onScrollToSection }: TestimonialsProps) => {
  const testimonials = [
    { 
      type: "video",
      src: "/videos/vid1.mp4",
      poster: "/imagenes/vid1-poster.png"
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

  return (
    <section className="py-24 bg-gradient-to-b from-white via-brand-purple/5 to-white relative overflow-hidden">
      {/* Background Effects del diseño original */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-purple/10 to-brand-coral/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-coral/10 to-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header con el estilo original */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gradient-to-r from-brand-purple/20 to-brand-coral/20 text-brand-purple text-sm font-semibold px-6 py-2 rounded-full mb-4 backdrop-blur-sm border border-brand-purple/10">
              Testimonios
            </span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-brand-purple to-gray-900 bg-clip-text text-transparent mb-6">
              Experiencias Transformadoras
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Historias reales de familias que han encontrado claridad y conexión a través de nuestro taller
            </p>
          </div>

          {/* Galería de testimonios con el estilo de Testimonials3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-brand-purple/10 hover:border-brand-purple/30 overflow-hidden"
              >
                {item.type === 'video' ? (
                  <div 
                    className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
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
                      webkit-playsinline="true"
                      preload="metadata"
                    />
                    {playingVideo !== index && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                        <PlayCircle className="w-12 h-12 text-white/90 group-hover:text-white transition-colors" />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="aspect-[5/7] bg-gray-50/50 p-2 rounded-lg group-hover:bg-gray-50/70 transition-colors">
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

          {/* CTA Section con el estilo original */}
          <div className="text-center mt-16">
            <Button
              onClick={() => onScrollToSection('inscribirme')}
              size="lg"
              className="bg-gradient-to-r from-brand-purple to-brand-purple/90 hover:from-brand-purple/90 hover:to-brand-purple text-white text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Sé Parte de Estas Historias
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
