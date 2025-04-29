import React, { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { TypeAnimation } from '../components/animations/TypeAnimation';

export const Hero: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;

      const xValue = e.clientX / window.innerWidth - 0.5;
      const yValue = e.clientY / window.innerHeight - 0.5;

      parallaxRef.current.style.transform = `translateX(${xValue * 20}px) translateY(${yValue * 20}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 bg-white" 
      // 🛑 Removed backgroundImage inline style
    >
      {/* Decorative parallax elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-br from-indigo-100/30 to-transparent"></div>
        <div className="absolute -bottom-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-indigo-50/40 to-transparent"></div>
        <div ref={parallaxRef} className="absolute inset-0 opacity-40 transition-transform duration-[250ms] ease-out">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-indigo-300/50"></div>
          <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-indigo-400/40"></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 rounded-full bg-indigo-200/50"></div>
          <div className="absolute bottom-1/3 left-1/3 w-5 h-5 rounded-full bg-indigo-300/60"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-8 mt-8">
        <div className="flex flex-col items-start max-w-4xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl text-black md:text-6xl font-bold mb-4 tracking-tight opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            G Venkata <span className="text-indigo-700">Narasimha</span>
          </h1>

          <div
            className="text-xl sm:text-2xl text-black md:text-3xl font-light mb-8 h-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            <TypeAnimation strings={['Full Stack Developer', 'UI/UX Designer', 'Problem Solver']} />
          </div>

          <p
            className="max-w-2xl mb-10 text-lg text-neutral-700 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            I create visually stunning and user-friendly digital experiences that help businesses grow and engage their audience.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1s', animationFillMode: 'forwards' }}
          >
            <a
              href="#portfolio"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-neutral-700 hover:border-indigo-400 hover:text-indigo-400 text-black rounded-md transition-all duration-300 flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Scroll down icon */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} className="text-neutral-400 hover:text-indigo-500 transition-colors duration-300" />
        </a>
      </div>
    </section>
  );
};
