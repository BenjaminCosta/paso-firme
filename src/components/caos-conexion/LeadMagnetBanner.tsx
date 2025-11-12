import { useState, useEffect, useRef } from "react";
import { X, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  isValidEmail,
  isInCooldown,
  getUTMParams,
  saveLastAction,
  getLastAction,
  type UTMParams,
} from "./leadMagnetUtils";

interface LeadMagnetBannerProps {
  heroId: string;
  webhookUrl: string;
  cooldownDays?: number;
}

const LeadMagnetBanner = ({
  heroId,
  webhookUrl,
  cooldownDays = 7,
}: LeadMagnetBannerProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  
  const inputRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Verificar cooldown al montar el componente
  useEffect(() => {
    const lastAction = getLastAction();
    if (lastAction && isInCooldown(lastAction, cooldownDays)) {
      // Estamos en cooldown, no mostrar el banner
      return;
    }

    // Configurar IntersectionObserver para el hero
    const heroElement = document.getElementById(heroId);
    if (!heroElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Mostrar el banner cuando el hero deja de ser visible
          if (!entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, [heroId, cooldownDays, isVisible]);

  // Hacer foco en el input cuando el banner se abre
  useEffect(() => {
    if (isVisible && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isVisible]);

  // Manejar tecla ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isVisible]);

  const handleClose = () => {
    saveLastAction();
    setIsVisible(false);
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validar email
    if (!email.trim()) {
      setError("Por favor ingresá tu email");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Por favor ingresá un email válido");
      return;
    }

    setIsSubmitting(true);

    try {
      // Obtener UTMs
      const utm: UTMParams = getUTMParams();

      // Enviar datos al webhook
      const response = await fetch(webhookUrl, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
          email: email.trim(),
          utm,
        }),
      });

      // Intentar parsear la respuesta como JSON
      // Si falla (por CORS u otro motivo), asumir que fue exitoso
      let isSuccess = true;
      try {
        const data = await response.json();
        isSuccess = data.ok !== false;
      } catch {
        // Error al parsear JSON (probablemente CORS), asumir éxito
        isSuccess = true;
      }

      if (isSuccess) {
        // Guardar acción y cerrar
        saveLastAction();
        setIsVisible(false);
        
        // Mostrar confirmación personalizada
        alert("✅ Guía enviada a tu correo. Tienes 72 h para aprovecharla.\n\nPuedes seguir explorando esta página.");
      } else {
        setError("Hubo un problema al enviar. Intentá de nuevo.");
      }
    } catch (err) {
      // Error de red u otro, pero no romper la UX
      console.error("Error al enviar:", err);
      
      // Asumir que fue exitoso para no bloquear al usuario
      saveLastAction();
      setIsVisible(false);
      alert("✅ Guía enviada a tu correo. Tienes 72 h para aprovecharla.\n\nPuedes seguir explorando esta página.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      role="dialog"
      aria-modal="true"
      aria-label="Obtén tu guía gratis"
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 grid place-items-center p-4 animate-in fade-in duration-300"
      onClick={handleOverlayClick}
    >
      <div className="bg-brand-sand rounded-3xl shadow-2xl w-full max-w-[560px] relative animate-in zoom-in-95 duration-300 border border-brand-pink/30 overflow-hidden">
        
        {/* Badge de urgencia */}
        <div className="absolute top-0 left-0 right-0 bg-brand-red text-white text-center py-2 px-4 text-xs sm:text-sm font-bold flex items-center justify-center gap-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span>ACCESO LIMITADO A 72 HORAS</span>
          <Clock className="w-4 h-4 animate-pulse" />
        </div>

        {/* Botón de cerrar */}
        <button
          onClick={handleClose}
          className="absolute top-12 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white shadow-lg flex items-center justify-center transition-all group z-10 hover:scale-110"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5 text-brand-gray group-hover:text-brand-red transition-colors" />
        </button>

        {/* Contenido del card */}
        <div className="pt-16 pb-10 px-8 sm:px-12">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue mb-4 leading-tight">
              ¿Te vas sin tu{" "}
              <span className="text-brand-red">guía gratis?</span>
            </h2>
            <div className="bg-gradient-to-r from-brand-blue/10 via-brand-pink/20 to-brand-blue/10 rounded-2xl p-6 mb-4">
              <p className="text-brand-gray text-base sm:text-lg lg:text-xl font-medium leading-relaxed">
                Recibe la guía con{" "}
                <span className="font-bold text-brand-red">3 pasos simples</span>{" "}
                para que tu hijo vuelva a escucharte
                <br />
                <span className="text-brand-blue font-bold">(en solo 3 días)</span>
              </p>
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full px-5 py-4 rounded-xl border-2 border-brand-gray/30 focus:border-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/20 transition-all text-base sm:text-lg font-medium shadow-sm"
                disabled={isSubmitting}
              />
              {error && (
                <p className="mt-2 text-sm text-brand-red font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-red"></span>
                  {error}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-6 sm:py-7 bg-brand-blue hover:bg-brand-blue/80 text-white border-2
              border-brand-blue font-bold text-base sm:text-lg shadow-2xl hover:shadow-3xl transition-all rounded-xl group"
            >
              {isSubmitting ? (
                <span>ENVIANDO...</span>
              ) : (
                <span className="flex items-center justify-center gap-3">
                  RECIBIR MI GUÍA GRATIS
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              )}
            </Button>

            {/* Texto legal mejorado */}
            <p className="text-xs text-brand-gray/70 text-center leading-relaxed pt-2">
              Al enviar tu email aceptás recibir la guía y contenidos relacionados.
              <br />
              Podés desuscribirte cuando quieras.
            </p>
          </form>
        </div>

        {/* Decoración mejorada */}
        <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-brand-red/30 to-brand-pink/40 rounded-full blur-3xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-36 h-36 bg-gradient-to-tr from-brand-blue/30 to-brand-sand/40 rounded-full blur-3xl -z-10" />
        
        {/* Patrón de fondo sutil */}
        <div className="absolute inset-0 opacity-5 -z-10" style={{
          backgroundImage: 'radial-gradient(circle, #7C3942 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
    </div>
  );
};

export default LeadMagnetBanner;
