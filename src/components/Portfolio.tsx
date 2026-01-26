import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'residential', name: 'Residential' },
    { id: 'commercial', name: 'Commercial' }
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Living Room",
      category: "residential",
      description: "Contemporary design with neutral tones and natural materials",
      image: "/images/portfolio/residential-1.jpg"
    },
    {
      id: 2,
      title: "Office Space Redesign",
      category: "commercial",
      description: "Productive workspace with ergonomic design solutions",
      image: "/images/portfolio/commercial-2.jpg"
    },
    {
      id: 3,
      title: "Modern Kitchen Design",
      category: "residential",
      description: "Elegant kitchen with modern design elements and functionality",
      image: "/images/portfolio/kitchen-design.jpg"
    },
    {
      id: 4,
      title: "Master Bedroom Suite",
      category: "residential",
      description: "Luxurious retreat with custom furniture and lighting",
      image: "/images/portfolio/master-bedroom.jpg"
    },
    {
      id: 5,
      title: "Retail Store Design",
      category: "commercial",
      description: "Engaging customer experience with strategic layout",
      image: "/images/portfolio/commercial-1.jpg"
    },
    {
      id: 6,
      title: "Biophilic Bedroom Retreat",
      category: "residential",
      description: "Tranquil sanctuary integrating natural elements, living plants, and organic textures to promote wellness and connection with nature",
      image: "/images/portfolio/biophilic-bedroom-new.jpg"
    },
    {
      id: 7,
      title: "Commercial Place Interior",
      category: "commercial",
      description: "Professional commercial space with modern interior design and optimal functionality",
      image: "/images/portfolio/commercial-3.jpg"
    },
    {
      id: 8,
      title: "Luxury Kitchen Transformation",
      category: "residential",
      description: "Sophisticated culinary space featuring premium materials, smart storage solutions, and seamless workflow design for the modern home chef",
      image: "/images/portfolio/kitchen-design-2.jpg"
    },
    {
      id: 9,
      title: "Modern Living Room TV Unit",
      category: "residential",
      description: "Stylish entertainment center with integrated storage, ambient lighting, and seamless design that complements contemporary living spaces",
      image: "/images/portfolio/living-room-tv-unit.jpg"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-[#f5f5f0] to-white relative z-10">
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
            <span className="gradient-text">Our Portfolio</span>
          </h2>
          <p className="text-[#3d3b3a] text-base sm:text-lg max-w-2xl mx-auto brand-elegant px-4">
            Explore our latest interior design projects and transformations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-[#5b3e31] to-[#3d3b3a] text-white'
                  : 'bg-white border border-[#3d3b3a] text-[#3d3b3a] hover:bg-[#5b3e31] hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Project Image */}
                <div className="relative h-64 bg-gradient-to-br from-[#f5f5f0] to-[#e8e8e8] flex items-center justify-center overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2 brand-heading">{project.title}</h3>
                      <p className="text-sm opacity-90 brand-elegant">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <motion.div
                className="mt-4 text-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-[#3d3b3a] brand-heading">{project.title}</h3>
                <p className="text-sm text-[#3d3b3a]/70 mt-1 brand-elegant">{project.category}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

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
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#5b3e31] to-[#3d3b3a] text-[#ffffff] rounded-full font-semibold hover:shadow-lg hover:shadow-[#5b3e31]/25 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
