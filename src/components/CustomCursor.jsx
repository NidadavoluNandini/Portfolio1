import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  // Hide the default cursor globally, but only on desktop to avoid issues on mobile
  useEffect(() => {
    if (window.innerWidth > 1024) {
      document.body.style.cursor = 'none';
      const interactiveElements = document.querySelectorAll('a, button, input, textarea');
      interactiveElements.forEach(el => {
        el.style.cursor = 'none';
      });
    }
  }, []);

  // Don't render custom cursor on mobile
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      {/* Main tiny dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      
      {/* Trailing larger glowing ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(244,182,194,0.1)' : 'transparent',
          borderColor: isHovering ? 'rgba(244,182,194,0.8)' : 'rgba(244,182,194,0.5)'
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
      >
        {/* Extra glow effect */}
        <div className="absolute inset-0 bg-accent rounded-full blur-[10px] opacity-20"></div>
      </motion.div>
    </>
  );
}
