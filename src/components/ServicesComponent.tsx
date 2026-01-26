import React from 'react';
import { motion } from 'framer-motion';

const ServicesComponent: React.FC = () => {
  const services = [
    {
      title: "3D Rendering & Visualization",
      description: "Bringing your vision to life with stunning 3D renderings and immersive visualizations",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
            <polyline points="9 12 2 9 12 5 22 9 15 12" />
            <line x1="2" y1="17" x2="12" y2="13" />
            <line x1="12" y1="13" x2="22" y2="17" />
            <polyline points="2 9 2 17 12 21 22 17 22 9" />
          </svg>
        </div>
      )
    },
    {
      title: "Color Consultation",
      description: "Expert color schemes that enhance mood and aesthetics",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20" />
            <path d="M12 2c1.05 0 2.05.16 3 .46" />
            <path d="M12 2c4.18 0 7.8 2.58 9.24 6.24" />
            <path d="M12 2c1.47 0 2.85.38 4.06 1.05" />
          </svg>
        </div>
      )
    },
    {
      title: "Interior Design Consultation",
      description: "Expert guidance and personalized design solutions tailored to your space and style",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M9 11H3v2h6v-2zm0-4H3v2h6V7zm0 8H3v2h6v-2zm12-8h-6v2h6V7zm0 4h-6v2h6v-2zm0 4h-6v2h6v-2z" />
          </svg>
        </div>
      )
    },
    {
      title: "Commercial Interior Design",
      description: "Create inspiring work environments that boost productivity",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </div>
      )
    },
    {
      title: "Residential Interior Design",
      description: "Transform your living spaces into personalized sanctuaries",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="3 9 12 2 21 9" />
            <path d="M12 22V12" />
            <path d="M8 22h8" />
          </svg>
        </div>
      )
    },
    {
      title: "Furniture Layouts & Detailing",
      description: "Optimized furniture arrangements with detailed specifications and layouts",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <rect x="4" y="10" width="16" height="10" rx="2" />
            <path d="M8 14h.01" />
            <path d="M16 14h.01" />
            <path d="M12 18h.01" />
          </svg>
        </div>
      )
    },
    {
      title: "Lighting Design",
      description: "Strategic lighting solutions to transform any space",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M12 2v7" />
            <path d="M12 22v-7" />
            <path d="M5 12h7" />
            <path d="M19 12h-7" />
            <circle cx="12" cy="12" r="3" />
            <path d="M20.4 14.4L16 10l4.4 4.4z" />
            <path d="M3.6 14.4L8 10l-4.4 4.4z" />
            <path d="M20.4 9.6L16 14l4.4-4.4z" />
            <path d="M3.6 9.6L8 14l-4.4-4.4z" />
          </svg>
        </div>
      )
    },
    {
      title: "Working Drawings",
      description: "Professional technical drawings and documentation for implementation",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        </div>
      )
    },
    {
      title: "Concept & Moodboard Development",
      description: "Creative concept development and moodboards to establish your design direction",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <rect x="7" y="7" width="10" height="6" rx="1" />
            <circle cx="12" cy="17" r="2" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-[#f5f5f0] relative z-10">
      {/* Cute design elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 opacity-10"
          animate={{
            rotate: [0, 360],
            y: [0, -20, 0],
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
          className="absolute top-20 right-20 opacity-10"
          animate={{
            rotate: [0, -360],
            y: [0, 20, 0],
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
          className="absolute bottom-20 left-20 opacity-10"
          animate={{
            rotate: [0, 180],
            x: [0, 30, 0],
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
        
        <motion.div
          className="absolute bottom-10 right-10 opacity-10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            y: [0, -10, 0],
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

      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-[#3d3b3a] text-base sm:text-lg max-w-2xl mx-auto brand-elegant px-4">
            Comprehensive interior design solutions from concept to completion
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl p-8 card-hover group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 69, 19, 0.3)"
              }}
            >
              <motion.div
                className="mb-4"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 text-[#3d3b3a] group-hover:text-[#5b3e31] transition-colors duration-300 brand-heading">
                {service.title}
              </h3>
              
              <p className="text-[#3d3b3a] leading-relaxed brand-body">
                {service.description}
              </p>

              <motion.div
                className="mt-6 h-0.5 bg-gradient-to-r from-transparent via-[#5b3e31] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#5b3e31] to-[#3d3b3a] text-[#ffffff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#5b3e31]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesComponent;
