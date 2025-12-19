import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import devopsQuestImg from '@assets/DevopsQuest_logo_1766078919842.jpg';

const projects = [
  {
    category: 'Full Stack',
    title: 'DevOps Quest',
    role: 'Lead Developer',
    description: 'A Gamified Learning Platform for Progressive DevOps Education. Users solve quests to learn Docker, K8s, and CI/CD concepts.',
    tech: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    image: devopsQuestImg
  },
  {
    category: 'Frontend',
    title: 'FOODISTA',
    role: 'Frontend Developer',
    description: 'Modernizing Food Services at Chandigarh University with a token system and integrated digital platform. Handled 1000+ daily users.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop'
  },
  {
    category: 'Research',
    title: 'Cyber Security Analysis',
    role: 'Research Analyst',
    description: 'In-depth analysis of various cybersecurity measures to evaluate their effectiveness in safeguarding data against potential threats.',
    tech: ['Security Analysis', 'Threat Modelling', 'Compliance'],
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop'
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black/40 to-background">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-display font-bold mb-16 text-center neon-text">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass-card rounded-xl overflow-hidden group border-t border-white/10"
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center"

                />
                <div className="absolute bottom-4 left-4 z-20">
                  <Badge className="bg-primary text-black hover:bg-white">{project.category}</Badge>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold font-display group-hover:text-primary transition-colors">{project.title}</h3>
                  
                </div>
                <p className="text-sm font-tech text-secondary mb-4">{project.role}</p>
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="text-xs border border-white/10 px-2 py-1 rounded bg-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
