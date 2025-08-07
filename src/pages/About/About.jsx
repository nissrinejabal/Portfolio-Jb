import React from "react";
import Lottie from "lottie-react";
import reactAnimation from "../../assets/annimation/costume-animation.json";
import "./About.scss";
import {
  Header,
  Footer,
  CoffeeChat,
  Websites,
  ServicesSection,
} from "../../Components";
import { motion } from "framer-motion";
function About() {
  return (
    <div>
      <div className="hero-section-wrapper">
        <Header />
        <section className="container padding-block-700">
          <div className="about-me">
            <motion.section
              className="about-me__content"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="about-me__left">
                <Lottie
                  animationData={reactAnimation}
                  loop={true}
                  className="about-me__lottie"
                />
              </div>
              <div className="about-me__right">
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="about-me__title"
                >
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="about-me__desc"
                >
                  Thanks for stopping by. Read below to learn more about myself
                  and my background.
                  <br />
                  <span style={{ color: "#6366f1", fontWeight: 600 }}>
                    Design-driven, code-focused.
                  </span>
                  <br />
                  <span style={{ color: "#3730a3", fontWeight: 500 }}>
                    I love bringing ideas to life through code, animation, and
                    creativity.
                  </span>
                </motion.p>
          
              </div>
            </motion.section>
            <Websites />
          </div>
        </section>
      </div>
      <main className="about">
        <section className="services">
          <div className="container">
            <ServicesSection />

            <div className="services__grid"></div>
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
