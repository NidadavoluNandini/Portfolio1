import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Play, Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const titles = [
  "Full Stack Developer",
  "Mobile Application Developer"
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      setDisplayText(prev => prev.slice(0, -1));
      if (displayText === '') {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
      timeout = setTimeout(() => { }, 50);
    } else {
      setDisplayText(currentTitle.slice(0, displayText.length + 1));
      if (displayText === currentTitle) {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timeout = setTimeout(() => { }, 100);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden perspective-1000">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex flex-col items-start space-y-6"
        >
          <div className="flex items-center space-x-4 mb-2">
            <span className="text-lg tracking-wider text-foreground/70 font-light">Hello, I'm</span>
            <div className="w-16 h-px bg-surface-border"></div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-bold font-heading leading-[1.1] tracking-tighter text-[#F5F5F5]">
            NANDINI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] via-[#F4B6C2] to-[#C084FC] text-glow inline-block py-2">
              NIDADAVOLU
            </span>
          </h1>

          <div className="pt-2">
            <p className="text-sm md:text-base font-mono tracking-[0.3em] uppercase text-[#F4B6C2] mb-4 h-6">
              {displayText}<span className="animate-pulse">_</span>
            </p>
            <p className="text-lg text-[#9CA3AF] max-w-lg leading-relaxed font-light">
              I build intelligent, scalable and impactful digital experiences that solve real-world problems.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 rounded-full overflow-hidden flex items-center gap-3 border border-accent/30 box-glow bg-black/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10 text-sm tracking-widest uppercase font-medium">Explore My Work</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-4 h-4 text-accent" />
              </div>
            </motion.a>



            <motion.a
              href="/resume.pdf"
              download="Nandini_Nidadavolu_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-4 text-sm tracking-widest uppercase font-medium text-[#9CA3AF] hover:text-[#F5F5F5] transition-colors"
            >
              <div className="w-12 h-12 rounded-full border border-surface-border flex items-center justify-center group-hover:border-[#E8A9B6]/50 group-hover:bg-white/5 transition-all">
                <Download className="w-4 h-4 text-[#E8A9B6] group-hover:text-white" />
              </div>
              Resume
            </motion.a>
          </div>

          <div className="flex items-center gap-4 pt-8">
            <div className="glass-card rounded-full flex items-center px-2 py-2 gap-2 bg-black/40 border-surface-border/50">
              <SocialLink href="https://github.com/NidadavoluNandini" icon={<FaGithub size={18} />} />
              <SocialLink href="https://www.linkedin.com/in/nidadavolu-nandini-bba9a02a4" icon={<FaLinkedin size={18} />} />
              <SocialLink href="https://www.instagram.com/nidadavolunandini/" icon={<FaInstagram size={18} />} />
              <SocialLink href="mailto:nidadavolunandini@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>
        </motion.div>

        {/* Right Content - Circular Orbital Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end items-center h-full min-h-[500px] w-full"
        >
          {/* Orbital Container positioned to the right */}
          <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96 lg:translate-x-12">
            {/* Outer Orbit Rings */}
            <div className="absolute w-[180%] aspect-square rounded-full border border-[#F4B6C2]/20 animate-[spin_40s_linear_infinite] pointer-events-none"></div>
            <div className="absolute w-[130%] aspect-square rounded-full border border-surface-border animate-[spin_25s_linear_infinite_reverse] pointer-events-none"></div>

            {/* Orbital Planets / Orbs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[130%] h-[130%] pointer-events-none"
            >
              <div className="absolute top-0 left-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-white/20 to-transparent backdrop-blur-md border border-white/10 shadow-[0_0_20px_#F4B6C2] -translate-x-1/2 -translate-y-1/2"></div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[180%] h-[180%] pointer-events-none"
            >
              <div className="absolute bottom-1/4 right-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#E8A9B6]/20 to-transparent backdrop-blur-md border border-[#E8A9B6]/20 shadow-[0_0_30px_#C084FC] translate-x-1/2"></div>
            </motion.div>

            {/* Main Circular Profile Cutout */}
            <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-br from-[#F4B6C2] via-[#C084FC]/30 to-transparent box-glow group">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#050816] relative flex items-center justify-center">

                {/* Background gradient behind image */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-[#E8A9B6]/10 z-10"></div>

                <div className="absolute inset-0 bg-[url('/profile.png')] bg-cover bg-center mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"></div>

                {/* Central glowing core behind the image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full bg-[#C084FC]/20 blur-[60px]"></div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}

function SocialLink({ href, icon }) {
  return (
    <motion.a
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full text-foreground/60 hover:text-white hover:bg-white/10 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
