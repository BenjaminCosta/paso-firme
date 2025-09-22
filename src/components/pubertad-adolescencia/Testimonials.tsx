import { Button } from "@/components/ui/button";
import { Quote } from "lucide-react";

interface TestimonialsProps {
  onScrollToSection: (id: string) => void;
}

const Testimonials = ({ onScrollToSection }: TestimonialsProps) => {
  // Placeholder for future testimonial
  const testimonial = {
    quote: "[Espacio reservado para testimonio futuro]",
    author: "Próximamente",
    role: "Participante del taller"
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-brand-purple/5 to-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-purple/10 to-brand-coral/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-coral/10 to-brand-purple/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-brand-purple/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
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

          {/* Testimonial Card */}
          <div className="group bg-white/80 backdrop-blur-md p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-brand-purple/10 hover:border-brand-purple/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 to-brand-coral/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-purple/10 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-brand-coral/10 to-transparent rounded-full blur-2xl transform -translate-x-16 translate-y-16" />
            
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-brand-purple/10 to-brand-coral/10 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                <Quote className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="flex-1">
                <p className="text-xl text-gray-600 italic mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {testimonial.quote}
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-semibold text-lg text-gray-900 group-hover:text-brand-purple transition-colors duration-300">
                    {testimonial.author}
                  </p>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
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
