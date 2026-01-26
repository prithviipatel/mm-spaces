import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Hero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Ensure we're at the top of the page when loading completes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#5b3e31] to-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.5, ease: "easeInOut" }
            }}
          >
            {/* Left Half of "M" */}
            <motion.div
              className="absolute left-0 w-1/2 h-full flex items-center justify-center overflow-hidden"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ 
                x: "-100%",
                transition: { duration: 1.2, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <h1 className="text-[40vw] font-bold leading-none" style={{ 
                  fontSize: '40vw', 
                  lineHeight: '0.8',
                  color: '#5b3e31'
                }}>
                  M
                </h1>
                {/* Mask to show only left half */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent" style={{ 
                  clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                  background: 'inherit'
                }} />
              </div>
            </motion.div>
            
            {/* Right Half of "M" */}
            <motion.div
              className="absolute right-0 w-1/2 h-full flex items-center justify-center overflow-hidden"
              initial={{ x: 0 }}
              animate={{ x: 0 }}
              exit={{ 
                x: "100%",
                transition: { duration: 1.2, ease: "easeInOut" }
              }}
            >
              <div className="relative">
                <h1 className="text-[40vw] font-bold leading-none" style={{ 
                  fontSize: '40vw', 
                  lineHeight: '0.8',
                  color: '#5b3e31'
                }}>
                  M
                </h1>
                {/* Mask to show only right half */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent" style={{ 
                  clipPath: 'polygon(50% 0, 100% 0, 100% 100%, 50% 100%)',
                  background: 'inherit'
                }} />
              </div>
            </motion.div>
            
            {/* Center Line (Split Effect) */}
            <motion.div
              className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/20"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                height: ["0%", "100%", "100%", "0%"],
                transition: { 
                  duration: 2.5,
                  ease: "easeInOut"
                }
              }}
              exit={{ opacity: 0 }}
            />
            
            {/* Brand Text */}
            <motion.div
              className="relative z-10 text-center"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                transition: { 
                  duration: 1, 
                  delay: 0.5,
                  ease: "easeOut"
                }
              }}
              exit={{ 
                opacity: 0,
                scale: 0.5,
                transition: { duration: 0.5 }
              }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white brand-title tracking-wider">
                MM SPACES
              </h1>
              <motion.div
                className="w-24 h-1 bg-white mt-4 mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              <motion.p
                className="text-white/80 mt-4 text-lg brand-elegant"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
              >
                Interior Design
              </motion.p>
            </motion.div>
            
            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-white/30 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Hero Content */}
      <motion.section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#f5f5f0] to-white"
        initial={{ opacity: 0, y: "100vh" }}
        animate={{ 
          opacity: isLoading ? 0 : 1,
          y: isLoading ? "100vh" : 0,
          transition: { 
            duration: 1.2, 
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: isLoading ? 0.8 : 0
          }
        }}
      >
        {/* Simple Background */}
        <div className="absolute inset-0">
          {/* Single floating gradient */}
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-[#5b3e31]/5 to-[#3d3b3a]/5 blur-3xl"
            style={{
              left: '20%',
              top: '30%',
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="absolute w-64 h-64 rounded-full bg-gradient-to-r from-[#5b3e31]/3 to-[#3d3b3a]/3 blur-3xl"
            style={{
              right: '15%',
              bottom: '25%',
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Floating design tools - cute elements */}
          <motion.div
            className="absolute top-20 left-10 opacity-10"
            animate={{
              rotate: [0, 360],
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="design-element">
              <svg viewBox="0 0 24 24">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3m10 10l-3 3" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute top-40 right-20 opacity-10"
            animate={{
              rotate: [0, -360],
              y: [0, 30, 0],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="design-element">
              <svg viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
                <line x1="15" y1="3" x2="15" y2="21" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
            </div>
          </motion.div>
          
          <motion.div
            className="absolute bottom-40 left-20 opacity-10"
            animate={{
              rotate: [0, 180],
              x: [0, 50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="design-element">
              <svg viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </motion.div>
          
          {/* Small cute element on right side */}
          <motion.div
            className="absolute bottom-20 right-10 opacity-10"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="design-element">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ 
              scale: 1,
              opacity: 1,
              transition: { 
                duration: 0.8, 
                delay: isLoading ? 1.5 : 0.7,
                ease: "easeOut"
              }
            }}
            className="mb-8"
          >
            <Logo size="large" />
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 brand-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 1, 
                delay: isLoading ? 1.8 : 1,
                ease: "easeOut"
              }
            }}
          >
            <motion.span 
              className="gradient-text inline-block"
              whileHover={{ 
                scale: 1.08,
                textShadow: "0 0 40px rgba(91, 62, 49, 0.6)",
                transition: { duration: 0.4 }
              }}
            >
              {Array.from("MM Spaces").map((letter, index) => (
                <motion.span
                  key={index}
                  whileHover={{
                    scale: 1.15,
                    color: "#5b3e31",
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-[#3d3b3a] brand-elegant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: isLoading ? 2.2 : 1.4,
                ease: "easeOut"
              }
            }}
          >
            Interior Design
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-[#3d3b3a] mb-12 max-w-2xl mx-auto brand-body px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: isLoading ? 2.6 : 1.8,
                ease: "easeOut"
              }
            }}
          >
            Design that inspire
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: isLoading ? 3 : 2.2,
                ease: "easeOut"
              }
            }}
          >
            <motion.a
              href="#services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#5b3e31] to-[#000000] text-[#ffffff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#5b3e31]/25 transition-all duration-300"
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: "0 10px 30px rgba(91, 62, 49, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Work
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 border border-[#3d3b3a] text-[#3d3b3a] rounded-full font-semibold hover:bg-[#5b3e31] hover:text-[#ffffff] transition-all duration-300"
              whileHover={{ 
                scale: 1.08,
                y: -3,
                boxShadow: "0 10px 30px rgba(91, 62, 49, 0.4)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              y: [0, 10, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: isLoading ? 4 : 3.2
            }}
          >
            <svg className="w-6 h-6 text-[#3d3b3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
