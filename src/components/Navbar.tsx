import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-border bg-brand-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-display font-bold text-gray-100 tracking-tight">
              VKP<span className="text-brand-accent">.</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/#work" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">Work</Link>
              <Link to="/about" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">About</Link>
              <Link to="/#publications" className="text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors">Publications</Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center rounded-md bg-brand-surface border border-brand-border px-4 py-2 text-sm font-medium text-gray-100 shadow-sm hover:bg-brand-border hover:text-brand-accent transition-all"
              >
                Contact Me
              </Link>
            </div>
          </div>
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/contact" className="text-gray-300 hover:text-brand-accent">
              <Mail className="h-5 w-5" />
            </Link>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-accent">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-brand-accent">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
