import { motion } from 'motion/react';
import { portfolioData } from '../data';
import { Award, BookOpen, Cloud, Cpu, Database } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-gray-100 mb-12">
            About Me
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Image Column */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden border border-brand-border bg-brand-surface aspect-[3/4] relative">
                {/* 
                  Note: The image uploaded in the chat needs to be placed in the public folder 
                  as 'mypicture.jpeg'. We are referencing it here.
                */}
                <img 
                  src="/mypicture.jpeg" 
                  alt={portfolioData.personal.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback if image isn't found
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-display font-bold text-gray-100">{portfolioData.personal.name}</h3>
                  <p className="text-brand-accent text-sm">Applied AI Engineer</p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 space-y-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-xl text-gray-300 leading-relaxed">
                  {portfolioData.personal.about}
                </p>
                
                <h3 className="text-2xl font-display font-bold text-gray-100 mt-12 mb-4">The Full-Stack AI Journey</h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  I am an Applied AI Engineer who believes that the best machine learning models are the ones that actually make it to production. I combine my background in AWS cloud architecture with state-of-the-art AI research to build end-to-end intelligent systems.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  As an AI Researcher at Clemson University's Human AI Empowerment Lab, I spend my days pushing the boundaries of what vision-language models can do. As an engineer, I focus on how to deploy those models efficiently, securely, and at scale.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I sit at the intersection of data, cloud, and artificial intelligence. Whether I'm fine-tuning a RoBERTa model for sentiment analysis or architecting an auto-scaling AWS environment, my goal is always the same: maximize efficiency and accuracy.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-brand-border">
                <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
                  <Award className="h-8 w-8 text-brand-accent mb-4" />
                  <h4 className="text-lg font-display font-bold text-gray-100 mb-2">Education</h4>
                  <p className="text-sm text-gray-400 mb-1"><strong>M.S. Computer Science</strong></p>
                  <p className="text-sm text-gray-500 mb-4">Clemson University (GPA: 3.70/4.00)</p>
                  <p className="text-sm text-gray-400 mb-1"><strong>B.Tech ECE</strong></p>
                  <p className="text-sm text-gray-500">Lovely Professional University</p>
                </div>
                
                <div className="bg-brand-surface border border-brand-border rounded-xl p-6">
                  <BookOpen className="h-8 w-8 text-brand-accent mb-4" />
                  <h4 className="text-lg font-display font-bold text-gray-100 mb-2">Certifications</h4>
                  <p className="text-sm text-gray-400 mb-1"><strong>AWS Certified Solutions Architect</strong></p>
                  <p className="text-sm text-gray-500 mb-4">Associate (Feb 2024 – Feb 2027)</p>
                  <p className="text-sm text-gray-400 mb-1"><strong>ArcGIS</strong></p>
                  <p className="text-sm text-gray-500">Clemson Center for Geospatial Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
