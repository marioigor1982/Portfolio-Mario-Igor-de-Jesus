
import React, { useState, useEffect, useCallback } from 'react';
import { Github, Linkedin, Sparkles } from 'lucide-react';

const roles = ["Low Coder", "Vibe Coder", "Especialista em Soluções com IA", "Insight & Criatividade"];

const useTypewriter = (texts: string[], speed: number = 100, delay: number = 2000) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  const handleTyping = useCallback(() => {
    const i = loopNum % texts.length;
    const fullText = texts[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    const typeSpeed = isDeleting ? speed / 2 : speed;

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
    
    return typeSpeed;
  }, [isDeleting, loopNum, speed, text, texts, delay]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleTyping();
    }, handleTyping());

    return () => clearTimeout(timer);
  }, [text, handleTyping]);

  return text;
};


const Hero: React.FC = () => {
  const typedText = useTypewriter(roles);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen flex items-end justify-center text-center relative overflow-hidden">
      <div className="z-10 animate-fade-in-up pb-20 md:pb-28 px-6" style={{ animationFillMode: 'forwards' }}>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium mb-6">
          <Sparkles size={14} /> Transformando ideias em realidade com IA
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          Mario Igor de Jesus
        </h1>
        <p className="text-2xl md:text-4xl text-sky-400 font-medium mb-8 h-12">
          {typedText}
          <span className="animate-cursor-blink">|</span>
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg md:text-xl">
          Personalizando sites que você pode chamar de <span className="text-white font-bold">SEU</span>. 
          Soluções inteligentes, preços justos e foco total no seu objetivo.
        </p>
        <div className="flex justify-center space-x-6 mb-10">
          <a href="https://github.com/marioigor1982" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/marioigor82" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
            <Linkedin size={32} />
          </a>
        </div>
        <button
          onClick={handleScrollToProjects}
          className="bg-sky-500 text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-sky-500/20"
        >
          Explorar Soluções
        </button>
      </div>
    </section>
  );
};

export default Hero;
