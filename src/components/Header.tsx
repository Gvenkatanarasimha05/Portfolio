import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { AnimatedLink } from './animations/AnimatedLink';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white py-5 shadow-md transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-8 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-2xl font-bold tracking-tight relative group"
        >
          <span className="relative z-10">GVN</span> <span className="text-indigo-600">Portfolio.</span>
          <span className="absolute bottom-0 left-0 w-0 h-[6px] bg-indigo-600/20 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>

        {/* Desktop Navigation */}
       <nav className="hidden md:flex items-center space-x-8">
  {navLinks.map((link) => (
    <AnimatedLink key={link.name} href={link.href}>
      {link.name}
    </AnimatedLink>
  ))}
  <a 
    href="https://drive.google.com/file/d/1lOnjClMvDZu5xqBhJu9ZycOu9o1pEE7j/view?usp=sharing"
    target="_blank"
    rel="noopener noreferrer"
    className="px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2"
  >
    Resume <ExternalLink size={14} />
  </a>
</nav>
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-900 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden flex flex-col pt-24 pb-8 px-6`}
      >
        <nav className="flex flex-col space-y-6 items-center text-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="py-2 hover:text-indigo-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#resume" 
            className="px-6 py-3 mt-4 w-full text-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Resume <ExternalLink size={14} />
          </a>
        </nav>
      </div>
    </header>
  );
};
