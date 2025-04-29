import React, { useState, useRef } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { ProjectCard } from './ui/ProjectCard';
import { projectsData } from '../data/projects';
import { useInView } from '../hooks/useInView';

type Category = 'all' | 'web' | 'mobile' | 'branding';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { threshold: 0.1 });
  
  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'All Projects' },
    { value: 'web', label: 'Web Design' },
    { value: 'mobile', label: 'Mobile Apps' },
    { value: 'branding', label: 'Branding' },
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-neutral-50 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-indigo-50 rounded-tr-full opacity-60"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="My Work"
          title="Recent Projects"
          alignment="center"
        />
        
        <div className="flex flex-wrap justify-center mt-10 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 m-2 rounded-full transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'bg-white text-neutral-600 hover:bg-indigo-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div 
          ref={containerRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a 
            href="#more-projects" 
            className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-md transition-all duration-300 inline-flex items-center"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};