import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface CTAProps {
  onScrollToSection: (id: string) => void;
}

const CTA = ({ onScrollToSection }: CTAProps) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=2070')`,
        }}
      />

      {/* Overlay con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/95 via-brand-purple/90 to-brand-coral/90" />
      
      {/* Patrones decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-coral/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8 border border-white/20">
            <span className="text-white/90 font-medium">¡Última oportunidad!</span>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Acompaña a Tu Hijo en Esta 
            <span className="bg-gradient-to-r from-white via-white to-brand-coral/90 bg-clip-text text-transparent"> Etapa Importante</span>
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            No pierdas la oportunidad de fortalecer tu relación familiar y
            brindar herramientas valiosas para el desarrollo
          </p>

          {/* CTA Button con diseño mejorado */}
          <Button
            onClick={() => onScrollToSection('inscribirme')}
            size="lg"
            className="bg-white text-brand-purple hover:bg-white/90 group px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            ¡Quiero Participar!
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* Trust Badges con diseño mejorado */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
              <p className="font-semibold text-lg mb-2">Contenido Validado</p>
              <p className="text-white/80">Por especialistas en desarrollo</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
              <p className="font-semibold text-lg mb-2">Enfoque Práctico</p>
              <p className="text-white/80">Herramientas aplicables</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-colors">
              <p className="font-semibold text-lg mb-2">Comunidad de Apoyo</p>
              <p className="text-white/80">Acompañamiento continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
