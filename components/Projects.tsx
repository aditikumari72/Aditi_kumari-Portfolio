'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const projects = [
    {
      title: 'AI-Powered Task Manager',
      description: 'A full-stack task management application with AI-powered task suggestions and smart categorization. Built with React, Node.js, and TensorFlow.js.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AI/ML', 'TailwindCSS'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-primary/20 to-accent/20',
    },
    {
      title: 'Real-Time Collaboration Platform',
      description: 'A web-based platform for real-time collaboration with features like live editing, comments, and instant notifications.',
      technologies: ['Next.js', 'WebSocket', 'MongoDB', 'Redis', 'TypeScript'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-accent/20 to-primary/20',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'An interactive dashboard for visualizing complex datasets with real-time updates, filtering, and export capabilities.',
      technologies: ['React', 'D3.js', 'Recharts', 'API Integration', 'Responsive Design'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-primary/20 via-accent/20 to-background',
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce solution with product catalog, shopping cart, payment integration, and admin dashboard.',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Authentication', 'Vercel'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-background to-accent/20',
    },
    {
      title: 'Smart Content Generator',
      description: 'An AI-powered content generation tool that uses GPT for creating optimized blog posts and marketing copy.',
      technologies: ['Next.js', 'OpenAI API', 'React', 'Supabase', 'TailwindCSS'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-accent/30 to-primary/20',
    },
    {
      title: 'Portfolio Website Builder',
      description: 'A drag-and-drop portfolio website builder allowing users to create stunning portfolios without coding.',
      technologies: ['React', 'Next.js', 'Framer Motion', 'Supabase', 'WebGL'],
      github: 'https://github.com',
      demo: '#',
      image: 'bg-gradient-to-br from-primary/20 to-background',
    },
  ];

  return (
    <section id="projects" className="relative py-24 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent -z-10" />

      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Project image placeholder */}
              <div className={`h-48 ${project.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-12 h-12 text-foreground/20 group-hover:text-accent/30 transition-colors" />
                </div>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-foreground/60 text-sm mb-4 flex-1">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-primary/20 text-foreground hover:text-accent transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-background hover:bg-accent/20 text-foreground hover:text-accent transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/aditiumari72"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
