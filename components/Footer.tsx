
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900/50 border-t border-gray-800">
      <div className="container mx-auto px-6 py-6 text-center text-gray-500">
        <p>&copy; {currentYear} Mario Igor de Jesus. Todos os direitos reservados.</p>
        <p className="text-sm mt-2">Desenvolvido com React e Tailwind CSS.</p>
      </div>
    </footer>
  );
};

export default Footer;
