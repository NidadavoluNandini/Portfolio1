import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Moon, Sun, Volume2, VolumeX, Menu, X, Home, User, Code2, FolderGit2, Briefcase, Award, Mail } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home', icon: <Home size={18} /> },
  { name: 'About', href: '#about', icon: <User size={18} /> },
  { name: 'Skills', href: '#skills', icon: <Code2 size={18} /> },
  { name: 'Projects', href: '#projects', icon: <FolderGit2 size={18} /> },
  { name: 'Experience', href: '#experience', icon: <Briefcase size={18} /> },
  { name: 'Certifications', href: '#certifications', icon: <Award size={18} /> },
  { name: 'Contact', href: '#contact', icon: <Mail size={18} /> },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <>
      {/* Desktop Left Sidebar */}
      <motion.nav
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="hidden md:flex flex-col fixed top-0 left-0 bottom-0 w-24 z-50 glass border-r border-surface-border py-8 items-center justify-between"
      >
        {/* Logo */}
        <a href="#home" className="text-2xl font-heading font-bold text-glow tracking-tighter hover:scale-110 transition-transform">
          NN<span className="text-accent">.</span>
        </a>

        {/* Links */}
        <div className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative p-3 rounded-full text-foreground/60 hover:text-accent hover:bg-white/5 transition-colors group"
            >
              {link.icon}
              <span className="absolute left-full ml-4 px-3 py-1 bg-black/80 glass border border-surface-border text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium tracking-wide">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center space-y-4">
          <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-3 rounded-full hover:bg-white/5 transition-colors text-foreground/60 hover:text-accent">
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
          <button onClick={toggleTheme} className="p-3 rounded-full hover:bg-white/5 transition-colors text-foreground/60 hover:text-accent">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 glass border-b border-surface-border p-4 flex justify-between items-center">
        <a href="#home" className="text-xl font-heading font-bold text-glow tracking-tighter">
          NN<span className="text-accent">.</span>
        </a>
        <button onClick={() => setMobileMenuOpen(true)} className="p-2 text-foreground">
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[60] glass bg-background/95 flex flex-col items-center justify-center space-y-6"
          >
            <button 
              onClick={() => setMobileMenuOpen(false)} 
              className="absolute top-6 right-6 p-2 text-foreground/60 hover:text-white"
            >
              <X size={32} />
            </button>

            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-heading font-medium flex items-center gap-4 hover:text-accent transition-colors"
              >
                <span className="text-accent">{link.icon}</span>
                {link.name}
              </motion.a>
            ))}
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex space-x-6 mt-8"
            >
              <button onClick={() => setSoundEnabled(!soundEnabled)} className="p-4 rounded-full glass-card hover:text-accent">
                {soundEnabled ? <Volume2 size={24} /> : <VolumeX size={24} />}
              </button>
              <button onClick={toggleTheme} className="p-4 rounded-full glass-card hover:text-accent">
                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
