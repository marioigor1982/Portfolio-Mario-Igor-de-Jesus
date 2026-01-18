
import React, { useState, useEffect, useCallback } from 'react';
import Section from './Section';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Layout, Construction } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl: string;
  isFeatured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Sistema Sapien | CRM Imobiliário',
    description: 'Um sistema CRM robusto e especializado para o mercado imobiliário. Atualmente em desenvolvimento, focado na gestão eficiente de leads, imóveis e automação de vendas.',
    imageUrl: 'https://picsum.photos/seed/sapien/600/400',
    tags: ['React', 'CRM', 'Em Construção', 'Enterprise'],
    liveUrl: 'https://sapien-crm-imobili-rio.vercel.app/',
    repoUrl: 'https://vercel.com/mario-igor-de-jesus-projects?repo=https://github.com/marioigor1982/Sapien--CRM-Imobili-rio-',
    isFeatured: true,
  },
  {
    title: 'Climatek | Ar Condicionado',
    description: 'Landing page profissional para serviços de instalação e manutenção de ar condicionado, com design focado em conversão e clareza na apresentação de serviços.',
    imageUrl: 'https://picsum.photos/seed/climatek/600/400',
    tags: ['Landing Page', 'Services', 'Vibe Coding'],
    liveUrl: 'https://climatek-instala-o-e-manuten-o-de-a.vercel.app/',
    repoUrl: 'https://vercel.com/mario-igor-de-jesus-projects/climatek-instala-o-e-manuten-o-de-ar-condicionado/54pUPPVf2MJvWrLGVWN6FsjHhdB2',
  },
  {
    title: 'GP Pintura',
    description: 'Website institucional para prestação de serviços de pintura comercial e residencial, destacando o portfólio de acabamentos e facilidade de contato.',
    imageUrl: 'https://picsum.photos/seed/gppintura/600/400',
    tags: ['Portfolio', 'Institucional', 'Clean Design'],
    liveUrl: 'https://gp-pintura.vercel.app/',
    repoUrl: 'https://vercel.com/mario-igor-de-jesus-projects?repo=https://github.com/marioigor1982/GP---Pintura',
  },
  {
    title: 'Corretor Leandro',
    description: 'Landing page para um corretor de imóveis, com design profissional, focado na captação de leads e apresentação de imóveis.',
    imageUrl: 'https://picsum.photos/seed/project-corretor/600/400',
    tags: ['Imobiliário', 'Lead Capture', 'Modern'],
    liveUrl: 'https://corretor-leco.vercel.app/',
    repoUrl: 'https://vercel.com/mario-igor-de-jesus-projects?repo=https://github.com/marioigor1982/Corretor-Leco',
  },
  {
    title: 'Tapiocaria Delegusty',
    description: 'Website para uma tapiocaria, com cardápio digital interativo, informações de contato e um design atraente focado na experiência do cliente.',
    imageUrl: 'https://picsum.photos/seed/project-tapiocaria/600/400',
    tags: ['Cardápio Digital', 'Food', 'Interactive'],
    liveUrl: 'https://tapiocaria-delegusty.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Tapiocaria_Delegusty',
  },
  {
    title: 'Art em Movimento Academia',
    description: 'Website institucional para uma academia de dança, com design moderno e responsivo, focado na apresentação de modalidades, horários e contato.',
    imageUrl: 'https://i.postimg.cc/5tVHmYH0/capa-academia.png',
    tags: ['Fitness', 'Schedule', 'Dynamic'],
    liveUrl: 'https://art-em-movimento-academia.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Art-em-Movimento-Academia',
  },
  {
    title: 'Now Suggar Glicemia',
    description: 'Aplicação para aferição e monitoramento de níveis de glicemia, ajudando usuários a registrar e acompanhar seus dados de saúde.',
    imageUrl: 'https://i.postimg.cc/KjWSDHNX/capa-now-suggar.png',
    tags: ['Saúde', 'Monitoring', 'Tool'],
    liveUrl: 'https://now-suggar.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Now_Suggar',
  },
  {
    title: 'Ateliê Talyta Costa',
    description: 'E-commerce completo para um ateliê de costura, com catálogo de produtos, carrinho de compras e design elegante.',
    imageUrl: 'https://picsum.photos/seed/project-atelie/600/400',
    tags: ['E-commerce', 'Fashion', 'Store'],
    liveUrl: 'https://atelietalytacosta.com.br/',
    repoUrl: '#',
  },
  {
    title: '7Play Connect',
    description: 'Plataforma de streaming e conteúdo, oferecendo uma experiência de usuário rica e interativa.',
    imageUrl: 'https://picsum.photos/seed/project-7play/600/400',
    tags: ['Streaming', 'Entertainment', 'Platform'],
    liveUrl: 'https://www.7playconnect.com/',
    repoUrl: '#',
  },
  {
    title: 'Landing Page Lava rápido',
    description: 'Landing page para um lava rápido, com design moderno e focado na apresentação dos serviços.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    tags: ['Landing Page', 'Service', 'Quick Launch'],
    liveUrl: 'https://aqua-clean-ten.vercel.app/',
    repoUrl: 'https://github.com/marioigor1982/Aqua_Clean',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isLoading, setIsLoading] = useState(true);

  const isLivePreview = project.liveUrl && (
    project.liveUrl.includes('vercel.app') || 
    project.liveUrl.includes('atelietalytacosta') || 
    project.liveUrl.includes('7playconnect')
  );

  return (
    <div className={`bg-gray-800/50 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20 transform hover:-translate-y-2 h-full flex flex-col border-2 ${project.isFeatured ? 'border-sky-500/40 shadow-lg shadow-sky-500/10' : 'border-gray-700/30'}`}>
      <div className="relative overflow-hidden h-48 bg-gray-900">
        {project.isFeatured && (
          <div className="absolute top-2 right-2 z-20 bg-sky-500 text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg flex items-center gap-1">
             <Construction size={12} /> EM CONSTRUÇÃO
          </div>
        )}
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
                <p className="text-sky-300 animate-pulse">Iniciando Vibe...</p>
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.isFeatured && <span className="text-sky-400 font-bold text-xs uppercase tracking-widest">Destaque</span>}
        </div>
        <p className="text-gray-400 mb-4 text-sm flex-grow leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="bg-sky-500/10 text-sky-300 text-[10px] font-bold px-2 py-1 rounded border border-sky-500/20 uppercase">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end space-x-4 mt-auto">
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
              <ExternalLink size={18} /> Ver Online
            </a>
          )}
          {project.repoUrl && project.repoUrl !== '#' && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors duration-300 flex items-center gap-1 text-sm font-medium">
              <Github size={18} /> Projeto
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
  const [slidePercentage, setSlidePercentage] = useState(25);

  useEffect(() => {
    const updateSlidePercentage = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setSlidePercentage(25);
      } else if (width >= 768) {
        setSlidePercentage(50);
      } else {
        setSlidePercentage(100);
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
    <Section id="projects" title="Soluções Entregues">
      <div
        className="relative max-w-7xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="overflow-hidden py-4">
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
          aria-label="Anterior"
          className="absolute top-1/2 -translate-y-1/2 left-[-1rem] md:left-[-2rem] xl:left-[-3rem] z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-sky-500 transition-colors shadow-lg border border-gray-700"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          aria-label="Próximo"
          className="absolute top-1/2 -translate-y-1/2 right-[-1rem] md:right-[-2rem] xl:right-[-3rem] z-10 p-2 bg-gray-800/80 backdrop-blur-sm rounded-full text-white hover:bg-sky-500 transition-colors shadow-lg border border-gray-700"
        >
          <ChevronRight size={24} />
        </button>

        { lastValidIndex > 0 && (
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 pt-4">
            {Array.from({ length: lastValidIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-sky-400 w-6' : 'bg-gray-600'}`}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Projects;
