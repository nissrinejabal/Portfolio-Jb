import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import {
  TiSocialGithubCircular,
  TiSocialLinkedinCircular,
  TiMail,
  TiHeartFullOutline,
  TiArrowUp,
} from "react-icons/ti";
import { motion } from "framer-motion";
import logo2 from "../../assets/pictures/Header/logo2.png";

const Footer = () => {  return (
    <footer className="footer">
      <div className="footer__background">
        <div className="footer__grid"></div>
        <div className="footer__overlay"></div>
      </div>

      <div className="container">
        <motion.div 
          className="footer__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer__main">
            <div className="footer__left">
              <Link to="/" className="footer__logo-link">
                <motion.img 
                  src={logo2} 
                  alt="Logo" 
                  className="footer__logo"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
              </Link>
              <motion.p 
                className="footer__tagline"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Turning Vision Into Reality With Code And Design.
              </motion.p>
            </div>

            <nav className="footer__middle">
              <h3 className="footer__title">Quick Links</h3>
              <motion.ul 
                className="footer__links-list"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6,
                  delay: 0.3,
                  staggerChildren: 0.1 
                }}
              >
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/About">About</Link>
                </motion.li>
                
                <motion.li whileHover={{ x: 5 }}>
                  <Link to="/Portfolio">Portfolio</Link>
                </motion.li>
              </motion.ul>
            </nav>

            <div className="footer__right">
              <h3 className="footer__title">Let's Connect</h3>
              <motion.div 
                className="footer__social-links"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.a
                  href="https://github.com/nissrinejabal"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TiSocialGithubCircular />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/nissrine-jabal-b2a711192/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TiSocialLinkedinCircular />
                </motion.a>
                <motion.a
                  href="mailto:nissrinejabalpro@gmail.com"
                  aria-label="Send Email"
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <TiMail />
                </motion.a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="footer__bottom"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="footer__separator"></div>
            <p className="footer__copyright">
              <span>© {new Date().getFullYear()}</span>
              <span className="footer__heart-wrapper">
                Built with <TiHeartFullOutline className="footer__heart" /> by
              </span>
              <span className="footer__name">Nissrine Jabal</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
