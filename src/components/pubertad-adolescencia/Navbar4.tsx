import React, { useState, useEffect } from 'react';

export default function Navbar4() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-3 px-3 sm:px-12 z-50 transition-all duration-500 ${
        isScrolling
          ? 'bg-brand-blue/20 backdrop-blur-lg shadow-lg border-b border-brand-blue/30'
          : 'bg-transparent'
      }`}
    >
      {/* Logo Izquierdo */}
      <a
        href="https://www.familiayformacion.com/"
        rel="noopener noreferrer"
        className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="logos/familia2.png"
          alt="Logo Izquierdo"
          className={`select-none transition-all duration-500 ${
            isScrolling ? 'h-16 md:h-20' : 'h-20 md:h-24'
          } ${isHovered ? 'drop-shadow-[0_0_15px_rgba(47,72,88,0.4)]' : ''}`}
        />
      </a>

      {/* Logo Derecho */}
      <a 
        href="#" 
        className="cursor-pointer transition-transform duration-300 hover:scale-105 active:scale-95"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src="logos/pubertad.png"
          alt="Logo Derecho"
          className={`select-none transition-all duration-500 ${
            isScrolling ? 'h-16 md:h-20' : 'h-20 md:h-24'
          } ${isHovered ? 'drop-shadow-[0_0_15px_rgba(124,57,66,0.4)]' : ''}`}
        />
      </a>
    </nav>
  );
}