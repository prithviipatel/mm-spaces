import React from 'react';
import { motion } from 'framer-motion';

const DesignPhilosophy: React.FC = () => {
  const philosophy = [
    {
      title: "Harmony in Space",
      description: "Creating balanced environments where every element works together to create a cohesive, peaceful atmosphere",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v20M2 12h20" />
          </svg>
        </div>
      )
    },
    {
      title: "Function Meets Beauty",
      description: "Designing spaces that are not only visually stunning but also practical and livable for everyday life",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
          </svg>
        </div>
      )
    },
    {
      title: "Personalized Expression",
      description: "Every space should tell the story of its inhabitants, reflecting their personality and lifestyle",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      )
    },
    {
      title: "Timeless Elegance",
      description: "Creating designs that transcend trends and remain beautiful and relevant for years to come",
      icon: (
        <div className="design-element">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>
      )
    }
  ];

  const principles = [
    {
      title: "Natural Materials",
      description: "Prioritizing sustainable, high-quality materials that age beautifully and connect spaces to nature"
    },
    {
      title: "Light & Space",
      description: "Maximizing natural light and creating an illusion of space to make rooms feel larger and more inviting"
    },
    {
      title: "Color Psychology",
      description: "Using color strategically to influence mood, create depth, and establish the desired atmosphere"
    },
    {
      title: "Attention to Detail",
      description: "Every element, from the largest furniture piece to the smallest accessory, is thoughtfully considered"
    },
    {
      title: "Client Collaboration",
      description: "Working closely with clients to understand their vision and bring their dreams to life"
    },
    {
      title: "Innovation & Tradition",
      description: "Balancing contemporary design solutions with timeless principles for enduring appeal"
    }
  ];

  return (
    <section id="philosophy" className="py-20 bg-gradient-to-b from-white to-[#f5f5f0] relative z-10">
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
            <span className="gradient-text">Our Design Philosophy</span>
          </h2>
          <p className="text-[#3d3b3a] text-base sm:text-lg max-w-2xl mx-auto brand-elegant px-4">
            Creating spaces that inspire, comfort, and transform the way you live
          </p>
        </motion.div>

        {/* Core Philosophy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {philosophy.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-6 md:p-8 text-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(91, 62, 49, 0.3)"
              }}
            >
              <motion.div
                className="mb-4 text-[#5b3e31]"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.div>
              
              <h3 className="text-lg md:text-xl font-semibold mb-3 text-[#3d3b3a] group-hover:text-[#5b3e31] transition-colors duration-300 brand-heading">
                {item.title}
              </h3>
              
              <p className="text-sm md:text-base text-[#3d3b3a] leading-relaxed brand-body">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Design Principles */}
        <motion.div
          className="glass-effect rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#3d3b3a] brand-heading">
            Our Core Principles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#5b3e31] to-[#3d3b3a] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-[#3d3b3a] brand-heading">
                    {principle.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#3d3b3a] leading-relaxed brand-body">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#contact"
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-[#5b3e31] to-[#3d3b3a] text-[#ffffff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#5b3e31]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Create Your Dream Space
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignPhilosophy;
