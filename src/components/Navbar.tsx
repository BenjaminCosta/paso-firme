import React, { useState, useEffect } from 'react';

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center py-4 px-7 transition-colors duration-300 z-50 ${
        scrolled ? 'bg-black bg-opacity-20' : 'bg-transparent'
      }`}
    >
      <img
        src="logos/familia2.png"
        alt="Logo Izquierdo"
        className="h-20 select-none"
      />
      <img
        src="logos/pasofirme2.png"
        alt="Logo Derecho"
        className="h-20 select-none"
      />
    </nav>
  );
}
