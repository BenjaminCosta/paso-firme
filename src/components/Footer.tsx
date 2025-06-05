import { Instagram, Facebook, Music2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-coral text-white py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center gap-10">
        
        {/* Logo o título */}
        <div className="text-3xl font-bold tracking-wide">
          <h1 className="leading-none">
            FAM<span className="inline-block -mb-1">I</span>LIA Y{" "}
            <span className="ml-1">FORMACI<span className="inline-block -mb-1">Ó</span>N</span>
          </h1>
        </div>

        {/* Contacto */}
        <div>
          <p className="font-semibold uppercase mb-2">Contáctanos</p>
          <p className="mb-1 underline">+52 811 413 1165</p>
          <p className="underline break-all">familiayformacion@gmail.com</p>
        </div>

        {/* Redes + Enlaces */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex justify-center gap-4 text-2xl">
            <a href="#" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" aria-label="TikTok">
              <Music2 className="w-6 h-6" />
            </a>
          </div>
          <div>
            <p className="underline">Blog</p>
            <p className="underline">Preguntas Frecuentes</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
