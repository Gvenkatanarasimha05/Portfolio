import React, { useRef } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';
import { skillsData, toolsData } from '../data/skills';

export const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  const skillsInView = useInView(skillsRef, { threshold: 0.1 });
  const toolsInView = useInView(toolsRef, { threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-white text-black relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars-bg"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills"
          alignment="left"
          theme="light"
        />

        {/* Skills */}
        <div ref={skillsRef} className="mt-16 space-y-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.id}
              className={`transform transition-all duration-1000 ${
                skillsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                <span className="text-lg font-medium text-purple-400">{skill.proficiency}%</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">{skill.category}</div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-1000 ease-out"
                  style={{
                    width: skillsInView ? `${skill.proficiency}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Skills Button */}
        <div className="mt-16 text-center">
          <a
            href="#more-skills"
            className="text-xl text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-flex items-center gap-2"
          >
            See More Skills
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>

        {/* Tools */}
        <div ref={toolsRef} className="mt-16 space-y-8">
          {toolsData.map((tool, index) => (
            <div
              key={tool.id}
              className={`transform transition-all duration-1000 ${
                toolsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">{tool.name}</h3>
                <span className="text-lg font-medium text-purple-400">{tool.proficiency}%</span>
              </div>
              <div className="text-sm text-gray-400 mb-2">{tool.category}</div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 transition-all duration-1000 ease-out"
                  style={{
                    width: toolsInView ? `${tool.proficiency}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Tools Button */}
        <div className="mt-16 text-center">
          <a
            href="#more-tools"
            className="text-xl text-purple-400 hover:text-purple-300 transition-colors duration-300 inline-flex items-center gap-2"
          >
            See More Tools
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
