import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white scroll-smooth">
      <Navbar />

      <section id="home" className="min-h-screen flex items-center justify-center px-4 scroll-mt-24">
        <Hero />
      </section>

      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
