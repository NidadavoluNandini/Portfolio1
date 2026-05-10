import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Award } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: <GraduationCap />, label: "CGPA", value: "9.2", color: "from-[#F4B6C2] to-[#E8A9B6]" },
    { icon: <Code2 />, label: "Major Projects", value: "5+", color: "from-[#C084FC] to-[#F4B6C2]" },
    { icon: <Rocket />, label: "Role", value: "Google SA", color: "from-green-500 to-emerald-400" },
    { icon: <Award />, label: "Hackathon", value: "Winner", color: "from-orange-500 to-yellow-400" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-3xl relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <h3 className="text-2xl font-heading font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent animate-ping"></span>
                BTech CSE Student
              </h3>
              
              <p className="text-foreground/80 leading-relaxed mb-4">
                Currently pursuing my Bachelor's degree at <span className="text-[#F5F5F5] font-medium">RGUKT IIIT Ongole</span>. I am deeply passionate about artificial intelligence, machine learning, deep learning (CNNs), and mobile/full-stack development.
              </p>
              
              <p className="text-foreground/80 leading-relaxed">
                My mission is to build intelligent, real-world applications that solve complex problems. I have a strong interest in scalable systems and modern software engineering practices, striving to create software that feels alive and impactful.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                className="glass-card p-6 rounded-3xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
              >
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${stat.color} rounded-full blur-[40px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                
                <div className="text-[#9CA3AF] mb-4 group-hover:text-[#F5F5F5] transition-colors duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                  {stat.value}
                </div>
                <div className="text-sm font-medium tracking-wide text-foreground/60 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
