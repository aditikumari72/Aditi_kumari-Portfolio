'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="relative py-12 w-full border-t border-border bg-card"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Aditi Kumari
            </h3>
            <p className="text-foreground/60 text-sm">
              Full Stack Developer crafting innovative digital experiences with modern technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/60 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Follow</h4>
            <div className="flex gap-4">
              {[
                { icon: Linkedin, link: 'https://www.linkedin.com/in/aditi-kumari-118b7b36b', label: 'LinkedIn' },
                { icon: Github, link: 'https://github.com/aditiumari72', label: 'GitHub' },
                { icon: Twitter, link: 'https://x.com/radity683', label: 'Twitter' },
                { icon: Instagram, link: 'https://www.instagram.com/adityroy_121', label: 'Instagram' },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-background border border-border hover:bg-primary/20 hover:border-accent text-foreground hover:text-accent transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-foreground/60 text-sm text-center md:text-left">
            &copy; 2024 Aditi Kumari. All rights reserved.
          </p>
          <p className="text-foreground/60 text-sm text-center">
            Crafted with <span className="text-accent">passion</span> and modern web technologies.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
