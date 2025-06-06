import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 300); // Se considera "detenido" si no hay scroll en 150ms
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-3 px-6 z-50 transition-all duration-500 ${
        isScrolling
          ? 'bg-black bg-opacity-30 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      {/* Logo Izquierdo */}
      <a
        href="https://www.familiayformacion.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        <img
          src="logos/familia2.png"
          alt="Logo Izquierdo"
          className={`select-none transition-all duration-500 ${
            isScrolling ? 'h-20' : 'h-24'
          }`}
        />
      </a>

      {/* Logo Derecho */}
      <a href="#ancla" className="cursor-pointer">
        <img
          src="logos/pasofirme2.png"
          alt="Logo Derecho"
          className={`select-none transition-all duration-500 ${
            isScrolling ? 'h-20' : 'h-24'
          }`}
        />
      </a>
    </nav>
  );
}
