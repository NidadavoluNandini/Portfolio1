import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cloud, Cpu, Code, Building } from 'lucide-react';

const certs = [
  { name: "IBM Generative AI", issuer: "IBM", icon: <Cpu />, color: "from-[#C084FC] to-[#F4B6C2]" },
  { name: "IBM Cybersecurity Basics", issuer: "IBM", icon: <ShieldCheck />, color: "from-[#F4B6C2] to-[#E8A9B6]" },
  { name: "Cloud Computing Elite + Gold", issuer: "NPTEL", icon: <Cloud />, color: "from-yellow-400 to-orange-500" },
  { name: "AI Search Methods Elite + Silver", issuer: "NPTEL", icon: <Cpu />, color: "from-gray-300 to-gray-500" },
  { name: "Java Certification", issuer: "HackerRank", icon: <Code />, color: "from-green-400 to-emerald-600" },
  { name: "Deloitte Certifications", issuer: "Deloitte", icon: <Building />, color: "from-green-600 to-green-800" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group perspective-1000"
            >
              <div className="glass-card p-6 rounded-3xl h-full flex items-center gap-4 transform-gpu hover:rotate-y-6 hover:-rotate-x-6 transition-transform duration-500 hover:border-accent/40 overflow-hidden cursor-pointer">
                
                {/* Holographic Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out skew-x-12"></div>
                
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} p-[1px] shrink-0`}>
                  <div className="w-full h-full bg-[#050816]/80 rounded-[15px] flex items-center justify-center text-[#F5F5F5] backdrop-blur-sm">
                    {cert.icon}
                  </div>
                </div>
                
                <div className="flex-1 relative z-10">
                  <h3 className="font-heading font-semibold text-lg leading-tight mb-1 group-hover:text-accent transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-foreground/60 font-mono tracking-wider">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
