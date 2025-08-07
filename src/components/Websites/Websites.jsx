import React, { useState } from "react";
import { motion } from "framer-motion";
import { MyWebsites } from "./MyWebsites";
import "./Websites.scss";

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
        {MyWebsites.map((website, index) => (
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
                <a
                  href={website.link}
                  className="visit-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
