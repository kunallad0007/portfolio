// src/components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-4 bg-white dark:bg-black text-black dark:text-white scroll-mt-24"
    >
      <div className="w-full max-w-xl text-center">
        <h2 className="text-4xl font-bold mb-6">📞 Contact Me</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md bg-white dark:bg-black border border-gray-300 dark:border-gray-600 text-black dark:text-white"
          />
          <button
            type="submit"
            className="bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-md font-semibold transition hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
