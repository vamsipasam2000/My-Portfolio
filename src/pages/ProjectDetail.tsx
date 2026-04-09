import { useParams, Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = portfolioData.projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-gray-100 mb-4">Project not found</h1>
          <Link to="/" className="text-brand-accent hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Link 
          to="/"
          className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-brand-accent mb-12 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-100 mb-6 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            {project.summary}
          </p>

          {/* Overview Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-brand-surface border border-brand-border mb-16">
            <div>
              <h4 className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">Role</h4>
              <p className="text-sm font-medium text-gray-200">AI Engineer</p>
            </div>
            <div>
              <h4 className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">Key Metric</h4>
              <p className="text-sm font-medium text-brand-accent">{project.metric}</p>
            </div>
            <div className="col-span-2">
              <h4 className="text-xs font-mono text-gray-500 mb-1 uppercase tracking-wider">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-medium text-gray-300">
                    {tag}{tag !== project.tags[project.tags.length - 1] ? ',' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            <section>
              <h2 className="text-2xl font-display font-bold text-gray-100 mb-4">The Problem</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.problem}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-100 mb-4">The Architecture</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.architecture}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-100 mb-4">The Execution</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.execution}
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-gray-100 mb-6">Business Impact & Results</h2>
              <div className="bg-brand-surface/50 border border-brand-border rounded-2xl p-8">
                <p className="text-brand-accent font-medium mb-6 text-lg">
                  {project.businessValue}
                </p>
                <ul className="space-y-4">
                  {project.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-brand-accent mr-3 flex-shrink-0" />
                      <span className="text-gray-300 leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-24 pt-12 border-t border-brand-border text-center">
            <h3 className="text-2xl font-display font-bold text-gray-100 mb-6">Looking for an AI Engineer to build systems like this?</h3>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-brand-accent px-8 py-4 text-base font-medium text-brand-bg shadow-sm hover:bg-brand-accent-hover transition-all"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
