import React, { useEffect, useState } from 'react'
import Lenis from 'lenis'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import AICopilot from './components/AICopilot'
import Background3D from './components/Background3D'
import CustomCursor from './components/CustomCursor'

function App() {
  const [loading, setLoading] = useState(true)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    // Artificial loading for cinematic effect
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (loading) return

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [loading])

  return (
    <div className="relative w-full min-h-screen text-[#F5F5F5] bg-[#050816] selection:bg-[#F4B6C2] selection:text-[#050816]">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center"
          >
            <div className="w-24 h-24 mb-8 relative">
              <div className="absolute inset-0 border-t-2 border-accent rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-r-2 border-[#C084FC] rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
              <div className="absolute inset-4 border-b-2 border-[#F4B6C2] rounded-full animate-spin"></div>
            </div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-heading font-light tracking-[0.3em] uppercase text-foreground/50"
            >
              Initializing Universe
            </motion.h1>
            <div className="mt-8 w-64 h-[1px] bg-surface-border overflow-hidden relative">
              <motion.div 
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, ease: "linear", repeat: Infinity }}
                className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-accent to-transparent"
              ></motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <CustomCursor />
          <Background3D />
          
          {/* Ambient Lighting Background */}
          <div className="fixed inset-0 z-0 bg-grid-pattern pointer-events-none opacity-[0.03] dark:opacity-20"></div>
          <div className="fixed inset-0 z-0 pointer-events-none mix-blend-screen">
            <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accent blur-[150px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#C084FC] blur-[150px] opacity-10"></div>
          </div>

          <div className="md:pl-24 relative z-20">
            <Navbar />
          </div>
          
          <main className="relative z-10 flex flex-col md:pl-24 transition-all duration-300">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>

          <AICopilot isDesktop={isDesktop} />

          <footer className="relative z-10 py-8 text-center text-foreground/50 border-t border-surface-border mt-20 md:pl-24">
            <p className="font-mono text-sm">
              &copy; {new Date().getFullYear()} Nandini Nidadavolu.
            </p>
          </footer>
        </>
      )}
    </div>
  )
}

export default App
