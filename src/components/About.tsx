import React, { useRef } from 'react';
import { SectionHeading } from './ui/SectionHeading';
import { useInView } from '../hooks/useInView';

export const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const inViewImage = useInView(imageRef, { threshold: 0.1 });
  const inViewContent = useInView(contentRef, { threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-indigo-50 rounded-bl-full opacity-60"></div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="About Me"
          title="Creative Developer with a Passion for Design"
        />
        
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mt-16 items-center">
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              inViewImage ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/31841196/pexels-photo-31841196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Portrait of a creative developer" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-indigo-100 rounded-2xl -z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-indigo-200/30 rounded-2xl -z-0"></div>
          </div>
          
          <div 
            ref={contentRef}
            className={`transition-all duration-1000 delay-300 ${
              inViewContent ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900">
              Bringing Ideas to Life Through Code and Design
            </h3>
            
            <div className="space-y-4 text-neutral-700">
             <p>
             With a strong foundation in Python, Java, C, and Data Structures and Algorithms, I design intelligent, high-performance digital solutions that merge AI innovation with full-stack web development.
              </p>
              <p>
              My expertise spans Machine Learning, web technologies, Networking, DBMS, and Operating Systems. Blending creativity with technical excellence, I am passionate about building scalable, efficient systems that drive real-world impact.
              </p>
              
              
              <p>
                When I'm not coding, you can find me exploring new design trends, experimenting with creative technologies, or sharing my knowledge with the community through workshops and mentoring sessions.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-indigo-600">2+</div>
                <div className="text-sm text-neutral-600 mt-1">Years Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-indigo-600">5+</div>
                <div className="text-sm text-neutral-600 mt-1">Projects Completed</div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};