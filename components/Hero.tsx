'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, Mail, Download, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    duration: number;
  }>>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Generate particles only on client after hydration
    setParticles(
      Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 3 + 2,
      }))
    );
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10 -z-10" />

      {/* Particle effects */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-accent/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <motion.div variants={itemVariants} className="space-y-3">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-accent text-sm font-semibold tracking-widest uppercase">
                  Welcome to my digital space
                </span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Hi, I&apos;m <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Aditi Kumari</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="h-16 flex items-center">
              <div className="text-2xl lg:text-3xl font-semibold text-foreground/80">
                <span>Building scalable </span>
                <span className="text-accent">AI-powered</span>
                <span> web applications</span>
                <span className={`ml-2 inline-block w-2 h-8 bg-accent ${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/60 max-w-lg leading-relaxed"
            >
              Full Stack Developer | Student | Creative Problem Solver. I craft innovative digital experiences with modern technologies. Currently exploring the intersection of AI and web development.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#contact"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Hire Me
              </motion.a>
              <motion.a
                href="https://github.com/aditiumari72"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-card border border-border rounded-lg font-semibold text-foreground hover:bg-accent/20 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                View Projects
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6 pt-8 border-t border-border">
              <a
                href="https://www.linkedin.com/in/aditi-kumari-118b7b36b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/aditiumari72"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/radity683"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/adityroy_121"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/share/1Fd3E9FZXz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-accent transition-colors"
                title="Facebook"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right side - Profile Image */}
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="flex justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-80 h-96 rounded-3xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 z-10" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aditi-kumari.jpg-Sg5GiKbBj4Fche1LEMvM3GS4nBZRgO.png"
                alt="Aditi Kumari"
                fill
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-3 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
