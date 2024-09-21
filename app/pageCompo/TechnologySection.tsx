import React from 'react';
import { IconType } from 'react-icons';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithubSquare } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiReactquery, SiExpress, SiMysql, SiMongodb } from 'react-icons/si';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { AiTwotoneApi } from 'react-icons/ai';
import { RxVercelLogo } from 'react-icons/rx';

interface TechItemProps {
  title: string;
  icon: IconType;
}

const TechItem: React.FC<TechItemProps> = ({ title, icon: Icon }) => (
  <div className="flex flex-col items-center p-4 border border-gray-700 rounded-lg bg-gray-800 
                  hover:bg-gray-700 hover:border-blue-500 transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/50">
    <Icon size={40} className="mb-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
    <h3 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">{title}</h3>
  </div>
);

interface TechSectionProps {
  title: string;
  items: TechItemProps[];
}

const TechSection: React.FC<TechSectionProps> = ({ title, items }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
    <h2 className="text-2xl font-bold mb-4 text-center text-white">{title}</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item, index) => (
        <TechItem key={index} title={item.title} icon={item.icon} />
      ))}
    </div>
  </div>
);

const TechnologyStack: React.FC = () => {
  const frontendItems: TechItemProps[] = [
    { title: 'HTML', icon: FaHtml5 },
    { title: 'CSS', icon: FaCss3Alt },
    { title: 'JavaScript', icon: IoLogoJavascript },
    { title: 'TypeScript', icon: SiTypescript },
    { title: 'React', icon: FaReact },
    { title: 'Next.js', icon: RiNextjsFill },
    { title: 'React Query', icon: SiReactquery },
    { title: 'Tailwind', icon: RiTailwindCssFill },
  ];

  const backendItems: TechItemProps[] = [
    { title: 'Node.js', icon: FaNodeJs },
    { title: 'Express', icon: SiExpress },
    { title: 'MySQL', icon: SiMysql },
    { title: 'MongoDB', icon: SiMongodb },
    { title: 'REST API', icon: AiTwotoneApi },
  ];

  const otherItems: TechItemProps[] = [
    { title: 'Git', icon: FaGitAlt },
    { title: 'GitHub', icon: FaGithubSquare },
    { title: 'Vercel', icon: RxVercelLogo },
  ];

  return (
    <section id="technology" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Technology Stack</h1>
        <TechSection title="Frontend" items={frontendItems} />
        <TechSection title="Backend" items={backendItems} />
        <TechSection title="Tools & Platforms" items={otherItems} />
      </div>
    </section>
  );
};

export default TechnologyStack;