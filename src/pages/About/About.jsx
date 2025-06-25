import React from "react";
import { Header, Footer, CoffeeChat, Websites, ServicesSection } from "../../Components";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      {" "}
      <div className="hero-section-wrapper">
        <Header />
        <section className="container">
          <div className="content">
            <Websites />
          </div>
        </section>
      </div>
      <main className="about">
        <section className="services">
          <div className="container">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Services
            </motion.h2>
            <ServicesSection />
            <div className="services__grid">
              {/* {services.map((service, index) => (
                <motion.div
                  className="service-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="service-card__icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </motion.div>
              ))} */}
            </div>
          </div>
        </section>
      </main>
      <div className="hero-section-footer">
        <CoffeeChat />
        <Footer />
      </div>
    </div>
  );
}

export default About;
