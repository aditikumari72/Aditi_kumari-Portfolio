'use client';

import { motion } from 'framer-motion';

export default function Skills() {
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

  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 80 },
        { name: 'API Design', level: 85 },
        { name: 'Authentication', level: 80 },
      ],
    },
    {
      category: 'Tools & DevOps',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Vercel', level: 88 },
        { name: 'AWS', level: 70 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-24 w-full bg-gradient-to-b from-background via-card/30 to-background">
      <motion.div
        className="container mx-auto px-4 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-2xl font-semibold text-foreground mb-8">{category.category}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-accent text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-accent/20">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Additional Competencies</h3>
          <div className="flex flex-wrap gap-3">
            {[
              'AI/ML Integration',
              'REST APIs',
              'GraphQL',
              'Web Performance',
              'Responsive Design',
              'Testing',
              'Problem Solving',
              'Team Collaboration',
              'Project Management',
              'Agile Methodology',
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="px-4 py-2 rounded-lg bg-background border border-accent/30 text-foreground/80 text-sm font-medium hover:bg-accent/10 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
