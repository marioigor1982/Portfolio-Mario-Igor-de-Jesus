// FIX: Corrected import statement to include useState, useEffect, and useCallback from React.
import React, { useState, useEffect, useCallback } from 'react';
import Section from './Section';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: 'Tapiocaria Delegusty',
    description: 'Website para uma tapiocaria, com cardápio digital interativo, informações de contato e um design atraente focado na experiência do cliente.',
    imageUrl: 'https://picsum.photos/seed/project-tapiocaria/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://tapiocaria-delegusty.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Tapiocaria_Delegusty',
  },
  {
    title: 'Corretor Leandro',
    description: 'Landing page para um corretor de imóveis, com design profissional, focado na captação de leads e apresentação de imóveis.',
    imageUrl: 'https://picsum.photos/seed/project-corretor/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Landing Page'],
    liveUrl: 'https://corretor-leandro.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Corretor_Leandro',
  },
  {
    title: 'Art em Movimento Academia',
    description: 'Website institucional para uma academia de dança, com design moderno e responsivo, focado na apresentação de modalidades, horários e contato.',
    imageUrl: 'https://i.postimg.cc/5tVHmYH0/capa-academia.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    liveUrl: 'https://art-em-movimento-academia.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Art-em-Movimento-Academia',
  },
  {
    title: 'Now Suggar Glicemia',
    description: 'Aplicação para aferição e monitoramento de níveis de glicemia, ajudando usuários a registrar e acompanhar seus dados de saúde de forma simples e eficaz.',
    imageUrl: 'https://i.postimg.cc/KjWSDHNX/capa-now-suggar.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://now-suggar.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Now_Suggar',
  },
  {
    title: 'Ateliê Talyta Costa',
    description: 'E-commerce completo para um ateliê de costura, com catálogo de produtos, carrinho de compras e design elegante focado na marca.',
    imageUrl: 'https://picsum.photos/seed/project-atelie/600/400',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'E-commerce'],
    liveUrl: 'https://atelietalytacosta.com.br/',
    repoUrl: '#',
  },
  {
    title: '7Play Connect',
    description: 'Plataforma de streaming e conteúdo, oferecendo uma experiência de usuário rica e interativa para acesso a diversos canais e mídias.',
    imageUrl: 'https://picsum.photos/seed/project-7play/600/400',
    tags: ['React', 'Next.js', 'Streaming', 'API Integration'],
    liveUrl: 'https://www.7playconnect.com/',
    repoUrl: '#',
  },
  {
    title: 'Landing Page Lava rápido',
    description: 'Landing page para um lava rápido, com design moderno e focado na apresentação dos serviços e contato.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Landing Page'],
    liveUrl: 'https://aqua-clean-car-wash.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/aqua-clean-car-wash',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  const isLivePreview = 
    project.liveUrl && 
    (project.title === 'Corretor Leandro' || project.title === 'Art em Movimento Academia' || project.title === 'Now Suggar Glicemia' || project.title === 'Ateliê Talyta Costa' || project.title === '7Play Connect' || project.title === 'Landing Page Lava rápido' || project.title === 'Tapiocaria Delegusty');

  return (
    <div className="bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 transform hover:-translate-y-2 h-full flex flex-col">
      <div className="relative overflow-hidden h-48 bg-gray-900">
        {isLivePreview ? (
          <>
            <div className="absolute inset-0 w-full h-full transform origin-top-left group-hover:scale-105 transition-transform duration-500" style={{ transform: 'scale(0.33)', transformOrigin: 'top left' }}>
              <iframe
                src={project.liveUrl}
                className="w-[1280px] h-[860px] border-none"
                style={{ pointerEvents: 'none' }}
                scrolling="no"
                onLoad={() => setIsLoading(false)}
                title={`Live preview of ${project.title}`}
              />
            </div>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800/80">
                <p className="text-sky-300 animate-pulse">Carregando prévia...</p>
              </div>
            )}
            <div className="absolute inset-0 bg-transparent group-hover:bg-black/20 transition-all duration-300"></div>
          </>
        ) : (
          <>
            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
          </>
        )}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm flex-grow">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-sky-500/20 text-sky-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center gap-1">
              <ExternalLink size={20} /> Demo
            </a>
          )}
          {project.repoUrl && project.repoUrl !== '#' && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center gap-1">
              <Github size={20} /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidePercentage, setSlidePercentage] = useState(25); // Default to 4 items view

  useEffect(() => {
    const updateSlidePercentage = () => {
      const width = window.innerWidth;
      if (width >= 1280) { // xl and up
        setSlidePercentage(25); // 4 items
      } else if (width >= 768) { // md and up
        setSlidePercentage(50); // 2 items
      } else {
        setSlidePercentage(100); // 1 item
      }
    };

    updateSlidePercentage();
    window.addEventListener('resize', updateSlidePercentage);

    return () => window.removeEventListener('resize', updateSlidePercentage);
  }, []);

  const itemsInView = 100 / slidePercentage;
  const lastValidIndex = projects.length > itemsInView ? projects.length - itemsInView : 0;

  const handleNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex >= lastValidIndex ? 0 : prevIndex + 1));
  }, [lastValidIndex]);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex <= 0 ? lastValidIndex : prevIndex - 1));
  };
  
  useEffect(() => {
    if (currentIndex > lastValidIndex) {
      setCurrentIndex(lastValidIndex);
    }
  }, [currentIndex, lastValidIndex]);


  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex, isPaused, handleNext]);


  return (
    <Section id="projects" title="Projetos">
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slidePercentage}%)` }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-3"
                style={{ width: `${slidePercentage}%` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          aria-label="Previous project"
          className="absolute top-1/2 -translate-y-1/2 left-[-1rem] md:left-[-2rem] xl:left-[-3rem] z-10 p-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-white hover:bg-sky-500/50 transition-colors"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Next project"
          className="absolute top-1/2 -translate-y-1/2 right-[-1rem] md:right-[-2rem] xl:right-[-3rem] z-10 p-2 bg-gray-800/60 backdrop-blur-sm rounded-full text-white hover:bg-sky-500/50 transition-colors"
        >
          <ChevronRight size={28} />
        </button>

        { lastValidIndex > 0 && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 pt-4">
            {Array.from({ length: lastValidIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-sky-400 w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;