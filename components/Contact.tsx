'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Twitter, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'adityroy812@gmail.com',
      link: 'mailto:adityroy812@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 6207509884',
      link: 'tel:+916207509884',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'aditi-kumari',
      link: 'https://www.linkedin.com/in/aditi-kumari-118b7b36b',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'aditiumari72',
      link: 'https://github.com/aditiumari72',
    },
  ];

  return (
    <section id="contact" className="relative py-24 w-full bg-gradient-to-b from-background via-card/20 to-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5 -z-10" />

      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
          <p className="text-foreground/60 mt-6 max-w-2xl mx-auto text-lg">
            I&apos;m always open to new opportunities and interesting conversations. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <motion.div
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-semibold text-foreground mb-8">
              Let&apos;s Connect
            </motion.h3>

            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.link}
                  target={method.label !== 'Email' && method.label !== 'Phone' ? '_blank' : undefined}
                  rel={method.label !== 'Email' && method.label !== 'Phone' ? 'noopener noreferrer' : undefined}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 flex items-start gap-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-1">{method.label}</h4>
                    <p className="text-foreground/60 break-all">{method.value}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-4">
              <h4 className="text-lg font-semibold text-foreground mb-4">Follow Me</h4>
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
                      className="w-12 h-12 rounded-lg bg-card border border-border hover:bg-primary/20 hover:border-accent text-foreground hover:text-accent transition-all duration-300 flex items-center justify-center"
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
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-foreground/40 focus:border-accent focus:outline-none transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <span>Message sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-accent text-sm font-medium"
                >
                  Thank you for your message! I&apos;ll get back to you soon.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
