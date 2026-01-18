
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="Criatividade & Tecnologia">
      <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-gray-700/50">
        <div className="md:w-1/3">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img
              src="https://i.postimg.cc/655ZGGk7/IGOR3-Copia.jpg"
              alt="Mario Igor de Jesus"
              className="relative rounded-full w-64 h-64 md:w-full md:h-auto max-w-sm mx-auto shadow-2xl border-4 border-gray-800"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-lg text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-4">Prazer, eu sou o Mario Igor.</h3>
          <p className="mb-4 text-gray-300">
            Não me defino apenas como um engenheiro de software tradicional. Eu sou um <span className="text-sky-400 font-semibold">Low Coder</span> e <span className="text-sky-400 font-semibold">Vibe Coder</span> que utiliza o poder do <span className="text-white">Google AI Studio</span> e <span className="text-white">Antigravity</span> para dar vida a projetos de forma ágil, inteligente e altamente personalizada.
          </p>
          <p className="mb-4 text-gray-300">
            Minha força está na **criatividade e nos insights**. Eu foco em entender o seu objetivo para criar sites, landing pages e soluções SAAS que não são apenas "mais um na web", mas sim ferramentas que podem ser chamadas de **SUAS**.
          </p>
          <p className="mb-4 text-gray-300">
            Acredito que ótimos preços e um atendimento dedicado não precisam ser exclusivos de grandes corporações. Trabalho lado a lado com você para entregar um produto final que reflete sua identidade e atende suas necessidades reais.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-sky-500/20">
              <span className="text-sky-400 block font-bold mb-1">Agilidade</span>
              <span className="text-sm text-gray-400">Entrega rápida usando o melhor da IA moderna.</span>
            </div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-sky-500/20">
              <span className="text-sky-400 block font-bold mb-1">Personalização</span>
              <span className="text-sm text-gray-400">Design único e pensado para o seu foco/objetivo.</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
