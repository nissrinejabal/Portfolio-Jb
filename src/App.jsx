import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { TiArrowUp } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import "./App.scss";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      setShowScroll(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <AnimatePresence mode="wait">
        {showScroll && (
          <motion.button
            onClick={scrollToTop}
            className="scroll-to-top"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <TiArrowUp size={24} />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
