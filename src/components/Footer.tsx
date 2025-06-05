
const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-text-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-text-dark via-brand-purple/20 to-text-dark"></div>
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="mb-4 flex justify-center items-center gap-8">
          <img 
            src="/lovable-uploads/d93ed4ab-9c23-4e56-8a19-e4ca0784924f.png" 
            alt="Paso Firme a Secundaria" 
            className="h-16 w-auto opacity-80"
          />
          <img 
            src="/lovable-uploads/c505e395-9f13-4699-a5f1-901271122054.png" 
            alt="Familia y Formación" 
            className="h-12 w-auto opacity-80"
          />
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">
            <em>Paso Firme a Secundaria</em>
          </h3>
          <p className="text-white/70">Fortaleciendo lo que no enseña la escuela</p>
        </div>
        <div className="border-t border-white/20 pt-4">
          <p className="text-white/60">
            © 2024 Olivia Rodríguez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
