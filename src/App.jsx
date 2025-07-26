import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion"; // 👈 Import this

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-white dark:bg-black text-black dark:text-white scroll-smooth"
    >
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center px-4 scroll-mt-24">
        <Hero />
      </section>

      <About />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default App;
