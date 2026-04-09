import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-surface py-12 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl font-display font-bold text-gray-100">Let's build intelligent systems.</h2>
          <p className="text-gray-400 text-center max-w-md">
            Currently open for new opportunities in Applied AI, Multimodal ML, and Cloud Engineering.
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/contact"
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
            <a 
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-8">
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
