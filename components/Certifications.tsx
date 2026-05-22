'use client';

import { motion } from 'framer-motion';
import { Trophy, Award, Star, Zap } from 'lucide-react';

export default function Certifications() {
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

  const achievements = [
    {
      title: 'TechSprint Hackathon',
      category: 'Hackathon Winner',
      description: '1st Place Winner',
      date: '2026',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Full Stack Development',
      category: 'Certification',
      description: 'Advanced certification in Full Stack Development',
      date: '2026',
      icon: Award,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Web Development Excellence',
      category: 'Recognition',
      description: 'Outstanding performance in web development projects',
      date: '2026',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI & Machine Learning',
      category: 'Skill Badge',
      description: 'Mastery in AI/ML implementation and integration',
      date: '2026',
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="certifications" className="relative py-24 w-full">
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
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${achievement.color} p-2 mb-4 text-white`}>
                    <IconComponent className="w-full h-full" />
                  </div>

                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm font-semibold text-accent mb-2">
                      {achievement.category}
                    </p>
                    <p className="text-foreground/70">
                      {achievement.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <span className="text-sm text-foreground/50">
                      {achievement.date}
                    </span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-accent"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: '1', label: 'Hackathon Wins' },
            { number: '4+', label: 'Certifications' },
            { number: '100%', label: 'Success Rate' },
            { number: '∞', label: 'Passion & Drive' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60 text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
