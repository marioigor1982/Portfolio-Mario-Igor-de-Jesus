
import React from 'react';
import Section from './Section';
import {
  Sparkles,
  Zap,
  Code,
  Layout,
  Palette,
  Wind,
  Server,
  Type,
  Cloud,
  TerminalSquare,
  Search,
  Cpu
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'Google AI Studio', icon: <Cpu size={48} /> },
  { name: 'Antigravity', icon: <Zap size={48} /> },
  { name: 'Prompt Engineering', icon: <Search size={48} /> },
  { name: 'React', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-12 h-12"/> },
  { name: 'Tailwind CSS', icon: <Wind size={48} /> },
  { name: 'TypeScript', icon: <Type size={48} /> },
  { name: 'UI/UX Design', icon: <Palette size={48} /> },
  { name: 'Soluções SAAS', icon: <Server size={48} /> },
  { name: 'Landing Pages', icon: <Layout size={48} /> },
  { name: 'Next.js', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 bg-white rounded-full"/> },
  { name: 'Git & GitHub', icon: <Code size={48} /> },
  { name: 'Personalização', icon: <Sparkles size={48} /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-sky-500/20 hover:-translate-y-2 border border-gray-700/50">
    <div className="text-sky-400 mb-4">{skill.icon}</div>
    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Meu Arsenal Criativo">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
