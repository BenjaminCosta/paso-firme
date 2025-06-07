import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-coral text-white py-[72px] px-7 md:px-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10">
        
        {/* Logo o título */}
        <div className="tracking-wide">
          <img className="h-8 w-auto" src="/logos/logofooter.png" alt="Familia y Formacion" />
        </div>

        {/* Contacto */}
        <div>
          <p className="font-semibold uppercase mb-2">Contáctanos</p>
          <a href="tel:+528114131165" className="mb-1 underline block">+52 811 413 1165</a>
          <a href="mailto:familiayformacion@gmail.com" className="underline break-all">familiayformacion@gmail.com</a>
        </div>

        {/* Redes + Enlaces */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 text-2xl">
            <a href="https://www.instagram.com/familiayformacion/?igsh=anJ3ZXJ0djh5NDJ0#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/people/familiayformacion/100065083698586/?mibextid=LQQJ4d" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6" />
            </a>
            {/* TikTok */}
            <a href="https://www.tiktok.com/@familiaformacion?_t=8qPWyYwCOqD&_r=1"
              target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
                <path d="M9.5 3a1 1 0 011-1h3a1 1 0 011 1v.2a4.8 4.8 0 003.3 4.2c.2.1.4.1.6.1h.6a1 1 0 011 1v2.3a1 1 0 01-1 1h-.4a6.9 6.9 0 01-4.1-1.3v5.9a6.5 6.5 0 11-6.5-6.5h.2a1 1 0 011 1v2.3a1 1 0 01-1 1H9a2.5 2.5 0 102.5 2.5V3z"/>
              </svg>
            </a>
          </div>
          <div>
            <a href="https://www.familiayformacion.com/blog" className="underline block" target="_blank" rel="noopener noreferrer">Blog</a>
            <a href="https://www.familiayformacion.com/preguntas-drecuentes" className="underline block" target="_blank" rel="noopener noreferrer">Preguntas Frecuentes</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
