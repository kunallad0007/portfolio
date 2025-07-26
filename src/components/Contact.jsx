import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 py-16 bg-white dark:bg-black text-black dark:text-white scroll-mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">
          📞 Contact Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8 text-sm sm:text-base">
          Feel free to reach out for collaborations or freelance work!
        </p>
        <form className="space-y-5">
          <motion.input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-violet-400"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-violet-400"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500 dark:focus:ring-violet-400"
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-semibold transition hover:scale-105 hover:shadow-md"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
