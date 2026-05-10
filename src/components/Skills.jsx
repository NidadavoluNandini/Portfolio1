import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skillsData = [
  {
    category: "Frontend",
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    color: "from-blue-500/20 to-cyan-500/20",
    border: "border-cyan-500/30",
  },
  {
    category: "Backend",
    skills: ["Node.js", "NestJS", "FastAPI", "Flask"],
    color: "from-green-500/20 to-emerald-500/20",
    border: "border-emerald-500/30",
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Android Studio", "Firebase"],
    color: "from-[#C084FC]/20 to-[#E8A9B6]/20",
    border: "border-[#C084FC]/30",
  },
  {
    category: "Machine Learning",
    skills: ["TensorFlow", "CNN", "MediaPipe", "TFLite"],
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Firebase"],
    color: "from-[#0B1020] to-[#E8A9B6]/30",
    border: "border-[#E8A9B6]/30",
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
    color: "from-gray-500/20 to-zinc-500/20",
    border: "border-gray-500/30",
  }
];

// Interactive 3D Card Component
const SkillCard = ({ group, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="relative w-full h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateY, rotateX, transformStyle: "preserve-3d" }}
        className={`w-full h-full glass-card p-8 rounded-3xl relative group transition-all duration-300 border ${group.border} bg-[#050816]/50 backdrop-blur-md`}
      >
        <div 
          style={{ transform: "translateZ(-20px)" }}
          className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
        ></div>
        
        <h3 
          style={{ transform: "translateZ(30px)" }}
          className="text-2xl font-heading font-semibold mb-6 text-[#F5F5F5] relative z-10 flex items-center gap-2"
        >
          <span className={`w-3 h-3 rounded-full bg-gradient-to-br ${group.color.replace('/20', '').replace('/30', '')} animate-pulse`}></span>
          {group.category}
        </h3>
        
        <div 
          style={{ transform: "translateZ(40px)" }}
          className="flex flex-wrap gap-3 relative z-10"
        >
          {group.skills.map((skill, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-2 text-sm bg-black/60 border border-[#9CA3AF]/30 rounded-full text-[#9CA3AF] hover:text-[#F5F5F5] hover:border-[#F4B6C2] hover:bg-[#F4B6C2]/10 transition-colors shadow-lg cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>

        {/* Glow effect tracking mouse */}
        <motion.div 
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-50 transition-opacity rounded-3xl blur-[50px] pointer-events-none mix-blend-screen"
          style={{
            background: `radial-gradient(circle at ${useTransform(x, [-0.5, 0.5], [0, 100])}% ${useTransform(y, [-0.5, 0.5], [0, 100])}%, #E8A9B6 0%, transparent 60%)`
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <section id="skills" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      {/* Background Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-surface-border opacity-20 animate-[spin_60s_linear_infinite]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-surface-border opacity-20 animate-[spin_40s_linear_infinite_reverse]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/20 opacity-30 animate-[spin_20s_linear_infinite]"></div>

      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Skill <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Universe</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {skillsData.map((group, index) => (
            <SkillCard key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
