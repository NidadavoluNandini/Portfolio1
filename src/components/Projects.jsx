import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: "SignCrypt",
    subtitle: "AI Assistive Communication Platform",
    description: "Built a multi-modal intelligent communication platform integrating sign language recognition, machine learning, text-to-speech, Morse gestures, and assistive AI workflows.",
    tech: ["TensorFlow", "CNN", "FastAPI", "MediaPipe", "TFLite", "React.js"],
    link: "https://signcrypt.netlify.app/",
    github: "https://github.com/NidadavoluNandini/Signcrypt_Frontend",
    category: "AI • ML • Accessibility",
    color: "from-[#C084FC] to-[#E8A9B6]",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Eventz",
    subtitle: "Full-Stack Event Management Platform",
    description: "Developed a full-stack event management and ticket booking platform with authentication, role-based access, payment integration, and scalable backend architecture.",
    tech: ["React.js", "TypeScript", "NestJS", "MongoDB", "Razorpay"],
    link: "https://eventz-zeta.vercel.app/",
    github: "https://github.com/NidadavoluNandini/Eventz",
    category: "Full Stack • SaaS",
    color: "from-[#0B1020] to-[#E8A9B6]",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Smart Mess",
    subtitle: "Campus Monitoring System",
    description: "Built a campus mess monitoring and complaint management application with role-based access, complaint tracking, and real-time updates for students and administrators.",
    tech: ["Android Studio", "Java", "Firebase", "Real-Time Database"],
    link: "https://mess-monetering.vercel.app/",
    github: "https://github.com/NidadavoluNandini/MessMonetering",
    category: "Android • Firebase",
    color: "from-[#F4B6C2] to-[#E8A9B6]",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "SanChara",
    subtitle: "Smart Transport Data Collection Platform",
    description: "Developed a real-world mobility survey platform for transport data collection and analytics. Contributed to Flutter mobile app development, GPS-based travel tracking.",
    tech: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Next.js"],
    github: "https://github.com/naptac-sanchara/mobile",
    category: "Flutter • Full Stack",
    color: "from-green-500 to-emerald-500",
    image: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "TARS Chat",
    subtitle: "AI Conversational Platform",
    description: "Developed an AI-powered conversational platform with secure authentication, real-time backend infrastructure, persistent chat storage, and modern AI-inspired UI.",
    tech: ["React.js", "Tailwind CSS", "Convex", "Clerk", "AI APIs"],
    link: "https://tars-chat-three.vercel.app/",
    github: "https://github.com/NidadavoluNandini/Tars-Chat",
    category: "AI • Full Stack",
    color: "from-zinc-400 to-zinc-600",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  }
];

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -20]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale, rotateX }}
      className="sticky top-24 min-h-[70vh] flex items-center justify-center py-10 perspective-1000 transform-gpu"
    >
      <div className={`relative w-full max-w-5xl rounded-[2.5rem] p-[1px] bg-gradient-to-br ${project.color} overflow-hidden group`}>
        <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br from-white/10 to-transparent blur-xl"></div>
        
        <div className="relative h-full glass bg-black/80 rounded-[2.5rem] p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-8 items-center">
          
          {/* Decorative Glow */}
          <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.color} rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-700`}></div>

          {/* Content */}
          <div className="flex-1 z-10">
            <span className="text-sm font-mono tracking-widest text-accent uppercase mb-4 block">
              {project.category}
            </span>
            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-2">
              {project.title}
            </h3>
            <h4 className="text-xl md:text-2xl text-foreground/70 mb-6">
              {project.subtitle}
            </h4>
            <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
                  View Live <ExternalLink size={18} />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 glass-card rounded-full font-medium hover:bg-white/10 transition-colors">
                  Source Code <FaGithub size={18} />
                </a>
              )}
            </div>
          </div>

          {/* Right Visual Representation (Mockup/Image) */}
          <div className="flex-1 w-full relative z-10 perspective-1000">
            <motion.div 
              style={{ y }}
              className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-br ${project.color} p-1 transform-gpu group-hover:rotate-y-12 transition-transform duration-700`}
            >
              <div className="w-full h-full glass bg-black/60 rounded-xl relative overflow-hidden flex items-center justify-center group-hover:bg-black/40 transition-colors">
                 {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 mix-blend-luminosity group-hover:mix-blend-normal" />
                 ) : (
                   <div className="text-white/20 text-9xl font-heading font-bold absolute -bottom-10 -right-10 blur-sm">
                     {index + 1}
                   </div>
                 )}
                 {/* Number Watermark always on top */}
                 <div className="text-white/20 text-8xl font-heading font-bold absolute -bottom-4 -right-4 z-10 pointer-events-none drop-shadow-2xl">
                   0{index + 1}
                 </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="relative min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6 w-full z-10 mb-20 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-heading font-bold mb-4"
        >
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Projects</span>
        </motion.h2>
        <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full mb-8"></div>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Cinematic showcase of intelligent platforms, scalable systems, and assistive technologies.
        </p>
      </div>

      <div className="px-6 flex flex-col space-y-24 pb-32">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
