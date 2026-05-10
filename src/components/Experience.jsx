import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Trophy, Flag, Star } from 'lucide-react';

const experiences = [
  {
    role: "Google Student Ambassador",
    company: "Google / RGUKT",
    date: "2023 - Present",
    description: "Representing Google on campus, organizing tech events, and fostering a community of developers.",
    icon: <Star className="w-5 h-5 text-yellow-400" />
  },
  {
    role: "Full Stack Developer Intern",
    company: "Stvensi Company",
    date: "2023",
    description: "Worked as an intern developing full stack web applications, optimizing backend APIs, and building responsive UI components.",
    icon: <Briefcase className="w-5 h-5 text-[#C084FC]" />
  },
  {
    role: "Student Secretary",
    company: "E-Cell RGUKT",
    date: "2022 - 2023",
    description: "Led entrepreneurship initiatives, organized the Startup Expo, and managed a team of 50+ students.",
    icon: <Flag className="w-5 h-5 text-emerald-400" />
  },
  {
    role: "Hackathon 2nd Place",
    company: "RGUKT Hackathon",
    date: "2022",
    description: "Secured 2nd place among 100+ teams by building an innovative campus utility application.",
    icon: <Trophy className="w-5 h-5 text-orange-400" />
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 w-full z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-surface-border -translate-x-1/2 rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-[#E8A9B6] via-[#C084FC] to-transparent rounded-full shadow-[0_0_15px_var(--accent)]"
            ></motion.div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`relative flex items-center md:justify-between ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block w-[45%]"></div>

                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="absolute left-8 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass-card border border-accent flex items-center justify-center z-10 box-glow bg-background"
                  >
                    {exp.icon}
                  </motion.div>

                  {/* Content Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className={`w-[calc(100%-4rem)] ml-16 md:ml-0 md:w-[45%] group perspective-1000`}
                  >
                    <div className="glass-card p-6 md:p-8 rounded-3xl relative overflow-hidden transform-gpu hover:rotate-y-2 hover:-rotate-x-2 transition-transform duration-500 hover:border-accent/50 hover:box-glow">
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-accent text-sm font-mono mb-4 border border-accent/20">
                        {exp.date}
                      </span>
                      <h3 className="text-2xl font-bold font-heading mb-1">{exp.role}</h3>
                      <h4 className="text-lg text-foreground/60 mb-4">{exp.company}</h4>
                      <p className="text-foreground/80 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
