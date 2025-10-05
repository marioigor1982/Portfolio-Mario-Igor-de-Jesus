import React from 'react';
import Section from './Section';
import { Mail, Github, Linkedin } from 'lucide-react';

// Improved Discord Icon
const DiscordIcon = ({ size = 32 }: { size?: number }) => (
  <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.317 4.369a1.875 1.875 0 00-1.55-.823H5.233c-.682 0-1.28.373-1.55.823-1.424 2.4-1.84 4.81-1.674 7.21a13.43 13.43 0 003.33 5.311 1.83 1.83 0 002.738-.428 10.518 10.518 0 002.83-2.45c.01-.01.02-.02.02-.03a.32.32 0 01.06-.08c.03-.04.06-.08.08-.12.08-.11.16-.23.23-.34l.02-.03c-.15.09-.3.18-.45.26-.1.06-.2.11-.3.17-.05.03-.1.06-.15.09a.32.32 0 00-.07.05 10.15 10.15 0 01-2.01 1.22c-.22.1-.45.17-.68.23-.27.07-.55.1-.83.13-1.12.24-2.22.1-3.2-.28-1.8-1.24-2.81-2.9-3.05-4.88-.17-2.46.25-4.87 1.67-7.27H20.317zM8.44 12.82c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2s-.54 1.2-1.2 1.2zm7.12 0c-.66 0-1.2-.54-1.2-1.2s.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2s-.53 1.2-1.2 1.2z"/>
  </svg>
);

// New official WhatsApp Icon
const WhatsAppIcon = ({ size = 32 }: { size?: number }) => (
    <svg role="img" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.371-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.522.074-.792.372-.271.296-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
    </svg>
);


const Contact: React.FC = () => {
  const email = 'mario.igor1982@gmail.com';
  const whatsappNumber = '5562991619560';
  const discordUsername = 'mario.igor82';

  const handleDiscordClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(discordUsername)
        .then(() => {
          alert(`Usuário do Discord "${discordUsername}" copiado para a área de transferência!`);
        })
        .catch(err => {
          console.error('Failed to copy text: ', err);
          alert('Não foi possível copiar o nome de usuário.');
        });
    } else {
      alert('A funcionalidade de copiar não é suportada neste navegador.');
    }
  };


  return (
    <Section id="contact" title="Entre em Contato">
      <div className="text-center max-w-2xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12">
        <p className="text-lg mb-8">
          Estou sempre aberto a novas oportunidades e colaborações. Se você tem um projeto em mente, uma pergunta ou apenas quer dizer oi, sinta-se à vontade para me contatar.
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-block bg-sky-500 text-white font-bold py-4 px-10 rounded-full text-xl hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20 mb-12"
        >
          <div className="flex items-center gap-3">
            <Mail size={24} />
            <span>Enviar um E-mail</span>
          </div>
        </a>
        <div className="flex justify-center space-x-6 md:space-x-8">
          <a href="https://github.com/marioigor1982" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110 flex flex-col items-center gap-2">
            <Github size={32} />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/marioigor82" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110 flex flex-col items-center gap-2">
            <Linkedin size={32} />
            <span>LinkedIn</span>
          </a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110 flex flex-col items-center gap-2">
            <WhatsAppIcon size={32} />
            <span>WhatsApp</span>
          </a>
          <a 
            href="#" 
            onClick={handleDiscordClick}
            title={`Copiar usuário: ${discordUsername}`}
            className="text-gray-400 hover:text-sky-400 transition-transform duration-300 hover:scale-110 flex flex-col items-center gap-2 cursor-pointer"
          >
            <DiscordIcon size={32} />
            <span>Discord</span>
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;