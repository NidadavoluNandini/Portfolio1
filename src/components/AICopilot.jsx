import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';

export default function AICopilot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! I'm Nandini's AI Assistant. How can I help you explore her universe?" }
  ]);
  const [input, setInput] = useState('');

  const quickPrompts = [
    "Tell me about Nandini",
    "Show projects",
    "Skills overview",
    "Contact details"
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    setInput('');

    setTimeout(() => {
      let response = "I'm still learning about that. Try asking about Nandini's skills, projects, or contact info!";
      const lowerText = text.toLowerCase();
      
      if (lowerText.includes('nandini') || lowerText.includes('about')) {
        response = "Nandini is a BTech CSE student at RGUKT IIIT Ongole with a 9.2 CGPA. She's passionate about AI, Machine Learning, CNNs, Android, Flutter, and Full Stack Development!";
      } else if (lowerText.includes('project')) {
        response = "Nandini has 5 major projects including SignCrypt (AI Assistive), Eventz (Full-Stack), Smart Mess Monitoring (Android), SanChara (Flutter), and TARS Chat (AI SaaS).";
      } else if (lowerText.includes('skill')) {
        response = "Her skills span Frontend (React, Tailwind), Backend (Node, NestJS, FastAPI), Mobile (Flutter, Android), and Machine Learning (TensorFlow, CNN, MediaPipe).";
      } else if (lowerText.includes('contact')) {
        response = "You can reach Nandini at nidadhavolunandhini@gmail.com, or check out her LinkedIn and GitHub!";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 1000);
  };

  return (
    <>
      {/* Bot Icon Trigger at Bottom Right */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#E8A9B6] to-[#C084FC] rounded-full flex items-center justify-center shadow-[0_0_20px_var(--accent-glow)] hover:scale-110 transition-transform group"
          >
            <Bot size={24} className="text-white group-hover:animate-pulse" />
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-background"></div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Sidebar Interface */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 sm:w-[24rem] glass bg-background/95 border-l border-surface-border shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-4 border-b border-surface-border flex items-center justify-between bg-black/20 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center border border-accent/50">
                    <Bot size={18} className="text-accent animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-sm">Nandini's AI Assistant</h3>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-[10px] uppercase tracking-wider text-foreground/50 font-mono">Online</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/50 hover:text-white hover:bg-white/5 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
                {messages.map((msg, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    key={i} 
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-gradient-to-br from-[#E8A9B6] to-[#C084FC] text-[#F5F5F5] rounded-tr-sm shadow-lg shadow-[#E8A9B6]/20' 
                        : 'glass bg-black/40 text-foreground/90 rounded-tl-sm border border-surface-border'
                    }`}>
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="shrink-0 bg-black/20 border-t border-surface-border">
                {/* Quick Prompts */}
                <div className="p-3 flex flex-col gap-2">
                  <div className="text-[10px] uppercase font-mono tracking-widest text-foreground/40 px-1 flex items-center gap-1">
                    <Sparkles size={10} className="text-accent" /> Suggested
                  </div>
                  <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                    {quickPrompts.map((prompt, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(prompt)}
                        className="px-3 py-1.5 text-xs rounded-full border border-surface-border bg-white/5 hover:bg-accent/20 hover:border-accent/50 hover:text-white text-foreground/70 transition-all shrink-0"
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 pt-0 flex gap-3">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                    placeholder="Message AI Copilot..."
                    className="flex-1 bg-black/40 border border-surface-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-foreground/30"
                  />
                  <button 
                    onClick={() => handleSend(input)}
                    className="p-3 bg-gradient-to-br from-[#E8A9B6] to-[#C084FC] rounded-xl text-white hover:opacity-90 transition-opacity shadow-lg shadow-[#E8A9B6]/20 flex items-center justify-center group"
                  >
                    <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
