import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, CheckCircle, XCircle, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          ...formData
        })
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-4">
            Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A9B6] to-[#C084FC] text-glow">Connection</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-8 rounded-3xl relative overflow-hidden group">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <h3 className="text-3xl font-heading font-bold mb-6">Let's build something extraordinary together.</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed">
                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>

              <div className="space-y-4">
                <a href="mailto:nidadhavolunandhini@gmail.com" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 font-mono">Email</div>
                    <div className="font-medium">nidadhavolunandhini@gmail.com</div>
                  </div>
                </a>
                
                <a href="https://github.com/NidadavoluNandini" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 font-mono">GitHub</div>
                    <div className="font-medium">NidadavoluNandini</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/nandini-nidadavolu/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                    <FaLinkedin size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 font-mono">LinkedIn</div>
                    <div className="font-medium">nandini-nidadavolu</div>
                  </div>
                </a>

                <a href="https://www.instagram.com/nidadavolunandini/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 glass rounded-2xl hover:bg-white/5 transition-colors group/link">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/link:bg-accent group-hover/link:text-white transition-colors">
                    <FaInstagram size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-foreground/50 font-mono">Instagram</div>
                    <div className="font-medium">nidadavolunandini</div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6 relative overflow-hidden group">
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#C084FC] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-foreground/70 font-mono ml-2">Name</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-black/40 border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-foreground/70 font-mono ml-2">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black/40 border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/70 font-mono ml-2">Subject</label>
                <input required type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full bg-black/40 border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-foreground/70 font-mono ml-2">Message</label>
                <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-black/40 border border-surface-border rounded-xl px-4 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none custom-scrollbar" placeholder="Tell me about your project..."></textarea>
              </div>

              <button disabled={status === 'loading'} type="submit" className="w-full py-4 bg-accent text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-accent/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                {status === 'idle' && <><Send size={18} /> Send Message</>}
                {status === 'loading' && <><Loader2 size={18} className="animate-spin" /> Transmitting...</>}
                {status === 'success' && <><CheckCircle size={18} className="text-green-300" /> Transmission Successful</>}
                {status === 'error' && <><XCircle size={18} className="text-red-300" /> Transmission Failed</>}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
