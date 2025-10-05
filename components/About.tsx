import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="Sobre Mim">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12">
        <div className="md:w-1/3">
          <img
            src="https://i.postimg.cc/655ZGGk7/IGOR3-Copia.jpg"
            alt="Mario Igor de Jesus"
            className="rounded-full w-64 h-64 md:w-full md:h-auto max-w-sm mx-auto shadow-2xl border-4 border-sky-500/50"
          />
        </div>
        <div className="md:w-2/3 text-lg text-center md:text-left">
          <p className="mb-4">
            Olá! Sou Mario Igor, um desenvolvedor Frontend apaixonado por criar interfaces de usuário intuitivas, performáticas e visualmente atraentes. Com uma base sólida em tecnologias modernas como React, TypeScript e Tailwind CSS, eu me dedico a transformar ideias complexas em experiências digitais elegantes e funcionais.
          </p>
          <p className="mb-4">
            Meu objetivo é construir aplicações que não apenas atendam aos requisitos técnicos, mas que também proporcionem uma jornada agradável e eficiente para o usuário final. Estou sempre em busca de novos desafios e aprendizados para aprimorar minhas habilidades e entregar produtos de alta qualidade.
          </p>
          <p className="mb-4">
            Fora do mundo do código, gosto de explorar novas tecnologias, contribuir para projetos open-source e me manter atualizado com as últimas tendências do design e desenvolvimento web.
          </p>
          <p>
            Atualmente, estou expandindo minhas competências estudando Salesforce, buscando integrar minhas habilidades de frontend com o poderoso ecossistema de CRM.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;