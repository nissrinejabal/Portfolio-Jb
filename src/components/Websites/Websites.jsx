import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Websites.scss';

const websites = [
  {
    title: 'Autan Voyages',
    image: '/src/assets/pictures/websites/autanvoyages.png',
    description: 'Travel agency website with modern design',
    link: '#',
    tags: ['React', 'SCSS']
  },
  {
    title: 'Captain',
    image: '/src/assets/pictures/websites/capitain.png',
    description: 'Maritime solutions platform',
    link: '#',
    tags: ['React', 'TailwindCSS']
  },
  {
    title: 'MC Amine',
    image: '/src/assets/pictures/websites/Mc-amine.png',
    description: 'Personal portfolio website',
    link: '#',
    tags: ['React', 'Framer Motion']
  },
  {
    title: 'O\'Crusty',
    image: '/src/assets/pictures/websites/Ocrusty.png',
    description: 'Restaurant website',
    link: '#',
    tags: ['React', 'SCSS']
  },
  {
    title: 'Rêve en Couleur',
    image: '/src/assets/pictures/websites/reve-encouleur..png',
    description: 'Art gallery showcase',
    link: '#',
    tags: ['React', 'Animation']
  },
  {
    title: 'Yvonne Moreau',
    image: '/src/assets/pictures/websites/yvonnemoreau-magnetiseuse.png',
    description: 'Professional services website',
    link: '#',
    tags: ['React', 'SCSS']
  }
];

const Websites = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="websites-section">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        My Websites
      </motion.h2>
      <div className="websites-grid">
        {websites.map((website, index) => (
          <motion.div
            key={website.title}
            className="website-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <div className="website-image-container">
              <img src={website.image} alt={website.title} />
              <motion.div 
                className="website-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{website.title}</h3>
                <p>{website.description}</p>
                <div className="tags">
                  {website.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <a href={website.link} className="visit-btn" target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Websites;
