import React from "react";
import "./CoffeeChat.scss";
import { FiCoffee } from "react-icons/fi";
import { motion } from "framer-motion";

const CoffeeChat = () => {
  return (
    <section className="coffee-chat">
      <div className="container">
        <motion.div
          className="coffee-chat__content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="coffee-chat__title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Work Together 
          </motion.h2>
          <motion.p
            className="coffee-chat__text"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Interested in working together? We should queue up a time to chat.
          </motion.p>
          <motion.a
            href="https://www.linkedin.com/in/nissrine-jabal-b2a711192/"
            target="_blank"
            className="coffee-chat__button"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <FiCoffee /> Let's do this
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoffeeChat;
