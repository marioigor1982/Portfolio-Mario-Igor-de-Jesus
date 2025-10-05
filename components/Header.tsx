
import React, { useState, useEffect } from 'react';

const navLinks = [
  { id: 'about', title: 'Sobre' },
  { id: 'skills', title: 'Habilidades' },
  { id: 'projects', title: 'Projetos' },
  { id: 'contact', title: 'Contato' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.getElementById(link.id));
      let currentSection = '';
      for (const section of sections) {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 150) {
            currentSection = section.id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <button
          onClick={handleScrollToTop}
          className="focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-full"
          aria-label="Voltar ao topo"
        >
          <img
            src="https://i.postimg.cc/Lsqzh7pb/Front-End-Developer-Mario-Igor-de-Jesus.png"
            alt="Logo Mario Igor"
            className="h-12 w-12 rounded-full object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_15px_rgba(14,165,233,0.8)]"
          />
        </button>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`text-lg font-medium transition-colors duration-300 ${activeSection === link.id ? 'text-sky-400' : 'text-gray-300 hover:text-sky-400'}`}
            >
              {link.title}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;