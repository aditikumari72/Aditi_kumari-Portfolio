'use client';

import { motion } from 'framer-motion';
import { Code2, Lightbulb, Zap } from 'lucide-react';

export default function About() {
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

  const highlights = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'Proficient in building end-to-end applications with modern tech stacks including React, Node.js, and databases.',
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solving',
      description: 'I approach challenges with innovative thinking and deliver solutions that exceed expectations.',
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Building fast, scalable, and maintainable applications that provide exceptional user experiences.',
    },
  ];

  return (
    <section id="about" className="relative py-24 w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />

      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-foreground/70 max-w-3xl mx-auto text-center mb-12 leading-relaxed"
        >
          I&apos;m a passionate full-stack developer and student dedicated to creating exceptional digital experiences. With a strong foundation in modern web technologies and a keen eye for design, I build applications that are not only functional but also beautiful and intuitive.
        </motion.p>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-foreground/60">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div variants={itemVariants} className="bg-card border border-border rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
          <div className="space-y-4 text-foreground/70 leading-relaxed">
            <p>
              As a student developer, I&apos;ve been on an exciting journey of learning and growth. I started with the basics and progressively took on more complex projects, from building simple websites to developing full-stack applications with advanced features.
            </p>
            <p>
              I&apos;m particularly interested in the intersection of AI and web development, exploring how machine learning can enhance user experiences and solve real-world problems. My goal is to continue learning, growing, and contributing to the tech community.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and pushing the boundaries of what&apos;s possible.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
