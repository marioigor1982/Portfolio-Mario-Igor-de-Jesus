
import React from 'react';
import Section from './Section';
import {
  Code,
  Braces,
  Database,
  GitMerge,
  Palette,
  Wind,
  Server,
  Type,
  Cloud,
  TerminalSquare
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const skills: Skill[] = [
  { name: 'HTML5', icon: <Code size={48} /> },
  { name: 'CSS3', icon: <Palette size={48} /> },
  { name: 'JavaScript', icon: <Braces size={48} /> },
  { name: 'TypeScript', icon: <Type size={48} /> },
  { name: 'React', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="React" className="w-12 h-12"/> },
  { name: 'Next.js', icon: <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-12 h-12 bg-white rounded-full"/> },
  { name: 'Tailwind CSS', icon: <Wind size={48} /> },
  { name: 'Node.js', icon: <Server size={48} /> },
  { name: 'Git & GitHub', icon: <GitMerge size={48} /> },
  { name: 'REST APIs', icon: <Cloud size={48} /> },
  { name: 'SQL', icon: <Database size={48} /> },
  { name: 'Jest', icon: <TerminalSquare size={48} /> },
];

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg flex flex-col items-center justify-center text-center transition-all duration-300 hover:bg-sky-500/20 hover:-translate-y-2">
    <div className="text-sky-400 mb-4">{skill.icon}</div>
    <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
  </div>
);

const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Habilidades">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
