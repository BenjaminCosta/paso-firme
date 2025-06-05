
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Mi hija llegó nerviosa y salió completamente transformada. Ahora tiene herramientas reales para manejar la ansiedad y se siente segura de comenzar la secundaria. Vale cada peso invertido.", author: "— María José, mamá de Sofía (12 años)", color: "brand-teal" },
    { quote: "Como padre, me sorprendió ver cómo Olivia logró que mi hijo se abriera y hablara de sus miedos. Ahora tiene más confianza en sí mismo y mejor comunicación en casa.", author: "— Roberto, papá de Diego (11 años)", color: "brand-purple" },
    { quote: "El taller online fue perfecto para nosotros. Mi hija pudo participar desde casa y los materiales son excelentes. La metodología de Olivia es única y muy efectiva.", author: "— Carmen, mamá de Valeria (13 años)", color: "brand-yellow" },
    { quote: "No sabíamos cómo ayudar a nuestro hijo con sus miedos sobre la secundaria. Este taller nos dio paz mental a nosotros y confianza a él. Recomendado al 100%.", author: "— Ana y Luis, padres de Mateo (12 años)", color: "brand-coral" }
  ];

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(227, 216, 204, 0.4), rgba(255, 255, 255, 0.6)), url('https://images.unsplash.com/photo-1472396961693-142e6e269027?w=1200&h=600&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-beige/40 via-white/60 to-brand-coral/10"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Lo que dicen las <em className="text-brand-coral">familias</em>
          </h2>
          <p className="text-lg text-text-dark/70">
            Testimonios reales de padres que han visto la transformación en sus hijos
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-white/80 backdrop-blur-sm border border-${testimonial.color}/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <Quote className={`w-8 h-8 text-${testimonial.color} mb-4`} />
                <p className="text-text-dark/80 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div className={`font-semibold text-${testimonial.color}`}>{testimonial.author}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
