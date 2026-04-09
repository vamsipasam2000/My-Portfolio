import { Link } from 'react-router-dom';
import { portfolioData } from '../data';
import { ArrowRight, Cloud, Database, Cpu, ExternalLink, Award, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center rounded-full bg-brand-surface border border-brand-border px-3 py-1 text-xs font-medium text-gray-300">
                <Award className="mr-1.5 h-3.5 w-3.5 text-brand-accent" />
                AWS Certified Solutions Architect
              </span>
              <span className="inline-flex items-center rounded-full bg-brand-surface border border-brand-border px-3 py-1 text-xs font-medium text-gray-300">
                <BookOpen className="mr-1.5 h-3.5 w-3.5 text-brand-accent" />
                Published @ WWW 2025
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-gray-100 mb-6 leading-tight">
              Building Multimodal AI Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-blue-500">Understand the Real World.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-3xl leading-relaxed">
              {portfolioData.personal.subheadline}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#work"
                className="inline-flex items-center justify-center rounded-lg bg-brand-accent px-6 py-3 text-sm font-medium text-brand-bg shadow-sm hover:bg-brand-accent-hover transition-all"
              >
                View Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-brand-surface border border-brand-border px-6 py-3 text-sm font-medium text-gray-100 shadow-sm hover:bg-brand-border transition-all"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
          <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
            <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
                <stop stopColor="#00E5FF" stopOpacity="0.5" />
                <stop offset="1" stopColor="#0A0A0A" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 border-y border-brand-border bg-brand-surface/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <Cpu className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-display font-semibold text-gray-100 mb-2">Multimodal AI & LLMs</h3>
              <p className="text-sm text-gray-400">Fine-tuning and deploying SOTA models like Llama 3, Gemini, and Qwen-VL for complex reasoning tasks.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <Database className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-display font-semibold text-gray-100 mb-2">Data Engineering & ML</h3>
              <p className="text-sm text-gray-400">Building robust data pipelines, NLP systems, and predictive models that drive measurable ROI.</p>
            </div>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <Cloud className="h-8 w-8 text-brand-accent mb-4" />
              <h3 className="text-lg font-display font-semibold text-gray-100 mb-2">Cloud & Infrastructure</h3>
              <p className="text-sm text-gray-400">Architecting scalable, auto-scaling AWS environments while reducing operational costs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-100 mb-4">Featured Work</h2>
            <p className="text-gray-400 max-w-2xl">Deep dives into how I architect and deploy AI systems to solve complex business challenges.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolioData.projects.map((project, index) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl bg-brand-surface border border-brand-border p-8 hover:border-brand-accent/50 transition-colors"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-display font-bold text-gray-100 group-hover:text-brand-accent transition-colors">
                      {project.title}
                    </h3>
                    <span className="inline-flex items-center rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">
                      {project.metric}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center rounded bg-brand-bg px-2 py-1 text-xs font-mono text-gray-400 border border-brand-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-accent-hover"
                >
                  Read Case Study
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Snapshot */}
      <section id="experience" className="py-24 bg-brand-surface/30 border-y border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-display font-bold text-gray-100 mb-4">Experience</h2>
              <p className="text-gray-400 mb-6">From optimizing enterprise cloud infrastructure to researching state-of-the-art multimodal models.</p>
              <a 
                href="/resume.pdf"
                download="Vamsi_Krishna_Pasam_Resume.pdf"
                className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-accent-hover"
              >
                Download Full Resume
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {portfolioData.experience.map((exp, index) => (
                  <div key={index} className="relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-brand-border last:before:hidden">
                    <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-brand-accent"></div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-display font-semibold text-gray-100">{exp.role}</h3>
                      <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">{exp.period}</span>
                    </div>
                    <p className="text-brand-accent text-sm mb-4">{exp.company}</p>
                    <p className="text-gray-400 mb-4 text-sm">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-300 flex items-start">
                          <span className="mr-2 text-brand-accent mt-1">▹</span>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Bento Box */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-gray-100 mb-12">Technical Arsenal</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl bg-brand-surface border border-brand-border p-6">
              <h3 className="text-sm font-mono text-brand-accent mb-4">01. Foundation Models</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.foundationModels.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded bg-brand-bg px-2.5 py-1 text-sm text-gray-300 border border-brand-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl bg-brand-surface border border-brand-border p-6">
              <h3 className="text-sm font-mono text-brand-accent mb-4">02. ML & Data</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.mlData.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded bg-brand-bg px-2.5 py-1 text-sm text-gray-300 border border-brand-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl bg-brand-surface border border-brand-border p-6">
              <h3 className="text-sm font-mono text-brand-accent mb-4">03. Cloud & Arch</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.cloudArch.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded bg-brand-bg px-2.5 py-1 text-sm text-gray-300 border border-brand-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-2xl bg-brand-surface border border-brand-border p-6">
              <h3 className="text-sm font-mono text-brand-accent mb-4">04. Languages</h3>
              <div className="flex flex-wrap gap-2">
                {portfolioData.skills.languages.map(skill => (
                  <span key={skill} className="inline-flex items-center rounded bg-brand-bg px-2.5 py-1 text-sm text-gray-300 border border-brand-border">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-24 bg-brand-surface/30 border-t border-brand-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-100 mb-4">Research & Publications</h2>
            <p className="text-gray-400 max-w-2xl">Bridging academic AI research with real-world enterprise applications.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioData.publications.map((pub, index) => (
              <div key={index} className="rounded-2xl bg-brand-surface border border-brand-border p-8">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-brand-accent" />
                  <span className="text-sm font-mono text-gray-400">{pub.conference}</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-100 mb-4">{pub.title}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  <strong className="text-gray-300">TL;DR:</strong> {pub.tldr}
                </p>
                <a 
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-brand-accent hover:text-brand-accent-hover"
                >
                  Read Paper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
