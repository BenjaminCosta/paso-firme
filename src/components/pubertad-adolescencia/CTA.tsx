import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onScrollToSection: (id: string) => void;
}

const CTA = ({ onScrollToSection }: CTAProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple to-brand-coral relative overflow-hidden">
      {/* Overlay Pattern */}
      <div className="absolute inset-0 bg-black/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Acompaña a Tu Hijo en Esta Etapa Importante
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No pierdas la oportunidad de fortalecer tu relación familiar y
            brindar herramientas valiosas para el desarrollo
          </p>

          {/* CTA Button */}
          <Button
            onClick={() => onScrollToSection('inscribirme')}
            size="lg"
            className="bg-white text-brand-purple hover:bg-white/90 group"
          >
            ¡Quiero Participar!
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-semibold">Contenido Validado</p>
              <p className="text-sm text-white/80">Por especialistas en desarrollo</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-semibold">Enfoque Práctico</p>
              <p className="text-sm text-white/80">Herramientas aplicables</p>
            </div>
            <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-semibold">Comunidad de Apoyo</p>
              <p className="text-sm text-white/80">Acompañamiento continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
