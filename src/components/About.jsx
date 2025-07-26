import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-6 py-12 bg-gray-100 dark:bg-gray-900 text-black dark:text-white scroll-mt-24"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-12">
        {/* IMAGE SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="/about-section-image.svg"
            alt="Illustrated Nature"
            className="w-full max-w-sm md:max-w-md"
          />
        </motion.div>

        {/* STORY SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center md:text-left">
            👨‍💻 About Me
          </h2>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            My name is <strong>Kunal Lad</strong>, and I’m not just a web
            developer — I’m a father, a husband, and a dreamer who’s hustling
            every single night to change his life through code.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            After completing my Bachelor’s in Computer Applications, I got
            married early and had responsibilities on my shoulders before I
            could even step into the tech world. With no financial backup, I
            joined the BPO industry, working night shifts just to keep things
            afloat for my family.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            I live in a hostel, away from my wife and son, and every line of
            code I write is a step closer to the life I want to give them — a
            life full of stability, abundance, and pride.
          </p>
          <p className="text-base sm:text-lg leading-relaxed font-semibold text-gray-800 dark:text-gray-300 text-center md:text-left">
            I'm not here to do "just projects", I’m here to build your dream —
            with the same intensity I’m building mine. Let’s create something
            meaningful together. 💼✨
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
