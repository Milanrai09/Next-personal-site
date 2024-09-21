"use client";

import React, { useRef } from 'react';
import { CardHoverEffectDemo } from './hoverEffect';
import { StickyScrollRevealDemo } from './stickyScrollReveal';
import Typewriter from 'typewriter-effect';
import { Button } from 'antd';
import { FaGithub } from "react-icons/fa";
import TechnologyStack from './TechnologySection';

type MainProp = {
  title: string;
  section: string;
  mainAttribute: string;
};

export default function Component({ title, section, mainAttribute }: MainProp) {
  const sections = useRef<HTMLDivElement[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const targetId = (event.target as HTMLElement).getAttribute('href')?.slice(1); 
    const targetSection = sections.current.find((section) => section.id === targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addToRefs = (section: HTMLDivElement | null) => {
    if (section && !sections.current.includes(section)) {
      sections.current.push(section);
    }
  };

  return (
    <main className="overflow-hidden">
      <div
        className="bg-cover bg-center"
        style={{ backgroundImage: `url('https://www.hdwallpapers.in/download/abstract_wallpaper_for_pc_4k_hd-1600x900.jpg')` }}
      >    
        <nav className="bg-transparent w-screen fixed h-20 flex justify-center items-center z-50 top-0">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#about-yourself" onClick={handleClick}>
                Home
              </a>
            </li>
            <li>
              <a href="#your-work" onClick={handleClick}>
                Project
              </a>
            </li>
            <li>
              <a href="#technology" onClick={handleClick}>
                Technology
              </a>
            </li>
            <li>
              <a href="#contact-page" onClick={handleClick}>
                Contact
              </a>
            </li>
            <li>
              <a href="https://github.com/Milanrai09"><FaGithub size={25}/></a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="pt-40 md:pt-0 mt-12 md:mt-0">
        <section id="about-yourself" ref={addToRefs} className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white font-['Montserrat',sans-serif]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl mb-4">Hi, I'm Milan!</h1>
                <div className="text-md md:text-2xl font-semibold mb-6">
                  I'm a{' '}
                  <span className="text-[#ff7f50]">
                    <Typewriter
                      options={{
                        strings: ["Software Engineer", "Fullstack Developer", "Your Next Team Player"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 30,
                      }}
                    />
                  </span>
                </div>
              </div>
              <div className="md:w-1/2 mt-9 md:mt-0">
                <img
                  src="https://img.freepik.com/premium-photo/male-computer-programmer-coding-front-monitor_225297-118.jpg"
                  alt="Programmer"
                  className="w-full max-w-md mx-auto rounded-lg shadow-lg md:pt-24"
                />
              </div>
            </div>
            <div className="mt-12 max-w-3xl mx-auto text-center">
              <p className="text-sm md:text-lg leading-relaxed">
                As a Software Engineer and Web Developer, I'm passionate about creating meaningful solutions through code. I've worked on full-stack applications, but I'm always eager to learn more. Each project is an opportunity to grow and improve my skills. I enjoy the energy of startup environments and get excited about exploring new technologies. I believe in the power of collaboration and continuous learning. I'm ready to roll up my sleeves, contribute my knowledge, and learn from others. If you're looking for a dedicated developer who's enthusiastic about teamwork and innovation, let's connect and see what we can achieve together!
              </p>
            </div>
          </div>
        </section>

        <section id="your-work" ref={addToRefs} className="bg-gray-900">
          <div className="text-2xl font-semibold md:hidden">
            <CardHoverEffectDemo/>
          </div>
          <div className="hidden md:block">
            <StickyScrollRevealDemo />
          </div>
        </section>

        <section id="technology" ref={addToRefs} className="bg-blue-300">
          <TechnologyStack/>
        </section> 

        <section id="contact-page" ref={addToRefs} className="p-5" style={{ backgroundImage: `url('https://gifdb.com/images/high/falling-stars-g12ux36ccv3n6r8b.gif')` }}>
          <div className="text-2xl font-semibold text-center my-9">
            <h1>CONTACT</h1>
            <h1 className="my-9">Let's Work Together!</h1>
            <Button type="primary" className="w-96 h-20">
              <a href="mailto:memilanrai19@gmail.com">CONTACT ME</a>
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}


