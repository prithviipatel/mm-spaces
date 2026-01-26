import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Main glow effect */}
      <motion.div
        className="fixed w-80 h-80 rounded-full pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle, rgba(91, 62, 49, 0.3) 0%, rgba(61, 59, 58, 0.2) 40%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      
      {/* Inner core - much less visible */}
      <motion.div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-30"
        style={{
          background: 'radial-gradient(circle, rgba(91, 62, 49, 0.2) 0%, rgba(91, 62, 49, 0.1) 50%, transparent 100%)',
        }}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      />
      
      {/* Sparkle particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 rounded-full pointer-events-none z-30"
          style={{
            background: 'rgba(91, 62, 49, 0.8)',
          }}
          animate={{
            x: mousePosition.x - 4 + (i - 1) * 20,
            y: mousePosition.y - 4 + (i - 1) * 20,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </>
  );
};

export default MouseFollower;
